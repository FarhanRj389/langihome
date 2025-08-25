import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../utils/emailService';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's talk about your next project! Get in touch for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-100 p-4 rounded-xl mr-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Phone</p>
                  <a 
                    href="tel:02102254672" 
                    className="text-blue-600 hover:text-blue-700 transition-colors text-xl"
                  >
                    02102254672
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-4 rounded-xl mr-6">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email</p>
                  <a 
                    href="mailto:info@langihomes.co.nz" 
                    className="text-green-600 hover:text-green-700 transition-colors text-xl"
                  >
                    info@langihomes.co.nz
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-4 rounded-xl mr-6">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Location</p>
                  <p className="text-gray-600 text-xl">Auckland / Service Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get a Free Consultation
                </button>
                
                <a
                  href="https://wa.me/642102254672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <strong>Success!</strong> Your message has been sent. We'll get back to you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <strong>Error!</strong> There was a problem sending your message. Please try again or call us directly.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Let's talk about your next project!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're here to help bring your vision to life with expert craftsmanship and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02102254672"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="mailto:langihomes@gmail.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;