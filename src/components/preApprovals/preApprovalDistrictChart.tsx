import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppGlobalState";
import { PreApprovalItemInterface } from "./preApprovalsSwitch";
import PreApprovalResults from "./preApprovalResults";
import {
  printPreApprovalDistrictHeaders,
  preApprovalDistrictToPrintData,
} from "../../utils/PrintUtils";
import {
  PreApprovalDistrictCard,
} from "./cardStructure/PreApprovalCard";
import PreApprovalsDistrictTableHeader from "./tableHeaders/PreApprovalsDistrictTableHeader";
import PreApprovalFilters from "./preApprovalFilters";
import { SnapDivider, SnapDividerLabel } from "../../suit";

interface PreApprovalDistrictChartProps {
  approvalContacts: PreApprovalItemInterface[];
  district: boolean;
  schoolId?: string | number;
}

const PreApprovalDistrictChart: React.FC<PreApprovalDistrictChartProps> = ({
  approvalContacts,
  district,
  schoolId
}) => {
  const {appState} = useContext(AppContext);
  const [preApprovalsFiltered, setPreApprovalsFiltered] = useState<
  PreApprovalItemInterface[]
>([]);
const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
const filterTableData = (
    allPreApprovalNonDistrict: PreApprovalItemInterface[],
    preApprSearch: string,
  ): PreApprovalItemInterface[] => {
    return allPreApprovalNonDistrict.filter((preApproval) => {
      //filter name
      if (preApprSearch.length > 0) {
        const passName = preApproval.firstName
          .toLowerCase()
          .includes(preApprSearch.toLowerCase());
        if (!passName) {
          return false;
        }
      }
      return true;
    });
  };
  useEffect(() => {
    if (approvalContacts) {
      setPreApprovalsFiltered(approvalContacts);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [approvalContacts]); //eslint-disable-line


  const filtersApplied = (
    preApprSearch: string,
  ) => {
    if (!appState.orgsLoading && approvalContacts.length > 0) {
      const filteredData = filterTableData(
        approvalContacts,
        preApprSearch,
      );
      setPreApprovalsFiltered(filteredData);
    }
  };
  

  return (
    <>
    {!district ? 
    <>
    <PreApprovalFilters onFiltersApplied={filtersApplied}/>
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
    </>
    :null}
      <PreApprovalResults
        section="PreApprovals"
        title={!district? "Pre-Approved Contacts": ""}
        isDistrict={true}
        tableColumns={district? PreApprovalsDistrictTableHeader() : []}
        cardStructure={PreApprovalDistrictCard}
        reportData={preApprovalsFiltered}
        printHeaders={printPreApprovalDistrictHeaders}
        printData={preApprovalDistrictToPrintData(preApprovalsFiltered)}
        tableDataLoaded={tableDataLoaded}
        schoolId={schoolId}
      />
    </>
  );
};

export default PreApprovalDistrictChart;
