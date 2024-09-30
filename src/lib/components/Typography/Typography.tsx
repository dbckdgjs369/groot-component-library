import React, { ReactNode, forwardRef } from "react";

import * as S from "./style";

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
    css: typoMap[typoSize], // 동적으로 Emotion 스타일을 적용
    ...rest,
  };
  return React.createElement(tag, { ...props, children, ref });
});

export default Typography;
