import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { JSXUtils } from '../../../utils/JSXUtils';

const SettlementsTableHeader: () => ColumnDef<any>[] = () => {

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
        cell: info => JSXUtils.getCampaignLink(info.getValue() as string, info.row.original.campaign_id),
        header: () => 'Campaigns',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'method',
        cell: info => info.getValue(),
        header: () => 'Method',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'status',
        cell: info => JSXUtils.displaySettlementsStatusLabel(info.getValue() as string),
        header: () => 'Status',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
      {
        accessorKey: 'amount',
        cell: info => displayFormattedValue(info.getValue(), 'money'),
        header: () => 'Amount',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
      {
        accessorKey: 'lastUpdated',
        cell: info => info.getValue(),
        header: () => 'Last Updated',
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

  

export default SettlementsTableHeader;
