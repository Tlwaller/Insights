import React, { useContext, useEffect, useRef, useState } from "react";
import { SnapInput, SnapSelectMenu } from "../../suit";
import { useDebounce } from "../../hooks/useDebounce";
import { SnapSelectMenuOption } from "@snap-mobile/snap-ui/dist/types/utils";
import { AppContext } from "../../AppGlobalState";

interface SchoolsAffiliatesFiltersProps {
  onFiltersApplied: (
    schAffSearch: string,
    orgType: string,
    startDate: string | null,
    endDate: string | null
  ) => void;
}

const SchoolsAffiliatesFilters: React.FC<SchoolsAffiliatesFiltersProps> = ({
  onFiltersApplied = () => {},
}) => {
  const {appState} = useContext(AppContext);
  const [schAffSearch, setSchAffSearch] = useState<string>("");
  const debouncedSchAffSearch: string = useDebounce(schAffSearch, 500);
  const [orgTypeSearch, setOrgTypeSearch] = useState<string>("all");
  const [orgTypeOptions] = useState<SnapSelectMenuOption[]>([
    { value: "all", name: "All Schools and Affiliates", selected: true },
    { value: "school", name: "All Schools", selected: false },
    { value: "affiliate", name: "All Affiliates", selected: false },
  ]);

  const ref = useRef<HTMLSnapInputElement>(null);
  const hideHeader = () => {
    if (ref.current && appState.windowSize.screen === "sm") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const[startDateSearch, setStartDateSearch] = useState<string|null>(null);
  // const[endDateSearch, setEndDateSearch] = useState<string|null>(null);

  useEffect(() => {
    onFiltersApplied(
      debouncedSchAffSearch,
      orgTypeSearch,
      null,
      null /*startDateSearch, endDateSearch*/
    );
    /*eslint-disable*/
  }, [
    debouncedSchAffSearch,
    orgTypeSearch /*, startDateSearch, endDateSearch*/,
  ]); /*eslint-enable*/

  return (
    <>
      <SnapInput
        _id="search-school-affiliate-field"
        _type="text"
        placeholder="Search School/Affiliate..."
        icon="search-line"
        icon-position="left"
        className="grow"
        value={schAffSearch}
        ref={ref}
        onInput={(e) => {
          setSchAffSearch((e.target as HTMLInputElement).value);
        }}
      />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 my-4">
        <SnapSelectMenu
          id="organization-type-select"
          modalTitle="Organization Type"
          onClick={hideHeader}
          label="Organization Type"
          selectMenuOptions={orgTypeOptions}
          onSnap-select-menu-updated={(e) =>
            setOrgTypeSearch(
              e.detail.filter((program) => program.selected === true)[0]
                .value as string
            )
          }
        />
        {/* <SnapInput
          _id="start-date-field" 
          _type="date"
          label="Start Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto" 
          onInput={(e) => { setStartDateSearch((e.target as HTMLInputElement).value.length > 0 ? (e.target as HTMLInputElement).value : null) }}
        />
        <SnapInput
          _id="end-date-field" 
          _type="date"
          label="End Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto mt-4 sm:mt-0" 
          onInput={(e) => { setEndDateSearch((e.target as HTMLInputElement).value.length > 0 ? (e.target as HTMLInputElement).value : null) }}
        /> */}
      </div>
    </>
  );
};

export default SchoolsAffiliatesFilters;
