import { Box, ChakraComponent, Text } from "@chakra-ui/react";
import React from "react";

const Title: ChakraComponent<"div", {}> = (props) => {
  return (
    <Box {...props} width={"100%"} display={"flex"}>
      <Text
        display={"inline-block"}
        marginRight={"auto"}
        fontSize={"sm"}
        color={props.color ? props.color : "#1a202c"}
        marginBottom={"1rem"}
        textTransform={"uppercase"}
        position={"relative"}
      >
        {props.children}
        <Box
          display={"block"}
          width={"100%"}
          height={"2px"}
          backgroundColor={props.color ? props.color : "#1a202c"}
          position={"absolute"}
          bottom={"-2px"}
          transitionDuration={"2s"}
          left={0}
        />
      </Text>
    </Box>
  );
};

export default Title;
