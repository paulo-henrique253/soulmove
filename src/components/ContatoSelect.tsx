import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

interface ContatoSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  erro?: string;
}

const ContatoSelect = forwardRef<HTMLSelectElement, ContatoSelectProps>(
  ({ label, erro, id, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="font-['Momo_Trust_Display'] text-lg text-indigo-600">
          {label}
        </label>
        
        <select
          id={id}
          ref={ref}
          className="h-12 w-full rounded-lg bg-linear-to-b from-sky-100 to-indigo-100 px-4 font-['Lexend_Deca'] text-gray-900 focus:outline-none"
          {...props}
        >
          {children}
        </select>
        
        {erro && <span className="font-['Lexend_Deca'] text-sm text-rose-500">{erro}</span>}
      </div>
    );
  }
);

ContatoSelect.displayName = "CampoSelect";

export default ContatoSelect;