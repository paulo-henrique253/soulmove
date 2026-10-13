import { Link } from "react-router";
import BotaoBola from "../../components/app/BotaoBola";
import Saldo from "../../components/app/Saldo";
import SessaoCarteira from "../../components/app/SessaoCarteira";

function SmCarteira() {
    return (
        
        <>
        <div>
            <div>
                <Link to="/appInicio">
                <img src="/src/assets/setadireita.png" alt="Seta para voltar." />
                </Link>
                <h1>pontos</h1>
                <img src="/src/assets/soulpoints.png" alt="Icone de moeda." />
            </div>

            <div>
                <p>Extrato</p>
                <img src="/src/assets/icondoc.png" alt="Pictograma de documento." />
            </div>
        </div>

        <div>
            <div>
                <p>Saldo</p>
                <button><img src="/src/assets/iconolho.png" alt="Pictograma de olho" /></button>
            </div>

            <div>
                <p>Entenda o saldo</p>
                <img src="/src/assets/setaesquerda.png" alt="Seta para a direita." />
            </div>

            <Saldo saldo= {0.46} descricao="Em desconto na conta de energia."/>
            <Saldo saldo= {0.46} descricao="Em desconto no transporte público."/>
        </div>

        <article>
            <div>
                <BotaoBola imagem="/src/assets/pixicon.png" diretorio="#" descricao="Sacar via PIX" alt="Pictograma PIX." funcional={false}/>
                <BotaoBola imagem="/src/assets/smicon.png" diretorio="/appRecarga" descricao="Recarregar Bilhete" alt="Pictograma SoulMove." funcional={true}/>
                <BotaoBola imagem="/src/assets/raiopicon.png" diretorio="#" descricao="Pagar conta de luz" alt="Pictograma Raio." funcional={false}/>
                <BotaoBola imagem="/src/assets/iconmoeda.png" diretorio="#" descricao="Resgate Vale-Energia" alt="Pictograma Moeda." funcional={false}/>
            </div>

            <h2>Meus Valores</h2>

            <SessaoCarteira icone="/src/assets/icondocroxo.png" alt="Pictograma de documento." titulo="Acompanhamentos" descricao="Seus saques e cupons em andamento"/>
            <SessaoCarteira icone="/src/assets/iconraioroxo.png" alt="Pictograma de raio." titulo="Vale-Energia" descricao="Valor do desconto na conta de Luz"/>
            <SessaoCarteira icone="/src/assets/icondocroxo.png" alt="Pictograma de documento." titulo="Cupons Fiscais" descricao="A cada cupom enviado você ganha +5 pontos"/>
            <SessaoCarteira icone="/src/assets/iconmoedaroxa.png" alt="Pictograma de moeda." titulo="Contas Pagas" descricao="Seu histórico de contas pagas"/>
        </article>
        </>
    );
}

export default SmCarteira