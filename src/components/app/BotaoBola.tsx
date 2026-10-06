import { Link } from "react-router";


type BotaoBolaProps = {
    imagem: string
    diretorio: string
    descricao: string
    alt: string
}

function BotaoBola( { imagem, diretorio, descricao, alt }: BotaoBolaProps) {
    return (
        <>
            <Link to={diretorio} className="">
                <img src={imagem} alt={alt} />
                {descricao}
            </Link>
        </>   
    );
}

export default BotaoBola;