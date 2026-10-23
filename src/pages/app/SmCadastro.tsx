import { Navigate, useNavigate } from "react-router";
import { useUsuario } from "../../hooks/useUsuario"
import { useForm } from "react-hook-form"
import { useState } from "react";
import ErroLabel from "../../components/app/ErroLabel";
import ContatoInput from "../../components/ContatoInput";
import { cadastrar } from "../../service/usuario";

export type CadastroFormValues = {
    nome: string
    email: string,
    senha: string
}

function SmCadastro(){
  const {usuario, setUsuario} = useUsuario();

  if(usuario){
    return <Navigate to="/appInicio" />
  }

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<CadastroFormValues>();
  const [erro, setErro] = useState<string | null>(null);


  const navigate = useNavigate();

async function onSubmit(data: CadastroFormValues){
    try{
      const usuario = await cadastrar(data);

      if(usuario){
        setUsuario(usuario);
        navigate("/appInicio");
      }

    } catch (erro){
      if (erro instanceof Error){

        setErro(erro.message);

      }
      
      console.error("Erro:", erro);

    }
  }
  function navegarLogin(){
    navigate("/appLogin")
  }

  return(
  <article>
    <h1 className="pt-10 text-3xl text-center font-['Momo_Trust_Display']">Crie sua conta</h1>
    
    <form className="flex flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col px-2 py-2.5 gap-6.5">
          
          <ContatoInput
            id="nome"
            label="Nome"
            type="text"
            placeholder="Digite seu nome completo"
            {...register("nome", {
              required: "Insira seu nome",
            })}
          />
          {errors.nome?.message && (
            <ErroLabel message={errors.nome.message} />
          )}

          <ContatoInput
            id="email"
            label="Email"
            type="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Insira seu email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Informe um e-mail válido",
              },
            })}
          />
          {errors.email?.message && (
            <ErroLabel message={errors.email.message} />
          )}
          
          <ContatoInput
            id="senha"
            label="Senha"
            type="password"
            placeholder="Crie uma senha"
            {...register("senha", {
              required: "Crie uma senha",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres"
              }
            })}
          />
          {errors.senha?.message && (
            <ErroLabel message={errors.senha.message}/>
          )}
          
          {/* Erro Geral (Ex: Erro de API) */}
          {erro && (<ErroLabel message={erro} />)}
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-evenly mt-2 ">
            <button
              type="submit"
              className="cursor-pointer self-center w-full h-19.5 sm:w-auto px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </button>
            
            <button
              type="button"
              onClick={navegarLogin} // Renomeado para fazer sentido no contexto
              className="cursor-pointer self-center w-full sm:w-auto px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full"
            >
              Já tenho uma conta
            </button>
          </div>
      </div>
    </form>
  </article>    
  )
}

export default SmCadastro;