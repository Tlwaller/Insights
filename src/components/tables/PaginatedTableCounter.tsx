import React from 'react';

interface PaginatedTableCounterProps {
  totalResults: number;
  pageIndex: number;
  pageSize: number;
}

const PaginatedTableCounter: React.FC<PaginatedTableCounterProps> = ({ totalResults, pageIndex, pageSize }) => {
  const displayStart = (pageIndex * pageSize) + 1;
  const displayNext = (pageIndex + 1) * pageSize;
  const displayEnd = displayNext > totalResults ? totalResults : displayNext;

  return (
    <span className="text-sm font-normal text-gray-800">
      Showing {displayStart} to {displayEnd} of {totalResults} results
    </span>
  );
};

export default PaginatedTableCounter;
