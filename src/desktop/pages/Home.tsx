import { Flex } from "@chakra-ui/react";
import Header from "../modules/Header";

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
      <Header />
    </Flex>
  );
};

export default Home;
