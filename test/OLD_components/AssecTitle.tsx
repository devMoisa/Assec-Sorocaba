import { Text } from "@chakra-ui/react";

export const AssecTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      color={"black"}
      as={"h1"}
      fontFamily={"Gotham"}
      fontWeight={"normal"}
      fontSize={"3xl"}
    >
      {children}
    </Text>
  );
};
