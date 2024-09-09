import React, { useState } from "react";
import { Box, Flex, Image, IconButton, HStack, Button } from "@chakra-ui/react";

export const AssecCarousel = () => {
  const images = [
    "/image-carousel01.png",
    "/image-carousel01.png",
    "/image-carousel01.png",
  ]; // Imagens do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <Flex
      position="relative"
      maxH="700px"
      width="full"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box width="full" justifyContent={"center"}>
        <Image
          alt=""
          src="/brownbar_navbar.png"
          position={"absolute"}
          top={"-120px"}
          opacity={"100%"}
          zIndex={"1"}
        />

        <Image src={images[currentIndex]} alt={`image-${currentIndex}`} />
      </Box>

      <HStack position="absolute" bottom="20px" spacing={2}>
        {images.map((_, index) => (
          <>
            <Box
              key={index}
              height={"13PX"}
              width={"13px"}
              borderRadius="50%"
              onClick={() => goToSlide(index)}
              backgroundColor={currentIndex === index ? "#0e71b8" : "gray.300"}
              _hover={{ backgroundColor: "gray.500" }}
            />
          </>
        ))}
      </HStack>
    </Flex>
  );
};
