import { Link } from "react-router";
import Saldo from "./Saldo";
import { usuario } from "../../data/usuario";


function Carteira() {
    return (
        <article className="relative overflow-hidden bg-linear-to-r to-sky-400 from-indigo-500 p-5 text-white rounded-2xl drop-shadow-md/50 mt-6 mb-7 mr-2 ml-2">

            <div className="relative z-10">
                <p className="font-['Lexend_Deca'] text-[0.8rem]">MINHA CARTEIRA</p>

                <div className="flex items-center gap-2 mt-1 mb-2 ">
                    <p className="text-md font-['Momo_Trust_Display']">Saldo</p>
                    <button className="hover:opacity-80 transition-opacity">
                        <img src="/src/assets/iconolho.png" alt="Botão de esconder saldo" className="w-7" />
                    </button>
                </div>


                <div className="flex gap-5">
                    <Saldo saldo={usuario.saldoLuz} descricao="Em desconto na conta de energia." />
                    <Saldo saldo={usuario.saldoMobilidade} descricao="Em desconto no transporte público." />
                </div>

                <div className="mt-3 flex justify-center">
                    <Link to="/appCarteira" className="underline text-[0.8rem] font-[Lexend_Deca]">
                        Acesse a Carteira
                    </Link>
                </div>
            </div>


            <img
                src="/src/assets/logosu.png"
                alt="Logo da SoulUp"
                className="absolute right-0 top-0 h-full w-auto object-contain opacity-10 mix-blend-overlay pointer-events-none"
            />

        </article>
    );
}

export default Carteira;
