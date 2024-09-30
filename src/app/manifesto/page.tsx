"use client";
import { Footer } from "@/components/Footer";
import "../../global.css";

import { Navbar } from "@/components/Navbar";
import { SessionAssec } from "@/components/SessionAssec";
import Image from "next/image";

export default function Manifesto() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />

      <div className="container max-w-2xl mt-10 mb-20">
        <h1 className="text-4xl font-extralight font-[var(--font-gotham)">
          MANIFESTO
        </h1>
        <p className="mt-5 text-gray-500 text-sm whitespace-pre-line">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum saepe
          libero quaerat tenetur error dignissimos eaque quasi aperiam. Expedita
          iure voluptate dicta obcaecati voluptas veniam iste labore, nisi
          asperiores sit, odio eius qui delectus deleniti laudantium, dolores
          iusto eum ullam perferendis provident maiores? Aut esse totam adipisci
          maxime in voluptatum, culpa ipsam cum a, vero nisi fugiat, obcaecati
          dolorem vel. Facilis quis reprehenderit necessitatibus saepe nulla
          praesentium ipsum adipisci doloribus earum, alias quas maiores eum
          itaque, illum, magnam quia voluptates dolorem soluta quibusdam illo
          aspernatur eius hic maxime. Praesentium expedita mollitia
          reprehenderit placeat. {"\n\n"}Enim quasi blanditiis nihil delectus
          eum deleniti libero inventore maiores repellendus? Magni ullam libero
          mollitia cum numquam aliquid, velit distinctio cupiditate eum
          similique possimus itaque! Laborum ipsa nesciunt eius culpa aliquid
          porro soluta impedit eveniet nemo maxime saepe magnam ab, sequi alias
          quia dolorum laboriosam quae quisquam rem architecto autem deserunt
          libero. Maiores, dolorem quibusdam! Magnam rerum vel inventore enim
          molestias eligendi sit placeat tenetur repellat voluptatibus veniam
          cumque esse perspiciatis quas deserunt nihil reiciendis, aut debitis
          sed. Fugiat quisquam eligendi ipsa odio totam minus delectus ipsum vel
          veniam iste itaque soluta voluptatem, natus ut reprehenderit incidunt
          dolorum sapiente voluptate at? Eos quas ut velit aliquam fugiat?
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image height={140} width={140} src="/logo_footer.png" alt="ASSEC" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
