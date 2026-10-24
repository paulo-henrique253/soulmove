import { Link } from "react-router";

type BotaoBolaProps = {
    imagem: string
    diretorio: string
    descricao: string
    alt: string
    funcional: boolean
}

function BotaoBola({ imagem, diretorio, descricao, alt, funcional }: BotaoBolaProps) {
    const opacityClass = funcional ? "opacity-100 hover:scale-105" : "opacity-50 cursor-default";

    return (
        <Link 
            to={funcional ? diretorio : "#"} 
            className={`flex flex-col items-center justify-start text-center transition-all ${opacityClass} flex-1 max-w-[76px]`}
        >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-500 p-3 sm:p-3.5 flex items-center justify-center shadow-xs">
                <img src={imagem} alt={alt} className="w-full h-full object-contain"/>
            </div>
            <p className="text-center text-[0.65rem] sm:text-[0.7rem] font-[Lexend_Deca] leading-tight mt-1.5 text-gray-700">
                {descricao}
            </p>
        </Link>
    );
}

export default BotaoBola;
