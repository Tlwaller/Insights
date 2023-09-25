import { useContext } from 'react';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import { AppContext } from '../../AppGlobalState';
import noFundraiserData from '../../assets/NoFundraIserData.png';

const NoFundraiserData = () => {
  const {appState} = useContext(AppContext);
  return (
    <WhiteCardWithTitle title='' fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')} className="col-span-1 md:col-span-2">
      <h5 className="font-semibold text-xl text-gray-800 mb-4 -mt-4">Campaigns Dashboard: All Programs</h5>
      <div className='w-full h-full flex flex-col justify-center items-center pb-12'>
        <img src={noFundraiserData} alt="No fundraiser data" className='w-72'/>
        <h2 className='text-center font-semibold text-lg py-3'>No Fundraiser Data to Show Yet</h2>
        <p className='text-center text-gray-500'>You'll be able to see your organization's fundraising data here.</p>
      </div>
    </WhiteCardWithTitle>
  ); 
};

export default NoFundraiserData;
