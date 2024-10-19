import { HTMLAttributes, ReactNode } from "react";

import { useTabContext } from "./TabContext";

/**
 * TabPanel component for rendering the content of a specific tab in a tabbed interface.
 *
 * @param {string} value - The unique identifier for the tab that this panel corresponds to.
 *                         This value should match the value of the Tab component to display its content.
 * @param {React.Node} children - The content to be rendered when the corresponding tab is active.
 *
 * @example
 * <TabPanel value="tab1">This is the content for Tab 1</TabPanel>
 *
 * @returns {JSX.Element | null} The rendered panel content if the tab is active, otherwise null.
 */

export function TabPanel({
  value,
  children,
  style,
}: {
  value: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  const { activeTab } = useTabContext();

  if (activeTab !== value) return null;

  return <div style={{ width: "100%", ...style }}>{children}</div>;
}
