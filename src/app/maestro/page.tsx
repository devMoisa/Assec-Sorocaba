/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer";
import "../../global.css";

import { Navbar } from "@/components/Navbar";
import { SessionAssec } from "@/components/SessionAssec";
import Image from "next/image";

export default function Maestro() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      {/* <div className="container mt-10 mb-20 flex flex-row gap-10 flex-wrap"> */}
      <div className="container mt-10 mb-20 flex flex-col-reverse gap-10 lg:flex-row">
        <img
          src={"/MaestroDenis1.jpg"}
          alt="Maestro Denis Vieira"
          className="shadow-md w-full h-auto sm:w-auto sm:h-auto md:h-auto lg:w-[50%] lg:h-[40%] xl:w-[40%] xl:h-auto"
        />
        <div className="flex flex-col justify-start lg:w-1/2">
          <h1 className="mb-10 text-start text-4xl font-extralight font-[var(--font-gotham)]">
            MAESTRO DENIS VIEIRA
          </h1>
          <p className="whitespace-pre-line text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            incidunt, excepturi delectus praesentium dignissimos magni illum
            vero beatae obcaecati accusamus! Quae tempore itaque exercitationem
            asperiores incidunt eius minima nobis, sed distinctio eaque
            reprehenderit? Voluptatum, neque fugiat vero, nostrum impedit
            voluptate{"\n\n"} accusantium nobis quis veniam mollitia tempora
            illum iure nemo reprehenderit a adipisci, id maiores architecto
            quae. Illum cumque praesentium sequi tenetur, asperiores, rem
            possimus repellendus at suscipit explicabo nemo aliquid ipsa
            consequatur cum, pariatur illo ullam molestias ab quidem qui id
            vitae ipsum alias? Non mollitia minima eos amet voluptate blanditiis
            sapiente odio aut ut nam,{"\n\n"} reprehenderit, obcaecati vero
            impedit itaque dolor aperiam cupiditate architecto. Explicabo odit
            sunt, facilis magni autem incidunt itaque. In labore nemo omnis
            molestias sed maxime eum quia odit quos placeat, repellat eveniet
            inventore impedit officia nam non porro recusandae repudiandae
            incidunt voluptatum excepturi facilis!
            {"\n\n"}Repellat consequatur consectetur iusto natus quas. Deleniti
            facilis eum vero magnam maxime quia corrupti soluta, itaque
            suscipit, fugiat totam tempore eveniet, modi aliquid odio! Minus
            adipisci quibusdam a voluptatem, dolores, porro magni provident sit
            fuga molestiae beatae doloribus odit nostrum eligendi alias tempora
            natus dolorem dignissimos nemo! Ratione quod repellat asperiores
            eius, magni necessitatibus, facilis rem odio voluptas reprehenderit
            velit consequuntur?
            {"\n\n"}Repellat consequatur consectetur iusto natus quas. Deleniti
            facilis eum vero magnam maxime quia corrupti soluta, itaque
            suscipit, fugiat totam tempore eveniet, modi aliquid odio! Minus
            adipisci quibusdam a voluptatem, dolores, porro magni provident sit
            fuga molestiae beatae doloribus odit nostrum eligendi alias tempora
            natus dolorem dignissimos nemo! Ratione quod repellat asperiores
            eius, magni necessitatibus, facilis rem odio voluptas reprehenderit
            velit consequuntur?
          </p>
        </div>
      </div>
      <div className="container flex-col">
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
          imagePath={"/Fila8.jpg"}
          titleButton=""
          urlButton=""
        />
      </div>
      <div className="mt-36" />
      <Footer />
    </div>
  );
}
