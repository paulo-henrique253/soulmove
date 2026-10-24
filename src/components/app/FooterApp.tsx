import { Link } from "react-router";
import HomeIcon from "../../assets/homeicon.png";
import ComunidadeIcon from "../../assets/comunidadeicon.png"
import VideosIcon from "../../assets/videosicon.png"
import MsgIcon from "../../assets/msgicon.png"


function FooterApp() {
    return (
        <footer className="flex gap-9 bg-white p-1 items-center justify-center">
            <Link to="/appInicio">
                <img src={HomeIcon} alt="Pictograma de casa." className="w-8"/>
            </Link>

            <img src={ComunidadeIcon} alt="Pictograma de pessoas." className="w-8 opacity-50"/>
            <button className="text-2   xl text-white bg-indigo-500 px-5 rounded-2xl leading-none font-sans font-thin pt-1 pb-2 opacity-50">+</button>
            <img src={VideosIcon} alt="Pictograma de play." className="w-8 opacity-50"/>

            <Link to="/appPerfil">
                <img src={MsgIcon} alt="Pictograma de batao de fala." className="w-8 opacity-100" />
            </Link>
        </footer>
    );
}

export default FooterApp;