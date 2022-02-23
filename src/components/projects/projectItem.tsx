import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectDisplay from "./projectDisplay.tsx";

interface Media {
  src: string;
  type: "video" | "image";
}
interface ProjectData {
  title?: string;
  description?: string;
  media: Array<Media>;
  thumbnail?: string;
  link?: string;
}

interface ProjectItemProps {
  data: ProjectData;
}

const projectItemVariant = {
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MotionBox = motion(Box);

const ProjectItem = (props: ProjectItemProps) => {
  const [state, setState] = useState<any>({ toggle: false, isOpen: false });
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  const handleToggleItem = () => {
    state.toggle
      ? setState({ ...state, toggle: false })
      : setState({ ...state, toggle: true });
  };
  const handleToggleModal = () => {
    state.isOpen
      ? setState({ ...state, isOpen: false })
      : setState({ ...state, isOpen: true });
  };

  return (
    <>
      <MotionBox
        ref={ref}
        variants={projectItemVariant}
        initial={{ scale: 0 }}
        animate={inView && "show"}
        cursor={"pointer"}
        position={"relative"}
        width={"100%"}
        paddingTop={"100%"}
      >
        {state.toggle && (
          <Box
            padding={"1rem"}
            zIndex={"99"}
            position={"absolute"}
            top={0}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            pointerEvents={"none"}
            backgroundColor={"rgb(26, 32, 44, .8)"}
            flexDirection={"column"}
          >
            {props.data.title && (
              <Text marginBottom={"1rem"} color={"white"} fontSize={"sm"}>
                {props.data.title}
              </Text>
            )}
            <Button
              pointerEvents={"all"}
              onClick={handleToggleModal}
              color={"white"}
              size={"xs"}
              backgroundColor={"transparent"}
              border={"1px"}
              _focus={{ boxShadow: "none" }}
              _active={{ boxShadow: "none" }}
              _hover={{ boxShadow: "none" }}
            >
              View More
            </Button>
          </Box>
        )}
        <Box
          onClick={handleToggleItem}
          onBlur={handleToggleItem}
          position={"absolute"}
          borderRadius={".5rem"}
          top={0}
          zIndex={"0"}
          width={"100%"}
          height={"100%"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          backgroundImage={props.data?.thumbnail}
          filter={state.toggle && "grayscale(100%)"}
        />
      </MotionBox>
      <Modal isOpen={state.isOpen} onClose={handleToggleModal} size={"2xl"}>
        <ModalOverlay />
        <ModalContent
          borderRadius={0}
          backgroundColor={"transparent"}
          padding={"1rem"}
        >
          <ModalBody padding={"1rem"} backgroundColor={"#1a202c"}>
            <ProjectDisplay dataset={props.data.media} />
            <Text fontWeight={"medium"} color={"white"} marginBottom={"1rem"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae
            </Text>
            <Text
              marginBottom={"2rem"}
              fontWeight={"light"}
              color={"white"}
              fontSize="sm"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae a iusto libero illo ullam id eveniet
              temporibus assumenda. Consectetur nobis nisi numquam architecto
              illo distinctio commodi, animi eaque?
            </Text>
            <Button
              color={"white"}
              size={"xs"}
              backgroundColor={"transparent"}
              border={"1px"}
              _focus={{ boxShadow: "none" }}
              _active={{ boxShadow: "none" }}
              _hover={{ boxShadow: "none" }}
              onClick={handleToggleModal}
            >
              Close
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectItem;
