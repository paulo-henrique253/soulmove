import { createContext } from "react";
import type { Usuario } from "../types/usuario"
export type UserContextData = {
    usuario: Usuario | null
    setUsuario: (usuario: Usuario) => void
}

export const UserContext = createContext<UserContextData | null>(null)