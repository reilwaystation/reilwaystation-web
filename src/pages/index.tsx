import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { post } from "../../data";
import Banner from "../components/banner";
import Expertise from "../components/expertise";
import Layout from "../components/layout";
import ProjectList from "../components/projects/projectList";

const Home = () => {
  return (
    <Layout scrollable>
      <Banner />
      <Expertise />
      <Container maxW={"container.lg"} marginBottom={"2rem"}>
        <Text
          display={"inline-block"}
          fontWeight={"bold"}
          color={"white"}
          marginBottom={"3rem"}
          textTransform={"uppercase"}
          position={"relative"}
          _after={{
            display: "block",
            content: `""`,
            width: "100%",
            height: ".30rem",
            backgroundColor: "#04bcf4",
            position: "absolute",
            bottom: "-1rem",
            left: 0,
          }}
        >
          Checkout Our Art Gallery
        </Text>
        <ProjectList dataset={post} />
      </Container>
    </Layout>
  );
};

export default Home;
