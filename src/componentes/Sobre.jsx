import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Sobre() {
  return (
    <div id="sobre" className="bg-[#1D1D1D] py-24 text-gray-300">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4 text-white">
          Sobre Mim
        </h2>
        <div className="w-20 h-1 mb-12 bg-green-500 mx-auto"></div>

        <p className="text-lg text-center mb-12 leading-relaxed">
          Olá, me chamo Henrique tenho 19 anos sou deficiente físico, e sou
          apaixonado por Tecnologia em um todo mas principalmente por
          Desenvolvimento de Sistemas. Atualmente tenho conhecimento em HTML,
          CSS, JavaScript, React, Tailwind e PHP, mas pretendo conhecer outras
          linguagens e aprofundar o conhecimento nas que já conheço.
          Considero-me uma pessoa muito motivada e capaz de enfrentar qualquer
          desafio e problema com qual me deparar, e literalmente quando me
          deparo com um problema só desisto quando o soluciono.
        </p>
        <div className="flex gap-7 justify-center text-3xl">
          <FiGithub className="hover:scale-120 hover:text-green-500 duration-200 cursor-pointer" />
          <FiLinkedin className="hover:scale-120 hover:text-green-500 duration-200 cursor-pointer" />
          <MdOutlineEmail className="hover:scale-120 hover:text-green-500 duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
