
export interface Recipe {
  id: string;
  title: string;
  slug: string;
  image: string;
  cuisine: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  ingredients: string[];
  equipment: string[];
  instructions: string[];
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Coq au Vin (Frango ao Vinho)',
    slug: 'coq-au-vin',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Francesa',
    prepTime: '30 min',
    cookTime: '1h 30 min',
    difficulty: 'Médio',
    servings: 4,
    ingredients: ['frango', 'vinho tinto', 'bacon', 'cogumelos', 'cebola', 'alho'],
    equipment: ['panela de pressão', 'frigideira'],
    instructions: [
      'Corte o frango em pedaços e tempere com sal e pimenta',
      'Frite o bacon em uma panela grande até ficar crocante',
      'Retire o bacon e doure os pedaços de frango na mesma panela',
      'Adicione cebola, alho e cogumelos',
      'Despeje o vinho tinto e deixe cozinhar em fogo baixo por 1h30',
      'Sirva com purê de batatas'
    ],
    description: 'Um clássico da culinária francesa, este prato combina frango tenro com o sabor rico do vinho tinto, um processo semelhante à refatoração de código: transformamos ingredientes simples em algo elegante.'
  },
  {
    id: '2',
    title: 'Feijoada Completa',
    slug: 'feijoada',
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Brasileira',
    prepTime: '1h',
    cookTime: '3h',
    difficulty: 'Difícil',
    servings: 8,
    ingredients: ['feijão preto', 'linguiça', 'carne seca', 'costela de porco', 'laranja', 'arroz'],
    equipment: ['panela de pressão', 'panela grande'],
    instructions: [
      'Deixe o feijão e as carnes de molho separadamente',
      'Cozinhe o feijão na panela de pressão por 30 minutos',
      'Refogue as carnes separadamente',
      'Junte as carnes ao feijão e cozinhe por mais 2 horas',
      'Sirva com arroz, couve, laranja e farofa'
    ],
    description: 'A feijoada é como um sistema complexo bem organizado: cada componente tem seu papel, mas juntos criam uma experiência única e satisfatória. Um verdadeiro projeto full-stack da gastronomia brasileira.'
  },
  {
    id: '3',
    title: 'Risoto de Funghi',
    slug: 'risoto-funghi',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c5?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Italiana',
    prepTime: '20 min',
    cookTime: '30 min',
    difficulty: 'Médio',
    servings: 4,
    ingredients: ['arroz arbóreo', 'funghi', 'cebola', 'alho', 'vinho branco', 'caldo de legumes'],
    equipment: ['panela', 'colher de pau'],
    instructions: [
      'Refogue cebola e alho em azeite',
      'Adicione o arroz e refogue até ficar translúcido',
      'Adicione vinho branco e espere evaporar',
      'Acrescente o caldo, pouco a pouco, mexendo sempre',
      'Quando o arroz estiver al dente, adicione os cogumelos',
      'Finalize com manteiga e queijo parmesão'
    ],
    description: 'Preparar um risoto é como depurar um código: demanda atenção constante, ajustes graduais e paciência. O resultado é uma experiência cremosa e reconfortante que vale cada minuto de dedicação.'
  },
  {
    id: '4',
    title: 'Boeuf Bourguignon',
    slug: 'boeuf-bourguignon',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Francesa',
    prepTime: '30 min',
    cookTime: '3h',
    difficulty: 'Médio',
    servings: 6,
    ingredients: ['carne bovina', 'vinho tinto', 'cenoura', 'cebola', 'alho', 'cogumelos'],
    equipment: ['panela de ferro', 'forno'],
    instructions: [
      'Corte a carne em cubos e tempere com sal e pimenta',
      'Doure a carne em uma panela com manteiga',
      'Adicione os vegetais e refogue',
      'Despeje o vinho tinto e ervas',
      'Cozinhe em fogo baixo por 3 horas ou no forno a 160°C',
      'Sirva com purê de batatas'
    ],
    description: 'Este ensopado francês clássico é como um algoritmo bem otimizado: demora um tempo para ser executado, mas o resultado é perfeito e confiável. A magia está na transformação de ingredientes simples em algo extraordinário.'
  },
  {
    id: '5',
    title: 'Moqueca de Peixe',
    slug: 'moqueca',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Brasileira',
    prepTime: '30 min',
    cookTime: '40 min',
    difficulty: 'Fácil',
    servings: 4,
    ingredients: ['peixe branco', 'pimentão', 'tomate', 'cebola', 'leite de coco', 'azeite de dendê'],
    equipment: ['panela de barro', 'frigideira'],
    instructions: [
      'Tempere o peixe com limão, sal e pimenta',
      'Em uma panela, faça camadas de peixe e vegetais',
      'Adicione leite de coco e azeite de dendê',
      'Cozinhe em fogo médio por 30-40 minutos',
      'Sirva com arroz e pirão'
    ],
    description: 'A moqueca é um exemplo de paralelismo na culinária: vários ingredientes cozinham simultaneamente, trocando sabores e criando uma harmonia colorida e deliciosa, como um sistema assíncrono perfeitamente executado.'
  },
  {
    id: '6',
    title: 'Spaghetti alla Carbonara',
    slug: 'carbonara',
    image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=1000&auto=format&fit=crop',
    cuisine: 'Italiana',
    prepTime: '10 min',
    cookTime: '15 min',
    difficulty: 'Médio',
    servings: 2,
    ingredients: ['macarrão espaguete', 'pancetta', 'ovos', 'queijo pecorino', 'pimenta preta'],
    equipment: ['panela', 'frigideira'],
    instructions: [
      'Cozinhe o espaguete em água salgada',
      'Frite a pancetta até ficar crocante',
      'Bata os ovos com o queijo ralado',
      'Misture o macarrão escorrido com a pancetta',
      'Adicione a mistura de ovos fora do fogo',
      'Finalize com pimenta preta moída na hora'
    ],
    description: 'A carbonara é como código limpo: poucos ingredientes cuidadosamente balanceados que resultam em algo elegante. Timing é tudo - um erro de execução pode comprometer todo o projeto!'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Recursividade na Cozinha: O Ciclo do Pão Sourdough',
    slug: 'recursividade-pao-sourdough',
    image: 'https://images.unsplash.com/photo-1585478259715-4d95d0a89464?q=80&w=1000&auto=format&fit=crop',
    date: '2023-06-15',
    author: 'DevChef',
    excerpt: 'Descubra como o processo de fermentação natural do pão sourdough é um perfeito exemplo de recursividade e processos iterativos.',
    content: 'Conteúdo completo do artigo sobre recursividade e fermentação de pães...',
    tags: ['pão', 'fermentação', 'recursividade', 'programação']
  },
  {
    id: '2',
    title: 'Arrays e Mise en Place: A Importância da Organização',
    slug: 'arrays-mise-en-place',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop',
    date: '2023-07-22',
    author: 'DevChef',
    excerpt: 'Assim como um bom programador organiza seus arrays, um chef organiza seus ingredientes com mise en place. Exploramos os paralelos entre estas técnicas.',
    content: 'Conteúdo completo do artigo sobre arrays e mise en place...',
    tags: ['organização', 'arrays', 'mise en place', 'eficiência']
  },
  {
    id: '3',
    title: 'Design Patterns: Da Arquitetura de Software aos Molhos Mãe Franceses',
    slug: 'design-patterns-molhos-franceses',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=1000&auto=format&fit=crop',
    date: '2023-08-10',
    author: 'DevChef',
    excerpt: 'Os cinco molhos mãe da culinária francesa são como design patterns: estruturas fundamentais das quais derivam infinitas variações.',
    content: 'Conteúdo completo do artigo sobre design patterns e molhos...',
    tags: ['design patterns', 'molhos', 'culinária francesa', 'arquitetura']
  }
];

export const cuisines = ['Francesa', 'Brasileira', 'Italiana', 'Todas'];
export const ingredients = ['frango', 'carne bovina', 'peixe', 'feijão', 'arroz arbóreo', 'macarrão'];
export const equipments = ['panela de pressão', 'frigideira', 'panela de barro', 'forno', 'panela de ferro'];
