import { Link } from "react-router";


const estilosLink = `
        font-['Momo_Trust_Display']
        text-black
        hover:opacity-80
        text-[clamp(1.2rem,5vw,2rem)]
        font-normal
        no-underline
        whitespace-nowrap
        text-center
        md:text-[.8rem]
        lg:text-[1rem]
    `;

function SmInicio () {
    return (
        <article>
            <Link to="/appCalculadora" className={estilosLink}>
                Calculadora
            </Link>

            <Link to="/appCarteira" className={estilosLink}>
                Carteira
            </Link>

            <Link to="/appConquistas" className={estilosLink}>
                Conquistas
            </Link>

            <Link to="/appMissoes" className={estilosLink}>
                Missoes
            </Link>

            <Link to="/appPerfil" className={estilosLink}>
                Perfil
            </Link>

            <Link to="/appRecarga" className={estilosLink}>
                Recarga
            </Link>
        </article>
    )
}

export default SmInicio