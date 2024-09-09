import {
  Button,
  Container,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

export const Navbar = ({ surt }: any) => {
  const listLinks = [
    {
      title: "A ASSEC",
      goTo: "",
    },
    {
      title: "A FILAHARMÔNICA",
      goTo: "",
    },
    {
      title: "OS PROJETOS",
      goTo: "",
    },
    {
      title: "AGENDA",
      goTo: "",
    },
    {
      title: "GALERIA",
      goTo: "",
    },
    {
      title: "TRANSPARÊNCIA",
      goTo: "",
    },
    {
      title: "PARCEIROS",
      goTo: "",
    },
  ];

  const fastLinks = [
    {
      title: "IMPRENSA",
      goTo: "",
    },
    {
      title: "WEBTV",
      goTo: "",
    },
    {
      title: "NEWSLETTER",
      goTo: "",
    },
  ];

  return (
    <>
      <Flex
        width={"100vw"}
        as={"nav"}
        bg={"#fff"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"nowrap"}
        display={{
          base: "flex",
          lg: "none",
        }}
      >
        <Flex
          justifyContent={"center"}
          bg={"#fff"}
          width={"90%"}
          flexDir={"row"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Image
            height={"50"}
            width={"50"}
            src={"/logo_colored.png"}
            alt="ASSEC"
          />
          <Text
            fontWeight={"400"}
            as={"h1"}
            fontFamily={"Gotham"}
            fontSize={"2xl"}
            color={"gray"}
          >
            ASSEC
          </Text>
        </Flex>
        <Button
          colorScheme="messenger"
          bg={"#0c72b7"}
          w={"10%"}
          minW={"80px"}
          height={"80px"}
          borderRadius={"0"}
        >
          <MdOutlineMenu size={"80"} color="#FFF" />
        </Button>
      </Flex>

      <Flex
        as={"nav"}
        bg={"#21120d"}
        zIndex={1}
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Container
          maxW={{
            md: "5xl",
            lg: "7xl",
            xl: "8xl",
          }}
          paddingTop={"3%"}
          paddingBottom={"3%"}
        >
          <Flex
            className="top"
            width={"100%"}
            justifyContent={"flex-end"}
            flexDir={"row"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Flex gap={"30"}>
              {fastLinks.map((item, index) => (
                <Link
                  fontWeight={"300"}
                  fontFamily={"Gotham"}
                  fontSize={"10px"}
                  key={index}
                  href={item.goTo}
                  color={"#fff"}
                  letterSpacing={"3px"}
                >
                  {item.title}
                </Link>
              ))}
            </Flex>
            <Flex flexDir={"row"} alignItems={"center"} gap={"10px"}>
              <Icon
                as={FaInstagram}
                color={"#fff"}
                _hover={{
                  cursor: "pointer",
                  opacity: "50%",
                  transition: "0.3s",
                }}
              />
              <Icon
                as={FaFacebookSquare}
                color={"#fff"}
                _hover={{
                  cursor: "pointer",
                  opacity: "50%",
                  transition: "0.3s",
                }}
              />
              <Icon
                as={FaYoutube}
                color={"#fff"}
                _hover={{
                  cursor: "pointer",
                  opacity: "50%",
                  transition: "0.3s",
                }}
              />
            </Flex>
          </Flex>

          <Flex
            pt={"40px"}
            className="bottom"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex id="logo" alignItems={"center"} gap={"10px"}>
              <Image src={"/logo.png"} height={40} width={50} alt="asdas" />
              <Text
                fontSize={"3xl"}
                color={"#fff"}
                fontWeight={"400"}
                fontFamily={"Gotham"}
              >
                ASSEC
              </Text>
            </Flex>
            <Flex id="links" gap={6} alignItems={"center"}>
              {listLinks.map((item, index) => (
                <Link
                  key={index}
                  fontSize={"11px"}
                  href={item.goTo}
                  color={"#fff"}
                  fontWeight={"300"}
                  fontFamily={"Gotham"}
                  letterSpacing={"2px"}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                border={"solid 2px #63544f"}
                width={"130px"}
                height={"40PX"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"9px"}
                color={"#fff"}
                fontWeight={"300"}
                fontFamily={"Gotham"}
                letterSpacing={"2px"}
                display={{
                  lg: "none",
                  xl: "flex",
                }}
              >
                FALE CONOSCO
              </Link>
              <Menu>
                <MenuButton
                  display={{
                    sm: "none",
                    xl: "flex",
                  }}
                  variant={"transparent"}
                  as={Button}
                  color={"#FFF"}
                  fontSize={"10px"}
                  fontWeight={"300"}
                  fontFamily={"Gotham"}
                  rightIcon={<IoMdArrowDropdown color="#fff" />}
                >
                  PT
                </MenuButton>
                <MenuList>
                  <MenuItem>PT - Brasil</MenuItem>
                  <MenuItem>EN - English</MenuItem>
                  <MenuItem>ES - Spanish</MenuItem>
                  <MenuItem>IT - Italy</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
