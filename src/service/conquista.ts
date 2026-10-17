import type { TipoConquista } from "../types/conquista";

export const API = "https://soulmove-java-3.onrender.com/api/v1/conquista"


export async function ListarConquistas(): Promise<TipoConquista[]>{

    const resposta = await fetch(API);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoConquista[] = await resposta.json();

    return dados;

}