import type { ReactNode } from "react";

interface ModalConfirmacaoProps {
  isOpen: boolean;               // Controla se o modal aparece ou não
  titulo: string;
  mensagem: ReactNode;           // ReactNode permite enviar texto com negrito <strong>
  onConfirmar: () => void;       // Função disparada no botão principal
  onCancelar: () => void;        // Função disparada no botão de cancelar
  processando?: boolean;         // Desabilita os botões e muda o texto
  textoConfirmar?: string;       // Opcional: texto customizado (padrão: "Confirmar")
  textoCancelar?: string;        // Opcional: texto customizado (padrão: "Cancelar")
}

export default function ModalConfirmacao({
  isOpen,
  titulo,
  mensagem,
  onConfirmar,
  onCancelar,
  processando = false,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar"
}: ModalConfirmacaoProps) {
  
  // Se isOpen for falso, o React nem renderiza o HTML abaixo
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl flex flex-col gap-6">
        
        <h3 className="font-['Momo_Trust_Display'] text-3xl text-rose-600">
          {titulo}
        </h3>
        
        <p className="font-['Lexend_Deca'] text-gray-700 text-lg">
          {mensagem}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={onCancelar}
            disabled={processando}
            className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-['Lexend_Deca'] font-bold rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {textoCancelar}
          </button>
          
          <button
            onClick={onConfirmar}
            disabled={processando}
            className="flex-1 px-6 py-4 bg-rose-500 text-white font-['Lexend_Deca'] font-bold rounded-full hover:bg-rose-600 transition-colors disabled:opacity-70"
          >
            {processando ? "Processando..." : textoConfirmar}
          </button>
        </div>
        
      </div>
    </div>
  );
}