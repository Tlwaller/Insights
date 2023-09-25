import React from 'react';
import { Table } from '@tanstack/react-table';
import { SnapIcon } from '../../suit';
import { getVisiblePages } from '../../utils/PaginationUtils';

interface TablePaginationProps {
  table: Table<any>;
}

const TablePagination: React.FC<TablePaginationProps> = ({ table }) => {

  const renderPageButton = (page: number, activePage: number, key: number|null) => {
    return (
      <button
        key={key}
        onClick={() => table.setPageIndex(page - 1)}
        className={`w-10 py-3 text-sm font-medium text-gray-800 border-gray-800 ${(page === activePage) ? 'border-t-2 cursor-default' : ''}`}
      >
        {page}
      </button>
    );
  };

  const activePage = table.getState().pagination.pageIndex + 1;

  return (
    <div className="flex flex-row">
      <button
        className="w-10"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <SnapIcon icon="arrow-left-line" size="sm" className="text-gray-500 mt-2" />
      </button>
      <div>
      {getVisiblePages(activePage, table.getPageCount()).map((page, index, array) => {
        if (array[index - 1] + 1 < page) {
          return (
            <span key={page}>
              <span className="inline-block	w-10 text-center text-sm font-medium text-gray-400">...</span>
              {renderPageButton(page, activePage, null)}
            </span>
          );
        }
        return renderPageButton(page, activePage, page);
      })}
      </div>
      <button
        className="w-10"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <SnapIcon icon="arrow-right-line" size="sm" className="text-gray-500 mt-2" />
      </button>
    </div>
  );
};

export default TablePagination;
