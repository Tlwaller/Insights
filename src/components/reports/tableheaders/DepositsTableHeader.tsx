import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

const DepositsTableHeader: () => ColumnDef<any>[] = () => {

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
        cell: info => info.getValue(),
        header: () => 'Campaigns',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'leader',
        cell: info => info.getValue(),
        header: () => 'Group Leader',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'dates',
        cell: info => info.getValue(),
        header: () => 'Dates',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
      {
        accessorKey: 'actions',
        cell: info => info.getValue(),
        header: () => 'Actions',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-center',
          cellClassName: 'text-center',
        }
      },
    ],
    []
  );

  return columns;
}

  

export default DepositsTableHeader;
