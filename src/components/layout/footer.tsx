import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor={"#1a202c"} width={"100%"} marginTop={"auto"}>
      <Container
        maxW={"container.md"}
        color={"white"}
        paddingTop={".5rem"}
        paddingBottom={".5rem"}
        borderTop={"1px solid gray"}
      >
        <Text fontSize={"sm"} textAlign={"center"}>
          Designed & Built by FC Neal. © 2022 Reilwaystation
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
