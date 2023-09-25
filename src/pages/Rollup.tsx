import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppGlobalState';
import FullWidthPageHeader from '../components/FullWidthPageHeader';
import RollupDashboardGroup from '../components/rollup/RollupDashboardGroup';
import SearchDashboard from '../components/SearchDashboard';
import WhiteCard from '../components/WhiteCard';
import { isScreenSizeBelow } from '../utils/UIUtils';
import { NoResults } from '../components/loading-empty-state/NoResults';
import { getDashboards, getOrgCampaignsWithOrgId, getCampaignRaiseIds, getOrgProgramsWithOrg, getDashboardsCount } from '../data-helpers/OrgsDataHelper';
import { Org, useInsightsOrgsCampaignsSummaryQuery } from '../graphql/generated';
import SimpleStatCard from '../components/SimpleStatCard';
import { displayFormattedValue } from '../utils/RenderDataUtils';
import { centsToDollars } from '../utils/CurrencyUtils';
import RollupCampaignsSettlementsModal from '../components/rollup/RollupCampaignsSettlementsModal';
import { LoadingData } from '../components/loading-empty-state/LoadingData';

const filterDashboardByName = (dashboards:Org[], search:string):Org[] => {
  return dashboards.filter(dashboard => dashboard.name && dashboard.name.toLowerCase().includes(search.toLowerCase()));
};

