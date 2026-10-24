
import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate } from "react-router";
import AreaSm from "../../components/app/AreaSm";
import FooterApp from "../../components/app/FooterApp";
import HeaderApp from "../../components/app/HeaderApp";
import { useUsuario } from "../../hooks/useUsuario";
import { simularViagem } from "../../service/viagem";
import type { TipoViagem } from "../../types/viagem";

const veiculos = [
    "Carro",
    "Moto",
    "Onibus",
    "Metro",
    "Trem",
    "Bicicleta",
];

type ResultadoSimulacao = {
    veiculo: string;
    viagem?: TipoViagem;
    erro?: string;
};

function SmCalculadora() {
    const { usuario } = useUsuario();

    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [resultados, setResultados] = useState<ResultadoSimulacao[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    function formatarNumero(valor: number): string {
        return valor.toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
        });
    }

    if (!usuario) {
        return <Navigate to="/applogin" />;
    }

    const usuarioId = usuario.id;

    async function calcular(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setErro("");
        setResultados([]);
        setCarregando(true);

        try {
            const simulacoes = await Promise.all(
                veiculos.map(async (veiculo) => {
                    try {
                        const viagem = await simularViagem({
                            origem: origem.trim(),
                            destino: destino.trim(),
                            veiculo,
                            usuarioId: usuarioId,
                        });

                        return { veiculo, viagem };
                    } catch (erro) {
                        return {
                            veiculo,
                            erro:
                                erro instanceof Error
                                    ? erro.message
                                    : "Não foi possível simular este veículo.",
                        };
                    }
                })
            );

            setResultados(simulacoes);
        } catch {
            setErro("Não foi possível calcular o trajeto.");
        } finally {
            setCarregando(false);
        }
    }

    const resultadoComDistancia = resultados.find(
        (resultado) => resultado.viagem
    );

    return (
        <article className="-m-4">
            <HeaderApp />
            <AreaSm />

            <main className="mx-auto w-full max-w-5xl px-4 py-8">
                <section className="mb-6 text-center">
                    <h1 className="text-3xl font-[Momo_Trust_Display] text-indigo-500 md:text-4xl">
                        Calculadora de CO2
                    </h1>

                    <p className="mt-3 font-[Lexend_Deca] text-black">
                        Descubra a distância do seu trajeto e compare
                        as emissões de carbono de diferentes transportes.
                    </p>
                </section>

                <div className="rounded-full border-t-3 border-gray-200" />

                <form
                    onSubmit={calcular}
                    className="mx-auto mt-5 w-full max-w-2xl space-y-4 rounded-2xl border border-gray-200 bg-white p-4"
                >
                    <div>
                        <label
                            htmlFor="origem"
                            className="mb-1 block font-[Momo_Trust_Display] text-sky-400"
                        >
                            Local de partida
                        </label>

                        <input
                            id="origem"
                            type="text"
                            value={origem}
                            onChange={(e) => setOrigem(e.target.value)}
                            placeholder="Ex.: Avenida Paulista, São Paulo"
                            required
                            className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-2 font-[Lexend_Deca] outline-none focus:border-sky-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="destino"
                            className="mb-1 block font-[Momo_Trust_Display] text-indigo-500"
                        >
                            Destino
                        </label>

                        <input
                            id="destino"
                            type="text"
                            value={destino}
                            onChange={(e) => setDestino(e.target.value)}
                            placeholder="Ex.: Estação da Luz, São Paulo"
                            required
                            className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-2 font-[Lexend_Deca] outline-none focus:border-indigo-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={carregando}
                        className="w-full rounded-lg bg-linear-to-r from-indigo-500 to-sky-400 px-4 py-2.5 font-[Momo_Trust_Display] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {carregando
                            ? "Calculando trajetos..."
                            : "Calcular emissões"}
                    </button>

                    {erro && (
                        <p
                            role="alert"
                            className="wrap-break-words text-sm text-red-500"
                        >
                            {erro}
                        </p>
                    )}
                </form>

                {resultados.length > 0 && (
                    <section className="mt-8">
                        <h2 className="mb-2 text-center text-xl font-[Momo_Trust_Display] text-indigo-500">
                            Resultado da comparação
                        </h2>

                        <p className="mb-5 wrap-break-words text-center text-sm font-[Lexend_Deca] text-gray-500">
                            {origem} → {destino}
                        </p>

                        {resultadoComDistancia?.viagem && (
                            <div className="mx-auto mb-6 w-full max-w-xs rounded-xl p-3 text-center">
                                <p className="font-[Lexend_Deca] text-sm text-indigo-500">
                                    Distância percorrida
                                </p>

                                <p className="mt-1 wrap-break-words text-2xl font-[Momo_Trust_Display] text-sky-500">
                                    {formatarNumero(
                                        resultadoComDistancia.viagem.km_percorrido
                                    )}{" "}km</p>
                            </div>
                        )}

                        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {resultados.map((resultado) => (
                                <div
                                    key={resultado.veiculo}
                                    className="w-full min-w-0 max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white p-3"
                                >
                                    <h3 className="mb-3 wrap-break-words text-center text-lg font-[Momo_Trust_Display]">
                                        {resultado.veiculo}
                                    </h3>

                                    {resultado.viagem ? (
                                        <div className="min-w-0">
                                            <p className="text-sm font-[Lexend_Deca] text-gray-500">
                                                CO₂ emitido
                                            </p>

                                            <p className="wrap-break-words text-lg text-sky-400 font-[Lexend_Deca]">
                                                {formatarNumero(
                                                    resultado.viagem.carbono_emitido
                                                )}{" "}
                                                kg
                                            </p>

                                            <p className="mt-3 text-sm font-[Lexend_Deca] text-gray-500">
                                                CO₂ economizado
                                            </p>

                                            <p className="wrap-break-words text-lg text-indigo-600 font-[Lexend_Deca]">
                                                {formatarNumero(
                                                    resultado.viagem.carbono_economizado
                                                )}{" "}
                                                kg
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="wrap-break-words text-xs leading-relaxed text-red-500">
                                            {resultado.erro ||
                                                "Não foi possível calcular este veículo."}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <FooterApp />
        </article>
    );
}

export default SmCalculadora;
