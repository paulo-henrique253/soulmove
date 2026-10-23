import type { ErrorResponse } from "../types/ErrorResponse";
import type { NovaConquistaFormValues } from "../pages/adm/NovaConquista";
import type { TipoConquista } from "../types/conquista";


const BASE_URL = import.meta.env.VITE_API_URL;
export const API = BASE_URL + "/api/v1/conquista"


export async function ListarConquistasUsuario(usuarioId: number): Promise<TipoConquista[]>{

    const resposta = await fetch(`${API}/usuario/${usuarioId}`);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoConquista[] = await resposta.json();

    return dados;

}

export async function ObterConquista(conquistaId: string | number): Promise<TipoConquista> {
    const resposta = await fetch(`${API}/${conquistaId}`);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoConquista = await resposta.json();

    return dados;
}

export async function editar(dados:NovaConquistaFormValues, id:number): Promise<boolean> {
    const resposta = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados)
    });

    if(resposta.status === 204){
        return true;
    }
    
    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    return true;
    
}

export async function excluir(id:number): Promise<boolean> {
    const resposta = await fetch(`${API}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(resposta.status === 204){
        return true;
    }

    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    return true;

}

export async function ListarConquistas(): Promise<TipoConquista[]>{

    const resposta = await fetch(API);

    if (!resposta.ok){
        throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados: TipoConquista[] = await resposta.json();

    return dados;

}

export async function cadastrar(dados:NovaConquistaFormValues): Promise<TipoConquista> {
    const resposta = await fetch(API, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados)
    });
    
    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao cadastrar: " + erro.message);
    }
    const conquista: TipoConquista = await resposta.json();
    return conquista;
}