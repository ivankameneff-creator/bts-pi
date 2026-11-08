import React, { useState } from 'react';
import { Building2, MapPin, School, FileText, Bookmark, PlusCircle, Search, Sparkles, BookOpen } from 'lucide-react';

export function Navbar({ 
  activeView, 
  setActiveView, 
  favoritesCount, 
  onOpenFavorites, 
  onOpenAddSchool,
  onOpenGuide,
  searchQuery,
  setSearchQuery,
  selectedAcademy,
  onSelectAcademy
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      {/* Top subtle highlight line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => { setActiveView('home'); onSelectAcademy('all'); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <Building2 className="w-6 h-6 text-slate-950" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  BTS PI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">France</span>
                </span>
                <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Open Data 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Comparateur national des écoles de BTS Professions Immobilières
              </p>
            </div>
          </div>

          {/* Search bar quick access */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-6">
            <div className="relative w-full group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                placeholder="Rechercher école, ville, CP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 pl-9 pr-14 py-2 rounded-xl border border-slate-700/60 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  ✕
                </button>
              ) : (
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/50 pointer-events-none">
                  /
                </span>
              )}
            </div>
          </div>

          {/* Navigation Items (Segmented Pills) */}
          <div className="hidden lg:flex items-center bg-slate-900/70 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            <button
              onClick={() => setActiveView('home')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeView === 'home'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Carte & Académies
            </button>

            <button
              onClick={() => setActiveView('cards')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeView === 'cards'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              Grandes Fiches
            </button>

            <button
              onClick={() => setActiveView('table')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeView === 'table'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Tableau comparatif
            </button>

            <button
              onClick={onOpenGuide}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Guide BTS PI
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Bookmarks */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-105 active:scale-95"
              title="Mes écoles favorites"
            >
              <Bookmark className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-scale-in">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Proposer une école */}
            <button
              onClick={onOpenAddSchool}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              Ajouter une école
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 space-y-3">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Rechercher une école, ville..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 text-sm text-slate-200 placeholder-slate-500 px-3 py-2 rounded-lg border border-slate-700"
            />
          </div>
          <button
            onClick={() => { setActiveView('home'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeView === 'home' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-300'
            }`}
          >
            <MapPin className="w-4 h-4" />
            Carte Interactive & Académies
          </button>
          <button
            onClick={() => { setActiveView('cards'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeView === 'cards' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-300'
            }`}
          >
            <School className="w-4 h-4" />
            Toutes les Écoles (Grandes Vues)
          </button>
          <button
            onClick={() => { setActiveView('table'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeView === 'table' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            Tableau Comparatif & Filtres
          </button>
          <button
            onClick={() => { onOpenGuide(); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Guide du BTS PI (Métiers & Débouchés)
          </button>
          <button
            onClick={() => { onOpenAddSchool(); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950"
          >
            <PlusCircle className="w-4 h-4" />
            Ajouter une école
          </button>
        </div>
      )}
    </header>
  );
}
