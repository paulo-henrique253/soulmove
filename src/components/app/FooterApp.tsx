import { Link } from "react-router";
import HomeIcon from "../../assets/homeicon.png";
import ComunidadeIcon from "../../assets/comunidadeicon.png"
import VideosIcon from "../../assets/videosicon.png"
import MsgIcon from "../../assets/msgicon.png"

function FooterApp() {
    return (
        <footer className="flex justify-around items-center w-full bg-white py-2 px-1 border-t border-gray-100">
            <Link to="/appInicio" className="p-1 hover:opacity-80 transition-opacity">
                <img src={HomeIcon} alt="Pictograma de casa." className="w-7 sm:w-8"/>
            </Link>

            <div className="p-1 opacity-50">
                <img src={ComunidadeIcon} alt="Pictograma de pessoas." className="w-7 sm:w-8"/>
            </div>
            
            <button className="text-xl sm:text-2xl text-white bg-indigo-500 px-4 sm:px-5 rounded-2xl leading-none font-sans font-thin pt-1 pb-2 opacity-50 cursor-default">
                +
            </button>
            
            <div className="p-1 opacity-50">
                <img src={VideosIcon} alt="Pictograma de play." className="w-7 sm:w-8"/>
            </div>

            <Link to="/appPerfil" className="p-1 hover:opacity-80 transition-opacity">
                <img src={MsgIcon} alt="Pictograma de balao de fala." className="w-7 sm:w-8 opacity-100" />
            </Link>
        </footer>
    );
}

export default FooterApp;