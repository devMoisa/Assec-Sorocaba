import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      {/* Mobile */}
      <nav
        className="w-full h-24 bg-white flex items-center align-middle flex-row
    lg:hidden
      "
      >
        <div className="w-full flex justify-center items-center gap-5">
          <Image
            alt="asdasds"
            src={"/logo_colored.png"}
            height={60}
            width={60}
          />
          <h1
            className="
                      #default
                      text-3xl
                      font-normal
                      font-[var(--font-gotham), sans-serif]
          "
          >
            ASSEC
          </h1>
        </div>
        <button
          className="bg-[#1366AC] h-full pl-5 pr-5
        cursor-pointer
        hover:opacity-90
        hover:transition
        "
        >
          <IoMenuSharp className="text-white text-5xl" />
        </button>
      </nav>
      {/* Desktop */}
      <nav className="absolute z-10 font-[var(--font-gotham), sans-serif] hidden lg:flex  w-full text-white pt-7 pb-10 uppercase">
        <div className="container flex flex-col">
          <div className="top flex justify-end gap-10 items-center">
            <div className="flex gap-5 text-[0.7rem]">
              <a href="#">imprensa</a>
              <a href="#">webtv</a>
              <a href="#">newsletter</a>
            </div>
            <div className="flex gap-5">
              <FaInstagram />
              <FaFacebookSquare />
              <FaYoutube />
            </div>
          </div>
          <div className="bottom mt-5 flex w-full justify-between">
            <div className="flex flex-row justify-center items-center gap-2">
              <Image
                alt="ASSEC Sorocaba"
                src={"/logo.png"}
                height={60}
                width={60}
              />
              <h1 className="uppercase text-white text-3xl">assec</h1>
            </div>
            <div className="linkList flex items-center gap-5 text-[0.8rem]">
              <a href="#" className="hidden xl:flex">
                a assec
              </a>
              <a href="#" className="hidden xl:flex">
                a filahârmonica
              </a>
              <a href="#">os projetos</a>
              <a href="#">agenda</a>
              <a href="#">galeria</a>
              <a href="#">transparência</a>
              <a href="#">parceiros</a>
              <a
                className="border-spacing-5 border-[1px] border-white p-3 pl-4 pr-4"
                href="#"
              >
                fale conosco
              </a>
              <a href="#">pt</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
