import React, { useContext, useEffect, useState } from 'react';
import SimpleModal from '../modals/SimpleModal';
import { Tab, Tabs } from '../Tabs';
import SchoolYearFilter from '../filters/SchoolYearFilter';
import ReportResultsInModal from '../reports/ReportResultsInModal';
import CampaignsTableHeader from '../reports/tableheaders/CampaignsTableHeader';
import { CampaignCard } from '../reports/cardstructure/CampaignCard';
import SettlementsTableHeader from '../reports/tableheaders/SettlementsTableHeader';
import { SettlementCard } from '../reports/cardstructure/SettlementCard';
import { AppContext } from '../../AppGlobalState';
import { CampaignIdInverseIndex, getCampaignIdsInverseIndex, getCampaignRaiseIds, getOrgCampaignsWithOrgId, getOrgName } from '../../data-helpers/OrgsDataHelper';
import { SnapLink } from '../../suit';
import { CampaignTableData, SettlementTableData } from '../../pages/reports/reportTypes';
import { useInsightsCampaignSettlementsLazyQuery, useInsightsCampaignsDataForReportingLazyQuery } from '../../graphql/generated';
import { campaignsResponseToTableData } from '../../pages/reports/Campaigns';
import { settlementsResponseToTableData } from '../../pages/reports/Settlements';
import { campaignsToPrintData, generateCSVReport, generatePDFReport, printCampaignHeaders, printSettlementHeaders, settlementsToPrintData } from '../../utils/PrintUtils';

const filterCampaignsTableData = (allCampaigns:CampaignTableData[], year:string):CampaignTableData[] => {
  return allCampaigns.filter(campaign => {    
    //filter start date
    if(year !== 'all') {
      const currentYear = campaign.startDate?.getFullYear();
      const passStartDate = currentYear === parseInt(year);
      if(!passStartDate){
        return false;
      }
    }
    return true;
  });
};

const filterSettlementsTableData = (allSettlements:SettlementTableData[], year:string):SettlementTableData[] => {
  return allSettlements.filter(settlement => {    
    //filter start date
    if(year !== 'all') {
      const currentYear = settlement.lastUpdatedDate?.getFullYear();
      const passStartDate = currentYear === parseInt(year);
      if(!passStartDate){
        return false;
      }
    }
    return true;
  });
};

interface RollupCampaignsSettlementsModalProps {
  showModal: boolean;
  onClose: () => void;
  orgId: string;
  tab: string;
}

