import {
  Box,
  Container,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { post } from "../../data";
import Banner from "../components/banner";
import Expertise from "../components/expertise";
import Layout from "../components/layout";
import ProjectList from "../components/projects/projectList";
import Section from "../components/shared/section";
import Title from "../components/shared/title";

const Home = () => {
  return (
    <Layout scrollable>
      <Banner />
      <Section backgroundColor={"white"}>
        <Title>About Us</Title>
        <Text color={"#1a202c"} fontWeight={"medium"} fontSize={"xs"}>
          Founded in 1998 with its headquarters in Shenzhen, China, Tencents
          guiding principle is to use technology for good. Our communication and
          social services connect more than one billion people around the world,
          helping them to keep in touch with friends and family, access
          transportation, pay for daily necessities, and even be entertained.
          Tencent also publishes some of the worlds most popular video games and
          other high-quality digital content, enriching interactive
          entertainment experiences for people around the globe. Tencent also
          offers a range of services such as cloud computing, advertising,
          FinTech, and other enterprise services to support our clients digital
          transformation and business growth. Tencent has been listed on the
          Stock Exchange of Hong Kong since 2004.
        </Text>
      </Section>
      <Section backgroundColor={"#1a202c"}>
        <Expertise />
      </Section>
      <Section backgroundColor={"white"}>
        <Box width={"100%"} display={"flex"}>
          <Title>Check our Gallery</Title>
        </Box>
        <ProjectList dataset={post} />
      </Section>
    </Layout>
  );
};

export default Home;
