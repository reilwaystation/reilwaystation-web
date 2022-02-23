import React from "react";
import { Box, Container, Text, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: {
    opacity: 0,
    y: "1rem",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Banner = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <Box
      id={"banner"}
      backgroundPosition={"center bottom"}
      backgroundRepeat={"no-repeat"}
      backgroundImage={"/wallpaper2.jpg"}
      backgroundSize={"cover"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      minHeight={"100vh"}
      flexDirection={"column"}
    >
      <Container
        margin={"auto"}
        maxW={"container.md"}
        display={"flex"}
        alignItems={"center"}
        height={"100%"}
        flexWrap={"wrap"}
      >
        <Box
          ref={ref}
          color={"white"}
          paddingRight={{ base: "0", md: "1rem" }}
          order={{ base: 2, md: 1 }}
          flex={{ base: "0 0 100%", sm: "0 0 50%" }}
        >
          <MotionBox
            as={"p"}
            variants={variants}
            initial={"hidden"}
            animate={
              inView && {
                opacity: 1,
                y: "0rem",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            Hello welcome to
          </MotionBox>
          <MotionBox
            as={"p"}
            variants={variants}
            initial={"hidden"}
            animate={
              inView && {
                opacity: 1,
                y: "0rem",
                transition: {
                  duration: 1,
                  delay: 0.4,
                },
              }
            }
            textTransform={"uppercase"}
            fontFamily={"'Roboto', sans-serif;"}
            fontSize={"4xl"}
            fontWeight={"black"}
            lineHeight={1}
          >
            Reilwaystation
          </MotionBox>
          <MotionBox
            as={"p"}
            variants={variants}
            initial={"hidden"}
            animate={
              inView && {
                opacity: 1,
                y: "0rem",
                transition: {
                  duration: 1,
                  delay: 0.6,
                },
              }
            }
            fontSize={"2xl"}
          >
            your graphic design station
          </MotionBox>
          <MotionBox
            as={"p"}
            variants={variants}
            initial={"hidden"}
            animate={
              inView && {
                opacity: 1,
                y: "0rem",
                transition: {
                  duration: 1,
                  delay: 0.8,
                },
              }
            }
            fontSize={"sm"}
            marginBottom={"1rem"}
            fontWeight={"light"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            tempore doloribus reiciendis sit quod autem, assumenda.
          </MotionBox>
          <MotionButton
            variants={variants}
            initial={"hidden"}
            animate={
              inView && {
                opacity: 1,
                y: "0rem",
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }
            }
            size={"xs"}
            backgroundColor={"transparent"}
            border={"1px"}
            _focus={{ boxShadow: "none" }}
            _active={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
            color={"#04bcf4"}
          >
            Get started
          </MotionButton>
        </Box>
        <MotionBox
          initial={{ opacity: 0, y: "-1rem" }}
          animate={
            inView && { opacity: 1, y: "0rem", transition: { duration: 1 } }
          }
          order={{ base: 1, md: 2 }}
          flex={{ base: "0 0 100%", sm: "0 0 50%" }}
          marginBottom={{ base: "2rem", md: "0" }}
        >
          <Image width={"100%"} src={"logo.svg"} alt={"logo"} />
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Banner;
