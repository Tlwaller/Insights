import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppGlobalState";
import {
  InsPreApprovedContact,
  Org,
  useInsightsDeletePreApprovedContactMutation,
  useInsightsEditPreApprovedContactMutation,
  useInsightsResendInvitePreApprovedContactMutation,
  usePermissionsQuery,
  useUserQuery,
} from "../../graphql/generated";
import { LoadingData } from "../loading-empty-state/LoadingData";
import PreApprovalDistrict from "./preApprovalDistrict";
import PreApprovalNonDistrict from "./preApprovalNonDistrict";
import { dateMMDDYY } from "../../utils/RenderDataUtils";
import EditPreApprovalContactModal from "../modals/EditPreApprovalContactModal";
import {
  deletePreApprovedContact,
  isPreApprovalInviteUndeliverable,
  updatePreApprovalContact,
  updateReSendStatus,
} from "../../data-helpers/PreapprovalsDataHelper";
import {
  SnapAlert,
  SnapAlertAction,
  SnapAlertTitle,
  SnapLink,
} from "../../suit";
import { AlertType } from "@snap-mobile/snap-ui/dist/types/utils";
import DeletePreApprovalContactModal from "../modals/DeletePreApprovalContactModal";

export interface PreApprovalItemInterface {
  firstName: string;
  lastName: string;
  email: string;
  activity: string;
  sentOnDate: Date | null;
  sentOn: string;
  status: string;
  callback: (type: string) => void;
  dropDownId?: string;
}

interface PreApprovalsSwitchProps {
  districtSchools: Org[];
  isDistrict: boolean;
}

export const orgPreApprovalsToTableData = (
  contacts: InsPreApprovedContact[],
  actionCallback: (type: string, contactId: number) => void
): PreApprovalItemInterface[] => {
  const tableData =
    contacts.map((contact) => {
      const date = new Date(contact.invite_sent_at);
      return {
        firstName: contact.first_name,
        lastName: contact.last_name,
        email: contact.email,
        activity: contact.activity,
        sentOnDate: contact.invite_sent_at ? date : null,
        sentOn: contact.invite_sent_at ? dateMMDDYY(date) : "",
        status: isPreApprovalInviteUndeliverable(contact.invite_status as string)? 'undeliverable' : contact.invite_status,
        callback: (type: string) => {
          actionCallback(type, contact.id as number);
        },
      } as PreApprovalItemInterface;
    }) || [];
  const distantPast = new Date(0);
  //sorted by sentOn desc
  return tableData.sort((a, b) => {
    let dateA = a.sentOnDate ? a.sentOnDate : distantPast;
    let dateB = b.sentOnDate ? b.sentOnDate : distantPast;
    return dateB.getTime() - dateA.getTime();
  });
};

