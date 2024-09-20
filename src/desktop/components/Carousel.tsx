import { Container, Flex, Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#1f0200"}
    >
      <Container
        padding={0}
        flexDir={"column"}
        maxW={{
          base: "8xl",
          md: "6xl",
          lg: "8xl",
          xl: "8xl",
        }}
      >
        <Image
          alt="Fila Harmônica"
          src="/carousel01.png"
          sizes="100% 100%"
          width={"100vw"}
          height={"auto"}
        />
      </Container>
    </Flex>
  );
};

export default Carousel;
