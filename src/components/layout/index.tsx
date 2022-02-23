import React from "react";
import content from "./content";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = (props: any) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        backgroundColor={"#1a202c"}
      >
        <Navbar />
        <Box>{props.children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export const Content = content;
export default Layout;
