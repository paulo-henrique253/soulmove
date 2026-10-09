import { Link } from "react-router"

type MissaoProps = {
    titulo: string
    descricao: string
    tempo: string
    pontos: string
    imagem:string
}


function Missao( {titulo, descricao, tempo, pontos, imagem}: MissaoProps) {
    return (
        <div className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50">
            <img src={imagem} alt="Imagem de fundo da missão." className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-2xl"/>

            <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center">
                    <div>
                        <h2 className="text-white font-[Momo_Trust_Display] text-xl">{titulo}</h2>
                        <div className="border-white border-t-2 rounded-2xl"></div>
                    </div>
                    <img src="/src/assets/relogio_missao.png" alt="Indicação de conclusão." className="w-8 ml-auto"/>
                </div> 

                <p className="text-white font-[Lexend_Deca] text-[0.8rem] max-w-60 leading-4 mb-5">{descricao}</p>

                <div className="flex">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <Link to="/appMissao" className="text-indigo-500 text-xl font-[Momo_Trust_Display] bg-white px-6 py-3.5 rounded-2xl">Vamos lá?</Link>
                        <p className="text-white font-[Lexend_Deca] underline text-[0.6rem]">{tempo}</p>
                    </div>

                    <p className="text-white font-[Momo_Trust_Display] text-2xl absolute bottom-4 right-5">{pontos}pts</p>
                </div> 
            </div>

        </div>   
    );
}

export default Missao;