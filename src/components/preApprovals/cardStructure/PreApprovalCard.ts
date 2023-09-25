import { JSXUtils } from '../../../utils/JSXUtils';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { CardValueProps, ReportCardStructure } from '../../reports/cardstructure/CardStructureTypes';

export const PreApprovalCard : ReportCardStructure = {
  title: {
    key: 'firstName',
  },
  dataList: [
    {
      type: 'data',
      key: 'email',
      layout: '1-col',
      label: 'Email',
      renderValue: (props:CardValueProps) => props.value as string,
      renderValueNode: false,
    },
    {
      type: 'data',
      key: 'activity',
      layout: '1-col',
      label: 'Activity',
      renderValue: (props:CardValueProps) => JSXUtils.displayActivityName(props.value as string) ,
      renderValueNode: false
    },
    {
      type: 'divider',
    },
    {
      type: 'data',
      key: 'sentOn',
      layout: '2-col',
      label: 'Sent On',
      renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'date'),
      renderValueNode: true,
    },
    {
      type: 'data',
      key: 'status',
      layout: '2-col',
      label: 'Status',
      renderValue: (props:CardValueProps) => JSXUtils.displayPreApprovalsStatusLabel(props.value as string),
      renderValueNode: false,
    },
  ],
}

export const PreApprovalDistrictCard : ReportCardStructure = {
    title: {
      key: 'firstName',
    },
    dataList: [
      {
        type: 'data',
        key: 'email',
        layout: '1-col',
        label: 'Email',
        renderValue: (props:CardValueProps) => props.value as string,
        renderValueNode: false,
      },
      {
        type: 'data',
        key: 'activity',
        layout: '1-col',
        label: 'Activity',
        renderValue: (props:CardValueProps) => JSXUtils.displayActivityName(props.value as string),
        renderValueNode: false
      },
      {
        type: 'divider',
      },
      {
        type: 'data',
        key: 'sentOn',
        layout: '2-col',
        label: 'Sent On',
        renderValue: (props:CardValueProps) => displayFormattedValue(props.value, 'date'),
        renderValueNode: true,
      },
      {
        type: 'data',
        key: 'status',
        layout: '2-col',
        label: 'Status',
        renderValue: (props:CardValueProps) => JSXUtils.displayPreApprovalsStatusLabel(props.value as string),
        renderValueNode: false,
      },
    ],
  }

