import { Link } from "react-router";

function AreaSm() {
    return (
        <>
            <Link  to="/appMissoes">
            Missões
            </Link> 

            <Link  to="/appCalculadora">
            Calculadora
            </Link> 

            <Link  to="/appConquistas">
            Conquistas
            </Link>             
        </>   
    );
}

export default AreaSm;