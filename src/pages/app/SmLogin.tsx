import { useNavigate } from "react-router";
import { useUsuario } from "../../hooks/useUsuario";
import { useForm } from "react-hook-form";
import ContatoInput from '../../components/ContatoInput';
import { login } from "../../service/usuario";
import ErroLabel from "../../components/app/ErroLabel";
import { useState } from "react";

export type LoginFormValues = {
    email: string,
    senha: string
}

function SmLogin() {


  const {usuario, setUsuario} = useUsuario();
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginFormValues>();
  const [erro, setErro] = useState<string | null>(null);
  async function onSubmit(data: LoginFormValues){
    try{
      const usuario = await login(data);

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

  if (usuario){
    navigate("/appPerfil");
  }

  function navegarCadastro(){
    navigate("/appCadastro")
  }
  
  return (
    <article>
      <h1 className="pt-10 text-3xl text-center font-[Momo_Trust_Display]">Entre na sua conta</h1>
      <form className="flex flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px-2 py-2.5 gap-6.5">
            <ContatoInput
              id="email"
              label="Email"
              type="email"
              placeholder="Digite seu email"
              {...register("email", {
                required: "insira seu email",
              })}
            />{errors.email?.message && (
              <ErroLabel message={errors.email.message} />
            )}
            <ContatoInput
              id="senha"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              {...register("senha", {
                required:"insira sua senha"
              })}
            />{errors.senha?.message && (
              <ErroLabel message={errors.senha.message}/>
            )}
            {erro && (<ErroLabel message={erro} />)}
            <div className="flex justify-evenly">
              <button
                type="submit"
                className="cursor-pointer self-center px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full"
                disabled={isSubmitting}
              >{isSubmitting? "Entrando..." : "Entrar"}</button>
              <button
                type="button"
                onClick={navegarCadastro}
                className="cursor-pointer self-center px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full"
              >Criar uma conta</button>
            </div>
        </div>
      </form>
    </article>
  );
}


export default SmLogin;