import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

interface Props extends ButtonProps {
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const Button = ({ title, onClick, children, ...rest }: Props) => {
  return (
    <button onClick={onClick} {...rest}>
      {title || children}
    </button>
  );
};

export default Button;
