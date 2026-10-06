type SaldoProps = {
    saldo: number
    descricao: string
}

function Saldo( {saldo, descricao}: SaldoProps) {
    return (
        <>
            <h2>{saldo}</h2>
            <p>{descricao}</p>    
        </>   
    );
}

export default Saldo;