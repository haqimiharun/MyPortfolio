import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Resume />
        <Portfolio />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;