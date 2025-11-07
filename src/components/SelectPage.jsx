import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaTooth, FaBed, FaDumbbell } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const SelectPage = () => {
  const cards = [
    {
      title: "Dental",
      description: "Formulare de programari, factura de consultatie, gestiune de pachete",
      link: "https://dental.simplu.io",
      icon: <FaTooth />,
      gradient: "from-slate-900 to-slate-800",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
      backgroundImage: "/stoma.jpg",
      pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364748b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Sala de Sport",
      description: "Vezi cum poate arăta prezența ta online",
      link: "https://gym.simplu.io",
      icon: <FaDumbbell />,
      gradient: "from-blue-600 to-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      backgroundImage: "/gym.jpeg",
      pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Hotel",
      description: "Experiența oaspeților tăi începe aici și viața ta devine mai ușoară",
      link: "https://hotel.simplu.io",
      icon: <FaBed />,
      gradient: "from-emerald-600 to-emerald-700",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      backgroundImage: "/hotel.jpg",
      pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm aspect-[3/5]">
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: `url("${card.pattern}")` }}
                ></div>
                
                {/* Background image */}
                <div 
                  className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{ backgroundImage: `url("${card.backgroundImage}")` }}
                ></div>
                
                {/* Text fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                
                {/* Extra text fade overlay */}
                <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-black/40 to-transparent"></div>
                
                <div className="relative z-10 h-full flex flex-col p-4">
                  {/* Top section - Icon and title */}
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-xl text-white">
                        {card.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-white group-hover:text-white transition-colors mb-1 drop-shadow-lg">
                        {card.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  {/* Middle section - Description */}
                  <div className="flex-1 mb-4">
                    <CardDescription className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                      {card.description}
                    </CardDescription>
                  </div>
                  
                  {/* Bottom section - CTA */}
                  <div className="flex items-center justify-end">
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span className="font-medium text-sm drop-shadow-md">Vizitează Platforma</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50">
            <ExternalLink className="h-4 w-4 text-slate-400 mr-2" />
            <p className="text-slate-500 text-sm font-medium">
              Toate linkurile se deschid într-o filă nouă pentru comoditatea ta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
