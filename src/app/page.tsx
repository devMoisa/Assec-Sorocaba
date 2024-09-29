"use client";

import { Navbar } from "@/components/Navbar";
import "../global.css";
import localFont from "next/font/local";
import { Header } from "@/components/Header";

// Definindo as fontes usando localFont
const gothamFont = localFont({
  src: [
    {
      path: "../../public/fonts/GothamBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Bold.otf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-BoldItalic.otf",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Book.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-BookItalic.otf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-Ultra.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-UltraItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-XLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-XLightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-gotham", // Definindo uma variável CSS opcional
});

export default function Home() {
  return (
    <div className={gothamFont.className}>
      <Navbar />
      <Header />
    </div>
  );
}
