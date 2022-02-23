import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Form from "./form";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <Box id={"contact"}>
      <MotionText
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1, transition: { duration: 1 } }}
        ref={ref}
        color={"white"}
        fontSize={"sm"}
        marginBottom={"2rem"}
      >
        Feel Free to discus whatever your business needs whether it&aposs about
        making your UI/UX dynamic and animated or even if you&aposre in need of
        Visual Effects or maybe you want to start a game development business.
      </MotionText>
      <Form />
    </Box>
  );
};

export default Contact;
