import { Text } from "@chakra-ui/react";

export const AssecParagraph = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <Text
      color={"black"}
      as={"h1"}
      style={style}
      fontFamily={"Gotham"}
      fontWeight={"300"}
      fontSize={"1xl"}
    >
      {children}
    </Text>
  );
};
