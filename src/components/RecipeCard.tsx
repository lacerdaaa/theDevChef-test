
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Utensils } from 'lucide-react';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cuisine: string;
  prepTime: string;
  difficulty: string;
  slug: string;
}

const RecipeCard = ({ id, title, image, cuisine, prepTime, difficulty, slug }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${slug}`} className="card-recipe block">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {cuisine}
        </div>
      </div>
      <div className="p-4 border border-t-0 rounded-b-lg">
        <h3 className="font-playfair font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
