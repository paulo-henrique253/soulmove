import { Navigate, useNavigate } from "react-router";
import { useUsuario } from "../../hooks/useUsuario"
import { useForm } from "react-hook-form"
import { useState } from "react";
import ErroLabel from "../../components/app/ErroLabel";
import ContatoInput from "../../components/ContatoInput";
import { cadastrar } from "../../service/usuario";
import SoulMove_Pequena from "../../assets/SoulMove_Pequena.png";

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
    <article className="min-h-full flex flex-col justify-center py-6 px-2">
    <div className="flex flex-col items-center mb-6">
      <img src={SoulMove_Pequena} alt="SoulMove Logo" className="w-32 h-auto mb-2" />
      <h1 className="text-2xl sm:text-3xl text-center font-['Momo_Trust_Display'] font-bold text-indigo-600">
        Crie sua conta
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 font-['Lexend_Deca'] text-center mt-1">
        Cadastre-se para acessar sua carteira e suas missões
      </p>
    </div>
    
    <form className="flex flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
          
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
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email", {
              required: "Insira seu e-mail",
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
          
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="submit"
              className="w-full cursor-pointer py-3.5 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full text-sm disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </button>
            
            <button
              type="button"
              onClick={navegarLogin} // Renomeado para fazer sentido no contexto
              className="w-full cursor-pointer py-3.5 border-2 border-indigo-400 text-indigo-600 font-['Lexend_Deca'] font-bold rounded-full text-sm"
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