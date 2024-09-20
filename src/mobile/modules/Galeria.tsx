import { AssecTextScope } from "@/generic/components/AssecTextScope";
import { Flex, Image } from "@chakra-ui/react";

const Galeria = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#fff"}
      flexDir={"column"}
    >
      <Image
        w={"100%"}
        height={"auto"}
        objectFit={"cover"}
        src="/hands_thumb.png"
        alt="A ASSEC"
      />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"55%"}
        bg={"#fff"}
        mt={"13%"}
        mb={"25%"}
      >
        <AssecTextScope
          title="Galeria"
          description=""
          goTo="/"
          titleBtn="SAIBA MAIS"
        />
      </Flex>
    </Flex>
  );
};

export default Galeria;
