type UsuarioNumerosProps = {
    numero: number;
    descricao: string;
}

function UsuarioNumeros({ numero, descricao }: UsuarioNumerosProps) {
    return (
        <div>
            <p>{numero}</p>
            <p>{descricao}</p>
        </div>
    );
}

export default UsuarioNumeros;