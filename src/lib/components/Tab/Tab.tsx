import { HTMLAttributes, ReactNode } from "react";

import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabProvider, useTabContext } from "./TabContext";
import * as S from "./styled";

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

/**
 * Tab component for representing a single tab in a tabbed interface.
 *
 * @param {string} value - The unique identifier for the tab. This is used to control
 *                         which tab is active and to handle tab selection events.
 * @param {React.Node} children - The content to be displayed within the tab.
 *
 * @example
 * <Tab value="tab1">Tab 1</Tab>
 *
 * @returns {JSX.Element} The rendered tab element.
 */

function Tab({ value, children, style, ...rest }: TabProps) {
  const { activeTab, setActiveTab } = useTabContext();

  const isActive = activeTab === value;

  return (
    <S.StyledTab
      isActive={isActive}
      onClick={() => setActiveTab(value)}
      value={value}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </S.StyledTab>
  );
}

Tab.List = TabList;
Tab.Panel = TabPanel;
Tab.Provider = TabProvider;

export default Tab;
