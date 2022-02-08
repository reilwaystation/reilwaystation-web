import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "../shared/title";
import SpellCircle from "./spellcircle";
import Symbol from "./symbol";

const Expertise = (props: any) => {
  const [value, setValue] = useState<string>("");

  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      <Box
        flex={{ base: "100%", md: "0 0 40%" }}
        marginBottom={{ base: "1rem", md: 0 }}
      >
        <SpellCircle symbol={<Symbol value={value} />} />
      </Box>
      <Box flex={{ base: "100%", md: "0 0 60%" }}>
        <Box float={{ base: "none", md: "right" }}>
          <Title color={"white"} marginBottom={"1rem"}>
            Our Expertise and tools
          </Title>
          <Box display={"flex"} margin={"-1rem"}>
            <Box padding={"1rem"}>
              <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
                Programming
              </Text>
              <UnorderedList
                color={"white"}
                fontWeight={"light"}
                fontSize={"sm"}
              >
                <ListItem
                  onMouseEnter={() => setValue("python")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Python
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("django")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Django
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("typescript")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Typescript
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("nodejs")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Node JS
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("nestjs")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Nest JS
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("reactjs")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  React JS
                </ListItem>
              </UnorderedList>
            </Box>
            <Box padding={"1rem"}>
              <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
                Multimedia
              </Text>
              <UnorderedList
                color={"white"}
                fontWeight={"light"}
                fontSize={"sm"}
              >
                <ListItem
                  onMouseEnter={() => setValue("photoshop")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Photoshop
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("illustrator")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Illustrator
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("indesign")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Indesign
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("premiere")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Premiere Pro
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("aftereffects")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  After Effects
                </ListItem>
                <ListItem
                  onMouseEnter={() => setValue("blender")}
                  onMouseLeave={() => setValue("")}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "#04bcf4" }}
                >
                  Blender 3D
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Expertise;
