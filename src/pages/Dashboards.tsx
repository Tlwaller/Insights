import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import DashboardList from '../components/dashboard/DashboardList';
import WhiteCard from '../components/WhiteCard';
import { isScreenSizeBelow } from '../utils/UIUtils';
import { AppContext } from '../AppGlobalState';
import SearchDashboard from '../components/SearchDashboard';
import { getDashboards, getDashboardsCount } from '../data-helpers/OrgsDataHelper';
import { DashboardSummary } from '../components/dashboard/DashboardTypes';
import { LoadingData } from '../components/loading-empty-state/LoadingData';
import { NoResults } from '../components/loading-empty-state/NoResults'; 

const filterDashboardByName = (dashboards:DashboardSummary[], search:string):DashboardSummary[] => {
  return dashboards.filter(dashboard => dashboard.name.toLowerCase().includes(search.toLowerCase()));
};

const DashboardsPage = () => {
  const {appState} = useContext(AppContext);
  const location = useLocation();
  const districtDashboards = getDashboards(appState, 'district') as DashboardSummary[];
  const schoolDashboards = getDashboards(appState, 'school') as DashboardSummary[];
  const affiliateDashboards = getDashboards(appState, 'affiliate') as DashboardSummary[];
  const[districtDashboardsFiltered, setDistrictDashboardsFiltered] = useState<DashboardSummary[] | null>(null);
  const[schoolDashboardsFiltered, setSchoolDashboardsFiltered] = useState<DashboardSummary[] | null>(null);
  const[affiliateDashboardsFiltered, setAffiliateDashboardsFiltered] = useState<DashboardSummary[] | null>(null);

  useEffect( () => {
    window.history.pushState({}, 'Snap! Insights', '/dashboards');
  }, [] );

  const filtersApplied = (search:string) => {
    if (getDashboardsCount(appState) > 0 && !appState.orgsLoading) {
      if(search.length > 0 ) {
        setDistrictDashboardsFiltered(filterDashboardByName(districtDashboards, search));
        setSchoolDashboardsFiltered(filterDashboardByName(schoolDashboards, search));
        setAffiliateDashboardsFiltered(filterDashboardByName(affiliateDashboards, search));
      } else {
        setDistrictDashboardsFiltered(null);
        setSchoolDashboardsFiltered(null);
        setAffiliateDashboardsFiltered(null);
      }
    }
  };

  if(location.pathname !== '/dashboards') {
    return ( <Outlet /> );
} else if(appState.orgsLoading) {
    return <LoadingData className='h-screen'/>
  } else if(getDashboardsCount(appState) < 1) {
    return <NoResults/>
  } else return (
      <div className="py-4 sm:px-6">
        <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
          <SearchDashboard onFiltersApplied={filtersApplied} />
          <DashboardList title='District dashboards' dashboards={districtDashboardsFiltered || districtDashboards} />
          <DashboardList title='School dashboards' dashboards={schoolDashboardsFiltered || schoolDashboards} />
          <DashboardList title='Affiliate dashboards' dashboards={affiliateDashboardsFiltered || affiliateDashboards} />
        </WhiteCard>
      </div>
    );
};

export default DashboardsPage;
