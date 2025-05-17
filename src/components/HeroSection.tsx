
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-chef-red/5"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-code-blue/5"></div>
      
      <div 
        className="absolute top-20 left-10 text-chef-red/10 text-8xl font-bold transform -rotate-12"
      >
        {"<recipe>"}
      </div>
      <div 
        className="absolute bottom-20 right-10 text-code-blue/10 text-7xl font-bold transform rotate-12"
      >
        {"</cooking>"}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-up">
            <div className="flex items-center space-x-2 mb-2">
              <ChefHat className="text-chef-red" />
              <Code className="text-code-blue" />
            </div>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-code-dark">the</span>
              <span className="text-chef-red">Dev</span>
              <span className="text-code-blue">Chef</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              <span className="font-sourcecode">Onde a programação encontra o sabor</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Receitas deliciosas com uma pitada de código. Junte-se a nós para explorar a culinária através dos olhos de um desenvolvedor, onde precisão, criatividade e experimentação são ingredientes essenciais.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/recipes" 
                className="btn-primary"
              >
                Explorar Receitas
              </Link>
              <Link 
                to="/blog" 
                className="btn-secondary"
              >
                Ler o Blog
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-200/50 rounded-xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-chef-red/20 rounded-xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=1000&auto=format&fit=crop" 
                alt="Coding chef" 
                className="relative rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow">
                <code className="text-sm">console.log("delicious!");</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
