import { Link } from "react-router";

function FooterApp() {
    return (
        <footer className="flex gap-7 bg-white p-1 align-center justify-center">
            <Link to="/appInicio">
                <img src="/src/assets/homeicon.png" alt="Pictograma de casa." className="w-10"/>
            </Link>

            <img src="/src/assets/comunidadeicon.png" alt="Pictograma de pessoas." className="w-10"/>
            <button className="text-2xl text-white bg-indigo-500 px-5 rounded-2xl ">+</button>
            <img src="/src/assets/videosicon.png" alt="Pictograma de play." className="w-10"/>
            <img src="/src/assets/msgicon.png" alt="Pictograma de batao de fala." className="w-10"/>
        </footer>
    );
}

export default FooterApp;