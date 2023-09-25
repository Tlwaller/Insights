import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { JSXUtils } from '../../../utils/JSXUtils';

const CampaignsTableHeader: () => ColumnDef<any>[] = () => {

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'schoolAffiliate',
        cell: info => info.getValue(),
        header: () => 'School/Affiliate',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'campaign',
        cell: info => JSXUtils.getCampaignLink(info.getValue() as string, info.row.original.id),
        header: () => 'Campaigns',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'program',
        cell: info => info.getValue(),
        header: () => 'Program',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'status',
        cell: info => JSXUtils.displayCampaignsStatusLabel(info.getValue() as string),
        header: () => 'Status',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
      {
        accessorKey: 'totalRaised',
        cell: info => displayFormattedValue(info.getValue(), 'money'),
        header: () => 'Total Raised',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
    ],
    []
  );

  return columns;
}

  

export default CampaignsTableHeader;
