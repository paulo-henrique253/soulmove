import { Link, Navigate } from 'react-router';
import BotaoBola from "../../components/app/BotaoBola";
import Saldo from "../../components/app/Saldo";
import SessaoCarteira from "../../components/app/SessaoCarteira";
import { usuario } from "../../data/usuario";
function SmCarteira() {
    if(!usuario){
        return <Navigate to={'/applogin'} />;
    }
    return (
        
        <article className="bg-indigo-500 -m-4 p-5 pt-15">

        <div className="flex  justify-between mb-20">
            <div className="flex gap-3 items-center">
                <Link to="/appInicio">
                <img src="/src/assets/setaesquerda.png" alt="Seta para voltar." className="w-4"/>
                </Link>
                <h1 className="font-[Momo_Trust_Display]  text-white text-2xl">pontos</h1>
                <img src="/src/assets/soulpoints.png" alt="Icone de moeda." className="w-8"/>
            </div>

            <div className="flex justify-end items-center gap-2">
                <p className="font-[Lexend_Deca] text-white underline">Extrato</p>
                <img src="/src/assets/icondoc.png" alt="Pictograma de documento." className="w-5"/>
            </div>
        </div>

        <div className="flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <p className="font-[Lexend_Deca] text-white">Saldo</p>
                    <button><img src="/src/assets/iconolho.png" alt="Pictograma de olho" className="w-5"/></button>
                </div>

                <div className="flex items-center justify-end">
                    <p className="font-[Lexend_Deca] text-white underline">Entenda o saldo</p>
                    <img src="/src/assets/setadireita.png" alt="Seta para a direita." className="w-4"/>
                </div>  
            </div>
            
            <div className="flex gap-10">
                <Saldo saldo= {usuario.saldoLuz} descricao="Em desconto na conta de energia."/>
                <Saldo saldo= {usuario.saldoMobilidade} descricao="Em desconto no transporte público."/>
            </div>
        </div>

        <article className="bg-white -mx-5 rounded-t-4xl p-5 flex flex-col gap-10 mb-5 mt-10">
            <div className="flex gap-4">
                <BotaoBola imagem="/src/assets/pixicon.png" diretorio="#" descricao="Sacar via PIX" alt="Pictograma PIX." funcional={false}/>
                <BotaoBola imagem="/src/assets/smicon.png" diretorio="/appRecarga" descricao="Recarregar Bilhete" alt="Pictograma SoulMove." funcional={true}/>
                <BotaoBola imagem="/src/assets/raiopicon.png" diretorio="#" descricao="Pagar conta de luz" alt="Pictograma Raio." funcional={false}/>
                <BotaoBola imagem="/src/assets/iconmoeda.png" diretorio="#" descricao="Vale-Energia" alt="Pictograma Moeda." funcional={false}/>
            </div>

            <h2 className="font-[Momo_Trust_Display] font-black">Meus Valores</h2>

            <div className="flex flex-col gap-10">
                <SessaoCarteira icone="/src/assets/icondocroxo.png" alt="Pictograma de documento." titulo="Acompanhamentos" descricao="Seus saques e cupons em andamento"/>
                <SessaoCarteira icone="/src/assets/iconraioroxo.png" alt="Pictograma de raio." titulo="Vale-Energia" descricao="Valor do desconto na conta de Luz"/>
                <SessaoCarteira icone="/src/assets/icondocroxo.png" alt="Pictograma de documento." titulo="Cupons Fiscais" descricao="A cada cupom enviado você ganha +5 pontos"/>
                <SessaoCarteira icone="/src/assets/iconmoedaroxa.png" alt="Pictograma de moeda." titulo="Contas Pagas" descricao="Seu histórico de contas pagas"/>
            </div>
            
        </article>

        </article>
    );
}

export default SmCarteira