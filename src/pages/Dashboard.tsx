import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { SnapIcon } from "../suit";
import FullWidthPageHeader from "../components/FullWidthPageHeader";
import { Tabs, Tab } from "../components/Tabs";
import * as fullstory from "@fullstory/browser";
import { getPathnameParts } from "../utils/RouteUtils";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppGlobalState";
import { Org } from "../graphql/generated";
import { getOrgById } from "../data-helpers/OrgsDataHelper";
import { SplitTreatments } from "@splitsoftware/splitio-react";
import { LoadingData } from "../components/loading-empty-state/LoadingData";

const DashboardPage = () => {
  const { appState, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { dashboardId } = useParams();
  const state = useLocation().state;
  const [org, setOrg] = useState<Org | null>(
    state && state.org ? state.org : null
  );
  const [orgResolved, setOrgResolved] = useState<boolean>(org ? true : false);
  const location = useLocation();
  const pathParts = getPathnameParts(location.pathname);
  const defaultSelected = pathParts.length >= 2 ? pathParts[2] : undefined;
  const featureName = "INS-393-pre-approvals-fe"; //TODO: Move to split constants file
  const overviewTabRef = useRef<HTMLButtonElement>(null);
  const preApprovalsTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const storedTab = sessionStorage.getItem("selectedTab");
    if (storedTab) {
      dispatch({
        type: "UPDATE_DASHBOARD_TAB",
        payload: storedTab,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!appState.orgsLoading) {
      if (!org && dashboardId) {
        setOrg(getOrgById(appState, dashboardId));
        setOrgResolved(true);
      }
      if (
        (Object.keys(appState.orgsIndex).length === 0 ||
          org === undefined ||
          org === null ||
          appState.orgsIndex[org.id] === undefined) &&
        orgResolved
      ) {
        navigate(`/dashboards`);
        //TODO: improve this by adding a toast message to inform user the page does not exist/is not accessible
      }
    }
  }, [org, orgResolved, appState]); //eslint-disable-line

  useEffect(() => {
    appState.dashboardTab === "Overview"
      ? overviewTabRef.current?.click()
      : preApprovalsTabRef.current?.click();
  }, [appState.dashboardTab]);

  useEffect(() => {
    if (!location.pathname.includes("/preapprovals")) {
      dispatch({
        type: "UPDATE_DASHBOARD_TAB",
        payload: "Overview",
      });
      sessionStorage.setItem("selectedTab", "Overview");
    } else {
      sessionStorage.setItem("selectedTab", "Pre-Approvals");
    }
  }, [location.pathname, dispatch]);

  const onTabChange = (id: string) => {
    fullstory.event("Navigation Clicked", {
      navLevel: "subnav",
      buttonText: id === "overview" ? "overview" : "preapproval",
      url: `https://insights.snap.app/dashboards/${dashboardId}`, //TODO remove hardcoded url
      path: `/dashboards/${dashboardId}`,
    });

    navigate(`${id}`, { state: { org: org } }); //TODO remove state transfer
  };

  const navigateToDashboardsList = () => {
    navigate(`/dashboards`);
  };

  const renderContent = (treatmentWithConfig: SplitIO.TreatmentWithConfig) => {
    const { treatment } = treatmentWithConfig;
    if (treatment === "on" && org) {
      return (
        <Tabs onTabChange={onTabChange} defaultSelected={defaultSelected}>
          <Tab name="Overview" id="overview" tabRef={overviewTabRef} />
          <Tab
            name="Pre-Approvals"
            id="preapprovals"
            tabRef={preApprovalsTabRef}
          />
        </Tabs>
      );
    } else return <></>;
  };

  return (
    <>
      <FullWidthPageHeader className="pt-4 px-4">
        <div className="flex flex-row">
          <SnapIcon
            icon="arrow-sm-left-line"
            size="md"
            className="mr-2 sm:mr-4 cursor-pointer text-gray-700"
            onClick={navigateToDashboardsList}
          />
          <h4 className="flex-1 text-gray-800 text-base sm:text-xl font-medium">
            {org && org.name}
          </h4>
        </div>
        <div className="flex flex-row pt-2 pb-0 pl-4">
          <SplitTreatments names={[featureName]}>
            {({ treatments, isReady }) => {
              return isReady ? (
                renderContent(treatments[featureName])
              ) : (
                <LoadingData />
              );
            }}
          </SplitTreatments>
        </div>
      </FullWidthPageHeader>
      <div className="pt-3.5 pb-[55px] sm:px-6">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardPage;
