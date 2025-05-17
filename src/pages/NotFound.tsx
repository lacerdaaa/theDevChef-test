
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChefHat } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center">
              <span className="text-9xl font-bold text-gray-200">4</span>
              <div className="mx-3 animate-bounce">
                <ChefHat className="h-20 w-20 text-chef-red" />
              </div>
              <span className="text-9xl font-bold text-gray-200">4</span>
            </div>
            
            <h1 className="font-playfair font-bold text-3xl mt-6 mb-4">Página não encontrada</h1>
            <p className="text-gray-600 mb-8">
              Oops! Parece que a receita que você está procurando não existe. 
              Talvez tenha havido um erro na medida dos ingredientes?
            </p>
            
            <pre className="bg-gray-100 p-4 rounded-lg mb-8 text-left font-sourcecode text-sm overflow-auto">
              <code>
{`// Erro 404
function findPage(route) {
  if (availableRoutes.includes(route)) {
    return renderPage(route);
  } else {
    throw new Error("404: Page not found");
  }
}`}
              </code>
            </pre>
            
            <Link 
              to="/" 
              className="bg-code-blue hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
