import { Box, Text, BoxProps } from "components";
import React from "react";

interface Props extends BoxProps {
  image: string;
  title: string;
  description: string;
}

const CardImage = ({ description, image, title, ...rest }: Props) => {
  return (
    <Box className="m-w-[300px] w-full bg-primary" {...rest}>
      <Box className="mb-4">
        <img src={image} alt="card" />
      </Box>
      <Text className="text-white text-xs mb-2">{title}</Text>
      <Text className="text-white">{description}</Text>
    </Box>
  );
};

export default CardImage;
