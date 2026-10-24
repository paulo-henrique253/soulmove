type SaldoProps = {
    saldo: number
    descricao: string
}

function Saldo({ saldo, descricao }: SaldoProps) {
    return (
        <article className="flex flex-col">
            <h2 className="font-[Lexend_Deca] text-xl sm:text-2xl font-bold text-white">R$ {saldo.toFixed(2)}</h2>
            {descricao && (
                <p className="font-[Lexend_Deca] text-[0.65rem] sm:text-xs max-w-[130px] text-white/90 leading-tight mt-0.5">
                    {descricao}
                </p>
            )}
        </article>   
    );
}

export default Saldo;
