import { usuario } from "../../data/usuario";

let disponivel = false

if (usuario.saldoMobilidade >= 10) {
    disponivel = true 
}


function BotaoPix() {
    return (
        <a
            href={disponivel ? "https://www.sptrans.com.br/recarga" : "#"}
            target={disponivel ? "_blank" : ""}
            rel="noopener noreferrer"
            className={disponivel ? "text-center font-[Lexend_Deca] text-white py-3 rounded-4xl drop-shadow-md/50 bg-indigo-500" : "text-center font-[Lexend_Deca] text-white py-3 rounded-4xl drop-shadow-md/50 bg-gray-400"}
        >
            {disponivel ? "Gerar Pix na SPTrans" : "Saldo Insuficiente"}
        </a>
    );
}

export default BotaoPix;