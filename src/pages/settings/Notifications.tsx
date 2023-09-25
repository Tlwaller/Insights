import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppGlobalState';
import WhiteCard from '../../components/WhiteCard';
import { SnapButton, SnapCheckboxButton, SnapCheckboxGroup } from '../../suit';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import { SnapAlert, SnapAlertTitle } from '../../suit';

interface NotificationsProps {
  some?: string;
}

const Notifications: React.FC<NotificationsProps> = ({ some }) => {
  const {appState} = useContext(AppContext);

  const [alert, setAlert] = useState('opacity-0');

  const saveChanges = () => {
    setAlert('opacity-100');
    setTimeout(() => setAlert('opacity-0'), 5000)
    console.log('||--save changes');
  };

  return (
    <WhiteCard fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')}>
      <div className='flex justify-center'>
        <SnapAlert type='success' border={true} close={true} className={`${alert} transition-opacity absolute w-9/12 -mt-24`}>
          <SnapAlertTitle>Email Notifications Updated</SnapAlertTitle>  
        </SnapAlert> 
      </div>
      <h4 className="font-semibold text-xl text-gray-800 pb-4">Email Notification Preferences</h4>
      <p className="font-normal text-base text-gray-800">Select the email notifications you would like to receive.</p>
      <SnapCheckboxGroup className="pb-6">
        <SnapCheckboxButton input-name="chk-1" label="Notify me when a fundraiser is created." value="chk-1"></SnapCheckboxButton>
        <SnapCheckboxButton input-name="chk-2" label="Notify me when a fundraiser is finalized and checks are cut and direct deposits are deposited." value="chk-2"></SnapCheckboxButton>
      </SnapCheckboxGroup>
      <div className="flex flex-row justify-end">
        <SnapButton 
          size="md"
          variant="primary"
          fullWidth={true}
          className="w-full sm:w-auto"
          onClick={saveChanges}
        >
          Save Changes
        </SnapButton>
      </div>
    </WhiteCard>
  );
};

export default Notifications;