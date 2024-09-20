import { Flex } from "@chakra-ui/react";
import Header from "../modules/Header";
import AAssec from "../modules/AAssec";
import OSProjetos from "../modules/OSProjetos";
import AFila from "../modules/AFila";
import Musicando from "../modules/Musicando";
import Galeria from "../modules/Galeria";
import Agenda from "@/desktop/modules/Agenda";
import FaleConosco from "@/desktop/modules/FaleConosco";

const Home = () => {
  return (
    <Flex
      display={{
        base: "flex",
        lg: "none",
      }}
      flexDir={"column"}
    >
      <Header />
      <AAssec />
      <OSProjetos />
      <AFila />
      <Musicando />
      <Galeria />
      <Agenda />
      <FaleConosco />
    </Flex>
  );
};

export default Home;
