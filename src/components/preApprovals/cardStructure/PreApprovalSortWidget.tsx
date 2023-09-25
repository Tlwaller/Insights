import React, { useEffect, useState } from 'react';
import { SnapActionSheet, SnapIcon, SnapOption } from '../../../suit';

interface PreApprovalSortWidgetProps {
  className?: string;
  sortedOptions : (prop: string, ascDesc: string) => void;
}

const PreApprovalSortWidget: React.FC<PreApprovalSortWidgetProps> = ({ className = '', sortedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState({prop: '', ascDesc: 'desc', optionName:''});

  const setCurrentSortOption = (prop: string, ascDesc:string, name:string) => {
    setSort({prop: prop, ascDesc: ascDesc, optionName: name,});
    setIsOpen(false);
  };

  useEffect(() => {
    sortedOptions(sort.prop, sort.ascDesc);
  },[sort])// eslint-disable-line
  
  return (
    <>
      <button className={`border rounded-lg border-gray-300 flex flex-row py-2 px-2.5 ${className}`} onClick={() => setIsOpen(true)}>
        <SnapIcon icon="sort-ascending-line" size="xs" />
        <span className="text-xs font-medium text-gray-800 grow text-left pl-1">{sort.prop? `Sorting: ${sort.optionName}` :"Sort"}</span>
        <SnapIcon icon="chevron-down-line" size="xs" />
      </button>
      {isOpen &&
        <SnapActionSheet header="Sort By" onSnap-action-sheet-close={() => setIsOpen(false)}>
          <SnapOption action="sort_first_name_az" onClick={() => setCurrentSortOption('firstName','desc','First Name: A-Z')}>First Name: A-Z</SnapOption>
          <SnapOption action="sort_first_name_za" onClick={() => setCurrentSortOption('firstName','asc','First Name: Z-A')}>First Name: Z-A</SnapOption>
          <SnapOption action="sort_last_name_az" onClick={() => setCurrentSortOption('lastName','desc','Last Name: A-Z')}>Last Name: A-Z</SnapOption>
          <SnapOption action="sort_last_name_za" onClick={() => setCurrentSortOption('lastName','asc','Last Name: Z-A')}>Last Name: Z-A</SnapOption>
          <SnapOption action="sort_staus_az" onClick={() => setCurrentSortOption('status','desc','Status: A-Z')}>Status: A-Z</SnapOption>
          <SnapOption action="sort_status_za" onClick={() => setCurrentSortOption('status','asc','Status: Z-A')}>Status: Z-A</SnapOption>
        </SnapActionSheet>
      }
    </>
  );
};

export default PreApprovalSortWidget;
