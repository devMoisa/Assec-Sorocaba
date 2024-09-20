import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Header = () => {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      <Carousel />
    </Flex>
  );
};

export default Header;
