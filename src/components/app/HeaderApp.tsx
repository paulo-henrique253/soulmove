import coelho from '../../assets/siricutico.png'
import { useUsuario } from '../../hooks/useUsuario';
import CarteiraIcon from "../../assets/carteiraicon.png";
import SacolinhaIcon from "../../assets/sacolinhaicon.png"
import Lupa from "../../assets/lupa.png";
import Foguinho from "../../assets/foguinho.png";

function HeaderApp() {
    const { usuario } = useUsuario();

    return (
        <header className="flex justify-between items-center w-full bg-white pb-3 px-1 sm:px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
                <img src={CarteiraIcon} alt="Pictograma de carteira." className="w-6 sm:w-7"/>
                <p className="font-[Lexend_Deca] text-sm sm:text-base font-medium">{usuario?.pontos}Pts</p>
                <img src={SacolinhaIcon} alt="Pictograma de sacola." className="w-6 sm:w-7"/>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
                <img src={Lupa} alt="Pictograma de lupa." className="w-6 sm:w-7"/>
                <img src={Foguinho} alt="Pictograma de fogo." className="w-6 sm:w-7"/>
                <img src={coelho} alt="Icone do usuário." className="w-10 sm:w-11"/>
            </div>
        </header>  
    );
}

export default HeaderApp;