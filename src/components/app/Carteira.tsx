import { Link } from "react-router";
import Saldo from "./Saldo";
import { useUsuario } from "../../hooks/useUsuario";
import IconOlho from "../../assets/iconolho.png";
import LogoUsu from "../../assets/logosu.png"

function Carteira() {
    const { usuario } = useUsuario()
    return (
        <article className="relative overflow-hidden bg-linear-to-r to-sky-400 from-indigo-500 p-4 sm:p-5 text-white rounded-2xl drop-shadow-md/50 my-2">
            <div className="relative z-10">
                <p className="font-['Lexend_Deca'] text-[0.75rem] font-medium tracking-wider">MINHA CARTEIRA</p>

                <div className="flex items-center gap-2 mt-1 mb-2">
                    <p className="text-base font-['Momo_Trust_Display'] font-bold">Saldo</p>
                    <button className="hover:opacity-80 transition-opacity cursor-pointer">
                        <img src={IconOlho} alt="Botão de esconder saldo" className="w-5 sm:w-6" />
                    </button>
                </div>

                <div className="flex justify-between items-start gap-4">
                    <Saldo saldo={0} descricao="Em desconto na conta de energia." />
                    <Saldo saldo={usuario ? usuario.saldo : 0} descricao="Em desconto no transporte público." />
                </div>

                <div className="mt-3 flex justify-center">
                    <Link to="/appCarteira" className="underline text-xs font-[Lexend_Deca] hover:text-white/80 transition-colors">
                        Acesse a Carteira
                    </Link>
                </div>
            </div>

            <img
                src={LogoUsu}
                alt="Logo da SoulUp"
                className="absolute right-0 top-0 h-full w-auto object-contain opacity-10 mix-blend-overlay pointer-events-none"
            />
        </article>
    );
}

export default Carteira;
