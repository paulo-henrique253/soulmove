type PostagemProps = {
    icon: string
    altIcon: string
    usuario: string
    tempo: string
    imagem: string
    altImg: string
}

function Postagem( {icon, altIcon, usuario, tempo, imagem, altImg}: PostagemProps) {
    return (
        <>
        <div>
            <img src={icon} alt={altIcon}/>
            <p>{usuario}</p>
            <p>{tempo}</p>
        </div> 
        <img src={imagem} alt={altImg} />
        </>   
    );
}

export default Postagem;