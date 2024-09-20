import { AssecTextScope } from "@/generic/components/AssecTextScope";
import { Container, Flex, Image } from "@chakra-ui/react";

const Musicando = () => {
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
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
          bg={"#fff"}
        >
          <AssecTextScope
            title="MUSICANDO"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at doloremque impedit soluta quis cum officia rem odio laboriosam fugiat! Officia esse natus ullam ipsa sed necessitatibus iusto quidem non!"
            goTo="/"
            titleBtn="SAIBA MAIS"
          />
        </Flex>
        <Flex width={"50%"}>
          <Image src="/boy_thumb.png" alt="A ASSEC" />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Musicando;
