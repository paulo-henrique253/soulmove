type SessaoCarteiraProps = {
    icone: string
    alt: string
    titulo: string
    descricao: string
}

function SessaoCarteira( {icone, alt, titulo, descricao}: SessaoCarteiraProps) {
    return (
        <>
            <img src={icone} alt={alt} />
            <div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
            <img src="setinha" alt="Seta para a esquerda." />
        </>   
    );
}

export default SessaoCarteira;