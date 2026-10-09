import { Link, Links } from "react-router"

type NotificacaoProps = {
    texto: string
    imagem: string
    alt: string
    diretorio: string
}

function Notificacao( {texto, imagem, alt, diretorio}: NotificacaoProps) {
    return (
        <Link to={diretorio}>
        <div className="bg-linear-to-r to-sky-400 from-indigo-500 my-6 flex py-3 px-2 gap-2 items-center justify-center rounded-2xl drop-shadow-md/50">
            <img src={imagem} alt={alt} className="w-10 bg-blue-400 rounded-4xl p-1"/>
            <p className="text-white font-[Lexend_Deca] text-sm">{texto}</p>
        </div>   
        </Link>
    );
}

export default Notificacao;