import { Link } from "react-router";


type BotaoBolaProps = {
    imagem: string
    diretorio: string
    descricao: string
    alt: string
    funcional: boolean
}

const seFuncional = "flex flex-col justify-center align-center items-center opacity-100"
const naoFuncional = "flex flex-col justify-center align-center items-center opacity-50"

function BotaoBola( { imagem, diretorio, descricao, alt, funcional }: BotaoBolaProps) {
    return (
        <Link to={diretorio} className={funcional ? seFuncional : naoFuncional}>
            <img src={imagem} alt={alt} className="w-20 rounded-[100rem] bg-indigo-500 p-5"/>
            <p className="text-center text-[0.6rem] font-[lexend_deca] leading-2.5 mt-1 max-w-15">{descricao}</p>
        </Link>
    );
}

export default BotaoBola;