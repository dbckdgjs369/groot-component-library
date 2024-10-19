import { jsx } from "@emotion/react";
import React, { ReactNode, forwardRef } from "react";

import * as S from "./styled";

/**
 * Element that flex is row
 *
 * @param tag - Select HTML tag
 * @param gap - gap
 *
 * @returns Element that flex is row
 */

const Row = forwardRef(function Row(
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
    css: S.RowCss({ gap: gap }),
    ...rest,
  };
  return jsx(tag, { ...props, children, ref });
});

export default Row;
