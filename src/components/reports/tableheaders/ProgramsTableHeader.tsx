import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';

const ProgramsTableHeader: () => ColumnDef<any>[] = () => {

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
        accessorKey: 'totalRaised',
        cell: info => displayFormattedValue(info.getValue(), 'money'),
        header: () => 'Total Raised',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      },
      {
        accessorKey: 'numberCampaigns',
        cell: info => info.getValue(),
        header: () => 'Number of Campaigns',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-end',
          cellClassName: 'text-right',
        }
      }
    ],
    []
  );

  return columns;
}

  

export default ProgramsTableHeader;
