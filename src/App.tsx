import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import B2BSolutionsPage from './pages/B2BSolutionsPage';
import B2CSolutionsPage from './pages/B2CSolutionsPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

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
          <Route path="/products/b2b-solutions" element={<B2BSolutionsPage />} />
          <Route path="/products/b2c-solutions" element={<B2CSolutionsPage />} />
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
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/blog/:id" element={<BlogDetailPage />} />
          <Route path="/resources/case-study" element={<CaseStudyPage />} />
          <Route path="/resources/case-study/:id" element={<CaseStudyDetailPage />} />
          <Route path="/resources" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Resources Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/resources/whitepapers" element={
            <>
              <Header />
              <main>
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-coastal-dark">Whitepapers Page - Coming Soon</div>
              </main>
            </>
          } />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
