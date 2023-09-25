import classNames from 'classnames';
import React, { useContext } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from '../AppGlobalState';
import FullWidthPageHeader from '../components/FullWidthPageHeader';
import { Tabs, Tab } from '../components/Tabs';
import { getPathnameParts } from '../utils/RouteUtils';
import { isScreenSizeBelow, isScreenSizeEqualOrAbove } from '../utils/UIUtils';

const SettingsPage = () => {
  const {appState} = useContext(AppContext);
  const location = useLocation();
  const pathParts = getPathnameParts(location.pathname);
  const defaultSelected = pathParts.length >= 2 ? pathParts[1] : undefined;
  const navigate = useNavigate();

  const onTabChange = (id:string) => {
    navigate(`/settings/${id}`);
  };

  return (
    <>
    <FullWidthPageHeader className={classNames('pt-4 pb-0', {'px-6': isScreenSizeEqualOrAbove(appState.windowSize.screen, 'sm'), 'px-4': isScreenSizeBelow(appState.windowSize.screen, 'sm')})}>
      <h4 className="text-gray-800 font-medium text-2xl">Settings</h4>
      <Tabs onTabChange={onTabChange} defaultSelected={defaultSelected}>
        <Tab name="Notifications" id="notifications" />
        <Tab name="Support" id="support" />
      </Tabs>
    </FullWidthPageHeader>
    <div className={classNames({'py-3.5 px-6': isScreenSizeEqualOrAbove(appState.windowSize.screen, 'sm'), 'py-3.5': isScreenSizeBelow(appState.windowSize.screen, 'sm')})}>
      <Outlet />
    </div>
  </>
  );
};

/* <>
      <NotificationPreferences />
    </> */

export default SettingsPage;
