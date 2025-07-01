import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaTooth, FaBed, FaDumbbell } from 'react-icons/fa';

const SelectPage = () => {
  const squares = [
    {
      title: "Dental",
      description: "Try presentation website and management dashboard",
      link: "https://dental.simplu.io",
      color: "bg-gray-800 hover:bg-gray-700",
      icon: <FaTooth />
    },
    {
      title: "Gym",
      description: "See how your online presence can look like",
      link: "https://gym.simplu.io",
      color: "bg-blue-600 hover:bg-blue-500",
      icon: <FaDumbbell />
    },
    {
      title: "Hotel",
      description: "Your guest's experience starts here and your life gets easier",
      link: "https://hotel.simplu.io",
      color: "bg-green-600 hover:bg-green-500",
      icon: <FaBed />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Destination
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select one of the options below to navigate to external resources and learn more about our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {squares.map((square, index) => (
            <a
              key={index}
              href={square.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${square.color} group relative overflow-hidden rounded-xl p-8 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{square.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                  {square.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {square.description}
                </p>
                <div className="flex items-center text-sm font-medium">
                  <span>Visit</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All links open in a new tab for your convenience
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