const PreApprovalsSwitch: React.FC<PreApprovalsSwitchProps> = ({
  districtSchools,
  isDistrict,
}) => {
  const { appState, dispatch } = useContext(AppContext);
  const { data: user } = usePermissionsQuery();
  const { data: userData } = useUserQuery({
    variables: { userId: user?.me?.id },
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertType, setAlertType] = useState<AlertType>("success");
  const [showDistrict, setShowDistrict] = useState<boolean>(isDistrict);
  const [resendContactMutation] =
    useInsightsResendInvitePreApprovedContactMutation();
  const [deleteContactMutation] = useInsightsDeletePreApprovedContactMutation();
  const [editContactMutation] = useInsightsEditPreApprovedContactMutation();

  const [contactId, setContactId] = useState<number>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editUserObj, setEditUserObj] = useState<any>();
  const [editError, setEditError] = useState({
    isError: false,
    errMessage: "",
  });

  useEffect(() => {
    setShowDistrict(isDistrict);
  }, [isDistrict]);

  const handleResendAction = (contactId: number) => {
    const params = {
      contactId: contactId,
      senderName: userData?.user?.firstName + " " + userData?.user?.lastName,
    };
    resendContactMutation({
      variables: params,
    }).then((result) => {
      const errors = result.data?.insightsResendInvitePreApprovedContact.errors;
      if (errors?.length) {
        setShowAlert(true);
        setAlertTitle(
          `Pre-approval Contact has not been sent. Please try again.`
        );
        setAlertType("danger");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        const resendUserObj = appState.orgPreApprovals.find(
          (contact) => contact.id === contactId
        );
        setShowAlert(true);
        setAlertTitle(
          `Pre-approval invite has been re-sent to ${resendUserObj?.first_name} ${resendUserObj?.last_name}.`
        );
        setAlertType("success");
        dispatch({
          type: "UPDATE_PREAPPROVALS_OPTIMISTIC",
          payload: {
            preApprovedContacts: updateReSendStatus(
              appState.orgPreApprovals,
              contactId
            ),
          },
        });
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    });
  };

  const handleDeleteAction = () => {
    const params = {
      contactId: contactId,
      userId: userData?.user?.id || "",
    };
    deleteContactMutation({
      variables: params,
    }).then((result) => {
      const errors = result.data?.insightsDeletePreApprovedContact.errors;
      if (errors?.length) {
        setShowDeleteModal(false);
        setShowAlert(true);
        setAlertTitle(
          `Pre-approval Contact has NOT been Deleted. Please try again.`
        );
        setAlertType("danger");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        dispatch({
          type: "UPDATE_PREAPPROVALS_OPTIMISTIC",
          payload: {
            preApprovedContacts: deletePreApprovedContact(
              appState.orgPreApprovals,
              contactId
            ),
          },
        });
        setShowAlert(true);
        setAlertTitle(`Pre-approval Contact has been Deleted Successfully.`);
        setAlertType("success");
        setShowDeleteModal(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    });
  };

  const handleEditAction = (
    updatedUser: any,
    emailTouched: boolean
  ) => {
    const mutationVariables = {
      contactId: contactId,
      orgId: appState.preApprovalsOrgId,
      updatedContact: updatedUser,
      senderName: userData?.user?.firstName + " " + userData?.user?.lastName,
    };
    editContactMutation({
      variables: mutationVariables,
    }).then((result) => {
      const error = result.data?.insightsEditPreApprovedContact.error;
      if (error?.length) {
        setEditError({ isError: true, errMessage: error as string });
      } else {
        dispatch({
          type: "UPDATE_PREAPPROVALS_OPTIMISTIC",
          payload: {
            preApprovedContacts: updatePreApprovalContact(
              appState.orgPreApprovals,
              updatedUser,
              contactId,
              emailTouched
            ),
          },
        });
        setShowAlert(true);
        setAlertTitle(
          emailTouched
            ? `Pre-approval invite has been re-sent to ${updatedUser.firstName} ${updatedUser.lastName}.`
            : `${updatedUser.firstName} ${updatedUser.lastName} has been updated.`
        );
        setAlertType("success");
        setShowEditModal(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    });
  };

  const handleAction = (type: string, contactId: number) => {
    switch (type) {
      case "resend":
        handleResendAction(contactId);
        break;
      case "edit":
        setContactId(contactId);
        setEditError({ isError: false, errMessage: "" });
        setEditUserObj(
          appState.orgPreApprovals.find((contact) => contact.id === contactId)
        );
        setShowEditModal(true);
        break;
      case "delete":
        setContactId(contactId);
        setShowDeleteModal(true);
        break;
      default:
        break;
    }
  };

  if (appState.preApprovalsLoading) {
    return <LoadingData className="h-screen" />;
  } else
    return (
      <>
        <div className="grid grid-cols-12 mb-3">
          <div className={`col-span-12`}>
            {showAlert ? (
              <SnapAlert
                style={{ zIndex: 100 }}
                type={alertType}
                border={true}
                close={true}
                className="opacity-100 absolute xs:px-2 xs:w-12/12 md:w-10/12 -mt-24"
              >
                <SnapAlertTitle>{alertTitle}</SnapAlertTitle>
                <SnapAlertAction slot="start">
                  <SnapLink
                    text="Close"
                    target="_self"
                    size="sm"
                    variant={alertType === "danger" ? "danger" : "success"}
                    onClick={() => setShowAlert(!showAlert)}
                  ></SnapLink>
                </SnapAlertAction>
              </SnapAlert>
            ) : null}
            {showDistrict ? (
              <PreApprovalDistrict
                groupedApprovalContacts={appState.districtPreApprovals}
                districtSchools={districtSchools}
                district={showDistrict}
              />
            ) : (
              <PreApprovalNonDistrict
                approvalContacts={orgPreApprovalsToTableData(
                  appState.orgPreApprovals,
                  handleAction
                )}
                district={showDistrict}
              />
            )}
            {showEditModal ? (
              <EditPreApprovalContactModal
                userObj={editUserObj}
                sendUserObject={handleEditAction}
                onClose={() => setShowEditModal(!showEditModal)}
                hasError={editError}
              />
            ) : null}
            {showDeleteModal ? (
              <DeletePreApprovalContactModal
                onDelete={handleDeleteAction}
                onClose={() => setShowDeleteModal(!showDeleteModal)}
              />
            ) : null}
          </div>
        </div>
      </>
    );
};

export default PreApprovalsSwitch;
