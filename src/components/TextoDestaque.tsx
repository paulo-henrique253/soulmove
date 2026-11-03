type TextoDestaqueProps = {
    texto: string;
};

function TextoDestaque({ texto }: TextoDestaqueProps) {
    return (
        <p className="
                mb-8
                max-w-none
                text-center
                bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent
                font-['Momo_Trust_Display']
                font-black
                text-3xl
                leading-normal

                md:max-w-none
                md:text-4xl

                xl:text-center
        ">
            {texto}
        </p>
    );
}

export default TextoDestaque;