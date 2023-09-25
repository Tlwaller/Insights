import { Outlet, useNavigate, useLocation } from "react-router-dom";
import FullWidthPageHeader from "../components/FullWidthPageHeader";
import { Tabs, Tab } from "../components/Tabs";
import { getPathnameParts } from "../utils/RouteUtils";
import * as fullstory from "@fullstory/browser";

const ReportingPage = () => {
  const location = useLocation();
  const pathParts = getPathnameParts(location.pathname);
  const defaultSelected = pathParts.length >= 2 ? pathParts[1] : undefined;
  const navigate = useNavigate();

  const onTabChange = (id: string) => {
    fullstory.event("Navigation Clicked", {
      navLevel: "subnav",
      buttonText: id === "schools-affiliates" ? "schools/affiliates" : id,
      url: `https://insights.snap.app/reporting/${id}`,
      path: `/reporting/${id}`,
    });
    navigate(`/reporting/${id}`);
  };

  return (
    <>
      <FullWidthPageHeader className="pt-4 pb-0 px-4 sm:px-6">
        <h4 className="text-gray-800 font-medium text-2xl">Reporting</h4>
        <Tabs onTabChange={onTabChange} defaultSelected={defaultSelected}>
          <Tab name="Campaigns" id="campaigns" />
          <Tab name="Settlements" id="settlements" />
          <Tab name="Schools/Affiliates" id="schools-affiliates" />
          <Tab name="Programs" id="programs" />
          {/* <Tab name="KYC/Forms" id="kyc-forms" /> */}
          <Tab name="Donations" id="donations" />
          {/* <Tab name="Deposits" id="deposits" /> */}
        </Tabs>
      </FullWidthPageHeader>
      <div className="py-3.5 sm:px-6">
        <Outlet />
      </div>
    </>
  );
};

export default ReportingPage;
