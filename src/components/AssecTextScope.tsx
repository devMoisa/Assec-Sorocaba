import { Button, Flex, Link, Text } from "@chakra-ui/react";

interface IPropsAssecTextScope {
  title: string;
  description: string;
  titleBtn: string;
  goTo: string;
}

export const AssecTextScope = ({
  title,
  description,
  titleBtn,
  goTo,
}: IPropsAssecTextScope) => {
  return (
    <Flex
      flexDir={"column"}
      flexWrap={"wrap"}
      paddingLeft={"5%"}
      alignItems={"center"}
    >
      <Text
        fontWeight={"400"}
        fontFamily={"Gotham"}
        fontSize={{
          base: "20px",
          sm: "25px",
          lg: "30px",
        }}
        marginTop={{
          base: "15%",
          md: "0",
        }}
      >
        {title}
      </Text>
      <Text color={"#000"} mt={"20px"} as={"p"} textAlign={"center"} w={"70%"}>
        {description}
      </Text>
      <Link
        border={"solid 1px #0e71b8"}
        paddingLeft={["20px", "40px", "50px"]} // Ajusta para diferentes tamanhos de tela
        paddingRight={["20px", "40px", "50px"]} // Ajusta para diferentes tamanhos de tela
        paddingTop={["5px", "6px", "7px"]} // Ajusta para diferentes tamanhos de tela
        paddingBottom={["5px", "6px", "7px"]} // Ajusta para diferentes tamanhos de tela
        mt={["20px", "25px", "30px"]} // Ajusta para diferentes tamanhos de tela
        fontFamily={"Gotham"}
        fontWeight={"300"}
        color={"#0e71b8"}
        fontSize={["14px", "16px", "18px"]} // Ajusta o tamanho da fonte conforme o dispositivo
        href={goTo}
      >
        {titleBtn}
      </Link>
    </Flex>
  );
};
