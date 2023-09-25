
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import App from "./App";
import DashboardsPage from "./pages/Dashboards";
import DashboardPage from "./pages/Dashboard";
import ReportingPage from "./pages/Reporting";
import CampaignsPage from './pages/reports/Campaigns';
import SettlementsPage from './pages/reports/Settlements';
import SchoolsAffiliatesPage from './pages/reports/SchoolsAffiliates';
import ProgramsPage from './pages/reports/Programs';
import KYCFormsPage from './pages/reports/KYCForms';
import DonationsPage from './pages/reports/Donations';
import DepositsPage from './pages/reports/Deposits';
import RollupPage from "./pages/Rollup";
import SettingsPage from "./pages/Settings";
import Notifications from './pages/settings/Notifications';
import Support from './pages/settings/Support';
import PreApprovalPage from './pages/dashboardTabs/preApproval';
import OverviewPage from './pages/dashboardTabs/overview';
import PreApprovalCTAPage from "./pages/PreApprovalCTA";

const routes: RouteObject[] = [
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Navigate to="dashboards"/>, index:true},
      { 
        element: <PreApprovalCTAPage />, 
        path: "pre-approvals-cta",
      },
      { 
        element: <DashboardsPage />, 
        path: "dashboards",
      },
      { 
        path: "dashboards/",
        element: <DashboardsPage />, 
        children: [
          {
            element: <DashboardPage/>,
            path: ":dashboardId/",
            children: [
              {element: <OverviewPage/>, path: "overview"},
              {element: <PreApprovalPage/>, path: "preapprovals"},
              {element: <Navigate to="overview"/>, path: "*"},
              {element: <Navigate to="overview"/>, path: ""}
            ]
          },
          {element: <Navigate to="dashboards"/>, path: "*"},
          {element: <Navigate to="dashboards"/>, path: ""}
        ]
      },
      { 
        element: <ReportingPage />, 
        path: "reporting",
        children: [
          { element: <CampaignsPage />, path: "campaigns"},
          { element: <SettlementsPage />, path: "settlements" },
          { element: <SchoolsAffiliatesPage />, path: "schools-affiliates" },
          { element: <ProgramsPage />, path: "programs" },
          { element: <KYCFormsPage />, path: "kyc-forms" },
          { element: <DonationsPage />, path: "donations" },
          { element: <DepositsPage />, path: "deposits" },
          { element: <Navigate to="campaigns"/>, path: "*"},
          { element: <Navigate to="campaigns"/>, path: ""}
        ],
      },
      { element: <RollupPage />, path: "rollup" },
      { 
        element: <SettingsPage />, 
        path: "settings",
        children: [
          { element: <Notifications />, path: "notifications"},
          { element: <Support />, path: "support" },
          { element: <Navigate to="notifications"/>, path: "*"},
          { element: <Navigate to="notifications"/>, path: ""}
        ],
      },
      { element: <Navigate to="dashboards"/>, path: "*"}
    ],
  },
];

export const noPaddingRoutes = [
  '/reporting',
  '/dashboards',
  '/dashboards/',
  '/rollup',
  '/settings'
];

function AppRouter() {
  const element = useRoutes(routes);

  return element;
}

export default AppRouter;
