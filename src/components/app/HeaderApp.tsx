import coelho from '../../assets/siricutico.png'
import { useUsuario } from '../../hooks/useUsuario';
import CarteiraIcon from "../../assets/carteiraicon.png";
import SacolinhaIcon from "../../assets/sacolinhaicon.png"
import Lupa from "../../assets/lupa.png";
import Foguinho from "../../assets/foguinho.png";


function HeaderApp() {
    const { usuario } = useUsuario();

    return (
        <header className="flex gap-30 bg-white pb-3 px-5 items-center justify-center">
            <div className="flex items-center justify-center gap-2">
                <img src={CarteiraIcon} alt="Pictograma de carteira." className="w-7"/>
                <p className="font-[Lexend_Deca]">{usuario?.pontos}Pts</p>
                <img src={SacolinhaIcon} alt="Pictograma de sacola." className="w-7"/>
            </div>

            <div className="flex items-center justify-center gap-4">
                <img src={Lupa} alt="Pictograma de lupa." className="w-7"/>
                <img src={Foguinho} alt="Pictograma de fogo." className="w-8"/>
                <img src={coelho} alt="Icone do usuário." className="w-12"/>
            </div>
        </header>  
    );
}

export default HeaderApp;