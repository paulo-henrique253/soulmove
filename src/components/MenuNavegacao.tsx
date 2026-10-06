import { Link } from "react-router";

type MenuNavegacaoProps = {
    trocarMenu: () => void;
};

function MenuNavegacao({ trocarMenu }: MenuNavegacaoProps) {

    const estilosLink = `
        font-['Momo_Trust_Display']
        text-white
        hover:opacity-80
        text-[clamp(1.2rem,5vw,2rem)]
        font-normal
        no-underline
        whitespace-nowrap
        text-center
        md:text-[.8rem]
        lg:text-[1rem]
    `;

    return (

        <nav
            className="
                fixed
                inset-0
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                gap-8
                p-5
               bg-indigo-500/80

                md:static
                md:flex-row
                md:gap-2
                md:rounded-none
                md:bg-transparent
                md:p-0
                md:w-auto
                md:h-auto
                md:flex
                lg:gap-5
            "
            id="menu"
        >

            <button
                onClick={trocarMenu}
                className="
                    absolute
                    right-5
                    top-3
                    text-4xl
                    text-white
                    cursor-pointer
                    md:hidden
                "
            >
                ×
            </button>

            <Link to="/" className={estilosLink}>
                Início
            </Link>

            <Link to="/sobre" className={estilosLink}>
                A SoulMove
            </Link>

            <Link to="/funcionalidades" className={estilosLink}>
                Como Funciona
            </Link>

            <Link to="/appInicio" className={estilosLink}>
                Nossa Aplicação
            </Link>

            <Link to="/roadmap" className={estilosLink}>
                Visão de Futuro
            </Link>

            <Link to="/integrantes" className={estilosLink}>
                Nosso Time
            </Link>

            <Link to="/faq" className={estilosLink}>
                FAQ
            </Link>

            <Link to="/contato" className={estilosLink}>
                Contato
            </Link>

        </nav>
    );
}

export default MenuNavegacao;