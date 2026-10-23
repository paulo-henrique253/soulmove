import type { MouseEventHandler } from "react";

interface AdminCardProps {
  titulo: string;
  descricao: string;
  onVerClick: MouseEventHandler<HTMLButtonElement>;
  onCadastrarClick: MouseEventHandler<HTMLButtonElement>;
}

export default function AdminCard({
  titulo,
  descricao,
  onVerClick,
  onCadastrarClick,
}: AdminCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-indigo-50 hover:shadow-2xl transition-shadow duration-300 p-8 sm:p-10">
      
      {/* Conteúdo de Texto */}
      <div className="flex flex-col flex-grow gap-4">
        <h3 className="font-['Momo_Trust_Display'] text-3xl text-indigo-600">
          {titulo}
        </h3>
        <p className="font-['Lexend_Deca'] text-gray-700 text-lg flex-grow leading-relaxed">
          {descricao}
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button
          onClick={onVerClick}
          className="flex-1 px-6 py-4 border-2 border-indigo-500 text-indigo-600 font-['Lexend_Deca'] font-bold rounded-full hover:bg-indigo-50 transition-colors text-center"
        >
          Ver Cadastros
        </button>

        <button
          onClick={onCadastrarClick}
          className="flex-1 px-6 py-4 bg-linear-to-r from-indigo-500 to-sky-400 text-white font-['Lexend_Deca'] font-bold rounded-full hover:opacity-90 transition-opacity text-center shadow-md"
        >
          Novo Cadastro
        </button>
      </div>
    </div>
  );
}