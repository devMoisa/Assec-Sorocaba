/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer";
import "../../global.css";

import { Navbar } from "@/components/Navbar";
import { SessionAssec } from "@/components/SessionAssec";
import Image from "next/image";

export default function Musicando() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      <h1 className="mt-10 mb-14 text-center text-4xl font-extralight">
        MUSICANDO COM A FILA
      </h1>

      <div className="w-full">
        <div className={`flex xl:container lg:flex-row`}>
          <img className="w-full" src="/Fila7.jpg" alt="Musicando com a Fila" />
        </div>
      </div>

      <SessionAssec
        side={"left"}
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/Fila9.jpg"}
        titleButton=""
        urlButton=""
      />

      <SessionAssec
        side={"right"}
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/man_violin.png"}
        titleButton=""
        urlButton=""
      />
      <div className="flex flex-col justify-center items-center mt-32">
        <h3 className="text-3xl md:4xl font-extralight">
          Faça parte do Musicando
        </h3>
        <a
          href="#"
          className="text-2xl cursor-pointer hover:opacity-50 transition font-extralight p-4 pl-10 pr-10 lg:pl-10 lg:pr-10 border-[1px] mt-5 border-sky-500 text-sky-500"
        >
          INSCREVA-SE
        </a>
      </div>

      <div className="mt-36" />
      <Footer />
    </div>
  );
}
