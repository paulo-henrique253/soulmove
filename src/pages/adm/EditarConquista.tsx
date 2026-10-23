import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router";
import type { TipoConquista } from "../../types/conquista";
import { ObterConquista } from "../../service/conquista";
import ContatoInput from "../../components/ContatoInput";
import ContatoSelect from "../../components/ContatoSelect";
import ContatoTextarea from "../../components/ContatoTextarea";
import TituloPagina from "../../components/TituloPagina";
import type { NovaConquistaFormValues } from "./NovaConquista";
import { useForm } from "react-hook-form";
import ErroLabel from "../../components/app/ErroLabel"; 
import { editar, excluir } from "../../service/conquista";
import ModalConfirmacao from "../../components/ModalConfirmacao";
import { useUsuario } from '../../hooks/useUsuario';


function EditarConquista () {

  const {usuario} = useUsuario();
  const navigate = useNavigate();
  
  if(!usuario?.isAdm){ return <Navigate to='/' />}

  const { conquistaId } = useParams();
  const [carregando, setCarregando] = useState(true);
  const [excluindo, setExcluindo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [conquista, setConquista] = useState<TipoConquista | null>(null)
  const [editado, setEditado] = useState(false);

  const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);

  const {register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<NovaConquistaFormValues>()


  useEffect(() => {
    async function carregar() {

      setCarregando(true);
      setErro("");

      try {
        if(conquistaId){
          const dadosConquista = await ObterConquista(Number(conquistaId));
          setConquista(dadosConquista);
          reset({
            nome: dadosConquista.nome,
            titulo: dadosConquista.titulo,
            nomeTipo: dadosConquista.nomeTipo,
            descricao: dadosConquista.descricao,
            pontos: Number(dadosConquista.pontos), 
            meta: Number(dadosConquista.meta)
          });
        } else setErro("Conquista não encontrada");
      } catch (erro) {
              
        navigate("/adm/conquistas")

      } 
      finally {
        setCarregando(false)
      }
    }
    carregar();
  }, [conquistaId, navigate, reset]);


  async function onSubmit(data: NovaConquistaFormValues){
    setEditado(false);
    try {
      setEditado(await editar(data, Number(conquista?.id)));
    } catch (error) {
      console.error('Erro de conexão:', error);
      if (error instanceof Error){
        setErro(error.message);
      }
    }
  }
  async function acionarExcluir(){
    try{
      setExcluindo(true);
      await excluir(Number(conquista?.id));
      navigate("/adm/conquistas");
    }catch( error){
      console.error('Erro:', error);
      if(error instanceof Error){
        setErro(error.message);
      }
      setExcluindo(false);
    }
  }


  if (carregando) {
    return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
        <p className="font-['Momo_Trust_Display'] text-2xl text-indigo-600 animate-pulse">
          Buscando dados da conquista...
        </p>
      </main>
    );
  }

  return (
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
              <div className="flex justify-evenly">
                <button
                  type="submit"
                  className="self-center px-8 py-4 mt-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                {isSubmitting? "Editando..." : (editado? "Conquista Editada!" : "Editar Conquista")}
                </button>
                <button 
                  type="button"
                  onClick={() => setMostrarModalExclusao(true)}
                  className="self-center px-8 py-4 bg-white border-2 border-rose-500 text-rose-500 font-['Lexend_Deca'] font-bold rounded-full hover:bg-rose-50 transition-colors w-full sm:w-auto"
                >
                  {excluindo? "Excluindo..." : "Excluir Conquista"}
                </button>
              </div>
          </form>
          </div>
    </section>
    {/*Modal de Confirmação de Exclusão */}
    <ModalConfirmacao 
        isOpen={mostrarModalExclusao}
        titulo="Confirmar Exclusão"
        // Passamos um Fragmento React (<></>) para usar a tag <strong>
        mensagem={<>Tem certeza de que deseja excluir a conquista <strong>{conquista?.nome}</strong>? Esta ação é permanente e não poderá ser desfeita.</>}
        textoConfirmar="Sim, excluir"
        processando={excluindo}
        onConfirmar={acionarExcluir}
        onCancelar={() => setMostrarModalExclusao(false)}
    />


  </main>
  )


}

export default EditarConquista;