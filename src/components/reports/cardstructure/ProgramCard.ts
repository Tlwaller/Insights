import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from './CardStructureTypes';

export const ProgramCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
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