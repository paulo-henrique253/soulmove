import TituloPagina from "../components/TituloPagina";
import { Link } from "react-router";
import img1 from "../assets/index_img_1.png";
import img2 from "../assets/index_img_2.png";
import imgMeio from "../assets/index_img_meio.png";
import img3 from "../assets/index_img_3.png";

function Index() {
  return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
       
        <TituloPagina texto="Transforme Mobilidade em Impacto Positivo"/>

        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-6">
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              A SoulMove é uma solução integrada à plataforma SoulUp que permite aos usuários
              converter pontos acumulados em benefícios reais para o transporte público.
            </p>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Por meio de missões, desafios interativos e comunidades colaborativas, 
              os usuários acumulam pontos que podem ser convertidos em créditos para o transporte público.
            </p>
            <div className="pt-4">
              <a
                href="https://soulup.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Lexend_Deca'] inline-block px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-bold rounded-[14px]"
              >
                Conheça a SoulUP
              </a>
            </div>
          </div>   
          <div className="flex-1 w-full">
            <img
              src={img1}
              alt="Pessoa segurando um celular com um ônibus amarelo ao fundo"
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 border-t border-gray-100 mt-8">
          <div className="flex-1 space-y-6">
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Na SoulMove, cada ação conta. Com nossa calculadora de carbono, os usuários podem comparar o impacto ambiental de 
              diferentes meios de transporte e compreender melhor as consequências de suas escolhas.
            </p>
            <p className="font-['Lexend_Deca'] text-lg md:text-xl leading-relaxed">
              Ao tornar essas informações mais acessíveis e incentivar a participação coletiva, a plataforma estimula mudanças 
              de comportamento que contribuem para uma mobilidade urbana mais consciente e sustentável.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src={img2}
              alt="Trem parado em uma estação de metrô"
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>

        <div className="py-16 w-full">
          <img
            src={imgMeio}
            alt="Pessoa andando na rua"
            className="w-full h-50 md:h-150 object-cover rounded-3xl shadow-2xl"
          />
        </div>

        <section className="text-center py-20 px-6">
          <h2 className="font-['Momo_Trust_Display'] text-2xl sm:text-4xl md:text-5xl font-black mb-2 bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Mensurar impactos</h2>
          <h2 className="font-['Momo_Trust_Display'] text-2xl sm:text-4xl md:text-5xl font-black mb-2 bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-10">Mudar comportamentos</h2>
          

          <p className="font-['Lexend_Deca'] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A SoulMove conecta tecnologia, sustentabilidade e comunidade para construir
            cidades mais inteligentes, acessíveis e sustentáveis.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-12 py-16 mt-8">
          <div className="flex-1 space-y-10">
            <p className="font-['Momo_Trust_Display'] text-3xl md:text-5xl font-extrabold bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent leading-tight">
              Transformando engajamento sustentável em mobilidade urbana inteligente
            </p>
            <div>
              <Link
                to="/sobre"
                className="font-['Lexend_Deca'] inline-block px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-bold rounded-[14px]"
              >
                Descubra a Plataforma
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src={img3}
              alt="Placa azul circular com setas redondas brancas"
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>
        </section>

      </main>
  );
}

export default Index;