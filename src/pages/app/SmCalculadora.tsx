import AreaSm from "../../components/app/AreaSm"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import { Navigate } from 'react-router';
import { useUsuario } from '../../hooks/useUsuario';

function SmCalculadora() {
    const {usuario} = useUsuario();

    if(!usuario){
       
        return <Navigate to={'/applogin'} />;
    }

    return (
        <article>
            <HeaderApp/>
            <AreaSm/>



            <FooterApp/>
        </article>
    )
}

export default SmCalculadora