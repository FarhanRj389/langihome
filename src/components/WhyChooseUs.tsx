import React from 'react';
import { CheckCircle, Award, Clock, DollarSign, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Licensed Building Practitioner (LBP Certified)',
      description: 'Fully licensed and certified for your peace of mind',
    },
    {
      icon: Clock,
      title: 'On-time Project Delivery',
      description: 'We stick to our schedules and deliver when promised',
    },
    {
      icon: DollarSign,
      title: 'Transparent & Competitive Pricing',
      description: 'Fair pricing with no hidden costs or surprises',
    },
    {
      icon: Users,
      title: 'Local Experts You Can Trust',
      description: 'Community-focused professionals with proven track record',
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with certified professionals who care about your project as much as you do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;