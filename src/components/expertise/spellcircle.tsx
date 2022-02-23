import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InnerCircle from "./innercircle";
import RectOne from "./rectOne";

import OutsideCircle from "./outsideCircle";
import RectTwo from "./rectTwo";

const spellCircleVariants = {
  innerCircle: {
    scale: 1,
    opacity: 1,
    rotate: -180,
    transition: {
      scale: { duration: 1 },
      rotate: { duration: 1 },
    },
  },
  outerCircle: {
    scale: 1,
    opacity: 1,
    rotate: -180,
    transition: {
      scale: { duration: 1 },
      rotate: { duration: 1 },
    },
  },
  rectOne: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 1 },
      scale: { duration: 1 },
      rotate: { duration: 1 },
    },
  },
  rectTwo: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 1 },
      scale: { duration: 1 },
      rotate: { duration: 1 },
    },
  },
  symbol: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { duration: 1 },
      scale: { duration: 1 },
    },
  },
};
const SpellCircle = (props: any) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const color = "white";
  return (
    <Box>
      <svg
        ref={ref}
        width="100%"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height="100%"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
      >
        <motion.g
          stroke={color}
          variants={spellCircleVariants}
          animate={inView && "innerCircle"}
          initial={{ scale: 0, opacity: 0, rotate: 360 }}
        >
          <InnerCircle />
        </motion.g>

        <motion.g
          variants={spellCircleVariants}
          initial={{ scale: 1.2, opacity: 0, rotate: 90 }}
          animate={inView && "rectOne"}
          stroke={color}
        >
          <RectOne />
        </motion.g>

        <motion.g
          variants={spellCircleVariants}
          initial={{ scale: 1.2, opacity: 0, rotate: 45 }}
          animate={inView && "rectTwo"}
          stroke={color}
        >
          <RectTwo />
        </motion.g>

        <motion.g
          variants={spellCircleVariants}
          animate={inView && "symbol"}
          initial={{ scale: 0, opacity: 0, rotate: 360 }}
          fill={color}
        >
          {props.symbol}
        </motion.g>

        <motion.g
          variants={spellCircleVariants}
          initial={{ scale: 0.9, opacity: 0, rotate: 0 }}
          animate={inView && "outerCircle"}
          fill={color}
        >
          <OutsideCircle />
        </motion.g>
      </svg>
    </Box>
  );
};

export default SpellCircle;
