type IntegranteCardProps = {
  nome: string,
  slug: string,
  turma: string,
  rm: string,
  foto: string,
  github: string,
  linkedin: string,
  sobre: string
}
import { Link } from "react-router";
import imgGithub from "../assets/GitHub.png";
import imgLinkedin from "../assets/Linkedin.png";

function IntegranteCard({nome, slug, rm, foto, github, linkedin}: IntegranteCardProps){
  return (
    <div className="bg-linear-to-r from-sky-400 to-indigo-500 text-white [box-shadow:5px_5px_10px_0px_rgba(37,59,121,0.3)] rounded-2xl flex flex-col gap-6 p-4 text-center self-center w-full max-w-sm">
      <h2 className="font-['Momo_Trust_Display'] font-normal text-3xl">{nome}</h2>
      
      {/* Definindo altura fixa e object-cover para padronizar todas as fotos */}
      <img 
        src={foto} 
        alt={`Foto de ${nome}`}
        className="w-[90%] h-100 object-cover rounded-xl self-center" 
      />

      <p className="font-['Lexend_Deca'] text-xl">{rm}</p>
      
      <div className="flex justify-evenly gap-6">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center bg-indigo-600/30 rounded-xl h-12 py-1"
        >
          <img src={imgGithub} alt="Logo do Github" className="h-6 w-6" />
        </a>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center bg-indigo-600/30 rounded-xl h-12 py-1"
        >
          <img src={imgLinkedin} alt="Logo do Linkedin" className="h-6 w-6" />
        </a>
      </div>

      <Link to={`/integrantes/${slug}`} className="mt-auto hover:underline font-semibold text-lg">
        Ver mais
      </Link>
    </div>
  );
}

export default IntegranteCard;