"use client";

import { useState } from "react";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
  desc: string;
};

const frontendTechs: Tech[] = [
  {
    name: "React",
    icon: <FaReact size={48} />,
    desc: "Interfaces modernas com componentização.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={48} />,
    desc: "SSR, rotas otimizadas e foco em performance.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={48} />,
    desc: "Código mais seguro, escalável e organizado.",
  },
];

const backendTechs: Tech[] = [
  {
    name: "Firebase",
    icon: <SiFirebase size={48} />,
    desc: "Autenticação, banco de dados e backend completo.",
  },
  {
    name: "Firestore",
    icon: <FaDatabase size={48} />,
    desc: "Banco NoSQL escalável com integração em tempo real.",
  },
  {
    name: "APIs",
    icon: <FaDatabase size={48} />,
    desc: "Integração entre sistemas e consumo de serviços externos.",
  },
];

export default function Stack() {
  const [activeFront, setActiveFront] = useState<number | null>(null);
  const [activeBack, setActiveBack] = useState<number | null>(null);

  const renderCards = (
    techs: Tech[],
    active: number | null,
    setActive: React.Dispatch<React.SetStateAction<number | null>>
  ) => (
    <div className="flex gap-8 overflow-hidden p-8">

      {techs.map((tech, index) => {
        const isActive = active === index;

        return (
          <div
            key={tech.name}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`
              flex-1 border border-zinc-800 rounded-2xl p-10
              transition-all duration-500 ease-out
              relative overflow-hidden

              ${
                isActive
                  ? "scale-[1.08] z-10 border-zinc-600 shadow-xl shadow-black/30"
                  : ""
              }

              ${active !== null && !isActive ? "opacity-40" : ""}

              ${active === 0 && index === 1 ? "translate-x-4" : ""}
              ${active === 0 && index === 2 ? "translate-x-6" : ""}

              ${active === 2 && index === 1 ? "-translate-x-4" : ""}
              ${active === 2 && index === 0 ? "-translate-x-6" : ""}

              ${active === 1 && index === 0 ? "-translate-x-4" : ""}
              ${active === 1 && index === 2 ? "translate-x-4" : ""}
            `}
          >

            {/* conteúdo principal */}
            <div
              className={`
                flex flex-col items-center justify-center text-center
                transition-all duration-500

                ${isActive ? "-translate-y-6" : "translate-y-4"}
              `}
            >

              <div className="text-zinc-300 mb-5">
                {tech.icon}
              </div>

              <p className="text-zinc-200 text-xl font-medium">
                {tech.name}
              </p>

            </div>

            {/* descrição */}
            <div className="absolute bottom-6 left-0 w-full px-4">

              <div
                className={`
                  text-sm text-zinc-500 text-center
                  transition-all duration-500

                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                {tech.desc}
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );

  return (
    <section className="px-5 md:px-10 lg:px-16 py-20 md:py-24 overflow-x-hidden">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12">
          Tecnologias
        </h2>

        {/* FRONTEND */}
        <div className="mb-16">
          <h3 className="text-zinc-500 mb-6">Frontend</h3>
          {renderCards(frontendTechs, activeFront, setActiveFront)}
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-zinc-500 mb-6">Backend / BaaS</h3>
          {renderCards(backendTechs, activeBack, setActiveBack)}
        </div>

      </div>

    </section>
  );
}
