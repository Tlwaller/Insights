import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppGlobalState";
import WhiteCard from "../../components/WhiteCard";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { SnapButton } from "../../suit";
import { Navigate, useLocation, useParams } from "react-router-dom";
import {
  getAffiliatesFromDistrict,
  getOrgById,
  getOrgId,
  getOrgRaiseId,
  getOrgRaiseIds,
  getSchoolsFromDistrict,
} from "../../data-helpers/OrgsDataHelper";
import { LoadingData } from "../../components/loading-empty-state/LoadingData";
import {
  InsPreApprovedContact,
  Org,
  useInsightsPreApprovedContactsLazyQuery,
} from "../../graphql/generated";
import PreApprovalsSwitch from "../../components/preApprovals/preApprovalsSwitch";
import { groupPreApprovalsByAssociatedOrg } from "../../data-helpers/PreapprovalsDataHelper";
import PreApprovalsModal from "../../components/modals/PreApprovalsModal";
import { useClient } from "@splitsoftware/splitio-react";
import InvitesSentModal from "../../components/modals/InvitesSentModal";

const PreApprovalPage = () => {
  const { appState, dispatch } = useContext(AppContext);
  const { dashboardId } = useParams();
  const org = getOrgById(appState, dashboardId || "");
  const [orgSchools, setOrgSchools] = useState<Org[]>([]);
  const [viewDistrict, setViewDistrict] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const location = useLocation();
  const { numForms } = location?.state || {};
  const [showPrompt, setShowPrompt] = useState(location?.state?.showPrompt);
  const [fetchPreApprovedContacts, { data: contactsData, refetch }] =
  useInsightsPreApprovedContactsLazyQuery({ 
    variables: { orgIds: [] },
  });
  const featureName = "INS-393-pre-approvals-fe";
  const splitClient = useClient();
  const { treatment } = splitClient?.getTreatmentWithConfig(featureName) as SplitIO.TreatmentWithConfig;
  useEffect(() => {
    let ids: number[] = [];
    if(org) {
      if (org.type === "District") {
        setViewDistrict(true);
        const districtSchools = getSchoolsFromDistrict(appState, org);
        const districtAffiliates = getAffiliatesFromDistrict(appState, org);
        const districtOrgs = [...districtSchools, ...districtAffiliates];
        setOrgSchools(districtOrgs);
        ids = getOrgRaiseIds(districtOrgs);
      } else {
        setViewDistrict(false);
        setOrgSchools([]);
        ids.push(getOrgRaiseId(org));
      }
      if (appState.preApprovalsOrgId !== getOrgId(org)) {
        dispatch({ type: "PRE_APPROVALS_LOADING", payload: {} });
        fetchPreApprovedContacts({ variables: { orgIds: ids } });
      }
    }
    return ()=>{
      dispatch({type: 'UPDATE_PREAPPROVALS_ORGS_ID', payload: ''})
      refetch({ orgIds: ids })
    }
  }, [org]); // eslint-disable-line


  useEffect(() => {
    if (org && appState.preApprovalsOrgId !== getOrgId(org) && contactsData) {
      if (org.type === "District") {
        let groupedContacts = {};
        const contacts: InsPreApprovedContact[] =
          contactsData?.insightsPreApprovedContacts as InsPreApprovedContact[];
        if (contacts) {
          groupedContacts = groupPreApprovalsByAssociatedOrg(contacts);
        }
        dispatch({
          type: "UPDATE_PRE_APPROVALS_DISTRICT",
          payload: {
            contacts: groupedContacts,
            orgId: org.id,
          },
        });
      } else {
        dispatch({
          type: "UPDATE_PRE_APPROVALS_ORG",
          payload: {
            contacts:
              (contactsData?.insightsPreApprovedContacts as InsPreApprovedContact[]) ||
              [],
            orgId: org.id,
          },
        });
      }
    }
  }, [contactsData]); // eslint-disable-line

  if (appState.orgsLoading) {
    return <LoadingData className="h-screen" />;
  } else if (treatment !== "on") {
    return <Navigate to="/dashboards" />;
  } else
    return (
      <>
        <WhiteCard
          className="grid grid-cols-3"
          fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
        >
          <div className="col-span-3 justify-center">
            <PreApprovalsSwitch
              districtSchools={orgSchools as Array<Org>}
              isDistrict={viewDistrict}
            />
          </div>
        </WhiteCard>
        {isScreenSizeBelow(appState.windowSize.screen, "sm") &&
        !viewDistrict ? (
          <div className="grid grid-cols-1">
            <SnapButton
              className="pl-4 pt-2"
              icon="plus-line"
              iconPosition="left"
              variant="primary"
              size="xl"
              onClick={() => {
                setShowAddModal(true);
              }}
              style={{
                position: "fixed",
                bottom: "80px",
                left: "10px",
                zIndex: "1000",
              }}
            ></SnapButton>
          </div>
        ) : (
          <></>
        )}
        {showAddModal ? (
          <PreApprovalsModal
            org={org as Org}
            showModal={showAddModal}
            onClose={() => setShowAddModal(false)}
            defaultTab="add"
          ></PreApprovalsModal>
        ) : null}
        {showPrompt ? (
          <InvitesSentModal
            onClose={() => setShowPrompt(false)}
            numForms={numForms}
          />
        ) : null}

      </>
    );
};

export default PreApprovalPage;
