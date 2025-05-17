
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { recipes } from '../data/mockData';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair font-bold text-3xl mb-4">Receita não encontrada</h1>
            <p className="mb-6">A receita que você está procurando não existe.</p>
            <Link to="/recipes" className="btn-secondary">
              Voltar para receitas
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Link to="/recipes" className="hover:text-chef-red">Receitas</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{recipe.title}</span>
            </div>
          </div>
          
          {/* Recipe Header */}
          <div className="mb-10">
            <h1 className="font-playfair font-bold text-4xl mb-4">{recipe.title}</h1>
            <p className="text-gray-600 mb-6 max-w-3xl">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 mr-1" />
                <span>Prep: {recipe.prepTime}</span>
              </span>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 mr-1" />
                <span>Cozimento: {recipe.cookTime}</span>
              </span>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                <ChefHat className="h-4 w-4 mr-1" />
                <span>Dificuldade: {recipe.difficulty}</span>
              </span>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                <Users className="h-4 w-4 mr-1" />
                <span>Porções: {recipe.servings}</span>
              </span>
              <span className="inline-flex items-center bg-chef-red/10 text-chef-red px-3 py-1 rounded-full">
                {recipe.cuisine}
              </span>
            </div>
          </div>
          
          {/* Recipe Image and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="font-playfair font-bold text-xl mb-4 flex items-center">
                  <span className="text-chef-red mr-2">{"["}</span>
                  Ingredientes
                  <span className="text-chef-red ml-2">{"]"}</span>
                </h2>
                <ul className="space-y-2 mb-6">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-chef-red mr-2">•</span>
                      <span className="capitalize">{ingredient}</span>
                    </li>
                  ))}
                </ul>
                
                <h2 className="font-playfair font-bold text-xl mb-4 flex items-center">
                  <span className="text-code-blue mr-2">()</span>
                  Equipamentos
                  <span className="text-code-blue ml-2">()</span>
                </h2>
                <ul className="space-y-2">
                  {recipe.equipment.map((equip, index) => (
                    <li key={index} className="flex items-start">
                      <Utensils className="h-4 w-4 mr-2 text-code-blue" />
                      <span className="capitalize">{equip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="mb-10">
            <h2 className="font-playfair font-bold text-2xl mb-6 flex items-center">
              <span className="text-code-blue mr-2">{"function"}</span>
              Instruções
              <span className="text-code-blue ml-2">{"() {"}</span>
            </h2>
            
            <div className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-chef-red text-white rounded-full">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="recipe-step">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-code-blue font-sourcecode">{"}"}</div>
          </div>
          
          {/* Tags and Share */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t">
            <div className="mb-4 sm:mb-0">
              <div className="flex flex-wrap gap-2">
                {recipe.ingredients.map((ingredient, index) => (
                  index < 4 && (
                    <span key={ingredient} className="tag">
                      {ingredient}
                    </span>
                  )
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-chef-red">
                Compartilhar
              </button>
              <button className="text-gray-600 hover:text-chef-red">
                Salvar
              </button>
              <button className="text-gray-600 hover:text-chef-red">
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
