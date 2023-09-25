import { PreApprovedContactsActivityTypes } from "../constants/preApprovedContactsActivityTypes";

export const findMatchingActivity = (input: string): string => {
  for (const activityKey of Object.keys(PreApprovedContactsActivityTypes)) {
    const activity =
      PreApprovedContactsActivityTypes[
        activityKey as keyof typeof PreApprovedContactsActivityTypes
      ];
    if (input.toLowerCase() === activity.name.toLowerCase()) {
      return activity.value;
    }
  }

  const normalizedInput = input.toLowerCase().replace(/[/\-_ ]/g, "");
  for (const activityKey of Object.keys(PreApprovedContactsActivityTypes)) {
    const activity =
      PreApprovedContactsActivityTypes[
        activityKey as keyof typeof PreApprovedContactsActivityTypes
      ];
    const normalizedActivity = activity.name
      .toLowerCase()
      .replace(/[/\-_ ]/g, "");

    if (normalizedInput === normalizedActivity) {
      return activity.value;
    }
  }

  return "";
};

export const validateContact = (contact: any): boolean => {
  const defaultValues = {
    firstName: "First Name",
    lastName: "Last Name",
    activity: "Activity",
    email: "Email",
  };

  for (const key in contact) {
    if (!contact.hasOwnProperty(key)) continue;

    if (contact[key] === undefined || contact[key] === "") continue;

    if (contact[key] === defaultValues[key as keyof typeof defaultValues])
      return false;
  }

  return true;
};
