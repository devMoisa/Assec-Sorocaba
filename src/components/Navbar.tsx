import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi2";

// Tipos para os links e itens do menu
type MenuLink = {
  name: string;
  goTo: string;
};

type MenuItem = {
  title: string;
  goTo?: string;
  links?: MenuLink[];
};

// Array de itens do menu com URLs ou IDs de sessão
const menuItems: MenuItem[] = [
  {
    title: "A ASSEC",
    links: [
      { name: "TIMELINE", goTo: "a-assec" },
      { name: "MANIFESTO", goTo: "#manifesto" },
    ],
  },
  {
    title: "A FILAHARMÔNICA",
    links: [
      { name: "MAESTRO", goTo: "#maestro" },
      { name: "HISTÓRIA", goTo: "#historia" },
    ],
  },
  {
    title: "OS PROJETOS",
    links: [
      { name: "MUSICANDO", goTo: "#musicando" },
      { name: "CORAL", goTo: "#coral" },
      { name: "ESPORTES", goTo: "#esportes" },
    ],
  },
  { title: "AGENDA", goTo: "#agenda" },
  { title: "GALERIA", goTo: "#galeria" },
  { title: "TRANSPARÊNCIA", goTo: "#transparencia" },
  { title: "PARCEIROS", goTo: "#parceiros" },
  {
    title: "FALE CONOSCO",
    links: [
      { name: "ENTRE EM CONTATO", goTo: "#contato" },
      { name: "DEIXAR MENSAGEM", goTo: "#mensagem" },
    ],
  },
];

// Componente de item do menu, que verifica se há links e bloqueia o clique quando não há.
type MobileMenuItemProps = {
  title: string;
  links?: MenuLink[];
  goTo?: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  title,
  links,
  goTo,
  isOpen,
  toggleOpen,
}) => {
  const handleClick = () => {
    if (links) {
      toggleOpen();
    } else if (goTo) {
      window.location.href = goTo;
    }
  };

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        className={`${
          isOpen ? "bg-[#1366AC] text-white" : "bg-[#ffff] text-[#000]"
        } mt-5 w-full p-5 pl-7 flex flex-row justify-between items-center cursor-pointer hover:opacity-90 transition relative`}
      >
        <span className="font-light text-xl">{title}</span>
        {links && (
          <div
            className={`absolute right-0 ${
              !isOpen && "bg-[#1366AC]"
            } h-full flex items-center p-2`}
          >
            {isOpen ? (
              <HiMinus size={50} />
            ) : (
              <HiPlus size={50} color="#FFFF" />
            )}
          </div>
        )}
      </div>
      {isOpen && links && (
        <div className="w-full bg-[#e2e2e2] p-5 pl-7 pr-7 mb-5">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.goTo}
                className="hover:opacity-50 cursor-pointer transition"
              >
                {link.name}
              </a>
              {index < links.length - 1 && (
                <hr className="mt-2 mb-2 text-3xl h-[1px] bg-[#cacaca]" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

interface NavbarProps {
  dark?: boolean;
  isCarousel?: boolean;
}

export const Navbar = ({ dark = false, isCarousel = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* Mobile */}
      <nav className="w-full h-24 bg-white flex items-center flex-row lg:hidden relative">
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
        <button
          className="bg-[#1366AC] h-full pl-5 pr-5 cursor-pointer hover:opacity-90 hover:transition"
          onClick={() => setOpen(!open)}
        >
          <IoMenuSharp className="text-white text-5xl" />
        </button>
      </nav>
      {open && (
        <div
          id="navbarMobileOpen"
          className="absolute top-25 right-0 w-full bg-[#F4F4F4] z-10 lg:hidden"
        >
          <div className="pl-10 pr-10 pt-10 mb-28">
            <div className="flex justify-center ">
              <span className="text-[#1366AC] cursor-pointer hover:opacity-50 transition">
                PORTUGUÊS
              </span>
              <span className="ml-2 text-[#1366AC]">|</span>
              <span className="text-gray-400 ml-2 cursor-pointer hover:opacity-50 transition">
                ENGLISH
              </span>
            </div>

            {menuItems.map((item, index) => (
              <MobileMenuItem
                key={index}
                title={item.title}
                links={item.links}
                goTo={item.goTo}
                isOpen={!!openItems[index]}
                toggleOpen={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Desktop */}
      <nav
        className={`
        ${isCarousel && "absolute"}
         z-10 font-[var(--font-gotham), sans-serif] hidden lg:flex  w-full pt-7 pb-10 uppercase
         ${dark ? "text-black" : "text-white"}
         `}
      >
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
                width={60}
                height={60}
                alt="ASSEC Sorocaba"
                src={`${dark ? "/logo_colored.png" : "/logo.png"}`}
              />
              <h1 className="uppercase text-3xl">assec</h1>
            </div>
            <div className="linkList flex items-center gap-5 text-[0.8rem]">
              <a href="a-assec" className="hidden xl:flex">
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
                className={`border-spacing-5 border-[1px] ${
                  dark ? "border-gray-400" : "border-white"
                } p-3 pl-4 pr-4`}
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
