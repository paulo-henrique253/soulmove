import { Link, Navigate } from "react-router"
import UsuarioNumeros from "../../components/app/UsuarioNumeros"
import { useUsuario } from "../../hooks/useUsuario";
import coelho from "../../assets/siricutico.png"
import SetaDireitaPreta from "../../assets/setadireitapreta.png";
import Postd1 from "/src/assets/postd1.png"
import Postd2 from "/src/assets/postd2.png"
import Postd3 from "/src/assets/postd3.png"
import Postd4 from "/src/assets/postd4.png"

function SmPerfil() {
    const { usuario } = useUsuario();

    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }

    return (
        <article className="min-h-full flex flex-col justify-between py-2">
            <div>
                <section>
                    <Link to="/appInicio" className="inline-block p-1 hover:opacity-75">
                        <img src={SetaDireitaPreta} alt="Seta para voltar" className="-scale-x-100 w-5" />
                    </Link>

                    <h1 className="text-gray-500 font-[Lexend_Deca] text-xl sm:text-2xl my-4 font-semibold">
                        @{usuario.nome}
                    </h1>

                    <div className="flex gap-4 items-center justify-start px-1">
                        <img 
                            src={coelho} 
                            alt="foto de perfil do usuário" 
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-indigo-200 object-cover shrink-0 shadow-xs"
                        />

                        <div className="flex flex-col gap-1">
                            <h2 className="font-[Momo_Trust_Display] text-lg font-bold text-gray-800">{usuario.nome}</h2>
                            <p className="font-[Lexend_Deca] text-indigo-600 text-xs font-medium">{usuario.titulo}</p>
                            <p className="font-[Lexend_Deca] text-gray-400 text-xs">sem descrição no momento</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-around mt-6 py-2 border-y border-gray-100">
                        <UsuarioNumeros numero={5} descricao="posts" />
                        <UsuarioNumeros numero={67} descricao="seguidores" />
                        <UsuarioNumeros numero={69} descricao="seguindo" />
                    </div>
                </section>

                <div className="flex items-center justify-center my-6">
                    <Link 
                        to="/appCarteira" 
                        className="font-[Lexend_Deca] text-center text-white bg-indigo-500 hover:bg-indigo-600 active:scale-98 transition-all py-2.5 px-8 rounded-2xl shadow-sm text-sm font-semibold"
                    >
                        Carteira
                    </Link>
                </div>

                <section className="mt-2">
                    <h3 className="text-indigo-600 font-[Momo_Trust_Display] text-lg sm:text-xl font-bold mb-3">
                        Posts
                    </h3>

                    <div className="grid grid-cols-2 gap-2.5 w-full">
                        <img src={Postd1} alt="miniatura de post" className="w-full h-32 sm:h-36 rounded-xl object-cover shadow-xs border border-gray-100"/>
                        <img src={Postd2} alt="miniatura de post" className="w-full h-32 sm:h-36 rounded-xl object-cover shadow-xs border border-gray-100"/>
                        <img src={Postd3} alt="miniatura de post" className="w-full h-32 sm:h-36 rounded-xl object-cover shadow-xs border border-gray-100"/>
                        <img src={Postd4} alt="miniatura de post" className="w-full h-32 sm:h-36 rounded-xl object-cover shadow-xs border border-gray-100"/>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default SmPerfil;