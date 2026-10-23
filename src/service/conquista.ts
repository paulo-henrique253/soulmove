import type { TipoConquista } from "../types/conquista";


const BASE_URL = import.meta.env.VITE_API_URL;
export const API = BASE_URL + "/api/v1/conquista"


export async function ListarConquistas(usuarioId: number): Promise<TipoConquista[]>{

    const resposta = await fetch(`${API}/usuario/${usuarioId}`);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoConquista[] = await resposta.json();

    return dados;

}