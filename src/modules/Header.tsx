import { AssecCarousel } from "@/components/AssecCarousel";
import { Navbar } from "@/components/Navbar";
import { Container, Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <AssecCarousel />
    </Flex>
  );
};
