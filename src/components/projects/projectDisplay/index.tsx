import { Box, Image } from "@chakra-ui/react";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Media {
  src: string;
  type: "video" | "image";
}

interface ProjectDisplay {
  dataset: Array<Media>;
}

interface SlideContentProps {
  src: string;
  type: "video" | "image";
}

const SlideContent = (props: SlideContentProps) => {
  if (props.type === "image") {
    return <Image src={props.src} alt="image" />;
  } else if (props.type === "video") {
    return (
      <Box position={"relative"} paddingBottom={"56.25%"}>
        <Box
          as={"iframe"}
          width="100%"
          height="100%"
          overflow={"hidden"}
          position={"absolute"}
          src={props.src}
          title="YouTube video player"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        />
      </Box>
    );
  } else return <></>;
};

const ProjectDisplay = (props: ProjectDisplay) => {
  return (
    <Box marginBottom={"1rem"}>
      {props.dataset.length === 1 ? (
        <SlideContent type={props.dataset[0].type} src={props.dataset[0].src} />
      ) : (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {props.dataset.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideContent type={item.type} src={item.src} />
              </SwiperSlide>
            );
          })}

          <Box
            zIndex={100}
            position={"absolute"}
            top={0}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pointerEvents={"none"}
          >
            <Box
              as={"div"}
              className="prev"
              padding={"1rem"}
              color={"#b8b8b8"}
              pointerEvents={"auto"}
              zIndex={"100"}
            >
              <FontAwesomeIcon size="2x" icon={faChevronCircleLeft} />
            </Box>
            <Box
              as={"div"}
              className="next"
              padding={"1rem"}
              color={"#b8b8b8"}
              pointerEvents={"auto"}
            >
              <FontAwesomeIcon
                fontFamily="font awesome"
                size="2x"
                icon={faChevronCircleRight}
              />
            </Box>
          </Box>
        </Swiper>
      )}
    </Box>
  );
};

export default ProjectDisplay;
