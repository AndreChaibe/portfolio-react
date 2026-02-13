import marioPhoto from '../assets/imgs/about/Recommendation-Mário-photo.webp';
import ErissonPhoto from '../assets/imgs/about/Recommendation-Erisson-photo.webp';
import rafaelPhoto from '../assets/imgs/about/Recommendation-Rafael-photo.webp';
import diegoPhoto from '../assets/imgs/about/Recommendation-Diego-photo.webp';
import guilhermePhoto from '../assets/imgs/about/Recommendation-Guilherme-photo.webp';
import gustavoPhoto from '../assets/imgs/about/Recommendation-Gustavo-photo.webp';
import daianePhoto from '../assets/imgs/about/Recommendation-Daiane-photo.webp';

export interface Recommendation {
  id: number;
  name: string;
  position: string;
  photo: string;
  altText: string;
  text: string;
}

const recommendationsData: readonly Recommendation[] = [
  {
    id: 1,
    name: "Erisson Tiano",
    position: "Geólogo Coordenador",
    photo: ErissonPhoto,
    altText: "Homem jovem, de pele clara e cabelos pretos lisos penteados para trás, com barba preta bem-cuidada na mandíbula e queixo. Ele está sorrindo de forma amigável, mostrando os dentes. Veste uma camisa social preta com botões, em um estilo profissional e casual. A foto é enquadrada dos ombros para cima em formato circular, com fundo desfocado mostrando um ambiente de escritório moderno com elementos de decoração ao fundo.",
    text: "Tive a oportunidade de trabalhar com o André em um projeto que exigia organização, clareza técnica e rapidez na entrega, e ele se destacou em todos esses pontos. Como cliente, o que mais me chamou atenção foi sua capacidade de transformar requisitos pouco estruturados em interfaces funcionais, limpas e extremamente bem construídas.",
  },
  {
    id: 2,
    name: "Mário Carlaibe",
    position: "Dev Full Stack Júnior",
    photo: marioPhoto,
    altText: "Homem de meia-idade, de pele clara e careca, que exibe uma barba preta cheia e usa óculos de grau de aros escuros e retangulares. Ele está vestido formalmente com um blazer escuro sobre uma camisa branca, e seu olhar é direto e sério para a câmera, com um fundo simples e desfocado.",
    text: "Sua coerência nas ideias, comunicação clara e proatividade foram sempre marcantes em todos os projetos e interações em grupo. O André é uma pessoa fantástica – sempre disposto a ajudar quem precisa, criando um ambiente colaborativo e acolhedor. Sua inteligência acima da média o torna um membro valioso em qualquer equipe, capaz de trazer soluções criativas e eficientes para os desafios que surgem. Sem dúvida, o André é alguém com quem eu gostaria de trabalhar novamente e que recomendo com entusiasmo!",
  },
  {
    id: 3,
    name: "Rafael R. Schifferli",
    position: "Líder de Crescimento",
    photo: rafaelPhoto,
    altText: "Homem com a pele clara e barba escura e bem cuidada, que usa óculos de grau de aros arredondados e escuros. Ele está sentado em uma escadaria de pedra, vestindo roupas completamente pretas, incluindo uma gola rolê e um casaco longo com lapela, sugerindo um estilo formal e de inverno. Ele apoia a mão direita na testa com o cotovelo no joelho, transmitindo uma pose pensativa e séria.",
    text: "Tenho o prazer de recomendar André como Desenvolvedor Front-end Júnior – um talento emergente que combina paixão por tecnologia com uma visão estratégica para criar experiências digitais impactantes. Trabalhei ao lado dele em projetos colaborativos e testemunhei de perto como ele transforma conceitos abstratos em interfaces intuitivas e de alto desempenho.",
  },
  {
    id: 4,
    name: "Diego Marques",
    position: "Dev Web Front-end",
    photo: diegoPhoto,
    altText: "homem jovem, com cabelos escuros e curtos penteados para trás, e pele em tom moreno claro. Ele tem um sorriso aberto e amigável, mostrando os dentes, e seus olhos são grandes e escuros. Ele está vestido com uma camisa ou suéter de cor escura (possivelmente preto), com uma gola branca ou cinza-clara visível por baixo.",
    text: "Recomendo muito o André, pelo fato de ver seu esforço sempre, estudamos na mesma instituição e posso ver seu progresso que é notável, um colega muito aplicado e sempre contribuindo com a comunidade de desenvolvedores, sempre engajado e colocando em prática tudo que está aprendendo, tenho certeza que ele será um diferencial por onde quer que atue, a empresa que der uma oportunidade, terá um grande profissional!",
  },
  {
    id: 5,
    name: "Guilherme Martins",
    photo: guilhermePhoto,
    altText: "Homem jovem, com pele parda ou morena e cabelo escuro, raspado nas laterais e curto no topo, penteado para trás. Ele usa óculos de grau de aros finos e claros e tem uma barba rala e cavanhaque bem desenhado. Ele exibe um sorriso largo e alegre, mostrando os dentes. O homem veste uma camisa social de manga curta ou dobrada, de cor azul-marinho ou azul-escuro.",
    position: "Cibersegurança",
    text: "Apesar de não termos trabalhado juntos, o André ajudou muito no meu aprendizado como desenvolvedor. Através das postagens e conteúdos que ele compartilha, pude aprender muito sobre JavaScript e boas práticas de front-end. Suas dicas são sempre claras, práticas e super úteis para quem está estudando ou se aprimorando na área.",
  },
  {
    id: 6,
    name: "Gustavo Tavares",
    photo: gustavoPhoto,
    altText: "Homem jovem, de pele clara, com cabelo escuro e barba fina. Ele está vestindo uma camisa de gola branca sob um suéter marrom-escuro e mantém uma expressão neutra enquanto olha diretamente para a câmera, com um fundo desfocado.",
    text: "Recomendo André Chaibe, meu colega de curso, para uma posição de Desenvolvedor Web. Durante nosso tempo juntos, observei sua dedicação, evolução constante e interesse em aprimorar suas habilidades técnicas. André se destaca pelo comprometimento e por sua postura colaborativa, contribuindo para o crescimento da equipe e para a criação de projetos de qualidade. Tenho plena confiança de que ele agregará valor a qualquer organização.",
    position: "Dev Web Front-end",
  },
  {
    id: 7,
    name: "Daiane Novais",
    photo: daianePhoto,
    altText: "Mulher jovem, de pele clara, com cabelos cacheados pretos e volumosos na altura do rosto, usando camisa social branca sob um suéter preto com listras brancas, em estilo casual e profissional, enquadrada dos ombros para cima em foto de perfil circular.",
    text: "André é um profissional com um conjunto de habilidades e uma atitude que o destacam em qualquer ambiente de trabalho. Sua integridade, comprometimento e a ética de trabalho são realmente admiráveis. Recomendo André fortemente como um indivíduo confiável, dedicado e com uma capacidade excelente de colaboração e comunicação eficaz.",
    position: "Analista Administrativa",
  },
] as const;

export default recommendationsData;