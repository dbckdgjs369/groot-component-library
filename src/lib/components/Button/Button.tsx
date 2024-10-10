import { ReactNode, forwardRef } from "react";

import * as S from "./styled";

const Button = forwardRef(
  (
    {
      color = "white",
      backgroundColor,
      children,
    }: {
      color?: string;
      backgroundColor?: string;
      children: ReactNode;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <S.StyledButton
        ref={ref}
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        {children}
      </S.StyledButton>
    );
  }
);

export default Button;
