import React from 'react';
import WhiteCard from '../WhiteCard';
import { SnapIcon } from '../../suit';
import { displayFormattedValue } from '../../utils/RenderDataUtils';
import CampaignListItemStat from './CampaignListItemStat';
import { InsCampaignStat } from '../../graphql/generated';
import { centsToDollars } from '../../utils/CurrencyUtils';

interface CampaignListItemProps {
  campaign: InsCampaignStat;
  onCampaignDetailClicked: (campaignId:number|string) => void;
}

const CampaignListItem: React.FC<CampaignListItemProps> = ({ campaign, onCampaignDetailClicked }): JSX.Element => {
  const {id, name, end_date, total_raised_cents } = campaign;
  const today = new Date().getTime();
  const endDate = new Date(end_date).getTime();
  
  const openCampaignDetail = () => {
    onCampaignDetailClicked(id);
  };

  return (
    <WhiteCard className="flex flex-col sm:flex-row mb-4 last:mb-0 items-start sm:items-center" paddingY="py-5">
      <div className="flex flex-row flex-1 w-full sm:w-auto items-center border-b border-gray-200 border-solid sm:border-b-0 pb-2 sm:pb-0 mb-2 sm:mb-0">
        {/* <img src={campaign.image} alt="logo" className="w-[48px] mr-2 sm:w-[64px] sm:mr-4" /> */}
        <h4 className="flex-1 text-blue-600 text-base font-bold cursor-pointer" onClick={openCampaignDetail}>{name}</h4>
        <SnapIcon icon="arrow-sm-right-line" size="md" className="ml-4 cursor-pointer text-blue-600 sm:hidden" onClick={openCampaignDetail} />
      </div>
      {
        (campaign.insights_status === 'active')
        &&
        <CampaignListItemStat name="Days Remaining" value={Math.ceil((endDate - today) / (1000*60*60*24))}/>
      }
      <CampaignListItemStat name="Total Raised" value={displayFormattedValue(centsToDollars(total_raised_cents || 0), 'money')}/>
      <SnapIcon icon="arrow-sm-right-line" size="md" className="ml-4 cursor-pointer text-blue-600 hidden sm:block" onClick={openCampaignDetail} />
    </WhiteCard>
  );
};

export default CampaignListItem;
