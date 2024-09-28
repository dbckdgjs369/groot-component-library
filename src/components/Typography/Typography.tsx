import React, { ReactNode, forwardRef } from "react";

import "./style.css";

type TypographTypoType =
  | "span"
  | "body"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2";

/**
 * tag: Typography의 태그를 정해줍니다.
 * typoSize: Typography의 크기를 정해줍니다.
 */
const Typography = forwardRef(function Typography(
  {
    tag = "span",
    typoSize = "span",
    children,
    ...rest
  }: {
    tag?: keyof HTMLElementTagNameMap;
    typoSize?: TypographTypoType;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const props = {
    className: `${typoSize}_typo`,
    ...rest,
  };
  return React.createElement(tag, { ...props, children, ref });
});

export default Typography;
