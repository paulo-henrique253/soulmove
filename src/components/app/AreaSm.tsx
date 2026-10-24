import { Link } from "react-router";

function AreaSm() {
    return (
        <div className="flex justify-around items-center px-2 py-3.5 -mx-4 bg-gray-100 border-gray-300 border-t-2">
            <Link to="/appMissoes" className="font-[Lexend_Deca] text-indigo-500 text-sm sm:text-base hover:text-indigo-700 transition-colors">
                Missões
            </Link> 

            <Link to="/appCalculadora" className="font-[Lexend_Deca] text-indigo-500 text-sm sm:text-base hover:text-indigo-700 transition-colors">
                Calculadora
            </Link> 

            <Link to="/appConquistas" className="font-[Lexend_Deca] text-indigo-500 text-sm sm:text-base hover:text-indigo-700 transition-colors">
                Conquistas
            </Link>             
        </div>   
    );
}

export default AreaSm;
