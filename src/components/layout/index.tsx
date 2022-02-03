import React from "react";
import Navbar from "./navbar";
import content from "./content";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";
const Layout = (props: any) => {
  return (
    <>
      <Navbar scrollable={props.scrollable} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        backgroundColor={"#272822"}
      >
        <Box>{props.children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export const Content = content;
export default Layout;
