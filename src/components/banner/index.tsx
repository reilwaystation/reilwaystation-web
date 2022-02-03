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
      alignItems={"center"}
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
            <br />
            <Text color={"white"} fontWeight={"light"} fontSize={"sm"}>
              I'm FCN a designer and a junior programmer behind
              reilwaystation.com. My friends called by the my gamer name Reil so
              that's the story behind my website name. I design graphic
              materials such as logos, brands, infographics, simple vfx and many
              more. I have a few years starting experience as a programmer I
              develop website and in my past time I'm scripting and automating
              some technical analysis strategy. Some years ago I used to be a
              freelance event photographer my specialty is portraits.
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
