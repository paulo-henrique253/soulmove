type StoriesProps = {
    imagem: string
    alt: string
}

function Stories( {imagem, alt}: StoriesProps) {
    return (
        <div className="border-2">
            <img src={imagem} alt={alt} />
        </div>
    );
}

export default Stories;