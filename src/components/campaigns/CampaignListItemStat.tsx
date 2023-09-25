import React from 'react';

interface CampaignListItemStatProps {
  name: string;
  value: string | number;
}

const CampaignListItemStat: React.FC<CampaignListItemStatProps> = ({ name, value }): JSX.Element => {
  return (
    <div className="flex flex-row sm:flex-col sm:border-r border-solid border-gray-200 text-right basis-3/12 pr-0 sm:pr-4 items-center sm:items-end w-full sm:w-auto justify-between">
      <div className="font-bold text-xs text-gray-500 pr-1 sm:pr-0">{name}</div>
      <span className="text-gray-800 text-sm">
        <strong className="font-semibold">{value}</strong>
      </span>
    </div>
  );
};

export default CampaignListItemStat;
