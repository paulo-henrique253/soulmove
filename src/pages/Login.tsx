import { useNavigate, Navigate } from "react-router";
import { useUsuario } from "../hooks/useUsuario";
import { useForm } from "react-hook-form";
import ContatoInput from '../components/ContatoInput';
import { login } from "../service/usuario";
import ErroLabel from "../components/app/ErroLabel";
import { useState } from "react";
import TituloPagina from "../components/TituloPagina";

export type LoginFormValues = {
    email: string,
    senha: string
}

function Login() {
  const { usuario, setUsuario } = useUsuario();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginFormValues>();
  const [erro, setErro] = useState<string | null>(null);

  if (usuario) {
    return <Navigate to="/" replace />;
  }

  async function onSubmit(data: LoginFormValues) {
    try {
      const usuario = await login(data);
      if (usuario) {
        setUsuario(usuario);
        navigate("/");
      }
    } catch (erro) {
      if (erro instanceof Error) {
        setErro(erro.message);
      }
      console.error("Erro:", erro);
    }
  }

  function navegarCadastro() {
    navigate("/appCadastro");
  }
  
  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full max-w-md mx-auto px-6 py-12">
      <TituloPagina texto="Entre na sua conta" />
      
      <div className="w-full bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 mt-6">
        <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
              <ContatoInput
                id="email"
                label="Email"
                type="email"
                placeholder="Digite seu email"
                {...register("email", {
                  required: "Insira seu email",
                })}
              />
              {errors.email?.message && (
                <ErroLabel message={errors.email.message} />
              )}

              <ContatoInput
                id="senha"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: "Insira sua senha"
                })}
              />
              {errors.senha?.message && (
                <ErroLabel message={errors.senha.message}/>
              )}

              {erro && (<ErroLabel message={erro} />)}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 cursor-pointer py-3.5 px-6 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full shadow-sm hover:opacity-95 active:scale-[0.99] transition-all text-sm text-center disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </button>

                <button
                  type="button"
                  onClick={navegarCadastro}
                  className="flex-1 cursor-pointer py-3.5 px-6 border-2 border-indigo-400 text-indigo-600 font-['Lexend_Deca'] font-bold rounded-full hover:bg-indigo-50 active:scale-[0.99] transition-all text-sm text-center"
                >
                  Criar conta
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
