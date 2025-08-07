import React from 'react';
import { Bath, Home, Plus, ToyBrick as Brick, Book as Roof, Palette, Fence, Square, Settings, Radiation as Foundation, ArrowRight, CheckCircle, Wrench } from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const getServiceId = (title: string) => {
    const idMap: { [key: string]: string } = {
      'Bathroom & Kitchen Renovations': 'bathroom-kitchen',
      'Full House Renovations': 'full-house',
      'Home Extensions': 'recladding-extensions',
      'Recladding': 'recladding-extensions',
      'Roof Repairs & Maintenance': 'roof-repairs',
      'Painting & Plastering': 'painting-plastering',
      'Fencing & Retaining Walls': 'fencing-retaining',
      'Concrete Driveways': 'decks-driveways',
      'Decks & Balconies': 'decks-driveways',
      'Foundation Work': 'foundation-work',
      'General House Maintenance & Repairs': 'general-maintenance',
    };
    return idMap[title] || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const services = [
    {
      icon: Bath,
      title: 'Bathroom & Kitchen Renovations',
      description: 'Transform your most important spaces with functional, stylish designs that enhance your daily life.',
      detailedDescription: 'Our expert team specializes in complete bathroom and kitchen makeovers, from modern fixtures and cabinetry to plumbing and electrical work. We handle everything from design consultation to final installation, ensuring your space is both beautiful and functional.',
      features: ['Custom cabinetry design', 'Modern fixture installation', 'Plumbing & electrical work', 'Tile & flooring installation', 'Project management'],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Home,
      title: 'Full House Renovations',
      description: 'Complete remodeling from design to execution — tailored to your lifestyle and vision.',
      detailedDescription: 'Whether you\'re looking to modernize an older home or completely transform your living space, our full house renovation service covers every aspect of your project. From structural changes to finishing touches, we manage the entire process.',
      features: ['Architectural planning', 'Structural modifications', 'Interior design consultation', 'Complete project management', 'Quality assurance'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Plus,
      title: 'Home Extensions',
      description: 'Need more space? Let us extend your home seamlessly with professional craftsmanship.',
      detailedDescription: 'Expand your living space without the hassle of moving. Our home extension services include room additions, second story additions, and outdoor living spaces that blend seamlessly with your existing home.',
      features: ['Room additions', 'Second story extensions', 'Outdoor living spaces', 'Structural engineering', 'Council consent assistance'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Brick,
      title: 'Recladding',
      description: 'Protect and modernize your home with professional recladding solutions.',
      detailedDescription: 'Update your home\'s exterior with modern cladding materials that provide better insulation, weather protection, and curb appeal. We work with various materials including weatherboard, brick veneer, and modern composite materials.',
      features: ['Weather protection', 'Insulation improvement', 'Modern material options', 'Structural assessment', 'Weathertightness guarantee'],
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Roof,
      title: 'Roof Repairs & Maintenance',
      description: 'Leak repairs, re-roofing, and long-term roof solutions to protect your investment.',
      detailedDescription: 'From emergency leak repairs to complete roof replacements, our roofing specialists ensure your home stays dry and protected. We work with all roofing materials and provide comprehensive maintenance programs.',
      features: ['Emergency leak repairs', 'Complete roof replacement', 'Gutter installation & repair', 'Roof maintenance programs', 'Insurance claim assistance'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Palette,
      title: 'Painting & Plastering',
      description: 'A flawless finish inside and out with expert paint and plaster work.',
      detailedDescription: 'Professional painting and plastering services that transform your space. From preparation to final coat, we ensure a perfect finish that lasts. Interior and exterior painting, wallpaper removal, and decorative finishes available.',
      features: ['Interior & exterior painting', 'Surface preparation', 'Wallpaper removal', 'Decorative finishes', 'Color consultation'],
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Fence,
      title: 'Fencing & Retaining Walls',
      description: 'Add security and style to your home\'s exterior with timber and block solutions.',
      detailedDescription: 'Enhance your property\'s security and aesthetics with custom fencing and retaining wall solutions. We specialize in timber fencing, concrete block retaining walls, and decorative boundary solutions.',
      features: ['Timber fence installation', 'Concrete block retaining walls', 'Gate installation', 'Boundary surveys', 'Drainage solutions'],
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Square,
      title: 'Concrete Driveways',
      description: 'Durable, polished, and professionally laid driveways that enhance your property.',
      detailedDescription: 'Create a lasting first impression with professionally installed concrete driveways. We offer various finishes including exposed aggregate, stamped concrete, and polished surfaces that complement your home\'s style.',
      features: ['Exposed aggregate finish', 'Stamped concrete patterns', 'Polished concrete surfaces', 'Proper drainage design', 'Long-term durability'],
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: Foundation,
      title: 'Decks & Balconies',
      description: 'Enjoy the outdoors with custom-designed decks & balconies for entertaining and relaxation.',
      detailedDescription: 'Extend your living space outdoors with beautifully crafted decks and balconies. We use quality timber and modern materials to create spaces perfect for entertaining, relaxing, and enjoying New Zealand\'s beautiful climate.',
      features: ['Custom deck design', 'Quality timber construction', 'Balustrade installation', 'Outdoor lighting integration', 'Weather protection options'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Settings,
      title: 'Foundation Work',
      description: 'We ensure your home stands strong — from the ground up with expert foundation solutions.',
      detailedDescription: 'Solid foundations are crucial for any building project. Our foundation specialists handle everything from new concrete pads to foundation repairs and underpinning, ensuring your structure is built to last.',
      features: ['New foundation installation', 'Foundation repairs', 'Underpinning services', 'Drainage solutions', 'Structural assessments'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-gray-100 text-gray-600',
    },
    {
      icon: Wrench,
      title: 'General House Maintenance & Repairs',
      description: 'All the little (or big) things to keep your house in top shape year-round.',
      detailedDescription: 'Regular maintenance keeps your home in perfect condition and prevents costly repairs. Our comprehensive maintenance service covers everything from minor repairs to seasonal maintenance programs.',
      features: ['Regular maintenance programs', 'Emergency repairs', 'Seasonal inspections', 'Preventive maintenance', 'Handyman services'],
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'bg-cyan-100 text-cyan-600',
    },
  ];

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Renovation & Maintenance Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From complete home transformations to specialized repairs, we provide comprehensive 
            renovation and maintenance solutions tailored to your needs and budget.
          </p>
        </div>

        {/* Services with alternating layout */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                id={getServiceId(service.title)}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">What We Include:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Get Quote for This Service
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href="tel:02102254672"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Call for Consultation
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project is unique, and we're here to provide personalized solutions 
              that fit your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:02102254672"
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;