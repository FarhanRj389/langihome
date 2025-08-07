import React from 'react';
import { Building, FileCheck, Compass, Hammer, Award, Clock, DollarSign, Heart } from 'lucide-react';

interface BusinessDescriptionProps {
  setCurrentPage: (page: string) => void;
}

const BusinessDescription: React.FC<BusinessDescriptionProps> = ({ setCurrentPage }) => {
  const specialties = [
    {
      icon: Building,
      title: 'New Build Construction',
      description: 'Complete new home construction from ground up',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Compass,
      title: 'Foundation Specialists',
      description: 'Expert foundation work ensuring structural integrity',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Hammer,
      title: 'Design & Build',
      description: 'Comprehensive design and construction services',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: FileCheck,
      title: 'Sign Off & Records',
      description: 'Complete building work documentation and sign-off',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const commitments = [
    {
      icon: Award,
      title: 'Top-Tier Service',
      description: 'Highest quality workmanship with personal attention',
    },
    {
      icon: Clock,
      title: 'On-Time Completion',
      description: 'Projects delivered when promised, every time',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with no hidden costs',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'We care about your project as much as you do',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Transforming Houses Into 
            <span className="text-blue-600"> Dream Homes</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We are committed to transforming your house into the home of your dreams. Whether you need 
              minor maintenance or a complete renovation, we pride ourselves on delivering top-tier service 
              with a personal touch. We have the expertise to manage projects from start to finish, ensuring 
              the highest quality of work, on-time completion, and competitive pricing.
            </p>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Specialties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl ${specialty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {specialty.title}
                  </h4>
                  <p className="text-gray-600">
                    {specialty.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Commitment to Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {commitment.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {commitment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Dream Project?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              From concept to completion, we're here to make your vision a reality with expert craftsmanship and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Your Free Consultation
              </button>
              <a
                href="tel:02102254672"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Now: 02102254672
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDescription;