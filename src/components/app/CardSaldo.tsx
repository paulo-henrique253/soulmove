type CardSaldoProps = {
    saldo: number
}

function CardSaldo({ saldo }: CardSaldoProps) {

    const faltante = 10 - saldo

    return (
        <article>
            <h2>Saldo de mobilidade</h2>
            <p>R${saldo}</p>
            <span></span>
            <p>Faltam R${faltante.toFixed(2)} para liberar a recarga (mínimo R$10,00)</p>
        </article>
    );
}

export default CardSaldo;