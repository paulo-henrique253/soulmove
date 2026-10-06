import BotaoBola from "../../components/app/BotaoBola";
import Saldo from "../../components/app/Saldo";
import SessaoCarteira from "../../components/app/SessaoCarteira";

function SmCarteira() {
    return (
        
        <>
        <div>
            <div>
                <img src="" alt="" />
                <h1>pontos</h1>
                <img src="" alt="" />
            </div>

            <div>
                <p>Extrato</p>
                <img src="" alt="" />
            </div>
        </div>

        <div>
            <div>
                <p>Saldo</p>
                <img src="" alt="" />
            </div>

            <div>
                <p>Entenda o saldo</p>
                <img src="" alt="" />
            </div>

            <Saldo saldo= {0.46} descricao="Em desconto na conta de energia."/>
            <Saldo saldo= {0.46} descricao="Em desconto no transporte público."/>
        </div>

        <article>
            <div>
                <BotaoBola imagem="pix" diretorio="#" descricao="Sacar via PIX" alt="Pictograma PIX."/>
                <BotaoBola imagem="recarga" diretorio="/appRecarga" descricao="Recarregar Bilhete" alt="Pictograma SoulMove."/>
                <BotaoBola imagem="conta de luz" diretorio="#" descricao="Pagar conta de luz" alt="Pictograma Raio."/>
                <BotaoBola imagem="vale-energia" diretorio="#" descricao="Resgate Vale-Energia" alt="Pictograma Moeda."/>
            </div>

            <h2>Meus Valores</h2>

            <SessaoCarteira icone="files" alt="Pictograma de documento." titulo="Acompanhamentos" descricao="Seus saques e cupons em andamento"/>
            <SessaoCarteira icone="raio" alt="Pictograma de raio." titulo="Vale-Energia" descricao="Valor do desconto na conta de Luz"/>
            <SessaoCarteira icone="files" alt="Pictograma de documento." titulo="Cupons Fiscais" descricao="A cada cupom enviado você ganha +5 pontos"/>
            <SessaoCarteira icone="moeda" alt="Pictograma de moeda." titulo="Contas Pagas" descricao="Seu histórico de contas pagas"/>
        </article>
        </>
    );
}

export default SmCarteira