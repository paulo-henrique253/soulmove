import Zeni from "../assets/zeni.png";
import Jac from "../assets/jac.png";
import Felle from "../assets/ju.png";
import Ph from "../assets/ph.png";
import Dani from "/src/assets/dani.png";


export type Integrante = {
  nome: string;
  slug: string;
  turma: string;
  rm: string;
  foto: string;
  github: string;
  linkedin: string;
  sobre: string;
};

export const integrantes: Integrante[] = [
  {
    nome: "Enzo Zeni",
    slug: "enzo",
    turma: "1TDSPK",
    rm: "RM570653",
    foto: Zeni,
    github: "https://github.com/F-Zeni",
    linkedin: "https://www.linkedin.com/in/enzo-fachinelli-zeni-687a873b3",
    sobre: "Tenho interesse em tecnologia, programação e banco de dados. Busco sempre aprimorar meus conhecimentos, aprender novas tecnologias e evoluir profissionalmente",
  },
  {
    nome: "Jacqueline Lotufo",
    slug: "jacqueline",
    turma: "1TDSPK",
    rm: "RM571390",
    foto: Jac,
    github: "https://github.com/jacquelot",
    linkedin: "https://br.linkedin.com/in/jacqueline-lotufo",
    sobre: "Sou designer e atualmente estudo programação. Gosto de criar, entender como as coisas funcionam e explorar formas de conectar tecnologia, design e saúde.",
  },
  {
    nome: "Julia de Freitas",
    slug: "julia",
    turma: "1TDSPK",
    rm: "RM569098",
    foto: Felle,
    github: "https://github.com/lixzaura",
    linkedin: "https://www.linkedin.com/in/lixzaura",
    sobre: "Sou ilutradora e atualmente estou entrando no ramo da programação, esotu gostando muito de estudar e pretendo focar totalmente em backend.",
  },
  {
    nome: "Paulo Henrique",
    slug: "paulo",
    turma: "1TDSPK",
    rm: "RM573806",
    foto: Ph,
    github: "https://github.com/paulo-henrique253",
    linkedin: "https://www.linkedin.com/in/paulo-henrique-gomes-gon%C3%A7alves-aa04b5272/",
    sobre: "Gosto de estudar programação e outros idiomas. Atualmente estou focando em backend e em estudar japonês.",
  },
  {
    nome: "Danielle Fernanda",
    slug: "danielle",
    turma: "1TDSPK",
    rm: "RM569359",
    foto: Dani,
    github: "https://github.com/daniellekgn",
    linkedin: "https://www.linkedin.com/in/danielle-fernanda-kagan-9026b141b/",
    sobre: "Tenho interesse em tecnologia, desenvolvimento de interfaces e UX-UI. Atualmente também estou gostando bastante de trabalhar com Back-end.",
  },
];