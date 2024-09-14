import { AssecTextScope } from "@/generic/components/AssecTextScope";
import { Container, Flex, Image } from "@chakra-ui/react";

const Galeria = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#fff"}
    >
      <Container
        padding={0}
        flexDir={"row"}
        flexWrap={"nowrap"}
        justifyContent={"space-between"}
        display={"flex"}
        maxW={{
          base: "8xl",
          md: "6xl",
          lg: "8xl",
          xl: "8xl",
        }}
      >
        <Flex width={"50%"}>
          <Image src="/hands_thumb.png" alt="A ASSEC" />
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
          bg={"#fff"}
        >
          <AssecTextScope
            title="GALERIA"
            description=""
            goTo="/"
            titleBtn="CONFIRA"
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Galeria;
