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

            <HeaderApp pontos={100} icone="icone aqui"/>

            {/* RETIRAR DEPOIS */}

            <Link to="/appCalculadora" className={estilosLink}>
                Calculadora
            </Link>

            <Link to="/appCarteira" className={estilosLink}>
                Carteira
            </Link>

            <Link to="/appConquistas" className={estilosLink}>
                Conquistas
            </Link>

            <Link to="/appMissoes" className={estilosLink}>
                Missoes
            </Link>

            <Link to="/appPerfil" className={estilosLink}>
                Perfil
            </Link>

            <Link to="/appRecarga" className={estilosLink}>
                Recarga
            </Link>

            {/* RETIRAR DEPOIS */}

            <Carteira  icone="Icone do olinho aq" altIcon="Pictograma de olho"  imagem="Imagem da soulmove carteira aqui" altImg="Imagem da SoulUp na carteira."/>

            <div className="flex gap-1">
                <BotaoBola imagem= "img" diretorio="#" descricao="Sacar via PIX" alt="Pictograma do PIX"/>
                <BotaoBola imagem= "img" diretorio="#" descricao="Resgatar Vale Energia" alt="Pictograma de lâmpada"/>
                <BotaoBola imagem= "img" diretorio="#" descricao="Pagar conta de luz" alt="Pictograma de raio"/>
                <BotaoBola imagem= "img" diretorio="/appMissoes" descricao="Acessar a SoulMove" alt="Pictograma da SoulMove"/>
            </div>

            <Notificacao texto="Você tem 2 missões de mobilidade hoje!" imagem="" alt="Mini logo da SoulMove"/>
 
            <div>
                <Stories imagem="AD" alt="Imagem dos anúncios"/>
                <Stories imagem="Sabour" alt="Placeholder usuário"/>
                <Stories imagem="Sabour" alt="Placeholder usuário"/>
                <Stories imagem="Sabour" alt="Placeholder usuário"/>
            </div>

            <Postagem icon="zenix" altIcon="Icone do usuário" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png" altImg="Imagem da postagem"/>
            <Postagem icon="zenix" altIcon="Icone do usuário" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png" altImg="Imagem da postagem"/>
            <Postagem icon="zenix" altIcon="Icone do usuário" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png" altImg="Imagem da postagem"/>

            <FooterApp/>
        </article>
    )
}

export default SmInicio