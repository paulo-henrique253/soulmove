type PostagemProps = {
    icon: string
    usuario: string
    tempo: string
    imagem: string
}

function Postagem( {icon, usuario, tempo, imagem}: PostagemProps) {
    return (
        <article className="py-4">
        <div className="flex gap-2 py-2">
            <img src={icon} alt="Icone do usuário" className="w-10 border-indigo-500 border-2 rounded-4xl"/>
            <div className="flex flex-col">
                <p className="font-[Lexend_Deca] text-sm">{usuario}</p>
                <p className="font-[Lexend_Deca] text-[0.6rem] opacity-70">{tempo}</p>
            </div>
                <button className="ml-auto"><img src="/src/assets/pontinhos.png" alt="3 pontinhos" className="w-5 ml-auto"/></button>
        </div> 
            <img src={imagem} alt="Imagem da postagem" className=""/>
        </article>
    );
}

export default Postagem;