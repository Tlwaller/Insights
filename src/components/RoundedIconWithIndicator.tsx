import { ICON_TYPES } from '@snap-mobile/snap-ui/dist/types/utils';
import React from 'react';
import { SnapIcon, SnapIndicator } from '../suit';

interface RoundedIconWithIndicatorProps {
  icon: string;
  count: number;
  colorName: 'gray' | 'white' | 'red' | 'yellow' | 'blue';
  hex: string;
  bg: string;
  className?: string;
}


const RoundedIconWithIndicator: React.FC<RoundedIconWithIndicatorProps> = ({ icon, count, colorName, hex, bg, className }) => {

  return (
    <div className={`relative flex min-w-[36px] w-9 h-9 rounded-[18px] items-center justify-center shadow ${bg} ${className}`}>
      <SnapIcon icon={icon as ICON_TYPES} size="md" color={hex} />
      <SnapIndicator size="sm" color={colorName} text={count} className="absolute top-0 right-[-9px]" />
    </div>
  );
};

export default RoundedIconWithIndicator;
