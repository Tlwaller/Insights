import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppGlobalState";
import WhiteCardWithTitle from "../../components/WhiteCardWithTitle";
import NoFundraiserData from "../../components/loading-empty-state/NoFundraiserData";
import { NoResults } from "../../components/loading-empty-state/NoResults";
import ActionCenter from "../../components/widgets/ActionCenter";
import Analytics from "../../components/widgets/Analytics";
import CampaignList from "../../components/widgets/CampaignList";
import DonationsMap from "../../components/widgets/DonationsMap";
import LTRReport from "../../components/widgets/LTRReport";
import Shortcuts from "../../components/widgets/Shortcuts";
import {
  getLTRChart,
  getCampaignStats,
  getDonationsMapStats,
  getAnalyticsSummaryStats,
  getMonthlyCampaignStats,
  getInviteStats,
} from "../../data-helpers/InsightsCampaignsDataHelper";
import {
  ProgramGroup,
  combineProgramsByName,
  getCampaignRaiseIds,
  getOrgById,
  getOrgCampaignsWithOrgId,
  getOrgProgramsWithOrgId,
  getProgramListCampaigns,
} from "../../data-helpers/OrgsDataHelper";
import { useInsightsCampaignsDataQuery } from "../../graphql/generated";
import { LoadingData } from "../../components/loading-empty-state/LoadingData";
import WhiteCard from "../../components/WhiteCard";
import { SnapSelectMenu } from "../../suit";
import { selectMenuUpdate } from "../../utils/ArrayUtils";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { SnapSelectMenuOption } from "@snap-mobile/snap-ui/dist/types/utils";

const OverviewPage = () => {
  const {appState} = useContext(AppContext);
  const {dashboardId} = useParams();
  const org = getOrgById(appState, dashboardId || '');
  const campaigns = getOrgCampaignsWithOrgId(appState, dashboardId as string);
  const campaignIds = campaigns && getCampaignRaiseIds(campaigns);
  const [currentCampaignIds, setCurrentCampaignIds] = useState<number[]>([]);
  const { data: campaignsData, loading: campaignsDataLoading } =
    useInsightsCampaignsDataQuery({
      variables: { campaignIds: currentCampaignIds },
    });
  const [program, setProgram] = useState("All Programs");
  const [currentProgramsList, setCurrentProgramsList] =
    useState<ProgramGroup | null>(null);
  const defaultOptions = {
    name: "All Programs",
    selected: program === "All Programs" ? true : false,
  };
  const [options, setOptions] = useState<SnapSelectMenuOption[]>([
    defaultOptions,
  ]);
  const ref = useRef<HTMLSnapIconElement>(null);
  const hideHeader = () => {
    if (ref.current && appState.windowSize.screen === "sm") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!appState.orgsLoading) {
      const programs = getOrgProgramsWithOrgId(appState, (org && org.id) || "");
      setCurrentProgramsList(combineProgramsByName(programs));
      setCurrentCampaignIds(campaignIds);
    }
  }, [org, appState]); //eslint-disable-line

  useEffect(() => {
    if (currentProgramsList) {
      if (program === "All Programs") {
        setCurrentCampaignIds(campaignIds);
      } else {
        const filteredCampaigns = getProgramListCampaigns(
          appState,
          currentProgramsList[program]
        );
        const filteredCampaignsIds = getCampaignRaiseIds(filteredCampaigns);
        setCurrentCampaignIds(filteredCampaignsIds);
      }
    }
  }, [program]); //eslint-disable-line

  useEffect(() => {
    setOptions(
      [
        defaultOptions,
        Object.keys(currentProgramsList || {})
          .map((p) => ({ name: p, selected: p === program ? true : false }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      ].flat()
    );
  }, [currentProgramsList, program]); //eslint-disable-line

  if (appState.orgsLoading || campaignsDataLoading) {
    return <LoadingData className="h-screen" />;
  } else
    return (
      <>
        <div className="py-4 sm:px-6">
          <WhiteCard
            className="flex flex-row items-end justify-between flex-wrap sm:flex-nowrap cursor-pointer relative"
            fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
          >
            <SnapSelectMenu
              onClick={hideHeader}
              modalTitle="Programs"
              className="w-full"
              selectMenuOptions={options}
              onSnap-select-menu-updated={(e) =>
                setProgram(selectMenuUpdate(e))
              }
            />
          </WhiteCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
            {campaignsData ? (
              <LTRReport
                className="col-span-1 md:col-span-2"
                programType={program}
                data={getLTRChart(campaignsData)}
              />
            ) : (
              <NoFundraiserData />
            )}
            <ActionCenter
              campaigns={getCampaignStats(campaignsData)}
              loadingData={campaignsDataLoading}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DonationsMap
              className="block col-span-1 md:col-span-2"
              data={getDonationsMapStats(campaignsData)}
            />
            <Shortcuts />
          </div>
          <div className="py-4 flex justify-center items-center">
            <Analytics
              analyticsSummaryStats={getAnalyticsSummaryStats(campaignsData)}
              monthlyCampaignStats={getMonthlyCampaignStats(campaignsData)}
              inviteStats={getInviteStats(campaignsData)}
              empty={!campaignsData}
            />
          </div>
          {campaignsData ? (
            <CampaignList campaigns={getCampaignStats(campaignsData)} />
          ) : (
            <WhiteCardWithTitle title="Campaign List" className="pb-24">
              <NoResults title="No Fundraisers to Show Yet" />
              <p className="text-center text-gray-500 -mt-72">
                You'll be able to see your organization's fundraising data here.
              </p>
            </WhiteCardWithTitle>
          )}
        </div>
      </>
    );
};

export default OverviewPage;
