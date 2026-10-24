import { recarregar } from "../../service/recarga";
import { useState } from "react";
import { useUsuario } from "../../hooks/useUsuario";
import ErroLabel from "./ErroLabel";

function CaixaPix() {
    const [carregando, setCarregando] = useState(false)
    const [carregado, setCarregado] = useState(false)
    const [erro, setErro] = useState<string | null>(null)
    
    const { usuario } = useUsuario()

    let disponivel = false

    if (usuario && usuario.saldo >= 10) {
        disponivel = true 
    }
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
            {erro && (<ErroLabel message={erro}/>)}
            <button 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all drop-shadow-md/50 text-white font-[Momo_Trust_Display] text-sm font-bold px-8 py-3 rounded-2xl cursor-pointer"
            disabled={!disponivel}
            onClick={async () => {
                try{
                const input = document.querySelector<HTMLInputElement>('#inputPix');
                if(input && usuario){
                    setCarregado(false)
                    setCarregando(true);
                    setCarregado(await recarregar(input?.value, usuario?.id));
                    setErro("Recarregado com sucesso");
                    
                    
                }
            }catch(error){
                if (error instanceof Error){
                    setErro("Erro: " + error.message)
                }
            }
            finally{
                setCarregando(false)
            }
            }}>
                
                {carregando? "Carregando..." : (carregado? "RecargaEfetuada": "Confirmar recarga")}
            </button>
        </article>
    );
}

export default CaixaPix;
