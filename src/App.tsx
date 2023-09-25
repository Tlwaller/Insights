import "./App.css";
import { SnapMainNavigation } from "./suit";
import Header from "./components/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSideNavigation } from "./hooks/side-navigation";
import { MainNavigationUpdatedEvent } from "./suit/components";
import {useApiStatusQuery, usePermissionsQuery} from "./graphql/generated";
import { noPaddingRoutes } from './App.router';
import AppGlobalState from "./AppGlobalState";
import FeatureToggleInitializer from "./components/FeatureToggleInitializer";
import { publicPages } from "./constants/publicPages";

function App() {
  const {data :apiStatus} = useApiStatusQuery()
  const sideNavOptions = useSideNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const noPadding = new RegExp(noPaddingRoutes.join('|')).test(location.pathname);
  const publicPage = publicPages.indexOf(location.pathname) >= 0;
  const { data: user, loading: userLoading } = usePermissionsQuery();
  const id = !userLoading && user?.me?.id ? `${user.me.id}` : "";

  return (
      <AppGlobalState>
        <FeatureToggleInitializer id={id} featureList={[]}>
          <div className="App">
            {(!!apiStatus?.apiReady && !publicPage) ? (
              <><Header />
              <SnapMainNavigation
              onNavigationupdate={(event: CustomEvent<MainNavigationUpdatedEvent>) => !!event.detail.path && navigate(event.detail.path)}
              data-testid="snap-main-navigation"
              theme="insights"
              navigationOptionsInput={sideNavOptions} /><main className={`overflow-x-hidden break-words md:ml-[91px] lg:ml-[285px] pb-[62px] md:pb-2 ${noPadding ? 'pt-12 md:pt-14' : 'p-3.5 pt-20'}`}>{!!apiStatus?.apiReady && <Outlet />}</main></>
            ):(
              <>
              <Header />
              <main className="flex">
                <Outlet />
              </main>
              </>
            )}
            
          </div>
        </FeatureToggleInitializer>
      </AppGlobalState>
  );
}

export default App;
