import { useState, useEffect } from "react";
import { getCurrentBreakpoint } from "../utils/UIUtils";

// Define general type for useWindowSize hook, which includes width, height and screen
export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  screen: string | undefined;
}

export const useWindowSize = () : WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    screen: getCurrentBreakpoint(),
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screen: getCurrentBreakpoint(),
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}