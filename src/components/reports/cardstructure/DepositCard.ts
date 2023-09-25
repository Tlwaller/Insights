import { ReportCardStructure } from './CardStructureTypes';

export const DepositCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
    {
      type: 'data',
      key: 'campaign',
      layout: '1-col',
      label: 'Campaign',
    },
    {
      type: 'data',
      key: 'leader',
      layout: '1-col',
      label: 'Group Leader',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'dates',
      layout: '2-col',
      label: 'Dates',
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'actions',
      layout: '2-col',
      label: 'Actions',
    },
  ],
}