import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TituloPagina from "../components/TituloPagina";
import ContatoInput from "../components/ContatoInput";
import ContatoTextarea from "../components/ContatoTextarea";
import imgContato from "../assets/contato_img_soum.png";
import { contatoPadrao, type ContatoFormData } from "../data/contatos";

function Contato() {
  const [modalAberto, setModalAberto] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoFormData>({ defaultValues: contatoPadrao });

  useEffect(() => {
    if (!modalAberto) return;

    const temporizador = setTimeout(() => {
      setModalAberto(false);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, [modalAberto]);

  const onSubmit = (dados: ContatoFormData) => {
    console.log(dados);
    setModalAberto(true);
    reset();
  };

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
      <TituloPagina texto="Contato" />

      <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-24">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <ContatoInput
              id="nome"
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
              erro={errors.nome?.message}
              {...register("nome", { required: "Informe seu nome." })}
            />

            <ContatoInput
              id="email"
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              erro={errors.email?.message}
              {...register("email", {
                required: "Informe seu e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Informe um e-mail válido.",
                },
              })}
            />

            <ContatoInput
              id="telefone"
              label="Telefone"
              type="tel"
              placeholder="Digite seu telefone"
              {...register("telefone")}
            />

            <ContatoTextarea
              id="mensagem"
              label="Mensagem"
              placeholder="Digite sua mensagem"
              erro={errors.mensagem?.message}
              {...register("mensagem", { required: "Escreva uma mensagem." })}
            />

            <button
              type="submit"
              className="self-center px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-[14px]"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="hidden w-full max-w-md flex-col gap-6 self-start lg:flex">
          <h2 className="font-['Momo_Trust_Display'] text-2xl w-fit bg-linear-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">Fale com a SoulMove</h2>
          <p className="font-['Lexend_Deca'] text-gray-900 text-lg md:text-xl">
            Dúvidas, sugestões ou ideias? Vamos construir cidades mais sustentáveis juntos.
          </p>
          <p className="font-['Lexend_Deca'] text-gray-900 text-lg md:text-xl">
            A <strong>transformação</strong> começa com <strong>conexão</strong>.
          </p>
          <img src={imgContato} alt="Imagem da SoulMove" className="w-full h-auto rounded-3xl" />
        </div>
      </section>

      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-6">
          <div className="relative w-full max-w-lg rounded-3xl bg-linear-to-r from-indigo-500 to-sky-400 p-8">
            <button
              type="button"
              onClick={() => setModalAberto(false)}
              className="absolute top-4 right-6 font-['Momo_Trust_Display'] sm:text-3xl text-white"
            >
              X
            </button>
            <h2 className="mb-8 text-center font-['Momo_Trust_Display'] sm:text-3xl text-white">
              Muito Obrigado!
            </h2>
            <p className="p-4 text-center font-['Lexend_Deca'] sm:text-xl text-white">
              Recebemos sua mensagem e retornaremos o mais rápido possível!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contato;