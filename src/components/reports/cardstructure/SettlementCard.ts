import { JSXUtils } from '../../../utils/JSXUtils';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from './CardStructureTypes';

export const SettlementCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
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
      key: 'method',
      layout: '1-col',
      label: 'Method',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'status',
      layout: '2-col',
      label: 'Status',
      renderValue: (props:CardValueProps) => JSXUtils.displaySettlementsStatusLabel(props.value as string),
      renderValueNode: false,
    },
    {
      type: 'data',
      key: 'amount',
      layout: '2-col',
      label: 'Amount',
      renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'money'),
      renderValueNode: true,
    },
    {
      type: 'data',
      key: 'lastUpdated',
      layout: '2-col',
      label: 'Last Updated',
    },
  ],
}