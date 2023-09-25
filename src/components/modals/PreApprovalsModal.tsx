import { useContext, useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "../Tabs";
import { SnapButton, SnapModal, SnapModalFooter } from "../../suit";
import AddContacts from "../modal-tabs/add-contacts/AddContacts";
import {
  SnapInputCustomEvent,
  SnapSelectMenuCustomEvent,
  SnapSelectMenuOption,
} from "@snap-mobile/snap-ui/dist/types/components";
import {
  InsPreApprovedContact,
  Org,
  useInsightsAddPreApprovedContactsMutation,
  useInsightsPreApprovedContactsEmailTestQuery,
  useInsightsPreApprovedContactsLazyQuery,
  usePermissionsQuery,
  useUserQuery,
} from "../../graphql/generated";
import InvitesSentModal from "./InvitesSentModal";
import ImportContacts from "../modal-tabs/import-contacts/ImportContacts";
import * as EmailValidator from "email-validator";
import ConfirmationModal from "./ConfirmationModal";
import OrgSelector from "../OrgSelector";
import { AppContext } from "../../AppGlobalState";
import { getOrgRaiseId } from "../../data-helpers/OrgsDataHelper";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { useNavigate } from "react-router-dom";
import { compareScalarArrays } from "../../utils/ArrayUtils";

interface PreApprovalsModalProps {
  org: Org;
  showModal: boolean;
  onClose: () => void;
  defaultTab?: string;
}

export interface FormData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  activity: string;
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    activity: string;
  };
}

export const defaultFormState: FormData[] = [
  {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    activity: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      activity: "",
    },
  },
];

