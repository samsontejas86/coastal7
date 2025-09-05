import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <HomePage />
              </main>
            </>
          } />
          <Route path="/products" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Products Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/staffing" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Staffing Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/resources" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Resources Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/careers" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Careers Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">About Us Page - Coming Soon</div>
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
