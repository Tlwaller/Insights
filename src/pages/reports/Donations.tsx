import { useContext, useEffect, useState } from "react";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import WhiteCard from "../../components/WhiteCard";
import ReportResults from "../../components/reports/ReportResults";
import DonationsTableHeader from "../../components/reports/tableheaders/DonationsTableHeader";
import { DonationCard } from "../../components/reports/cardstructure/DonationCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { AppContext, AppState } from "../../AppGlobalState";
import {
  donationsToPrintData,
  printDonationHeaders,
} from "../../utils/PrintUtils";
import {
  InsightsCampaignDonationsQuery,
  useInsightsCampaignDonationsQuery,
} from "../../graphql/generated";
import { DonationTableData } from "./reportTypes";
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
import ReportingFilters from "../../components/reports/ReportingFilters";

const donationsResponseToTableData = (
  response: InsightsCampaignDonationsQuery,
  inverseIndex: CampaignIdInverseIndex,
  appState: AppState
): DonationTableData[] => {
  const tableData = response.insightsCampaignDonations.map((donation) => {
    const campaignId = inverseIndex[donation?.campaign_id.toString() || ""];
    return {
      id: donation?.id,
      schoolAffiliate: campaignId
        ? getOrgName(
            appState,
            getCampaignSchoolOrAffiliateId(appState, campaignId)
          )
        : "---",
      donor: donation?.donor_name,
      campaign_id: donation?.campaign_id,
      campaign: donation?.campaign_name,
      program: campaignId
        ? getOrgName(appState, getCampaignProgramId(appState, campaignId))
        : "---",
      participant: donation?.participant_name,
      amount: (donation?.amount_cents || 0) / 100,
      created_at: donation?.created_at ? new Date(donation?.created_at) : null,
    } as DonationTableData;
  });

  const distantPast = new Date(0);
  //sorted by created_at desc
  return tableData.sort((a, b) => {
    let dateA = a.created_at ? a.created_at : distantPast;
    let dateB = b.created_at ? b.created_at : distantPast;
    return dateB.getTime() - dateA.getTime();
  });
};

const filterTableData = (
  allDonations: DonationTableData[],
  appState: AppState,
  campaign: string,
  orgs: string[],
  programs: string[],
  startDate: string | null,
  endDate: string | null
): DonationTableData[] => {
  let orgProgramFilter = false;
  let orgProgramfilteredCampaings: number[] = [];
  if (
    !orgs.find((org) => org === "all") ||
    !programs.find((program) => program === "all")
  ) {
    orgProgramFilter = true;
    if (programs.find((program) => program === "all")) {
      //get campaign ids by org
      orgProgramfilteredCampaings = getCampaignRaiseIds(
        orgs.map((org) => getOrgCampaignsWithOrgId(appState, org)).flat()
      );
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

  return allDonations.filter((donation) => {
    //filter org and program
    if (orgProgramFilter) {
      const passOrgPrg =
        orgProgramfilteredCampaings.indexOf(donation.campaign_id) >= 0;
      if (!passOrgPrg) {
        return false;
      }
    }
    //filter campaign name
    if (campaign.length > 0) {
      const passCampaign = donation.campaign
        .toLowerCase()
        .includes(campaign.toLowerCase());
      if (!passCampaign) {
        return false;
      }
    }
    //filter start date
    if (startDate !== null) {
      const start = new Date(startDate + ":00:00:00");
      const passStartDate =
        donation.created_at !== null && donation.created_at >= start;
      if (!passStartDate) {
        return false;
      }
    }
    //filter end date
    if (endDate !== null) {
      const end = new Date(endDate + ":00:00:00");
      const passEndDate =
        donation.created_at !== null && donation.created_at <= end;
      if (!passEndDate) {
        return false;
      }
    }
    return true;
  });
};

const DonationsPage = () => {
  const {appState} = useContext(AppContext);
  const [campaignIds, setCampaignIds] = useState<number[]>([]);
  const [campaignIdsInverseIndex, setCampaignIdsInverseIndex] =
    useState<CampaignIdInverseIndex>({});
  const { data: campaignDonationsData, loading: loadingDonations } =
    useInsightsCampaignDonationsQuery({
      variables: { campaignIds: campaignIds },
    });
  const [donationsAll, setDonationsAll] = useState<DonationTableData[]>([]);
  const [donationsFiltered, setDonationsFiltered] = useState<
    DonationTableData[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>(
    "Donations: All Organizations"
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
    if (campaignDonationsData) {
      const data = donationsResponseToTableData(
        campaignDonationsData,
        campaignIdsInverseIndex,
        appState
      );
      setDonationsAll(data);
      setDonationsFiltered(data);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [campaignDonationsData]); //eslint-disable-line

  const filtersApplied = (
    campaignSearch: string,
    orgs: string[],
    programs: string[],
    startDate: string | null,
    endDate: string | null
  ) => {
    if (!loadingDonations) {
      const filteredData = filterTableData(
        donationsAll,
        appState,
        campaignSearch,
        orgs,
        programs,
        startDate,
        endDate
      );
      setDonationsFiltered(filteredData);
      if (orgs.find((org) => org === "all")) {
        setOrganizationName("Donations: All Organizations");
      } else {
        setOrganizationName("Donations: Selected Organizations");
      }
    }
  };

  return (
    <WhiteCard
      fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
    >
      <ReportingFilters statusType="hidden" onFiltersApplied={filtersApplied} />
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <ReportResults
        section="Donations"
        title={organizationName}
        tableColumns={DonationsTableHeader()}
        cardStructure={DonationCard}
        reportData={donationsFiltered}
        printHeaders={printDonationHeaders}
        printData={donationsToPrintData(donationsFiltered)}
        tableDataLoaded={tableDataLoaded}
      />
    </WhiteCard>
  );
};

export default DonationsPage;
