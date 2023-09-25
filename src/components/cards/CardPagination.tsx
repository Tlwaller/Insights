import React from 'react';
import { SnapIcon } from '../../suit';
import { getVisiblePages } from '../../utils/PaginationUtils';

interface CardPaginationProps {
  totalPages: number;
  currentPage: number;
  previous: () => void;
  next: () => void;
  setPage: (page:number) => void;
}

const CardPagination: React.FC<CardPaginationProps> = ({ totalPages, currentPage, previous, next, setPage }) => {

  const renderPageButton = (page: number, activePage: number, key: number|null) => {
    return (
      <button
        key={key}
        onClick={() => setPage(page - 1)}
        className={`w-10 py-3 text-sm font-medium text-gray-800 border-gray-800 ${(page === activePage) ? 'border-t-2 cursor-default' : ''}`}
      >
        {page}
      </button>
    );
  };

  const activePage = currentPage + 1;

  return (
    <div className="flex flex-row">
      <button
        className="w-10"
        onClick={() => previous()}
        disabled={currentPage === 0}
      >
        <SnapIcon icon="arrow-left-line" size="sm" className="text-gray-500 mt-2" />
      </button>
      <div>
      {getVisiblePages(activePage, totalPages).map((page, index, array) => {
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
        onClick={() => next()}
        disabled={(currentPage + 1) === totalPages}
      >
        <SnapIcon icon="arrow-right-line" size="sm" className="text-gray-500 mt-2" />
      </button>
    </div>
  );
};

export default CardPagination;
