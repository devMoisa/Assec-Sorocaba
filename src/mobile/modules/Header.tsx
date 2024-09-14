import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
    </Flex>
  );
};

export default Header;
