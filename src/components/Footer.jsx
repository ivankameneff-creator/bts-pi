import React from 'react';
import { Building2, Heart, Shield, Award, ExternalLink, TrendingUp } from 'lucide-react';
import { PARCOURSUP_SOURCE_URL, THOTIS_SOURCE_URL } from '../data/schoolsData';

export function Footer({ onOpenGuide, setActiveView, onSelectAcademy }) {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-white/[0.015] backdrop-blur-2xl text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base text-white">
                BTS PI <span className="text-emerald-400">France</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Le premier portail indépendant d'orientation et de comparaison pour le BTS Professions Immobilières en France.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h5 className="font-bold text-white mb-3 text-sm">Navigation Rapide</h5>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Carte interactive par académie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('cards'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Grandes fiches des écoles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('table'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tableau comparatif & filtres
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('interview'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-300 transition-colors text-emerald-300/90 font-medium"
                >
                  Préparation de mon entretien école (PDF)
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenGuide}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Guide complet du BTS PI & Débouchés
                </button>
              </li>
            </ul>
          </div>

          {/* Académies populaires */}
          <div>
            <h5 className="font-bold text-white mb-3 text-sm">Principales Académies</h5>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { setActiveView('cards'); onSelectAcademy('Paris'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  BTS PI Académie de Paris (75)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('cards'); onSelectAcademy('Lyon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  BTS PI Académie de Lyon (69)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('cards'); onSelectAcademy('Bordeaux'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  BTS PI Académie de Bordeaux (33)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('cards'); onSelectAcademy('Aix-Marseille'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  BTS PI Marseille & PACA (13)
                </button>
              </li>
            </ul>
          </div>

          {/* Info légale & certification */}
          <div className="space-y-2">
            <h5 className="font-bold text-white mb-3 text-sm">Diplôme & Réglementation</h5>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Le Brevet de Technicien Supérieur Professions Immobilières est un diplôme national délivré par le Ministère de l'Enseignement Supérieur et de la Recherche. Donnant droit de plein droit à l'obtention des cartes professionnelles de transaction (T) et de gestion immobilière (G).
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 BTS PI France — Données officielles issues du{' '}
            <a 
              href={PARCOURSUP_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1 font-semibold"
              title="Consulter le portail Open Data Parcoursup du Ministère de l'Enseignement Supérieur"
            >
              <span>Portail Open Data Parcoursup (Demandes & Pris)</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>{' '}
            et des rectorats académiques.
          </p>
          <p className="flex items-center gap-1">
            Conçu pour l'orientation et l'alternance immobilière
          </p>
        </div>

      </div>
    </footer>
  );
}