const PreApprovalsModal: React.FC<PreApprovalsModalProps> = ({
  org,
  showModal,
  onClose,
  defaultTab,
}) => {
  const { dispatch, appState } = useContext(AppContext);
  const { data: user } = usePermissionsQuery();
  const { data: userData } = useUserQuery({
    variables: { userId: user?.me?.id },
  });
  const [addContactsMutation] = useInsightsAddPreApprovedContactsMutation();
  const defaultDesc =
    "Invite group leaders and pre-approve them to fundraise through Snap! Raise.";
  const [desc, setDesc] = useState(defaultDesc);
  const [activeTab, setActiveTab] = useState("add");
  const [showPrompt, setShowPrompt] = useState(false);
  const [upload, setUpload] = useState(false);
  const [tabChangePrompt, setTabChangePrompt] = useState(false);
  const [closePrompt, setClosePrompt] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [forms, setForms] = useState<FormData[]>(defaultFormState);
  const [orgState, setOrgState] = useState(org);
  const [orgSelected, setOrgSelected] = useState(true);

  const [insightsPreApprovedContactsLazyQuery] =
    useInsightsPreApprovedContactsLazyQuery({
      variables: { orgIds: [] },
    });

  const onFormChange =
    (index: number) =>
    (event: SnapInputCustomEvent<any> | SnapSelectMenuCustomEvent<any>) => {
      const name =
        event.type === "snap-select-menu-updated"
          ? "activity"
          : event.detail.target.name;
      let value: string;

      if (event.type === "snap-select-menu-updated") {
        const selectedOptions = event.detail.filter(
          (option: SnapSelectMenuOption) => option.selected
        );
        value =
          selectedOptions.length > 0 ? selectedOptions[0].value : undefined;
      } else {
        value = event.detail.target.value;
      }

      setForms((prevForms) =>
        prevForms.map((form, i) =>
          i === index
            ? {
                ...form,
                [name]: value,
                errors: {
                  ...form.errors,
                  [name]: validateField(index, name, value),
                },
              }
            : form
        )
      );
    };

  const validateField = (index: number, name: string, value: string) => {
    if (name === "email") {
      return EmailValidator.validate(value)
        ? ""
        : "Please enter a valid email address.";
    } else if (name === "firstName") {
      return value === "" ? "Please enter a first name." : "";
    } else if (name === "lastName") {
      return value === "" ? "Please enter a last name." : "";
    } else if (name === "activity") {
      return value === "" || value === undefined
        ? "Please select an activity."
        : "";
    }
    return "";
  };

  const onAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      {
        id: prevForms.length,
        firstName: "",
        lastName: "",
        email: "",
        activity: "",
        errors: {
          firstName: "",
          lastName: "",
          email: "",
          activity: "",
        },
      },
    ]);
  };

  const onDeleteForm = (index: number, length: number) => {
    if (length > 1) {
      setForms((prevForms) => prevForms.filter((_, i) => i !== index));
    } else {
      setForms([
        {
          id: 0,
          firstName: "",
          lastName: "",
          email: "",
          activity: "",
          errors: {
            firstName: "",
            lastName: "",
            email: "",
            activity: "",
          },
        },
      ]);
    }
  };

  const { data: emailChecks } = useInsightsPreApprovedContactsEmailTestQuery({
    variables: { emails: forms.map((form) => form.email), orgId: org.id },
  });

  const validateForm = (index: number) => {
    const form = forms[index];

    if (
      emailChecks?.insightsPreApprovedContactsEmailTest[index]?.status ===
      "taken"
    ) {
      form.errors.email = "Email has been already invited to this organization";
    }

    if (form.firstName === "") {
      form.errors.firstName = "Please enter a first name.";
    }

    if (form.lastName === "") {
      form.errors.lastName = "Please enter a last name.";
    }

    if (form.activity === "" || form.activity === undefined) {
      form.errors.activity = "Please select an activity.";
    }

    const duplicateIndex = forms.findIndex(
      (f, i) =>
        i !== index &&
        f.email.toLowerCase() === form.email.toLowerCase() &&
        f.email.toLowerCase() !== ""
    );

    if (duplicateIndex !== -1) {
      form.errors.email = "Duplicate email addresses.";
    }

    if (!EmailValidator.validate(form.email)) {
      form.errors.email = "Please enter a valid email address.";
    }
  };

  const handleTabChange = (tab: string) => {
    if (!compareScalarArrays(forms, defaultFormState) && !canceled) {
      setTabChangePrompt(true);
    } else {
      setTabChangePrompt(false);
      setActiveTab(tab);
      tab === "import"
        ? setDesc(
            "Import a list of group leaders and pre-approve them to fundraise through Snap! Raise."
          )
        : setDesc(defaultDesc);
      setActiveTab(tab);
      setCanceled(false);
    }
  };

  const navigate = useNavigate();
  const handleFormSubmit = () => {
    forms.forEach((_, index) => {
      validateForm(index);
    });

    const hasErrors = forms.some((form) =>
      Object.values(form.errors).some((error: any) => error !== "")
    );

    if (!hasErrors) {
      const mutationVariables = {
        org: {
          id: orgState.id,
          name: orgState.name,
          modId: orgState.fields._deprecated_mod_id,
          raiseId: orgState.fields._deprecated_raise_id,
          zipcode: orgState.fields.zip_code,
        },
        contacts: forms.map((form) => {
          return {
            activity: form.activity,
            email: form.email.toLowerCase(),
            firstName: form.firstName,
            lastName: form.lastName,
          };
        }),
        approver: {
          email: userData?.user?.email,
          firstName: userData?.user?.firstName,
          id: userData?.user?.id,
          lastName: userData?.user?.lastName,
          phone: userData?.user?.phoneNumber,
        },
        dashboardUrl: window.location.href,
      };

      addContactsMutation({
        variables: mutationVariables,
        refetchQueries: ["InsightsPreApprovedContacts"],
        awaitRefetchQueries: true,
        onQueryUpdated(observableQuery) {
          return observableQuery.refetch({
            variables: { orgIds: [getOrgRaiseId(org)] },
          });
        },
      }).then(async (result) => {
        const errors = result.data?.insightsAddPreApprovedContacts.errors;

        if (errors?.length) {
          console.log(errors);
          setForms((prevForms) => {
            const newForms = [...prevForms];

            if (newForms.length === 1) {
              newForms[0].errors.email =
                "Email has been already invited to this organization.";
            } else {
              errors.forEach((error) => {
                const index = newForms.findIndex(
                  (form) => form.email === error
                );
                if (index !== -1) {
                  newForms[index].errors.email =
                    "Email has been already invited to this organization.";
                }
              });
            }
            return newForms;
          });
        } else {
          const { data } = await insightsPreApprovedContactsLazyQuery({
            variables: { orgIds: [getOrgRaiseId(org)] },
          });

          dispatch({
            type: "UPDATE_PRE_APPROVALS_ORG",
            payload: {
              contacts:
                (data?.insightsPreApprovedContacts as InsPreApprovedContact[]) ||
                [],
              orgId: org.id,
            },
          });

          setShowPrompt(true);
          setUpload(false);
          setActiveTab("add");
          org.type === "District" && setOrgSelected(false);
          org.type === "District" && setOrgState(org);
          navigate("/dashboards/" + org.id + "/preapprovals", {
            state: { showPrompt: true, numForms: forms.length },
          });

          dispatch({
            type: "UPDATE_DASHBOARD_TAB",
            payload: {
              dashboardTab: "Pre-Approvals",
            },
          });
        }
      });
    }
  };

  const [noFormsBlank, setNoFormsBlank] = useState(true);

  useEffect(() => {
    const areAllFormsFilled = forms.some((form) =>
      Object.values(form).some((value) => value === "")
    );
    setNoFormsBlank(areAllFormsFilled);
  }, [forms]);

  const addTabRef = useRef<HTMLButtonElement>(null);
  const importTabRef = useRef<HTMLButtonElement>(null);

  const handlePromptConfirmation = (confirm: boolean) => {
    if (tabChangePrompt) {
      if (confirm) {
        setUpload(false);
        setActiveTab(activeTab === "add" ? "import" : "add");
        setForms(defaultFormState);
      } else {
        activeTab === "add"
          ? setTimeout(() => addTabRef.current?.click(), 2)
          : setTimeout(() => importTabRef.current?.click(), 2);
        setCanceled(true);
      }
      setTabChangePrompt(false);
    } else if (closePrompt) {
      confirm && handleClose();
      setClosePrompt(false);
    }
  };

  const handleClose = () => {
    setClosePrompt(false);
    org.type === "District" && setOrgSelected(false);
    org.type === "District" && setOrgState(org);
    onFormChange(0);
    setShowPrompt(false);
    addTabRef.current?.click();
    setActiveTab("add");
    setForms(defaultFormState);
    onClose();
  };

  useEffect(() => {
    if (org.type === "District") {
      setOrgSelected(false);
    }
  }, [org]);

  useEffect(() => {
    activeTab === "add"
      ? addTabRef.current?.click()
      : importTabRef.current?.click();
  }, [activeTab]);

  useEffect(() => {
    defaultTab === "add"
      ? addTabRef.current?.click()
      : importTabRef.current?.click();
  }, [defaultTab]);

  if (showPrompt === true) {
    return <InvitesSentModal onClose={handleClose} numForms={forms.length} />;
  } else
    return (
      <SnapModal
        title="Send Pre-Approval Invites"
        className={!showModal || showPrompt ? "hidden" : ""}
        onSnap-modal-close={() =>
          compareScalarArrays(forms, defaultFormState)
            ? handleClose()
            : setClosePrompt(true)
        }
      >
        <Tabs
          className="px-6 border-b border-gray-200 -mt-9 md:mt-0"
          onTabChange={(tab) => handleTabChange(tab)}
        >
          <Tab id="add" name="Add Contacts" tabRef={addTabRef} />
          <Tab id="import" name="Import Contact List" tabRef={importTabRef} />
        </Tabs>
        <div className="px-6 py-4">
          <h4 className="text-lg font-semibold text-gray-800 pb-1">
            Pre-Approvals
          </h4>
          <p>{desc}</p>
        </div>
        {org.type === "District" && (
          <div
            style={{
              height: orgSelected ? "" : "calc(80vh - 243px)",
            }}
          >
            <OrgSelector
              setOrgState={setOrgState}
              setOrgSelected={setOrgSelected}
            />
          </div>
        )}
        <ImportContacts
          className={activeTab === "import" && orgSelected ? "" : "hidden"}
          forms={forms}
          setForms={setForms}
          upload={upload}
          setUpload={setUpload}
        />
        <AddContacts
          className={
            (activeTab === "add" || upload) && orgSelected ? "" : "hidden"
          }
          forms={forms}
          onFormChange={onFormChange}
          onAddForm={onAddForm}
          onDeleteForm={onDeleteForm}
          onClose={onClose}
        />
        <SnapModalFooter
          slot="footer"
          className="flex justify-center md:justify-end items-center p-4 border-t border-gray-200 sticky -bottom-1 bg-white z-20 "
        >
          <SnapButton
            size="md"
            variant="tertiary"
            onClick={() =>
              compareScalarArrays(forms, defaultFormState)
                ? handleClose()
                : setClosePrompt(true)
            }
          >
            <text
              style={{
                width: isScreenSizeBelow(appState.windowSize.screen, "md")
                  ? "35vw"
                  : "100%",
              }}
            >
              Cancel
            </text>
          </SnapButton>
          <SnapButton
            disabled={!orgSelected || noFormsBlank}
            size="md"
            variant="primary"
            className="ml-4"
            onClick={handleFormSubmit}
          >
            <text
              style={{
                width: isScreenSizeBelow(appState.windowSize.screen, "md")
                  ? "35vw"
                  : "100%",
              }}
            >
              Send Invites
            </text>
          </SnapButton>
        </SnapModalFooter>
        <ConfirmationModal
          className={tabChangePrompt || closePrompt ? "" : "hidden"}
          onClose={handlePromptConfirmation}
          promptType={tabChangePrompt ? "tabChange" : "close"}
        />
      </SnapModal>
    );
};

export default PreApprovalsModal;
