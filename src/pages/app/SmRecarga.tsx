import { Link } from "react-router"
import BotaoPix from "../../components/app/BotaoPix"
import CaixaPix from "../../components/app/CaixaPix"
import CardSaldo from "../../components/app/CardSaldo"
import { usuario } from "../../data/usuario";

function SmRecarga() {
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
      
            <CardSaldo saldo={usuario.saldoMobilidade}/>

            <div>
                <h3>Quando o saldo estiver liberado</h3>
                <div>
                    <div>
                        <p>1</p>
                        <p>Gere o código Pix de recarga na Loja Virtual da SPTrans</p>
                    </div>

                    <div>
                        <p>2</p>
                        <p>Copie o código Pix e cole no espaço abaixo</p>
                    </div>

                    <div>
                        <p>3</p>
                        <p>Seu crédito cai no cartão em poucos minutos</p>
                    </div>

                    <BotaoPix/>
                    <CaixaPix/>
                </div>
            </div>
        </article>
    )
}

export default SmRecarga