import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { useInView } from "react-intersection-observer";
import SpellCircle from "./spellcircle";
import Symbol from "./symbol";

interface MotionListItemProps {
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  delay?: number;
  children?: ReactNode;
}

const MotionItem = motion(ListItem);
const MotionBox = motion(Box);

const MotionListItem = (props: MotionListItemProps) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <MotionItem
      ref={ref}
      initial={{ x: "1rem", opacity: 0 }}
      animate={
        inView && {
          x: "0rem",
          opacity: 1,
          transition: { delay: props.delay ? props.delay : 0.5, duration: 1 },
        }
      }
      onMouseEnter={props.onMouseEnter && props.onMouseEnter}
      onMouseLeave={props.onMouseLeave && props.onMouseLeave}
      cursor={"pointer"}
      _hover={{ textDecoration: "underline", color: "#04bcf4" }}
    >
      {props.children}
    </MotionItem>
  );
};

const Expertise = (props: any) => {
  const [value, setValue] = useState<string>("");
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <Box
      id={"intro"}
      ref={ref}
      display={"flex"}
      flexWrap={"wrap"}
      alignItems={"center"}
    >
      <Box
        flex={{ base: "100%", md: "0 0 35%" }}
        marginBottom={{ base: "1rem", md: 0 }}
        paddingRight={"2rem"}
      >
        <SpellCircle color={"white"} symbol={<Symbol value={value} />} />
      </Box>
      <Box flex={{ base: "100%", md: "0 0 65%" }} color={"white"}>
        <Box>
          <MotionBox
            as={"p"}
            initial={{ opacity: 0, x: "1rem" }}
            animate={
              inView && {
                opacity: 1,
                x: "0rem",
                transition: { duration: 1 },
              }
            }
            color={"white"}
            fontWeight={"light"}
            marginBottom={"2rem"}
          >
            Hello! I&apos;m FC Neal a developer and a designer behind
            reilwaystation.com. This page in the future will be a showcase
            website for some of our arts and personal web projects.
          </MotionBox>
          <MotionBox
            as={"p"}
            initial={{ opacity: 0, y: "1rem" }}
            animate={
              inView && { opacity: 1, y: "0rem", transition: { duration: 1 } }
            }
            fontSize={"sm"}
            fontWeight={"medium"}
            marginBottom={"1rem"}
          >
            Tools and expertise
          </MotionBox>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            margin={"-1rem"}
            justifyContent={"space-between"}
          >
            <Box padding={"1rem"} flex={{ base: "0 0 50%", md: "0 0 25%" }}>
              <UnorderedList fontWeight={"light"} fontSize={"sm"}>
                <MotionListItem
                  onMouseEnter={() => setValue("python")}
                  onMouseLeave={() => setValue("")}
                  delay={0.1}
                >
                  Python
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("typescript")}
                  onMouseLeave={() => setValue("")}
                  delay={0.2}
                >
                  Typescript
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("nodejs")}
                  onMouseLeave={() => setValue("")}
                  delay={0.3}
                >
                  Node JS
                </MotionListItem>
              </UnorderedList>
            </Box>
            <Box padding={"1rem"} flex={{ base: "0 0 50%", md: "0 0 25%" }}>
              <UnorderedList fontWeight={"light"} fontSize={"sm"}>
                <MotionListItem
                  onMouseEnter={() => setValue("django")}
                  onMouseLeave={() => setValue("")}
                  delay={0.1}
                >
                  Django
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("nestjs")}
                  onMouseLeave={() => setValue("")}
                  delay={0.2}
                >
                  Nest JS
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("reactjs")}
                  onMouseLeave={() => setValue("")}
                  delay={0.3}
                >
                  React JS
                </MotionListItem>
              </UnorderedList>
            </Box>
            <Box padding={"1rem"} flex={{ base: "0 0 50%", md: "0 0 25%" }}>
              <UnorderedList fontWeight={"light"} fontSize={"sm"}>
                <MotionListItem
                  onMouseEnter={() => setValue("photoshop")}
                  onMouseLeave={() => setValue("")}
                  delay={0.1}
                >
                  Photoshop
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("illustrator")}
                  onMouseLeave={() => setValue("")}
                  delay={0.2}
                >
                  Illustrator
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("indesign")}
                  onMouseLeave={() => setValue("")}
                  delay={0.3}
                >
                  Indesign
                </MotionListItem>
              </UnorderedList>
            </Box>
            <Box padding={"1rem"} flex={{ base: "0 0 50%", md: "0 0 25%" }}>
              <UnorderedList fontWeight={"light"} fontSize={"sm"}>
                <MotionListItem
                  onMouseEnter={() => setValue("premiere")}
                  onMouseLeave={() => setValue("")}
                  delay={0.1}
                >
                  Premiere
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("aftereffects")}
                  onMouseLeave={() => setValue("")}
                  delay={0.2}
                >
                  Adobe AE
                </MotionListItem>
                <MotionListItem
                  onMouseEnter={() => setValue("blender")}
                  onMouseLeave={() => setValue("")}
                  delay={0.3}
                >
                  Blender
                </MotionListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Expertise;
