import type { ErrorResponse } from "../types/ErrorResponse";
import type { TipoViagem } from "../types/viagem";
const baseURL = import.meta.env.VITE_API_URL;
export const API = `${baseURL}/api/v1/viagem`;

export type ViagemFormValues = {
    origem: string,
    destino: string,
    veiculo: string,
    usuarioId: number
}

export async function viajar(dados: ViagemFormValues) {
    const resposta = await fetch(`${API}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });

    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    const viagem : TipoViagem = await resposta.json();
    return viagem;
}

export async function simularViagem(dados: ViagemFormValues) {
    const resposta = await fetch(`${API}/simular`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });

    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    const viagem : TipoViagem = await resposta.json();
    return viagem;
}