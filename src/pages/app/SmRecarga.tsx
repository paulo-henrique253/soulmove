import { Link } from "react-router"
import BotaoPix from "../../components/app/BotaoPix"
import CaixaPix from "../../components/app/CaixaPix"
import CardSaldo from "../../components/app/CardSaldo"
import ItemLista from "../../components/app/ItemLista";
import { Navigate } from 'react-router';
import { useUsuario } from '../../hooks/useUsuario';


function SmRecarga() {
    const {usuario} = useUsuario();

    if(!usuario){
        return <Navigate to={'/applogin'} />;
    }
    return (
        
        <article className="bg-indigo-500 -m-4 p-5 pt-15">
            <div className="flex gap-3 items-center">
            <Link to="/appCarteira">
            <img src="/src/assets/setaesquerda.png" alt="Seta para voltar." className="w-4"/>
            </Link>
                <div className="flex flex-col">
                    <h1 className="font-[Momo_Trust_Display]  text-white text-lg">Recarregar Bilhete Único</h1>
                    <p className="font-[Lexend_Deca] text-white text-[0.6rem]">Seus pontos de mobilidade viram crédito no seu cartão</p>
                </div>
              
            </div>
      
            <CardSaldo saldo={123}/>

            <section className="bg-white -mx-5 rounded-t-4xl p-7 flex flex-col gap-10">
                <h3 className="text-indigo-500 font-[Lexend_Deca]">Quando o saldo estiver liberado</h3>
                <div className="flex flex-col gap-3">
                    <ItemLista numero="1" descricao="Gere o código Pix na Loja da SPTrans"/>

                    <ItemLista numero="2" descricao="Copie o código Pix e cole no espaço abaixo"/>

                    <ItemLista numero="3" descricao="Seu crédito cai no cartão em poucos minutos"/>
                </div>

                <BotaoPix />
                <CaixaPix />
            </section>
        
        </article>
    )
}

export default SmRecarga