import React from 'react';
import { formatAmount } from "../utils/CurrencyUtils";
import {SnapIcon} from "../suit";
import { ICON_TYPES } from '@snap-mobile/snap-ui/dist/types/utils';

interface StatBoxBProps {
  status: string;
  title: string;
  amount: number;
  percent: number;
  percentDescription: string;
  upDown: "up" | "down" | "unchanged";
}

const StatBoxB: React.FC<StatBoxBProps> = ({ status, title, amount , percent, percentDescription, upDown}): JSX.Element => {
  let bgColor;
  let icon;
  let highlightColor;
  if(upDown === 'up') {
    bgColor = 'bg-green-100';
    icon = 'trending-up-solid';
    highlightColor = '#76CD1F';
  } else if(upDown === 'down') {
    bgColor = 'bg-red-100';
    icon = 'trending-down-solid';
    highlightColor = '#EA5859';
  } else {
    bgColor = 'bg-sky-100';
    icon = 'arrow-narrow-right-line';
    highlightColor = '#1269C1';
  }

  return (
    <div className={`flex flex-row rounded-xl p-5 ${bgColor}`}>
      <div className='flex-1'>
        <span className='uppercase text-sm font-extrabold text-slate-800'>{status}</span>
        <h4 className='text-sm text-slate-600 font-normal'>{title}</h4>
        <span className='text-slate-800 text-2xl block'>
          <strong>{formatAmount(amount)}</strong>
        </span>
        <span className='text-sm text-slate-600 font-normal block'>
          <strong style={{color: highlightColor}}>{percent + '%'}</strong> {percentDescription}
        </span>
      </div>
      <SnapIcon className='mr-5' icon={icon as ICON_TYPES} color={highlightColor} size="lg" />
     </div>
  );
};

export default StatBoxB;
