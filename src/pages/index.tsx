import { Container, Text } from "@chakra-ui/react";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Expertise from "../components/expertise";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Title from "../components/shared/title";

const Home = () => {
  return (
    <Layout scrollable>
      <Banner />
      <Container maxW={"container.md"} marginBottom={"10rem"}>
        <Title title={"Introduction"} subtitle={"know about us"} />
        <Expertise />
      </Container>
      <Container maxW={"container.md"} marginBottom={"10rem"}>
        <Title title={"The Gallery"} subtitle={"some of our works"} />
        <Projects />
      </Container>
      <Container maxW={"container.md"} marginBottom={"10rem"}>
        <Title title={"Contact Us"} subtitle={"Let's have a conversation"} />

        <Contact />
      </Container>
    </Layout>
  );
};

export default Home;
