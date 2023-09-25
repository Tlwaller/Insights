import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from './CardStructureTypes';

export const SchoolAffiliateCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
    {
      type: 'data',
      key: 'organization',
      layout: '1-col',
      label: 'Organization',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'totalRaised',
      layout: '2-col',
      label: 'Total Raised',
      renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'money'),
      renderValueNode: true,
    },
    {
      type: 'data',
      key: 'numberCampaigns',
      layout: '2-col',
      label: 'Number of Campaigns',
    },
  ],
}