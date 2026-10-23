import TituloPagina from '../../components/TituloPagina';
import ContatoInput from '../../components/ContatoInput';
import { useForm } from 'react-hook-form';
import { cadastrar } from '../../service/conquista';
import ContatoTextarea from '../../components/ContatoTextarea';
import ContatoSelect from '../../components/ContatoSelect';
import { useState } from 'react';
import ErroLabel from '../../components/app/ErroLabel';
import { useUsuario } from '../../hooks/useUsuario';
import { useNavigate } from 'react-router';

export type NovaConquistaFormValues = {
  nome: string,
  titulo: string,
  pontos: number,
  descricao: string,
  meta: number,
  nomeTipo: string
}

function NovaConquista(){


    const {usuario} = useUsuario();
	const navigate = useNavigate();

	if(!usuario?.isAdm){ navigate("/")}

    const {register, handleSubmit, formState: { isSubmitting, errors } } = useForm<NovaConquistaFormValues>()

    const [erro, setErro] = useState<string | null>();

    async function onSubmit(data: NovaConquistaFormValues){
        try {
            await cadastrar(data)
        } catch (error) {
            console.error('Erro de conexão:', error);
            if (error instanceof Error){
                console.log("asdasd");
                setErro(error.message);
            }
        }
    }

  return(
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
      <TituloPagina texto="Nova Conquista" />
      <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-24">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
              
              <ContatoInput
                  id="nome"
                  label="Nome da Conquista"
                  type="text"
                  placeholder="Ex: Viajante Sustentável"
                  erro={errors.nome?.message}
                  {...register("nome", { required: "Informe o nome da conquista." })}
              />

              <ContatoInput
                  id="titulo"
                  label="Título"
                  type="text"
                  placeholder="Ex: Iniciante Verde"
                  erro={errors.titulo?.message}
                  {...register("titulo", { required: "Informe o título que o usuário receberá." })}
              />

              <ContatoSelect
                  id="nomeTipo"
                  label="Tipo da Conquista"
                  erro={errors.nomeTipo?.message}
                  {...register("nomeTipo", { required: "Selecione a categoria da conquista." })}
                  defaultValue="" 
              >
                  <option value="" disabled hidden>Selecione um tipo...</option>
                  <option value="Mobilidade">Mobilidade</option>
                  <option value="Ambiental">Ambiental</option>
                  <option value="Engajamento">Engajamento</option>
              </ContatoSelect>

              <ContatoTextarea
                  id="descricao"
                  label="Descrição"
                  placeholder="Detalhes sobre como alcançar esta conquista"
                  erro={errors.descricao?.message}
                  {...register("descricao", { required: "Escreva a descrição da conquista." })}
              />


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ContatoInput
                      id="pontos"
                      label="Pontos Concedidos"
                      type="number"
                      placeholder="Ex: 50"
                      erro={errors.pontos?.message}
                      {...register("pontos", { 
                          required: "Informe os pontos.",
                          valueAsNumber: true 
                      })}
                  />

                  <ContatoInput
                      id="meta"
                      label="Meta Necessária"
                      type="number"
                      placeholder="Ex: 10"
                      erro={errors.meta?.message}
                      {...register("meta", { 
                          required: "Informe a meta para o desbloqueio.",
                          valueAsNumber: true
                      })}
                  />
              </div>
              {
                erro && (<ErroLabel message= {erro} />)
              }
              <button
                  type="submit"
                  className="self-center px-8 py-4 mt-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
                  disabled={isSubmitting}
              >
              {isSubmitting? "Cadastrando..." : "Cadastrar Conquista"}
            </button>
          </form>
          </div>
              <div className="hidden w-full max-w-md flex-col gap-6 self-start lg:flex">
              <h2 className="font-['Momo_Trust_Display'] text-3xl text-indigo-600">
                  Nova Conquista
              </h2>
              <p className="font-['Lexend_Deca'] text-gray-900 text-xl">
                  Crie novos marcos e recompense os usuários por suas ações positivas na plataforma.
              </p>
              <p className="font-['Lexend_Deca'] text-gray-900 text-xl">
                  O <strong>reconhecimento</strong> gera <strong>engajamento</strong>.
              </p>
          </div>
    </section>
  </main>
  )
}
export default NovaConquista;