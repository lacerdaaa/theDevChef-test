
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Code, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl mx-auto relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-chef-red/5"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-code-blue/5"></div>
          
          <div 
            className="absolute top-1/4 right-10 text-chef-red/10 text-8xl font-bold transform -rotate-12 opacity-70"
          >
            {"<recipe>"}
          </div>
          <div 
            className="absolute bottom-1/4 left-10 text-code-blue/10 text-7xl font-bold transform rotate-12 opacity-70"
          >
            {"</coding>"}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="text-chef-red" />
              <Code className="text-code-blue" />
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-code-dark">the</span>
              <span className="text-chef-red">Dev</span>
              <span className="text-code-blue">Chef</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              <span className="font-sourcecode">Onde a programação encontra o sabor</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg text-lg">
              Receitas deliciosas com uma pitada de código. Junte-se a nós para explorar a culinária através dos olhos de um desenvolvedor.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/recipes" 
                className="btn-primary flex items-center justify-center"
              >
                <span>Explorar Receitas</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/blog/recursividade-pao-sourdough" 
                className="btn-secondary flex items-center justify-center"
              >
                <span>Ver exemplo de blog</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative animate-slide-right hidden md:block">
            <div className="absolute -inset-4 bg-gray-200/50 rounded-xl transform rotate-3"></div>
            <div className="absolute -inset-4 bg-chef-red/20 rounded-xl transform -rotate-3"></div>
            <div className="relative bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=1000&auto=format&fit=crop" 
                alt="Coding chef" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow">
                <code className="text-sm">console.log("delicious!");</code>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sourcecode text-sm text-gray-500">// receita em destaque</span>
                  <Link to="/recipe/coq-au-vin" className="text-xs text-chef-red hover:underline">Ver receita</Link>
                </div>
                <h3 className="font-playfair font-bold text-lg">Coq au Vin</h3>
                <p className="text-sm text-gray-600 mt-1">Um clássico da culinária francesa, semelhante à refatoração de código.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
