import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, Menu, X, Headphones } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsTimeout, setProductsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductsMouseEnter = () => {
    if (productsTimeout) {
      clearTimeout(productsTimeout);
      setProductsTimeout(null);
    }
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
    setProductsTimeout(timeout);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeout) {
      clearTimeout(resourcesTimeout);
      setResourcesTimeout(null);
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 200);
    setResourcesTimeout(timeout);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 pt-2 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-2xl' 
        : 'bg-white/10 backdrop-blur-md'
    }`}>
      {/* Becrux Background Image - Left Side Corner */}
      <div className="absolute left-0 top-0 w-32 h-32 opacity-20 pointer-events-none">
        <img 
          src="/assets/images/Becrux.png" 
          alt="Becrux Background" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/images/Coastal_Seven_Consulting_color 1.png"
              alt="Coastal Seven Consulting" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors font-semibold text-base relative group ${
              location.pathname === '/' 
                ? 'text-coastal-teal' 
                : 'text-coastal-dark hover:text-coastal-teal'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-coastal-dark hover:text-coastal-teal transition-colors font-semibold text-base"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                Products
                <ChevronDown className="ml-1.5 w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 py-2"
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                >
                  <Link to="/products/b2b-solutions" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">B2B Solutions</Link>
                  <Link to="/products/b2c-solutions" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">B2C Solutions</Link>
                </div>
              )}
            </div>

            <Link to="/services" className={`transition-colors font-semibold text-base relative group ${
              location.pathname === '/services' 
                ? 'text-coastal-teal' 
                : 'text-coastal-dark hover:text-coastal-teal'
            }`}>
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                location.pathname === '/services' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link to="/staffing" className={`transition-colors font-semibold text-base relative group ${
              location.pathname === '/staffing' 
                ? 'text-coastal-teal' 
                : 'text-coastal-dark hover:text-coastal-teal'
            }`}>
              Staffing
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                location.pathname === '/staffing' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>

            <div className="relative group">
              <button 
                className="flex items-center text-coastal-dark hover:text-coastal-teal transition-colors font-semibold text-base"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                Resources
                <ChevronDown className="ml-1.5 w-4 h-4" />
              </button>
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 py-2"
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                >
                  <Link to="/resources/blog" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">Blog</Link>
                  <Link to="/resources/case-study" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">Case Studies</Link>
                </div>
              )}
            </div>

            <Link to="/careers" className={`transition-colors font-semibold text-base relative group ${
              location.pathname === '/careers' 
                ? 'text-coastal-teal' 
                : 'text-coastal-dark hover:text-coastal-teal'
            }`}>
              Careers
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                location.pathname === '/careers' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link to="/about" className={`transition-colors font-semibold text-base relative group ${
              location.pathname === '/about' 
                ? 'text-coastal-teal' 
                : 'text-coastal-dark hover:text-coastal-teal'
            }`}>
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="w-10 h-10 bg-gradient-to-r from-[#063342] to-[#16BAAD] rounded-full flex items-center justify-center hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              <img src="/assets/images/support_agent_24dp_5F6368 1.png" alt="Contact Us" className="w-5 h-5" />
            </Link>
                          <a href="mailto:consulting@coastalseven.com?subject=Schedule a Demo - Coastal Seven Consulting&body=Hello,%0D%0A%0D%0AI would like to schedule a demo for your AI consulting services.%0D%0A%0D%0APlease let me know your available time slots.%0D%0A%0D%0AThank you!" className="bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block">
                Schedule a Demo
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 bg-white/20 backdrop-blur-xl rounded-b-xl">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className={`transition-colors text-base font-semibold ${
                location.pathname === '/' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Home</Link>
              <Link to="/products" className={`transition-colors text-base font-semibold ${
                location.pathname.startsWith('/products') 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Products</Link>
              <Link to="/services" className={`transition-colors text-base font-semibold ${
                location.pathname === '/services' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Services</Link>
              <Link to="/staffing" className={`transition-colors text-base font-semibold ${
                location.pathname === '/staffing' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Staffing</Link>
              <Link to="/resources" className={`transition-colors text-base font-semibold ${
                location.pathname.startsWith('/resources') 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Resources</Link>
              <Link to="/careers" className={`transition-colors text-base font-semibold ${
                location.pathname === '/careers' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Careers</Link>
              <Link to="/about" className={`transition-colors text-base font-semibold ${
                location.pathname === '/about' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>About Us</Link>
              <Link to="/contact" className={`transition-colors text-base font-semibold ${
                location.pathname === '/contact' 
                  ? 'text-coastal-teal' 
                  : 'text-coastal-dark hover:text-coastal-teal'
              }`}>Contact Us</Link>
              
              <div className="pt-4 border-t border-white/20">
                <a href="mailto:consulting@coastalseven.com?subject=Schedule a Demo - Coastal Seven Consulting&body=Hello,%0D%0A%0D%0AI would like to schedule a demo for your AI consulting services.%0D%0A%0D%0APlease let me know your available time slots.%0D%0A%0D%0AThank you!" className="w-full bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white px-6 py-3 rounded-lg font-semibold text-sm mb-3 hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 inline-block text-center">
                  Schedule a Demo
                </a>
                <Link to="/contact" className="w-full w-10 h-10 bg-gradient-to-r from-[#063342] to-[#16BAAD] rounded-full flex items-center justify-center mx-auto hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300">
                  <img src="/assets/images/support_agent_24dp_5F6368 1.png" alt="Contact Us" className="w-5 h-5" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
