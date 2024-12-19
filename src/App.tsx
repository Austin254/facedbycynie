import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/admin/AdminPage';
import { AdminProvider } from './contexts/AdminContext';

export default function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AdminProvider>
  );
}