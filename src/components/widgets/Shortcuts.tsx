import React, { useContext } from 'react';
import { AppContext } from '../../AppGlobalState';
import { isScreenSizeBelow } from '../../utils/UIUtils';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import ShortcutLink from './ShortcutLink';
import { useNavigate } from 'react-router-dom';

interface ShortcutsProps {
  className?: string;
}

const Shortcuts: React.FC<ShortcutsProps> = ({ className = '' }) => {
  const {appState} = useContext(AppContext);
  const navigate = useNavigate();
  
  return (
    <WhiteCardWithTitle title="Shortcuts" fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, 'sm')} className={`${className}`}>
      {/* <ShortcutLink icon="bank-line" text="Pending Direct Deposit" callback={() => {}} /> */}
      <ShortcutLink icon="settlements-line" text="Settlement Report" callback={() => { navigate(`/reporting/settlements`) }} />
      <ShortcutLink icon="donation-line" text="Donor Report" callback={() => { navigate(`/reporting/donations`) }} />
      {/* <ShortcutLink icon="clipboard-list-line" text="Pending KYC" callback={() => {}} /> */}
      {/* <ShortcutLink icon="trophy-line" text="Top Performers" callback={() => { navigate(`/reporting/donations`) }} /> */}
    </WhiteCardWithTitle>
  );
};

export default Shortcuts;
