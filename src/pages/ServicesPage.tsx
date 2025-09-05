import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';

const ServicesPage = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState('automation');
  const [productsTimeout, setProductsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<NodeJS.Timeout | null>(null);

  const services = [
    { id: 'automation', name: 'Automation' },
    { id: 'agentic-ai', name: 'Agentic AI' },
    { id: 'quantum-computing', name: 'Quantum Computing' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'digital-transformation', name: 'Digital Transformation' }
  ];

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
          src="./assets/images/Services bg.png" 
          alt="Services Background" 
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'top left'
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
                  className="flex items-center text-coastal-dark hover:text-coastal-teal transition-colors font-medium text-base"
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

              <Link to="/services" className="text-coastal-dark hover:text-coastal-teal transition-colors font-bold text-base relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-coastal-teal"></span>
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

      {/* Service Menu Buttons - Over Background Image */}
      <div className="relative z-40 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center space-x-12 py-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`relative px-6 py-3 text-base font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? 'text-coastal-dark font-bold'
                    : 'text-gray-500 hover:text-coastal-teal'
                }`}
              >
                {/* Teal line indicator - full width, thicker, light for non-selected, dark for selected */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-coastal-teal'
                    : 'bg-teal-200'
                }`}></div>
                
                {/* Service name */}
                <span className="relative z-10">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Section with AI Robot Image */}
      {activeService === 'automation' && (
        <div className="relative z-40 py-8">
          <div className="relative w-full">
            <img 
              src="/assets/images/ai robot.png" 
              alt="AI Robot - Automation" 
              className="w-full h-auto object-cover"
            />
            
            {/* Text Overlay on Left Side with Gradient Background */}
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center pl-8 lg:pl-16">
              {/* Gradient Background */}
              <div className="absolute inset-0 w-96 lg:w-[500px]">
                <img 
                  src="/assets/images/Rectangle 60.png" 
                  alt="Gradient Background" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 max-w-md">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  1. Automation
                </h2>
                <p className="text-sm lg:text-base text-white leading-relaxed drop-shadow-md">
                  Intelligent process automation that transforms AI workflows and drives operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Agentic AI Section */}
      {activeService === 'agentic-ai' && (
        <div className="relative z-40 py-8">
          <div className="relative w-full">
            <img 
              src="/assets/images/agentic ai background.png" 
              alt="Agentic AI Background" 
              className="w-full h-auto object-cover"
            />
            
            {/* Text Overlay on Left Side with Gradient Background */}
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center pl-8 lg:pl-16">
              {/* Gradient Background */}
              <div className="absolute inset-0 w-96 lg:w-[500px]">
                <img 
                  src="/assets/images/Rectangle 60.png" 
                  alt="Gradient Background" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 max-w-md">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  2. Agentic AI
                </h2>
                <p className="text-sm lg:text-base text-white leading-relaxed drop-shadow-md">
                  Advanced autonomous AI agents that can reason, plan, and execute complex tasks independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Features Section - Automation */}
      {activeService === 'automation' && (
        <div className="relative z-40 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="text-black">Key</span> <span className="text-coastal-teal">Features</span>
            </h2>
            
            {/* Glassmorphism Card with Features */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* Feature 1: Robotic Process Automation */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/robotic-process.png" 
                      alt="Robotic Process Automation" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Robotic Process Automation (RPA)
                  </h3>
                </div>

                {/* Feature 2: Intelligent Document Processing */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/intelligent documet.png" 
                      alt="Intelligent Document Processing" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Intelligent Document Processing
                  </h3>
                </div>

                {/* Feature 3: Workflow Optimization */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/workflow.png" 
                      alt="Workflow Optimization" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Workflow Optimization
                  </h3>
                </div>

                {/* Feature 4: Process Mining and Analysis */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/process-mining.png" 
                      alt="Process Mining and Analysis" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Process Mining and Analysis
                  </h3>
                </div>

                {/* Feature 5: Integration with Existing Systems */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/integration.png" 
                      alt="Integration with Existing Systems" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Integration with Existing Systems
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Features Section - Agentic AI */}
      {activeService === 'agentic-ai' && (
        <div className="relative z-40 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="text-black">Key</span> <span className="text-coastal-teal">Features</span>
            </h2>
            
            {/* Glassmorphism Card with Features */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* Feature 1: Multi-agent system design */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/multiagent.png" 
                      alt="Multi-agent system design" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Multi-agent system design
                  </h3>
                </div>

                {/* Feature 2: Goal-oriented task execution */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/goalori.png" 
                      alt="Goal-oriented task execution" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Goal-oriented task execution
                  </h3>
                </div>

                {/* Feature 3: Dynamic decision making */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/dynamicdy.png" 
                      alt="Dynamic decision making" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Dynamic decision making
                  </h3>
                </div>

                {/* Feature 4: Self-learning capabilities */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/selflearning.png" 
                      alt="Self-learning capabilities" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Self-learning capabilities
                  </h3>
                </div>

                {/* Feature 5: Human-AI collaboration frameworks */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src="/assets/images/human-ai.png" 
                      alt="Human-AI collaboration frameworks" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                    Human-AI collaboration frameworks
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Impact Section - Automation */}
      {activeService === 'automation' && (
        <div className="relative z-40 py-16">
          <div className="w-full">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="text-black">Business</span> <span className="text-coastal-teal">Impact</span>
            </h2>
            
            {/* Glassmorphism Card with Business Impact Content */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Side - Business Impact Image (Reduced Size) */}
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-80 h-auto">
                  <img 
                    src="/assets/images/bussiness impact1.png" 
                    alt="Business Impact" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Right Side - Impact Points with Connecting Lines */}
              <div className="order-1 lg:order-2 relative">
                
                {/* Connecting Line */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-coastal-teal to-teal-400"></div>
                
                {/* Impact Point 1 */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/60per.png" 
                        alt="60% reduction" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      60% reduction in manual processes
                    </p>
                  </div>
                </div>

                {/* Impact Point 2 */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/40per.png" 
                        alt="40% improvement" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      40% improvement in operational efficiency
                    </p>
                  </div>
                </div>

                {/* Impact Point 3 */}
                <div className="relative flex items-center space-x-4">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/24-7.png" 
                        alt="24/7 operations" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      24/7 automated operations capability
                    </p>
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Impact Section - Agentic AI */}
      {activeService === 'agentic-ai' && (
        <div className="relative z-40 py-16">
          <div className="w-full">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="text-black">Business</span> <span className="text-coastal-teal">Impact</span>
            </h2>
            
            {/* Glassmorphism Card with Business Impact Content */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Side - Business Impact Image (Reduced Size) */}
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-80 h-auto">
                  <img 
                    src="/assets/images/bussiness impact2.png" 
                    alt="Agentic AI Business Impact" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Right Side - Impact Points with Connecting Lines */}
              <div className="order-1 lg:order-2 relative">
                
                {/* Connecting Line */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-coastal-teal to-teal-400"></div>
                
                {/* Impact Point 1 */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/autonomus.png" 
                        alt="Autonomous problem-solving" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Autonomous problem-solving
                    </p>
                  </div>
                </div>

                {/* Impact Point 2 */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/continuous.png" 
                        alt="Continuous process improvement" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Continuous process improvement
                    </p>
                  </div>
                </div>

                {/* Impact Point 3 */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/scalable.png" 
                        alt="Scalable intelligent operations" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Scalable intelligent operations
                    </p>
                  </div>
                </div>

                {/* Impact Point 4 */}
                <div className="relative flex items-center space-x-4">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <img 
                        src="/assets/images/reduced.png" 
                        alt="Reduced need for human intervention" 
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Reduced need for human intervention
                    </p>
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistical Image Section - Automation */}
      {activeService === 'automation' && (
        <div className="relative z-40 pb-4">
          <div className="w-full">
            <div className="flex justify-end pr-0">
              <div className="w-60 h-auto">
                <img 
                  src="/assets/images/statistical image.png" 
                  alt="Statistical Analysis" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistical Image Section - Agentic AI */}
      {activeService === 'agentic-ai' && (
        <div className="relative z-40 pb-4">
          <div className="w-full">
            <div className="flex justify-end pr-0">
              <div className="w-60 h-auto">
                <img 
                  src="/assets/images/statistical image.png" 
                  alt="Agentic AI Statistics" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quantum Computing Section */}
      {activeService === 'quantum-computing' && (
        <>
          <div className="relative z-40 py-8">
            <div className="relative w-full">
              <img 
                src="/assets/images/quantum-computing-bg.png" 
                alt="Quantum Computing Background" 
                className="w-full h-auto object-cover"
              />
              
              {/* Text Overlay on Left Side with Gradient Background */}
              <div className="absolute top-0 left-0 h-full flex flex-col justify-center pl-8 lg:pl-16">
                {/* Gradient Background */}
                <div className="absolute inset-0 w-96 lg:w-[500px]">
                  <img 
                    src="/assets/images/Rectangle 60.png" 
                    alt="Gradient Background" 
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 max-w-md">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    3. Quantum Computing
                  </h2>
                  <p className="text-sm lg:text-base text-white leading-relaxed drop-shadow-md">
                    Revolutionary quantum algorithms that solve complex problems exponentially faster than classical computers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section - Quantum Computing */}
          <div className="relative z-40 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Key</span> <span className="text-coastal-teal">Features</span>
              </h2>
              
              {/* Glassmorphism Card with Features */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  
                  {/* Feature 1: Quantum Algorithms */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/quantum-algorithms.png" 
                        alt="Quantum Algorithms" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Quantum Algorithms
                    </h3>
                  </div>

                  {/* Feature 2: Quantum Supremacy */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/quantum-supremacy.png" 
                        alt="Quantum Supremacy" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Quantum Supremacy
                    </h3>
                  </div>

                  {/* Feature 3: Error Correction */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/error-correction.png" 
                        alt="Error Correction" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Error Correction
                    </h3>
                  </div>

                  {/* Feature 4: Quantum Networking */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/quantum-networking.png" 
                        alt="Quantum Networking" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Quantum Networking
                    </h3>
                  </div>

                  {/* Feature 5: Optimization */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/quantum-optimization.png" 
                        alt="Quantum Optimization" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Quantum Optimization
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section - Quantum Computing */}
          <div className="relative z-40 py-16">
            <div className="w-full">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Business</span> <span className="text-coastal-teal">Impact</span>
              </h2>
              
              {/* Glassmorphism Card with Business Impact Content */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left Side - Business Impact Image (Reduced Size) */}
                <div className="order-2 lg:order-1 flex justify-center">
                  <div className="w-80 h-auto">
                    <img 
                      src="/assets/images/quantum-business-impact.png" 
                      alt="Quantum Computing Business Impact" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Right Side - Impact Points with Connecting Lines */}
                <div className="order-1 lg:order-2 relative">
                  
                  {/* Connecting Line */}
                  <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-coastal-teal to-teal-400"></div>
                  
                  {/* Impact Point 1 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/exponential-speed.png" 
                          alt="Exponential speed increase" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Exponential speed increase in complex calculations
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 2 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/breakthrough-solutions.png" 
                          alt="Breakthrough solutions" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Breakthrough solutions to previously unsolvable problems
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 3 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/competitive-advantage.png" 
                          alt="Competitive advantage" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Unprecedented competitive advantage in research
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 4 */}
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/future-ready.png" 
                          alt="Future-ready technology" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Future-ready technology infrastructure
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Statistical Image Section - Quantum Computing */}
          <div className="relative z-40 pb-4">
            <div className="w-full">
              <div className="flex justify-end pr-0">
                <div className="w-60 h-auto">
                  <img 
                    src="/assets/images/statistical image.png" 
                    alt="Quantum Computing Statistics" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Machine Learning Section */}
      {activeService === 'machine-learning' && (
        <>
          <div className="relative z-40 py-8">
            <div className="relative w-full">
              <img 
                src="/assets/images/machine-learning-bg.png" 
                alt="Machine Learning Background" 
                className="w-full h-auto object-cover"
              />
              
              {/* Text Overlay on Left Side with Gradient Background */}
              <div className="absolute top-0 left-0 h-full flex flex-col justify-center pl-8 lg:pl-16">
                {/* Gradient Background */}
                <div className="absolute inset-0 w-96 lg:w-[500px]">
                  <img 
                    src="/assets/images/Rectangle 60.png" 
                    alt="Gradient Background" 
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 max-w-md">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    4. Machine Learning
                  </h2>
                  <p className="text-sm lg:text-base text-white leading-relaxed drop-shadow-md">
                    Advanced ML models that learn from data to make intelligent predictions and automate decision-making processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section - Machine Learning */}
          <div className="relative z-40 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Key</span> <span className="text-coastal-teal">Features</span>
              </h2>
              
              {/* Glassmorphism Card with Features */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  
                  {/* Feature 1: Deep Learning */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/deep-learning.png" 
                        alt="Deep Learning" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Deep Learning
                    </h3>
                  </div>

                  {/* Feature 2: Predictive Analytics */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/predictive-analytics.png" 
                        alt="Predictive Analytics" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Predictive Analytics
                    </h3>
                  </div>

                  {/* Feature 3: Computer Vision */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/computer-vision.png" 
                        alt="Computer Vision" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Computer Vision
                    </h3>
                  </div>

                  {/* Feature 4: Natural Language Processing */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/nlp-ml.png" 
                        alt="Natural Language Processing" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Natural Language Processing
                    </h3>
                  </div>

                  {/* Feature 5: Model Training */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/model-training.png" 
                        alt="Model Training" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Model Training
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section - Machine Learning */}
          <div className="relative z-40 py-16">
            <div className="w-full">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Business</span> <span className="text-coastal-teal">Impact</span>
              </h2>
              
              {/* Glassmorphism Card with Business Impact Content */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left Side - Business Impact Image (Reduced Size) */}
                <div className="order-2 lg:order-1 flex justify-center">
                  <div className="w-80 h-auto">
                    <img 
                      src="/assets/images/ml-business-impact.png" 
                      alt="Machine Learning Business Impact" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Right Side - Impact Points with Connecting Lines */}
                <div className="order-1 lg:order-2 relative">
                  
                  {/* Connecting Line */}
                  <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-coastal-teal to-teal-400"></div>
                  
                  {/* Impact Point 1 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/accuracy-improvement.png" 
                          alt="Accuracy improvement" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        95% accuracy in predictive modeling
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 2 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/automated-insights.png" 
                          alt="Automated insights" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Automated insights from complex data patterns
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 3 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/real-time-decisions.png" 
                          alt="Real-time decisions" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Real-time decision making capabilities
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 4 */}
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/cost-reduction.png" 
                          alt="Cost reduction" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Significant cost reduction through automation
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Statistical Image Section - Machine Learning */}
          <div className="relative z-40 pb-4">
            <div className="w-full">
              <div className="flex justify-end pr-0">
                <div className="w-60 h-auto">
                  <img 
                    src="/assets/images/statistical image.png" 
                    alt="Machine Learning Statistics" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Digital Transformation Section */}
      {activeService === 'digital-transformation' && (
        <>
          <div className="relative z-40 py-8">
            <div className="relative w-full">
              <img 
                src="/assets/images/digital-transformation-bg.png" 
                alt="Digital Transformation Background" 
                className="w-full h-auto object-cover"
              />
              
              {/* Text Overlay on Left Side with Gradient Background */}
              <div className="absolute top-0 left-0 h-full flex flex-col justify-center pl-8 lg:pl-16">
                {/* Gradient Background */}
                <div className="absolute inset-0 w-96 lg:w-[500px]">
                  <img 
                    src="/assets/images/Rectangle 60.png" 
                    alt="Gradient Background" 
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 max-w-md">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    5. Digital Transformation
                  </h2>
                  <p className="text-sm lg:text-base text-white leading-relaxed drop-shadow-md">
                    Comprehensive digital strategies that modernize operations and drive innovation across your entire organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section - Digital Transformation */}
          <div className="relative z-40 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Key</span> <span className="text-coastal-teal">Features</span>
              </h2>
              
              {/* Glassmorphism Card with Features */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  
                  {/* Feature 1: Cloud Migration */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/cloud-migration.png" 
                        alt="Cloud Migration" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Cloud Migration
                    </h3>
                  </div>

                  {/* Feature 2: Process Optimization */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/process-optimization.png" 
                        alt="Process Optimization" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Process Optimization
                    </h3>
                  </div>

                  {/* Feature 3: Data Integration */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/data-integration.png" 
                        alt="Data Integration" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Data Integration
                    </h3>
                  </div>

                  {/* Feature 4: Change Management */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/change-management.png" 
                        alt="Change Management" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Change Management
                    </h3>
                  </div>

                  {/* Feature 5: Innovation Strategy */}
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img 
                        src="/assets/images/innovation-strategy.png" 
                        alt="Innovation Strategy" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-700 leading-tight">
                      Innovation Strategy
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section - Digital Transformation */}
          <div className="relative z-40 py-16">
            <div className="w-full">
              {/* Section Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                <span className="text-black">Business</span> <span className="text-coastal-teal">Impact</span>
              </h2>
              
              {/* Glassmorphism Card with Business Impact Content */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Left Side - Business Impact Image (Reduced Size) */}
                <div className="order-2 lg:order-1 flex justify-center">
                  <div className="w-80 h-auto">
                    <img 
                      src="/assets/images/dt-business-impact.png" 
                      alt="Digital Transformation Business Impact" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Right Side - Impact Points with Connecting Lines */}
                <div className="order-1 lg:order-2 relative">
                  
                  {/* Connecting Line */}
                  <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-coastal-teal to-teal-400"></div>
                  
                  {/* Impact Point 1 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/operational-efficiency.png" 
                          alt="Operational efficiency" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        80% improvement in operational efficiency
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 2 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/customer-experience.png" 
                          alt="Customer experience" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Enhanced customer experience and satisfaction
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 3 */}
                  <div className="relative flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/agility.png" 
                          alt="Business agility" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Increased business agility and responsiveness
                      </p>
                    </div>
                  </div>

                  {/* Impact Point 4 */}
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <img 
                          src="/assets/images/future-growth.png" 
                          alt="Future growth" 
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Future-ready infrastructure for sustainable growth
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Statistical Image Section - Digital Transformation */}
          <div className="relative z-40 pb-4">
            <div className="w-full">
              <div className="flex justify-end pr-0">
                <div className="w-60 h-auto">
                  <img 
                    src="/assets/images/statistical image.png" 
                    alt="Digital Transformation Statistics" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer Section - After Statistical Image */}
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

export default ServicesPage;