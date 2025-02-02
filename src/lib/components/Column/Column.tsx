import React, { ReactNode, forwardRef } from "react";

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
  const style = { display: "flex", flexDirection: "column", gap: `${gap}px` };

  return React.createElement(
    tag,
    {
      ref,
      ...rest,
      style: { ...style, ...rest.style },
    },
    children
  );
});

export default Column;
