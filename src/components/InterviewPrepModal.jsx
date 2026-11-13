import React, { useState, useMemo } from 'react';
import {
  X,
  MessageSquare,
  Lightbulb,
  CheckCircle2,
  Copy,
  Check,
  Download,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  INTERVIEW_CHECKLIST,
  buildJuryQuestions,
  buildQuestionsToAskSchool
} from '../data/interviewQuestionsData';
import { downloadInterviewPdf } from '../utils/generateInterviewPdf';

export function InterviewPrepModal({ school, onClose, onOpenFullPage }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'ask' | 'jury'
  const [studyMode, setStudyMode] = useState('alternance');
  const [specialty, setSpecialty] = useState('polyvalent');
  const [checkedQuestions, setCheckedQuestions] = useState(new Set());
  const [copied, setCopied] = useState(false);

  const juryQuestions = useMemo(
    () => buildJuryQuestions({ school, studyMode, specialty }),
    [school, studyMode, specialty]
  );

  const candidateQuestions = useMemo(
    () => buildQuestionsToAskSchool({ school, studyMode }),
    [school, studyMode]
  );

  const displayedQuestions = useMemo(() => {
    if (activeTab === 'jury') return juryQuestions.map((q) => ({ ...q, type: 'jury' }));
    if (activeTab === 'ask') return candidateQuestions.map((q) => ({ ...q, type: 'candidate' }));
    return [
      ...candidateQuestions.map((q) => ({ ...q, type: 'candidate' })),
      ...juryQuestions.map((q) => ({ ...q, type: 'jury' }))
    ];
  }, [activeTab, juryQuestions, candidateQuestions]);

  const toggleCheck = (id) => {
    setCheckedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDownloadPdf = () => {
    const askList =
      checkedQuestions.size > 0
        ? candidateQuestions.filter((q) => checkedQuestions.has(q.id))
        : candidateQuestions;
    const juryList =
      checkedQuestions.size > 0
        ? juryQuestions.filter((q) => checkedQuestions.has(q.id))
        : juryQuestions;

    downloadInterviewPdf({
      school,
      studyMode,
      specialty,
      juryQuestions: juryList.length ? juryList : juryQuestions,
      questionsToAsk: askList.length ? askList : candidateQuestions,
      checklist: INTERVIEW_CHECKLIST
    });

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handleCopy = () => {
    const text = [
      `PRÉPARATION ENTRETIEN — ${school?.nom || 'BTS PI'} (${school?.ville || ''})`,
      ``,
      `1. QUESTIONS À POSER À L'ÉCOLE`,
      ...candidateQuestions.map((q, i) => `${i + 1}. ${q.question}\n   Pourquoi : ${q.whyAsk}`),
      ``,
      `2. QUESTIONS QUE L'ÉCOLE POURRAIT ME POSER`,
      ...juryQuestions.map((q, i) => `${i + 1}. ${q.question}\n   Conseil : ${q.tip}\n   Exemple : "${q.sampleAnswer}"`)
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!school) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xl overflow-y-auto">
      <div className="glass-surface bg-[#0a1020]/90 w-full max-w-4xl rounded-3xl flex flex-col max-h-[90vh] overflow-hidden relative text-slate-100">
        {/* En-tête épuré */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-emerald-400/12 border border-emerald-400/25 text-emerald-300">
              <MessageSquare className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Préparation entretien — {school.nom}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Questions à poser à l'école et questions du jury ({school.ville})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenFullPage && (
              <button
                type="button"
                onClick={() => onOpenFullPage(school)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold glass-pill text-emerald-300 hover:bg-white/10 transition-colors"
              >
                <span>Ouvrir la page dédiée</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
              title="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Barre d'options */}
        <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setStudyMode('alternance')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                studyMode === 'alternance'
                  ? 'bg-white text-slate-950'
                  : 'glass-pill text-slate-300 hover:text-white'
              }`}
            >
              Alternance
            </button>
            <button
              onClick={() => setStudyMode('initial')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                studyMode === 'initial'
                  ? 'bg-white text-slate-950'
                  : 'glass-pill text-slate-300 hover:text-white'
              }`}
            >
              Initiale
            </button>

            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="glass-input rounded-xl px-3 py-1.5 text-xs text-slate-200"
            >
              <option value="polyvalent">Pôle : Polyvalent</option>
              <option value="transaction">Pôle : Transaction</option>
              <option value="gestion">Pôle : Gestion locative</option>
              <option value="syndic">Pôle : Syndic</option>
            </select>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'all' ? 'bg-emerald-400 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Tout ({juryQuestions.length + candidateQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab('ask')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'ask' ? 'bg-emerald-400 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              À poser ({candidateQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab('jury')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'jury' ? 'bg-emerald-400 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Du jury ({juryQuestions.length})
            </button>
          </div>
        </div>

        {/* Liste des questions */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 flex-1">
          <div className="p-3.5 rounded-2xl bg-emerald-400/[0.06] border border-emerald-400/20 text-xs text-slate-200 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
            <span>
              Cliquez sur une question pour la sélectionner, ou téléchargez directement l'intégralité du guide en <strong>PDF A4</strong> ci-dessous.
            </span>
          </div>

          {displayedQuestions.map((item) => {
            const isJury = item.type === 'jury';
            const isChecked = checkedQuestions.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                  isChecked
                    ? 'bg-emerald-400/[0.08] border-emerald-400/45'
                    : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                          isJury
                            ? 'bg-sky-400/12 text-sky-300 border-sky-400/25'
                            : 'bg-emerald-400/12 text-emerald-300 border-emerald-400/25'
                        }`}
                      >
                        {isJury ? 'Question du jury' : 'Question à poser à l\'école'}
                      </span>
                      <span className="text-[11px] text-slate-400">{item.category}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-white pt-0.5">
                      « {item.question} »
                    </h4>

                    {isJury ? (
                      <div className="mt-2 space-y-2 text-xs">
                        <div className="p-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-300">
                          <span className="font-semibold text-amber-200 inline-flex items-center gap-1 mb-0.5">
                            <Sparkles className="w-3 h-3" /> Conseil :
                          </span>{' '}
                          {item.tip}
                        </div>
                        <div className="p-2.5 bg-emerald-400/[0.04] rounded-xl text-slate-300 italic border-l-2 border-emerald-400/60">
                          « {item.sampleAnswer} »
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                          <span className="font-semibold text-emerald-300 block mb-0.5">Pourquoi la poser :</span>
                          <span className="text-slate-300/85">{item.whyAsk}</span>
                        </div>
                        <div className="p-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                          <span className="font-semibold text-sky-300 block mb-0.5">À observer :</span>
                          <span className="text-slate-300/85">{item.whatToListenFor}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <span
                    className={`p-1.5 rounded-xl shrink-0 transition-colors ${
                      isChecked ? 'bg-emerald-400 text-slate-950' : 'bg-white/[0.05] text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pied de page avec vrai téléchargement PDF */}
        <div className="p-4 sm:p-5 bg-slate-950/60 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            {checkedQuestions.size > 0
              ? `${checkedQuestions.size} question(s) sélectionnée(s) pour le PDF`
              : 'Toutes les questions seront incluses dans votre PDF'}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold glass-pill text-white hover:bg-white/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:brightness-105 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger en PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
