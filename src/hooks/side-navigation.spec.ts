import { renderHook } from "@testing-library/react";
import sinon from "sinon";

import { useSideNavigation, useSideNavigationTools } from "./side-navigation";

const sandbox = sinon.createSandbox();
describe("useSideNavigation", () => {
  useSideNavigationTools.navigationOptions = [
    {
      id: "page-5",
      text: "Page Five",
      active: false,
      icon: "search-line",
      path: "/page-five",
      forceNavigation: false,
    },
    {
      id: "page-6",
      text: "Page Six",
      active: false,
      icon: "search-line",
      path: "/page-six",
      forceNavigation: false,
    },
  ];
  const userLocationStub = sandbox.stub(useSideNavigationTools, "useLocation");
  afterEach(() => {
    sandbox.resetHistory();
    sandbox.resetBehavior();
  });
  it("should set the active path correctly", () => {
    //@ts-expect-error
    userLocationStub.returns({ pathname: "/page-six/" });
    const { result } = renderHook(() => useSideNavigation());

    expect(result.current[1].active).toBe(true);
  });
});
