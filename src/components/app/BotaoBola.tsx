import { Link } from "react-router";


type BotaoBolaProps = {
    imagem: string
    diretorio: string
    descricao: string
    alt: string
}

function BotaoBola( { imagem, diretorio, descricao, alt }: BotaoBolaProps) {
    return (
        <div className="">
            <Link to={diretorio} className="flex flex-col justify-center align-center items-center">
                <img src={imagem} alt={alt} className="w-15 rounded-4xl bg-indigo-500 p-3"/>
                <p className="text-center text-xs font-bold">{descricao}</p>
            </Link>
        </div>   
    );
}

export default BotaoBola;