import AreaSm from "../../components/app/AreaSm"
import Conquista from "../../components/app/Conquista"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"

function SmConquistas() {
    return (
        <>
            <HeaderApp />
            <AreaSm />

            {/* temporario */}
            <Conquista titulo="Amigo da Mobilidade Urbana" descricao="Conclua 50 missões relacionadas ao transporte público." progresso={10} total={50} pontos={300} recompensas="Título “Amigo da Mobilidade Urbana”" icone="reloginho" />

            <FooterApp />
        </>
    )
}

export default SmConquistas