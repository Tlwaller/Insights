import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppGlobalState';
import { SnapButton, SnapFilter, SnapIcon, SnapLink } from '../../suit';
import { capitalize, dateMMDDYY, displayFormattedValue } from '../../utils/RenderDataUtils';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import CampaignDetailPercentageProperty from '../campaigns/CampaignDetailPercentageProperty';
import CampaignDetailProperty from '../campaigns/CampaignDetailProperty';
import CampaignDetailQuickAction from '../campaigns/CampaignDetailQuickAction';
import CampaignListItem from '../campaigns/CampaignListItem';
import RightDrawer from '../drawers/RightDrawer';
import WhiteCard from '../WhiteCard';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import { InsCampaignStat, useInsightsCampaignRaiseEntityInfoLazyQuery } from '../../graphql/generated';
import { centsToDollars } from '../../utils/CurrencyUtils';
import { NoResults } from '../loading-empty-state/NoResults';
import { getCampaignReceiptUrl, getCampaignReportUrl, getFundraiserPageUrl, getGroupLeaderDashboardUrl } from '../../utils/RouteUtils';
import { JSXUtils } from '../../utils/JSXUtils';

const distantPast = new Date(0);

const ShowFilterOptions = [
  {
    name: 'Active',
    selected: true,
  },
  {
    name: 'Upcoming',
    selected: false,
  },
  {
    name: 'Closed',
    selected: false,
  },
];
const showFilterId:string = "show-filter";

