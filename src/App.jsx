import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import BentoFeatures from './components/BentoFeatures.jsx';
import InteractivePlayground from './components/InteractivePlayground.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <BentoFeatures />
        <InteractivePlayground />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
