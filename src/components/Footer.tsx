
import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-code-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-6 w-6 text-chef-red" />
              <span className="text-lg font-playfair font-bold">
                <span className="text-white">the</span>
                <span className="text-chef-red">Dev</span>
                <span className="text-white">Chef</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Onde a programação e a culinária se encontram, criando receitas deliciosas com uma pitada de código.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-white transition-colors">
                  Receitas
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Assine para receber nossas receitas e artigos mais recentes.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-chef-red"
              />
              <button 
                type="submit" 
                className="bg-chef-red hover:bg-red-900 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} theDevChef. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
