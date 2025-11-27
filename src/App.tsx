import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EnhancedHomePage from './pages/EnhancedHomePage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactFormPage from './pages/ContactFormPage'
import EnhancedContactFormPage from './pages/EnhancedContactFormPage'
import ProductsPage from './pages/ProductsPage'
import PricingPage from './pages/PricingPage'
import AnalysisPage from './pages/AnalysisPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import { useVisitorTracking } from './hooks/useVisitorTracking'
import './index.css'

function AppContent() {
  // Enable visitor tracking
  useVisitorTracking();

  return (
    <Routes>
      <Route path="/" element={<EnhancedHomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact-form" element={<EnhancedContactFormPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App