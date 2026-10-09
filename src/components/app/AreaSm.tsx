import { Link } from "react-router";

function AreaSm() {
    return (
        <div className="flex gap-12 items-center justify-center px-5 py-4 -mx-4 bg-gray-100 border-gray-300 border-t-2">
            <Link  to="/appMissoes" className="font-[Lexend_Deca] text-indigo-500">
            Missões
            </Link> 

            <Link  to="/appCalculadora" className="font-[Lexend_Deca] text-indigo-500">
            Calculadora
            </Link> 

            <Link  to="/appConquistas" className="font-[Lexend_Deca] text-indigo-500">
            Conquistas
            </Link>             
        </div>   
    );
}

export default AreaSm;