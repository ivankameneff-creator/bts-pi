import React from 'react';
import { X, BookOpen, Key, Building2, TrendingUp, Award, CheckCircle2, Briefcase, ExternalLink } from 'lucide-react';
import { THOTIS_SOURCE_URL } from '../data/schoolsData';

export function BtsPiGuideModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                Tout savoir sur le BTS Professions Immobilières (BTS PI)
              </h3>
              <p className="text-xs text-slate-400">
                Diplôme d'État Bac+2 (Niveau 5) • Délivrance directe des cartes professionnelles T & G
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed scrollbar-thin">
          
          {/* Card Highlight: Cartes Professionnelles */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <Key className="w-5 h-5" />
              <span>Le Graal du diplôme : Les Cartes Professionnelles T et G</span>
            </div>
            <p className="text-xs text-slate-300">
              Conformément à la Loi Hoguet, le titulaire du BTS Professions Immobilières peut demander directement auprès de la CCI :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">Carte T (Transaction)</span>
                Permet d'ouvrir sa propre agence immobilière, d'acheter, vendre ou louer des biens pour le compte de tiers.
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">Carte G (Gestion) & S (Syndic)</span>
                Permet d'administrer des biens en gestion locative ou d'exercer l'activité de syndic de copropriété.
              </div>
            </div>
          </div>

          {/* Débouchés Métiers */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              Quels métiers après un BTS PI ?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-emerald-400 mb-1">Négociateur Immobilier</p>
                <p className="text-slate-400 leading-normal">
                  Prospection, estimation de valeur, mandats de vente, visites, négociation et signature de compromis.
                </p>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-indigo-400 mb-1">Gestionnaire Locatif</p>
                <p className="text-slate-400 leading-normal">
                  Rédaction des baux, états des lieux, encaissement des loyers, gestion des travaux et relations propriétaires.
                </p>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <p className="font-bold text-amber-400 mb-1">Gestionnaire de Copropriété</p>
                <p className="text-slate-400 leading-normal">
                  Animation des assemblées générales, vote des budgets, entretien technique des immeubles et comptabilité de copro.
                </p>
              </div>
            </div>
          </div>

          {/* Salaires & Insertion */}
          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Rémunération & Perspectives
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Salaire débutant :</strong> Fixe + commissions variables. Entre 26 000 € et 38 000 € brut/an dès la sortie d'école, avec de très fortes primes selon le volume de transactions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Taux d'insertion professionnelle :</strong> Près de 90% des diplômés en alternance décrochent un CDI dans les 6 mois.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Poursuite d'études :</strong> Possibilité de poursuivre en Licence Pro Immobilier, Bachelor en Property Management ou Master d'Urbanisme / Droit Notarial.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={THOTIS_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-300 hover:text-amber-200 inline-flex items-center gap-1.5 font-semibold bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl transition-colors"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Voir le classement officiel Thotis Media</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors self-end sm:self-auto"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
}
