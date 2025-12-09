
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import DashboardShowcase from './components/DashboardShowcase';
import DashboardViewer from './components/DashboardViewer';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { showcaseItems } from './data';

const App: React.FC = () => {
  const [selectedDashboardId, setSelectedDashboardId] = useState<string | null>(null);

  const handleViewDashboard = (id: string) => {
    setSelectedDashboardId(id);
    // Scroll to top when opening viewer
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedDashboardId(null);
  };

  const selectedItem = showcaseItems.find(item => item.id === selectedDashboardId);

  // If a dashboard is selected, render the Viewer exclusively (acting as a new page)
  if (selectedDashboardId && selectedItem) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
        <DashboardViewer item={selectedItem} onBack={handleBackToHome} />
        <ChatWidget />
      </div>
    );
  }

  // Otherwise render the main Single Page App
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Resume />
        <Portfolio />
        <DashboardShowcase onViewItem={handleViewDashboard} />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
