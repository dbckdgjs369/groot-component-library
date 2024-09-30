import React, { ReactNode, forwardRef } from "react";

import * as S from "./style";

const Column = forwardRef(function Column(
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
    css: S.ColumnCss,
    ...rest,
  };
  return React.createElement(tag, { ...props, children, ref });
});

export default Column;
