type NotificacaoProps = {
    texto: string
    imagem: string
    alt: string
}

function Notificacao( {texto, imagem, alt}: NotificacaoProps) {
    return (
        <>
        <img src={imagem} alt={alt} />
        <p>{texto}</p>
        </>   
    );
}

export default Notificacao;