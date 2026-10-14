type UsuarioNumerosProps = {
    numero: number;
    descricao: string;
}

function UsuarioNumeros({ numero, descricao }: UsuarioNumerosProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="font-[Lexend_Deca] text-black text-xl">{numero}</p>
            <p className="font-[Lexend_Deca] text-gray-400 text-xs">{descricao}</p>
        </div>
    );
}

export default UsuarioNumeros;