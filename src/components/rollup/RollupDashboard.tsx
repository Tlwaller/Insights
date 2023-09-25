import React, { useContext } from 'react';
import { SnapDropdown, SnapIcon } from '../../suit';
import { displayFormattedValue } from '../../utils/RenderDataUtils';
import WhiteCard from '../WhiteCard';
import RollupDashboardStat from './RollupDashboardStat';
import { getCampaignRaiseIds, getOrgCampaignsWithOrgId } from '../../data-helpers/OrgsDataHelper';
import { AppContext } from '../../AppGlobalState';
import { Org, useInsightsOrgsCampaignsSummaryQuery } from '../../graphql/generated';
import { centsToDollars } from '../../utils/CurrencyUtils';

const DropdownOptions = [
  {
    name: 'campaigns',
    text: 'Campaigns',
    value: 'campaigns',
  },
  {
    name: 'settlements',
    text: 'Settlements',
    value: 'settlements',
  },
];

interface RollupDashboardProps {
  title?: string;
  dashboard: Org;
  onDashboardOptionClicked: (dashboard: Org, option:string) => void;
  className?: string;
}

const RollupDashboard: React.FC<RollupDashboardProps> = ({ title, dashboard, onDashboardOptionClicked, className = '' }) => {
  const {appState} = useContext(AppContext);
  const dropdownId:string = 'snap-dropdown-rollup-dashboard-' + dashboard.id;

  const openOptionsDropdown = () => {
    const dropdown = document.getElementById(dropdownId) as HTMLSnapDropdownElement;
    if (dropdown.options && dropdown.options.length === 0) {
      dropdown.options = DropdownOptions;
    }
    dropdown.toggleDropdown();
  };

  const dropdownOptionSelected = (event:CustomEvent) => {
    onDashboardOptionClicked(dashboard, event.detail.value);
  };
  const campaigns = getOrgCampaignsWithOrgId(appState, dashboard.id as string);
  const campaignIds = getCampaignRaiseIds(campaigns);
  const {data: summaryData } = useInsightsOrgsCampaignsSummaryQuery({variables: { orgCampaignIds: [{campaignIds}]}});
  const summary = summaryData?.insightsOrgsCampaignsSummary[0];

  return (
    <WhiteCard className={`flex flex-col sm:flex-row mb-4 last:mb-0 items-start sm:items-center ${appState.orgsLoading && 'hidden'} ${className}`} paddingY="py-5">
      <div className="flex flex-row flex-1 w-full sm:w-auto items-center border-b border-gray-200 border-solid sm:border-b-0 pb-2 sm:pb-0 mb-2 sm:mb-0">
        {/* <img src={dashboard.image} alt="logo" className="w-[48px] mr-2 sm:w-[64px] sm:mr-4" /> */}
        <h4 className="flex-1 text-gray-800 text-base font-semibold">{title || dashboard.name}</h4>
        <SnapIcon icon="dots-vertical-line" size="md" className="ml-4 cursor-pointer text-gray-800 sm:hidden" onClick={openOptionsDropdown} />
      </div>
      <RollupDashboardStat name="Lifetime Total Raised" value={displayFormattedValue(centsToDollars(summary?.totalRaisedCents as number), 'money')}/>
      <div className="h-4 w-full sm:hidden"></div>
      <RollupDashboardStat name="Number of Campaigns" value={summary?.campaignsCount as number}/>
      <SnapIcon icon="dots-vertical-line" size="md" className="ml-4 cursor-pointer text-gray-800 hidden sm:block" onClick={openOptionsDropdown} />
      <SnapDropdown 
        hideButton 
        trackCurrentSelection={false}
        id={dropdownId} 
        onSnap-dropdown-item-selected={dropdownOptionSelected}
      />
    </WhiteCard>
  );
};

export default RollupDashboard;