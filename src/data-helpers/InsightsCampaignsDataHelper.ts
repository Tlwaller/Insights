import { InsAnalyticsSummaryStat, InsCampaignStat, InsDonationMapStat, InsightsCampaignsDataQuery, InsInviteStat, InsLtrChartData, InsMonthlyCampaignStat } from "../graphql/generated";

export const getLTRChart = (data: InsightsCampaignsDataQuery | undefined): InsLtrChartData => {
  return data?.insightsCampaignsData.lTRChart as InsLtrChartData;
}

export const getCampaignStats = (data: InsightsCampaignsDataQuery | undefined): InsCampaignStat[] => {
  return data?.insightsCampaignsData.campaignStats as InsCampaignStat[];
}

export const getDonationsMapStats = (data: InsightsCampaignsDataQuery | undefined): InsDonationMapStat[] => {
  return data?.insightsCampaignsData.donationMapStats as InsDonationMapStat[];
}

export const getAnalyticsSummaryStats = (data: InsightsCampaignsDataQuery | undefined): InsAnalyticsSummaryStat[] => {
  return data?.insightsCampaignsData.analyticsSummaryStats as InsAnalyticsSummaryStat[];
}

export const getMonthlyCampaignStats = (data: InsightsCampaignsDataQuery | undefined): InsMonthlyCampaignStat[] => {
  return data?.insightsCampaignsData.monthlyCampaignStats as InsMonthlyCampaignStat[];
}

export const getInviteStats = (data: InsightsCampaignsDataQuery | undefined): InsInviteStat[] => {
  return data?.insightsCampaignsData.inviteStats as InsInviteStat[];
}