type StoriesProps = {
    imagem: string
    alt: string
}

function Stories( {imagem, alt}: StoriesProps) {
    return (
        <img src={imagem} alt={alt} className="w-16 border-3 rounded-4xl border-indigo-500"/>
    );
}

export default Stories;