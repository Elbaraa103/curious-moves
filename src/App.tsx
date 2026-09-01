import React, { useState, useEffect } from 'react';
import { Language, Program } from './types';
import { PROGRAMS } from './data/programsData';
import { resolveProgramId } from './utils/linkHelper';
import { Navbar, NavTab } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ProgramsView } from './components/ProgramsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { ProgramModal } from './components/ProgramModal';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('tr');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalInitialTab, setLegalInitialTab] = useState<'impressum' | 'datenschutz' | 'kinderschutz'>('impressum');

  const handleOpenLegal = (tab: 'impressum' | 'datenschutz' | 'kinderschutz') => {
    setLegalInitialTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectTab = (tab: NavTab) => {
    const resolvedTab = tab === 'principles' ? 'about' : tab;
    setActiveTab(resolvedTab);
    if (typeof window !== 'undefined') {
      window.location.hash = resolvedTab === 'home' ? '' : resolvedTab;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (program: Program | null) => {
    setSelectedProgram(program);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (program) {
        url.searchParams.set('program', program.id);
      } else {
        url.searchParams.delete('program');
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const params = new URLSearchParams(window.location.search);
      const rawProgId = params.get('program') || (hash && !['impressum', 'datenschutz', 'kinderschutz', 'programs', 'about', 'principles', 'contact', 'home'].includes(hash) ? hash : '');

      // Check legal routing
      if (path.includes('impressum') || hash === 'impressum') {
        handleOpenLegal('impressum');
      } else if (path.includes('datenschutz') || hash === 'datenschutz') {
        handleOpenLegal('datenschutz');
      } else if (path.includes('kinderschutz') || hash === 'kinderschutz') {
        handleOpenLegal('kinderschutz');
      } else if (hash === 'principles' || hash === 'about') {
        setActiveTab('about');
      } else if (['programs', 'contact', 'home'].includes(hash)) {
        setActiveTab(hash as NavTab);
      }

      // Check program routing
      if (rawProgId) {
        const resolvedId = resolveProgramId(rawProgId);
        const found = PROGRAMS.find((p) => p.id === resolvedId || p.id === rawProgId);
        if (found) {
          setActiveTab('programs');
          setSelectedProgram(found);
          const url = new URL(window.location.href);
          url.searchParams.set('program', found.id);
          window.history.replaceState({}, '', url.toString());
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans selection:bg-amber-500 selection:text-white antialiased relative overflow-x-hidden">
      {/* Warm Ambient Atmosphere Glows */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-slate-100/40 pointer-events-none" />
      <div className="fixed top-20 left-10 sm:left-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 right-10 sm:right-40 w-80 sm:w-96 h-80 sm:h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar: Programlar, Hakkımda, İletişim */}
        <Navbar
          currentLang={currentLang}
          activeTab={activeTab}
          onLanguageChange={(lang) => setCurrentLang(lang)}
          onSelectTab={handleSelectTab}
        />

        {/* Tab Views */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomeView
              currentLang={currentLang}
              onNavigateTab={handleSelectTab}
              onOpenLegal={handleOpenLegal}
            />
          )}

          {activeTab === 'programs' && (
            <ProgramsView
              currentLang={currentLang}
              onSelectProgram={handleSelectProgram}
              onBackToHome={() => handleSelectTab('home')}
              onNavigateTab={handleSelectTab}
            />
          )}

          {(activeTab === 'about' || (activeTab as string) === 'principles') && (
            <AboutView
              currentLang={currentLang}
              onBackToHome={() => handleSelectTab('home')}
              onNavigateTab={handleSelectTab}
              onOpenLegal={handleOpenLegal}
            />
          )}

          {activeTab === 'contact' && (
            <ContactView
              currentLang={currentLang}
              onBackToHome={() => handleSelectTab('home')}
              onNavigateTab={handleSelectTab}
            />
          )}
        </main>

        {/* Footer */}
        <Footer
          currentLang={currentLang}
          onNavigateTab={handleSelectTab}
          onOpenLegal={handleOpenLegal}
        />

        {/* Program Detail Modal */}
        <ProgramModal
          program={selectedProgram}
          currentLang={currentLang}
          onClose={() => handleSelectProgram(null)}
        />

        {/* Legal Modal (Impressum, Datenschutz, Kinderschutz) */}
        <LegalModal
          isOpen={legalModalOpen}
          initialTab={legalInitialTab}
          currentLang={currentLang}
          onClose={() => setLegalModalOpen(false)}
        />
      </div>
    </div>
  );
}
