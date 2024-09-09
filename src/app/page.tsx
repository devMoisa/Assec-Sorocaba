"use client";
import { Aassec } from "@/modules/AAssec";
import { Header } from "@/modules/Header";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir={"column"}>
      <Header />
      {/* <Aassec /> */}
    </Flex>
  );
}
