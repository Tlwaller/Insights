import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { JSXUtils } from '../../../utils/JSXUtils';

const DonationsTableHeader: () => ColumnDef<any>[] = () => {

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
        accessorKey: 'donor',
        cell: info => info.getValue(),
        header: () => 'Donor',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'campaign',
        cell: info => JSXUtils.getCampaignLink(info.getValue() as string, info.row.original.campaign_id),
        header: () => 'Campaign',
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
        accessorKey: 'participant',
        cell: info => info.getValue(),
        header: () => 'Participant',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
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
    ],
    []
  );

  return columns;
}

  

export default DonationsTableHeader;
