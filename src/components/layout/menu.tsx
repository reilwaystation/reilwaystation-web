import { Button } from "@chakra-ui/react";
import React from "react";

const MenuButton = (props: any) => (
  <Button
    color={props.color ? props.color : "white"}
    as={"a"}
    size={"sm"}
    marginRight=".5rem"
    width={{ base: "100%", md: "auto" }}
    fontWeight="medium"
    justifyContent="flex-start"
    backgroundColor={"transparent"}
    _focus={{ boxShadow: "none" }}
    _active={{ boxShadow: "none" }}
    _hover={{ color: "#dbdbdb" }}
  >
    {props.children}
  </Button>
);

const Menu = (props: any) => {
  return (
    <>
      <MenuButton color={props.color}>About</MenuButton>
      <MenuButton color={props.color}>Gallery</MenuButton>
      <MenuButton color={props.color}>Contact</MenuButton>
    </>
  );
};

export default Menu;
