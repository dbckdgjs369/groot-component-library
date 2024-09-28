import React, { ReactNode, forwardRef } from "react";

import styles from "./style.module.css";

const Row = forwardRef(function Row(
  {
    tag = "div",
    children,
    ...rest
  }: {
    tag?: keyof HTMLElementTagNameMap;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const props = {
    className: `${styles.row}`,
    ...rest,
  };
  return React.createElement(tag, { ...props, children, ref });
});

export default Row;
