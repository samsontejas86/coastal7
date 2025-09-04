import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-coastal-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-blue to-coastal-teal rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">COASTALSEVEN</span>
                <span className="text-sm text-gray-600 -mt-1 font-medium">Consulting</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
              Revolutionizing business through cutting-edge AI solutions. We deliver autonomous, 
              goal-directed artificial intelligence systems that transform how businesses operate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-coastal-blue rounded-full flex items-center justify-center hover:bg-coastal-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-coastal-blue rounded-full flex items-center justify-center hover:bg-coastal-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-coastal-blue rounded-full flex items-center justify-center hover:bg-coastal-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-coastal-teal">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-coastal-teal transition-colors text-lg">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-coastal-teal transition-colors text-lg">Products</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-coastal-teal transition-colors text-lg">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-coastal-teal transition-colors text-lg">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-coastal-teal transition-colors text-lg">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-coastal-teal">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-coastal-teal/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-coastal-teal" />
                </div>
                <span className="text-gray-600 text-lg">info@coastalseven.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-coastal-teal/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-coastal-teal" />
                </div>
                <span className="text-gray-600 text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-coastal-teal/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-coastal-teal" />
                </div>
                <span className="text-gray-600 text-lg">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-lg">
            © 2024 COASTALSEVEN Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
