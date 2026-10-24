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
    const { usuario } = useUsuario()
    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }

    return (
        <article className="bg-indigo-500 -m-4 p-4 sm:p-5 pt-8 sm:pt-10 min-h-full flex flex-col justify-between">
            <div>
                {/* Topo: Pontos e Extrato */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2.5 items-center">
                        <Link to="/appInicio" className="p-1 hover:opacity-80">
                            <img src={SetaEsquerda} alt="Seta para voltar." className="w-4"/>
                        </Link>
                        <h1 className="font-[Momo_Trust_Display] text-white text-xl sm:text-2xl font-bold">pontos</h1>
                        <img src={SoulPoints} alt="Icone de moeda." className="w-7 sm:w-8"/>
                    </div>

                    <div className="flex justify-end items-center gap-1.5 cursor-pointer hover:opacity-85">
                        <p className="font-[Lexend_Deca] text-white text-xs sm:text-sm underline">Extrato</p>
                        <img src={IconDoc} alt="Pictograma de documento." className="w-4 sm:w-5"/>
                    </div>
                </div>

                {/* Bloco de Saldo */}
                <div className="flex flex-col gap-5 px-1">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <p className="font-[Lexend_Deca] text-white text-sm font-semibold">Saldo</p>
                            <button className="cursor-pointer hover:opacity-80">
                                <img src={IconOlho} alt="Pictograma de olho" className="w-5"/>
                            </button>
                        </div>

                        <div className="flex items-center gap-1 cursor-pointer hover:opacity-85">
                            <p className="font-[Lexend_Deca] text-white text-xs underline">Entenda o saldo</p>
                            <img src={SetaDireita} alt="Seta para a direita." className="w-3.5"/>
                        </div>  
                    </div>
                    
                    <div className="flex justify-between items-start gap-4">
                        <Saldo saldo={0} descricao="Em desconto na conta de energia."/>
                        <Saldo saldo={usuario.saldo} descricao="Em desconto no transporte público."/>
                    </div>
                </div>
            </div>

            {/* Parte Branca Inferior */}
            <article className="bg-white -mx-4 sm:-mx-5 rounded-t-4xl p-5 flex flex-col gap-6 mt-8 shadow-md">
                <div className="flex justify-around items-start gap-2">
                    <BotaoBola imagem={PixIcon} diretorio="#" descricao="Sacar via PIX" alt="Pictograma PIX." funcional={false}/>
                    <BotaoBola imagem={SmIcon} diretorio="/appRecarga" descricao="Recarregar Bilhete" alt="Pictograma SoulMove." funcional={true}/>
                    <BotaoBola imagem={RaiopIcon} diretorio="#" descricao="Conta de luz" alt="Pictograma Raio." funcional={false}/>
                    <BotaoBola imagem={IconMoeda} diretorio="#" descricao="Vale-Energia" alt="Pictograma Moeda." funcional={false}/>
                </div>

                <h2 className="font-[Momo_Trust_Display] text-base sm:text-lg font-bold text-gray-800">Meus Valores</h2>

                <div className="flex flex-col gap-5 pb-4">
                    <SessaoCarteira icone={IconDocRoxo} alt="Pictograma de documento." titulo="Acompanhamentos" descricao="Seus saques e cupons em andamento"/>
                    <SessaoCarteira icone={IconRaioRoxo} alt="Pictograma de raio." titulo="Vale-Energia" descricao="Valor do desconto na conta de Luz"/>
                    <SessaoCarteira icone={IconDocRoxo} alt="Pictograma de documento." titulo="Cupons Fiscais" descricao="A cada cupom enviado você ganha +5 pontos"/>
                    <SessaoCarteira icone={IconMoedaRoxa} alt="Pictograma de moeda." titulo="Contas Pagas" descricao="Seu histórico de contas pagas"/>
                </div>
            </article>
        </article>
    );
}

export default SmCarteira;