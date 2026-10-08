import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Trajeto from "../../components/app/Trajeto"
import TrajetoInput from "../../components/app/TrajetoInput"

function SmCalculadora() {
    return (
        <article>
            <HeaderApp/>
            <AreaSm/>

            {/* LEMBRETE IMPORTANTE: A SEGUIR TEM DADOS IMAGINARIOS APENAS PARA VIZUALIZAÇÃO DO COMPONENTE ANTES DA IMPLEMENTAÇÃO DO BACKEND*/}

            <TrajetoInput partida="R. Lorem Ipsum n67" destino="R. Dolor Sit Amet n42" distancia={12}/>
            <img src="" alt="" /> {/*mapa*/}
            <article>
                <Trajeto duracao={1} tipo="Metrô + Caminhada" susicon="<3" sustentabilidade="Melhor opção!" carbono={0.1}/>
                <Trajeto duracao={54} tipo="Carro" susicon="<3" sustentabilidade="Nocivo" carbono={2.6} />
            </article>

            <FooterApp/>
        </article>
    )
}

export default SmCalculadora