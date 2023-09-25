import React, { useState, useEffect, Ref } from "react";
import { compareScalarArrays } from "../utils/ArrayUtils";

interface TabCallbacks {
  setActive?: () => void;
}

interface TabProps {
  name: string;
  id: string;
  fill?: boolean;
  tabRef?: Ref<HTMLButtonElement>;
  selected?: boolean;
  callbacks?: TabCallbacks;
}
//setActive is causing a warning error on the Dashboards page.
export const Tab: React.FC<TabProps> = ({
  name,
  id,
  fill,
  tabRef,
  selected = false,
  callbacks,
}) => {
  return (
    <button
      ref={tabRef}
      className={`py-3 border-b-2 transition-colors duration-300 ${
        fill
          ? selected
            ? "bg-blue-200 px-2 rounded-lg text-black"
            : "border-transparent hover:bg-blue-50 px-2 rounded-lg"
          : selected
          ? "border-blue-600"
          : "border-transparent hover:border-gray-200"
      }
      text-gray-500
      text-sm
      font-medium
      `}
      onClick={callbacks && callbacks.setActive}
    >
      {name}
    </button>
  );
};

interface TabsProps {
  children: React.ReactElement[];
  defaultSelected?: string;
  className?: string;
  onTabChange?: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultSelected,
  className,
  onTabChange = () => {},
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);
  const [tabIds, setTabIds] = useState<string[]>([]);

  useEffect(() => {
    let ids: string[] = [];
    React.Children.forEach(children, (child: React.ReactElement, index) => {
      ids.push(child.props.id ? child.props.id : "");
    });
    if (!compareScalarArrays(tabIds, ids)) {
      setTabIds(ids);
      if (defaultSelected && ids.indexOf(defaultSelected) >= 0) {
        setActiveTabIndex(ids.indexOf(defaultSelected));
      }
    }
  }, [children, tabIds, defaultSelected]);

  useEffect(() => {
    tabIds[activeTabIndex] && onTabChange(tabIds[activeTabIndex]);
  }, [activeTabIndex]); // eslint-disable-line

  const childrenTabs = React.Children.map(
    children,
    (child: React.ReactElement, index) => {
      return React.cloneElement(child, {
        selected: activeTabIndex === index,
        callbacks: { setActive: () => setActiveTabIndex(index) },
      });
    }
  );

  return (
    <div className={"flex flex-row space-x-5 overflow-x-auto " + className}>
      {childrenTabs}
    </div>
  );
};
