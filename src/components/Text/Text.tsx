import React, { ComponentProps } from "react";

type Props = ComponentProps<"p">;
interface TextProps extends Props {
  text?: string;
  children?: React.ReactNode;
}

const Text = ({ text, children, ...rest }: TextProps) => {
  return <p {...rest}>{text || children}</p>;
};

export default Text;
