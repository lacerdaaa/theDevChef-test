# theDevChef 👨‍🍳💻

A recipe website and programming blog that combines two great passions: culinary arts and development. theDevChef is where code meets flavor!

Um site de receitas e blog de programação que une duas grandes paixões: culinária e desenvolvimento. O theDevChef é onde código e sabor se encontram!

## 🚀 About the Project / Sobre o Projeto

**EN:** theDevChef is a platform that brings together cooking recipes and programming content, creating a unique space for developers who love to cook and food enthusiasts who are curious about tech. The site features recipe collections, programming tutorials, and articles that explore the intersection between culinary arts and software development.

**PT-BR:** O theDevChef é uma plataforma que reúne receitas culinárias e conteúdo de programação, criando um espaço único para desenvolvedores que amam cozinhar e entusiastas da culinária curiosos sobre tecnologia. O site apresenta coleções de receitas, tutoriais de programação e artigos que exploram a interseção entre artes culinárias e desenvolvimento de software.

## 🛠️ Tech Stack / Stack Tecnológico

- **Frontend:** React 18 + TypeScript + Vite
- **UI Framework:** Tailwind CSS + shadcn/ui
- **Package Manager:** Bun
- **Backend:** Node.js + PostgreSQL *(coming soon / em breve)*
- **Deployment:** *(to be defined / a ser definido)*

## 📋 Prerequisites / Pré-requisitos

**EN:** Before you begin, ensure you have the following installed:
**PT-BR:** Antes de começar, certifique-se de ter instalado:

- Node.js (v18 or higher / v18 ou superior)
- Bun (recommended / recomendado) or npm/yarn
- Git

## 🚀 Getting Started / Como Começar

### Installation / Instalação

1. **Clone the repository / Clone o repositório:**
```bash
git clone https://github.com/yourusername/thedevchef.git
cd thedevchef
```

2. **Install dependencies / Instale as dependências:**
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. **Start the development server / Inicie o servidor de desenvolvimento:**
```bash
# Using Bun
bun dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

4. **Open your browser / Abra seu navegador:**
Navigate to `http://localhost:5173` to view the application.
Navegue para `http://localhost:5173` para visualizar a aplicação.

## 📁 Project Structure / Estrutura do Projeto

```
thedevchef/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── blog/              # Blog-specific components
│   │   │   ├── BlogContent.tsx
│   │   │   ├── BlogStep.tsx
│   │   │   └── CodeSnippet.tsx
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (50+ UI components)
│   │   ├── BlogPostCard.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   └── RecipeCard.tsx
│   ├── data/
│   │   └── mockData.ts        # Mock data for development
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPostDetail.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── RecipeDetail.tsx
│   │   └── Recipes.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── package.json
└── README.md
```

## 🎯 Features / Funcionalidades

### Current / Atuais
- [x] Responsive design with Tailwind CSS / Design responsivo com Tailwind CSS
- [x] TypeScript for type safety / TypeScript para segurança de tipos
- [x] shadcn/ui component library / Biblioteca de componentes shadcn/ui
- [x] Recipe and blog post cards / Cards de receitas e posts do blog
- [x] Filter sidebar / Barra lateral de filtros
- [x] Hero section / Seção hero
- [x] Mock data structure / Estrutura de dados mock
- [x] Code snippet highlighting / Destaque de trechos de código
- [x] Responsive navigation / Navegação responsiva

### Planned / Planejadas
- [ ] Search functionality / Funcionalidade de busca
- [ ] Recipe categories and tags / Categorias e tags de receitas
- [ ] User authentication / Autenticação de usuários
- [ ] Recipe favorites / Receitas favoritas
- [ ] Comments system / Sistema de comentários
- [ ] Recipe rating / Avaliação de receitas
- [ ] Admin panel / Painel administrativo
- [ ] Dark/Light theme toggle / Alternância de tema escuro/claro
- [ ] Progressive Web App (PWA) / Aplicação Web Progressiva (PWA)

## 🤝 Contributing / Contribuindo

**EN:** Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

**PT-BR:** Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request. Para mudanças importantes, por favor abra uma issue primeiro para discutir o que você gostaria de alterar.

### Development Guidelines / Diretrizes de Desenvolvimento

- Follow TypeScript best practices / Siga as melhores práticas do TypeScript
- Use the existing UI components from shadcn/ui / Use os componentes UI existentes do shadcn/ui
- Follow the established folder structure / Siga a estrutura de pastas estabelecida
- Write clean, readable code / Escreva código limpo e legível
- Test your changes / Teste suas alterações

## 📝 Available Scripts / Scripts Disponíveis

In the project directory, you can run:
No diretório do projeto, você pode executar:

- `bun dev` / `npm run dev` - Runs the app in development mode / Executa o app em modo de desenvolvimento
- `bun run build` / `npm run build` - Builds the app for production / Constrói o app para produção
- `bun run preview` / `npm run preview` - Preview the production build / Visualiza o build de produção
- `bun run lint` / `npm run lint` - Runs ESLint / Executa o ESLint

## 🔧 Environment Variables / Variáveis de Ambiente

Create a `.env` file in the root directory and add:
Crie um arquivo `.env` na raiz do projeto e adicione:

```env
VITE_API_URL=http://localhost:3001
VITE_SITE_NAME=theDevChef
```

## 🎨 UI Components / Componentes UI

This project uses **shadcn/ui** with over 50 pre-built components:
Este projeto usa **shadcn/ui** com mais de 50 componentes pré-construídos:

- Buttons, Cards, Forms / Botões, Cards, Formulários
- Navigation, Menus, Dialogs / Navegação, Menus, Diálogos
- Data Display, Feedback / Exibição de Dados, Feedback
- And much more... / E muito mais...

To add new components / Para adicionar novos componentes:
```bash
npx shadcn-ui@latest add [component-name]
```

## 📱 Responsive Design / Design Responsivo

The application is fully responsive and optimized for:
A aplicação é totalmente responsiva e otimizada para:

- 📱 Mobile devices / Dispositivos móveis
- 📱 Tablets
- 💻 Desktop computers / Computadores desktop
- 🖥️ Large screens / Telas grandes

## 📞 Contact / Contato

**EN:** If you have any questions or suggestions, feel free to reach out!
**PT-BR:** Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato!

- Email: edulacerdaaa@gmail.com
- GitHub: [@lacerdaaa](https://github.com/yourusername)
- LinkedIn: [Eduardo Lacerda](https://linkedin.com/in/olacerdadev)

---

**Made with ❤️ by lacerdaaa | Feito com ❤️ por lacerdaaa**

*"Cooking code and coding recipes" | "Cozinhando código e codificando receitas"*
