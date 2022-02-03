import React from "react";
import { Box, Container, Text, Image } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundImage={"/wall.jpg"}
      backgroundSize={"cover"}
      width={"100%"}
      backgroundColor={"#1a202c"}
      display={"flex"}
      alignItems={"flex-end"}
      minHeight={{ base: "100vh", md: "auto" }}
    >
      <Container
        maxW={"container.lg"}
        display={"flex"}
        height={"100%"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flex={{ base: "0 0 100%", md: "0 0 50%" }}
          margin={{ base: "5rem 0 1rem 0", md: "0" }}
        >
          <Box>
            <Text
              textTransform={"uppercase"}
              fontWeight={"black"}
              fontSize={{ base: "xl", md: "2xl" }}
              color={"#04bcf4"}
            >
              WELCOME VISITOR
            </Text>
            <Text color={"white"} fontWeight={"light"} fontSize={"sm"}>
              to our design station
            </Text>
            <br />
            <Text color={"white"} fontWeight={"light"} fontSize={"sm"}>
              I'm FCN a designer and a programmer behind this website. What we
              do in reilwaystation is Graphic Design, Programming and Scripting
              Technical Analysis Strategies.
            </Text>
            <br />
            <Text color={"white"}></Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          flex={{ base: "0 0 100%", md: "0 0 50%" }}
        >
          <Text color={"white"}>
            <Image src="/mumei.png" />
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
