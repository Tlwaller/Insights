import React from 'react';

interface CampaignDetailPropertyProps {
  label: string;
  value: string;
  contentExtra?: React.ReactNode;
  className?: string;
}

const CampaignDetailProperty: React.FC<CampaignDetailPropertyProps> = ({ label, value, contentExtra = null, className =  '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex flex-row justify-between mb-1">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-xs font-medium text-gray-800">{value}</p>
      </div>
      {contentExtra}
    </div>
  );
};

export default CampaignDetailProperty;
