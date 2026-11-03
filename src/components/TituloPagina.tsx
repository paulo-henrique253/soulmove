type TituloPaginaProps = {
    texto: string;
};

function TituloPagina({ texto }: TituloPaginaProps) {
    return (
        <h1
            className="font-['Momo_Trust_Display']
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    text-center
                    whitespace-pre-line
                    bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent
            pb-2
            mb-14"
        >
            {texto}
        </h1>
    );
}

export default TituloPagina;

