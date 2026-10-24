import { useEffect, useState } from "react"
import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import type { TipoMissao } from "../../types/missao"
import Missao from "../../components/app/Missao"
import Notificacao from "../../components/app/Notificacao"
import { ListarMissoes } from "../../service/missao"
import { Navigate } from 'react-router';
import { useUsuario } from '../../hooks/useUsuario';
import SmIcon from "../../assets/smicon.png";

function SmMissoes() {
    const { usuario } = useUsuario();

    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }
    
    const [missoes, setMissoes] = useState<TipoMissao[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        async function carregar() {
            setCarregando(true);
            setErro("");

            try {
                setMissoes(await ListarMissoes());
            } catch (erro) {
                console.error("Não foi possível carregar as missões.", erro);
                setErro("Não foi possível carregar as missões.");
            } finally {
                setCarregando(false);
            }
        }
        carregar();
    }, []);

    if (carregando) {
        return (
            <article className="min-h-full flex flex-col justify-between">
                <div>
                    <HeaderApp />
                    <AreaSm />
                    <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display] text-center text-sm sm:text-base">
                        Carregando missões...
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

    if (missoes.length === 0) {
        return (
            <article className="min-h-full flex flex-col justify-between">
                <div>
                    <HeaderApp />
                    <AreaSm />
                    <div className="bg-linear-to-r to-sky-400 from-indigo-500 p-4 rounded-2xl drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display] text-center text-sm sm:text-base">
                        Nenhuma missão encontrada.
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
                    <Notificacao diretorio="#" texto="Você tem 2 missões diárias disponíveis!" imagem={SmIcon} alt="legenda sabor" />

                    <div className="flex flex-col gap-1 pb-4">
                        {missoes.map((missao) => (
                            <Missao key={missao.id} missao={missao} />
                        ))}
                    </div>
                </div>
            </div>

            <FooterApp />
        </article>
    );
}

export default SmMissoes;