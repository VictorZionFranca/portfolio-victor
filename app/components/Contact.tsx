import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="px-5 md:px-10 lg:px-16 py-20 md:py-24 border-t border-zinc-800/60 select-none cursor-default">

      <div className="max-w-6xl mx-auto">

        {/* CTA */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Vamos trabalhar juntos?
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10">
            Estou disponível para novos projetos e oportunidades.
            Manda uma mensagem e vamos conversar sobre a sua ideia.
          </p>

          <a
            href="https://wa.me/47984509831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-white text-black text-sm md:text-base font-medium hover:bg-zinc-200 transition"
          >
            Falar no WhatsApp
          </a>

        </div>

        {/* linha */}
        <div className="border-t border-zinc-800/60 mb-8"></div>

        {/* rodapé */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Victor Zion França. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-zinc-500">
            <a
              href="https://github.com/VictorZionFranca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:-translate-y-0.5"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.instagram.com/vic.zion"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:-translate-y-0.5"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://wa.me/47984509831"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:-translate-y-0.5"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}
