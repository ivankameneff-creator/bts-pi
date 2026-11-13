import React, { useState, useMemo, useEffect } from 'react';
import {
  MessageSquare,
  Download,
  Copy,
  Check,
  Sparkles,
  Lightbulb,
  HelpCircle,
  Plus,
  Trash2,
  User,
  Search,
  Star,
  ArrowLeft,
  ClipboardCheck,
  PenLine,
  ExternalLink,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  INTERVIEW_CHECKLIST,
  buildJuryQuestions,
  buildQuestionsToAskSchool
} from '../data/interviewQuestionsData';
import { downloadInterviewPdf } from '../utils/generateInterviewPdf';

const STORAGE_KEY = 'bts_pi_interview_prep_v1';

export function InterviewPrepPage({
  schools = [],
  favorites = [],
  initialSchoolId = '',
  onBackHome,
  onBrowseSchools,
  onOpenSchoolDetail
}) {
  // Chargement de la sauvegarde locale pour ne jamais perdre ses notes
  const savedState = useMemo(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }, []);

  const [selectedSchoolId, setSelectedSchoolId] = useState(
    initialSchoolId || savedState.selectedSchoolId || ''
  );
  const [candidateName, setCandidateName] = useState(savedState.candidateName || '');
  const [candidateTrack, setCandidateTrack] = useState(savedState.candidateTrack || 'Terminale STMG / Générale');
  const [interviewDate, setInterviewDate] = useState(savedState.interviewDate || '');
  const [studyMode, setStudyMode] = useState(savedState.studyMode || 'alternance');
  const [specialty, setSpecialty] = useState(savedState.specialty || 'polyvalent');
  const [generalNotes, setGeneralNotes] = useState(savedState.generalNotes || '');
  const [personalNotes, setPersonalNotes] = useState(savedState.personalNotes || {});
  const [customQuestions, setCustomQuestions] = useState(savedState.customQuestions || []);
  const [starredIds, setStarredIds] = useState(() => new Set(savedState.starredIds || []));
  const [checkedChecklist, setCheckedChecklist] = useState(() => new Set(savedState.checkedChecklist || []));

  const [activeSection, setActiveSection] = useState('both'); // 'both' | 'ask' | 'jury' | 'checklist'
  const [exportOnlyStarred, setExportOnlyStarred] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [openNoteIds, setOpenNoteIds] = useState({});
  const [copied, setCopied] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          selectedSchoolId,
          candidateName,
          candidateTrack,
          interviewDate,
          studyMode,
          specialty,
          generalNotes,
          personalNotes,
          customQuestions,
          starredIds: Array.from(starredIds),
          checkedChecklist: Array.from(checkedChecklist)
        })
      );
    } catch {
      // Ignorer quota
    }
  }, [
    selectedSchoolId,
    candidateName,
    candidateTrack,
    interviewDate,
    studyMode,
    specialty,
    generalNotes,
    personalNotes,
    customQuestions,
    starredIds,
    checkedChecklist
  ]);

  const favoriteSchools = useMemo(() => {
    return schools
      .filter((s) => favorites.includes(s.id))
      .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  }, [schools, favorites]);

  const effectiveSchoolId = useMemo(() => {
    if (!selectedSchoolId) return '';
    return favoriteSchools.some((s) => s.id === selectedSchoolId) ? selectedSchoolId : '';
  }, [selectedSchoolId, favoriteSchools]);

  const selectedSchool = useMemo(() => {
    if (!effectiveSchoolId) return null;
    return favoriteSchools.find((s) => s.id === effectiveSchoolId) || null;
  }, [favoriteSchools, effectiveSchoolId]);

  const juryQuestions = useMemo(
    () => buildJuryQuestions({ school: selectedSchool, studyMode, specialty }),
    [selectedSchool, studyMode, specialty]
  );

  const questionsToAsk = useMemo(() => {
    const base = buildQuestionsToAskSchool({ school: selectedSchool, studyMode });
    return [...customQuestions, ...base];
  }, [selectedSchool, studyMode, customQuestions]);

  // Filtrage recherche texte
  const filteredAsk = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return questionsToAsk;
    return questionsToAsk.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        (item.category || '').toLowerCase().includes(q) ||
        (item.whyAsk || '').toLowerCase().includes(q)
    );
  }, [questionsToAsk, searchTerm]);

  const filteredJury = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return juryQuestions;
    return juryQuestions.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        (item.category || '').toLowerCase().includes(q) ||
        (item.tip || '').toLowerCase().includes(q) ||
        (item.sampleAnswer || '').toLowerCase().includes(q)
    );
  }, [juryQuestions, searchTerm]);

  const toggleStar = (id) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleChecklistItem = (id) => {
    setCheckedChecklist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleNoteEditor = (id) => {
    setOpenNoteIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNoteChange = (id, value) => {
    setPersonalNotes((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddCustomQuestion = (e) => {
    e.preventDefault();
    const trimmed = newQuestionText.trim();
    if (!trimmed) return;
    const newItem = {
      id: `custom-${Date.now()}`,
      category: 'Question personnelle',
      priority: 'Personnalisée',
      question: trimmed,
      whyAsk: 'Question ajoutée selon vos critères personnels pour départager cette école.',
      whatToListenFor: 'Notez les éléments précis communiqués par votre interlocuteur.',
      isCustom: true
    };
    setCustomQuestions((prev) => [newItem, ...prev]);
    setStarredIds((prev) => new Set([...prev, newItem.id]));
    setNewQuestionText('');
  };

  const handleDeleteCustomQuestion = (id) => {
    setCustomQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  // Questions à inclure dans l'export PDF
  const exportQuestionsToAsk = useMemo(() => {
    if (exportOnlyStarred && starredIds.size > 0) {
      return questionsToAsk.filter((q) => starredIds.has(q.id));
    }
    return questionsToAsk;
  }, [exportOnlyStarred, starredIds, questionsToAsk]);

  const exportJuryQuestions = useMemo(() => {
    if (exportOnlyStarred && starredIds.size > 0) {
      return juryQuestions.filter((q) => starredIds.has(q.id));
    }
    return juryQuestions;
  }, [exportOnlyStarred, starredIds, juryQuestions]);

  const handleDownloadPdf = () => {
    downloadInterviewPdf({
      school: selectedSchool,
      candidateName,
      candidateTrack,
      interviewDate,
      studyMode,
      specialty,
      juryQuestions: exportJuryQuestions,
      questionsToAsk: exportQuestionsToAsk,
      checklist: INTERVIEW_CHECKLIST,
      personalNotes,
      generalNotes
    });

    setPdfSuccess(true);
    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.75 }
    });
    setTimeout(() => setPdfSuccess(false), 3000);
  };

  const handleCopyText = () => {
    const lines = [
      `PRÉPARATION DE MON ENTRETIEN ÉCOLE — BTS PROFESSIONS IMMOBILIÈRES`,
      selectedSchool ? `École ciblée : ${selectedSchool.nom} (${selectedSchool.ville})` : `Toutes écoles BTS PI`,
      candidateName ? `Candidat : ${candidateName}` : null,
      `Mode : ${studyMode === 'alternance' ? 'Alternance' : 'Statut scolaire'}`,
      ``,
      `=== 1. QUESTIONS À POSER À L'ÉCOLE (${exportQuestionsToAsk.length}) ===`,
      ...exportQuestionsToAsk.map(
        (q, i) => `${i + 1}. ${q.question}\n   -> Pourquoi : ${q.whyAsk}${personalNotes[q.id] ? `\n   -> Ma note : ${personalNotes[q.id]}` : ''}`
      ),
      ``,
      `=== 2. QUESTIONS QUE L'ÉCOLE POURRAIT ME POSER (${exportJuryQuestions.length}) ===`,
      ...exportJuryQuestions.map(
        (q, i) =>
          `${i + 1}. ${q.question}\n   -> Conseil : ${q.tip}\n   -> Exemple : "${q.sampleAnswer}"${personalNotes[q.id] ? `\n   -> Ma réponse : ${personalNotes[q.id]}` : ''}`
      )
    ].filter((l) => l !== null);

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* ===================================================================== */}
      {/* EN-TÊTE GLASSY ÉPURÉ & BARRE D'EXPORT PDF */}
      {/* ===================================================================== */}
      <section className="glass-surface rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-28 -right-24 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-24 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={onBackHome}
                className="glass-pill hover:bg-white/10 text-slate-300 hover:text-white px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Annuaire des écoles</span>
              </button>
              <span className="glass-pill px-3 py-1.5 rounded-full text-xs font-medium text-emerald-300 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Guide interactif • Sauvegarde auto • Export PDF A4</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Préparation de mon{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                entretien école
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Anticipez les questions du jury, préparez vos propres réponses, sélectionnez les questions pertinentes à poser au responsable pédagogique et téléchargez votre dossier personnalisé en PDF.
            </p>
          </div>

          {/* Zone d'export PDF direct */}
          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleCopyText}
                className="glass-pill hover:bg-white/10 text-slate-200 px-4 py-3 rounded-2xl text-xs font-semibold inline-flex items-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                <span>{copied ? 'Copié !' : 'Copier le texte'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPdf}
                className="px-5 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:brightness-105 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 cursor-pointer"
              >
                {pdfSuccess ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{pdfSuccess ? 'PDF téléchargé !' : 'Télécharger en PDF'}</span>
              </button>
            </div>

            {starredIds.size > 0 && (
              <label className="inline-flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={exportOnlyStarred}
                  onChange={(e) => setExportOnlyStarred(e.target.checked)}
                  className="rounded border-white/20 bg-white/10 text-emerald-400 focus:ring-emerald-400/40"
                />
                <span>
                  Exporter uniquement mes favoris ★ ({starredIds.size} sélectionnée{starredIds.size > 1 ? 's' : ''})
                </span>
              </label>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* STUDIO DE PERSONNALISATION (ÉCOLE CIBLÉE + PROFIL CANDIDAT) */}
      {/* ===================================================================== */}
      <section className="glass-surface rounded-3xl p-5 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Personnaliser mon dossier d'entretien
              </h2>
              <p className="text-xs text-slate-400">
                Les exemples de réponses et l'en-tête de votre PDF s'adaptent automatiquement à vos choix.
              </p>
            </div>
          </div>
          {selectedSchool && onOpenSchoolDetail && (
            <button
              type="button"
              onClick={() => onOpenSchoolDetail(selectedSchool)}
              className="text-xs font-medium text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1 self-start sm:self-center"
            >
              <span>Voir la fiche complète de {selectedSchool.nom}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Choix de l'école (uniquement parmi les favoris) */}
          <div className="sm:col-span-2">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-slate-300 font-medium inline-flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-emerald-300" />
                <span>École ciblée pour l'entretien</span>
                <span className="text-[11px] text-slate-400">
                  ({favoriteSchools.length} favori{favoriteSchools.length > 1 ? 's' : ''})
                </span>
              </label>
              {favoriteSchools.length === 0 && onBrowseSchools && (
                <button
                  type="button"
                  onClick={onBrowseSchools}
                  className="text-[11px] font-medium text-emerald-300 hover:text-emerald-200 underline cursor-pointer"
                >
                  Ajouter des favoris →
                </button>
              )}
            </div>
            <select
              value={effectiveSchoolId}
              onChange={(e) => setSelectedSchoolId(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white text-xs"
            >
              <option value="">
                {favoriteSchools.length === 0
                  ? 'Aucune école en favori — Préparation générale BTS PI'
                  : 'Préparation générale — Toutes mes écoles favorites'}
              </option>
              {favoriteSchools.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nom} — {s.ville} ({s.type})
                </option>
              ))}
            </select>
          </div>

          {/* Mode Alternance / Initial */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Rythme visé</label>
            <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setStudyMode('alternance')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all ${
                  studyMode === 'alternance'
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Alternance
              </button>
              <button
                type="button"
                onClick={() => setStudyMode('initial')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all ${
                  studyMode === 'initial'
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Initiale
              </button>
            </div>
          </div>

          {/* Spécialité immobilière */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Domaine préféré</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white text-xs"
            >
              <option value="polyvalent">Polyvalent (3 métiers)</option>
              <option value="transaction">Transaction & Négociation</option>
              <option value="gestion">Gestion Locative</option>
              <option value="syndic">Syndic de Copropriété</option>
            </select>
          </div>

          {/* Nom du candidat */}
          <div>
            <label className="block text-slate-400 font-medium mb-1.5">
              Mon Prénom & Nom <span className="text-slate-500">(sur le PDF)</span>
            </label>
            <input
              type="text"
              placeholder="Ex : Camille Dupont"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 text-xs"
            />
          </div>

          {/* Filière actuelle */}
          <div>
            <label className="block text-slate-400 font-medium mb-1.5">Ma classe / filière actuelle</label>
            <input
              type="text"
              placeholder="Ex : Terminale STMG, Bac Général..."
              value={candidateTrack}
              onChange={(e) => setCandidateTrack(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 text-xs"
            />
          </div>

          {/* Date d'entretien */}
          <div>
            <label className="block text-slate-400 font-medium mb-1.5">Date de l'entretien / JPO</label>
            <input
              type="text"
              placeholder="Ex : Mercredi 18 mars à 14h30"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 text-xs"
            />
          </div>

          {/* Pitch express / Notes générales */}
          <div>
            <label className="block text-slate-400 font-medium mb-1.5">Mon objectif clé / mémo perso</label>
            <input
              type="text"
              placeholder="Ex : Mettre en avant mon stage chez Century 21..."
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 text-xs"
            />
          </div>
        </div>

        {/* Récapitulatif antisèche de l'école sélectionnée */}
        {selectedSchool && (
          <div className="glass-subtle rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <img
                src={selectedSchool.image}
                alt={selectedSchool.nom}
                className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-white text-sm">{selectedSchool.nom}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-slate-200 border border-white/10">
                    {selectedSchool.type}
                  </span>
                </div>
                <p className="text-slate-400 mt-0.5">
                  {selectedSchool.adresse} • Rythme : <strong className="text-slate-200">{selectedSchool.rythmeAlternance}</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-[10px] text-slate-400 block">Taux de réussite</span>
                <span className="font-bold text-emerald-300 text-sm">{selectedSchool.tauxReussite}%</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-[10px] text-slate-400 block">Admission</span>
                <span className="font-bold text-sky-300 text-sm">
                  {selectedSchool.parcoursup?.surParcoursup
                    ? `Parcoursup (${selectedSchool.parcoursup.tauxAcces}% accès)`
                    : 'Directe (Dossier & Entretien)'}
                </span>
              </div>
              {selectedSchool.datePortesOuvertes && (
                <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-[10px] text-slate-400 block">Portes Ouvertes</span>
                  <span className="font-semibold text-amber-200 text-xs">{selectedSchool.datePortesOuvertes}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ===================================================================== */}
      {/* BARRE DE NAVIGATION DES SECTIONS & RECHERCHE */}
      {/* ===================================================================== */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-subtle self-start">
          <button
            type="button"
            onClick={() => setActiveSection('both')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === 'both'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            Vue complète ({questionsToAsk.length + juryQuestions.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('ask')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === 'ask'
                ? 'bg-emerald-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            Questions à poser à l'école ({questionsToAsk.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('jury')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === 'jury'
                ? 'bg-sky-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            Questions qu'ils pourraient me poser ({juryQuestions.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('checklist')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === 'checklist'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            Check-list Jour J ({checkedChecklist.size}/{INTERVIEW_CHECKLIST.length})
          </button>
        </div>

        {/* Recherche instantanée */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filtrer un thème (alternance, DPE, syndic...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full glass-input rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-400"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* CHECK-LIST JOUR J (Visible si 'checklist' ou 'both') */}
      {/* ===================================================================== */}
      {(activeSection === 'checklist' || activeSection === 'both') && (
        <section className="glass-surface rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
                <ClipboardCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Check-list Jour J — Les 6 règles d'or avant l'entretien
                </h2>
                <p className="text-xs text-slate-400">
                  Cochez vos préparatifs au fur et à mesure (inclus en tête de votre PDF).
                </p>
              </div>
            </div>
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-semibold text-emerald-300">
              {checkedChecklist.size} / {INTERVIEW_CHECKLIST.length} prêt
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTERVIEW_CHECKLIST.map((item) => {
              const done = checkedChecklist.has(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                    done
                      ? 'bg-emerald-400/10 border-emerald-400/35'
                      : 'bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.045] hover:border-white/[0.14]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                        done
                          ? 'bg-emerald-400 border-emerald-400 text-slate-950'
                          : 'border-white/25 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className={`text-xs font-semibold leading-snug ${done ? 'text-emerald-200' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* GRILLE PRINCIPALE : QUESTIONS À POSER & QUESTIONS DU JURY */}
      {/* ===================================================================== */}
      <div
        className={`grid gap-7 ${
          activeSection === 'both' ? 'grid-cols-1 lg:grid-cols-2 items-start' : 'grid-cols-1'
        }`}
      >
        {/* ------------------------------------------------------------------- */}
        {/* COLONNE 1 : QUESTIONS À POSER À L'ÉCOLE */}
        {/* ------------------------------------------------------------------- */}
        {(activeSection === 'both' || activeSection === 'ask') && (
          <section className="space-y-4">
            <div className="glass-surface rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-400/12 border border-emerald-400/25 flex items-center justify-center text-emerald-300 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                      Vos questions au recruteur
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      Questions pertinentes à poser à l'école
                    </h2>
                  </div>
                </div>
                <span className="glass-pill px-2.5 py-1 rounded-full text-xs font-semibold text-slate-200 shrink-0">
                  {filteredAsk.length} questions
                </span>
              </div>

              <p className="text-xs text-slate-300/85 leading-relaxed">
                Poser 2 à 3 questions ciblées en fin d'entretien montre immédiatement votre maturité professionnelle et vous aide à comparer objectivement les écoles.
              </p>

              {/* Formulaire d'ajout d'une question perso */}
              <form onSubmit={handleAddCustomQuestion} className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Ajouter ma propre question à poser le jour J..."
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  className="flex-1 glass-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-400/15 hover:bg-emerald-400/25 text-emerald-200 border border-emerald-400/30 inline-flex items-center gap-1.5 transition-all shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter</span>
                </button>
              </form>
            </div>

            {/* Liste des cartes de questions à poser */}
            <div className="space-y-3.5">
              {filteredAsk.map((item, idx) => {
                const isStarred = starredIds.has(item.id);
                const hasNote = Boolean(personalNotes[item.id]?.trim());
                const noteOpen = openNoteIds[item.id] || hasNote;

                return (
                  <article
                    key={item.id}
                    className={`glass-card rounded-2xl p-5 transition-all ${
                      isStarred ? 'border-emerald-400/45 bg-emerald-400/[0.04]' : 'hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                          Question #{idx + 1} • {item.category}
                        </span>
                        {item.priority && (
                          <span className="text-[10px] font-medium text-slate-300 bg-white/[0.06] px-2 py-0.5 rounded-full border border-white/[0.08]">
                            {item.priority}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.isCustom && (
                          <button
                            type="button"
                            onClick={() => handleDeleteCustomQuestion(item.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Supprimer cette question"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => toggleStar(item.id)}
                          className={`p-1.5 rounded-lg transition-all ${
                            isStarred
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                              : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]'
                          }`}
                          title={isStarred ? 'Retirer des questions prioritaires' : 'Marquer comme prioritaire ★'}
                        >
                          <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-300' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-white mt-3 leading-snug">
                      « {item.question} »
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5 text-xs">
                      <div className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[11px] font-semibold text-emerald-300 block mb-0.5">
                          Pourquoi la poser
                        </span>
                        <p className="text-slate-300/85 leading-relaxed text-[11px]">{item.whyAsk}</p>
                      </div>
                      <div className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[11px] font-semibold text-sky-300 block mb-0.5">
                          Bon signe dans leur réponse
                        </span>
                        <p className="text-slate-300/85 leading-relaxed text-[11px]">{item.whatToListenFor}</p>
                      </div>
                    </div>

                    {/* Zone pour noter la réponse obtenue */}
                    <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => toggleNoteEditor(item.id)}
                        className="text-[11px] font-medium text-slate-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <PenLine className="w-3.5 h-3.5" />
                        <span>
                          {noteOpen ? 'Masquer ma note' : 'Noter la réponse de l\'école / mémo (inclus au PDF)'}
                        </span>
                      </button>
                      {noteOpen && (
                        <textarea
                          rows={2}
                          placeholder="Notez ici la réponse donnée par l'école lors de l'entretien ou de la JPO..."
                          value={personalNotes[item.id] || ''}
                          onChange={(e) => handleNoteChange(item.id, e.target.value)}
                          className="mt-2 w-full glass-input rounded-xl p-2.5 text-xs text-white placeholder-slate-500 resize-y"
                        />
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* COLONNE 2 : QUESTIONS QUE L'ÉCOLE POURRAIT ME POSER */}
        {/* ------------------------------------------------------------------- */}
        {(activeSection === 'both' || activeSection === 'jury') && (
          <section className="space-y-4">
            <div className="glass-surface rounded-3xl p-5 sm:p-6 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-400/12 border border-sky-400/25 flex items-center justify-center text-sky-300 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                      Anticiper le recruteur
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      Questions qu'ils pourraient me poser
                    </h2>
                  </div>
                </div>
                <span className="glass-pill px-2.5 py-1 rounded-full text-xs font-semibold text-slate-200 shrink-0">
                  {filteredJury.length} questions
                </span>
              </div>

              <p className="text-xs text-slate-300/85 leading-relaxed">
                Retrouvez pour chaque question ce que le jury cherche réellement à vérifier, la méthode recommandée et un exemple de réponse adapté{selectedSchool ? ` à ${selectedSchool.nom}` : ''}. Vous pouvez rédiger vos propres mots-clés sous chaque carte.
              </p>
            </div>

            {/* Liste des cartes de questions du jury */}
            <div className="space-y-3.5">
              {filteredJury.map((item, idx) => {
                const isStarred = starredIds.has(item.id);
                const hasNote = Boolean(personalNotes[item.id]?.trim());
                const noteOpen = openNoteIds[item.id] || hasNote;

                const diffBadge =
                  item.difficulty === 'Question piège'
                    ? 'bg-amber-400/15 text-amber-200 border-amber-400/30'
                    : item.difficulty === 'Incontournable'
                    ? 'bg-sky-400/15 text-sky-200 border-sky-400/30'
                    : 'bg-white/[0.06] text-slate-300 border-white/[0.1]';

                return (
                  <article
                    key={item.id}
                    className={`glass-card rounded-2xl p-5 transition-all ${
                      isStarred ? 'border-sky-400/45 bg-sky-400/[0.04]' : 'hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold text-sky-300 bg-sky-400/10 border border-sky-400/20 px-2.5 py-0.5 rounded-full">
                          Jury #{idx + 1} • {item.category}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${diffBadge}`}>
                          {item.difficulty}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleStar(item.id)}
                        className={`p-1.5 rounded-lg transition-all shrink-0 ${
                          isStarred
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]'
                        }`}
                        title={isStarred ? 'Retirer des favoris' : 'Marquer à réviser en priorité ★'}
                      >
                        <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-300' : ''}`} />
                      </button>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-white mt-3 leading-snug">
                      « {item.question} »
                    </h3>

                    {item.intent && (
                      <p className="text-[11px] text-slate-400 mt-1.5">
                        <strong className="text-slate-300">Ce que le jury évalue :</strong> {item.intent}
                      </p>
                    )}

                    <div className="mt-3 space-y-2.5 text-xs">
                      <div className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[11px] font-semibold text-amber-200 flex items-center gap-1.5 mb-1">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <span>Conseil pour structurer votre réponse</span>
                        </span>
                        <p className="text-slate-300/90 leading-relaxed text-[11px]">{item.tip}</p>
                      </div>

                      <div className="rounded-xl p-3 bg-emerald-400/[0.04] border border-emerald-400/15">
                        <span className="text-[11px] font-semibold text-emerald-300 block mb-1">
                          Exemple de formulation
                        </span>
                        <p className="text-slate-200/90 italic leading-relaxed text-[11px]">
                          « {item.sampleAnswer} »
                        </p>
                      </div>
                    </div>

                    {/* Zone pour préparer sa propre réponse */}
                    <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => toggleNoteEditor(item.id)}
                        className="text-[11px] font-medium text-slate-400 hover:text-sky-300 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <PenLine className="w-3.5 h-3.5" />
                        <span>
                          {noteOpen ? 'Masquer ma réponse perso' : 'Rédiger ma propre réponse / mes mots-clés (inclus au PDF)'}
                        </span>
                      </button>
                      {noteOpen && (
                        <textarea
                          rows={2}
                          placeholder="Écrivez vos propres arguments personnels (stages, jobs, expériences) qui apparaîtront dans votre PDF..."
                          value={personalNotes[item.id] || ''}
                          onChange={(e) => handleNoteChange(item.id, e.target.value)}
                          className="mt-2 w-full glass-input rounded-xl p-2.5 text-xs text-white placeholder-slate-500 resize-y"
                        />
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* ===================================================================== */}
      {/* BANDEAU BAS DE PAGE : RAPPEL TÉLÉCHARGEMENT PDF */}
      {/* ===================================================================== */}
      <section className="glass-surface rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white">
            Votre dossier d'entretien est prêt à être emporté
          </h3>
          <p className="text-xs text-slate-400">
            Format PDF A4 soigné avec check-list Jour J, questions à poser à l'école, questions du jury et vos notes personnelles.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="px-6 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:brightness-105 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Télécharger mon PDF d'entretien</span>
        </button>
      </section>
    </div>
  );
}
