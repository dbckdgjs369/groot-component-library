import { ReactNode } from "react";
import "./style.css";

export default function Row({ children }: { children: ReactNode }) {
  return <div className="row">{children}</div>;
}
