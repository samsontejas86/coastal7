import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, User, ChevronDown, Headphones } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [productsTimeout, setProductsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleProductsMouseEnter = () => {
    if (productsTimeout) {
      clearTimeout(productsTimeout);
    }
    setShowProducts(true);
  };

  const handleProductsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowProducts(false);
    }, 200);
    setProductsTimeout(timeout);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeout) {
      clearTimeout(resourcesTimeout);
    }
    setShowResources(true);
  };

  const handleResourcesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowResources(false);
    }, 200);
    setResourcesTimeout(timeout);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Scrollable */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/assets/images/contactusbg.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '100vh'
        }}
      />

      {/* Navbar */}
      <div className="relative z-50">
        <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/assets/images/Coastal_Seven_Consulting_color 1.png"
                    alt="Coastal Seven Consulting" 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
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

                {/* Products Dropdown */}
                <div className="relative" onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
                  <button className={`flex items-center space-x-1 transition-colors font-semibold text-base relative group ${
                    location.pathname.startsWith('/products')
                      ? 'text-coastal-teal'
                      : 'text-coastal-dark hover:text-coastal-teal'
                  }`}>
                    <span>Products</span>
                    <ChevronDown className="w-4 h-4" />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                      location.pathname.startsWith('/products')
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                  
                  {showProducts && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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

                {/* Resources Dropdown */}
                <div className="relative" onMouseEnter={handleResourcesMouseEnter} onMouseLeave={handleResourcesMouseLeave}>
                  <button className={`flex items-center space-x-1 transition-colors font-semibold text-base relative group ${
                    location.pathname.startsWith('/resources')
                      ? 'text-coastal-teal'
                      : 'text-coastal-dark hover:text-coastal-teal'
                  }`}>
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4" />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-coastal-teal transition-all duration-300 ${
                      location.pathname.startsWith('/resources')
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                  
                  {showResources && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/contact" className="w-10 h-10 bg-gradient-to-r from-[#063342] to-[#16BAAD] rounded-full flex items-center justify-center hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  <img src="/assets/images/support_agent_24dp_5F6368 1.png" alt="Contact Us" className="w-5 h-5" />
                </Link>
                <a href="mailto:consulting@coastalseven.com?subject=Schedule a Demo - Coastal Seven Consulting&body=Hello,%0D%0A%0D%0AI would like to schedule a demo for your AI consulting services.%0D%0A%0D%0APlease let me know your available time slots.%0D%0A%0D%0AThank you!" className="bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block">
                  Schedule a Demo
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-coastal-dark hover:text-coastal-teal transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Home</Link>
                <Link to="/products/b2b-solutions" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">B2B Solutions</Link>
                <Link to="/products/b2c-solutions" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">B2C Solutions</Link>
                <Link to="/services" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Services</Link>
                <Link to="/staffing" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Staffing</Link>
                <Link to="/resources/blog" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Blog</Link>
                <Link to="/resources/case-study" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Case Studies</Link>
                <Link to="/careers" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Careers</Link>
                <Link to="/about" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">About Us</Link>
                <Link to="/contact" className="block px-3 py-2 text-coastal-dark hover:text-coastal-teal transition-colors">Contact Us</Link>
                <div className="flex items-center space-x-4 px-3 py-2">
                  <Link to="/contact" className="w-10 h-10 bg-gradient-to-r from-[#063342] to-[#16BAAD] rounded-full flex items-center justify-center hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    <img src="/assets/images/support_agent_24dp_5F6368 1.png" alt="Contact Us" className="w-5 h-5" />
                  </Link>
                  <a href="mailto:consulting@coastalseven.com?subject=Schedule a Demo - Coastal Seven Consulting&body=Hello,%0D%0A%0D%0AI would like to schedule a demo for your AI consulting services.%0D%0A%0D%0APlease let me know your available time slots.%0D%0A%0D%0AThank you!" className="bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block">
                    Schedule a Demo
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

             {/* Main Content */}
       <div className="relative z-10 pt-20">
         {/* Keep in Touch Section */}
         <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Section - Contact Information */}
              <div className="space-y-8">
                {/* Title */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    <span className="text-coastal-dark">Keep in</span>{' '}
                    <span className="text-coastal-teal">Touch</span>
                  </h1>
                  <p className="text-lg text-gray-600">
                    Get in touch with our team—we're here to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Headquarters */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Headquarters: United States</p>
                      <p className="text-gray-600">
                        1055 Westlakes Drive, 3rd Floor, Berwyn, Pennsylvania, 19312, United States of America.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">consulting@coastalseven.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">+1 469-733-0938</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="mt-8">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-coastal-teal/50 focus:border-coastal-teal transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-coastal-teal/50 focus:border-coastal-teal transition-all duration-300"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-coastal-teal/50 focus:border-coastal-teal transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white py-3 px-8 rounded-xl font-semibold hover:from-[#052a35] hover:to-[#14a89c] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* India Offices Section */}
        <div className="container mx-auto px-6 lg:px-8 py-16 mt-40">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-coastal-dark">India</span>{' '}
                <span className="text-coastal-teal">Offices</span>
              </h2>
            </div>

            {/* Offices Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Hyderabad Office */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-coastal-teal mb-6">HYDERABAD</h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Cabin A-11, 2nd Floor, iSprout, Purva Summit, HiTech City, Hyderabad, Telangana - 500084.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">consulting@coastalseven.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">+91 9989444029</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guntur Office */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-coastal-teal mb-6">GUNTUR</h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Plot No: 2-134, Mothadaka, Amaravati, Guntur, Andhra Pradesh - 522016.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">consulting@coastalseven.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-coastal-teal mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">+91 9989444029</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Spacer to ensure footer appears after background image */}
         <div className="min-h-screen"></div>
       </div>

       {/* Footer Section - After Background Image */}
       <footer className="relative z-10 text-white w-full mt-0">
        {/* Main Footer Content with Solid Background Color */}
        <div className="w-full bg-[#063342]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <a href="/" className="block">
                    <img 
                      src="/assets/images/footer logo.png"
                      alt="Coastal Seven Consulting" 
                      className="h-16 w-auto hover:opacity-80 transition-opacity duration-300"
                    />
                  </a>
                </div>
                <div className="space-y-1 text-white/90 text-sm leading-relaxed">
                  <p>Pioneering the future of autonomous intelligence.</p>
                  <p>Building AI that enhances human potential and drives</p>
                  <p>meaningful progress across industries.</p>
                </div>
              </div>
              
              {/* Middle Column - Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <a href="/" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Home</a>
                    <a href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">About Us</a>
                    <a href="/products" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Products</a>
                  </div>
                  <div className="space-y-2">
                    <a href="https://coastalsevenconsulting.medium.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Blog</a>
                    <a href="/careers" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</a>
                    <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact Us</a>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Social Platforms */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Join us on Social Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/coastal_seven_consulting/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  </a>
                  
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=61574214990654" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/coastal-seven-consulting" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a href="https://www.youtube.com/@CoastalSevenConsulting" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar with Solid Background Color */}
        <div className="w-full bg-[#063342] border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center text-white text-sm">
              © 2025 Coastal Seven. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
