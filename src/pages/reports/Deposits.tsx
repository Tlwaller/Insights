import React, { useContext } from 'react';
import { SnapDivider, SnapDividerLabel } from '../../suit';
import WhiteCard from '../../components/WhiteCard';
import DepositsFilters from '../../components/reports/DepositsFilters';
import ReportResults from '../../components/reports/ReportResults';
import DepositsTableHeader from '../../components/reports/tableheaders/DepositsTableHeader';
import { fakeDepositsTableData } from '../../utils/FakeDataUtils';
import { DepositCard } from '../../components/reports/cardstructure/DepositCard';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import { AppContext } from '../../AppGlobalState';
import { depositsToPrintData, printDepositnHeaders } from '../../utils/PrintUtils';

const fakeDeposits = fakeDepositsTableData();

const DepositsPage = () => {
  const {appState} = useContext(AppContext);

  const filtersApplied = (campaignSearch:string, org:string, program:string|string[], startDate:string|null, endDate:string|null) => {
    // if (!loadingSettlements) {
    //   const filteredData = filterTableData(settlementsAll, appState, campaignSearch, org, program, status, startDate, endDate);
    //   setSettlementsFiltered(filteredData);
    //   if(org === 'all') {
    //     setOrganizationName('Settlements: All Organizations');
    //   } else {
    //     setOrganizationName(getOrgName(appState, org) + ' Settlements');
    //   }
    // }
  };
  
  return (
    <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
      <DepositsFilters 
        onFiltersApplied={filtersApplied}
      />
      <SnapDivider><SnapDividerLabel></SnapDividerLabel></SnapDivider>
      <ReportResults 
        section="Deposits"
        title="Snapton School District Deposits"
        tableColumns={DepositsTableHeader()}
        cardStructure={DepositCard}
        reportData={fakeDeposits}
        printHeaders={printDepositnHeaders}
        printData={depositsToPrintData(fakeDeposits)}
        tableDataLoaded={true}
      />
    </WhiteCard>
  );
};

export default DepositsPage;
