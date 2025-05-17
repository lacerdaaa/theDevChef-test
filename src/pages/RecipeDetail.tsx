
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { recipes } from '../data/mockData';
import { Clock, Users, ChefHat, Utensils, MessageCircle, Star, Info, StarHalf, StarOff, CircleCheck } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);
  const [rating, setRating] = useState<number | null>(null);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState('');
  
  const handleRating = (value: number) => {
    setRating(value);
  };

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
            <p className="text-gray-600 mb-6 max-w-4xl text-lg">{recipe.description}</p>
            
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
          
          {/* Recipe Content: 3 columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Left Sidebar - Ingredients & Equipment */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h2 className="font-playfair font-bold text-xl mb-4 flex items-center">
                      <span className="text-chef-red mr-2">{"["}</span>
                      Ingredientes
                      <span className="text-chef-red ml-2">{"]"}</span>
                    </h2>
                    <ul className="space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-chef-red mr-2 font-bold">•</span>
                          <span className="capitalize">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="font-playfair font-bold text-xl mb-4 flex items-center">
                      <span className="text-code-blue mr-2">()</span>
                      Equipamentos
                      <span className="text-code-blue ml-2">()</span>
                    </h2>
                    <ul className="space-y-3">
                      {recipe.equipment.map((equip, index) => (
                        <li key={index} className="flex items-start">
                          <Utensils className="h-4 w-4 mr-2 text-code-blue flex-shrink-0 mt-1" />
                          <span className="capitalize">{equip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main Content - Image and Instructions */}
            <div className="lg:col-span-6">
              {/* Image */}
              <div className="mb-8">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              {/* Instructions */}
              <div className="mb-8">
                <h2 className="font-playfair font-bold text-2xl mb-6 flex items-center">
                  <span className="text-code-blue mr-2">{"function"}</span>
                  Instruções
                  <span className="text-code-blue ml-2">{"() {"}</span>
                </h2>
                
                <div className="space-y-6">
                  {recipe.instructions.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 bg-chef-red text-white rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="recipe-step text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-code-blue font-sourcecode">{"}"}</div>
              </div>
              
              {/* Recipe Tips */}
              <Collapsible className="mb-8 border border-gray-200 rounded-lg">
                <CollapsibleTrigger className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-left font-semibold rounded-t-lg">
                  <div className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-chef-red" />
                    <span>Dicas do Chef</span>
                  </div>
                  <ChefHat className="h-5 w-5 text-chef-red" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white rounded-b-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 mr-2 text-code-blue flex-shrink-0" />
                      <p>Prepare todos os ingredientes antes de começar para facilitar o processo.</p>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 mr-2 text-code-blue flex-shrink-0" />
                      <p>A temperatura correta é essencial para o sucesso desta receita.</p>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 mr-2 text-code-blue flex-shrink-0" />
                      <p>Não substitua os ingredientes principais, pois podem afetar o sabor final.</p>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
              
              {/* User Feedback Section */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="font-playfair font-bold text-xl mb-4 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-chef-red" />
                    Feedback
                  </h2>
                  
                  {/* Star Rating */}
                  <div className="mb-6">
                    <p className="mb-2 text-gray-600">Avalie esta receita:</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRating(star)}
                          className="mr-1 focus:outline-none"
                        >
                          {rating && star <= rating ? (
                            <Star className="h-6 w-6 text-chef-gold" />
                          ) : rating && star === Math.ceil(rating) && rating % 1 !== 0 ? (
                            <StarHalf className="h-6 w-6 text-chef-gold" />
                          ) : (
                            <StarOff className="h-6 w-6 text-gray-300" />
                          )}
                        </button>
                      ))}
                      {rating && (
                        <span className="ml-2 text-gray-600">{rating} de 5</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Comment Form */}
                  {!isCommentOpen ? (
                    <Button 
                      onClick={() => setIsCommentOpen(true)}
                      variant="outline"
                      className="w-full"
                    >
                      Deixe seu comentário
                    </Button>
                  ) : (
                    <div className="animate-fade-in">
                      <textarea
                        className="w-full p-3 border rounded-md mb-3"
                        rows={4}
                        placeholder="Conte sua experiência com esta receita..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setIsCommentOpen(false);
                            setComment('');
                          }}
                        >
                          Cancelar
                        </Button>
                        <Button 
                          onClick={() => {
                            alert('Comentário enviado! Obrigado pelo feedback!');
                            setIsCommentOpen(false);
                            setComment('');
                          }}
                        >
                          Enviar
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Right Sidebar - Related Recipes & Tags */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h3 className="font-playfair font-bold text-xl mb-4">Receitas Relacionadas</h3>
                    <div className="space-y-4">
                      {recipes.slice(0, 3).map((relatedRecipe) => (
                        relatedRecipe.slug !== slug && (
                          <Link 
                            to={`/recipe/${relatedRecipe.slug}`} 
                            key={relatedRecipe.slug}
                            className="flex items-center gap-3 group"
                          >
                            <img 
                              src={relatedRecipe.image} 
                              alt={relatedRecipe.title} 
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div>
                              <h4 className="font-medium group-hover:text-chef-red transition-colors">
                                {relatedRecipe.title}
                              </h4>
                              <p className="text-sm text-gray-500">{relatedRecipe.cuisine}</p>
                            </div>
                          </Link>
                        )
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/recipes" className="text-sm text-chef-red hover:underline w-full text-center">
                      Ver todas as receitas
                    </Link>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-playfair font-bold text-xl mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.slice(0, 8).map((ingredient) => (
                        <span 
                          key={ingredient} 
                          className="tag hover:bg-gray-200 cursor-pointer transition-colors"
                        >
                          {ingredient}
                        </span>
                      ))}
                      <span className="tag bg-chef-red/10 text-chef-red hover:bg-chef-red/20 cursor-pointer transition-colors">
                        {recipe.cuisine}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Share & Save Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-500 text-sm">Gostou desta receita? Compartilhe:</p>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-chef-red transition-colors">
                Compartilhar
              </button>
              <button className="text-gray-600 hover:text-chef-red transition-colors">
                Salvar
              </button>
              <button className="text-gray-600 hover:text-chef-red transition-colors">
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
