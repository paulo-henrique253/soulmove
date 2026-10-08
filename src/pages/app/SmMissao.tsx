import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"

function SmMissao() {
    return (
        <article>
            <HeaderApp />
            <AreaSm />
            <img src="path/to/image.jpg" alt="Description" />
            <div>
                <h1></h1>
                <h2>Status: </h2>
                <button>
                    <p>Comprove sua ação!</p>
                    <img src="" alt="" />
                    <p>max. de 50mb</p>
                </button>
                <h3>Você receberá:</h3>
                <p>Pts</p>
            </div>
            <FooterApp />
        </article>
    )
}

export default SmMissao