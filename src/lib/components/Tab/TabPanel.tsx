import { HTMLAttributes, ReactNode } from "react";

import { useTabContext } from "./TabContext";

/**
 * Displays the value that matches the value of the tab.
 *
 * @param value - Value of TabPanel
 *
 * @returns A panel that shows content when the tab is selected.
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
