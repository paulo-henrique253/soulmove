import { useContext } from "react";
import { UserContext } from '../contexts/UsuarioContext';

export function useUsuario(){
    const context = useContext(UserContext);

     if (context === null) {
    throw new Error("useUser deve ser usado dentro de UserProvider.");
  }

  return context;

}