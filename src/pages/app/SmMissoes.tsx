import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Notificacao from "../../components/app/Notificacao"

function SmMissoes() {
    return (

        <>
        <HeaderApp pontos={100} icone="icone aqui"/>
        <AreaSm/>

        <Notificacao texto="Você tem 2 missões diárias disponíveis!" imagem="sabor" alt="legenda sabor"/>
        
        <FooterApp/>
        </>
    )
}

export default SmMissoes