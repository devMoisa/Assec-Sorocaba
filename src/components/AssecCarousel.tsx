import React, { useState } from "react";
import { Box, Flex, Image, HStack, Container } from "@chakra-ui/react";

export const AssecCarousel = () => {
  const images = [
    "/image-carousel01.png",
    "/image-carousel01.png",
    "/image-carousel01.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <Flex
      position="relative"
      maxH="700px"
      overflow="hidden"
      bg={"#000"}
      flexDir={"column"}
      justifyItems={"center"}
      alignItems="center"
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"8xl"} padding={0}>
          <Image
            alt=""
            src="/brownbar_navbar.png"
            position={"absolute"}
            top={{
              base: "-140px",
              sm: "-80px",
              md: "-100px",
              lg: "-23%",
              xl: "-45%",
            }}
            opacity={"100%"}
            width={"100%"}
            zIndex={"1"}
          />
          <Image src={images[currentIndex]} alt={`image-${currentIndex}`} />
        </Container>
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
