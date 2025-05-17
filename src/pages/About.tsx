
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChefHat, Code, Coffee, Utensils } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* About Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-chef-red" />
              <Code className="h-8 w-8 text-code-blue" />
            </div>
            <h1 className="font-playfair font-bold text-4xl mb-4">Sobre o theDevChef</h1>
            <p className="text-gray-600">
              Explorando a interseção entre programação e gastronomia, criando receitas com precisão 
              de código e elegância francesa.
            </p>
          </div>
          
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef programando" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="font-playfair font-bold text-3xl mb-6">Nossa História</h2>
              <div className="space-y-4">
                <p>
                  O theDevChef nasceu da paixão por dois mundos aparentemente distintos: desenvolvimento de software e gastronomia. 
                  Como programador apaixonado por culinária, percebi que os princípios que guiam um bom código também podem 
                  ser aplicados na cozinha.
                </p>
                <p>
                  Precisão, criatividade, experimentação, iteração constante — estas são habilidades valiosas tanto para 
                  programadores quanto para chefs. E a elegância da culinária francesa, com sua atenção aos detalhes 
                  e técnicas refinadas, reflete a busca pela excelência que encontramos em código bem escrito.
                </p>
                <p>
                  Este projeto é um espaço para explorar essas conexões, compartilhar receitas vistas através das lentes de um 
                  desenvolvedor, e criar uma comunidade onde apaixonados por tecnologia e gastronomia possam se reunir.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-chef-red/10 rounded-full flex items-center justify-center">
                  <ChefHat className="text-chef-red" />
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair font-semibold">DevChef</h3>
                  <p className="text-gray-600 text-sm">Fundador</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission & Values */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-playfair font-bold text-3xl mb-4">Missão e Valores</h2>
              <p className="text-gray-600">
                Conectando o mundo da programação com a arte da culinária através de princípios compartilhados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-chef-red/10 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-chef-red" />
                </div>
                <h3 className="font-playfair font-bold text-xl mb-3">Precisão</h3>
                <p className="text-gray-600">
                  Assim como no código, cada detalhe importa na cozinha. Medidas precisas, 
                  técnicas corretas e timing perfeito são essenciais para resultados excepcionais.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-code-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="text-code-blue" />
                </div>
                <h3 className="font-playfair font-bold text-xl mb-3">Criatividade</h3>
                <p className="text-gray-600">
                  Inovação é fundamental tanto para desenvolvedores quanto para chefs. 
                  Exploramos novos sabores e técnicas com a mesma mentalidade de um programador criando soluções elegantes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-chef-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-chef-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl mb-3">Compartilhamento</h3>
                <p className="text-gray-600">
                  Acreditamos no poder de compartilhar conhecimento. Assim como o código open source, 
                  nossas receitas são feitas para serem compartilhadas, adaptadas e aprimoradas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Join Us CTA */}
          <div className="bg-gradient-to-br from-code-dark to-code-blue text-white rounded-lg p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-2xl md:text-3xl mb-4">
                Junte-se à comunidade theDevChef
              </h2>
              <p className="mb-6 text-gray-200">
                Conecte-se com outros desenvolvedores e entusiastas da culinária. 
                Compartilhe suas próprias receitas, dê feedback e participe das nossas discussões.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="bg-chef-red hover:bg-red-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Assinar Newsletter
                </a>
                <a 
                  href="#" 
                  className="bg-white text-code-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Seguir nas Redes Sociais
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair font-bold text-3xl mb-8 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-xl mb-2">Preciso ser programador para entender as receitas?</h3>
                <p className="text-gray-600">
                  Não! Nossas receitas são acessíveis a todos, com ou sem conhecimento de programação. 
                  As referências ao código são divertidas, mas não são necessárias para seguir as instruções.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-xl mb-2">Posso contribuir com minhas próprias receitas?</h3>
                <p className="text-gray-600">
                  Com certeza! Adoramos receber contribuições da comunidade. Entre em contato conosco 
                  para saber como submeter suas receitas para publicação.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-xl mb-2">Por que o foco na cozinha francesa?</h3>
                <p className="text-gray-600">
                  A cozinha francesa é conhecida por sua técnica, precisão e elegância — qualidades que reverberamos no 
                  desenvolvimento de software. No entanto, exploramos receitas de todo o mundo, sempre com nossa 
                  perspectiva única.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-xl mb-2">Vocês oferecem workshops ou eventos?</h3>
                <p className="text-gray-600">
                  Sim! Organizamos workshops online e presenciais ocasionalmente, combinando conceitos de 
                  programação com técnicas culinárias. Assine nossa newsletter para ser notificado sobre 
                  os próximos eventos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
