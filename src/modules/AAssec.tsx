import { AssecParagraph } from "@/components/AssecParagraph";
import { AssecTitle } from "@/components/AssecTitle";
import { Flex, Image } from "@chakra-ui/react";

export const Aassec = () => {
  return (
    <Flex bg={"#fff"} flexDir={{ base: "column", md: "row" }}>
      <Image
        alt="Thumbnail image representing A ASSEC"
        src={"/a_assec_thumb.png"}
        width={{ base: "100%", md: "60%" }} // Adjust width based on screen size
        height={"auto"}
        objectFit={"cover"} // Ensures the image covers the available space while maintaining aspect ratio
      />

      <Flex
        w={{ base: "100%", md: "40%" }}
        padding={"70px"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AssecTitle>A ASSEC</AssecTitle>
        <AssecParagraph
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          necessitatibus iusto explicabo vitae totam molestiae. Unde reiciendis,
          enim a repellendus placeat optio similique, perspiciatis ipsa
          perferendis fuga eum voluptate veritatis?
        </AssecParagraph>
      </Flex>
    </Flex>
  );
};
