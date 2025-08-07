import React from 'react';
import { Award, Clock, DollarSign, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              LANGI HOMES LTD is your trusted partner for expert renovation and maintenance services. 
              From minor home repairs to full-scale transformations, we bring your vision to life with 
              quality craftsmanship, licensed expertise (LBP Certified), and a passion for perfection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">LBP Certified</h3>
            <p className="text-gray-600">Licensed Building Practitioner with verified credentials</p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600">We respect your time and deliver projects when promised</p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">Competitive rates with no hidden costs or surprises</p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Local Experts</h3>
            <p className="text-gray-600">Trusted professionals you can rely on in your community</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;