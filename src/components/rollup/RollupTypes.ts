import { Maybe } from "graphql/jsutils/Maybe";
import { Scalars } from "../../graphql/generated";

export interface RollupDashboardSummary {
  id: number | string;
  image: string;
  name: string;
  totalRaised: number;
  campaigns: number;
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<Scalars['JSONObject']>;
  parentId?: Maybe<Scalars['String']>;
  type?: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};