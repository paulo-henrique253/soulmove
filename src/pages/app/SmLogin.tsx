import { useNavigate, Navigate } from "react-router";
import { useUsuario } from "../../hooks/useUsuario";
import { useForm } from "react-hook-form";
import ContatoInput from '../../components/ContatoInput';
import { login } from "../../service/usuario";
import ErroLabel from "../../components/app/ErroLabel";
import { useState } from "react";
import SoulMove_Pequena from "../../assets/SoulMove_Pequena.png";

export type LoginFormValues = {
    email: string,
    senha: string
}

function SmLogin() {
  const { usuario, setUsuario } = useUsuario();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginFormValues>();
  const [erro, setErro] = useState<string | null>(null);

  if (usuario) {
    return <Navigate to="/appInicio" replace />;
  }

  async function onSubmit(data: LoginFormValues) {
    try {
      const usuario = await login(data);
      if (usuario) {
        setUsuario(usuario);
        navigate("/appInicio");
      }
    } catch (erro) {
      if (erro instanceof Error) {
        setErro(erro.message);
      }
      console.error("Erro:", erro);
    }
  }

  function navegarCadastro() {
    navigate("/appCadastro")
  }
  
  return (
    <article className="min-h-full flex flex-col justify-center py-6 px-2">
      <div className="flex flex-col items-center mb-6">
        <img src={SoulMove_Pequena} alt="SoulMove Logo" className="w-32 h-auto mb-2" />
        <h1 className="text-2xl sm:text-3xl text-center font-[Momo_Trust_Display] font-bold text-gray-800">
          Entre na sua conta
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-[Lexend_Deca] text-center mt-1">
          Acesse sua carteira e missões de mobilidade
        </p>
      </div>

      <form className="flex flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
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

            <div className="flex flex-col gap-3 mt-4">
              <button
                type="submit"
                className="w-full cursor-pointer py-3.5 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full shadow-sm hover:opacity-95 active:scale-[0.99] transition-all text-sm disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Entrando..." : "Entrar"}
              </button>

              <button
                type="button"
                onClick={navegarCadastro}
                className="w-full cursor-pointer py-3.5 border-2 border-indigo-400 text-indigo-600 font-['Lexend_Deca'] font-bold rounded-full hover:bg-indigo-50 active:scale-[0.99] transition-all text-sm"
              >
                Criar uma conta
              </button>
            </div>
        </div>
      </form>
    </article>
  );
}

export default SmLogin;
