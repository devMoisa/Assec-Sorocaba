import { AssecCarousel } from "../OLD_components/AssecCarousel";
import { Navbar } from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <AssecCarousel />
    </Flex>
  );
};
