type StoriesProps = {
    imagem: string
}

function Stories( {imagem}: StoriesProps) {
    return (
        <div className="border-2">
            {imagem}
        </div>

    );
}

export default Stories;