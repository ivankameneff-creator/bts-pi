import React, { useState } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  GraduationCap, 
  Users, 
  Award, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  FileText, 
  Flame, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Percent,
  CalendarCheck,
  Compass
} from 'lucide-react';
import { PARCOURSUP_SOURCE_URL } from '../data/schoolsData';

export function ParcoursupBilanCard({ school }) {
  const [showMethodology, setShowMethodology] = useState(false);
  const psup = school?.parcoursup;

  // CAS 1 : ÉCOLE HORS PARCOURSUP (Admission directe / Hors contrat / CFA)
  if (!psup?.surParcoursup) {
    return (
      <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-indigo-950/30 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Admission Directe (Hors Parcoursup)</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Procédure libre
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Cet établissement recrute ses étudiants en BTS PI en dehors du calendrier national Parcoursup.
              </p>
            </div>
          </div>
          {school.contacts?.siteWeb && (
            <a
              href={school.contacts.siteWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 transition-colors"
            >
              <span>Candidater sur le site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <div className="text-xs text-indigo-300 font-semibold mb-1 flex items-center gap-1.5">
              <CalendarCheck className="w-4 h-4" />
              <span>Candidatures toute l'année</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inscriptions ouvertes de janvier à septembre sans les contraintes de dates de Parcoursup.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <div className="text-xs text-emerald-300 font-semibold mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sélection sur dossier & entretien</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Évaluation personnalisée de la motivation et du projet professionnel dans l'immobilier.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <div className="text-xs text-amber-300 font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Accompagnement alternance</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Placement et coaching recherche d'entreprise partenaire pour le contrat d'apprentissage.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // CAS 2 : ÉCOLE SUR PARCOURSUP
  const tauxAcces = psup.tauxAcces ?? 0;
  const pression = psup.pressionCandidats || (psup.places > 0 ? (psup.demandes / psup.places).toFixed(1) : null);
  
  // Badge de sélectivité
  let selectiviteConfig = {
    label: 'Accessible',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    desc: 'La majorité des candidats obtiennent une proposition'
  };
  if (tauxAcces < 25) {
    selectiviteConfig = {
      label: 'Très Sélectif',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      desc: 'Forte concurrence, sélection rigoureuse des dossiers'
    };
  } else if (tauxAcces < 50) {
    selectiviteConfig = {
      label: 'Sélectif',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      desc: 'Sélection modérée, profil académique solide recommandé'
    };
  }

  const openDataLink = psup.openDataUrl || psup.openDataSearchUrl || PARCOURSUP_SOURCE_URL;
  const profilBac = psup.profilBac || {};
  const mentions = psup.mentions || {};
  const diversite = psup.diversite || {};

  // Calcul du total des pourcentages bac pour la barre segmentée
  const pctGeneral = profilBac.general?.pct || 0;
  const pctTechno = profilBac.techno?.pct || 0;
  const pctPro = profilBac.pro?.pct || 0;
  const hasBacData = pctGeneral > 0 || pctTechno > 0 || pctPro > 0;

  return (
    <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/20 border border-cyan-500/20 rounded-2xl p-5 sm:p-6 relative overflow-hidden backdrop-blur-sm space-y-6">
      
      {/* Halo d'ambiance */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* En-tête : Titre, UAI, et Boutons vers sources officielles */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <BarChart3 className="w-3.5 h-3.5" />
              Fiche Bilan Parcoursup
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
              Session {psup.session || '2024'}
            </span>
            {psup.uai && (
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                UAI : <strong className="text-white">{psup.uai}</strong>
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400">
            Statistiques officielles certifiées par le Ministère de l'Enseignement Supérieur (MESR).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {psup.parcoursupUrl && (
            <a
              href={psup.parcoursupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-200 border border-cyan-500/30 transition-colors shadow-sm"
              title="Voir la fiche officielle de formation sur le portail Parcoursup"
            >
              <span>Fiche Parcoursup</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={openDataLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
            title="Consulter les données brutes sur l'Open Data du Ministère"
          >
            <span>Open Data MESR</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* KPI 1 : Chiffres clés en 4 cartes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Taux d'accès & Badge sélectivité */}
        <div className="bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 rounded-xl p-3.5 transition-all">
          <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center justify-between">
            <span>Taux d'accès</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${selectiviteConfig.bg} ${selectiviteConfig.color} border ${selectiviteConfig.border}`}>
              {selectiviteConfig.label}
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-white">{tauxAcces}%</span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">
            {selectiviteConfig.desc}
          </span>
        </div>

        {/* Pression & Vœux */}
        <div className="bg-white/[0.03] border border-white/5 hover:border-amber-500/30 rounded-xl p-3.5 transition-all">
          <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center justify-between">
            <span>Tension / Concurrence</span>
            <Flame className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-amber-300">
              {pression ? `${pression}` : 'N/C'}
            </span>
            <span className="text-xs text-slate-400">candidats / place</span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">
            <strong className="text-slate-200">{psup.demandes?.toLocaleString()}</strong> vœux pour <strong className="text-slate-200">{psup.places}</strong> places
          </span>
        </div>

        {/* Rang du dernier appelé (Liste d'attente) */}
        <div className="bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 rounded-xl p-3.5 transition-all">
          <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center justify-between">
            <span>Liste d'attente</span>
            <Users className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">
              {psup.rangDernierAppele ? `N° ${psup.rangDernierAppele}` : 'N/C'}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">
            Rang du dernier appelé {psup.nbCandidatsClasses ? `sur ${psup.nbCandidatsClasses} classés` : ''}
          </span>
        </div>

        {/* Admis J1 (1er choix) & Total admis */}
        <div className="bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 rounded-xl p-3.5 transition-all">
          <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center justify-between">
            <span>Admis validés</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-indigo-300">{psup.pris}</span>
            <span className="text-xs text-slate-400">étudiants intégrés</span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1">
            {psup.voeuxPremierePlace != null ? (
              <><strong className="text-indigo-200">{psup.voeuxPremierePlace}</strong> admis dès le Jour 1 ({psup.pctAdmisDebutPP || 0}%)</>
            ) : (
              `${psup.totalPropositions || psup.pris} propositions faites`
            )}
          </span>
        </div>
      </div>

      {/* SECTION 2 : REPARTITION DES ADMIS PAR TYPE DE BACCALAUREAT */}
      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs sm:text-sm font-bold text-white">Profil des Admis par Baccalauréat</h4>
          </div>
          <span className="text-[11px] text-slate-400">
            Qui a le plus de chances d'intégrer ce BTS PI ?
          </span>
        </div>

        {hasBacData ? (
          <>
            {/* Barre de répartition segmentée */}
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
              {pctTechno > 0 && (
                <div 
                  style={{ width: `${pctTechno}%` }} 
                  className="bg-cyan-500 hover:opacity-90 transition-opacity" 
                  title={`Bac Techno (STMG...) : ${pctTechno}%`} 
                />
              )}
              {pctGeneral > 0 && (
                <div 
                  style={{ width: `${pctGeneral}%` }} 
                  className="bg-emerald-500 hover:opacity-90 transition-opacity" 
                  title={`Bac Général : ${pctGeneral}%`} 
                />
              )}
              {pctPro > 0 && (
                <div 
                  style={{ width: `${pctPro}%` }} 
                  className="bg-amber-500 hover:opacity-90 transition-opacity" 
                  title={`Bac Professionnel : ${pctPro}%`} 
                />
              )}
            </div>

            {/* Détails par bac en 3 cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* Bac Technologique */}
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-300">Bac Techno (STMG...)</span>
                  <span className="text-xs font-bold text-white">{pctTechno}%</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between text-[11px] text-slate-400">
                  <span>{profilBac.techno?.admis ?? 0} admis</span>
                  {profilBac.techno?.tauxAcces != null && (
                    <span className="text-cyan-400 font-medium">Taux d'accès : {profilBac.techno.tauxAcces}%</span>
                  )}
                </div>
              </div>

              {/* Bac Général */}
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-300">Bac Général</span>
                  <span className="text-xs font-bold text-white">{pctGeneral}%</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between text-[11px] text-slate-400">
                  <span>{profilBac.general?.admis ?? 0} admis</span>
                  {profilBac.general?.tauxAcces != null && (
                    <span className="text-emerald-400 font-medium">Taux d'accès : {profilBac.general.tauxAcces}%</span>
                  )}
                </div>
              </div>

              {/* Bac Professionnel */}
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-300">Bac Professionnel</span>
                  <span className="text-xs font-bold text-white">{pctPro}%</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between text-[11px] text-slate-400">
                  <span>{profilBac.pro?.admis ?? 0} admis</span>
                  {profilBac.pro?.tauxAcces != null && (
                    <span className="text-amber-400 font-medium">Taux d'accès : {profilBac.pro.tauxAcces}%</span>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-xs text-slate-500 italic py-2">
            Données de répartition par filière de baccalauréat non renseignées ou promotion restreinte.
          </p>
        )}
      </div>

      {/* SECTION 3 : MENTIONS AU BAC & DIVERSITE (2 COLONNES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Mentions au Baccalauréat */}
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs sm:text-sm font-bold text-white">Mentions au Bac des Admis</h4>
            </div>
            <span className="text-[10px] text-slate-400">Niveau académique</span>
          </div>

          <div className="space-y-2 pt-1">
            {/* Mention Très Bien */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-amber-300 font-medium">Très Bien & Félicitations</span>
                <span className="font-bold text-white">{mentions.tresBien ?? 0}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${mentions.tresBien || 0}%` }} className="h-full bg-amber-400 rounded-full" />
              </div>
            </div>

            {/* Mention Bien */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-indigo-300 font-medium">Mention Bien</span>
                <span className="font-bold text-white">{mentions.bien ?? 0}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${mentions.bien || 0}%` }} className="h-full bg-indigo-400 rounded-full" />
              </div>
            </div>

            {/* Mention Assez Bien */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-cyan-300 font-medium">Mention Assez Bien</span>
                <span className="font-bold text-white">{mentions.assezBien ?? 0}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${mentions.assezBien || 0}%` }} className="h-full bg-cyan-400 rounded-full" />
              </div>
            </div>

            {/* Sans Mention */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400 font-medium">Sans mention</span>
                <span className="font-bold text-slate-300">{mentions.sansMention ?? 0}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${mentions.sansMention || 0}%` }} className="h-full bg-slate-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Diversité, Boursiers & Territoire */}
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs sm:text-sm font-bold text-white">Ouverture & Profil de Promotion</h4>
            </div>
            <span className="text-[10px] text-slate-400">Origine & inclusion</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
              <span className="text-[10px] text-slate-400 block">Boursiers du secondaire</span>
              <span className="text-lg font-bold text-emerald-400">
                {diversite.pctBoursiers != null ? `${diversite.pctBoursiers}%` : 'N/C'}
              </span>
              <span className="text-[10px] text-slate-500 block">Égalité des chances</span>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
              <span className="text-[10px] text-slate-400 block">Candidats de l'académie</span>
              <span className="text-lg font-bold text-cyan-300">
                {diversite.pctAcademieOrigine != null ? `${diversite.pctAcademieOrigine}%` : 'N/C'}
              </span>
              <span className="text-[10px] text-slate-500 block">Recrutement local</span>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
              <span className="text-[10px] text-slate-400 block">Part de candidates</span>
              <span className="text-lg font-bold text-pink-300">
                {diversite.pctFemmes != null ? `${diversite.pctFemmes}%` : 'N/C'}
              </span>
              <span className="text-[10px] text-slate-500 block">Féminisation promo</span>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
              <span className="text-[10px] text-slate-400 block">Néo-bacheliers</span>
              <span className="text-lg font-bold text-indigo-300">
                {diversite.pctNeoBacheliers != null ? `${diversite.pctNeoBacheliers}%` : 'N/C'}
              </span>
              <span className="text-[10px] text-slate-500 block">Bacheliers de l'année</span>
            </div>
          </div>
        </div>

      </div>

      {/* ACCORDEON METHODOLOGIE OFFICIELLE MESR */}
      <div className="pt-2 border-t border-white/5">
        <button
          type="button"
          onClick={() => setShowMethodology(!showMethodology)}
          className="w-full flex items-center justify-between text-left text-xs text-slate-400 hover:text-slate-300 py-1 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <strong className="text-slate-300">Comprendre les indicateurs Open Data :</strong> taux d'accès, rang du dernier appelé, vœux en 1ère place
          </span>
          {showMethodology ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showMethodology && (
          <div className="mt-3 p-3.5 bg-black/40 border border-white/5 rounded-xl text-xs text-slate-400 space-y-2 leading-relaxed animate-in fade-in duration-200">
            <p>
              • <strong className="text-white">Taux d'accès</strong> : Proportion de candidats ayant reçu une proposition d'admission rapportée au nombre total de vœux confirmés. Plus le taux est bas, plus la formation est sélective.
            </p>
            <p>
              • <strong className="text-white">Rang du dernier appelé</strong> : Indique jusqu'où l'établissement est descendu dans son classement des candidatures lors de la phase principale. Si une formation a classé 300 candidats et que le dernier appelé est N° 120, la liste d'attente s'est arrêtée au rang 120.
            </p>
            <p>
              • <strong className="text-white">Vœux en 1ère place / Admis J1</strong> : Sur Parcoursup, les candidats ne hiérarchisent pas numériquement leurs vœux lors de la saisie. Le Ministère mesure la priorité réelle accordée à la formation par le nombre de candidats ayant accepté immédiatement leur proposition dès le premier jour de la phase principale ({psup.voeuxPremierePlace ?? 0} étudiants), sans attendre d'autres vœux en attente.
            </p>
            <p>
              • <strong className="text-white">Source officielle</strong> : Données publiques ouvertes sous licence Etalab 2.0 produites par le Ministère de l'Enseignement Supérieur et de la Recherche (MESR). Code UAI : {psup.uai}.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
