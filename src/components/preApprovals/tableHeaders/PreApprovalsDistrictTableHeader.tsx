import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { displayFormattedValue } from '../../../utils/RenderDataUtils';
import { JSXUtils } from '../../../utils/JSXUtils';

const PreApprovalsDistrictTableHeader: () => ColumnDef<any>[] = () => {

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        header: () => 'First Name',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left whitespace-nowrap',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'lastName',
        cell: info => info.getValue(),
        header: () => 'Last Name',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'text-left whitespace-nowrap',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'email',
        cell: info => JSXUtils.wrapBreableValue(info.getValue() as string),
        header: () => 'Email',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-left',
          cellClassName: 'text-left break-all',
        }
      },
      {
        accessorKey: 'activity',
        cell: info => JSXUtils.displayActivityName(info.getValue() as string),
        header: () => 'Activity',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-start',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'sentOn',
        cell: info => displayFormattedValue(info.getValue(), 'date'),
        header: () => 'Sent On',
        footer: props => props.column.id,
        meta: {
          headerClassName: 'justify-start whitespace-nowrap',
          cellClassName: 'text-left',
        }
      },
      {
        accessorKey: 'status',
        cell: info => {return JSXUtils.displayPreApprovalsStatusLabel(info.getValue() as string)},
        header: () => 'Status',
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

  

export default PreApprovalsDistrictTableHeader;
