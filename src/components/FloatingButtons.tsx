import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* Call Button */}
      <a
        href="tel:02102254672"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="📞 02102254672"
      >
        <Phone className="h-6 w-6 group-hover:animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/642102254672"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="💬 WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingButtons;