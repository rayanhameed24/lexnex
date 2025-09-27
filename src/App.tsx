import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategoryCards from './components/CategoryCards';
import Resources from './components/Resources';
import About from './components/About';
import Opportunities from './components/Opportunities';
import Quizzes from './components/Quizzes';
import Contact from './components/Contact';
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/categories" element={<CategoryCards />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
