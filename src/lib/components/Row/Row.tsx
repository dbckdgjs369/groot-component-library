import React, { ReactNode, forwardRef } from "react";

import styles from "./Row.module.css";

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
    gap = 0,
    children,
    ...rest
  }: {
    tag?: keyof HTMLElementTagNameMap;
    gap?: number;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const style = { ...rest.style, gap: `${gap}px` };

  return React.createElement(
    tag,
    {
      ...rest,
      ref,
      className: styles.column, // 기본 스타일 적용
      style,
    },
    children
  );
});

export default Row;
