import { JSXUtils } from '../../../utils/JSXUtils';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from './CardStructureTypes';

export const DonationCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
    {
      type: 'data',
      key: 'donor',
      layout: '1-col',
      label: 'Donor',
    },
    {
      type: 'data',
      key: 'campaign',
      layout: '1-col',
      label: 'Campaign',
      renderValue: (props:CardValueProps) => JSXUtils.getCampaignLink(props.value as string, props.entity.campaign_id),
      renderValueNode: false,
    },
    {
      type: 'data',
      key: 'program',
      layout: '1-col',
      label: 'Program',
    },
    {
      type: 'data',
      key: 'participant',
      layout: '1-col',
      label: 'Participant',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'amount',
      layout: '2-col',
      label: 'Amount',
      renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'money'),
      renderValueNode: true,
    },
  ],
}