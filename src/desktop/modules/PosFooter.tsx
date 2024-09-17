import { Container, Flex, Link } from "@chakra-ui/react";

const PosFooter = () => {
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
        <Link>IMPRENSA</Link>
        <Link>WEBTV</Link>
        <Link>NEWSLETTER</Link>
        <Link>POLITICA DE PRIVACIDADE</Link>
      </Container>
    </Flex>
  );
};

export default PosFooter;
