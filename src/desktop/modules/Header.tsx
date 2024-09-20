import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Header = () => {
  return (
    <Flex flexDir={"column"} position={"relative"}>
      <Navbar />
      <Carousel />
    </Flex>
  );
};

export default Header;
