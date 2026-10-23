import { useNavigate } from "react-router";
import AdminCard from "../../components/adm/AdminCard";

export default function PainelAdmin() {
  
	const navigate = useNavigate();

  // Funções de navegação
  const handleVerMissoes = () => navigate("/adm/missoes");
  const handleCadastrarMissao = () => navigate("/adm/novaMissao");
  
  const handleVerConquistas = () => navigate("/adm/conquistas");
  const handleCadastrarConquista = () => navigate("/adm/novaConquista");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4 sm:px-8">
      
      <header className="text-center max-w-3xl mb-16 space-y-4">
        <h1 className="font-['Momo_Trust_Display'] text-4xl lg:text-5xl text-indigo-600">
          Painel de Administração
        </h1>
        <p className="font-['Lexend_Deca'] text-gray-600 text-xl">
          Gerencie as engrenagens da plataforma SoulMove. Escolha um módulo abaixo para visualizar dados existentes ou cadastrar novos desafios.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full max-w-6xl">
        
        <AdminCard 
          titulo="Gerenciamento de Missões"
          descricao="Crie, edite ou exclua missões diárias, semanais e mensais focadas em mobilidade sustentável e economia de CO2. Ajuste metas e controle as recompensas."
          onVerClick={handleVerMissoes}
          onCadastrarClick={handleCadastrarMissao}
        />

        <AdminCard 
          titulo="Gerenciamento de Conquistas"
          descricao="Defina novos badges, tags e marcos de pontuação para recompensar o engajamento contínuo dos usuários. Crie níveis de evolução dentro do aplicativo."
          onVerClick={handleVerConquistas}
          onCadastrarClick={handleCadastrarConquista}
        />

      </section>
    </main>
  );
}
