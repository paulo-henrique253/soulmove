import { Link } from "react-router";

function FooterApp() {
    return (
        <footer className="flex gap-9 bg-white p-1 items-center justify-center">
            <Link to="/appInicio">
                <img src="/src/assets/homeicon.png" alt="Pictograma de casa." className="w-8"/>
            </Link>

            <img src="/src/assets/comunidadeicon.png" alt="Pictograma de pessoas." className="w-8"/>
            <button className="text-2   xl text-white bg-indigo-500 px-5 rounded-2xl leading-none font-sans font-thin pt-1 pb-2">+</button>
            <img src="/src/assets/videosicon.png" alt="Pictograma de play." className="w-8"/>
            <img src="/src/assets/msgicon.png" alt="Pictograma de batao de fala." className="w-8"/>
        </footer>
    );
}

export default FooterApp;