import { ICON_TYPES } from "@snap-mobile/snap-ui/dist/types/utils";
export interface List {
  title: string;
  icon?: ICON_TYPES;
  color?: string;
  list?: string[];
  name: string;
  text: string;
  value: string;
}

export const itemList: List[] = [
  {
    name: "resend",
    text: "Resend",
    value: "resend",
    title: "Resend",
    icon: "mail-solid",
    color: "#E2E8F0",
  },
  {
    name: "edit",
    text: "Edit",
    value: "edit",
    title: "Edit",
    icon: "pencil-alt-solid",
    color: "#E2E8F0",
  },
  {
    name: "delete",
    text: "Delete",
    value: "delete",
    title: "Delete",
    icon: "trash-solid",
    color: "#E2E8F0",
  },
];

export const sortList: List[] = [
  {
    name: "First Name: A-Z",
    text: "First Name: A-Z",
    value: "fNameAZ",
    title: "First Name: A-Z",
  },
  {
    name: "First Name: Z-A",
    text: "First Name: Z-A",
    value: "fNameZA",
    title: "First Name: Z-A",
  },
  {
    name: "Last Name: A-Z",
    text: "Last Name: A-Z",
    value: "lNameAZ",
    title: "Last Name: A-Z",
  },
  {
    name: "Last Name: Z-A",
    text: "Last Name: Z-A",
    value: "lNameZA",
    title: "Last Name: Z-A",
  },
  {
    name: "Status: A-Z",
    text: "Status: A-Z",
    value: "statusAZ",
    title: "Status: A-Z",
  },
  {
    name: "Status: Z-A",
    text: "Status: Z-A",
    value: "statusZ-A",
    title: "Status: Z-A",
  },
];
