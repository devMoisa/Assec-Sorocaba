import { Flex } from "@chakra-ui/react";
import Header from "../modules/Header";

const Home = () => {
  return (
    <Flex
      display={{
        base: "flex",
        lg: "none",
      }}
    >
      <Header />
    </Flex>
  );
};

export default Home;
