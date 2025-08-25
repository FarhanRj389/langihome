import React from 'react';
import {  Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full mr-3 bg-gray-700 flex items-center justify-center">
                {/* <span className="text-white font-bold text-sm">LH</span> */}
                 <img src="/logo.jpeg" alt="Langi Home"  className='rounded-full'/>
              </div>
              <div>
                <h3 className="text-xl font-bold">LANGI HOMES LTD</h3>
                <p className="text-sm text-gray-400">LBP Licensed</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Expert renovation and maintenance solutions across New Zealand. 
              Turning houses into homes with quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  🏠 Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  🛠 Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  📞 Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <a href="tel:02102254672" className="text-gray-300 hover:text-white transition-colors">
                  02102254672
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <a href="mailto:info@langihomes.co.nz" className="text-gray-300 hover:text-white transition-colors">
                  info@langihomes.co.nz
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-gray-300">Auckland, New Zealand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LANGI HOMES LTD. All rights reserved. Powered by <span className='text-blue-300'><a href="https://www.digitroncx.com/" target='_blank'>DigitronCX</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;