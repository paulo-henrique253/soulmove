type ItemListaProps = {
    numero: string
    descricao: string
}

function ItemLista({ numero, descricao }: ItemListaProps) {
    return (
        <div className="flex gap-1 items-center">
            <p className="bg-linear-to-r to-sky-400 from-indigo-500 h-7 w-7 text-center pt-1 rounded-full text-sm text-white font-[Momo_Trust_Display]">{numero}</p>
            <p className="font-[Lexend_Deca] text-gray-700 text-xs">{descricao}</p>
        </div>
    );
}

export default ItemLista;