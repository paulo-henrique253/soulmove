import BotaoBola from "../../components/app/BotaoBola"
import Carteira from "../../components/app/Carteira"
import Notificacao from "../../components/app/Notificacao"
import Postagem from "../../components/app/Postagem"
import Stories from "../../components/app/Stories"
import HeaderApp from "../../components/app/HeaderApp";
import FooterApp from "../../components/app/FooterApp";
import { Navigate } from 'react-router';
import { useUsuario } from '../../hooks/useUsuario';
import PixIcon from "../../assets/pixicon.png";
import RaiopIcon from "../../assets/raiopicon.png";
import SmIcon from "../../assets/smicon.png";
import LampadaIcon from "../../assets/lampadaicon.png";
import Ads from "../../assets/ads.png";
import UserPfp from "../../assets/userpfp.png";
import SmPfp from "../../assets/smpfp.png";
import Post1 from "../../assets/post1.png";

function SmInicio () {
    const { usuario } = useUsuario();
    if (!usuario) {
        return <Navigate to={'/applogin'} />;
    }

    return (
        <article className="min-h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <HeaderApp />
                
                <div className="bg-gray-100 -mx-4 p-4 sm:p-5 border-gray-300 border-t-2">
                    <Carteira />

                    <div className="flex justify-around items-start gap-1 sm:gap-2 mt-4">
                        <BotaoBola imagem={PixIcon} diretorio="#" descricao="Sacar via PIX" alt="Pictograma do PIX" funcional={false}/>
                        <BotaoBola imagem={LampadaIcon} diretorio="#" descricao="Vale Energia" alt="Pictograma de lâmpada" funcional={false}/>
                        <BotaoBola imagem={RaiopIcon} diretorio="#" descricao="Conta de luz" alt="Pictograma de raio" funcional={false}/>
                        <BotaoBola imagem={SmIcon} diretorio="/appMissoes" descricao="SoulMove" alt="Pictograma da SoulMove" funcional={true}/>
                    </div>
                </div>

                <div className="px-1">
                    <Notificacao diretorio="/appMissoes" texto="Você tem 2 missões de mobilidade hoje!" imagem={SmIcon} alt="Mini logo da SoulMove"/>
                </div>

                <div className="flex justify-around sm:justify-center items-center gap-2 sm:gap-4 overflow-x-auto py-2 px-1">
                    <Stories imagem={Ads} alt="Imagem dos anúncios"/>
                    <Stories imagem={UserPfp} alt="Placeholder usuário"/>
                    <Stories imagem={UserPfp} alt="Placeholder usuário"/>
                    <Stories imagem={UserPfp} alt="Placeholder usuário"/>
                </div>

                <Postagem icon={SmPfp} usuario="SoulMove" tempo="há 1 minuto" imagem={Post1}/>
            </div>
        
            <FooterApp />
        </article>
    );
}

export default SmInicio;