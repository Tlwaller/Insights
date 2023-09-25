import React, { useEffect, useState } from "react";
import { SnapIcon, SnapInput, SnapLink, SnapSelectMenu } from "../../../suit";
import {
  SnapInputCustomEvent,
  SnapSelectMenuCustomEvent,
  SnapSelectMenuOption,
} from "@snap-mobile/snap-ui/dist/types/components";
import { PreApprovedContactsActivityTypes } from "../../../constants/preApprovedContactsActivityTypes";
import { FormData } from "../../modals/PreApprovalsModal";

interface FormProps {
  key: number;
  className: string;
  formData: FormData;
  onChange: (
    event: SnapInputCustomEvent<any> | SnapSelectMenuCustomEvent<any>
  ) => void;
  onDelete: () => void;
  forms: FormData[];
}

const ContactForm: React.FC<FormProps> = ({
  className,
  formData,
  onChange,
  onDelete,
  forms,
}) => {
  let { firstName, lastName, email, activity, errors } = formData;
  const [activities, setActivities] = useState<SnapSelectMenuOption[]>(
    Object.values(PreApprovedContactsActivityTypes).map((activity) => {
      return { name: activity.name, value: activity.value, selected: false };
    })
  );

  const defaultActivity = activities.find(
    (option) => option.value === activity
  );

  const handleDelete = () => {
    firstName = "";
    lastName = "";
    email = "";
    activity = "";
    setActivities(
      [...activities].map((activity) => ({ ...activity, selected: false }))
    );
    onDelete();
  };

  const handleMenuUpdate = (e: any) => {
    setActivities(e.detail);
    onChange(e);
  };

  useEffect(() => {
    if (activity === "" && forms.length === 1) {
      handleDelete();
    }
  }, [activity]); //eslint-disable-line

  return (
    <div className={className + " py-4 px-6"}>
      <div className="w-full flex flex-row justify-end">
        <SnapIcon icon="trash-solid" color="red" className="pr-1" />
        <SnapLink variant="danger" size="sm" onClick={handleDelete}>
          Delete Contact
        </SnapLink>
      </div>
      <form className="grid md:grid-cols-2 md:gap-8 gap-4">
        <SnapInput
          error={!!errors.firstName}
          error-icon={!!errors.firstName}
          helpText={errors.firstName}
          _id="input-first-name"
          name="firstName"
          value={firstName}
          onSnap-input-change={onChange}
          label="First Name"
        />
        <SnapInput
          error={!!errors.lastName}
          error-icon={!!errors.lastName}
          helpText={errors.lastName}
          _id="input-last-name"
          name="lastName"
          value={lastName}
          onSnap-input-change={onChange}
          label="Last Name"
        />
        <SnapInput
          error={!!errors.email}
          error-icon={!!errors.email}
          helpText={errors.email}
          _id="input-email"
          name="email"
          value={email}
          onSnap-input-change={onChange}
          label="Email"
        />
        <SnapSelectMenu
          //relative  uncomment on dropdown update
          error={!!errors.activity}
          helpText={errors.activity}
          id="input-activity"
          modalTitle="Activity Type"
          selectMenuOptions={activities}
          onSnap-select-menu-updated={(e) => handleMenuUpdate(e)}
          label="Activity Type"
          placeholder={defaultActivity?.name}
          search
        />
      </form>
    </div>
  );
};

export default ContactForm;
