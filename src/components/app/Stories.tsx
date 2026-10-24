type StoriesProps = {
    imagem: string
    alt: string
}

function Stories({ imagem, alt }: StoriesProps) {
    return (
        <div className="shrink-0">
            <img 
                src={imagem} 
                alt={alt} 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-indigo-500 object-cover p-0.5 hover:scale-105 transition-transform cursor-pointer"
            />
        </div>
    );
}

export default Stories;
