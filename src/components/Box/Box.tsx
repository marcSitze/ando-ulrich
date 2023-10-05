import React, { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;

export interface BoxProps extends DivProps {
  children?: React.ReactNode;
}
const Box = ({ children, ...rest }: BoxProps) => {
  return <div {...rest}>{children}</div>;
};

export default Box;
