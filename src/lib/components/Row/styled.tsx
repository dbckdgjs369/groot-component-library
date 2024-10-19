import { css } from "@emotion/react";

export const RowCss = ({ gap }: { gap?: number }) => css`
  display: flex;
  flex-direction: row;
  ${gap && `gap: ${gap}px`};
`;
