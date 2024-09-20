import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <Flex
      width={"100vw"}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"nowrap"}
    >
      <Flex
        justifyContent={"center"}
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
  );
};

export default Navbar;
