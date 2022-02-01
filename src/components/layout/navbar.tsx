import { Box, Container, Button } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box minHeight={"3rem"} backgroundColor={"#04bcf4"} position={"fixed"}>
      <Container
        maxW={"container.lg"}
        display={"flex"}
        padding={".5rem 1rem"}
        alignItems={"center"}
      >
        <Box>
          <h1>Reilwaystation</h1>
        </Box>
        <Box marginLeft={"auto"}>
          <Button
            as={"a"}
            size={"sm"}
            marginRight=".5rem"
            fontWeight="regular"
            justifyContent="flex-start"
            backgroundColor="transparent"
            _focus={{ boxShadow: "none" }}
            _active={{ boxShadow: "none" }}
            _hover={{ color: "red" }}
          >
            Home
          </Button>
          <Button
            as={"a"}
            size={"sm"}
            marginRight=".5rem"
            fontWeight="regular"
            justifyContent="flex-start"
            backgroundColor="transparent"
            _focus={{ boxShadow: "none" }}
            _active={{ boxShadow: "none" }}
            _hover={{ color: "red" }}
          >
            About
          </Button>
          <Button
            as={"a"}
            size={"sm"}
            marginRight=".5rem"
            fontWeight="regular"
            justifyContent="flex-start"
            backgroundColor="transparent"
            _focus={{ boxShadow: "none" }}
            _active={{ boxShadow: "none" }}
            _hover={{ color: "red" }}
          >
            Contact
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
