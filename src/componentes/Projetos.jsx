import { IoArrowForward } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import DivProjeto from "./DivProjeto";
import DivInfoProjeto from "./DivInfoProjeto";
import TituloProjeto from "./TituloProjeto";
import DescricaoProjeto from "./DescricaoProjeto";
import DivStacks from "./DivStacks";
import Stack from "./Stack";
import DivBotoes from "./DivBotoes";
import BotaoProjeto from "./BotaoProjeto";
import GitHubProjeto from "./GitHubProjeto";

const projetos = [
  {
    titulo: "App de Finanças",
    descricao: 'Uma app para controlar suas transações de "ganhos" e "gastos", calculando todas suas transações e mostrando seu valor disponível.',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://app-de-finan-as.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/App-Financeiro"
  },
  {
    titulo: "Organizador de Notas",
    descricao: 'Com o "Organizador de Notas" você consegue informar seu lembrete, com o "título" e "descrição". Ele permite você ver o status do seu lembrete como, "a fazer", "em andamento" e "concluído", permitindo a mudança de "categoria".',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://organizador-de-notas.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/Organizador-de-Notas"
  },
  {
    titulo: "Página de Login",
    descricao: 'Uma página de login com verificações como: campos vazios, limite de caracteres e etc. Com "Design" elegante e totalmente responsivo para telas como: TVs, Tablets e smartphones!',
    stacks: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://josehenriquedasilva.github.io/projeto-login.p/",
    GithubProjeto: "https://github.com/josehenriquedasilva/projeto-login.p"
  },
  {
    titulo: "Galeria",
    descricao: 'Uma "Galeria Online" onde você consegue armazenar imagens com a "URL" da imagem ou "escolher o arquivo". Ela armazenas as imagens no navegador, permitindo você recarregar a página sem as imagens sairem!',
    stacks: ["React", "Tailwind", "React-Hooks", "React.Icons"],
    linkProjeto: "https://galeria-lemon-nine.vercel.app/",
    GithubProjeto: "https://github.com/josehenriquedasilva/Galeria"
  },
  {
    titulo: "Redes Sociais",
    descricao: 'Projeto dedicado a divulgar e mostras suas "Redes Sociais", com "Design" diferente simulando a tela de um smartphone. Com possibilidades de divulgar perfis em várias plataformas como: Instagram, Facebook, Twitter, GitHub e etc!',
    stacks: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://josehenriquedasilva.github.io/projeto-social.p/",
    GithubProjeto: "https://github.com/josehenriquedasilva/projeto-social.p"
  },
  {
    titulo: "História do ANDROID",
    descricao: 'Projeto narrando resumidamente a "História dos Mascotes do Android", com imagens ilustrativas e tabelas totalmente responsivas!',
    stacks: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://josehenriquedasilva.github.io/projeto-android/",
    GithubProjeto: "https://github.com/josehenriquedasilva/projeto-android"
  }
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
            <DivProjeto key={idx}>
            <DivInfoProjeto>
              <TituloProjeto>{projeto.titulo}</TituloProjeto>
              <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
              <DivStacks>
                {projeto.stacks.map((stack, i) => (
                  <Stack key={i}>{stack}</Stack>
                ))}
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href={projeto.linkProjeto}
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href={projeto.GithubProjeto}
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Projetos;
