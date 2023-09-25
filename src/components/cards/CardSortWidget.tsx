import React, { useState } from 'react';
import { SnapActionSheet, SnapIcon, SnapOption } from '../../suit';

interface CardSortWidgetProps {
  className?: string;
}

const CardSortWidget: React.FC<CardSortWidgetProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState({prop: '', ascDesc: 'desc'});

  const setCurrentSortOption = (prop: string) => {
    setSort({prop: prop, ascDesc: 'desc'});
    //set sort prop
    //toggle asc/desc
    //toggle back to none
    //close
    setIsOpen(false);

    console.log(sort.prop);
    
  };
  
  return (
    <>
      <button className={`border rounded-lg border-gray-300 flex flex-row py-2 px-2.5 ${className}`} onClick={() => setIsOpen(true)}>
        <SnapIcon icon="sort-ascending-line" size="xs" />
        <span className="text-xs font-medium text-gray-800 grow text-left pl-1">Sort</span>
        <SnapIcon icon="chevron-down-line" size="xs" />
      </button>
      {isOpen &&
        <SnapActionSheet header="Sort By" onSnap-action-sheet-close={() => setIsOpen(false)}>
          <SnapOption action="sort_school_affiliate" onClick={() => setCurrentSortOption('school_affiliate')}>School/Affiliate</SnapOption>
          <SnapOption action="sort_campaign" onClick={() => setCurrentSortOption('campaign')}>Campaing</SnapOption>
          <SnapOption action="sort_program" onClick={() => setCurrentSortOption('program')}>Program</SnapOption>
          <SnapOption action="sort_" onClick={() => setCurrentSortOption('req_imp')}>[Requires imp.]</SnapOption>
        </SnapActionSheet>
      }
    </>
  );
};

export default CardSortWidget;
