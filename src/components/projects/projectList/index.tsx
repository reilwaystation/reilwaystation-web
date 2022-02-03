import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectItem from "../projectItem";

interface Media {
  src: string;
  type: "video" | "image";
}

interface PostData {
  id?: number;
  thumbnail: string;
  media: Array<Media>;
  description?: string;
}

interface ProjectListProps {
  dataset: Array<PostData>;
}

const ProjectList = (props: ProjectListProps) => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      margin={"-1rem"}
      alignItems={"stretch"}
    >
      {props.dataset.length !== 0 &&
        props.dataset.map((item) => {
          return (
            <Box flex={{ base: "0 0 50%", md: "0 0 25%" }} padding={"1rem"}>
              <ProjectItem
                thumbnail={item.thumbnail}
                media={item.media}
                description={item.description}
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default ProjectList;
