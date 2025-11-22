import actionVerseImg from '../assets/imgs/projects/thumbnail-action-verse.webp';
import redacaoImg from '../assets/imgs/projects/thumbnail-redacao-nota-mil.webp';
import githubImg from '../assets/imgs/projects/trumbnail-gitHub-user-finder.webp';
import formularioImg from '../assets/imgs/projects/thumbnail-formulario-de-validacao.webp';

const projectsData = [
    {
        id: 1,
        name: "Action-Verse",
        image: actionVerseImg,
        description: "O Action Verse é um mini e-commerce de lista de produtos com carrinho de compras funcional.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/seu-usuario/action-verse",
        liveUrl: "https://seu-usuario.github.io/action-verse"
    },
    {
        id: 2,
        name: "Redação Nota Mil Hub",
        image: redacaoImg,
        description: "Site institucional para divulgação de um curso denominado'Redação Nota Mil'.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        repoUrl: "https://github.com/seu-usuario/landing-page-freelancer",
        liveUrl: "https://seu-usuario.github.io/landing-page-freelancer"
    },
    {
        id: 3,
        name: "GitHub user search",
        image: githubImg,
        description: "Desenvolvido utilizando HTML, CSS e JavaScript para consumir a API do GitHub. A aplicação permite pesquisar perfis de usuários e exibir informações detalhadas, ajudando na análise de perfis de desenvolvedores, permitindo uma avaliação rápida das habilidades e contribuições por meio dos repositórios e atividades recentes.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        repoUrl: "https://github.com/seu-usuario/github-search",
        liveUrl: "https://seu-usuario.github.io/github-search"
    },
    {
        id: 4,
        name: "Formulários de Validação",
        image: formularioImg,
        description: "Este projeto envolve a implementação de um formulário de contato com validação de campos obrigatórios.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/seu-usuario/form-validation",
        liveUrl: "https://seu-usuario.github.io/form-validation"
    },
]

export default projectsData;