import { Flex, Link, Text } from "@chakra-ui/react";

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
        fontWeight={"normal"}
        fontFamily={"Gotham"}
        fontSize={{
          base: "35px",
          sm: "35px",
          lg: "30px",
        }}
        marginTop={{
          base: "15%",
          md: "0",
        }}
      >
        {title}
      </Text>
      {description && (
        <Text
          mb={"20px"}
          color={"#000"}
          mt={"20px"}
          as={"p"}
          textAlign={"center"}
          w={{
            md: "90%",
            lg: "70%",
          }}
        >
          {description}
        </Text>
      )}

      <Link
        mt={"10px"}
        color={"#0e71b8"}
        paddingTop={"7px"}
        paddingBottom={"7px"}
        fontWeight={"400"}
        paddingLeft={"50px"}
        paddingRight={"50px"}
        fontFamily={"Gotham"}
        border={"solid 1px #0e71b8"}
        fontSize={"14px"} // Ajusta o tamanho da fonte conforme o dispositivo
        href={goTo}
      >
        {titleBtn}
      </Link>
    </Flex>
  );
};
