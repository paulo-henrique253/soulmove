import { Link, Navigate } from "react-router"
import UsuarioNumeros from "../../components/app/UsuarioNumeros"
import { useUsuario } from "../../hooks/useUsuario";
import coelho from "../../assets/siricutico.png"
import SetaDireitaPreta from "../../assets/setadireitapreta.png";
import Postd1 from "/src/assets/postd1.png"
import Postd2 from "/src/assets/postd2.png"
import Postd3 from "/src/assets/postd3.png"
import Postd4 from "/src/assets/postd4.png"

const estiloPosts = "rounded-xl w-40"

function SmPerfil() {
    const {usuario} = useUsuario();

    if(!usuario){
    return <Navigate to={'/applogin'} />;
    }

    return (
        <article>

            <section>
                <Link to="/appInicio">
                    <img src={SetaDireitaPreta} alt="Seta para voltar" className="-scale-x-100 w-5" />
                </Link>

                <h1 className="text-gray-400 font-[Lexend_Deca] text-2xl my-7">@{usuario.nome}</h1>

                <div className="flex gap-2 items-center justify-center">
                    <img src={coelho} alt="foto de perfil do usuário" className="w-30 rounded-full border-2 border-gray-200"/>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-[Momo_Trust_Display]">{usuario.nome}</h2>
                        <p className="font-[Lexend_Deca] text-indigo-500 text-[0.7rem]">{usuario.titulo}</p>
                        <p className="font-[Lexend_Deca] text-gray-400 text-[0.7rem]">{"sem descricao no momento"}</p>
                    </div>
                </div>

                <div className="flex items-center justify-around mt-4">
                    <UsuarioNumeros numero={5} descricao="posts" />
                    <UsuarioNumeros numero={67} descricao="seguidores" />
                    <UsuarioNumeros numero={69} descricao="seguindo" />
                </div>
            </section>

            <div className="flex items-center justify-center">
                <Link to="/appCarteira" className=" font-[Lexend_Deca] center text-white bg-indigo-500 py-2 px-6 rounded-2xl my-7">
                    Carteira
                </Link>
            </div>

            <section>
                <h3 className="text-indigo-500 font-[Momo_Trust_Display] text-xl mb-2">Posts</h3>

                <div className="flex flex-wrap justify-center items-center gap-2">
                    <img src={Postd1} alt="miniatura de post" className={estiloPosts}/>
                    <img src={Postd2} alt="miniatura de post" className={estiloPosts} />
                    <img src={Postd3} alt="miniatura de post" className={estiloPosts} />
                    <img src={Postd4} alt="miniatura de post" className={estiloPosts} />
                </div>
            </section>
        </article>
    )
}

export default SmPerfil