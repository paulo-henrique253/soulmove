import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Missao from "../../components/app/Missao"
import Notificacao from "../../components/app/Notificacao"

function SmMissoes() {
    return (

        <>
        <HeaderApp/>
        <AreaSm/>

        <Notificacao diretorio="#" texto="Você tem 2 missões diárias disponíveis!" imagem="/src/assets/smicon.png" alt="legenda sabor"/>

        {/* temporario */}
        <Missao titulo="Use o Transporte Público" descricao="Complete um trajeto complexo (longo) utilizando o transporte público" tempo="3 dias" pontos="100" imagem="/src/assets/capa_mid2.png"/>

        <FooterApp/>
        </>
    )
}

export default SmMissoes