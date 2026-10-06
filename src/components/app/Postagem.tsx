type PostagemProps = {
    icon: string
    alt: string
    usuario: string
    tempo: string
    imagem: string
}

function Postagem( {icon, alt, usuario, tempo, imagem}: PostagemProps) {
    return (
        <>
        <div>
            <img src={icon} alt={alt}/>
            <p>{usuario}</p>
            <p>{tempo}</p>
        </div> 
        <img src={imagem} alt="" />
        </>   
    );
}

export default Postagem;