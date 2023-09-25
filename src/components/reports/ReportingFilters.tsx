import React, { useContext, useEffect, useRef, useState } from "react";
import { SnapInput, SnapSelectMenu } from "../../suit";
import { AppContext } from "../../AppGlobalState";
import { Org } from "../../graphql/generated";
import {
  ProgramGroup,
  combineProgramsByName,
  getAllOrganizations,
  getAllPrograms,
  getOrgIds,
  getOrgProgramsWithOrgId,
} from "../../data-helpers/OrgsDataHelper";
import { useDebounce } from "../../hooks/useDebounce";
import { multiSelectMenuUpdate } from "../../utils/ArrayUtils";
import { SnapSelectMenuOption } from "@snap-mobile/snap-ui/dist/types/utils";

interface ReportingFiltersProps {
  onFiltersApplied: (
    campaignSearch: string,
    orgs: string[],
    programs: string[],
    startDate: string | null,
    endDate: string | null,
    statuses?: string[]
  ) => void;
  statusType: string;
}

const ReportingFilters: React.FC<ReportingFiltersProps> = ({
  onFiltersApplied = () => {},
  statusType,
}) => {
  const {appState} = useContext(AppContext);
  const [organizations, setOrganizations] = useState<Org[]>([]);
  const [programs, setPrograms] = useState<ProgramGroup>({});
  const [campaignSearch, setCampaignSearch] = useState<string>("");
  const debouncedCampaignSearch: string = useDebounce(campaignSearch, 500);
  const [orgSearch, setOrgSearch] = useState<string[]>(["all"]);
  const [programSearch, setProgramSearch] = useState<string[]>(["all"]);
  const [statusSearch, setStatusSearch] = useState<string[]>(["all"]);
  const [startDateSearch, setStartDateSearch] = useState<string | null>(null);
  const [endDateSearch, setEndDateSearch] = useState<string | null>(null);
  const [toggleProgramFilterReset, setToggleProgramFilterReset] =
    useState<boolean>(false);

  const [orgsOptions, setOrgsOptions] = useState<SnapSelectMenuOption[]>([]);
  const [programOptions, setProgramOptions] = useState<SnapSelectMenuOption[]>(
    []
  );
  const [statusOptions, setStatusOptions] = useState<SnapSelectMenuOption[]>(
    statusType === "campaign"
      ? [
          { name: "Active", selected: false },
          { name: "Closed", selected: false },
          { name: "Upcoming", selected: false },
        ]
      : [
          { name: "Processing", selected: false },
          { name: "Deposited", selected: false },
          { name: "Failed", selected: false },
          { name: "Void", selected: false },
        ]
  );

  useEffect(() => {
    if (!appState.orgsLoading) {
      setOrganizations(getAllOrganizations(appState));
      setPrograms(combineProgramsByName(getAllPrograms(appState)));
    }
  }, [appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    setProgramOptions(
      Object.keys(programs)
        .sort()
        .map((program) => {
          return { name: program, selected: false };
        })
    );
  }, [programs]); //eslint-disable-line

  useEffect(() => {
    setOrgsOptions(
      organizations
        .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
        .map((org) => {
          //eslint-disable-line
          return { value: org.id, name: org.name as string, selected: false };
        })
    );
  }, [organizations]); //eslint-disable-line

  useEffect(() => {
    if (orgSearch.find((org) => org === "all")) {
      setPrograms(combineProgramsByName(getAllPrograms(appState)));
    } else {
      setPrograms(
        combineProgramsByName(
          orgSearch.map((org) => getOrgProgramsWithOrgId(appState, org)).flat()
        )
      );
    }
    setProgramSearch(["all"]);
    setStatusSearch(["all"]);
    statusOptions &&
      setStatusOptions(
        statusOptions.map((option) => {
          return { name: option.name, selected: false };
        })
      );
    setToggleProgramFilterReset(!toggleProgramFilterReset);
  }, [orgSearch]); //eslint-disable-line

  useEffect(() => {
    onFiltersApplied(
      debouncedCampaignSearch,
      orgSearch,
      programSearch,
      startDateSearch,
      endDateSearch,
      statusSearch
    ); /*eslint-disable*/
  }, [
    debouncedCampaignSearch,
    orgSearch,
    programSearch,
    statusSearch,
    startDateSearch,
    endDateSearch,
  ]); /*eslint-enable*/

  const updateOrgSearch = (selectedOrgs: SnapSelectMenuOption[]) => {
    if (selectedOrgs.length) {
      setOrgSearch(selectedOrgs.map((org) => org.value as string));
    } else {
      setOrgSearch(["all"]);
    }
  };

  const updateProgramSearch = (selectedPrograms: SnapSelectMenuOption[]) => {
    if (selectedPrograms.length) {
      const filteredSelections = selectedPrograms.filter((program) => {
        return programs[program.name];
      });

      const orgIds = filteredSelections
        .map((program) => {
          return getOrgIds(programs[program.name]);
        })
        .flat();

      setProgramSearch(orgIds);
    } else setProgramSearch(["all"]);
  };

  const updateStatusSearch = (selectedStatuses: SnapSelectMenuOption[]) => {
    if (selectedStatuses.length) {
      setStatusSearch(
        selectedStatuses.map((status) => status.name.toLowerCase())
      );
    } else setStatusSearch(["all"]);
  };

  const ref = useRef<HTMLSnapInputElement>(null);
  const hideHeader = () => {
    if (ref.current && appState.windowSize.screen === "sm") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SnapInput
        _id="search-campaign-field"
        _type="text"
        placeholder="Search Campaigns..."
        icon="search-line"
        icon-position="left"
        className="grow"
        value={campaignSearch}
        ref={ref}
        onInput={(e) => {
          setCampaignSearch((e.target as HTMLInputElement).value);
        }}
      />
      <div
        className={`grid grid-cols-1 ${
          statusType === "hidden" ? "sm:grid-cols-2" : "sm:grid-cols-3"
        } gap-4 sm:gap-6 my-4`}
      >
        <SnapSelectMenu
          multi
          modalTitle="Organization"
          onClick={hideHeader}
          selectMenuOptions={orgsOptions}
          id="organization-select"
          label="Organization"
          placeholder="All"
          onSnap-select-menu-updated={(e) => {
            updateOrgSearch(multiSelectMenuUpdate(e));
          }}
        />
        <SnapSelectMenu
          multi
          modalTitle="Program Type"
          onClick={hideHeader}
          placeholder="All"
          label="Program Type"
          selectMenuOptions={programOptions}
          onSnap-select-menu-updated={(e) =>
            updateProgramSearch(multiSelectMenuUpdate(e))
          }
        />
        {statusType !== "hidden" && (
          <SnapSelectMenu
            multi
            modalTitle="Status"
            onClick={hideHeader}
            placeholder="All"
            label="Status"
            selectMenuOptions={statusOptions}
            onSnap-select-menu-updated={(e) =>
              updateStatusSearch(multiSelectMenuUpdate(e))
            }
          />
        )}
      </div>
      <div className="flex flex-row items-center flex-wrap sm:flex-nowrap mb-4">
        <SnapInput
          _id="start-date-field"
          _type="date"
          label="Start Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto"
          onInput={(e) => {
            setStartDateSearch(
              (e.target as HTMLInputElement).value.length > 0
                ? (e.target as HTMLInputElement).value
                : null
            );
          }}
        />
        <span className="hidden sm:block px-2.5 mt-5 font-bold text-gray-400">
          -
        </span>
        <SnapInput
          _id="end-date-field"
          _type="date"
          label="End Date"
          icon="calendar-line"
          icon-position="left"
          className="grow basis-full sm:basis-auto mt-4 sm:mt-0"
          onInput={(e) => {
            setEndDateSearch(
              (e.target as HTMLInputElement).value.length > 0
                ? (e.target as HTMLInputElement).value
                : null
            );
          }}
        />
      </div>
    </>
  );
};

export default ReportingFilters;
