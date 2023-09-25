import React, { useContext, useEffect, useState } from 'react';
import { SnapDivider, SnapDividerLabel } from '../../suit';
import CardPagination from '../cards/CardPagination';
import CardSortWidget from '../cards/CardSortWidget';
import { ReportCardStructure } from './cardstructure/CardStructureTypes';
import ReportResultsCard from './ReportResultsCard';
import { LoadingData } from '../loading-empty-state/LoadingData';
import { AppContext } from '../../AppGlobalState';

interface ReportResultsCardListProps {
  cardStructure: ReportCardStructure;
  data: any[];
  hideSort?: boolean;
  tableDataLoaded: boolean;
  index?: number
}

const pageSize = 10; //TODO: move this to config file

const ReportResultsCardList: React.FC<ReportResultsCardListProps> = ({ cardStructure, data, hideSort = false, tableDataLoaded, index }) => {
  const {appState} = useContext(AppContext)
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
    setCurrentPage(0);
  }, [data]);

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < (totalPages - 1)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const visibleCardsCount = () => {
    if(totalPages === 1) {
      return data.length;
    } else if ((currentPage + 1) === totalPages) {
      if (data.length % pageSize === 0) {
        return pageSize;
      } else {
        return data.length % pageSize;
      }
    } else {
      return pageSize;
    }
  };

  if(appState.orgsLoading || !tableDataLoaded) {
    return <LoadingData/>
  }
  
  return (
    <>
      {!hideSort && 
        <>
          <p className="text-sm font-normal text-gray-800">Showing <span className="font-bold">{visibleCardsCount()}</span> Entries</p>
          <div className="flex justify-end mb-4 mt-2">
            <CardSortWidget className="w-1/2" />
          </div>
        </>
      }
      {(data.length > 0) &&
        data.slice(currentPage * pageSize, (currentPage * pageSize) + pageSize).map(result => {
          return (
            <ReportResultsCard
              cardStructure={cardStructure}
              index={index}
              entity={result}
              className="mb-4"
              key={result.id}
            />
          )
        })
      }
      <SnapDivider><SnapDividerLabel></SnapDividerLabel></SnapDivider>
      <div className="flex flex-row items-center justify-center">
        <CardPagination 
          totalPages={totalPages}
          currentPage={currentPage}
          previous={previousPage}
          next={nextPage}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default ReportResultsCardList;
