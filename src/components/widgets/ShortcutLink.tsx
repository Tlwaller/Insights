import { ICON_TYPES } from '@snap-mobile/snap-ui/dist/types/utils/icons';
import React from 'react';
import { SnapIcon, SnapLink } from '../../suit';

interface ShortcutLinkProps {
  icon: string;
  text: string;
  callback: () => void;
  className?: string;
}

const ShortcutLink: React.FC<ShortcutLinkProps> = ({ icon, text, callback, className = '' }) => {
  return (
    <div className={`flex flex-row py-5 sm:py-6 items-center border-solid border-gray-200 border-b last:border-b-0 ${className}`}>
      <SnapIcon icon={icon as ICON_TYPES} size="md" color="#3B82F6" className="mr-2.5" />
      <SnapLink text={text} onClick={callback} size="sm" />
    </div>
  );
};

export default ShortcutLink;
