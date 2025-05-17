
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-chef-red" />
            <span className="text-xl font-playfair font-bold">
              <span className="text-code-blue">the</span>
              <span className="text-chef-red">Dev</span>
              <span className="text-code-dark">Chef</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link font-medium hover:text-chef-red transition-colors">
              Home
            </Link>
            <Link to="/recipes" className="nav-link font-medium hover:text-chef-red transition-colors">
              Receitas
            </Link>
            <Link to="/blog" className="nav-link font-medium hover:text-chef-red transition-colors">
              Blog
            </Link>
            <Link to="/about" className="nav-link font-medium hover:text-chef-red transition-colors">
              Sobre
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fade-in">
            <Link to="/" className="nav-link font-medium hover:text-chef-red transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/recipes" className="nav-link font-medium hover:text-chef-red transition-colors" onClick={() => setIsMenuOpen(false)}>
              Receitas
            </Link>
            <Link to="/blog" className="nav-link font-medium hover:text-chef-red transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/about" className="nav-link font-medium hover:text-chef-red transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
