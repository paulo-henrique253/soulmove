type ConquistaProps = {
    titulo: string
    descricao: string
    progresso: number
    total: number
    pontos: number
    icone: string
    recompensas: string
}

function Conquista({ titulo, descricao, progresso, total, pontos, icone, recompensas }: ConquistaProps) {
    return (
        <article>
            <div>
                <div>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>

                <img src={icone} alt="Icone de completo" />
            </div>

            <div>
                <p>{progresso}/{total}</p>
                <span></span> {/* barrinha de progresso */}
                <p>{pontos}pts</p>
            </div>

            {/* accordion */}

            <div>
                <li>
                    <div>{recompensas}</div>
                </li>
            </div>
        </article>
    );
}

export default Conquista;