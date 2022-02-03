import { Box, Container, Text } from "@chakra-ui/react";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor={"#1a202c"} width={"100%"} marginTop={"auto"}>
      <Container
        maxW={"container.lg"}
        display={"flex"}
        flexWrap={"wrap"}
        color={"white"}
        paddingTop={"1rem"}
      >
        <Box
          flex={{ base: "0 0 100%", md: "0 0 33.33%" }}
          marginBottom={"1rem"}
        >
          <Text marginBottom={"1rem"} fontWeight={"bold"}>
            Howdy?
          </Text>
          <Text fontWeight={"light"} fontSize={"sm"}>
            Feel Free to discus whatever your business needs whether it&aposs
            about making your UI/UX dynamic and animated or even if you&aposre
            in need of Visual Effects or maybe you want to start a game
            development business.
          </Text>
        </Box>
        <Box
          flex={{ base: "0 0 100%", md: "0 0 33.33%" }}
          marginBottom={"1rem"}
        >
          <Box
            listStyleType={"none"}
            padding={"0"}
            as={"ul"}
            float={{ base: "none", md: "right" }}
          >
            <Text marginBottom={"1rem"} fontWeight={"bold"}>
              Contact
            </Text>
            <Box as={"li"} display={"flex"} marginBottom={".5rem"}>
              <Box
                as={"span"}
                minWidth={"2rem"}
                textAlign={"left"}
                paddingRight={"1rem"}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Box>
              <Text fontWeight={"light"} fontSize={"sm"}>
                villangcafcneal@gmail.com
              </Text>
            </Box>
            <Box as={"li"} display={"flex"} marginBottom={".5rem"}>
              <Box
                as={"span"}
                minWidth={"2rem"}
                textAlign={"left"}
                paddingRight={"1rem"}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Box>
              <Text fontWeight={"light"} fontSize={"sm"}>
                reilwaystation@gmail.com
              </Text>
            </Box>
            <Box as={"li"} display={"flex"} marginBottom={".5rem"}>
              <Box
                as={"span"}
                minWidth={"2rem"}
                textAlign={"left"}
                paddingRight={"1rem"}
              >
                <FontAwesomeIcon icon={faPhone} />
              </Box>
              <Text fontWeight={"light"} fontSize={"sm"}>
                +639482629914
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          flex={{ base: "0 0 100%", md: "0 0 33.33%" }}
          marginBottom={"1rem"}
        >
          <Box float={{ base: "none", md: "right" }}>
            <Text marginBottom={"1rem"} fontWeight={"bold"}>
              External
            </Text>
            <Text fontWeight={"light"} fontSize={"sm"} marginBottom={".5rem"}>
              codeygo
            </Text>
            <Text fontWeight={"light"} fontSize={"sm"} marginBottom={".5rem"}>
              github
            </Text>
            <Text fontWeight={"light"} fontSize={"sm"} marginBottom={".5rem"}>
              linkedin
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