const RollupPage = () => {
  const {appState} = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState<Org | null>(null);
  const [activeTab, setActiveTab] = useState('campaigns');
  let header = '';
  let showPrograms = false;
  let programsWithCampaigns:Org[] = [];
  let programsWithoutCampaigns:Org[] = [];
  const districts = getDashboards(appState, 'district');
  const schools = getDashboards(appState, 'school');
  const affiliates = getDashboards(appState, 'affiliate');
  const [schoolsWithCampaigns, setSchoolsWithCampaigns] = useState<Org[]>([]);
  const [schoolsWithoutCampaigns, setSchoolsWithoutCampaigns] = useState<Org[]>([]);
  const [affiliatesWithCampaigns, setAffiliatesWithCampaigns] = useState<Org[]>([]);
  const [affiliatesWithoutCampaigns, setAffiliatesWithoutCampaigns] = useState<Org[]>([]);
  const[schoolDashboardsFiltered, setSchoolDashboardsFiltered] = useState<Org[] | null>(null);
  const[affiliateDashboardsFiltered, setAffiliateDashboardsFiltered] = useState<Org[] | null>(null);
  const[programDashboardsFiltered, setProgramDashboardsFiltered] = useState<Org[] | null>(null);

  const depStringSchools = JSON.stringify(schools);
  const depStringAffililates = JSON.stringify(affiliates);

  useEffect(() => {
    const swc: Org[] = [];
    const swoc: Org[] = [];
    const awc: Org[] = [];
    const awoc: Org[] = [];
    schools.forEach(school => (getOrgCampaignsWithOrgId(appState, school.id as string).length > 0)
    ? swc.push(school)
    : swoc.push(school)
    );
    affiliates.forEach(affiliate => (getOrgCampaignsWithOrgId(appState, affiliate.id as string).length > 0)
    ? awc.push(affiliate)
    : awoc.push(affiliate)
    );
    setSchoolsWithCampaigns(swc);
    setSchoolsWithoutCampaigns(swoc);
    setAffiliatesWithCampaigns(awc);
    setAffiliatesWithoutCampaigns(awoc);
  }, [depStringSchools, depStringAffililates]); //eslint-disable-line
  
  
  if(districts.length > 0) {
    header = districts[0].name as string;
    showPrograms = false;
  } else if (schools.length > 1) {
    header = "Your Schools";
    showPrograms = false;
  } else if (schools.length === 1) {
    header = schools[0].name as string;
    showPrograms = true;
    const programs = getOrgProgramsWithOrg(appState, schools[0]);
    programs.map(program => getOrgCampaignsWithOrgId(appState, program.id).length ? programsWithCampaigns.push(program) : programsWithoutCampaigns.push(program))
  } else {
    header = "Your Programs"
  }
  
  const campaigns = showPrograms
  ? programsWithCampaigns.map(program => getOrgCampaignsWithOrgId(appState, program.id))
  : getDashboards(appState).map(org => getOrgCampaignsWithOrgId(appState, org.id));
  const campaignIds = getCampaignRaiseIds(campaigns.flat());
  const {data: summaryData, loading: summaryDataLoading } = useInsightsOrgsCampaignsSummaryQuery({variables: { orgCampaignIds: [{campaignIds}]}});
  const summary = summaryData?.insightsOrgsCampaignsSummary[0];
  
  const dashboardOptionClicked = (dashboard: Org, option:string) => {
    setActiveDashboard(dashboard); //TODO: select the correct dashboard
    setActiveTab(option);
    setShowModal(true);
  };
  
  const filtersApplied = (search:string) => {
    if(getDashboardsCount(appState) > 0 && !appState.orgsLoading) {
      if((search.length > 0) && programsWithCampaigns.length + programsWithoutCampaigns.length > 0) {
        setProgramDashboardsFiltered(filterDashboardByName([programsWithCampaigns, programsWithoutCampaigns].flat(), search));
      } else if(search.length > 0) {
        setSchoolDashboardsFiltered(filterDashboardByName(schools, search));
        setAffiliateDashboardsFiltered(filterDashboardByName(affiliates, search));
      } else {
        setProgramDashboardsFiltered(null);
        setSchoolDashboardsFiltered(null);
        setAffiliateDashboardsFiltered(null);
      }
    }
  };

  if(appState.orgsLoading) {
    return <LoadingData className='h-screen'/>
  } else if(getDashboardsCount(appState) < 1) {
    return <NoResults/>
  } else return (
    <>
      <FullWidthPageHeader className="pt-4 pb-0 px-4 sm:px-6">
        <h4 className="text-gray-800 font-medium text-2xl pb-4">{header}</h4>
      </FullWidthPageHeader>
      <div className="py-3.5 px-4 sm:px-6">
        <div className='grid grid-cols-2 gap-2 sm:gap-6'>
          <SimpleStatCard stat="Lifetime Total Raised" value={displayFormattedValue(summaryDataLoading ? 0 : centsToDollars(summary?.totalRaisedCents as number), 'money')} />
          <SimpleStatCard stat="Total Campaigns" value={summary?.campaignsCount as number}/>
        </div>
      </div>
      <div className="sm:px-6 sm:pt-2 mb-6 sm:mb-0">
        <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
          <SearchDashboard
            onFiltersApplied={filtersApplied}
            className="mb-6 sm:mb-8"
          />
          {
            showPrograms
            ? <>
                <RollupDashboardGroup title={programDashboardsFiltered ? "Programs" : "Programs With Campaigns"}
                dashboardSummaries={programDashboardsFiltered || programsWithCampaigns} onDashboardOptionClicked={dashboardOptionClicked}/>
                <RollupDashboardGroup title="Programs Without Campaigns"
                dashboardSummaries={programDashboardsFiltered ? [] : programsWithoutCampaigns} onDashboardOptionClicked={dashboardOptionClicked}/>
              </>
            :
            ((schoolsWithCampaigns.length + schoolsWithoutCampaigns.length + affiliatesWithCampaigns.length < 1) && appState.orgsLoading)
            ? <NoResults/>
            : <>
                <RollupDashboardGroup title={schoolDashboardsFiltered ? "Schools" : "Schools With Campaigns"}
                dashboardSummaries={schoolDashboardsFiltered || schoolsWithCampaigns} onDashboardOptionClicked={dashboardOptionClicked} />
                <RollupDashboardGroup title="Schools Without Campaigns"
                dashboardSummaries={schoolDashboardsFiltered ? [] : schoolsWithoutCampaigns} onDashboardOptionClicked={dashboardOptionClicked} />
                <RollupDashboardGroup title={affiliateDashboardsFiltered ? "Affiliates" : "Affiliates With Campaigns"}
                dashboardSummaries={affiliateDashboardsFiltered || affiliatesWithCampaigns} onDashboardOptionClicked={dashboardOptionClicked} />
                <RollupDashboardGroup title="Affiliates Without Campaigns"
                dashboardSummaries={affiliateDashboardsFiltered ? [] : affiliatesWithoutCampaigns} onDashboardOptionClicked={dashboardOptionClicked} />
              </>
          }
        </WhiteCard>
      </div>
        <RollupCampaignsSettlementsModal
          showModal={showModal}
          onClose={() => { setShowModal(false) }}
          orgId={activeDashboard?.id || ""}
          tab={activeTab}
        />
    </>
  );
};

export default RollupPage;
