import { useContext } from "react";
import {
  getAllSchoolsAffiliates,
  getOrgById,
} from "../data-helpers/OrgsDataHelper";
import { SnapDropdown, SnapIcon } from "../suit";
import { AppContext } from "../AppGlobalState";
import { Org } from "../graphql/generated";
import { DropdownMenuItem } from "@snap-mobile/snap-ui/dist/types/utils";

interface OrgSelectorProps {
  setOrgState: React.Dispatch<React.SetStateAction<Org>>;
  setOrgSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrgSelector: React.FC<OrgSelectorProps> = ({
  setOrgState,
  setOrgSelected,
}) => {
  const { appState } = useContext(AppContext);
  const orgs = getAllSchoolsAffiliates(appState);
  const options: DropdownMenuItem[] = orgs.map((org) => {
    return {
      name: org.name,
      text: org.name,
      value: org.id,
    } as DropdownMenuItem;
  });

  const handleOrgSelect = (e: any) => {
    const newOrg: Org = getOrgById(appState, e.detail.value) as Org;
    setOrgSelected(true);
    setOrgState(newOrg);
  };
  return (
    <div
      className=" flex w-full px-6 py-4 border-t border-b border-gray-200 bg-blue-50 items-center mb-4"
      style={{ gap: "10px" }}
    >
      <SnapIcon
        icon="office-building-solid"
        className="h-4 w-4 -mr-1 text-gray-700"
      />
      <SnapDropdown
        leadingLabel="Organization"
        buttonText="Select Organization"
        options={options.sort((a, b) => a.name.localeCompare(b.name))}
        onSnap-dropdown-item-selected={handleOrgSelect}
        leftHang
      />
    </div>
  );
};

export default OrgSelector;
