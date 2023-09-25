import { JSXUtils } from '../../../utils/JSXUtils';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from './CardStructureTypes';

export const CampaignCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
    {
      type: 'data',
      key: 'campaign',
      layout: '1-col',
      label: 'Campaigns',
      renderValue: (props:CardValueProps) => JSXUtils.getCampaignLink(props.value as string, props.entity.id),
      renderValueNode: false,
    },
    {
      type: 'data',
      key: 'program',
      layout: '1-col',
      label: 'Program',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'status',
      layout: '2-col',
      label: 'Status',
      renderValue: (props:CardValueProps) => JSXUtils.displayCampaignsStatusLabel(props.value as string),
      renderValueNode: false,
    },
    {
      type: 'data',
      key: 'totalRaised',
      layout: '2-col',
      label: 'Total Raised',
      renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'money'),
      renderValueNode: true,
    },
  ],
}