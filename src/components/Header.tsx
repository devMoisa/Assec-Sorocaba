"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React, { useEffect, useState } from "react";

// Hook personalizado para detectar o tamanho da janela
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Função que atualiza o estado com as dimensões da janela
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o listener de evento de resize
    window.addEventListener("resize", handleResize);

    // Atualiza o estado no primeiro render
    handleResize();

    // Remove o listener no cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Executa apenas no primeiro render

  return windowSize;
}

interface listCarousel {
  bgColor: string;
  imageUrl: string;
  alt: string;
}

export const Header = () => {
  const size = useWindowSize(); // Usa o hook personalizado para obter a largura da janela

  const listMobile = [
    {
      bgColor: "#000",
      imageUrl: "/Fila3.jpg",
      alt: "A FILA HARMONICA",
    },
    {
      bgColor: "#000",
      imageUrl: "/Fila3.jpg",
      alt: "A FILA HARMONICA",
    },
    {
      bgColor: "#000",
      imageUrl: "/Fila3.jpg",
      alt: "A FILA HARMONICA",
    },
  ];

  const listDesktop = [
    {
      bgColor: "#000",
      imageUrl: "/carousel01.png",
      alt: "A FILA HARMONICA",
    },
    {
      bgColor: "#000",
      imageUrl: "/carousel01.png",
      alt: "A SEGUNDA IMAGEM",
    },
  ];

  return (
    <div className="w-full bg-[#1e0502]">
      <div className="xl:container">
        <Carousel className="w-full carouselMoises">
          <CarouselContent>
            {/* Verifica o tamanho da tela para renderizar mobile ou desktop */}
            {size.width < 1024 // Condição para renderizar conteúdo de mobile
              ? listMobile.map((item: listCarousel, index: number) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // Estilo responsivo
                    />
                  </CarouselItem>
                ))
              : // Condição para renderizar conteúdo de desktop
                listDesktop.map((item: listCarousel, index: number) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // Estilo responsivo
                    />
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
