import React, { useState, useEffect, useMemo } from 'react';
import { SCHOOLS_DATA, ACADEMIES, PARCOURSUP_SOURCE_URL, THOTIS_SOURCE_URL } from './data/schoolsData';
import { Navbar } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { SchoolCard } from './components/SchoolCard';
import { SchoolsTable } from './components/SchoolsTable';
import { SchoolDetailModal } from './components/SchoolDetailModal';
import { CoverLetterModal } from './components/CoverLetterModal';
import { AddSchoolModal } from './components/AddSchoolModal';
import { FavoritesModal } from './components/FavoritesModal';
import { BtsPiGuideModal } from './components/BtsPiGuideModal';
import { StatsBanner } from './components/StatsBanner';
import { Footer } from './components/Footer';
import { 
  Building2, 
  MapPin, 
  Filter, 
  SlidersHorizontal, 
  LayoutGrid, 
  Table as TableIcon, 
  GraduationCap, 
  CheckCircle, 
  Sparkles, 
  RotateCcw,
  Search,
  ArrowRight,
  School,
  FileEdit,
  Award,
  ExternalLink,
  TrendingUp,
  BarChart3,
  X
} from 'lucide-react';

export default function App() {
  // Database State with smart merge of built-in schools and custom added ones
  const [schools, setSchools] = useState(() => {
    try {
      const savedCustom = localStorage.getItem('bts_pi_custom_schools');
      if (savedCustom) {
        const customSchools = JSON.parse(savedCustom);
        if (Array.isArray(customSchools) && customSchools.length > 0) {
          return [...customSchools, ...SCHOOLS_DATA];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return SCHOOLS_DATA;
  });

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('bts_pi_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Navigation & View state: 'home' | 'cards' | 'table'
  const [activeView, setActiveView] = useState('home');

  // Filters
  const [selectedAcademy, setSelectedAcademy] = useState('all');
  const [selectedType, setSelectedType] = useState('all'); // 'all' | 'Public' | 'Privé sous contrat' | 'Privé hors contrat'
  const [selectedAlternance, setSelectedAlternance] = useState('all'); // 'all' | 'oui' | 'non'
  const [minSuccessRate, setMinSuccessRate] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('parcoursup_demandes'); // 'parcoursup_demandes' | 'parcoursup_selectivite' | 'reussite' | 'avis' | 'nom' | 'thotis'

  // Modals state
  const [detailSchool, setDetailSchool] = useState(null);
  const [letterSchool, setLetterSchool] = useState(null);
  const [isAddSchoolOpen, setIsAddSchoolOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem('bts_pi_favorites', JSON.stringify(favorites));
    } catch (e) {}
  }, [favorites]);

  const toggleFavorite = (schoolId) => {
    setFavorites(prev => 
      prev.includes(schoolId) 
        ? prev.filter(id => id !== schoolId) 
        : [...prev, schoolId]
    );
  };

  const clearFavorites = () => setFavorites([]);

  const handleAddSchool = (newSchool) => {
    const updated = [newSchool, ...schools];
    setSchools(updated);
    try {
      const savedCustom = localStorage.getItem('bts_pi_custom_schools');
      const existing = savedCustom ? JSON.parse(savedCustom) : [];
      localStorage.setItem('bts_pi_custom_schools', JSON.stringify([newSchool, ...existing]));
    } catch (e) {}
  };

  // Filter & Search Logic
  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      // Académie filter
      if (selectedAcademy !== 'all') {
        if (selectedAcademy === 'sud-ouest') {
          if (!['Toulouse', 'Bordeaux', 'Montpellier', 'Poitiers'].includes(school.academie)) {
            return false;
          }
        } else if (school.academie !== selectedAcademy) {
          return false;
        }
      }

      // Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'Public' && !school.type.toLowerCase().includes('public')) return false;
        if (selectedType === 'PriveSousContrat' && !school.type.toLowerCase().includes('sous contrat')) return false;
        if (selectedType === 'PriveHorsContrat' && !school.type.toLowerCase().includes('hors contrat')) return false;
      }

      // Alternance filter
      if (selectedAlternance === 'oui' && !school.alternancePossible) return false;
      if (selectedAlternance === 'non' && school.alternancePossible) return false;

      // Min success rate
      if (minSuccessRate > 0 && school.tauxReussite < minSuccessRate) return false;

      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = school.nom.toLowerCase().includes(q);
        const matchVille = school.ville.toLowerCase().includes(q);
        const matchAcad = school.academie.toLowerCase().includes(q);
        const matchAdresse = school.adresse.toLowerCase().includes(q);
        if (!matchName && !matchVille && !matchAcad && !matchAdresse) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'parcoursup_demandes') {
        const aDem = a.parcoursup?.demandes != null ? a.parcoursup.demandes : -1;
        const bDem = b.parcoursup?.demandes != null ? b.parcoursup.demandes : -1;
        return bDem - aDem;
      }
      if (sortBy === 'parcoursup_selectivite') {
        const aTaux = a.parcoursup?.tauxAcces != null ? a.parcoursup.tauxAcces : 999;
        const bTaux = b.parcoursup?.tauxAcces != null ? b.parcoursup.tauxAcces : 999;
        return aTaux - bTaux;
      }
      if (sortBy === 'thotis') {
        const aRank = a.classementThotis != null ? a.classementThotis : 999999;
        const bRank = b.classementThotis != null ? b.classementThotis : 999999;
        return aRank - bRank;
      }
      if (sortBy === 'reussite') return b.tauxReussite - a.tauxReussite;
      if (sortBy === 'avis') return b.avis.note - a.avis.note;
      if (sortBy === 'nom') return a.nom.localeCompare(b.nom);
      return 0;
    });
  }, [schools, selectedAcademy, selectedType, selectedAlternance, minSuccessRate, searchQuery, sortBy]);

  // When user clicks an academy on home view, navigate to the "Gros boutons" cards view
  const handleSelectAcademyFromMap = (acadId) => {
    setSelectedAcademy(acadId);
    setActiveView('cards');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSelectedAcademy('all');
    setSelectedType('all');
    setSelectedAlternance('all');
    setMinSuccessRate(0);
    setSearchQuery('');
    setSortBy('parcoursup_demandes');
  };

  const hasActiveFilters = selectedAcademy !== 'all' || selectedType !== 'all' || selectedAlternance !== 'all' || minSuccessRate > 0 || searchQuery.trim() !== '';

  // Key metrics calculation
  const totalSchools = schools.length;
  const publicCount = schools.filter(s => s.type.toLowerCase().includes('public')).length;
  const privateCount = totalSchools - publicCount;
  const averagePassRate = Math.round(
    schools.reduce((acc, curr) => acc + curr.tauxReussite, 0) / (totalSchools || 1)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#060a12] text-slate-100 relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950 font-sans">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none opacity-40 z-0" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar 
          activeView={activeView}
          setActiveView={setActiveView}
          favoritesCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenAddSchool={() => setIsAddSchoolOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            if (q && activeView === 'home') setActiveView('cards');
          }}
          selectedAcademy={selectedAcademy}
          onSelectAcademy={setSelectedAcademy}
        />
      </div>

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* ========================================================= */}
        {/* HERO SECTION (Shown in Home View) */}
        {/* ========================================================= */}
        {activeView === 'home' && (
          <div className="relative rounded-3xl overflow-hidden p-7 sm:p-12 border border-slate-800/90 bg-gradient-to-br from-slate-900/90 via-[#090e1c]/90 to-slate-900/90 backdrop-blur-2xl shadow-2xl ring-1 ring-white/5">
            {/* Background glowing ambient orbs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Base Nationale 2026 • Données Officielles MESR Parcoursup</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
                Trouvez votre école de <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  BTS Professions Immobilières
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explorez la carte interactive de France par académie et ville. Comparez les <strong>données officielles Parcoursup (demandes et admis)</strong>, les taux de réussite, les rythmes d'alternance et générez votre <strong>lettre de motivation personnalisée</strong> en un clic.
              </p>

              {/* Quick Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => { setSelectedAcademy('sud-ouest'); setActiveView('cards'); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-teal-500/15 text-teal-300 hover:bg-teal-500/25 border border-teal-500/30 transition-all inline-flex items-center gap-1.5 shadow-sm hover:scale-105"
                >
                  🌊 Grand Sud-Ouest (45 écoles)
                </button>
                <button
                  onClick={() => { setSelectedType('Public'); setActiveView('cards'); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800/90 text-emerald-300 hover:bg-emerald-500/20 border border-slate-700 transition-all hover:scale-105"
                >
                  🏛️ Écoles Publiques (Gratuit)
                </button>
                <button
                  onClick={() => { setSelectedAlternance('oui'); setActiveView('cards'); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800/90 text-cyan-300 hover:bg-cyan-500/20 border border-slate-700 transition-all hover:scale-105"
                >
                  ⚡ Cursus en Alternance
                </button>
                <button
                  onClick={() => { setMinSuccessRate(90); setActiveView('cards'); }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800/90 text-amber-300 hover:bg-amber-500/20 border border-slate-700 transition-all hover:scale-105"
                >
                  🏆 Top Réussite &gt; 90%
                </button>
                <button
                  onClick={() => setIsGuideOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
                >
                  📖 Guide du diplôme
                </button>
                <a
                  href={PARCOURSUP_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/30 transition-all inline-flex items-center gap-1.5 shadow-sm hover:scale-105"
                  title="Consulter les données officielles Parcoursup Open Data sur data.enseignementsup-recherche.gouv.fr (nouvel onglet)"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Données Parcoursup Officielles</span>
                  <ExternalLink className="w-3 h-3 text-cyan-300 opacity-80" />
                </a>
              </div>
            </div>

            {/* KPI Stats */}
            <StatsBanner 
              totalSchools={totalSchools}
              publicCount={publicCount}
              privateCount={privateCount}
              averagePassRate={averagePassRate}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* INTERACTIVE MAP (On Home View) */}
        {/* ========================================================= */}
        {activeView === 'home' && (
          <section className="space-y-4">
            <InteractiveMap 
              schools={schools}
              onSelectSchool={(school) => setDetailSchool(school)}
              onSelectAcademy={handleSelectAcademyFromMap}
              selectedAcademy={selectedAcademy}
            />
          </section>
        )}

        {/* ========================================================= */}
        {/* FILTER BAR & VIEW TOGGLE (Always available in cards/table) */}
        {/* ========================================================= */}
        <section className="space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {selectedAcademy === 'all' 
                      ? "Toutes les écoles de BTS Professions Immobilières" 
                      : selectedAcademy === 'sud-ouest'
                        ? "Écoles du Grand Sud-Ouest"
                        : `Écoles - Académie de ${selectedAcademy}`
                    }
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Cliquez sur une école pour afficher sa fiche complète ou générer une lettre de motivation ciblée.
                  </p>
                </div>
                <span className="text-xs font-bold bg-emerald-500/15 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 shrink-0 self-start sm:self-center">
                  {filteredSchools.length} école{filteredSchools.length > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* View Mode Switcher: Cards vs Table */}
            <div className="flex items-center gap-1.5 bg-[#080d1a] p-1.5 rounded-2xl border border-slate-800 self-start sm:self-auto shadow-inner">
              <button
                onClick={() => setActiveView('cards')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeView === 'cards' || activeView === 'home'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20 font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grandes Fiches (Boutons)</span>
              </button>

              <button
                onClick={() => setActiveView('table')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeView === 'table'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20 font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Tableau Comparatif</span>
              </button>
            </div>
          </div>

          {/* Interactive Filters Grid */}
          <div className="bg-[#080d1a]/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-2 text-emerald-400">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filtres & Affinage</span>
              </span>
              
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors capitalize font-semibold bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20"
                >
                  <RotateCcw className="w-3 h-3" />
                  Réinitialiser tous les filtres
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
              
              {/* Académie */}
              <div>
                <label className="block text-slate-400 mb-1.5 font-semibold">Académie / Région</label>
                <select
                  value={selectedAcademy}
                  onChange={(e) => setSelectedAcademy(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium"
                >
                  {ACADEMIES.map(a => (
                    <option key={a.id} value={a.id}>{a.nom}</option>
                  ))}
                </select>
              </div>

              {/* Statut */}
              <div>
                <label className="block text-slate-400 mb-1.5 font-semibold">Statut de l'école</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="Public">Public (100% Gratuit)</option>
                  <option value="PriveSousContrat">Privé sous contrat d'association</option>
                  <option value="PriveHorsContrat">Privé hors contrat</option>
                </select>
              </div>

              {/* Alternance */}
              <div>
                <label className="block text-slate-400 mb-1.5 font-semibold">Alternance</label>
                <select
                  value={selectedAlternance}
                  onChange={(e) => setSelectedAlternance(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium"
                >
                  <option value="all">Alternance ou Initial</option>
                  <option value="oui">Alternance proposée uniquement</option>
                  <option value="non">Formation initiale uniquement</option>
                </select>
              </div>

              {/* Tri */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-400 font-semibold">Trier par</label>
                  {(sortBy === 'parcoursup_demandes' || sortBy === 'parcoursup_selectivite') ? (
                    <a
                      href={PARCOURSUP_SOURCE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-1 font-semibold"
                      title="Consulter les données officielles Parcoursup Open Data (nouvel onglet)"
                    >
                      <span>Open Data Parcoursup</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : sortBy === 'thotis' ? (
                    <a
                      href={THOTIS_SOURCE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1 font-semibold"
                      title="Consulter le classement officiel sur Thotis Media (nouvel onglet)"
                    >
                      <span>Source Thotis</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : null}
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all font-medium"
                >
                  <option value="parcoursup_demandes">📈 Vœux Parcoursup (Nombre de demandes)</option>
                  <option value="parcoursup_selectivite">🔥 Taux d'accès (Plus sélectif)</option>
                  <option value="reussite">🎓 Taux de réussite au diplôme (%)</option>
                  <option value="avis">★ Note des avis étudiants</option>
                  <option value="nom">🔤 Nom de l'école (A-Z)</option>
                  <option value="thotis">🏆 Classement Thotis Media</option>
                </select>
              </div>

            </div>

            {/* Active Filters Badges Chips */}
            {hasActiveFilters && (
              <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-400 font-semibold">Filtres actifs :</span>
                {selectedAcademy !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Académie : {selectedAcademy}
                    <button onClick={() => setSelectedAcademy('all')} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedType !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    Statut : {selectedType}
                    <button onClick={() => setSelectedType('all')} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedAlternance !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Alternance : {selectedAlternance === 'oui' ? 'Oui' : 'Non'}
                    <button onClick={() => setSelectedAlternance('all')} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {minSuccessRate > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Réussite &gt;= {minSuccessRate}%
                    <button onClick={() => setMinSuccessRate(0)} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                    Recherche : "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* DISPLAY CONTENT: CARDS ("Gros boutons") vs TABLE */}
          {/* ========================================================= */}
          {filteredSchools.length === 0 ? (
            <div className="bg-[#080d1a]/80 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-800 space-y-4">
              <School className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white font-heading">Aucune école ne correspond à vos filtres</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Essayez d'élargir votre sélection d'académie ou de réinitialiser vos critères de recherche.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Réinitialiser tous les filtres
              </button>
            </div>
          ) : activeView === 'table' ? (
            /* TABLE VIEW */
            <SchoolsTable 
              schools={filteredSchools}
              onSelectSchool={(school) => setDetailSchool(school)}
              onGenerateLetter={(school) => setLetterSchool(school)}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ) : (
            /* CARDS VIEW ("Gros boutons avec en fond l'école ciblée") */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map(school => (
                <SchoolCard 
                  key={school.id}
                  school={school}
                  onSelectSchool={(s) => setDetailSchool(s)}
                  onGenerateLetter={(s) => setLetterSchool(s)}
                  isFavorite={favorites.includes(school.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <Footer 
        onOpenGuide={() => setIsGuideOpen(true)}
        setActiveView={setActiveView}
        onSelectAcademy={(acad) => {
          setSelectedAcademy(acad);
          setActiveView('cards');
        }}
      />

      {/* ========================================================= */}
      {/* MODALS */}
      {/* ========================================================= */}

      {/* School Detail Modal */}
      {detailSchool && (
        <SchoolDetailModal 
          school={detailSchool}
          onClose={() => setDetailSchool(null)}
          onGenerateLetter={(s) => {
            setDetailSchool(null);
            setLetterSchool(s);
          }}
          isFavorite={favorites.includes(detailSchool.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {/* Cover Letter Generator Modal */}
      {letterSchool && (
        <CoverLetterModal 
          school={letterSchool}
          onClose={() => setLetterSchool(null)}
        />
      )}

      {/* Add School Modal */}
      {isAddSchoolOpen && (
        <AddSchoolModal 
          onClose={() => setIsAddSchoolOpen(false)}
          onAddSchool={handleAddSchool}
        />
      )}

      {/* Favorites Modal */}
      {isFavoritesOpen && (
        <FavoritesModal 
          favorites={favorites}
          schools={schools}
          onClose={() => setIsFavoritesOpen(false)}
          onSelectSchool={(s) => setDetailSchool(s)}
          onGenerateLetter={(s) => setLetterSchool(s)}
          onToggleFavorite={toggleFavorite}
          onClearFavorites={clearFavorites}
        />
      )}

      {/* BTS PI Guide Modal */}
      {isGuideOpen && (
        <BtsPiGuideModal 
          onClose={() => setIsGuideOpen(false)}
        />
      )}

    </div>
  );
}
