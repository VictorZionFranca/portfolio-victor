import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import TypingCode from "./TypingCode";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-10 lg:px-16 pt-10">

      {/* header minimal */}
      <div className="flex justify-between items-center mb-20">

        <p className="text-sm text-zinc-500 tracking-widest uppercase">
          Portfolio
        </p>

        <div className="flex gap-6 text-zinc-500">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:-translate-y-0.5"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:-translate-y-0.5"
          >
            <FaInstagram size={32} />
          </a>

          <a
            href="https://wa.me/seunumero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>

      </div>

      {/* título gigante */}
      <h1 className="text-[70px] md:text-[120px] lg:text-[150px] font-semibold tracking-tight leading-[0.9]">
        VICTOR
        <br />
        FRANÇA
      </h1>

      {/* linha */}
      <div className="border-t border-zinc-800/60 my-12"></div>

      {/* conteúdo */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* texto */}
        <div className="max-w-lg">

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Desenvolvedor Frontend
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            Crio interfaces modernas, rápidas e bem estruturadas,
            com foco total na experiência do usuário.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            Trabalho com tecnologias como React, Next.js e Firebase,
            desenvolvendo projetos reais do zero até a produção,
            sempre buscando código limpo, performance e design consistente.
          </p>

        </div>

        {/* animação */}
        <div className="relative min-h-50 flex items-center justify-center">
          <TypingCode />
        </div>

      </div>

      {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <div className="w-7 h-12 border-2 border-zinc-600 rounded-full relative overflow-hidden flex justify-center">

        <div className="w-2.5 h-2.5 bg-white rounded-full animate-scroll-wheel"></div>

        </div>

        </div>

    </section>
  );
}
