type TrajetoInputProps = {
    partida: string
    destino: string
    distancia: number
}

function TrajetoInput({ partida, destino, distancia }: TrajetoInputProps) {
    return (
        <article>
            <div>
                <h2>Trajeto</h2>
                <p>De: {partida}</p>
                <p>Até: {destino}</p>
            </div>

            <div>
                <h2>Distância:</h2>
                <p>{distancia}</p>
            </div>
        </article>
    );
}

export default TrajetoInput;