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
  const handleToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={".25rem"}
      >
        <Image
          marginBottom={"1rem"}
          borderRadius={".5rem"}
          boxSize={"200px"}
          width={"100%"}
          height={"auto"}
          src={props.thumbnail}
          fallbackSrc="https://via.placeholder.com/150"
          alt="thumbnail"
        />
        <Text
          noOfLines={2}
          marginBottom={"1rem"}
          color={"white"}
          fontWeight={"light"}
          fontSize={"sm"}
        >
          {props.description ? props.description : "No Description"}
        </Text>
        <Button
          color={"white"}
          marginTop={"auto"}
          _focus={{ boxShadow: "none" }}
          _active={{ boxShadow: "none" }}
          _hover={{ boxShadow: "none", backgroundColor: "#55acee" }}
          isFullWidth
          size="sm"
          type="button"
          onClick={handleToggle}
          backgroundColor={"#04bcf4"}
        >
          View More
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleToggle} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={"1rem"}>
            <ProjectDisplay dataset={props.media} />
            <Text
              width={"100%"}
              fontWeight={"medium"}
              fontSize="lg"
              marginBottom={"1rem"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae
            </Text>
            <Text marginBottom={"1rem"} fontWeight={"light"} fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              praesentium molestiae a iusto libero illo ullam id eveniet
              temporibus assumenda. Consectetur nobis nisi numquam architecto
              illo distinctio commodi, animi eaque?
            </Text>
            <Button
              color={"white"}
              marginTop={"auto"}
              _focus={{ boxShadow: "none" }}
              _active={{ boxShadow: "none" }}
              _hover={{ boxShadow: "none", backgroundColor: "#55acee" }}
              isFullWidth
              size="sm"
              type="button"
              backgroundColor={"#04bcf4"}
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
