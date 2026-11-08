import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  Sparkles, 
  FileText, 
  User, 
  Briefcase, 
  Building, 
  GraduationCap,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function CoverLetterModal({ school, onClose }) {
  const [candidateName, setCandidateName] = useState('Alexandre Martin');
  const [candidateEmail, setCandidateEmail] = useState('alexandre.martin@email.fr');
  const [candidatePhone, setCandidatePhone] = useState('06 12 34 56 78');
  const [candidateCity, setCandidateCity] = useState('Paris');
  const [candidateBac, setCandidateBac] = useState('Baccalauréat STMG (Option Mercatique)');
  const [studyMode, setStudyMode] = useState('alternance'); // 'alternance' | 'initial'
  const [specialty, setSpecialty] = useState('transaction'); // 'transaction' | 'gestion' | 'syndic'
  const [keyStrength, setKeyStrength] = useState('commercial'); // 'commercial' | 'juridique' | 'relationnel'
  const [copied, setCopied] = useState(false);
  const [letterText, setLetterText] = useState('');

  // Generate Letter when parameters change
  useEffect(() => {
    if (!school) return;

    const dateToday = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const specialtyLabels = {
      transaction: 'la négociation et la transaction immobilière résidentielle et commerciale',
      gestion: 'la gestion locative de biens immobiliers et le conseil en patrimoine',
      syndic: 'l\'administration de biens et la gestion de syndic de copropriété'
    };

    const strengthParagraphs = {
      commercial: 'Doté d\'une réelle fibre commerciale, d\'un sens aigu de l\'écoute et d\'une grande aisance relationnelle, j\'ai développé une forte motivation pour la découverte des besoins clients, la valorisation des biens et la conclusion de mandats.',
      juridique: 'Particulièrement rigoureux et attentif aux aspects réglementaires, je porte un vif intérêt aux mécanismes juridiques (baux commerciaux, compromis de vente, fiscalité immobilière) qui font la solidité du métier.',
      relationnel: 'Organisé, empathique et réactif, j\'aime établir une relation de confiance durable avec les particuliers comme avec les professionnels pour les accompagner sereinement dans l\'un des projets majeurs de leur vie.'
    };

    const modeText = studyMode === 'alternance' 
      ? `en contrat d'apprentissage selon le rythme de formation dispensé par votre établissement (${school.rythmeAlternance})`
      : 'sous statut scolaire en formation initiale avec périodes de stages en milieu professionnel';

    const alternanceArguments = studyMode === 'alternance'
      ? `Convaincu que l'alternance constitue la voie royale pour assimiler les exigences du secteur, je suis d'ores et déjà activement engagé dans la recherche de mon entreprise d'accueil au sein des agences et cabinets de la région de ${school.ville}. Votre réseau d'entreprises partenaires et vos forums de recrutement représentent pour moi un atout déterminant.`
      : `Le cursus de formation initiale proposé par votre lycée offre un cadre structuré et exigeant, indispensable pour consolider les fondamentaux en droit de l'immobilier, gestion technique et communication professionnelle avant les immersions en stage.`;

    const selectivitySnippet = school.parcoursup?.demandes
      ? ` ainsi que la forte attractivité de votre formation (${school.parcoursup.demandes.toLocaleString()} vœux sur Parcoursup)`
      : school.classementThotis 
        ? ` et votre distinction au classement Thotis (n°${school.classementThotis})`
        : '';

    const generated = `${candidateName}
${candidateEmail} | ${candidatePhone}
${candidateCity}

À l'attention de la Direction pédagogique et du Jury d'admission
${school.nom}
${school.adresse}

Fait à ${candidateCity}, le ${dateToday}

Objet : Candidature à l'admission en BTS Professions Immobilières (Session 2026/2027) - Formation ${studyMode === 'alternance' ? 'en Alternance' : 'Initiale'}

Madame, Monsieur les membres du Jury,

Actuellement en préparation d'un ${candidateBac}, je vous adresse avec un vif enthousiasme mon dossier de candidature afin d'intégrer votre prestigieuse formation au BTS Professions Immobilières (BTS PI) pour la rentrée prochaine, ${modeText}.

Passionné par les dynamiques urbaines, la valorisation du patrimoine et le contact humain, mon projet professionnel est résolument orienté vers ${specialtyLabels[specialty]}. Le BTS Professions Immobilières représente pour moi l'opportunité idéale d'acquérir les compétences techniques indispensables pour l'obtention des cartes professionnelles T (Transaction) et G (Gestion).

Le choix de ${school.nom} s'est imposé comme une évidence. La réputation de votre établissement, confirmée par un taux de réussite de ${school.tauxReussite}%${selectivitySnippet}, témoigne de la qualité de votre encadrement pédagogique et de la proximité de votre corps enseignant avec le monde professionnel. ${school.atouts ? 'J\'ai également été très sensible à vos atouts tels que ' + school.atouts.slice(0, 2).join(' et ') + '.' : ''}

${strengthParagraphs[keyStrength]}

${alternanceArguments}

Intégrer ${school.nom} représente une opportunité unique de m'investir pleinement au sein d'une promotion stimulante et de porter haut les couleurs de votre établissement. Rigoureux, assidu et enthousiaste, je suis prêt à relever ce défi avec toute l'énergie requise.

Dans l'attente d'un échange lors d'un entretien de motivation, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées et respectueuses.

${candidateName}`;

    setLetterText(generated);
  }, [school, candidateName, candidateEmail, candidatePhone, candidateCity, candidateBac, studyMode, specialty, keyStrength]);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([letterText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Lettre_Motivation_BTS_PI_${school.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Lettre de Motivation - BTS PI</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.6; padding: 40px; color: #111; max-width: 800px; margin: auto; }
            p { margin-bottom: 14px; }
            .whitespace { white-space: pre-line; }
          </style>
        </head>
        <body>
          <div class="whitespace">${letterText}</div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (!school) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg sm:text-xl">
                Générateur de Lettre de Motivation Ciblée
              </h3>
              <p className="text-xs text-slate-400">
                Personnalisée pour <span className="text-emerald-400 font-semibold">{school.nom}</span> ({school.ville})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Columns Layout: Customization form on left, Live Letter on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Form Side */}
          <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-950/50 border-r border-slate-800/80 space-y-4 overflow-y-auto scrollbar-thin">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <User className="w-4 h-4" />
              Vos coordonnées & Profil
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Votre Prénom et Nom</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Téléphone</label>
                  <input
                    type="text"
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Votre Ville de résidence</label>
                <input
                  type="text"
                  value={candidateCity}
                  onChange={(e) => setCandidateCity(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Diplôme préparé / Situation</label>
                <select
                  value={candidateBac}
                  onChange={(e) => setCandidateBac(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Baccalauréat Général (SES, Géopolitique, Maths)">Baccalauréat Général</option>
                  <option value="Baccalauréat STMG (Option Mercatique / Gestion)">Baccalauréat STMG</option>
                  <option value="Baccalauréat Professionnel Métiers du Commerce">Baccalauréat Pro Commerce</option>
                  <option value="Étudiant en réorientation universitaire (L1 Droit/Éco)">Réorientation (L1 Droit/Éco)</option>
                  <option value="Reconversion professionnelle vers l'immobilier">Reconversion Professionnelle</option>
                </select>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <label className="block text-slate-400 mb-1 font-medium">Format de formation souhaité</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setStudyMode('alternance')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      studyMode === 'alternance'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    ⚡ Alternance
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudyMode('initial')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      studyMode === 'initial'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    🎓 Statut Scolaire Initial
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Spécialité immobilière préférée</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="transaction">Transaction & Négociation commerciale</option>
                  <option value="gestion">Gestion locative & Conseil de patrimoine</option>
                  <option value="syndic">Syndic de copropriété & Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Votre point fort à valoriser</label>
                <select
                  value={keyStrength}
                  onChange={(e) => setKeyStrength(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="commercial">Fibre commerciale & Esprit de challenge</option>
                  <option value="juridique">Rigueur juridique & Sens de la précision</option>
                  <option value="relationnel">Empathie, écoute active & Contact humain</option>
                </select>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-[11px] text-emerald-300">
              💡 Cette lettre intègre automatiquement le nom de <strong>{school.nom}</strong>, son taux de réussite ({school.tauxReussite}%){school.classementThotis ? `, son classement Thotis (#${school.classementThotis})` : ''} et son rythme de formation.
            </div>
          </div>

          {/* Live Preview Side */}
          <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-900 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Aperçu en direct (Prêt à copier / imprimer)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copié !' : 'Copier'}</span>
                  </button>

                  <button
                    onClick={handleDownloadTxt}
                    className="p-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    title="Télécharger en .TXT"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handlePrint}
                    className="p-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    title="Imprimer / Exporter en PDF"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Styled Paper Container */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner font-mono text-xs sm:text-sm text-slate-300 whitespace-pre-line leading-relaxed max-h-[500px] overflow-y-auto select-all">
                {letterText}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-500">
              Compatible Parcoursup (limite de 1 500 caractères respectée ou lettre libre pour candidature directe en école privée / CFA).
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
