import FaqCard from "../components/FaqCard";
import TituloPagina from "../components/TituloPagina";
import { faqData } from "../data/faq";

function Faq(){
    return(
        <main className="bg-white py-12">
            <TituloPagina texto="Perguntas Frequentes"/>

            <section className="mx-auto flex flex-row flex-wrap px-6 gap-8 md:gap-12.5 justify-center">
                {faqData.map((faq) => (
                    <FaqCard
                        key={faq.id}
                        pergunta={faq.titulo}
                        resposta={faq.descricao}
                    />
                ))}
            </section>
        </main>
    );
}

export default Faq;