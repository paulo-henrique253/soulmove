import type { LoginFormValues } from "../pages/app/SmLogin";
import type { ErrorResponse } from "../types/ErrorResponse";
import type { Usuario } from "../types/usuario";

const baseURL = import.meta.env.VITE_API_URL;
export const API = `${baseURL}/api/v1/usuario`;

export async function login(dados: LoginFormValues): Promise<Usuario> {
    const resposta = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    if (resposta.status === 404){
        throw new Error("Email ou senha inválidos");
    }

    if (!resposta.ok){
        const erro: ErrorResponse = await resposta.json();
        throw new Error("Falha ao fazer login: " + erro.error);
        
    }

    const usuario: Usuario = await resposta.json();
    
    if( usuario === null){
        throw new Error("Email ou senha inválidos");
    }
    
    return usuario;
}