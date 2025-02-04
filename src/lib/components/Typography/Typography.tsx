import { createElement, forwardRef, ReactNode } from "react";

import styles from "./Typography.module.css";

const typoMap = {
  h1: styles.h1Typo,
  h2: styles.h2Typo,
  h3: styles.h3Typo,
  h4: styles.h4Typo,
  h5: styles.h5Typo,
  h6: styles.h6Typo,
  body1: styles.body1Typo,
  body2: styles.body2Typo,
  subtitle1: styles.subtitle1Typo,
  subtitle2: styles.subtitle2Typo,
  span: styles.spanTypo,
};

/**
 * Typography component for rendering text with different HTML tags and typography sizes.
 *
 * @param {string} tag - The HTML tag to use for rendering the text.
 *                        Default is "span".
 * @param {string} typoSize - The typography size to apply to the text.
 *                            Default is "span".
 * @param {React.Node} children - The content to be rendered within the typography component.
 *
 * @example
 * <Typography tag="h1" typoSize="large">This is a heading</Typography>
 *
 * @returns {JSX.Element} The rendered typography element.
 */

const Typography = forwardRef(function Typography(
  {
    tag = "span",
    typoSize = "span",
    children,
    ...rest
  }: {
    tag?: keyof HTMLElementTagNameMap;
    typoSize?: keyof typeof typoMap;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const props = {
    ...rest,
    className: `${rest.className || ""} ${typoMap[typoSize] || ""}`.trim(), // 클래스명 추가
  };

  return createElement(tag, {
    ...props,
    children,
    ref,
  });
});

export default Typography;
