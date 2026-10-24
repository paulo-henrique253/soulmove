import { Link } from "react-router"
import type { TipoMissao } from "../../types/missao";
import RelogioMissao from "../../assets/relogio_missao.png";

type MissaoProps = {
    missao: TipoMissao;
}

function Missao({ missao }: MissaoProps) {
    return (
        <div className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl flex flex-col justify-between gap-3 drop-shadow-md/50 my-4 overflow-hidden">
            <img 
                src={missao.linkImagem} 
                alt="Imagem de fundo da missão." 
                className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-2xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col gap-3 h-full justify-between">
                {/* Cabeçalho do Card */}
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                        <h2 className="text-white font-[Momo_Trust_Display] text-lg sm:text-xl font-bold leading-tight">
                            {missao.titulo}
                        </h2>
                        <div className="border-white border-t-2 rounded-2xl mt-1 w-full max-w-[140px]"></div>
                    </div>
                    <img src={RelogioMissao} alt="Indicação de conclusão." className="w-7 sm:w-8 shrink-0"/>
                </div> 

                {/* Descrição */}
                <p className="text-white font-[Lexend_Deca] text-xs sm:text-[0.85rem] leading-relaxed pr-2">
                    {missao.descricao}
                </p>

                {/* Rodapé do Card (Botão + Prazo à esquerda, Pontos à direita) */}
                <div className="flex items-end justify-between pt-2 mt-auto">
                    <div className="flex flex-col gap-1 items-start">
                        <Link 
                            to={`/appMissoes/${missao.id}`} 
                            className="text-indigo-500 text-base sm:text-xl font-[Momo_Trust_Display] font-bold bg-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-2xl shadow-sm hover:bg-gray-100 active:scale-95 transition-all text-center"
                        >
                            Vamos lá?
                        </Link>
                        <p className="text-white font-[Lexend_Deca] underline text-[0.7rem] sm:text-[0.75rem] pl-1">
                            {missao.prazo} dias
                        </p>
                    </div>

                    <p className="text-white font-[Momo_Trust_Display] text-2xl sm:text-3xl font-bold drop-shadow-sm whitespace-nowrap">
                        {missao.pontos}pts
                    </p>
                </div> 
            </div>
        </div>   
    );
}

export default Missao;