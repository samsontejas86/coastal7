import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Cpu, Package, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('b2b'); // Default to B2B Solutions

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-coastal-blue" />,
      title: "Agentic AI Expertise",
      description: "Comprehensive expertise across all AI domains."
    },
    {
      icon: <Cpu className="w-10 h-10 text-coastal-blue" />,
      title: "Cutting-edge Technology",
      description: "From quantum computing to advanced ML, we leverage tomorrow's technology to solve today's problems."
    },
    {
      icon: <Package className="w-10 h-10 text-coastal-blue" />,
      title: "Product Expertise",
      description: "From B2B to B2C products, our AI solutions deliver measurable impact."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-coastal-blue" />,
      title: "Proven Results",
      description: "95% client satisfaction rate with Fortune 500 companies"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/Home.png" 
          alt="Background" 
          className="w-full object-cover object-top"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100%'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-2 z-10">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-1 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coastal-dark leading-tight tracking-tight">
                Revolutionizing Business Through{' '}
                <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                  Agentic AI
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg font-medium">
                Transform your organization with cutting-edge AI solutions spanning Automation, 
                Agentic AI, Quantum Computing, Machine Learning, and Digital Transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-[#063342] to-[#16BAAD] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-[#052a35] hover:to-[#14a89a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your AI Journey
                </button>
                <button className="btn-secondary">
                  View Our Solutions
                </button>
              </div>
            </motion.div>

            {/* Right Side - YouTube Video Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* YouTube Video Container */}
                <div className="w-full h-96 relative">
                  {/* YouTube Video Embed */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Agentic AI Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Coastal Seven Section */}
      <section className="py-4 relative overflow-hidden">
        {/* Subtle Wavy Background Pattern */}
        <div className="absolute inset-0 wavy-pattern opacity-15"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-coastal-dark mb-4 tracking-tight">
              Why Coastal Seven Leads the{' '}
              <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-base text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium">
              Delivering autonomous, goal-directed artificial intelligence systems that transform how businesses operate.
            </p>
          </motion.div>

          {/* Feature Cards with Glass Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-transparent backdrop-blur-md border-2 border-coastal-teal/40 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-coastal-light-blue/30 rounded-xl flex items-center justify-center mx-auto group-hover:bg-coastal-blue/50 group-hover:text-white transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-coastal-dark">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-800 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Services Portfolio Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Header Section - No Background */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              <span className="text-coastal-dark">Our</span>{' '}
              <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                AI Services Portfolio
              </span>
            </h2>
            
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Comprehensive AI Solutions that transform every aspect of your business operations.
            </p>
          </div>
        </div>

        {/* Content Section with Transparent Glass Effect */}
        <div className="bg-transparent backdrop-blur-md border-2 border-coastal-teal/40 relative mx-4 sm:mx-6 lg:mx-8 rounded-3xl shadow-2xl">
          {/* Subtle Gradient Shapes in Corners */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-coastal-teal/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-full blur-xl"></div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 p-8 relative z-10">
            {/* Automation */}
            <div className="text-center px-2 py-8 border-r border-coastal-teal/20 last:border-r-0"> {/* Changed from p-4 to px-2 py-8 to reduce width */}
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-teal to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-6 h-6 text-white">
                  {/* Three gears icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-coastal-dark mb-3">
                Automation
              </h3>
              <a href="#" className="text-coastal-teal underline hover:text-teal-600 transition-colors text-xs font-medium">
                Learn More &gt;
              </a>
            </div>

            {/* Agentic AI */}
            <div className="text-center px-2 py-8 border-r border-coastal-teal/20 last:border-r-0"> {/* Changed from p-4 to px-2 py-8 to reduce width */}
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-teal to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-6 h-6 text-white">
                  {/* Brain icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 2C7.56 2 6 3.56 6 5.5S7.56 9 9.5 9S13 7.44 13 5.5S11.44 2 9.5 2M9.5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M2 15.5C2 13.56 3.56 12 5.5 12H9.5C11.44 12 13 13.56 13 15.5S11.44 19 9.5 19H5.5C3.56 19 2 17.44 2 15.5M5.5 13.5c-1.1 0-2 .9-2 2s.9 2 2 2H9.5c1.1 0 2-.9 2-2s-.9-2-2-2H5.5M14.5 2C16.44 2 18 3.56 18 5.5S16.44 9 14.5 9S11 7.44 11 5.5S12.56 2 14.5 2M14.5 3.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M18 15.5c0-1.94 1.56-3.5 3.5-3.5S25 13.56 25 15.5S23.44 19 21.5 19S18 17.44 18 15.5M21.5 13.5c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M9.5 22C7.56 22 6 20.44 6 18.5S7.56 15 9.5 15S13 16.56 13 18.5S11.44 22 9.5 22M9.5 20.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M14.5 22c-1.94 0-3.5-1.56-3.5-3.5S12.56 15 14.5 15S18 16.56 18 18.5S16.44 22 14.5 22M14.5 20.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-coastal-dark mb-3">
                Agentic AI
              </h3>
              <a href="#" className="text-coastal-teal underline hover:text-teal-600 transition-colors text-xs font-medium">
                Learn More &gt;
              </a>
            </div>

            {/* Quantum Computing */}
            <div className="text-center px-2 py-8 border-r border-coastal-teal/20 last:border-r-0"> {/* Changed from p-4 to px-2 py-8 to reduce width */}
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-teal to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-6 h-6 text-white">
                  {/* Microchip/processor icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12v2H6V2zm0 18h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6V6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-coastal-dark mb-3">
                Quantum Computing
              </h3>
              <a href="#" className="text-coastal-teal underline hover:text-teal-600 transition-colors text-xs font-medium">
                Learn More &gt;
              </a>
            </div>

            {/* Machine Learning */}
            <div className="text-center px-2 py-8 border-r border-coastal-teal/20 last:border-r-0"> {/* Changed from p-4 to px-2 py-8 to reduce width */}
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-teal to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-6 h-6 text-white">
                  {/* Neural network icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-coastal-dark mb-3">
                Machine Learning
              </h3>
              <a href="#" className="text-coastal-teal underline hover:text-teal-600 transition-colors text-xs font-medium">
                Learn More &gt;
              </a>
            </div>

            {/* Digital Transformation */}
            <div className="text-center px-2 py-8 border-r border-coastal-teal/20 last:border-r-0"> {/* Changed from p-4 to px-2 py-8 to reduce width */}
              <div className="w-12 h-12 bg-gradient-to-br from-coastal-teal to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-6 h-6 text-white">
                  {/* Globe with gear icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-coastal-dark mb-3">
                Digital Transformation
              </h3>
              <a href="#" className="text-coastal-teal underline hover:text-teal-600 transition-colors text-xs font-medium">
                Learn More &gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Domains We're Revolutionizing Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Header Section */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              <span className="text-coastal-dark">AI Domains</span>{' '}
              <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                We're Revolutionizing
              </span>
            </h2>
            
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive suite of AI solutions designed to transform businesses and enhance human experiences across multiple domains.
            </p>
          </div>
        </div>

        {/* AI Domains Grid - No Central Icon */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* AI Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Left Side - Names on Left, Icons on Right */}
            <div className="space-y-6">
              {/* Retail */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Retail</h3>
                    </div>
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Technology */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Technology</h3>
                    </div>
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16H3V4H21M21 2H3C1.89 2 1 2.89 1 4V16A2 2 0 0 0 3 18H10V20H8V22H16V20H14V18H21A2 2 0 0 0 23 16V4C23 2.89 22.1 2 21 2M12 8.5C10.62 8.5 9.5 9.62 9.5 11S10.62 13.5 12 13.5S14.5 12.38 14.5 11S13.38 8.5 12 8.5Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Media & Entertainment */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Media & Entertainment</h3>
                    </div>
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17M12 12L12 22"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Icons on Left, Names on Right */}
            <div className="space-y-6">
              {/* Healthcare */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-white">Healthcare</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finance */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-white">Finance</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="relative">
                <div className="bg-gradient-to-r from-coastal-teal to-teal-500 rounded-2xl p-6 shadow-lg border-2 border-white/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 2h12v2H6V2zm0 18h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6v-2zm0-2h12v2H6V6z"/>
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-white">Manufacturing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Portfolio Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Header Section */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="text-coastal-dark">AI Product</span>{' '}
              <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            
            {/* Interactive Category Buttons */}
            <div className="flex justify-center space-x-4 mb-2">
              <button 
                onClick={() => setActiveTab('b2b')}
                className={`px-6 py-2.5 rounded-2xl font-medium text-base transition-all duration-300 ${
                  activeTab === 'b2b' 
                    ? 'bg-coastal-teal/80 backdrop-blur-md text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-md text-coastal-teal border border-white/30 hover:bg-white/20 hover:border-white/50'
                }`}
              >
                B2B Solutions
              </button>
              <button 
                onClick={() => setActiveTab('b2c')}
                className={`px-6 py-2.5 rounded-2xl font-medium text-base transition-all duration-300 ${
                  activeTab === 'b2c' 
                    ? 'bg-purple-500/80 backdrop-blur-md text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-md text-purple-500 border border-white/30 hover:bg-white/20 hover:border-white/50'
                }`}
              >
                B2C Solutions
              </button>
            </div>
          </div>
        </div>

        {/* B2B Solutions Cards */}
        {activeTab === 'b2b' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Agentosaur Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Agentosaur Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <img 
                      src="/assets/images/agentesor.png" 
                      alt="Agentosaur" 
                      className="w-32 h-24 object-contain rounded-md"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Agentosaur</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  Enterprise QA Validation Platform that turns AI uncertainty into Business Confidence.
                </p>
                <div className="text-left">
                  <a href="https://example.com/agentosaur" className="inline-block bg-coastal-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Brandosaur Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Brandosaur Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <img 
                      src="/assets/images/brandasour.png" 
                      alt="Brandosaur" 
                      className="w-32 h-24 object-contain rounded-md"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Brandosaur</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  A centralized AI-driven Asset Management Tool that helps teams create brand assets effortlessly.
                </p>
                <div className="text-left">
                  <a href="https://example.com/brandosaur" className="inline-block bg-coastal-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Enterprise AI Agents Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Enterprise AI Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <img 
                      src="/assets/images/enterprise ai.png" 
                      alt="Enterprise AI Agents" 
                      className="w-32 h-24 object-contain rounded-md"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Enterprise AI Agents</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  Autonomous Agents that handle business workflows across departments.
                </p>
                <div className="text-left">
                  <a href="https://example.com/enterprise-ai" className="inline-block bg-coastal-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Digital Transformation Toolkit Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Digital Transform Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <img 
                      src="/assets/images/digital transform.png" 
                      alt="Digital Transformation Toolkit" 
                      className="w-32 h-24 object-contain rounded-md"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Digital Transformation Toolkit</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  Complete framework for organizational AI Integration.
                </p>
                <div className="text-left">
                  <a href="https://example.com/digital-toolkit" className="inline-block bg-coastal-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* B2C Solutions Cards */}
        {activeTab === 'b2c' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Consumer AI Assistant Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Consumer AI Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <div className="w-32 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Consumer AI</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Consumer AI Assistant</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  Personal AI companion for everyday tasks and smart home automation.
                </p>
                <div className="text-left">
                  <a href="https://example.com/consumer-ai" className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Smart Retail Platform Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Smart Retail Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <div className="w-32 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Smart Retail</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Smart Retail Platform</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  AI-powered shopping experience with personalized recommendations.
                </p>
                <div className="text-left">
                  <a href="https://example.com/smart-retail" className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Health & Wellness AI Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Health AI Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <div className="w-32 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Health AI</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2 text-left">Health & Wellness AI</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  Personal health monitoring and wellness recommendations powered by AI.
                </p>
                <div className="text-left">
                  <a href="https://example.com/health-ai" className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Entertainment AI Card */}
              <div className="bg-transparent backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Entertainment AI Image */}
                <div className="mb-4 flex justify-center">
                  <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
                    <div className="w-32 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Entertainment AI</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2 text-left">Entertainment AI</h3>
                <p className="text-black/80 text-left mb-4 leading-relaxed text-sm">
                  AI-driven content creation and personalized entertainment experiences.
                </p>
                <div className="text-left">
                  <a href="https://example.com/entertainment-ai" className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* Start Your AI Transformation Section */}
      <section className="pt-32 pb-12 relative z-10">
        {/* Content Overlay with Glassmorphism Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Glassmorphism Container */}
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                <span className="text-coastal-dark">Start Your</span>{' '}
                <span className="text-coastal-teal bg-gradient-to-r from-coastal-teal to-teal-500 bg-clip-text text-transparent">
                  AI Transformation
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-medium max-w-4xl mx-auto">
                Join the AI revolution with Coastal Seven Consulting. Transform your business with autonomous intelligence that works as hard as you do, thinks as fast as you need and scales as big as you dream.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-coastal-teal to-teal-500 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your AI Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-white relative z-10 mt-24">
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

export default HomePage;
