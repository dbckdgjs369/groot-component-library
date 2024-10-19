/** @jsxImportSource @emotion/react */

import React, { ReactNode, forwardRef } from "react";

import * as S from "./styled";
import { jsx } from "@emotion/react";

type TypographTypoType =
  | "span"
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

const typoMap = {
  h1: S.h1Typo,
  h2: S.h2Typo,
  h3: S.h3Typo,
  h4: S.h4Typo,
  h5: S.h5Typo,
  h6: S.h6Typo,
  body1: S.body1Typo,
  body2: S.body2Typo,
  subtitle1: S.subtitle1Typo,
  subtitle2: S.subtitle2Typo,
  span: S.spanType,
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
    typoSize?: TypographTypoType;
    children: ReactNode;
  } & React.HTMLAttributes<HTMLElement>,
  ref
) {
  const props = {
    ...rest,
    css: typoMap[typoSize], // 동적으로 Emotion 스타일을 적용
  };

  return jsx(tag, {
    ...props,
    children,
    ref,
  });
});

export default Typography;
