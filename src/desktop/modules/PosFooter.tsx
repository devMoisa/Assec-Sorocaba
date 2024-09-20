import { Container, Flex, Link } from "@chakra-ui/react";

const PosFooter = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#949494"}
    >
      <Container
        padding={"30px"}
        flexDir={"row"}
        flexWrap={"nowrap"}
        justifyContent={"space-between"}
        display={"flex"}
        maxW={{
          base: "3xl",
          md: "3xl",
          lg: "3xl",
          xl: "3xl",
        }}
      >
        <Link fontSize={"13px"} color={"white"} href="/">
          IMPRENSA
        </Link>
        <Link fontSize={"13px"} color={"white"} href="/">
          WEBTV
        </Link>
        <Link fontSize={"13px"} color={"white"} href="/">
          NEWSLETTER
        </Link>
        <Link fontSize={"13px"} color={"white"} href="/">
          POLITICA DE PRIVACIDADE
        </Link>
      </Container>
    </Flex>
  );
};

export default PosFooter;
