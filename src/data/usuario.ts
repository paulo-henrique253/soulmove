export type Usuario = {
    id: number;
    usuario: string;
    nomeExibicao: string;
    titulo: string;
    saldoMobilidade: number;
    saldoLuz: number;
    fotoPfp: string;
    pontos: number;
    descricao: string;

    nPosts: number;
    seguidores: number;
    seguindo: number;    
};

export const usuario: Usuario =
    {
        id: 67,
        usuario: "danikgn",
        nomeExibicao: "dani",
        titulo: "Rainha dos Anúncios Sustentáveis",
        saldoMobilidade: 0.67,
        saldoLuz: 13.13,
        fotoPfp: "/src/assets/siricutico.png",
        pontos: 420,
        descricao: "Venha participar da SoulMove com a gente! :)",

        nPosts: 10,
        seguidores: 77,
        seguindo: 55,
    }