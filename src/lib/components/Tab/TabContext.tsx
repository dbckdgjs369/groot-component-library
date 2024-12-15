import { createContext, useContext, useState, ReactNode } from "react";

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

/**
 * Must use Tab related components inside TabContext
 *
 * @param defaultTab - default tab that opens first
 *
 * @returns TabProvider that handles tab state.
 */

/**
 * TabProvider component for managing the state of active tabs in a tabbed interface.
 *
 * @param {string} defaultTab - The value of the tab that should be active by default.
 *                              This is used to initialize the active tab state.
 * @param {React.Node} children - The content to be rendered within the provider.
 *                                Use Tab components inside.
 *
 * @example
 * <Tab.Provider defaultTab="Tab 1">
 *     <Tab.List style={{ width: "500px" }} tabColor="red">
 *       <Tab value="Tab 1">Tab 1</Tab>
 *       <Tab value="Tab 2">Tab 2</Tab>
 *       <Tab value="Tab 3">Tab 3</Tab>
 *     </Tab.List>
 *     <Tab.Panel value="Tab 1">a</Tab.Panel>
 *     <Tab.Panel value="Tab 2">b</Tab.Panel>
 *     <Tab.Panel value="Tab 3">c</Tab.Panel>
 *  </Tab.Provider>
 *
 * @returns {JSX.Element} The rendered provider element that manages active tab state.
 */

export function TabProvider({ children, defaultTab }: TabProviderProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
