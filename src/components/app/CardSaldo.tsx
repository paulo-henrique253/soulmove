import { usuario } from "../../data/usuario";
import Saldo from "./Saldo";

type CardSaldoProps = {
    saldo: number
}

function CardSaldo({ saldo }: CardSaldoProps) {

    saldo = usuario.saldoMobilidade
    const faltante = 10 - saldo

    return (
        <article className="overflow-hidden bg-linear-to-r to-sky-400 from-indigo-500 p-5 text-white rounded-2xl drop-shadow-md/50 my-6 flex flex-col gap-1">
            <h2 className="font-[Momo_Trust_Display] text-md">Saldo de mobilidade</h2>
            <Saldo saldo={saldo} descricao=""></Saldo>
            <div className="border-t-6 border-white rounded-full mb-1"></div> {/* barra de compltar */}
            <p className="text-[0.65rem] font-[Lexend_Deca]">Faltam R${faltante.toFixed(2)} para liberar a recarga (mínimo R$10,00)</p>
        </article>
    );
}

export default CardSaldo;