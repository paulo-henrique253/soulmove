import { Link } from "react-router"
import { usuario } from "../../data/usuario"
import UsuarioNumeros from "../../components/app/UsuarioNumeros"

const estiloPosts = "rounded-xl w-40"

function SmPerfil() {
    return (
        <article>

            <section>
                <Link to="/appInicio">
                    <img src="/src/assets/setadireitapreta.png" alt="Seta para voltar" className="-scale-x-100 w-5" />
                </Link>

                <h1 className="text-gray-400 font-[Lexend_Deca] text-2xl my-7">@{usuario.usuario}</h1>

                <div className="flex gap-2 items-center justify-center">
                    <img src={usuario.fotoPfp} alt="foto de perfil do usuário" className="w-30 rounded-full border-2 border-gray-200"/>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-[Momo_Trust_Display]">{usuario.nomeExibicao}</h2>
                        <p className="font-[Lexend_Deca] text-indigo-500 text-[0.7rem]">{usuario.titulo}</p>
                        <p className="font-[Lexend_Deca] text-gray-400 text-[0.7rem]">{usuario.descricao}</p>
                    </div>
                </div>

                <div className="flex items-center justify-around mt-4">
                    <UsuarioNumeros numero={usuario.nPosts} descricao="posts" />
                    <UsuarioNumeros numero={usuario.seguidores} descricao="seguidores" />
                    <UsuarioNumeros numero={usuario.seguindo} descricao="seguindo" />
                </div>
            </section>

            <div className="flex items-center justify-center">
                <Link to="/appCarteira" className="center text-white bg-indigo-500 py-2 px-6 rounded-2xl my-7">
                    Carteira
                </Link>
            </div>

            <section>
                <h3 className="text-indigo-500 font-[Momo_Trust_Display] text-xl mb-2">Posts</h3>

                <div className="flex flex-wrap justify-center items-center gap-2">
                    <img src="/src/assets/postd1.png" alt="miniatura de post" className={estiloPosts}/>
                    <img src="/src/assets/postd2.png" alt="miniatura de post" className={estiloPosts} />
                    <img src="/src/assets/postd3.png" alt="miniatura de post" className={estiloPosts} />
                    <img src="/src/assets/postd4.png" alt="miniatura de post" className={estiloPosts} />
                </div>
            </section>
        </article>
    )
}

export default SmPerfil