import { jsx } from "@emotion/react";
import React, { ReactNode, forwardRef } from "react";

import * as S from "./styled";

/**
 * Row component for creating a horizontal layout with customizable gap between items.
 *
 * @param {string} tag - The HTML tag to use for rendering the row.
 *                       Default is "div".
 * @param {number} gap - The space between child elements.
 *
 * @param {React.Node} children - The content to be rendered within the row component.
 *
 * @example
 * <Row tag="div" gap={20}>
 *   <ChildComponent />
 *   <ChildComponent />
 * </Row>
 *
 * @returns {JSX.Element} The rendered row element.
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
