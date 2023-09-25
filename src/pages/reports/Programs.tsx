import { useContext, useEffect, useState } from "react";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import WhiteCard from "../../components/WhiteCard";
import ReportResults from "../../components/reports/ReportResults";
import ProgramsTableHeader from "../../components/reports/tableheaders/ProgramsTableHeader";
import { ProgramCard } from "../../components/reports/cardstructure/ProgramCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { AppContext, AppState } from "../../AppGlobalState";
import {
  printProgramHeaders,
  programsToPrintData,
} from "../../utils/PrintUtils";
import {
  InsightsOrgsCampaignsSummaryQuery,
  Org,
  useInsightsOrgsCampaignsSummaryLazyQuery,
} from "../../graphql/generated";
import { CampaignsSummaryParam, ProgramTableData } from "./reportTypes";
import {
  getAllPrograms,
  getCampaignRaiseIds,
  getOrgCampaignsWithOrg,
  getOrgIds,
  getOrgName,
  getOrgProgramsWithOrgId,
} from "../../data-helpers/OrgsDataHelper";
import ReportingFilters from "../../components/reports/ReportingFilters";

const programsResponseToTableData = (
  response: InsightsOrgsCampaignsSummaryQuery,
  programs: Org[],
  appState: AppState
): ProgramTableData[] => {
  const tableData = programs.map((program) => {
    const summary = response.insightsOrgsCampaignsSummary.find(
      (sum) => sum?.orgId === program.id
    );
    return {
      id: program.id,
      schoolAffiliate: getOrgName(appState, program.parentId || ""),
      program: program.name,
      totalRaised: (summary?.totalRaisedCents || 0) / 100,
      numberCampaigns: summary?.campaignsCount || 0,
    } as ProgramTableData;
  });

  //NOTE: no sorting attribute defined yet
  return tableData;
};

const filterTableData = (
  allPrograms: ProgramTableData[],
  appState: AppState,
  schAffSearch: string,
  orgs: string[],
  programs: string[],
  startDate: string | null,
  endDate: string | null
): ProgramTableData[] => {
  let orgProgramFilter = false;
  let orgProgramfilteredPrograms: string[] = [];
  if (
    !orgs.find((org) => org === "all") ||
    !programs.find((program) => program === "all")
  ) {
    orgProgramFilter = true;
    if (programs.find((program) => program === "all")) {
      //get campaign ids by org
      orgProgramfilteredPrograms = getOrgIds(
        orgs.map((org) => getOrgProgramsWithOrgId(appState, org)).flat()
      );
    } else {
      //get programs ids from filter
      orgProgramfilteredPrograms = programs as string[];
    }
  }

  return allPrograms.filter((program) => {
    //filter org and program
    if (orgProgramFilter) {
      const passOrgPrg = orgProgramfilteredPrograms.indexOf(program.id) >= 0;
      if (!passOrgPrg) {
        return false;
      }
    }
    //filter school affiliate name
    if (schAffSearch.length > 0) {
      const passName = program.schoolAffiliate
        .toLowerCase()
        .includes(schAffSearch.toLowerCase());
      if (!passName) {
        return false;
      }
    }
    //NOTE: No date values found associated to programs
    //TODO: filter start date
    //TODO: filter end date
    return true;
  });
};

const ProgramsPage = () => {
  const {appState} = useContext(AppContext);
  const [programs, setPrograms] = useState<Org[]>([]);
  const [programsAll, setProgramsAll] = useState<ProgramTableData[]>([]);
  const [programsFiltered, setProgramsFiltered] = useState<ProgramTableData[]>(
    []
  );
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>(
    "Programs: All Organizations"
  );
  const [fetchSummaries, { data: summaryData, loading: summaryDataLoading }] =
    useInsightsOrgsCampaignsSummaryLazyQuery({
      variables: { orgCampaignIds: [] },
    });

  useEffect(() => {
    if (!appState.orgsLoading) {
      setPrograms(getAllPrograms(appState));
    }
  }, [appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    if (programs.length > 0) {
      const summaryParams: CampaignsSummaryParam[] = [];
      programs.forEach((program) => {
        const campaignIds = getCampaignRaiseIds(
          getOrgCampaignsWithOrg(appState, program)
        );
        summaryParams.push({
          orgId: program.id,
          campaignIds: campaignIds,
        });
      });
      fetchSummaries({ variables: { orgCampaignIds: summaryParams } });
    }
  }, [programs]); //eslint-disable-line

  useEffect(() => {
    if (!summaryDataLoading && summaryData) {
      const data = programsResponseToTableData(summaryData, programs, appState);
      setProgramsAll(data);
      setProgramsFiltered(data);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [summaryDataLoading, summaryData]); //eslint-disable-line

  const filtersApplied = (
    campaignSearch: string,
    orgs: string[],
    programs: string[],
    startDate: string | null,
    endDate: string | null
  ) => {
    if (!appState.orgsLoading && !summaryDataLoading) {
      const filteredData = filterTableData(
        programsAll,
        appState,
        campaignSearch,
        orgs,
        programs,
        startDate,
        endDate
      );
      setProgramsFiltered(filteredData);
      if (orgs.find((org) => org === "all")) {
        setOrganizationName("Programs: All Organizations");
      } else {
        setOrganizationName("Programs: Selected Organizations");
      }
    }
  };

  return (
    <WhiteCard
      fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
    >
      <ReportingFilters onFiltersApplied={filtersApplied} statusType="hidden" />
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <ReportResults
        section="Programs"
        title={organizationName}
        tableColumns={ProgramsTableHeader()}
        cardStructure={ProgramCard}
        reportData={programsFiltered}
        printHeaders={printProgramHeaders}
        printData={programsToPrintData(programsFiltered)}
        tableDataLoaded={tableDataLoaded}
      />
    </WhiteCard>
  );
};

export default ProgramsPage;
