import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SolutionPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Advanced timeline",
      description: "Track your projects with precision using our advanced timeline features. Visualize progress, set milestones, and keep your team aligned with real-time updates.",
      image: "/manage.png"
    },
    {
      title: "Multiple locations",
      description: "Manage and present multiple locations in one place",
      image: "/website.png"
    },
    {
      title: "Integrated sales and invoicing",
      description: "Streamline your business operations with integrated sales tracking and automated invoicing. Manage customers, track payments, and generate professional invoices.",
      image: "/website.png"
    },
    {
      title: "Presentation web page",
      description: "Create stunning presentation pages that showcase your work professionally. Customizable templates and interactive elements to engage your audience.",
      image: "/simplu.png"
    },
    {
      title: "Integrated agents",
      description: "Connect with your team seamlessly through integrated agent features. Real-time collaboration, task assignment, and communication tools all in one place.",
      image: "/demoImg.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Presentation Section */}
      <section className="container mx-auto px-4 py-16 text-left">
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Select the solution that you need
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Choose from our comprehensive suite of tools designed to streamline your workflow and boost productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700">
              Try Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2">
              Learn More
            </Button>
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
                Everything you need packed in one app
              </h2>
              <p className="text-lg text-gray-600">
                Discover all the powerful features that will transform your workflow and help you achieve more.
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
            <div className="bg-gray-50 p-0 rounded-2xl aspect-[1/1] w-full h-full">
              <div className="w-full h-full flex justify-center items-center ">
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
                <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white pt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">AI Assistant</h3>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-600">Your intelligent companion for productivity</p>
              </div>
            </div>
          </div>

          {/* Right Column - 4 Paragraphs with Chip */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4 sm:mb-6">
              AI Assistant
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Smart Learning</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Experience the future of productivity with our advanced AI assistant. 
                  It learns from your workflow patterns and provides intelligent suggestions 
                  to help you work smarter, not harder.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Task Optimization</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  From automated task prioritization to smart scheduling recommendations, 
                  our AI assistant adapts to your unique working style and helps you 
                  focus on what matters most.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Instant Insights</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Get instant answers to your questions, automated report generation, 
                  and intelligent insights that help you make better decisions faster. 
                  The AI assistant is always learning and improving.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Seamless Integration</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Seamlessly integrate with your existing tools and workflows. 
                  Our AI assistant works behind the scenes to enhance your productivity 
                  without disrupting your established processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already transformed their workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;