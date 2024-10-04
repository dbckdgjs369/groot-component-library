import { ReactNode, forwardRef } from "react";

import * as S from "./styled";

const Button = forwardRef(
  (
    {
      children,
    }: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.StyledButton ref={ref}>{children}</S.StyledButton>;
  }
);

export default Button;
