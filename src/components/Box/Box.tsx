import React, { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;

interface Props extends DivProps {
  children?: React.ReactNode;
}
const Box = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};

export default Box;
