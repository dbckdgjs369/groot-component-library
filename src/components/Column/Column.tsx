import { ReactNode } from "react";
import "./style.css";

export default function Column({ children }: { children: ReactNode }) {
  return <div className="column">{children}</div>;
}
