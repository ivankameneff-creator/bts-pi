import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  School,
  FileText,
  Bookmark,
  PlusCircle,
  Search,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export function Navbar({
  activeView,
  setActiveView,
  favoritesCount,
  onOpenFavorites,
  onOpenAddSchool,
  onOpenGuide,
  searchQuery,
  setSearchQuery,
  onSelectAcademy
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Carte', icon: MapPin },
    { id: 'cards', label: 'Écoles', icon: School },
    { id: 'table', label: 'Comparateur', icon: FileText },
    { id: 'interview', label: 'Mon Entretien', icon: MessageSquare, highlight: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Logo épuré */}
          <div
            onClick={() => {
              setActiveView('home');
              onSelectAcademy('all');
            }}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-400/90 to-teal-300/90 flex items-center justify-center shadow-lg shadow-emerald-500/15 group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">
                  BTS PI <span className="text-emerald-300 font-semibold">France</span>
                </span>
                <span className="hidden xl:inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.1]">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Annuaire & Orientation Immobilière
              </p>
            </div>
          </div>

          {/* Barre de recherche translucide */}
          <div className="hidden md:flex items-center flex-1 max-w-xs">
            <div className="relative w-full group">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-300 transition-colors" />
              <input
                type="text"
                placeholder="École, ville, académie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-input text-xs text-slate-100 placeholder-slate-400 pl-9 pr-8 py-2 rounded-2xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Navigation principale en capsule glassy */}
          <nav className="hidden lg:flex items-center p-1 rounded-2xl bg-white/[0.04] border border-white/[0.09] backdrop-blur-xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm'
                      : item.highlight
                      ? 'text-emerald-300 hover:text-white hover:bg-white/[0.06]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <button
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>Guide</span>
            </button>
          </nav>

          {/* Actions droites épurées */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-2xl glass-pill text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              title="Mes écoles favorites"
            >
              <Bookmark className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-400 text-slate-950 font-bold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAddSchool}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold glass-pill text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>Ajouter</span>
            </button>

            {/* Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl glass-pill text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tiroir Mobile Glassy */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#080d1a]/90 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-2">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Rechercher une école, ville..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-input text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2 rounded-xl"
            />
          </div>

          <button
            onClick={() => {
              setActiveView('home');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              activeView === 'home' ? 'bg-white text-slate-950 font-semibold' : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Carte & Globe 3D</span>
          </button>

          <button
            onClick={() => {
              setActiveView('cards');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              activeView === 'cards' ? 'bg-white text-slate-950 font-semibold' : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <School className="w-4 h-4" />
            <span>Toutes les écoles</span>
          </button>

          <button
            onClick={() => {
              setActiveView('table');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              activeView === 'table' ? 'bg-white text-slate-950 font-semibold' : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Tableau comparatif</span>
          </button>

          <button
            onClick={() => {
              setActiveView('interview');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              activeView === 'interview'
                ? 'bg-emerald-400 text-slate-950 font-semibold'
                : 'text-emerald-300 bg-emerald-400/10 border border-emerald-400/20'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Préparation de mon entretien école (PDF)</span>
          </button>

          <button
            onClick={() => {
              onOpenGuide();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Guide du BTS PI</span>
          </button>

          <button
            onClick={() => {
              onOpenAddSchool();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold glass-pill text-white mt-2"
          >
            <PlusCircle className="w-4 h-4 text-emerald-300" />
            <span>Ajouter une école</span>
          </button>
        </div>
      )}
    </header>
  );
}
