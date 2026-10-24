import { Link } from "react-router";
import { useUsuario } from "../hooks/useUsuario";

type MenuNavegacaoProps = {
    trocarMenu: () => void;
    menuAberto?: boolean;
};

function MenuNavegacao({ trocarMenu, menuAberto = false }: MenuNavegacaoProps) {
    const { usuario } = useUsuario();

    const estilosLink = `
        font-['Momo_Trust_Display']
        text-white
        hover:opacity-80
        text-xl
        sm:text-2xl
        font-normal
        no-underline
        whitespace-nowrap
        text-center
        py-1
        md:text-xs
        lg:text-sm
        md:py-0
        transition-opacity
    `;

    return (
        <nav
            className={`
                ${menuAberto ? "flex" : "hidden"}
                fixed
                inset-0
                z-50
                w-full
                h-screen
                flex-col
                items-center
                justify-center
                gap-5
                p-6
                bg-indigo-600
                overflow-y-auto

                md:static
                md:flex
                md:flex-row
                md:flex-wrap
                md:items-center
                md:justify-end
                md:gap-3
                lg:gap-5
                md:bg-transparent
                md:p-0
                md:w-auto
                md:h-auto
                md:overflow-visible
                md:z-auto
            `}
            id="menu"
        >
            <button
                type="button"
                onClick={trocarMenu}
                className="
                    absolute
                    right-5
                    top-5
                    text-4xl
                    text-white
                    cursor-pointer
                    p-2
                    hover:opacity-80
                    md:hidden
                "
                aria-label="Fechar menu"
            >
                ×
            </button>

            <Link to="/" className={estilosLink} onClick={trocarMenu}>
                Início
            </Link>

            <Link to="/sobre" className={estilosLink} onClick={trocarMenu}>
                A SoulMove
            </Link>

            <Link to="/funcionalidades" className={estilosLink} onClick={trocarMenu}>
                Como Funciona
            </Link>

            <Link to="/appInicio" className={estilosLink} onClick={trocarMenu}>
                Nossa Aplicação
            </Link>

            <Link to="/roadmap" className={estilosLink} onClick={trocarMenu}>
                Visão de Futuro
            </Link>

            <Link to="/integrantes" className={estilosLink} onClick={trocarMenu}>
                Nosso Time
            </Link>

            <Link to="/faq" className={estilosLink} onClick={trocarMenu}>
                FAQ
            </Link>

            <Link to="/contato" className={estilosLink} onClick={trocarMenu}>
                Contato
            </Link>
            
            <Link to="/login" className={estilosLink} onClick={trocarMenu}>
                Login
            </Link>
            
            {usuario?.isAdm && (
                <Link to="/adm" className={`${estilosLink} justify-self-end`} onClick={trocarMenu}>
                    Administrador
                </Link>
            )}
        </nav>
    );
}

export default MenuNavegacao;