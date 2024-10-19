import { jsx } from "@emotion/react";
import React, { ReactNode, forwardRef } from "react";

import * as S from "./styled";

/**
 * Element that flex is column
 *
 * @param tag - Select HTML tag
 * @param gap - gap
 *
 * @returns Element that flex is column
 */

const Column = forwardRef(function Column(
  {
    tag = "div",
    gap,
    children,
    ...rest
  }: {
    tag?: keyof HTMLElementTagNameMap;
    gap?: number;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const props = {
    css: S.ColumnCss({ gap: gap }),
    ...rest,
  };
  return jsx(tag, { ...props, children, ref });
});

export default Column;
