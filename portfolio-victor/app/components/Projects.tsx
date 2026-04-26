import Image from "next/image";

export default function Projects() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24">

      <div className="max-w-6xl mx-auto">

        {/* título da seção */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Projetos em destaque
        </h2>

        {/* projeto */}
        <div className="space-y-10">

          {/* imagem com hover */}
          <div className="group relative w-full rounded-2xl overflow-hidden">

            <Image
              src="/images/wattsom.png"
              alt="Projeto Watt Som"
              width={1200}
              height={800}
              className="w-full h-auto object-contain transition duration-500 group-hover:scale-[1.02]"
              priority
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">

              {/* botão */}
              <a
                href="https://www.wattsomeacessorios.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500 px-6 py-3 rounded-full bg-white text-black text-sm font-medium"
              >
                Ver Projeto
              </a>

            </div>

          </div>

          {/* conteúdo */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* texto */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Watt Som e Acessórios
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Sistema completo para gestão de serviços e clientes
                no segmento de som automotivo, desenvolvido com foco
                em usabilidade, performance e organização de processos.
              </p>
            </div>

            {/* detalhes */}
            <div className="flex flex-col justify-between">

              <div>
                <p className="text-sm text-zinc-500 mb-2">
                  Tecnologias
                </p>

                <p className="text-zinc-300">
                  React · Next.js · Tailwind
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.wattsomeacessorios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  Ver Projeto
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
