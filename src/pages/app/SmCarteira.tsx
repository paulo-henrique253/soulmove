import { Link, Navigate } from 'react-router';
import BotaoBola from "../../components/app/BotaoBola";
import Saldo from "../../components/app/Saldo";
import SessaoCarteira from "../../components/app/SessaoCarteira";
import { useUsuario } from '../../hooks/useUsuario';
import SetaEsquerda from '../../assets/setaesquerda.png';
import SoulPoints from "../../assets/soulpoints.png";
import IconDoc from "../../assets/icondoc.png";
import IconOlho from "../../assets/iconolho.png";
import SetaDireita from "../../assets/setadireita.png" 
import PixIcon from "../../assets/pixicon.png";
import SmIcon from "../../assets/smicon.png";
import RaiopIcon from "../../assets/raiopicon.png";
import IconMoeda from "../../assets/iconmoeda.png";
import IconDocRoxo from "../../assets/icondocroxo.png";
import IconRaioRoxo from "../../assets/iconraioroxo.png";
import IconMoedaRoxa from "../../assets/iconmoedaroxa.png";


function SmCarteira() {
    const {usuario} = useUsuario()
    if(!usuario){
        return <Navigate to={'/applogin'} />;
    }
    return (
        
        <article className="bg-indigo-500 -m-4 p-5 pt-15">

        <div className="flex  justify-between mb-20">
            <div className="flex gap-3 items-center">
                <Link to="/appInicio">
                <img src= {SetaEsquerda} alt="Seta para voltar." className="w-4"/>
                </Link>
                <h1 className="font-[Momo_Trust_Display]  text-white text-2xl">pontos</h1>
                <img src={SoulPoints} alt="Icone de moeda." className="w-8"/>
            </div>

            <div className="flex justify-end items-center gap-2">
                <p className="font-[Lexend_Deca] text-white underline">Extrato</p>
                <img src={IconDoc} alt="Pictograma de documento." className="w-5"/>
            </div>
        </div>

        <div className="flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <p className="font-[Lexend_Deca] text-white">Saldo</p>
                    <button><img src={IconOlho} alt="Pictograma de olho" className="w-5"/></button>
                </div>

                <div className="flex items-center justify-end">
                    <p className="font-[Lexend_Deca] text-white underline">Entenda o saldo</p>
                    <img src={SetaDireita} alt="Seta para a direita." className="w-4"/>
                </div>  
            </div>
            
            <div className="flex gap-10">
                <Saldo saldo= {0} descricao="Em desconto na conta de energia."/>
                <Saldo saldo= {usuario.saldo} descricao="Em desconto no transporte público."/>
            </div>
        </div>

        <article className="bg-white -mx-5 rounded-t-4xl p-5 flex flex-col gap-10 mb-5 mt-10">
            <div className="flex gap-4">
                <BotaoBola imagem={PixIcon} diretorio="#" descricao="Sacar via PIX" alt="Pictograma PIX." funcional={false}/>
                <BotaoBola imagem={SmIcon} diretorio="/appRecarga" descricao="Recarregar Bilhete" alt="Pictograma SoulMove." funcional={true}/>
                <BotaoBola imagem={RaiopIcon} diretorio="#" descricao="Pagar conta de luz" alt="Pictograma Raio." funcional={false}/>
                <BotaoBola imagem={IconMoeda} diretorio="#" descricao="Vale-Energia" alt="Pictograma Moeda." funcional={false}/>
            </div>

            <h2 className="font-[Momo_Trust_Display] font-black">Meus Valores</h2>

            <div className="flex flex-col gap-10">
                <SessaoCarteira icone={IconDocRoxo} alt="Pictograma de documento." titulo="Acompanhamentos" descricao="Seus saques e cupons em andamento"/>
                <SessaoCarteira icone={IconRaioRoxo} alt="Pictograma de raio." titulo="Vale-Energia" descricao="Valor do desconto na conta de Luz"/>
                <SessaoCarteira icone={IconDocRoxo} alt="Pictograma de documento." titulo="Cupons Fiscais" descricao="A cada cupom enviado você ganha +5 pontos"/>
                <SessaoCarteira icone={IconMoedaRoxa} alt="Pictograma de moeda." titulo="Contas Pagas" descricao="Seu histórico de contas pagas"/>
            </div>
            
        </article>

        </article>
    );
}

export default SmCarteira