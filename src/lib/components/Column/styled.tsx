import { css } from "@emotion/react";

export const ColumnCss = ({ gap }: { gap?: number }) => css`
  display: flex;
  flex-direction: column;
  ${gap && `gap: ${gap}px`};
`;
