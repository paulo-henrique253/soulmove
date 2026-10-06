function HeaderApp() {
    return (
        <header className="flex gap-30 bg-white p-1 align-center justify-center">
            <div className="flex">
                <img src="/src/assets/carteiraicon.png" alt="Pictograma de carteira." className="w-7 h-7"/>
                <p>100Pts</p>
                <img src="/src/assets/sacolinhaicon.png" alt="Pictograma de sacola." className="w-7 h-7"/>
            </div>

            <div className="flex">
                <img src="/src/assets/lupa.png" alt="Pictograma de lupa." className="w-7 h-7"/>
                <img src="/src/assets/foguinho.png" alt="Pictograma de fogo." className="w-8 h-8"/>
                <img src="/src/assets/userpfp.png" alt="Icone do usuário." className="w-12 h-12"/>
            </div>
        </header>  
    );
}

export default HeaderApp;