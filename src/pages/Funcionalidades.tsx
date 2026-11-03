import CardFuncionalidade from '../components/CardFuncionalidade';
import TituloPagina from '../components/TituloPagina';
import { funcionalidadesData } from '../data/funcionalidades'; // Importando os dados!

function Funcionalidades() {
    
  return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20">

        <TituloPagina texto="Como a SoulMove funciona?"/>
        
        <div>
          {funcionalidadesData.map((funcionalidade, index) => (
            <CardFuncionalidade 
               key={funcionalidade.id} 
               inverterOrdem={index % 2 === 1}
               titulo={funcionalidade.titulo}
               descricao={funcionalidade.descricao}
               imagemPrincipalSrc={funcionalidade.imagemPrincipalSrc}
               imagemPrincipalAlt={funcionalidade.imagemPrincipalAlt}
               imagemSecundarioSrc={funcionalidade.imagemSecundariaSrc}
               imagemSecundarioAlt={funcionalidade.imagemSecundariaAlt}
            />
          ))}
        </div>
      </main>
  );
}

export default Funcionalidades;