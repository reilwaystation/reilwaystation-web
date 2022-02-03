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
    isScrolled: false,
    isOpen: false,
  });

  const toggleDrawer = () =>
    state.isOpen
      ? setState({ ...state, isOpen: false })
      : setState({ ...state, isOpen: true });

  const bgOnScroll = () => {
    window.scrollY >= 80
      ? setState({ ...state, isScrolled: true })
      : setState({ ...state, isScrolled: false });
  };

  useEffect(() => {
    window.onscroll = () => {
      bgOnScroll();
    };
    window.onresize = () => {
      setState({ ...state, isOpen: false });
    };
  }, []);

  return (
    <>
      <Box
        backgroundColor={
          props.scrollable ? (state.isScrolled ? "#04bcf4" : "") : "#04bcf4"
        }
        position={"fixed"}
        width={"100%"}
        zIndex={99}
      >
        <Container
          minHeight={"3rem"}
          maxW={"container.lg"}
          display={"flex"}
          padding={".5rem 1rem"}
          alignItems={"center"}
        >
          <Box>
            <Text
              as={"h1"}
              color={"white"}
              fontWeight={"medium"}
              textTransform={"uppercase"}
            >
              Reilwaystation
            </Text>
          </Box>

          <Box marginLeft={"auto"}>
            {isDesktop ? (
              <Menu />
            ) : (
              <Button
                color={"white"}
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
