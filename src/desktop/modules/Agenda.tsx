import { Container, Flex, Image, Text } from "@chakra-ui/react";

const Agenda = () => {
  // Array de objetos com as informações dos cards
  const cardData = [
    {
      imageSrc: "card01.png",
      title: "Lorem Ipsum",
      date: "20 de julho",
      address: "Rua Bernardo Ferraz de Almeida, 172 Sala 03 - Jd. Faculdade",
      description:
        "A Filaharmônica Jovem de Sorocaba apresenta uma noite mágica com obras de Beethoven e Tchaikovsky. Um evento imperdível para os amantes da música clássica.",
    },
    {
      imageSrc: "card02.png",
      title: "Lorem Ipsum",
      date: "21 de julho",
      address: "Avenida Paulista, 1000 - São Paulo",
      description:
        "Um evento incrível com apresentações de grandes nomes da música popular brasileira.",
    },
    {
      imageSrc: "card03.png",
      title: "Lorem Ipsum",
      date: "22 de julho",
      address: "Praça da Liberdade, 50 - Belo Horizonte",
      description:
        "Participe de uma celebração única com apresentações de dança e música contemporânea.",
    },
    {
      imageSrc: "card01.png",
      title: "Lorem Ipsum",
      date: "22 de julho",
      address: "Praça da Liberdade, 50 - Belo Horizonte",
      description:
        "Participe de uma celebração única com apresentações de dança e música contemporânea.",
    },
  ];

  const Card = ({ card }: any) => (
    <Flex
      flexDir={"column"}
      width={"33%"}
      bg={"#ededed"}
      borderRadius={"4px"}
      paddingBottom={"30px"}
    >
      <Flex id="thumb" flexDir={"column"}>
        <Image
          alt=""
          src={card.imageSrc}
          borderTopLeftRadius={"4px"}
          borderTopRightRadius={"4px"}
        />
        <Text
          mt={"20px"}
          paddingLeft={"20px"}
          paddingRight={"20px"}
          fontWeight={"normal"}
          fontFamily={"Gotham"}
          color={"#000"}
          fontSize={"25px"}
        >
          {card.title}
        </Text>
        <Text
          marginTop={"-3px"}
          paddingLeft={"25px"}
          paddingRight={"25px"}
          fontWeight={"light"}
          fontFamily={"Gotham"}
          color={"#8b8b8b"}
          fontSize={"22px"}
        >
          {card.date}
        </Text>
        <Text
          mt={"5px"}
          paddingLeft={"25px"}
          paddingRight={"25px"}
          fontWeight={"normal"}
          fontFamily={"Gotham"}
          color={"#8b8b8b"}
          fontSize={"14px"}
          lineHeight={"27px"}
        >
          {card.address}
        </Text>
        <Text
          mt={"25px"}
          paddingLeft={"25px"}
          paddingRight={"25px"}
          fontWeight={"normal"}
          fontFamily={"Gotham"}
          color={"#8b8b8b"}
          fontSize={"14px"}
          lineHeight={"27px"}
        >
          {card.description}
        </Text>
      </Flex>
    </Flex>
  );

  return (
    <Flex mt={"8%"} mb={"8%"} flexDir={"column"}>
      <Text
        textAlign={"center"}
        fontWeight={"normal"}
        fontFamily={"Gotham"}
        mb={"45px"}
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
        AGENDA
      </Text>
      <Container
        padding={0}
        maxW={{
          base: "8xl",
          md: "6xl",
          lg: "8xl",
          xl: "8xl",
        }}
        display={"flex"}
        gap={30}
      >
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </Container>
    </Flex>
  );
};

export default Agenda;
