type TrajetoProps = {
    duracao: number
    tipo: string
    susicon: string
    sustentabilidade: string
    carbono: number
}

function Trajeto({ duracao, tipo, susicon, sustentabilidade, carbono }: TrajetoProps) {
    return (
        <article>
            <p>{duracao}</p> 
            <p>{tipo}</p>
            <div>
                <img src={susicon} alt="Icone da sustentabilidade" />
                <p>{sustentabilidade}</p>
            </div>
            <div>
                <p>{carbono}</p>
            </div>
        </article>
    );
}

export default Trajeto;