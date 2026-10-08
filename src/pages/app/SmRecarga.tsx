import BotaoPix from "../../components/app/BotaoPix"
import CaixaPix from "../../components/app/CaixaPix"
import CardSaldo from "../../components/app/CardSaldo"

function SmRecarga() {
    return (
        <article>
            <img src="setinha de voltar" alt="Seta para voltar." />
            <h1>Recarregar Bilhete Único</h1>
            <p>Seus pontos de mobilidade viram crédito no seu cartão</p>

            <CardSaldo saldo={8.60}/>

            <div>
                <h3>Quando o saldo estiver liberado</h3>
                <li>
                    <div>
                        <img src="1" alt="1" />
                        <p>Gere o código Pix de recarga na Loja Virtual da SPTrans</p>
                    </div>

                    <div>
                        <img src="2" alt="2" />
                        <p>Copie o código Pix e cole no espaço abaixo</p>
                    </div>

                    <div>
                        <img src="3" alt="3" />
                        <p>Seu crédito cai no cartão em poucos minutos</p>
                    </div>

                    <BotaoPix/>
                    <CaixaPix/>
                </li>
            </div>
        </article>
    )
}

export default SmRecarga