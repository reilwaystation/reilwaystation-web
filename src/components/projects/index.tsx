import { Box } from "@chakra-ui/react";
import React from "react";
import { post } from "../../../data";
import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <Box id={"gallery"} display={"flex"} flexWrap={"wrap"} margin={"-.5rem"}>
      {post.map((item: any, index: number) => {
        return (
          <Box
            key={index}
            padding={".5rem"}
            flex={{ base: "0 0 50%", md: "0 0 33.33%" }}
          >
            <ProjectItem data={item} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Projects;
