import { ReportCardStructure } from './CardStructureTypes';

export const KYCFormCard : ReportCardStructure = {
  title: {
    key: 'schoolAffiliate',
  },
  dataList: [
    {
      type: 'data',
      key: 'campaign',
      layout: '1-col',
      label: 'Campaigns',
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
      type: 'data',
      key: 'preloading',
      layout: '2-col',
      label: 'Preloading',
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