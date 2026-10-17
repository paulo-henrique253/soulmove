import AreaSm from "../../components/app/AreaSm"
import Conquista from "../../components/app/Conquista"
import FooterApp from "../../components/app/FooterApp"
import HeaderApp from "../../components/app/HeaderApp"
import Notificacao from "../../components/app/Notificacao"
import type { TipoConquista } from "../../types/conquista"
import { ListarConquistas } from "../../service/conquista"
import { useEffect, useState } from "react"

function SmConquistas() {
    const [conquistas, setConquistas] = useState<TipoConquista[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {

        async function carregar() {

            setCarregando(true);
            setErro("");

            try {

                setConquistas(await ListarConquistas());

            } catch (erro) {
                
                console.error("Não foi possível carregar as conquistas.", erro)
                setErro("Não foi possível carregar as conquistas.");

            } 
            finally {
                setCarregando(false)
            }
        }
        carregar();
    }, []);

    if (carregando) {
        return (

        <article>
            <HeaderApp/>
            <AreaSm/>

            <p className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display]">
                Carregando conquistas...
            </p>

            <FooterApp/>
        </article>
        )
    }

    if (erro) {
        return (
        <article>
            <HeaderApp/>
            <AreaSm/>

            <p className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display]">
                {erro}
            </p>

            <FooterApp/>
        </article>
        )
    }

    if (conquistas.length === 0) {
        return (
        <article>
            <HeaderApp/>
            <AreaSm/>

                <p className="relative bg-linear-to-r to-sky-400 from-indigo-500 p-3 rounded-2xl flex flex-col gap-3 drop-shadow-md/50 my-6 text-white font-[Momo_Trust_Display]">
                    Nenhuma conquista encontrada.
                </p>

            <FooterApp/>
        </article>
        );
    }

    return (
        <article>
            <HeaderApp />
            <AreaSm />

            <div className="bg-linear-to-t to-sky-200 from-indigo-300 -mx-4 px-5  border-gray-300 border-t-2">
                <Notificacao diretorio="#" texto="Você completou 4 conquistas!" imagem="/src/assets/smicon.png" alt="legenda sabor"/>

                 <div className="flex flex-col">
                    {conquistas.map((conquista) => (
                        <Conquista key={conquista.id} conquista={conquista}/>
                    ))}
                </div>
                
            </div>
  
           

            <FooterApp />
        </article>
    )
}

export default SmConquistas