import type { TipoConquista } from "../../types/conquista";
import RelogioMissao from "../../assets/relogio_missao.png";

type ConquistaProps = {
    conquista: TipoConquista;
}

function Conquista({ conquista }: ConquistaProps) {
    return (
        <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl flex flex-col justify-between gap-3 drop-shadow-md/50 my-3">
            <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                    <h2 className="font-[Lexend_Deca] text-white font-bold text-base sm:text-lg">{conquista.nome}</h2>
                    <p className="font-[Lexend_Deca] text-white/90 text-xs sm:text-sm mt-0.5">{conquista.descricao}</p>
                </div>
                <img src={RelogioMissao} alt="Icone de progresso" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"/>
            </div>

            <div className="flex justify-between items-center pt-1 border-t border-white/20">
                <p className="font-[Lexend_Deca] text-white text-xs sm:text-sm font-semibold">{conquista.progressoAtual}/{conquista.meta}</p>
                <p className="font-[Momo_Trust_Display] text-white text-lg sm:text-xl font-bold">{conquista.pontos}pts</p>
            </div>
        </div>
    );
}

export default Conquista;