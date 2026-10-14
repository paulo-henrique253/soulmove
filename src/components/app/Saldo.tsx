type SaldoProps = {
    saldo: number
    descricao: string
}

function Saldo( {saldo, descricao}: SaldoProps) {
    return (
        <article className="grid">
            <h2 className="font-[Lexend_Deca] text-2xl text-white">R${saldo}</h2>
            <p className="font-[Lexend_Deca] text-[0.6rem] max-w-25 text-white">{descricao}</p>    
        </article>   
    );
}

export default Saldo;