import { Box, ChakraComponent, Container } from "@chakra-ui/react";
import React from "react";

const Section: ChakraComponent<"div", {}> = (props) => {
  return (
    <Box {...props}>
      <Container
        maxW={"container.md"}
        paddingTop={"3rem"}
        paddingBottom={"3rem"}
      >
        {props.children}
      </Container>
    </Box>
  );
};

export default Section;
