import { Link } from "react-router"

type MissaoProps = {
    titulo: string
    descricao: string
    tempo: string
    pontos: string
    icone: string
    imagem:string
}


function Missao( {titulo, descricao, tempo, pontos, icone, imagem}: MissaoProps) {
    return (
        <>
        <img src={imagem} alt="Imagem de fundo da missão." />
        <div>
            <h2>{titulo}</h2>
            <img src={icone} alt="Indicação de conclusão." />
        </div> 
        <span className="border-white"></span>

        <p>{descricao}</p>

        <div>
            <div>
                <Link to="/appMissao">Vamor lá?</Link>
                <p>{tempo}</p>
            </div>

            <p>{pontos}pts</p>
        </div>



        </>   
    );
}

export default Missao;