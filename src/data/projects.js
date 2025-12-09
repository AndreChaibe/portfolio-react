import actionVerseImg from '../assets/imgs/projects/thumbnail-action-verse.webp';
import redacaoImg from '../assets/imgs/projects/thumbnail-redacao-nota-mil.webp';
import githubImg from '../assets/imgs/projects/trumbnail-gitHub-user-finder.webp';
import formularioImg from '../assets/imgs/projects/thumbnail-formulario-de-validacao.webp';

const projectsData = [
    {
        id: 1,
        name: "Action-Verse",
        image: actionVerseImg,
        description: "Mini e-commerce criado como projeto pessoal. Nele, é possível visualizar produtos, adicionar ou remover itens do carrinho, controlar quantidades e ver o total do pedido atualizado em tempo real. Todo o visual é responsivo. O projeto foi desenvolvido sem frameworks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/AndreChaibe/action-verse",
        liveUrl: "https://andrechaibe.github.io/action-verse/"
    },
    {
        id: 2,
        name: "Redação Nota Mil Hub",
        image: redacaoImg,
        description: "Site institucional com carrossel de professores interativo, informações do curso, cronograma, preços, contato direto via WhatsApp e mapa interativo para facilitar a localização e a comunicação com alunos.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        repoUrl: "https://github.com/AndreChaibe/Redacao-Nota-Mil",
        liveUrl: "https://andrechaibe.github.io/Redacao-Nota-Mil/"
    },
    {
        id: 3,
        name: "GitHub user search",
        image: githubImg,
        description: "Aplicação web responsiva para buscar perfis no GitHub consumindo sua API. A ferramenta permite pesquisar usuários, visualizar informações detalhadas e repositórios, facilitando a análise rápida de perfis por desenvolvedores e recrutadores.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        repoUrl: "https://github.com/AndreChaibe/Quest-API-GitHub",
        liveUrl: "https://andrechaibe.github.io/Quest-API-GitHub/"
    },
    {
        id: 4,
        name: "Formulários de Validação",
        image: formularioImg,
        description: "Formulário de contato responsivo, focado em validar campos obrigatórios para garantir a integridade dos dados. Se algum campo não for preenchido, o usuário recebe feedback imediato através de mensagens de erro e bordas em destaque vermelho.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/AndreChaibe/Quest-validacao-de-formulario",
        liveUrl: "https://andrechaibe.github.io/Quest-validacao-de-formulario/"
    },
]

export default projectsData;