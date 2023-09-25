import React, { useContext, useEffect, useState } from "react";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import CardPagination from "../cards/CardPagination";
import { ReportCardStructure } from "../reports/cardstructure/CardStructureTypes";
import { LoadingData } from "../loading-empty-state/LoadingData";
import { AppContext } from "../../AppGlobalState";
import PreApprovalSortWidget from "./cardStructure/PreApprovalSortWidget";
import PreApprovalResultsCard from "./PreApprovalResultsCard";

interface PreApprovalResultsCardListProps {
  cardStructure: ReportCardStructure;
  data: any[];
  hideSort?: boolean;
  tableDataLoaded: boolean;
  index?: number;
  isDistrict: boolean;
}

const pageSize = 10; //TODO: move this to config file

const PreApprovalResultsCardList: React.FC<PreApprovalResultsCardListProps> = ({
  cardStructure,
  data,
  hideSort = false,
  tableDataLoaded,
  index,
  isDistrict,
}) => {
  const {appState} = useContext(AppContext)
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [allContacts, setAllContacts] = useState<any[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<any[]>([]);

  useEffect(() => {
    setAllContacts(data);
    setFilteredContacts(data);
    setTotalPages(Math.ceil(data.length / pageSize));
    setCurrentPage(0);
  }, [data]);

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const visibleCardsCount = () => {
    if (totalPages === 1) {
      return data.length;
    } else if (currentPage + 1 === totalPages) {
      if (data.length % pageSize === 0) {
        return pageSize;
      } else {
        return data.length % pageSize;
      }
    } else {
      return pageSize;
    }
  };

  const sortDataByOptions = (prop: string, ascDesc: string) => {
    let data = [...allContacts];
    let newData =
          data.sort((a, b) => {
            if (a[prop].toLowerCase() < b[prop].toLowerCase()) {
              return ascDesc === 'desc'? -1 : 1;
            }
            if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
              return ascDesc === 'desc'? 1 : -1;
            }
            return 0;
          });
        setFilteredContacts(newData);
  };

  if (appState.orgsLoading || !tableDataLoaded) {
    return <LoadingData />;
  }

  return (
    <>
      {!hideSort && (
        <>
          <p className="text-sm font-normal text-gray-800">
            Showing <span className="font-bold">{visibleCardsCount()}</span>{" "}
            Entries
          </p>
          <div className="flex justify-start mb-4 mt-2">
            <PreApprovalSortWidget
              className="w-1/2"
              sortedOptions={sortDataByOptions}
            />
          </div>
        </>
      )}
      {filteredContacts.length > 0 &&
        filteredContacts
          .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
          .map((result, index) => {
            return (
              <div key={index}>
                <PreApprovalResultsCard
                  cardStructure={cardStructure}
                  index={index}
                  entity={result}
                  className="mb-4"
                  key={result.id}
                  district={isDistrict}
                />
              </div>
            );
          })}
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
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

export default PreApprovalResultsCardList;
