import React, { useState, useEffect, useMemo } from 'react';
import { ACADEMIES, PARCOURSUP_SOURCE_URL, THOTIS_SOURCE_URL } from './data/schoolsData';
import { getInitialSchools, fetchSchoolsFromDatabase, saveNewSchool } from './services/schoolsService';
import { Navbar } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { SchoolCard } from './components/SchoolCard';
import { SchoolsTable } from './components/SchoolsTable';
import { SchoolDetailModal } from './components/SchoolDetailModal';
import { CoverLetterModal } from './components/CoverLetterModal';
import { AddSchoolModal } from './components/AddSchoolModal';
import { FavoritesModal } from './components/FavoritesModal';
import { BtsPiGuideModal } from './components/BtsPiGuideModal';
import { InterviewPrepPage } from './components/InterviewPrepPage';
import { StatsBanner } from './components/StatsBanner';
import { Footer } from './components/Footer';
import {
  SlidersHorizontal,
  LayoutGrid,
  Table as TableIcon,
  RotateCcw,
  School,
  ExternalLink,
  TrendingUp,
  MessageSquare,
  X
} from 'lucide-react';

export default function App() {
  const [schools, setSchools] = useState(() => getInitialSchools());
  const [, setDataSource] = useState('static');

  useEffect(() => {
    let isMounted = true;
    fetchSchoolsFromDatabase().then((res) => {
      if (isMounted && res && res.schools) {
        setSchools(res.schools);
        setDataSource(res.source);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('bts_pi_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Navigation : 'home' | 'cards' | 'table' | 'interview'
  const [activeView, setActiveView] = useState('home');
  const [interviewTargetSchoolId, setInterviewTargetSchoolId] = useState('');

  // Filtres
  const [selectedAcademy, setSelectedAcademy] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedAlternance, setSelectedAlternance] = useState('all');
  const [minSuccessRate, setMinSuccessRate] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('parcoursup_demandes');

  // Modals
  const [detailSchool, setDetailSchool] = useState(null);
  const [letterSchool, setLetterSchool] = useState(null);
  const [isAddSchoolOpen, setIsAddSchoolOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bts_pi_favorites', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const toggleFavorite = (schoolId) => {
    setFavorites((prev) =>
      prev.includes(schoolId) ? prev.filter((id) => id !== schoolId) : [...prev, schoolId]
    );
  };

  const clearFavorites = () => setFavorites([]);

  const handleAddSchool = (newSchool) => {
    saveNewSchool(newSchool);
    setSchools((prev) => [newSchool, ...prev.filter((s) => s.id !== newSchool.id)]);
  };

  const openInterviewPageForSchool = (school) => {
    if (school?.id) {
      setFavorites((prev) => (prev.includes(school.id) ? prev : [...prev, school.id]));
      setInterviewTargetSchoolId(school.id);
    }
    setActiveView('interview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredSchools = useMemo(() => {
    return schools
      .filter((school) => {
        if (selectedAcademy !== 'all') {
          if (selectedAcademy === 'sud-ouest') {
            if (!['Toulouse', 'Bordeaux', 'Montpellier', 'Poitiers'].includes(school.academie)) {
              return false;
            }
          } else if (school.academie !== selectedAcademy) {
            return false;
          }
        }

        if (selectedType !== 'all') {
          if (selectedType === 'Public' && !school.type.toLowerCase().includes('public')) return false;
          if (selectedType === 'PriveSousContrat' && !school.type.toLowerCase().includes('sous contrat')) return false;
          if (selectedType === 'PriveHorsContrat' && !school.type.toLowerCase().includes('hors contrat')) return false;
        }

        if (selectedAlternance === 'oui' && !school.alternancePossible) return false;
        if (selectedAlternance === 'non' && school.alternancePossible) return false;

        if (minSuccessRate > 0 && school.tauxReussite < minSuccessRate) return false;

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = school.nom.toLowerCase().includes(q);
          const matchVille = school.ville.toLowerCase().includes(q);
          const matchAcad = school.academie.toLowerCase().includes(q);
          const matchAdresse = school.adresse.toLowerCase().includes(q);
          if (!matchName && !matchVille && !matchAcad && !matchAdresse) return false;
        }

        return true;
      })
      .sort((a, b) => {
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

  const hasActiveFilters =
    selectedAcademy !== 'all' ||
    selectedType !== 'all' ||
    selectedAlternance !== 'all' ||
    minSuccessRate > 0 ||
    searchQuery.trim() !== '';

  const totalSchools = schools.length;
  const publicCount = schools.filter((s) => s.type.toLowerCase().includes('public')).length;
  const privateCount = totalSchools - publicCount;
  const averagePassRate = Math.round(
    schools.reduce((acc, curr) => acc + curr.tauxReussite, 0) / (totalSchools || 1)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 relative overflow-x-hidden selection:bg-emerald-400 selection:text-slate-950 font-sans">
      {/* Toile de fond lumineuse épurée pour révéler l'effet verre dépoli */}
      <div className="fixed inset-0 bg-grid-pattern opacity-45 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />
      <div className="fixed -top-48 left-1/4 w-[520px] h-[520px] bg-emerald-400/[0.08] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-48 w-[540px] h-[540px] bg-sky-400/[0.07] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-10 w-[460px] h-[460px] bg-indigo-400/[0.06] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Barre de navigation flottante */}
      <div className="relative z-30">
        <Navbar
          activeView={activeView}
          setActiveView={(view) => {
            setActiveView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          favoritesCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenAddSchool={() => setIsAddSchoolOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            if (q && (activeView === 'home' || activeView === 'interview')) {
              setActiveView('cards');
            }
          }}
          selectedAcademy={selectedAcademy}
          onSelectAcademy={setSelectedAcademy}
        />
      </div>

      {/* Contenu principal */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {activeView === 'interview' ? (
          /* =============================================================== */
          /* PAGE DÉDIÉE : PRÉPARATION DE MON ENTRETIEN ÉCOLE (AVEC PDF)     */
          /* =============================================================== */
          <InterviewPrepPage
            key={interviewTargetSchoolId || 'general'}
            schools={schools}
            favorites={favorites}
            initialSchoolId={interviewTargetSchoolId}
            onBackHome={() => setActiveView('home')}
            onBrowseSchools={() => setActiveView('cards')}
            onOpenSchoolDetail={(s) => setDetailSchool(s)}
          />
        ) : (
          <>
            {/* ============================================================= */}
            {/* HERO ÉPURÉ GLASSY (Vue Accueil)                               */}
            {/* ============================================================= */}
            {activeView === 'home' && (
              <div className="relative rounded-3xl overflow-hidden p-7 sm:p-11 glass-surface">
                <div className="absolute -top-28 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-28 -left-24 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium glass-pill text-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Répertoire National 2026 • Open Data MESR Parcoursup</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                    Trouvez votre école de <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                      BTS Professions Immobilières
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
                    Comparez en toute clarté les 102 établissements de France : bilans officiels Parcoursup, taux de réussite, alternance, lettres de motivation et guide complet d'entretien téléchargeable en PDF.
                  </p>

                  {/* Raccourcis épurés en capsules de verre */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        setInterviewTargetSchoolId('');
                        setActiveView('interview');
                      }}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-slate-950 hover:bg-emerald-200 transition-all inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Préparation de mon entretien école (PDF)</span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedAcademy('sud-ouest');
                        setActiveView('cards');
                      }}
                      className="px-3.5 py-2 rounded-full text-xs font-medium glass-pill text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      Grand Sud-Ouest (45)
                    </button>

                    <button
                      onClick={() => {
                        setSelectedType('Public');
                        setActiveView('cards');
                      }}
                      className="px-3.5 py-2 rounded-full text-xs font-medium glass-pill text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      Écoles publiques
                    </button>

                    <button
                      onClick={() => {
                        setSelectedAlternance('oui');
                        setActiveView('cards');
                      }}
                      className="px-3.5 py-2 rounded-full text-xs font-medium glass-pill text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      Alternance
                    </button>

                    <a
                      href={PARCOURSUP_SOURCE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-full text-xs font-medium glass-pill text-sky-200 hover:text-white hover:bg-white/10 transition-all inline-flex items-center gap-1.5"
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-sky-300" />
                      <span>Open Data Parcoursup</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>

                <StatsBanner
                  totalSchools={totalSchools}
                  publicCount={publicCount}
                  privateCount={privateCount}
                  averagePassRate={averagePassRate}
                />
              </div>
            )}

            {/* ============================================================= */}
            {/* CARTE & GLOBE 3D (Vue Accueil)                                */}
            {/* ============================================================= */}
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

            {/* ============================================================= */}
            {/* BARRE DE FILTRES GLASSY & LISTE DES ÉCOLES                    */}
            {/* ============================================================= */}
            <section className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl glass-pill text-emerald-300">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {selectedAcademy === 'all'
                          ? 'Établissements BTS Professions Immobilières'
                          : selectedAcademy === 'sud-ouest'
                          ? 'Établissements du Grand Sud-Ouest'
                          : `Académie de ${selectedAcademy}`}
                      </h2>
                      <span className="text-xs font-semibold glass-pill text-emerald-300 px-3 py-0.5 rounded-full">
                        {filteredSchools.length} école{filteredSchools.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Consultez chaque fiche détaillée, le bilan Parcoursup ou préparez votre entretien.
                    </p>
                  </div>
                </div>

                {/* Sélecteur de vue épuré */}
                <div className="flex items-center gap-1 p-1 rounded-2xl glass-subtle self-start sm:self-auto">
                  <button
                    onClick={() => setActiveView('cards')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeView === 'cards' || activeView === 'home'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Cartes</span>
                  </button>

                  <button
                    onClick={() => setActiveView('table')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeView === 'table'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <TableIcon className="w-3.5 h-3.5" />
                    <span>Tableau</span>
                  </button>
                </div>
              </div>

              {/* Panneau de filtres en verre dépoli */}
              <div className="glass-surface p-5 sm:p-6 rounded-3xl space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2 text-slate-200">
                    <SlidersHorizontal className="w-4 h-4 text-emerald-300" />
                    <span>Affiner la sélection</span>
                  </span>

                  {hasActiveFilters && (
                    <button
                      onClick={handleResetFilters}
                      className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors glass-pill px-3 py-1 rounded-full cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Réinitialiser</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1.5 font-medium">Académie / Région</label>
                    <select
                      value={selectedAcademy}
                      onChange={(e) => setSelectedAcademy(e.target.value)}
                      className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white font-medium"
                    >
                      {ACADEMIES.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5 font-medium">Statut</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white font-medium"
                    >
                      <option value="all">Tous les statuts</option>
                      <option value="Public">Public (Gratuit)</option>
                      <option value="PriveSousContrat">Privé sous contrat</option>
                      <option value="PriveHorsContrat">Privé hors contrat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5 font-medium">Modalité</label>
                    <select
                      value={selectedAlternance}
                      onChange={(e) => setSelectedAlternance(e.target.value)}
                      className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white font-medium"
                    >
                      <option value="all">Alternance ou Initial</option>
                      <option value="oui">Alternance disponible</option>
                      <option value="non">Initiale uniquement</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-slate-400 font-medium">Trier par</label>
                      {sortBy === 'parcoursup_demandes' || sortBy === 'parcoursup_selectivite' ? (
                        <a
                          href={PARCOURSUP_SOURCE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-sky-300 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Source MESR</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ) : sortBy === 'thotis' ? (
                        <a
                          href={THOTIS_SOURCE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-amber-300 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Source Thotis</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ) : null}
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white font-medium"
                    >
                      <option value="parcoursup_demandes">Vœux Parcoursup (Demandes)</option>
                      <option value="parcoursup_selectivite">Sélectivité (Taux d'accès)</option>
                      <option value="reussite">Taux de réussite (%)</option>
                      <option value="avis">Note des avis étudiants</option>
                      <option value="nom">Ordre alphabétique (A-Z)</option>
                      <option value="thotis">Classement Thotis Media</option>
                    </select>
                  </div>
                </div>

                {hasActiveFilters && (
                  <div className="pt-3 flex flex-wrap items-center gap-2 border-t border-white/[0.07]">
                    <span className="text-[11px] text-slate-400">Actifs :</span>
                    {selectedAcademy !== 'all' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs glass-pill text-emerald-200">
                        {selectedAcademy}
                        <button onClick={() => setSelectedAcademy('all')} className="hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedType !== 'all' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs glass-pill text-slate-200">
                        {selectedType}
                        <button onClick={() => setSelectedType('all')} className="hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedAlternance !== 'all' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs glass-pill text-slate-200">
                        Alternance : {selectedAlternance === 'oui' ? 'Oui' : 'Non'}
                        <button onClick={() => setSelectedAlternance('all')} className="hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {minSuccessRate > 0 && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs glass-pill text-slate-200">
                        Réussite &ge; {minSuccessRate}%
                        <button onClick={() => setMinSuccessRate(0)} className="hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {searchQuery.trim() && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs glass-pill text-slate-200">
                        « {searchQuery} »
                        <button onClick={() => setSearchQuery('')} className="hover:text-white">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Affichage des résultats */}
              {filteredSchools.length === 0 ? (
                <div className="glass-surface rounded-3xl p-12 text-center space-y-4">
                  <School className="w-10 h-10 text-slate-500 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Aucune école ne correspond à vos critères</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Élargissez vos filtres ou réinitialisez la recherche pour afficher l'ensemble des 102 établissements.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-slate-950 hover:bg-emerald-200 transition-colors"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : activeView === 'table' ? (
                <SchoolsTable
                  schools={filteredSchools}
                  onSelectSchool={(school) => setDetailSchool(school)}
                  onGenerateLetter={(school) => setLetterSchool(school)}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSchools.map((school) => (
                    <SchoolCard
                      key={school.id}
                      school={school}
                      onSelectSchool={(s) => setDetailSchool(s)}
                      onGenerateLetter={(s) => setLetterSchool(s)}
                      onOpenInterviewPrep={openInterviewPageForSchool}
                      isFavorite={favorites.includes(school.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>

      {/* Pied de page */}
      <Footer
        onOpenGuide={() => setIsGuideOpen(true)}
        setActiveView={setActiveView}
        onSelectAcademy={(acad) => {
          setSelectedAcademy(acad);
          setActiveView('cards');
        }}
      />

      {/* Modals */}
      {detailSchool && (
        <SchoolDetailModal
          school={detailSchool}
          onClose={() => setDetailSchool(null)}
          onGenerateLetter={(s) => {
            setDetailSchool(null);
            setLetterSchool(s);
          }}
          onOpenInterviewPage={(s) => {
            setDetailSchool(null);
            openInterviewPageForSchool(s);
          }}
          isFavorite={favorites.includes(detailSchool.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {letterSchool && (
        <CoverLetterModal
          school={letterSchool}
          onClose={() => setLetterSchool(null)}
        />
      )}

      {isAddSchoolOpen && (
        <AddSchoolModal
          onClose={() => setIsAddSchoolOpen(false)}
          onAddSchool={handleAddSchool}
        />
      )}

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

      {isGuideOpen && (
        <BtsPiGuideModal
          onClose={() => setIsGuideOpen(false)}
        />
      )}
    </div>
  );
}
