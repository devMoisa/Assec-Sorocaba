/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
export const Footer = () => {
  const linkList = [
    {
      title: "A ASSEC",
      goTo: "",
      subLinkList: [
        {
          title: "Timeline",
          goTo: "",
        },
        {
          title: "Manifesto",
          goTo: "",
        },
      ],
    },
    {
      title: "A FILAHARMÔNICA",
      goTo: "",
      subLinkList: [
        {
          title: "Maestro",
          goTo: "",
        },
        {
          title: "História",
          goTo: "",
        },
      ],
    },
    {
      title: "OS PROJETOS",
      goTo: "",
      subLinkList: [
        {
          title: "Musicando",
          goTo: "",
        },
        {
          title: "Coral",
          goTo: "",
        },
        {
          title: "Esportes",
          goTo: "",
        },
      ],
    },
    {
      title: "AGENDA",
      goTo: "",
      subLinkList: [],
    },
    {
      title: "GALERIA",
      goTo: "",
      subLinkList: [],
    },
    {
      title: "TRANSPARÊNCIA",
      goTo: "",
      subLinkList: [],
    },
    {
      title: "PARCEIROS",
      goTo: "",
      subLinkList: [],
    },
    {
      title: "FALE CONOSCO",
      goTo: "",
      subLinkList: [
        {
          title: "Trabalhe Conosco",
          goTo: "",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="w-full pt-10 pb-7 bg-gray-100 font-[var(--font-gotham)]">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 justify-between flex-wrap flex-col md:flex-row">
            {linkList.map((item, index) => (
              <div key={index}>
                <a
                  className="text-black cursor-pointer hover:opacity-50 transition"
                  href={item.goTo}
                >
                  {item.title}
                </a>
                <div className="flex flex-col mt-3">
                  {item.subLinkList.map((subItem, subIndex) => (
                    <a
                      className="text-sm mb-2 text-gray-500 cursor-pointer hover:opacity-50 transition"
                      key={subIndex}
                      href={subItem.goTo}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-col md:flex-row mt-10 xl:mt-0">
            <Image
              src="/logo_footer.png"
              alt="ASSEC Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 h-auto w-[20%] sm:w-[13%] cursor-pointer hover:opacity-50 transition"
            />
            <p className="text-sm text-gray-500 text-center w-[80%] md:w-full">
              Rua Bernardo Ferraz de Almeida, 172, Sala 03, JD. Faculdade,
              Sorocaba/SP 18030-290
            </p>

            <div className="flex gap-3 items-center">
              <FaInstagram className="text-2xl text-black cursor-pointer hover:opacity-50 transition" />
              <FaFacebookSquare className="text-2xl text-black cursor-pointer hover:opacity-50 transition" />
              <FaYoutube className="text-2xl text-black cursor-pointer hover:opacity-50 transition" />
              <FaWhatsapp className="text-2xl text-black cursor-pointer hover:opacity-50 transition" />
              <TfiEmail className="text-2xl text-black cursor-pointer hover:opacity-50 transition" />
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#949494]">
        <div className="flex flex-col md:flex-row container justify-center pt-10 pb-10 text-white gap-5 text-sm  text-wrap">
          <a href="#" className="cursor-pointer hover:opacity-50 transition">
            IMPRENSA
          </a>
          <a href="#" className="cursor-pointer hover:opacity-50 transition">
            WEBTV
          </a>
          <a href="#" className="cursor-pointer hover:opacity-50 transition">
            NEWSLETTER
          </a>
          <a href="#" className="cursor-pointer hover:opacity-50 transition">
            POLITICA DE PRIVACIDADE
          </a>
        </div>
      </div>
    </>
  );
};