interface CampaignListProps {
  campaigns: InsCampaignStat[];
  className?: string;
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns, className = '' }) => {
  const {appState} = useContext(AppContext);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [campaignDetail, setCampaignDetail] = useState<InsCampaignStat|null>(null);
  const [statusFilter, setStatusFilter] = useState('Active');
  const [loadMore, setLoadMore] = useState(false);
  const filteredCampaigns = campaigns?.filter(campaign => {
    return capitalize(campaign.insights_status as string) === statusFilter
  })
  const[fetchEntityInfo, {data: entityInfo, loading: entityInfoLoading}] = useInsightsCampaignRaiseEntityInfoLazyQuery({variables: {campaignId: 0}});

  
  useEffect(() => {
    const showFilter = document.getElementById(showFilterId) as HTMLSnapFilterElement;
    showFilter.filterOptions = ShowFilterOptions;
  }, []); // eslint-disable-line
  
  const showFilterChange = (e:CustomEvent) => {
    const selected = e.detail.filter((val: any) => val.selected === true);
    // if(selected[0] === undefined) {setStatusFilter('all')} --remove filter
    selected.length && setStatusFilter(selected[0].name);
  };
  
  const campaignDetailClicked = (campaignId:number|string) => {
    const activeCampaign = campaigns.find((c) => c.id === campaignId) as InsCampaignStat;
    setCampaignDetail(activeCampaign);
    fetchEntityInfo({variables: {campaignId: activeCampaign.id}});
    setShowDrawer(true);
  };
  
  const daysLeft = (campaign: InsCampaignStat) => {
    return Math.ceil((new Date(campaign.end_date).getTime() - new Date().getTime()) / (1000*60*60*24))
  }
  
  const percentage = (partial: number, full: number) => {return Math.ceil((partial / full) * 100)}

  const renderDetails = () => {
    if(campaignDetail && campaignDetail.insights_status) {
      switch(campaignDetail.insights_status) {
        case 'closed':
          return (
            <>
              <CampaignDetailProperty 
                label="Group Leader" 
                value={campaignDetail.group_leader_name as string}
                contentExtra={
                  <div className="flex flex-row justify-end">
                    <SnapLink text="Contact Group Leader" onClick={() => {}} href={`mailto:${campaignDetail.group_leader_email}`} size="xs"></SnapLink>
                  </div>
                }
              />
              <CampaignDetailPercentageProperty 
                label="Percent of Goal Raised" 
                percentage={percentage((campaignDetail.total_raised_cents as number || 0), campaignDetail.forecasted_amount_cents as number)}
                contentExtra={
                  <p className="text-xs font-medium text-gray-500">Total Raised: {displayFormattedValue(centsToDollars(campaignDetail.forecasted_amount_cents || 0), 'money')}</p>
                }
              />
              <CampaignDetailProperty label="Campaign Dates" value={`${dateMMDDYY(new Date(campaignDetail.start_date))} - ${dateMMDDYY(new Date(campaignDetail.end_date))}`} />
              <CampaignDetailProperty label="Avg Donation" value={displayFormattedValue(Math.ceil(centsToDollars((campaignDetail.total_raised_cents || 0) / (campaignDetail.donations_count || 0))), 'money')} />
            </>
          );
        case 'active':
          return (
            <>
              <CampaignDetailProperty 
                label="Group Leader" 
                value={campaignDetail.group_leader_name as string}
                contentExtra={
                  <div className="flex flex-row justify-end">
                    <SnapLink text="Contact Group Leader" onClick={() => {}} href={`mailto:${campaignDetail.group_leader_email}`} size="xs"></SnapLink>
                  </div>
                }
              />
              <CampaignDetailPercentageProperty 
                label="Percent of Goal Raised" 
                percentage={percentage(campaignDetail.total_raised_cents as number, campaignDetail.forecasted_amount_cents as number)} 
                contentExtra={
                  <p className="text-xs font-medium text-gray-500">Goal: {displayFormattedValue(centsToDollars(campaignDetail.forecasted_amount_cents || 0), 'money')}</p>
                }
              />
              <CampaignDetailPercentageProperty 
                label="Days Left" 
                percentage={
                  (Math.ceil((new Date(campaignDetail.end_date).getTime() - new Date(campaignDetail.start_date).getTime())) / (1000*60*60*24)) * 100
                    / (Math.ceil((new Date(campaignDetail.end_date).getTime() - new Date(campaignDetail.start_date).getTime())) / (1000*60*60*24)) - daysLeft(campaignDetail)
                }
                customLeftValue={
                  <p className="text-xs font-medium text-gray-500">{
                    dateMMDDYY(new Date(campaignDetail.start_date))} - {dateMMDDYY(new Date(campaignDetail.end_date))
                    }</p>
                }
                contentExtra={
                  <p className="text-xs font-medium text-red-500">{daysLeft(campaignDetail)} Days Left</p>
                }
              />
              {
                campaignDetail.donations_count &&
                <CampaignDetailProperty label="Avg Donation" value={displayFormattedValue(Math.ceil(centsToDollars((campaignDetail.total_raised_cents || 0) / campaignDetail.donations_count)), 'money')} />
              }
            </>
          );
        case 'upcoming':
          return (
            <>
              <CampaignDetailProperty 
                label="Group Leader" 
                value={campaignDetail.group_leader_name as string}
                contentExtra={
                  <div className="flex flex-row justify-end">
                    <SnapLink text="Contact Group Leader" onClick={() => {}} href={`mailto:${campaignDetail.group_leader_email}`} size="xs"></SnapLink>
                  </div>
                }
              />
              <CampaignDetailProperty label="Campaign Goal" value={displayFormattedValue(centsToDollars(campaignDetail.forecasted_amount_cents || 0), 'money')} />
              <CampaignDetailProperty 
                label="Campaign Dates" 
                value={`${dateMMDDYY(new Date(campaignDetail.start_date))} - ${dateMMDDYY(new Date(campaignDetail.end_date))}`}
                contentExtra={
                  <div className="flex flex-row justify-end">
                    <p className="text-xs font-medium text-red-500">{Math.ceil(((new Date(campaignDetail.start_date).getTime()) - (new Date().getTime())) / (1000*60*60*24))} Days to Launch</p>
                  </div>
                }
              />
              <CampaignDetailPercentageProperty 
                label="Participation Logged-In" 
                percentage={Math.ceil(campaignDetail.participation || 0)} 
                contentExtra={
                  <p className="text-xs font-medium text-gray-500">Participants: {campaignDetail.participants}</p>
                }
              />
              <CampaignDetailPercentageProperty 
                label="Donor Contacts Collected" 
                percentage={Math.ceil(campaignDetail.preloading || 0)} 
                contentExtra={
                  <p className="text-xs font-medium text-gray-500">Goal: 20 Per Participant</p>
                }
              />
            </>
          );
      }
    }
    return null;
  };

  const renderQuickActions = () => {
    if(campaignDetail && campaignDetail.insights_status) {
      const fundraiserPageUrl = getFundraiserPageUrl(campaignDetail.id);
      const reportUrl = getCampaignReportUrl(campaignDetail.id);
      const receiptUrl = getCampaignReceiptUrl(entityInfo?.insightsCampaignRaiseEntityInfo.entity_id || 0, campaignDetail.id);
      const groupLeaderDashboard = getGroupLeaderDashboardUrl(entityInfo?.insightsCampaignRaiseEntityInfo.entity_id || 0);
      const entityIdAvailable = !entityInfoLoading && entityInfo?.insightsCampaignRaiseEntityInfo.entity_id;

      switch(campaignDetail.insights_status) {
        case 'closed':
          return (
            <>
              <CampaignDetailQuickAction description="Campaign Report" cta="Download" ctaIcon="download-solid" href={reportUrl} />
              <CampaignDetailQuickAction description="Download Final Receipt" cta="Download" ctaIcon="download-solid" href={receiptUrl} disabled={!entityIdAvailable}/>
              <CampaignDetailQuickAction description="Group Leader Dashboard" cta="View Now" ctaIcon="adjustments-horizontal-solid" href={groupLeaderDashboard} disabled={!entityIdAvailable} />
              {/* <CampaignDetailQuickAction description="Track Payment Status" cta="Track" ctaIcon="currency-dollar-solid" href={''}/> */}
            </>
          );
        case 'active':
          return (
            <>
              <CampaignDetailQuickAction description="Fundraiser Page" cta="View Now" ctaIcon="eye-solid" href={fundraiserPageUrl} />
              <CampaignDetailQuickAction description="Campaign Report" cta="Download" ctaIcon="download-solid" href={reportUrl} />
              <CampaignDetailQuickAction description="Group Leader Dashboard" cta="View Now" ctaIcon="adjustments-horizontal-solid" href={groupLeaderDashboard} disabled={!entityIdAvailable} />
            </>
          );
        case 'upcoming':
          return (
            <>
              <CampaignDetailQuickAction description="Fundraiser Page" cta="View Now" ctaIcon="eye-solid" href={fundraiserPageUrl} />
              <CampaignDetailQuickAction description="Group Leader Dashboard" cta="View Now" ctaIcon="adjustments-horizontal-solid" href={groupLeaderDashboard} disabled={!entityIdAvailable} />
            </>
          );
      }
    }
    return null;
  };

  // const renderTasks = () => {
  //   if(campaignDetail && campaignDetail.insights_status) {
  //     switch(campaignDetail.insights_status) {
  //       case 'closed':
  //         return (
  //           <>
  //             <SnapAlert type="warning" className="mt-4">
  //               <SnapAlertTitle>Thank Donors</SnapAlertTitle>
  //               <SnapAlertAction slot="start">
  //                 <SnapLink text="Send Thank You Note" size="sm" variant="warning"></SnapLink>
  //               </SnapAlertAction>
  //             </SnapAlert>
  //             <SnapAlert type="warning" className="mt-4">
  //               <SnapAlertTitle>Thank Participants</SnapAlertTitle>
  //               <SnapAlertAction slot="start">
  //                 <SnapLink text="Send Thank You Note" size="sm" variant="warning"></SnapLink>
  //               </SnapAlertAction>
  //             </SnapAlert>
  //           </>
  //         );
  //       case 'active':
  //         return (
  //           <>
  //             <SnapAlert type="info" className="mt-4">
  //               <SnapAlertTitle>Campaign QR Code</SnapAlertTitle>
  //               <SnapAlertAction slot="start">
  //                 <SnapLink text="Download" size="sm" variant="default"></SnapLink>
  //               </SnapAlertAction>
  //               <SnapAlertAction slot="end">
  //                 <SnapLink text="Share" size="sm" variant="default"></SnapLink>
  //               </SnapAlertAction>
  //             </SnapAlert>
  //           </>
  //         );
  //       case 'upcoming':
  //         return (
  //           <>
  //             {/* <SnapAlert type="danger" className="mt-4">
  //               <SnapAlertTitle>KYC Documents Incomplete</SnapAlertTitle>
  //               <SnapAlertAction slot="start">
  //                 <SnapLink text="Complete KYC" size="sm" variant="danger"></SnapLink>
  //               </SnapAlertAction>
  //             </SnapAlert> */}
  //             <SnapAlert type="warning" className="mt-4">
  //               <SnapAlertTitle>Direct Deposit Not Setup</SnapAlertTitle>
  //               <SnapAlertAction slot="start">
  //                 <SnapLink text="Setup Direct Deposit" size="sm" variant="warning"></SnapLink>
  //               </SnapAlertAction>
  //             </SnapAlert>
  //           </>
  //         );
  //     }
  //   }
  //   return null;
  // };

  return (
    <>
      <WhiteCardWithTitle title="Campaign List" fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')} className={`${className}`}>
        <div className="flex flex-row items-center mb-4">
          <div className="flex flex-row items-center grow">
            <p className="text-sm font-normal text-gray-500 mr-2.5 hidden md:block">Show:</p>
            <SnapFilter id={showFilterId} onSnapFilterUpdated={showFilterChange}></SnapFilter>
          </div>
        </div>
        <div className="mb-6">
          {filteredCampaigns?.length ?
            <>
              {statusFilter === 'Closed' ?
                <>
                  {filteredCampaigns.sort((a, b) => {
                    let dateA = a.end_date ? new Date(a.end_date) : distantPast;
                    let dateB = b.end_date ? new Date(b.end_date) : distantPast;
                    return dateB.getTime() - dateA.getTime();
                  }).map((campaign, index) => {
                    return (
                      loadMore
                      ? <CampaignListItem key={index} campaign={campaign} onCampaignDetailClicked={campaignDetailClicked}/>
                      : (index < 3) && <CampaignListItem key={index} campaign={campaign} onCampaignDetailClicked={campaignDetailClicked}/>
                    )
                  })}
                </>
                :
                <>
                  {filteredCampaigns.map((campaign, index) => {
                    return (
                      loadMore
                      ? <CampaignListItem key={index} campaign={campaign} onCampaignDetailClicked={campaignDetailClicked}/>
                      : (index < 3) && <CampaignListItem key={index} campaign={campaign} onCampaignDetailClicked={campaignDetailClicked}/>
                    )
                  })}
                </>
              }
            </>
            : 
            <NoResults title={`You have no ${statusFilter.toLowerCase()} campaigns`}/>
          }
        </div>
          {
            campaigns?.length &&
            <WhiteCard className={`${filteredCampaigns.length < 4 ? 'hidden' : 'md:flex'} hidden relative flex-row justify-center transition-all`}>
                <SnapButton size="md" variant="tertiary" className={`${(loadMore) && 'hidden'}`} onClick={() => setLoadMore(true)}>
                Load More Results
                </SnapButton>
              <SnapButton icon="arrow-up-solid" size="md" variant="tertiary" className={`relative flex-row justify-center ${!loadMore && 'hidden'}`} onClick={() => setLoadMore(false)}/>
            </WhiteCard>
          }
        <div className="md:hidden flex flex-row justify-center px-4">
          <SnapButton size="md" variant="tertiary" fullWidth className={`w-full ${loadMore && 'hidden' }`} onClick={() => setLoadMore(true)}>
            Load More Results
          </SnapButton>
        </div>
      </WhiteCardWithTitle>
      <RightDrawer showDrawer={showDrawer} onClose={() => { setShowDrawer(false) }}>
        <div className="flex flex-row items-start p-6 md:pt-20">
          {/* <img src={"https://picsum.photos/40"} alt="logo" className="w-[40px] mr-2" /> */}
          <h5 className="text-sm font-medium text-gray-800 flex-1">{JSXUtils.getCampaignLink(campaignDetail?.name as string, campaignDetail?.id as number)}</h5>
          <SnapIcon icon="x-solid" size="sm" className="cursor-pointer text-gray-500 ml-2" onClick={() => setShowDrawer(false)} />
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <h6 className="text-sm font-medium text-gray-800 mb-2">Campaign Details</h6>
          {renderDetails()}
        </div>
        <div className="px-6 py-4 border-gray-300 border-solid border-t border-b">
          <h6 className="text-sm font-medium text-gray-800">Quick Actions</h6>
          {renderQuickActions()}
        </div>
        {/* <div className="px-6 py-4">
          <h6 className="text-sm font-medium text-gray-800">Tasks</h6>
          {renderTasks()}
        </div> */}
      </RightDrawer>
    </>
  );
};

export default CampaignList;
