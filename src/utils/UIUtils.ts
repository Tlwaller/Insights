import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const screenSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number => {
  const screenSizes = fullConfig?.theme?.screens as any;
  const screenSize = screenSizes[value];
  return parseInt(screenSize.replace('px', ''), 10);
}
  

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: string = '';
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig?.theme?.screens as any)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue >= biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};

export const isScreenSizeBelow = (size: string, below: string ): boolean => {
  const belowIndex = screenSizes.indexOf(below);
  const currentIndex = screenSizes.indexOf(size);
  return currentIndex < belowIndex;
};

export const isScreenSizeEqualOrAbove = (size: string, above: string ): boolean => {
  const aboveIndex = screenSizes.indexOf(above);
  const currentIndex = screenSizes.indexOf(size);
  return currentIndex >= aboveIndex;
};

export const lockBodyScroll = (): void => {
  const scrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
  const body = document.body;
  const header = document.getElementsByTagName('snap-global-header')[0];
  if(header) {
    header.style.top = '0';
  }
  body.style.position = 'fixed';
  body.style.width = '100%';
  body.style.top = `-${scrollY}px`;
};

export const unlockBodyScroll = (): void => {
  const body = document.body;
  const header = document.getElementsByTagName('snap-global-header')[0];
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.width = '';
  body.style.top = '';
  if(header) {
    header.style.top = '';
  }
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};