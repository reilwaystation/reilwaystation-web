import { Box, ChakraComponent, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface TitleProps {
  title: string;
  subtitle?: string;
}

const titleAnimationVariant = {
  rect: {
    height: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  main: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  sub: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const MotionBox = motion(Box);

const Title = (props: TitleProps) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <Box ref={ref} display={"flex"} marginBottom={"3rem"}>
      <Box width={".5rem"} height={"auto"} marginRight={"1rem"}>
        <MotionBox
          variants={titleAnimationVariant}
          animate={inView && "rect"}
          initial={{ height: "0" }}
          backgroundColor={"#04bcf4"}
        />
      </Box>
      <Box overflow={"hidden"}>
        <MotionBox
          as={"p"}
          initial={{ y: "-100%" }}
          variants={titleAnimationVariant}
          animate={inView && "main"}
          textTransform={"uppercase"}
          fontSize={"4xl"}
          fontWeight={"light"}
          color={"white"}
          lineHeight={1}
        >
          {props.title}
        </MotionBox>
        {props.subtitle && (
          <MotionBox
            variants={titleAnimationVariant}
            animate={inView && "sub"}
            as={"p"}
            initial={{ x: "-100%" }}
            color={"white"}
          >
            {props.subtitle}
          </MotionBox>
        )}
      </Box>
    </Box>
  );
};

export default Title;
