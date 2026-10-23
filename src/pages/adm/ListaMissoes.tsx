import { Link } from "react-router";
import type { TipoMissao } from "../../types/missao"; // Ajuste o caminho conforme seu projeto
import { useEffect, useState } from "react";
import { ListarMissoes } from "../../service/missao"; // Ajuste o caminho conforme seu projeto
import { useUsuario } from '../../hooks/useUsuario';
import { useNavigate } from 'react-router';

export default function ListaMissoes() {

    const [missoes, setMissoes] = useState<TipoMissao[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);


    const {usuario} = useUsuario();
	const navigate = useNavigate();

	if(!usuario?.isAdm){ navigate("/")}

    useEffect(() => {
        async function carregar() {
            setCarregando(true);
            setErro("");

            try {
              setMissoes(await ListarMissoes());
            } catch (erro) {
                console.error("Não foi possível carregar as missões.", erro)
                setErro("Não foi possível carregar as missões.");
            } finally {
                setCarregando(false)
            }
        }
        carregar();
    }, []);

    if(carregando){
      return(
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-8">
          <header className="text-center max-w-3xl mb-12 space-y-4">
            <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
              Lista de Missões
            </h1>
            <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
              Visualize e gerencie todas as missões cadastradas no sistema.
            </p>
          </header>

          <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Imagem</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Título da Missão</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Prazo</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                    <th className="py-4 px-6 font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-gray-500">
                      Carregando missões...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )
    }

    if(!erro && missoes.length === 0){
        setErro("Nenhuma missão cadastrada");
    }

    if(erro){
      return(
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-8">
          <header className="text-center max-w-3xl mb-12 space-y-4">
            <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
              Lista de Missões
            </h1>
            <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
              Visualize e gerencie todas as missões cadastradas no sistema.
            </p>
          </header>

          <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Imagem</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Título da Missão</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Prazo</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                    <th className="py-4 px-6 font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-rose-500 font-bold">
                      {erro}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )
    }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-8">
      
      <div className="text-center max-w-3xl mb-12 space-y-4">
        <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
          Lista de Missões
        </h1>
        <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
          Visualize e gerencie todas as missões cadastradas no sistema.
        </p>
      </div>

      <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
              <tr>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Imagem</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Título da Missão</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Prazo</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                <th className="py-4 px-6 font-semibold">Descrição</th>
              </tr>
            </thead>

            <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
              {missoes.map((missao) => (
                <tr 
                  key={missao.id} 
                  className="border-b border-gray-100 hover:bg-sky-50 transition-colors"
                >
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Miniatura da Imagem */}
                    {missao.linkImagem ? (
                       <img 
                         src={missao.linkImagem} 
                         alt={missao.titulo} 
                         className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100" 
                       />
                    ) : (
                       <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold">
                         SEM IMG
                       </div>
                    )}
                  </td>

                  <td className="py-4 px-6 whitespace-nowrap">
                    <Link 
                      to={`/adm/missoes/${missao.id}`}
                      className="text-indigo-600 font-bold hover:text-sky-500 hover:underline transition-colors"
                    >
                      {missao.titulo}
                    </Link>
                  </td>
                  
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider">
                      {missao.nomeTipo}
                    </span>
                  </td>
                  
                  <td className="py-4 px-6 whitespace-nowrap text-gray-900 font-medium">
                    {missao.meta}
                  </td>

                  <td className="py-4 px-6 whitespace-nowrap text-gray-500">
                    {missao.prazo}
                  </td>
                  
                  <td className="py-4 px-6 whitespace-nowrap font-bold text-sky-600">
                    {missao.pontos} pts
                  </td>
                  
                  <td className="py-4 px-6 min-w-[250px] text-gray-500">
                    {missao.descricao}
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </section>
      
    </main>
  );
}