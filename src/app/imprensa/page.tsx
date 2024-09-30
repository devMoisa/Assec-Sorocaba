/* eslint-disable @next/next/no-img-element */
"use client";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "../../global.css";

export default function Imprensa() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isCarousel={false} dark={true} />
      <main className="container pl-10 px-4 py-10 flex-grow mb-10">
        <h1 className="text-black text-4xl font-light mb-10 text-left">
          IMPRENSA
        </h1>
        <h2 className="text-2xl font-light mb-6">
          Bem-vindo(a) à área de contato da <br />
          ASSEC - Associação de Eventos Culturais de Sorocaba
        </h2>
        <p className="max-w-prose mb-6 text-lg">
          Se você é um membro da imprensa e deseja obter informações sobre
          nossos eventos, solicitar entrevistas ou receber material de
          divulgação, estamos à disposição para ajudar.
        </p>
        <p className="max-w-prose text-lg mb-8">
          Entre em contato conosco pelos seguintes canais:
        </p>
        <div className="text-lg mb-8">
          <p>
            <strong>E-mail:</strong>
            <a
              href="mailto:email@example.com"
              className="text-blue-600 hover:underline"
            >
              [email@example.com]
            </a>
          </p>
          <p>
            <strong>Telefone:</strong> <span>[número de telefone]</span>
          </p>
        </div>
        <p className="max-w-prose text-lg">
          Estamos aqui para fornecer todo o suporte necessário e garantir que
          você tenha as informações de que precisa para suas reportagens.
        </p>
      </main>
      <Footer />
    </div>
  );
}
