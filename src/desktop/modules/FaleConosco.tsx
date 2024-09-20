import {
  Button,
  Container,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const FaleConosco = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#fff"}
      mb={"200px"}
    >
      <Container
        padding={{
          base: "13%",
          sm: "8%",
          lg: "0",
        }}
        flexWrap={"nowrap"}
        justifyContent={"space-between"}
        display={"flex"}
        flexDir={"column"}
        maxW={{
          base: "3xl",
          md: "3xl",
          lg: "3xl",
          xl: "3xl",
        }}
      >
        <Text
          fontWeight={"normal"}
          fontFamily={"Gotham"}
          textAlign={"center"}
          marginBottom={{
            base: "15%",
            md: "60px",
          }}
          fontSize={{
            base: "20px",
            sm: "25px",
            lg: "30px",
          }}
        >
          FALE CONOSCO
        </Text>
        <Flex as={"form"} flexDirection={"column"} gap={"30"}>
          <Input
            placeholder={"Nome"}
            variant="flushed"
            fontSize={"xl"}
            color={"black"}
            fontWeight={"normal"}
            fontFamily={"Gotham"}
            _placeholder={{
              color: "#000",
            }}
          />
          <Input
            placeholder={"E-mail"}
            variant="flushed"
            fontSize={"xl"}
            color={"black"}
            fontFamily={"Gotham"}
            _placeholder={{
              color: "#000",
            }}
          />
          <Input
            placeholder={"Telefone"}
            variant="flushed"
            fontSize={"xl"}
            color={"black"}
            fontFamily={"Gotham"}
            _placeholder={{
              color: "#000",
            }}
          />
          <Text
            fontSize={"xl"}
            color={"black"}
            fontFamily={"Gotham"}
            marginBottom={"-20px"}
            marginTop={"10px"}
            _placeholder={{
              color: "#000",
            }}
          >
            Sua mensagem
          </Text>
          <Textarea bg={"#f7f7f7"} rows={10} />
          <Button
            variant="outline"
            size={"lg"}
            width={"200px"}
            colorScheme="messenger"
            border={"solid 1px #4177a0"}
            color={"#4177a0"}
            borderRadius={"0"}
            padding={"30px"}
            fontWeight={"300"}
          >
            ENVIAR
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default FaleConosco;
