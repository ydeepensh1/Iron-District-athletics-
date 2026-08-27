import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { About } from './components/sections/About';
import { Facility } from './components/sections/Facility';
import { Programs } from './components/sections/Programs';
import { PersonalTraining } from './components/sections/PersonalTraining';
import { Trainers } from './components/sections/Trainers';
import { Membership } from './components/sections/Membership';
import { FreeTrial } from './components/sections/FreeTrial';
import { Results } from './components/sections/Results';
import { Community } from './components/sections/Community';
import { Schedule } from './components/sections/Schedule';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-text selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facility />
        <Programs />
        <PersonalTraining />
        <Trainers />
        <Membership />
        <FreeTrial />
        <Results />
        <Community />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

