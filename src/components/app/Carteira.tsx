import Saldo from "./Saldo";
import { Link } from "react-router";

type CarteiraProps = {
    icone: string
    altIcon: string
    imagem: string
    altImg: string
}

function Carteira( {icone, altIcon, imagem, altImg}: CarteiraProps) {
    return (
        <>
        <p>MINHA CARTEIRA</p>
        <div>
            <p>Saldo</p>
            <button><img src={icone} alt={altIcon} /></button>
        </div>

        <Saldo saldo= {0.46} descricao="Em desconto na conta de energia."/>
        <Saldo saldo= {0.46} descricao="Em desconto no transporte público."/>

        <Link to="/appCarteira" className="">Acesse a Carteira</Link>

        <img src={imagem} alt={altImg} />

        </>        
    );
}

export default Carteira;