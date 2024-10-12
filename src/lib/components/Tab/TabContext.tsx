import React, { createContext, useContext, useState, ReactNode } from "react";

interface TabContextProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
interface TabProviderProps {
  children: ReactNode;
  defaultTab: string;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

export function TabProvider({ children, defaultTab }: TabProviderProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
