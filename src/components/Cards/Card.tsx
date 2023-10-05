import { Box, Text, BoxProps } from "components";
import React from "react";

interface Props extends BoxProps {
  title: string;
  subTitle: string;
  decription?: string | React.ReactElement;
  orientation?: "column" | "row";
}

const Card = ({
  title,
  subTitle,
  decription,
  orientation = "column",
  ...rest
}: Props) => {
  return (
    <Box
      className={`m-w-[300px] w-full ${rest.className} ${
        orientation === "row" ? " flex justify-between " : ""
      }`}
      {...rest}
    >
      <Text className="text-primary text-2xl mb-2">{title}</Text>
      <Box>
        <Text className="font-bold text-white text-sm">{subTitle}</Text>
        <Text className="text-grayLight text-xs">{decription}</Text>
      </Box>
    </Box>
  );
};

export default Card;
