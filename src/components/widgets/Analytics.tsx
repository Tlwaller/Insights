import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppGlobalState';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import { Tab, Tabs } from '../Tabs';
import { SnapDropdown } from '../../suit';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import BreakdownChart from '../charts/BreakDownChart';
import YearComparisonChart from '../charts/YearComparisonChart';
import { InsAnalyticsSummaryStat, InsInviteStat, InsMonthlyCampaignStat } from '../../graphql/generated';
import noAnalyticsData from '../../assets/NoAnalyticsData.png';

//Mirroring how the dataset will be for each view depending on what they click on

const breakdownInitialValues = {
  emailInviteAmount: 0,
  textInviteAmount: 0,
  extraFeaturesAmount: 0,
  socialMediaAmount: 0,
  othersAmount: 0
};

interface AnalyticsProps {
  analyticsSummaryStats: InsAnalyticsSummaryStat[];
  monthlyCampaignStats: InsMonthlyCampaignStat[];
  inviteStats: InsInviteStat[];
  empty: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ analyticsSummaryStats, monthlyCampaignStats, inviteStats, empty }) => {
  const {appState} = useContext(AppContext);
  const [key, setKey] = useState(Number);
  const [view, setView] = useState("year-comparison");
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [campaignMetrics, setCampaignMetrics] = useState({
    isLoadingInitial: false,
    isLoadingSubsequent: false
  });
  const [breakdownData, setBreakdownData] = useState(breakdownInitialValues);

  // Capitilize the titles and rid of the '-' in year-comparison
  const [dropButtonText, setDropButtonText] = useState("Year Comparison");

  useEffect(() => {
    if(inviteStats) {
      setBreakdownData({
        emailInviteAmount: (inviteStats.find(stat => stat.invite_type === 'email')?.total_amount_cents || 0) / 100,
        textInviteAmount: (inviteStats.find(stat => stat.invite_type === 'text')?.total_amount_cents || 0) / 100,
        extraFeaturesAmount: (inviteStats.find(stat => stat.invite_type === 'extra_features')?.total_amount_cents || 0) / 100,
        socialMediaAmount: (inviteStats.find(stat => stat.invite_type === 'social')?.total_amount_cents || 0) / 100,
        othersAmount: (inviteStats.find(stat => stat.invite_type === 'others')?.total_amount_cents || 0) / 100
      });
    }
  }, [inviteStats]);

  //Updating the window size for chart depening on Screen size
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }
    window.addEventListener('resize', handleResize)
  }, [])

  //Handling the view change from dropdown or Tabs section
  const onViewChange = (id?: string, event?: CustomEvent) => {
    setCampaignMetrics({ isLoadingInitial: true, isLoadingSubsequent: false })
    const value = (event ? event.detail.value : id)
    setKey(Math.random());
    setView(value);
    setCampaignMetrics({ isLoadingInitial: false, isLoadingSubsequent: true })
  }

  //Updating the dataset after the view has been updated.
  useEffect(() => {
    switch (view) {
      case 'year-comparison':
        setDropButtonText("Year Comparison");
        break;
      case 'breakdown':
        setDropButtonText("Breakdown");
        break;
      default:
        break;
    }
  }, [view]) //eslint-disable-line

  const dropOptions = [
    {
      name: "Year Comparison",
      text: "Year Comparison",
      value: "year-comparison"
    },
    {
      name: "Breakdown",
      text: "Breakdown",
      value: "breakdown"
    }
  ]
  return (
    <WhiteCardWithTitle title="Analytics" className='w-full h-full' fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
      <div className="flex flex-col col-12">
        {dimensions.width >= 768 ?
          <Tabs className='h-22' onTabChange={e => onViewChange(e)} defaultSelected="year-comparison">
            <Tab name="Year Comparison" id="year-comparison" fill={true} />
            <div className='w-px bg-gray-200'></div>
            <Tab name="Breakdown" id="breakdown" fill={true} />
          </Tabs>
          :
          <SnapDropdown className='w-100' description='Snap Dropdown' style={{borderRadius:'10px'}} onSnap-dropdown-item-selected={e => onViewChange(undefined, e)} buttonText={dropButtonText} options={dropOptions} />
        } 
      </div>
      <div className='w-full bg-gray-200 h-px mt-2 mb-4' />
      {(campaignMetrics.isLoadingInitial && view !== 'breakdown') ?
        <div className="text-center py-2xl">
          <h3>Loading...</h3>
        </div>
        :
        <>
          {view === 'breakdown' &&
            <section className="border-gray-100 rounded-xl pt-4 pb-16 lg:border-2 md:pb-4 md:px-6">
              <div className="pb-4">
                <h1 className="text-lg font-medium">Total Raised Breakdown</h1>
                <h3>Includes all campaign statuses</h3>
              </div>
              <BreakdownChart breakdownProps={breakdownData} />
            </section>
          }
          {view === 'year-comparison' &&
            <section className="border-gray-100 rounded-xl pt-4 pb-16 lg:border-2 md:pb-4 md:px-6 relative">
              <div className="pb-4">
                <h1 className="text-lg font-medium">Year Comparison</h1>
                <h3>Includes all campaign statuses</h3>
              </div>
              {
              empty && 
                <img src={noAnalyticsData} alt="No analytics data" className="absolute left-0 top-1/2 right-0 mx-auto w-72 z-50"/>
              }
                <YearComparisonChart analyticsSummaryStats={analyticsSummaryStats} monthlyCampaignStats={monthlyCampaignStats} key={key} />
            </section>
          }
        </>
      }
    </WhiteCardWithTitle>
  );
};

export default Analytics;
