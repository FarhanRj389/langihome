import React from 'react';
import { Bath, Home, ToyBrick as Brick, Palette, Book as Roof, Fence, Square, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesHighlightsProps {
  setCurrentPage: (page: string) => void;
}

const ServicesHighlights: React.FC<ServicesHighlightsProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: CheckCircle,
      title: 'Bathroom & Kitchen Renovations',
      id: 'bathroom-kitchen',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Home,
      title: 'Full House Renovations',
      id: 'full-house',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Brick,
      title: 'Recladding & Extensions',
      id: 'recladding-extensions',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Palette,
      title: 'Painting & Plastering',
      id: 'painting-plastering',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Roof,
      title: 'Roof Repairs & Maintenance',
      id: 'roof-repairs',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Fence,
      title: 'Timber Fencing & Retaining Walls',
      id: 'fencing-retaining',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Square,
      title: 'Decks, Balconies & Concrete Driveways',
      id: 'decks-driveways',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage('services');
    // Small delay to ensure page navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From minor repairs to complete transformations, we handle every aspect of your home improvement needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('services')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;