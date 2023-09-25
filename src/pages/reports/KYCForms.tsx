import React, { useContext } from 'react';
import { SnapDivider, SnapDividerLabel } from '../../suit';
import WhiteCard from '../../components/WhiteCard';
import KYCFormsFilters from '../../components/reports/KYCFormsFilters';
import ReportResults from '../../components/reports/ReportResults';
import KYCFormsTableHeader from '../../components/reports/tableheaders/KYCFormsTableHeader';
import { fakeKYCFormsTableData } from '../../utils/FakeDataUtils';
import { KYCFormCard } from '../../components/reports/cardstructure/KYCFormCard';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import { AppContext } from '../../AppGlobalState';
import { kycsToPrintData, printKycHeaders } from '../../utils/PrintUtils';

const fakeKYCForms = fakeKYCFormsTableData();

const KYCFormsPage = () => {
  const {appState} = useContext(AppContext);

  return (
    <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
      <KYCFormsFilters />
      <SnapDivider><SnapDividerLabel></SnapDividerLabel></SnapDivider>
      <ReportResults 
        section="KYC"
        title="Snapton School District KYC Forms"
        tableColumns={KYCFormsTableHeader()}
        cardStructure={KYCFormCard}
        reportData={fakeKYCForms}
        printHeaders={printKycHeaders}
        printData={kycsToPrintData(fakeKYCForms)}
        tableDataLoaded={true}
      />
    </WhiteCard>
  );
};

export default KYCFormsPage;
