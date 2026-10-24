import Pontinhos from "../../assets/pontinhos.png";

type PostagemProps = {
    icon: string
    usuario: string
    tempo: string
    imagem: string
}

function Postagem({ icon, usuario, tempo, imagem }: PostagemProps) {
    return (
        <article className="py-3 w-full">
            <div className="flex items-center gap-2.5 py-2">
                <img src={icon} alt="Icone do usuário" className="w-9 h-9 sm:w-10 sm:h-10 border-indigo-500 border-2 rounded-full object-cover shrink-0"/>
                <div className="flex flex-col">
                    <p className="font-[Lexend_Deca] text-sm font-semibold text-gray-800">{usuario}</p>
                    <p className="font-[Lexend_Deca] text-[0.65rem] text-gray-500">{tempo}</p>
                </div>
                <button className="ml-auto p-1 hover:opacity-75 cursor-pointer">
                    <img src={Pontinhos} alt="3 pontinhos" className="w-5"/>
                </button>
            </div> 
            <img 
                src={imagem} 
                alt="Imagem da postagem" 
                className="w-full h-auto rounded-xl object-cover shadow-xs border border-gray-100"
            />
        </article>
    );
}

export default Postagem;