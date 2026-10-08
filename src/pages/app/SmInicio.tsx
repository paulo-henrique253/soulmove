import { Link } from "react-router";

import BotaoBola from "../../components/app/BotaoBola"
import Carteira from "../../components/app/Carteira"
import Notificacao from "../../components/app/Notificacao"
import Postagem from "../../components/app/Postagem"
import Stories from "../../components/app/Stories"
import HeaderApp from "../../components/app/HeaderApp";
import FooterApp from "../../components/app/FooterApp";

const estilosLink = `
        font-['Momo_Trust_Display']
        text-black
        hover:opacity-80
        text-[clamp(1.2rem,5vw,2rem)]
        font-normal
        no-underline
        whitespace-nowrap
        text-center
        md:text-[.8rem]
        lg:text-[1rem]
    `;

function SmInicio () {
    return (
        <article className="
        grid
        ">

            <HeaderApp/>

            <Carteira  icone="Icone do olinho aq" altIcon="Pictograma de olho"  imagem="Imagem da soulmove carteira aqui" altImg="Imagem da SoulUp na carteira."/>

            <div className="flex gap-1 justify-center items-center">
                <BotaoBola imagem= "/src/assets/pixicon.png" diretorio="#" descricao="Sacar via PIX" alt="Pictograma do PIX"/>
                <BotaoBola imagem= "/src/assets/lampadaicon.png" diretorio="#" descricao="Resgatar Vale Energia" alt="Pictograma de lâmpada"/>
                <BotaoBola imagem= "/src/assets/raiopicon.png" diretorio="#" descricao="Pagar conta de luz" alt="Pictograma de raio"/>
                <BotaoBola imagem= "/src/assets/smicon.png" diretorio="/appMissoes" descricao="Acessar a SoulMove" alt="Pictograma da SoulMove"/>
            </div>

            <Notificacao texto="Você tem 2 missões de mobilidade hoje!" imagem="" alt="Mini logo da SoulMove"/>
 
            <div className="flex gap-5 justify-center">
                <Stories imagem="/src/assets/ads.png" alt="Imagem dos anúncios"/>
                <Stories imagem="/src/assets/userpfp.png" alt="Placeholder usuário"/>
                <Stories imagem="/src/assets/userpfp.png" alt="Placeholder usuário"/>
                <Stories imagem="/src/assets/userpfp.png" alt="Placeholder usuário"/>
            </div>

            <Postagem icon="/src/assets/smpfp.png" usuario="SoulMove" tempo="há 1 minuto" imagem="/src/assets/post1.png"/>
        
            <FooterApp/>
        </article>
    )
}

export default SmInicio