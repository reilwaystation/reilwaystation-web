import { Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { css, jsx } from "@emotion/react";
import "swiper/css/autoplay";
import styled from "@emotion/styled";

const Wrapper = styled(Swiper)`
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
`;
const Expertise = () => {
  return (
    <>
      <Wrapper
        modules={[Autoplay]}
        loop
        spaceBetween={10}
        slidesPerView={"auto"}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
      >
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/adobe.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/blender.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/django.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/nextjs.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/nestjs.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image width={"auto"} alt={"skill"} height={"2rem"} src="/node.svg" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image width={"auto"} alt={"skill"} height={"2rem"} src="/pine.svg" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto!important" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/python.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/react.svg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "1.75rem", width: "auto" }}>
          <Image
            width={"auto"}
            alt={"skill"}
            height={"2rem"}
            src="/typescript.svg"
          />
        </SwiperSlide>
      </Wrapper>
    </>
  );
};

export default Expertise;
