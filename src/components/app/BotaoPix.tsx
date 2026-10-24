import { useUsuario } from "../../hooks/useUsuario";

function BotaoPix() {

    const { usuario } = useUsuario()

    let disponivel = false

    if (usuario && usuario.saldo >= 10) {
        disponivel = true 
    }

    return (
        <a
            href={disponivel ? "https://atendimento.sptrans.com.br/login" : "#"}
            target={disponivel ? "_blank" : ""}
            rel="noopener noreferrer"
            className={disponivel ? "text-center font-[Lexend_Deca] text-white py-3 rounded-4xl drop-shadow-md/50 bg-indigo-500" : "text-center font-[Lexend_Deca] text-white py-3 rounded-4xl drop-shadow-md/50 bg-gray-400"}
        >
            {disponivel ? "Gerar Pix na SPTrans" : "Saldo Insuficiente"}
        </a>
    );
}

export default BotaoPix;