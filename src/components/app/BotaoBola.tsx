import { Link } from "react-router";


type BotaoBolaProps = {
    imagem: string
    diretorio: string
    descricao: string
    alt: string
}

function BotaoBola( { imagem, diretorio, descricao, alt }: BotaoBolaProps) {
    return (
        <Link to={diretorio} className="flex flex-col justify-center align-center items-center">
            <img src={imagem} alt={alt} className="w-20 rounded-[100rem] bg-indigo-500 p-5"/>
            <p className="text-center text-[0.6rem] font-[lexend_deca] leading-2.5 mt-1 max-w-15">{descricao}</p>
        </Link>
    );
}

export default BotaoBola;