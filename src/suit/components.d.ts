import { HTMLStencilElement } from "./create-component/create-component";

const MAINNAVIGATION_KINDS = {
  default : 'default',
  store : 'store',
  sponsor : 'sponsor',
  spend : 'spend',
  drive : 'drive',
  raise : 'raise',
  insights : 'insights',
  mobileandconnect : 'mobileandconnect'
}

type MainNavigationType = keyof typeof MAINNAVIGATION_KINDS

interface MainNavigationOption {
  id: string, text: string, active: boolean, icon?: string, path?: string,
      forceNavigation?: boolean,
}

interface MainNavigationOptionClickedEvent {
  id: string, path?: string, elment: HTMLSnapMainNavigationOptionElement
}

interface MainNavigationUpdatedEvent {
  id: string,
  path?: string
}

export interface HTMLSnapMainNavigationElement extends HTMLStencilElement {
  "navigationOptionsInput": MainNavigationOption[];
  "theme": MainNavigationType;
}
export interface SnapMainNavigationProps {
  "navigationOptionsInput"?: MainNavigationOption[];
  "onNavigationupdate"
      ?: (event: CustomEvent<MainNavigationUpdatedEvent>) => void;
  "theme"?: MainNavigationType;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'snap-logo-header-end': any,
      'snap-app-switcher-container': any,
    }
  }
}
