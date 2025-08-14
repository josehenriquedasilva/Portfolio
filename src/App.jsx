import "./App.css";

import Contato from "./componentes/Contato";
import Projetos from "./componentes/Projetos";
import Sobre from "./componentes/Sobre";
import Stacks from "./componentes/Stacks";

import { LuChevronsDown } from "react-icons/lu";
import { motion } from "motion/react";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

import { useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

function App() {
  const stacks = [
    {
      tec: "HTML",
      logo: <IoLogoHtml5 className="size-15 text-orange-500" />,
    },
    {
      tec: "CSS",
      logo: <IoLogoCss3 className="size-15 text-blue-700" />,
    },
    {
      tec: "JavaScript",
      logo: <TbBrandJavascript className="size-15 text-amber-300" />,
    },
    {
      tec: "TypeScript",
      logo: <SiTypescript className="size-15 text-[#377CC8]" />,
    },
    {
      tec: "React",
      logo: <IoLogoReact className="size-15 text-blue-300" />,
    },
    {
      tec: "Tailwind",
      logo: <SiTailwindcss className="size-15 text-blue-500" />,
    },
    {
      tec: "Next.js",
      logo: <RiNextjsFill className="size-15 text-white" />,
    },
    {
      tec: "Prisma ORM",
      logo: <SiPrisma className="size-15 text-[#194055]" />,
    },
    {
      tec: "PostgreSQL",
      logo: <BiLogoPostgresql className="size-15 text-[#396C94]" />,
    },
  ];

  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 flex justify-between items-center bg-[rgba(17,17,17,0.7)] bg-opacity-70 backdrop-blur-md text-gray-100 font-semibold px-8 w-full h-22 z-50">
        <p className="font-bold text-2xl">
          <span className="text-green-500">&lt; </span>JH
          <span className="text-green-500"> /&gt;</span>
        </p>
        <nav className="hidden gap-5 md:flex">
          <a
            className="hover:text-green-500 transition duration-200"
            href="#sobre"
          >
            Sobre
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#stacks"
          >
            Stacks
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#projetos"
          >
            Projetos
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#contato"
          >
            Contato
          </a>
        </nav>

        <button
          className="space-y-2 p-3 md:hidden"
          onClick={() => {
            if (menu == false) {
              setMenu(true);
            } else {
              setMenu(false);
            }
          }}
        >
          <span
            className={`w-[30px] h-[3px] rounded-sm bg-white block transition-all duration-200 ${
              menu ? `rotate-45 translate-y-1.5` : ``
            }`}
          ></span>
          <span
            className={`w-[15px] h-[3px] rounded-sm bg-green-500 block transition-all duration-200 ${
              menu ? `w-[30px] -rotate-45 -translate-y-1.5` : ``
            }`}
          ></span>
          <span
            className={`w-[30px] h-[3px] rounded-sm bg-white block transition-all duration-200 ${
              menu ? `opacity-0` : ``
            }`}
          ></span>
        </button>

        <nav
          className={`absolute w-full left-0 flex flex-col items-center gap-6 py-3 bg-[rgba(17,17,17,0.9)] transition-all duration-200 ${
            menu
              ? `top-22 opacity-100 translate-y-0 pointer-events-auto`
              : `top-22 opacity-0 -translate-y-8 pointer-events-none`
          }`}
        >
          <a
            className="hover:text-green-500 transition duration-200"
            href="#sobre"
            onClick={() => setMenu(false)}
          >
            Sobre
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#stacks"
            onClick={() => setMenu(false)}
          >
            Stacks
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#projetos"
            onClick={() => setMenu(false)}
          >
            Projetos
          </a>
          <a
            className="hover:text-green-500 transition duration-200"
            href="#contato"
            onClick={() => setMenu(false)}
          >
            Contato
          </a>
        </nav>
      </header>

      <main>
        <div
          id="home"
          className="h-screen flex flex-col items-center justify-center text-center bg-[#111111] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(29,29,29,0.8)_0%,_rgba(17,17,17,1)_100%)]"></div>
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-fade-in-down"
            >
              JOSÉ HENRIQUE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl font-mono mt-4 text-green-500"
            >
              &lt;Desenvolvedor Full-Stack /&gt;
            </motion.p>
          </div>
          <LuChevronsDown className="text-gray-400 animate-bounce size-9 bottom-10 absolute" />
        </div>
        <Sobre />
        <Stacks stacks={stacks} />
        <Projetos />
        <Contato />
      </main>

      <footer className="bg-[#1d1d1d] text-center py-6">
        <p className="text-gray-500">
          &copy; 2025 José Henrique. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
