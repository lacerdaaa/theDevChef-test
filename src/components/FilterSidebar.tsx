
import React from 'react';

interface FilterSidebarProps {
  cuisines: string[];
  ingredients: string[];
  equipment: string[];
  activeCuisine: string;
  setActiveCuisine: (cuisine: string) => void;
  activeIngredient: string;
  setActiveIngredient: (ingredient: string) => void;
  activeEquipment: string;
  setActiveEquipment: (equipment: string) => void;
}

const FilterSidebar = ({
  cuisines,
  ingredients,
  equipment,
  activeCuisine,
  setActiveCuisine,
  activeIngredient,
  setActiveIngredient,
  activeEquipment,
  setActiveEquipment
}: FilterSidebarProps) => {

  const handleCuisineClick = (cuisine: string) => {
    setActiveCuisine(cuisine === activeCuisine ? '' : cuisine);
  };

  const handleIngredientClick = (ingredient: string) => {
    setActiveIngredient(ingredient === activeIngredient ? '' : ingredient);
  };

  const handleEquipmentClick = (equip: string) => {
    setActiveEquipment(equip === activeEquipment ? '' : equip);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-playfair font-bold text-lg mb-3 flex items-center">
          <span className="text-chef-red mr-2">{"{"}</span> 
          Cozinhas 
          <span className="text-chef-red ml-2">{"}"}</span>
        </h3>
        <div className="space-y-2">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => handleCuisineClick(cuisine)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCuisine === cuisine ? 'bg-code-blue text-white' : 'hover:bg-gray-100'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-playfair font-bold text-lg mb-3 flex items-center">
          <span className="text-chef-red mr-2">{"["}</span> 
          Ingredientes 
          <span className="text-chef-red ml-2">{"]"}</span>
        </h3>
        <div className="space-y-2">
          {ingredients.map((ingredient) => (
            <button
              key={ingredient}
              onClick={() => handleIngredientClick(ingredient)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeIngredient === ingredient ? 'bg-chef-red text-white' : 'hover:bg-gray-100'
              }`}
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-playfair font-bold text-lg mb-3 flex items-center">
          <span className="text-code-blue mr-2">()</span> 
          Equipamentos 
          <span className="text-code-blue ml-2">()</span>
        </h3>
        <div className="space-y-2">
          {equipment.map((equip) => (
            <button
              key={equip}
              onClick={() => handleEquipmentClick(equip)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeEquipment === equip ? 'bg-code-blue text-white' : 'hover:bg-gray-100'
              }`}
            >
              {equip}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={() => {
            setActiveCuisine('');
            setActiveIngredient('');
            setActiveEquipment('');
          }}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
        >
          Limpar filtros
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
