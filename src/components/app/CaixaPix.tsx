import { usuario } from "../../data/usuario";

let disponivel = false

if (usuario.saldoMobilidade >= 10) {
    disponivel = true 
}

function CaixaPix() {
    return (
        <article className="flex flex-col justify-center items-center gap-5">
            <div className="bg-indigo-500 drop-shadow-md/50 flex flex-col p-4 rounded-2xl">
                <p className="text-white font-[Lexend_Deca] mb-4">Colar código Pix</p>
                <input type="text" placeholder={disponivel ? "Cole o código Pix aqui..." : "Saldo Insuficiente!"} 
                    className="bg-indigo-700 border-white border placeholder:text-white placeholder:text-xs placeholder:opacity-80 p-5 rounded-2xl"/> 
            </div>

            <button className="bg-indigo-700 drop-shadow-md/50 text-white font-[Momo_Trust_Display] px-8 py-2 rounded-4xl">Confirmar recarga</button>
        </article>
    );
}

export default CaixaPix;