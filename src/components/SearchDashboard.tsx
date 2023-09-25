import React, { useEffect, useState } from 'react';
import { SnapInput } from '../suit';
import { useDebounce } from '../hooks/useDebounce';

interface SearchDashboardProps {
  onFiltersApplied: (search:string) => void;
  className?: string;
}

const SearchDashboard: React.FC<SearchDashboardProps> = ({ onFiltersApplied = () => {}, className = '' }) => {
  const[search, setSearch] = useState<string>('');
  const debouncedSearch:string = useDebounce(search, 500);

  useEffect(() => {
    onFiltersApplied(debouncedSearch);
  }, [debouncedSearch]);  // eslint-disable-line

  return (
    <div className={`flex flex-row items-center ${className}`}>
      <SnapInput 
        _id="search-box-field" 
        _type="text"
        placeholder="Search Dashboards"
        className="grow -mt-1 sm:w-1"
        icon='search-line'
        iconPosition='left'
        value={search}
        onInput={(e) => { setSearch((e.target as HTMLInputElement).value)}}
      />
    </div>
  );
};

export default SearchDashboard;
