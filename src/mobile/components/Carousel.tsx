import { Flex, Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} bg={"red"}>
      <Image
        alt="Fila Harmônica Mobile"
        src={"/fila3mobile.jpg"}
        height={"auto"}
        width={"100%"}
      />
    </Flex>
  );
};

export default Carousel;
