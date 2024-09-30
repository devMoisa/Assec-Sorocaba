/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParceiroCard } from "@/components/ParceiroCard";
import "../../global.css";

const parceiroList = [
  {
    imagePath: "/parceiros/parceiro01.png",
    altImage: "Governo de São Paulo",
    name: "GOVERNO DE SÃO PAULO",
    description: "Secretaria de Cultura e Economia Criativa",
  },
  {
    imagePath: "/parceiros/parceiro02.png",
    altImage: "Prefeitura de Sorocaba",
    name: "PREFEITURA DE SOROCABA",
    description: "Prefeitura Municipal de Sorocaba",
  },
  {
    imagePath: "/parceiros/parceiro03.png",
    altImage: "Governo Federal",
    name: "GOVERNO FEDERAL",
    description: "Ministério da Cultura",
  },
  {
    imagePath: "/parceiros/parceiro04.png",
    altImage: "Fundec",
    name: "FUNDEC",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro05.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro06.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro07.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro08.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro09.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro10.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro11.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
  {
    imagePath: "/parceiros/parceiro12.png",
    altImage: "LOREM",
    name: "Lorem",
    description: "Lorem ipsumperspiciantis unde omnis",
  },
];

export default function Parceiros() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      <h1 className="mt-10 mb-10 text-black text-center text-4xl font-extralight font-[var(--font-gotham)]">
        PARCEIROS
      </h1>
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-20 mb-24">
        {parceiroList.map((item, index) => (
          <ParceiroCard
            key={index}
            imagePath={item.imagePath}
            altImage={item.altImage}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
