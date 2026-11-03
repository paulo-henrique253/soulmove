import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

interface ContatoTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  erro?: string;
}

const ContatoTextarea = forwardRef<HTMLTextAreaElement, ContatoTextareaProps>(
  ({ label, erro, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="w-fit pb-1 font-['Momo_Trust_Display'] text-lg bg-linear-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className="min-h-36 w-full resize-y rounded-lg bg-linear-to-b from-sky-100 to-indigo-100 px-4 py-3 font-['Lexend_Deca'] text-gray-900 placeholder:text-gray-500"
          {...props}
        />
        {erro && <span className="font-['Lexend_Deca'] text-sm text-rose-500">{erro}</span>}
      </div>
    );
  }
);

ContatoTextarea.displayName = "CampoTextarea";

export default ContatoTextarea;