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

          {/* imagem */}
          <div className="w-full h-75 md:h-100 bg-zinc-900 rounded-2xl overflow-hidden relative">

            <Image
                src="/watt-som.png"
                alt="Projeto Watt Som"
                fill
                className="object-cover"
                priority
            />

          </div>


          {/* conteúdo */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* texto */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Watt Som
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
                  React · Next.js · Firebase · Tailwind
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block text-sm border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  Ver projeto
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
