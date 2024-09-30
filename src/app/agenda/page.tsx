/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "../../global.css";
import { AgendaCard } from "@/components/AgendaCard";

export default function Agenda() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      <div className="container flex justify-center flex-col">
        <h1 className="mt-10 mb-10 text-black text-start text-4xl font-extralight font-[var(--font-gotham)">
          ESPORTES
        </h1>
        <AgendaCard
          title="Lorem Ipsum"
          date="20 de julho | 19h"
          location="Rua Bernardo Ferraz de Almeida, 172, Sala 03 - JD Faculdade"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum,
          architecto, quasi voluptates possimus veniam at pariatur, fugiat
          molestiae porro ratione minus deserunt accusantium necessitatibus
          excepturi quam labore expedita recusandae"
          imageUrl="/card01.png"
          alt="ASDAS"
        />
        <AgendaCard
          title="Lorem Ipsum"
          date="20 de julho | 19h"
          location="Rua Bernardo Ferraz de Almeida, 172, Sala 03 - JD Faculdade"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum,
          architecto, quasi voluptates possimus veniam at pariatur, fugiat
          molestiae porro ratione minus deserunt accusantium necessitatibus
          excepturi quam labore expedita recusandae"
          imageUrl="/Fila9.jpg"
          alt="ASDAS"
        />
        <AgendaCard
          title="Lorem Ipsum"
          date="20 de julho | 19h"
          location="Rua Bernardo Ferraz de Almeida, 172, Sala 03 - JD Faculdade"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum,
          architecto, quasi voluptates possimus veniam at pariatur, fugiat
          molestiae porro ratione minus deserunt accusantium necessitatibus
          excepturi quam labore expedita recusandae"
          imageUrl="/card03.png"
          alt="ASDAS"
        />
        <AgendaCard
          title="Lorem Ipsum"
          date="20 de julho | 19h"
          location="Rua Bernardo Ferraz de Almeida, 172, Sala 03 - JD Faculdade"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum,
          architecto, quasi voluptates possimus veniam at pariatur, fugiat
          molestiae porro ratione minus deserunt accusantium necessitatibus
          excepturi quam labore expedita recusandae"
          imageUrl="/Fila8.jpg"
          alt="ASDAS"
        />
      </div>
      <Footer />
    </div>
  );
}
