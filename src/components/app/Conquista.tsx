import type { TipoConquista } from "../../types/conquista";

type ConquistaProps = {
    conquista: TipoConquista;
}

function Conquista({ conquista }: ConquistaProps) {
    return (
        <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6">
            <div className="flex">
                <div>
                    <h2 className="font-[Lexend_Deca] text-white">{conquista.nome}</h2>
                    <p className="font-[Lexend_Deca] text-white text-[0.8rem]">{conquista.descricao}</p>
                    
                </div>

                <img src="/src/assets/relogio_missao.png" alt="Icone de progresso" className="w-8 h-8 ml-auto"/>

            </div>

            <div className="flex justify-between">
                <p className="font-[Lexend_Deca] text-white">{conquista.progressoAtual}/{conquista.meta}</p>
                <div></div> {/* barrinha de progresso */}
                <p className="font-[Momo_Trust_Display] text-white">{conquista.pontos}pts</p>
            </div>

            {/* accordion */}

            <div className="hidden">
                <li>
                    <div>{`Titulo: ${conquista.titulo}`}</div>
                </li>
            </div>
        </div>
    );
}

export default Conquista;