import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/mockData';
import { Calendar, User, Tag } from 'lucide-react';
import BlogPostCard from '../components/BlogPostCard';
import CodeSnippet from '../components/blog/CodeSnippet';
import BlogStep from '../components/blog/BlogStep';
import BlogContent from '../components/blog/BlogContent';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair font-bold text-3xl mb-4">Artigo não encontrado</h1>
            <p className="mb-6">O artigo que você está procurando não existe.</p>
            <Link to="/blog" className="btn-secondary">
              Voltar para o blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Para demonstração, vamos criar um conteúdo mais rico para o primeiro post do blog
  const renderRichContent = () => {
    if (post.id === '1') {
      return (
        <BlogContent>
          <p>
            A fermentação de pães usando fermento natural (sourdough) é um processo que se assemelha muito à 
            recursividade em programação. Assim como uma função recursiva chama a si mesma com parâmetros 
            diferentes até atingir uma condição de parada, o processo de manutenção de um fermento natural 
            também funciona de maneira semelhante.
          </p>

          <CodeSnippet 
            title="Fermento Natural = Função Recursiva"
            code={`function refreshStarter(starter) {
  // Condição de parada: fermento está pronto para uso
  if (starterIsActive(starter)) {
    return starter;
  }
  
  // Alimentar o fermento (uma parte fermento + uma parte água + uma parte farinha)
  const refreshedStarter = feed(starter);
  
  // Esperar o tempo de fermentação (8-12 horas)
  wait(8, 'hours');
  
  // Chamada recursiva com o fermento atualizado
  return refreshStarter(refreshedStarter);
}`}
          />

          <p>
            Cada ciclo de alimentação do fermento natural envolve descartar uma porção do fermento existente 
            e adicionar nova farinha e água. Com o tempo, isso cria uma cultura estável e ativa cheia de 
            leveduras selvagens e bactérias que trabalham em harmonia. Esta cultura continuamente se 
            transforma através de iterações regulares.
          </p>

          <h3 className="font-playfair font-semibold text-2xl mt-8 mb-4">O Ciclo do Sourdough</h3>

          <p>
            No desenvolvimento de software, iteramos nosso código, refinando-o a cada ciclo. Da mesma forma, 
            ao manter um fermento natural, a cada alimentação (iteração) estamos selecionando e fortalecendo 
            as culturas mais adaptadas ao nosso ambiente e materiais.
          </p>
          
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <BlogStep 
              title="1. Inicialização"
              description="Assim como iniciamos uma variável, começamos um fermento com farinha, água e tempo."
            />
            <BlogStep 
              title="2. Iteração"
              description="Alimentamos o fermento regularmente, evoluindo sua composição a cada ciclo."
            />
            <BlogStep 
              title="3. Condição de Término"
              description="Quando o fermento dobra de volume em tempo previsível, está pronto para uso."
            />
          </div>
          
          <p>
            Este paralelo entre programação e fermentação natural nos mostra como processos iterativos 
            e recursivos existem tanto na tecnologia quanto na natureza, nos lembrando que muitos princípios 
            fundamentais transcendem disciplinas específicas.
          </p>

          <h3 className="font-playfair font-semibold text-2xl mt-8 mb-4">Aplicando Este Conceito</h3>

          <p>
            Da próxima vez que você trabalhar com algoritmos recursivos ou processos iterativos, 
            lembre-se do humilde fermento natural em sua cozinha. E da próxima vez que alimentar seu 
            fermento, pense em como você está executando uma função recursiva biológica que resulta em 
            pães deliciosos!
          </p>
        </BlogContent>
      );
    } else {
      // Conteúdo genérico para outros posts
      return (
        <BlogContent>
          <p className="mb-4">
            {post.excerpt}
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, 
            nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, 
            nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
          </p>
          <p>
            Conteúdo completo do artigo ainda em desenvolvimento...
          </p>
        </BlogContent>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-chef-red">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-chef-red">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{post.title}</span>
            </div>
          </div>
          
          {/* Article Header */}
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose lg:prose-lg">
            {renderRichContent()}
          </div>
          
          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-8 pt-6 border-t">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="tag bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="font-playfair font-bold text-2xl mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                <BlogPostCard 
                  key={relatedPost.id}
                  id={relatedPost.id}
                  title={relatedPost.title}
                  image={relatedPost.image}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                  slug={relatedPost.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
