import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppGlobalState";
import { PreApprovalItemInterface } from "./preApprovalsSwitch";
import PreApprovalResults from "./preApprovalResults";
import {
  preApprovalDistrictToPrintData,
  printPreApprovalHeaders,
} from "../../utils/PrintUtils";
import { PreApprovalCard } from "./cardStructure/PreApprovalCard";
import PreApprovalsTableHeader from "./tableHeaders/PreApprovalsTableHeader";
import PreApprovalFilters from "./preApprovalFilters";

interface PreApprovalsTableProps {
  approvalContacts: PreApprovalItemInterface[];
  district: boolean;
}

const PreApprovalsTable: React.FC<PreApprovalsTableProps> = ({
  approvalContacts,
  district,
}) => {
  const {appState} = useContext(AppContext);
  const [preApprovalsFiltered, setPreApprovalsFiltered] = useState<
    PreApprovalItemInterface[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const filterTableData = (
    allPreApprovalNonDistrict: PreApprovalItemInterface[],
    preApprSearch: string
  ): PreApprovalItemInterface[] => {
    return allPreApprovalNonDistrict.filter((preApproval) => {
      //filter name
      const searchTerm = preApprSearch.toLowerCase();
      if (searchTerm.length > 0) {
        const evalExp = preApproval.firstName.toLowerCase() + '|' + preApproval.lastName.toLowerCase() + '|' + preApproval.email.toLowerCase() + '|' + preApproval.activity.toLowerCase();
        const pass = evalExp.includes(searchTerm);
        if (!pass) {
          setSearchResults(true);
          return false;
        }
      }
      setSearchResults(false);
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

  const filtersApplied = (preApprSearch: string) => {
    if (!appState.orgsLoading && approvalContacts.length > 0) {
      const filteredData = filterTableData(approvalContacts, preApprSearch);
      if(preApprSearch.length > 0){
        setSearchResults(true);
      }else{
        setSearchResults(false);
      }
      setPreApprovalsFiltered(filteredData);
    }
  };

  return (
    <>
      <PreApprovalFilters onFiltersApplied={filtersApplied} />
          <PreApprovalResults
            section="PreApprovals"
            title={"Pre-Approved Contacts"}
            isDistrict={false}
            tableColumns={!district ? PreApprovalsTableHeader() : []}
            cardStructure={PreApprovalCard}
            reportData={preApprovalsFiltered}
            printHeaders={printPreApprovalHeaders}
            printData={preApprovalDistrictToPrintData(preApprovalsFiltered)}
            tableDataLoaded={tableDataLoaded}
            searching={searchResults}
          />
    </>
  );
};

export default PreApprovalsTable;
