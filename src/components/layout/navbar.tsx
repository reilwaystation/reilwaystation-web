import {
  Box,
  Container,
  Button,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Menu from "./menu";

interface NavbarProps {
  scrollable?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const isDesktop = useBreakpointValue({ md: true });
  const [state, setState] = useState<any>({
    isOpen: false,
    scrollY: 0,
  });

  const toggleDrawer = () =>
    state.isOpen
      ? setState({ ...state, isOpen: false })
      : setState({ ...state, isOpen: true });

  const closeDrawer = () => {
    setState({ ...state, isOpen: false });
  };

  const calculateOpacity = () => {
    let scrollY = window.scrollY * 0.0025;

    if (scrollY >= 1) {
      setState({ ...state, scrollY: 1 });
    } else if (scrollY < 1) {
      setState({ ...state, scrollY });
    } else return;
  };

  useEffect(() => {
    window.onscroll = () => {
      calculateOpacity();
    };
    window.onresize = () => {
      closeDrawer();
    };
  }, [closeDrawer, calculateOpacity]);

  return (
    <>
      <Box
        backgroundColor={`rgb(4, 188, 244, ${state.scrollY})`}
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
        >
          <Box>
            <Text
              as={"h1"}
              color={state.scrollY > 0.2 ? "white" : "#04bcf4"}
              fontWeight={"black"}
              textTransform={"uppercase"}
            >
              RW
            </Text>
          </Box>

          <Box marginLeft={"auto"}>
            {isDesktop ? (
              <Menu color={state.scrollY > 0.2 ? "white" : "black"} />
            ) : (
              <Button
                color={state.scrollY > 0.2 ? "white" : "black"}
                onClick={toggleDrawer}
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
            )}
          </Box>
        </Container>
      </Box>
      <Drawer placement="right" isOpen={state.isOpen} onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <Menu color={"black"} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
