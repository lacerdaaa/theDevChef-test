
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="font-playfair font-bold text-4xl mb-4">Blog</h1>
            <p className="text-gray-600">
              Explorando as interseções entre desenvolvimento de software e culinária, 
              com insights deliciosos para programadores que cozinham e chefs que codificam.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">{blogPosts[0].date}</div>
                <h2 className="font-playfair font-bold text-3xl mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <Link 
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-chef-red hover:text-red-800 font-medium"
                >
                  Ler artigo completo
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
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
          
          {/* Newsletter */}
          <div className="bg-gradient-to-r from-code-blue to-code-dark text-white rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-2xl md:text-3xl mb-4">
                Assine nossa newsletter
              </h2>
              <p className="mb-6">
                Receba novas receitas, artigos e dicas diretamente na sua caixa de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-grow px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-chef-red"
                />
                <button 
                  type="submit" 
                  className="bg-chef-red hover:bg-red-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
