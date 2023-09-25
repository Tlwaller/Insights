import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppGlobalState';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import CampaignDashboard from '../CampaignDashboard';
import { InsLtrChartData } from '../../graphql/generated';

interface LTRReportProps {
  className?: string
  programType: string
  data?: InsLtrChartData
}

const LTRReport: React.FC<LTRReportProps> = ({ className, programType, data }) => {
  const {appState} = useContext(AppContext);
  useEffect(() =>{
  },[programType]);
  return (
    <WhiteCardWithTitle title='' fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')} className={`${className}`}>
      <h5 className="font-semibold text-xl text-gray-800 mb-4 -mt-4">Campaigns Dashboard: {programType}</h5>
      <CampaignDashboard programType={programType} title="C" data={data} />
    </WhiteCardWithTitle>
  ); 
};

export default LTRReport;
