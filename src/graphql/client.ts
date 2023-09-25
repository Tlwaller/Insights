import { ApolloConfig } from "@snap-mobile/auth-graphql-client-tools";
import clientTools from "@snap-mobile/auth-graphql-client-tools/dist/graphql/client";

export const getClient = (auth: boolean) => {
  if (!process.env.REACT_APP_GRAPHQL_URI || !process.env.REACT_APP_SSO_HOST) {
    throw new Error("No graph url or sso host environment variables provided");
  }
  const config: ApolloConfig = {
    graphqlUrl: process.env.REACT_APP_GRAPHQL_URI,
    ssoHost: process.env.REACT_APP_SSO_HOST,
    includeLocalSchema: true,
    forceAuthentication: auth ? true: false,
  };
  return clientTools.getClient(config);
};
