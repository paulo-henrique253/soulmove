type PostagemProps = {
    icon: string
    usuario: string
    tempo: string
    imagem: string
}

function Postagem( {icon, usuario, tempo, imagem}: PostagemProps) {
    return (
        <>
        <div>
            <img src={icon} alt="Icone do usuário"/>
            <p>{usuario}</p>
            <p>{tempo}</p>
                <button><img src="/src/assets/pontinhos.png" alt="3 pontinhos" /></button>
        </div> 
        <img src={imagem} alt="Imagem da postagem" />
        </>
    );
}

export default Postagem;