import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Image } from "@chakra-ui/react";

export const AssecCarousel = () => {
  return (
    <Flex position={"absolute"}>
      <Carousel showStatus={false} showArrows={false}>
        <Box>
          <Image src="/fila3.jpg" alt="asd" />
        </Box>
        <Box>
          <Image src="/fila3.jpg" alt="asd" />
        </Box>
        <Box>
          <Image src="/fila3.jpg" alt="asd" />
        </Box>
      </Carousel>
    </Flex>
  );
};
