import CalculadoraCarbono from "../components/CalculadoraCarbono";
import TituloPagina from "../components/TituloPagina";
import poluicaoImg from "../assets/poluicao.png";
import sobreImg2 from "../assets/sobre_img_2.png";
import sobreImg3 from "../assets/sobre_img_3.png";
import bilheteUnicoImg from "../assets/bilhete_unico.png";

function Sobre() {
  return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        <TituloPagina texto={"Mobilidade sustentável começa\ncom escolhas conscientes"}/>
        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-6">
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Sustentabilidade nunca foi tão discutida. Mesmo assim, milhões de pessoas ainda não
              conseguem perceber como pequenas escolhas da rotina impactam diretamente o meio ambiente.
            </p>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Ao mesmo tempo, as grandes cidades enfrentam desafios cada vez maiores relacionados
              ao trânsito, mobilidade urbana e emissão de carbono.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src={poluicaoImg}
              alt="Poluição em São Paulo"
              className="w-full max-w-md mx-auto h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>
        <section className="py-16 text-center rounded-3xl my-8 px-6">
          <h2 className="font-['Momo_Trust_Display'] text-3xl md:text-4xl font-black bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent
            mb-10">
            Você sabe quanto você emite?
          </h2>
          <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            No campo abaixo, insira uma quilometragem e descubra a quantidade de carbono
            que você emite fazendo uma viagem de carro.
          </p>
          <CalculadoraCarbono />
        </section>
        <section className="py-16 space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-['Momo_Trust_Display'] text-3xl font-bold bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent
            mb-10">
            Uma nova forma de incentivar mobilidade consciente
            </h2>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed mb-10">
            Foi nesse cenário que surgiu a <strong>SoulMove</strong>: uma solução que conecta{' '}
            <strong>tecnologia, mobilidade urbana e sustentabilidade</strong> em uma experiência
            digital baseada em comunidades, missões e recompensas.
            </p>
          </div>
          <img
            src={sobreImg2}
            alt="Pedestres atravessando na faixa"
            className="w-full max-w-2xl mx-auto h-auto rounded-3xl object-cover shadow-xl"
          />
        </section>
        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-6">
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Dentro da plataforma, os usuários participam de missões sustentáveis, desafios
              colaborativos e comunidades digitais, acumulando pontos que podem ser convertidos
              em benefícios para o transporte público.
            </p>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              A proposta busca transformar pequenas ações do dia a dia em impacto positivo
              para mobilidade urbana e meio ambiente.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src={sobreImg3}
              alt="Mãos com plantas"
              className="w-full max-w-md mx-auto h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 w-full">
            <img
              src={bilheteUnicoImg}
              alt="Bilhete único sendo usado"
              className="w-full max-w-md mx-auto h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Ao cumprir essas missões, o usuário acumula pontos que podem ser convertidos
              em descontos para o transporte público.
            </p>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Mais do que oferecer benefícios, a SoulMove busca incentivar mudanças reais
              de comportamento, aproximando sustentabilidade da rotina cotidiana das pessoas.
            </p>
          </div>
        </section>
        <section className="py-20 text-center">
          <p className="font-['Momo_Trust_Display'] text-3xl md:text-4xl font-black bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Tecnologia, comunidade e sustentabilidade conectadas em uma única experiência.
          </p>
        </section>
      </main>
  );
}
export default Sobre