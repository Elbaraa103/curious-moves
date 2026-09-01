import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Menu, X, BookOpen, User, Mail } from 'lucide-react';
import { CuriousMovesLogo } from './CuriousMovesLogo';

export type NavTab = 'home' | 'programs' | 'about' | 'principles' | 'contact';

interface NavbarProps {
  currentLang: Language;
  activeTab: NavTab;
  onLanguageChange: (lang: Language) => void;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  activeTab,
  onLanguageChange,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[currentLang];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { tab: NavTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'programs', label: t.allPrograms || 'Programlar', icon: <BookOpen className="w-4 h-4" /> },
    { tab: 'about', label: t.aboutNav || 'Hakkımda', icon: <User className="w-4 h-4" /> },
    { tab: 'contact', label: t.contactNav || 'İletişim', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md text-slate-800 border-b border-slate-200/80 shadow-2xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo -> Click to go to Home */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group hover:opacity-90 transition-opacity"
          title="Curious Moves Berlin • Ana Sayfa"
        >
          <CuriousMovesLogo variant="horizontal" showSubtitle={true} />
        </div>

        {/* Desktop Navigation Tabs: Programlar, Hakkımda, İletişim */}
        <div className="hidden lg:flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 text-xs font-bold text-slate-700">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab || (item.tab === 'about' && activeTab === 'principles');
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-white text-amber-900 shadow-xs font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => onLanguageChange('tr')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currentLang === 'tr'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('de')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => onLanguageChange('tr')}
              className={`px-2 py-1 text-[11px] font-bold rounded-md ${
                currentLang === 'tr' ? 'bg-amber-600 text-white' : 'text-slate-600'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-[11px] font-bold rounded-md ${
                currentLang === 'en' ? 'bg-amber-600 text-white' : 'text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('de')}
              className={`px-2 py-1 text-[11px] font-bold rounded-md ${
                currentLang === 'de' ? 'bg-amber-600 text-white' : 'text-slate-600'
              }`}
            >
              DE
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab || (item.tab === 'about' && activeTab === 'principles');
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-50 text-amber-900 border border-amber-200 shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
