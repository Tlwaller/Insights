import { useContext, useEffect, useState } from "react";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import WhiteCard from "../../components/WhiteCard";
import ReportResults from "../../components/reports/ReportResults";
import SettlementsTableHeader from "../../components/reports/tableheaders/SettlementsTableHeader";
import { SettlementCard } from "../../components/reports/cardstructure/SettlementCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { AppContext, AppState } from "../../AppGlobalState";
import {
  printSettlementHeaders,
  settlementsToPrintData,
} from "../../utils/PrintUtils";
import {
  InsightsCampaignSettlementsQuery,
  useInsightsCampaignSettlementsQuery,
} from "../../graphql/generated";
import { SettlementTableData } from "./reportTypes";
import { capitalize, dateMMDDYY } from "../../utils/RenderDataUtils";
import {
  CampaignIdInverseIndex,
  getAllCampaigns,
  getCampaignIdsInverseIndex,
  getCampaignRaiseIds,
  getCampaignSchoolOrAffiliateId,
  getOrgCampaignsWithOrgId,
  getOrgName,
} from "../../data-helpers/OrgsDataHelper";
import ReportingFilters from "../../components/reports/ReportingFilters";

export const settlementsResponseToTableData = (
  response: InsightsCampaignSettlementsQuery,
  inverseIndex: CampaignIdInverseIndex,
  appState: AppState
): SettlementTableData[] => {
  const tableData = response.insightsCampaignSettlements.map((settlement) => {
    const date = new Date(settlement?.last_updated);
    const campaignId = inverseIndex[settlement?.campaign_id.toString() || ""];
    const method = settlement?.method
      ? settlement?.method.replace("_", " ")
      : "";
    return {
      id: settlement?.id,
      schoolAffiliate: campaignId
        ? getOrgName(
            appState,
            getCampaignSchoolOrAffiliateId(appState, campaignId)
          )
        : "---",
      campaign_id: settlement?.campaign_id,
      campaign: settlement?.campaign_name,
      method: settlement?.method ? capitalize(method) : "",
      status: settlement?.status,
      amount: (settlement?.amount_cents || 0) / 100,
      lastUpdatedDate: settlement?.last_updated ? date : null,
      lastUpdated: settlement?.last_updated ? dateMMDDYY(date) : "",
    } as SettlementTableData;
  });

  const distantPast = new Date(0);
  //sorted by lastUpdatedDate desc
  return tableData.sort((a, b) => {
    let dateA = a.lastUpdatedDate ? a.lastUpdatedDate : distantPast;
    let dateB = b.lastUpdatedDate ? b.lastUpdatedDate : distantPast;
    return dateB.getTime() - dateA.getTime();
  });
};
const filterTableData = (
  allSettlements: SettlementTableData[],
  appState: AppState,
  campaign: string,
  orgs: string[],
  programs: string[],
  startDate: string | null,
  endDate: string | null,
  statuses?: string[]
): SettlementTableData[] => {
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

  return allSettlements.filter((settlement) => {
    //filter org and program
    if (orgProgramFilter) {
      const passOrgPrg =
        orgProgramfilteredCampaings.indexOf(settlement.campaign_id) >= 0;
      if (!passOrgPrg) {
        return false;
      }
    }
    //filter campaign name
    if (campaign.length > 0) {
      const passCampaign = settlement.campaign
        .toLowerCase()
        .includes(campaign.toLowerCase());
      if (!passCampaign) {
        return false;
      }
    }
    //filter status
    if (statuses && !statuses.find((status) => status === "all")) {
      if (
        statuses.filter((status) => status === settlement.status).length === 0
      ) {
        return false;
      }
    }
    //filter start date
    if (startDate !== null) {
      const start = new Date(startDate + ":00:00:00");
      const passStartDate =
        settlement.lastUpdatedDate !== null &&
        settlement.lastUpdatedDate >= start;
      if (!passStartDate) {
        return false;
      }
    }
    //filter end date
    if (endDate !== null) {
      const end = new Date(endDate + ":00:00:00");
      const passEndDate =
        settlement.lastUpdatedDate !== null &&
        settlement.lastUpdatedDate <= end;
      if (!passEndDate) {
        return false;
      }
    }
    return true;
  });
};

const SettlementsPage = () => {
  const {appState} = useContext(AppContext);
  const [campaignIds, setCampaignIds] = useState<number[]>([]);
  const [campaignIdsInverseIndex, setCampaignIdsInverseIndex] =
    useState<CampaignIdInverseIndex>({});
  const { data: campaignSettlementsData, loading: loadingSettlements } =
    useInsightsCampaignSettlementsQuery({
      variables: { campaignIds: campaignIds },
    });
  const [settlementsAll, setSettlementsAll] = useState<SettlementTableData[]>(
    []
  );
  const [settlementsFiltered, setSettlementsFiltered] = useState<
    SettlementTableData[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>(
    "Settlements: All Organizations"
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
    if (campaignSettlementsData) {
      const data = settlementsResponseToTableData(
        campaignSettlementsData,
        campaignIdsInverseIndex,
        appState
      );
      setSettlementsAll(data);
      setSettlementsFiltered(data);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [campaignSettlementsData]); //eslint-disable-line

  const filtersApplied = (
    campaignSearch: string,
    orgs: string[],
    programs: string[],
    startDate: string | null,
    endDate: string | null,
    statuses?: string[]
  ) => {
    if (!loadingSettlements) {
      const filteredData = filterTableData(
        settlementsAll,
        appState,
        campaignSearch,
        orgs,
        programs,
        startDate,
        endDate,
        statuses
      );
      setSettlementsFiltered(filteredData);
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
        statusType="settlement"
      />
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <ReportResults
        section="Settlements"
        title={organizationName}
        tableColumns={SettlementsTableHeader()}
        cardStructure={SettlementCard}
        reportData={settlementsFiltered}
        printHeaders={printSettlementHeaders}
        printData={settlementsToPrintData(settlementsFiltered)}
        tableDataLoaded={tableDataLoaded}
      />
    </WhiteCard>
  );
};

export default SettlementsPage;
