import { AssecTextScope } from "@/generic/components/AssecTextScope";
import { Flex, Image } from "@chakra-ui/react";

const AFila = () => {
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
        src="/violin_thumb.png"
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
          title="A FILA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at doloremque impedit soluta quis cum officia rem odio laboriosam fugiat! Officia esse natus ullam ipsa sed necessitatibus iusto quidem non!"
          goTo="/"
          titleBtn="SAIBA MAIS"
        />
      </Flex>
    </Flex>
  );
};

export default AFila;
