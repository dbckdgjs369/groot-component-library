import { ReactNode } from "react";

import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabProvider, useTabContext } from "./TabContext";

interface TabProps {
  value: string;
  children: ReactNode;
}

function Tab({ value, children }: TabProps) {
  const { activeTab, setActiveTab } = useTabContext();

  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: isActive ? "#007bff" : "#f0f0f0",
        color: isActive ? "#fff" : "#000",
      }}
    >
      {children}
    </button>
  );
}

Tab.List = TabList;
Tab.Panel = TabPanel;
Tab.Provider = TabProvider;

export default Tab;
