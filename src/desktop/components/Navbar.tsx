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

const Navbar = () => {
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
    <Flex
      as={"nav"}
      bg={"#20110c"}
      w={"100%"}
      height={"170px"}
      position={"absolute"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container
        flexDir={"column"}
        maxW={{
          base: "8xl",
          md: "6xl",
          lg: "8xl",
          xl: "8xl",
        }}
      >
        <Flex
          id="top"
          width={"100%"}
          justifyContent={"flex-end"}
          gap={30}
          alignItems={"center"}
        >
          <Flex gap={30}>
            {fastLinks.map((item, index) => (
              <Link
                key={index}
                fontWeight={"300"}
                fontFamily={"Gotham"}
                fontSize={"8px"}
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

          <Link
            border={"solid 2px #63544f"}
            width={"120px"}
            height={"30PX"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"8px"}
            color={"#fff"}
            fontWeight={"300"}
            fontFamily={"Gotham"}
            letterSpacing={"2px"}
            display={{
              sm: "flex",
              xl: "none",
            }}
          >
            FALE CONOSCO
          </Link>
          <Menu>
            <MenuButton
              display={{
                sm: "flex",
                xl: "none",
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
        <Flex
          id="bottom"
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"30px"}
        >
          <Flex className="left" gap={3}>
            <Image alt="logo" src={"/logo.png"} width={50} height={50} />
            <Text
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"400"}
              fontFamily={"Gotham"}
            >
              ASSEC
            </Text>
          </Flex>
          <Flex className="right" gap={30} alignItems={"center"}>
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
              fontSize={"11px"}
              href={"/"}
              color={"#fff"}
              fontWeight={"300"}
              fontFamily={"Gotham"}
              letterSpacing={"2px"}
              display={{
                lg: "none",
                xl: "flex",
              }}
            >
              PARCEIROS
            </Link>
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
  );
};

export default Navbar;
