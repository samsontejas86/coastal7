import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const CaseStudyDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleBackClick = () => {
    navigate('/resources/case-study');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Scrollable */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/assets/images/casestudybg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      />

      {/* Navbar */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        
        {/* Back Button */}
        <div className="container mx-auto px-6 lg:px-8 mb-8">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-coastal-teal hover:text-teal-600 transition-colors duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </button>
        </div>

        {/* Case Study Title */}
        <div className="container mx-auto px-6 lg:px-8 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              How{' '}
              <span className="text-coastal-teal">AI-Powered Analytics</span>
              {' '}Transformed Retail Data into Customer Engagement and Operational Efficiency
            </h1>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="container mx-auto px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Background Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-coastal-teal mb-4">Background</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  In today's competitive retail landscape, customer experience and operational agility are key drivers of growth. A mid-sized retail company with over 150 stores across three regions faced growing challenges in understanding customer behavior, predicting demand, and managing inventory.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Traditional analytics tools provided fragmented insights, leaving leadership teams to rely on guesswork rather than data-driven strategies.
                </p>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-coastal-teal mb-4">Problem</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  The company faced several critical challenges:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm">
                  <li>Fragmented data sources (POS, CRM, online platforms)</li>
                  <li>Poor demand forecasting (over-ordering, understocking)</li>
                  <li>Customer churn (lack of personalization)</li>
                  <li>Slow decision-making (days for manual reports)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-sm">
                  An AI-driven transformation was needed to consolidate data, generate predictive insights, and enable faster, more accurate decisions.
                </p>
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-coastal-teal mb-4">Solution</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  We deployed an AI-powered analytics platform designed specifically for retail operations:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 text-sm">
                  <li>
                    <strong>Predictive Demand Forecasting:</strong> Machine learning algorithms analyze past sales, seasonal trends, and external factors to optimize stock levels and reduce waste.
                  </li>
                  <li>
                    <strong>Personalized Customer Engagement:</strong> AI recommendation engine creates tailored offers and loyalty rewards based on individual customer behavior patterns.
                  </li>
                  <li>
                    <strong>Automated Reporting Dashboards:</strong> Real-time KPIs, sales trends, and predictive alerts provide leadership with instant insights for faster decision-making.
                  </li>
                  <li>
                    <strong>Anomaly Detection:</strong> Advanced algorithms flag unusual patterns like sudden sales drops or potential fraud, enabling proactive responses.
                  </li>
                </ul>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-coastal-teal mb-4">Results</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Within six months of implementation, the company achieved measurable improvements:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm">
                  <li>20% reduction in inventory costs through optimized stock management</li>
                  <li>35% boost in customer engagement via personalized experiences</li>
                  <li>Faster decision-making with real-time dashboards (reduced report turnaround from days to minutes)</li>
                  <li>Lower churn rate with increased repeat customers</li>
                </ul>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-coastal-teal mb-4">Conclusion</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm">
                  By implementing our AI-powered analytics platform, the retail company transformed fragmented data into actionable intelligence. The result was a more customer-centric, efficient, and agile organization ready to scale in a data-driven future.
                </p>
              </div>
            </section>
          </div>
        </div>
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
                  <img 
                    src="/assets/images/footer logo.png"
                    alt="Coastal Seven Consulting" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="space-y-1 text-white/90 text-base leading-relaxed">
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

export default CaseStudyDetailPage;
