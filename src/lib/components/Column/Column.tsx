import { jsx } from "@emotion/react";
import React, { ReactNode, forwardRef } from "react";

import * as S from "./styled";

/**
 * Column component for creating a vertical layout with customizable gap between items.
 *
 * @param {string} tag - The HTML tag to use for rendering the column.
 *                       Default is "div".
 * @param {number} gap - The space between child elements.
 *
 * @param {React.Node} children - The content to be rendered within the column component.
 *
 * @example
 * <Column tag="div" gap={20}>
 *   <ChildComponent />
 *   <ChildComponent />
 * </Column>
 *
 * @returns {JSX.Element} The rendered column element.
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
