import BotaoBola from "../../components/app/BotaoBola"
import Carteira from "../../components/app/Carteira"
import Notificacao from "../../components/app/Notificacao"
import Postagem from "../../components/app/Postagem"
import Stories from "../../components/app/Stories"

function SmCarteira() {
    return (
        <>
            <p>Carteira</p>

            <Carteira/>

            <div className="flex gap-1">
                <BotaoBola imagem= "img" descricao="Sacar via PIX"/>
                <BotaoBola imagem= "img" descricao="Resgatar Vale Energia"/>
                <BotaoBola imagem= "img" descricao="Pagar conta de luz"/>
                <BotaoBola imagem= "img" descricao="Acessar a SoulMove"/>
            </div>

            <Notificacao texto="Você tem 2 missões de mobilidade hoje!"/>

            <div>
                <Stories imagem="AD"/>
                <Stories imagem="Sabour"/>
                <Stories imagem="Sabour"/>
                <Stories imagem="Sabour"/>
            </div>

            <Postagem icon="zenix" alt="oi" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png"/>
            <Postagem icon="zenix" alt="oi" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png"/>
            <Postagem icon="zenix" alt="oi" usuario="zenix" tempo="a 67 minutos" imagem="/src/assets/zeni.png"/>
        </>

    )
}

export default SmCarteira