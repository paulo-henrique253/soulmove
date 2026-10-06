type BotaoBolaProps = {
    imagem: string
    descricao: string
    alt: string
}

function BotaoBola( { imagem, descricao, alt }: BotaoBolaProps) {
    return (
        <>
            <div>
                <img src={imagem} alt={alt} />
            </div>
            <p>{descricao}</p>  
        </>   
    );
}

export default BotaoBola;