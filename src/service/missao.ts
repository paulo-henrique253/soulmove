import type { ErrorResponse } from "../types/ErrorResponse";
import type { TipoMissao } from "../types/missao";
const BASE_URL = import.meta.env.VITE_API_URL;

export const API = BASE_URL + "/api/v1/missao"


export async function ListarMissoes(): Promise<TipoMissao[]>{

    const resposta = await fetch(API);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoMissao[] = await resposta.json();

    return dados;

}

export async function cadastrar(data: FormData): Promise<TipoMissao> {
    const resposta = await fetch(API, {
        method: 'POST',
        body: data
    });

    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    const dados : TipoMissao = await resposta.json()
    return dados;
    
}