"use client";

import HomeDesktop from "@/desktop/pages/Home";
import HomeMobile from "@/mobile/pages/Home";
import "../global.css";

export default function Home() {
  return (
    <>
      <HomeMobile />
      <HomeDesktop />
    </>
  );
}
