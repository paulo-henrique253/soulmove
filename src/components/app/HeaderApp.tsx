type HeaderAppProps = {
    pontos: number
    icone: string
}

function HeaderApp( {pontos, icone}: HeaderAppProps) {
    return (
        <header>
            <div>
                <img src="imagem carteira" alt="Pictograma de carteira." />
                <p>{pontos}Pts</p>
                <img src="sacolinha" alt="Pictograma de sacola." />
            </div>

            <div>
                <img src="lupa" alt="Pictograma de lupa." />
                <img src="foguinho" alt="Pictograma de fogo." />
                <img src={icone} alt="Icone do usuário." />
            </div>
        </header>  
    );
}

export default HeaderApp;