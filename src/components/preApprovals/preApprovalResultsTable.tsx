import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { SnapDivider, SnapDividerLabel, SnapLink } from '../../suit';
import PaginatedTableCounter from '../tables/PaginatedTableCounter';
import TablePagination from '../tables/TablePagination';
import ColumnSortIndicator from '../tables/ColumnSortIndicator';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  SortingState } from '@tanstack/react-table';
import { AppContext } from '../../AppGlobalState';
import { LoadingData } from '../loading-empty-state/LoadingData';


interface PreApprovalResultsTableProps {
  data: any[];
  columns: ColumnDef<any>[];
  tableDataLoaded: boolean;
  isDistrict: boolean;
  schoolId: string;
}

const PreApprovalResultsTable: React.FC<PreApprovalResultsTableProps> = ({ data, columns, tableDataLoaded, isDistrict, schoolId }) => {
  const {appState} = useContext(AppContext);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: false,
  });

  let headerClasses;
  let cellClasses;
  let lastRow: boolean;

  if(appState.orgsLoading || !tableDataLoaded) {
    return <LoadingData/>
  }

  const dashboardUrl = () => {
    return '/dashboards/' + schoolId + '/preapprovals';
  };
  
  return (
    <>
    <div className="flex flex-col justify-between items-start pb-3">
        <PaginatedTableCounter 
          totalResults={data.length} 
          pageIndex={table.getState().pagination.pageIndex} 
          pageSize={table.getState().pagination.pageSize}
        />
        {isDistrict?
        <>
        <SnapLink
              text="Visit Dashboard to Send Pre-Approvals"
              href={dashboardUrl()}
              srOnly="srOnly"
            />
        </> : null}
      </div>
      <div className="h-auto w-full border border-gray-200 rounded-lg mb-4 shadow">
        <table className="w-full">
          <thead>
            <tr className="h-10 border-gray-200 border-b">
              {table.getFlatHeaders().map((header, index, array) => {
                headerClasses = classNames(
                  'flex text-xs font-medium text-gray-500 uppercase px-4', 
                  {'cursor-pointer select-none': header.column.getCanSort()}
                );
                if (header.column.columnDef.meta && header.column.columnDef.meta.headerClassName) {
                  headerClasses += ` ${header.column.columnDef.meta.headerClassName}`;
                }
                return (
                  <th key={header.id} colSpan={header.colSpan} className={classNames('bg-gray-50', {'rounded-tl-lg': index === 0}, {'rounded-tr-lg': index === array.length-1})}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: `${headerClasses}`,
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.id !== 'actions'? (<ColumnSortIndicator sort={header.column.getIsSorted() as string} className="ml-1 justify-center"/>) : null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex, rowArray) => {
              lastRow = rowIndex === rowArray.length - 1;
              return (
                <tr key={row.id} className="h-[52px] odd:bg-white even:bg-gray-50">
                  {row.getVisibleCells().map((cell, cellIndex, cellArray) => {
                    cellClasses = classNames(
                      'px-2 text-sm font-medium text-gray-800',
                      {'rounded-bl-lg': lastRow && cellIndex === 0},
                      {'rounded-br-lg': lastRow && cellIndex === cellArray.length-1}
                    );
                    if (cell.column.columnDef.meta && cell.column.columnDef.meta.cellClassName) {
                      cellClasses += ` ${ cell.column.columnDef.meta.cellClassName}`;
                    }
                    return (
                      <td key={cell.id} className={`${cellClasses}`}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <SnapDivider><SnapDividerLabel></SnapDividerLabel></SnapDivider>
      <div className="flex flex-row justify-between items-center">
        <PaginatedTableCounter 
          totalResults={data.length} 
          pageIndex={table.getState().pagination.pageIndex} 
          pageSize={table.getState().pagination.pageSize}
        />
        <TablePagination table={table}/>
      </div>
    </>
  );
};

export default PreApprovalResultsTable;
