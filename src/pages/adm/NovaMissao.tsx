import TituloPagina from '../../components/TituloPagina';
import ContatoInput from '../../components/ContatoInput';
import { useForm } from 'react-hook-form';
import { cadastrar } from '../../service/missao';
import ContatoTextarea from '../../components/ContatoTextarea';
import ContatoSelect from '../../components/ContatoSelect';
import ErroLabel from '../../components/app/ErroLabel';
import { useState } from 'react';
import { useUsuario } from '../../hooks/useUsuario';
import { useNavigate } from 'react-router';

export type NovaMissaoFormData = {
    titulo: string,
    nomeTipo: string,
    descricao: string,
    pontos: number,
    meta: number,
    periodicidade: number,
    prazo: number,
    arquivoImagem: FileList 
    
}

function NovaMissao(){

    const {usuario} = useUsuario();
	const navigate = useNavigate();

	if(!usuario?.isAdm){ navigate("/")}

    const {register, handleSubmit, formState: { isSubmitting, errors } } = useForm<NovaMissaoFormData>()
    const [erro, setErro] = useState<string | null>();

    async function onSubmit (data: NovaMissaoFormData){

        const arquivo = data.arquivoImagem[0]

        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('nomeTipo', data.nomeTipo);
        formData.append('descricao', data.descricao);
        formData.append('pontos', data.pontos.toString());
        formData.append('meta', data.meta.toString());
        formData.append('periodicidade', data.periodicidade.toString());
        formData.append('prazo', data.prazo.toString());
        formData.append('arquivoImagem', arquivo);


        try {
            await cadastrar(formData)
        } catch (error) {
            if (error instanceof Error){
                setErro(error.message);
            }
            console.error('Erro de conexão:', error);
        }

    }

    return (
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
            <TituloPagina texto="Nova Missao" />

            <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-24">
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
                            defaultValue="" // Garante que comece no placeholder
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ContatoInput
                                id="pontos"
                                label="Pontos"
                                type="number"
                                placeholder="Ex: 100"
                                erro={errors.pontos?.message}
                                {...register("pontos", { 
                                    required: "Informe a pontuação.",
                                    valueAsNumber: true 
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
                                    valueAsNumber: true
                                })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ContatoInput
                                id="periodicidade"
                                label="Periodicidade (dias)"
                                type="number"
                                placeholder="Ex: 7"
                                erro={errors.periodicidade?.message}
                                {...register("periodicidade", { 
                                    required: "Informe a periodicidade.",
                                    valueAsNumber: true
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
                                    valueAsNumber: true
                                })}
                            />
                        </div>

                        <ContatoInput
                            id="arquivoImagem"
                            label="Imagem da Missão"
                            type="file"
                            accept="image/*"
                            erro={errors.arquivoImagem?.message}
                            {...register("arquivoImagem", { required: "Selecione uma imagem." })}
                            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                        />
                        {
                            erro && (<ErroLabel message= {erro} />)
                        }
                        <button
                            type="submit"
                            className="cursor-pointer self-center px-8 py-4 mt-2 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full hover:opacity-90 transition-opacity"
                            disabled={isSubmitting}
                        >
                            {isSubmitting? "Cadastrando..." : "Cadastrar Missão"}
                        </button>
                    </form>
                </div>

                <div className="hidden w-full max-w-md flex-col gap-6 self-start lg:flex">
                    <h2 className="font-['Momo_Trust_Display'] text-3xl text-indigo-600">
                        Nova Missão SoulMove
                    </h2>
                    <p className="font-['Lexend_Deca'] text-gray-900 text-xl">
                        Crie novos desafios e engaje os usuários em atividades que ajudam o meio ambiente.
                    </p>
                    <p className="font-['Lexend_Deca'] text-gray-900 text-xl">
                        A <strong>transformação</strong> começa com <strong>ação</strong>.
                    </p>
                </div>
            </section>
      </main>
    );
}

export default NovaMissao;