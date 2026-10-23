import { useState } from "react";
import { UserContext } from './UsuarioContext';
import type { Usuario } from "../types/usuario";


export default function UserProvider({ children }: { children: React.ReactNode }){

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    return <UserContext.Provider value = {{
        usuario: usuario,
        setUsuario: setUsuario
    }}>{children}</UserContext.Provider>

}