import { Flex, Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Image
        alt="Fila Harmônica Mobile"
        src={"/fila3mobile.jpg"}
        height={"auto"}
      />
    </Flex>
  );
};

export default Carousel;
