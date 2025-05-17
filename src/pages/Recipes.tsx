
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import FilterSidebar from '../components/FilterSidebar';
import { recipes, cuisines, ingredients, equipments } from '../data/mockData';
import { Search } from 'lucide-react';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCuisine, setActiveCuisine] = useState('');
  const [activeIngredient, setActiveIngredient] = useState('');
  const [activeEquipment, setActiveEquipment] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === '' || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCuisine = activeCuisine === '' || recipe.cuisine === activeCuisine;
    
    const matchesIngredient = activeIngredient === '' || 
      recipe.ingredients.includes(activeIngredient);
      
    const matchesEquipment = activeEquipment === '' || 
      recipe.equipment.includes(activeEquipment);
      
    return matchesSearch && matchesCuisine && matchesIngredient && matchesEquipment;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="font-playfair font-bold text-4xl mb-4">Receitas</h1>
            <p className="text-gray-600">
              Explore nossa coleção de receitas com um toque de código. 
              Filtrar por cozinha, ingredientes ou equipamentos para encontrar sua próxima refeição.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar receitas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chef-red"
              />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4 lg:sticky lg:top-24 lg:h-full">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="font-playfair font-bold text-xl mb-6 pb-2 border-b">Filtros</h2>
                <FilterSidebar 
                  cuisines={cuisines}
                  ingredients={ingredients}
                  equipment={equipments}
                  activeCuisine={activeCuisine}
                  setActiveCuisine={setActiveCuisine}
                  activeIngredient={activeIngredient}
                  setActiveIngredient={setActiveIngredient}
                  activeEquipment={activeEquipment}
                  setActiveEquipment={setActiveEquipment}
                />
              </div>
            </div>
            
            {/* Recipe Grid */}
            <div className="lg:w-3/4">
              {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredRecipes.map(recipe => (
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
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-xl mb-2">Nenhuma receita encontrada</h3>
                  <p className="text-gray-600">
                    Tente ajustar seus filtros ou termos de pesquisa
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recipes;
