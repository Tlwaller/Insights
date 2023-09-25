import React, { useContext, useEffect, useState } from 'react';
import { SnapInput } from '../../suit';
import SnapSelectFallback from '../SnapSelectFallback';
import { AppContext } from '../../AppGlobalState';
import { Org } from '../../graphql/generated';
import { ProgramGroup, combineProgramsByName, getAllOrganizations, getAllPrograms, getOrgIds, getOrgProgramsWithOrgId } from '../../data-helpers/OrgsDataHelper';
import { useDebounce } from '../../hooks/useDebounce';
import OrgsDropdown from './OrgsDropdown';

interface DepositsFiltersProps {
  onFiltersApplied: (campaignSearch:string, org:string, program:string|string[], startDate:string|null, endDate:string|null) => void;
}

const DepositsFilters: React.FC<DepositsFiltersProps> = ({ onFiltersApplied = () => {} }) => {
  const {appState} = useContext(AppContext);
  const[organizations, setOrganizations] = useState<Org[]>([]);
  const[programs, setPrograms] = useState<ProgramGroup>({});
  const[campaignSearch, setCampaignSearch] = useState<string>('');
  const debouncedCampaignSearch:string = useDebounce(campaignSearch, 500);
  const[orgSearch, setOrgSearch] = useState<string>('all');
  const[programSearch, setProgramSearch] = useState<string|string[]>('all');
  const[startDateSearch, setStartDateSearch] = useState<string|null>(null);
  const[endDateSearch, setEndDateSearch] = useState<string|null>(null);

  useEffect(() => {
    if(!appState.orgsLoading) {
      setOrganizations(getAllOrganizations(appState));
      setPrograms(combineProgramsByName(getAllPrograms(appState)));
    }
  }, [appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    if(orgSearch === 'all') {
      setPrograms(combineProgramsByName(getAllPrograms(appState)));
    } else {
      setPrograms(combineProgramsByName(getOrgProgramsWithOrgId(appState, orgSearch)));
    }
    setProgramSearch('all');
  }, [orgSearch]); //eslint-disable-line

  useEffect(() => {
    onFiltersApplied(debouncedCampaignSearch, orgSearch, programSearch, startDateSearch, endDateSearch);
  }, [debouncedCampaignSearch, orgSearch, programSearch, startDateSearch, endDateSearch]);  // eslint-disable-line
  
  const updateProgramSearch = (value:string) => {
    if(value === 'all') {
      setProgramSearch('all');
    } else {
      setProgramSearch(getOrgIds(programs[value]));
    }
  };
  
  return (
    <>
      <SnapInput 
        _id="search-campaigns-field" 
        _type="text"
        placeholder="Search Campaigns..."
        icon="search-line"
        icon-position="left"
        className="grow"
        value={campaignSearch}
        onInput={(e) => { setCampaignSearch((e.target as HTMLInputElement).value)}}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-4">
        <OrgsDropdown orgs={organizations} setOrgSearch={setOrgSearch}/>
        <SnapSelectFallback 
          id="program-type-select" 
          name="program-type-select" 
          label="Program Type"
          onChange={(e) => { updateProgramSearch(e.target.value) }}
        >
          <option value="all">All Programs</option>
          { programs && Object.keys(programs).sort().map((program, index) => {
            return (<option value={program} key={index}>{program}</option>);
          })}
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
          onInput={(e) => { setStartDateSearch((e.target as HTMLInputElement).value.length > 0 ? (e.target as HTMLInputElement).value : null) }}
        />
        <span className="hidden sm:block px-2.5 mt-5 font-bold text-gray-400">-</span>
        <SnapInput
          _id="end-date-field" 
          _type="date"
          label="End Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto mt-4 sm:mt-0"
          onInput={(e) => { setEndDateSearch((e.target as HTMLInputElement).value.length > 0 ? (e.target as HTMLInputElement).value : null) }}
        />
      </div>
    </>
  );
};

export default DepositsFilters;
