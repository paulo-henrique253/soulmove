type SessaoCarteiraProps = {
    icone: string
    alt: string
    titulo: string
    descricao: string
}

function SessaoCarteira( {icone, alt, titulo, descricao}: SessaoCarteiraProps) {
    return (
        <div className="flex justify-between items-center gap-3">
            <img src={icone} alt={alt} className="w-6 h-6"/>
            <div className="flex flex-col mr-auto">
                <h3  className="font-[Lexend_Deca] text-[0.7rem]">{titulo}</h3>
                <p className="font-[Lexend_Deca] text-[0.7rem]">{descricao}</p>
            </div>
            <img src="/src/assets/setadireitapreta.png" alt="Seta para a esquerda." className="w-3 h-3" />
        </div>   
    );
}

export default SessaoCarteira;