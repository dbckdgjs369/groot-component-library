import { HTMLAttributes, ReactNode } from "react";

import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabProvider, useTabContext } from "./TabContext";
import * as S from "./styled";

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

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
