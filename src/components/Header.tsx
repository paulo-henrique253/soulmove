import { useState } from "react";
import MenuNavegacao from "./MenuNavegacao";
import SoulMove_Pequena from "../assets/SoulMove_Pequena.png"

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    function trocarMenu() {
        setMenuAberto(prev => !prev);
    }

    return (
        <header className="
        relative
        z-50
        w-full
        bg-linear-to-r
        from-sky-400
        to-indigo-500
        flex
        flex-col
        items-center
        justify-center
        gap-4
        p-4

        md:flex-row
        md:justify-between
        md:px-8
        ">

            <button 
                className="
                text-white
                absolute
                right-4
                top-4
                cursor-pointer
                bg-transparent
                text-3xl
                z-50
                p-1
                hover:opacity-80
                md:hidden
                "
                onClick={trocarMenu}
                aria-label="Abrir menu"
            >
                ☰
            </button>

            <img src={SoulMove_Pequena} alt="SoulMove Logo" className="block h-auto w-[clamp(120px,18vw,180px)]"/>

            <MenuNavegacao trocarMenu={trocarMenu} menuAberto={menuAberto} />

        </header>
    );
}

export default Header;