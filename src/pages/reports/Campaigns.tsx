import { useContext, useEffect, useState } from "react";
import { AppContext, AppState } from "../../AppGlobalState";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import WhiteCard from "../../components/WhiteCard";
import ReportResults from "../../components/reports/ReportResults";
import CampaignsTableHeader from "../../components/reports/tableheaders/CampaignsTableHeader";
import { CampaignCard } from "../../components/reports/cardstructure/CampaignCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import {
  campaignsToPrintData,
  printCampaignHeaders,
} from "../../utils/PrintUtils";
import { CampaignTableData } from "./reportTypes";
import {
  CampaignIdInverseIndex,
  getAllCampaigns,
  getCampaignIdsInverseIndex,
  getCampaignProgramId,
  getCampaignRaiseIds,
  getCampaignSchoolOrAffiliateId,
  getOrgCampaignsWithOrgId,
  getOrgName,
} from "../../data-helpers/OrgsDataHelper";
import {
  InsightsCampaignsDataForReportingQuery,
  useInsightsCampaignsDataForReportingQuery,
} from "../../graphql/generated";
import ReportingFilters from "../../components/reports/ReportingFilters";

export const campaignsResponseToTableData = (
  response: InsightsCampaignsDataForReportingQuery,
  inverseIndex: CampaignIdInverseIndex,
  appState: AppState
): CampaignTableData[] => {
  const tableData =
    response.insightsCampaignsData.campaignStats?.map((campaign) => {
      const date = new Date(campaign?.start_date);
      const campaignId = inverseIndex[campaign?.id.toString() || ""];
      return {
        id: campaign?.id,
        schoolAffiliate: campaignId
          ? getOrgName(
              appState,
              getCampaignSchoolOrAffiliateId(appState, campaignId)
            )
          : "---",
        campaign: campaign?.name,
        program: campaignId
          ? getOrgName(appState, getCampaignProgramId(appState, campaignId))
          : "---",
        status: campaign?.insights_status,
        totalRaised: (campaign?.total_raised_cents || 0) / 100,
        startDate: campaign?.start_date ? date : null,
      } as CampaignTableData;
    }) || [];

  const distantPast = new Date(0);
  //sorted by startDate desc
  return tableData.sort((a, b) => {
    let dateA = a.startDate ? a.startDate : distantPast;
    let dateB = b.startDate ? b.startDate : distantPast;
    return dateB.getTime() - dateA.getTime();
  });
};

const filterTableData = (
  allCampaigns: CampaignTableData[],
  appState: AppState,
  campaignSearch: string,
  orgs: string[],
  programs: string[],
  startDate: string | null,
  endDate: string | null,
  statuses?: string[]
): CampaignTableData[] => {
  let orgProgramFilter = false;
  let orgProgramfilteredCampaings: number[] = [];
  if (
    !orgs.find((org) => org === "all") ||
    !programs.find((program) => program === "all")
  ) {
    orgProgramFilter = true;
    if (programs.find((program) => program === "all")) {
      //get campaign ids by org
      orgProgramfilteredCampaings = orgs
        .map((org) =>
          getCampaignRaiseIds(getOrgCampaignsWithOrgId(appState, org))
        )
        .flat();
    } else {
      //get campaign ids by programs
      const programsList = programs as string[];
      programsList.forEach((prog) => {
        orgProgramfilteredCampaings.push(
          ...getCampaignRaiseIds(getOrgCampaignsWithOrgId(appState, prog))
        );
      });
    }
  }

  return allCampaigns.filter((campaign) => {
    //filter org and program
    if (orgProgramFilter) {
      const passOrgPrg = orgProgramfilteredCampaings.indexOf(campaign.id) >= 0;
      if (!passOrgPrg) {
        return false;
      }
    }
    //filter campaign name
    if (campaignSearch.length > 0) {
      const passCampaign = campaign.campaign
        .toLowerCase()
        .includes(campaignSearch.toLowerCase());
      if (!passCampaign) {
        return false;
      }
    }
    //filter status
    if (statuses && !statuses.find((status) => status === "all")) {
      if (
        statuses.filter((status) => status === campaign.status).length === 0
      ) {
        return false;
      }
    }
    //filter start date
    if (startDate !== null) {
      const start = new Date(startDate + ":00:00:00");
      const passStartDate =
        campaign.startDate !== null && campaign.startDate >= start;
      if (!passStartDate) {
        return false;
      }
    }
    //filter end date
    if (endDate !== null) {
      const end = new Date(endDate + ":00:00:00");
      const passEndDate =
        campaign.startDate !== null && campaign.startDate <= end;
      if (!passEndDate) {
        return false;
      }
    }
    return true;
  });
};

const CampaignsPage = () => {
  const {appState} = useContext(AppContext);
  const [campaignIds, setCampaignIds] = useState<number[]>([]);
  const [campaignIdsInverseIndex, setCampaignIdsInverseIndex] =
    useState<CampaignIdInverseIndex>({});
  const { data: campaignsData, loading: loadingCampaigns } =
    useInsightsCampaignsDataForReportingQuery({
      variables: { campaignIds: campaignIds },
    });
  const [campaignsAll, setCampaignsAll] = useState<CampaignTableData[]>([]);
  const [campaignsFiltered, setCampaignsFiltered] = useState<
    CampaignTableData[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>(
    "Campaigns: All Organizations"
  );

  useEffect(() => {
    if (!appState.orgsLoading) {
      const allCampaigns = getAllCampaigns(appState);
      //create inverse index
      setCampaignIdsInverseIndex(getCampaignIdsInverseIndex(allCampaigns));
      setCampaignIds(getCampaignRaiseIds(allCampaigns));
    }
  }, [appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    if (campaignsData) {
      const data = campaignsResponseToTableData(
        campaignsData,
        campaignIdsInverseIndex,
        appState
      );
      setCampaignsAll(data);
      setCampaignsFiltered(data);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [campaignsData]); //eslint-disable-line

  const filtersApplied = (
    campaignSearch: string,
    orgs: string[],
    programs: string[],
    startDate: string | null,
    endDate: string | null,
    statuses?: string[]
  ) => {
    if (!loadingCampaigns) {
      const filteredData = filterTableData(
        campaignsAll,
        appState,
        campaignSearch,
        orgs,
        programs,
        startDate,
        endDate,
        statuses
      );
      setCampaignsFiltered(filteredData);
      if (orgs.find((org) => org === "all")) {
        setOrganizationName("Campaigns: All Organizations");
      } else {
        setOrganizationName("Campaigns: Selected Organizations");
      }
    }
  };

  return (
    <WhiteCard
      fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
    >
      <ReportingFilters
        onFiltersApplied={filtersApplied}
        statusType="campaign"
      />
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <ReportResults
        section="Campaigns"
        title={organizationName}
        tableColumns={CampaignsTableHeader()}
        cardStructure={CampaignCard}
        reportData={campaignsFiltered}
        printHeaders={printCampaignHeaders}
        printData={campaignsToPrintData(campaignsFiltered)}
        tableDataLoaded={tableDataLoaded}
      />
    </WhiteCard>
  );
};

export default CampaignsPage;
