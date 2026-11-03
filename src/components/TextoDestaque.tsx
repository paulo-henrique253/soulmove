type TextoDestaqueProps = {
    texto: string;
};

function TextoDestaque({ texto }: TextoDestaqueProps) {
    return (
        <p className="
                mb-8
                max-w-none
                text-center
                bg-linear-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent
                font-['Momo_Trust_Display']
                font-normal
                text-[clamp(1.5rem,5vw,2.7rem)]
                leading-normal

                md:max-w-140
                md:text-[1.5rem]

                xl:text-center
        ">
            {texto}
        </p>
    );
}

export default TextoDestaque;