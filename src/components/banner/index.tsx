import React from "react";
import { Box, Container, Text, Image, Button } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundImage={"/wall.jpg"}
      backgroundSize={"cover"}
      width={"100%"}
      backgroundColor={"gray"}
      display={"flex"}
      alignItems={"flex-end"}
      minHeight={{ base: "100vh", md: "auto" }}
      paddingTop={{ base: "0", md: "3rem" }}
    >
      <Container
        maxW={"container.md"}
        display={"flex"}
        height={"100%"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flex={{ base: "0 0 100%", sm: "0 0 50%" }}
          height={{ base: "50vh", md: "auto" }}
        >
          <Box marginBottom={"1rem"} textAlign={"center"}>
            <Text fontSize={"xl"}>hello! Welcome to</Text>
            <Text
              textTransform={"uppercase"}
              fontWeight={"black"}
              fontSize={"xl"}
            >
              Reilwaystation
            </Text>
            <Button
              isFullWidth
              size={"xs"}
              backgroundColor={"transparent"}
              border={"1px"}
              _focus={{ boxShadow: "none" }}
              _active={{ boxShadow: "none" }}
              _hover={{ boxShadow: "none" }}
            >
              Continue
            </Button>
          </Box>
        </Box>
        <Box
          justifyContent={"center"}
          alignItems={"flex-end"}
          display={"flex"}
          flex={{ base: "0 0 100%", md: "0 0 50%" }}
        >
          <Text color={"white"}>
            <Image height={{ base: "50vh", md: "auto" }} src="/12.png" />
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
