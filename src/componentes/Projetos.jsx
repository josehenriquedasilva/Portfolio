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

function Projetos() {
  return (
    <section id="projetos" className="bg-[#1D1D1D] py-24">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Meus Projetos
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>
        <section className="flex flex-wrap justify-center items-center gap-8">
          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>App de Finanças</TituloProjeto>
              <DescricaoProjeto>
                Uma app para controlar suas transações de "ganhos" e "gastos",
                calculando todas suas transações e mostrando seu valor
                disponível.
              </DescricaoProjeto>
              <DivStacks>
                <Stack>React</Stack>
                <Stack>Tailwind</Stack>
                <Stack>React-Hooks</Stack>
                <Stack>React.Icons</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://app-de-finan-as.vercel.app/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/App-Financeiro"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>

          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>Organizador de Notas</TituloProjeto>
              <DescricaoProjeto>
                Com o "Organizador de Notas" você consegue informar seu
                lembrete, com o "título" e "descrição". Ele permite você ver o
                status do seu lembrete como, "a fazer", "em andamento" e
                "concluído", permitindo a mudança de "categoria".
              </DescricaoProjeto>
              <DivStacks>
                <Stack>React</Stack>
                <Stack>Tailwind</Stack>
                <Stack>React-Hooks</Stack>
                <Stack>React.Icons</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://organizador-de-notas.vercel.app/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/Organizador-de-Notas"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>

          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>Página de Login</TituloProjeto>
              <DescricaoProjeto>
                Uma página de login com verificações como: campos vazios, limite
                de caracteres e etc. Com "Design" elegante e totalmente
                responsivo para telas como: TVs, Tablets e smartphones!
              </DescricaoProjeto>
              <DivStacks>
                <Stack>HTML</Stack>
                <Stack>CSS</Stack>
                <Stack>JavaScript</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://josehenriquedasilva.github.io/projeto-login.p/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/projeto-login.p"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>

          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>Galeria</TituloProjeto>
              <DescricaoProjeto>
                Uma "Galeria Online" onde você consegue armazenar imagens com a
                "URL" da imagem ou "escolher o arquivo". Ela armazenas as
                imagens no navegador, permitindo você recarregar a página sem as
                imagens sairem!
              </DescricaoProjeto>
              <DivStacks>
                <Stack>React</Stack>
                <Stack>Tailwind</Stack>
                <Stack>React-Hooks</Stack>
                <Stack>React.Icons</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://galeria-lemon-nine.vercel.app/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/Galeria"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>

          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>Redes Sociais</TituloProjeto>
              <DescricaoProjeto>
                Projeto dedicado a divulgar e mostras suas "Redes Sociais", com
                "Design" diferente simulando a tela de um smartphone. Com
                possibilidades de divulgar perfis em várias pataformas como:
                Instagram, Facebook, Twitter, GitHub e etc!
              </DescricaoProjeto>
              <DivStacks>
                <Stack>HTML</Stack>
                <Stack>CSS</Stack>
                <Stack>JavaScript</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://josehenriquedasilva.github.io/projeto-social.p/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/projeto-social.p"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>

          <DivProjeto>
            <DivInfoProjeto>
              <TituloProjeto>História do ANDROID</TituloProjeto>
              <DescricaoProjeto>
                Projeto narrando resumidamente a "História dos Mascotes do
                Android", com imagens ilustrativas e tambelas totalmente
                responsivas!
              </DescricaoProjeto>
              <DivStacks>
                <Stack>HTML</Stack>
                <Stack>CSS</Stack>
                <Stack>JavaScript</Stack>
              </DivStacks>
              <DivBotoes>
                <BotaoProjeto
                  target="_blank"
                  href="https://josehenriquedasilva.github.io/projeto-android/"
                >
                  Ver Projeto{" "}
                  <IoArrowForward className="ml-3 group-hover:ml-4 duration-200" />
                </BotaoProjeto>
                <GitHubProjeto
                  target="_blank"
                  href="https://github.com/josehenriquedasilva/projeto-android"
                >
                  <FiGithub className="size-5" />
                </GitHubProjeto>
              </DivBotoes>
            </DivInfoProjeto>
          </DivProjeto>
        </section>
      </div>
    </section>
  );
}

export default Projetos;
