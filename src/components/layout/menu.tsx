import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-scroll";
interface MenuButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const MenuButton = (props: MenuButtonProps) => (
  <Button
    onClick={props.onClick}
    color={"gray.800"}
    as={"a"}
    size={"sm"}
    marginRight=".5rem"
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

const Menu = (props: MenuButtonProps) => {
  return (
    <>
      <Link smooth={true} duration={1000} to="intro">
        <MenuButton onClick={props.onClick}>About</MenuButton>
      </Link>
      <Link smooth={true} duration={1000} to="gallery">
        <MenuButton onClick={props.onClick}>Gallery</MenuButton>
      </Link>
      <Link smooth={true} duration={1000} to="contact">
        <MenuButton onClick={props.onClick}>Contact</MenuButton>
      </Link>
    </>
  );
};

export default Menu;
