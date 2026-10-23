import { Link } from "react-router";
import type { TipoConquista } from "../../types/conquista";
import { useEffect, useState } from "react";
import { ListarConquistas } from "../../service/conquista";


export default function ListaConquistas() {


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

    if(carregando){
      return(
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-8">

          {/* Cabeçalho da Página */}
          <header className="text-center max-w-3xl mb-12 space-y-4">
            <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
              Lista de Conquistas
            </h1>
            <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
              Visualize e gerencie todas as conquistas cadastradas no sistema.
            </p>
          </header>

          {/* Container da Tabela (com overflow para responsividade) */}
          <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                
                {/* Cabeçalho da Tabela */}
                <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Nome da Conquista</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Título</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                    <th className="py-4 px-6 font-semibold">Descrição</th>
                  </tr>
                </thead>

                {/* Corpo da Tabela */}
                <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                      carregando...
                    </td>
                  </tr>
                  
                </tbody>
                
              </table>
            </div>
          </section>
          
        </main>
      )
    }

    if(!erro){
      if(conquistas.length === 0){
        setErro("Nenhuma conquista cadastrada");
      }
    }

    if(erro){
      return(
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-8">

          {/* Cabeçalho da Página */}
          <header className="text-center max-w-3xl mb-12 space-y-4">
            <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
              Lista de Conquistas
            </h1>
            <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
              Visualize e gerencie todas as conquistas cadastradas no sistema.
            </p>
          </header>

          {/* Container da Tabela (com overflow para responsividade) */}
          <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                
                {/* Cabeçalho da Tabela */}
                <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Nome da Conquista</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Título</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                    <th className="py-4 px-6 font-semibold">Descrição</th>
                  </tr>
                </thead>

                {/* Corpo da Tabela */}
                <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
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
          Lista de Conquistas
        </h1>
        <p className="font-['Lexend_Deca'] text-gray-600 text-lg">
          Visualize e gerencie todas as conquistas cadastradas no sistema.
        </p>
      </div>

      {/* Container da Tabela (com overflow para responsividade) */}
      <section className="w-full max-w-6xl bg-white rounded-3xl shadow-lg border border-indigo-50 overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-indigo-50 font-['Momo_Trust_Display'] text-indigo-900 border-b-2 border-indigo-100">
              <tr>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Nome da Conquista</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Título</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Categoria</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Meta</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Pontos</th>
                <th className="py-4 px-6 font-semibold">Descrição</th>
              </tr>
            </thead>

            <tbody className="font-['Lexend_Deca'] text-gray-700 text-sm sm:text-base">
              {conquistas.map((conquista) => (
                <tr 
                  key={conquista.id} 
                  className="border-b border-gray-100 hover:bg-sky-50 transition-colors"
                >
                  <td className="py-4 px-6 whitespace-nowrap">
                    <Link 
                      to={`/adm/conquista/lista/${conquista.id}`}
                      className="text-indigo-600 font-bold hover:text-sky-500 hover:underline transition-colors"
                    >
                      {conquista.nome}
                    </Link>
                  </td>
                  
                  <td className="py-4 px-6 whitespace-nowrap">{conquista.titulo}</td>
                  
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Badge de Categoria para destaque visual */}
                    <span className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider">
                      {conquista.nomeTipo}
                    </span>
                  </td>
                  
                  <td className="py-4 px-6 whitespace-nowrap">{conquista.meta}</td>
                  
                  <td className="py-4 px-6 whitespace-nowrap font-bold text-sky-600">
                    {conquista.pontos}
                  </td>
                  
                  <td className="py-4 px-6 min-w-[250px] text-gray-500">
                    {conquista.descricao}
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