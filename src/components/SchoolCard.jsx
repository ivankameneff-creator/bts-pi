import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  Star, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Bookmark, 
  ArrowRight, 
  FileEdit, 
  Clock, 
  Euro, 
  ExternalLink, 
  TrendingUp, 
  Award,
  Flame
} from 'lucide-react';
import { PARCOURSUP_SOURCE_URL } from '../data/schoolsData';

export function SchoolCard({ 
  school, 
  onSelectSchool, 
  onGenerateLetter, 
  isFavorite, 
  onToggleFavorite 
}) {
  const isPublic = school.type.toLowerCase().includes('public');
  const isSousContrat = school.type.toLowerCase().includes('sous contrat');

  // 21st.dev Magic Spotlight interaction state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isHighDemand = school.parcoursup?.demandes > 1000;
  const isTopSuccess = school.tauxReussite >= 90;

  return (
    <div 
      className="group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-800/80 bg-slate-900/95 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 hover:-translate-y-1.5 flex flex-col justify-between"
      style={{ minHeight: '410px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectSchool(school)}
    >
      {/* 21st.dev Magic Spotlight Radial Overlay */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.16), transparent 75%)`
          }}
        />
      )}

      {/* Background Cinematic Image with multi-layer darkened gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={school.image} 
          alt={school.nom} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Layered gradients to guarantee maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/85 to-[#060a12]/40" />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Top Header Layer: Badges & Favorite Action */}
      <div className="relative z-10 p-5 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Public / Privé badge */}
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border ${
            isPublic 
              ? 'bg-emerald-500/90 text-slate-950 border-emerald-400' 
              : isSousContrat 
                ? 'bg-teal-600/90 text-white border-teal-400'
                : 'bg-indigo-600/90 text-white border-indigo-400'
          }`}>
            {school.type}
          </span>

          {/* High Demand / Top Réussite Highlight Badge */}
          {isHighDemand && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Très demandé</span>
            </span>
          )}

          {/* Parcoursup official data badge */}
          {school.parcoursup?.surParcoursup ? (
            <a
              href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 hover:bg-cyan-500/30 hover:border-cyan-400 transition-colors group/psup"
              title={`Données officielles Ministère Open Data (UAI : ${school.parcoursup.uai || 'N/C'})\n${school.parcoursup.demandes.toLocaleString()} vœux totaux • ${school.parcoursup.voeuxPremierePlace ?? 0} admis en 1er choix (J1)\nCliquer pour vérifier sur data.enseignementsup-recherche.gouv.fr`}
            >
              <TrendingUp className="w-3 h-3 text-cyan-400" />
              <span>{school.parcoursup.demandes.toLocaleString()} vœux</span>
              <span className="text-amber-300 font-extrabold">• {school.parcoursup.voeuxPremierePlace ?? 0} en 1er choix</span>
              <ExternalLink className="w-2.5 h-2.5 text-cyan-300 opacity-60 group-hover/psup:opacity-100 transition-opacity" />
            </a>
          ) : (
            <a
              href={school.parcoursup?.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-slate-400 border border-slate-700/70 backdrop-blur-md flex items-center gap-1 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              title="Admission directe sur dossier et entretien (hors Parcoursup) - Vérifier sur l'annuaire Open Data"
            >
              <span>⚡ Admission directe</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40" />
            </a>
          )}

          {/* Alternance badge */}
          {school.alternancePossible && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              Alternance
            </span>
          )}
        </div>

        {/* Favorite toggle button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(school.id);
          }}
          className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ${
            isFavorite 
              ? 'bg-emerald-500 text-slate-950 scale-105 ring-2 ring-emerald-300' 
              : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
          }`}
          title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>
      </div>

      {/* Center & Bottom Information */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end space-y-3.5">
        
        {/* City and Académie */}
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{school.ville}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-medium">Académie de {school.academie}</span>
        </div>

        {/* School Name */}
        <h3 className="text-xl sm:text-2xl font-black text-white font-heading group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
          {school.nom}
        </h3>

        {/* Metrics Grid in Bento Micro-Blocks */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          {/* Taux Réussite */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                Réussite
              </span>
              <span className="text-sm font-black text-white font-heading">{school.tauxReussite}%</span>
            </div>
            {/* Visual micro progress bar */}
            <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-emerald-400 h-1 rounded-full transition-all duration-700" 
                style={{ width: `${Math.min(school.tauxReussite, 100)}%` }}
              />
            </div>
          </div>

          {/* Avis note */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Avis
              </span>
              <span className="text-sm font-black text-white font-heading">
                {school.avis.note} <span className="text-[10px] font-normal text-slate-400">/ 5</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-400 truncate">
              {school.avis.totalAvis} avis vérifiés
            </p>
          </div>
        </div>

        {/* Info Box: Rythme & Frais & Taux d'accès */}
        <div className="text-xs text-slate-300 space-y-1.5 bg-[#080d1a]/85 backdrop-blur-md rounded-2xl p-3 border border-slate-800/90">
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-400 flex items-center gap-1 shrink-0 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-slate-500" /> Rythme :
            </span>
            <span className="font-semibold text-slate-200 text-right line-clamp-1">
              {school.rythmeAlternance}
            </span>
          </div>
          
          <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1 shrink-0 text-[11px]">
              <Euro className="w-3.5 h-3.5 text-slate-500" /> Scolarité :
            </span>
            <span className={`font-semibold ${isPublic ? 'text-emerald-400 font-bold' : 'text-slate-200'}`}>
              {school.prix}
            </span>
          </div>

          {school.parcoursup?.surParcoursup && (
            <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80">
              <a
                href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 shrink-0 text-[11px]"
                title={`Vérifier la fiche source Open Data (UAI : ${school.parcoursup.uai || 'N/C'})`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open Data :</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
              <div className="flex items-center gap-1.5 text-right text-xs">
                <span className="font-bold text-cyan-300">
                  {school.parcoursup.tauxAcces}% accès
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-bold text-amber-300 text-[11px]" title="Candidats admis dès le 1er jour ayant validé ce vœu en choix prioritaire N°1">
                  {school.parcoursup.voeuxPremierePlace ?? 0} en 1er choix
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Date JPO if available */}
        {school.datePortesOuvertes && (
          <div className="flex items-center justify-between gap-2 text-xs text-amber-300/90 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-2 min-w-0">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">JPO : {school.datePortesOuvertes}</span>
            </div>
            {school.sourceJpoUrl && (
              <a
                href={school.sourceJpoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={`Vérifier la date JPO sur la source officielle : ${school.sourceJpoNom || 'Lien officiel'}`}
                className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-white underline underline-offset-2 shrink-0 ml-1 font-bold"
              >
                <span>Source</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>
        )}

        {/* Actions Button Bar */}
        <div className="pt-2 flex items-center gap-2">
          {/* Main CTA */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onSelectSchool(school);
            }}
            className="flex-1 py-3 px-4 rounded-2xl text-xs font-bold bg-white text-slate-950 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-300 group-hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-black/40"
          >
            <span>Fiche École Détaillée</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Quick Letter Generator */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onGenerateLetter(school);
            }}
            className="p-3 rounded-2xl bg-slate-800/90 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-slate-700/80 transition-all flex items-center justify-center shadow-lg"
            title="Générer une lettre de motivation ciblée pour cette école"
          >
            <FileEdit className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
