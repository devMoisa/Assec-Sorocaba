import { Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BsYoutube } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

interface LinkItem {
  childrenTitle: string;
  childrenGoTo: string;
}

interface FatherLink {
  fatherTitle: string;
  childrenList: LinkItem[];
}

const Footer = () => {
  const linkList: FatherLink[] = [
    {
      fatherTitle: "A ASSEC",
      childrenList: [
        {
          childrenTitle: "Timeline",
          childrenGoTo: "#",
        },
        {
          childrenTitle: "Manifesto",
          childrenGoTo: "#",
        },
      ],
    },
    {
      fatherTitle: "A FILAHARMÔNICA",
      childrenList: [
        {
          childrenTitle: "Maestro",
          childrenGoTo: "#",
        },
        {
          childrenTitle: "História",
          childrenGoTo: "#",
        },
      ],
    },
    {
      fatherTitle: "OS PROJETOS",
      childrenList: [
        {
          childrenTitle: "Musicando",
          childrenGoTo: "#",
        },
        {
          childrenTitle: "Coral",
          childrenGoTo: "#",
        },
        {
          childrenTitle: "Esportes",
          childrenGoTo: "#",
        },
      ],
    },
    {
      fatherTitle: "AGENDA",
      childrenList: [],
    },
    {
      fatherTitle: "GALERIA",
      childrenList: [],
    },
    {
      fatherTitle: "TRANSPARÊNCIA",
      childrenList: [],
    },
    {
      fatherTitle: "PARCEIROS",
      childrenList: [],
    },
    {
      fatherTitle: "FALE CONOSCO",
      childrenList: [
        {
          childrenTitle: "Trabalhe Conosco",
          childrenGoTo: "#",
        },
        {
          childrenTitle: "Contato",
          childrenGoTo: "#",
        },
      ],
    },
  ];

  const FooterLinkContent = ({
    title,
    goTo,
    childrenList,
  }: {
    title: string;
    goTo: string;
    childrenList: LinkItem[];
  }) => {
    return (
      <Flex flexDir={"column"}>
        <Link
          fontFamily={"Gotham"}
          fontSize={"13px"}
          href={goTo}
          mb={"15px"}
          color={"gray.600"}
        >
          {title}
        </Link>
        {childrenList?.map((item, index) => (
          <Link
            mb={"3px"}
            fontFamily={"Gotham"}
            color={"gray.600"}
            fontSize={"11px"}
            key={index}
            href={item.childrenGoTo}
          >
            {item.childrenTitle}
          </Link>
        ))}
      </Flex>
    );
  };

  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#eeeeee"}
    >
      <Container
        flexDir={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        display={"flex"}
        paddingTop={"50px"}
        paddingBottom={"30px"}
        maxW={{
          base: "8xl",
          md: "6xl",
          lg: "4xl",
          xl: "6xl",
        }}
      >
        <Flex
          flexDir={"row"}
          gap={"40px"}
          flexWrap={"wrap"}
          w={"100%"}
          justifyContent={"space-between"}
        >
          {linkList.map((item, index) => (
            <FooterLinkContent
              key={index}
              title={item.fatherTitle}
              goTo="#"
              childrenList={item.childrenList}
            />
          ))}
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDir={"row"}
          alignItems={"flex-end"}
          width={"100%"}
          marginTop={"60px"}
        >
          <Image
            width={"130px"}
            height={"auto"}
            src={"/logo_footer.png"}
            alt="ASSEC - Associação de Eventos Culturais"
          />
          <Text
            as={"h4"}
            textAlign={"center"}
            fontSize={"13px"}
            paddingLeft={"5%"}
            paddingRight={"5%"}
          >
            RUA BERNARDO FERRAZ DE ALMEIDA, 172 - SALA 03 - JD. FACULDADE -
            SOROCABA / SP 18030-290
          </Text>
          <Flex flexDir={"row"} gap={3} mb={"4px"}>
            <CgInstagram color="#000" />
            <FaFacebookSquare color={"#000"} />
            <BsYoutube color={"#000"} />
            <FaWhatsapp color={"#000"} />
            <TfiEmail color={"#000"} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
