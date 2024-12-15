import React, { ReactNode, forwardRef } from "react";

import styles from "./Column.module.css";

/**
 * Column component for creating a vertical layout with customizable gap between items.
 *
 * @param {string} tag - The HTML tag to use for rendering the column.
 *                       Default is "div".
 * @param {number} gap - The space between child elements, dynamically applied in px.
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

export default Column;
