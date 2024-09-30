"use client";
import "../../global.css";

import { Navbar } from "@/components/Navbar";
import { SessionAssec } from "@/components/SessionAssec";

export default function AAssec() {
  return (
    <div className="flex flex-col">
      <Navbar isCarousel={false} dark={true} />
      <h1 className="text-center text-4xl font-extralight font-[var(--font-gotham)">
        TIMELINE
      </h1>
      <p className="text-center mt-4 text-gray-500 text-2xl font-extralight font-[var(--font-gotham) mb-5">
        33 anos de trabalho ininterrupto!
      </p>
      <SessionAssec
        side={"left"}
        title="1988"
        alt={"A ASSEC - Image"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti ipsum exercitationem vel tenetur? Quod corrupti quam, odio exercitationem beatae voluptatum, cupiditate maxime tempore rerum officiis ea dignissimos, ipsam maiores.`}
        imagePath={"/a_assec_thumb.png"}
        titleButton=""
        urlButton=""
      />
    </div>
  );
}
