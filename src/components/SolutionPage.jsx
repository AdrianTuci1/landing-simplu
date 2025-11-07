import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardTitle, CardDescription } from './ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { FaTooth, FaBed, FaDumbbell } from 'react-icons/fa';

const SolutionPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Cronologie avansată",
      description: "Urmărește proiectele tale cu precizie folosind funcțiile noastre avansate de cronologie. Vizualizează progresul, setează milestone-uri și păstrează echipa ta aliniată cu actualizări în timp real.",
      image: "/dashboard.png"
    },
    {
      title: "Multiple locații",
      description: "Gestionează și prezintă multiple locații într-un singur loc",
      image: "/hero.png"
    },
    {
      title: "Vânzări și facturare integrate",
      description: "Optimizează operațiunile tale de business cu urmărirea vânzărilor integrate și facturarea automată. Gestionează clienții, urmărește plățile și generează facturi profesionale.",
      image: "/vanzare.png"
    },
    {
      title: "Carduri de acces",
      description: "Ofera chei de acces clientilor tai chiar in web sau ios, android. Asigura prezenta 100% la clase sau servicii cu agentul conversational.",
      image: "/phone-mock.png"
    },
    {
      title: "Pagină web de prezentare",
      description: "Creează pagini de prezentare uimitoare care îți prezintă munca profesional. Template-uri personalizabile și elemente interactive pentru a atrage audiența ta.",
      image: "/hero.png"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mt-20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Dashboard styled like SelectPage (4/3) */}
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm aspect-[4/3] group cursor-pointer">
              {/* Background image */}
              <div 
                className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/stoma.jpg")' }}
              ></div>
              {/* Text fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
              {/* Extra text fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-black/40 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col p-6">
                {/* Top section - Icon and Title */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-xl text-white">
                      <FaTooth />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white drop-shadow-lg">
                      Management clinica
                    </CardTitle>
                  </div>
                </div>
                {/* Middle section - Description */}
                <div className="flex-1 mb-4">
                  <CardDescription className="text-white/90 text-base leading-relaxed drop-shadow-md">
                    Platforma colaborativa cu asistent AI. Primeste date in timp real si lasa agentul sa preia programari din surse multiple.
                  </CardDescription>
                </div>
                {/* Bottom section - CTA */}
                <div className="flex items-center justify-end">
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="font-medium text-base drop-shadow-md">Vezi Live</span>
                  </div>
                </div>
              </div>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>

            {/* Card 2 - Multiple Locations styled like SelectPage (4/3) */}
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm aspect-[4/3] group cursor-pointer">
              {/* Background image */}
              <div 
                className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/hotel.jpg")' }}
              ></div>
              {/* Text fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
              {/* Extra text fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-black/40 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-xl text-white">
                      <FaBed />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white drop-shadow-lg">
                      Management hotel
                    </CardTitle>
                  </div>
                </div>
                <div className="flex-1 mb-4">
                  <CardDescription className="text-white/90 text-base leading-relaxed drop-shadow-md">
                    Administrează multiple locații într-o interfață. Obține date în timp real și lasă agentul să se sincronizeze cu platformele externe.
                  </CardDescription>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="font-medium text-base drop-shadow-md">Vezi Live</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>

            {/* Card 3 - Sales & Billing styled like SelectPage (4/3) */}
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm aspect-[4/3] group cursor-pointer">
              {/* Background image */}
              <div 
                className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/gym.jpeg")' }}
              ></div>
              {/* Text fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
              {/* Extra text fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-black/40 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-xl text-white">
                      <FaDumbbell />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white drop-shadow-lg">
                      Management fitness
                    </CardTitle>
                  </div>
                </div>
                <div className="flex-1 mb-4">
                  <CardDescription className="text-white/90 text-base leading-relaxed drop-shadow-md">
                    Ofera chei de acces clientilor tai chiar in web sau iOS, Android. Asigura prezenta 100% la clase sau servicii cu agentul conversational.
                  </CardDescription>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="font-medium text-base drop-shadow-md">Vezi Live</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>

          </div>

        </div>
      </section>

      {/* Two Column Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Accordion */}
          <div className="space-y-3">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Tot ce ai nevoie într-o singură aplicație
              </h2>
              <p className="text-lg text-gray-600">
                Descoperă toate funcțiile puternice care îți vor transforma workflow-ul și te vor ajuta să realizezi mai mult.
              </p>
            </div>
            
            <div className="space-y-0">
              {accordionItems.map((item, index) => (
                <div key={index}>
                  <div 
                    className={`cursor-pointer transition-all duration-300 p-4 ${
                      activeAccordion === index 
                        ? 'bg-blue-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveAccordion(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      {activeAccordion === index ? (
                        <ChevronDown className="h-5 w-5 text-blue-600" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    {activeAccordion === index && (
                      <p className="text-gray-600 leading-relaxed mt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {index < accordionItems.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="lg:mt-24">
            <div className={cn(
              "p-0 rounded-2xl aspect-[1/1] w-full h-full",
              "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
            )}>
              <div className="w-full h-full flex justify-center items-center">
                  <div className="flex items-center justify-center min-h-[500px] overflow-hidden">
                      <img 
                        src={accordionItems[activeAccordion].image} 
                        alt={accordionItems[activeAccordion].title}
                        className="w-full h-500px transition-all duration-500 rounded-lg translate-x-[150px] scale-125"
                      />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 mt-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Large Square */}
          <div className="flex justify-center order-2 lg:order-1 pt-10">
            <div className="w-[95%] aspect-[1/1] sm:w-[90%] lg:w-[100%] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl">
              <div className="text-center p-6 sm:p-8 lg:p-12">
                <img src="/agent.png" alt="Asistent AI" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Right Column - 4 Paragraphs with Chip */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4 sm:mb-6">
              Asistent AI
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Învățare Inteligentă</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Experimentează viitorul productivității cu asistentul nostru AI avansat. 
                  Învață din tiparele tale de workflow și oferă sugestii inteligente 
                  pentru a te ajuta să lucrezi mai inteligent, nu mai mult.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Optimizare Sarcini</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  De la priorizarea automată a sarcinilor la recomandări inteligente de programare, 
                  asistentul nostru AI se adaptează la stilul tău unic de lucru și te ajută 
                  să te concentrezi pe ceea ce contează cel mai mult.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Insights Instantanee</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Obține răspunsuri instantanee la întrebările tale, generare automată de rapoarte, 
                  și insights inteligente care te ajută să iei decizii mai bune mai rapid. 
                  Asistentul AI învață și se îmbunătățește mereu.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Integrare Fără Cusături</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Integrează-te fără probleme cu instrumentele și workflow-urile tale existente. 
                  Asistentul nostru AI lucrează în fundal pentru a-ți îmbunătăți productivitatea 
                  fără să-ți deranjeze procesele stabilite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-gray-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ești gata să începi?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Alătură-te miilor de utilizatori care și-au transformat deja workflow-ul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Începe Proba Gratuită
            </Button>
            <Button size="lg" variant="default" className="px-8 py-3 text-lg border-white text-white bg-black hover:text-blue">
              Vezi Preturi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};



export default SolutionPage;