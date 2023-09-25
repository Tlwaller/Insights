/* Arrat Utils */

import { SnapSelectMenuCustomEvent } from "@snap-mobile/snap-ui/dist/types/components";
import { SnapSelectMenuOption } from "@snap-mobile/snap-ui/dist/types/utils";
import { FormData } from "../components/modals/PreApprovalsModal";

export const compareScalarArrays = (
  a1: number[] | string[] | boolean[] | FormData[],
  a2: number[] | string[] | boolean[] | FormData[]
): boolean => {
  return JSON.stringify(a1) === JSON.stringify(a2);
};

export const selectMenuUpdate = (
  e: SnapSelectMenuCustomEvent<SnapSelectMenuOption[]>
) => {
  return e.detail.filter((program) => program.selected === true)[0].name;
};

export const multiSelectMenuUpdate = (
  e: SnapSelectMenuCustomEvent<SnapSelectMenuOption[]>
) => {
  return e.detail.filter((option) => option.selected === true);
};
