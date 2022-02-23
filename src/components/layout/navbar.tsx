import {
  Box,
  Container,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faArrowUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import Menu from "./menu";

interface NavbarProps {
  scrollable?: boolean;
}

const MotionBox = motion(Box);
const Navbar = (props: NavbarProps) => {
  const [state, setState] = useState<any>({
    isScrolled: false,
  });

  const calculateOpacity = useCallback(() => {
    window.scrollY > 200
      ? setState((state: any) => {
          return { ...state, isScrolled: true };
        })
      : setState((state: any) => {
          return { ...state, isScrolled: false };
        });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    window.onscroll = () => {
      calculateOpacity();
    };
    window.onresize = () => {
      onClose();
    };
  }, [calculateOpacity, onClose]);

  return (
    <>
      <AnimatePresence>
        {!state.isScrolled && (
          <MotionBox
            initial={{ y: "-100%" }}
            animate={{ y: "0%", transition: { duration: 0.5, ease: "linear" } }}
            exit={{ y: "-100%", transition: { duration: 0.5, ease: "linear" } }}
            position={"fixed"}
            width={"100%"}
            zIndex={99}
          >
            <Container
              minHeight={"3rem"}
              maxW={"container.md"}
              display={"flex"}
              padding={".5rem 1rem"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                <Text
                  as={"h1"}
                  color={"white"}
                  fontWeight={"black"}
                  textTransform={"uppercase"}
                >
                  RW
                </Text>
              </Box>
              <Button
                onClick={onOpen}
                marginLeft={"auto"}
                color={"white"}
                size={"sm"}
                marginRight=".5rem"
                fontWeight="regular"
                justifyContent="flex-start"
                backgroundColor={"transparent"}
                _focus={{ boxShadow: "none" }}
                _active={{ boxShadow: "none" }}
                _hover={{ color: "grey" }}
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
            </Container>
          </MotionBox>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {state.isScrolled && (
          <Link smooth={true} duration={1000} to="banner">
            <MotionBox
              initial={{
                opacity: 0,
                y: "-1rem",
              }}
              animate={{
                opacity: 1,
                y: "0rem",
                transition: { duration: 0.5, ease: "linear" },
              }}
              exit={{
                opacity: 0,
                y: "-1rem",
                transition: { duration: 0.5, ease: "linear" },
              }}
              position={"fixed"}
              bottom={0}
              right={0}
              zIndex={99}
              color={"white"}
              padding={".5rem"}
              border={"1px solid white"}
              margin={"1rem"}
              borderRadius={".5rem"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              <FontAwesomeIcon size="2x" icon={faArrowUp} />
              <Text size="xs" fontWeight={"bold"}>
                Up
              </Text>
            </MotionBox>
          </Link>
        )}
      </AnimatePresence>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Menu onClick={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
