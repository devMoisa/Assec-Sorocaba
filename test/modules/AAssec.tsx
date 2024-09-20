import { AssecTextScope } from "../../src/generic/components/AssecTextScope";
import { Container, Flex, Image } from "@chakra-ui/react";

export const Aassec = () => {
  return (
    <Flex
      bg={"#fff"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingBottom={"50PX"}
    >
      <Container
        maxW={"8xl"}
        padding={0}
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        w={"100%"}
        justifyContent={"space-between"}
      >
        <Flex
          className="left"
          width={{
            base: "100%",
            md: "50%",
          }}
        >
          <Image
            src="/a_assec_thumb.png"
            alt="A ASSEC Image"
            h={"auto"}
            w={"100%"}
          />
        </Flex>
        <Flex
          className="right"
          width={{
            base: "100%",
            md: "50%",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AssecTextScope
            title="A ASSEC"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur ratione ut ipsam dolores repudiandae. Dolores recusandae ea numquam, reiciendis officia dolorum, laboriosam sint odit explicabo animi maiores laborum minima."
            titleBtn="SAIBA MAIS"
            goTo="/"
          />
        </Flex>
      </Container>
    </Flex>
  );
};
