"use client";
import { Footer } from "@/components/Footer";
import "../../global.css";

import { Navbar } from "@/components/Navbar";
import { SessionAssec } from "@/components/SessionAssec";
import Image from "next/image";

export default function HistoriaDaFila() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />

      <div className="container mt-10 mb-20">
        <h1 className="mb-20 text-center text-4xl font-extralight font-[var(--font-gotham)">
          HISTÓRIA DA FILA
        </h1>
        <Image
          src={"/historiaDaFilaBg.png"}
          alt="História da Fila"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <SessionAssec
        side={"left"}
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/womanInstrument.png"}
        titleButton=""
        urlButton=""
      />
      <SessionAssec
        side={"right"}
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/Fila11.jpg"}
        titleButton=""
        urlButton=""
      />
      <SessionAssec
        side={"left"}
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/Crianças6.jpg"}
        titleButton=""
        urlButton=""
      />
      <div className="mt-36" />
      <Footer />
    </div>
  );
}
