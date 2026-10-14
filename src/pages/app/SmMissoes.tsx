import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Missao from "../../components/app/Missao"
import Notificacao from "../../components/app/Notificacao"

function SmMissoes() {
    return (

        <article>
            <HeaderApp/>
            <AreaSm/>

            <div className="bg-linear-to-t to-sky-200 from-indigo-300 -mx-4 px-5  border-gray-300 border-t-2">
                <Notificacao diretorio="#" texto="Você tem 2 missões diárias disponíveis!" imagem="/src/assets/smicon.png" alt="legenda sabor"/>

                {/* temporario */}
                <div className="flex flex-col">
                    <Missao titulo="Use o Transporte Público" descricao="Complete um trajeto complexo (longo) utilizando o transporte público" tempo="3 dias" pontos="100" imagem="/src/assets/capa_mid2.png"/>

                    <Missao titulo="Use o Transporte Público" descricao="Complete um trajeto complexo (longo) utilizando o transporte público" tempo="3 dias" pontos="100" imagem="/src/assets/capa_mid2.png"/>
                </div>
                
            </div>
        
            <FooterApp/>
        </article>
    )
}

export default SmMissoes