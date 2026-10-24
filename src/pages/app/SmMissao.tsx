import { useEffect, useState } from "react"
import { useParams, Navigate, Link } from "react-router"
import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import { useUsuario } from "../../hooks/useUsuario"
import { ObterMissao } from "../../service/missao"
import type { TipoMissao } from "../../types/missao"

function SmMissao() {
    const { slug } = useParams();
    const { usuario } = useUsuario();
    const [missao, setMissao] = useState<TipoMissao | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }

    useEffect(() => {
        async function carregar() {
            setCarregando(true);
            setErro(null);

            try {
                const dados = await ObterMissao(Number(slug));
                setMissao(dados);
            } catch (erro) {
                console.error("Não foi possível carregar a missão.", erro);
                setErro("Não foi possível carregar a missão.");
            } finally {
                setCarregando(false);
            }
        }
        carregar();
    }, [slug]);

    if (carregando) {
        return (
            <article>
                <HeaderApp />
                <AreaSm />
                <p className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display]">
                    Carregando missão...
                </p>
                <FooterApp />
            </article>
        )
    }

    if (erro || !missao) {
        return (
            <article>
                <HeaderApp />
                <AreaSm />
                <p className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display]">
                    {erro ?? "Missão não encontrada."}
                </p>
                <FooterApp />
            </article>
        )
    }

    return (
        <article>
            <HeaderApp />
            <AreaSm />

            <div className="flex flex-col items-center -mx-4">
                {/* Seta voltar + Imagem da missão */}
                <div className="relative w-full">
                    <Link to="/appMissoes" className="absolute top-4 left-4 z-10">
                        <img src="/src/assets/setaesquerda.png" alt="Voltar" className="w-8" />
                    </Link>
                    <img
                        src={missao.linkImagem}
                        alt={missao.titulo}
                        className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                </div>

                {/* Título da missão */}
                <h1 className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-sky-400 font-[Momo_Trust_Display] text-3xl mt-4 text-center">
                    {missao.titulo}
                </h1>

                {/* Status */}
                <p className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-sky-400 font-[Momo_Trust_Display] text-lg mt-2 text-center underline">
                    Status: CONCLUÍDA!
                </p>
                <div className="w-40 h-0.5 bg-linear-to-r from-indigo-500 to-sky-400 rounded-full mt-2" />

                {/* Botão de comprovação */}
                <button
                    type="button"
                    className="bg-white rounded-3xl drop-shadow-md/50 px-10 py-6 flex flex-col items-center gap-2 mt-6 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                    <p className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-sky-400 font-[Momo_Trust_Display] text-lg">
                        Comprove<br />sua ação!
                    </p>
                    <img src="/src/assets/icondocroxo.png" alt="Ícone de upload" className="w-14 mt-1" />
                    <p className="text-gray-400 font-[Lexend_Deca] text-sm mt-1">max. de 50mb</p>
                </button>

                {/* Recompensa */}
                <h3 className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-sky-400 font-[Momo_Trust_Display] text-xl mt-6">
                    Você receberá:
                </h3>
                <span className="bg-linear-to-r from-indigo-500 to-sky-400 text-white font-[Momo_Trust_Display] text-lg px-6 py-2 rounded-full mt-2 mb-6">
                    {missao.pontos}Pts
                </span>
            </div>

            <FooterApp />
        </article>
    )
}

export default SmMissao