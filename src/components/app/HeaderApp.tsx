import coelho from '../../assets/dani.png'
import { useUsuario } from '../../hooks/useUsuario';
function HeaderApp() {
    const { usuario } = useUsuario();

    return (
        <header className="flex gap-30 bg-white pb-3 px-5 items-center justify-center">
            <div className="flex items-center justify-center gap-2">
                <img src="/src/assets/carteiraicon.png" alt="Pictograma de carteira." className="w-7"/>
                <p className="font-[Lexend_Deca]">{usuario?.pontos}Pts</p>
                <img src="/src/assets/sacolinhaicon.png" alt="Pictograma de sacola." className="w-7"/>
            </div>

            <div className="flex items-center justify-center gap-4">
                <img src="/src/assets/lupa.png" alt="Pictograma de lupa." className="w-7"/>
                <img src="/src/assets/foguinho.png" alt="Pictograma de fogo." className="w-8"/>
                <img src={coelho} alt="Icone do usuário." className="w-12"/>
            </div>
        </header>  
    );
}

export default HeaderApp;