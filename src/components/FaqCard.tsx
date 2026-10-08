type FaqCardProps = {
    pergunta: string,
    resposta: string,
    index: number
}

function FaqCard({pergunta, resposta, index}: FaqCardProps) {
    {/* mudar para usestate */}
    function trocarPergunta(){
        const resp = document.querySelector(`#resposta${index}`);
        resp?.classList.toggle("hidden")
    }
return(
    <div className="w-75 h-min md:h-auto md:w-90 bg-linear-to-t from-indigo-500 to-sky-400 rounded-2xl p-4">
        <button 
            className="w-full sm:h-20 md:h-auto bg-white rounded-4xl px-5 py-3 font-['Momo_Trust_Display'] text-lg"
            onClick={trocarPergunta}
        >{pergunta}</button>
        <p className="hidden md:block px-3 pt-3 text-center font-['Lexend_Deca'] text-black"
            id={`resposta${index}`}
        >{resposta}</p>
    </div>
)
}

export default FaqCard