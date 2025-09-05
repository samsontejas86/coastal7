import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, ChevronLeft, ChevronRight } from 'lucide-react';

const B2CSolutionsPage = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsTimeout, setProductsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeTab, setActiveTab] = useState('SnapPod');
  
  const useCasesRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: 'left' | 'right') => {
    if (useCasesRef.current) {
      const scrollAmount = 320; // Card width + gap
      useCasesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
    <div className="relative">
      {/* Full Page Background Image - Starting from absolute top */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/Products bg.png" 
          alt="B2C Solutions Background" 
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Transparent Navbar - Overlays the background image */}
      <header className={`fixed top-0 left-0 right-0 z-50 pt-2 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-2xl' 
          : 'bg-transparent'
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
              <Link to="/" className="text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div className="relative group">
                <button 
                  className="flex items-center text-coastal-dark hover:text-coastal-teal transition-colors font-bold text-base"
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

              <Link to="/services" className="text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link to="/staffing" className="text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base relative group">
                Staffing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="relative group">
                <button 
                  className="flex items-center text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base"
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
                    <Link to="/resources/whitepapers" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">Whitepapers</Link>
                    <Link to="/resources/case-studies" className="block px-4 py-2.5 text-gray-700 hover:bg-coastal-light-blue/50 hover:text-coastal-dark transition-colors rounded-lg mx-2 text-sm">Case Studies</Link>
                  </div>
                )}
              </div>

              <Link to="/careers" className="text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link to="/about" className="text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coastal-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-5">
              <button className="w-10 h-10 bg-coastal-teal rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                <User className="w-5 h-5 text-white" />
              </button>
              <button className="bg-gradient-to-r from-coastal-teal to-teal-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Products Navigation and Selection */}
      <div className="relative z-40 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb Navigation - Centered */}
          <div className="mb-8 text-center">
            <nav className="flex items-center justify-center space-x-2 text-4xl font-bold">
              <Link to="/products" className="text-gray-800 hover:text-coastal-teal transition-colors">
                Products
              </Link>
              <span className="text-gray-800">&gt;</span>
              <span className="text-coastal-teal">
                B2C Solutions
              </span>
            </nav>
          </div>

          {/* Tab Switcher Component */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#f5f7ff] rounded-xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab('SnapPod')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'SnapPod'
                    ? 'bg-white text-teal-500 shadow-md'
                    : 'text-black hover:text-gray-600'
                }`}
              >
                1. SnapPod
              </button>
              <button
                onClick={() => setActiveTab('Blenda')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'Blenda'
                    ? 'bg-white text-teal-500 shadow-md'
                    : 'text-black hover:text-gray-600'
                }`}
              >
                2. Blenda
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === 'SnapPod' ? (
              <div>
                {/* SnapPod Image Section */}
                <div className="mb-12 -mx-6 lg:-mx-8">
                  {/* SnapPod Image - Full Width, No Gaps */}
                  <img 
                    src="/assets/images/snappod.png" 
                    alt="SnapPod - AI Platform" 
                    className="w-full h-auto"
                  />
                </div>

                {/* Use Cases Section */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold">
                      <span className="text-black">Use</span> <span className="text-teal-500">Cases</span>
                    </h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => scrollCards('left')}
                        className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => scrollCards('right')}
                        className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div 
                    ref={useCasesRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {/* Content Creators, Influencers & Podcasters */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-1.png" 
                          alt="Content Creators, Influencers & Podcasters" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Content Creators, Influencers & Podcasters</h4>
                      <p className="text-gray-600 text-sm">
                        Rapid episode creation, repurposing existing content, multi-language reach.
                      </p>
                    </div>

                    {/* Solopreneurs & Start-up Founders */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-2.png" 
                          alt="Solopreneurs & Start-up Founders" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Solopreneurs & Start-up Founders</h4>
                      <p className="text-gray-600 text-sm">
                        They can market/ sell their services or products.
                      </p>
                    </div>

                    {/* Healthcare Professionals & Experts */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-3.png" 
                          alt="Healthcare Professionals & Experts" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Healthcare Professionals & Experts</h4>
                      <p className="text-gray-600 text-sm">
                        They can increase patient confidence and awareness on health & wellness.
                      </p>
                    </div>

                    {/* Motivational Speaker, Life Coaches & Educators */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-4.png" 
                          alt="Motivational Speaker, Life Coaches & Educators" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Motivational Speaker, Life Coaches & Educators</h4>
                      <p className="text-gray-600 text-sm">
                        Course supplements or podcast-style lessons, tips for audience, voice personalization.
                      </p>
                    </div>

                    {/* CEOs & Business Leaders */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-5.png" 
                          alt="CEOs & Business Leaders" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">CEOs & Business Leaders</h4>
                      <p className="text-gray-600 text-sm">
                        Drive thought leadership, customer education in an engaging format.
                      </p>
                    </div>

                    {/* PR & Marketing Teams */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-6.png" 
                          alt="PR & Marketing Teams" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">PR & Marketing Teams</h4>
                      <p className="text-gray-600 text-sm">
                        Strengthen brand visibility & expand brand reach.
                      </p>
                    </div>

                    {/* Enterprises */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/snappod-icon-7.png" 
                          alt="Enterprises" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Enterprises</h4>
                      <p className="text-gray-600 text-sm">
                        For internal communication, employee training & skilling activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Blenda Image Section */}
                <div className="mb-12 -mx-6 lg:-mx-8">
                  {/* Blenda Image - Full Width, No Gaps */}
                  <img 
                    src="/assets/images/blenda.png" 
                    alt="Blenda - AI Beauty Platform" 
                    className="w-full h-auto"
                  />
                </div>

                {/* Use Cases Section */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold">
                      <span className="text-black">Use</span> <span className="text-teal-500">Cases</span>
                    </h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => scrollCards('left')}
                        className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => scrollCards('right')}
                        className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div 
                    ref={useCasesRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {/* Smart Skincare Recommendations */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/skincare-reco.png" 
                          alt="Smart Skincare Recommendations" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Smart Skincare Recommendations</h4>
                      <p className="text-gray-600 text-sm">
                        Personalised skin tone & age-appropriate product recommendations.
                      </p>
                    </div>

                    {/* Occasion-Ready Style Guides */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/occation.png" 
                          alt="Occasion-Ready Style Guides" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Occasion-Ready Style Guides</h4>
                      <p className="text-gray-600 text-sm">
                        Search occasion-specific tutorials & culturally-relevant looks.
                      </p>
                    </div>

                    {/* Personal Skin Insights */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/personalskin.png" 
                          alt="Personal Skin Insights" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Personal Skin Insights</h4>
                      <p className="text-gray-600 text-sm">
                        Skin analysis and tracking your progress.
                      </p>
                    </div>

                    {/* Connect & Share Everywhere */}
                    <div className="flex-shrink-0 w-72 bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/assets/images/share.png" 
                          alt="Connect & Share Everywhere" 
                          className="w-10 h-10"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Connect & Share Everywhere</h4>
                      <p className="text-gray-600 text-sm">
                        Cross-platform social sharing & community connect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to ensure footer appears after background image */}
      <div style={{ height: '50vh' }}></div>

      {/* Footer Section - After Background Image */}
      <footer className="relative z-10 text-white w-full mt-0">
        {/* Main Footer Content with Solid Background Color */}
        <div className="w-full bg-[#063342]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column - Company Information */}
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center">
                  <img 
                    src="/assets/images/footer logo.png" 
                    alt="Coastal Seven Consulting" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* Mission Statement */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  Pioneering the future of autonomous intelligence. Building AI that enhances human potential and drives meaningful progress across industries.
                </p>
              </div>
              
              {/* Middle Column - Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="/" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Home</a>
                    <a href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">About Us</a>
                    <a href="/products" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Products</a>
                  </div>
                  <div className="space-y-3">
                    <a href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Blog</a>
                    <a href="/careers" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</a>
                    <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact Us</a>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Social Platforms */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white">Join us on Social Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {/* Instagram */}
                  <a href="https://instagram.com" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  </a>
                  
                  {/* Facebook */}
                  <a href="https://facebook.com" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* X (Twitter) */}
                  <a href="https://twitter.com" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a href="https://youtube.com" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30 flex-shrink-0">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-white text-sm">
              © 2025 Coastal Seven. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default B2CSolutionsPage;
