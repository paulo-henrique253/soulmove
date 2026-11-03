import TituloPagina from "../components/TituloPagina";
import TextoRoadmap from "../components/TextoRoadmap";
import TextoDestaque from "../components/TextoDestaque";
import roadmapSoulmove from "../assets/roadmap_soulmove.png";

function Roadmap() {
    return (
        <main className="w-full px-6 py-12">

            <TituloPagina texto="Nossa visão de futuro" />

            <section className="">
                <div className="
                        flex
                        w-full
                        flex-col
                        items-center
                        gap-8
                        px-16
                        xl:mx-auto
                        xl:w-188
                        mb-10"
                >
                    <TextoRoadmap
                        texto="O desenvolvimento da SoulMove foi planejado para acontecer de forma progressiva, permitindo validação contínua da experiência do usuário e crescimento sustentável da plataforma."
                    />

                    <TextoRoadmap
                        texto="A proposta evolui gradualmente por meio de novas funcionalidades, integração com sistemas de mobilidade urbana e expansão das comunidades digitais, ampliando o impacto positivo gerado pela plataforma."
                    />
                </div>
            </section>

            <section className="w-full">
                <img src={roadmapSoulmove} alt="Roadmap da SoulMove" className="mx-auto block w-full max-w-7xl md:px-[10vw]"/>
            </section>

            <section className="w-full mt-10">
                <div className="
                        flex
                        w-full
                        flex-col
                        items-center
                        gap-8
                        px-16

                        xl:mx-auto
                        xl:w-188
                        mb-10
                ">
                    <TextoRoadmap
                        texto="Mais do que um aplicativo de mobilidade, a SoulMove busca criar um ecossistema digital capaz de conectar tecnologia, conscientização ambiental e transformação cultural."
                    />
                </div>
            </section>

            <section className="w-full">
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        items-center
                        gap-8
                        px-16

                        xl:mx-auto
                        xl:w-188
                    "
                >
                    <TextoDestaque
                        texto="A evolução da SoulMove acompanha a construção de cidades mais inteligentes, sustentáveis e conectadas."
                    />
                </div>
            </section>

        </main>
    );
}

export default Roadmap;