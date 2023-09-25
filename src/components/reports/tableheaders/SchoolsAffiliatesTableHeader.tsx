import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';

const SchoolsAffiliatesTableHeader: () => ColumnDef<any>[] = () => {

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
        accessorKey: 'organization',
        cell: info => info.getValue(),
        header: () => 'Organization',
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

  

export default SchoolsAffiliatesTableHeader;
