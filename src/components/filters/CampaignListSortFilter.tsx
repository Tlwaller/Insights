import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppGlobalState';
import { SnapActionSheet, SnapDropdown, SnapIcon, SnapOption } from '../../suit';
import { isScreenSizeBelow } from '../../utils/UIUtils';

const FilterOptions = [
  {
    name: ' school＿affiliate',
    text: 'School／Affiliate',
    value: 'School／Affiliate',
  },
  {
    name: 'other',
    text: 'Other',
    value: 'Other',
  },
];
const dropdownId:string = "campaign-list-sort-filter";

interface CampaignListSortFilterProps {
  className?: string;
}

const CampaignListSortFilter: React.FC<CampaignListSortFilterProps> = ({ className = '' }) => {
  const {appState} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setfilter] = useState('School／Affiliate');

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
      if (dropdown.options && dropdown.options.length === 0) {
        dropdown.options = FilterOptions;
      }
      dropdown.toggleDropdown();
    }
  };
  
  return (
    <>
      <button className={`border rounded-lg border-gray-300 flex flex-row py-2 px-2.5 min-w-[200px] ${className}`} onClick={openFilter}>
        <SnapIcon icon="filter-solid" size="xs" />
        <span className="text-xs font-medium text-gray-600 grow text-left pl-1">Sort: <span className="text-sm text-gray-800 capitalize">{filter}</span></span>
        <SnapIcon icon="chevron-down-line" size="xs" />
      </button>
      <SnapDropdown 
        hideButton 
        trackCurrentSelection={false}
        id={dropdownId}
        onSnap-dropdown-item-selected={dropdownOptionSelected}
      />
      {isOpen &&
        <SnapActionSheet header="Sort" onSnap-action-sheet-close={() => setIsOpen(false)}>
          <SnapOption action="filter_school_affiliate" onClick={() => setCurrentFilter('School／Affiliate')}>School／Affiliate</SnapOption>
          <SnapOption action="filter_other" onClick={() => setCurrentFilter('Other')}>Other</SnapOption>
        </SnapActionSheet>
      }
    </>
  );
};

export default CampaignListSortFilter;
