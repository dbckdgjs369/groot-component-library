import React, { ReactNode, forwardRef } from "react";

// import * as S from "./style";
import { css, jsx } from "@emotion/react";

const ColumnCss = css`
  display: flex;
  flex-direction: row;
`;

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
    css: ColumnCss,
    ...rest,
  };
  return jsx(tag, { ...props, children, ref });
});

export default Row;
