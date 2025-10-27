import { IoArrowForward } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

const projetos = [
  {
    titulo: "Insany Shop (E-commerce)",
    descricao:
      "Uma loja virtual completa com foco em performance e experiência do usuário (UX), implementando as funcionalidades essenciais de um ciclo de compras: navegação, filtros de produtos, gerenciamento de carrinho e visualização detalhada de itens.",
    stacks: ["React", "Next.js", "TypeScript", "Tailwind"],
    linkProjeto: "https://projeto-insany-shop.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/Projeto-InsanyShop",
  },
  {
    titulo: "Dev Jobs",
    descricao:
      'Site de divulgações de vagas de emprego para desenvolvedores, onde os usuários podem fazer o login e ter acesso ao "dashboard" e ter um gerenciamento completo de suas vagas.',
    stacks: ["React", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    linkProjeto: "https://dev-jobs-s4xm.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/Dev-Jobs",
  },
  {
    titulo: "App de Finanças",
    descricao:
      'Uma app para controlar suas transações de "ganhos" e "gastos", calculando todas suas transações e mostrando seu valor disponível.',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://app-de-finan-as.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/App-Financeiro",
  },
  {
    titulo: "Organizador de Notas",
    descricao:
      'Com o "Organizador de Notas" você consegue informar seu lembrete, com o "título" e "descrição". Ele permite você ver o status do seu lembrete como, "a fazer", "em andamento" e "concluído", permitindo a mudança de "categoria".',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://organizador-de-notas.vercel.app/",
    GithubProjeto:
      "https://github.com/josehenriquedasilva/Organizador-de-Notas",
  },
  {
    titulo: "Página de Login",
    descricao:
      'Uma página de login com verificações como: campos vazios, limite de caracteres e etc. Com "Design" elegante e totalmente responsivo para telas como: TVs, Tablets e smartphones!',
    stacks: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://josehenriquedasilva.github.io/projeto-login.p/",
    GithubProjeto: "https://github.com/josehenriquedasilva/projeto-login.p",
  },
  {
    titulo: "Galeria",
    descricao:
      'Uma "Galeria Online" onde você consegue armazenar imagens com a "URL" da imagem ou "importar o arquivo". Com a o método "Drag and Drop" permite que você mude a ordem que as imagens estão organizadas!',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://galeria-lemon-nine.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/Galeria",
  },
];

function Projetos() {
  return (
    <section id="projetos" className="bg-[#1D1D1D] py-24">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Meus Projetos
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>
        <section className="flex flex-wrap justify-center items-center gap-8">
          {projetos.map((projeto, idx) => (
            <div
              key={idx}
              className="bg-[#111111] md:h-[320px] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-[#0ACC6C]/20 group w-130 md:w-[47.7%] lg:w-[31.1%]"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-bold text-white mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-4 md:h-30">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.stacks.map((stack, i) => (
                    <p
                      key={i}
                      className="bg-[#1d1d1d] text-[#0ACC6C] text-xs font-mono px-2 py-1 rounded-full"
                    >
                      {stack}
                    </p>
                  ))}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <a
                    target="_blank"
                    href={projeto.linkProjeto}
                    className="text-[#0ACC6C] font-semibold inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Ver Projeto{" "}
                    <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                  </a>

                  <a
                    target="_blank"
                    href={projeto.GithubProjeto}
                    className="text-gray-500 hover:text-[#0ACC6C] transition-colcontainer ors duration-300"
                  >
                    <FiGithub className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Projetos;
