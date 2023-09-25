import React from 'react';
import { SnapProgressBar } from '../../suit';

interface CampaignDetailPercentagePropertyProps {
  label: string;
  percentage: number;
  customLeftValue?: React.ReactNode;
  contentExtra?: React.ReactNode;
  className?: string;
}

const CampaignDetailPercentageProperty: React.FC<CampaignDetailPercentagePropertyProps> = ({ label, percentage, customLeftValue = null, contentExtra = null, className =  '' }) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <div className="flex flex-row justify-between mt-2">
        {customLeftValue !== null
          ? <>{customLeftValue}</>
          : <p className="text-xs font-medium text-blue-600">{percentage}%</p>
        }
        {contentExtra}
      </div>
      <SnapProgressBar percentDone={percentage} />
    </div>
  );
};

export default CampaignDetailPercentageProperty;
