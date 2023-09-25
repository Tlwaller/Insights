import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import WhiteCard from '../WhiteCard';
import { SnapIcon } from '../../suit';
import DashboardListItemStat from './DashboardListItemStat';
import { DashboardSummary } from './DashboardTypes';
import { useInsightsOrgsCampaignsSummaryQuery } from '../../graphql/generated';
import { centsToDollars, formatAmount } from '../../utils/CurrencyUtils';
import { AppContext } from '../../AppGlobalState';
import { getCampaignRaiseIds, getOrgCampaignsWithOrgId } from '../../data-helpers/OrgsDataHelper';

interface DashboardListItemProps {
  dashboard: DashboardSummary;
}

const DashboardListItem: React.FC<DashboardListItemProps> = ({ dashboard }): JSX.Element => {
  const {appState} = useContext(AppContext);
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    window.scrollTo(0,0);
    const id = dashboard.id;
    navigate(`/dashboards/${id}/overview`, { replace: true, state: { org: dashboard, campaigns }});
  };

  const campaigns = getOrgCampaignsWithOrgId(appState, dashboard.id as string);
  const campaignIds = getCampaignRaiseIds(campaigns);
  const {data: summaryData, loading: summaryDataLoading} = useInsightsOrgsCampaignsSummaryQuery({variables: {orgCampaignIds: [{campaignIds}]}});
  const summary = summaryData?.insightsOrgsCampaignsSummary[0];

  return (
    <WhiteCard className={`${appState.orgsLoading && 'hidden'} flex flex-col sm:flex-row mb-4 last:mb-0 items-start sm:items-center`} paddingY="py-5">
      <div className="flex flex-row flex-1 w-full sm:w-auto items-center border-b border-gray-200 border-solid sm:border-b-0 pb-2 sm:pb-0 mb-2 sm:mb-0">
        {/* <img src={dashboard.image} alt="logo" className="w-[48px] mr-2 sm:w-[64px] sm:mr-4" /> */}
        <h4 className="flex-1 text-blue-600 text-base font-bold cursor-pointer" onClick={navigateToDashboard}>{dashboard.name}</h4>
        <SnapIcon icon="arrow-sm-right-line" size="md" className="ml-4 cursor-pointer text-blue-600 sm:hidden" onClick={navigateToDashboard} />
      </div>
      <DashboardListItemStat name="Lifetime Total Raised" value={!summaryDataLoading ? formatAmount(centsToDollars(summary?.totalRaisedCents as number)) : '---'}/>
      <DashboardListItemStat name="Number of Campaigns" value={!summaryDataLoading ? summary?.campaignsCount as number : '---'}/>
      <SnapIcon icon="arrow-sm-right-line" size="md" className="ml-4 cursor-pointer text-blue-600 hidden sm:block" onClick={navigateToDashboard} />
    </WhiteCard>
  );
};

export default DashboardListItem;
