import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Missao from "../../components/app/Missao"
import Notificacao from "../../components/app/Notificacao"

function SmMissoes() {
    return (

        <>
        <HeaderApp pontos={100} icone="icone aqui"/>
        <AreaSm/>

        <Notificacao texto="Você tem 2 missões diárias disponíveis!" imagem="sabor" alt="legenda sabor"/>

        {/* temporario */}
        <Missao titulo="Use o Transporte Público" descricao="Complete um trajeto complexo (longo) utilizando o transporte público" tempo="3 dias" pontos="100" icone="reloginho aq" imagem="imagem de fundo aqui"/>

        <FooterApp/>
        </>
    )
}

export default SmMissoes