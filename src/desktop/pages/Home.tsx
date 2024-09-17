import { Flex } from "@chakra-ui/react";
import Header from "../modules/Header";
import AAssec from "../modules/AAssec";
import OSProjetos from "../modules/OSProjetos";
import AFila from "../modules/AFila";
import Musicando from "../modules/Musicando";
import Galeria from "../modules/Galeria";
import Agenda from "../modules/Agenda";
import FaleConosco from "../modules/FaleConosco";
import Footer from "../modules/Footer";

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
      <AAssec />
      <OSProjetos />
      <AFila />
      <Musicando />
      <Galeria />
      <Agenda />
      <FaleConosco />
      <Footer />
    </Flex>
  );
};

export default Home;
