import AreaSm from "../../components/app/AreaSm"
import Conquista from "../../components/app/Conquista"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Notificacao from "../../components/app/Notificacao"
import type { TipoConquista } from "../../types/conquista"
import { ListarConquistasUsuario } from "../../service/conquista"
import { useEffect, useState } from "react"
import { useUsuario } from '../../hooks/useUsuario';
import { Navigate } from 'react-router';
import SmIcon from "../../assets/smicon.png";

function SmConquistas() {
    const { usuario } = useUsuario();

    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }
    
    const [conquistas, setConquistas] = useState<TipoConquista[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        async function carregar() {
            setCarregando(true);
            setErro("");

            try {
                if (usuario) {
                    setConquistas(await ListarConquistasUsuario(usuario.id));
                }
            } catch (erro) {
                console.error("Não foi possível carregar as conquistas.", erro);
                setErro("Não foi possível carregar as conquistas.");
            } finally {
                setCarregando(false);
            }
        }
        carregar();
    }, [usuario]);

    if (carregando) {
        return (
            <article className="min-h-full flex flex-col justify-between">
                <div>
                    <HeaderApp />
                    <AreaSm />
                    <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display] text-center text-sm sm:text-base">
                        Carregando conquistas...
                    </div>
                </div>
                <FooterApp />
            </article>
        );
    }

    if (erro) {
        return (
            <article className="min-h-full flex flex-col justify-between">
                <div>
                    <HeaderApp />
                    <AreaSm />
                    <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display] text-center text-sm sm:text-base">
                        {erro}
                    </div>
                </div>
                <FooterApp />
            </article>
        );
    }

    if (conquistas.length === 0) {
        return (
            <article className="min-h-full flex flex-col justify-between">
                <div>
                    <HeaderApp />
                    <AreaSm />
                    <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display] text-center text-sm sm:text-base">
                        Nenhuma conquista encontrada.
                    </div>
                </div>
                <FooterApp />
            </article>
        );
    }

    return (
        <article className="min-h-full flex flex-col justify-between">
            <div>
                <HeaderApp />
                <AreaSm />

                <div className="bg-linear-to-t to-sky-200 from-indigo-300 -mx-4 px-4 sm:px-5 py-3 border-gray-300 border-t-2">
                    <Notificacao diretorio="#" texto="Você completou suas conquistas!" imagem={SmIcon} alt="icone do onibus"/>

                    <div className="flex flex-col gap-1 pb-4">
                        {conquistas.map((conquista) => (
                            <Conquista key={conquista.id} conquista={conquista} />
                        ))}
                    </div>
                </div>
            </div>

            <FooterApp />
        </article>
    );
}

export default SmConquistas;