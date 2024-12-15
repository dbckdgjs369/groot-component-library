import { ReactNode, forwardRef } from "react";

import styles from "./Button.module.css";

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
      <button
        ref={ref}
        {...rest}
        className={styles.button}
        style={{
          color: color,
          backgroundColor: backgroundColor,
          ...rest.style,
        }}
      >
        {children}
      </button>
    );
  }
);

export default Button;
