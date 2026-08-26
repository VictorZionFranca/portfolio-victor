import Image from "next/image";

export default function Projects() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-20 md:py-24 select-none cursor-default">

      <div className="max-w-6xl mx-auto">

        {/* título */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Projetos em destaque
        </h2>

        <div className="space-y-20">

          {/* projeto 1 */}
          <div className="space-y-10">

            {/* imagem */}
            <div className="group relative w-full rounded-2xl overflow-hidden border border-white/10">

              <Image
                src="/images/wattsom.png"
                alt="Projeto Watt Som"
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition duration-500 md:group-hover:scale-[1.02]"
                priority
              />

              {/* overlay (SÓ desktop) */}
              <div className="
                hidden md:flex
                absolute inset-0
                bg-black/0 md:group-hover:bg-black/40
                md:group-hover:backdrop-blur-[2px]
                transition-all duration-500
                items-center justify-center
              ">

                <a
                  href="https://www.wattsomeacessorios.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    opacity-0 group-hover:opacity-100
                    scale-95 group-hover:scale-100
                    translate-y-6 group-hover:translate-y-0
                    transition-all duration-500 ease-out

                    px-7 py-3
                    rounded-full
                    bg-white/90 backdrop-blur-md
                    text-black text-sm font-medium

                    shadow-lg shadow-black/20
                    ring-1 ring-white/20

                    hover:bg-white hover:scale-105
                  "
                >
                  Ver Projeto
                </a>

              </div>

            </div>

            {/* conteúdo */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">

              {/* texto */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Watt Som e Acessórios
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  Projeto desenvolvido para uma empresa de som automotivo com foco em presença
                  digital e geração de contatos. O site apresenta os serviços oferecidos,
                  destaca trabalhos realizados e direciona os clientes diretamente para o
                  WhatsApp, facilitando o atendimento e a solicitação de orçamentos.
                </p>
              </div>

              {/* detalhes */}
              <div className="flex flex-col justify-between gap-6 md:gap-0">

                <div>
                  <p className="text-xs md:text-sm text-zinc-500 mb-2">
                    Tecnologias
                  </p>

                  <p className="text-zinc-300 text-sm md:text-base">
                    React · Next.js · Tailwind
                  </p>
                </div>

                {/* botão principal (mobile + desktop) */}
                <div>
                  <a
                    href="https://www.wattsomeacessorios.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition w-full md:w-auto text-center"
                  >
                    Ver projeto
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* projeto 2 */}
          <div className="space-y-10">

            {/* imagem */}
            <div className="group relative w-full rounded-2xl overflow-hidden border border-white/10">

              <Image
                src="/images/gestao-barbearia.png"
                alt="Projeto Gestão Barbearia"
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition duration-500 md:group-hover:scale-[1.02]"
              />

              {/* overlay (SÓ desktop) */}
              <div className="
                hidden md:flex
                absolute inset-0
                bg-black/0 md:group-hover:bg-black/40
                md:group-hover:backdrop-blur-[2px]
                transition-all duration-500
                items-center justify-center
              ">

                <a
                  href="https://gestao-barbearia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    opacity-0 group-hover:opacity-100
                    scale-95 group-hover:scale-100
                    translate-y-6 group-hover:translate-y-0
                    transition-all duration-500 ease-out

                    px-7 py-3
                    rounded-full
                    bg-white/90 backdrop-blur-md
                    text-black text-sm font-medium

                    shadow-lg shadow-black/20
                    ring-1 ring-white/20

                    hover:bg-white hover:scale-105
                  "
                >
                  Ver Projeto
                </a>

              </div>

            </div>

            {/* conteúdo */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">

              {/* texto */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Gestão Barbearia
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  Sistema completo de gestão para barbearias, onde o dono do negócio
                  administra clientes, funcionários, produtos, serviços e agendamentos
                  em um só lugar. Conta com dashboard financeiro (receita de serviços
                  e produtos) e acompanhamento de clientes ativos, perdidos e
                  aniversariantes do mês.
                </p>
                <div className="mt-4 inline-block rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3">
                  <p className="text-xs text-zinc-500 mb-1">
                    Login de demonstração
                  </p>
                  <p className="text-zinc-300 text-sm">
                    <span className="text-zinc-500">Email:</span> teste@gmail.com
                  </p>
                  <p className="text-zinc-300 text-sm">
                    <span className="text-zinc-500">Senha:</span> admin123
                  </p>
                </div>
              </div>

              {/* detalhes */}
              <div className="flex flex-col justify-between gap-6 md:gap-0">

                <div>
                  <p className="text-xs md:text-sm text-zinc-500 mb-2">
                    Tecnologias
                  </p>

                  <p className="text-zinc-300 text-sm md:text-base">
                    React · Next.js · Firebase
                  </p>
                </div>

                {/* botão principal (mobile + desktop) */}
                <div>
                  <a
                    href="https://gestao-barbearia.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition w-full md:w-auto text-center"
                  >
                    Ver projeto
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
