export interface CampaignTableData {
  id: number;
  schoolAffiliate: string;
  campaign: string;
  program: string;
  status: string;
  totalRaised: number;
  startDate: Date | null;
}

export interface SettlementTableData {
  id: number;
  schoolAffiliate: string;
  campaign_id: number;
  campaign: string;
  method: string;
  status: string;
  amount: number;
  lastUpdated: string;
  lastUpdatedDate: Date | null;
}

export interface SchoolAffiliateTableData {
  id: string;
  schoolAffiliate: string;
  organization: string;
  totalRaised: number;
  numberCampaigns: number;
}

export interface ProgramTableData {
  id: string;
  schoolAffiliate: string;
  program: string;
  totalRaised: number;
  numberCampaigns: number;
}

export interface DonationTableData {
  id: number;
  schoolAffiliate: string;
  donor: string;
  campaign_id: number;
  campaign: string;
  program: string;
  participant: string;
  amount: number;
  created_at: Date | null;
}

export interface CampaignsSummaryParam {
  orgId: string;
  campaignIds: number[];
}