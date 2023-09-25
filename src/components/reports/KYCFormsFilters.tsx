import React from 'react';
import { SnapButton, SnapInput } from '../../suit';
import SnapSelectFallback from '../SnapSelectFallback';

interface KYCFormsFiltersProps {
  some?: string;
}

const KYCFormsFilters: React.FC<KYCFormsFiltersProps> = ({ some }) => {
  return (
    <>
      <SnapInput 
        _id="search-campaigns-field" 
        _type="text"
        placeholder="Search Campaigns..."
        icon="search-line"
        icon-position="left"
        className="grow" 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-4">
        <SnapSelectFallback id="organization-select" name="organization-select" label="Organization">
          <option>All</option>
          <option>Snapton School</option>
          <option>Snapton District</option>
        </SnapSelectFallback>
        <SnapSelectFallback id="program-type-select" name="program-type-select" label="Program Type">
          <option>All Programs</option>
          <option>Sports</option>
          <option>Music</option>
        </SnapSelectFallback>
      </div>
      <div className="flex flex-row items-center flex-wrap sm:flex-nowrap mb-4">
        <SnapInput
          _id="start-date-field" 
          _type="date"
          label="Start Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto" 
        />
        <span className="hidden sm:block px-2.5 mt-5 font-bold text-gray-400">-</span>
        <SnapInput
          _id="end-date-field" 
          _type="date"
          label="End Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto mt-4 sm:mt-0" 
        />
      </div>
      <div className="flex flex-row justify-end my-4">
        <SnapButton 
          size="md"
          variant="primary"
        >
          Run Report
        </SnapButton>
      </div>
    </>
  );
};

export default KYCFormsFilters;
