/*eslint-disable*/
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppGlobalState";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import WhiteCardWithTitle from "../WhiteCardWithTitle";
import PendingActionItem from "./PendingActionItem";
import ContactModal from "../modals/ContactModal";
import { SplitTreatments } from "@splitsoftware/splitio-react";
import {
  InsCampaignStat,
  InsDonorParticipantContact,
  useInsightsDonorParticipantContactsLazyQuery,
} from "../../graphql/generated";
import * as fullstory from "@fullstory/browser";
import { PendingAction } from "./PendingActionTypes";
import { ContactInformation } from "../ContactTypes";
import PreApprovalsModal from "../modals/PreApprovalsModal";
import { LoadingData } from "../loading-empty-state/LoadingData";
import SplitIO from "@splitsoftware/splitio/types/splitio";
import noActionsNeeded from "../../assets/NoActionsNeeded.png";
import { useParams } from "react-router-dom";
import { getOrgById } from "../../data-helpers/OrgsDataHelper";
interface ActionCenterProps {
  campaigns: InsCampaignStat[];
  loadingData: boolean;
  className?: string;
}

const createDonorContactsList = (
  donorParticipantContacts: InsDonorParticipantContact[] | undefined
): ContactInformation[] | undefined => {
  return (
    donorParticipantContacts &&
    donorParticipantContacts.map((contact, index) => {
      return {
        id: index,
        image: "---",
        name: contact?.donor_name,
        email: contact?.donor_email,
        program: "---",
      } as ContactInformation;
    })
  );
};

const ActionCenter: React.FC<ActionCenterProps> = ({
  campaigns,
  loadingData,
  className = "",
}) => {
  const { appState } = useContext(AppContext);
  const { dashboardId } = useParams();
  const org = getOrgById(appState, dashboardId || "");
  const featureName = "INS-393-pre-approvals-fe";
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPreApprovalsModal, setShowPreApprovalsModal] = useState(false);
  const [recentlyClosedCampaigns, setRecentlyClosedCampaigns] = useState<
    InsCampaignStat[]
  >([]);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalDescription, setModalDescription] = useState<string>("");
  const [modalSubject, setModalSubject] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [fetchContacts, { data: contactsData }] =
    useInsightsDonorParticipantContactsLazyQuery({
      variables: { campaignIds: [] },
    });

  useEffect(() => {
    if (campaigns) {
      const today = new Date();
      const recentDate = new Date(new Date().setDate(today.getDate() - 15));
      setRecentlyClosedCampaigns(
        campaigns.filter((campaign) => {
          const endDate = new Date(campaign.end_date.slice(0, -5));
          return (
            campaign.insights_status === "closed" &&
            recentDate <= endDate &&
            endDate <= today
          );
        })
      );
    }
  }, [campaigns]);

  const openContactModalForRecentlyClosedCampaigns = () => {
    setModalTitle("Recently Closed Campaigns");
    setModalDescription(
      `${recentlyClosedCampaigns.length} campaigns finished in the last 15 days....[needs copy]`
    );
    setModalSubject("Subject....[needs copy]");
    setModalMessage("Message....[needs copy]");

    // REAL LINE
    //fetchContacts({variables:{campaignIds: recentlyClosedCampaigns.map(c => { return c.id })}});

    // SOME CAMPAIGN IDS WITH DATA IN DEV
    fetchContacts({ variables: { campaignIds: [69813, 69812] } });

    setShowContactModal(true);
  };

  const openPreApprovalsModal = () => {
    fullstory.event("Button Clicked", {
      buttonText: "Send Pre-Approval Invites",
      url: `https://insights.snap.app/dashboards/${dashboardId}/overview`, //TODO: remove hardcoded url
      path: `/dashboards/${dashboardId}`,
      moduleId: "Send Pre-Approval Invites",
      value: null,
    });
    setModalTitle("Send Pre-Approval Invites");
    setTimeout(() => setShowPreApprovalsModal(true));
  };

  const getRecentlyClosedAction = (): PendingAction => {
    return {
      id: 1,
      icon: "mail-solid",
      color: "red",
      count: recentlyClosedCampaigns.length,
      name: "Recently Closed Campaigns",
      description: "Share your appreciation with your donors",
      cta: "Email Donors",
    } as PendingAction;
  };

  const getPreApprovalsAction = (): PendingAction => {
    return {
      id: 2,
      icon: "clipboard-check-solid",
      color: "blue",
      name: "Send Pre-Approvals",
      description: "Pre-approve group leaders in your org to run a fundraiser",
      cta: "Send Pre-Approval Invites",
    } as PendingAction;
  };

  const hasRecentlyClosedCampaigns = (): boolean => {
    return recentlyClosedCampaigns.length > 0;
  };

  const renderContent = (treatmentWithConfig: SplitIO.TreatmentWithConfig) => {
    const { treatment } = treatmentWithConfig;
    if (treatment === "on" && org) {
      return (
        <>
          <PendingActionItem
            action={getPreApprovalsAction()}
            key={1}
            ctaCallback={openPreApprovalsModal}
          />
          <PreApprovalsModal
            org={org}
            showModal={showPreApprovalsModal}
            onClose={() => setShowPreApprovalsModal(false)}
            defaultTab="add"
          ></PreApprovalsModal>
        </>
      );
    } else
      return (
        <div
          className={`flex flex-col w-full sm:pt-24 items-center text-center leading-loose sm:-mt-10 ${
            hasRecentlyClosedCampaigns() && "hidden"
          }`}
        >
          <img
            src={noActionsNeeded}
            alt="Coming Soon"
            className="pb-4 w-8/12 max-w-xs"
          />
          <h3 className="font-medium text-xl text-gray-800">Coming Soon</h3>
          <p className="text-gray-500 leading-normal w-11/12">
            You’ll see all your important tasks and to-dos at a glance with the
            action center. Check back soon!
          </p>
        </div>
      );
  };

  return (
    <WhiteCardWithTitle
      title="Actions Center"
      fullPageWidth={isScreenSizeBelow(appState.windowSize.screen, "sm")}
      className={`${className}`}
    >
      {loadingData ? (
        <div>loading...</div>
      ) : (
        <>
          {!hasRecentlyClosedCampaigns() && (
            <PendingActionItem
              action={getRecentlyClosedAction()}
              key={0}
              ctaCallback={() => openContactModalForRecentlyClosedCampaigns()}
              className={"hidden"}
            />
          )}
        </>
      )}
      <ContactModal
        showModal={showContactModal}
        onClose={() => setShowContactModal(false)}
        title={modalTitle}
        description={modalDescription}
        subject={modalSubject}
        message={modalMessage}
        contacts={createDonorContactsList(
          contactsData?.insightsDonorParticipantContacts as InsDonorParticipantContact[]
        )}
      ></ContactModal>
      <SplitTreatments names={["INS-393-pre-approvals-fe"]}>
        {({ treatments, isReady }) => {
          return isReady ? (
            renderContent(treatments[featureName])
          ) : (
            <LoadingData />
          );
        }}
      </SplitTreatments>
    </WhiteCardWithTitle>
  );
};

export default ActionCenter;
