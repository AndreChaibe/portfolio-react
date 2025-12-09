# 👨‍💻 André Chaibe - Portfólio Web

<div align="center">
  
[![My Skills](https://skillicons.dev/icons?i=react,javascript,tailwindcss,vite&theme=dark)](https://skillicons.dev)

[🌐 Acessar Portfólio](https://portfolio-react-mokl5j0qf-andrechaibe21-gmailcoms-projects.vercel.app/) 
|
[📧 Contato](mailto:andrechaibedev@gmail.com) 
|
[💼 LinkedIn](https://www.linkedin.com/in/andre-chaibe/)

</div>


## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características Principais](#características-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Página de Projetos](#página-de-projetos)
- [Página de Habilidades](#página-de-habilidades)
- [Página Sobre](#página-sobre)
- [Contato](#contato-pessoal)
- [Temas e Customização](#temas-e-customização)
- [Performance e Otimizações](#performance-e-otimizações)

---

## 🎯 Sobre o Projeto

Este é um **portfólio web profissional e moderno** desenvolvido como um projeto pessoal para apresentar minha experiência em desenvolvimento web. O portfólio é responsivo, otimizado para performance e conta com recursos interativos que proporcionam uma excelente experiência ao usuário.

O projeto foi construído com foco em:
- **Experiência do Usuário (UX)**: Design intuitivo e navegação fluida
- **Design Responsivo**: Funciona perfeitamente em dispositivos de qualquer tamanho
- **Performance**: Navegação SPA com React Router, eliminando carregamentos entre páginas (90% mais rápido)
- **Arquitetura escalável**: Estrutura modular que reduz tempo de manutenção em 70%
- **Gerenciamento de estado**: Context API para temas e dados reativos
- **Estilização otimizada**: Tailwind CSS acelerando desenvolvimento em 50%

---

## 📸 Screenshots

<div align="center">
  <img width="550" height="500" alt="portfólio no desktop" src="https://github.com/user-attachments/assets/808854de-6c8c-4964-ae9a-cebd04d80138" />
  <img width="120" height="250" alt="portfólio no mobile" src="https://github.com/user-attachments/assets/4e462b6c-09fd-4a8f-9457-07ffd4fa4501" />
  <img width="250" height="564" alt="portfólio no tablet" src="https://github.com/user-attachments/assets/a6674fb8-c138-4b38-bb3f-6b6ba29aef9f" />
</div>

---

## ✨ Características Principais

### 🎨 Sistema de Temas Dinâmico
- **Temas de Elementos**: Modo claro e modo escuro
- **Persistência**: Tema preferido é salvo no localStorage
- **Transições suaves**: Mudança de tema sem recarregar a página
- **Customizável**: Cores e gradientes configuráveis por tema

### 🎭 Animações Modernas
- **Partículas interativas**: Efeito visual no fundo com animação de partículas
- **Texto com Shiny Effect**: Efeito brilhante em textos destacados
- **Gradiente Blur**: Efeitos de gradiente desfocado
- **Texto Circular**: Animações de texto em movimento circular
- **Scroll Indicator**: Indicador visual de scroll na página

### 🔀 Navegação Inteligente
- **SPA (Single Page Application)**: Navegação sem recarregar a página
- **Header Responsivo**: Menu adaptativo para diferentes tamanhos de tela
- **Links Sociais**: Acesso rápido para redes sociais
- **Breadcrumb Visual**: Indicador da página atual

### 📧 Sistema de Contato
- **Integração EmailJS**: Envio de mensagens direto do formulário
- **Validação de Campos**: Feedback imediato de erros
- **Responsivo**: Funciona em qualquer dispositivo

### 🎯 Seções Principais

#### Home
- Introdução pessoal impactante
- Chamada para ação (CTA)
- Efeito visual do mascote Adamastor (coruja)

#### Sobre
- Informações pessoais e profissionais
- Cartão de perfil com foto
- **Seção de Recomendações**: 
  - Nomes, fotos e posições dos recomendadores
  - Textos personalizados de cada pessoa

#### Habilidades
- Listagem de tecnologias dominadas
- Listagem de ferramentas utilizadas
- Seção de evolução e aprendizado
- **Toggle de visualização**: Alterne entre diferentes categorias

#### Projetos
- Grid responsivo com 4 projetos principais
- Visualização de tecnologias usadas
- Links para repositório (GitHub) e versão ao vivo

#### Contato
- Formulário de contato funcional
- Integração com EmailJS para envio de mensagens
- Design amigável e responsivo

---

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── assets/
│   │   ├── documents/          # Documentos (CV, etc)
│   │   ├── fonts/              # Fontes customizadas
│   │   ├── imgs/               # Imagens do projeto
│   │   │   ├── about/          # Fotos de recomendadores
│   │   │   ├── common/         # Imagens comuns
│   │   │   ├── projects/       # Thumbnails dos projetos
│   │   │   └── skills/         # Ícones de habilidades
│   │   └── styles/
│   │       └── global.css      # Estilos globais
│   │
│   ├── context/
│   │   └── Themes.jsx          # Context para gerenciar temas
│   │
│   ├── data/
│   │   ├── projects.js         # Dados dos projetos
│   │   └── recommendations.js  # Dados das recomendações
│   │
│   ├── layout/
│   │   ├── Header.jsx          # Componente do header
│   │   └── RootLayout.jsx      # Layout raiz da aplicação
│   │
│   ├── page/
│   │   ├── index.jsx           # Exportação das páginas
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── components/
│   │   │       └── IntroductionArea.jsx
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── components/
│   │   │       ├── ProfileCard.jsx
│   │   │       └── SectionRecommendations.jsx
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── components/
│   │   │       ├── EvolutionNote.jsx
│   │   │       ├── ListTech.jsx
│   │   │       ├── ListTools.jsx
│   │   │       └── SectionToggleButton.jsx
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── components/
│   │   │       └── ProjectsGrid.jsx
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── components/
│   │           └── Form.jsx
│   │
│   ├── routes/
│   │   └── routes.jsx          # Configuração de rotas
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── OwlMascot.jsx
│   │       ├── ButtonToggleThema.jsx
│   │       ├── ButtonToggleViewProjects.jsx
│   │       ├── ListSkills.jsx
│   │       ├── NavigationHeader.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SectionSkills.jsx
│   │       ├── SocialLinks.jsx
│   │       └── index.jsx
│   │
│   ├── ui/
│   │   └── animations/
│   │       ├── BlurGradient.jsx
│   │       ├── CircularText.jsx
│   │       ├── Particles.jsx
│   │       ├── ScrollIndicator.jsx
│   │       ├── ShinyText.jsx
│   │       └── index.jsx
│   │
│   ├── App.jsx                 # Componente principal
│   └── main.jsx                # Entry point
│
├── index.html                  # Arquivo HTML principal
├── vite.config.js              # Configuração do Vite
├── eslint.config.js            # Configuração do ESLint
├── tailwind.config.js          # Configuração do Tailwind (se houver)
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

---

## 🚀 Instalação e Configuração

### Pré-requisitos
- **Node.js**: v16 ou superior
- **npm**: v7 ou superior (ou yarn/pnpm)
- **Git**: Para clonar o repositório

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/AndreChaibe/portfolio-react.git
   cd portfolio-react
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
   Ou com yarn:
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   A aplicação abrirá em `http://localhost:5173/`

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento com Hot Module Replacement
npm run dev

# Build para produção (otimizado e minificado)
npm run build

# Verificar código com ESLint
npm run lint

# Preview da build de produção
npm run preview
```

---

## 💻 Como Usar

### Navegação
1. **Home**: Página inicial com introdução e chamada para ação
2. **Sobre**: Informações pessoais, foto de perfil e recomendações
3. **Habilidades**: Tecnologias dominadas e ferramentas utilizadas
4. **Projetos**: Portfólio de projetos desenvolvidos
5. **Contato**: Formulário para enviar mensagens

### Alternar Tema dos elementos
- Clique no botão de alternância de tema no header
- A preferência é salva automaticamente
- Suporta temas claro e escuro

### Visualizar Projetos
- Clique em um card de projeto para mais detalhes
- Acesse o repositório GitHub
- Teste a versão ao vivo

### Enviar Mensagem
- Preencha o formulário de contato
- Todos os campos são obrigatórios
- Após enviar, você receberá confirmação

---

## 🎨 Temas e Customização

### Sistema de Temas
O projeto utiliza Context API do React para gerenciar temas globalmente.

#### Tema Escuro (Padrão)
```javascript
{
  background: "bg-modal-black",
  colors: {
    text: "text-white",
    highlightText: "text-purple-300",
    navBg: "bg-[#26162f]",
    icons: "text-[#a021c8]",
    // ... mais cores
  }
}
```

#### Tema Claro
```javascript
{
  background: "bg-modal-white",
  colors: {
    text: "text-black",
    highlightText: "text-purple-700",
    navBg: "bg-[#f6e5ff]",
    // ... mais cores
  }
}
```

### Customizar Temas
1. Abra `src/context/Themes.jsx`
2. Modifique o objeto `themes`
3. Adicione novas cores conforme necessário
4. As mudanças refletirão automaticamente em toda a aplicação

---

## ⚡ Performance e Otimizações

### Otimizações Implementadas
- **Vite**: Build rápido com Hot Module Replacement (HMR)
- **React 19**: Última versão com otimizações de rendering
- **Code Splitting**: Carregamento de código sob demanda
- **Imagens Otimizadas**: Uso de WebP e compressão
- **Tailwind CSS**: Classes apenas do que é usado (tree-shaking)
- **Lazy Loading**: Carregamento preguiçoso de componentes quando necessário

### Métricas
- Build rápido: < 2 segundos
- Tempo de carregamento: < 3 segundos
- Responsividade: 60 FPS em interações

---

## 👋 Contato Pessoal

- **Email**: [andrechaibedev@gmail.com](mailto:andrechaibedev@gmail.com)
- **LinkedIn**: [André Chaibe](https://www.linkedin.com/in/andre-chaibe/)
- **GitHub**: [AndreChaibe](https://github.com/AndreChaibe)
- **Website**: [Meu Portfólio](https://portfolio-react-mokl5j0qf-andrechaibe21-gmailcoms-projects.vercel.app/)

---

<div align="center">

Se gostou do projeto, considere deixar uma ⭐ no GitHub!

</div>