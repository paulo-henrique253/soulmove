import { Link } from "react-router"
import BotaoPix from "../../components/app/BotaoPix"
import CaixaPix from "../../components/app/CaixaPix"
import CardSaldo from "../../components/app/CardSaldo"
import ItemLista from "../../components/app/ItemLista";
import { Navigate } from 'react-router';
import { useUsuario } from '../../hooks/useUsuario';
import SetaEsquerda from "../../assets/setaesquerda.png";

function SmRecarga() {
    const { usuario } = useUsuario();

    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }

    return (
        <article className="bg-indigo-500 -m-4 p-4 sm:p-5 pt-8 sm:pt-10 min-h-full flex flex-col justify-between">
            <div>
                <div className="flex gap-3 items-center">
                    <Link to="/appCarteira" className="p-1 hover:opacity-80">
                        <img src={SetaEsquerda} alt="Seta para voltar." className="w-4"/>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="font-[Momo_Trust_Display] text-white text-lg sm:text-xl font-bold">Recarregar Bilhete Único</h1>
                        <p className="font-[Lexend_Deca] text-white/90 text-[0.65rem] sm:text-xs">Seus pontos de mobilidade viram crédito no seu cartão</p>
                    </div>
                </div>
          
                <CardSaldo saldo={usuario? usuario.saldo:0}/>

                <section className="bg-white -mx-4 sm:-mx-5 rounded-t-4xl p-5 sm:p-6 flex flex-col gap-6 shadow-md mt-4">
                    <h3 className="text-indigo-600 font-[Lexend_Deca] text-sm font-semibold">Quando o saldo estiver liberado</h3>
                    <div className="flex flex-col gap-2.5">
                        <ItemLista numero="1" descricao="Gere o código Pix na Loja da SPTrans"/>
                        <ItemLista numero="2" descricao="Copie o código Pix e cole no espaço abaixo"/>
                        <ItemLista numero="3" descricao="Seu crédito cai no cartão em poucos minutos"/>
                    </div>

                    <BotaoPix />
                    <CaixaPix />
                </section>
            </div>
        </article>
    );
}

export default SmRecarga;