import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { TipoMissao } from "../../types/missao"; // Ajuste o caminho do tipo
import { ObterMissao, editar, excluir } from "../../service/missao"; // Ajuste os caminhos
import ContatoInput from "../../components/ContatoInput";
import ContatoSelect from "../../components/ContatoSelect";
import ContatoTextarea from "../../components/ContatoTextarea";
import TituloPagina from "../../components/TituloPagina";
import ErroLabel from "../../components/app/ErroLabel"; 
import ModalConfirmacao from "../../components/ModalConfirmacao";
import { useForm } from "react-hook-form";
import type { NovaMissaoFormData } from "./NovaMissao";
import { useUsuario } from '../../hooks/useUsuario';

function EditarMissao() {
  const { missaoId } = useParams();
  const navigate = useNavigate();

  const {usuario} = useUsuario();
if(!usuario?.isAdm){ navigate("/")}
  
  const [carregando, setCarregando] = useState(true);
  const [excluindo, setExcluindo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [missao, setMissao] = useState<TipoMissao | null>(null);
  const [editado, setEditado] = useState(false);
  
  const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);

  // Adicionamos o 'reset' para preencher o form
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<NovaMissaoFormData>();

  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      setErro("");

      try {
        if (missaoId) {
          const dadosMissao = await ObterMissao(Number(missaoId));
          setMissao(dadosMissao);
          
          // Preenche todos os campos (exceto o arquivo de imagem)
          reset({
            titulo: dadosMissao.titulo,
            nomeTipo: dadosMissao.nomeTipo,
            descricao: dadosMissao.descricao,
            pontos: Number(dadosMissao.pontos),
            meta: Number(dadosMissao.meta),
            // Assumindo que prazo e periodicidade vêm da API, ajustamos o tipo.
            // Se vierem como string, o Number() resolve.
            prazo: Number(dadosMissao.prazo), 
            periodicidade: Number(dadosMissao.periodicidade || 0)
          });
        } else {
          setErro("Missão não encontrada");
        }
      } catch (erro) {
        navigate("/adm/missoes");
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [missaoId, navigate, reset]);

  async function onSubmit(data: NovaMissaoFormData) {
    setEditado(false);
    setErro(null);
    try {
      // Como o arquivoImagem é um FileList, se o usuário não selecionou nova imagem, ele pode vir undefined ou length 0.
      // O seu service `editar` precisará estar preparado para lidar com isso (FormData).
      await editar(data, Number(missao?.id));
      setEditado(true);
    } catch (error) {
      console.error("Erro de conexão:", error);
      if (error instanceof Error) {
        setErro(error.message);
      }
    }
  }

  async function acionarExcluir() {
    try {
      setExcluindo(true);
      await excluir(Number(missao?.id));
      // Redireciona via código em vez de <Navigate /> no JSX (Evita bugs)
      navigate("/adm/missoes");
    } catch (error) {
      console.error("Erro:", error);
      if (error instanceof Error) {
        setErro(error.message);
      }
      setExcluindo(false); // Só desativa se der erro
      setMostrarModalExclusao(false);
    }
  }

  // Tela de Loading enquanto busca os dados e preenche o reset()
  if (carregando) {
    return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
        <p className="font-['Momo_Trust_Display'] text-2xl text-indigo-600 animate-pulse">
          Buscando dados da missão...
        </p>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
      <TituloPagina texto="Editar Missão" />
      
      <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-24 mt-8">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            
            <ContatoInput
              id="titulo"
              label="Título da Missão"
              type="text"
              placeholder="Ex: Plantar uma árvore"
              erro={errors.titulo?.message}
              {...register("titulo", { required: "Informe o título da missão." })}
            />

            <ContatoSelect
              id="nomeTipo"
              label="Tipo da Missão"
              erro={errors.nomeTipo?.message}
              {...register("nomeTipo", { required: "Selecione o tipo da missão." })}
              defaultValue=""
            >
              <option value="" disabled hidden>Selecione um tipo...</option>
              <option value="economia_co2">Economia de CO2</option>
              <option value="quantidade_missoes">Quantidade de Missões</option>
              <option value="trajeto_longo">Trajeto Longo</option>
            </ContatoSelect>

            <ContatoTextarea
              id="descricao"
              label="Descrição"
              placeholder="Detalhes do que deve ser feito"
              erro={errors.descricao?.message}
              {...register("descricao", { required: "Escreva a descrição da missão." })}
            />

            {/* Agrupamento de Números - Linha 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContatoInput
                id="pontos"
                label="Pontos"
                type="number"
                placeholder="Ex: 100"
                erro={errors.pontos?.message}
                {...register("pontos", {
                  required: "Informe a pontuação.",
                  valueAsNumber: true,
                })}
              />

              <ContatoInput
                id="meta"
                label="Meta"
                type="number"
                placeholder="Ex: 5"
                erro={errors.meta?.message}
                {...register("meta", {
                  required: "Informe a meta.",
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Agrupamento de Números - Linha 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContatoInput
                id="periodicidade"
                label="Periodicidade (dias)"
                type="number"
                placeholder="Ex: 7"
                erro={errors.periodicidade?.message}
                {...register("periodicidade", {
                  required: "Informe a periodicidade.",
                  valueAsNumber: true,
                })}
              />

              <ContatoInput
                id="prazo"
                label="Prazo (dias)"
                type="number"
                placeholder="Ex: 30"
                erro={errors.prazo?.message}
                {...register("prazo", {
                  required: "Informe o prazo.",
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Gerenciamento de Imagem na Edição */}
            <div className="flex flex-col gap-3 mt-2">
                <label className="font-['Momo_Trust_Display'] text-lg text-indigo-600">
                    Imagem da Missão
                </label>
                
                {missao?.linkImagem && (
                    <div className="flex items-center gap-4 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                        <img 
                            src={missao.linkImagem} 
                            alt="Atual" 
                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                        />
                        <span className="text-sm text-indigo-800 font-['Lexend_Deca']">
                            Esta é a imagem atual. Selecione um novo arquivo abaixo apenas se desejar alterá-la.
                        </span>
                    </div>
                )}

                <ContatoInput
                    id="arquivoImagem"
                    label="" // Removido pois já usamos uma label customizada acima
                    type="file"
                    accept="image/*"
                    erro={errors.arquivoImagem?.message}
                    // IMPORTANTE: Na edição, o arquivo não deve ser required
                    {...register("arquivoImagem")} 
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                />
            </div>

            {erro && <ErroLabel message={erro} />}

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row justify-evenly gap-4 mt-6">
              <button
                type="submit"
                className="self-center px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Salvando..." : editado ? "Salvo com Sucesso!" : "Salvar Alterações"}
              </button>
              
              <button
                type="button"
                onClick={() => setMostrarModalExclusao(true)}
                disabled={excluindo}
                className="self-center px-8 py-4 bg-white border-2 border-rose-500 text-rose-500 font-['Lexend_Deca'] font-bold rounded-full hover:bg-rose-50 transition-colors w-full sm:w-auto"
              >
                Excluir Missão
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modal de Confirmação de Exclusão */}
      <ModalConfirmacao
        isOpen={mostrarModalExclusao}
        titulo="Confirmar Exclusão"
        mensagem={<>Tem certeza de que deseja excluir a missão <strong>{missao?.titulo}</strong>? Esta ação é permanente e não poderá ser desfeita.</>}
        textoConfirmar="Sim, excluir"
        processando={excluindo}
        onConfirmar={acionarExcluir}
        onCancelar={() => setMostrarModalExclusao(false)}
      />
    </main>
  );
}

export default EditarMissao;