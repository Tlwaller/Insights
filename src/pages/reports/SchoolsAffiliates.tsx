import { useContext, useEffect, useState } from "react";
import { SnapDivider, SnapDividerLabel } from "../../suit";
import WhiteCard from "../../components/WhiteCard";
import SchoolsAffiliatesFilters from "../../components/reports/SchoolsAffiliatesFilters";
import ReportResults from "../../components/reports/ReportResults";
import SchoolsAffiliatesTableHeader from "../../components/reports/tableheaders/SchoolsAffiliatesTableHeader";
import { SchoolAffiliateCard } from "../../components/reports/cardstructure/SchoolAffiliateCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { AppContext } from "../../AppGlobalState";
import {
  printSchoolAffiliateHeaders,
  schoolsAffiliatesToPrintData,
} from "../../utils/PrintUtils";
import { CampaignsSummaryParam, SchoolAffiliateTableData } from "./reportTypes";
import {
  getAllSchoolsAffiliates,
  getCampaignRaiseIds,
  getOrgCampaignsWithOrg,
} from "../../data-helpers/OrgsDataHelper";
import {
  InsightsOrgsCampaignsSummaryQuery,
  Org,
  useInsightsOrgsCampaignsSummaryLazyQuery,
} from "../../graphql/generated";

const schoolsAffiliatesResponseToTableData = (
  response: InsightsOrgsCampaignsSummaryQuery,
  schoolsAffiliates: Org[]
): SchoolAffiliateTableData[] => {
  const tableData = schoolsAffiliates.map((schoolAffiliate) => {
    const summary = response.insightsOrgsCampaignsSummary.find(
      (sum) => sum?.orgId === schoolAffiliate.id
    );
    return {
      id: schoolAffiliate.id,
      schoolAffiliate: schoolAffiliate.name,
      organization: schoolAffiliate.type === "School" ? "School" : "Affiliate",
      totalRaised: (summary?.totalRaisedCents || 0) / 100,
      numberCampaigns: summary?.campaignsCount || 0,
    } as SchoolAffiliateTableData;
  });

  //NOTE: no sorting attribute defined yet
  return tableData;
};

const filterTableData = (
  allSchoolsAffiliates: SchoolAffiliateTableData[],
  schAffSearch: string,
  orgType: string,
  startDate: string | null,
  endDate: string | null
): SchoolAffiliateTableData[] => {
  return allSchoolsAffiliates.filter((schoolAffiliate) => {
    //filter org type
    if (orgType !== "all") {
      const passOrgType =
        schoolAffiliate.organization.toLowerCase() === orgType;
      if (!passOrgType) {
        return false;
      }
    }
    //filter name
    if (schAffSearch.length > 0) {
      const passName = schoolAffiliate.schoolAffiliate
        .toLowerCase()
        .includes(schAffSearch.toLowerCase());
      if (!passName) {
        return false;
      }
    }
    //NOTE: No date values found associated to schools/affiliates
    //TODO: filter start date
    //TODO: filter end date
    return true;
  });
};

const SchoolsAffiliatesPage = () => {
  const {appState} = useContext(AppContext);
  const [schoolsAffiliates, setSchoolsAffiliates] = useState<Org[]>([]);
  const [schoolsAffiliatesAll, setSchoolsAffiliatesAll] = useState<
    SchoolAffiliateTableData[]
  >([]);
  const [schoolsAffiliatesFiltered, setSchoolsAffiliatesFiltered] = useState<
    SchoolAffiliateTableData[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);
  const [orgTypeName, setOrgTypeName] = useState<string>(
    "Schools and Affiliates"
  );
  const [fetchSummaries, { data: summaryData, loading: summaryDataLoading }] =
    useInsightsOrgsCampaignsSummaryLazyQuery({
      variables: { orgCampaignIds: [] },
    });

  useEffect(() => {
    if (!appState.orgsLoading) {
      setSchoolsAffiliates(getAllSchoolsAffiliates(appState));
    }
  }, [appState.orgsLoading]); //eslint-disable-line

  useEffect(() => {
    if (schoolsAffiliates.length > 0) {
      const summaryParams: CampaignsSummaryParam[] = [];
      schoolsAffiliates.forEach((schoolAffiliate) => {
        const campaignIds = getCampaignRaiseIds(
          getOrgCampaignsWithOrg(appState, schoolAffiliate)
        );
        summaryParams.push({
          orgId: schoolAffiliate.id,
          campaignIds: campaignIds,
        });
      });
      fetchSummaries({ variables: { orgCampaignIds: summaryParams } });
    }
  }, [schoolsAffiliates]); //eslint-disable-line

  useEffect(() => {
    if (!summaryDataLoading && summaryData) {
      const data = schoolsAffiliatesResponseToTableData(
        summaryData,
        schoolsAffiliates
      );
      setSchoolsAffiliatesAll(data);
      setSchoolsAffiliatesFiltered(data);
      setTableDataLoaded(true);
      //TODO reset filters
    }
  }, [summaryDataLoading, summaryData]); //eslint-disable-line

  const filtersApplied = (
    schAffSearch: string,
    orgType: string,
    startDate: string | null,
    endDate: string | null
  ) => {
    if (!appState.orgsLoading && !summaryDataLoading) {
      const filteredData = filterTableData(
        schoolsAffiliatesAll,
        schAffSearch,
        orgType,
        startDate,
        endDate
      );
      setSchoolsAffiliatesFiltered(filteredData);
      if (orgType === "all") {
        setOrgTypeName("Schools and Affiliates");
      } else {
        if (orgType === "school") {
          setOrgTypeName("Schools");
        } else {
          setOrgTypeName("Affiliates");
        }
      }
    }
  };

  return (
    <WhiteCard
      fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
    >
      <SchoolsAffiliatesFilters onFiltersApplied={filtersApplied} />
      <SnapDivider>
        <SnapDividerLabel></SnapDividerLabel>
      </SnapDivider>
      <ReportResults
        section="Schools/Affiliates"
        title={orgTypeName}
        tableColumns={SchoolsAffiliatesTableHeader()}
        cardStructure={SchoolAffiliateCard}
        reportData={schoolsAffiliatesFiltered}
        printHeaders={printSchoolAffiliateHeaders}
        printData={schoolsAffiliatesToPrintData(schoolsAffiliatesFiltered)}
        tableDataLoaded={tableDataLoaded}
      />
    </WhiteCard>
  );
};

export default SchoolsAffiliatesPage;
