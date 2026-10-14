import { Link } from "react-router"
import { usuario } from "../../data/usuario"
import UsuarioNumeros from "../../components/app/UsuarioNumeros"

function SmPerfil() {
    return (
        <article>

            <section>
                <Link to="/appInicio">
                    <img src="/src/assets/setadireitapreta.png" alt="Seta para voltar" className="-scale-x-100 w-7" />
                </Link>

                <h1>@{usuario.usuario}</h1>

                <div>
                    <img src={usuario.fotoPfp} alt="foto de perfil do usuário" />

                    <div>
                        <h2>{usuario.nomeExibicao}</h2>
                        <p>{usuario.titulo}</p>
                        <p>{usuario.descricao}</p>
                    </div>

                    <div>
                        <UsuarioNumeros numero={usuario.nPosts} descricao="posts" />
                        <UsuarioNumeros numero={usuario.seguidores} descricao="seguidores" />
                        <UsuarioNumeros numero={usuario.seguindo} descricao="seguindo" />
                    </div>
                </div>
            </section>

            <section>
                <h3>Posts</h3>

                <div>
                    <img src="/src/assets/postd1.png" alt="miniatura de post" />
                    <img src="/src/assets/postd2.png" alt="miniatura de post" />
                    <img src="/src/assets/postd3.png" alt="miniatura de post" />
                    <img src="/src/assets/postd4.png" alt="miniatura de post" />
                </div>
            </section>
        </article>
    )
}

export default SmPerfil