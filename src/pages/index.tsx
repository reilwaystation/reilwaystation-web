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
        <ProjectList dataset={post} />
      </Container>
    </Layout>
  );
};

export default Home;
