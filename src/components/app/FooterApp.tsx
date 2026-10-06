import { Link } from "react-router";

type FooterAppProps = {
}

function FooterApp( {}: FooterAppProps) {
    return (
        <footer>
            <Link to="/appInicio">
                <img src="home" alt="Pictograma de casa." />
            </Link>

            <img src="comunidade" alt="Pictograma de pessoas." />
            <button>+</button>
            <img src="stories" alt="Pictograma de play." />
            <img src="mensagens" alt="Pictograma de batao de fala." />
        </footer>
    );
}

export default FooterApp;