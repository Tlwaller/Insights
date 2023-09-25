import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import {MainNavigationOption} from "../suit/components";

const navigationOptions = [
  {
    id: "page-dashboards",
    text: "Dashboards",
    active: false,
    icon: "template-solid",
    path: "/dashboards",
    forceNavigation: false,
  },
  {
    id: "page-reporting",
    text: "Reporting",
    active: true,
    icon: "chart-bar-solid",
    path: "/reporting",
    forceNavigation: false,
  },
  {
    id: "page-rollup",
    text: "Rollups",
    active: false,
    icon: "collection-solid",
    path: "/rollup",
    forceNavigation: false,
  },
  // {
  //   id: "page-settings",
  //   text: "Settings",
  //   active: false,
  //   icon: "cog-solid",
  //   path: "/settings",
  //   forceNavigation: false,
  // },
];

export const useSideNavigation = () => {
  const location = useSideNavigationTools.useLocation()
  const [sideNavOptions, setSideNavOptions] = useState<MainNavigationOption[]>(useSideNavigationTools.navigationOptions)

  useEffect(() => {
    const pathArray = location.pathname.split("/")
    const current = "/" + pathArray[1]
    setSideNavOptions(sideNavOptions => [...sideNavOptions.map((option) => {
      return {
        ...option,
        active:  option.path === current
      }
    })])

  },[location])

  return sideNavOptions
}

export const useSideNavigationTools = {
  useLocation: useLocation,
  navigationOptions
}
