type BotaoBolaProps = {
    imagem: string
    descricao: string
}

function BotaoBola( { imagem, descricao }: BotaoBolaProps) {
    return (
        <>
            <div>
                {imagem}
            </div>
            <p>{descricao}</p>  
        </>   
    );
}

export default BotaoBola;