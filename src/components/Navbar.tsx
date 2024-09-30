import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi2";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [assecOpen, setAssecOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <>
        <nav className="w-full h-24 bg-white flex items-center align-middle flex-row lg:hidden relative">
          <div className="w-full flex justify-center items-center gap-5">
            <Image
              alt="Assec Sorocaba"
              src={"/logo_colored.png"}
              height={60}
              width={60}
              className="ml-14"
            />
            <h1 className="text-3xl font-normal font-[var(--font-gotham), sans-serif]">
              ASSEC
            </h1>
          </div>
          <button className="bg-[#1366AC] h-full pl-5 pr-5 cursor-pointer hover:opacity-90 hover:transition">
            <IoMenuSharp className="text-white text-5xl" />
          </button>
        </nav>
        <div
          id="navbarMobileOpen"
          className="absolute top-25 right-0 w-full bg-[#F4F4F4] z-10"
        >
          <div className="pl-10 pr-10 pt-10">
            <div className="flex justify-center">
              <span className="text-[#1366AC]">PORTUGUÊS |</span>{" "}
              <span className="text-gray-400 ml-2">ENGLISH</span>
            </div>

            <div
              onClick={() => setAssecOpen(!assecOpen)}
              className={`
                ${assecOpen ? "bg-[#1366AC] " : "bg-[#ffff]"} 
                ${assecOpen ? "text-white" : "text-[#1366AC]"} 
                mt-10 w-full p-5 pl-7   flex flex-row justify-between items-center cursor-pointer hover:opacity-90 transition relative`}
            >
              <span className="font-light text-xl">A ASSEC</span>
              <div
                className={`absolute right-0 ${
                  !assecOpen && "bg-[#1366AC]"
                } h-full flex items-center p-2`}
              >
                {assecOpen && <HiMinus size={50} />}
                {!assecOpen && <HiPlus size={50} color="#FFFF" />}
              </div>
            </div>

            {assecOpen && (
              <div className="w-full bg-[#e2e2e2] p-5 pl-7 pr-7 mb-5">
                <a href="#">TIMELINE</a>
                <hr className="mt-2 mb-2 text-3xl h-[1px] bg-[#cacaca]" />
                <a href="#">MANIFESTO</a>
              </div>
            )}
          </div>
        </div>
      </>

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
