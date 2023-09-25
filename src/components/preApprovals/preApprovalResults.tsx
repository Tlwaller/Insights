import React, { useContext, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ReportCardStructure } from "../reports/cardstructure/CardStructureTypes";
import { AppContext } from "../../AppGlobalState";
import {
  isScreenSizeEqualOrAbove,
  isScreenSizeBelow,
} from "../../utils/UIUtils";
import { PrintTableHeader } from "../../utils/PrintUtils";
import { SnapButton } from "../../suit";
import PreApprovalResultsCardList from "./preApprovalResultsCardList";
import PreApprovalResultsTable from "./preApprovalResultsTable";
import { NoPreApproved } from "../loading-empty-state/NoPreApprovedContact";
import { useParams } from "react-router-dom";
import { getOrgById } from "../../data-helpers/OrgsDataHelper";
import PreApprovalsModal from "../modals/PreApprovalsModal";
import { Org } from "../../graphql/generated";

interface PreApprovalResultsProps {
  section: string;
  title: string;
  tableColumns: ColumnDef<any>[];
  cardStructure: ReportCardStructure;
  reportData: any[];
  printHeaders: PrintTableHeader[];
  printData: any[];
  tableDataLoaded: boolean;
  isDistrict: boolean;
  index?: number;
  schoolId?: string | number;
  searching?: boolean;
}

const PreApprovalResults: React.FC<PreApprovalResultsProps> = ({
  section,
  title,
  tableColumns,
  cardStructure,
  reportData,
  printHeaders,
  printData,
  tableDataLoaded,
  isDistrict,
  index,
  schoolId,
  searching = false,
}) => {
  const {appState} = useContext(AppContext);
  const {dashboardId} = useParams();
  const org = getOrgById(appState, dashboardId || '');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [defaultTab, setDefaultTab] = useState("add");

  const toggleModal = (tab: string) => {
    setShowAddModal(true);
    setDefaultTab(tab);
  };

  return (
    <div className="mt-6">
      <div className="flex flex-row pb-4">
        <div className="grow">
          <h5 className="font-semibold text-lg text-gray-800">{title}</h5>
        </div>
        {!isDistrict &&
        isScreenSizeEqualOrAbove(appState.windowSize.screen, "md") ? (
          <>
            <SnapButton
              icon="plus-line"
              variant="primary"
              onClick={() => toggleModal("add")}
              size="sm"
              className="ml-4"
            >
              Add Contact
            </SnapButton>
            <SnapButton
              icon="upload-line"
              variant="primary"
              onClick={() => toggleModal("import")}
              size="sm"
              className="ml-4"
            >
              Import Contact
            </SnapButton>
          </>
        ) : null}
      </div>
      { reportData.length === 0? <NoPreApproved isDistrict={isDistrict} searchResults={searching} schoolId={schoolId as string}/> :isScreenSizeBelow(appState.windowSize.screen, "sm") ? (
        <PreApprovalResultsCardList
          cardStructure={cardStructure}
          data={reportData}
          tableDataLoaded={tableDataLoaded}
          index={index}
          isDistrict={isDistrict}
        />
      ) : (
        <PreApprovalResultsTable
          columns={tableColumns}
          data={reportData}
          tableDataLoaded={tableDataLoaded}
          isDistrict={isDistrict}
          schoolId={schoolId as string}
        />
      )}
      {showAddModal ? (
        <PreApprovalsModal
          org={org as Org}
          showModal={showAddModal}
          onClose={() => setShowAddModal(false)}
          defaultTab={defaultTab}
        ></PreApprovalsModal>
      ) : null}
    </div>
  );
};

export default PreApprovalResults;
