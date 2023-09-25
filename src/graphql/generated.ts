import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Buffer: any;
  Date: any;
  DateTime: any;
  Decimal: any;
  /** The `Int32` scalar type represents non-fractional signed whole numeric values. Int32 can represent values between -(2^31) and 2^31 - 1.  */
  Int32: any;
  /** The `Int64` scalar type represents non-fractional signed whole numeric values. Int64 can represent values between -(2^63) and 2^63 - 1.  */
  Int64: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) */
  JSON: any;
  JSONObject: any;
  Time: any;
  /** A `Timestamp` represents a point in time independent of any time zone or calendar, represented as seconds and fractions of seconds at nanosecond resolution in UTC Epoch time. */
  Timestamp: any;
  UUID: any;
  Uint64: any;
  Upload: any;
  Void: any;
};

export type Account = ExternalBankAccount | StripeAccount;

/** Account balance information */
export type AccountBalanceReturn = {
  __typename?: 'AccountBalanceReturn';
  /** Available balance in cents */
  available?: Maybe<Scalars['Int']>;
  /** Pending balance in cents */
  pending?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type AccountLink = {
  __typename?: 'AccountLink';
  created?: Maybe<Scalars['Int']>;
  expires_at?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AccountManager = DriveUser & {
  __typename?: 'AccountManager';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type AccountTransactionsInput = {
  accountId: Scalars['String'];
  createdAfter?: InputMaybe<Scalars['Timestamp']>;
  createdBefore?: InputMaybe<Scalars['Timestamp']>;
  externalId?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSONObject']>;
  status?: InputMaybe<Status>;
};

export enum AccountType {
  ExternalBank = 'EXTERNAL_BANK',
  /** more TK */
  Stripe = 'STRIPE'
}

export type Activity = {
  __typename?: 'Activity';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** See CampaignMembership for details */
export type AdminCampaign = {
  __typename?: 'AdminCampaign';
  id: Scalars['ID'];
};

export type Asset = {
  __typename?: 'Asset';
  assetId?: Maybe<Scalars['Int']>;
  assetType?: Maybe<AssetType>;
  assetTypeId?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isSponsored?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sponsors?: Maybe<Array<Maybe<SponsorInAssets>>>;
  sponsorshipGroup?: Maybe<SponsorshipGroup>;
  sponsorshipGroupId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AssetType = {
  __typename?: 'AssetType';
  assetTypeValue?: Maybe<Array<Maybe<AssetTypeValue>>>;
  attachmentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fees?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  minPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['Int']>;
  productionSource?: Maybe<Scalars['String']>;
};

export type AssetTypeValue = {
  __typename?: 'AssetTypeValue';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type Assets = {
  __typename?: 'Assets';
  assets?: Maybe<Array<Maybe<Asset>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AssetsCount = {
  __typename?: 'AssetsCount';
  sponsoredCount?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  assetId?: Maybe<Scalars['String']>;
  assignedAt?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['Int']>;
  packageId?: Maybe<Scalars['String']>;
  sponsorId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Auth = Tokens & {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type AuthChallenge = Tokens & {
  __typename?: 'AuthChallenge';
  accessToken?: Maybe<Scalars['String']>;
  challenges?: Maybe<Array<Maybe<UserChallenge>>>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type AuthenticationFlow = {
  __typename?: 'AuthenticationFlow';
  name?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

export enum BasicCampaignStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Upcoming = 'UPCOMING'
}

export type BillingAddress = {
  __typename?: 'BillingAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type BillingDetails = {
  __typename?: 'BillingDetails';
  address?: Maybe<BillingAddress>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Brand = {
  __typename?: 'Brand';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export enum Card_Status {
  Active = 'active',
  Canceled = 'canceled',
  Inactive = 'inactive'
}

export enum Card_Type {
  Physical = 'physical',
  Virtual = 'virtual'
}

/** @deprecated: will be merged with DriveCampaign instead This type is for Drive's Campaign Management. Users must have the Drive's permission to access any data. We are working on migrating this type to DriveCampaign. */
export type Campaign = {
  __typename?: 'Campaign';
  /** Account Manager of Campaign */
  accountManager?: Maybe<AccountManager>;
  /** Activity type of campaign. e.g. 'football', 'baseball', etc. */
  activityType?: Maybe<Scalars['String']>;
  /** URL for Generated Report of (Active) Campaign */
  campaignActiveReportUrl?: Maybe<Scalars['String']>;
  /** City + State string of campaign. e.g. 'Dallas, TX' */
  campaignTerritory?: Maybe<Scalars['String']>;
  /** Donations statistics of campaign. All values will be 0 if campaign is 'upcoming' */
  donations?: Maybe<Donations>;
  /** Participant email delivery info of campaigns */
  emails?: Maybe<EmailsInfo>;
  /** End date of fundraiser */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Entity ID of campaign. This ID used to obtain financial/payment info */
  entityId?: Maybe<Scalars['Int']>;
  /** Date when campaign is finalized */
  finalizedDate?: Maybe<Scalars['DateTime']>;
  /** Shipping status for gear items. Values are 'delivered','pre_transit','in_transit','failure','available_for_pickup','unknown','out_for_delivery', 'return_to_sender','cancelled','error' */
  gearStatus?: Maybe<Scalars['String']>;
  /** Group Leader */
  groupLeader?: Maybe<GroupLeader>;
  /** Deal ID of campaign in Hubspot. */
  hubspotId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** Cover image of campaign */
  image?: Maybe<Scalars['String']>;
  /** Initial goal amount to fundraise in cents */
  initialGoalCents?: Maybe<Scalars['Int']>;
  /** Link to invite participants to the campaign */
  inviteParticipantUrl?: Maybe<Scalars['String']>;
  /** Unique join-code of campaign */
  joinCode?: Maybe<Scalars['Int']>;
  /** URL for the fundraiser KYC Form. */
  kycFormUrl?: Maybe<Scalars['String']>;
  /** Campaign kyc status */
  kycStatus?: Maybe<CampaignKycStatusResult>;
  /** Mailing address of campaign. */
  mailingAddress?: Maybe<Scalars['String']>;
  /** MDM Contact of Campaign */
  mdm?: Maybe<MdmDetails>;
  name?: Maybe<Scalars['String']>;
  /** Statistics info of campaign participants */
  participants?: Maybe<ParticipantsInfo>;
  /** Last withdrawal payment status. Values are 'Initializing', 'Processing', 'Transferred', 'Cut', 'Deposited', 'Expired' or 'Failed' */
  paymentStatus?: Maybe<Scalars['String']>;
  /** Payment type when campaign finalized. Values are 'Check to Office', 'Check to Salesrep', 'Check to Fundraiser', or 'Direct Deposit'. */
  paymentType?: Maybe<Scalars['String']>;
  /** Base64 generated CSV file for preload emails report of event */
  preloadReport?: Maybe<Scalars['String']>;
  /** Download URL for Final Receipt (PDF) of settled campaigns */
  receiptDownloadUrl?: Maybe<Scalars['String']>;
  /** Settlement Details for Closed Campaigns */
  settlementDetails?: Maybe<SettlementDetails>;
  /** Settlement Confirmation Status for Closed Campaigns. Values are 'UNSUBMITTED', 'IN_REVIEW' and 'VERIFIED' */
  settlementStatus?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** Start date of fundraiser */
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  /** Size of team/group of campaign */
  teamSize?: Maybe<Scalars['Int']>;
  /** Not in-use. Deprecated */
  testEmails?: Maybe<Scalars['String']>;
  /** Total amount raised in cents */
  totalRaisedCents?: Maybe<Scalars['Int']>;
  /** The total raised combined this organization has previously ran campaigns */
  totalRaisedHistory?: Maybe<Scalars['Int']>;
  /** Tracking link for shipping gear items. */
  trackingLink?: Maybe<Scalars['String']>;
};

export type CampaignDates = {
  __typename?: 'CampaignDates';
  endDateTime: Scalars['String'];
  isAllDay?: Maybe<Scalars['Boolean']>;
  startDateTime: Scalars['String'];
};

/** Resigned campaigns */
export type CampaignHistoryList = {
  __typename?: 'CampaignHistoryList';
  CampaignHistoryEndDate?: Maybe<Scalars['String']>;
  CampaignHistorySlug?: Maybe<Scalars['String']>;
  CampaignHistoryStartDate?: Maybe<Scalars['String']>;
  campaignName?: Maybe<Scalars['String']>;
  campaignTotalRaised?: Maybe<Scalars['Int']>;
};

export type CampaignKyc = {
  __typename?: 'CampaignKyc';
  status?: Maybe<CampaignKycStatusEnum>;
};

/** Fixed statuses for a campaigns kyc */
export enum CampaignKycStatus {
  ActionRequired = 'action_required',
  InReview = 'in_review',
  RequireDocs = 'require_docs',
  Unsubmitted = 'unsubmitted',
  Unverified = 'unverified',
  Verified = 'verified'
}

export enum CampaignKycStatusEnum {
  ActionNeeded = 'ACTION_NEEDED',
  Pending = 'PENDING',
  Unsubmitted = 'UNSUBMITTED',
  Verified = 'VERIFIED'
}

export type CampaignKycStatusResult = {
  __typename?: 'CampaignKycStatusResult';
  data?: Maybe<CampaignKycStatus>;
  type?: Maybe<CampaignKycType>;
};

/** Fixed type for a campaigns kyc */
export enum CampaignKycType {
  Stripe = 'stripe',
  Wepay = 'wepay'
}

export type CampaignList = {
  __typename?: 'CampaignList';
  count?: Maybe<Scalars['Int']>;
  list: Array<Maybe<Campaign>>;
  offset?: Maybe<Scalars['Int']>;
};

export enum CampaignMemberAssociation {
  Admin = 'ADMIN',
  Coach = 'COACH',
  Cocoach = 'COCOACH',
  Coparticipant = 'COPARTICIPANT',
  Participant = 'PARTICIPANT',
  Supporter = 'SUPPORTER'
}

/** CampaignMembership is our way of securing information based on a users membership type. When a user queries campaignMemberships they can get information on their memberships based on who they are as defined in the JWT. Example of how to use:https://www.notion.so/snap-mobile/Campaign-1b4c4a055bc84aaf8290f078f57a5193 */
export type CampaignMembership = AdminCampaign | GroupLeaderCampaign | ParticipantCampaign | SupporterCampaign;

export type CampaignPersonList = {
  __typename?: 'CampaignPersonList';
  id: Scalars['Int'];
};

export type CampaignPersonListEntryDelete = {
  __typename?: 'CampaignPersonListEntryDelete';
  id: Scalars['Int'];
};

export type CampaignSearchFilter = {
  __typename?: 'CampaignSearchFilter';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Collection (key/values) of saved search criteria. */
  filterCriteria?: Maybe<Scalars['JSON']>;
  /** Name of the saved search filter. */
  filterName?: Maybe<Scalars['String']>;
  /** ID of saved search filters. */
  id?: Maybe<Scalars['Int']>;
};

export enum CampaignStatus {
  Active = 'ACTIVE',
  Approved = 'APPROVED',
  Archive = 'ARCHIVE',
  Closed = 'CLOSED',
  Deleted = 'DELETED',
  Final = 'FINAL',
  PendingApproval = 'PENDING_APPROVAL',
  Settled = 'SETTLED'
}

/** Owned by vault Extended by wallet Card issued by vault via Stripe */
export type Card = {
  __typename?: 'Card';
  cardNumber?: Maybe<Scalars['String']>;
  cardType?: Maybe<VaultCardType>;
  cardholderId?: Maybe<Scalars['String']>;
  cvv?: Maybe<Scalars['String']>;
  expirationMonth?: Maybe<Scalars['Int']>;
  expirationYear?: Maybe<Scalars['Int']>;
  gatewayId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last4?: Maybe<Scalars['String']>;
  metadata?: Maybe<VaultCardMetadata>;
  spendingLimitAmount?: Maybe<Scalars['Int']>;
  spendingLimitInterval?: Maybe<VaultSpendingLimitInterval>;
  status?: Maybe<VaultCardStatus>;
  walletEverActivated?: Maybe<Scalars['Boolean']>;
};

export type CardDetails = {
  __typename?: 'CardDetails';
  brand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

export type CarouselItem = {
  __typename?: 'CarouselItem';
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum CategoryFilterEnum {
  Name = 'name',
  Type = 'type'
}

export enum CategoryTypeEnum {
  Expense = 'expense',
  Income = 'income'
}

export type Check = {
  __typename?: 'Check';
  amount: Scalars['Decimal'];
  campaignId: Scalars['Int'];
  checkNumber: Scalars['String'];
  created: Scalars['Timestamp'];
  destination: Account;
  effective: Scalars['Timestamp'];
  expiration: Scalars['Timestamp'];
  payee: Payee;
  status: CheckStatus;
  transactionId: Scalars['UUID'];
};

export enum CheckStatus {
  Deposited = 'DEPOSITED',
  /** TODO(SHR): update this once we get actual statuses from bill.com */
  Processing = 'PROCESSING',
  Sent = 'SENT'
}

export type Cheer = {
  __typename?: 'Cheer';
  anonymous?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  donorMessage?: Maybe<Scalars['String']>;
  donorName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName?: Maybe<Scalars['String']>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type CheerWall = {
  __typename?: 'CheerWall';
  createdAt?: Maybe<Scalars['DateTime']>;
  donorMessage?: Maybe<Scalars['String']>;
  donorName?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  participantName?: Maybe<Scalars['String']>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type CombinedPermissions = {
  __typename?: 'CombinedPermissions';
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CommonCalendar = {
  __typename?: 'CommonCalendar';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type CommonCalendarFiltersInput = {
  activity?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  homeAway?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type CommonGrid = {
  __typename?: 'CommonGrid';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type CommonGridFiltersInput = {
  endDate?: InputMaybe<Scalars['Date']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CommonSchedules = {
  __typename?: 'CommonSchedules';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  bus_departure_location?: Maybe<Scalars['String']>;
  bus_early_dismissal_time?: Maybe<Scalars['String']>;
  bus_estimated_return_time?: Maybe<Scalars['String']>;
  bus_time?: Maybe<Scalars['String']>;
  cancellation_status?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type CommonSchedulesFiltersInput = {
  activity?: InputMaybe<Scalars['String']>;
  activityName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Date']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  homeAway?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type CommonSheet = {
  __typename?: 'CommonSheet';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type CommonSheetFiltersInput = {
  activity?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  homeAway?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type Connect = {
  connect?: InputMaybe<ConnectId>;
};

export type ConnectId = {
  id?: InputMaybe<Scalars['String']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  accessBy?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  description: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['String'];
  inApps: Scalars['Boolean'];
  logo: Scalars['String'];
  mask: Scalars['String'];
  modal?: Maybe<ConsumerModal>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ConsumerModal = {
  __typename?: 'ConsumerModal';
  descriptions: Array<Maybe<Scalars['String']>>;
  header: Scalars['String'];
};

export enum ContactTemplateMedium {
  Email = 'EMAIL',
  TextMessage = 'TEXT_MESSAGE'
}

export enum ContactTemplateType {
  GroupLeader = 'GROUP_LEADER',
  Participant = 'PARTICIPANT'
}

export type ContractItem = {
  __typename?: 'ContractItem';
  event_contract?: Maybe<EventContract>;
  event_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ContractSignees = {
  __typename?: 'ContractSignees';
  auth_hash?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  email_id?: Maybe<Scalars['String']>;
  event_contract_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  original_contract?: Maybe<Scalars['String']>;
  sent_date?: Maybe<Scalars['Date']>;
  sign_contract?: Maybe<Scalars['String']>;
  sign_date?: Maybe<Scalars['Date']>;
  sign_status?: Maybe<Scalars['String']>;
};

/** Owned by Vault Only used in legacy createCard */
export type CoreCardFields = {
  __typename?: 'CoreCardFields';
  cardId: Scalars['String'];
  expirationMonth: Scalars['Int'];
  expirationYear: Scalars['Int'];
  gatewayId?: Maybe<Scalars['String']>;
  last4: Scalars['String'];
  name: Scalars['String'];
};

export type CreateEventInput = {
  activity?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  bus_fee?: InputMaybe<Scalars['Float']>;
  bus_time?: InputMaybe<Scalars['String']>;
  cancellation_status?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  conference_event_id?: InputMaybe<Scalars['Int']>;
  conference_id?: InputMaybe<Scalars['Int']>;
  confirmed?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  departure_location?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  early_dismissal_required?: InputMaybe<Scalars['String']>;
  early_dismissal_time?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['String']>;
  estimated_return_time?: InputMaybe<Scalars['String']>;
  event_date?: InputMaybe<Scalars['Date']>;
  event_id?: InputMaybe<Scalars['Int']>;
  exists_in_mls?: InputMaybe<Scalars['Int']>;
  fee?: InputMaybe<Scalars['Float']>;
  g_s?: InputMaybe<Scalars['String']>;
  gate_revenue?: InputMaybe<Scalars['Float']>;
  headline?: InputMaybe<Scalars['String']>;
  impact_event?: InputMaybe<Scalars['String']>;
  lead?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  loss_points?: InputMaybe<Scalars['Int']>;
  num_buses?: InputMaybe<Scalars['Int']>;
  opponent?: InputMaybe<Scalars['String']>;
  opponent_code?: InputMaybe<Scalars['String']>;
  opponent_score?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  prep_setup?: InputMaybe<Scalars['String']>;
  promote?: InputMaybe<Scalars['String']>;
  results?: InputMaybe<Scalars['String']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rollover?: InputMaybe<Scalars['String']>;
  season_team?: InputMaybe<Scalars['Int']>;
  start_time?: InputMaybe<Scalars['String']>;
  team_score?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tournament?: InputMaybe<Scalars['String']>;
  trans_id?: InputMaybe<Scalars['Int']>;
  transport_comments?: InputMaybe<Scalars['String']>;
  transportation?: InputMaybe<Scalars['String']>;
  update_at?: InputMaybe<Scalars['Date']>;
  web_dir?: InputMaybe<Scalars['String']>;
  win_points?: InputMaybe<Scalars['Int']>;
  years?: InputMaybe<Scalars['String']>;
};

export type CreateEventParticipantsInput = {
  contract_received?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  notes?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  school_code?: InputMaybe<Scalars['String']>;
};

export type CreateEventPreparationInput = {
  comments?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  prep?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type CreateEventTransportDetailsInput = {
  driver_name?: InputMaybe<Scalars['String']>;
  driver_phone?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  vehicle_id?: InputMaybe<Scalars['String']>;
  vehicle_type?: InputMaybe<Scalars['String']>;
};

export type CreateFacilityInput = {
  Address1: Scalars['String'];
  Address2?: InputMaybe<Scalars['String']>;
  City: Scalars['String'];
  State: Scalars['String'];
  ZipCode: Scalars['String'];
  directions?: InputMaybe<Scalars['String']>;
  indoor?: InputMaybe<Scalars['String']>;
  ml_site_id?: InputMaybe<Scalars['String']>;
  ml_space?: InputMaybe<Scalars['String']>;
  ml_space_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  place_name: Scalars['String'];
  show?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type CreateInviteSponsorshipGroupRelation = {
  create?: InputMaybe<Array<InputMaybe<SponsorshipGroupConnect>>>;
};

export type CreateLevelInput = {
  Level?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
};

export type CreateOfficialDutyInput = {
  duty?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
};

export type CreateOfficialInput = {
  duty?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  offic_id?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  pay_code?: InputMaybe<Scalars['String']>;
  received?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Float']>;
  ssn?: InputMaybe<Scalars['String']>;
  voucher_number?: InputMaybe<Scalars['String']>;
  worker_name?: InputMaybe<Scalars['String']>;
};

export type CreateOfficialPoolByIdInput = {
  Address?: InputMaybe<Scalars['String']>;
  City?: InputMaybe<Scalars['String']>;
  First: Scalars['String'];
  Home_Phone?: InputMaybe<Scalars['String']>;
  ID: Scalars['String'];
  Last: Scalars['String'];
  SSN?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Work_Phone?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  vendor_number?: InputMaybe<Scalars['String']>;
};

export type CreateOpponentInput = {
  Address?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  SchoolCode: Scalars['String'];
  SchoolName?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  ad_name?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  nces_id?: InputMaybe<Scalars['String']>;
  non_school?: InputMaybe<Scalars['Boolean']>;
};

export type CreatePreparationInput = {
  duty?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type CreateSchoolInfoInput = {
  Schoolname?: InputMaybe<Scalars['String']>;
  ad?: InputMaybe<Scalars['String']>;
  ad_contract_signee?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  ccemail?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conf_text_type?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_reminder?: InputMaybe<Scalars['String']>;
  email_reminder_officials?: InputMaybe<Scalars['String']>;
  email_reminder_workers?: InputMaybe<Scalars['String']>;
  enable_cc_email_as_origin?: InputMaybe<Scalars['String']>;
  enable_ml_updates?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  mascot?: InputMaybe<Scalars['String']>;
  message_board_read_at?: InputMaybe<Scalars['Date']>;
  ml_key?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  principal?: InputMaybe<Scalars['String']>;
  school_timezone?: InputMaybe<Scalars['String']>;
  secondary_ad_email?: InputMaybe<Scalars['String']>;
  secondary_ad_name?: InputMaybe<Scalars['String']>;
  signed_contract_notification?: InputMaybe<Scalars['String']>;
  ssn_on_file?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  state_org?: InputMaybe<Scalars['String']>;
  state_org_abbreviation?: InputMaybe<Scalars['String']>;
  use_security?: InputMaybe<Scalars['String']>;
  web_password?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type CreateVehicleInput = {
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  vehicle_type?: InputMaybe<Scalars['String']>;
};

export type CreateWorkerInput = {
  duty?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  organization?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  pay_code?: InputMaybe<Scalars['String']>;
  pay_rate?: InputMaybe<Scalars['Float']>;
  salary?: InputMaybe<Scalars['Float']>;
  ssn?: InputMaybe<Scalars['String']>;
  woker_name?: InputMaybe<Scalars['String']>;
  worker_end_time?: InputMaybe<Scalars['String']>;
  worker_start_time?: InputMaybe<Scalars['String']>;
  worker_type?: InputMaybe<Scalars['String']>;
};

export type CreateWorkerPool = {
  Address?: InputMaybe<Scalars['String']>;
  City?: InputMaybe<Scalars['String']>;
  First: Scalars['String'];
  Home_Phone?: InputMaybe<Scalars['String']>;
  Last: Scalars['String'];
  SSN?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Work_Phone?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  pay_rate?: InputMaybe<Scalars['Float']>;
  worker_type?: InputMaybe<Scalars['String']>;
};

export type CreatedFundraiserUser = {
  __typename?: 'CreatedFundraiserUser';
  id: Scalars['Int'];
};

export type CreatedOtkEntry = {
  __typename?: 'CreatedOtkEntry';
  id: Scalars['Int'];
};

export type CreatedParticipantRewards = {
  __typename?: 'CreatedParticipantRewards';
  id: Scalars['Int'];
};

export type CurrentCustomersDeals = {
  __typename?: 'CurrentCustomersDeals';
  activity?: Maybe<Scalars['String']>;
  dealStage?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  fundraiserStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastLaunch?: Maybe<Scalars['String']>;
  leaderFirstName?: Maybe<Scalars['String']>;
  leaderLastName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  snapFundraiserId?: Maybe<Scalars['String']>;
  totalRaised?: Maybe<Scalars['Int']>;
};

/** Information of custom email templates */
export type CustomContactTemplates = {
  __typename?: 'CustomContactTemplates';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type DailyCalendarBusScheduleEvents = {
  __typename?: 'DailyCalendarBusScheduleEvents';
  activity?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  bus_time?: Maybe<Scalars['String']>;
  calendarDate?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  departure_location?: Maybe<Scalars['String']>;
  early_dismissal_required?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  event_comments?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  g_s?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  num_buses?: Maybe<Scalars['Int']>;
  num_buses_text?: Maybe<Scalars['Int']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  sportGender?: Maybe<Scalars['String']>;
  sportLevel?: Maybe<Scalars['String']>;
  sport_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
};

export type DailyCalendarBusScheduleExportData = {
  __typename?: 'DailyCalendarBusScheduleExportData';
  activity?: Maybe<Scalars['String']>;
  bus_time?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  departure_location?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  early_dismissal_required?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  groupval?: Maybe<Scalars['String']>;
  level1?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  num_buses_text?: Maybe<Scalars['Int']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  sport_description?: Maybe<Scalars['String']>;
  sport_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  transport_comments?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type DailyCalendarEvent = {
  __typename?: 'DailyCalendarEvent';
  activity?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  departure_location?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  eventTransportDetails?: Maybe<Array<Maybe<EventTransportDetails>>>;
  event_date?: Maybe<Scalars['Date']>;
  location?: Maybe<Scalars['String']>;
  num_buses?: Maybe<Scalars['Int']>;
  officials?: Maybe<Array<Maybe<Official>>>;
  opponent?: Maybe<Scalars['String']>;
  preparations?: Maybe<Array<Maybe<Preparation>>>;
  schoolInfo?: Maybe<SchoolInfo>;
  season_team?: Maybe<Scalars['Int']>;
  season_years?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  workers?: Maybe<Array<Maybe<Worker>>>;
};

export type DailyCalendarEventTransportDetails = {
  __typename?: 'DailyCalendarEventTransportDetails';
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  event_transport_details_id?: Maybe<Scalars['Int']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type DailyCalendarOfficialDuties = {
  __typename?: 'DailyCalendarOfficialDuties';
  Address?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  Home_Phone?: Maybe<Scalars['String']>;
  SSN?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Work_Phone?: Maybe<Scalars['String']>;
  Zip?: Maybe<Scalars['String']>;
  cell_phone?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  offic_id?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  vendor_number?: Maybe<Scalars['String']>;
  voucher_field?: Maybe<Scalars['Int']>;
  voucher_number?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
};

export type DailyCalendarOfficialExport = {
  __typename?: 'DailyCalendarOfficialExport';
  address?: Maybe<Scalars['String']>;
  cell_phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupVal?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  offic_id?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  sport_description?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  vendor_number?: Maybe<Scalars['String']>;
  voucher_number?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type DailyCalendarOfficialMessage = {
  __typename?: 'DailyCalendarOfficialMessage';
  comments?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  official_duties?: Maybe<Array<Maybe<DailyCalendarOfficialDuties>>>;
  opponent?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
};

export type DailyCalendarPreparation = {
  __typename?: 'DailyCalendarPreparation';
  comments?: Maybe<Scalars['String']>;
  prep?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['String']>;
};

export type DailyCalendarPreparationExportData = {
  __typename?: 'DailyCalendarPreparationExportData';
  comments?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  prep?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['String']>;
  sport_description?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
};

export type DailyCalendarPreparationMessage = {
  __typename?: 'DailyCalendarPreparationMessage';
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  preparations?: Maybe<Array<Maybe<DailyCalendarPreparation>>>;
  sport?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
};

export type DailyCalendarWorkerDuties = {
  __typename?: 'DailyCalendarWorkerDuties';
  SSN?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  phones?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  sport_description?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
};

export type DailyCalendarWorkerExportData = {
  __typename?: 'DailyCalendarWorkerExportData';
  comments?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  phones?: Maybe<Scalars['String']>;
  sport_description?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
};

export type DailyCalendarWorkerMessage = {
  __typename?: 'DailyCalendarWorkerMessage';
  comments?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  worker_duties?: Maybe<Array<Maybe<DailyCalendarWorkerDuties>>>;
};

export type DeleteCount = {
  __typename?: 'DeleteCount';
  count?: Maybe<Scalars['Int']>;
};

export type DeleteEventInput = {
  event_id: Scalars['Int'];
};

export type DeleteEventParticipantsInput = {
  id: Scalars['Int'];
};

export type DeleteEventPreparationInput = {
  id: Scalars['Int'];
};

export type DeleteEventPreparationsInput = {
  id: Scalars['Int'];
};

export type DeleteEventTransportDetailsInput = {
  id: Scalars['Int'];
};

export type DeleteFacilityInput = {
  place_name: Scalars['String'];
};

export type DeleteLevelInput = {
  ID: Scalars['Int'];
};

export type DeleteManyEventParticipantsInput = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};

export type DeleteManyEventPreparationsInput = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};

export type DeleteManyEventTransportDetailsInput = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};

export type DeleteManyWorkerInput = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};

export type DeleteOfficialDutiesInput = {
  ids: Array<Scalars['Int']>;
};

export type DeleteOfficialInput = {
  id: Scalars['Int'];
};

export type DeleteOfficialPoolInput = {
  ids: Array<InputMaybe<Scalars['String']>>;
};

export type DeleteOpponentInput = {
  SchoolCode: Scalars['String'];
};

export type DeletePreparationInput = {
  id: Scalars['Int'];
};

export type DeleteSchoolInfoInput = {
  id: Scalars['String'];
};

export type DeleteVehicleInput = {
  id: Scalars['Int'];
};

export type DeleteWorkerInput = {
  id: Scalars['Int'];
};

export type DeleteWorkerPoolInput = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};

export type DeletedIncentiveRecord = {
  __typename?: 'DeletedIncentiveRecord';
  id: Scalars['ID'];
};

export type Deposit = {
  __typename?: 'Deposit';
  amount: Scalars['Decimal'];
  campaignId: Scalars['Int'];
  created: Scalars['Timestamp'];
  description: Scalars['String'];
  destination: Account;
  effective: Scalars['Timestamp'];
  externalId: Scalars['String'];
  source: Account;
  transactionId: Scalars['UUID'];
};

/** Documents uploaded for validation purposes */
export type Document = {
  __typename?: 'Document';
  documentBack?: Maybe<Scalars['String']>;
  documentFront?: Maybe<Scalars['String']>;
  gateway: VaultFinancialProvider;
  id: Scalars['String'];
  type: Scalars['String'];
  vaultKybId?: Maybe<Scalars['ID']>;
  vaultKycId?: Maybe<Scalars['ID']>;
};

/** Not used yet. Will be removed soon. */
export type DonationInvite = {
  __typename?: 'DonationInvite';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastEmailSentAt?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type DonationInviteFollowUpEmail = {
  __typename?: 'DonationInviteFollowUpEmail';
  id: Scalars['Int'];
};

export type DonationInviteSmsData = {
  __typename?: 'DonationInviteSMSData';
  id: Scalars['Int'];
  phoneNumber: Scalars['String'];
  status: Scalars['String'];
};

export type DonationLevel = {
  __typename?: 'DonationLevel';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  level: DonationLevels;
  rewardDescription?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum DonationLevels {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Six = 'SIX',
  Three = 'THREE',
  Two = 'TWO'
}

export type DonationTopEarner = {
  __typename?: 'DonationTopEarner';
  participantID?: Maybe<Scalars['Int']>;
};

/** Donation Statistics. Will change name to CampaignDonationStats later. */
export type Donations = {
  __typename?: 'Donations';
  /** Total of distinct donors in campaigns */
  AskedToShare?: Maybe<Scalars['Int']>;
  /** Total count of donations in campaign */
  count?: Maybe<Scalars['Int']>;
  /** Total donation amount in cents raised through email */
  emailTotal?: Maybe<Scalars['Int']>;
  /** Total donation amount in cents raised other methods outside text, email and social */
  extraTotal?: Maybe<Scalars['Int']>;
  /** Total of donation amount in cents raised through forward to friends. */
  fowardTotal?: Maybe<Scalars['Int']>;
  /** Total quantity of gear items purchased in campaign. */
  gearAdded?: Maybe<Scalars['Int']>;
  /** Total count of distinct donors that purchased gears. */
  gearPurchased?: Maybe<Scalars['Int']>;
  /** Total of purchase amount in cents of gear (OTK) items */
  gearTotal?: Maybe<Scalars['Int']>;
  /** Total donation amounts in cents through retaining supporters from previous closed campaign. Share Type is 'reisgn_a' or 'resign_b' */
  legacySupporters?: Maybe<Scalars['Int']>;
  /** Total count of distinct donors who are new and donated campaigns through share-type 'supporter_referral' */
  newSupporters?: Maybe<Scalars['Int']>;
  /** Total count of donors who are retaining supporters from previous closed campaign. Share Type is 'reisgn_a' or 'resign_b' */
  pastSupporters?: Maybe<Scalars['Int']>;
  /** Total donation amount in cents raised through social media */
  socialTotal?: Maybe<Scalars['Int']>;
  /** Total donation amount in cents raised through sms/text */
  textTotal?: Maybe<Scalars['Int']>;
};

export type DonorEmailAddresses = {
  __typename?: 'DonorEmailAddresses';
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DonorEmailData = {
  __typename?: 'DonorEmailData';
  deliveryStatus?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  followUpNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  personListEntryID?: Maybe<Scalars['Int']>;
};

export type DonorPersonListEntry = {
  __typename?: 'DonorPersonListEntry';
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type DonorPhoneNumbers = {
  __typename?: 'DonorPhoneNumbers';
  phone?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DonorsParticipantOtkIncentive = {
  __typename?: 'DonorsParticipantOTKIncentive';
  description?: Maybe<Scalars['String']>;
  displayOrder?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceCents?: Maybe<Scalars['Int']>;
  purchaseLimit?: Maybe<Scalars['Int']>;
  purchased?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
};

export type DonorsParticipantOtkIncentives = {
  __typename?: 'DonorsParticipantOTKIncentives';
  incentives?: Maybe<Array<Maybe<DonorsParticipantOtkIncentive>>>;
};

/** Account User is a user that is registered in Raise's database. Deprecated: Use UserDirectory 's User instead instead */
export type DriveAccountUser = DriveUser & {
  __typename?: 'DriveAccountUser';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  snapRaiseId?: Maybe<Scalars['Int']>;
};

/** MDM Actor. e.g. Account Manager/Salereps/Sales Manager */
export type DriveAmSalesReps = {
  __typename?: 'DriveAmSalesReps';
  /** Primary contact email of salesrep */
  email?: Maybe<Scalars['String']>;
  /** End time of salesrep */
  endDate?: Maybe<Scalars['DateTime']>;
  /** First Name of Salesrep */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name of Salesrep */
  lastName?: Maybe<Scalars['String']>;
  /** Primary phone number of salesrep */
  phone?: Maybe<Scalars['String']>;
  /** The sales manager of this salesrep */
  salesManager?: Maybe<DriveAmSalesReps>;
  /** Salesrep Id. This is Raise's account user id. */
  salesrepId?: Maybe<Scalars['Int']>;
  /** Start time of salesrep */
  startDate?: Maybe<Scalars['DateTime']>;
  /** actor type. e.g. 'salesrep', 'salesmanager', 'am' */
  type?: Maybe<Scalars['String']>;
};

export enum DriveAttendanceStatus {
  Attending = 'ATTENDING',
  NotAttending = 'NOT_ATTENDING'
}

/** Information of a single drive campaign */
export type DriveCampaign = {
  __typename?: 'DriveCampaign';
  /** The account manager of the campaign */
  accountManager?: Maybe<AccountManager>;
  /** @deprecated: not used, in favor of totalRaisedCents */
  donationRaisedCents?: Maybe<Scalars['Int']>;
  /** The date the campaign ends */
  endDate?: Maybe<Scalars['DateTime']>;
  /** The date the campaign has been finalized/closed */
  finalizedDate?: Maybe<Scalars['DateTime']>;
  /** Indicate whether the campaign has any incentives, such as OTK */
  hasIncentive?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** Name of campaign */
  name?: Maybe<Scalars['String']>;
  /** Notes for a campaign */
  notes?: Maybe<Scalars['String']>;
  /** Url-slug of campaign name which is a unique identifier */
  slug?: Maybe<Scalars['String']>;
  /** The date campaign starts */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Current status of campaign */
  status?: Maybe<CampaignStatus>;
  /** The size of the team/group attached to campaign */
  teamSize?: Maybe<Scalars['Int']>;
  /** @deprecated: not used, in favor of `totalRaisedCents` */
  totalRaised?: Maybe<Scalars['BigInt']>;
  /** Total amount of donation of campaign in cents. */
  totalRaisedCents?: Maybe<Scalars['Int']>;
};

/** Campaign/Fundraiser details information. NOTE: In the future, we might merged with DriveCampaign or Campaign */
export type DriveCampaignDetails = {
  __typename?: 'DriveCampaignDetails';
  /** Account Balance of campaign. */
  accountBalance?: Maybe<AccountBalanceReturn>;
  /** The activity/sport of this campaign, e.g. 'football', 'wrestling', etc. */
  activityType?: Maybe<Scalars['String']>;
  /** The amount in cents that campaigns was advanced in Wallet. */
  advanceAmount?: Maybe<Scalars['Int']>;
  /** Bill type when settled/finalized. Values are 'invoice', 'regular' and 'default' */
  billType?: Maybe<Scalars['String']>;
  /** Credit Card Fee Payer. Values are 'customer' or 'snap'. */
  ccFeePayer?: Maybe<Scalars['String']>;
  /** Charge back fee in cents. The charge from payment processor when a donor cancels their donation through their bank instead of getting a refund from us directly. (usually $15 per) */
  chargebackFee?: Maybe<Scalars['Int']>;
  /** The statistic of a donation of campaigns */
  donationStats?: Maybe<DriveCampaignDonationStats>;
  /** The statistics of emails delivered/sent */
  emailDelivery?: Maybe<EmailsInfo>;
  /** The type of snap fee being collected. e.g. 'standard', '1+1', '20%/15%', etc. */
  feeType?: Maybe<Scalars['String']>;
  /** Total incentives price in cents. */
  gearCost?: Maybe<Scalars['Int']>;
  /** Group leader of a campaign */
  groupLeader?: Maybe<DriveGroupLeader>;
  id: Scalars['Int'];
  /** Cover Image for Campaign */
  image?: Maybe<Scalars['String']>;
  /** Goal of how much a fundraiser wants to raise */
  initialGoalCents?: Maybe<Scalars['Int']>;
  /** kyc processor. Values are 'wepay' or 'stripe' */
  kycProcessor?: Maybe<Scalars['String']>;
  /** kyc status of a campaign. Values are 'pending', 'active', 'inactive', etc. */
  kycStatus?: Maybe<Scalars['String']>;
  /** The address to ship the check for this campaign */
  mailingAddress?: Maybe<Scalars['String']>;
  /** The amount in cents that campaigns was manual-advanced in Raise. */
  manualAdvanceAmount?: Maybe<Scalars['Int']>;
  /** Net raised amount in cents. Equals totalRaised minus snapFee and adds the otkBonus. It is the amount client received in their check/deposit. */
  netRaisedTotal?: Maybe<Scalars['Int']>;
  /** Notes for settlement for this campaign */
  notes?: Maybe<Scalars['String']>;
  /** The legal name of a fundraisers organization */
  organizationLegalName?: Maybe<Scalars['String']>;
  /** The tin number of the organization */
  organizationTin?: Maybe<Scalars['String']>;
  /** Total bonus amount of otk in cents */
  otkBonus?: Maybe<Scalars['Int']>;
  /** The statistics of participants's activity of campaign */
  participantStats?: Maybe<DriveParticipantStats>;
  /** Processing Fee when settled/finalized. */
  processingFee?: Maybe<Scalars['Int']>;
  /** The date where the campaign has settle its payments from snap */
  settlementDate?: Maybe<Scalars['DateTime']>;
  /** How the funds has delivered to the organization. Values are 'check_fundraiser', 'check_salesrep', 'check_office' and 'direct_deposit' */
  settlementMethod?: Maybe<Scalars['String']>;
  /** The amount in cents collected as fee when a campaign ends based of the fee type */
  snapFee?: Maybe<Scalars['Float']>;
  /** Location of this fundraiser */
  territory?: Maybe<Scalars['String']>;
  /** The amount of purchase in cents. */
  totalPurchaseCents?: Maybe<Scalars['Int']>;
  /** Total raised of a fundraiser */
  totalRaisedCents?: Maybe<Scalars['Int']>;
  /** The total raised combined this organization has previously ran campaigns */
  totalRaisedHistory?: Maybe<Scalars['Int']>;
};

/** Pulls data on a campaigns donation broken down */
export type DriveCampaignDonationStats = {
  __typename?: 'DriveCampaignDonationStats';
  ccCoverageAmountCents?: Maybe<Scalars['Int']>;
  donationAppFeeCents?: Maybe<Scalars['Int']>;
  /** The amount that been raised */
  donationRaisedCents?: Maybe<Scalars['Int']>;
  /** The total count of donations */
  donationsCount?: Maybe<Scalars['Int']>;
  offlineTotalCents?: Maybe<Scalars['Int']>;
  onlineTotalCents?: Maybe<Scalars['Int']>;
  /** The count of participants */
  participantCount?: Maybe<Scalars['Int']>;
  /** The donated amount in cents that been raised by emails delivered */
  totalEmailDonations?: Maybe<Scalars['Int']>;
  /** The amount that been raised by miscellaneous forms */
  totalExtraDonations?: Maybe<Scalars['Int']>;
  /** The donated amount that been raised by sharing through social media */
  totalSocialDonations?: Maybe<Scalars['Int']>;
  /** The donated amount in cents that been raised by text message */
  totalTextDonations?: Maybe<Scalars['Int']>;
};

/** Paginated list of campaigns */
export type DriveCampaignList = {
  __typename?: 'DriveCampaignList';
  /** Total campaigns */
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<DriveCampaign>>>;
  offset?: Maybe<Scalars['Int']>;
};

/** Statistics for a set of campaigns in campaign-search. */
export type DriveCampaignSearchStatistics = {
  __typename?: 'DriveCampaignSearchStatistics';
  avgDonationDollars?: Maybe<Scalars['Float']>;
  avgEmailsDelivered?: Maybe<Scalars['Float']>;
  avgEmailsPerParticipant?: Maybe<Scalars['Float']>;
  avgRaisedDollarsPerCampaign?: Maybe<Scalars['Float']>;
  avgRaisedDollarsPerEmail?: Maybe<Scalars['Float']>;
  avgTeamSize?: Maybe<Scalars['Float']>;
  totalCampaign?: Maybe<Scalars['BigInt']>;
  totalCountDelivered?: Maybe<Scalars['BigInt']>;
  totalCountParticpants?: Maybe<Scalars['BigInt']>;
  totalDonations?: Maybe<Scalars['BigInt']>;
  totalRaisedByEmail?: Maybe<Scalars['Float']>;
  totalRaisedDollars?: Maybe<Scalars['Float']>;
};

export type DriveCampaignUpdateInput = {
  notes?: InputMaybe<Scalars['String']>;
};

export type DriveDateCompareInput = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
};

/** Represents a Event object and its attributes */
export type DriveEvent = {
  __typename?: 'DriveEvent';
  /** List of messages in the activity feed. Order by posted ascending by default. */
  activityFeed?: Maybe<Array<Maybe<DriveEventActivityFeed>>>;
  /** Activity types for an event. e.g. `football`, 'basketball', etc. */
  activityTypes?: Maybe<Array<Scalars['String']>>;
  /** Event Agenda which include start-time/end-time of event dates. Should be empty is **agendaConfig.isSameTime** is true */
  agenda?: Maybe<Array<DriveEventAgendaItem>>;
  /** The configuration for agenda. Format as follows ```JSON { isSameTime: true, startTime: "09:00AM", endTime: "07:00PM" } ``` where **isSameTime** means all event dates will be occured at same **startTime** and **endTime**. If **isSameTime**, **startTime** and **endTime** should be filled-in */
  agendaConfig?: Maybe<Scalars['JSON']>;
  /** List of attendees. */
  attendees?: Maybe<Array<DriveEventAttendee>>;
  /** Booth information for an event. */
  booth?: Maybe<DriveEventBooth>;
  /** The user who is the clinic leader. */
  clinicLeader?: Maybe<User>;
  /** The user who created the event. */
  createdBy?: Maybe<User>;
  /** The description of an event. */
  description?: Maybe<Scalars['String']>;
  /** Indicator that event requires a door prize. */
  doorPrizedRequired?: Maybe<Scalars['Boolean']>;
  /** The end date of an event. */
  endDate: Scalars['String'];
  /** The hotel address for the attendees */
  hotelAddress?: Maybe<Scalars['String']>;
  /** The hotel name for the attendees */
  hotelName?: Maybe<Scalars['String']>;
  /** Url for hubspot link. */
  hubspotTrackingLink?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Notes associated for the event. */
  notes?: Maybe<Scalars['String']>;
  /** A indicator whether the event had been completed planning phase. */
  planningCompleted?: Maybe<Scalars['Boolean']>;
  /** The time zone of an event */
  preferedTimezone?: Maybe<Scalars['String']>;
  /** Description for the sponsorship */
  sponsorDescription?: Maybe<Scalars['String']>;
  /** Indicator whether the door prize has been confirmed. */
  sponsorDoorPrized?: Maybe<Scalars['Boolean']>;
  /** The start date of an event. */
  startDate: Scalars['String'];
  /** The events status. */
  status: DriveEventStatus;
  /** The tier level for this event. Valid values is `1`, `2` and `3` */
  tier?: Maybe<Scalars['Int']>;
  /** The name of the event. */
  title: Scalars['String'];
  /** Venue location information for an event. */
  venue?: Maybe<DriveVenue>;
  /** Website link for an event. */
  websiteLink?: Maybe<Scalars['String']>;
};

/** Information of a activity feed message */
export type DriveEventActivityFeed = {
  __typename?: 'DriveEventActivityFeed';
  /** A list of replies the message */
  children?: Maybe<Array<Maybe<DriveEventActivityFeed>>>;
  /** The date this post was created */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** The event id */
  eventId: Scalars['ID'];
  /** If the message is pinned to the top */
  featured?: Maybe<Scalars['Boolean']>;
  /** The ID of the message */
  id: Scalars['String'];
  /** The message posted */
  message?: Maybe<Scalars['String']>;
  /** The date when this post has been updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** A users first name and last and link to profile photo */
  user?: Maybe<User>;
  /** The id of the user who posted the message */
  userId: Scalars['ID'];
};

export type DriveEventActivityInput = {
  featured?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
};

export type DriveEventAgendaInput = {
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Attributes for an events agenda */
export type DriveEventAgendaItem = {
  __typename?: 'DriveEventAgendaItem';
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

/** Represents an events attendee attributes */
export type DriveEventAttendee = {
  __typename?: 'DriveEventAttendee';
  /** The department the attendee is in. */
  department?: Maybe<Scalars['String']>;
  /** The event ID */
  eventId: Scalars['ID'];
  /** The status of an attendee flight request. Default is `NO_REQUEST`. */
  flightRequest?: Maybe<EventAttendeeRequestStatus>;
  /** The status of an attendee hotel request. Default is `NO_REQUEST`. */
  hotelRequest?: Maybe<EventAttendeeRequestStatus>;
  /** @deprecated Use userId instead */
  id: Scalars['ID'];
  /** Indication whether this attendee a clinic leader. */
  isClinicLeader?: Maybe<Scalars['Boolean']>;
  /** The status of an attendee attendence. */
  status: DriveAttendanceStatus;
  /** User Information of attendee, includes `firstName`, `lastName`, `email`, etc. defined in UserDirectory. */
  user?: Maybe<User>;
  /** The udId of an attendee. e.g. `ud_abc123` */
  userId: Scalars['ID'];
};

export type DriveEventAttendeeInput = {
  department?: InputMaybe<Scalars['String']>;
  flightRequest?: InputMaybe<EventAttendeeRequestStatus>;
  hotelRequest?: InputMaybe<EventAttendeeRequestStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};

/** Booth attributes */
export type DriveEventBooth = {
  __typename?: 'DriveEventBooth';
  /** Notes for the booth e.g. Electricity is paid for */
  boothNotes?: Maybe<Scalars['String']>;
  /** The time to end breakdown or clean up event equipment in Venue. */
  breakdownEndTime?: Maybe<Scalars['DateTime']>;
  /** The time to start breakdown or clean up event equipment in Venue. */
  breakdownStartTime?: Maybe<Scalars['DateTime']>;
  /** Indication whether electricity is provided. */
  electricityProvided?: Maybe<Scalars['Boolean']>;
  /** Indication whether flooring is provided. */
  flooringProvided?: Maybe<Scalars['Boolean']>;
  /** Indication whether internet is provided. */
  internetProvided?: Maybe<Scalars['Boolean']>;
  /** The time to end setup for event */
  setupEndTime?: Maybe<Scalars['DateTime']>;
  /** The time to begin setup for event */
  setupStartTime?: Maybe<Scalars['DateTime']>;
};

export type DriveEventBoothInput = {
  boothNotes?: InputMaybe<Scalars['String']>;
  breakdownEndTime?: InputMaybe<Scalars['String']>;
  breakdownStartTime?: InputMaybe<Scalars['String']>;
  electricityProvided?: InputMaybe<Scalars['Boolean']>;
  flooringProvided?: InputMaybe<Scalars['Boolean']>;
  internetProvided?: InputMaybe<Scalars['Boolean']>;
  setupEndTime?: InputMaybe<Scalars['String']>;
  setupStartTime?: InputMaybe<Scalars['String']>;
};

export type DriveEventInput = {
  activityTypes?: InputMaybe<Array<Scalars['String']>>;
  agenda?: InputMaybe<Array<DriveEventAgendaInput>>;
  agendaConfig?: InputMaybe<Scalars['JSON']>;
  attendees?: InputMaybe<Array<DriveEventAttendeeInput>>;
  booth?: InputMaybe<DriveEventBoothInput>;
  clinicLeaderId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  hotelAddress?: InputMaybe<Scalars['String']>;
  hotelName?: InputMaybe<Scalars['String']>;
  hubspotTrackingLink?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  planningCompleted?: InputMaybe<Scalars['Boolean']>;
  preferedTimezone?: InputMaybe<Scalars['String']>;
  sponsor?: InputMaybe<DriveEventSponsorInput>;
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DriveEventStatus>;
  tier?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<DriveEventVenueInput>;
  websiteLink?: InputMaybe<Scalars['String']>;
};

/** Paginated list of drive events */
export type DriveEventResults = {
  __typename?: 'DriveEventResults';
  events?: Maybe<Array<DriveEvent>>;
  offset?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DriveEventSearchInput = {
  activityTypes?: InputMaybe<Array<Scalars['String']>>;
  attendees?: InputMaybe<Array<Scalars['String']>>;
  boothOptions?: InputMaybe<DriveEventBoothInput>;
  dateRange?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<DriveDateCompareInput>;
  eventStatus?: InputMaybe<EventDateStatus>;
  id?: InputMaybe<Scalars['ID']>;
  sponsor?: InputMaybe<DriveEventSponsorInput>;
  startDate?: InputMaybe<DriveDateCompareInput>;
  states?: InputMaybe<Array<Scalars['String']>>;
  statuses?: InputMaybe<Array<DriveEventStatus>>;
  tiers?: InputMaybe<Array<Scalars['Int']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type DriveEventSponsorInput = {
  doorPrized?: InputMaybe<Scalars['Boolean']>;
  doorPrizedRequired?: InputMaybe<Scalars['Boolean']>;
  sponsorDescription?: InputMaybe<Scalars['String']>;
};

export enum DriveEventStatus {
  Closed = 'CLOSED',
  EmailSent = 'EMAIL_SENT',
  NotAttending = 'NOT_ATTENDING',
  Pending = 'PENDING',
  Registered = 'REGISTERED'
}

export type DriveEventVenueInput = {
  buildingOrRoom?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type DriveFieldInput = {
  label?: InputMaybe<Scalars['String']>;
  linkText?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: DriveFieldType;
  value: Scalars['String'];
};

export enum DriveFieldType {
  Html = 'HTML',
  Link = 'LINK',
  Text = 'TEXT'
}

export type DriveFileInput = {
  content: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Organization Summary information used by Drive's Get List Application */
export type DriveGetListOrganizationSummaryReturn = {
  __typename?: 'DriveGetListOrganizationSummaryReturn';
  /**
   * Entity ID of the organization. Its purpose is for caching in Apollo Client.
   * @deprecated use id
   */
  _id?: Maybe<Scalars['Int']>;
  activitiesWithoutCampaigns?: Maybe<Scalars['Int']>;
  averageRaisedPerCampaign?: Maybe<Scalars['Float']>;
  campaignCompleted?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['Int']>;
  hubspotId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  /** Number of campaigns that completed of this Organization */
  name?: Maybe<Scalars['String']>;
  /** Total students of the organization. Inherited from NCES data and studentCount from orgs-api. */
  population?: Maybe<Scalars['Int']>;
  /** Total potential raised in dollars for this organization. Equals NCES total students multiply with National RPK. */
  potentialRaised?: Maybe<Scalars['Float']>;
  /** @deprecated use saturationPercentage */
  saturationPercent?: Maybe<Scalars['Float']>;
  /** Saturation percentage of organization. It is calculated by divide total logged-in students by NCES total students of this organization. */
  saturationPercentage?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  /** Lifetime total raised in dollars of organization. Computed from all non-upcoming campaigns. */
  totalRaised?: Maybe<Scalars['Float']>;
  /** Lifetime total raised in cents of organization. */
  totalRaisedCents?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type DriveGetlistProspectsReturn = {
  __typename?: 'DriveGetlistProspectsReturn';
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<HubspotProspectsDeals>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DriveGetlistWinbackReturn = {
  __typename?: 'DriveGetlistWinbackReturn';
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<WinbackDeals>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** Group Leader information in Drive */
export type DriveGroupLeader = {
  __typename?: 'DriveGroupLeader';
  /** The full name of the group leader */
  name?: Maybe<Scalars['String']>;
};

export type DriveOrgListResults = {
  __typename?: 'DriveOrgListResults';
  offset?: Maybe<Scalars['Int']>;
  orgs?: Maybe<Array<Maybe<DriveGetListOrganizationSummaryReturn>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DriveOrgUserTrackingSearchInput = {
  trackingIdStartsWith?: InputMaybe<Scalars['String']>;
  trackingType?: InputMaybe<Scalars['String']>;
};

/** Organization used by Drive */
export type DriveOrganization = {
  __typename?: 'DriveOrganization';
  activity?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  legalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

/** List of organizations used by Drive */
export type DriveOrganizationList = {
  __typename?: 'DriveOrganizationList';
  list: Array<Maybe<DriveOrganization>>;
  offset?: Maybe<Scalars['Int']>;
};

/** Statistics information related to Participants in one campaign */
export type DriveParticipantStats = {
  __typename?: 'DriveParticipantStats';
  /** Count of participants who had logged in */
  loggedInCount?: Maybe<Scalars['Int']>;
  /** Count of participants with 20 emails sent */
  participantsWithAtLeastTwentyEmails?: Maybe<Scalars['Int']>;
  /** Percentage of active participants of campaign. */
  participationPercent?: Maybe<Scalars['Int']>;
  /** Count of participants with at least one donation */
  withAtLeastOneDonation?: Maybe<Scalars['Int']>;
};

export type DriveTrackingInput = {
  trackingId: Scalars['String'];
  trackingType?: InputMaybe<Scalars['String']>;
  trackingValue: Scalars['String'];
  trackingValueType?: InputMaybe<Scalars['String']>;
};

export type DriveUser = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type DriveUserSearchInput = {
  isInternal?: InputMaybe<Scalars['Boolean']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type DriveUsersResult = {
  __typename?: 'DriveUsersResult';
  nextPage?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<DriveAccountUser>>>;
};

/** Venue or location for Event used by Event Clinic */
export type DriveVenue = {
  __typename?: 'DriveVenue';
  /** Building name or Room number. e.g. `Room 330` */
  buildingOrRoom?: Maybe<Scalars['String']>;
  /** City of Venue location, e.g. `Dallas` */
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Venue Name. e.g. `Hillton Convention Center`, e.g. */
  name: Scalars['String'];
  /** The short-code for US States. e.g. `TX`, 'CA' */
  state?: Maybe<Scalars['String']>;
};

export type DriveVenueSearchInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type DynamicEmailDataInput = {
  inviterName?: InputMaybe<Scalars['String']>;
  organizationName?: InputMaybe<Scalars['String']>;
  sponsorshipGroupName?: InputMaybe<Scalars['String']>;
  sponsorshipUrl?: InputMaybe<Scalars['String']>;
};

/** Information of a emails for a camapgin */
export type EmailsInfo = {
  __typename?: 'EmailsInfo';
  /** Total emails bounced back due to failed delivery */
  bounced?: Maybe<Scalars['Int']>;
  /** Total emails loaded by particpants */
  loaded?: Maybe<Scalars['Int']>;
  /** The schedule (timezone-sensitive) thatthe emails are scheduled to release */
  scheduledReleaseDate?: Maybe<ScheduledReleaseInfo>;
  /** Total emails sent */
  sent?: Maybe<Scalars['Int']>;
  /** The datetime the emails were sent out */
  sentAt?: Maybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  activity?: Maybe<Scalars['String']>;
  activityLevel?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  bus_fee?: Maybe<Scalars['Float']>;
  bus_time?: Maybe<Scalars['String']>;
  cancellation_status?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  conference_event_id?: Maybe<Scalars['Int']>;
  conference_id?: Maybe<Scalars['Int']>;
  confirmed?: Maybe<Scalars['String']>;
  confirmedStatusBoolean?: Maybe<Scalars['Boolean']>;
  contract?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  departure_location?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  early_dismissal_required?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  eventOfficials?: Maybe<Array<Maybe<Official>>>;
  eventTiming?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['Date']>;
  event_id: Scalars['Int'];
  exists_in_mls?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Float']>;
  formattedEventDate?: Maybe<Scalars['String']>;
  formattedEventDateSystem?: Maybe<Scalars['String']>;
  formattedEventDay?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gate_revenue?: Maybe<Scalars['Float']>;
  groupval?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  impact_event?: Maybe<Scalars['String']>;
  isDuplicate?: Maybe<Scalars['Boolean']>;
  lead?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  loss_points?: Maybe<Scalars['Int']>;
  num_buses?: Maybe<Scalars['Int']>;
  opponent?: Maybe<Scalars['String']>;
  opponent_code?: Maybe<Scalars['String']>;
  opponent_score?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  prep_setup?: Maybe<Scalars['String']>;
  promote?: Maybe<Scalars['String']>;
  results?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  rollover?: Maybe<Scalars['String']>;
  rolloverStatusBoolean?: Maybe<Scalars['Boolean']>;
  seasonInfo?: Maybe<Scalars['String']>;
  seasonSportCode?: Maybe<Scalars['String']>;
  season_team?: Maybe<Scalars['Int']>;
  sportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  sportGender?: Maybe<Scalars['String']>;
  sportLevel?: Maybe<Scalars['String']>;
  sportName?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  team_score?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tournament?: Maybe<Scalars['String']>;
  trans_id?: Maybe<Scalars['Int']>;
  transportDetails?: Maybe<Scalars['String']>;
  transport_comments?: Maybe<Scalars['String']>;
  transportation?: Maybe<Scalars['String']>;
  update_at?: Maybe<Scalars['Date']>;
  vehicle_count?: Maybe<Scalars['Int']>;
  web_dir?: Maybe<Scalars['String']>;
  weekdayname?: Maybe<Scalars['String']>;
  win_points?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['String']>;
};

export enum EventAttendeeRequestStatus {
  NoRequest = 'NO_REQUEST',
  Processed = 'PROCESSED',
  Request = 'REQUEST'
}

export type EventCalendarFiltersInput = {
  activity?: InputMaybe<Scalars['String']>;
  activityName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Date']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  homeAway?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type EventContract = {
  __typename?: 'EventContract';
  comments?: Maybe<Scalars['String']>;
  event_contract_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  main_event_id?: Maybe<Scalars['Int']>;
  participant?: Maybe<Scalars['String']>;
  signee_name?: Maybe<Scalars['String']>;
  signees?: Maybe<Array<Maybe<ContractSignees>>>;
  years?: Maybe<Scalars['String']>;
};

export enum EventDateStatus {
  Active = 'Active',
  Closed = 'Closed',
  Upcoming = 'Upcoming'
}

export type EventOfficialReport = {
  __typename?: 'EventOfficialReport';
  comments?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  officials?: Maybe<Array<Maybe<EventOfficials>>>;
  opponent?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

export type EventOfficialReportFilter = {
  event_date: Scalars['Date'];
};

export type EventOfficials = {
  __typename?: 'EventOfficials';
  address?: Maybe<Scalars['String']>;
  cell_phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  official_id?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  received?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  ssn?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type EventParticipants = {
  __typename?: 'EventParticipants';
  SchoolName?: Maybe<Scalars['String']>;
  contract_received?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  school_code?: Maybe<Scalars['String']>;
};

export type EventParticipantsInput = {
  contract_received?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  notes?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  school_code?: InputMaybe<Scalars['String']>;
};

export type EventPreparations = {
  __typename?: 'EventPreparations';
  comments?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  prep?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['String']>;
};

export type EventPreparationsInput = {
  comments?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  prep?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type EventTransportDetails = {
  __typename?: 'EventTransportDetails';
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['Date']>;
  event_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type EventTransportDetailsDeleteManyCount = {
  __typename?: 'EventTransportDetailsDeleteManyCount';
  count?: Maybe<Scalars['Int']>;
};

export type EventTransportDetailsInput = {
  driver_name?: InputMaybe<Scalars['String']>;
  driver_phone?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  vehicle_id?: InputMaybe<Scalars['String']>;
  vehicle_type?: InputMaybe<Scalars['String']>;
};

export type EventsOpponent = {
  __typename?: 'EventsOpponent';
  activity?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  event_date?: Maybe<Scalars['Date']>;
  eventsOpponentId?: Maybe<Scalars['Int']>;
  season_years?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
};

export type ExportFile = {
  __typename?: 'ExportFile';
  content?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type ExternalBankAccount = {
  __typename?: 'ExternalBankAccount';
  accountId: Scalars['String'];
  accountType?: Maybe<AccountType>;
  bankName: Scalars['String'];
  campaignId: Scalars['String'];
  last4: Scalars['String'];
};

export enum ExternalTransferDirectionEnum {
  Credit = 'Credit',
  Debit = 'Debit'
}

/** Owned by Vault Only used in legacy createCard */
export enum Financial_Gateway {
  Stripe = 'stripe'
}

export enum Fundraiser_Status {
  Active = 'active',
  Approved = 'approved',
  Archive = 'archive',
  Closed = 'closed',
  Deleted = 'deleted',
  Final = 'final',
  PendingApproval = 'pending_approval',
  Settled = 'settled'
}

export type Facility = {
  __typename?: 'Facility';
  Address1?: Maybe<Scalars['String']>;
  Address2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['Date']>;
  Facility_id?: Maybe<Scalars['Int']>;
  State?: Maybe<Scalars['String']>;
  ZipCode?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  indoor?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  location_id?: Maybe<Scalars['Int']>;
  ml_site_id?: Maybe<Scalars['Int']>;
  ml_space?: Maybe<Scalars['String']>;
  ml_space_id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  place_name: Scalars['String'];
  show?: Maybe<Scalars['String']>;
  specialDirections?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type FacilityLocation = {
  __typename?: 'FacilityLocation';
  Address1?: Maybe<Scalars['String']>;
  Address2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  ZipCode?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['Int']>;
  place_name?: Maybe<Scalars['String']>;
};

export type Family = {
  __typename?: 'Family';
  children?: Maybe<Array<Maybe<User>>>;
  parents?: Maybe<Array<Maybe<User>>>;
};

export enum FinAcctStatus {
  ActionRequired = 'ACTION_REQUIRED',
  Active = 'ACTIVE',
  Approved = 'APPROVED',
  AwaitingReapproval = 'AWAITING_REAPPROVAL',
  Declined = 'DECLINED',
  Pending = 'PENDING',
  Terminated = 'TERMINATED',
  UnderReview = 'UNDER_REVIEW'
}

export type FinancialAcctNode = {
  __typename?: 'FinancialAcctNode';
  acctId?: Maybe<Scalars['ID']>;
  applicationId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['ID']>;
  finAcctId?: Maybe<Scalars['ID']>;
  kybId?: Maybe<Scalars['ID']>;
  orgId?: Maybe<Scalars['ID']>;
  orgName?: Maybe<Scalars['String']>;
  processor?: Maybe<Processor>;
  status?: Maybe<FinAcctStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialAcctUser = {
  __typename?: 'FinancialAcctUser';
  acctId?: Maybe<Scalars['ID']>;
  applicationId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  finAcctId?: Maybe<Scalars['ID']>;
  isBeneficialOwner?: Maybe<Scalars['Boolean']>;
  isContact?: Maybe<Scalars['Boolean']>;
  isPrincipal?: Maybe<Scalars['Boolean']>;
  isRepresentative?: Maybe<Scalars['Boolean']>;
  kybId?: Maybe<Scalars['ID']>;
  kycId?: Maybe<Scalars['ID']>;
  orgId?: Maybe<Scalars['ID']>;
  personId?: Maybe<Scalars['ID']>;
  processor?: Maybe<Processor>;
  status?: Maybe<FinAcctStatus>;
  userId?: Maybe<Scalars['ID']>;
};

export type FinancialAddress = {
  __typename?: 'FinancialAddress';
  city?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type FinancialAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Fundraiser = {
  __typename?: 'Fundraiser';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['Int']>;
  groupName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  netRaised?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  prefund?: Maybe<Prefund>;
  salesRep?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Fundraiser_Status>;
  totalRaised?: Maybe<Scalars['Int']>;
};

export type FundraiserCheerwall = {
  __typename?: 'FundraiserCheerwall';
  cheers?: Maybe<Array<Maybe<Cheer>>>;
  count?: Maybe<Scalars['Int']>;
};

export type FundraiserDonations = {
  __typename?: 'FundraiserDonations';
  count?: Maybe<Scalars['Int']>;
  donations?: Maybe<Array<Maybe<CheerWall>>>;
};

export type FundraiserEntityResource = {
  __typename?: 'FundraiserEntityResource';
  entityId?: Maybe<Scalars['Int']>;
};

export type FundraiserGroup = {
  __typename?: 'FundraiserGroup';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type FundraiserList = {
  __typename?: 'FundraiserList';
  hasMore?: Maybe<Scalars['Boolean']>;
  list: Array<Fundraiser>;
};

export type FundraiserRaisedAmount = {
  __typename?: 'FundraiserRaisedAmount';
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type FundraiserRewardLevelsCount = {
  __typename?: 'FundraiserRewardLevelsCount';
  levelsCount?: Maybe<Scalars['Int']>;
};

export type FundraiserRewardsProduct = {
  __typename?: 'FundraiserRewardsProduct';
  default?: Maybe<Scalars['Boolean']>;
  fitting?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
};

export type FundraiserSearchParams = {
  name?: InputMaybe<Scalars['String']>;
};

export type FundraiserTopDonation = {
  __typename?: 'FundraiserTopDonation';
  donorName?: Maybe<Scalars['String']>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type FundraiserUserIncentiveId = {
  __typename?: 'FundraiserUserIncentiveID';
  id?: Maybe<Scalars['Int']>;
};

export type FundraiserUserRole = {
  __typename?: 'FundraiserUserRole';
  isGroupLeader?: Maybe<Scalars['Boolean']>;
  isParticipant?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GalleryItems = {
  __typename?: 'GalleryItems';
  campaignLogo?: Maybe<Scalars['String']>;
  campaignLogoThumb?: Maybe<Scalars['String']>;
  carouselItems?: Maybe<Array<Maybe<CarouselItem>>>;
};

export type GetCompetitionListInput = {
  from_date?: InputMaybe<Scalars['String']>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetDailyCalendarBusScheduleByDateInput = {
  from_date?: InputMaybe<Scalars['String']>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetDailyCalendarEventsByDateInput = {
  from_date?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetDailyCalendarOfficialsByDateInput = {
  from_date?: InputMaybe<Scalars['String']>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetDailyCalendarPreparationsByDateInput = {
  from_date?: InputMaybe<Scalars['String']>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetDailyCalendarWorkersByDateInput = {
  from_date?: InputMaybe<Scalars['String']>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetEventByIdInput = {
  event_id: Scalars['Int'];
};

export type GetEventParticipantsByIdInput = {
  id: Scalars['Int'];
};

export type GetEventPreparationsByEventIdInput = {
  event_id: Scalars['Int'];
};

export type GetEventPreparationsByIdInput = {
  id: Scalars['Int'];
};

export type GetEventTransportDetailsByEventOrDatesInput = {
  event_date_end?: InputMaybe<Scalars['Date']>;
  event_date_start?: InputMaybe<Scalars['Date']>;
  event_id?: InputMaybe<Scalars['Int']>;
};

export type GetEventsFilteredByOpponentStartAndEndDate = {
  endDate: Scalars['String'];
  opponent: Scalars['String'];
  startDate: Scalars['String'];
};

export type GetFacilityByPlaceNameInput = {
  place_name: Scalars['String'];
};

export type GetLevelByIdInput = {
  ID: Scalars['Int'];
};

export type GetOfficialAssignmentsInput = {
  from_date?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  official_name?: InputMaybe<Scalars['String']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_date?: InputMaybe<Scalars['String']>;
};

export type GetOfficialByIdInput = {
  id: Scalars['Int'];
};

export type GetOfficialDutyByIdInput = {
  id: Scalars['Int'];
};

export type GetOfficialPoolByIdInput = {
  ID?: InputMaybe<Scalars['String']>;
};

export type GetOpponentBySchoolCodeInput = {
  SchoolCode: Scalars['String'];
};

export type GetPreparationByIdInput = {
  id: Scalars['Int'];
};

export type GetSchoolInfoByIdInput = {
  id: Scalars['String'];
};

export type GetVehicleByIdInput = {
  id: Scalars['Int'];
};

export type GetWorkerByIdInput = {
  id: Scalars['Int'];
};

export type GetWorkerPoolByIdInput = {
  ID: Scalars['Int'];
};

export type GetWorkersByEventIdInput = {
  event_id: Scalars['Int'];
};

export type GroupLeader = {
  __typename?: 'GroupLeader';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** See CampaignMembership for details */
export type GroupLeaderCampaign = {
  __typename?: 'GroupLeaderCampaign';
  basicStatus: BasicCampaignStatus;
  donationLink: Scalars['String'];
  goalInDollars?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isCocoach: Scalars['Boolean'];
  joinCode?: Maybe<Scalars['String']>;
  /** Getting Kyc status adds time to your query **expensive** */
  kyc?: Maybe<CampaignKyc>;
  name: Scalars['String'];
  /** Primary group leader */
  primary?: Maybe<PrimaryGroupLeader>;
  /** Getting roster adds time to your query */
  roster?: Maybe<Array<Maybe<Roster>>>;
  status: CampaignStatus;
  teamSize?: Maybe<Scalars['Int']>;
  totalCentsRaised?: Maybe<Scalars['Int']>;
  whyDonateText?: Maybe<Scalars['String']>;
};

export type GroupLeaderList = {
  __typename?: 'GroupLeaderList';
  count?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
  list: Array<Maybe<GroupLeader>>;
};

export enum GroupRosterFilterEnum {
  GroupId = 'groupId',
  Id = 'id',
  MemberId = 'memberId',
  RosterId = 'rosterId',
  SeasonId = 'seasonId'
}

export type GroupsOverviewDashboardResponse = {
  __typename?: 'GroupsOverviewDashboardResponse';
  overview?: Maybe<Array<Maybe<SpendGroupsOverview>>>;
};

export type HelpDocumentDeleteInput = {
  key: Scalars['String'];
};

export type HelpDocumentUploadInput = {
  base64File: Scalars['String'];
};

export type HmAccountRole = {
  __typename?: 'HmAccountRole';
  account_id?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  role_id?: Maybe<Scalars['Int']>;
};

export type HmGraphSales = {
  __typename?: 'HmGraphSales';
  soldDuringWeek?: Maybe<Scalars['Int']>;
  weekName?: Maybe<Scalars['String']>;
};

export type HmSalesRep = {
  __typename?: 'HmSalesRep';
  rep_email?: Maybe<Scalars['String']>;
  sales_rep?: Maybe<Scalars['String']>;
};

export type HmSpendAccount = {
  __typename?: 'HmSpendAccount';
  id?: Maybe<Scalars['Int']>;
  orgTeamMembers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HmSpendData = {
  __typename?: 'HmSpendData';
  credited?: Maybe<Scalars['Int']>;
  inactiveCards?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  pastDue?: Maybe<Scalars['Int']>;
  pending?: Maybe<Scalars['Int']>;
  upcoming?: Maybe<Scalars['Int']>;
};

export type HmSponsorData = {
  __typename?: 'HmSponsorData';
  activeSponsorships?: Maybe<Scalars['Int']>;
  assetCount?: Maybe<Scalars['Int']>;
  available?: Maybe<Scalars['Int']>;
  sponsorShipValue?: Maybe<Scalars['Int']>;
  totalAssets?: Maybe<Scalars['Int']>;
};

export type HmStore = {
  __typename?: 'HmStore';
  active_stores?: Maybe<Scalars['String']>;
  monthly_sales?: Maybe<Array<Maybe<HmGraphSales>>>;
  total_orders?: Maybe<Scalars['String']>;
  total_points?: Maybe<Scalars['String']>;
  total_sales?: Maybe<Scalars['String']>;
};

export type HmUser = {
  __typename?: 'HmUser';
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** Hubspot Engagement entity */
export type HubspotCallEngagement = {
  __typename?: 'HubspotCallEngagement';
  contactIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  dealIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  engagementId?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type HubspotProspectsDeals = {
  __typename?: 'HubspotProspectsDeals';
  activity?: Maybe<Scalars['String']>;
  dealName?: Maybe<Scalars['String']>;
  dealStage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isProspectPinned?: Maybe<Scalars['Boolean']>;
  lastActivityDate?: Maybe<Scalars['String']>;
  leaderFirstName?: Maybe<Scalars['String']>;
  leaderLastName?: Maybe<Scalars['String']>;
  projectedLaunchDate?: Maybe<Scalars['String']>;
};

export enum HubspotSortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

/** Common payload for mutations. */
export type IMutationResult = {
  __typename?: 'IMutationResult';
  data?: Maybe<Scalars['JSON']>;
  message?: Maybe<Scalars['String']>;
};

export type Industry = {
  __typename?: 'Industry';
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type InsAddPreApprovedContactApproverInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type InsAddPreApprovedContactOrgInput = {
  id?: InputMaybe<Scalars['String']>;
  modId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  raiseId?: InputMaybe<Scalars['Int']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type InsAddPreApprovedContactsResult = {
  __typename?: 'InsAddPreApprovedContactsResult';
  contactsResult?: Maybe<Array<Maybe<InsPreApprovedContactResult>>>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
};

export type InsAnalyticsSummaryStat = {
  __typename?: 'InsAnalyticsSummaryStat';
  amount_raised_cents: Scalars['Int'];
  campaign_id: Scalars['Int'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type InsCampaignDonation = {
  __typename?: 'InsCampaignDonation';
  amount_cents?: Maybe<Scalars['Int']>;
  campaign_id: Scalars['Int'];
  campaign_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  donor_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  participant_name?: Maybe<Scalars['String']>;
};

export type InsCampaignRaiseEntityInfo = {
  __typename?: 'InsCampaignRaiseEntityInfo';
  campaign_id: Scalars['Int'];
  entity_id?: Maybe<Scalars['Int']>;
};

export type InsCampaignSettlement = {
  __typename?: 'InsCampaignSettlement';
  amount_cents?: Maybe<Scalars['Int']>;
  campaign_id: Scalars['Int'];
  campaign_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_updated?: Maybe<Scalars['DateTime']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type InsCampaignStat = {
  __typename?: 'InsCampaignStat';
  donations_count?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['DateTime']>;
  forecasted_amount_cents?: Maybe<Scalars['Int']>;
  group_leader_email?: Maybe<Scalars['String']>;
  group_leader_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  insights_status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['Int']>;
  participation?: Maybe<Scalars['Float']>;
  preloading?: Maybe<Scalars['Float']>;
  start_date?: Maybe<Scalars['DateTime']>;
  total_raised_cents?: Maybe<Scalars['Int']>;
};

export type InsCampaignsData = {
  __typename?: 'InsCampaignsData';
  analyticsSummaryStats?: Maybe<Array<Maybe<InsAnalyticsSummaryStat>>>;
  campaignStats?: Maybe<Array<Maybe<InsCampaignStat>>>;
  donationMapStats?: Maybe<Array<Maybe<InsDonationMapStat>>>;
  inviteStats?: Maybe<Array<Maybe<InsInviteStat>>>;
  lTRChart?: Maybe<InsLtrChartData>;
  monthlyCampaignStats?: Maybe<Array<Maybe<InsMonthlyCampaignStat>>>;
};

export type InsDeletePreApprovedContactResult = {
  __typename?: 'InsDeletePreApprovedContactResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
};

export type InsDonationMapStat = {
  __typename?: 'InsDonationMapStat';
  campaign_id?: Maybe<Scalars['Int']>;
  campaign_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  donations_amount_cents?: Maybe<Scalars['Int']>;
  donations_count?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
  postal_code?: Maybe<Scalars['String']>;
};

export type InsDonorParticipantContact = {
  __typename?: 'InsDonorParticipantContact';
  campaign_id: Scalars['Int'];
  donor_email?: Maybe<Scalars['String']>;
  donor_id?: Maybe<Scalars['Int']>;
  donor_name?: Maybe<Scalars['String']>;
  participant_email?: Maybe<Scalars['String']>;
  participant_id?: Maybe<Scalars['Int']>;
  participant_name?: Maybe<Scalars['String']>;
};

export type InsEditPreApprovedContactInput = {
  activity?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type InsEditPreApprovedContactResult = {
  __typename?: 'InsEditPreApprovedContactResult';
  error?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type InsEditPreApprovedInvite = {
  __typename?: 'InsEditPreApprovedInvite';
  activity: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  inviteStatus: Scalars['String'];
  lastName: Scalars['String'];
  orgName: Scalars['String'];
};

export type InsEditPreApprovedInviteResult = {
  __typename?: 'InsEditPreApprovedInviteResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
  updatedInvite?: Maybe<InsEditPreApprovedInvite>;
};

export type InsEmailTestPreApprovedContactResult = {
  __typename?: 'InsEmailTestPreApprovedContactResult';
  email: Scalars['String'];
  status: Scalars['String'];
};

export type InsInviteStat = {
  __typename?: 'InsInviteStat';
  campaign_id?: Maybe<Scalars['Int']>;
  campaign_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  invite_count: Scalars['Int'];
  invite_type: Scalars['String'];
  total_amount_cents: Scalars['Int'];
};

export type InsLtrChartData = {
  __typename?: 'InsLTRChartData';
  activeCampaignsCount?: Maybe<Scalars['Int']>;
  activeCampaignsParticipation?: Maybe<Scalars['Float']>;
  activeCampaignsTotalCents?: Maybe<Scalars['Int']>;
  avgDonationCents?: Maybe<Scalars['Int']>;
  closedCampaignsCount?: Maybe<Scalars['Int']>;
  closedCampaignsParticipation?: Maybe<Scalars['Float']>;
  closedCampaignsTotalCents?: Maybe<Scalars['Int']>;
  ltr?: Maybe<Scalars['Int']>;
  upcomingCampaignsCount?: Maybe<Scalars['Int']>;
  upcomingCampaignsForecastedAmountCents?: Maybe<Scalars['Int']>;
  upcomingCampaignsParticipantSignIn?: Maybe<Scalars['Float']>;
};

export type InsMonthlyCampaignStat = {
  __typename?: 'InsMonthlyCampaignStat';
  campaign_ids: Array<Maybe<Scalars['Int']>>;
  month: Scalars['Int'];
  participation?: Maybe<Scalars['Float']>;
  preloading?: Maybe<Scalars['Float']>;
  year: Scalars['Int'];
};

export type InsOrg = {
  __typename?: 'InsOrg';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type InsOrgCampaignSummary = {
  __typename?: 'InsOrgCampaignSummary';
  campaignsCount: Scalars['Int'];
  orgId?: Maybe<Scalars['String']>;
  totalRaisedCents: Scalars['Int'];
};

export type InsOrgCampaignSummaryInput = {
  campaignIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orgId?: InputMaybe<Scalars['String']>;
};

export type InsPreApprovedContact = {
  __typename?: 'InsPreApprovedContact';
  activity?: Maybe<Scalars['String']>;
  associated_org_id?: Maybe<Scalars['String']>;
  associated_org_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invite_sent_at?: Maybe<Scalars['DateTime']>;
  invite_status?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

export type InsPreApprovedContactInput = {
  activity: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type InsPreApprovedContactResult = {
  __typename?: 'InsPreApprovedContactResult';
  email: Scalars['String'];
  status: Scalars['String'];
};

export type InsResendPreApprovedContactResult = {
  __typename?: 'InsResendPreApprovedContactResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
};

export type InsSalesRepInfo = {
  __typename?: 'InsSalesRepInfo';
  email: Scalars['String'];
  featured_image?: Maybe<Scalars['String']>;
  hubspot_calendar_link?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  post_title?: Maybe<Scalars['String']>;
};

export type InsUser = {
  __typename?: 'InsUser';
  id: Scalars['Int'];
};

export type InsightsUserPreference = {
  __typename?: 'InsightsUserPreference';
  campaign_raise_id?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type InsightsUserPreferencesCreateResult = {
  __typename?: 'InsightsUserPreferencesCreateResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
};

export type InsightsUserPreferencesUpdateResult = {
  __typename?: 'InsightsUserPreferencesUpdateResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
};

export type Invite = {
  __typename?: 'Invite';
  assignedAt?: Maybe<Scalars['String']>;
  business?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type InviteCreationInput = {
  business: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sponsorshipGroups: CreateInviteSponsorshipGroupRelation;
  status?: InputMaybe<Scalars['String']>;
};

export enum InviteFilterEnum {
  Group = 'group',
  Program = 'program',
  Status = 'status',
  Type = 'type'
}

export type InviteInfo = {
  __typename?: 'InviteInfo';
  email?: Maybe<Scalars['String']>;
  flow?: Maybe<Scalars['String']>;
  flowParams?: Maybe<Scalars['JSONObject']>;
  joincode?: Maybe<Scalars['String']>;
  requester?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
};

export type InviteList = {
  __typename?: 'InviteList';
  acceptedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  joincode?: Maybe<Scalars['String']>;
  requester?: Maybe<User>;
  status?: Maybe<UserInviteStatus>;
};

export type InviteParentArguments = {
  joincode?: InputMaybe<Scalars['String']>;
};

export type InviteUserArguments = {
  apps?: InputMaybe<Array<InputMaybe<UserApps>>>;
  consumer?: InputMaybe<UserApps>;
  fundraiserId?: InputMaybe<Scalars['Int']>;
  occupation?: InputMaybe<UserOccupation>;
  orgs?: InputMaybe<Array<InputMaybe<InviteUserOrgsArguments>>>;
  permissionIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  redirectUrl?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InviteUserOrgsArguments = {
  orgId?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<UserApps>;
  roleId?: InputMaybe<Scalars['String']>;
};

export type Invites = {
  __typename?: 'Invites';
  invites?: Maybe<Array<Maybe<Invite>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum InvoiceFilterEnum {
  Date = 'date',
  GroupId = 'groupId',
  GroupName = 'groupName',
  GroupRosterId = 'groupRosterId',
  PlayerName = 'playerName',
  Status = 'status',
  Unreconciled = 'unreconciled'
}

export enum InvoiceReportFilterEnum {
  DateAfter = 'dateAfter',
  DateBefore = 'dateBefore',
  GroupId = 'groupId',
  GroupRosterId = 'groupRosterId',
  PastDueRange = 'pastDueRange',
  Status = 'status'
}

/** Owned by Vault Only used in legacy createCard */
export type IssueCardInput = {
  altName?: InputMaybe<Scalars['String']>;
  cardType: Card_Type;
  metadata?: InputMaybe<VaultCardMetadataInput>;
  recipientName?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<FinancialAddressInput>;
  shippingService?: InputMaybe<Shipping_Service>;
  spendingLimitAmount: Scalars['Int'];
  spendingLimitInterval: Spending_Limit_Interval;
};

export type JoinFundraiserUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type JoinedFundraiserId = {
  __typename?: 'JoinedFundraiserID';
  /** Returns the ID of the fundraiser */
  id?: Maybe<Scalars['Int']>;
};

export enum Kyb_Structure {
  FreeZoneEstablishment = 'free_zone_establishment',
  FreeZoneLlc = 'free_zone_llc',
  GovernmentInstrumentality = 'government_instrumentality',
  GovernmentalUnit = 'governmental_unit',
  IncorporatedNonProfit = 'incorporated_non_profit',
  LimitedLiabilityPartnership = 'limited_liability_partnership',
  Llc = 'llc',
  MultiMemberLlc = 'multi_member_llc',
  PrivateCompany = 'private_company',
  PrivateCorporation = 'private_corporation',
  PrivatePartnership = 'private_partnership',
  PublicCompany = 'public_company',
  PublicCorporation = 'public_corporation',
  PublicPartnership = 'public_partnership',
  SingleMemberLlc = 'single_member_llc',
  SoleEstablishment = 'sole_establishment',
  SoleProprietorship = 'sole_proprietorship',
  TaxExemptGovernmentInstrumentality = 'tax_exempt_government_instrumentality',
  UnincorporatedAssociation = 'unincorporated_association',
  UnincorporatedNonProfit = 'unincorporated_non_profit'
}

export enum Kyb_Type {
  Company = 'company',
  GovernmentEntity = 'government_entity',
  Individual = 'individual',
  NonProfit = 'non_profit'
}

export type Level = {
  __typename?: 'Level';
  ID: Scalars['Int'];
  Level?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
};

export type Link = {
  __typename?: 'Link';
  dest?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type Links = {
  __typename?: 'Links';
  dest?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type MdmDetails = DriveUser & {
  __typename?: 'MDMDetails';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type MagentoOrder = {
  __typename?: 'MagentoOrder';
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseGrandTotal?: Maybe<Scalars['Float']>;
  baseShippingAmount?: Maybe<Scalars['Float']>;
  baseSubtotal?: Maybe<Scalars['Float']>;
  baseTaxAmount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['ID']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerFirstName?: Maybe<Scalars['String']>;
  customerLastName?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  grandTotal?: Maybe<Scalars['Float']>;
  incrementId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  mageworxRewardPointsAmount?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['BigInt']>;
  scopeId?: Maybe<Scalars['BigInt']>;
  shippingAmount?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  storeDashbordStatus?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxAmount?: Maybe<Scalars['Float']>;
  totalPaid?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type MagentoOrderUnionType = MagentoOrders | OnException;

export type MagentoOrders = {
  __typename?: 'MagentoOrders';
  orders?: Maybe<Array<Maybe<MagentoOrder>>>;
};

export type MagentoPointActivities = {
  __typename?: 'MagentoPointActivities';
  activities?: Maybe<Array<Maybe<MagentoPointActivity>>>;
};

export type MagentoPointActivity = {
  __typename?: 'MagentoPointActivity';
  createdAt?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['BigInt']>;
  customerName?: Maybe<Scalars['String']>;
  pointsBalance?: Maybe<Scalars['Float']>;
  pointsDelta?: Maybe<Scalars['Float']>;
  scopeId?: Maybe<Scalars['BigInt']>;
  status?: Maybe<Scalars['String']>;
  storeCode?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  teamName?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['BigInt']>;
  transactionType?: Maybe<Scalars['String']>;
};

export type MagentoPointActivityUnionType = MagentoPointActivities | OnException;

export type MagentoStore = {
  __typename?: 'MagentoStore';
  accountManagerId?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  baseTotalSales?: Maybe<Scalars['Float']>;
  brands?: Maybe<Array<Maybe<Brand>>>;
  campaignId?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  digitalLogo?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  embroideryLogo?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Int']>;
  entityId?: Maybe<Scalars['BigInt']>;
  favicon?: Maybe<Scalars['String']>;
  groupLeaderEmail?: Maybe<Scalars['String']>;
  hatLogo?: Maybe<Scalars['String']>;
  headerLogo?: Maybe<Scalars['String']>;
  heroSliderVariableId?: Maybe<Scalars['BigInt']>;
  homepagePageId?: Maybe<Scalars['String']>;
  managerId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  ncesId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
  parentStoreId?: Maybe<Scalars['Int']>;
  pointsPercentage?: Maybe<Scalars['Int']>;
  primaryColor?: Maybe<Scalars['String']>;
  productColors?: Maybe<Array<Maybe<ScopeProductColor>>>;
  programId?: Maybe<Scalars['Int']>;
  raiseId?: Maybe<Scalars['Int']>;
  salesRepId?: Maybe<Scalars['String']>;
  secondaryColor?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['BigInt']>;
  storevariablesId?: Maybe<Scalars['BigInt']>;
  teamName?: Maybe<Scalars['String']>;
  totalOrders?: Maybe<Scalars['BigInt']>;
  totalPoints?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Float']>;
  zipCode?: Maybe<Scalars['Int']>;
};

export type MagentoStoreManager = {
  __typename?: 'MagentoStoreManager';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  managerId?: Maybe<Scalars['BigInt']>;
  points?: Maybe<Scalars['Float']>;
  scopeId?: Maybe<Scalars['BigInt']>;
};

export type MagentoStorePointsEarned = {
  __typename?: 'MagentoStorePointsEarned';
  endDate?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  totalPoints?: Maybe<Scalars['Float']>;
};

export type MagentoStorePointsEarnedUnionType = MagentoStoresPointsEarned | OnException;

export type MagentoStoreUnionType = MagentoStore | OnException;

export type MagentoStoresPointsEarned = {
  __typename?: 'MagentoStoresPointsEarned';
  points?: Maybe<Array<Maybe<MagentoStorePointsEarned>>>;
};

/** The object which contains all the input data for the ManageResource announcement query */
export type ManageAnnouncement = {
  __typename?: 'ManageAnnouncement';
  active?: Maybe<Scalars['String']>;
  announcement?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  emailFilter?: Maybe<Scalars['String']>;
  emailRequest?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  imageId?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  onFront?: Maybe<Scalars['Int']>;
  recordStatus?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  showUrgentFrom?: Maybe<Scalars['Date']>;
  showUrgentUntil?: Maybe<Scalars['Date']>;
  sortVal?: Maybe<Scalars['Int']>;
  sport?: Maybe<Scalars['String']>;
  sportName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
  urgent?: Maybe<Scalars['Boolean']>;
};

export type ManageAnnouncementFilter = {
  orderBy?: InputMaybe<ManageAnnouncementOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageAnnouncementWhere>;
};

export type ManageAnnouncementList = {
  __typename?: 'ManageAnnouncementList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageAnnouncement>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageAnnouncementOrderBy = {
  endDate?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  sortVal?: InputMaybe<SortOrderEnum>;
  startDate?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type ManageAnnouncementWhere = {
  id?: InputMaybe<Scalars['Int']>;
  onFront?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ManageCoach = {
  __typename?: 'ManageCoach';
  /** Associated Ad ID for the coach. */
  adId?: Maybe<Scalars['Int']>;
  /** Unique ID of the coach. */
  coachId?: Maybe<Scalars['Int']>;
  /** Timestamp when the coach was created. */
  createdAt?: Maybe<Scalars['Date']>;
  /** ID of the user who created the coach entry. */
  createdBy?: Maybe<Scalars['Int']>;
  /** First name of the coach. */
  firstName?: Maybe<Scalars['String']>;
  /** Indicates if the coach is a head coach. */
  headCoach?: Maybe<Scalars['Boolean']>;
  /** Indicates if the coach is approved. */
  isApproved?: Maybe<Scalars['Boolean']>;
  /** Last name of the coach. */
  lastName?: Maybe<Scalars['String']>;
  /** ID for the coach's photo. */
  photoId?: Maybe<Scalars['Int']>;
  /** School's unique ID associated with the coach. */
  schoolId?: Maybe<Scalars['Int']>;
  /** ID of the coaching season. */
  seasonId?: Maybe<Scalars['Int']>;
  /** Brief description or profile of the coach. */
  summary?: Maybe<Scalars['String']>;
  /** Title or position of the coach. */
  title?: Maybe<Scalars['String']>;
  /** Timestamp when the coach was last updated. */
  updatedAt?: Maybe<Scalars['Date']>;
  /** ID of the user who last updated the coach entry. */
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ManageCoachList = {
  __typename?: 'ManageCoachList';
  /** Total count of coaches that match the criteria. */
  count?: Maybe<Scalars['Int']>;
  /** The list of coaches. */
  list?: Maybe<Array<Maybe<ManageCoach>>>;
  /** Number of coaches skipped. */
  skip?: Maybe<Scalars['Int']>;
  /** Number of coaches fetched. */
  take?: Maybe<Scalars['Int']>;
};

export type ManageCoachListFilter = {
  /** Defines how the coach list should be ordered. */
  orderBy?: InputMaybe<ManageCoachListOrderBy>;
  /** Number of coaches to skip before starting to fetch the result set. */
  skip?: InputMaybe<Scalars['Int']>;
  /** Limits the number of coaches to fetch from the result set. */
  take?: InputMaybe<Scalars['Int']>;
  /** Conditions to filter the coach list. */
  where?: InputMaybe<ManageCoachListWhere>;
};

export type ManageCoachListOrderBy = {
  /** Orders coaches based on their address. */
  address?: InputMaybe<SortOrderEnum>;
  /** Orders coaches based on their city. */
  city?: InputMaybe<SortOrderEnum>;
  /** Orders coaches based on their first name. */
  firstName?: InputMaybe<SortOrderEnum>;
  /** Orders coaches based on their last name. */
  lastName?: InputMaybe<SortOrderEnum>;
  /** Orders coaches based on their postal code. */
  postalCode?: InputMaybe<SortOrderEnum>;
};

export type ManageCoachListWhere = {
  /** Associated Ad ID for the coach. */
  adId?: InputMaybe<Scalars['Int']>;
  /** Unique ID of the coach. */
  coachId?: InputMaybe<Scalars['Int']>;
  /** Timestamp when the coach was created. */
  createdAt?: InputMaybe<Scalars['Date']>;
  /** ID of the user who created the coach entry. */
  createdBy?: InputMaybe<Scalars['Int']>;
  /** First name of the coach. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Indicates if the coach is a head coach. */
  headCoach?: InputMaybe<Scalars['Boolean']>;
  /** Indicates if the coach is approved. */
  isApproved?: InputMaybe<Scalars['Boolean']>;
  /** Last name of the coach. */
  lastName?: InputMaybe<Scalars['String']>;
  /** ID for the coach's photo. */
  photoId?: InputMaybe<Scalars['Int']>;
  /** School's unique ID associated with the coach. */
  schoolId?: InputMaybe<Scalars['Int']>;
  /** ID of the coaching season. */
  seasonId?: InputMaybe<Scalars['Int']>;
  /** Brief description or profile of the coach. */
  summary?: InputMaybe<Scalars['String']>;
  /** Title or position of the coach. */
  title?: InputMaybe<Scalars['String']>;
  /** Timestamp when the coach was last updated. */
  updatedAt?: InputMaybe<Scalars['Date']>;
  /** ID of the user who last updated the coach entry. */
  updatedBy?: InputMaybe<Scalars['Int']>;
};

export type ManageEvent = {
  __typename?: 'ManageEvent';
  /** Type of activity or sport. */
  activity?: Maybe<Scalars['String']>;
  /** Author or writer of the event story. */
  author?: Maybe<Scalars['String']>;
  /** Fee associated with transportation or bus. */
  busFee?: Maybe<Scalars['Int']>;
  /** Scheduled time for the bus or transportation. */
  busTime?: Maybe<Scalars['String']>;
  /** Status indicating event's cancellation. */
  cancellationStatus?: Maybe<Scalars['String']>;
  /** Additional comments or notes. */
  comments?: Maybe<Scalars['String']>;
  /** Conference details or name. */
  conference?: Maybe<Scalars['String']>;
  /** Event ID related to the conference. */
  conferenceEventId?: Maybe<Scalars['Int']>;
  /** ID associated with the conference. */
  conferenceId?: Maybe<Scalars['Int']>;
  /** Confirmation status of the event. */
  confirmed?: Maybe<Scalars['String']>;
  /** Contract details or identifier. */
  contract?: Maybe<Scalars['String']>;
  /** Timestamp when the event was created. */
  createdAt?: Maybe<Scalars['Date']>;
  /** Timestamp when the event result was created. */
  createdResultAt?: Maybe<Scalars['String']>;
  /** User ID of the creator of the event result. */
  createdResultBy?: Maybe<Scalars['Int']>;
  /** Location for event departure. */
  departureLocation?: Maybe<Scalars['String']>;
  /** Link for directions or map. */
  directionLink?: Maybe<Scalars['String']>;
  /** Directions or map details for the event. */
  directions?: Maybe<Scalars['String']>;
  /** Indication if early dismissal is required. */
  earlyDismissalRequired?: Maybe<Scalars['String']>;
  /** Scheduled time for early dismissal. */
  earlyDismissalTime?: Maybe<Scalars['String']>;
  /** End time of the event. */
  endTime?: Maybe<Scalars['String']>;
  /** Estimated time of return post event. */
  estimatedReturnTime?: Maybe<Scalars['String']>;
  /** Indication if the event is complete. */
  eventComplete?: Maybe<Scalars['Int']>;
  /** Date of the event. */
  eventDate?: Maybe<Scalars['Date']>;
  /** Date and Time for start of event. */
  eventDateTime?: Maybe<Scalars['String']>;
  /** Calculated field from event date indicating day of the week. */
  eventDay?: Maybe<Scalars['String']>;
  /** Calculated field from event ID for event details. */
  eventDetailsPath?: Maybe<Scalars['String']>;
  /** The unique ID of the event. */
  eventId?: Maybe<Scalars['Int']>;
  /** Lead or main summary of the event. */
  eventLead?: Maybe<Scalars['String']>;
  /** Unique ID for the event result. */
  eventResultID?: Maybe<Scalars['Int']>;
  /** Detailed story or description of the event. */
  eventStory?: Maybe<Scalars['String']>;
  /** Title or main heading of the event story. */
  eventTitle?: Maybe<Scalars['String']>;
  /** Type or category of the event. */
  eventType?: Maybe<Scalars['String']>;
  /** Indication if event exists in MLS system. */
  existsInMls?: Maybe<Scalars['Int']>;
  /** Fee or cost associated with the event. */
  fee?: Maybe<Scalars['Int']>;
  /** Revenue generated from gate or entry fee. */
  gateRevenue?: Maybe<Scalars['Int']>;
  /** Gender specification for the event. */
  gender?: Maybe<Scalars['String']>;
  /** Value grouping multiple events. */
  groupVal?: Maybe<Scalars['String']>;
  /** General status of the event. */
  gs?: Maybe<Scalars['String']>;
  /** Main headline or caption for the event. */
  headline?: Maybe<Scalars['String']>;
  /** Indication if the event has major impact. */
  impactEvent?: Maybe<Scalars['String']>;
  /** Indication if event details are approved. */
  isApproved?: Maybe<Scalars['Boolean']>;
  /** Lead information or summary. */
  lead?: Maybe<Scalars['String']>;
  /** Level of the event. */
  level?: Maybe<Scalars['String']>;
  /** Location description or address. */
  location?: Maybe<Scalars['String']>;
  /** Points deducted for a loss. */
  lossPoints?: Maybe<Scalars['Int']>;
  /** Number of buses or transportation units. */
  numBuses?: Maybe<Scalars['Int']>;
  /** Name or description of the opponent. */
  opponent?: Maybe<Scalars['String']>;
  /** Code identifier for the opponent. */
  opponentCode?: Maybe<Scalars['String']>;
  /** Opponent details or description. */
  opponentForEvent?: Maybe<ManageOpponent>;
  /** Score achieved by the opponent team. */
  opponentScore?: Maybe<Scalars['String']>;
  /** Outcome or result of the event. */
  outcome?: Maybe<Scalars['String']>;
  /** URL or path to event picture. */
  picture?: Maybe<Scalars['String']>;
  /** Location or venue of the event. */
  place?: Maybe<Scalars['String']>;
  /** Details for event setup or preparation. */
  prepSetup?: Maybe<Scalars['String']>;
  /** Indication if event should be promoted. */
  promote?: Maybe<Scalars['String']>;
  /** Indication if score should be reported. */
  reportScore?: Maybe<Scalars['Int']>;
  /** Indication if story related to event should be reported. */
  reportStory?: Maybe<Scalars['Int']>;
  /** Results or outcomes from the event. */
  results?: Maybe<Scalars['String']>;
  /** Total revenue generated from the event. */
  revenue?: Maybe<Scalars['Int']>;
  /** Indication if event rolls over to next season. */
  rollover?: Maybe<Scalars['String']>;
  /** Season details or year. */
  season?: Maybe<Scalars['String']>;
  /** Associated team for the season. */
  seasonTeam?: Maybe<Scalars['Int']>;
  /** Indication if event should be showcased on front page. */
  showFrontPage?: Maybe<Scalars['Int']>;
  /** Start time used for sorting. */
  sortStartTime?: Maybe<Scalars['String']>;
  /** Start time of the event. */
  startTime?: Maybe<Scalars['String']>;
  /** Name of the associated team. */
  teamName?: Maybe<Scalars['String']>;
  /** Score achieved by the home team. */
  teamScore?: Maybe<Scalars['String']>;
  /** Title or heading of the event. */
  title?: Maybe<Scalars['String']>;
  /** Indication if the event is part of a tournament. */
  tournament?: Maybe<Scalars['String']>;
  /** Unique ID for transportation details. */
  transId?: Maybe<Scalars['Int']>;
  /** Comments related to transportation. */
  transportComments?: Maybe<Scalars['String']>;
  /** Transportation details for the event. */
  transportation?: Maybe<Scalars['String']>;
  /** Date when event result was last updated. */
  updateResultDate?: Maybe<Scalars['String']>;
  /** Timestamp of the last update to the event. */
  updatedAt?: Maybe<Scalars['Date']>;
  /** Timestamp of the last update to the event result. */
  updatedResultAt?: Maybe<Scalars['String']>;
  /** User ID of the last updater of the event result. */
  updatedResultBy?: Maybe<Scalars['Int']>;
  /** Web directory or path for the event. */
  webDir?: Maybe<Scalars['String']>;
  /** Points awarded for a win. */
  winPoints?: Maybe<Scalars['Int']>;
  /** Year(s) associated with the event. */
  years?: Maybe<Scalars['String']>;
};

/** Represents a paginated list of events. */
export type ManageEventList = {
  __typename?: 'ManageEventList';
  /** A formatted date for calendar display purposes. */
  calendarDate?: Maybe<Scalars['String']>;
  /** Total count of events that match the criteria. */
  count?: Maybe<Scalars['Int']>;
  /** The list of events. */
  list?: Maybe<Array<Maybe<ManageEvent>>>;
  /** Number of items skipped. */
  skip?: Maybe<Scalars['Int']>;
  /** Number of items fetched. */
  take?: Maybe<Scalars['Int']>;
};

/** Criteria to filter and sort the list of events. */
export type ManageEventListFilter = {
  /** Defines how the list should be ordered. */
  orderBy?: InputMaybe<ManageEventListOrderBy>;
  /** Number of items to skip before starting to fetch the result set. */
  skip?: InputMaybe<Scalars['Int']>;
  /** Limits the number of items to fetch from the result set. */
  take?: InputMaybe<Scalars['Int']>;
  /** Conditions to filter the list. */
  where?: InputMaybe<ManageEventListWhere>;
};

/** Specifies the order in which the event list should be sorted. */
export type ManageEventListOrderBy = {
  /** Orders events based on their confirmation status. */
  confirmed?: InputMaybe<Scalars['String']>;
  /** Orders events based on the opponent's name. */
  opponent?: InputMaybe<Scalars['String']>;
};

/** Conditions to filter the event list. */
export type ManageEventListWhere = {
  /** Filters events based on their activity or sport type. */
  activity?: InputMaybe<Scalars['String']>;
  /** Filters events based on their author or writer. */
  author?: InputMaybe<Scalars['String']>;
  /** Filters events based on their cancellation status. */
  cancellationStatus?: InputMaybe<Scalars['String']>;
  /** Filters events based on their conference details or name. */
  conference?: InputMaybe<Scalars['String']>;
  /** Filters events based on their related conference event ID. */
  conferenceEventId?: InputMaybe<Scalars['Int']>;
  /** Filters events based on their confirmation status. */
  confirmed?: InputMaybe<Scalars['String']>;
  /** Filters events based on the timestamp when they were created. */
  createdAt?: InputMaybe<Scalars['Date']>;
  /** Filters events based on their location for departure. */
  departureLocation?: InputMaybe<Scalars['String']>;
  /** Filters events based on their direction or map link. */
  directionLink?: InputMaybe<Scalars['String']>;
  /** Filters events based on their estimated time of return. */
  estimatedReturnTime?: InputMaybe<Scalars['String']>;
  /** Filters events based on their date. */
  eventDate?: InputMaybe<Scalars['Date']>;
  /** Filters events based on their title or main heading. */
  eventTitle?: InputMaybe<Scalars['String']>;
  /** Filters events based on whether they exist in the MLS system. */
  existsInMls?: InputMaybe<Scalars['Int']>;
  /** Filters events based on their gender specification. */
  gender?: InputMaybe<Scalars['String']>;
  /** Filters events based on their general status. */
  gs?: InputMaybe<Scalars['String']>;
  /** Filters events based on their level. */
  level?: InputMaybe<Scalars['String']>;
  /** Filters events that take place in a specific month. */
  month?: InputMaybe<Scalars['Int']>;
  /** Filters events based on the opponent's name. */
  opponent?: InputMaybe<Scalars['String']>;
  /** Filters events based on the score achieved by the opponent team. */
  opponentScore?: InputMaybe<Scalars['String']>;
  /** Filters events based on their location or venue. */
  place?: InputMaybe<Scalars['String']>;
  /** Filters events based on their associated team for the season. */
  seasonTeam?: InputMaybe<Scalars['Int']>;
  /** Filters events based on their start time. */
  startTime?: InputMaybe<Scalars['String']>;
  /** Filters events based on the score achieved by the home team. */
  teamScore?: InputMaybe<Scalars['String']>;
  /** Filters events based on their transport comments. */
  transportComments?: InputMaybe<Scalars['String']>;
  /** Filters events based on their transportation details. */
  transportation?: InputMaybe<Scalars['String']>;
  /** Filters events based on the last update timestamp. */
  updatedAt?: InputMaybe<Scalars['Date']>;
  /** Filters events that take place in a specific year. */
  year?: InputMaybe<Scalars['Int']>;
};

/** The object which contains all the input data for the ManageFacility query */
export type ManageFacility = {
  __typename?: 'ManageFacility';
  directions?: Maybe<Scalars['String']>;
  indoor?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  locationId?: Maybe<Scalars['Int']>;
  mlSiteId?: Maybe<Scalars['Int']>;
  mlSpace?: Maybe<Scalars['String']>;
  mlSpaceId?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  placeName?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type ManageFacilityFilter = {
  orderBy?: InputMaybe<ManageFacilityOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageFacilityWhere>;
  whereNot?: InputMaybe<ManageFacilityWhere>;
};

export type ManageFacilityList = {
  __typename?: 'ManageFacilityList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageFacility>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageFacilityOrderBy = {
  directions?: InputMaybe<SortOrderEnum>;
  indoor?: InputMaybe<SortOrderEnum>;
  isDeleted?: InputMaybe<SortOrderEnum>;
  locationId?: InputMaybe<SortOrderEnum>;
  mlSiteId?: InputMaybe<SortOrderEnum>;
  mlSpace?: InputMaybe<SortOrderEnum>;
  mlSpaceId?: InputMaybe<SortOrderEnum>;
  picture?: InputMaybe<SortOrderEnum>;
  placeName?: InputMaybe<SortOrderEnum>;
  show?: InputMaybe<SortOrderEnum>;
  web?: InputMaybe<SortOrderEnum>;
};

export type ManageFacilityWhere = {
  directions?: InputMaybe<Scalars['String']>;
  indoor?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  locationId?: InputMaybe<Scalars['Int']>;
  mlSiteId?: InputMaybe<Scalars['Int']>;
  mlSpace?: InputMaybe<Scalars['String']>;
  mlSpaceId?: InputMaybe<Scalars['Int']>;
  picture?: InputMaybe<Scalars['String']>;
  placeName?: InputMaybe<Scalars['String']>;
  show?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

/** The object which contains all the input data for the ManageHeadline query */
export type ManageHeadline = {
  __typename?: 'ManageHeadline';
  eventResultId?: Maybe<Scalars['Int']>;
  eventStory?: Maybe<Scalars['String']>;
  eventTitle?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['Int']>;
};

export type ManageHeadlineFilter = {
  orderBy?: InputMaybe<ManageHeadlineOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageHeadlineWhere>;
};

export type ManageHeadlineList = {
  __typename?: 'ManageHeadlineList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageHeadline>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageHeadlineOrderBy = {
  EventResultId?: InputMaybe<SortOrderEnum>;
  EventStory?: InputMaybe<SortOrderEnum>;
  EventTitle?: InputMaybe<SortOrderEnum>;
  RefId?: InputMaybe<SortOrderEnum>;
};

export type ManageHeadlineWhere = {
  EventResultId?: InputMaybe<Scalars['Int']>;
  EventStory?: InputMaybe<Scalars['String']>;
  EventTitle?: InputMaybe<Scalars['String']>;
  RefId?: InputMaybe<Scalars['Int']>;
};

/** A type representing details about an opponent in the context of school management. */
export type ManageOpponent = {
  __typename?: 'ManageOpponent';
  /** The name of the athletic director (AD) associated with the school/opponent. */
  adName?: Maybe<Scalars['String']>;
  /** The physical address of the school. */
  address?: Maybe<Scalars['String']>;
  /** The city where the school is located. */
  city?: Maybe<Scalars['String']>;
  /** The primary contact email address for the school. */
  email?: Maybe<Scalars['String']>;
  /** The fax number for the school, if available. */
  fax?: Maybe<Scalars['String']>;
  /** A flag indicating if the opponent's record has been marked as deleted. */
  isDeleted?: Maybe<Scalars['Boolean']>;
  /** The National Center for Education Statistics (NCES) identifier for the school. */
  ncesId?: Maybe<Scalars['String']>;
  /** A flag indicating if the entity is not an actual school. */
  nonSchool?: Maybe<Scalars['Boolean']>;
  /** The primary contact phone number for the school. */
  phone?: Maybe<Scalars['String']>;
  /** The unique identifier for the school. This is mandatory. */
  schoolCode: Scalars['String'];
  /** The official name of the school. */
  schoolName?: Maybe<Scalars['String']>;
  /** The state or province where the school is located. */
  state?: Maybe<Scalars['String']>;
  /** The postal code for the school's address. */
  zip?: Maybe<Scalars['String']>;
};

/** The object which contains all the input data for the manage organization query */
export type ManageOrganization = {
  __typename?: 'ManageOrganization';
  /** The ad of the school */
  ad?: Maybe<Scalars['String']>;
  /** AD Program ID */
  adProgramID?: Maybe<Scalars['Int']>;
  /** Ad report */
  adReport?: Maybe<Scalars['Int']>;
  /** The ad school of the school */
  adSchool?: Maybe<Scalars['Int']>;
  /** The address of the school */
  address?: Maybe<Scalars['String']>;
  /** Announcements for the organization */
  announcementsForOrganization?: Maybe<ManageAnnouncementList>;
  /** AOTM Spotlight */
  aotmSpotlight?: Maybe<Scalars['Int']>;
  /** Auto Approve Score Only */
  autoApproveScoreOnly?: Maybe<Scalars['Int']>;
  /** Camp Registration Confirmation Text */
  campRegConfirmationTxt?: Maybe<Scalars['String']>;
  /** The city of the school */
  city?: Maybe<Scalars['String']>;
  /** The list of coaches for this organization */
  coachForOrganization?: Maybe<ManageCoachList>;
  /** The First Color of the school */
  color1?: Maybe<Scalars['String']>;
  /** The Second Color of the school */
  color2?: Maybe<Scalars['String']>;
  /** Conference Name */
  conferenceName?: Maybe<Scalars['String']>;
  /** Conference URL */
  conferenceURL?: Maybe<Scalars['String']>;
  /** Custom Label */
  customLabel?: Maybe<Scalars['String']>;
  /** Custom Label 2 */
  customLabel2?: Maybe<Scalars['String']>;
  /** Custom Link */
  customLink?: Maybe<Scalars['String']>;
  /** Custom Link 2 */
  customLink2?: Maybe<Scalars['String']>;
  /** The Database folder of the school */
  dbFolder?: Maybe<Scalars['String']>;
  /** Email Blast Enabled */
  emailBlastEnabled?: Maybe<Scalars['Int']>;
  /** Email Spotlight */
  emailSpotlight?: Maybe<Scalars['Int']>;
  /** Equipment Enabled */
  equipmentEnabled?: Maybe<Scalars['Boolean']>;
  /** Event Locations for the organization */
  eventLocationsForOrganization?: Maybe<ManageResourceLinkList>;
  /** Facebook Url */
  facebookUrl?: Maybe<Scalars['String']>;
  /** Facilities for the Organization */
  facilitiesForOrganization?: Maybe<ManageFacilityList>;
  /** The fax number of the school */
  fax?: Maybe<Scalars['String']>;
  /** The featured of the school */
  featured?: Maybe<Scalars['Int']>;
  /** Feeders Towns for the school */
  feederTowns?: Maybe<Scalars['String']>;
  /** Gallery Spotlight */
  gallerySpotlight?: Maybe<Scalars['Int']>;
  /** Has Activities */
  hasActivities?: Maybe<Scalars['Boolean']>;
  /** Has Access OTM */
  hasAotm?: Maybe<Scalars['Boolean']>;
  /** Has Athletics */
  hasAthletics?: Maybe<Scalars['Boolean']>;
  /** Has Email Blast */
  hasEmailBlast?: Maybe<Scalars['String']>;
  /** Has Facebook Url */
  hasFacebookUrl?: Maybe<Scalars['Boolean']>;
  /** Has Instagram Url */
  hasInstagramUrl?: Maybe<Scalars['Boolean']>;
  /** Has Migrated From Access To Sql Server */
  hasMigratedFromAccessToSqlServer?: Maybe<Scalars['Boolean']>;
  /** Has Registration */
  hasRegistration?: Maybe<Scalars['Boolean']>;
  /** Has Twitter Url */
  hasTwitterUrl?: Maybe<Scalars['Boolean']>;
  /** Headlines for the Organization */
  headlinesForOrganization?: Maybe<ManageHeadlineList>;
  /** The icon of the school */
  iCon?: Maybe<Scalars['String']>;
  /** Instagram Url */
  instagramUrl?: Maybe<Scalars['String']>;
  /** League Keeper school id */
  lKschoolId?: Maybe<Scalars['Int']>;
  /** The latitude of the school */
  lat?: Maybe<Scalars['Float']>;
  /** The id of the link to school database */
  linkSchoolId?: Maybe<Scalars['Int']>;
  /** The logo of the school */
  logo?: Maybe<Scalars['String']>;
  /** The longitude of the school */
  long?: Maybe<Scalars['Float']>;
  /** The mascot of the school */
  mascot?: Maybe<Scalars['String']>;
  /** Does the school have email updates */
  massUpdate?: Maybe<Scalars['Int']>;
  /** Master School Id */
  masterSchoolId?: Maybe<Scalars['Int']>;
  /** The message of the school */
  message?: Maybe<Scalars['String']>;
  /** Motto */
  motto?: Maybe<Scalars['String']>;
  /** Old School Id */
  oldSchoolId?: Maybe<Scalars['Int']>;
  /** Pages for the organization */
  pagesForOrganization?: Maybe<ManagePagesList>;
  /** The url path for the school */
  path?: Maybe<Scalars['String']>;
  /** The phone number of the school */
  phone?: Maybe<Scalars['String']>;
  /** Photos for the Organization */
  photosForOrganization?: Maybe<ManagePhotosList>;
  /** The list of players for this organization */
  playersForOrganization?: Maybe<ManagePlayerList>;
  /** The principal of the school */
  principal?: Maybe<Scalars['String']>;
  programsForOrganization?: Maybe<ManageProgramList>;
  /** PS School Id */
  psSchoolId?: Maybe<Scalars['String']>;
  /** PS Store Active */
  psStoreActive?: Maybe<Scalars['Int']>;
  /** The Registration Email of the school */
  registrationEmail?: Maybe<Scalars['String']>;
  /** The Registration Enabled of the school */
  registrationEnabled?: Maybe<Scalars['Int']>;
  /** The Registration Policy of the school */
  registrationPolicy?: Maybe<Scalars['String']>;
  /** The Registration Type of the school */
  registrationType?: Maybe<Scalars['Int']>;
  /** The id of the school */
  schoolId?: Maybe<Scalars['Int']>;
  /** The name of the school */
  schoolName?: Maybe<Scalars['String']>;
  /** The show of the school */
  show?: Maybe<Scalars['Int']>;
  /** Show Ad */
  showAd?: Maybe<Scalars['Boolean']>;
  /** Show School Name And Motto */
  showSchoolNameAndMotto?: Maybe<Scalars['Boolean']>;
  /** Do you want to show the teams pages first on the site */
  showTeamPagesFirst?: Maybe<Scalars['Int']>;
  /** A Sign up code for the school */
  signUpCode?: Maybe<Scalars['String']>;
  /** The site type of the school */
  siteType?: Maybe<Scalars['String']>;
  /** Sport Registration Confirmation Text */
  sportRegConfirmationTxt?: Maybe<Scalars['String']>;
  /** The id of the sql database */
  sqlBase?: Maybe<Scalars['Int']>;
  /** Staff Calendar Enabled */
  staffCalendarEnabled?: Maybe<Scalars['Int']>;
  /** The state of the school (abbreviation) */
  state?: Maybe<Scalars['String']>;
  /** The state organization of the school */
  stateOrg?: Maybe<Scalars['String']>;
  /** Time Zone */
  timeZone?: Maybe<Scalars['String']>;
  /** Twitter Url */
  twitterUrl?: Maybe<Scalars['String']>;
  /** Urgent Announcements for the organization */
  urgentAnnouncementsForOrganization?: Maybe<ManageAnnouncementList>;
  /** The web folder of the school that you have chosen */
  webFolder?: Maybe<Scalars['String']>;
  /** Web Password */
  webPassword?: Maybe<Scalars['String']>;
  /** The website of the school */
  webSite?: Maybe<Scalars['String']>;
  /** The zip code of the school */
  zip?: Maybe<Scalars['String']>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationAnnouncementsForOrganizationArgs = {
  filter?: InputMaybe<ManageAnnouncementFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationCoachForOrganizationArgs = {
  filter?: InputMaybe<ManageCoachListFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationEventLocationsForOrganizationArgs = {
  filter?: InputMaybe<ManageResourceLinkFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationFacilitiesForOrganizationArgs = {
  filter?: InputMaybe<ManageFacilityFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationHeadlinesForOrganizationArgs = {
  filter?: InputMaybe<ManageHeadlineFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationPagesForOrganizationArgs = {
  filter?: InputMaybe<ManagePagesFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationPhotosForOrganizationArgs = {
  filter?: InputMaybe<ManagePhotosFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationPlayersForOrganizationArgs = {
  filter?: InputMaybe<ManagePlayerListFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationProgramsForOrganizationArgs = {
  filter?: InputMaybe<ManageProgramListFilter>;
};


/** The object which contains all the input data for the manage organization query */
export type ManageOrganizationUrgentAnnouncementsForOrganizationArgs = {
  filter?: InputMaybe<UrgentAnnouncementFilter>;
};

export type ManageOrganizationFilter = {
  /** Defines how the organization list should be ordered. */
  orderBy?: InputMaybe<ManageOrganizationOrderBy>;
  /** Number of organizations to skip before starting to fetch the result set. */
  skip?: InputMaybe<Scalars['Int']>;
  /** Limits the number of organizations to fetch from the result set. */
  take?: InputMaybe<Scalars['Int']>;
  /** Conditions to filter the organization list. */
  where?: InputMaybe<ManageOrganizationWhere>;
};

export type ManageOrganizationList = {
  __typename?: 'ManageOrganizationList';
  /** Total count of organizations that match the criteria. */
  count?: Maybe<Scalars['Int']>;
  /** The list of organizations. */
  list?: Maybe<Array<Maybe<ManageOrganization>>>;
  /** Number of organizations skipped. */
  skip?: Maybe<Scalars['Int']>;
  /** Number of organizations fetched. */
  take?: Maybe<Scalars['Int']>;
};

export type ManageOrganizationOrderBy = {
  /** Orders organizations based on their name. */
  name?: InputMaybe<SortOrderEnum>;
  /** Orders organizations based on their state. */
  state?: InputMaybe<SortOrderEnum>;
};

export type ManageOrganizationWhere = {
  /** The name of the organization. */
  name?: InputMaybe<Scalars['String']>;
  /** Condition to determine visibility of the organization (e.g., might represent a specific view mode). */
  show?: InputMaybe<Scalars['Int']>;
  /** The state or province of the organization. */
  state?: InputMaybe<Scalars['String']>;
};

/** The object which contains all the input data for the ManageResource Pages query */
export type ManagePages = {
  __typename?: 'ManagePages';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pageContent?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ManagePagesFilter = {
  orderBy?: InputMaybe<ManagePagesOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManagePagesWhere>;
};

export type ManagePagesList = {
  __typename?: 'ManagePagesList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManagePages>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManagePagesOrderBy = {
  name?: InputMaybe<SortOrderEnum>;
  pageTitle?: InputMaybe<SortOrderEnum>;
};

export type ManagePagesWhere = {
  name?: InputMaybe<PagesNameEnum>;
};

/** The object which contains all the input data for the ManageResource photos query */
export type ManagePhotos = {
  __typename?: 'ManagePhotos';
  batch?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Buffer']>;
  layout?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  needsApproval?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  recordStatus?: Maybe<Scalars['Int']>;
  rphoto?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['Int']>;
  sport?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ManagePhotosFilter = {
  orderBy?: InputMaybe<ManagePhotosOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManagePhotosWhere>;
  whereNot?: InputMaybe<ManagePhotosWhere>;
};

export type ManagePhotosList = {
  __typename?: 'ManagePhotosList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManagePhotos>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManagePhotosOrderBy = {
  caption?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type ManagePhotosWhere = {
  group?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['Buffer']>;
  needsApproval?: InputMaybe<Scalars['Int']>;
  sport?: InputMaybe<Scalars['String']>;
};

/** The object which contains all the input data for each player */
export type ManagePlayer = {
  __typename?: 'ManagePlayer';
  ch1?: Maybe<Scalars['Int']>;
  ch2?: Maybe<Scalars['Int']>;
  ch3?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  custodyCode?: Maybe<Scalars['Int']>;
  dayPhone?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  fName?: Maybe<Scalars['String']>;
  feePaid?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gradYear?: Maybe<Scalars['String']>;
  hatsize?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  hospitalPhone?: Maybe<Scalars['String']>;
  insuranceCompany?: Maybe<Scalars['String']>;
  insurancePolicyNum?: Maybe<Scalars['String']>;
  jersey?: Maybe<Scalars['String']>;
  lName?: Maybe<Scalars['String']>;
  livesWithCode?: Maybe<Scalars['Int']>;
  noPress?: Maybe<Scalars['Int']>;
  participantId?: Maybe<Scalars['Int']>;
  permission?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  physicalDate?: Maybe<Scalars['Date']>;
  physician?: Maybe<Scalars['String']>;
  physicianTelephone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  preferredHospital?: Maybe<Scalars['String']>;
  rosterId?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
  shirtsize?: Maybe<Scalars['String']>;
  shortsize?: Maybe<Scalars['String']>;
  sortJersey?: Maybe<Scalars['Int']>;
  stAddress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ManagePlayerList = {
  __typename?: 'ManagePlayerList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManagePlayer>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManagePlayerListFilter = {
  orderBy?: InputMaybe<ManagePlayerListOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManagePlayerListWhere>;
};

export type ManagePlayerListOrderBy = {
  city?: InputMaybe<SortOrderEnum>;
  dob?: InputMaybe<SortOrderEnum>;
  fName?: InputMaybe<SortOrderEnum>;
  gender?: InputMaybe<SortOrderEnum>;
  gradYear?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  jersey?: InputMaybe<SortOrderEnum>;
  lName?: InputMaybe<SortOrderEnum>;
  participantId?: InputMaybe<SortOrderEnum>;
  permission?: InputMaybe<SortOrderEnum>;
  position?: InputMaybe<SortOrderEnum>;
  rosterId?: InputMaybe<SortOrderEnum>;
  schoolId?: InputMaybe<SortOrderEnum>;
  seasonId?: InputMaybe<SortOrderEnum>;
  state?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  weight?: InputMaybe<SortOrderEnum>;
  zip?: InputMaybe<SortOrderEnum>;
};

export type ManagePlayerListWhere = {
  ch1?: InputMaybe<Scalars['Int']>;
  ch2?: InputMaybe<Scalars['Int']>;
  ch3?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  custodyCode?: InputMaybe<Scalars['Int']>;
  dayPhone?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  fName?: InputMaybe<Scalars['String']>;
  feePaid?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  gradYear?: InputMaybe<Scalars['String']>;
  hatsize?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  homePhone?: InputMaybe<Scalars['String']>;
  hospitalPhone?: InputMaybe<Scalars['String']>;
  insuranceCompany?: InputMaybe<Scalars['String']>;
  insurancePolicyNum?: InputMaybe<Scalars['String']>;
  jersey?: InputMaybe<Scalars['String']>;
  lName?: InputMaybe<Scalars['String']>;
  livesWithCode?: InputMaybe<Scalars['Int']>;
  noPress?: InputMaybe<Scalars['Int']>;
  participantId?: InputMaybe<Scalars['Int']>;
  permission?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  physicalDate?: InputMaybe<Scalars['Date']>;
  physician?: InputMaybe<Scalars['String']>;
  physicianTelephone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  preferredHospital?: InputMaybe<Scalars['String']>;
  rosterId?: InputMaybe<Scalars['Int']>;
  schoolId?: InputMaybe<Scalars['Int']>;
  seasonId?: InputMaybe<Scalars['Int']>;
  shirtsize?: InputMaybe<Scalars['String']>;
  shortsize?: InputMaybe<Scalars['String']>;
  stAddress?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ManageProgram = {
  __typename?: 'ManageProgram';
  /** Announcements for the program */
  announcementsForPrograms?: Maybe<ManageAnnouncementList>;
  gender?: Maybe<Scalars['String']>;
  groupVal?: Maybe<Scalars['String']>;
  homeField?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  level1?: Maybe<Scalars['String']>;
  /** Photos for the program */
  photosForPrograms?: Maybe<ManagePhotosList>;
  /** Links for the program */
  resourceLinksForPrograms?: Maybe<ManageResourceLinkList>;
  seasonsForProgram?: Maybe<ManageSeasonList>;
  sportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  sportDetailsForProgram?: Maybe<ManageSportDetailsList>;
  sportName?: Maybe<Scalars['String']>;
  /** Team Stats for the program */
  teamStatsForPrograms?: Maybe<ManageTeamStatsList>;
};


export type ManageProgramAnnouncementsForProgramsArgs = {
  filter?: InputMaybe<ManageAnnouncementFilter>;
};


export type ManageProgramPhotosForProgramsArgs = {
  filter?: InputMaybe<ManagePhotosFilter>;
};


export type ManageProgramResourceLinksForProgramsArgs = {
  filter?: InputMaybe<ManageResourceLinkFilter>;
};


export type ManageProgramSeasonsForProgramArgs = {
  filter?: InputMaybe<ManageSeasonListFilter>;
};


export type ManageProgramSportDetailsForProgramArgs = {
  filter?: InputMaybe<ManageSportDetailsListFilter>;
};


export type ManageProgramTeamStatsForProgramsArgs = {
  filter?: InputMaybe<ManageTeamStatsFilter>;
};

export type ManageProgramList = {
  __typename?: 'ManageProgramList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageProgram>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageProgramListFilter = {
  orderBy?: InputMaybe<ManageProgramListOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageProgramListWhere>;
};

export type ManageProgramListOrderBy = {
  gender?: InputMaybe<OrderType>;
  level1?: InputMaybe<OrderType>;
  sportName?: InputMaybe<OrderType>;
};

export type ManageProgramListWhere = {
  gender?: InputMaybe<Scalars['String']>;
  groupVal?: InputMaybe<Scalars['String']>;
  level1?: InputMaybe<Scalars['String']>;
  sportName?: InputMaybe<Scalars['String']>;
};

/** The object which contains all the input data for the ManageResource event location query */
export type ManageResourceLink = {
  __typename?: 'ManageResourceLink';
  /** The fileName for the event location */
  fileName?: Maybe<Scalars['String']>;
  /** The filename link for the event location */
  fileNameLink?: Maybe<Scalars['String']>;
  /** The sport gender and level for the event location */
  gVal?: Maybe<Scalars['String']>;
  /** The id for the event location */
  id?: Maybe<Scalars['Int']>;
  /** The isApproved for the event location */
  isApproved?: Maybe<Scalars['Int']>;
  /** The type for the event location */
  lType?: Maybe<Scalars['String']>;
  /** The link for the event location */
  link?: Maybe<Scalars['String']>;
  /** The name for the event location */
  name?: Maybe<Scalars['String']>;
  /** The onFornt for the event location */
  onFront?: Maybe<Scalars['Int']>;
  /** The recordStatus for the event location */
  recordStatus?: Maybe<Scalars['Int']>;
  /** The school id for the event location */
  schoolNum?: Maybe<Scalars['Int']>;
  /** The sortOrder for the event location */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type ManageResourceLinkFilter = {
  orderBy?: InputMaybe<ManageResourceLinkOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageResourceLinkWhere>;
  whereNot?: InputMaybe<ManageResourceLinkWhere>;
};

export type ManageResourceLinkList = {
  __typename?: 'ManageResourceLinkList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageResourceLink>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageResourceLinkOrderBy = {
  fileName?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
};

export type ManageResourceLinkWhere = {
  fileName?: InputMaybe<Scalars['String']>;
  isApproved?: InputMaybe<Scalars['Int']>;
  lType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onFront?: InputMaybe<Scalars['Int']>;
};

/** The object which contains all the input data for each player */
export type ManageRoster = {
  __typename?: 'ManageRoster';
  ch1?: Maybe<Scalars['Int']>;
  ch2?: Maybe<Scalars['Int']>;
  ch3?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  custodyCode?: Maybe<Scalars['Int']>;
  dayPhone?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  fName?: Maybe<Scalars['String']>;
  feePaid?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gradYear?: Maybe<Scalars['String']>;
  hatsize?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  hospitalPhone?: Maybe<Scalars['String']>;
  insuranceCompany?: Maybe<Scalars['String']>;
  insurancePolicyNum?: Maybe<Scalars['String']>;
  jersey?: Maybe<Scalars['String']>;
  lName?: Maybe<Scalars['String']>;
  livesWithCode?: Maybe<Scalars['Int']>;
  noPress?: Maybe<Scalars['Int']>;
  participantId?: Maybe<Scalars['Int']>;
  permission?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  physicalDate?: Maybe<Scalars['Date']>;
  physician?: Maybe<Scalars['String']>;
  physicianTelephone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  preferredHospital?: Maybe<Scalars['String']>;
  rosterId?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
  shirtsize?: Maybe<Scalars['String']>;
  shortsize?: Maybe<Scalars['String']>;
  sortJersey?: Maybe<Scalars['Int']>;
  stAddress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ManageRosterList = {
  __typename?: 'ManageRosterList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageRoster>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageRosterListFilter = {
  orderBy?: InputMaybe<ManageRosterListOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageRosterListWhere>;
};

export type ManageRosterListOrderBy = {
  city?: InputMaybe<SortOrderEnum>;
  dob?: InputMaybe<SortOrderEnum>;
  fName?: InputMaybe<SortOrderEnum>;
  gender?: InputMaybe<SortOrderEnum>;
  gradYear?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  jersey?: InputMaybe<SortOrderEnum>;
  lName?: InputMaybe<SortOrderEnum>;
  participantId?: InputMaybe<SortOrderEnum>;
  permission?: InputMaybe<SortOrderEnum>;
  position?: InputMaybe<SortOrderEnum>;
  rosterId?: InputMaybe<SortOrderEnum>;
  schoolId?: InputMaybe<SortOrderEnum>;
  seasonId?: InputMaybe<SortOrderEnum>;
  state?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  weight?: InputMaybe<SortOrderEnum>;
  zip?: InputMaybe<SortOrderEnum>;
};

export type ManageRosterListWhere = {
  ch1?: InputMaybe<Scalars['Int']>;
  ch2?: InputMaybe<Scalars['Int']>;
  ch3?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  custodyCode?: InputMaybe<Scalars['Int']>;
  dayPhone?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  fName?: InputMaybe<Scalars['String']>;
  feePaid?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  gradYear?: InputMaybe<Scalars['String']>;
  hatsize?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  homePhone?: InputMaybe<Scalars['String']>;
  hospitalPhone?: InputMaybe<Scalars['String']>;
  insuranceCompany?: InputMaybe<Scalars['String']>;
  insurancePolicyNum?: InputMaybe<Scalars['String']>;
  jersey?: InputMaybe<Scalars['String']>;
  lName?: InputMaybe<Scalars['String']>;
  livesWithCode?: InputMaybe<Scalars['Int']>;
  noPress?: InputMaybe<Scalars['Int']>;
  participantId?: InputMaybe<Scalars['Int']>;
  permission?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  physicalDate?: InputMaybe<Scalars['Date']>;
  physician?: InputMaybe<Scalars['String']>;
  physicianTelephone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  preferredHospital?: InputMaybe<Scalars['String']>;
  rosterId?: InputMaybe<Scalars['Int']>;
  schoolId?: InputMaybe<Scalars['Int']>;
  seasonId?: InputMaybe<Scalars['Int']>;
  shirtsize?: InputMaybe<Scalars['String']>;
  shortsize?: InputMaybe<Scalars['String']>;
  stAddress?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ManageSeason = {
  __typename?: 'ManageSeason';
  budget?: Maybe<Scalars['Float']>;
  coachForProgramSeason?: Maybe<ManageCoachList>;
  defaultTimeForEvent?: Maybe<Scalars['String']>;
  defaultTimeForPractice?: Maybe<Scalars['String']>;
  /** The events for the season. */
  eventsForSeason?: Maybe<ManageEventList>;
  homeField?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  playersForProgramSeason?: Maybe<ManagePlayerList>;
  preview?: Maybe<Scalars['String']>;
  rosterForProgramSeason?: Maybe<ManageRosterList>;
  season?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  sportCode?: Maybe<Scalars['String']>;
  /** The upcoming events for the season. */
  upcomingEventsForSeason?: Maybe<ManageEventList>;
  webPassword?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};


export type ManageSeasonCoachForProgramSeasonArgs = {
  filter?: InputMaybe<ManageCoachListFilter>;
};


export type ManageSeasonEventsForSeasonArgs = {
  filter?: InputMaybe<ManageEventListFilter>;
};


export type ManageSeasonPlayersForProgramSeasonArgs = {
  filter?: InputMaybe<ManagePlayerListFilter>;
};

export type ManageSeasonList = {
  __typename?: 'ManageSeasonList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageSeason>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageSeasonListFilter = {
  orderBy?: InputMaybe<ManageSeasonListOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageSeasonListWhere>;
};

export type ManageSeasonListOrderBy = {
  sport_code?: InputMaybe<OrderType>;
  year?: InputMaybe<OrderType>;
};

export type ManageSeasonListWhere = {
  sport_code?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type ManageSportDetails = {
  __typename?: 'ManageSportDetails';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  defaultToSchedulePage?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  groupVal?: Maybe<Scalars['String']>;
  homeField?: Maybe<Scalars['String']>;
  introHtml?: Maybe<Scalars['String']>;
  introImageID?: Maybe<Scalars['Int']>;
  level1?: Maybe<Scalars['String']>;
  needsApproval?: Maybe<Scalars['Int']>;
  recordStatus?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  siteSchoolSport?: Maybe<Scalars['Int']>;
  sportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  sportName?: Maybe<Scalars['String']>;
  sportStatus?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ManageSportDetailsList = {
  __typename?: 'ManageSportDetailsList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageSportDetails>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageSportDetailsListFilter = {
  orderBy?: InputMaybe<ManageSportDetailsListOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageSportDetailsListWhere>;
};

export type ManageSportDetailsListOrderBy = {
  createdAt?: InputMaybe<OrderType>;
  createdBy?: InputMaybe<OrderType>;
  defaultToSchedulePage?: InputMaybe<OrderType>;
  gender?: InputMaybe<OrderType>;
  groupVal?: InputMaybe<OrderType>;
  homeField?: InputMaybe<OrderType>;
  introHtml?: InputMaybe<OrderType>;
  introImageID?: InputMaybe<OrderType>;
  level1?: InputMaybe<OrderType>;
  needsApproval?: InputMaybe<OrderType>;
  recordStatus?: InputMaybe<OrderType>;
  schoolId?: InputMaybe<OrderType>;
  siteSchoolSport?: InputMaybe<OrderType>;
  sportCode?: InputMaybe<OrderType>;
  sportDescription?: InputMaybe<OrderType>;
  sportName?: InputMaybe<OrderType>;
  sportStatus?: InputMaybe<OrderType>;
  updatedAt?: InputMaybe<OrderType>;
  updatedBy?: InputMaybe<OrderType>;
};

export type ManageSportDetailsListWhere = {
  createdAt?: InputMaybe<Scalars['Date']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  defaultToSchedulePage?: InputMaybe<Scalars['Int']>;
  introHtml?: InputMaybe<Scalars['String']>;
  introImageID?: InputMaybe<Scalars['Int']>;
  needsApproval?: InputMaybe<Scalars['Int']>;
  recordStatus?: InputMaybe<Scalars['Int']>;
  siteSchoolSport?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  updatedBy?: InputMaybe<Scalars['Int']>;
};

/** The object which contains all the input data for the ManageTeamStats query */
export type ManageTeamStats = {
  __typename?: 'ManageTeamStats';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['String']>;
  pageHtml?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['Int']>;
  sport?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ManageTeamStatsFilter = {
  orderBy?: InputMaybe<ManageTeamStatsOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManageTeamStatsWhere>;
};

export type ManageTeamStatsList = {
  __typename?: 'ManageTeamStatsList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<ManageTeamStats>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ManageTeamStatsOrderBy = {
  pageHtml?: InputMaybe<PagesNameEnum>;
  sport?: InputMaybe<PagesNameEnum>;
};

export type ManageTeamStatsWhere = {
  pageHtml?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Scalars['String']>;
};

export type ManageUser = {
  __typename?: 'ManageUser';
  contracts?: Maybe<Scalars['String']>;
  events?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['Int']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  is_super_user?: Maybe<Scalars['String']>;
  maintenance?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  seasons?: Maybe<Scalars['String']>;
  teams?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  user_level?: Maybe<Scalars['String']>;
};

export type ManageUserCreateInput = {
  contracts: Scalars['String'];
  events: Scalars['String'];
  groups?: InputMaybe<Array<Scalars['String']>>;
  maintenance: Scalars['String'];
  password: Scalars['String'];
  seasons: Scalars['String'];
  teams: Scalars['String'];
  user_email: Scalars['String'];
  user_id: Scalars['String'];
  user_level: Scalars['String'];
};

export type ManageUserDeleteInput = {
  id: Scalars['Int'];
};

export type ManageUserInput = {
  id: Scalars['Int'];
};

export type ManageUserUpdateInput = {
  contracts?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['Int'];
  maintenance?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  seasons?: InputMaybe<Scalars['String']>;
  teams?: InputMaybe<Scalars['String']>;
  user_email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_level?: InputMaybe<Scalars['String']>;
};

export type ManageUsersList = {
  __typename?: 'ManageUsersList';
  items?: Maybe<Array<Maybe<ManageUser>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  totalFilteredItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  totalRows?: Maybe<Scalars['Int']>;
};

export type ManageUsersListOptions = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ModifyDeleteCount = {
  __typename?: 'ModifyDeleteCount';
  count?: Maybe<Scalars['Int']>;
};

export type ModifyEventInput = {
  activity?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  bus_fee?: InputMaybe<Scalars['Float']>;
  bus_time?: InputMaybe<Scalars['String']>;
  cancellation_status?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  conference_event_id?: InputMaybe<Scalars['Int']>;
  conference_id?: InputMaybe<Scalars['Int']>;
  confirmed?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  departure_location?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  early_dismissal_required?: InputMaybe<Scalars['String']>;
  early_dismissal_time?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['String']>;
  estimated_return_time?: InputMaybe<Scalars['String']>;
  event_date?: InputMaybe<Scalars['Date']>;
  event_id: Scalars['Int'];
  exists_in_mls?: InputMaybe<Scalars['Int']>;
  fee?: InputMaybe<Scalars['Float']>;
  g_s?: InputMaybe<Scalars['String']>;
  gate_revenue?: InputMaybe<Scalars['Float']>;
  headline?: InputMaybe<Scalars['String']>;
  impact_event?: InputMaybe<Scalars['String']>;
  lead?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  loss_points?: InputMaybe<Scalars['Int']>;
  num_buses?: InputMaybe<Scalars['Int']>;
  opponent?: InputMaybe<Scalars['String']>;
  opponent_code?: InputMaybe<Scalars['String']>;
  opponent_score?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  prep_setup?: InputMaybe<Scalars['String']>;
  promote?: InputMaybe<Scalars['String']>;
  results?: InputMaybe<Scalars['String']>;
  revenue?: InputMaybe<Scalars['Float']>;
  rollover?: InputMaybe<Scalars['String']>;
  season_team?: InputMaybe<Scalars['Int']>;
  start_time?: InputMaybe<Scalars['String']>;
  team_score?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tournament?: InputMaybe<Scalars['String']>;
  trans_id?: InputMaybe<Scalars['Int']>;
  transport_comments?: InputMaybe<Scalars['String']>;
  transportation?: InputMaybe<Scalars['String']>;
  update_at?: InputMaybe<Scalars['Date']>;
  web_dir?: InputMaybe<Scalars['String']>;
  win_points?: InputMaybe<Scalars['Int']>;
  years?: InputMaybe<Scalars['String']>;
};

export type ModifyEventParticipantsInput = {
  contract_received?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  notes?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  school_code?: InputMaybe<Scalars['String']>;
};

export type ModifyEventPreparationInput = {
  comments?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  prep?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type ModifyEventPreparationsInput = {
  comments?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  prep?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type ModifyEventTransportDetailsInput = {
  driver_name?: InputMaybe<Scalars['String']>;
  driver_phone?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  vehicle_id?: InputMaybe<Scalars['String']>;
  vehicle_type?: InputMaybe<Scalars['String']>;
};

export type ModifyFacilityInput = {
  Address1?: InputMaybe<Scalars['String']>;
  Address2?: InputMaybe<Scalars['String']>;
  City?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  ZipCode?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  indoor?: InputMaybe<Scalars['String']>;
  ml_site_id?: InputMaybe<Scalars['String']>;
  ml_space?: InputMaybe<Scalars['String']>;
  ml_space_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  place_name: Scalars['String'];
  place_name_old: Scalars['String'];
  show?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type ModifyLevelInput = {
  ID: Scalars['Int'];
  Level?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
};

export type ModifyManyEventPreparationsByEventInput = {
  comments?: InputMaybe<Scalars['String']>;
  event: Scalars['Int'];
  prep?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type ModifyOfficialDutyInput = {
  duty?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  is_deleted?: InputMaybe<Scalars['Boolean']>;
};

export type ModifyOfficialInput = {
  duty?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  offic_id?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  pay_code?: InputMaybe<Scalars['String']>;
  received?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Float']>;
  ssn?: InputMaybe<Scalars['String']>;
  voucher_number?: InputMaybe<Scalars['String']>;
  worker_name?: InputMaybe<Scalars['String']>;
};

export type ModifyOfficialPoolByIdInput = {
  Address?: InputMaybe<Scalars['String']>;
  City?: InputMaybe<Scalars['String']>;
  First?: InputMaybe<Scalars['String']>;
  Home_Phone?: InputMaybe<Scalars['String']>;
  ID: Scalars['String'];
  ID_old: Scalars['String'];
  Last?: InputMaybe<Scalars['String']>;
  SSN?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Work_Phone?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  vendor_number?: InputMaybe<Scalars['String']>;
};

export type ModifyOpponentInput = {
  Address?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  SchoolCode: Scalars['String'];
  SchoolName?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  ad_name?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  nces_id?: InputMaybe<Scalars['String']>;
  non_school?: InputMaybe<Scalars['Boolean']>;
};

export type ModifyPreparationInput = {
  duty?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type ModifySchoolInfoInput = {
  Schoolname?: InputMaybe<Scalars['String']>;
  ad?: InputMaybe<Scalars['String']>;
  ad_contract_signee?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  ccemail?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conf_text_type?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_reminder?: InputMaybe<Scalars['String']>;
  email_reminder_officials?: InputMaybe<Scalars['String']>;
  email_reminder_workers?: InputMaybe<Scalars['String']>;
  enable_cc_email_as_origin?: InputMaybe<Scalars['String']>;
  enable_ml_updates?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  mascot?: InputMaybe<Scalars['String']>;
  message_board_read_at?: InputMaybe<Scalars['Date']>;
  ml_key?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  principal?: InputMaybe<Scalars['String']>;
  school_timezone?: InputMaybe<Scalars['String']>;
  secondary_ad_email?: InputMaybe<Scalars['String']>;
  secondary_ad_name?: InputMaybe<Scalars['String']>;
  signed_contract_notification?: InputMaybe<Scalars['String']>;
  ssn_on_file?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  state_org?: InputMaybe<Scalars['String']>;
  state_org_abbreviation?: InputMaybe<Scalars['String']>;
  use_security?: InputMaybe<Scalars['String']>;
  web_password?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ModifyVehicleInput = {
  id: Scalars['Int'];
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  vehicle_type?: InputMaybe<Scalars['String']>;
};

export type ModifyWorkerInput = {
  duty?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  organization?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['String']>;
  pay_code?: InputMaybe<Scalars['String']>;
  pay_rate?: InputMaybe<Scalars['Float']>;
  salary?: InputMaybe<Scalars['Float']>;
  ssn?: InputMaybe<Scalars['String']>;
  woker_name?: InputMaybe<Scalars['String']>;
  worker_end_time?: InputMaybe<Scalars['String']>;
  worker_start_time?: InputMaybe<Scalars['String']>;
  worker_type?: InputMaybe<Scalars['String']>;
};

export type ModifyWorkerPoolInput = {
  Address?: InputMaybe<Scalars['String']>;
  City?: InputMaybe<Scalars['String']>;
  First?: InputMaybe<Scalars['String']>;
  Home_Phone?: InputMaybe<Scalars['String']>;
  ID: Scalars['Int'];
  Last?: InputMaybe<Scalars['String']>;
  SSN?: InputMaybe<Scalars['String']>;
  State?: InputMaybe<Scalars['String']>;
  Work_Phone?: InputMaybe<Scalars['String']>;
  Zip?: InputMaybe<Scalars['String']>;
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  pay_rate?: InputMaybe<Scalars['Float']>;
  worker_type?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateWalletCard?: Maybe<Scalars['String']>;
  activateWalletVirtualCard?: Maybe<Scalars['Boolean']>;
  activateWalletVirtualCardConfirm?: Maybe<Scalars['Boolean']>;
  addParticipantGuardianDonationInviteEmails?: Maybe<Scalars['Boolean']>;
  addParticipantGuardianDonationInviteEmailsV2: Array<ParticipantGuardianReturn>;
  campaignPersonListCreate?: Maybe<CampaignPersonList>;
  campaignPersonListEntryDelete?: Maybe<CampaignPersonListEntryDelete>;
  /** Create saved search filters for campaigns for current user. */
  campaignSearchFilterCreate?: Maybe<CampaignSearchFilter>;
  /** Remove saved search filters for campaigns for current user. */
  campaignSearchFilterDelete?: Maybe<CampaignSearchFilter>;
  completeWalletRegister?: Maybe<Scalars['Boolean']>;
  confirmPassword?: Maybe<Scalars['String']>;
  confirmWalletOrganizationInfo?: Maybe<WalletConfirmOrganizationInfoResult>;
  /** Deletes a custom template based off ID */
  contactTemplateDelete?: Maybe<CustomContactTemplates>;
  /** Saves custom contact-template for current user */
  contactTemplateSave?: Maybe<CustomContactTemplates>;
  /** @deprecated This will be replaced with latestCreateCard after data has been migrated from Spend and Raise */
  createCard: CoreCardFields;
  createFundraiserUser?: Maybe<CreatedFundraiserUser>;
  createOtkParticipantEntry?: Maybe<CreatedOtkEntry>;
  createPrefund?: Maybe<Prefund>;
  createPrefundTopup?: Maybe<Scalars['Boolean']>;
  driveAddHubspotProspectPin?: Maybe<Scalars['String']>;
  driveAddWinbackPin?: Maybe<Scalars['String']>;
  /** Finalize the (closed) fundraiser after campaign settled. */
  driveCampaignFinalize?: Maybe<IMutationResult>;
  /** Settle the fundraiser when campaigns start to be closed campaigns. */
  driveCampaignSettle?: Maybe<IMutationResult>;
  /** Update the fundraiser. Right now only fundraiser notes can be updated. */
  driveCampaignUpdate?: Maybe<IMutationResult>;
  driveDisableActivity?: Maybe<Scalars['String']>;
  driveEnableActivity?: Maybe<Scalars['String']>;
  /** Posts a message in the activity feed */
  driveEventActivityCreate?: Maybe<DriveEventActivityFeed>;
  /** Removeds an activity feed message */
  driveEventActivityRemove?: Maybe<Scalars['String']>;
  /** Updates the message and feature toggle in a activity message */
  driveEventActivityUpdate?: Maybe<DriveEventActivityFeed>;
  /** Takes in 2 arguments to post the agendas */
  driveEventAgendaCreate?: Maybe<DriveEventAgendaItem>;
  /** Adds an attendee to event. */
  driveEventAttendeeAdd?: Maybe<DriveEventAttendee>;
  /** Updates attendance information of attendee. */
  driveEventAttendeeUpdate?: Maybe<DriveEventAttendee>;
  /** Removes an attendee from event. */
  driveEventAttendeesRemove?: Maybe<Scalars['Int']>;
  /** Create Event (Drive Event-Tracker) */
  driveEventCreate?: Maybe<DriveEvent>;
  /** Delete Event (Drive Event-Tracker) */
  driveEventRemove?: Maybe<Scalars['String']>;
  /** Update Event (Drive Event-Tracker) */
  driveEventUpdate?: Maybe<DriveEvent>;
  /** Set tracking by specific organization current user. */
  driveOrgUserTrackingSet?: Maybe<DriveOrgUserTrackingReturn>;
  driveRemoveHubspotProspectPin?: Maybe<Scalars['String']>;
  driveRemoveWinbackPin?: Maybe<Scalars['String']>;
  /** Resizes the uploaded attachment in S3 in Drive. */
  driveS3ImageResize?: Maybe<Scalars['String']>;
  /** Generate S3 generate pre-signed url for Drive to upload. This is used for uploading big attachments to the support ticket */
  driveUploadUrlCreate: Scalars['String'];
  eventCreate?: Maybe<Event>;
  eventDelete?: Maybe<Event>;
  eventModify?: Maybe<Event>;
  eventParticipantsDeleteMany?: Maybe<DeleteCount>;
  eventParticipantsUpsert?: Maybe<UpsertEventParticipantsCount>;
  eventPreparationCreate?: Maybe<DailyCalendarPreparation>;
  eventPreparationDelete?: Maybe<DailyCalendarPreparation>;
  eventPreparationModify?: Maybe<DailyCalendarPreparation>;
  eventPreparationsCreateMany?: Maybe<Array<Maybe<EventPreparations>>>;
  eventPreparationsDeleteMany?: Maybe<ModifyDeleteCount>;
  eventPreparationsModifyMany?: Maybe<ModifyDeleteCount>;
  eventPreparationsUpsert?: Maybe<UpsertEventPreparationsCount>;
  eventTransportDetailsDeleteMany?: Maybe<EventTransportDetailsDeleteManyCount>;
  eventTransportDetailsUpsertMany?: Maybe<UpsertEventTransportDetailsCount>;
  facilitiesUpsert?: Maybe<Array<Maybe<FacilityLocation>>>;
  facilityCreate?: Maybe<Facility>;
  facilityDelete?: Maybe<Facility>;
  facilityModify?: Maybe<Facility>;
  /** Associate a User with a FinancialAccount. This will also create a User Node only if they exist in User Directory but not Orgs. */
  finAcctUserAssociationCreate?: Maybe<MutationResponse>;
  /** Add a deleted_at property to a User's FinancialAccount association. This will NOT delete the relationship. */
  finAcctUserAssociationDelete?: Maybe<MutationResponse>;
  /** Update a User's FinancialAccount association properties. **Note** There is a known bug preventing status Booleans from updating from True to False. */
  finAcctUserAssociationUpdate?: Maybe<MutationResponse>;
  /** Create a processor specific FinancialAccount Node that is associated with an Org. This requires a valid Org id and a valid KYB id */
  financialAcctCreate?: Maybe<MutationResponse>;
  /** Change a FinancialAccount status to "TERMINATED". This will NOT delete the node. */
  financialAcctDelete?: Maybe<MutationResponse>;
  /** Update a FinancialAccount properties that is already associated with an Org. */
  financialAcctUpdate?: Maybe<MutationResponse>;
  fundraiserStoreUrlUpdate?: Maybe<UpdatedFundraiserStoreUrl>;
  /** Send out email to group-leader. Support CC emails */
  groupLeaderEmailSend?: Maybe<IMutationResult>;
  helpDocumentDelete?: Maybe<Scalars['String']>;
  helpDocumentUpload?: Maybe<Scalars['String']>;
  /** Update hubspot call engagement for fundraiser */
  hubspotCallEngagementToDealAdd?: Maybe<HubspotCallEngagement>;
  /** Update hubspot note engagement for fundraiser */
  hubspotNoteEngagementToDealAdd?: Maybe<HubspotCallEngagement>;
  insightsAddPreApprovedContacts: InsAddPreApprovedContactsResult;
  insightsDeletePreApprovedContact: InsDeletePreApprovedContactResult;
  insightsEditPreApprovedContact: InsEditPreApprovedContactResult;
  insightsEditPreApprovedContactInvite: InsEditPreApprovedInviteResult;
  insightsResendInvitePreApprovedContact: InsResendPreApprovedContactResult;
  insightsUserPreferenceCreate: InsightsUserPreferencesCreateResult;
  insightsUserPreferenceUpdate: InsightsUserPreferencesUpdateResult;
  inviteAccept?: Maybe<UserInviteResponse>;
  inviteCreate: Scalars['String'];
  inviteDelete?: Maybe<Scalars['String']>;
  issuePendingCards?: Maybe<Array<Scalars['ID']>>;
  joinFundraiserUser: JoinedFundraiserId;
  joinFundraiserUserById: JoinedFundraiserId;
  latestVaultCardCreate: Scalars['ID'];
  levelCreate?: Maybe<Level>;
  levelDelete?: Maybe<Level>;
  levelModify?: Maybe<Level>;
  linkUserToSponsor?: Maybe<Scalars['Boolean']>;
  linkUserToSponsorSchool?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AuthChallenge>;
  logout?: Maybe<Scalars['Boolean']>;
  manageUserCreate?: Maybe<ManageUser>;
  manageUserDelete?: Maybe<ManageUser>;
  manageUserUpdate?: Maybe<ManageUser>;
  noticeCreate?: Maybe<Notice>;
  noticeDelete?: Maybe<Array<Maybe<Notice>>>;
  noticeModify?: Maybe<Notice>;
  notifyIncorrectWalletInfo?: Maybe<Scalars['Boolean']>;
  officialCreate?: Maybe<Official>;
  officialDelete?: Maybe<Official>;
  officialDutiesDelete?: Maybe<Array<Maybe<OfficialDuty>>>;
  officialDutiesUpsert?: Maybe<Array<Maybe<OfficialDuty>>>;
  officialDutyCreate?: Maybe<OfficialDuty>;
  officialDutyModify?: Maybe<OfficialDuty>;
  officialModify?: Maybe<Official>;
  officialPoolCreate?: Maybe<OfficialPool>;
  officialPoolDelete?: Maybe<Array<Maybe<OfficialPool>>>;
  officialPoolModify?: Maybe<OfficialPool>;
  officialsUpsert?: Maybe<Array<Maybe<OfficialPool>>>;
  opponentCreate?: Maybe<Opponent>;
  opponentDelete?: Maybe<Opponent>;
  opponentModify?: Maybe<Opponent>;
  opponentsUpsert?: Maybe<Array<Maybe<Opponent>>>;
  /** Please use the 'orgs' query to fuzzy search for the Org name you need BEFORE creating one. This will create a new Org Node regardless of whether it already exists or not. */
  orgCreate?: Maybe<MutationResponse>;
  participantDonationInviteEdit?: Maybe<DonorEmailData>;
  participantDonationInviteEmailAdd?: Maybe<DonorEmailData>;
  participantDonationInviteEmailFollowUp?: Maybe<DonationInviteFollowUpEmail>;
  participantDonationInviteSMSAdd?: Maybe<DonationInviteSmsData>;
  /** This will update the emails of a Participant's Guardian Email field */
  participantGuardianEmailUpdate: ParticipantGuardianEmailUpdate;
  participantIncentiveSelectionDelete?: Maybe<DeletedIncentiveRecord>;
  participantRewardsCreate?: Maybe<CreatedParticipantRewards>;
  participantSignup: Array<TransportType>;
  /** Send out emails to particpants */
  participantsEmailSend?: Maybe<IMutationResult>;
  /** Sends out texts to particpants */
  participantsTextSend?: Maybe<IMutationResult>;
  paymentsApiDetachPaymentMethod?: Maybe<PaymentsApiDetachPaymentMethodResponse>;
  paymentsApiPayment?: Maybe<PaymentsApiPaymentResponse>;
  paymentsApiRefund?: Maybe<PaymentsApiCreateRefundResponse>;
  /** Schedule time (timezone-sensitive) to send out preload email to all participants */
  preloadEmailScheduleSend?: Maybe<PreloadEmailSchedule>;
  /** Send out preload email to all participants */
  preloadEmailSend?: Maybe<Scalars['String']>;
  preparationCreate?: Maybe<Preparation>;
  preparationDelete?: Maybe<Preparation>;
  preparationModify?: Maybe<Preparation>;
  registerWalletUser?: Maybe<WalletUserRegisterResult>;
  roleCreate?: Maybe<Role>;
  roleDelete?: Maybe<Role>;
  rolePermissionsUpdate?: Maybe<Role>;
  roleUpdate?: Maybe<Role>;
  samlCallback?: Maybe<Auth>;
  schoolInfoCreate?: Maybe<SchoolInfo>;
  schoolInfoDelete?: Maybe<SchoolInfo>;
  schoolInfoModify?: Maybe<SchoolInfo>;
  seasonCreate?: Maybe<Season>;
  seasonDelete?: Maybe<Array<Maybe<Season>>>;
  seasonModify?: Maybe<Season>;
  seasonPostponeModify?: Maybe<PostponeUnpostponeResponse>;
  seasonScheduleTeamsCreate?: Maybe<Array<Maybe<Season>>>;
  seasonUnpostponeModify?: Maybe<PostponeUnpostponeResponse>;
  /** Update settlement note for a fundraiser */
  settlementIssuesRecord?: Maybe<Scalars['String']>;
  /** Update settlement status for a fundraiser */
  settlementStatusUpdate?: Maybe<IMutationResult>;
  spendBudgetCreate?: Maybe<SpendBudgetId>;
  spendBudgetDelete?: Maybe<SpendBudgetId>;
  spendBudgetUpdate?: Maybe<SpendBudgetId>;
  spendCategoryCreate?: Maybe<SpendCategoryId>;
  spendCategoryUpdate?: Maybe<SpendCategoryId>;
  spendCategoryUpsertBulk?: Maybe<Array<Maybe<SpendCategoryId>>>;
  spendGroupArchive?: Maybe<SpendGroupId>;
  spendGroupBankAccessTokenCreate?: Maybe<SpendBankAccessCreateResponse>;
  spendGroupBankAccessTokenDelete?: Maybe<SpendBankAccessDeleteResponse>;
  spendGroupCheckDepositPatch?: Maybe<SpendCheckDepositTagsResponse>;
  spendGroupCreate?: Maybe<SpendGroupId>;
  spendGroupDebitCardCreate?: Maybe<SpendDebitCardId>;
  spendGroupDuplicate?: Maybe<SpendGroupId>;
  spendGroupExternalTransfer?: Maybe<SpendExternalTransferResponse>;
  spendGroupRosterCreate?: Maybe<SpendGroupRosterId>;
  spendGroupRostersCreate?: Maybe<Array<Maybe<SpendGroupRosterId>>>;
  spendGroupUpdate?: Maybe<SpendGroupId>;
  spendGuardianSignup?: Maybe<SpendUserId>;
  spendInvoiceChangeRequest?: Maybe<SpendInvoiceId>;
  spendInvoiceCreate?: Maybe<SpendInvoiceId>;
  spendInvoicePaymentDeauthorize?: Maybe<SpendDeauthorizeResponse>;
  spendInvoiceRefund?: Maybe<SpendInvoiceRefundResponse>;
  spendInvoiceReminderCreate?: Maybe<SpendNotificationId>;
  spendInvoiceUpdate?: Maybe<SpendInvoiceId>;
  spendInvoiceUpdatePaymentMethod?: Maybe<SpendInvoiceIDs>;
  spendNotificationCreate?: Maybe<SpendNotificationStatus>;
  spendOrganizationAccountTransfer: SpendAccountId;
  spendOrganizationBankAccessTokenCreate?: Maybe<SpendBankAccessCreateResponse>;
  spendOrganizationBankAccessTokenDelete?: Maybe<SpendBankAccessDeleteResponse>;
  spendOrganizationCheckDepositPatch?: Maybe<SpendCheckDepositTagsResponse>;
  spendOrganizationCreate?: Maybe<SpendOrganizationId>;
  spendOrganizationDebitCardCreate?: Maybe<SpendDebitCardId>;
  spendOrganizationExternalTransfer?: Maybe<SpendExternalTransferResponse>;
  spendOrganizationSignup?: Maybe<SpendSignupFormResponse>;
  spendPaymentMethodCreate?: Maybe<SpendPaymentMethodResponse>;
  spendPaymentScheduleCreate?: Maybe<SpendPaymentScheduleId>;
  spendPaymentScheduleUpdate?: Maybe<SpendPaymentScheduleId>;
  spendPaymentScheduleUpdateBySeason?: Maybe<Array<Maybe<SpendPaymentScheduleId>>>;
  spendRoleChange?: Maybe<SpendRoleId>;
  spendSeasonCreate?: Maybe<SpendSeasonId>;
  spendSeasonUpdate?: Maybe<SpendSeasonId>;
  spendSessionCreate?: Maybe<SpendSession>;
  spendSessionDelete?: Maybe<SpendSessionId>;
  spendSessionRefresh?: Maybe<SpendSessionId>;
  spendSettingsUpdate?: Maybe<SpendOrganizationId>;
  spendSignupAgreementCreate?: Maybe<SpendAgreementId>;
  spendTransactionAttachmentCreate?: Maybe<SpendTransactionAttachmentId>;
  spendTransactionAttachmentDelete?: Maybe<SpendTransactionAttachmentId>;
  spendTransactionNoteCreate?: Maybe<SpendTransactionNoteId>;
  spendTransactionNoteUpdate?: Maybe<SpendTransactionNoteId>;
  spendTransactionReconcile?: Maybe<SpendReconcileTransactionId>;
  spendTransactionsCreate?: Maybe<SpendTransactionsIdList>;
  spendUserAchPayment?: Maybe<SpendAchPaymentResponse>;
  spendUserAchPaymentCancel?: Maybe<SpendAchPaymentId>;
  spendUserBankAccessTokenCreate?: Maybe<SpendBankAccessCreateResponse>;
  spendUserBankAccessTokenDelete?: Maybe<SpendBankAccessDeleteResponse>;
  spendUserInviteArchive?: Maybe<SpendInviteId>;
  spendUserInviteCreate?: Maybe<SpendInviteId>;
  spendUserInviteDelete?: Maybe<SpendInviteId>;
  spendUserInviteResend?: Maybe<SpendInviteId>;
  spendUserInviteUpdate?: Maybe<SpendInviteId>;
  spendUserLeaveGroup?: Maybe<SpendUpdateResponse>;
  spendUserPaymentsCardDetach?: Maybe<SpendPaymentMethodDetachResponse>;
  spendUserRoleArchive?: Maybe<SpendUserId>;
  spendUserRoleUpdate?: Maybe<SpendUserRoleId>;
  spendUserSignupUpdate?: Maybe<SpendUserRoleId>;
  sponsorAssetArchiveToggle?: Maybe<Asset>;
  sponsorCartAssetAdd?: Maybe<SponsorsOnAssets>;
  sponsorCartAssetRemove?: Maybe<SponsorsOnAssets>;
  sponsorCartCheckout?: Maybe<Array<Maybe<Asset>>>;
  sponsorCreate?: Maybe<Sponsor>;
  sponsorDistrictCreate?: Maybe<SponsorDistrict>;
  sponsorDistrictDelete?: Maybe<SponsorDistrict>;
  sponsorDistrictUpdate?: Maybe<SponsorDistrict>;
  sponsorInvitationCreate?: Maybe<Array<Maybe<Invite>>>;
  sponsorLogoUpdate?: Maybe<Sponsor>;
  sponsorPackageAttachmentUpdate?: Maybe<SponsorsOnAssets>;
  sponsorPaymentIntentCreate?: Maybe<PaymentIntent>;
  sponsorPaymentMethodEnable?: Maybe<SponsorPaymentMethod>;
  sponsorPaymentMethodSave?: Maybe<SponsorPaymentMethod>;
  sponsorSchoolCreate?: Maybe<SponsorSchool>;
  sponsorSchoolDelete?: Maybe<SponsorSchool>;
  sponsorSchoolProgramCreate?: Maybe<SponsorSchoolProgram>;
  sponsorSchoolProgramDelete?: Maybe<SponsorSchoolProgram>;
  sponsorSchoolProgramUpdate?: Maybe<SponsorSchoolProgram>;
  sponsorSchoolUpdate?: Maybe<SponsorSchool>;
  sponsorShipGroupUserAssociation?: Maybe<MultipleCreationResponse>;
  sponsorShipLogoUpdate?: Maybe<SponsorshipGroup>;
  sponsorShipTeamPhotoUpdate?: Maybe<SponsorshipGroup>;
  sponsorSubDistrictCreate?: Maybe<SponsorDistrict>;
  sponsorSubDistrictDelete?: Maybe<SponsorSubDistrict>;
  sponsorSubDistrictUpdate?: Maybe<SponsorSubDistrict>;
  sponsorUpdate?: Maybe<Sponsor>;
  sponsorshipGroupAssetCreate?: Maybe<MultipleCreationResponse>;
  sponsorshipGroupAssetDelete?: Maybe<Asset>;
  sponsorshipGroupAssetDuplicate?: Maybe<Asset>;
  sponsorshipGroupAssetUpdate?: Maybe<Asset>;
  sponsorshipGroupCreate?: Maybe<SponsorshipGroup>;
  sponsorshipGroupDelete?: Maybe<SponsorshipGroup>;
  sponsorshipGroupInviteRemind?: Maybe<Scalars['Boolean']>;
  sponsorshipGroupOrderStatusUpdate?: Maybe<SponsorshipGroupOnOrder>;
  sponsorshipGroupUpdate?: Maybe<SponsorshipGroup>;
  sponsorshipGroupUserInvite?: Maybe<Scalars['Boolean']>;
  storeBuildRequest?: Maybe<StoreBuildRequestUnionType>;
  storeEditInfo?: Maybe<StoreEditInfoUnionType>;
  storeManagerPointsUpdate?: Maybe<StoreManagerUpdatePointsUnionType>;
  storePaymentIntentCreate?: Maybe<StorePaymantIntentUnionType>;
  storeTicketCreate?: Maybe<StoreTicketsUnionType>;
  storeTransactionSave?: Maybe<StoreTransactionUnionType>;
  storeTransferToCustomer?: Maybe<StoreTransferPointsUnionType>;
  storeTransferToGL?: Maybe<StoreTransferPointsUnionType>;
  storeTransferToParticipant?: Maybe<StoreTransferPointsUnionType>;
  storeUpdateStatus?: Maybe<MagentoStoreUnionType>;
  /** Send support-ticket email to the support team. */
  supportTicketSend?: Maybe<IMutationResult>;
  teamCreate?: Maybe<Team>;
  teamDelete?: Maybe<Team>;
  teamModify?: Maybe<Team>;
  teamOfficialCreate?: Maybe<TemplateOfficial>;
  teamOfficialDelete?: Maybe<TemplateOfficial>;
  teamOfficialModify?: Maybe<TemplateOfficial>;
  teamPreparationCreate?: Maybe<TemplatePreparation>;
  teamPreparationDelete?: Maybe<TemplatePreparation>;
  teamPreparationModify?: Maybe<TemplatePreparation>;
  teamWorkerCreate?: Maybe<TemplateWorker>;
  teamWorkerDelete?: Maybe<TemplateWorker>;
  teamWorkerModify?: Maybe<TemplateWorker>;
  toggleCardActivation: Scalars['String'];
  updateCurrentOrganizationMailingAddress?: Maybe<Organization>;
  updateParticipantGroup?: Maybe<UpdatedParticipantGroupCount>;
  /** This will update the size of a Participant's OTK item */
  updateParticipantOtkSize: FundraiserUserIncentiveId;
  updatePrefund?: Maybe<Scalars['Boolean']>;
  updateWalletCardStatus?: Maybe<Scalars['String']>;
  updateWalletOrganization?: Maybe<Organization>;
  upgradeToManageUser?: Maybe<Scalars['String']>;
  upgradeToWalletUser?: Maybe<User>;
  /** @deprecated Please use userAssociationCreate instead */
  userAssociate?: Maybe<MutationResponse>;
  /** Create first_seen and last_seen properties for a User and their product specific Org association. */
  userAssociationAccess?: Maybe<MutationResponse>;
  /** Associate a User with an Org and a specific product. This will also create a User Node only if they exist in User Directory but not Orgs. */
  userAssociationCreate?: Maybe<MutationResponse>;
  /** Add a deleted_at property to a User and their product specific Org association. This will NOT delete the relationship. */
  userAssociationDelete?: Maybe<MutationResponse>;
  userChallengeUpdate?: Maybe<UserChallenge>;
  userCreate?: Maybe<User>;
  userEmailConfirm?: Maybe<Scalars['String']>;
  userFittingAdd?: Maybe<UserFitting>;
  userImpersonate?: Maybe<Auth>;
  userImpersonateLogout?: Maybe<Auth>;
  /** @deprecated use inviteCreate instead */
  userInvite: Scalars['String'];
  /** @deprecated use inviteAccept instead */
  userInviteAccept?: Maybe<UserInviteResponse>;
  userPermissionsUpdate?: Maybe<UserPermissionsList>;
  userPhoneNumberConfirm?: Maybe<Scalars['String']>;
  userRefreshSession?: Maybe<Auth>;
  userResetPassword?: Maybe<UserResetPasswordResponseWithAvailableTransport>;
  userSignup?: Maybe<SignUpResponseWithAvailableTransport>;
  userSignupConfirm?: Maybe<Auth>;
  userSignupConfirmationResend: Array<TransportType>;
  userUnassignParent?: Maybe<Scalars['String']>;
  userUpdate?: Maybe<User>;
  userUpdatePassword?: Maybe<User>;
  vaultDocumentGatewayUpload?: Maybe<VaultMutationResponse>;
  vaultFinancialAccountCreate?: Maybe<Scalars['String']>;
  vaultKybCreate: Scalars['ID'];
  vaultKybUpdate: Scalars['ID'];
  vaultKycCreate: Scalars['ID'];
  vaultKycUpdate: Scalars['ID'];
  vaultSetupIntentCreate: Scalars['String'];
  vaultStripeConnectAccountBankAccountDefaultSet: VaultMutationResponse;
  vaultStripeConnectAccountBankAccountDelete: VaultMutationResponse;
  vaultStripeConnectAccountCreate: Scalars['String'];
  vaultStripeConnectAccountPaymentMethodAttach: VaultMutationResponse;
  vaultStripeConnectAccountPayoutFrequencySet: VaultMutationResponse;
  vaultStripeConnectAccountUpdate: Scalars['String'];
  vaultStripePersonCreate: Scalars['String'];
  vaultStripePersonDelete: Scalars['String'];
  vaultStripePersonUpdate: Scalars['String'];
  vaultUnitBusinessApplicationAccountCreate: UnitBusinessApplicationResponse;
  vaultUnitDepositAccountCreate: Scalars['String'];
  vehicleCreate?: Maybe<Vehicle>;
  vehicleDelete?: Maybe<Vehicle>;
  vehicleModify?: Maybe<Vehicle>;
  /** Deprecated: use cron-jobs instead */
  weeklyEventEmailScheduleSend?: Maybe<IMutationResult>;
  workerDeleteMany?: Maybe<WorkerDeleteManyCount>;
  workerPoolCreate?: Maybe<WorkerPool>;
  workerPoolDelete?: Maybe<Array<Maybe<WorkerPool>>>;
  workerPoolModify?: Maybe<WorkerPool>;
  workerUpsertMany?: Maybe<WorkerUpsertManyCount>;
  workersUpsert?: Maybe<Array<Maybe<WorkerPool>>>;
};


export type MutationActivateWalletCardArgs = {
  last4: Scalars['String'];
};


export type MutationActivateWalletVirtualCardArgs = {
  id: Scalars['String'];
};


export type MutationActivateWalletVirtualCardConfirmArgs = {
  code: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAddParticipantGuardianDonationInviteEmailsArgs = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationAddParticipantGuardianDonationInviteEmailsV2Args = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCampaignPersonListCreateArgs = {
  contextableId: Scalars['Int'];
  contextableType: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  participantUserId: Scalars['Int'];
  personListType: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationCampaignPersonListEntryDeleteArgs = {
  personListEntryId: Scalars['Int'];
};


export type MutationCampaignSearchFilterCreateArgs = {
  filterCriteria?: InputMaybe<Scalars['JSON']>;
  filterName?: InputMaybe<Scalars['String']>;
};


export type MutationCampaignSearchFilterDeleteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationCompleteWalletRegisterArgs = {
  altName?: InputMaybe<Scalars['String']>;
};


export type MutationConfirmPasswordArgs = {
  email: Scalars['String'];
  newPassword?: InputMaybe<Scalars['String']>;
  verificationCode: Scalars['String'];
};


export type MutationConfirmWalletOrganizationInfoArgs = {
  altName?: InputMaybe<Scalars['String']>;
};


export type MutationContactTemplateDeleteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationContactTemplateSaveArgs = {
  templateMessage?: InputMaybe<Scalars['String']>;
  templateName?: InputMaybe<Scalars['String']>;
  templateSubject?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCardArgs = {
  card: IssueCardInput;
  gateway?: InputMaybe<Financial_Gateway>;
  organizationId?: InputMaybe<Scalars['String']>;
  raiseOrganizationId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateFundraiserUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationCreateOtkParticipantEntryArgs = {
  fundraiserId: Scalars['Int'];
  incentiveId: Scalars['Int'];
  size: Scalars['String'];
};


export type MutationCreatePrefundArgs = {
  amount: Scalars['Int'];
  cardType?: InputMaybe<Card_Type>;
  email: Scalars['String'];
  fundraiserId: Scalars['Int'];
  nameOnCard?: InputMaybe<Scalars['String']>;
  shippingService?: InputMaybe<Shipping_Service>;
};


export type MutationCreatePrefundTopupArgs = {
  amount: Scalars['Int'];
  fundraiserId: Scalars['Int'];
};


export type MutationDriveAddHubspotProspectPinArgs = {
  dealId?: InputMaybe<Scalars['String']>;
  hubspotOrgId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveAddWinbackPinArgs = {
  dealId?: InputMaybe<Scalars['String']>;
  hubspotOrgId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveCampaignFinalizeArgs = {
  fundraiserId: Scalars['Int'];
};


export type MutationDriveCampaignSettleArgs = {
  fundraiserIds?: InputMaybe<Array<Scalars['Int']>>;
};


export type MutationDriveCampaignUpdateArgs = {
  data: DriveCampaignUpdateInput;
  id: Scalars['Int'];
};


export type MutationDriveDisableActivityArgs = {
  dealId?: InputMaybe<Scalars['String']>;
  hubspotOrgId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveEnableActivityArgs = {
  dealId?: InputMaybe<Scalars['String']>;
  hubspotOrgId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveEventActivityCreateArgs = {
  eventId: Scalars['String'];
  input?: InputMaybe<DriveEventActivityInput>;
};


export type MutationDriveEventActivityRemoveArgs = {
  id: Scalars['ID'];
};


export type MutationDriveEventActivityUpdateArgs = {
  id: Scalars['ID'];
  input: DriveEventActivityInput;
};


export type MutationDriveEventAgendaCreateArgs = {
  eventId: Scalars['ID'];
  input: DriveEventAgendaInput;
};


export type MutationDriveEventAttendeeAddArgs = {
  eventId: Scalars['ID'];
  input: DriveEventAttendeeInput;
  update?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDriveEventAttendeeUpdateArgs = {
  eventId: Scalars['ID'];
  input: DriveEventAttendeeInput;
  userId: Scalars['ID'];
};


export type MutationDriveEventAttendeesRemoveArgs = {
  eventId: Scalars['ID'];
  userIds: Array<Scalars['String']>;
};


export type MutationDriveEventCreateArgs = {
  input: DriveEventInput;
};


export type MutationDriveEventRemoveArgs = {
  id: Scalars['ID'];
};


export type MutationDriveEventUpdateArgs = {
  id: Scalars['ID'];
  input: DriveEventInput;
};


export type MutationDriveOrgUserTrackingSetArgs = {
  input?: InputMaybe<DriveTrackingInput>;
  orgId: Scalars['String'];
};


export type MutationDriveRemoveHubspotProspectPinArgs = {
  dealId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveRemoveWinbackPinArgs = {
  dealId?: InputMaybe<Scalars['String']>;
};


export type MutationDriveS3ImageResizeArgs = {
  fileUploaded?: InputMaybe<Scalars['String']>;
};


export type MutationDriveUploadUrlCreateArgs = {
  fileName: Scalars['String'];
};


export type MutationEventCreateArgs = {
  input?: InputMaybe<CreateEventInput>;
};


export type MutationEventDeleteArgs = {
  input?: InputMaybe<DeleteEventInput>;
};


export type MutationEventModifyArgs = {
  input?: InputMaybe<ModifyEventInput>;
};


export type MutationEventParticipantsDeleteManyArgs = {
  input?: InputMaybe<DeleteManyEventParticipantsInput>;
};


export type MutationEventParticipantsUpsertArgs = {
  input?: InputMaybe<UpsertEventParticipantsInput>;
};


export type MutationEventPreparationCreateArgs = {
  input?: InputMaybe<CreateEventPreparationInput>;
};


export type MutationEventPreparationDeleteArgs = {
  input?: InputMaybe<DeleteEventPreparationInput>;
};


export type MutationEventPreparationModifyArgs = {
  input?: InputMaybe<ModifyEventPreparationInput>;
};


export type MutationEventPreparationsCreateManyArgs = {
  input?: InputMaybe<Array<InputMaybe<EventPreparationsInput>>>;
};


export type MutationEventPreparationsDeleteManyArgs = {
  input?: InputMaybe<DeleteManyEventPreparationsInput>;
};


export type MutationEventPreparationsModifyManyArgs = {
  input?: InputMaybe<ModifyManyEventPreparationsByEventInput>;
};


export type MutationEventPreparationsUpsertArgs = {
  input?: InputMaybe<UpsertEventPreparationsInput>;
};


export type MutationEventTransportDetailsDeleteManyArgs = {
  input?: InputMaybe<DeleteManyEventTransportDetailsInput>;
};


export type MutationEventTransportDetailsUpsertManyArgs = {
  input?: InputMaybe<UpsertEventTransportDetailsInput>;
};


export type MutationFacilitiesUpsertArgs = {
  input?: InputMaybe<Array<InputMaybe<UpsertFacilitiesInput>>>;
};


export type MutationFacilityCreateArgs = {
  input?: InputMaybe<CreateFacilityInput>;
};


export type MutationFacilityDeleteArgs = {
  input?: InputMaybe<DeleteFacilityInput>;
};


export type MutationFacilityModifyArgs = {
  input?: InputMaybe<ModifyFacilityInput>;
};


export type MutationFinAcctUserAssociationCreateArgs = {
  finAcctId: Scalars['ID'];
  isBeneficialOwner?: InputMaybe<Scalars['Boolean']>;
  isContact?: InputMaybe<Scalars['Boolean']>;
  isPrincipal?: InputMaybe<Scalars['Boolean']>;
  isRepresentative?: InputMaybe<Scalars['Boolean']>;
  kycId?: InputMaybe<Scalars['ID']>;
  personId?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type MutationFinAcctUserAssociationDeleteArgs = {
  finAcctId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationFinAcctUserAssociationUpdateArgs = {
  finAcctId: Scalars['ID'];
  isBeneficialOwner?: InputMaybe<Scalars['Boolean']>;
  isContact?: InputMaybe<Scalars['Boolean']>;
  isPrincipal?: InputMaybe<Scalars['Boolean']>;
  isRepresentative?: InputMaybe<Scalars['Boolean']>;
  kycId?: InputMaybe<Scalars['ID']>;
  personId?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type MutationFinancialAcctCreateArgs = {
  acctId?: InputMaybe<Scalars['ID']>;
  applicationId?: InputMaybe<Scalars['ID']>;
  customerId?: InputMaybe<Scalars['ID']>;
  kybId: Scalars['ID'];
  orgId: Scalars['ID'];
  processor: Processor;
  status?: InputMaybe<FinAcctStatus>;
};


export type MutationFinancialAcctDeleteArgs = {
  finAcctId: Scalars['ID'];
};


export type MutationFinancialAcctUpdateArgs = {
  acctId?: InputMaybe<Scalars['ID']>;
  applicationId?: InputMaybe<Scalars['ID']>;
  customerId?: InputMaybe<Scalars['ID']>;
  finAcctId: Scalars['ID'];
  kybId?: InputMaybe<Scalars['ID']>;
  orgId: Scalars['ID'];
  status?: InputMaybe<FinAcctStatus>;
};


export type MutationFundraiserStoreUrlUpdateArgs = {
  fundraiserId: Scalars['Int'];
  storeUrl?: InputMaybe<Scalars['String']>;
};


export type MutationGroupLeaderEmailSendArgs = {
  ccEmails?: InputMaybe<Array<Scalars['String']>>;
  fundraiserId: Scalars['Int'];
  groupLeaderEmail: Scalars['String'];
  message: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationHelpDocumentDeleteArgs = {
  input: HelpDocumentDeleteInput;
};


export type MutationHelpDocumentUploadArgs = {
  input: HelpDocumentUploadInput;
};


export type MutationHubspotCallEngagementToDealAddArgs = {
  fundraiserId: Scalars['Int'];
};


export type MutationHubspotNoteEngagementToDealAddArgs = {
  fundraiserId: Scalars['Int'];
};


export type MutationInsightsAddPreApprovedContactsArgs = {
  approver: InsAddPreApprovedContactApproverInput;
  contacts: Array<InputMaybe<InsPreApprovedContactInput>>;
  dashboardUrl: Scalars['String'];
  org: InsAddPreApprovedContactOrgInput;
};


export type MutationInsightsDeletePreApprovedContactArgs = {
  contactId: Scalars['Int'];
  userId: Scalars['String'];
};


export type MutationInsightsEditPreApprovedContactArgs = {
  contactId: Scalars['Int'];
  orgId: Scalars['String'];
  senderName: Scalars['String'];
  updatedContact: InsEditPreApprovedContactInput;
};


export type MutationInsightsEditPreApprovedContactInviteArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationInsightsResendInvitePreApprovedContactArgs = {
  contactId: Scalars['Int'];
  senderName: Scalars['String'];
};


export type MutationInsightsUserPreferenceCreateArgs = {
  campaignId?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  orgId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userPreferenceId?: InputMaybe<Scalars['Int']>;
};


export type MutationInsightsUserPreferenceUpdateArgs = {
  campaignId?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  orgId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userPreferenceId?: InputMaybe<Scalars['Int']>;
};


export type MutationInviteAcceptArgs = {
  inviteId?: InputMaybe<Scalars['String']>;
};


export type MutationInviteCreateArgs = {
  email: Scalars['String'];
  parent?: InputMaybe<InviteParentArguments>;
  sendEmail?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<InviteUserArguments>;
};


export type MutationInviteDeleteArgs = {
  inviteId?: InputMaybe<Scalars['String']>;
};


export type MutationJoinFundraiserUserArgs = {
  joinCode: Scalars['String'];
  role: CampaignMemberAssociation;
  userId: Scalars['Int'];
};


export type MutationJoinFundraiserUserByIdArgs = {
  fundraiserId: Scalars['Int'];
  role: CampaignMemberAssociation;
  ssoId: Scalars['String'];
  user: JoinFundraiserUserInput;
};


export type MutationLatestVaultCardCreateArgs = {
  altName?: InputMaybe<Scalars['String']>;
  attachCardToKybBalance: Scalars['Boolean'];
  cardType: VaultCardType;
  kybId: Scalars['ID'];
  metadata?: InputMaybe<VaultCardMetadataInput>;
  recipientName?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<VaultAddressInput>;
  shippingService?: InputMaybe<VaultShippingService>;
  spendingLimitAmount: Scalars['Int'];
  spendingLimitInterval: VaultSpendingLimitInterval;
};


export type MutationLevelCreateArgs = {
  input?: InputMaybe<CreateLevelInput>;
};


export type MutationLevelDeleteArgs = {
  input?: InputMaybe<DeleteLevelInput>;
};


export type MutationLevelModifyArgs = {
  input?: InputMaybe<ModifyLevelInput>;
};


export type MutationLinkUserToSponsorArgs = {
  sponsorId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLinkUserToSponsorSchoolArgs = {
  schoolId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLoginArgs = {
  consumer?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationManageUserCreateArgs = {
  input?: InputMaybe<ManageUserCreateInput>;
};


export type MutationManageUserDeleteArgs = {
  input?: InputMaybe<ManageUserDeleteInput>;
};


export type MutationManageUserUpdateArgs = {
  input?: InputMaybe<ManageUserUpdateInput>;
};


export type MutationNoticeCreateArgs = {
  input?: InputMaybe<NoticeCreateInput>;
};


export type MutationNoticeDeleteArgs = {
  input?: InputMaybe<NoticeDeleteInput>;
};


export type MutationNoticeModifyArgs = {
  input?: InputMaybe<NoticeModifyInput>;
};


export type MutationNotifyIncorrectWalletInfoArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  orgId: Scalars['Int'];
};


export type MutationOfficialCreateArgs = {
  input?: InputMaybe<CreateOfficialInput>;
};


export type MutationOfficialDeleteArgs = {
  input?: InputMaybe<DeleteOfficialInput>;
};


export type MutationOfficialDutiesDeleteArgs = {
  input?: InputMaybe<DeleteOfficialDutiesInput>;
};


export type MutationOfficialDutiesUpsertArgs = {
  input?: InputMaybe<Array<InputMaybe<UpsertOfficialDutiesInput>>>;
};


export type MutationOfficialDutyCreateArgs = {
  input?: InputMaybe<CreateOfficialDutyInput>;
};


export type MutationOfficialDutyModifyArgs = {
  input?: InputMaybe<ModifyOfficialDutyInput>;
};


export type MutationOfficialModifyArgs = {
  input?: InputMaybe<ModifyOfficialInput>;
};


export type MutationOfficialPoolCreateArgs = {
  input?: InputMaybe<CreateOfficialPoolByIdInput>;
};


export type MutationOfficialPoolDeleteArgs = {
  input?: InputMaybe<DeleteOfficialPoolInput>;
};


export type MutationOfficialPoolModifyArgs = {
  input?: InputMaybe<ModifyOfficialPoolByIdInput>;
};


export type MutationOfficialsUpsertArgs = {
  input?: InputMaybe<Array<InputMaybe<UpsertOfficialsInput>>>;
};


export type MutationOpponentCreateArgs = {
  input?: InputMaybe<CreateOpponentInput>;
};


export type MutationOpponentDeleteArgs = {
  input?: InputMaybe<DeleteOpponentInput>;
};


export type MutationOpponentModifyArgs = {
  input?: InputMaybe<ModifyOpponentInput>;
};


export type MutationOpponentsUpsertArgs = {
  input?: InputMaybe<Array<InputMaybe<UpsertOpponentsInput>>>;
};


export type MutationOrgCreateArgs = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  ein_number?: InputMaybe<Scalars['Int']>;
  fips_id?: InputMaybe<Scalars['Int']>;
  formation_year?: InputMaybe<Scalars['Int']>;
  hubspot_id?: InputMaybe<Scalars['Int']>;
  mascot?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nces_category?: InputMaybe<Scalars['String']>;
  parentOrgId?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  state_code?: InputMaybe<StateCode>;
  state_id?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  student_count?: InputMaybe<Scalars['Float']>;
  student_teacher_ratio?: InputMaybe<Scalars['Float']>;
  teacher_count?: InputMaybe<Scalars['Float']>;
  type: OrgType;
  url?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['Int']>;
};


export type MutationParticipantDonationInviteEditArgs = {
  campaignID: Scalars['String'];
  donationInviteID: Scalars['String'];
  newEmail: Scalars['String'];
};


export type MutationParticipantDonationInviteEmailAddArgs = {
  campaignID: Scalars['String'];
  email: Scalars['String'];
};


export type MutationParticipantDonationInviteEmailFollowUpArgs = {
  donationInviteEmailID: Scalars['Int'];
};


export type MutationParticipantDonationInviteSmsAddArgs = {
  campaignID: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationParticipantGuardianEmailUpdateArgs = {
  guardianEmail: Scalars['String'];
  secondGuardianEmail?: InputMaybe<Scalars['String']>;
};


export type MutationParticipantIncentiveSelectionDeleteArgs = {
  fundraiserId: Scalars['ID'];
  fundraiserUserIncentiveId: Scalars['ID'];
};


export type MutationParticipantRewardsCreateArgs = {
  fundraiserId: Scalars['Int'];
  incentiveId: Scalars['Int'];
  size: Scalars['String'];
  tier: Scalars['Int'];
};


export type MutationParticipantSignupArgs = {
  apps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationParticipantsEmailSendArgs = {
  fundraiserId: Scalars['Int'];
  message: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationParticipantsTextSendArgs = {
  fundraiserId: Scalars['Int'];
  message: Scalars['String'];
};


export type MutationPaymentsApiDetachPaymentMethodArgs = {
  input?: InputMaybe<PaymentsApiDetachPaymentMethodInput>;
};


export type MutationPaymentsApiPaymentArgs = {
  input?: InputMaybe<PaymentsApiPaymentIput>;
};


export type MutationPaymentsApiRefundArgs = {
  input?: InputMaybe<PaymentsApiRefundInput>;
};


export type MutationPreloadEmailScheduleSendArgs = {
  dateTime: Scalars['DateTime'];
  fundraiserId: Scalars['Int'];
  timezone: Scalars['String'];
};


export type MutationPreloadEmailSendArgs = {
  fundraiserId: Scalars['Int'];
};


export type MutationPreparationCreateArgs = {
  input?: InputMaybe<CreatePreparationInput>;
};


export type MutationPreparationDeleteArgs = {
  input?: InputMaybe<DeletePreparationInput>;
};


export type MutationPreparationModifyArgs = {
  input?: InputMaybe<ModifyPreparationInput>;
};


export type MutationRoleCreateArgs = {
  data: RoleArguments;
};


export type MutationRoleDeleteArgs = {
  id: Scalars['String'];
};


export type MutationRolePermissionsUpdateArgs = {
  permissionIds: Array<Scalars['String']>;
  roleId: Scalars['String'];
};


export type MutationRoleUpdateArgs = {
  data: RoleArguments;
  id: Scalars['String'];
};


export type MutationSamlCallbackArgs = {
  actualEmail?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  consumer?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationSchoolInfoCreateArgs = {
  input?: InputMaybe<CreateSchoolInfoInput>;
};


export type MutationSchoolInfoDeleteArgs = {
  input?: InputMaybe<DeleteSchoolInfoInput>;
};


export type MutationSchoolInfoModifyArgs = {
  input?: InputMaybe<ModifySchoolInfoInput>;
};


export type MutationSeasonCreateArgs = {
  input?: InputMaybe<SeasonCreateInput>;
};


export type MutationSeasonDeleteArgs = {
  input?: InputMaybe<SeasonDeleteInput>;
};


export type MutationSeasonModifyArgs = {
  input?: InputMaybe<SeasonModifyInput>;
};


export type MutationSeasonPostponeModifyArgs = {
  input?: InputMaybe<SeasonPostponeUnpostponeInput>;
};


export type MutationSeasonScheduleTeamsCreateArgs = {
  input?: InputMaybe<SeasonScheduleTeamsCreateInput>;
};


export type MutationSeasonUnpostponeModifyArgs = {
  input?: InputMaybe<SeasonPostponeUnpostponeInput>;
};


export type MutationSettlementIssuesRecordArgs = {
  fundraiserId: Scalars['Int'];
  note?: InputMaybe<Scalars['String']>;
};


export type MutationSettlementStatusUpdateArgs = {
  fundraiserId: Scalars['Int'];
  settlementStatus?: InputMaybe<SettlementStatus>;
};


export type MutationSpendBudgetCreateArgs = {
  input: SpendBudgetInput;
};


export type MutationSpendBudgetDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSpendBudgetUpdateArgs = {
  id: Scalars['String'];
  input: SpendBudgetInput;
};


export type MutationSpendCategoryCreateArgs = {
  input: SpendCategoryInput;
};


export type MutationSpendCategoryUpdateArgs = {
  id: Scalars['String'];
  input: SpendCategoryInput;
};


export type MutationSpendCategoryUpsertBulkArgs = {
  input?: InputMaybe<Array<InputMaybe<SpendUpsertCategoryInput>>>;
};


export type MutationSpendGroupArchiveArgs = {
  id: Scalars['String'];
};


export type MutationSpendGroupBankAccessTokenCreateArgs = {
  id?: InputMaybe<Scalars['String']>;
  publicToken: Scalars['String'];
};


export type MutationSpendGroupBankAccessTokenDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSpendGroupCheckDepositPatchArgs = {
  input: SpendGroupCheckDepositTagsInput;
};


export type MutationSpendGroupCreateArgs = {
  input: SpendGroupInput;
};


export type MutationSpendGroupDebitCardCreateArgs = {
  id?: InputMaybe<Scalars['String']>;
  input: SpendDebitCardInput;
};


export type MutationSpendGroupDuplicateArgs = {
  id: Scalars['String'];
};


export type MutationSpendGroupExternalTransferArgs = {
  input: SpendGroupExternalTransferInput;
};


export type MutationSpendGroupRosterCreateArgs = {
  input: SpendGroupRosterInput;
};


export type MutationSpendGroupRostersCreateArgs = {
  input: SpendGroupRostersInput;
};


export type MutationSpendGroupUpdateArgs = {
  id?: InputMaybe<Scalars['String']>;
  input: SpendGroupInput;
};


export type MutationSpendGuardianSignupArgs = {
  input: SpendGuardianSignupInput;
};


export type MutationSpendInvoiceChangeRequestArgs = {
  input: SpendInvoiceRequestChangeInput;
};


export type MutationSpendInvoiceCreateArgs = {
  input: SpendInvoiceInput;
};


export type MutationSpendInvoicePaymentDeauthorizeArgs = {
  input: SpendInvoicePaymentDeauthorizeInput;
};


export type MutationSpendInvoiceRefundArgs = {
  input: SpendInvoiceRefundInput;
};


export type MutationSpendInvoiceReminderCreateArgs = {
  input: SpendInvoiceReminderInput;
};


export type MutationSpendInvoiceUpdateArgs = {
  id: Scalars['String'];
  input: SpendInvoiceInput;
};


export type MutationSpendInvoiceUpdatePaymentMethodArgs = {
  input: SpendInvoicePaymentMethodUpdate;
};


export type MutationSpendNotificationCreateArgs = {
  input: SpendNotificationInput;
};


export type MutationSpendOrganizationAccountTransferArgs = {
  input: SpendAccountTransferInput;
};


export type MutationSpendOrganizationBankAccessTokenCreateArgs = {
  publicToken: Scalars['String'];
};


export type MutationSpendOrganizationCheckDepositPatchArgs = {
  input: SpendOrganizationCheckDepositTagsInput;
};


export type MutationSpendOrganizationCreateArgs = {
  externalId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationSpendOrganizationDebitCardCreateArgs = {
  input: SpendDebitCardInput;
};


export type MutationSpendOrganizationExternalTransferArgs = {
  input: SpendOrganizationExternalTransferInput;
};


export type MutationSpendPaymentMethodCreateArgs = {
  input: SpendPaymentMethodInput;
};


export type MutationSpendPaymentScheduleCreateArgs = {
  input: SpendPaymentScheduleInput;
};


export type MutationSpendPaymentScheduleUpdateArgs = {
  id: Scalars['String'];
  input: SpendPaymentScheduleInput;
  rosterIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationSpendPaymentScheduleUpdateBySeasonArgs = {
  input: SpendPaymentScheduleBySeasonInput;
};


export type MutationSpendRoleChangeArgs = {
  roleId: Scalars['String'];
  sessionId: Scalars['String'];
};


export type MutationSpendSeasonCreateArgs = {
  input: SpendSeasonInput;
};


export type MutationSpendSeasonUpdateArgs = {
  id: Scalars['String'];
  input: SpendSeasonInput;
};


export type MutationSpendSessionRefreshArgs = {
  sessionId: Scalars['String'];
};


export type MutationSpendSettingsUpdateArgs = {
  input?: InputMaybe<SpendSettingsInput>;
};


export type MutationSpendSignupAgreementCreateArgs = {
  input: SpendSignupAgreementInput;
};


export type MutationSpendTransactionAttachmentCreateArgs = {
  input: SpendTransactionAttachmentInput;
};


export type MutationSpendTransactionAttachmentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSpendTransactionNoteCreateArgs = {
  input: SpendTranscationNoteInput;
};


export type MutationSpendTransactionNoteUpdateArgs = {
  id: Scalars['String'];
  input: SpendTranscationNoteInput;
};


export type MutationSpendTransactionReconcileArgs = {
  input: SpendTransactionReconcileInput;
};


export type MutationSpendTransactionsCreateArgs = {
  input: SpendTransactionInput;
};


export type MutationSpendUserAchPaymentArgs = {
  input: SpendAchPaymentInput;
};


export type MutationSpendUserAchPaymentCancelArgs = {
  input: SpendAchPaymentCancelInput;
};


export type MutationSpendUserBankAccessTokenCreateArgs = {
  groupId: Scalars['String'];
  publicToken: Scalars['String'];
};


export type MutationSpendUserInviteArchiveArgs = {
  id: Scalars['String'];
};


export type MutationSpendUserInviteCreateArgs = {
  input: SpendInviteInput;
};


export type MutationSpendUserInviteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSpendUserInviteResendArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSpendUserInviteUpdateArgs = {
  id: Scalars['String'];
};


export type MutationSpendUserLeaveGroupArgs = {
  groupId: Scalars['String'];
};


export type MutationSpendUserPaymentsCardDetachArgs = {
  input?: InputMaybe<SpendPaymentMethodDetach>;
};


export type MutationSpendUserRoleArchiveArgs = {
  groupId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type MutationSpendUserRoleUpdateArgs = {
  groupId?: InputMaybe<Scalars['String']>;
  roleName: SpendRoleNameEnum;
  userId: Scalars['String'];
};


export type MutationSpendUserSignupUpdateArgs = {
  input?: InputMaybe<SpendUserSignupInput>;
};


export type MutationSponsorAssetArchiveToggleArgs = {
  archive?: InputMaybe<Scalars['Boolean']>;
  assetId: Scalars['String'];
};


export type MutationSponsorCartAssetAddArgs = {
  assetId: Scalars['String'];
  attachment?: InputMaybe<Scalars['String']>;
  sponsorId: Scalars['String'];
};


export type MutationSponsorCartAssetRemoveArgs = {
  cartId: Scalars['Int'];
};


export type MutationSponsorCartCheckoutArgs = {
  emailAddress: Scalars['String'];
  orderId: Scalars['String'];
  sponsorId: Scalars['String'];
  sponsorName: Scalars['String'];
};


export type MutationSponsorCreateArgs = {
  city: Scalars['String'];
  email: Scalars['String'];
  industryId: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  stateId: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
};


export type MutationSponsorDistrictCreateArgs = {
  fields?: InputMaybe<ISponsorDistrictFields>;
};


export type MutationSponsorDistrictDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorDistrictUpdateArgs = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorInvitationCreateArgs = {
  emailData?: InputMaybe<DynamicEmailDataInput>;
  invites?: InputMaybe<Array<InputMaybe<InviteCreationInput>>>;
};


export type MutationSponsorLogoUpdateArgs = {
  file?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationSponsorPackageAttachmentUpdateArgs = {
  attachment?: InputMaybe<Scalars['String']>;
  cartId: Scalars['Int'];
};


export type MutationSponsorPaymentIntentCreateArgs = {
  paymentMethod?: InputMaybe<Scalars['String']>;
  save: Scalars['Boolean'];
  sponsorId: Scalars['String'];
};


export type MutationSponsorPaymentMethodEnableArgs = {
  isEnabled: Scalars['Boolean'];
  paymentMethodId: Scalars['String'];
  sponsorId: Scalars['String'];
};


export type MutationSponsorPaymentMethodSaveArgs = {
  paymentMethodId: Scalars['String'];
  sponsorId: Scalars['String'];
};


export type MutationSponsorSchoolCreateArgs = {
  districtId?: InputMaybe<Scalars['String']>;
  fields: ISponsorSchoolFields;
  subDistrictId?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorSchoolDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorSchoolProgramCreateArgs = {
  districtId?: InputMaybe<Scalars['String']>;
  fields: ISponsorSchoolProgramFields;
  schoolId?: InputMaybe<Scalars['String']>;
  subDistrictId?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorSchoolProgramDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorSchoolProgramUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorSchoolUpdateArgs = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  subDistrictId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorShipGroupUserAssociationArgs = {
  data?: InputMaybe<Array<InputMaybe<SponsorshipGroupUserLink>>>;
};


export type MutationSponsorShipLogoUpdateArgs = {
  file?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationSponsorShipTeamPhotoUpdateArgs = {
  file?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationSponsorSubDistrictCreateArgs = {
  districtId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<ISponsorDistrictFields>;
};


export type MutationSponsorSubDistrictDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorSubDistrictUpdateArgs = {
  districtId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorUpdateArgs = {
  city?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorshipGroupAssetCreateArgs = {
  data?: InputMaybe<AssetCreationInput>;
};


export type MutationSponsorshipGroupAssetDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorshipGroupAssetDuplicateArgs = {
  id: Scalars['String'];
};


export type MutationSponsorshipGroupAssetUpdateArgs = {
  assetTypeId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  isSponsored?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pricing?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sponsorshipGroupId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorshipGroupCreateArgs = {
  activityId: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  motive?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schoolId: Scalars['String'];
  socialMediaAccounts?: InputMaybe<ISocialMediaAccounts>;
  stateId: Scalars['String'];
  streetAddress?: InputMaybe<Scalars['String']>;
  teamPhoto?: InputMaybe<Scalars['String']>;
  zipCode: Scalars['String'];
};


export type MutationSponsorshipGroupDeleteArgs = {
  id: Scalars['String'];
};


export type MutationSponsorshipGroupInviteRemindArgs = {
  email: Scalars['String'];
  emailData?: InputMaybe<DynamicEmailDataInput>;
  inviteId: Scalars['String'];
  sponsorshipGroupId: Scalars['String'];
};


export type MutationSponsorshipGroupOrderStatusUpdateArgs = {
  packageId: Scalars['String'];
  rejectionReason?: InputMaybe<Scalars['String']>;
  sponsorshipGroupId: Scalars['String'];
  status: OrderStatus;
};


export type MutationSponsorshipGroupUpdateArgs = {
  activityId?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  motive?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialMediaAccounts?: InputMaybe<ISocialMediaAccounts>;
  stateId?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  stripeAccountStatus?: InputMaybe<Scalars['String']>;
  stripeConnectAccountId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};


export type MutationSponsorshipGroupUserInviteArgs = {
  inviterName: Scalars['String'];
  organizationName: Scalars['String'];
  publicUrl: Scalars['String'];
  receiverEmail: Scalars['String'];
};


export type MutationStoreBuildRequestArgs = {
  input: StoreBuildRequestInput;
};


export type MutationStoreEditInfoArgs = {
  input: StoreEditInfoInput;
};


export type MutationStoreManagerPointsUpdateArgs = {
  input?: InputMaybe<StoreManagerUpdatePoints>;
};


export type MutationStorePaymentIntentCreateArgs = {
  input: StoreCreatePaymentIntent;
};


export type MutationStoreTicketCreateArgs = {
  input: StoreTicketInput;
};


export type MutationStoreTransactionSaveArgs = {
  input: StoreSaveTransaction;
};


export type MutationStoreTransferToCustomerArgs = {
  input?: InputMaybe<StoreTransferCustomer>;
};


export type MutationStoreTransferToGlArgs = {
  input?: InputMaybe<StoreTransferGl>;
};


export type MutationStoreTransferToParticipantArgs = {
  input?: InputMaybe<StoreTransferParticipant>;
};


export type MutationStoreUpdateStatusArgs = {
  input: StoreStatusInput;
};


export type MutationSupportTicketSendArgs = {
  attachments?: InputMaybe<Array<DriveFileInput>>;
  ccEmails?: InputMaybe<Array<Scalars['String']>>;
  deviceInfo?: InputMaybe<Scalars['String']>;
  fundraiserId?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  supportTicketInfo?: InputMaybe<Array<DriveFieldInput>>;
  templateId?: InputMaybe<Scalars['String']>;
  to: Support_Ticket_Department;
};


export type MutationTeamCreateArgs = {
  input?: InputMaybe<TeamCreateInput>;
};


export type MutationTeamDeleteArgs = {
  input?: InputMaybe<TeamDeleteInput>;
};


export type MutationTeamModifyArgs = {
  input?: InputMaybe<TeamModifyInput>;
};


export type MutationTeamOfficialCreateArgs = {
  input?: InputMaybe<TeamOfficialCreateInput>;
};


export type MutationTeamOfficialDeleteArgs = {
  input?: InputMaybe<TeamOfficialDeleteInput>;
};


export type MutationTeamOfficialModifyArgs = {
  input?: InputMaybe<TeamOfficialModifyInput>;
};


export type MutationTeamPreparationCreateArgs = {
  input?: InputMaybe<TeamPreparationCreateInput>;
};


export type MutationTeamPreparationDeleteArgs = {
  input?: InputMaybe<TeamPreparationDeleteInput>;
};


export type MutationTeamPreparationModifyArgs = {
  input?: InputMaybe<TeamPreparationModifyInput>;
};


export type MutationTeamWorkerCreateArgs = {
  input?: InputMaybe<TeamWorkerCreateInput>;
};


export type MutationTeamWorkerDeleteArgs = {
  input?: InputMaybe<TeamWorkerDeleteInput>;
};


export type MutationTeamWorkerModifyArgs = {
  input?: InputMaybe<TeamWorkerModifyInput>;
};


export type MutationToggleCardActivationArgs = {
  cardId: Scalars['String'];
  status: Card_Status;
};


export type MutationUpdateCurrentOrganizationMailingAddressArgs = {
  address: FinancialAddressInput;
};


export type MutationUpdateParticipantGroupArgs = {
  fundraiserId: Scalars['Int'];
  personListsId: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationUpdateParticipantOtkSizeArgs = {
  fundraiserUserIncentiveId: Scalars['Int'];
  size: Scalars['String'];
};


export type MutationUpdatePrefundArgs = {
  id: Scalars['String'];
  prefundAmount?: InputMaybe<Scalars['Int']>;
  shippingService?: InputMaybe<Shipping_Service>;
};


export type MutationUpdateWalletCardStatusArgs = {
  id: Scalars['String'];
  status: Card_Status;
};


export type MutationUpdateWalletOrganizationArgs = {
  altName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  mailingAddress?: InputMaybe<FinancialAddressInput>;
};


export type MutationUpgradeToWalletUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationUserAssociateArgs = {
  orgId: Scalars['ID'];
  product: Product;
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUserAssociationAccessArgs = {
  orgId: Scalars['ID'];
  product: Product;
  userId: Scalars['ID'];
};


export type MutationUserAssociationCreateArgs = {
  orgId: Scalars['ID'];
  product: Product;
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUserAssociationDeleteArgs = {
  orgId: Scalars['ID'];
  product: Product;
  userId: Scalars['ID'];
};


export type MutationUserChallengeUpdateArgs = {
  id: Scalars['String'];
  status: UserChallengeStatus;
};


export type MutationUserCreateArgs = {
  apps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<UserOccupation>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  snapRaiseId?: InputMaybe<Scalars['Int']>;
};


export type MutationUserEmailConfirmArgs = {
  code: Scalars['String'];
};


export type MutationUserFittingAddArgs = {
  fitting: UserFittingPreference;
};


export type MutationUserImpersonateArgs = {
  userId: Scalars['String'];
};


export type MutationUserInviteArgs = {
  email?: InputMaybe<Scalars['String']>;
  joincode?: InputMaybe<Scalars['String']>;
};


export type MutationUserInviteAcceptArgs = {
  inviteId?: InputMaybe<Scalars['String']>;
};


export type MutationUserPermissionsUpdateArgs = {
  negativePermissions: Array<UserPermissionAssignment>;
  permissions: Array<UserPermissionAssignment>;
  roleIds: Array<Scalars['String']>;
  userId: Scalars['String'];
};


export type MutationUserPhoneNumberConfirmArgs = {
  code: Scalars['String'];
};


export type MutationUserRefreshSessionArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationUserResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  transport?: InputMaybe<TransportEnum>;
  withLink?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserSignupArgs = {
  apps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  consumer?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  inviteId?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<UserOccupation>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
};


export type MutationUserSignupConfirmArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
  skip?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserSignupConfirmationResendArgs = {
  email: Scalars['String'];
  transport?: InputMaybe<TransportEnum>;
};


export type MutationUserUnassignParentArgs = {
  email?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
};


export type MutationUserUpdateArgs = {
  apps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<UserOccupation>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
};


export type MutationUserUpdatePasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationVaultDocumentGatewayUploadArgs = {
  documentBack?: InputMaybe<Scalars['String']>;
  documentFront: Scalars['String'];
  fileType: Scalars['String'];
  gateway: VaultFinancialProvider;
  stripeConnectAccountId?: InputMaybe<Scalars['String']>;
  stripePersonId?: InputMaybe<Scalars['String']>;
  type: VaultRequiredDocument;
  unitApplicationId?: InputMaybe<Scalars['String']>;
  vaultId: Scalars['ID'];
};


export type MutationVaultFinancialAccountCreateArgs = {
  stripeConnectAccountId: Scalars['String'];
};


export type MutationVaultKybCreateArgs = {
  address: VaultAddressInput;
  customerFacingName: Scalars['String'];
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  legalName: Scalars['String'];
  phoneNumber: Scalars['String'];
  structure: Kyb_Structure;
  taxId: Scalars['String'];
  type: Kyb_Type;
  url: Scalars['String'];
};


export type MutationVaultKybUpdateArgs = {
  address?: InputMaybe<VaultAddressUpdateInput>;
  customerFacingName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  legalName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Kyb_Structure>;
  taxId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Kyb_Type>;
  url?: InputMaybe<Scalars['String']>;
};


export type MutationVaultKycCreateArgs = {
  address: VaultAddressInput;
  director?: InputMaybe<Scalars['Boolean']>;
  dob: VaultDobInput;
  email: Scalars['String'];
  executive?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  owner?: InputMaybe<Scalars['Boolean']>;
  percentOwnership?: InputMaybe<Scalars['Int']>;
  phoneNumber: Scalars['String'];
  representative?: InputMaybe<Scalars['Boolean']>;
  ssn?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationVaultKycUpdateArgs = {
  address?: InputMaybe<VaultAddressUpdateInput>;
  director?: InputMaybe<Scalars['Boolean']>;
  dob?: InputMaybe<VaultDobInput>;
  email?: InputMaybe<Scalars['String']>;
  executive?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['Boolean']>;
  percentOwnership?: InputMaybe<Scalars['Int']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  representative?: InputMaybe<Scalars['Boolean']>;
  ssn?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationVaultStripeConnectAccountBankAccountDefaultSetArgs = {
  bankAccountId: Scalars['String'];
  stripeConnectAccountId: Scalars['String'];
};


export type MutationVaultStripeConnectAccountBankAccountDeleteArgs = {
  bankAccountId: Scalars['String'];
  stripeConnectAccountId: Scalars['String'];
};


export type MutationVaultStripeConnectAccountCreateArgs = {
  vaultKybId: Scalars['ID'];
};


export type MutationVaultStripeConnectAccountPaymentMethodAttachArgs = {
  paymentMethodId: Scalars['String'];
  stripeConnectAccountId: Scalars['String'];
};


export type MutationVaultStripeConnectAccountPayoutFrequencySetArgs = {
  payoutInterval: VaultPayoutInterval;
  stripeConnectAccountId: Scalars['String'];
};


export type MutationVaultStripeConnectAccountUpdateArgs = {
  stripeConnectAccountId: Scalars['String'];
  vaultKybId: Scalars['ID'];
};


export type MutationVaultStripePersonCreateArgs = {
  stripeConnectAccountId: Scalars['String'];
  vaultKycId: Scalars['ID'];
};


export type MutationVaultStripePersonDeleteArgs = {
  stripeConnectAccountId: Scalars['String'];
  stripePersonId: Scalars['String'];
};


export type MutationVaultStripePersonUpdateArgs = {
  stripeConnectAccountId: Scalars['String'];
  stripePersonId: Scalars['String'];
  vaultKycId: Scalars['ID'];
};


export type MutationVaultUnitBusinessApplicationAccountCreateArgs = {
  vaultBeneficiaryOwnersKycIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vaultKybId: Scalars['ID'];
  vaultOwnerKycId: Scalars['ID'];
};


export type MutationVaultUnitDepositAccountCreateArgs = {
  customerId: Scalars['ID'];
};


export type MutationVehicleCreateArgs = {
  input?: InputMaybe<CreateVehicleInput>;
};


export type MutationVehicleDeleteArgs = {
  input?: InputMaybe<DeleteVehicleInput>;
};


export type MutationVehicleModifyArgs = {
  input?: InputMaybe<ModifyVehicleInput>;
};


export type MutationWorkerDeleteManyArgs = {
  input?: InputMaybe<DeleteManyWorkerInput>;
};


export type MutationWorkerPoolCreateArgs = {
  input?: InputMaybe<CreateWorkerPool>;
};


export type MutationWorkerPoolDeleteArgs = {
  input?: InputMaybe<DeleteWorkerPoolInput>;
};


export type MutationWorkerPoolModifyArgs = {
  input?: InputMaybe<ModifyWorkerPoolInput>;
};


export type MutationWorkerUpsertManyArgs = {
  input?: InputMaybe<UpsertManyWorkersInput>;
};


export type MutationWorkersUpsertArgs = {
  input?: InputMaybe<Array<InputMaybe<UpsertWorkersInput>>>;
};

export type MutationError = {
  __typename?: 'MutationError';
  message: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  errors?: Maybe<Array<Maybe<MutationError>>>;
  properties?: Maybe<OrgsProperties>;
  success: Scalars['Boolean'];
};

export type Notice = {
  __typename?: 'Notice';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  id: Scalars['Int'];
  isUrgent?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type NoticeCreateInput = {
  body?: InputMaybe<Scalars['String']>;
  isUrgent?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NoticeDeleteInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NoticeModifyInput = {
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  isUrgent?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Official = {
  __typename?: 'Official';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_name?: Maybe<Scalars['String']>;
  offic_id?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  received?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  ssn?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  voucher_number?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
  worker_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type OfficialAssignmentsReturn = {
  __typename?: 'OfficialAssignmentsReturn';
  grand_total?: Maybe<Scalars['String']>;
  official_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  officials?: Maybe<Array<Maybe<TransformedOfficialAssignment>>>;
  total?: Maybe<Array<Maybe<Total>>>;
};

export type OfficialByIdInput = {
  id: Scalars['Int'];
};

export type OfficialDuty = {
  __typename?: 'OfficialDuty';
  duty?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
};

export type OfficialPool = {
  __typename?: 'OfficialPool';
  Address?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  First?: Maybe<Scalars['String']>;
  Home_Phone?: Maybe<Scalars['String']>;
  ID: Scalars['String'];
  Last?: Maybe<Scalars['String']>;
  SSN?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Work_Phone?: Maybe<Scalars['String']>;
  Zip?: Maybe<Scalars['String']>;
  cell_phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  formattedSSN?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  vendor_number?: Maybe<Scalars['String']>;
};

export type OfficialSchedules = {
  __typename?: 'OfficialSchedules';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  bus_departure_location?: Maybe<Scalars['String']>;
  bus_early_dismissal_time?: Maybe<Scalars['String']>;
  bus_estimated_return_time?: Maybe<Scalars['String']>;
  bus_time?: Maybe<Scalars['String']>;
  cancellation_status?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  official_address?: Maybe<Scalars['String']>;
  official_address_city?: Maybe<Scalars['String']>;
  official_address_state?: Maybe<Scalars['String']>;
  official_address_zip?: Maybe<Scalars['String']>;
  official_duty?: Maybe<Scalars['String']>;
  official_email?: Maybe<Scalars['String']>;
  official_first_name?: Maybe<Scalars['String']>;
  official_home_phone?: Maybe<Scalars['String']>;
  official_id?: Maybe<Scalars['String']>;
  official_last_name?: Maybe<Scalars['String']>;
  official_paid?: Maybe<Scalars['String']>;
  official_received?: Maybe<Scalars['String']>;
  official_row_id?: Maybe<Scalars['String']>;
  official_salary?: Maybe<Scalars['String']>;
  official_work_phone?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type OnException = {
  __typename?: 'OnException';
  exceptionCode?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Opponent = {
  __typename?: 'Opponent';
  Address?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  SchoolCode?: Maybe<Scalars['String']>;
  SchoolName?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Zip?: Maybe<Scalars['String']>;
  ad_name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  nces_id?: Maybe<Scalars['String']>;
  non_school?: Maybe<Scalars['Boolean']>;
};

export type OrderFilterInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderBySort?: InputMaybe<Scalars['String']>;
  scopeId: Scalars['Int'];
  searchBy?: InputMaybe<Scalars['String']>;
  searchValue?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type OrderGraphInput = {
  interval?: InputMaybe<Scalars['Int']>;
  scopeId: Scalars['Int'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  itemId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  parentItemId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export enum OrderStatus {
  Approved = 'APPROVED',
  Complete = 'COMPLETE',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED',
  RequireApproval = 'REQUIRE_APPROVAL'
}

export enum OrderType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrdersFilter = {
  __typename?: 'OrdersFilter';
  orders?: Maybe<Array<Maybe<MagentoOrder>>>;
  pagination?: Maybe<SdPagination>;
};

export type OrdersFilterUnionType = OnException | OrdersFilter;

export type OrdersSummary = {
  __typename?: 'OrdersSummary';
  baseSales?: Maybe<Scalars['Float']>;
  complete?: Maybe<Scalars['BigInt']>;
  processing?: Maybe<Scalars['BigInt']>;
  sales?: Maybe<Scalars['Float']>;
  scopeId?: Maybe<Scalars['BigInt']>;
  shipped?: Maybe<Scalars['BigInt']>;
};

export type OrdersSummaryUnionType = OnException | OrdersSummary;

export type Org = {
  __typename?: 'Org';
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<Scalars['JSONObject']>;
  finAccts?: Maybe<Array<Maybe<FinancialAcctNode>>>;
  id: Scalars['ID'];
  migrated?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Org>;
  parentId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type OrgFieldsArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum OrgType {
  Booster = 'BOOSTER',
  Business = 'BUSINESS',
  District = 'DISTRICT',
  Foundation = 'FOUNDATION',
  Program = 'PROGRAM',
  Pta = 'PTA',
  School = 'SCHOOL',
  Team = 'TEAM'
}

export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']>;
  altName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inviteEmail?: Maybe<Scalars['String']>;
  last4Tin?: Maybe<Scalars['String']>;
  mailingAddress?: Maybe<FinancialAddress>;
  modId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nces?: Maybe<Scalars['String']>;
  physicalAddress?: Maybe<FinancialAddress>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  tin?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export enum OrganizationFilterEnum {
  Pending = 'pending'
}

export type OrganizationSearchParams = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrgsProperties = {
  __typename?: 'OrgsProperties';
  acctId?: Maybe<Scalars['ID']>;
  applicationId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  finAcctId?: Maybe<Scalars['ID']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  internal?: Maybe<Scalars['Boolean']>;
  isBeneficialOwner?: Maybe<Scalars['Boolean']>;
  isContact?: Maybe<Scalars['Boolean']>;
  isPrincipal?: Maybe<Scalars['Boolean']>;
  isRepresentative?: Maybe<Scalars['Boolean']>;
  kybId?: Maybe<Scalars['ID']>;
  kycId?: Maybe<Scalars['ID']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  migrated?: Maybe<Scalars['DateTime']>;
  orgId?: Maybe<Scalars['ID']>;
  parentId?: Maybe<Scalars['ID']>;
  personId?: Maybe<Scalars['ID']>;
  processor?: Maybe<Processor>;
  roleId?: Maybe<Scalars['ID']>;
  status?: Maybe<FinAcctStatus>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrgsSearchPaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type OrgsSearchResponse = {
  __typename?: 'OrgsSearchResponse';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrevious?: Maybe<Scalars['Boolean']>;
  orgs?: Maybe<Array<Maybe<Org>>>;
  total?: Maybe<Scalars['Int']>;
};

export type OrgsSearchWhereInput = {
  /** List of organization ids to filter from. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** The string to search in name of organization. */
  nameIncludes?: InputMaybe<Scalars['String']>;
  /** Organization type. Valid values are "Booster" | "Club" | "District" | "Program" | "School". */
  orgTypes?: InputMaybe<Array<OrgType>>;
  /** Allow to search any properties via JSON query. The key will auto convert to snake_case. */
  properties?: InputMaybe<Scalars['JSON']>;
};

export type OtkFundraiserProduct = {
  __typename?: 'OtkFundraiserProduct';
  /** This otk item image will include the fundraiser logo. */
  dynamicImage?: Maybe<Scalars['String']>;
  incentives?: Maybe<OtkProduct>;
};

export type OtkParticipantData = {
  __typename?: 'OtkParticipantData';
  id: Scalars['ID'];
  incentives?: Maybe<OtkProduct>;
  size?: Maybe<Scalars['String']>;
};

export type OtkProduct = {
  __typename?: 'OtkProduct';
  fitting?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** This is the base image for the otk item. It will not include the fundraiser logo. */
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

export enum Prefund_Status {
  Active = 'Active',
  Closed = 'Closed',
  Pending = 'Pending'
}

export enum PagesNameEnum {
  AboutUs = 'AboutUs',
  Mission = 'Mission',
  Recruitment = 'Recruitment',
  SchoolDirections = 'SchoolDirections',
  Sponsors = 'Sponsors',
  Staff = 'Staff'
}

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Participant = {
  __typename?: 'Participant';
  campaignId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** See CampaignMembership for details */
export type ParticipantCampaign = {
  __typename?: 'ParticipantCampaign';
  basicStatus: BasicCampaignStatus;
  campaignDates?: Maybe<CampaignDates>;
  campaignGoal?: Maybe<Scalars['Int']>;
  donationsRaised?: Maybe<ParticipantDonationsRaised>;
  /** Getting donor email addresses adds time to your query */
  donorEmailAddresses?: Maybe<DonorEmailAddresses>;
  donorEmailData?: Maybe<Array<Maybe<DonorEmailData>>>;
  donorPersonListEntries?: Maybe<Array<Maybe<DonorPersonListEntry>>>;
  /** Getting donor phone numbers adds time to your query */
  donorPhoneNumbers?: Maybe<Array<Maybe<DonationInviteSmsData>>>;
  fundraiserRewardLevelsCount?: Maybe<FundraiserRewardLevelsCount>;
  galleryItems?: Maybe<GalleryItems>;
  group?: Maybe<ParticipantGroup>;
  id: Scalars['ID'];
  isCoparticipant?: Maybe<Scalars['Boolean']>;
  isOTKEnabled?: Maybe<Scalars['Boolean']>;
  isRewardsEnabled?: Maybe<Scalars['Boolean']>;
  isTopEarner: Scalars['Boolean'];
  joinCode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  newStack_participantFundraiserLink?: Maybe<Scalars['String']>;
  otk?: Maybe<Array<Maybe<OtkParticipantData>>>;
  participantGoal?: Maybe<Scalars['Int']>;
  participantGuardianEmails?: Maybe<ParticipantGuardianEmail>;
  participantRewardsData?: Maybe<Array<Maybe<ParticipantRewardsData>>>;
  primaryColor: Scalars['String'];
  raiseUserId?: Maybe<Scalars['Int']>;
  raiseUserJoinedAt?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status: CampaignStatus;
  userFitting?: Maybe<UserFitting>;
};

export type ParticipantCheer = {
  __typename?: 'ParticipantCheer';
  anonymous?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  donorMessage?: Maybe<Scalars['String']>;
  donorName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName?: Maybe<Scalars['String']>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type ParticipantCheerWall = {
  __typename?: 'ParticipantCheerWall';
  createdAt?: Maybe<Scalars['DateTime']>;
  donorMessage?: Maybe<Scalars['String']>;
  donorName?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type ParticipantCheerwall = {
  __typename?: 'ParticipantCheerwall';
  cheers?: Maybe<Array<Maybe<ParticipantCheer>>>;
  count?: Maybe<Scalars['Int']>;
};

export type ParticipantDonationLinkResult = {
  __typename?: 'ParticipantDonationLinkResult';
  participantDonationLink?: Maybe<Scalars['String']>;
};

export type ParticipantDonations = {
  __typename?: 'ParticipantDonations';
  count?: Maybe<Scalars['Int']>;
  donations?: Maybe<Array<Maybe<ParticipantCheerWall>>>;
};

export type ParticipantDonationsRaised = {
  __typename?: 'ParticipantDonationsRaised';
  numberOfDonations: Scalars['Int'];
  subtotalCents: Scalars['Int'];
};

export type ParticipantGroup = {
  __typename?: 'ParticipantGroup';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type ParticipantGuardianDonorEntry = {
  __typename?: 'ParticipantGuardianDonorEntry';
  fundraiserId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ParticipantGuardianEmail = {
  __typename?: 'ParticipantGuardianEmail';
  guardianEmail?: Maybe<Scalars['String']>;
  secondaryGuardianEmail?: Maybe<Scalars['String']>;
};

export type ParticipantGuardianEmailUpdate = {
  __typename?: 'ParticipantGuardianEmailUpdate';
  id?: Maybe<Scalars['Int']>;
};

export type ParticipantGuardianReturn = {
  __typename?: 'ParticipantGuardianReturn';
  entry?: Maybe<Array<ParticipantGuardianDonorEntry>>;
};

export type ParticipantList = {
  __typename?: 'ParticipantList';
  count?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
  list: Array<Maybe<Participant>>;
};

export type ParticipantRewardsData = {
  __typename?: 'ParticipantRewardsData';
  id?: Maybe<Scalars['Int']>;
  incentives?: Maybe<FundraiserRewardsProduct>;
  size?: Maybe<Scalars['String']>;
};

export type ParticipantSsoid = {
  __typename?: 'ParticipantSSOID';
  userDirectoryId?: Maybe<Scalars['String']>;
};

export type ParticipantTextTemplate = {
  __typename?: 'ParticipantTextTemplate';
  guardianTemplate?: Maybe<Scalars['String']>;
  participantTemplate?: Maybe<Scalars['String']>;
};

export type ParticipantTopDonation = {
  __typename?: 'ParticipantTopDonation';
  donorName?: Maybe<Scalars['String']>;
  subtotalCents?: Maybe<Scalars['Int']>;
};

export type ParticipantsInfo = {
  __typename?: 'ParticipantsInfo';
  count?: Maybe<Scalars['Int']>;
  loggedInCount?: Maybe<Scalars['Int']>;
  withAtLeastOneDonation?: Maybe<Scalars['Int']>;
  withAtLeastTwentyInvites?: Maybe<Scalars['Int']>;
};

export type Payee = {
  __typename?: 'Payee';
  address: PayeeAddress;
  name: Scalars['String'];
};

export type PayeeAddress = {
  __typename?: 'PayeeAddress';
  apartment?: Maybe<Scalars['String']>;
  attention?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  clientSecret?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['Boolean']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  billingDetails?: Maybe<BillingDetails>;
  card?: Maybe<CardDetails>;
  id?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  paymentMethodId?: Maybe<Scalars['String']>;
  sponsorId?: Maybe<Scalars['String']>;
};

export type PaymentsApiCreateRefundResponse = {
  __typename?: 'PaymentsApiCreateRefundResponse';
  applicationFeeRefundAmount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  refundApplicationFee?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type PaymentsApiCustomerInput = {
  email: Scalars['String'];
  stripeEnv?: InputMaybe<StripeEnv>;
};

export type PaymentsApiCustomerPaymentMethod = {
  __typename?: 'PaymentsApiCustomerPaymentMethod';
  billingAddress?: Maybe<PaymentsApiPmAddress>;
  brand?: Maybe<Scalars['String']>;
  expiration?: Maybe<PaymentsApiPmExpiration>;
  id: Scalars['String'];
  identifier: Scalars['String'];
  type: PaymentsApiCustomerPaymentMethodType;
  zipCode?: Maybe<Scalars['String']>;
};

export enum PaymentsApiCustomerPaymentMethodType {
  Bank = 'BANK',
  Card = 'CARD',
  Other = 'OTHER'
}

export type PaymentsApiCustomerResponse = {
  __typename?: 'PaymentsApiCustomerResponse';
  customerId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  paymentMethods: Array<Maybe<PaymentsApiCustomerPaymentMethod>>;
};

export type PaymentsApiDetachPaymentMethodInput = {
  paymentMethodId: Scalars['String'];
  stripeEnv?: InputMaybe<StripeEnv>;
};

export type PaymentsApiDetachPaymentMethodResponse = {
  __typename?: 'PaymentsApiDetachPaymentMethodResponse';
  paymentMethodId: Scalars['String'];
  stripeEnv: StripeEnv;
};

export type PaymentsApiPmAddress = {
  __typename?: 'PaymentsApiPMAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type PaymentsApiPmExpiration = {
  __typename?: 'PaymentsApiPMExpiration';
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type PaymentsApiPaymentIput = {
  amount: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  finalDestination: Scalars['String'];
  idempotencyKey?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSONObject']>;
  paymentMethodId: Scalars['String'];
  snapAmount?: InputMaybe<Scalars['Int']>;
  snapId: Scalars['String'];
  stripeEnv?: InputMaybe<StripeEnv>;
};

export type PaymentsApiPaymentResponse = {
  __typename?: 'PaymentsApiPaymentResponse';
  amount: Scalars['Int'];
  id: Scalars['String'];
  paymentMethodId: Scalars['String'];
  snapAmount: Scalars['Int'];
  snapId: Scalars['String'];
  stripeEnv: StripeEnv;
};

export type PaymentsApiRefundInput = {
  amount?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['JSONObject']>;
  refundApplicationFee?: InputMaybe<Scalars['Boolean']>;
  stripeEnv?: InputMaybe<StripeEnv>;
  transactionId: Scalars['String'];
};

export type Payout = Check | Deposit;

export type Permission = {
  __typename?: 'Permission';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PointActivityFilter = {
  __typename?: 'PointActivityFilter';
  activities?: Maybe<Array<Maybe<MagentoPointActivity>>>;
  pagination?: Maybe<SdPagination>;
};

export type PointActivityFilterUnionType = OnException | PointActivityFilter;

export type PointsActivityFilterInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderBySort?: InputMaybe<Scalars['String']>;
  scopeId: Scalars['Int'];
  searchBy?: InputMaybe<Scalars['String']>;
  searchValue?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

export type PostponeUnpostponeResponse = {
  __typename?: 'PostponeUnpostponeResponse';
  affected_events?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PotentialCustomersDeals = {
  __typename?: 'PotentialCustomersDeals';
  activity?: Maybe<Scalars['String']>;
  curricularType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Prefund = {
  __typename?: 'Prefund';
  card?: Maybe<Card>;
  cardType?: Maybe<Card_Type>;
  createdAt?: Maybe<Scalars['String']>;
  fundraiser: Fundraiser;
  id: Scalars['ID'];
  organization: Organization;
  prefundAmount: Scalars['Int'];
  shippingService?: Maybe<Shipping_Service>;
  status: Prefund_Status;
};

export type PrefundList = {
  __typename?: 'PrefundList';
  list: Array<Prefund>;
  pageInfo?: Maybe<PaginationInfo>;
};

export type PrefundSearchParams = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<InputMaybe<Prefund_Status>>>;
};

/** Information of a emails scheduled for release */
export type PreloadEmailSchedule = {
  __typename?: 'PreloadEmailSchedule';
  /** The date and time for release */
  dateTime?: Maybe<Scalars['DateTime']>;
  /** The campaign id */
  fundraiserId?: Maybe<Scalars['Int']>;
  /** The timezone for scheduled release */
  timezone?: Maybe<Scalars['String']>;
};

/** Information of premade email templates */
export type PremadeContactTemplate = {
  __typename?: 'PremadeContactTemplate';
  /** The message of the template. Plain text only */
  message?: Maybe<Scalars['String']>;
  /** The name of the template */
  name?: Maybe<Scalars['String']>;
  /** The subject of the template */
  subject?: Maybe<Scalars['String']>;
  templateMedium?: Maybe<ContactTemplateMedium>;
  /** The type of template */
  templateType?: Maybe<ContactTemplateType>;
};

export type Preparation = {
  __typename?: 'Preparation';
  duty?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_deleted?: Maybe<Scalars['Boolean']>;
  qty?: Maybe<Scalars['String']>;
};

export type PreparationByIdInput = {
  id: Scalars['Int'];
};

export type PreparationReport = {
  __typename?: 'PreparationReport';
  comments?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  prep?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['String']>;
};

export type PreparationSheet = {
  __typename?: 'PreparationSheet';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  preparations?: Maybe<Array<Maybe<PreparationReport>>>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

/** Primary Group Leader The primary group leader is the main contact for a fundraiser The association is not direct with a user but made through email */
export type PrimaryGroupLeader = {
  __typename?: 'PrimaryGroupLeader';
  /** Signifies user is primary group leader. Extra query. */
  currentUserIsPrimary: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export enum Processor {
  Stripe = 'STRIPE',
  Unit = 'UNIT'
}

export enum Product {
  Connect = 'CONNECT',
  Insights = 'INSIGHTS',
  Manage = 'MANAGE',
  Raise = 'RAISE',
  Spend = 'SPEND',
  Sponsor = 'SPONSOR',
  Store = 'STORE'
}

export type ProductColor = {
  __typename?: 'ProductColor';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  swatch?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type ProductGroupAndColors = {
  __typename?: 'ProductGroupAndColors';
  attributeId?: Maybe<Scalars['Int']>;
  childs?: Maybe<Array<Maybe<ProductColor>>>;
  enabled?: Maybe<Scalars['Int']>;
  groupCode?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  visual?: Maybe<Scalars['String']>;
};

export type PublicFundraiserData = {
  __typename?: 'PublicFundraiserData';
  alternateColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  fanStore?: Maybe<Scalars['Boolean']>;
  goal?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  incStore?: Maybe<Scalars['Boolean']>;
  joinCode?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  participantGoal?: Maybe<Scalars['Int']>;
  personalMessage?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  programLeader?: Maybe<Scalars['String']>;
  programType?: Maybe<Scalars['String']>;
  secondaryColor?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  whyDonations?: Maybe<Scalars['String']>;
};

export type PublicParticipantData = {
  __typename?: 'PublicParticipantData';
  firstName?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  accountTransactions: Array<Maybe<Transaction>>;
  apiReady?: Maybe<Scalars['Boolean']>;
  authenticationFlow?: Maybe<AuthenticationFlow>;
  busSchedules?: Maybe<Array<Maybe<BusSchedules>>>;
  /** Return startDateTime and endDateTime as formatted UTC strings */
  campaignDates?: Maybe<CampaignDates>;
  campaignHistoryListGet?: Maybe<Array<Maybe<CampaignHistoryList>>>;
  campaignKyc?: Maybe<CampaignKyc>;
  /** Query uses Users JWT to find their Memberships See CampaignMembership type for details */
  campaignMemberships: Array<CampaignMembership>;
  /** List of saved search filters for campaigns of current user. */
  campaignSearchFiltersGet?: Maybe<Array<Maybe<CampaignSearchFilter>>>;
  /** List campaigns based on logged-in user */
  campaigns?: Maybe<CampaignList>;
  /** This query is only to be used by user-directory to hide or show the "Help Fundraise" link for Parent/Guardian */
  childrensFundraiserSplitStatus?: Maybe<Scalars['JSON']>;
  competitionList?: Maybe<Array<Maybe<TransformedEventReturn>>>;
  consumers?: Maybe<Array<Maybe<Consumer>>>;
  currentPrefunds?: Maybe<PrefundList>;
  currentWalletOrganization?: Maybe<Organization>;
  /** List of contact templates based on current user */
  customContactTemplatesGet?: Maybe<Array<Maybe<CustomContactTemplates>>>;
  dailyCalendarBusSchedules?: Maybe<TransformedDailyCalendarBusSchedule>;
  dailyCalendarEvents?: Maybe<Array<Maybe<TransformedDailyCalendarEventReturn>>>;
  dailyCalendarOfficials?: Maybe<TransformedDailyCalendarOfficials>;
  dailyCalendarPreparations?: Maybe<TransformedDailyCalendarPreparation>;
  dailyCalendarWorkers?: Maybe<TransformedDailyCalendarWorkers>;
  daySchedules?: Maybe<Array<Maybe<CommonSchedules>>>;
  donationLevelsByFundraiserId: Array<DonationLevel>;
  donationTopEarner?: Maybe<DonationTopEarner>;
  /** Blocking this query for now, however it can be used securely within campaign memberships This query will work for both group leaders & participants */
  donorEmailAddresses?: Maybe<DonorEmailAddresses>;
  donorEmailData?: Maybe<Array<Maybe<DonorEmailData>>>;
  donorPersonListEntries?: Maybe<Array<Maybe<DonorPersonListEntry>>>;
  donorPhoneNumbers?: Maybe<DonorPhoneNumbers>;
  donorsParticipantOTKIncentives?: Maybe<DonorsParticipantOtkIncentives>;
  /** List all activity types of campaigns. Used by Drive */
  driveActivityTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Get details of campaigns. This endpoint need to considered to combined with searchDriveCampaign endpoint */
  driveCampaignDetails?: Maybe<DriveCampaignDetails>;
  /** Get statistics of the set of campaigns returned by the filter. This endpoint are meant to be used with the searchDriveCampaigns endpoint. Arguments should be the same. */
  driveCampaignSearchStats?: Maybe<DriveCampaignSearchStatistics>;
  /** Show details of a specific event */
  driveEvent?: Maybe<DriveEvent>;
  /** List events */
  driveEvents?: Maybe<DriveEventResults>;
  driveGetListActivitiesAvailableList?: Maybe<DriveGetListPotentialCustomersReturn>;
  driveGetListActivitiesNotAvailableList?: Maybe<DriveGetListPotentialCustomersReturn>;
  driveGetListCurrentCustomersList?: Maybe<DriveGetListCurrentCustomersReturn>;
  driveGetListHubspotProspectsList?: Maybe<DriveGetlistProspectsReturn>;
  driveGetListOrgList?: Maybe<DriveOrgListResults>;
  /** Returns Organization Summary information of single organization */
  driveGetListOrganizationSummary?: Maybe<DriveGetListOrganizationSummaryReturn>;
  /** @deprecated changed name to driveGetListActivitiesAvailableList */
  driveGetListPotentialCustomersList?: Maybe<DriveGetListPotentialCustomersReturn>;
  driveGetListWinbackList?: Maybe<DriveGetlistWinbackReturn>;
  /** Return all tracking of current user to specific organization in Drive's Get List app. */
  driveOrgUserTrackings?: Maybe<Array<Maybe<DriveOrgUserTrackingReturn>>>;
  /** List organization types used by Drive */
  driveOrganizationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List all salesreps */
  driveSalesreps?: Maybe<Array<Maybe<DriveAmSalesReps>>>;
  /** List all salesreps which had re-assigned any campaigns to current user. This endpoint is applicable for account-manager only. */
  driveSalesrepsByAccountManager?: Maybe<Array<Maybe<DriveAmSalesReps>>>;
  /** List all salesreps which managed by current user. This endpoint is applicable for sales manager only. */
  driveSalesrepsByManager?: Maybe<Array<Maybe<DriveAmSalesReps>>>;
  /**
   * Search Raise users by UserDirectory 's id
   * @deprecated Use UserDirectory 's users query instead
   */
  driveUsers?: Maybe<DriveUsersResult>;
  /** List Event-Tracker's venues */
  driveVenues?: Maybe<Array<Maybe<DriveVenue>>>;
  event: Event;
  eventCalendar?: Maybe<Array<Maybe<CommonCalendar>>>;
  eventContractItems?: Maybe<Array<Maybe<ContractItem>>>;
  eventOfficial: Official;
  eventOfficials?: Maybe<Array<Maybe<Official>>>;
  eventParticipants: EventParticipants;
  eventPreparations: EventPreparations;
  eventPreparationsByEvent?: Maybe<Array<Maybe<EventPreparations>>>;
  eventTransportDetailsByEventOrDates?: Maybe<Array<Maybe<EventTransportDetails>>>;
  eventWorker: Worker;
  eventWorkers?: Maybe<Array<Maybe<Worker>>>;
  eventWorkersByEvent?: Maybe<Array<Maybe<Worker>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  eventsParticipants?: Maybe<Array<Maybe<EventParticipants>>>;
  eventsPreparations?: Maybe<Array<Maybe<EventPreparations>>>;
  eventsTransportDetails?: Maybe<Array<Maybe<EventTransportDetails>>>;
  facilities?: Maybe<Array<Maybe<Facility>>>;
  facility: Facility;
  facilityCalendar?: Maybe<Array<Maybe<CommonCalendar>>>;
  facilityGrid?: Maybe<Array<Maybe<CommonGrid>>>;
  facilitySchedules?: Maybe<Array<Maybe<CommonSchedules>>>;
  family?: Maybe<Family>;
  feeReportSheets?: Maybe<Array<Maybe<CommonSheet>>>;
  /** Get all Financial Accounts that are associated with a Stripe Connect Account id */
  financialAcctAcctId: Array<FinancialAcctNode>;
  /** Get all Financial Accounts that are associated with an Org. If you are looking for Financial Accounts associated with a parent Org, please use the 'financialAcctRoot' query. */
  financialAcctOrg: Array<FinancialAcctNode>;
  /** Get all Financial Accounts that are associated with a parent Org. This includes parents of parents and all the way up the tree. This will NOT return the Financial Accounts for the target Org, please use the 'financialAcctOrg' query for specific Orgs. */
  financialAcctRoot: Array<FinancialAcctNode>;
  /** Get all User data associated with a single Financial Account. */
  financialAcctUsers: Array<FinancialAcctUser>;
  fundraiser?: Maybe<Fundraiser>;
  fundraiserCheerwall?: Maybe<FundraiserCheerwall>;
  fundraiserDonations?: Maybe<FundraiserDonations>;
  /** resourceId is the fundraiserId */
  fundraiserEntityResources?: Maybe<FundraiserEntityResource>;
  fundraiserGroups?: Maybe<Array<Maybe<FundraiserGroup>>>;
  fundraiserRaisedAmount?: Maybe<FundraiserRaisedAmount>;
  fundraiserRewardLevelsCount?: Maybe<FundraiserRewardLevelsCount>;
  fundraiserRewardsDetails?: Maybe<Array<Maybe<FundraiserRewardsProduct>>>;
  fundraiserTopDonation?: Maybe<FundraiserTopDonation>;
  fundraiserUserRole?: Maybe<FundraiserUserRole>;
  galleryItems?: Maybe<GalleryItems>;
  getCampaignRoster?: Maybe<Array<Maybe<Roster>>>;
  getFundraiserUserID?: Maybe<Scalars['Int']>;
  getInsightsUserOrgs: Array<Maybe<InsOrg>>;
  getParticipantDonationLinkData?: Maybe<ParticipantDonationLinkResult>;
  getSalesRepHome: HmSalesRep;
  getUserSavedSalesRep: UserSavedRep;
  /** List of group leaders */
  groupLeaders?: Maybe<GroupLeaderList>;
  helpDocumentsList?: Maybe<Array<Maybe<Scalars['String']>>>;
  infoSheets?: Maybe<Array<Maybe<CommonSheet>>>;
  insightsCampaignDonations: Array<Maybe<InsCampaignDonation>>;
  insightsCampaignRaiseEntityInfo: InsCampaignRaiseEntityInfo;
  insightsCampaignSettlements: Array<Maybe<InsCampaignSettlement>>;
  insightsCampaignsData: InsCampaignsData;
  insightsDonorParticipantContacts: Array<Maybe<InsDonorParticipantContact>>;
  insightsOrgsCampaignsSummary: Array<Maybe<InsOrgCampaignSummary>>;
  insightsPreApprovalTokenValidation: Array<Maybe<InsPreApprovedContact>>;
  insightsPreApprovedContacts: Array<Maybe<InsPreApprovedContact>>;
  insightsPreApprovedContactsEmailTest: Array<Maybe<InsEmailTestPreApprovedContactResult>>;
  insightsSalesRepInfo?: Maybe<InsSalesRepInfo>;
  insightsUserPreferences?: Maybe<InsightsUserPreference>;
  invite?: Maybe<InviteInfo>;
  invites?: Maybe<Array<Maybe<InviteList>>>;
  level: Level;
  levelGrid?: Maybe<Array<Maybe<CommonGrid>>>;
  levels?: Maybe<Array<Maybe<Level>>>;
  /** Retrieves a specific coach by its ID. */
  manageCoach?: Maybe<ManageCoach>;
  /** Retrieves a list of coaches based on the provided filter. */
  manageCoachList?: Maybe<ManageCoachList>;
  /** Retrieves a specific event by its ID. */
  manageEvent?: Maybe<ManageEvent>;
  /** Retrieves a list of events based on the provided filter. */
  manageEventList?: Maybe<ManageEventList>;
  /** Get a manage organization by web folder */
  manageOrganization?: Maybe<ManageOrganization>;
  /** Get a list of all manage organizations */
  manageOrganizationList?: Maybe<ManageOrganizationList>;
  managePlayerList?: Maybe<ManagePlayerList>;
  manageProgram?: Maybe<ManageProgram>;
  manageProgramList?: Maybe<ManageProgramList>;
  manageSeason?: Maybe<ManageSeason>;
  manageSeasonList?: Maybe<ManageSeasonList>;
  manageSportDetail?: Maybe<ManageSportDetails>;
  manageSportDetailsList?: Maybe<ManageSportDetailsList>;
  manageUser?: Maybe<ManageUser>;
  manageUsersList?: Maybe<ManageUsersList>;
  me?: Maybe<UserWithPermissions>;
  notices?: Maybe<Array<Maybe<Notice>>>;
  officialAssignments?: Maybe<OfficialAssignmentsReturn>;
  officialDuties?: Maybe<Array<Maybe<OfficialDuty>>>;
  officialDuty?: Maybe<OfficialDuty>;
  officialListsReport?: Maybe<Array<Maybe<EventOfficialReport>>>;
  officialPoolById: OfficialPool;
  officialPools?: Maybe<Array<Maybe<OfficialPool>>>;
  officialSchedules?: Maybe<Array<Maybe<OfficialSchedules>>>;
  opponent: Opponent;
  opponentEventsApplyFilters?: Maybe<Array<Maybe<EventsOpponent>>>;
  opponentSchedules?: Maybe<Array<Maybe<CommonSchedules>>>;
  opponents?: Maybe<Array<Maybe<Opponent>>>;
  /** Get Org Node properties by its Org id. If hierarchy is set to true, it will return all the children of the organization, but NOT the target Org. 'fields' returns JSON of all remaining properties. You can optionally limit this to specific fields by passing in an array of keys. Example: "names": [ "country", "zip_code" ] */
  org?: Maybe<Array<Maybe<Org>>>;
  /** Get an Org id by its Raise id. This ONLY returns an Org id, not the full Org Node. */
  orgId?: Maybe<Scalars['String']>;
  /** Get all Users that are associated with an Org and a specific product. This includes role and a boolean if the user is internal (snap-raise or snapraise email). */
  orgUserAssociations?: Maybe<Array<Maybe<UserNode>>>;
  /** Fuzzy search for Orgs by their name property. */
  orgs?: Maybe<Array<Maybe<Org>>>;
  /** If you are simply searching by name property, please use the 'orgs' query. This advanced search searches by type or specific properties. Default limit is 25 items. */
  orgsSearch?: Maybe<OrgsSearchResponse>;
  /** This query will return OTK Fundraiser Product details */
  otkFundraiserData?: Maybe<Array<Maybe<OtkFundraiserProduct>>>;
  /** This query will return OTK Participant details */
  otkParticipantDetails?: Maybe<Array<Maybe<OtkParticipantData>>>;
  /** This query will return the most recent OTK Participant details */
  otkPastParticipantDetails?: Maybe<Array<Maybe<OtkParticipantData>>>;
  participantCheerwall?: Maybe<ParticipantCheerwall>;
  participantDonations?: Maybe<ParticipantDonations>;
  participantDonationsRaised: ParticipantDonationsRaised;
  /** This query will return the incentives a Participant earned for a given fundraiser */
  participantEarnedRewardsDetails?: Maybe<Array<Maybe<ParticipantRewardsData>>>;
  participantGroup?: Maybe<ParticipantGroup>;
  participantGuardianEmailQuery?: Maybe<ParticipantGuardianEmail>;
  /** This query will return Participant Rewards details */
  participantRewardsDetails?: Maybe<Array<Maybe<ParticipantRewardsData>>>;
  participantSSOId?: Maybe<ParticipantSsoid>;
  participantTextTemplate?: Maybe<ParticipantTextTemplate>;
  participantTopDonation?: Maybe<ParticipantTopDonation>;
  /** List of participants */
  participants?: Maybe<ParticipantList>;
  paymentsApiCustomer: PaymentsApiCustomerResponse;
  payouts: Array<Maybe<Payout>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  prefund?: Maybe<Prefund>;
  prefunds?: Maybe<PrefundList>;
  /** List of pre-made contact templates */
  premadeContactTemplatesGet?: Maybe<Array<Maybe<PremadeContactTemplate>>>;
  preparation: Preparation;
  preparationReportSheets?: Maybe<Array<Maybe<PreparationSheet>>>;
  preparations?: Maybe<Array<Maybe<Preparation>>>;
  /** This resolver is only for testing purposes at this time */
  primaryGroupLeader?: Maybe<PrimaryGroupLeader>;
  /** Identifier uses fundraiser join_code or slug */
  publicFundraiserData?: Maybe<PublicFundraiserData>;
  publicParticipantData?: Maybe<PublicParticipantData>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  schoolInfo: SchoolInfo;
  schoolInfos?: Maybe<Array<Maybe<SchoolInfo>>>;
  /** Search campaigns */
  searchDriveCampaigns?: Maybe<DriveCampaignList>;
  /** Search Raise's Organization. @Deprecated: should be replaced by Orgs API */
  searchDriveOrganizationsByName?: Maybe<DriveOrganizationList>;
  season: Season;
  seasonByYearAndTeam?: Maybe<Array<Maybe<Season>>>;
  seasonEventWizard?: Maybe<Array<Maybe<Event>>>;
  seasons?: Maybe<Array<Maybe<Season>>>;
  shipments: ShipmentResponse;
  spendAccountExport?: Maybe<ExportFile>;
  spendBudget?: Maybe<SpendBudgetResponse>;
  spendBudgetExport?: Maybe<ExportFile>;
  spendBudgets?: Maybe<SpendBudgetsResponse>;
  spendBudgetsProgramSummary?: Maybe<SpendBudgetSummaryResponse>;
  spendBudgetsSummary?: Maybe<SpendBudgetSummaryResponse>;
  spendCategories?: Maybe<SpendCategoryResponse>;
  spendDataForHome: HmSpendData;
  spendGroup?: Maybe<SpendGroup>;
  spendGroupBankAccounts?: Maybe<SpendBankAccountsResponse>;
  spendGroupBankLinkTokenCreate?: Maybe<SpendBankLinkCreateResponse>;
  spendGroupById?: Maybe<SpendGroup>;
  spendGroupDebitCards?: Maybe<SpendDebitCardResponse>;
  spendGroupRosterById?: Maybe<SpendRoster>;
  spendGroupRosters?: Maybe<SpendGroupRosterResponse>;
  spendGroups?: Maybe<SpendGroupResponse>;
  /** List groups with pagination/filtering and sorting. Valid sort.field: name, seasonStartDate, seasonEndDate, playerCount, paid, upcoming, pastDue, dueToday, processing, paymentScheduleStatus */
  spendGroupsFiltered?: Maybe<SpendGroupsResponse>;
  spendGroupsOverviewDashboard?: Maybe<GroupsOverviewDashboardResponse>;
  spendGuardianHighlight?: Maybe<SpendGuardianHighlight>;
  spendInvite?: Maybe<SpendInviteResponse>;
  spendInvites?: Maybe<SpendInviteResponse>;
  spendInvitesFiltered?: Maybe<SpendInviteResponse>;
  spendInvoiceById?: Maybe<SpendInvoice>;
  spendInvoices?: Maybe<SpendInvoiceResponse>;
  spendInvoicesExport?: Maybe<ExportFile>;
  spendInvoicesFiltered?: Maybe<SpendInvoiceResponse>;
  spendInvoicesMock?: Maybe<SpendMockInvoiceResponse>;
  spendOrganization?: Maybe<SpendOrganization>;
  spendOrganizationAccounts?: Maybe<SpendAccountResponse>;
  spendOrganizationBankAccounts?: Maybe<SpendBankAccountsResponse>;
  spendOrganizationBankLinkTokenCreate?: Maybe<SpendBankLinkCreateResponse>;
  spendOrganizationById?: Maybe<SpendOrganization>;
  spendOrganizationDebitCards?: Maybe<SpendDebitCardResponse>;
  spendOrganizations?: Maybe<SpendOrganizationsResponse>;
  spendPaginatedInvoices?: Maybe<SpendInvoiceResponse>;
  spendPaymentScheduleById?: Maybe<SpendPaymentSchedule>;
  spendPaymentSchedules?: Maybe<Array<Maybe<SpendPaymentSchedule>>>;
  spendPolicy?: Maybe<SpendPolicy>;
  spendRoleCurrent?: Maybe<SpendRole>;
  spendRoles?: Maybe<SpendRoleResponse>;
  spendRosters?: Maybe<SpendRosterResponse>;
  spendRostersFiltered?: Maybe<SpendRosterResponse>;
  spendSettings?: Maybe<SpendSettings>;
  spendTransaction?: Maybe<SpendBankTransactionResponse>;
  spendTransactionAttachment?: Maybe<TransactionAttachmentsResponse>;
  spendTransactionAttachmentsByPaymentId?: Maybe<TransactionAttachmentsResponse>;
  spendTransactionNotes?: Maybe<TransactionNotesResponse>;
  spendTransactionNotesByPaymentId?: Maybe<TransactionNotesResponse>;
  /** @deprecated Use spendTransactionsFiltered */
  spendTransactions?: Maybe<SpendBankTransactionsResponse>;
  spendTransactionsExport?: Maybe<ExportFile>;
  spendTransactionsFiltered?: Maybe<SpendBankTransactionsResponse>;
  spendUserAccountBearerToken?: Maybe<SpendAccountBearerTokenResponse>;
  spendUserBankAccounts?: Maybe<SpendBankAccountsResponse>;
  spendUserBankLinkTokenCreate?: Maybe<SpendBankLinkCreateResponse>;
  spendUserVerificationToken?: Maybe<SpendVerificationTokenResponse>;
  sponsor?: Maybe<Sponsor>;
  sponsorAssets?: Maybe<Assets>;
  sponsorCartAsset?: Maybe<SponsorsOnAssets>;
  sponsorCartAssets?: Maybe<Array<Maybe<Asset>>>;
  sponsorCountForAssets?: Maybe<AssetsCount>;
  sponsorDataForHome: HmSponsorData;
  sponsorDistrict: SponsorDistrict;
  sponsorDistricts?: Maybe<SponsorDistricts>;
  sponsorEnabledPaymentMethod?: Maybe<PaymentMethod>;
  sponsorIndustries?: Maybe<Array<Maybe<Industry>>>;
  sponsorInvitationCheckByMailId?: Maybe<Scalars['Boolean']>;
  sponsorPackageDetails?: Maybe<SponsoredSponsorShipGroup>;
  sponsorPaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  sponsorSchool: SponsorSchool;
  sponsorSchoolProgram: SponsorSchoolProgram;
  sponsorSchoolPrograms?: Maybe<SponsorSchoolPrograms>;
  sponsorSchoolUsers?: Maybe<Array<Maybe<Link>>>;
  sponsorSchools?: Maybe<SponsorSchools>;
  sponsorState?: Maybe<SponsorState>;
  sponsorStates?: Maybe<Array<Maybe<SponsorState>>>;
  sponsorSubDistrict: SponsorSubDistrict;
  sponsorSubDistricts?: Maybe<SponsorSubDistricts>;
  sponsorUsers?: Maybe<Array<Maybe<Links>>>;
  sponsoredSponsorshipGroups?: Maybe<SponsoredSponsorShipGroups>;
  sponsors?: Maybe<Sponsors>;
  sponsorshipGroup: SponsorshipGroup;
  sponsorshipGroupAccountLink?: Maybe<AccountLink>;
  sponsorshipGroupActivities?: Maybe<Array<Maybe<Activity>>>;
  sponsorshipGroupActivity?: Maybe<Activity>;
  sponsorshipGroupAsset: Asset;
  sponsorshipGroupAssetTypeValues?: Maybe<Array<Maybe<AssetTypeValue>>>;
  sponsorshipGroupAssetTypes?: Maybe<Array<Maybe<AssetType>>>;
  sponsorshipGroupAssets?: Maybe<Assets>;
  sponsorshipGroupInvites?: Maybe<Invites>;
  sponsorshipGroupOrders?: Maybe<SponsorshipGroupOnOrders>;
  sponsorshipGroupOrdersCSV?: Maybe<Scalars['String']>;
  sponsorshipGroupOrdersStats?: Maybe<SponsorshipGroupOrdersStats>;
  sponsorshipGroupPricingForCurrentYear?: Maybe<SumResponse>;
  sponsorshipGroupPrimaryContact?: Maybe<SponsorshipGroupUser>;
  sponsorshipGroups?: Maybe<SponsorshipGroups>;
  sponsorshipHistory?: Maybe<Array<Maybe<Packages>>>;
  sponsorshipOrders?: Maybe<SponsoredOrders>;
  sponsorshipPackages?: Maybe<MySponsorships>;
  storeAllBrands?: Maybe<StoreBrandsUnionType>;
  storeAllProductsGroupsAndColors?: Maybe<StoreProductGroupsAndColorsUnionType>;
  storeBestSeller?: Maybe<StoreBaseSellerUnionType>;
  storeByScopeId?: Maybe<MagentoStoreUnionType>;
  storeDataForHome: HmStore;
  storeEarnedPointsGraph?: Maybe<MagentoStorePointsEarnedUnionType>;
  storeGLCampaigns?: Maybe<StoreUserCampaignUnionType>;
  storeGLParticipants?: Maybe<StoreUserParticipantUnionType>;
  storeOrderFilter?: Maybe<OrdersFilterUnionType>;
  storeOrderItemImages?: Maybe<StoreOrderItemsUnionType>;
  storeOrderSalesGraph?: Maybe<StoreOrderSalesGraphUnionType>;
  storeOrderSummary?: Maybe<OrdersSummaryUnionType>;
  storeOrdersCsv?: Maybe<MagentoOrderUnionType>;
  storePointActivityFilter?: Maybe<PointActivityFilterUnionType>;
  storePointsActivityCsv?: Maybe<MagentoPointActivityUnionType>;
  storeSubscribedUser?: Maybe<StoreSubscribedUserUnionType>;
  storeTickets?: Maybe<StoreTicketUnionType>;
  storeUserDetails?: Maybe<StoreUserInfoUnionType>;
  storesByCampaignIds?: Maybe<StoreFilterUnionType>;
  storesByGLEmail?: Maybe<StoreFilterUnionType>;
  storesSummaryByCampaignIds?: Maybe<StoresSummaryUnionType>;
  storesSummaryByGLEmail?: Maybe<StoresSummaryUnionType>;
  team: Team;
  teamOfficials?: Maybe<Array<Maybe<TemplateOfficial>>>;
  teamOrgSchedules?: Maybe<Array<Maybe<CommonSchedules>>>;
  teamPreparations?: Maybe<Array<Maybe<TemplatePreparation>>>;
  teamWorkers?: Maybe<Array<Maybe<TemplateWorker>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  transactionDetail?: Maybe<TransactionDetail>;
  transactions: Array<Maybe<Transaction>>;
  twispCardBalances?: Maybe<Array<Maybe<TwispCardBalances>>>;
  twispCards?: Maybe<Array<Maybe<TwispCards>>>;
  twispStripeHooks?: Maybe<Array<Maybe<TwispStripeHooks>>>;
  twispTransactions?: Maybe<Array<Maybe<TwispTransactions>>>;
  unconfirmedEvents?: Maybe<UnconfirmedEventsList>;
  updateSavedSalesRep: UserSavedRep;
  user?: Maybe<User>;
  /** Get all Orgs that are associated with a User and a specific product. */
  userAssociations?: Maybe<Array<Maybe<Org>>>;
  userFitting?: Maybe<UserFitting>;
  userPermissions?: Maybe<UserPermissionsList>;
  userPublic?: Maybe<UserPublic>;
  userSponsor?: Maybe<Link>;
  userSponsorGet?: Maybe<Links>;
  userSponsorSchool?: Maybe<Link>;
  users?: Maybe<Users>;
  vaultAccountStatus: VaultAccountStatus;
  vaultCard: Card;
  vaultKyb: VaultKyb;
  vaultKyc: VaultKyc;
  vaultStripeConnectAccountBankAccountListFetch?: Maybe<Array<Maybe<VaultBankAccount>>>;
  vaultStripeConnectAccountFetch?: Maybe<Scalars['JSONObject']>;
  vaultVgsValue: Scalars['String'];
  vehicle: Vehicle;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
  workerPoolById: WorkerPool;
  workerPools?: Maybe<Array<Maybe<WorkerPool>>>;
};


export type QueryAccountTransactionsArgs = {
  input: AccountTransactionsInput;
};


export type QueryAuthenticationFlowArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryBusSchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryCampaignDatesArgs = {
  campaignId: Scalars['String'];
};


export type QueryCampaignHistoryListGetArgs = {
  fundraiserId?: InputMaybe<Scalars['Int']>;
};


export type QueryCampaignKycArgs = {
  campaignId: Scalars['String'];
};


export type QueryCampaignsArgs = {
  accountManagerIds?: InputMaybe<Array<Scalars['Int']>>;
  daysClosed?: InputMaybe<Scalars['String']>;
  daysToLaunch?: InputMaybe<Scalars['String']>;
  fetchAllCampaigns?: InputMaybe<Scalars['Boolean']>;
  getTeamSelling?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  salesrepIds?: InputMaybe<Array<Scalars['Int']>>;
  searchTerm?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<SortField>;
  status?: InputMaybe<Scalars['String']>;
};


export type QueryChildrensFundraiserSplitStatusArgs = {
  ids: Array<Scalars['String']>;
};


export type QueryCompetitionListArgs = {
  input?: InputMaybe<GetCompetitionListInput>;
};


export type QueryConsumersArgs = {
  hidden?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDailyCalendarBusSchedulesArgs = {
  input?: InputMaybe<GetDailyCalendarBusScheduleByDateInput>;
};


export type QueryDailyCalendarEventsArgs = {
  input?: InputMaybe<GetDailyCalendarEventsByDateInput>;
};


export type QueryDailyCalendarOfficialsArgs = {
  input?: InputMaybe<GetDailyCalendarOfficialsByDateInput>;
};


export type QueryDailyCalendarPreparationsArgs = {
  input?: InputMaybe<GetDailyCalendarPreparationsByDateInput>;
};


export type QueryDailyCalendarWorkersArgs = {
  input?: InputMaybe<GetDailyCalendarWorkersByDateInput>;
};


export type QueryDaySchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryDonationLevelsByFundraiserIdArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryDonationTopEarnerArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryDonorEmailAddressesArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryDonorEmailDataArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryDonorPersonListEntriesArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryDonorPhoneNumbersArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryDonorsParticipantOtkIncentivesArgs = {
  fundraiserId: Scalars['String'];
  participantId: Scalars['String'];
};


export type QueryDriveCampaignDetailsArgs = {
  fundraiserId: Scalars['Int'];
};


export type QueryDriveCampaignSearchStatsArgs = {
  activityTypes?: InputMaybe<Array<Scalars['String']>>;
  campaignName?: InputMaybe<Scalars['String']>;
  campaignStatuses?: InputMaybe<Array<CampaignStatus>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fundraiserId?: InputMaybe<Scalars['Int']>;
  hasIncentive?: InputMaybe<Scalars['Boolean']>;
  maxTeamSize?: InputMaybe<Scalars['Int']>;
  maxTotalRaisedCents?: InputMaybe<Scalars['Int']>;
  minTeamSize?: InputMaybe<Scalars['Int']>;
  minTotalRaisedCents?: InputMaybe<Scalars['Int']>;
  organizationIds?: InputMaybe<Array<Scalars['Int']>>;
  organizationTypes?: InputMaybe<Array<Scalars['String']>>;
  salesrepIds?: InputMaybe<Array<Scalars['Int']>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  territories?: InputMaybe<Array<Scalars['String']>>;
  usStates?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryDriveEventArgs = {
  id: Scalars['ID'];
};


export type QueryDriveEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<DriveEventSearchInput>;
};


export type QueryDriveGetListActivitiesAvailableListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListActivitiesNotAvailableListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListCurrentCustomersListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListHubspotProspectsListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListOrgListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgName?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListOrganizationSummaryArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  orgId: Scalars['Int'];
};


export type QueryDriveGetListPotentialCustomersListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveGetListWinbackListArgs = {
  hubspotId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
};


export type QueryDriveOrgUserTrackingsArgs = {
  orgId: Scalars['String'];
  where?: InputMaybe<DriveOrgUserTrackingSearchInput>;
};


export type QueryDriveSalesrepsByManagerArgs = {
  type?: InputMaybe<SalesrepType>;
};


export type QueryDriveUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DriveUserSearchInput>;
};


export type QueryDriveVenuesArgs = {
  where?: InputMaybe<DriveVenueSearchInput>;
};


export type QueryEventArgs = {
  input?: InputMaybe<GetEventByIdInput>;
};


export type QueryEventCalendarArgs = {
  input?: InputMaybe<EventCalendarFiltersInput>;
};


export type QueryEventContractItemsArgs = {
  input?: InputMaybe<EventContractItemInput>;
};


export type QueryEventOfficialArgs = {
  input?: InputMaybe<GetOfficialByIdInput>;
};


export type QueryEventParticipantsArgs = {
  input?: InputMaybe<GetEventParticipantsByIdInput>;
};


export type QueryEventPreparationsArgs = {
  input?: InputMaybe<GetEventPreparationsByIdInput>;
};


export type QueryEventPreparationsByEventArgs = {
  input?: InputMaybe<GetEventPreparationsByEventIdInput>;
};


export type QueryEventTransportDetailsByEventOrDatesArgs = {
  input?: InputMaybe<GetEventTransportDetailsByEventOrDatesInput>;
};


export type QueryEventWorkerArgs = {
  input?: InputMaybe<GetWorkerByIdInput>;
};


export type QueryEventWorkersByEventArgs = {
  input?: InputMaybe<GetWorkersByEventIdInput>;
};


export type QueryFacilityArgs = {
  input?: InputMaybe<GetFacilityByPlaceNameInput>;
};


export type QueryFacilityCalendarArgs = {
  input?: InputMaybe<CommonCalendarFiltersInput>;
};


export type QueryFacilityGridArgs = {
  input?: InputMaybe<CommonGridFiltersInput>;
};


export type QueryFacilitySchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryFeeReportSheetsArgs = {
  input?: InputMaybe<CommonSheetFiltersInput>;
};


export type QueryFinancialAcctAcctIdArgs = {
  acctId: Scalars['ID'];
};


export type QueryFinancialAcctOrgArgs = {
  orgId: Scalars['ID'];
};


export type QueryFinancialAcctRootArgs = {
  orgId: Scalars['ID'];
};


export type QueryFinancialAcctUsersArgs = {
  finAcctId: Scalars['ID'];
};


export type QueryFundraiserArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryFundraiserCheerwallArgs = {
  fundraiserId: Scalars['String'];
  take: Scalars['Int'];
};


export type QueryFundraiserDonationsArgs = {
  fundraiserId: Scalars['String'];
  take: Scalars['Int'];
};


export type QueryFundraiserEntityResourcesArgs = {
  resourceId: Scalars['Int'];
};


export type QueryFundraiserGroupsArgs = {
  joinCode: Scalars['String'];
};


export type QueryFundraiserRaisedAmountArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryFundraiserRewardLevelsCountArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryFundraiserRewardsDetailsArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryFundraiserTopDonationArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryFundraiserUserRoleArgs = {
  fundraiserId: Scalars['Int'];
};


export type QueryGalleryItemsArgs = {
  fundraiserId: Scalars['String'];
};


export type QueryGetCampaignRosterArgs = {
  campaignId: Scalars['String'];
};


export type QueryGetInsightsUserOrgsArgs = {
  userId: Scalars['Int'];
};


export type QueryGetParticipantDonationLinkDataArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryGetSalesRepHomeArgs = {
  zip: Scalars['String'];
};


export type QueryGetUserSavedSalesRepArgs = {
  udId: Scalars['String'];
};


export type QueryGroupLeadersArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  groupLeaderId?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryInfoSheetsArgs = {
  input?: InputMaybe<CommonSheetFiltersInput>;
};


export type QueryInsightsCampaignDonationsArgs = {
  campaignIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryInsightsCampaignRaiseEntityInfoArgs = {
  campaignId: Scalars['Int'];
};


export type QueryInsightsCampaignSettlementsArgs = {
  campaignIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryInsightsCampaignsDataArgs = {
  campaignIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryInsightsDonorParticipantContactsArgs = {
  campaignIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryInsightsOrgsCampaignsSummaryArgs = {
  orgCampaignIds: Array<InputMaybe<InsOrgCampaignSummaryInput>>;
};


export type QueryInsightsPreApprovalTokenValidationArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type QueryInsightsPreApprovedContactsArgs = {
  orgIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type QueryInsightsPreApprovedContactsEmailTestArgs = {
  emails: Array<InputMaybe<Scalars['String']>>;
  orgId: Scalars['String'];
};


export type QueryInsightsSalesRepInfoArgs = {
  salesRepEmail: Scalars['String'];
};


export type QueryInsightsUserPreferencesArgs = {
  campaignId: Scalars['Int'];
  userId: Scalars['String'];
};


export type QueryInviteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryInvitesArgs = {
  limit?: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  showAll?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLevelArgs = {
  input?: InputMaybe<GetLevelByIdInput>;
};


export type QueryLevelGridArgs = {
  input?: InputMaybe<CommonGridFiltersInput>;
};


export type QueryManageCoachArgs = {
  id: Scalars['Int'];
};


export type QueryManageCoachListArgs = {
  filter?: InputMaybe<ManageCoachListFilter>;
};


export type QueryManageEventArgs = {
  id: Scalars['Int'];
};


export type QueryManageEventListArgs = {
  filter?: InputMaybe<ManageEventListFilter>;
};


export type QueryManageOrganizationListArgs = {
  filter?: InputMaybe<ManageOrganizationFilter>;
};


export type QueryManagePlayerListArgs = {
  filter?: InputMaybe<ManagePlayerListFilter>;
};


export type QueryManageProgramArgs = {
  id: Scalars['Int'];
};


export type QueryManageProgramListArgs = {
  filter?: InputMaybe<ManageProgramListFilter>;
};


export type QueryManageSeasonArgs = {
  seasonId: Scalars['Int'];
};


export type QueryManageSeasonListArgs = {
  filter: ManageSeasonListFilter;
};


export type QueryManageSportDetailArgs = {
  id: Scalars['Int'];
};


export type QueryManageSportDetailsListArgs = {
  filter?: InputMaybe<ManageSportDetailsListFilter>;
};


export type QueryManageUserArgs = {
  input?: InputMaybe<ManageUserInput>;
};


export type QueryManageUsersListArgs = {
  input?: InputMaybe<ManageUsersListOptions>;
};


export type QueryOfficialAssignmentsArgs = {
  input?: InputMaybe<GetOfficialAssignmentsInput>;
};


export type QueryOfficialDutyArgs = {
  input?: InputMaybe<GetOfficialDutyByIdInput>;
};


export type QueryOfficialListsReportArgs = {
  input?: InputMaybe<EventOfficialReportFilter>;
};


export type QueryOfficialPoolByIdArgs = {
  input?: InputMaybe<GetOfficialPoolByIdInput>;
};


export type QueryOfficialSchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryOpponentArgs = {
  input?: InputMaybe<GetOpponentBySchoolCodeInput>;
};


export type QueryOpponentEventsApplyFiltersArgs = {
  input?: InputMaybe<GetEventsFilteredByOpponentStartAndEndDate>;
};


export type QueryOpponentSchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryOrgArgs = {
  hierarchy?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type QueryOrgIdArgs = {
  raiseId: Scalars['Int'];
};


export type QueryOrgUserAssociationsArgs = {
  orgId: Scalars['ID'];
  product: Product;
};


export type QueryOrgsArgs = {
  nameIncludes: Scalars['String'];
};


export type QueryOrgsSearchArgs = {
  pagination?: InputMaybe<OrgsSearchPaginationInput>;
  where?: InputMaybe<OrgsSearchWhereInput>;
};


export type QueryOtkFundraiserDataArgs = {
  fundraiserId: Scalars['ID'];
};


export type QueryOtkParticipantDetailsArgs = {
  fundraiserId: Scalars['ID'];
};


export type QueryOtkPastParticipantDetailsArgs = {
  fundraiserId: Scalars['ID'];
};


export type QueryParticipantCheerwallArgs = {
  fundraiserId: Scalars['String'];
  participantId: Scalars['String'];
  take: Scalars['Int'];
};


export type QueryParticipantDonationsArgs = {
  fundraiserId: Scalars['String'];
  participantId: Scalars['String'];
  take: Scalars['Int'];
};


export type QueryParticipantDonationsRaisedArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryParticipantEarnedRewardsDetailsArgs = {
  fundraiserId: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryParticipantGroupArgs = {
  campaignId: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryParticipantGuardianEmailQueryArgs = {
  userId: Scalars['Int'];
};


export type QueryParticipantRewardsDetailsArgs = {
  fundraiserId: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryParticipantSsoIdArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryParticipantTextTemplateArgs = {
  fundraiserId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryParticipantTopDonationArgs = {
  fundraiserId: Scalars['String'];
  participantId: Scalars['String'];
};


export type QueryParticipantsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  participantId?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentsApiCustomerArgs = {
  input: PaymentsApiCustomerInput;
};


export type QueryPayoutsArgs = {
  campaignId: Scalars['Int'];
};


export type QueryPrefundArgs = {
  fundraiserId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryPrefundsArgs = {
  fundraiser?: InputMaybe<FundraiserSearchParams>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  organization?: InputMaybe<OrganizationSearchParams>;
  status?: InputMaybe<Array<InputMaybe<Fundraiser_Status>>>;
};


export type QueryPreparationArgs = {
  input?: InputMaybe<GetPreparationByIdInput>;
};


export type QueryPreparationReportSheetsArgs = {
  input?: InputMaybe<CommonSheetFiltersInput>;
};


export type QueryPrimaryGroupLeaderArgs = {
  campaignId: Scalars['String'];
};


export type QueryPublicFundraiserDataArgs = {
  fundraiserId?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type QueryPublicParticipantDataArgs = {
  userId: Scalars['Int'];
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryRolesArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySchoolInfoArgs = {
  input?: InputMaybe<GetSchoolInfoByIdInput>;
};


export type QuerySearchDriveCampaignsArgs = {
  activityTypes?: InputMaybe<Array<Scalars['String']>>;
  campaignName?: InputMaybe<Scalars['String']>;
  campaignStatuses?: InputMaybe<Array<CampaignStatus>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fundraiserId?: InputMaybe<Scalars['Int']>;
  hasIncentive?: InputMaybe<Scalars['Boolean']>;
  isPendingSettlement?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxTeamSize?: InputMaybe<Scalars['Int']>;
  maxTotalRaisedCents?: InputMaybe<Scalars['Int']>;
  minTeamSize?: InputMaybe<Scalars['Int']>;
  minTotalRaisedCents?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  organizationIds?: InputMaybe<Array<Scalars['Int']>>;
  organizationTypes?: InputMaybe<Array<Scalars['String']>>;
  salesrepIds?: InputMaybe<Array<Scalars['Int']>>;
  sortDirection?: InputMaybe<SortDirection>;
  sortField?: InputMaybe<SortField>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  territories?: InputMaybe<Array<Scalars['String']>>;
  usStates?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySearchDriveOrganizationsByNameArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  organizationName?: InputMaybe<Scalars['String']>;
};


export type QuerySeasonArgs = {
  input?: InputMaybe<SeasonByIdInput>;
};


export type QuerySeasonByYearAndTeamArgs = {
  input?: InputMaybe<SeasonByYearTeamInput>;
};


export type QuerySeasonEventWizardArgs = {
  input?: InputMaybe<SeasonEventWizardInput>;
};


export type QueryShipmentsArgs = {
  externalId?: InputMaybe<ShipmentInput>;
};


export type QuerySpendAccountExportArgs = {
  status: Scalars['String'];
};


export type QuerySpendBudgetArgs = {
  id: Scalars['String'];
};


export type QuerySpendBudgetsArgs = {
  groupId?: InputMaybe<Scalars['String']>;
};


export type QuerySpendBudgetsSummaryArgs = {
  groupId?: InputMaybe<Scalars['String']>;
};


export type QuerySpendCategoriesArgs = {
  filterBy?: InputMaybe<CategoryFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
};


export type QuerySpendDataForHomeArgs = {
  udid: Scalars['String'];
};


export type QuerySpendGroupBankAccountsArgs = {
  groupId?: InputMaybe<Scalars['String']>;
};


export type QuerySpendGroupBankLinkTokenCreateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpendGroupByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendGroupDebitCardsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpendGroupRosterByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendGroupRostersArgs = {
  filterBy?: InputMaybe<GroupRosterFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
};


export type QuerySpendGroupsFilteredArgs = {
  pagination?: InputMaybe<SpendPaginationInput>;
  sort?: InputMaybe<SpendSortInput>;
  where?: InputMaybe<SpendGroupsWhereInput>;
};


export type QuerySpendInviteArgs = {
  id: Scalars['String'];
};


export type QuerySpendInvitesArgs = {
  filterBy?: InputMaybe<InviteFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
};


export type QuerySpendInvitesFilteredArgs = {
  pagination?: InputMaybe<SpendPaginationInput>;
  sort?: InputMaybe<SpendSortInput>;
  where?: InputMaybe<SpendInviteWhereInput>;
};


export type QuerySpendInvoiceByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendInvoicesArgs = {
  filterBy?: InputMaybe<InvoiceFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendInvoicesExportArgs = {
  filters?: InputMaybe<Array<InputMaybe<SpendInvoiceFilter>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendInvoicesFilteredArgs = {
  filters?: InputMaybe<Array<InputMaybe<SpendInvoiceFilter>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendInvoicesMockArgs = {
  filterBy?: InputMaybe<InvoiceFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendOrganizationByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendOrganizationsArgs = {
  pagination?: InputMaybe<SpendPaginationInput>;
  where?: InputMaybe<SpendOrganizationsWhereInput>;
};


export type QuerySpendPaginatedInvoicesArgs = {
  filters?: InputMaybe<Array<InputMaybe<SpendInvoiceFilter>>>;
  pagination?: InputMaybe<SpendPaginationInput>;
  sort?: InputMaybe<SpendSortInput>;
};


export type QuerySpendPaymentScheduleByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendPaymentSchedulesArgs = {
  groupIdOrSeasonId?: InputMaybe<Scalars['String']>;
};


export type QuerySpendRoleCurrentArgs = {
  sessionId: Scalars['String'];
};


export type QuerySpendRostersArgs = {
  filterBy?: InputMaybe<RosterFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
};


export type QuerySpendRostersFilteredArgs = {
  pagination?: InputMaybe<SpendPaginationInput>;
  sort?: InputMaybe<SpendSortInput>;
  where?: InputMaybe<SpendGroupRostersWhereInput>;
};


export type QuerySpendTransactionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpendTransactionAttachmentArgs = {
  id: Scalars['String'];
};


export type QuerySpendTransactionAttachmentsByPaymentIdArgs = {
  id: Scalars['String'];
};


export type QuerySpendTransactionNotesArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpendTransactionNotesByPaymentIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpendTransactionsArgs = {
  filterBy?: InputMaybe<TransactionFilterEnum>;
  filterValue?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendTransactionsExportArgs = {
  filters?: InputMaybe<Array<InputMaybe<SpendTransactionFilter>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendTransactionsFilteredArgs = {
  filters?: InputMaybe<Array<InputMaybe<SpendTransactionFilter>>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySpendUserAccountBearerTokenArgs = {
  input?: InputMaybe<SpendAccountBearerToken>;
};


export type QuerySponsorArgs = {
  id: Scalars['String'];
};


export type QuerySponsorAssetsArgs = {
  orderBy?: InputMaybe<OrderByClauseGroups>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseAssets>;
};


export type QuerySponsorCartAssetArgs = {
  assetId: Scalars['String'];
  sponsorId: Scalars['String'];
};


export type QuerySponsorCartAssetsArgs = {
  sponsorId: Scalars['String'];
};


export type QuerySponsorCountForAssetsArgs = {
  schoolId: Scalars['String'];
};


export type QuerySponsorDataForHomeArgs = {
  orgId: Scalars['String'];
};


export type QuerySponsorDistrictArgs = {
  id: Scalars['String'];
};


export type QuerySponsorDistrictsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySponsorEnabledPaymentMethodArgs = {
  sponsorId: Scalars['String'];
};


export type QuerySponsorInvitationCheckByMailIdArgs = {
  email: Scalars['String'];
  sponsorshipGroupId: Scalars['String'];
};


export type QuerySponsorPackageDetailsArgs = {
  packageId: Scalars['String'];
};


export type QuerySponsorPaymentMethodsArgs = {
  sponsorId: Scalars['String'];
};


export type QuerySponsorSchoolArgs = {
  from?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySponsorSchoolProgramArgs = {
  id: Scalars['String'];
};


export type QuerySponsorSchoolProgramsArgs = {
  from?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySponsorSchoolUsersArgs = {
  schoolId: Scalars['String'];
};


export type QuerySponsorSchoolsArgs = {
  from?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySponsorStateArgs = {
  id: Scalars['String'];
};


export type QuerySponsorSubDistrictArgs = {
  id: Scalars['String'];
};


export type QuerySponsorSubDistrictsArgs = {
  from?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySponsorUsersArgs = {
  sponsorId: Scalars['String'];
};


export type QuerySponsoredSponsorshipGroupsArgs = {
  name: Scalars['String'];
  orderBy?: InputMaybe<OrderByClauseGroups>;
  skip?: InputMaybe<Scalars['Int']>;
  sponsorId: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySponsorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sponsorshipGroupId: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseSponsors>;
};


export type QuerySponsorshipGroupArgs = {
  id: Scalars['String'];
};


export type QuerySponsorshipGroupAccountLinkArgs = {
  sponsorshipGroupId: Scalars['String'];
};


export type QuerySponsorshipGroupActivityArgs = {
  id: Scalars['String'];
};


export type QuerySponsorshipGroupAssetArgs = {
  id: Scalars['String'];
};


export type QuerySponsorshipGroupAssetTypeValuesArgs = {
  assetTypeId: Scalars['String'];
};


export type QuerySponsorshipGroupAssetTypesArgs = {
  where?: InputMaybe<WhereClauseAssetTypes>;
};


export type QuerySponsorshipGroupAssetsArgs = {
  orderBy?: InputMaybe<OrderByClauseGroups>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseAssets>;
};


export type QuerySponsorshipGroupInvitesArgs = {
  orderBy?: InputMaybe<OrderByClauseInvites>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseInvites>;
};


export type QuerySponsorshipGroupOrdersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseSponsorshipGroupOrders>;
};


export type QuerySponsorshipGroupOrdersCsvArgs = {
  sponsorshipGroupId: Scalars['String'];
};


export type QuerySponsorshipGroupOrdersStatsArgs = {
  sponsorshipGroupId: Scalars['String'];
};


export type QuerySponsorshipGroupPricingForCurrentYearArgs = {
  schoolId: Scalars['String'];
};


export type QuerySponsorshipGroupPrimaryContactArgs = {
  sponsorshipGroupId?: InputMaybe<Scalars['String']>;
};


export type QuerySponsorshipGroupsArgs = {
  orderBy?: InputMaybe<OrderByClauseGroups>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClauseSponsorShipGroups>;
};


export type QuerySponsorshipHistoryArgs = {
  sponsorId: Scalars['String'];
  sponsorshipGroupId: Scalars['String'];
};


export type QuerySponsorshipOrdersArgs = {
  name: Scalars['String'];
  orderBy?: InputMaybe<OrderByPackages>;
  skip?: InputMaybe<Scalars['Int']>;
  sponsorId: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClausePackages>;
};


export type QuerySponsorshipPackagesArgs = {
  name: Scalars['String'];
  orderBy?: InputMaybe<OrderByPackages>;
  skip?: InputMaybe<Scalars['Int']>;
  sponsorId: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhereClausePackages>;
};


export type QueryStoreBestSellerArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStoreByScopeIdArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStoreDataForHomeArgs = {
  fundraiserId?: InputMaybe<Array<Scalars['Int']>>;
  uEmail: Scalars['String'];
};


export type QueryStoreEarnedPointsGraphArgs = {
  input?: InputMaybe<StorePointEarnedGraphInput>;
};


export type QueryStoreGlCampaignsArgs = {
  input?: InputMaybe<StoreUserCampaignsInput>;
};


export type QueryStoreGlParticipantsArgs = {
  input?: InputMaybe<StoreUserParticipantsInput>;
};


export type QueryStoreOrderFilterArgs = {
  input?: InputMaybe<OrderFilterInput>;
};


export type QueryStoreOrderItemImagesArgs = {
  itemIds: Array<Scalars['Int']>;
};


export type QueryStoreOrderSalesGraphArgs = {
  input?: InputMaybe<OrderGraphInput>;
};


export type QueryStoreOrderSummaryArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStoreOrdersCsvArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStorePointActivityFilterArgs = {
  input?: InputMaybe<PointsActivityFilterInput>;
};


export type QueryStorePointsActivityCsvArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStoreTicketsArgs = {
  scopeId: Scalars['Int'];
};


export type QueryStoreUserDetailsArgs = {
  email: Scalars['String'];
};


export type QueryStoresByCampaignIdsArgs = {
  input?: InputMaybe<StoreByCampaignIdsInput>;
};


export type QueryStoresByGlEmailArgs = {
  input?: InputMaybe<StoreByGlEmailInput>;
};


export type QueryStoresSummaryByCampaignIdsArgs = {
  input?: InputMaybe<StoreSummaryByCampaignIdsInput>;
};


export type QueryStoresSummaryByGlEmailArgs = {
  input?: InputMaybe<StoresSummaryByGlEmailInput>;
};


export type QueryTeamArgs = {
  input?: InputMaybe<TeamByCodeInput>;
};


export type QueryTeamOfficialsArgs = {
  input?: InputMaybe<OfficialByIdInput>;
};


export type QueryTeamOrgSchedulesArgs = {
  input?: InputMaybe<CommonSchedulesFiltersInput>;
};


export type QueryTeamPreparationsArgs = {
  input?: InputMaybe<PreparationByIdInput>;
};


export type QueryTeamWorkersArgs = {
  input?: InputMaybe<WorkerByIdInput>;
};


export type QueryTransactionDetailArgs = {
  transactionId: Scalars['UUID'];
};


export type QueryTransactionsArgs = {
  input: TransactionsInput;
};


export type QueryTwispCardBalancesArgs = {
  index?: InputMaybe<TwispCardBalances_Indexes>;
  limit?: InputMaybe<Scalars['Int32']>;
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
  where?: InputMaybe<Where>;
};


export type QueryTwispCardsArgs = {
  index?: InputMaybe<TwispCards_Indexes>;
  limit?: InputMaybe<Scalars['Int32']>;
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
  where?: InputMaybe<Where>;
};


export type QueryTwispStripeHooksArgs = {
  index?: InputMaybe<TwispStripeHooks_Indexes>;
  limit?: InputMaybe<Scalars['Int32']>;
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
  where?: InputMaybe<Where>;
};


export type QueryTwispTransactionsArgs = {
  index?: InputMaybe<TwispTransactions_Indexes>;
  limit?: InputMaybe<Scalars['Int32']>;
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
  where?: InputMaybe<Where>;
};


export type QueryUnconfirmedEventsArgs = {
  input?: InputMaybe<UnconfirmedEventsFiltersInput>;
};


export type QueryUpdateSavedSalesRepArgs = {
  snapRepEmail: Scalars['String'];
  udId: Scalars['String'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUserAssociationsArgs = {
  id: Scalars['ID'];
  product: Product;
};


export type QueryUserPermissionsArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryUserPublicArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUserSponsorArgs = {
  userId: Scalars['String'];
};


export type QueryUserSponsorGetArgs = {
  userId: Scalars['String'];
};


export type QueryUserSponsorSchoolArgs = {
  userId: Scalars['String'];
};


export type QueryUsersArgs = {
  isInternal?: InputMaybe<Scalars['Boolean']>;
  limit?: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  snapRaiseId?: InputMaybe<Scalars['Int']>;
  snapSpendId?: InputMaybe<Scalars['Int']>;
};


export type QueryVaultAccountStatusArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
  accountRepresentativeGatewayId?: InputMaybe<Scalars['String']>;
  applicationId?: InputMaybe<Scalars['ID']>;
  beneficialOwnersGatewayIds?: InputMaybe<Array<Scalars['String']>>;
  provider: VaultFinancialProvider;
};


export type QueryVaultCardArgs = {
  id: Scalars['String'];
};


export type QueryVaultKybArgs = {
  id: Scalars['ID'];
};


export type QueryVaultKycArgs = {
  id: Scalars['ID'];
};


export type QueryVaultStripeConnectAccountBankAccountListFetchArgs = {
  stripeConnectAccountId: Scalars['String'];
};


export type QueryVaultStripeConnectAccountFetchArgs = {
  stripeConnectAccountId: Scalars['ID'];
};


export type QueryVaultVgsValueArgs = {
  value: Scalars['String'];
};


export type QueryVehicleArgs = {
  input?: InputMaybe<GetVehicleByIdInput>;
};


export type QueryWorkerPoolByIdArgs = {
  input?: InputMaybe<GetWorkerPoolByIdInput>;
};

export type RaiseUser = {
  __typename?: 'RaiseUser';
  email?: Maybe<Scalars['String']>;
  /** SSO User ID */
  id?: Maybe<Scalars['String']>;
};

export type ReconcileBudget = {
  amount: Scalars['Int'];
  budgetItemId: Scalars['String'];
};

export type ReconcileInvoice = {
  amount: Scalars['Int'];
  invoiceId: Scalars['String'];
};

export enum ResponseStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<RolePermission>>>;
  scope?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RoleArguments = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  scope?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RolePermission = {
  __typename?: 'RolePermission';
  id?: Maybe<Scalars['String']>;
  permission?: Maybe<Permission>;
  permissionId?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
};

export type Roster = {
  __typename?: 'Roster';
  id?: Maybe<Scalars['ID']>;
  members?: Maybe<Array<Maybe<RosterMember>>>;
  name?: Maybe<Scalars['String']>;
};

export enum RosterFilterEnum {
  GroupName = 'groupName',
  MemberName = 'memberName',
  RosterName = 'rosterName',
  SeasonName = 'seasonName'
}

export type RosterMember = {
  __typename?: 'RosterMember';
  association?: Maybe<CampaignMemberAssociation>;
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['String']>;
  wasDeleted?: Maybe<Scalars['Boolean']>;
};

export type SdPagination = {
  __typename?: 'SDPagination';
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['BigInt']>;
};

export enum Shipping_Service {
  Express = 'express',
  Priority = 'priority',
  Standard = 'standard'
}

/** Owned by Vault Only used in legacy createCard */
export enum Spending_Limit_Interval {
  AllTime = 'all_time',
  Daily = 'daily',
  Monthly = 'monthly',
  PerAuthorization = 'per_authorization',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export enum Support_Ticket_Department {
  Accounts = 'ACCOUNTS',
  Hubspot = 'HUBSPOT',
  It = 'IT',
  Pep = 'PEP',
  Sales = 'SALES',
  Sponsor = 'SPONSOR',
  Wallet = 'WALLET',
  Warehouse = 'WAREHOUSE'
}

export enum SalesrepType {
  AccountManager = 'ACCOUNT_MANAGER',
  SalesRep = 'SALES_REP'
}

/** Information of a emails scheduled for cron jobs */
export type ScheduledReleaseInfo = {
  __typename?: 'ScheduledReleaseInfo';
  /** The date and time for release */
  date?: Maybe<Scalars['DateTime']>;
  /** The timezone for scheduled release */
  timezone?: Maybe<Scalars['String']>;
};

export enum SchoolCategory {
  Charter = 'CHARTER',
  Magnet = 'MAGNET',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type SchoolInfo = {
  __typename?: 'SchoolInfo';
  Schoolname?: Maybe<Scalars['String']>;
  ad?: Maybe<Scalars['String']>;
  ad_contract_signee?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  ccemail?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  conf_text_type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_reminder?: Maybe<Scalars['String']>;
  email_reminder_officials?: Maybe<Scalars['String']>;
  email_reminder_workers?: Maybe<Scalars['String']>;
  enable_cc_email_as_origin?: Maybe<Scalars['String']>;
  enable_ml_updates?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mascot?: Maybe<Scalars['String']>;
  message_board_read_at?: Maybe<Scalars['Date']>;
  ml_key?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  principal?: Maybe<Scalars['String']>;
  school_timezone?: Maybe<Scalars['String']>;
  secondary_ad_email?: Maybe<Scalars['String']>;
  secondary_ad_name?: Maybe<Scalars['String']>;
  signed_contract_notification?: Maybe<Scalars['String']>;
  ssn_on_file?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_org?: Maybe<Scalars['String']>;
  state_org_abbreviation?: Maybe<Scalars['String']>;
  use_security?: Maybe<Scalars['String']>;
  web_password?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ScopeProductColor = {
  __typename?: 'ScopeProductColor';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type Season = {
  __typename?: 'Season';
  budget?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['Date']>;
  default_time_for_event?: Maybe<Scalars['String']>;
  default_time_for_practice?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  preview?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
  season_id: Scalars['Int'];
  sport?: Maybe<Team>;
  sport_code?: Maybe<Scalars['String']>;
  web_password?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type SeasonByIdInput = {
  season_id: Scalars['Int'];
};

export type SeasonByYearTeamInput = {
  sport_code?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type SeasonCreateInput = {
  budget?: InputMaybe<Scalars['Float']>;
  created_at?: InputMaybe<Scalars['Date']>;
  default_time_for_event?: InputMaybe<Scalars['String']>;
  default_time_for_practice?: InputMaybe<Scalars['String']>;
  home_field?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  preview?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  season_id: Scalars['Int'];
  sport_code?: InputMaybe<Scalars['String']>;
  web_password?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type SeasonDeleteInput = {
  season_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SeasonEventWizardInput = {
  season_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SeasonModifyInput = {
  budget?: InputMaybe<Scalars['Float']>;
  created_at?: InputMaybe<Scalars['Date']>;
  default_time_for_event?: InputMaybe<Scalars['String']>;
  default_time_for_practice?: InputMaybe<Scalars['String']>;
  home_field?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  preview?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  season_id: Scalars['Int'];
  sport_code?: InputMaybe<Scalars['String']>;
  web_password?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type SeasonPostponeUnpostponeInput = {
  event_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  season_id?: InputMaybe<Scalars['Int']>;
};

export type SeasonScheduleTeamsCreateInput = {
  sport_codes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  year?: InputMaybe<Scalars['String']>;
};

/** Settlement details for closed campaign. */
export type SettlementDetails = {
  __typename?: 'SettlementDetails';
  /** The amount in cents that campaigns was advanced in Wallet. */
  advanceAmount?: Maybe<Scalars['Int']>;
  /** Address to send out check to */
  checkingAddress?: Maybe<Scalars['String']>;
  /** The type of snap fee being collected. e.g. 'standard', '1+1', '20%/15%', etc. */
  feeType?: Maybe<Scalars['String']>;
  /** Total cost of incentives in cents */
  gearCost?: Maybe<Scalars['Int']>;
  /** Code to build logo */
  incLogo?: Maybe<Scalars['String']>;
  /** Primary color to build logo */
  incLogoPrimaryColor?: Maybe<Scalars['String']>;
  /** Script to build logo */
  incLogoScript?: Maybe<Scalars['String']>;
  /** Secondary color to build logo */
  incLogoSecondaryColor?: Maybe<Scalars['String']>;
  /** Filename of Logo of Group of Campaign */
  logoImage?: Maybe<Scalars['String']>;
  /** The amount in cents that campaigns was manual-advanced in Raise. */
  manualAdvanceAmount?: Maybe<Scalars['Int']>;
  /** Net raised amount in cents. Equals totalRaised minus snapFee and adds the otkBonus. It is the amount client received in their check/deposit. */
  netRaisedTotal?: Maybe<Scalars['Int']>;
  /** Notes of campaign */
  notes?: Maybe<Scalars['String']>;
  /** Legal Name of Organization */
  organizationLegalName?: Maybe<Scalars['String']>;
  /** TIN of Organization */
  organizationTin?: Maybe<Scalars['String']>;
  /** Total bonus amount that team will receive through otk purchase cost (usually 10%) in cents. */
  otkBonus?: Maybe<Scalars['Int']>;
  /** Link to OTK Logo */
  otkLogoUrl?: Maybe<Scalars['String']>;
  /** Percentage of participation of campaign */
  participationPercent?: Maybe<Scalars['Int']>;
  /** Notes for settlement for this campaign */
  settlementNotes?: Maybe<Scalars['String']>;
  /** Default Shipping address to send out gears/merchandise/check */
  shippingAddress?: Maybe<Scalars['String']>;
  /** Total Fee in cents that Raise collects from campaigns */
  snapFee?: Maybe<Scalars['Int']>;
};

/** Fixed statuses for a campaigns settlement status */
export enum SettlementStatus {
  InReview = 'IN_REVIEW',
  Unsubmitted = 'UNSUBMITTED',
  Verified = 'VERIFIED'
}

/** Attributes for settlement status */
export type SettlementStatusUpdate = {
  __typename?: 'SettlementStatusUpdate';
  fundraiserId?: Maybe<Scalars['Int']>;
  settlementStatus?: Maybe<SettlementStatus>;
};

export type Shipment = {
  __typename?: 'Shipment';
  carrier?: Maybe<ShipmentCarrier>;
  customer: Scalars['String'];
  destination?: Maybe<Scalars['String']>;
  externalId: ShipmentExternalId;
  netsuiteId: Scalars['String'];
  netsuiteSoTranId?: Maybe<Scalars['String']>;
  netsuiteTranId?: Maybe<Scalars['String']>;
  shippedDate?: Maybe<Scalars['Timestamp']>;
  source?: Maybe<ShipmentSource>;
  status?: Maybe<ShipmentStatus>;
  trackingNumbers: Array<Maybe<Scalars['String']>>;
  updated: Scalars['Timestamp'];
  workflowStage: Scalars['String'];
};

export type ShipmentCampaignId = {
  __typename?: 'ShipmentCampaignId';
  campaignId: Scalars['Int'];
};

export enum ShipmentCarrier {
  Fedex = 'FEDEX',
  Unknown = 'UNKNOWN',
  Usps = 'USPS'
}

export type ShipmentExternalId = ShipmentCampaignId | ShipmentOtherId;

export type ShipmentInput = {
  campaignId?: InputMaybe<Scalars['Int']>;
  externalId?: InputMaybe<Scalars['String']>;
};

export type ShipmentOtherId = {
  __typename?: 'ShipmentOtherId';
  externalId: Scalars['UUID'];
};

export type ShipmentResponse = {
  __typename?: 'ShipmentResponse';
  shipments: Array<Maybe<Shipment>>;
  status: ResponseStatus;
};

export enum ShipmentSource {
  Otf = 'OTF',
  OtkIncentive = 'OTK_INCENTIVE',
  Store = 'STORE'
}

export enum ShipmentStatus {
  Processing = 'PROCESSING',
  Shipped = 'SHIPPED'
}

export type SignUpResponseWithAvailableTransport = {
  __typename?: 'SignUpResponseWithAvailableTransport';
  availableTransport: Array<TransportEnum>;
  result: Array<TransportType>;
};

export type SignupAgreement = {
  __typename?: 'SignupAgreement';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SocialMediaAccounts = {
  __typename?: 'SocialMediaAccounts';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortField {
  ClosedStatus = 'CLOSED_STATUS',
  DaysLeft = 'DAYS_LEFT',
  EndDate = 'END_DATE',
  KycStatus = 'KYC_STATUS',
  Name = 'NAME',
  Participation = 'PARTICIPATION',
  Preload = 'PRELOAD',
  SettlementDetails = 'SETTLEMENT_DETAILS',
  StartDate = 'START_DATE',
  Status = 'STATUS',
  TotalRaised = 'TOTAL_RAISED'
}

export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type SpendAccount = {
  __typename?: 'SpendAccount';
  account?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Int']>;
  balance?: Maybe<Scalars['Int']>;
  groupStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  routing?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SpendAccountBearerToken = {
  verificationCode?: InputMaybe<Scalars['String']>;
  verificationToken?: InputMaybe<Scalars['String']>;
};

export type SpendAccountBearerTokenResponse = {
  __typename?: 'SpendAccountBearerTokenResponse';
  expiresIn?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type SpendAccountId = {
  __typename?: 'SpendAccountID';
  id: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type SpendAccountResponse = {
  __typename?: 'SpendAccountResponse';
  accounts?: Maybe<Array<Maybe<SpendAccount>>>;
  count?: Maybe<Scalars['Int']>;
  groupsBalance?: Maybe<SpendGroupAccountBalances>;
  totalBalance?: Maybe<Scalars['Int']>;
};

export type SpendAccountTransferInput = {
  amount: Scalars['Int'];
  description: Scalars['String'];
  fromGroupIdOrOrgId: Scalars['String'];
  toGroupIdOrOrgId: Scalars['String'];
};

export type SpendAchPaymentCancelInput = {
  externalId: Scalars['String'];
  id: Scalars['String'];
};

export type SpendAchPaymentId = {
  __typename?: 'SpendAchPaymentID';
  id?: Maybe<Scalars['String']>;
};

export type SpendAchPaymentInput = {
  description?: InputMaybe<Scalars['String']>;
  externalId: Scalars['String'];
  groupId: Scalars['String'];
  invoiceIds: Array<InputMaybe<Scalars['String']>>;
  paymentAmount: Scalars['Int'];
};

export type SpendAchPaymentResponse = {
  __typename?: 'SpendAchPaymentResponse';
  amount: Scalars['Int'];
  descriptor: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['String'];
  transactionIdList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SpendAddress = {
  __typename?: 'SpendAddress';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type SpendAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SpendAgreementId = {
  __typename?: 'SpendAgreementID';
  id?: Maybe<Scalars['String']>;
};

export type SpendBankAccessCreateResponse = {
  __typename?: 'SpendBankAccessCreateResponse';
  id?: Maybe<Scalars['String']>;
};

export type SpendBankAccessDeleteResponse = {
  __typename?: 'SpendBankAccessDeleteResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type SpendBankAccount = {
  __typename?: 'SpendBankAccount';
  accountId?: Maybe<Scalars['String']>;
  availableBalance?: Maybe<Scalars['Float']>;
  currentBalance?: Maybe<Scalars['Float']>;
  mask?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  officialName?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SpendBankAccountsResponse = {
  __typename?: 'SpendBankAccountsResponse';
  externalAccounts?: Maybe<Array<Maybe<SpendBankAccount>>>;
};

export type SpendBankLinkCreateResponse = {
  __typename?: 'SpendBankLinkCreateResponse';
  expiration?: Maybe<Scalars['String']>;
  linkToken?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

export type SpendBankTransaction = {
  __typename?: 'SpendBankTransaction';
  amount?: Maybe<Scalars['Int']>;
  canCancel?: Maybe<Scalars['Boolean']>;
  correlationId?: Maybe<Scalars['String']>;
  /** @deprecated Can be found in metadata */
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  effective?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  groupRoster?: Maybe<SpendGroupRoster>;
  history?: Maybe<Array<Maybe<SpendBankTransactionHistory>>>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<SpendBankTransactionMetaData>;
  processor?: Maybe<Scalars['String']>;
  reconciliation?: Maybe<SpendReconciledTransaction>;
  snapAmount?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SpendBankTransactionDetail = {
  __typename?: 'SpendBankTransactionDetail';
  amount?: Maybe<Scalars['Int']>;
  canCancel?: Maybe<Scalars['Boolean']>;
  correlationId?: Maybe<Scalars['String']>;
  /** @deprecated Can be found in metadata */
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  effective?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  groupRoster?: Maybe<SpendGroupRoster>;
  history?: Maybe<Array<Maybe<SpendBankTransactionHistory>>>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<SpendBankTransactionMetaData>;
  paymentStatus?: Maybe<Scalars['String']>;
  processor?: Maybe<Scalars['String']>;
  reconciliation?: Maybe<SpendReconciledTransaction>;
  snapAmount?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SpendBankTransactionHistory = {
  __typename?: 'SpendBankTransactionHistory';
  date?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type SpendBankTransactionMetaData = {
  __typename?: 'SpendBankTransactionMetaData';
  account?: Maybe<Scalars['String']>;
  addenda?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  /** @deprecated Can be found in tags as SpendInvoiceIds */
  invoiceId?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  processor?: Maybe<Scalars['String']>;
  /** @deprecated Can be found in tags */
  product?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<SpendTransactionTags>;
};

export type SpendBankTransactionResponse = {
  __typename?: 'SpendBankTransactionResponse';
  transactionDetail?: Maybe<SpendBankTransactionDetail>;
};

export type SpendBankTransactionsResponse = {
  __typename?: 'SpendBankTransactionsResponse';
  count?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<SpendBankTransaction>>>;
};

export type SpendBudget = {
  __typename?: 'SpendBudget';
  category: SpendCategory;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  invoices?: Maybe<Array<SpendInvoice>>;
  isDefault?: Maybe<Scalars['Boolean']>;
  reconciledBudgetTotal?: Maybe<Scalars['Int']>;
  reconciledInvoicesTotal?: Maybe<Scalars['Int']>;
  reconciledTotal?: Maybe<Scalars['Int']>;
  reconciledTransactions?: Maybe<Array<SpendReconciledBudgetTransaction>>;
  season?: Maybe<SpendSeason>;
  targetAmount: Scalars['Int'];
  targetDateAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  vaultId?: Maybe<Scalars['String']>;
};

export type SpendBudgetId = {
  __typename?: 'SpendBudgetID';
  id?: Maybe<Scalars['String']>;
};

export type SpendBudgetInput = {
  categoryId: Scalars['String'];
  description: Scalars['String'];
  isDefault?: InputMaybe<Scalars['Boolean']>;
  seasonId?: InputMaybe<Scalars['String']>;
  targetAmount: Scalars['Int'];
  targetDateAt: Scalars['String'];
  vaultId?: InputMaybe<Scalars['String']>;
};

export type SpendBudgetResponse = {
  __typename?: 'SpendBudgetResponse';
  budget?: Maybe<SpendBudget>;
};

export type SpendBudgetSummaryResponse = {
  __typename?: 'SpendBudgetSummaryResponse';
  summaryByCategory?: Maybe<Array<Maybe<SpendCategory>>>;
  summaryUnreconciled?: Maybe<SpendUnreconciledSummary>;
};

export type SpendBudgetsResponse = {
  __typename?: 'SpendBudgetsResponse';
  budgets?: Maybe<Array<Maybe<SpendBudget>>>;
  count?: Maybe<Scalars['Int']>;
};

export type SpendCategory = {
  __typename?: 'SpendCategory';
  budgets?: Maybe<Array<Maybe<SpendBudget>>>;
  createdAt: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type SpendCategoryId = {
  __typename?: 'SpendCategoryID';
  id?: Maybe<Scalars['String']>;
};

export type SpendCategoryInput = {
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isHidden?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CategoryTypeEnum>;
};

export type SpendCategoryResponse = {
  __typename?: 'SpendCategoryResponse';
  categories?: Maybe<Array<Maybe<SpendCategory>>>;
  count?: Maybe<Scalars['Int']>;
};

export type SpendCheckDepositTagsResponse = {
  __typename?: 'SpendCheckDepositTagsResponse';
  success: Scalars['Boolean'];
};

export type SpendDeauthorizeResponse = {
  __typename?: 'SpendDeauthorizeResponse';
  id?: Maybe<Scalars['String']>;
  notifSuccess?: Maybe<Scalars['Boolean']>;
};

export type SpendDebitCard = {
  __typename?: 'SpendDebitCard';
  expiration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastFour?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SpendDebitCardId = {
  __typename?: 'SpendDebitCardID';
  id?: Maybe<Scalars['String']>;
};

export type SpendDebitCardInput = {
  dateOfBirth: Scalars['String'];
  shipping?: InputMaybe<SpendDebitCardShippingInput>;
  userId: Scalars['String'];
};

export type SpendDebitCardResponse = {
  __typename?: 'SpendDebitCardResponse';
  cards?: Maybe<Array<Maybe<SpendDebitCard>>>;
  count?: Maybe<Scalars['Int']>;
};

export type SpendDebitCardShippingInput = {
  city: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
};

export type SpendExternalTransferResponse = {
  __typename?: 'SpendExternalTransferResponse';
  amount?: Maybe<Scalars['Int']>;
  descriptor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SpendGroup = {
  __typename?: 'SpendGroup';
  accountId?: Maybe<Scalars['String']>;
  archivedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  hasAccount?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isRequireAgreement?: Maybe<Scalars['Boolean']>;
  latestSeason?: Maybe<SpendSeason>;
  name?: Maybe<Scalars['String']>;
  organizationFees?: Maybe<SpendOrganizationFee>;
  organizationId?: Maybe<Scalars['String']>;
  programId?: Maybe<Scalars['String']>;
  seasons?: Maybe<Array<Maybe<SpendSeason>>>;
  seasonsList?: Maybe<Array<Maybe<SpendSeason>>>;
};

export type SpendGroupAccountBalances = {
  __typename?: 'SpendGroupAccountBalances';
  active?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Int']>;
};

export type SpendGroupCheckDepositTagsInput = {
  checkDepositId: Scalars['String'];
  groupId?: InputMaybe<Scalars['String']>;
};

export type SpendGroupExternalTransferInput = {
  accountId?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<ExternalTransferDirectionEnum>;
  id?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
};

export type SpendGroupId = {
  __typename?: 'SpendGroupID';
  id?: Maybe<Scalars['String']>;
};

export type SpendGroupInput = {
  hasAccount?: InputMaybe<Scalars['Boolean']>;
  isBudgetShared?: InputMaybe<Scalars['Boolean']>;
  isLinkEnabled: Scalars['Boolean'];
  isRequireAgreement?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  seasonEndAt: Scalars['String'];
  seasonName?: InputMaybe<Scalars['String']>;
  seasonStartAt: Scalars['String'];
};

export type SpendGroupResponse = {
  __typename?: 'SpendGroupResponse';
  count?: Maybe<Scalars['Int']>;
  groups?: Maybe<Array<Maybe<SpendGroup>>>;
};

export type SpendGroupRoster = {
  __typename?: 'SpendGroupRoster';
  archivedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  group?: Maybe<SpendGroup>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<SpendInvite>;
  inviteId?: Maybe<Scalars['String']>;
  invoices?: Maybe<Array<Maybe<SpendInvoice>>>;
  isArchived?: Maybe<Scalars['Boolean']>;
  joinedAt?: Maybe<Scalars['String']>;
  pastDueDays?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  roster?: Maybe<SpendRoster>;
  rosterId?: Maybe<Scalars['String']>;
  season?: Maybe<SpendSeason>;
  seasonId?: Maybe<Scalars['String']>;
  status?: Maybe<SpendGroupRosterStatusEnum>;
  total?: Maybe<SpendTransactionTotals>;
  userId?: Maybe<Scalars['String']>;
};

export type SpendGroupRosterId = {
  __typename?: 'SpendGroupRosterID';
  id?: Maybe<Scalars['String']>;
};

export type SpendGroupRosterInput = {
  email: Scalars['String'];
  groupId: Scalars['String'];
  name: Scalars['String'];
  seasonId: Scalars['String'];
};

export type SpendGroupRosterResponse = {
  __typename?: 'SpendGroupRosterResponse';
  count?: Maybe<Scalars['Int']>;
  groupRosters?: Maybe<Array<Maybe<SpendGroupRoster>>>;
};

export enum SpendGroupRosterStatusEnum {
  AutopayStop = 'autopay_stop',
  AwaitingApproval = 'awaiting_approval',
  NoInvite = 'no_invite',
  NotSignedUp = 'not_signed_up',
  Paid = 'paid',
  PastDue = 'past_due'
}

export type SpendGroupRostersInput = {
  groupId: Scalars['String'];
  rosters?: InputMaybe<Array<InputMaybe<SpendRosterUserInput>>>;
  seasonId: Scalars['String'];
};

export type SpendGroupRostersWhereInput = {
  groupNameIncludes?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  nameIncludes?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SpendGroupRosterStatusEnum>;
};

export type SpendGroupsOverview = {
  __typename?: 'SpendGroupsOverview';
  balance?: Maybe<Scalars['Int']>;
  cards?: Maybe<Array<Maybe<SpendDebitCard>>>;
  collected?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pastDue?: Maybe<Scalars['Int']>;
  paymentScheduleInvoices?: Maybe<Array<Maybe<SpendPaymentSchedule>>>;
  seasonEndAt?: Maybe<Scalars['String']>;
  seasonStartAt?: Maybe<Scalars['String']>;
};

export type SpendGroupsResponse = {
  __typename?: 'SpendGroupsResponse';
  count?: Maybe<Scalars['Int']>;
  groups?: Maybe<Array<Maybe<SpendGroup>>>;
  hasNext?: Maybe<Scalars['Boolean']>;
};

export type SpendGroupsWhereInput = {
  /** Search archived groups only */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Search by group name only */
  groupNameIncludes?: InputMaybe<Scalars['String']>;
  /** Search by list of group id */
  ids?: InputMaybe<Array<Scalars['String']>>;
  /** Search by group name or latest season name in group */
  nameIncludes?: InputMaybe<Scalars['String']>;
  /** Search by payment schedule status of latest season in group. Support multiple values. (OR operation) */
  paymentScheduleStatus?: InputMaybe<Array<Scalars['String']>>;
};

export type SpendGuardianActiveGroup = {
  __typename?: 'SpendGuardianActiveGroup';
  dueDate?: Maybe<Scalars['String']>;
  group?: Maybe<SpendGroup>;
  roster?: Maybe<SpendRoster>;
};

export type SpendGuardianComingSoonInvoice = {
  __typename?: 'SpendGuardianComingSoonInvoice';
  invoiceAmountDue?: Maybe<Scalars['String']>;
  invoiceAutoPayAuthorized?: Maybe<Scalars['Boolean']>;
  invoiceDescription?: Maybe<Scalars['String']>;
  invoiceDueDate?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  invoicePaymentMethod?: Maybe<Scalars['String']>;
  invoiceStatus?: Maybe<Scalars['String']>;
  rosterName?: Maybe<Scalars['String']>;
  seasonName?: Maybe<Scalars['String']>;
};

export type SpendGuardianCounts = {
  __typename?: 'SpendGuardianCounts';
  activeGroups?: Maybe<Scalars['Int']>;
  comingSoonInvoices?: Maybe<Scalars['Int']>;
  recentTransactions?: Maybe<Scalars['Int']>;
};

export type SpendGuardianHighlight = {
  __typename?: 'SpendGuardianHighlight';
  activeGroups?: Maybe<Array<Maybe<SpendGuardianActiveGroup>>>;
  comingSoonInvoices?: Maybe<Array<Maybe<SpendGuardianComingSoonInvoice>>>;
  counts?: Maybe<SpendGuardianCounts>;
  recentTransactions?: Maybe<Array<Maybe<SpendGuardianRecentTransaction>>>;
};

export type SpendGuardianRecentTransaction = {
  __typename?: 'SpendGuardianRecentTransaction';
  amountDue?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  invoiceDescription?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  rosterName?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type SpendGuardianSignupInput = {
  groupId: Scalars['String'];
  rosterName: Scalars['String'];
  seasonId: Scalars['String'];
};

export type SpendInvite = {
  __typename?: 'SpendInvite';
  createdAt?: Maybe<Scalars['String']>;
  debitCard?: Maybe<Scalars['String']>;
  debitCards?: Maybe<Array<SpendDebitCard>>;
  email?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  group?: Maybe<SpendGroup>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isDeliverable?: Maybe<Scalars['Boolean']>;
  isUser?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type SpendInviteId = {
  __typename?: 'SpendInviteID';
  id?: Maybe<Scalars['String']>;
};

export type SpendInviteInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  groupId?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  type: SpendInviteType;
  userId?: InputMaybe<Scalars['String']>;
};

export type SpendInviteResponse = {
  __typename?: 'SpendInviteResponse';
  count?: Maybe<Scalars['Int']>;
  invites?: Maybe<Array<Maybe<SpendInvite>>>;
};

export enum SpendInviteType {
  GroupStaff = 'group_staff',
  Guardian = 'guardian',
  ProgramAdmin = 'program_admin',
  ProgramObserver = 'program_observer',
  ProgramStaff = 'program_staff'
}

export type SpendInviteWhereInput = {
  /** Search invitation which is archived */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Search by group id */
  groupId?: InputMaybe<Scalars['String']>;
  /** Search by invite name */
  nameIncludes?: InputMaybe<Scalars['String']>;
  /** Search by roster name only */
  rosterNameIncludes?: InputMaybe<Scalars['String']>;
  /** Search by invite status: accepted, pending, undeliverable */
  status?: InputMaybe<Scalars['String']>;
  /** Search by invite types. Valid values: guardian,group_staff,program_staff, program_observer,program_admin */
  type?: InputMaybe<Array<SpendInviteType>>;
  /** Search by invite type context: group or program. This will be affect invite type filter. */
  typeContext?: InputMaybe<Scalars['String']>;
};

export type SpendInvoice = {
  __typename?: 'SpendInvoice';
  amount?: Maybe<Scalars['Int']>;
  balanceDue?: Maybe<Scalars['Int']>;
  budgetItem?: Maybe<SpendBudget>;
  budgetItemId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  groupRoster?: Maybe<SpendGroupRoster>;
  groupRosterId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAutoPayAuthorized?: Maybe<Scalars['Int']>;
  isOptional?: Maybe<Scalars['Boolean']>;
  isReconciled?: Maybe<Scalars['Boolean']>;
  isRefunded?: Maybe<Scalars['Boolean']>;
  lastNotifyDate?: Maybe<Scalars['String']>;
  lastNotifyId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  notificationAttempts?: Maybe<Scalars['Int']>;
  optedIn?: Maybe<Scalars['Boolean']>;
  paid?: Maybe<Scalars['Boolean']>;
  paidDate?: Maybe<Scalars['String']>;
  paymentMethodId?: Maybe<Scalars['String']>;
  paymentMethodSource?: Maybe<Scalars['String']>;
  paymentScheduleInvoiceId?: Maybe<Scalars['String']>;
  reconciledTransactions?: Maybe<Array<Maybe<SpendReconciledInvoiceTransaction>>>;
  refundDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<SpendTransaction>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type SpendInvoiceFilter = {
  by: InvoiceReportFilterEnum;
  value: Scalars['String'];
};

export type SpendInvoiceId = {
  __typename?: 'SpendInvoiceID';
  id?: Maybe<Scalars['String']>;
};

export type SpendInvoiceIDs = {
  __typename?: 'SpendInvoiceIDs';
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SpendInvoiceInput = {
  amount?: InputMaybe<Scalars['Int']>;
  balanceDue?: InputMaybe<Scalars['Int']>;
  budgetItemId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  groupRosterId?: InputMaybe<Scalars['String']>;
  isOptional?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  optedIn?: InputMaybe<Scalars['Boolean']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  paidDate?: InputMaybe<Scalars['String']>;
  paymentScheduleInvoiceId?: InputMaybe<Scalars['String']>;
};

export type SpendInvoiceMock = {
  __typename?: 'SpendInvoiceMock';
  amount?: Maybe<Scalars['Int']>;
  balanceDue?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  group?: Maybe<SpendGroup>;
  id?: Maybe<Scalars['String']>;
  isReconciled?: Maybe<Scalars['Boolean']>;
  lastNotifyDate?: Maybe<Scalars['String']>;
  member?: Maybe<SpendMember>;
  paid?: Maybe<Scalars['Boolean']>;
  paidDate?: Maybe<Scalars['String']>;
  paymentScheduleInvoiceId?: Maybe<Scalars['String']>;
  season?: Maybe<SpendSeason>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type SpendInvoicePaymentDeauthorizeInput = {
  invoiceId?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type SpendInvoicePaymentMethodUpdate = {
  ids: Array<Scalars['String']>;
  paymentMethodId: Scalars['String'];
  paymentMethodSource: Scalars['String'];
};

export type SpendInvoiceRefundInput = {
  amount: Scalars['Int'];
  invoiceId: Scalars['String'];
};

export type SpendInvoiceRefundResponse = {
  __typename?: 'SpendInvoiceRefundResponse';
  invoiceId?: Maybe<Scalars['String']>;
  spendTransactionId?: Maybe<Scalars['String']>;
};

export type SpendInvoiceReminderInput = {
  email?: InputMaybe<Scalars['String']>;
  failedPayment?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  invoiceId?: InputMaybe<Scalars['String']>;
  pastDue?: InputMaybe<Scalars['Boolean']>;
};

export type SpendInvoiceRequestChangeInput = {
  invoiceId: Scalars['String'];
  note: Scalars['String'];
};

export type SpendInvoiceResponse = {
  __typename?: 'SpendInvoiceResponse';
  count?: Maybe<Scalars['Int']>;
  hasNext?: Maybe<Scalars['Boolean']>;
  invoices?: Maybe<Array<Maybe<SpendInvoice>>>;
};

export type SpendMember = {
  __typename?: 'SpendMember';
  child?: Maybe<SpendMemberChild>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  signedUp?: Maybe<Scalars['Boolean']>;
};

export type SpendMemberChild = {
  __typename?: 'SpendMemberChild';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SpendMockInvoiceResponse = {
  __typename?: 'SpendMockInvoiceResponse';
  count?: Maybe<Scalars['Int']>;
  invoices?: Maybe<Array<Maybe<SpendInvoiceMock>>>;
};

export type SpendNotificationId = {
  __typename?: 'SpendNotificationID';
  id?: Maybe<Scalars['String']>;
};

export type SpendNotificationInput = {
  email: Array<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  isEmailCCed: Scalars['Boolean'];
  message: Scalars['String'];
  subject?: InputMaybe<Scalars['String']>;
};

export type SpendNotificationStatus = {
  __typename?: 'SpendNotificationStatus';
  status?: Maybe<Scalars['String']>;
};

export type SpendOrganization = {
  __typename?: 'SpendOrganization';
  achBaseFee?: Maybe<Scalars['Int']>;
  achPercent?: Maybe<Scalars['Float']>;
  budgets?: Maybe<Array<Maybe<SpendBudget>>>;
  cardBaseFee?: Maybe<Scalars['Int']>;
  cardPercent?: Maybe<Scalars['Float']>;
  city: Scalars['String'];
  debitCards?: Maybe<SpendOrganizationDebitCardCount>;
  email: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  hasLinkedAccount?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  legalName: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  owner?: Maybe<SpendOrganizationOwner>;
  phone: Scalars['String'];
  spendBaseFee?: Maybe<Scalars['Int']>;
  spendPercent?: Maybe<Scalars['Float']>;
  state: Scalars['String'];
  street: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip: Scalars['String'];
};

export type SpendOrganizationCheckDepositTagsInput = {
  checkDepositId: Scalars['String'];
};

export type SpendOrganizationDebitCardCount = {
  __typename?: 'SpendOrganizationDebitCardCount';
  activated?: Maybe<Scalars['Int']>;
  assigned?: Maybe<Scalars['Int']>;
  shipped?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type SpendOrganizationExternalTransferInput = {
  accountId?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<ExternalTransferDirectionEnum>;
  note?: InputMaybe<Scalars['String']>;
};

export type SpendOrganizationFee = {
  __typename?: 'SpendOrganizationFee';
  achBaseFee?: Maybe<Scalars['Int']>;
  achPercent?: Maybe<Scalars['Float']>;
  cardBaseFee?: Maybe<Scalars['Int']>;
  cardPercent?: Maybe<Scalars['Float']>;
  spendBaseFee?: Maybe<Scalars['Int']>;
  spendPercent?: Maybe<Scalars['Float']>;
};

export type SpendOrganizationId = {
  __typename?: 'SpendOrganizationID';
  id?: Maybe<Scalars['String']>;
};

export type SpendOrganizationInput = {
  address: SpendAddressInput;
  email: Scalars['String'];
  legalName: Scalars['String'];
  logo: Scalars['String'];
  phone: Scalars['String'];
  website: Scalars['String'];
};

export type SpendOrganizationOwner = {
  __typename?: 'SpendOrganizationOwner';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type SpendOrganizationStatus = {
  __typename?: 'SpendOrganizationStatus';
  status?: Maybe<Scalars['Boolean']>;
};

export type SpendOrganizationsResponse = {
  __typename?: 'SpendOrganizationsResponse';
  count?: Maybe<Scalars['Int']>;
  hasNext?: Maybe<Scalars['Boolean']>;
  organizations?: Maybe<Array<SpendOrganization>>;
};

export type SpendOrganizationsWhereInput = {
  ids?: InputMaybe<Array<Scalars['String']>>;
  nameIncludes?: InputMaybe<Scalars['String']>;
  /** orgId is equivalent to externalId or id from orgs-api */
  orgIds?: InputMaybe<Array<Scalars['String']>>;
  states?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<OrganizationFilterEnum>;
};

export type SpendPaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type SpendPayNowResponse = {
  __typename?: 'SpendPayNowResponse';
  paymentId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SpendPaymentMethodDetach = {
  paymentMethodId: Scalars['String'];
};

export type SpendPaymentMethodDetachResponse = {
  __typename?: 'SpendPaymentMethodDetachResponse';
  paymentMethodId?: Maybe<Scalars['String']>;
};

export type SpendPaymentMethodInput = {
  amount?: InputMaybe<Scalars['Int']>;
  hasApprovedAgreement?: InputMaybe<Scalars['Boolean']>;
  invoiceIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isAutoPayAuthorized?: InputMaybe<Scalars['Boolean']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
  paymentMethodSource?: InputMaybe<Scalars['String']>;
  paymentMethodTiming?: InputMaybe<Scalars['String']>;
};

export type SpendPaymentMethodResponse = {
  __typename?: 'SpendPaymentMethodResponse';
  payment?: Maybe<SpendPayNowResponse>;
  updatedInvoiceIds: Array<Maybe<Scalars['String']>>;
};

export type SpendPaymentSchedule = {
  __typename?: 'SpendPaymentSchedule';
  amountDue?: Maybe<Scalars['Int']>;
  budgetItem?: Maybe<SpendBudget>;
  budgetItemId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  group?: Maybe<SpendGroup>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isOptional?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  season?: Maybe<SpendSeason>;
  seasonId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SpendPaymentScheduleBySeasonInput = {
  seasonId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type SpendPaymentScheduleId = {
  __typename?: 'SpendPaymentScheduleID';
  id?: Maybe<Scalars['String']>;
};

export type SpendPaymentScheduleInput = {
  amountDue?: InputMaybe<Scalars['Int']>;
  budgetItemId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  isOptional?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  seasonId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type SpendPolicy = {
  __typename?: 'SpendPolicy';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type SpendReconcileTransactionId = {
  __typename?: 'SpendReconcileTransactionID';
  id?: Maybe<Scalars['String']>;
};

export type SpendReconciledBudgetTransaction = {
  __typename?: 'SpendReconciledBudgetTransaction';
  amount?: Maybe<Scalars['Int']>;
  budgetItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  reconciledTransaction?: Maybe<SpendReconciledTransaction>;
  transactionId?: Maybe<Scalars['String']>;
};

export type SpendReconciledInvoiceTransaction = {
  __typename?: 'SpendReconciledInvoiceTransaction';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  reconciledTransaction?: Maybe<SpendReconciledTransaction>;
  transactionId?: Maybe<Scalars['String']>;
};

export type SpendReconciledTransaction = {
  __typename?: 'SpendReconciledTransaction';
  amount?: Maybe<Scalars['Int']>;
  budgetTransactions?: Maybe<Array<Maybe<SpendReconciledBudgetTransaction>>>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invoiceTransactions?: Maybe<Array<Maybe<SpendReconciledInvoiceTransaction>>>;
  paymentId?: Maybe<Scalars['String']>;
  transaction?: Maybe<SpendBankTransaction>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type SpendRole = {
  __typename?: 'SpendRole';
  groupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  organizationId?: Maybe<Scalars['String']>;
  permissions: Array<Maybe<Scalars['String']>>;
};

export type SpendRoleId = {
  __typename?: 'SpendRoleID';
  id?: Maybe<Scalars['String']>;
};

export enum SpendRoleNameEnum {
  GroupStaff = 'group_staff',
  Guardian = 'guardian',
  ProgramObserver = 'program_observer',
  ProgramStaff = 'program_staff'
}

export type SpendRoleResponse = {
  __typename?: 'SpendRoleResponse';
  count?: Maybe<Scalars['Int']>;
  roles?: Maybe<Array<Maybe<SpendRole>>>;
};

export type SpendRoster = {
  __typename?: 'SpendRoster';
  email?: Maybe<Scalars['String']>;
  groupRosters?: Maybe<Array<Maybe<SpendGroupRoster>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  total?: Maybe<SpendTransactionTotals>;
};

export type SpendRosterResponse = {
  __typename?: 'SpendRosterResponse';
  count?: Maybe<Scalars['Int']>;
  rosters?: Maybe<Array<Maybe<SpendRoster>>>;
};

export type SpendRosterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SpendSeason = {
  __typename?: 'SpendSeason';
  budgets?: Maybe<Array<Maybe<SpendBudget>>>;
  endDateAt?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  groupRoster?: Maybe<Array<Maybe<SpendGroupRoster>>>;
  id?: Maybe<Scalars['String']>;
  isBudgetShared?: Maybe<Scalars['Boolean']>;
  isLinkEnabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  paymentScheduleInvoices?: Maybe<Array<Maybe<SpendPaymentSchedule>>>;
  paymentScheduleStatus?: Maybe<Scalars['String']>;
  playerCount?: Maybe<Scalars['Int']>;
  startDateAt?: Maybe<Scalars['String']>;
  transactionTotals?: Maybe<SpendTransactionTotals>;
};

export type SpendSeasonId = {
  __typename?: 'SpendSeasonID';
  id?: Maybe<Scalars['String']>;
};

export type SpendSeasonInput = {
  endDateAt?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  isBudgetShared?: InputMaybe<Scalars['Boolean']>;
  isLinkEnabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  startDateAt?: InputMaybe<Scalars['String']>;
};

export type SpendSession = {
  __typename?: 'SpendSession';
  expiresAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  role?: Maybe<SpendRole>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SpendSessionId = {
  __typename?: 'SpendSessionID';
  id?: Maybe<Scalars['String']>;
};

export type SpendSettings = {
  __typename?: 'SpendSettings';
  enableGroupBanks?: Maybe<Scalars['Boolean']>;
  enableProgramAgreements?: Maybe<Scalars['Boolean']>;
  notifyBankActivityAdmins?: Maybe<Scalars['Boolean']>;
  notifyDueFrequencies?: Maybe<Array<Scalars['String']>>;
  notifyFailedAchAdmins?: Maybe<Scalars['Boolean']>;
  notifyPastDueAdmins?: Maybe<Scalars['Boolean']>;
  notifyPastDueNonUsers?: Maybe<Scalars['Boolean']>;
  notifyUpcomingNonUsers?: Maybe<Scalars['Boolean']>;
  /** @deprecated replaced by notifyDueFrequencies */
  pastDueFrequency?: Maybe<Scalars['Int']>;
  signUpAgreement?: Maybe<SignupAgreement>;
  signUpLink?: Maybe<Scalars['String']>;
};

export type SpendSettingsInput = {
  enableGroupBanks?: InputMaybe<Scalars['Boolean']>;
  enableProgramAgreements?: InputMaybe<Scalars['Boolean']>;
  notifyBankActivityAdmins?: InputMaybe<Scalars['Boolean']>;
  notifyDueFrequencies?: InputMaybe<Array<Scalars['String']>>;
  notifyFailedAchAdmins?: InputMaybe<Scalars['Boolean']>;
  notifyPastDueAdmins?: InputMaybe<Scalars['Boolean']>;
  notifyPastDueNonUsers?: InputMaybe<Scalars['Boolean']>;
  notifyUpcomingNonUsers?: InputMaybe<Scalars['Boolean']>;
  /** @deprecated: pastDueFrequency is replaced with notifyDueFrequencies */
  pastDueFrequency?: InputMaybe<Scalars['Int']>;
};

export type SpendSignupAgreementInput = {
  content: Scalars['String'];
  name: Scalars['String'];
};

export type SpendSignupFormResponse = {
  __typename?: 'SpendSignupFormResponse';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpendSortInput = {
  field: Scalars['String'];
  order?: InputMaybe<SpendSortOrderEnum>;
};

export enum SpendSortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpendTransaction = {
  __typename?: 'SpendTransaction';
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type SpendTransactionAttachmentId = {
  __typename?: 'SpendTransactionAttachmentID';
  id?: Maybe<Scalars['String']>;
};

export type SpendTransactionAttachmentInput = {
  /** Base-64 encoded file */
  content: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  /** Filename with extension */
  name: Scalars['String'];
  paymentId: Scalars['String'];
};

export type SpendTransactionFilter = {
  by: TransactionReportFilterEnum;
  value: Scalars['String'];
};

export type SpendTransactionInput = {
  direction?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalPaymentId?: InputMaybe<Scalars['String']>;
  invoiceIdList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source?: InputMaybe<Scalars['String']>;
};

export type SpendTransactionNoteId = {
  __typename?: 'SpendTransactionNoteID';
  id?: Maybe<Scalars['String']>;
};

export type SpendTransactionReconcileInput = {
  budgets?: InputMaybe<Array<InputMaybe<ReconcileBudget>>>;
  invoices?: InputMaybe<Array<InputMaybe<ReconcileInvoice>>>;
  ledgerTransactionAmount: Scalars['Int'];
  ledgerTransactionId: Scalars['String'];
};

export type SpendTransactionResponse = {
  __typename?: 'SpendTransactionResponse';
  count?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<SpendTransaction>>>;
};

export type SpendTransactionTags = {
  __typename?: 'SpendTransactionTags';
  spendAutoPay?: Maybe<Scalars['Boolean']>;
  spendDestinationId?: Maybe<Scalars['String']>;
  spendExternalId?: Maybe<Scalars['String']>;
  spendInvoiceIds?: Maybe<Scalars['String']>;
  spendOriginalPaymentId?: Maybe<Scalars['String']>;
  spendPaymentType?: Maybe<Scalars['String']>;
  spendSourceId?: Maybe<Scalars['String']>;
  spendUserId?: Maybe<Scalars['String']>;
};

export type SpendTransactionTotals = {
  __typename?: 'SpendTransactionTotals';
  credited?: Maybe<Scalars['Int']>;
  dueToday?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  pastDue?: Maybe<Scalars['Int']>;
  pastDueDays?: Maybe<Scalars['Int']>;
  processing?: Maybe<Scalars['Int']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  upcoming?: Maybe<Scalars['Int']>;
};

export type SpendTransactionsIdList = {
  __typename?: 'SpendTransactionsIdList';
  transactionIdList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SpendTranscationNoteInput = {
  content: Scalars['String'];
  paymentId: Scalars['String'];
};

export type SpendUnreconciledSummary = {
  __typename?: 'SpendUnreconciledSummary';
  credits?: Maybe<TransactionTotalCount>;
  debits?: Maybe<TransactionTotalCount>;
};

export type SpendUpdateResponse = {
  __typename?: 'SpendUpdateResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type SpendUpsertCategoryInput = {
  id?: InputMaybe<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  name: Scalars['String'];
  type: CategoryTypeEnum;
};

export type SpendUserId = {
  __typename?: 'SpendUserID';
  id?: Maybe<Scalars['String']>;
};

export type SpendUserRoleId = {
  __typename?: 'SpendUserRoleID';
  id?: Maybe<Scalars['String']>;
};

export type SpendUserSignupInput = {
  groupId: Scalars['String'];
  status: Scalars['String'];
};

export type SpendVerificationTokenResponse = {
  __typename?: 'SpendVerificationTokenResponse';
  verificationToken?: Maybe<Scalars['String']>;
};

export type Sponsor = {
  __typename?: 'Sponsor';
  assets?: Maybe<Array<Maybe<Asset>>>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  industry?: Maybe<Industry>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socialMediaAccounts?: Maybe<SocialMediaAccounts>;
  state?: Maybe<SponsorState>;
  status?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SponsorDistrict = {
  __typename?: 'SponsorDistrict';
  fields?: Maybe<SponsorDistrictFields>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SponsorDistrictFields = {
  __typename?: 'SponsorDistrictFields';
  name?: Maybe<Scalars['String']>;
};

export type SponsorDistricts = {
  __typename?: 'SponsorDistricts';
  districts?: Maybe<Array<Maybe<SponsorDistrict>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorInAssets = {
  __typename?: 'SponsorInAssets';
  asset?: Maybe<Asset>;
  assetId?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['Int']>;
  packageId?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Sponsor>;
  sponsorId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SponsorPaymentMethod = {
  __typename?: 'SponsorPaymentMethod';
  id?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  paymentMethodId?: Maybe<Scalars['String']>;
  sponsorId?: Maybe<Scalars['String']>;
};

export type SponsorSchool = {
  __typename?: 'SponsorSchool';
  fields?: Maybe<SponsorSchoolFields>;
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type SponsorSchoolFields = {
  __typename?: 'SponsorSchoolFields';
  name?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SponsorSchoolProgram = {
  __typename?: 'SponsorSchoolProgram';
  fields?: Maybe<SponsorSchoolProgramFields>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SponsorSchoolProgramFields = {
  __typename?: 'SponsorSchoolProgramFields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SponsorSchoolPrograms = {
  __typename?: 'SponsorSchoolPrograms';
  sponsorSchoolPrograms?: Maybe<Array<Maybe<SponsorSchoolProgram>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorSchools = {
  __typename?: 'SponsorSchools';
  schools?: Maybe<Array<Maybe<SponsorSchool>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorShipPackage = {
  __typename?: 'SponsorShipPackage';
  assets?: Maybe<Array<Maybe<Asset>>>;
  id?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  orderedAt?: Maybe<Scalars['String']>;
  receiptPDF?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Sponsor>;
  sponsorId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SponsorState = {
  __typename?: 'SponsorState';
  abbreviation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SponsorSubDistrict = {
  __typename?: 'SponsorSubDistrict';
  fields?: Maybe<SponsorDistrictFields>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SponsorSubDistricts = {
  __typename?: 'SponsorSubDistricts';
  subDistricts?: Maybe<Array<Maybe<SponsorSubDistrict>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsoredSponsorShipGroup = {
  __typename?: 'SponsoredSponsorShipGroup';
  assets?: Maybe<Array<Maybe<Asset>>>;
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  fees?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['String']>;
  orderdate?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageId?: Maybe<Scalars['String']>;
  receiptPDF?: Maybe<Scalars['String']>;
  sponsorshipgroups?: Maybe<Array<Maybe<SponsorshipGroup>>>;
  subTotal?: Maybe<Scalars['Float']>;
  types?: Maybe<Array<Maybe<AssetType>>>;
};

export type SponsoredSponsorShipGroups = {
  __typename?: 'SponsoredSponsorShipGroups';
  sponsorShipGroups?: Maybe<Array<Maybe<SponsoredSponsorShipGroup>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Sponsors = {
  __typename?: 'Sponsors';
  sponsors?: Maybe<Array<Maybe<Sponsor>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorsOnAssets = {
  __typename?: 'SponsorsOnAssets';
  assetId?: Maybe<Scalars['String']>;
  assignedAt?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['Int']>;
  sponsorId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SponsorshipGroup = {
  __typename?: 'SponsorshipGroup';
  activity?: Maybe<Activity>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isStripeVerified?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  motive?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  qrCode?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  socialMediaAccounts?: Maybe<SocialMediaAccounts>;
  state?: Maybe<SponsorState>;
  status?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
  stripeAccountStatus?: Maybe<Scalars['String']>;
  stripeConnectAccountId?: Maybe<Scalars['String']>;
  teamPhoto?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SponsorshipGroupConnect = {
  sponsorshipGroup?: InputMaybe<Connect>;
};

export type SponsorshipGroupOnOrder = {
  __typename?: 'SponsorshipGroupOnOrder';
  assignedAt?: Maybe<Scalars['String']>;
  assignedBy?: Maybe<Scalars['String']>;
  package?: Maybe<SponsorShipPackage>;
  packageId?: Maybe<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  sponsorshipGroupId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SponsorshipGroupOnOrders = {
  __typename?: 'SponsorshipGroupOnOrders';
  orders?: Maybe<Array<Maybe<SponsorshipGroupOnOrder>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorshipGroupOrdersStats = {
  __typename?: 'SponsorshipGroupOrdersStats';
  completed?: Maybe<Scalars['Int']>;
  rejected?: Maybe<Scalars['Int']>;
  requireApproval?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Float']>;
};

export type SponsorshipGroups = {
  __typename?: 'SponsorshipGroups';
  sponsorShipGroups?: Maybe<Array<Maybe<SponsorshipGroup>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorshipGroupsOnPackages = {
  __typename?: 'SponsorshipGroupsOnPackages';
  assignedAt?: Maybe<Scalars['String']>;
  assignedBy?: Maybe<Scalars['String']>;
  packageId?: Maybe<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  sponsorshipGroupId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export enum State {
  Alabama = 'ALABAMA',
  Alaska = 'ALASKA',
  Arizona = 'ARIZONA',
  Arkansas = 'ARKANSAS',
  California = 'CALIFORNIA',
  Colorado = 'COLORADO',
  Connecticut = 'CONNECTICUT',
  Delaware = 'DELAWARE',
  DistrictOfColumbia = 'DISTRICT_OF_COLUMBIA',
  Florida = 'FLORIDA',
  Georgia = 'GEORGIA',
  Hawaii = 'HAWAII',
  Idaho = 'IDAHO',
  Illinois = 'ILLINOIS',
  Indiana = 'INDIANA',
  Iowa = 'IOWA',
  Kansas = 'KANSAS',
  Kentucky = 'KENTUCKY',
  Louisiana = 'LOUISIANA',
  Maine = 'MAINE',
  Maryland = 'MARYLAND',
  Massachusetts = 'MASSACHUSETTS',
  Michigan = 'MICHIGAN',
  Minnesota = 'MINNESOTA',
  Mississippi = 'MISSISSIPPI',
  Missouri = 'MISSOURI',
  Montana = 'MONTANA',
  Nebraska = 'NEBRASKA',
  Nevada = 'NEVADA',
  NewHampshire = 'NEW_HAMPSHIRE',
  NewJersey = 'NEW_JERSEY',
  NewMexico = 'NEW_MEXICO',
  NewYork = 'NEW_YORK',
  NorthCarolina = 'NORTH_CAROLINA',
  NorthDakota = 'NORTH_DAKOTA',
  Ohio = 'OHIO',
  Oklahoma = 'OKLAHOMA',
  Oregon = 'OREGON',
  Pennsylvania = 'PENNSYLVANIA',
  RhodeIsland = 'RHODE_ISLAND',
  SouthCarolina = 'SOUTH_CAROLINA',
  SouthDakota = 'SOUTH_DAKOTA',
  Tennessee = 'TENNESSEE',
  Texas = 'TEXAS',
  Utah = 'UTAH',
  Vermont = 'VERMONT',
  Virginia = 'VIRGINIA',
  Washington = 'WASHINGTON',
  WestVirginia = 'WEST_VIRGINIA',
  Wisconsin = 'WISCONSIN',
  Wyoming = 'WYOMING'
}

export enum StateCode {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  As = 'AS',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  Dc = 'DC',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Gu = 'GU',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Pr = 'PR',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Um = 'UM',
  Ut = 'UT',
  Va = 'VA',
  Vi = 'VI',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}

export enum Status {
  Pending = 'PENDING',
  Settled = 'SETTLED'
}

export type StoreBaseSellerUnionType = OnException | StoreScopeBestSeller;

export type StoreBestSeller = {
  __typename?: 'StoreBestSeller';
  productId?: Maybe<Scalars['Int']>;
  productImage?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productPrice?: Maybe<Scalars['Float']>;
  productQuantity?: Maybe<Scalars['Int']>;
  productType?: Maybe<Scalars['String']>;
};

export type StoreBrands = {
  __typename?: 'StoreBrands';
  brands?: Maybe<Array<Maybe<Brand>>>;
};

export type StoreBrandsUnionType = OnException | StoreBrands;

export type StoreBuildRequest = {
  __typename?: 'StoreBuildRequest';
  email?: Maybe<Scalars['String']>;
  referenceTicket?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['String']>;
  storeRequest?: Maybe<Scalars['Boolean']>;
  userSsoId?: Maybe<Scalars['String']>;
};

export type StoreBuildRequestUnionType = OnException | StoreBuildRequest;

export type StoreBuildRequester = {
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type StoreByCampaignIdsInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  campaignIds: Array<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderBySort?: InputMaybe<Scalars['String']>;
  scopeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type StoreByGlEmailInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderBySort?: InputMaybe<Scalars['String']>;
  scopeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type StoreCampaign = {
  __typename?: 'StoreCampaign';
  accountManagerId?: Maybe<Scalars['Int']>;
  commissionEligibleSalesrepId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  gool?: Maybe<Scalars['Int']>;
  groupLeaderEmail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initialGoalCents?: Maybe<Scalars['Int']>;
  joinCode?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  originalSalesrepId?: Maybe<Scalars['Int']>;
  salesrepId?: Maybe<Scalars['Int']>;
  settlementConfirmationStatus?: Maybe<Scalars['String']>;
  settlementMethod?: Maybe<Scalars['String']>;
  settlementStatus?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  teamSize?: Maybe<Scalars['Int']>;
  totalRaisedCents?: Maybe<Scalars['Int']>;
  userDirectoryId?: Maybe<Scalars['String']>;
};

export type StoreCreatePaymentIntent = {
  amount: Scalars['Float'];
  email: Scalars['String'];
  paymentMethod?: InputMaybe<Scalars['String']>;
  userSsoId: Scalars['String'];
};

export type StoreCustomerInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type StoreEditInfo = {
  __typename?: 'StoreEditInfo';
  code?: Maybe<Scalars['String']>;
  scopeId?: Maybe<Scalars['Int']>;
};

export type StoreEditInfoInput = {
  activityType?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productColors?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  scopeId: Scalars['Int'];
  storeCode: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
};

export type StoreEditInfoUnionType = OnException | StoreEditInfo;

export type StoreFilterUnionType = OnException | StoresFilter;

export type StoreGlInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type StoreManagerUpdatePoints = {
  managerEmail: Scalars['String'];
  managerId: Scalars['Int'];
  points: Scalars['Float'];
  scopeId: Scalars['Int'];
};

export type StoreManagerUpdatePointsUnionType = MagentoStoreManager | OnException;

export type StoreOrderItemImage = {
  __typename?: 'StoreOrderItemImage';
  imageUrl?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['BigInt']>;
  selectedLogo?: Maybe<Scalars['String']>;
};

export type StoreOrderItems = {
  __typename?: 'StoreOrderItems';
  items?: Maybe<Array<Maybe<StoreOrderItemImage>>>;
};

export type StoreOrderItemsUnionType = OnException | StoreOrderItems;

export type StoreOrderSalesGraphs = {
  __typename?: 'StoreOrderSalesGraphs';
  graphs?: Maybe<Array<Maybe<StoreOrderSalesGraph>>>;
};

export type StoreParticipant = {
  __typename?: 'StoreParticipant';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type StoreParticipantInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type StorePaymantIntentUnionType = OnException | StorePaymentIntent;

export type StorePaymentIntent = {
  __typename?: 'StorePaymentIntent';
  clientSecret?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  userSsoId?: Maybe<Scalars['String']>;
};

export type StorePointEarnedGraphInput = {
  interval?: InputMaybe<Scalars['Int']>;
  managerId: Scalars['Int'];
  scopeId: Scalars['Int'];
};

export type StoreProductGroupsAndColors = {
  __typename?: 'StoreProductGroupsAndColors';
  colors?: Maybe<Array<Maybe<ProductGroupAndColors>>>;
};

export type StoreProductGroupsAndColorsUnionType = OnException | StoreProductGroupsAndColors;

export type StoreReceiverData = {
  __typename?: 'StoreReceiverData';
  email?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
  receiverId?: Maybe<Scalars['BigInt']>;
};

export type StoreSaveTransaction = {
  amount: Scalars['Float'];
  email: Scalars['String'];
  points: Scalars['Float'];
  scopeId: Scalars['Int'];
  transactionInfo: Scalars['String'];
  userSsoId: Scalars['String'];
};

export type StoreScopeBestSeller = {
  __typename?: 'StoreScopeBestSeller';
  bestSellers?: Maybe<Array<Maybe<StoreBestSeller>>>;
};

export type StoreSender = {
  email: Scalars['String'];
  scopeId: Scalars['Int'];
  senderId: Scalars['Int'];
};

export type StoreSenderData = {
  __typename?: 'StoreSenderData';
  email?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['BigInt']>;
};

export type StoreStatusInput = {
  reasonWhy?: InputMaybe<StoreStatusReasonWhy>;
  scopeId: Scalars['Int'];
  status: Scalars['Boolean'];
};

export type StoreStatusReasonWhy = {
  comment?: InputMaybe<Scalars['String']>;
  commentOption?: InputMaybe<Scalars['String']>;
};

export type StoreSubscribedUser = {
  __typename?: 'StoreSubscribedUser';
  isSubscribed?: Maybe<Scalars['Boolean']>;
};

export type StoreSubscribedUserUnionType = OnException | StoreSubscribedUser;

export type StoreSummaryByCampaignIdsInput = {
  campaignIds: Array<Scalars['Int']>;
  scopeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timeline?: InputMaybe<Scalars['Int']>;
};

export type StoreTicket = {
  __typename?: 'StoreTicket';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  scopeId?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['String']>;
  ticketId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type StoreTicketInput = {
  message: Scalars['String'];
  requester: StoreTicketRequester;
  scopeId: Scalars['Int'];
  storeCode: Scalars['String'];
  subject: Scalars['String'];
};

export type StoreTicketRequester = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type StoreTicketUnionType = OnException | StoreTickets;

export type StoreTickets = {
  __typename?: 'StoreTickets';
  tickets?: Maybe<Array<Maybe<StoreTicket>>>;
};

export type StoreTicketsUnionType = OnException | StoreTicket;

export type StoreTransaction = {
  __typename?: 'StoreTransaction';
  amount?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
  scopeId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  userSsoId?: Maybe<Scalars['String']>;
};

export type StoreTransactionUnionType = OnException | StoreTransaction;

export type StoreTransferCustomer = {
  customer?: InputMaybe<StoreCustomerInput>;
  points: Scalars['Float'];
  sender?: InputMaybe<StoreSender>;
};

export type StoreTransferGl = {
  groupLeader?: InputMaybe<StoreGlInput>;
  points: Scalars['Float'];
  sender?: InputMaybe<StoreSender>;
};

export type StoreTransferParticipant = {
  participant?: InputMaybe<StoreParticipantInput>;
  points: Scalars['Float'];
  sender?: InputMaybe<StoreSender>;
};

export type StoreTransferPointsUnionType = OnException | StoreTransferReturn;

export type StoreTransferReturn = {
  __typename?: 'StoreTransferReturn';
  points?: Maybe<Scalars['Float']>;
  receiver?: Maybe<StoreReceiverData>;
  sender?: Maybe<StoreSenderData>;
  status?: Maybe<Scalars['String']>;
};

export type StoreUser = {
  __typename?: 'StoreUser';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type StoreUserCampaignUnionType = OnException | StoreUserCampaigns;

export type StoreUserCampaigns = {
  __typename?: 'StoreUserCampaigns';
  campaigns?: Maybe<Array<Maybe<StoreCampaign>>>;
  pagination?: Maybe<SdPagination>;
};

export type StoreUserCampaignsInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  demo?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderBySort?: InputMaybe<Scalars['String']>;
  searchBy?: InputMaybe<Scalars['String']>;
  searchValue?: InputMaybe<Scalars['ID']>;
};

export type StoreUserInfoUnionType = OnException | StoreUser;

export type StoreUserParticipantUnionType = OnException | StoreUserParticipants;

export type StoreUserParticipants = {
  __typename?: 'StoreUserParticipants';
  pagination?: Maybe<SdPagination>;
  participants?: Maybe<Array<Maybe<StoreParticipant>>>;
};

export type StoreUserParticipantsInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  campaignIds: Array<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type StoresFilter = {
  __typename?: 'StoresFilter';
  pagination?: Maybe<SdPagination>;
  stores?: Maybe<Array<Maybe<MagentoStore>>>;
};

export type StoresSummary = {
  __typename?: 'StoresSummary';
  baseSales?: Maybe<Scalars['Float']>;
  orders?: Maybe<Scalars['BigInt']>;
  points?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  stores?: Maybe<Scalars['BigInt']>;
};

export type StoresSummaryByGlEmailInput = {
  email: Scalars['String'];
  scopeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timeline?: InputMaybe<Scalars['Int']>;
};

export type StoresSummaryUnionType = OnException | StoresSummary;

export type StripeAccount = {
  __typename?: 'StripeAccount';
  accountId: Scalars['String'];
  accountType?: Maybe<AccountType>;
  campaignId: Scalars['String'];
};

export enum StripeEnv {
  Raise = 'RAISE',
  Spend = 'SPEND'
}

/** See CampaignMembership for details */
export type SupporterCampaign = {
  __typename?: 'SupporterCampaign';
  id: Scalars['ID'];
};

export type Team = {
  __typename?: 'Team';
  facility?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  groupval?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  level1?: Maybe<Scalars['String']>;
  sport_code: Scalars['String'];
  sport_description?: Maybe<Scalars['String']>;
  sport_name: Scalars['String'];
};

export type TeamByCodeInput = {
  sport_code: Scalars['String'];
};

export type TeamCreateInput = {
  facility?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  groupval?: InputMaybe<Scalars['String']>;
  home_field?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  level1?: InputMaybe<Scalars['String']>;
  sport_code?: InputMaybe<Scalars['String']>;
  sport_description?: InputMaybe<Scalars['String']>;
  sport_name?: InputMaybe<Scalars['String']>;
};

export type TeamDeleteInput = {
  sport_code: Scalars['String'];
};

export type TeamModifyInput = {
  facility?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  groupval?: InputMaybe<Scalars['String']>;
  home_field?: InputMaybe<Scalars['String']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  level1?: InputMaybe<Scalars['String']>;
  sport_code?: InputMaybe<Scalars['String']>;
  sport_description?: InputMaybe<Scalars['String']>;
  sport_name?: InputMaybe<Scalars['String']>;
};

export type TeamOfficialCreateInput = {
  id: Scalars['Int'];
  pay?: InputMaybe<Scalars['Float']>;
  pay_code?: InputMaybe<Scalars['String']>;
  sport: Scalars['String'];
  worker_duty?: InputMaybe<Scalars['String']>;
};

export type TeamOfficialDeleteInput = {
  id: Scalars['Int'];
};

export type TeamOfficialModifyInput = {
  id: Scalars['Int'];
  pay?: InputMaybe<Scalars['Float']>;
  pay_code?: InputMaybe<Scalars['String']>;
  worker_duty?: InputMaybe<Scalars['String']>;
};

export type TeamPreparationCreateInput = {
  id: Scalars['Int'];
  prep: Scalars['Int'];
  qty?: InputMaybe<Scalars['String']>;
  sport: Scalars['String'];
};

export type TeamPreparationDeleteInput = {
  id: Scalars['Int'];
};

export type TeamPreparationModifyInput = {
  id: Scalars['Int'];
  prep?: InputMaybe<Scalars['Int']>;
  qty?: InputMaybe<Scalars['String']>;
};

export type TeamWorkerCreateInput = {
  home_field?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  pay?: InputMaybe<Scalars['Float']>;
  pay_code?: InputMaybe<Scalars['String']>;
  sport: Scalars['String'];
  worker_duty?: InputMaybe<Scalars['String']>;
  worker_name?: InputMaybe<Scalars['String']>;
};

export type TeamWorkerDeleteInput = {
  id: Scalars['Int'];
};

export type TeamWorkerModifyInput = {
  home_field?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  pay?: InputMaybe<Scalars['Float']>;
  pay_code?: InputMaybe<Scalars['String']>;
  worker_duty?: InputMaybe<Scalars['String']>;
  worker_name?: InputMaybe<Scalars['String']>;
};

export type TemplateOfficial = {
  __typename?: 'TemplateOfficial';
  id: Scalars['Int'];
  pay?: Maybe<Scalars['Float']>;
  pay_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  worker_duty?: Maybe<Scalars['String']>;
};

export type TemplatePreparation = {
  __typename?: 'TemplatePreparation';
  id: Scalars['Int'];
  prep?: Maybe<Scalars['Int']>;
  preparation_id?: Maybe<Scalars['String']>;
  preparation_name?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

export type TemplateWorker = {
  __typename?: 'TemplateWorker';
  home_field?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  pay?: Maybe<Scalars['Float']>;
  pay_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  worker_duty?: Maybe<Scalars['String']>;
  worker_name?: Maybe<Scalars['String']>;
};

export type Tokens = {
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Total = {
  __typename?: 'Total';
  salary?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['Decimal']>;
  correlationId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  effective: Scalars['Timestamp'];
  externalId: Scalars['String'];
  id: Scalars['UUID'];
  metadata?: Maybe<Scalars['JSON']>;
  processor?: Maybe<Scalars['String']>;
  snapAmount?: Maybe<Scalars['Decimal']>;
  source?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type TransactionAttachment = {
  __typename?: 'TransactionAttachment';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastUpdatedByUserId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TransactionAttachmentsResponse = {
  __typename?: 'TransactionAttachmentsResponse';
  attachments?: Maybe<Array<Maybe<TransactionAttachment>>>;
};

export type TransactionDetail = {
  __typename?: 'TransactionDetail';
  amount?: Maybe<Scalars['Decimal']>;
  description: Scalars['String'];
  destination?: Maybe<Scalars['String']>;
  externalId: Scalars['String'];
  history: Array<Maybe<TransactionHistoryEvent>>;
  id: Scalars['UUID'];
  metadata?: Maybe<Scalars['JSON']>;
  processor?: Maybe<Scalars['String']>;
  snapAmount?: Maybe<Scalars['Decimal']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum TransactionFilterEnum {
  Date = 'date',
  GroupName = 'groupName',
  Method = 'method',
  ReconciledStatus = 'reconciledStatus',
  SeasonName = 'seasonName',
  Status = 'status',
  Type = 'type'
}

export type TransactionHistoryEvent = {
  __typename?: 'TransactionHistoryEvent';
  date: Scalars['Timestamp'];
  status: Status;
  transactionId: Scalars['UUID'];
};

export type TransactionNotes = {
  __typename?: 'TransactionNotes';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastUpdatedByUserId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TransactionNotesResponse = {
  __typename?: 'TransactionNotesResponse';
  notes?: Maybe<Array<Maybe<TransactionNotes>>>;
};

export enum TransactionReportFilterEnum {
  DateAfter = 'dateAfter',
  DateBefore = 'dateBefore',
  GroupIdOrgId = 'groupIdOrgId',
  Method = 'method',
  Status = 'status',
  Type = 'type'
}

export type TransactionTotalCount = {
  __typename?: 'TransactionTotalCount';
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TransactionsInput = {
  createdAfter?: InputMaybe<Scalars['Timestamp']>;
  createdBefore?: InputMaybe<Scalars['Timestamp']>;
  destination?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSONObject']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type TransformedDailyCalendarBusSchedule = {
  __typename?: 'TransformedDailyCalendarBusSchedule';
  calendar?: Maybe<Array<Maybe<Scalars['String']>>>;
  events?: Maybe<Array<Maybe<DailyCalendarBusScheduleEvents>>>;
  exportdata?: Maybe<Array<Maybe<DailyCalendarBusScheduleExportData>>>;
};

export type TransformedDailyCalendarEventReturn = {
  __typename?: 'TransformedDailyCalendarEventReturn';
  activity?: Maybe<Scalars['String']>;
  activityLevel?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  bus_fee?: Maybe<Scalars['Int']>;
  bus_time?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  conference_event_id?: Maybe<Scalars['Int']>;
  conference_id?: Maybe<Scalars['Int']>;
  confirmed?: Maybe<Scalars['String']>;
  confirmedStatusBoolean?: Maybe<Scalars['Boolean']>;
  contract?: Maybe<Scalars['String']>;
  departure_location?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  early_dismissal_required?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  eventOfficial?: Maybe<Scalars['String']>;
  eventOfficialCell?: Maybe<Scalars['String']>;
  eventOfficialEmail?: Maybe<Scalars['String']>;
  eventTiming?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  exists_in_mls?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  formatedEventDate?: Maybe<Scalars['String']>;
  formatedEventDateSystem?: Maybe<Scalars['String']>;
  formatedEventDay?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gate_revenue?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  impact_event?: Maybe<Scalars['String']>;
  isDuplicate?: Maybe<Scalars['String']>;
  lead?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  loss_points?: Maybe<Scalars['Int']>;
  noofgames?: Maybe<Scalars['String']>;
  num_buses?: Maybe<Scalars['Int']>;
  num_buses_text?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  opponent_code?: Maybe<Scalars['String']>;
  opponent_score?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  prep_setup?: Maybe<Scalars['String']>;
  promote?: Maybe<Scalars['String']>;
  results?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  rollover?: Maybe<Scalars['String']>;
  rolloverStatusBoolean?: Maybe<Scalars['Boolean']>;
  salary?: Maybe<Scalars['Int']>;
  seasonInfo?: Maybe<Scalars['String']>;
  seasonSportCode?: Maybe<Scalars['String']>;
  season_team?: Maybe<Scalars['Int']>;
  serialnumber?: Maybe<Scalars['String']>;
  sportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  sportGender?: Maybe<Scalars['String']>;
  sportLevel?: Maybe<Scalars['String']>;
  sportName?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  team_score?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tournament?: Maybe<Scalars['String']>;
  trans_id?: Maybe<Scalars['Int']>;
  transportDetails?: Maybe<Scalars['String']>;
  transport_comments?: Maybe<Scalars['String']>;
  transportation?: Maybe<Scalars['String']>;
  vehicle_count?: Maybe<Scalars['String']>;
  vehiclesTransportDetails?: Maybe<Array<Maybe<DailyCalendarEventTransportDetails>>>;
  web_dir?: Maybe<Scalars['String']>;
  weekdayname?: Maybe<Scalars['String']>;
  win_points?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['String']>;
};

export type TransformedDailyCalendarOfficials = {
  __typename?: 'TransformedDailyCalendarOfficials';
  exportdata?: Maybe<Array<Maybe<DailyCalendarOfficialExport>>>;
  message?: Maybe<Array<Maybe<DailyCalendarOfficialMessage>>>;
};

export type TransformedDailyCalendarPreparation = {
  __typename?: 'TransformedDailyCalendarPreparation';
  exportdata?: Maybe<Array<Maybe<DailyCalendarPreparationExportData>>>;
  message?: Maybe<Array<Maybe<DailyCalendarPreparationMessage>>>;
};

export type TransformedDailyCalendarWorkers = {
  __typename?: 'TransformedDailyCalendarWorkers';
  exportdata?: Maybe<Array<Maybe<DailyCalendarWorkerExportData>>>;
  message?: Maybe<Array<Maybe<DailyCalendarWorkerMessage>>>;
};

export type TransformedEventReturn = {
  __typename?: 'TransformedEventReturn';
  activity?: Maybe<Scalars['String']>;
  activityLevel?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  bus_fee?: Maybe<Scalars['Int']>;
  bus_time?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  conference_event_id?: Maybe<Scalars['Int']>;
  conference_id?: Maybe<Scalars['Int']>;
  confirmed?: Maybe<Scalars['String']>;
  confirmedStatusBoolean?: Maybe<Scalars['Boolean']>;
  contract?: Maybe<Scalars['String']>;
  departure_location?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  duty?: Maybe<Scalars['String']>;
  early_dismissal_required?: Maybe<Scalars['String']>;
  early_dismissal_time?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  estimated_return_time?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  eventOfficial?: Maybe<Scalars['String']>;
  eventOfficialCell?: Maybe<Scalars['String']>;
  eventOfficialEmail?: Maybe<Scalars['String']>;
  eventTiming?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  exists_in_mls?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  formatedEventDate?: Maybe<Scalars['String']>;
  formatedEventDateSystem?: Maybe<Scalars['String']>;
  formatedEventDay?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gate_revenue?: Maybe<Scalars['Int']>;
  groupval?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  impact_event?: Maybe<Scalars['String']>;
  isDuplicate?: Maybe<Scalars['String']>;
  lead?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  loss_points?: Maybe<Scalars['Int']>;
  noofgames?: Maybe<Scalars['String']>;
  num_buses?: Maybe<Scalars['Int']>;
  num_buses_text?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  opponent_code?: Maybe<Scalars['String']>;
  opponent_score?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  prep_setup?: Maybe<Scalars['String']>;
  promote?: Maybe<Scalars['String']>;
  results?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  rollover?: Maybe<Scalars['String']>;
  rolloverStatusBoolean?: Maybe<Scalars['Boolean']>;
  salary?: Maybe<Scalars['Int']>;
  seasonInfo?: Maybe<Scalars['String']>;
  seasonSportCode?: Maybe<Scalars['String']>;
  season_team?: Maybe<Scalars['Int']>;
  serialnumber?: Maybe<Scalars['String']>;
  sportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  sportGender?: Maybe<Scalars['String']>;
  sportLevel?: Maybe<Scalars['String']>;
  sportName?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  team_score?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tournament?: Maybe<Scalars['String']>;
  trans_id?: Maybe<Scalars['Int']>;
  transportDetails?: Maybe<Scalars['String']>;
  transport_comments?: Maybe<Scalars['String']>;
  transportation?: Maybe<Scalars['String']>;
  vehicle_count?: Maybe<Scalars['String']>;
  web_dir?: Maybe<Scalars['String']>;
  weekdayname?: Maybe<Scalars['String']>;
  win_points?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['String']>;
};

export type TransformedOfficialAssignment = {
  __typename?: 'TransformedOfficialAssignment';
  duty?: Maybe<Scalars['String']>;
  eventActivity?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  eventHomeAway?: Maybe<Scalars['String']>;
  eventLocation?: Maybe<Scalars['String']>;
  eventOpponent?: Maybe<Scalars['String']>;
  eventTime?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Int']>;
  seasonSportCode?: Maybe<Scalars['String']>;
  sportDescription?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
};

export enum TransportEnum {
  Email = 'email',
  Sms = 'sms'
}

export type TransportType = {
  __typename?: 'TransportType';
  recipient?: Maybe<Scalars['String']>;
  transport?: Maybe<TransportEnum>;
};

export type UnconfirmedEvents = {
  __typename?: 'UnconfirmedEvents';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_phone?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  facility?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_id?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type UnconfirmedEventsFiltersInput = {
  activity?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  opponents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  year?: InputMaybe<Scalars['String']>;
};

export type UnconfirmedEventsList = {
  __typename?: 'UnconfirmedEventsList';
  items?: Maybe<Array<Maybe<UnconfirmedEvents>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  totalFilteredItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  totalRows?: Maybe<Scalars['Int']>;
};

/** Unit API */
export type UnitBusinessApplicationResponse = {
  __typename?: 'UnitBusinessApplicationResponse';
  applicationId: Scalars['String'];
  customerId?: Maybe<Scalars['String']>;
};

export type UpdatedFundraiserStoreUrl = {
  __typename?: 'UpdatedFundraiserStoreUrl';
  id?: Maybe<Scalars['Int']>;
};

export type UpdatedParticipantGroupCount = {
  __typename?: 'UpdatedParticipantGroupCount';
  count?: Maybe<Scalars['Int']>;
};

export type UpsertEventParticipantsCount = {
  __typename?: 'UpsertEventParticipantsCount';
  count?: Maybe<Scalars['Int']>;
};

export type UpsertEventParticipantsInput = {
  eventParticipantsArray: Array<InputMaybe<EventParticipantsInput>>;
};

export type UpsertEventPreparationsCount = {
  __typename?: 'UpsertEventPreparationsCount';
  count?: Maybe<Scalars['Int']>;
};

export type UpsertEventPreparationsInput = {
  eventPreparationsArray: Array<InputMaybe<EventPreparationsInput>>;
};

export type UpsertEventTransportDetailsCount = {
  __typename?: 'UpsertEventTransportDetailsCount';
  count?: Maybe<Scalars['Int']>;
};

export type UpsertEventTransportDetailsInput = {
  eventTransportDetailsArray: Array<InputMaybe<EventTransportDetailsInput>>;
};

export type UpsertFacilitiesInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  facility_name: Scalars['String'];
  location_id?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpsertManyWorkersInput = {
  workersArray: Array<InputMaybe<CreateWorkerInput>>;
};

export type UpsertOfficialDutiesInput = {
  duty?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpsertOfficialsInput = {
  address?: InputMaybe<Scalars['String']>;
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  home_phone?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  official_id: Scalars['String'];
  ssn?: InputMaybe<Scalars['String']>;
  work_phone?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type UpsertOpponentsInput = {
  ad_name?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  school_code: Scalars['String'];
  school_name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type UpsertWorkersInput = {
  cell_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  home_phone?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  pay_rate?: InputMaybe<Scalars['Float']>;
  ssn?: InputMaybe<Scalars['String']>;
  worker_type?: InputMaybe<WorkerTypes>;
};

export type UrgentAnnouncementFilter = {
  orderBy?: InputMaybe<ManageAnnouncementOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  apps?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  kyc?: Maybe<VaultKyc>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  occupation?: Maybe<UserOccupation>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  /** @deprecated will be removed in the next release */
  snapRaiseId?: Maybe<Scalars['String']>;
  /** @deprecated will be removed in the next release */
  snapSpendId?: Maybe<Scalars['String']>;
  walletOrganization?: Maybe<Organization>;
  walletTerms?: Maybe<Scalars['Boolean']>;
};

export enum UserApps {
  Connect = 'connect',
  Drive = 'drive',
  Home = 'home',
  Insights = 'insights',
  Manage = 'manage',
  Raise = 'raise',
  Spend = 'spend',
  Sponsor = 'sponsor',
  Store = 'store',
  Wallet = 'wallet'
}

export type UserChallenge = {
  __typename?: 'UserChallenge';
  completedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  params?: Maybe<Scalars['JSONObject']>;
  skippedAt?: Maybe<Scalars['String']>;
  status: UserChallengeStatus;
};

export enum UserChallengeStatus {
  Awaiting = 'AWAITING',
  Completed = 'COMPLETED',
  Skipped = 'SKIPPED'
}

export type UserFitting = {
  __typename?: 'UserFitting';
  fitting?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export enum UserFittingPreference {
  Mens = 'MENS',
  Womens = 'WOMENS'
}

export type UserInviteResponse = {
  __typename?: 'UserInviteResponse';
  redirect?: Maybe<Scalars['String']>;
};

export enum UserInviteStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type UserNode = {
  __typename?: 'UserNode';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  internal?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserOccupation {
  DistrictAdministrator = 'district_administrator',
  FinancialAdministrator = 'financial_administrator',
  GroupLeader = 'group_leader',
  Other = 'other',
  Parent = 'parent',
  SchoolDirector = 'school_director',
  StateAdministrator = 'state_administrator',
  StudentOrParticipant = 'student_or_participant',
  Unknown = 'unknown'
}

export type UserPermission = {
  __typename?: 'UserPermission';
  id: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
};

export type UserPermissionAssignment = {
  id: Scalars['String'];
  scope?: InputMaybe<Scalars['String']>;
};

export type UserPermissionsList = {
  __typename?: 'UserPermissionsList';
  id?: Maybe<Scalars['String']>;
  negativePermissions?: Maybe<Array<Maybe<UserPermission>>>;
  permissions?: Maybe<Array<Maybe<UserPermission>>>;
  roleIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserPublic = {
  __typename?: 'UserPublic';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isInternal?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  notMigrated?: Maybe<Scalars['Boolean']>;
  profilePicture?: Maybe<Scalars['String']>;
};

export type UserResetPasswordResponseWithAvailableTransport = {
  __typename?: 'UserResetPasswordResponseWithAvailableTransport';
  availableTransport: Array<TransportEnum>;
  info?: Maybe<Scalars['String']>;
  result: Array<TransportType>;
};

export type UserSavedRep = {
  __typename?: 'UserSavedRep';
  snapRepEmail?: Maybe<Scalars['String']>;
  uuId?: Maybe<Scalars['String']>;
};

export type UserWithPermissions = {
  __typename?: 'UserWithPermissions';
  apps?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hasFamily?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isInternal?: Maybe<Scalars['Boolean']>;
  kyc?: Maybe<VaultKyc>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  occupation?: Maybe<UserOccupation>;
  /** @deprecated use parents instead of parent */
  parent?: Maybe<Scalars['String']>;
  parents?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  /** @deprecated will be removed in the next release */
  snapRaiseId?: Maybe<Scalars['String']>;
  /** @deprecated will be removed in the next release */
  snapSpendId?: Maybe<Scalars['String']>;
  walletOrganization?: Maybe<Organization>;
  walletTerms?: Maybe<Scalars['Boolean']>;
};

export type Users = {
  __typename?: 'Users';
  nextPage?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type VaultAccountStatus = {
  __typename?: 'VaultAccountStatus';
  accountRepresentativeRequirements?: Maybe<VaultEntityRequirements>;
  beneficialOwnersRequirements?: Maybe<Array<VaultEntityRequirements>>;
  kybRequirements?: Maybe<VaultEntityRequirements>;
  valid: Scalars['Boolean'];
};

/** Used for addresses in VaultKyb and VaultKyc */
export type VaultAddress = {
  __typename?: 'VaultAddress';
  city: Scalars['String'];
  postalCode: Scalars['String'];
  region: Scalars['String'];
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
};

/** Used for addresses in VaultKyb, VaultKyc and latestCreateCard */
export type VaultAddressInput = {
  city: Scalars['String'];
  postalCode: Scalars['String'];
  region: Scalars['String'];
  street: Scalars['String'];
  unit?: InputMaybe<Scalars['String']>;
};

/** used in vaultKybUpdate and vaultKycUpdate */
export type VaultAddressUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type VaultBankAccount = {
  __typename?: 'VaultBankAccount';
  account_holder_name: Scalars['String'];
  account_holder_type: Scalars['String'];
  bank_name: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  default_for_currency: Scalars['Boolean'];
  fingerprint: Scalars['String'];
  id: Scalars['ID'];
  last4: Scalars['String'];
  routing_number: Scalars['String'];
  status: Scalars['String'];
};

/** Additional data passed into the Stripe api Can be read in Stripe dashboard */
export type VaultCardMetadata = {
  __typename?: 'VaultCardMetadata';
  description?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

/** Additional data passed into the Stripe api Can be read in Stripe dashboard */
export type VaultCardMetadataInput = {
  description?: InputMaybe<Scalars['String']>;
  walletId?: InputMaybe<Scalars['String']>;
};

/** Current status of card */
export enum VaultCardStatus {
  Active = 'active',
  /** To deactivate a card set it to canceled */
  Canceled = 'canceled',
  /** Cards ship inactive */
  Inactive = 'inactive'
}

/** Is the card physical (needs to mailed out) or virtual */
export enum VaultCardType {
  Physical = 'physical',
  Virtual = 'virtual'
}

/** Day, Month and Year of birth */
export type VaultDob = {
  __typename?: 'VaultDob';
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

/** Day, Month and Year of birth */
export type VaultDobInput = {
  day: Scalars['String'];
  month: Scalars['String'];
  year: Scalars['String'];
};

export enum VaultDocumentProvider {
  Stripe = 'stripe',
  Unit = 'unit'
}

export type VaultEntityRequirements = {
  __typename?: 'VaultEntityRequirements';
  missingFields: Array<Scalars['String']>;
  requiredDocuments: Array<VaultRequiredDocument>;
};

/** Third party financial providers */
export enum VaultFinancialProvider {
  Stripe = 'stripe',
  Unit = 'unit'
}

/** Organizations/Companies */
export type VaultKyb = {
  __typename?: 'VaultKyb';
  address: VaultAddress;
  customerFacingName: Scalars['String'];
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  entityDocument?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legalName: Scalars['String'];
  phoneNumber: Scalars['String'];
  structure: Kyb_Structure;
  taxId: Scalars['String'];
  type: Kyb_Type;
  url: Scalars['String'];
};

/** Individuals */
export type VaultKyc = {
  __typename?: 'VaultKyc';
  address: VaultAddress;
  director?: Maybe<Scalars['Boolean']>;
  dob: VaultDob;
  email: Scalars['String'];
  executive?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  owner?: Maybe<Scalars['Boolean']>;
  /** If owner=true, percentOwnership is required */
  percentOwnership?: Maybe<Scalars['Int']>;
  phoneNumber: Scalars['String'];
  representative?: Maybe<Scalars['Boolean']>;
  ssn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type VaultMutationError = {
  __typename?: 'VaultMutationError';
  message: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type VaultMutationResponse = {
  __typename?: 'VaultMutationResponse';
  errors?: Maybe<Array<Maybe<VaultMutationError>>>;
  success: Scalars['Boolean'];
};

export enum VaultPayoutInterval {
  Daily = 'daily',
  Weekly = 'weekly'
}

export enum VaultRequiredDocument {
  /** Utility bill, bank statement, lease agreement or current pay stub */
  AddressVerification = 'address_verification',
  /** Bank Statement or Void Check */
  BankAccountDocument = 'bank_account_document',
  /** Certificate of incorporation or certificate of assumed name */
  CertificateOfIncorporation = 'certificate_of_incorporation',
  /** IRS form 147c or IRS form CP-575 */
  EinConfirmation = 'ein_confirmation',
  /** Passport or Drivers License */
  IdDocument = 'id_document',
  /** Passport, Drivers License or State ID */
  IdDocumentOrPassport = 'id_document_or_passport',
  /** 501C3 or SS4 */
  IrsDeterminationLetter = 'irs_determination_letter',
  /** Passport */
  Passport = 'passport',
  /** Power of attorney */
  PowerOfAttorney = 'power_of_attorney',
  /** SSN Card */
  SsnCard = 'ssn_card'
}

/** How to send a physical VaultCard */
export enum VaultShippingService {
  Express = 'express',
  Priority = 'priority',
  Standard = 'standard'
}

/** The interval that the spending limit interval of a card is reset */
export enum VaultSpendingLimitInterval {
  AllTime = 'all_time',
  Daily = 'daily',
  Monthly = 'monthly',
  PerAuthorization = 'per_authorization',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

/** ip and date of Stripe ToS acceptance */
export type VaultTosAcceptance = {
  date: Scalars['DateTime'];
  ip: Scalars['String'];
};

export enum VaultWeeklyAnchor {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday'
}

export type Vehicle = {
  __typename?: 'Vehicle';
  id: Scalars['Int'];
  is_deleted?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type WalletConfirmOrganizationInfoResult = {
  __typename?: 'WalletConfirmOrganizationInfoResult';
  organization?: Maybe<Organization>;
  user?: Maybe<UserWithPermissions>;
};

export type WalletUserRegisterResult = {
  __typename?: 'WalletUserRegisterResult';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Input object for index query filters. */
export type Where = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gt?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gte?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lte?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  partition?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WinbackDeals = {
  __typename?: 'WinbackDeals';
  activity?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  closedLost?: Maybe<Scalars['String']>;
  dealName?: Maybe<Scalars['String']>;
  dealStage?: Maybe<Scalars['String']>;
  hubspotId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isWinbackPinned?: Maybe<Scalars['Boolean']>;
  lastLaunch?: Maybe<Scalars['String']>;
  leaderFirstName?: Maybe<Scalars['String']>;
  leaderLastName?: Maybe<Scalars['String']>;
  previousDealId?: Maybe<Scalars['String']>;
  previousFundId?: Maybe<Scalars['String']>;
};

export type Worker = {
  __typename?: 'Worker';
  duty?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  organization?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['String']>;
  pay_code?: Maybe<Scalars['String']>;
  pay_rate?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  ssn?: Maybe<Scalars['String']>;
  woker_name?: Maybe<Scalars['String']>;
  worker_end_time?: Maybe<Scalars['String']>;
  worker_start_time?: Maybe<Scalars['String']>;
  worker_type?: Maybe<Scalars['String']>;
};

export type WorkerByIdInput = {
  id: Scalars['Int'];
};

export type WorkerDeleteManyCount = {
  __typename?: 'WorkerDeleteManyCount';
  count?: Maybe<Scalars['Int']>;
};

export type WorkerPool = {
  __typename?: 'WorkerPool';
  Address?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  First?: Maybe<Scalars['String']>;
  Home_Phone?: Maybe<Scalars['String']>;
  ID: Scalars['Int'];
  Last?: Maybe<Scalars['String']>;
  SSN?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Work_Phone?: Maybe<Scalars['String']>;
  Zip?: Maybe<Scalars['String']>;
  cell_phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  is_deleted?: Maybe<Scalars['String']>;
  pay_rate?: Maybe<Scalars['Float']>;
  worker_type?: Maybe<Scalars['String']>;
};

export enum WorkerTypes {
  C = 'c',
  H = 'h'
}

export type WorkerUpsertManyCount = {
  __typename?: 'WorkerUpsertManyCount';
  count?: Maybe<Scalars['Int']>;
};

export type AssetCreationInput = {
  assetTypeId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expirationDate: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  pricing?: InputMaybe<Scalars['Float']>;
  quantity: Scalars['Int'];
  sponsorshipGroupId: Scalars['String'];
  startDate: Scalars['String'];
};

export type BusSchedules = {
  __typename?: 'busSchedules';
  activity?: Maybe<Scalars['String']>;
  bus_count?: Maybe<Scalars['Int']>;
  bus_departure_location?: Maybe<Scalars['String']>;
  bus_early_dismissal_time?: Maybe<Scalars['String']>;
  bus_estimated_return_time?: Maybe<Scalars['String']>;
  bus_time?: Maybe<Scalars['String']>;
  cancellation_status?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['String']>;
  event_date?: Maybe<Scalars['String']>;
  event_transport_details?: Maybe<Array<Maybe<DailyCalendarEventTransportDetails>>>;
  facility?: Maybe<Scalars['String']>;
  g_s?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  home_field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  levels?: Maybe<Scalars['String']>;
  opponent?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  season_id?: Maybe<Scalars['Int']>;
  sports_code?: Maybe<Scalars['String']>;
  sports_description?: Maybe<Scalars['String']>;
  sports_group?: Maybe<Scalars['String']>;
  sports_name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  vehicle_type?: Maybe<Scalars['String']>;
};

export type DriveGetListCurrentCustomersReturn = {
  __typename?: 'driveGetListCurrentCustomersReturn';
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<CurrentCustomersDeals>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DriveGetListPotentialCustomersReturn = {
  __typename?: 'driveGetListPotentialCustomersReturn';
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<PotentialCustomersDeals>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** Last clicked tracking information used by Drive's Get List Application */
export type DriveOrgUserTrackingReturn = {
  __typename?: 'driveOrgUserTrackingReturn';
  /** ID of the organization. */
  orgId?: Maybe<Scalars['String']>;
  /** A unique tracking id */
  trackingId?: Maybe<Scalars['String']>;
  trackingType?: Maybe<Scalars['String']>;
  /** The value of the tracking type */
  trackingValue?: Maybe<Scalars['String']>;
  trackingValueType?: Maybe<Scalars['String']>;
  /** ID of the user. */
  userId?: Maybe<Scalars['String']>;
};

export type EventContractItemInput = {
  event_id: Scalars['Int'];
};

export type ISocialMediaAccounts = {
  facebook?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  twitch?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type ISponsorDistrictFields = {
  name: Scalars['String'];
};

export type ISponsorSchoolFields = {
  name: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ISponsorSchoolProgramFields = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type MultipleCreationResponse = {
  __typename?: 'multipleCreationResponse';
  count?: Maybe<Scalars['Int']>;
};

export type MySponsorships = {
  __typename?: 'mySponsorships';
  packages?: Maybe<Array<Maybe<Packages>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderByClauseGroups = {
  name?: InputMaybe<Scalars['String']>;
  pricing?: InputMaybe<Scalars['String']>;
};

export type OrderByClauseInvites = {
  business?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type OrderByPackages = {
  orderedAt?: InputMaybe<Scalars['String']>;
};

export type PackageAsset = {
  __typename?: 'packageAsset';
  asset?: Maybe<Asset>;
};

export type Packages = {
  __typename?: 'packages';
  id?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  orderedAt?: Maybe<Scalars['String']>;
  packages?: Maybe<Array<Maybe<PackageAsset>>>;
};

export type SearchByName = {
  contains?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
};

export type SponsoredOrders = {
  __typename?: 'sponsoredOrders';
  orders?: Maybe<Array<Maybe<SponsorshipOrders>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SponsorshipGroupUser = {
  __typename?: 'sponsorshipGroupUser';
  sponsorshipGroupId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
};

export type SponsorshipGroupUserLink = {
  sponsorshipGroupId: Scalars['String'];
  userId: Scalars['String'];
  userType?: InputMaybe<Scalars['String']>;
};

export type SponsorshipOrders = {
  __typename?: 'sponsorshipOrders';
  assets?: Maybe<Array<Maybe<Asset>>>;
  id?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  sponsorshipGroups?: Maybe<Array<Maybe<SponsorshipGroupsOnPackages>>>;
};

export type StoreBuildRequestInput = {
  campaignId?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  primaryColor: Scalars['String'];
  requester: StoreBuildRequester;
  secondaryColor: Scalars['String'];
  storeActivity: Scalars['String'];
  storeLogo: Scalars['String'];
  storeName: Scalars['String'];
};

export type StoreOrderSalesGraph = {
  __typename?: 'storeOrderSalesGraph';
  baseTotalSales?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['String']>;
  scopeId?: Maybe<Scalars['BigInt']>;
  startDate?: Maybe<Scalars['String']>;
  totalOrders?: Maybe<Scalars['BigInt']>;
  totalSales?: Maybe<Scalars['Float']>;
};

export type StoreOrderSalesGraphUnionType = OnException | StoreOrderSalesGraphs;

export type SumResponse = {
  __typename?: 'sumResponse';
  sum?: Maybe<Scalars['Float']>;
};

export type TwispCardBalances = {
  __typename?: 'twispCardBalances';
  allTxs?: Maybe<Array<Maybe<TwispTransactions>>>;
  authorization_balance?: Maybe<Scalars['Int64']>;
  balance?: Maybe<Scalars['Int64']>;
  card_id?: Maybe<Scalars['String']>;
  card_limit?: Maybe<Scalars['Int64']>;
  history?: Maybe<Array<Maybe<TwispCardBalances>>>;
  seq?: Maybe<Scalars['Uint64']>;
  settled_balance?: Maybe<Scalars['Int64']>;
  visibleTxs?: Maybe<Array<Maybe<TwispTransactions>>>;
};


export type TwispCardBalancesHistoryArgs = {
  limit?: InputMaybe<Scalars['Int32']>;
  sort?: InputMaybe<Sort>;
};

/** Indexes for table twispCardBalances */
export enum TwispCardBalances_Indexes {
  CardId = 'card_id'
}

export type TwispCards = {
  __typename?: 'twispCards';
  card_id?: Maybe<Scalars['String']>;
  history?: Maybe<Array<Maybe<TwispCards>>>;
  last4?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Uint64']>;
};


export type TwispCardsHistoryArgs = {
  limit?: InputMaybe<Scalars['Int32']>;
  sort?: InputMaybe<Sort>;
};

/** Indexes for table twispCards */
export enum TwispCards_Indexes {
  CardId = 'card_id'
}

export type TwispStripeHooks = {
  __typename?: 'twispStripeHooks';
  account?: Maybe<Scalars['String']>;
  api_version?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int64']>;
  data?: Maybe<Scalars['JSON']>;
  history?: Maybe<Array<Maybe<TwispStripeHooks>>>;
  id?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  object?: Maybe<Scalars['String']>;
  pending_webhooks?: Maybe<Scalars['Int64']>;
  processed?: Maybe<Scalars['Timestamp']>;
  request?: Maybe<Scalars['JSON']>;
  seq?: Maybe<Scalars['Uint64']>;
  type?: Maybe<Scalars['String']>;
};


export type TwispStripeHooksDataArgs = {
  expression?: InputMaybe<Scalars['String']>;
};


export type TwispStripeHooksHistoryArgs = {
  limit?: InputMaybe<Scalars['Int32']>;
  sort?: InputMaybe<Sort>;
};


export type TwispStripeHooksRequestArgs = {
  expression?: InputMaybe<Scalars['String']>;
};

/** Indexes for table twispStripeHooks */
export enum TwispStripeHooks_Indexes {
  Id = 'id'
}

export type TwispTransactions = {
  __typename?: 'twispTransactions';
  amount?: Maybe<Scalars['Int64']>;
  card_id?: Maybe<Scalars['String']>;
  correlation?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int64']>;
  description?: Maybe<Scalars['String']>;
  event_created?: Maybe<Scalars['Int64']>;
  history?: Maybe<Array<Maybe<TwispTransactions>>>;
  id?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  seq?: Maybe<Scalars['Uint64']>;
  status?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
};


export type TwispTransactionsHistoryArgs = {
  limit?: InputMaybe<Scalars['Int32']>;
  sort?: InputMaybe<Sort>;
};


export type TwispTransactionsMetaArgs = {
  expression?: InputMaybe<Scalars['String']>;
};

/** Indexes for table twispTransactions */
export enum TwispTransactions_Indexes {
  CardId = 'card_id',
  CardIdViz = 'card_id_viz',
  Id = 'id'
}

export type WhereClauseAssetTypes = {
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type WhereClauseAssets = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  assetTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxPrice?: InputMaybe<Scalars['Int']>;
  minPrice?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<SearchByName>;
  radius?: InputMaybe<Scalars['Int']>;
  sponsorshipGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type WhereClauseInvites = {
  email?: InputMaybe<SearchByName>;
  sponsorshipGroupId: Scalars['String'];
  status?: InputMaybe<Scalars['Boolean']>;
};

export type WhereClausePackages = {
  status?: InputMaybe<Scalars['String']>;
};

export type WhereClauseSponsorShipGroups = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<SearchByName>;
  schoolId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type WhereClauseSponsors = {
  name?: InputMaybe<SearchByName>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type WhereClauseSponsorshipGroupOrders = {
  name?: InputMaybe<SearchByName>;
  sponsorshipGroupId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
};

export type ApiStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiStatusQuery = { __typename?: 'Query', apiReady?: boolean | null };

export type InsightsAddPreApprovedContactsMutationVariables = Exact<{
  org: InsAddPreApprovedContactOrgInput;
  contacts: Array<InputMaybe<InsPreApprovedContactInput>> | InputMaybe<InsPreApprovedContactInput>;
  approver: InsAddPreApprovedContactApproverInput;
  dashboardUrl: Scalars['String'];
}>;


export type InsightsAddPreApprovedContactsMutation = { __typename?: 'Mutation', insightsAddPreApprovedContacts: { __typename?: 'InsAddPreApprovedContactsResult', errors?: Array<string | null> | null, status: string, contactsResult?: Array<{ __typename?: 'InsPreApprovedContactResult', email: string, status: string } | null> | null } };

export type InsightsEditPreApprovedContactMutationVariables = Exact<{
  contactId: Scalars['Int'];
  orgId: Scalars['String'];
  senderName: Scalars['String'];
  updatedContact: InsEditPreApprovedContactInput;
}>;


export type InsightsEditPreApprovedContactMutation = { __typename?: 'Mutation', insightsEditPreApprovedContact: { __typename?: 'InsEditPreApprovedContactResult', error?: string | null, status: string } };

export type InsightsResendInvitePreApprovedContactMutationVariables = Exact<{
  contactId: Scalars['Int'];
  senderName: Scalars['String'];
}>;


export type InsightsResendInvitePreApprovedContactMutation = { __typename?: 'Mutation', insightsResendInvitePreApprovedContact: { __typename?: 'InsResendPreApprovedContactResult', errors?: Array<string | null> | null, status: string } };

export type InsightsDeletePreApprovedContactMutationVariables = Exact<{
  contactId: Scalars['Int'];
  userId: Scalars['String'];
}>;


export type InsightsDeletePreApprovedContactMutation = { __typename?: 'Mutation', insightsDeletePreApprovedContact: { __typename?: 'InsDeletePreApprovedContactResult', errors?: Array<string | null> | null, status: string } };

export type InsightsEditPreApprovedContactInviteMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type InsightsEditPreApprovedContactInviteMutation = { __typename?: 'Mutation', insightsEditPreApprovedContactInvite: { __typename?: 'InsEditPreApprovedInviteResult', errors?: Array<string | null> | null, status: string, updatedInvite?: { __typename?: 'InsEditPreApprovedInvite', activity: string, email: string, firstName: string, inviteStatus: string, lastName: string, orgName: string } | null } };

export type InsightsCampaignsDataQueryVariables = Exact<{
  campaignIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsCampaignsDataQuery = { __typename?: 'Query', insightsCampaignsData: { __typename?: 'InsCampaignsData', lTRChart?: { __typename?: 'InsLTRChartData', ltr?: number | null, upcomingCampaignsCount?: number | null, closedCampaignsCount?: number | null, activeCampaignsCount?: number | null, activeCampaignsParticipation?: number | null, activeCampaignsTotalCents?: number | null, avgDonationCents?: number | null, closedCampaignsParticipation?: number | null, closedCampaignsTotalCents?: number | null, upcomingCampaignsForecastedAmountCents?: number | null, upcomingCampaignsParticipantSignIn?: number | null } | null, campaignStats?: Array<{ __typename?: 'InsCampaignStat', id: number, name?: string | null, end_date?: any | null, start_date?: any | null, donations_count?: number | null, insights_status?: string | null, total_raised_cents?: number | null, forecasted_amount_cents?: number | null, participation?: number | null, participants?: number | null, preloading?: number | null, group_leader_name?: string | null, group_leader_email?: string | null } | null> | null, donationMapStats?: Array<{ __typename?: 'InsDonationMapStat', campaign_id?: number | null, campaign_ids?: Array<number | null> | null, donations_amount_cents?: number | null, donations_count?: number | null, lat?: number | null, long?: number | null, postal_code?: string | null } | null> | null, analyticsSummaryStats?: Array<{ __typename?: 'InsAnalyticsSummaryStat', year: number, month: number, campaign_id: number, amount_raised_cents: number } | null> | null, monthlyCampaignStats?: Array<{ __typename?: 'InsMonthlyCampaignStat', campaign_ids: Array<number | null>, month: number, year: number, preloading?: number | null, participation?: number | null } | null> | null, inviteStats?: Array<{ __typename?: 'InsInviteStat', campaign_id?: number | null, campaign_ids?: Array<number | null> | null, invite_type: string, invite_count: number, total_amount_cents: number } | null> | null } };

export type InsightsCampaignsDataForReportingQueryVariables = Exact<{
  campaignIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsCampaignsDataForReportingQuery = { __typename?: 'Query', insightsCampaignsData: { __typename?: 'InsCampaignsData', campaignStats?: Array<{ __typename?: 'InsCampaignStat', id: number, name?: string | null, end_date?: any | null, start_date?: any | null, insights_status?: string | null, total_raised_cents?: number | null } | null> | null } };

export type InsightsCampaignSettlementsQueryVariables = Exact<{
  campaignIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsCampaignSettlementsQuery = { __typename?: 'Query', insightsCampaignSettlements: Array<{ __typename?: 'InsCampaignSettlement', id: number, campaign_id: number, campaign_name?: string | null, method?: string | null, status?: string | null, amount_cents?: number | null, last_updated?: any | null } | null> };

export type InsightsCampaignDonationsQueryVariables = Exact<{
  campaignIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsCampaignDonationsQuery = { __typename?: 'Query', insightsCampaignDonations: Array<{ __typename?: 'InsCampaignDonation', id: number, campaign_id: number, campaign_name?: string | null, donor_name?: string | null, participant_name?: string | null, amount_cents?: number | null, created_at?: any | null } | null> };

export type InsightsDonorParticipantContactsQueryVariables = Exact<{
  campaignIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsDonorParticipantContactsQuery = { __typename?: 'Query', insightsDonorParticipantContacts: Array<{ __typename?: 'InsDonorParticipantContact', campaign_id: number, donor_id?: number | null, donor_name?: string | null, donor_email?: string | null, participant_id?: number | null, participant_name?: string | null, participant_email?: string | null } | null> };

export type UserAssociationsQueryVariables = Exact<{
  userAssociationsId: Scalars['ID'];
  product: Product;
}>;


export type UserAssociationsQuery = { __typename?: 'Query', userAssociations?: Array<{ __typename?: 'Org', id: string, fields?: any | null, name?: string | null, type: string, parentId?: string | null } | null> | null };

export type OrgQueryVariables = Exact<{
  orgId: Scalars['ID'];
  hierarchy?: InputMaybe<Scalars['Boolean']>;
}>;


export type OrgQuery = { __typename?: 'Query', org?: Array<{ __typename?: 'Org', id: string, fields?: any | null, name?: string | null, type: string, parentId?: string | null } | null> | null };

export type InsightsOrgsCampaignsSummaryQueryVariables = Exact<{
  orgCampaignIds: Array<InputMaybe<InsOrgCampaignSummaryInput>> | InputMaybe<InsOrgCampaignSummaryInput>;
}>;


export type InsightsOrgsCampaignsSummaryQuery = { __typename?: 'Query', insightsOrgsCampaignsSummary: Array<{ __typename?: 'InsOrgCampaignSummary', orgId?: string | null, totalRaisedCents: number, campaignsCount: number } | null> };

export type InsightsCampaignRaiseEntityInfoQueryVariables = Exact<{
  campaignId: Scalars['Int'];
}>;


export type InsightsCampaignRaiseEntityInfoQuery = { __typename?: 'Query', insightsCampaignRaiseEntityInfo: { __typename?: 'InsCampaignRaiseEntityInfo', campaign_id: number, entity_id?: number | null } };

export type UserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firstName?: string | null, id?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null } | null };

export type InsightsPreApprovedContactsQueryVariables = Exact<{
  orgIds: Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>;
}>;


export type InsightsPreApprovedContactsQuery = { __typename?: 'Query', insightsPreApprovedContacts: Array<{ __typename?: 'InsPreApprovedContact', id?: number | null, activity?: string | null, email?: string | null, first_name?: string | null, invite_sent_at?: any | null, invite_status?: string | null, last_name?: string | null, associated_org_id?: string | null } | null> };

export type InsightsPreApprovalTokenValidationQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type InsightsPreApprovalTokenValidationQuery = { __typename?: 'Query', insightsPreApprovalTokenValidation: Array<{ __typename?: 'InsPreApprovedContact', activity?: string | null, associated_org_id?: string | null, email?: string | null, first_name?: string | null, last_name?: string | null } | null> };

export type InsightsPreApprovedContactsEmailTestQueryVariables = Exact<{
  emails: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  orgId: Scalars['String'];
}>;


export type InsightsPreApprovedContactsEmailTestQuery = { __typename?: 'Query', insightsPreApprovedContactsEmailTest: Array<{ __typename?: 'InsEmailTestPreApprovedContactResult', email: string, status: string } | null> };

export type PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionsQuery = { __typename?: 'Query', me?: { __typename?: 'UserWithPermissions', email?: string | null, permissions?: Array<string | null> | null, id?: string | null } | null };

export type SuperBasicUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type SuperBasicUserInfoQuery = { __typename?: 'Query', me?: { __typename?: 'UserWithPermissions', firstName?: string | null, lastName?: string | null, id?: string | null } | null };


export const ApiStatusDocument = gql`
    query ApiStatus {
  apiReady @client
}
    `;

/**
 * __useApiStatusQuery__
 *
 * To run a query within a React component, call `useApiStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useApiStatusQuery(baseOptions?: Apollo.QueryHookOptions<ApiStatusQuery, ApiStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApiStatusQuery, ApiStatusQueryVariables>(ApiStatusDocument, options);
      }
export function useApiStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApiStatusQuery, ApiStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApiStatusQuery, ApiStatusQueryVariables>(ApiStatusDocument, options);
        }
export type ApiStatusQueryHookResult = ReturnType<typeof useApiStatusQuery>;
export type ApiStatusLazyQueryHookResult = ReturnType<typeof useApiStatusLazyQuery>;
export type ApiStatusQueryResult = Apollo.QueryResult<ApiStatusQuery, ApiStatusQueryVariables>;
export const InsightsAddPreApprovedContactsDocument = gql`
    mutation InsightsAddPreApprovedContacts($org: InsAddPreApprovedContactOrgInput!, $contacts: [InsPreApprovedContactInput]!, $approver: InsAddPreApprovedContactApproverInput!, $dashboardUrl: String!) {
  insightsAddPreApprovedContacts(
    org: $org
    contacts: $contacts
    approver: $approver
    dashboardUrl: $dashboardUrl
  ) {
    errors
    contactsResult {
      email
      status
    }
    status
  }
}
    `;
export type InsightsAddPreApprovedContactsMutationFn = Apollo.MutationFunction<InsightsAddPreApprovedContactsMutation, InsightsAddPreApprovedContactsMutationVariables>;

/**
 * __useInsightsAddPreApprovedContactsMutation__
 *
 * To run a mutation, you first call `useInsightsAddPreApprovedContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsightsAddPreApprovedContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insightsAddPreApprovedContactsMutation, { data, loading, error }] = useInsightsAddPreApprovedContactsMutation({
 *   variables: {
 *      org: // value for 'org'
 *      contacts: // value for 'contacts'
 *      approver: // value for 'approver'
 *      dashboardUrl: // value for 'dashboardUrl'
 *   },
 * });
 */
export function useInsightsAddPreApprovedContactsMutation(baseOptions?: Apollo.MutationHookOptions<InsightsAddPreApprovedContactsMutation, InsightsAddPreApprovedContactsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsightsAddPreApprovedContactsMutation, InsightsAddPreApprovedContactsMutationVariables>(InsightsAddPreApprovedContactsDocument, options);
      }
export type InsightsAddPreApprovedContactsMutationHookResult = ReturnType<typeof useInsightsAddPreApprovedContactsMutation>;
export type InsightsAddPreApprovedContactsMutationResult = Apollo.MutationResult<InsightsAddPreApprovedContactsMutation>;
export type InsightsAddPreApprovedContactsMutationOptions = Apollo.BaseMutationOptions<InsightsAddPreApprovedContactsMutation, InsightsAddPreApprovedContactsMutationVariables>;
export const InsightsEditPreApprovedContactDocument = gql`
    mutation InsightsEditPreApprovedContact($contactId: Int!, $orgId: String!, $senderName: String!, $updatedContact: InsEditPreApprovedContactInput!) {
  insightsEditPreApprovedContact(
    contactId: $contactId
    orgId: $orgId
    senderName: $senderName
    updatedContact: $updatedContact
  ) {
    error
    status
  }
}
    `;
export type InsightsEditPreApprovedContactMutationFn = Apollo.MutationFunction<InsightsEditPreApprovedContactMutation, InsightsEditPreApprovedContactMutationVariables>;

/**
 * __useInsightsEditPreApprovedContactMutation__
 *
 * To run a mutation, you first call `useInsightsEditPreApprovedContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsightsEditPreApprovedContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insightsEditPreApprovedContactMutation, { data, loading, error }] = useInsightsEditPreApprovedContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *      orgId: // value for 'orgId'
 *      senderName: // value for 'senderName'
 *      updatedContact: // value for 'updatedContact'
 *   },
 * });
 */
export function useInsightsEditPreApprovedContactMutation(baseOptions?: Apollo.MutationHookOptions<InsightsEditPreApprovedContactMutation, InsightsEditPreApprovedContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsightsEditPreApprovedContactMutation, InsightsEditPreApprovedContactMutationVariables>(InsightsEditPreApprovedContactDocument, options);
      }
export type InsightsEditPreApprovedContactMutationHookResult = ReturnType<typeof useInsightsEditPreApprovedContactMutation>;
export type InsightsEditPreApprovedContactMutationResult = Apollo.MutationResult<InsightsEditPreApprovedContactMutation>;
export type InsightsEditPreApprovedContactMutationOptions = Apollo.BaseMutationOptions<InsightsEditPreApprovedContactMutation, InsightsEditPreApprovedContactMutationVariables>;
export const InsightsResendInvitePreApprovedContactDocument = gql`
    mutation InsightsResendInvitePreApprovedContact($contactId: Int!, $senderName: String!) {
  insightsResendInvitePreApprovedContact(
    contactId: $contactId
    senderName: $senderName
  ) {
    errors
    status
  }
}
    `;
export type InsightsResendInvitePreApprovedContactMutationFn = Apollo.MutationFunction<InsightsResendInvitePreApprovedContactMutation, InsightsResendInvitePreApprovedContactMutationVariables>;

/**
 * __useInsightsResendInvitePreApprovedContactMutation__
 *
 * To run a mutation, you first call `useInsightsResendInvitePreApprovedContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsightsResendInvitePreApprovedContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insightsResendInvitePreApprovedContactMutation, { data, loading, error }] = useInsightsResendInvitePreApprovedContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *      senderName: // value for 'senderName'
 *   },
 * });
 */
export function useInsightsResendInvitePreApprovedContactMutation(baseOptions?: Apollo.MutationHookOptions<InsightsResendInvitePreApprovedContactMutation, InsightsResendInvitePreApprovedContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsightsResendInvitePreApprovedContactMutation, InsightsResendInvitePreApprovedContactMutationVariables>(InsightsResendInvitePreApprovedContactDocument, options);
      }
export type InsightsResendInvitePreApprovedContactMutationHookResult = ReturnType<typeof useInsightsResendInvitePreApprovedContactMutation>;
export type InsightsResendInvitePreApprovedContactMutationResult = Apollo.MutationResult<InsightsResendInvitePreApprovedContactMutation>;
export type InsightsResendInvitePreApprovedContactMutationOptions = Apollo.BaseMutationOptions<InsightsResendInvitePreApprovedContactMutation, InsightsResendInvitePreApprovedContactMutationVariables>;
export const InsightsDeletePreApprovedContactDocument = gql`
    mutation InsightsDeletePreApprovedContact($contactId: Int!, $userId: String!) {
  insightsDeletePreApprovedContact(contactId: $contactId, userId: $userId) {
    errors
    status
  }
}
    `;
export type InsightsDeletePreApprovedContactMutationFn = Apollo.MutationFunction<InsightsDeletePreApprovedContactMutation, InsightsDeletePreApprovedContactMutationVariables>;

/**
 * __useInsightsDeletePreApprovedContactMutation__
 *
 * To run a mutation, you first call `useInsightsDeletePreApprovedContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsightsDeletePreApprovedContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insightsDeletePreApprovedContactMutation, { data, loading, error }] = useInsightsDeletePreApprovedContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useInsightsDeletePreApprovedContactMutation(baseOptions?: Apollo.MutationHookOptions<InsightsDeletePreApprovedContactMutation, InsightsDeletePreApprovedContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsightsDeletePreApprovedContactMutation, InsightsDeletePreApprovedContactMutationVariables>(InsightsDeletePreApprovedContactDocument, options);
      }
export type InsightsDeletePreApprovedContactMutationHookResult = ReturnType<typeof useInsightsDeletePreApprovedContactMutation>;
export type InsightsDeletePreApprovedContactMutationResult = Apollo.MutationResult<InsightsDeletePreApprovedContactMutation>;
export type InsightsDeletePreApprovedContactMutationOptions = Apollo.BaseMutationOptions<InsightsDeletePreApprovedContactMutation, InsightsDeletePreApprovedContactMutationVariables>;
export const InsightsEditPreApprovedContactInviteDocument = gql`
    mutation InsightsEditPreApprovedContactInvite($token: String) {
  insightsEditPreApprovedContactInvite(token: $token) {
    errors
    status
    updatedInvite {
      activity
      email
      firstName
      inviteStatus
      lastName
      orgName
    }
  }
}
    `;
export type InsightsEditPreApprovedContactInviteMutationFn = Apollo.MutationFunction<InsightsEditPreApprovedContactInviteMutation, InsightsEditPreApprovedContactInviteMutationVariables>;

/**
 * __useInsightsEditPreApprovedContactInviteMutation__
 *
 * To run a mutation, you first call `useInsightsEditPreApprovedContactInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsightsEditPreApprovedContactInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insightsEditPreApprovedContactInviteMutation, { data, loading, error }] = useInsightsEditPreApprovedContactInviteMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useInsightsEditPreApprovedContactInviteMutation(baseOptions?: Apollo.MutationHookOptions<InsightsEditPreApprovedContactInviteMutation, InsightsEditPreApprovedContactInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsightsEditPreApprovedContactInviteMutation, InsightsEditPreApprovedContactInviteMutationVariables>(InsightsEditPreApprovedContactInviteDocument, options);
      }
export type InsightsEditPreApprovedContactInviteMutationHookResult = ReturnType<typeof useInsightsEditPreApprovedContactInviteMutation>;
export type InsightsEditPreApprovedContactInviteMutationResult = Apollo.MutationResult<InsightsEditPreApprovedContactInviteMutation>;
export type InsightsEditPreApprovedContactInviteMutationOptions = Apollo.BaseMutationOptions<InsightsEditPreApprovedContactInviteMutation, InsightsEditPreApprovedContactInviteMutationVariables>;
export const InsightsCampaignsDataDocument = gql`
    query InsightsCampaignsData($campaignIds: [Int]!) {
  insightsCampaignsData(campaignIds: $campaignIds) {
    lTRChart {
      ltr
      upcomingCampaignsCount
      closedCampaignsCount
      activeCampaignsCount
      activeCampaignsParticipation
      activeCampaignsTotalCents
      avgDonationCents
      closedCampaignsParticipation
      closedCampaignsTotalCents
      upcomingCampaignsForecastedAmountCents
      upcomingCampaignsParticipantSignIn
    }
    campaignStats {
      id
      name
      end_date
      start_date
      donations_count
      insights_status
      total_raised_cents
      forecasted_amount_cents
      participation
      participants
      preloading
      group_leader_name
      group_leader_email
    }
    donationMapStats {
      campaign_id
      campaign_ids
      donations_amount_cents
      donations_count
      lat
      long
      postal_code
    }
    analyticsSummaryStats {
      year
      month
      campaign_id
      amount_raised_cents
    }
    monthlyCampaignStats {
      campaign_ids
      month
      year
      preloading
      participation
    }
    inviteStats {
      campaign_id
      campaign_ids
      invite_type
      invite_count
      total_amount_cents
    }
  }
}
    `;

/**
 * __useInsightsCampaignsDataQuery__
 *
 * To run a query within a React component, call `useInsightsCampaignsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsCampaignsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsCampaignsDataQuery({
 *   variables: {
 *      campaignIds: // value for 'campaignIds'
 *   },
 * });
 */
export function useInsightsCampaignsDataQuery(baseOptions: Apollo.QueryHookOptions<InsightsCampaignsDataQuery, InsightsCampaignsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsCampaignsDataQuery, InsightsCampaignsDataQueryVariables>(InsightsCampaignsDataDocument, options);
      }
export function useInsightsCampaignsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsCampaignsDataQuery, InsightsCampaignsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsCampaignsDataQuery, InsightsCampaignsDataQueryVariables>(InsightsCampaignsDataDocument, options);
        }
export type InsightsCampaignsDataQueryHookResult = ReturnType<typeof useInsightsCampaignsDataQuery>;
export type InsightsCampaignsDataLazyQueryHookResult = ReturnType<typeof useInsightsCampaignsDataLazyQuery>;
export type InsightsCampaignsDataQueryResult = Apollo.QueryResult<InsightsCampaignsDataQuery, InsightsCampaignsDataQueryVariables>;
export const InsightsCampaignsDataForReportingDocument = gql`
    query InsightsCampaignsDataForReporting($campaignIds: [Int]!) {
  insightsCampaignsData(campaignIds: $campaignIds) {
    campaignStats {
      id
      name
      end_date
      start_date
      insights_status
      total_raised_cents
      start_date
    }
  }
}
    `;

/**
 * __useInsightsCampaignsDataForReportingQuery__
 *
 * To run a query within a React component, call `useInsightsCampaignsDataForReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsCampaignsDataForReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsCampaignsDataForReportingQuery({
 *   variables: {
 *      campaignIds: // value for 'campaignIds'
 *   },
 * });
 */
export function useInsightsCampaignsDataForReportingQuery(baseOptions: Apollo.QueryHookOptions<InsightsCampaignsDataForReportingQuery, InsightsCampaignsDataForReportingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsCampaignsDataForReportingQuery, InsightsCampaignsDataForReportingQueryVariables>(InsightsCampaignsDataForReportingDocument, options);
      }
export function useInsightsCampaignsDataForReportingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsCampaignsDataForReportingQuery, InsightsCampaignsDataForReportingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsCampaignsDataForReportingQuery, InsightsCampaignsDataForReportingQueryVariables>(InsightsCampaignsDataForReportingDocument, options);
        }
export type InsightsCampaignsDataForReportingQueryHookResult = ReturnType<typeof useInsightsCampaignsDataForReportingQuery>;
export type InsightsCampaignsDataForReportingLazyQueryHookResult = ReturnType<typeof useInsightsCampaignsDataForReportingLazyQuery>;
export type InsightsCampaignsDataForReportingQueryResult = Apollo.QueryResult<InsightsCampaignsDataForReportingQuery, InsightsCampaignsDataForReportingQueryVariables>;
export const InsightsCampaignSettlementsDocument = gql`
    query InsightsCampaignSettlements($campaignIds: [Int]!) {
  insightsCampaignSettlements(campaignIds: $campaignIds) {
    id
    campaign_id
    campaign_name
    method
    status
    amount_cents
    last_updated
  }
}
    `;

/**
 * __useInsightsCampaignSettlementsQuery__
 *
 * To run a query within a React component, call `useInsightsCampaignSettlementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsCampaignSettlementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsCampaignSettlementsQuery({
 *   variables: {
 *      campaignIds: // value for 'campaignIds'
 *   },
 * });
 */
export function useInsightsCampaignSettlementsQuery(baseOptions: Apollo.QueryHookOptions<InsightsCampaignSettlementsQuery, InsightsCampaignSettlementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsCampaignSettlementsQuery, InsightsCampaignSettlementsQueryVariables>(InsightsCampaignSettlementsDocument, options);
      }
export function useInsightsCampaignSettlementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsCampaignSettlementsQuery, InsightsCampaignSettlementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsCampaignSettlementsQuery, InsightsCampaignSettlementsQueryVariables>(InsightsCampaignSettlementsDocument, options);
        }
export type InsightsCampaignSettlementsQueryHookResult = ReturnType<typeof useInsightsCampaignSettlementsQuery>;
export type InsightsCampaignSettlementsLazyQueryHookResult = ReturnType<typeof useInsightsCampaignSettlementsLazyQuery>;
export type InsightsCampaignSettlementsQueryResult = Apollo.QueryResult<InsightsCampaignSettlementsQuery, InsightsCampaignSettlementsQueryVariables>;
export const InsightsCampaignDonationsDocument = gql`
    query InsightsCampaignDonations($campaignIds: [Int]!) {
  insightsCampaignDonations(campaignIds: $campaignIds) {
    id
    campaign_id
    campaign_name
    donor_name
    participant_name
    amount_cents
    created_at
  }
}
    `;

/**
 * __useInsightsCampaignDonationsQuery__
 *
 * To run a query within a React component, call `useInsightsCampaignDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsCampaignDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsCampaignDonationsQuery({
 *   variables: {
 *      campaignIds: // value for 'campaignIds'
 *   },
 * });
 */
export function useInsightsCampaignDonationsQuery(baseOptions: Apollo.QueryHookOptions<InsightsCampaignDonationsQuery, InsightsCampaignDonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsCampaignDonationsQuery, InsightsCampaignDonationsQueryVariables>(InsightsCampaignDonationsDocument, options);
      }
export function useInsightsCampaignDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsCampaignDonationsQuery, InsightsCampaignDonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsCampaignDonationsQuery, InsightsCampaignDonationsQueryVariables>(InsightsCampaignDonationsDocument, options);
        }
export type InsightsCampaignDonationsQueryHookResult = ReturnType<typeof useInsightsCampaignDonationsQuery>;
export type InsightsCampaignDonationsLazyQueryHookResult = ReturnType<typeof useInsightsCampaignDonationsLazyQuery>;
export type InsightsCampaignDonationsQueryResult = Apollo.QueryResult<InsightsCampaignDonationsQuery, InsightsCampaignDonationsQueryVariables>;
export const InsightsDonorParticipantContactsDocument = gql`
    query InsightsDonorParticipantContacts($campaignIds: [Int]!) {
  insightsDonorParticipantContacts(campaignIds: $campaignIds) {
    campaign_id
    donor_id
    donor_name
    donor_email
    participant_id
    participant_name
    participant_email
  }
}
    `;

/**
 * __useInsightsDonorParticipantContactsQuery__
 *
 * To run a query within a React component, call `useInsightsDonorParticipantContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsDonorParticipantContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsDonorParticipantContactsQuery({
 *   variables: {
 *      campaignIds: // value for 'campaignIds'
 *   },
 * });
 */
export function useInsightsDonorParticipantContactsQuery(baseOptions: Apollo.QueryHookOptions<InsightsDonorParticipantContactsQuery, InsightsDonorParticipantContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsDonorParticipantContactsQuery, InsightsDonorParticipantContactsQueryVariables>(InsightsDonorParticipantContactsDocument, options);
      }
export function useInsightsDonorParticipantContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsDonorParticipantContactsQuery, InsightsDonorParticipantContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsDonorParticipantContactsQuery, InsightsDonorParticipantContactsQueryVariables>(InsightsDonorParticipantContactsDocument, options);
        }
export type InsightsDonorParticipantContactsQueryHookResult = ReturnType<typeof useInsightsDonorParticipantContactsQuery>;
export type InsightsDonorParticipantContactsLazyQueryHookResult = ReturnType<typeof useInsightsDonorParticipantContactsLazyQuery>;
export type InsightsDonorParticipantContactsQueryResult = Apollo.QueryResult<InsightsDonorParticipantContactsQuery, InsightsDonorParticipantContactsQueryVariables>;
export const UserAssociationsDocument = gql`
    query UserAssociations($userAssociationsId: ID!, $product: Product!) {
  userAssociations(id: $userAssociationsId, product: $product) {
    id
    fields
    name
    type
    parentId
  }
}
    `;

/**
 * __useUserAssociationsQuery__
 *
 * To run a query within a React component, call `useUserAssociationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAssociationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAssociationsQuery({
 *   variables: {
 *      userAssociationsId: // value for 'userAssociationsId'
 *      product: // value for 'product'
 *   },
 * });
 */
export function useUserAssociationsQuery(baseOptions: Apollo.QueryHookOptions<UserAssociationsQuery, UserAssociationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAssociationsQuery, UserAssociationsQueryVariables>(UserAssociationsDocument, options);
      }
export function useUserAssociationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAssociationsQuery, UserAssociationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAssociationsQuery, UserAssociationsQueryVariables>(UserAssociationsDocument, options);
        }
export type UserAssociationsQueryHookResult = ReturnType<typeof useUserAssociationsQuery>;
export type UserAssociationsLazyQueryHookResult = ReturnType<typeof useUserAssociationsLazyQuery>;
export type UserAssociationsQueryResult = Apollo.QueryResult<UserAssociationsQuery, UserAssociationsQueryVariables>;
export const OrgDocument = gql`
    query Org($orgId: ID!, $hierarchy: Boolean) {
  org(id: $orgId, hierarchy: $hierarchy) {
    id
    fields
    name
    type
    parentId
  }
}
    `;

/**
 * __useOrgQuery__
 *
 * To run a query within a React component, call `useOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      hierarchy: // value for 'hierarchy'
 *   },
 * });
 */
export function useOrgQuery(baseOptions: Apollo.QueryHookOptions<OrgQuery, OrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options);
      }
export function useOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgQuery, OrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options);
        }
export type OrgQueryHookResult = ReturnType<typeof useOrgQuery>;
export type OrgLazyQueryHookResult = ReturnType<typeof useOrgLazyQuery>;
export type OrgQueryResult = Apollo.QueryResult<OrgQuery, OrgQueryVariables>;
export const InsightsOrgsCampaignsSummaryDocument = gql`
    query InsightsOrgsCampaignsSummary($orgCampaignIds: [InsOrgCampaignSummaryInput]!) {
  insightsOrgsCampaignsSummary(orgCampaignIds: $orgCampaignIds) {
    orgId
    totalRaisedCents
    campaignsCount
  }
}
    `;

/**
 * __useInsightsOrgsCampaignsSummaryQuery__
 *
 * To run a query within a React component, call `useInsightsOrgsCampaignsSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsOrgsCampaignsSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsOrgsCampaignsSummaryQuery({
 *   variables: {
 *      orgCampaignIds: // value for 'orgCampaignIds'
 *   },
 * });
 */
export function useInsightsOrgsCampaignsSummaryQuery(baseOptions: Apollo.QueryHookOptions<InsightsOrgsCampaignsSummaryQuery, InsightsOrgsCampaignsSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsOrgsCampaignsSummaryQuery, InsightsOrgsCampaignsSummaryQueryVariables>(InsightsOrgsCampaignsSummaryDocument, options);
      }
export function useInsightsOrgsCampaignsSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsOrgsCampaignsSummaryQuery, InsightsOrgsCampaignsSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsOrgsCampaignsSummaryQuery, InsightsOrgsCampaignsSummaryQueryVariables>(InsightsOrgsCampaignsSummaryDocument, options);
        }
export type InsightsOrgsCampaignsSummaryQueryHookResult = ReturnType<typeof useInsightsOrgsCampaignsSummaryQuery>;
export type InsightsOrgsCampaignsSummaryLazyQueryHookResult = ReturnType<typeof useInsightsOrgsCampaignsSummaryLazyQuery>;
export type InsightsOrgsCampaignsSummaryQueryResult = Apollo.QueryResult<InsightsOrgsCampaignsSummaryQuery, InsightsOrgsCampaignsSummaryQueryVariables>;
export const InsightsCampaignRaiseEntityInfoDocument = gql`
    query InsightsCampaignRaiseEntityInfo($campaignId: Int!) {
  insightsCampaignRaiseEntityInfo(campaignId: $campaignId) {
    campaign_id
    entity_id
  }
}
    `;

/**
 * __useInsightsCampaignRaiseEntityInfoQuery__
 *
 * To run a query within a React component, call `useInsightsCampaignRaiseEntityInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsCampaignRaiseEntityInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsCampaignRaiseEntityInfoQuery({
 *   variables: {
 *      campaignId: // value for 'campaignId'
 *   },
 * });
 */
export function useInsightsCampaignRaiseEntityInfoQuery(baseOptions: Apollo.QueryHookOptions<InsightsCampaignRaiseEntityInfoQuery, InsightsCampaignRaiseEntityInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsCampaignRaiseEntityInfoQuery, InsightsCampaignRaiseEntityInfoQueryVariables>(InsightsCampaignRaiseEntityInfoDocument, options);
      }
export function useInsightsCampaignRaiseEntityInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsCampaignRaiseEntityInfoQuery, InsightsCampaignRaiseEntityInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsCampaignRaiseEntityInfoQuery, InsightsCampaignRaiseEntityInfoQueryVariables>(InsightsCampaignRaiseEntityInfoDocument, options);
        }
export type InsightsCampaignRaiseEntityInfoQueryHookResult = ReturnType<typeof useInsightsCampaignRaiseEntityInfoQuery>;
export type InsightsCampaignRaiseEntityInfoLazyQueryHookResult = ReturnType<typeof useInsightsCampaignRaiseEntityInfoLazyQuery>;
export type InsightsCampaignRaiseEntityInfoQueryResult = Apollo.QueryResult<InsightsCampaignRaiseEntityInfoQuery, InsightsCampaignRaiseEntityInfoQueryVariables>;
export const UserDocument = gql`
    query User($userId: String) {
  user(id: $userId) {
    firstName
    id
    lastName
    email
    phoneNumber
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const InsightsPreApprovedContactsDocument = gql`
    query InsightsPreApprovedContacts($orgIds: [Int]!) {
  insightsPreApprovedContacts(orgIds: $orgIds) {
    id
    activity
    email
    first_name
    invite_sent_at
    invite_status
    last_name
    associated_org_id
  }
}
    `;

/**
 * __useInsightsPreApprovedContactsQuery__
 *
 * To run a query within a React component, call `useInsightsPreApprovedContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsPreApprovedContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsPreApprovedContactsQuery({
 *   variables: {
 *      orgIds: // value for 'orgIds'
 *   },
 * });
 */
export function useInsightsPreApprovedContactsQuery(baseOptions: Apollo.QueryHookOptions<InsightsPreApprovedContactsQuery, InsightsPreApprovedContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsPreApprovedContactsQuery, InsightsPreApprovedContactsQueryVariables>(InsightsPreApprovedContactsDocument, options);
      }
export function useInsightsPreApprovedContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsPreApprovedContactsQuery, InsightsPreApprovedContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsPreApprovedContactsQuery, InsightsPreApprovedContactsQueryVariables>(InsightsPreApprovedContactsDocument, options);
        }
export type InsightsPreApprovedContactsQueryHookResult = ReturnType<typeof useInsightsPreApprovedContactsQuery>;
export type InsightsPreApprovedContactsLazyQueryHookResult = ReturnType<typeof useInsightsPreApprovedContactsLazyQuery>;
export type InsightsPreApprovedContactsQueryResult = Apollo.QueryResult<InsightsPreApprovedContactsQuery, InsightsPreApprovedContactsQueryVariables>;
export const InsightsPreApprovalTokenValidationDocument = gql`
    query InsightsPreApprovalTokenValidation($token: String) {
  insightsPreApprovalTokenValidation(token: $token) {
    activity
    associated_org_id
    email
    first_name
    last_name
  }
}
    `;

/**
 * __useInsightsPreApprovalTokenValidationQuery__
 *
 * To run a query within a React component, call `useInsightsPreApprovalTokenValidationQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsPreApprovalTokenValidationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsPreApprovalTokenValidationQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useInsightsPreApprovalTokenValidationQuery(baseOptions?: Apollo.QueryHookOptions<InsightsPreApprovalTokenValidationQuery, InsightsPreApprovalTokenValidationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsPreApprovalTokenValidationQuery, InsightsPreApprovalTokenValidationQueryVariables>(InsightsPreApprovalTokenValidationDocument, options);
      }
export function useInsightsPreApprovalTokenValidationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsPreApprovalTokenValidationQuery, InsightsPreApprovalTokenValidationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsPreApprovalTokenValidationQuery, InsightsPreApprovalTokenValidationQueryVariables>(InsightsPreApprovalTokenValidationDocument, options);
        }
export type InsightsPreApprovalTokenValidationQueryHookResult = ReturnType<typeof useInsightsPreApprovalTokenValidationQuery>;
export type InsightsPreApprovalTokenValidationLazyQueryHookResult = ReturnType<typeof useInsightsPreApprovalTokenValidationLazyQuery>;
export type InsightsPreApprovalTokenValidationQueryResult = Apollo.QueryResult<InsightsPreApprovalTokenValidationQuery, InsightsPreApprovalTokenValidationQueryVariables>;
export const InsightsPreApprovedContactsEmailTestDocument = gql`
    query InsightsPreApprovedContactsEmailTest($emails: [String]!, $orgId: String!) {
  insightsPreApprovedContactsEmailTest(emails: $emails, orgId: $orgId) {
    email
    status
  }
}
    `;

/**
 * __useInsightsPreApprovedContactsEmailTestQuery__
 *
 * To run a query within a React component, call `useInsightsPreApprovedContactsEmailTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useInsightsPreApprovedContactsEmailTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInsightsPreApprovedContactsEmailTestQuery({
 *   variables: {
 *      emails: // value for 'emails'
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useInsightsPreApprovedContactsEmailTestQuery(baseOptions: Apollo.QueryHookOptions<InsightsPreApprovedContactsEmailTestQuery, InsightsPreApprovedContactsEmailTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InsightsPreApprovedContactsEmailTestQuery, InsightsPreApprovedContactsEmailTestQueryVariables>(InsightsPreApprovedContactsEmailTestDocument, options);
      }
export function useInsightsPreApprovedContactsEmailTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InsightsPreApprovedContactsEmailTestQuery, InsightsPreApprovedContactsEmailTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InsightsPreApprovedContactsEmailTestQuery, InsightsPreApprovedContactsEmailTestQueryVariables>(InsightsPreApprovedContactsEmailTestDocument, options);
        }
export type InsightsPreApprovedContactsEmailTestQueryHookResult = ReturnType<typeof useInsightsPreApprovedContactsEmailTestQuery>;
export type InsightsPreApprovedContactsEmailTestLazyQueryHookResult = ReturnType<typeof useInsightsPreApprovedContactsEmailTestLazyQuery>;
export type InsightsPreApprovedContactsEmailTestQueryResult = Apollo.QueryResult<InsightsPreApprovedContactsEmailTestQuery, InsightsPreApprovedContactsEmailTestQueryVariables>;
export const PermissionsDocument = gql`
    query Permissions {
  me {
    email
    permissions
    id
  }
}
    `;

/**
 * __usePermissionsQuery__
 *
 * To run a query within a React component, call `usePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePermissionsQuery(baseOptions?: Apollo.QueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
      }
export function usePermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
        }
export type PermissionsQueryHookResult = ReturnType<typeof usePermissionsQuery>;
export type PermissionsLazyQueryHookResult = ReturnType<typeof usePermissionsLazyQuery>;
export type PermissionsQueryResult = Apollo.QueryResult<PermissionsQuery, PermissionsQueryVariables>;
export const SuperBasicUserInfoDocument = gql`
    query SuperBasicUserInfo {
  me {
    firstName
    lastName
    id
  }
}
    `;

/**
 * __useSuperBasicUserInfoQuery__
 *
 * To run a query within a React component, call `useSuperBasicUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuperBasicUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuperBasicUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useSuperBasicUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<SuperBasicUserInfoQuery, SuperBasicUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuperBasicUserInfoQuery, SuperBasicUserInfoQueryVariables>(SuperBasicUserInfoDocument, options);
      }
export function useSuperBasicUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuperBasicUserInfoQuery, SuperBasicUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuperBasicUserInfoQuery, SuperBasicUserInfoQueryVariables>(SuperBasicUserInfoDocument, options);
        }
export type SuperBasicUserInfoQueryHookResult = ReturnType<typeof useSuperBasicUserInfoQuery>;
export type SuperBasicUserInfoLazyQueryHookResult = ReturnType<typeof useSuperBasicUserInfoLazyQuery>;
export type SuperBasicUserInfoQueryResult = Apollo.QueryResult<SuperBasicUserInfoQuery, SuperBasicUserInfoQueryVariables>;