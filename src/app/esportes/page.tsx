/* eslint-disable @next/next/no-img-element */
"use client";
import "../../global.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Esportes() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      <h1 className="mt-10 mb-10 text-black text-center text-4xl font-extralight font-[var(--font-gotham)">
        ESPORTES
      </h1>
      <div className="lg:container flex justify-center flex-col items-center">
        {/* <img src="/Crianças2.jpg" alt="Coral" className="w-[auto] h-auto" /> */}
        <Image src="/Crianças2.jpg" alt="Coral" width={750} height={500} />
        <p className="text-start text-sm mt-14 mb-40 w-[80%] whitespace-pre-line">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae totam,
          libero nemo quod modi id in. Doloremque vel sunt incidunt aspernatur,
          cupiditate consectetur mollitia temporibus alias unde eligendi,
          architecto amet. Placeat nulla beatae incidunt earum quibusdam porro
          delectus impedit fuga sint voluptatum ullam repellendus ea deserunt
          assumenda, ratione ipsa
          {"\n\n"}
          Voluptatibus corrupti fugit similique voluptatem consequuntur. Quas
          magnam provident aspernatur optio doloremque perspiciatis ratione
          aliquam omnis, commodi vero consectetur repudiandae quidem numquam
          tempora at reprehenderit repellendus eligendi doloribus ipsam, a
          cumque laudantium excepturi, nostrum consequatur! Distinctio odio
          obcaecati odit ipsum voluptates nostrum quia a eligendi perspiciatis
          saepe fugit, assumenda totam consequatur dolorem soluta nobis nesciunt
          necessitatibus provident iste, sed suscipit! Voluptatum eum fugit
          saepe praesentium ullam harum ratione odio autem, vel explicabo quasi,
          dolorum illum odit totam
          {"\n\n"}
          excepturi, quibusdam nisi deleniti officiis voluptatem commodi amet
          veniam ab deserunt nesciunt voluptate voluptatum fuga praesentium aut.
          Eum eos neque tempore officia animi, doloremque eveniet vitae aliquid
          deserunt recusandae porro repudiandae excepturi quae quasi iusto qui
          eaque facere veritatis numquam.
        </p>
        <h2 className="mb-7 text-black text-4xl font-extralight font-[var(--font-gotham)">
          Faça parte
        </h2>
        <a
          href={"/"}
          className="mb-32 cursor-pointer hover:opacity-50 transition p-2 pl-6 pr-6 lg:pl-10 lg:pr-10 border-[1px] mt-5 border-sky-500 text-sky-500"
        >
          INSCREVA-SE
        </a>
      </div>
      <Footer />
    </div>
  );
}
