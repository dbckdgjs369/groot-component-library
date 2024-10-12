import { ReactNode } from "react";

import { useTabContext } from "./TabContext";

export function TabPanel({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const { activeTab } = useTabContext();

  if (activeTab !== value) return null;

  return <div>{children}</div>;
}
