import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
const Expertise = () => {
  return (
    <Box backgroundColor={"#1a202c"} width={"100%"} marginBottom={"2rem"}>
      <Container
        maxW={"container.lg"}
        display={"flex"}
        flexWrap={"wrap"}
        color={"white"}
        paddingTop={"2rem"}
        paddingBottom={"2rem"}
      >
        <Text
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
          Our Tools and Expertise
        </Text>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={2000}
          breakpoints={{ 768: { slidesPerView: 6, spaceBetween: 100 } }}
        >
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/adobe.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/blender.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/django.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/nextjs.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/nestjs.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/node.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/pine.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/python.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/react.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={"auto"}
              alt={"skill"}
              height={"2rem"}
              src="/typescript.svg"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Expertise;
