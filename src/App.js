import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlashcardsPage from './pages/FlashCardsPage';
import ContactPage from './pages/ContactPage';
import AppLogin from './pages/LoginPage';
import NavigationHeader from './components/Navigation';
import FaqSection from './components/FaqSection';

const App = () => (
  <Router>
    <div className="app-outer">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq-section" element={<FaqSection />} />
        <Route path="/login" element={<AppLogin />} />
      </Routes>
    </div>
  </Router>
);

export default App;
