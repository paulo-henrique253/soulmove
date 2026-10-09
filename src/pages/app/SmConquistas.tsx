import AreaSm from "../../components/app/AreaSm"
import Conquista from "../../components/app/Conquista"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Notificacao from "../../components/app/Notificacao"
function SmConquistas() {
    return (
        <article>
            <HeaderApp />
            <AreaSm />

            <div className="bg-linear-to-t to-sky-200 from-indigo-300 -mx-4 px-5  border-gray-300 border-t-2">
                <Notificacao diretorio="#" texto="Você completou 4 conquistas!" imagem="/src/assets/smicon.png" alt="legenda sabor"/>

                <div>
                    {/* temporario */}
                    <Conquista titulo="Amigo da Mobilidade Urbana" descricao="Conclua 50 missões relacionadas ao transporte público." progresso={10} total={50} pontos={300} recompensas="Título “Amigo da Mobilidade Urbana”" icone="reloginho" />

                    <Conquista titulo="Amigo da Mobilidade Urbana" descricao="Conclua 50 missões relacionadas ao transporte público." progresso={10} total={50} pontos={300} recompensas="Título “Amigo da Mobilidade Urbana”" icone="reloginho" />
                </div>
            </div>
  
           

            <FooterApp />
        </article>
    )
}

export default SmConquistas