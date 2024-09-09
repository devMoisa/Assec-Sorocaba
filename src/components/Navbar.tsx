import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
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
          base: "flex", // Ensures it works on all screen sizes
          lg: "none", // Hides on large screens
        }}
      >
        <Flex
          justifyContent={"center"}
          bg={"#fff"}
          width={"90%"} // Adjusted to prevent overflow
          flexDir={"row"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Image
            height={"50"} // Adjusted size for small screens
            width={"50"}
            src={"/logo_colored.png"}
            alt="ASSEC"
          />
          <Text
            fontWeight={"400"}
            as={"h1"}
            fontFamily={"Gotham"}
            fontSize={"2xl"} // Smaller font for smaller screens
            color={"gray"}
          >
            ASSEC
          </Text>
        </Flex>
        <Button
          colorScheme="messenger"
          bg={"#0c72b7"}
          w={"10%"} // Adjusted width
          minW={"80px"} // Adjusted to fit better on smaller screens
          height={"80px"}
          borderRadius={"0"}
        >
          <MdOutlineMenu size={"80"} color="#FFF" />
        </Button>
      </Flex>

      <Flex
        as={"nav"}
        bg={"blue"}
        display={{
          base: "none", // Hides on small screens
          lg: "flex", // Visible on large screens
        }}
      >
        <Container maxW={"7xl"}></Container>
      </Flex>
    </>

    // <Flex
    //   as={"nav"}
    //   minH={"20vh"}
    //   width={"100%"}
    //   paddingTop={"30px"}
    //   flexDirection={"column"}
    //   zIndex={"2"}
    // >
    //   <Container maxW={"7xl"} display={"flex"} flexDir={"column"} gap={"5px"}>
    //     <Flex gap={30} width={"100%"} justifyContent={"flex-end"}>
    //       {fastLinks.map((item, index) => (
    //         <Link
    //           fontWeight={"300"}
    //           fontFamily={"Gotham"}
    //           fontSize={"11px"}
    //           key={index}
    //           href={item.goTo}
    //           color={"#fff"}
    //         >
    //           {item.title}
    //         </Link>
    //       ))}
    //     </Flex>
    //     <Flex
    //       className="bottom"
    //       alignItems={"center"}
    //       justifyContent={"space-between"}
    //       mt={"3%"}
    //     >
    //       <Flex id="logo" alignItems={"center"} gap={"10px"}>
    //         <Image src={"/logo.png"} height={40} width={50} alt="asdas" />
    //         <Text
    //           fontSize={"3xl"}
    //           color={"#fff"}
    //           fontWeight={"400"}
    //           fontFamily={"Gotham"}
    //         >
    //           ASSEC
    //         </Text>
    //       </Flex>
    //       <Flex
    //         display={{
    //           lg: "none",
    //           md: "flex",
    //         }}
    //         id="links"
    //         gap={"30PX"}
    //         alignItems={"center"}
    //       >
    //         {listLinks.map((item, index) => (
    //           <Link
    //             key={index}
    //             fontSize={"12px"}
    //             href={item.goTo}
    //             color={"#fff"}
    //             fontWeight={"300"}
    //             fontFamily={"Gotham"}
    //           >
    //             {item.title}
    //           </Link>
    //         ))}
    //         <Link
    //           border={"solid 2px #63544f"}
    //           paddingTop={"7px"}
    //           paddingBottom={"7px"}
    //           paddingLeft={"15px"}
    //           paddingRight={"15px"}
    //           fontSize={"12px"}
    //           color={"#fff"}
    //           fontWeight={"400"}
    //           fontFamily={"Gotham"}
    //         >
    //           FALE CONOSCO
    //         </Link>
    //       </Flex>
    //     </Flex>
    //   </Container>
    // </Flex>
  );
};
