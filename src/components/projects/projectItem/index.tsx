import {
  Box,
  Image,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectDisplay from "../projectDisplay";

interface Media {
  src: string;
  type: "video" | "image";
}

interface ProjectItemProps {
  description?: string;
  media: Array<Media>;
  thumbnail?: string;
  link?: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [state, setState] = useState({
    isOpen: false,
    isToggled: false,
  });
  const handleToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        width="100%"
        position={"relative"}
        onClick={() =>
          state.isToggled
            ? setState({ ...state, isToggled: false })
            : setState({ ...state, isToggled: true })
        }
      >
        <Image
          transitionDuration="200ms"
          boxSize={"200px"}
          width={"100%"}
          height={"auto"}
          src={props.thumbnail}
          fallbackSrc="https://via.placeholder.com/150"
          alt="thumbnail"
          marginBottom={"1rem"}
        />

        <Text fontSize="sm" noOfLines={2} marginBottom={"1rem"}>
          {props.description ? props.description : "no description"}
        </Text>
        <Button
          color={"#1a202c"}
          border={"1px solid #ccc"}
          marginTop={"auto"}
          _focus={{ boxShadow: "none" }}
          _active={{ boxShadow: "none" }}
          size="xs"
          type="button"
          isFullWidth
          backgroundColor={"transparent"}
          onClick={handleToggle}
        >
          View More
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleToggle} size={"2xl"}>
        <ModalOverlay />
        <ModalContent
          borderRadius={0}
          backgroundColor={"transparent"}
          padding={"1rem"}
        >
          <ModalBody padding={"1rem"} backgroundColor={"white"}>
            <ProjectDisplay dataset={props.media} />
            <Text fontWeight={"medium"} color={"#1a202c"} marginBottom={"1rem"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae
            </Text>
            <Text marginBottom={"2rem"} fontWeight={"light"} fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae a iusto libero illo ullam id eveniet
              temporibus assumenda. Consectetur nobis nisi numquam architecto
              illo distinctio commodi, animi eaque?
            </Text>
            <Button
              color={"#1a202c"}
              border={"1px solid #ccc"}
              marginTop={"auto"}
              _focus={{ boxShadow: "none" }}
              _active={{ boxShadow: "none" }}
              size="xs"
              type="button"
              isFullWidth
              backgroundColor={"transparent"}
              onClick={handleToggle}
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
