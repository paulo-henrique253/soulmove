import { usuario } from "../../data/usuario";
import { useUsuario } from "../../hooks/useUsuario";
import { recarregar } from "../../service/recarga";


let disponivel = false

if (usuario.saldoMobilidade >= 10) {
    disponivel = true 
}

function CaixaPix() {
    const {usuario} = useUsuario();
    return (
        <article className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="bg-indigo-500 drop-shadow-md/50 flex flex-col p-4 rounded-2xl w-full">
                <p className="text-white font-[Lexend_Deca] text-xs font-medium mb-2.5">Colar código Pix</p>
                <input 
                    id="inputPix"
                    type="text" 
                    placeholder={disponivel ? "Cole o código Pix aqui..." : "Saldo Insuficiente!"} 
                    className="w-full bg-indigo-700/80 border border-white/60 placeholder:text-white/70 placeholder:text-xs text-white text-xs p-3.5 rounded-xl outline-none focus:border-white"
                /> 
            </div>

            <button 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all drop-shadow-md/50 text-white font-[Momo_Trust_Display] text-sm font-bold px-8 py-3 rounded-2xl cursor-pointer"
            disabled={!disponivel}
            onClick={() => {
                const input = document.querySelector<HTMLInputElement>('#inputPix');
                if(input && usuario){
                    recarregar(input?.value, usuario?.id);
                }
            }}>
                
                Confirmar recarga
            </button>
        </article>
    );
}

export default CaixaPix;
