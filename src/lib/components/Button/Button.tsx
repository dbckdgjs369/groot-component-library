import { ReactNode, forwardRef } from "react";

import * as S from "./styled";

const Button = forwardRef(
  (
    {
      color = "white",
      backgroundColor,
      children,
      ...rest
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
        {...rest}
      >
        {children}
      </S.StyledButton>
    );
  }
);

export default Button;
