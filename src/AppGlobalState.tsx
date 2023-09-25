import React, { createContext, useEffect, useReducer } from 'react';
import { useWindowSize, WindowSize } from './hooks/useWindowSize';
import OrgsDataLoader, { CampaignsReverseIndex, OrgsIndex, OrgsTree } from './components/OrgsDataLoader';
import { InsPreApprovedContact, usePermissionsQuery } from './graphql/generated';

export type DistrictPreApprovalsIndex = Record<string, InsPreApprovedContact[]>; //TODO: relocate

export interface AppState {
  orgsIndex: OrgsIndex;
  orgsTree: OrgsTree;
  dashboardsIndex: string[];
  campaignsReverseIndex: CampaignsReverseIndex;
  orgsLoading: boolean;
  districtPreApprovals: DistrictPreApprovalsIndex;
  orgPreApprovals: InsPreApprovedContact[];
  preApprovalsOrgId: string;
  preApprovalsLoading: boolean;
  windowSize: {screen: string};
  dashboardTab: string;
}

export interface ReducerAction {
  type: string;
  payload: any;
}

const initialState:AppState = {
  windowSize: {
    screen: 'xs',
  },
  orgsIndex: {},
  orgsTree: {
    districts: [],
    schools: [],
    affiliates: [],
  },
  dashboardsIndex: [],
  campaignsReverseIndex: {},
  orgsLoading: true,
  districtPreApprovals: {},
  orgPreApprovals: [],
  preApprovalsOrgId: '',
  preApprovalsLoading: false,
  dashboardTab: 'Overview'

};

export const AppContext = createContext<{appState: AppState; dispatch: React.Dispatch<ReducerAction>;}>({appState: initialState, dispatch: () => null});

interface AppGlobalStateProps {
  children: React.ReactNode;
}

const reducer = (state: AppState, action: ReducerAction) => {
  switch(action.type) {
    case 'PRE_APPROVALS_LOADING':
      return {...state, preApprovalsLoading: true}
    case 'UPDATE_PRE_APPROVALS_DISTRICT':
      return {...state, districtPreApprovals: action.payload.contacts, orgPreApprovals: [], preApprovalsOrgId: action.payload.orgId, preApprovalsLoading: false}
    case 'UPDATE_PRE_APPROVALS_ORG':
      return {...state, districtPreApprovals: {}, orgPreApprovals: action.payload.contacts, preApprovalsOrgId: action.payload.orgId, preApprovalsLoading: false}
    case 'UPDATE_ORGS':
      return {...state, ...action.payload}
    case 'UPDATE_WINDOW_SIZE':
      return {...state, windowSize: action.payload}
    case 'UPDATE_PREAPPROVALS_OPTIMISTIC':
      return {...state, orgPreApprovals: action.payload.preApprovedContacts}
    case 'UPDATE_DASHBOARD_TAB':
      return {...state, dashboardTab: action.payload}
    case 'UPDATE_PREAPPROVALS_ORGS_ID':
      return {...state, preApprovalsOrgId: action.payload.orgId}
    default:
      return state
  }
}

const AppGlobalState: React.FC<AppGlobalStateProps> = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const windowSize:WindowSize = useWindowSize();
  const { data: user } = usePermissionsQuery();

  const onOrgsDataLoaded = (orgsIndex:OrgsIndex, orgsTree:OrgsTree, dashboardsIndex:string[], campaignsReverseIndex:CampaignsReverseIndex) => {
    dispatch({
      type: 'UPDATE_ORGS',
      payload: {
        orgsIndex: orgsIndex,
        orgsTree: orgsTree,
        dashboardsIndex: dashboardsIndex,
        campaignsReverseIndex: campaignsReverseIndex,
        orgsLoading: false,
      }
    });
  };

  useEffect(() => {
    if(appState.windowSize.screen !== windowSize.screen) {
      dispatch({
        type: 'UPDATE_WINDOW_SIZE',
        payload: {screen: windowSize.screen || ''}
      });
    }
  }, [windowSize, appState]);
  
  return (
    <AppContext.Provider value={{appState, dispatch}}>
      <OrgsDataLoader userId={user?.me?.id} onOrgsDataLoaded={onOrgsDataLoaded} />
      {children}
    </AppContext.Provider>
  );
};

export default AppGlobalState;
