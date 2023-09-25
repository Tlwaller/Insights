import React from 'react';
import WhiteCard from './WhiteCard';
import { SnapButton, SnapInput, SnapIcon } from '../suit';

interface SearchBoxAProps {
  filterDashboard: boolean;
}

const SearchBoxA: React.FC<SearchBoxAProps> = ({ filterDashboard }): JSX.Element => {
  return (
    <WhiteCard className={"flex items-end"}>
      <SnapInput 
        _id="search-box-field" 
        _type="text"
        placeholder="Search Dashboards"
        icon="search-line"
        icon-position="left"
        className="grow" 
      />
      <SnapButton 
        size="md"
        variant="primary"
        className="ml-4"
      >
        <span className="hidden sm:block">Search</span>
        <SnapIcon icon="search-line" size="sm" className="sm:hidden mr-0" />
      </SnapButton>
    </WhiteCard>
  );
};

export default SearchBoxA;
