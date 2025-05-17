import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import RecipeCard from '../components/RecipeCard';
import BlogPostCard from '../components/BlogPostCard';
import { recipes, blogPosts } from '../data/mockData';
import { ArrowRight, ChefHat, Code, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Get featured recipes (first 3)
  const featuredRecipes = recipes.slice(0, 3);
  // Get latest blog posts (first 2)
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 flex items-center justify-center gap-3">
                <ChefHat className="text-chef-red" />
                <span>the</span>
                <span className="text-chef-red">Dev</span>
                <span>Chef</span>
                <Code className="text-code-blue" />
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O <span className="text-chef-red font-medium">theDevChef</span> nasceu da paixão pela programação e gastronomia. 
                Aqui exploramos a intersecção desses mundos, encontrando paralelos surpreendentes 
                e compartilhando receitas deliciosas através de uma perspectiva única.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-chef-red/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <ChefHat className="text-chef-red" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-3">Receitas</h3>
                  <p className="text-gray-600">
                    Descubra pratos tradicionais e inovadores com um toque de programador.
                  </p>
                </div>
                <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-code-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Code className="text-code-blue" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-3">Blog</h3>
                  <p className="text-gray-600">
                    Artigos que exploram paralelos entre gastronomia e desenvolvimento de software.
                  </p>
                </div>
                <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-chef-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Utensils className="text-chef-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-3">Culinária Global</h3>
                  <p className="text-gray-600">
                    Da França ao Brasil, exploramos sabores do mundo com precisão e criatividade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Recipes */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-playfair font-bold text-3xl">
                <span className="text-chef-red">{"/* "}</span>
                Receitas em Destaque
                <span className="text-chef-red">{" */"}</span>
              </h2>
              <Link to="/recipes" className="flex items-center text-code-blue hover:text-code-dark transition-colors">
                <span className="mr-2">Ver todas</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  cuisine={recipe.cuisine}
                  prepTime={recipe.prepTime}
                  difficulty={recipe.difficulty}
                  slug={recipe.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-playfair font-bold text-3xl">
                <span className="text-code-blue">{"<"}</span>
                Últimos Artigos
                <span className="text-code-blue">{"/>"}</span>
              </h2>
              <Link to="/blog" className="flex items-center text-chef-red hover:text-red-700 transition-colors">
                <span className="mr-2">Ver todos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestPosts.map(post => (
                <BlogPostCard 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  image={post.image}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-code-dark to-code-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
              Junte-se à comunidade theDevChef
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Conecte-se com outros desenvolvedores e entusiastas da culinária. 
              Compartilhe suas receitas, dicas de código e participe de workshops online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/recipes" className="bg-chef-red hover:bg-red-900 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Explorar Receitas
              </Link>
              <Link to="/about" className="bg-white text-code-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors">
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
