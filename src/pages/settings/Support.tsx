import React, { useContext } from 'react';
import { AppContext } from '../../AppGlobalState';
import SupportContactDetail from '../../components/SupportContactDetail';
import WhiteCard from '../../components/WhiteCard';
import { isScreenSizeBelow } from '../../utils/UIUtils';

interface SupportProps {
  some?: string;
}

const Support: React.FC<SupportProps> = ({ some }) => {
  const {appState} = useContext(AppContext);
  
  return (
    <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
      <h4 className="font-semibold text-xl text-gray-800 pb-4">Support Contact Information</h4>
      <div className="flex flex-col sm:flex-row">
        <SupportContactDetail
          name="Mike Donnelly"
          phone="917.555.5550"
          email="mike.donnelly@snapraise.com"
          className="basis-1/3 mb-8 sm:mb-0 mr-0 sm:mr-2.5"
        />
        <SupportContactDetail
          name="Snap! Raise Support"
          phone="206.285.0906"
          email="support@snapraise.com"
          className="basis-1/3 mr-0 sm:mr-2"
        />
      </div>
    </WhiteCard>
  );
};

export default Support;