const RollupCampaignsSettlementsModal: React.FC<RollupCampaignsSettlementsModalProps> = ({ showModal, onClose, orgId, tab }) => {
  const {appState} = useContext(AppContext);
  const orgName = orgId && getOrgName(appState, orgId as string);
  const [activeTab, setActiveTab] = useState('campaigns');
  const[campaignsAll, setCampaignsAll] = useState<CampaignTableData[]>([]);
  const[campaignsFiltered, setCampaignsFiltered] = useState<CampaignTableData[]>([]);
  const[campaignsTableDataLoaded, setCampaignsTableDataLoaded] = useState<boolean>(false);
  const[settlementsAll, setSettlementsAll] = useState<SettlementTableData[]>([]);
  const[settlementsFiltered, setSettlementsFiltered] = useState<SettlementTableData[]>([]);
  const[settlementsTableDataLoaded, setSettlementsTableDataLoaded] = useState<boolean>(false);
  const[campaignIdsInverseIndex, setCampaignIdsInverseIndex] = useState<CampaignIdInverseIndex>({});
  const[fetchCampaigns, {data: campaignsData, loading: loadingCampaigns}] = useInsightsCampaignsDataForReportingLazyQuery({variables: {campaignIds: []}});
  const[fetchSettlements, {data: settlementsData, loading: loadingSettlements}] = useInsightsCampaignSettlementsLazyQuery({variables: {campaignIds: []}});
  const[oldestYear, setOldestYear] = useState<number|null>(null);
  const[newestYear, setNewestYear] = useState<number|null>(null);

  useEffect(() => {
    if(!appState.orgsLoading && showModal) {
      const orgCampaigns = getOrgCampaignsWithOrgId(appState, orgId);
      setCampaignIdsInverseIndex(getCampaignIdsInverseIndex(orgCampaigns));
      const campaignIds = getCampaignRaiseIds(orgCampaigns);
      fetchCampaigns({variables: {campaignIds: campaignIds}});
      fetchSettlements({variables: {campaignIds: campaignIds}});
      setActiveTab(tab)
    }
  }, [showModal, appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    if(campaignsData) {
      const data = campaignsResponseToTableData(campaignsData, campaignIdsInverseIndex, appState);
      let oldest:number|null = null;
      let newest:number|null = null;
      campaignsData.insightsCampaignsData.campaignStats?.forEach(campaign => {
        const year = new Date(campaign?.start_date).getFullYear();
        if(oldest === null || year < oldest) {
          oldest = year;
        }
        if(newest === null || year > newest) {
          newest = year;
        }
      });
      if(oldest !== null && (oldestYear === null || oldest < oldestYear)) {
        setOldestYear(oldest);
      }
      if(newest !== null && (newestYear === null || newest > newestYear)) {
        setNewestYear(newest);
      }
      setCampaignsAll(data);
      setCampaignsFiltered(data);
      setCampaignsTableDataLoaded(true);
      //TODO reset filters
    }
  }, [campaignsData]); //eslint-disable-line

  useEffect(() => {
    if(settlementsData) {
      const data = settlementsResponseToTableData(settlementsData, campaignIdsInverseIndex, appState);
      let oldest:number|null = null;
      let newest:number|null = null;
      settlementsData.insightsCampaignSettlements.forEach(settlement => {
        const year = new Date(settlement?.last_updated).getFullYear();
        if(oldest === null || year < oldest) {
          oldest = year;
        }
        if(newest === null || year > newest) {
          newest = year;
        }
      });
      if(oldest !== null && (oldestYear === null || oldest < oldestYear)) {
        setOldestYear(oldest);
      }
      if(newest !== null && (newestYear === null || newest > newestYear)) {
        setNewestYear(newest);
      }
      setSettlementsAll(data);
      setSettlementsFiltered(data);
      setSettlementsTableDataLoaded(true);
      //TODO reset filters
    }
  }, [settlementsData]); //eslint-disable-line

  const onTabChange = (id:string) => {
    setActiveTab(id);
  };

  const yearFilterChange = (year:string) => {
    if (!loadingCampaigns && !loadingSettlements) {
      const campaigns = filterCampaignsTableData(campaignsAll, year);
      setCampaignsFiltered(campaigns);
      const settlements = filterSettlementsTableData(settlementsAll, year);
      setSettlementsFiltered(settlements);
    }
  };

  const downloadPDF = () => {
    const printData = (activeTab === 'campaigns') ? campaignsToPrintData(campaignsFiltered) : settlementsToPrintData(settlementsFiltered);
    const printHeaders = (activeTab === 'campaigns') ? printCampaignHeaders : printSettlementHeaders;
    const printSection = (activeTab === 'campaigns') ? 'Campaigns' : 'Settlements';
    const printTitle = orgName + ' ' + printSection;
    generatePDFReport(printData, printHeaders, printSection, printTitle);
  };

  const downloadCSV = () => {
    const printData = (activeTab === 'campaigns') ? campaignsToPrintData(campaignsFiltered) : settlementsToPrintData(settlementsFiltered);
    const printHeaders = (activeTab === 'campaigns') ? printCampaignHeaders : printSettlementHeaders;
    const printSection = (activeTab === 'campaigns') ? 'Campaigns' : 'Settlements';
    const printTitle = orgName + ' ' + printSection;
    generateCSVReport(printData, printHeaders, printTitle);
  }; 

  return (
    <SimpleModal
      showModal={showModal}
      onClose={onClose}
    >
      <div className="border-gray-200 border-solid border-b px-4 sm:px-6">
        <h5 className="text-base font-medium text-gray-800 py-2">{orgName}</h5>
        <Tabs onTabChange={onTabChange} defaultSelected={activeTab}>
          <Tab name="Campaigns" id="campaigns" />
          <Tab name="Settlements" id="settlements" />
        </Tabs>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-end py-4 px-4 sm:px-6">
          <SnapLink text="Download/Print PDF" icon="document-solid" onClick={downloadPDF} size="sm" className="hidden md:block md:ml-4"></SnapLink>
          <SnapLink text="Download/Print CSV" icon="document-solid" onClick={downloadCSV} size="sm" className="hidden md:block md:ml-4"></SnapLink>
          <SchoolYearFilter 
            oldestYear={oldestYear} 
            newestYear={newestYear} 
            onFilterChange={yearFilterChange}
            className="ml-4" 
          />
        </div>
        <div className="px-4 sm:px-6 h-0 sm:h-auto overflow-y-auto flex-grow flex-shrink">
          <div className={`${activeTab === 'campaigns' ? 'block' : 'hidden'}`}>
            <ReportResultsInModal
              tableColumns={CampaignsTableHeader()}
              cardStructure={CampaignCard}
              reportData={campaignsFiltered}
              tableDataLoaded={campaignsTableDataLoaded}
            />
          </div>
          <div className={`${activeTab === 'settlements' ? 'block' : 'hidden'}`}>
            <ReportResultsInModal
              tableColumns={SettlementsTableHeader()}
              cardStructure={ SettlementCard}
              reportData={settlementsFiltered}
              tableDataLoaded={settlementsTableDataLoaded}
            />
          </div>
        </div>
      </div>
    </SimpleModal>
  );
};

export default RollupCampaignsSettlementsModal;
