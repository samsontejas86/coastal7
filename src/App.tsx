import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Full Page Background Image - Extended to Cover Full Scroll Area */}
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
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Products Page - Coming Soon</div>} />
              <Route path="/services" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Services Page - Coming Soon</div>} />
              <Route path="/staffing" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Staffing Page - Coming Soon</div>} />
              <Route path="/resources" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Resources Page - Coming Soon</div>} />
              <Route path="/careers" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Careers Page - Coming Soon</div>} />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">About Us Page - Coming Soon</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
