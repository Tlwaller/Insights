import {ApolloClient} from "@apollo/client";

declare global {
    interface Window {
        __SNAP_APOLLO_CLIENT__: ApolloClient<any>;
    }
}
