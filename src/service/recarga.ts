import type { ErrorResponse } from "../types/ErrorResponse";
const BASE_URL = import.meta.env.VITE_API_URL;

export const API = BASE_URL + "/api/v1/recarga"

export async function recarregar(pix: string, usuarioId: number): Promise<boolean> {
    const resposta = await fetch(`${API}/pix`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({codigo: pix, usuarioId: usuarioId})
    });


    if(resposta.status === 204){
        return true;
    }

    if(!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao pagar: " + erro.message);
    }

    return false;
    
}