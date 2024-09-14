import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Flex
      flexDir={"column"}
      width={"100%"}
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <Navbar />
    </Flex>
  );
};

export default Home;
