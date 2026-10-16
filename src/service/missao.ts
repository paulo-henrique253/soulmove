import type { TipoMissao } from "../types/missao";

export const API = "https://spousal-uptight-shiftless.ngrok-free.dev/api/v1/missao"


export async function ListarMissoes(): Promise<TipoMissao[]>{

    const resposta = await fetch(API);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoMissao[] = await resposta.json();

    return dados;

}