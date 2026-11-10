import React, { useState, useMemo } from 'react';
import { 
  X, 
  HelpCircle, 
  MessageSquare, 
  Lightbulb, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  Sparkles, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Users, 
  Share2, 
  Filter,
  Flame,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function InterviewPrepModal({ school, onClose }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'jury' | 'candidate'
  const [studyMode, setStudyMode] = useState('alternance'); // 'alternance' | 'initial'
  const [specialty, setSpecialty] = useState('polyvalent'); // 'polyvalent' | 'transaction' | 'gestion' | 'syndic'
  const [checkedQuestions, setCheckedQuestions] = useState(new Set());
  const [copied, setCopied] = useState(false);

  // Questions posées par le jury avec conseils personnalisés à l'école
  const juryQuestions = useMemo(() => [
    {
      id: 'j1',
      question: "Pouvez-vous vous présenter en 2 minutes et expliquer ce qui vous amène vers l'immobilier ?",
      category: "Motivation & Parcours",
      tip: "Structurez votre réponse en 3 temps : 1) Votre parcours scolaire actuel, 2) Le déclic ou l'intérêt pour l'immobilier (contact humain, droit, négociation, stage), 3) Pourquoi ce BTS PI est la suite logique de votre ambition.",
      sampleAnswer: "Actuellement en terminale (ou études supérieures), j'ai toujours eu un fort attrait pour les métiers du contact et du conseil. L'immobilier m'intéresse particulièrement car il combine dimension relationnelle, rigueur juridique et accompagnement des personnes dans des moments charnières de leur vie."
    },
    {
      id: 'j2',
      question: `Pourquoi avoir choisi ${school?.nom || "notre établissement"} à ${school?.ville || "notre ville"} en particulier ?`,
      category: "Connaissance de l'école",
      tip: `Personnalisez votre réponse ! Mentionnez le taux de réussite de l'école (${school?.tauxReussite || 85}%), ${school?.atouts?.[0] ? `leur point fort : « ${school.atouts[0]} »` : 'leur réputation pédagogique'}, et l'ancrage régional de l'établissement.`,
      sampleAnswer: `Votre établissement bénéficie d'une excellente réputation avec un taux de réussite de ${school?.tauxReussite || 85}% au BTS PI. ${school?.atouts?.[0] ? `J'ai également été très sensible à votre atout : ${school.atouts[0]}.` : ''} Votre implantation à ${school?.ville || 'proximité'} et la qualité de vos retours d'anciens étudiants confirment que c'est le cadre idéal pour mon projet.`
    },
    {
      id: 'j3',
      question: "Pourquoi le BTS Professions Immobilières plutôt qu'un BUT GEA, une licence ou une école de commerce ?",
      category: "Projet professionnel",
      tip: "Insistez sur la spécialisation immédiate dès la 1ère année, la polyvalence métier (droit de l'urbanisme, fiscalité, négociation, gestion locative) et l'objectif d'obtenir les cartes professionnelles T (Transaction) et G (Gestion) indispensables pour exercer.",
      sampleAnswer: "Je cherchais une formation concrète et opérationnelle dès le premier jour. Le BTS PI me permet d'acquérir les bases juridiques solides indispensables à la délivrance des cartes professionnelles (loi Hoguet), tout en restant immergé dans les réalités du terrain."
    },
    {
      id: 'j4',
      question: "Parmi les 3 grands pôles du BTS (Transaction, Gestion locative, Syndic de copropriété), lequel vous attire le plus ?",
      category: "Vision métier",
      tip: "Montrez que vous connaissez les 3 domaines et ne réduisez pas l'immobilier à la seule transaction de vente. Expliquez ce qui vous attire dans le pôle choisi.",
      sampleAnswer: specialty === 'gestion'
        ? "La gestion locative m'intéresse particulièrement pour sa dimension récurrente, la relation de confiance à long terme avec les bailleurs et la gestion rigoureuse des baux."
        : specialty === 'syndic'
        ? "Le syndic de copropriété m'attire pour sa complexité technique et humaine : animer des assemblées générales, gérer le budget d'un immeuble et coordonner les travaux."
        : "La transaction me stimule pour le défi commercial et la satisfaction d'aider un acquéreur à trouver le bien idéal, mais je suis très curieux de maîtriser également la gestion et le syndic pour être un professionnel complet."
    },
    {
      id: 'j5',
      question: studyMode === 'alternance'
        ? `Comment comptez-vous gérer le rythme d'alternance (${school?.rythmeAlternance || 'cours et entreprise'}) et où en est votre recherche d'entreprise ?`
        : "Comment envisagez-vous vos périodes de stage en milieu professionnel ?",
      category: studyMode === 'alternance' ? "Alternance & Organisation" : "Stage & Professionnalisation",
      tip: studyMode === 'alternance'
        ? "Prouvez votre proactivité ! Même si vous n'avez pas encore signé, listez les agences démarchées, parlez de votre CV, et mentionnez si vous avez le permis B (atout majeur pour les visites)."
        : "Expliquez les types d'agences ou de cabinets d'administration de biens dans lesquels vous souhaitez réaliser vos stages pour valider vos compétences.",
      sampleAnswer: studyMode === 'alternance'
        ? `J'ai déjà ciblé plusieurs agences immobilières et cabinets à ${school?.ville || 'dans ma région'}. Je suis autonome, organisé et conscient que l'alternance exige une grande rigueur pour concilier les devoirs de l'école et les responsabilités en agence.`
        : "Je prévois d'effectuer mes stages dans deux structures différentes (une agence de transaction et un cabinet d'administration de biens) pour appréhender les deux facettes du métier."
    },
    {
      id: 'j6',
      question: "Quelles sont selon vous les 3 qualités indispensables d'un bon professionnel de l'immobilier ?",
      category: "Compétences & Soft Skills",
      tip: "Citez 3 qualités complémentaires : 1 relationnelle (écoute active/empathie), 1 technique (rigueur juridique), 1 commerciale/mentale (persévérance et honnêteté).",
      sampleAnswer: "1. L'écoute active : comprendre les attentes réelles du client avant de proposer un bien. 2. La rigueur : le droit immobilier ne tolère aucune approximation. 3. La persévérance : savoir rester motivé et réactif face aux imprévus du marché."
    },
    {
      id: 'j7',
      question: "Comment réagiriez-vous face à un client très mécontent ou agressif lors d'un état des lieux ou d'une visite ?",
      category: "Mise en situation",
      tip: "Misez sur le calme, l'écoute sans couper la parole, la reformulation du problème et la recherche d'une solution factuelle basée sur le droit ou le contrat.",
      sampleAnswer: "Je garderais mon calme sans entrer dans le conflit. Je laisserais le client exprimer son mécontentement, prendrais des notes, puis reformulerais factuellement pour lui montrer qu'il a été entendu, avant de proposer une solution concrète conforme aux règles."
    },
    {
      id: 'j8',
      question: "Avez-vous suivi l'actualité immobilière récente (taux d'intérêt, DPE, marché local) ?",
      category: "Culture sectorielle",
      tip: "Montrez que vous lisez la presse spécialisée (Le Figaro Immo, Journal de l'Agence) : mentionnez l'évolution des taux de crédit bancaire, les règles du DPE (passoires thermiques) ou le dynamisme des loyers.",
      sampleAnswer: "Oui, je suis de près l'impact de la baisse récente des taux de crédit qui redonne du pouvoir d'achat aux acquéreurs, ainsi que les enjeux de la rénovation énergétique liée aux étiquettes DPE (interdiction de location des logements classés G)."
    }
  ], [school, studyMode, specialty]);

  // Questions pertinentes à poser à l'école par le candidat
  const candidateQuestions = useMemo(() => [
    {
      id: 'c1',
      question: "Quels types d'entreprises immobilières accueillent principalement vos étudiants (réseaux d'agences, administrateurs de biens, promoteurs) ?",
      category: "Réseau Entreprises",
      whyAsk: "Montre que vous vous projetez déjà dans l'insertion professionnelle et que vous voulez connaître le profil des partenaires de l'école.",
      expectedInsight: "Permet de savoir si l'école est plutôt orientée transaction résidentielle ou gestion/syndic."
    },
    {
      id: 'c2',
      question: "Proposez-vous un forum de recrutement, des job datings ou un coaching personnalisé pour aider les admis à décrocher leur contrat / stage ?",
      category: "Accompagnement",
      whyAsk: "Démontre votre motivation à signer rapidement un contrat et évalue le soutien réel apporté par l'équipe pédagogique.",
      expectedInsight: "Les meilleures écoles disposent d'un chargé de relations entreprises dédié."
    },
    {
      id: 'c3',
      question: "Quels logiciels professionnels immobiliers sont enseignés et pratiqués pendant la formation (ex : logiciels de pige, de transaction ou de syndic) ?",
      category: "Outils & Pédagogie",
      whyAsk: "Prouve que vous avez conscience de l'importance de la digitalisation du métier d'agent ou de gestionnaire immobilier.",
      expectedInsight: "La maîtrise d'un logiciel métier (Pericles, Néo Sphère, Apimo, Krier...) est un énorme accélérateur d'embauche."
    },
    {
      id: 'c4',
      question: "Vos intervenants sont-ils exclusivement des professeurs de l'Éducation Nationale ou également des professionnels en exercice (agents, juristes, géomètres) ?",
      category: "Corps enseignant",
      whyAsk: "Valorise l'importance que vous accordez aux retours d'expérience concrets du terrain.",
      expectedInsight: "Une mixité entre enseignants académiques et experts du secteur offre la meilleure préparation à l'examen et au terrain."
    },
    {
      id: 'c5',
      question: "Quelle est la part d'étudiants qui choisit de s'insérer directement dans l'emploi vs continuer en Licence Pro / Bachelor (Bac+3) ?",
      category: "Poursuite d'études",
      whyAsk: "Témoigne d'une vision à moyen/long terme pour votre carrière dans le secteur immobilier.",
      expectedInsight: "Généralement 40 à 50% poursuivent en Bac+3 (Bachelor immobilier, Licence Pro Droit de l'Immobilier)."
    },
    {
      id: 'c6',
      question: "Comment s'organise le suivi pédagogique entre mon tuteur en entreprise et mon référent au sein de votre école ?",
      category: "Suivi en alternance",
      whyAsk: "Montre que vous tenez à ce que votre expérience professionnelle soit en totale cohérence avec vos cours.",
      expectedInsight: "En moyenne 2 à 3 visites de suivi par an et un carnet de liaison régulier."
    }
  ], []);

  // Questions filtrées
  const displayedQuestions = useMemo(() => {
    if (activeTab === 'jury') return juryQuestions.map(q => ({ ...q, type: 'jury' }));
    if (activeTab === 'candidate') return candidateQuestions.map(q => ({ ...q, type: 'candidate' }));
    return [
      ...juryQuestions.map(q => ({ ...q, type: 'jury' })),
      ...candidateQuestions.map(q => ({ ...q, type: 'candidate' }))
    ];
  }, [activeTab, juryQuestions, candidateQuestions]);

  const toggleCheck = (id) => {
    setCheckedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Générer le texte complet pour copie ou téléchargement
  const fullTextExport = useMemo(() => {
    let out = `FICHE DE PREPARATION A L'ENTRETIEN D'ADMISSION\n`;
    out += `Établissement ciblé : ${school?.nom || 'École BTS PI'} (${school?.ville || ''})\n`;
    out += `Taux de réussite : ${school?.tauxReussite || 85}% | Mode : ${studyMode === 'alternance' ? 'Alternance' : 'Statut scolaire'}\n`;
    out += `Date de préparation : ${new Date().toLocaleDateString('fr-FR')}\n`;
    out += `${'='.repeat(70)}\n\n`;

    out += `PARTIE 1 : QUESTIONS QUE L'ÉCOLE / LE JURY PEUT VOUS POSER\n`;
    out += `${'-'.repeat(70)}\n`;
    juryQuestions.forEach((q, idx) => {
      out += `\n[Q${idx + 1}] ${q.question}\n`;
      out += `Catégorie : ${q.category}\n`;
      out += `💡 Conseil : ${q.tip}\n`;
      out += `Exemple de réponse : "${q.sampleAnswer}"\n`;
    });

    out += `\n\n${'='.repeat(70)}\n`;
    out += `PARTIE 2 : QUESTIONS STRATÉGIQUES À POSER À L'ÉCOLE EN FIN D'ENTRETIEN\n`;
    out += `${'-'.repeat(70)}\n`;
    candidateQuestions.forEach((q, idx) => {
      out += `\n[Q${idx + 1}] ${q.question}\n`;
      out += `Objectif : ${q.whyAsk}\n`;
      out += `Ce que vous apprenez : ${q.expectedInsight}\n`;
    });

    out += `\n\n${'='.repeat(70)}\n`;
    out += `Document généré depuis le Répertoire Officiel BTS Professions Immobilières.\n`;
    return out;
  }, [school, studyMode, juryQuestions, candidateQuestions]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextExport);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([fullTextExport], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Questions_Entretien_${(school?.nom || 'BTS_PI').replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!school) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Container Principal */}
      <div className="bg-[#0b101b] border border-cyan-500/30 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden relative text-slate-100">
        
        {/* En-tête du Modal */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border-b border-cyan-500/20 flex items-start justify-between shrink-0 relative">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                <MessageSquare className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  Préparation aux Entretiens d'Admission & JPO
                </h3>
                <p className="text-xs text-slate-300">
                  Questions ciblées pour <strong className="text-cyan-300">{school.nom}</strong> ({school.ville})
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barre d'options & de personnalisation rapide */}
        <div className="bg-slate-950/60 p-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 font-medium">Votre profil :</span>
            <button
              onClick={() => setStudyMode('alternance')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                studyMode === 'alternance'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              💼 Alternance
            </button>
            <button
              onClick={() => setStudyMode('initial')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                studyMode === 'initial'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              🎓 Statut scolaire (Initiale)
            </button>

            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="polyvalent">Pôle ciblé : Polyvalent</option>
              <option value="transaction">Pôle : Transaction & Vente</option>
              <option value="gestion">Pôle : Gestion locative</option>
              <option value="syndic">Pôle : Syndic de copropriété</option>
            </select>
          </div>

          {/* Onglets Filtres */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Toutes ({juryQuestions.length + candidateQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab('jury')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'jury' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Questions du Jury ({juryQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab('candidate')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'candidate' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              À poser à l'école ({candidateQuestions.length})
            </button>
          </div>
        </div>

        {/* Corps défilable : Liste des Questions */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1 scrollbar-thin">
          
          {/* Note d'introduction pédagogique */}
          <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/20 rounded-xl text-xs text-cyan-200 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong>Conseil de pro pour votre entretien :</strong> Un entretien de BTS PI dure en moyenne 15 à 20 minutes. Le jury cherche avant tout votre <strong>motivation réelle</strong> pour le secteur et votre <strong>capacité relationnelle</strong>. Poser au moins 2 questions en fin d'entretien prouve votre maturité par rapport aux autres candidats !
            </div>
          </div>

          {/* Liste des Cartes Questions */}
          <div className="space-y-3.5">
            {displayedQuestions.map((item, idx) => {
              const isJury = item.type === 'jury';
              const isChecked = checkedQuestions.has(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`cursor-pointer border rounded-xl p-4 transition-all relative ${
                    isChecked
                      ? 'bg-cyan-950/30 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                      : isJury
                      ? 'bg-slate-900/60 border-white/5 hover:border-slate-700'
                      : 'bg-emerald-950/20 border-emerald-500/20 hover:border-emerald-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      
                      {/* Badge catégorie & type */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          isJury 
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {isJury ? '👤 Le jury vous demande' : '🙋‍♂️ Question à poser à l\'école'}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          • {item.category}
                        </span>
                      </div>

                      {/* Libellé de la question */}
                      <h4 className="text-sm sm:text-base font-bold text-white pt-1">
                        « {item.question} »
                      </h4>

                      {/* Contenu spécifique selon le type */}
                      {isJury ? (
                        <div className="mt-2.5 space-y-2 text-xs">
                          <div className="p-3 bg-black/40 border border-white/5 rounded-lg text-slate-300">
                            <span className="font-semibold text-amber-300 flex items-center gap-1 mb-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              Conseil pour répondre avec brio :
                            </span>
                            <p className="text-slate-400 leading-relaxed">{item.tip}</p>
                          </div>
                          <div className="p-2.5 bg-slate-950/60 rounded-lg text-slate-400 italic border-l-2 border-cyan-500">
                            Exemple de réponse : « {item.sampleAnswer} »
                          </div>
                        </div>
                      ) : (
                        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 bg-black/30 border border-white/5 rounded-lg">
                            <span className="font-semibold text-emerald-300 block mb-0.5">Pourquoi poser cette question :</span>
                            <span className="text-slate-400">{item.whyAsk}</span>
                          </div>
                          <div className="p-2.5 bg-black/30 border border-white/5 rounded-lg">
                            <span className="font-semibold text-cyan-300 block mb-0.5">Ce que cela vous apporte :</span>
                            <span className="text-slate-400">{item.expectedInsight}</span>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Case à cocher personnalisée */}
                    <button
                      type="button"
                      className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                        isChecked 
                          ? 'bg-cyan-500 text-slate-950' 
                          : 'bg-white/5 text-slate-500 hover:text-slate-300'
                      }`}
                      title={isChecked ? "Question sélectionnée" : "Ajouter à ma sélection"}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Pied de page du Modal : Actions Export (Copier, Télécharger, Imprimer) */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>{checkedQuestions.size} question(s) cochée(s)</span>
            {checkedQuestions.size > 0 && (
              <button 
                onClick={() => setCheckedQuestions(new Set())}
                className="text-[11px] text-cyan-400 hover:underline"
              >
                (Tout décocher)
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
              title="Copier tout le guide dans le presse-papier"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Copier le guide'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
              title="Télécharger en fichier texte (.txt)"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-md shadow-cyan-500/20"
              title="Imprimer ou enregistrer en PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / PDF</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
