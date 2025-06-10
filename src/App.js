import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'; // Regular CSS import

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="content-container">
          <Home />
        </div>
        <div className="content-container">
          <About />
        </div>
        <div className="content-container">
          <Projects />
        </div>
        <div className="content-container">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;