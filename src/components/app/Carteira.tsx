import Saldo from "./Saldo";

type CarteiraProps = {
}

function Carteira( {}: CarteiraProps) {
    return (
        <>
        <p>MINHA CARTEIRA</p>
        <div>
            <p>Saldo</p>
            <button><img src="" alt="" /></button>
        </div>

        <Saldo/>
        <Saldo/>

        <a href="">Acessar carteira</a>

        </>        
    );
}

export default Carteira;