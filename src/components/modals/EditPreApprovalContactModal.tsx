import { useContext, useEffect, useRef, useState } from "react";
import {
  SnapAlert,
  SnapAlertAction,
  SnapAlertTitle,
  SnapButton,
  SnapInput,
  SnapLink,
  SnapModal,
  SnapModalFooter,
  SnapSelectMenu,
} from "../../suit";
import { AppContext } from "../../AppGlobalState";
import {
  AlertType,
  SnapSelectMenuOption,
} from "@snap-mobile/snap-ui/dist/types/utils";
import { isScreenSizeEqualOrAbove } from "../../utils/UIUtils";
import { PreApprovedContactsActivityTypes } from "../../constants/preApprovedContactsActivityTypes";

interface EditPreApprovalContactProps {
  userObj: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    activity: string;
  };
  onClose: () => void;
  sendUserObject: (userObject: any, emailChanged: boolean) => void;
  hasError: {
    isError: boolean;
    errMessage: string;
  };
}

export interface ErrorCheckingInputs {
  firstName: string;
  lastName: string;
  email: string;
  activity: string;
}

const EditPreApprovalContactModal: React.FC<EditPreApprovalContactProps> = ({
  userObj,
  onClose,
  sendUserObject,
  hasError,
}) => {
  const { appState } = useContext(AppContext);
  const validator = require("email-validator");
  const modalRef = useRef<HTMLSnapModalElement>(null);
  const [updatedFirstName, setUpdatedFirstName] = useState<string>(
    userObj.first_name
  );
  const [updatedLastName, setUpdatedLastName] = useState<string>(
    userObj.last_name
  );
  const [updatedEmail, setUpdatedEmail] = useState<string>(userObj.email);
  const [updatedActivity, setUpdatedActivity] = useState<string>(
    userObj.activity
  );
  const actOptions: SnapSelectMenuOption[] = Object.values(
    PreApprovedContactsActivityTypes
  ).map((activity) => ({
    value: activity.value,
    name: activity.name,
    selected: activity.value === updatedActivity ? true : false,
  }));
  const ref = useRef<HTMLSnapInputElement>(null);
  const [inputErrors, setInputErrors] = useState<ErrorCheckingInputs>({
    firstName: "",
    lastName: "",
    email: "",
    activity: "",
  });
  const [emailChanged, setEmailChanged] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertType, setAlertType] = useState<AlertType>("danger");
  const hideHeader = () => {
    if (ref.current && appState.windowSize.screen === "sm") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateInputs = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      activity: "",
    };

    if (updatedFirstName.trim() === "" || updatedFirstName.length > 30) {
      errors.firstName = updatedFirstName.length > 30 ? "First Name Character Limit is 30." :"Please enter a first name.";
    }

    if (updatedLastName.trim() === "" || updatedLastName.length > 30) {
      errors.lastName = updatedLastName.length > 30 ? "Last Name Character Limit is 30." :"Please enter a last name.";
    }

    if (!validator.validate(updatedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (updatedActivity === "" || updatedActivity === undefined) {
      errors.activity = "Please select an activity.";
    }

    return errors;
  };

  const SaveInputs = () => {
    const errors = validateInputs();
    const noErrors = Object.values(errors).every(
      (err) => err === null || err === ""
    );
    const updatedUser = {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      email: updatedEmail,
      activity: updatedActivity,
    };
    setInputErrors(errors);
    if (noErrors) {
      sendUserObject(updatedUser, emailChanged);
    }
  };

  const errorAlert = (err: string) => {
    setAlertTitle(err);
    setAlertType("warning");
    setTimeout(() => setShowAlert(true),1000)
    setTimeout(() => setShowAlert(false), 3000);
  };
  
  useEffect(() => {
    if (updatedEmail !== userObj.email) {
      setEmailChanged(true);
    } else {
      setEmailChanged(false);
    }
  }, [updatedEmail]); //eslint-disable-line
  
  useEffect(() => {
    if(hasError.isError){
      errorAlert(hasError.errMessage);
    }
  }, [hasError]);
  
  return (
    <>
      <SnapModal ref={modalRef} disableOverflow={true} title="Edit Contacts" onSnap-modal-close={onClose}>
        <SnapAlert
          style={{ zIndex: 10 }}
          type={alertType}
          border={true}
          close={true}
          className={`${
            showAlert ? "" : "hidden"
          } absolute xs:w-12/12 xs:px-2 md:w-10/12 md:mt-5 max-h-1`}
        >
          <SnapAlertTitle>{alertTitle}</SnapAlertTitle>
          <SnapAlertAction slot="start">
            <SnapLink
              text="Close"
              target="_self"
              size="sm"
              variant={alertType === "danger" ? "danger" : "warning"}
              onClick={() => setShowAlert(false)}
            ></SnapLink>
          </SnapAlertAction>
        </SnapAlert>
        <div className="grid grid-cols-12 pb-4 px-4 text-left md:mt-10 mb-6">
          <div className="col-span-12 md:col-span-6 md:pr-5">
            <SnapInput
              _id="firstName_edit"
              value={userObj.first_name ? userObj.first_name : ""}
              error={!!inputErrors.firstName}
              error-icon={!!inputErrors.firstName}
              helpText={inputErrors.firstName}
              label="First Name"
              onInput={(e) => {
                setUpdatedFirstName((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-6 xs:mt-3 md:mt-0">
            <SnapInput
              _id="lastName_edit"
              value={userObj.last_name ? userObj.last_name : ""}
              error={!!inputErrors.lastName}
              error-icon={!!inputErrors.lastName}
              helpText={inputErrors.lastName}
              label="Last Name"
              onInput={(e) => {
                setUpdatedLastName((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-6 mt-4 md:pr-5">
            <SnapInput
              _id="email_edit"
              value={userObj.email ? userObj.email : ""}
              error={!!inputErrors.email}
              error-icon={!!inputErrors.email}
              helpText={inputErrors.email}
              label="Email"
              onInput={(e) => {
                setUpdatedEmail((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-6 mt-4 ">
            <SnapSelectMenu
              id="activity-select"
              modalTitle="Activity"
              search
              error={!!inputErrors.activity}
              error-icon={!!inputErrors.activity}
              helpText={inputErrors.activity}
              onClick={hideHeader}
              label="Activity"
              selectMenuOptions={actOptions}
              onSnap-select-menu-updated={(e) => {
                setUpdatedActivity(
                  e.detail.filter((act) => act.selected === true)[0]
                    .value as string
                );
              }}
            />
          </div>
        </div>
        <SnapModalFooter slot="footer">
          <div className="grid grid-cols-12 md:flex md:justify-end py-4 pr-4">
            <div className="xs:col-span-6 xs:px-2  md:pr-5">
              <SnapButton
                fullWidth
                size={
                  isScreenSizeEqualOrAbove(appState.windowSize.screen, "md")
                    ? "md"
                    : "xxl"
                }
                variant="tertiary"
                onClick={onClose}
              >
                Cancel
              </SnapButton>
            </div>
            <div className="xs:col-span-6 xs:px-2 md:pr-2">
              <SnapButton
                fullWidth
                className="w-100"
                size={
                  isScreenSizeEqualOrAbove(appState.windowSize.screen, "md")
                    ? "md"
                    : "xxl"
                }
                variant="primary"
                onClick={SaveInputs}
              >
                {emailChanged ? "Save & Resend" : "Save"}
              </SnapButton>
            </div>
          </div>
        </SnapModalFooter>
      </SnapModal>
    </>
  );
};

export default EditPreApprovalContactModal;
