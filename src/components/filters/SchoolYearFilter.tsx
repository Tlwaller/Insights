import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppGlobalState';
import { SnapActionSheet, SnapDropdown, SnapIcon, SnapOption } from '../../suit';
import { isScreenSizeBelow } from '../../utils/UIUtils';

const dropdownId:string = "school-year-filter";

interface SchoolYearFilterProps {
  oldestYear: number|null;
  newestYear: number|null;
  onFilterChange: (value:string) => void;
  className?: string;
}

const SchoolYearFilter: React.FC<SchoolYearFilterProps> = ({ oldestYear, newestYear, onFilterChange, className = '' }) => {
  const {appState} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setfilter] = useState('all');
  const [yearRange, setYearRange] = useState<number[]>([]);
  const [filterOptions, setFilterOptions] = useState<any[]>([]);

  useEffect(() => {
    if(oldestYear !== null && newestYear !== null) {
      const range = [];
      const options:any[] = [];
      if(oldestYear === newestYear) {
        range.push(oldestYear);
      } else {
        for (let index = oldestYear; index <= newestYear; index++) {
          range.push(index);
        }
      }
      range.forEach(year => {
        options.push({
          name: year,
          text: year,
          value: year,
        });
      });
      setYearRange(range);
      setFilterOptions(options);
    }
  }, [oldestYear, newestYear]); //eslint-disable-line

  useEffect(() => {
    onFilterChange(filter);
  }, [filter]); //eslint-disable-line

  const setCurrentFilter = (newFilter: string) => {
    setfilter(newFilter);
    setIsOpen(false);
  };

  const dropdownOptionSelected = (event:CustomEvent) => {
    setfilter(event.detail.value);
  };

  const openFilter = () => {
    if(isScreenSizeBelow(appState.windowSize.screen, 'sm')) {
      setIsOpen(true);
    } else {
      const dropdown = document.getElementById(dropdownId) as HTMLSnapDropdownElement;
      if (dropdown.options) {
        dropdown.options = filterOptions;
      }
      dropdown.toggleDropdown();
    }
  };
  
  return (
    <>
      <button className={`border rounded-lg border-gray-300 flex flex-row py-2 px-2.5 min-w-[200px] ${className}`} onClick={openFilter}>
        <SnapIcon icon="filter-solid" size="xs" />
        <span className="text-xs font-medium text-gray-600 grow text-left pl-1">Year: <span className="text-sm text-gray-800 capitalize">{filter}</span></span>
        <SnapIcon icon="chevron-down-line" size="xs" />
      </button>
      <SnapDropdown 
        hideButton 
        trackCurrentSelection={false}
        id={dropdownId}
        onSnap-dropdown-item-selected={dropdownOptionSelected}
      />
      {isOpen &&
        <SnapActionSheet header="Filter" onSnap-action-sheet-close={() => setIsOpen(false)}>
          <SnapOption action="all" onClick={() => setCurrentFilter('all')}>All</SnapOption>
          { yearRange && yearRange.map((year, index) => {
            return (<SnapOption action={'filter_' + year} key={index} onClick={() => setCurrentFilter(year.toString())}>{year}</SnapOption>);
          })}
        </SnapActionSheet>
      }
    </>
  );
};

export default SchoolYearFilter;
