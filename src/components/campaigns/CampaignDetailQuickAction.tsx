import { ICON_TYPES } from '@snap-mobile/snap-ui/dist/types/utils';
import React from 'react';
import { SnapButton } from '../../suit';

interface CampaignDetailQuickActionProps {
  description: string;
  cta: string;
  ctaIcon: string;
  href?: string;
  disabled?: boolean;
}

const CampaignDetailQuickAction: React.FC<CampaignDetailQuickActionProps> = ({ description, cta, ctaIcon, href, disabled }) => {
  return (
    <div className="flex flex-row py-2 items-center justify-between border-gray-200 border-solid border-b last:border-0">
      <p className="text-xs font-medium text-gray-500">{description}</p>
      <SnapButton size="xs" variant="tertiary" icon={ctaIcon as ICON_TYPES} href={href} target="_blank" disabled={disabled}>{cta}</SnapButton>
    </div>
  );
};

export default CampaignDetailQuickAction;
