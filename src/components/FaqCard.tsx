import { useState } from "react"

type FaqCardProps = {
    pergunta: string,
    resposta: string,
}

function FaqCard({pergunta, resposta}: FaqCardProps) {
    const [ativo, setAtivo] = useState(false);

    function trocarPergunta(){
        setAtivo(!ativo)
    }

return(
    <div className="w-75 h-min md:h-auto md:w-90 bg-linear-to-r from-sky-400 to-indigo-500 text-white [box-shadow:5px_5px_10px_0px_rgba(37,59,121,0.3)] rounded-2xl p-4">
        <button 
            className="w-full sm:h-20 md:h-auto bg-indigo-600/30 rounded-xl px-5 py-3 font-['Momo_Trust_Display'] text-lg text-white"
            onClick={trocarPergunta}
        >{pergunta}</button>
        <p className= {`${(ativo) ? "" : "hidden"} md:block px-3 pt-3 text-center font-['Lexend_Deca'] text-white`}
        >{resposta}</p>
    </div>
)
}

export default FaqCard