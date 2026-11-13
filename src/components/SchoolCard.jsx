import React from 'react';
import {
  MapPin,
  GraduationCap,
  Star,
  Calendar,
  Bookmark,
  ArrowRight,
  FileEdit,
  ExternalLink,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { PARCOURSUP_SOURCE_URL } from '../data/schoolsData';

export function SchoolCard({
  school,
  onSelectSchool,
  onGenerateLetter,
  onOpenInterviewPrep,
  isFavorite,
  onToggleFavorite
}) {
  const isPublic = school.type.toLowerCase().includes('public');
  const isSousContrat = school.type.toLowerCase().includes('sous contrat');

  return (
    <article
      onClick={() => onSelectSchool(school)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer glass-card glass-card-hover flex flex-col justify-between min-h-[400px]"
    >
      {/* Image de fond lumineuse avec dégradé doux */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={school.image}
          alt={school.nom}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/82 to-[#070b14]/25" />
      </div>

      {/* Bandeau haut épuré : Statut + Favori */}
      <div className="relative z-10 p-5 flex items-start justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/55 backdrop-blur-xl border border-white/[0.14] text-white inline-flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPublic ? 'bg-emerald-400' : isSousContrat ? 'bg-teal-300' : 'bg-sky-400'
              }`}
            />
            {school.type}
          </span>

          {school.alternancePossible && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/45 backdrop-blur-xl border border-white/[0.12] text-slate-200">
              Alternance
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(school.id);
          }}
          className={`p-2.5 rounded-full backdrop-blur-xl transition-all cursor-pointer ${
            isFavorite
              ? 'bg-emerald-400 text-slate-950 shadow-md'
              : 'bg-slate-950/50 text-slate-200 hover:text-white hover:bg-slate-900/70 border border-white/[0.14]'
          }`}
          title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Panneau inférieur en verre dépoli */}
      <div className="relative z-10 p-5 pt-6 flex flex-col justify-end space-y-3.5">
        {/* Localisation & Titre */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{school.ville}</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300/80">{school.academie}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug line-clamp-2">
            {school.nom}
          </h3>
        </div>

        {/* Panneau métriques translucide */}
        <div className="rounded-2xl p-3.5 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] space-y-2.5 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/[0.08]">
            <div>
              <span className="text-[10px] text-slate-400 block">Réussite</span>
              <span className="font-bold text-white text-sm inline-flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                {school.tauxReussite}%
              </span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 block">Avis</span>
              <span className="font-bold text-white text-sm inline-flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                {school.avis.note}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 block">Accès</span>
              <span className="font-bold text-sky-200 text-sm block mt-0.5">
                {school.parcoursup?.surParcoursup ? `${school.parcoursup.tauxAcces}%` : 'Direct'}
              </span>
            </div>
          </div>

          {/* Ligne Parcoursup ou Scolarité */}
          <div className="pt-2 border-t border-white/[0.07] flex items-center justify-between gap-2 text-[11px]">
            {school.parcoursup?.surParcoursup ? (
              <a
                href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-300 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors truncate"
                title="Vérifier la source officielle Open Data Parcoursup"
              >
                <TrendingUp className="w-3 h-3 text-sky-300 shrink-0" />
                <span>{school.parcoursup.demandes.toLocaleString()} vœux</span>
                <span className="text-white/30">•</span>
                <span className="text-emerald-300 font-medium">
                  {school.parcoursup.voeuxPremierePlace ?? 0} choix N°1
                </span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 shrink-0" />
              </a>
            ) : (
              <span className="text-slate-300 truncate">Admission sur dossier & entretien</span>
            )}

            <span className={`shrink-0 font-medium ${isPublic ? 'text-emerald-300' : 'text-slate-300'}`}>
              {isPublic ? 'Gratuit' : school.prix}
            </span>
          </div>
        </div>

        {/* Portes ouvertes discrètes si disponibles */}
        {school.datePortesOuvertes && (
          <div className="flex items-center justify-between gap-2 text-[11px] text-slate-200 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1.5 min-w-0">
              <Calendar className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">JPO : {school.datePortesOuvertes}</span>
            </div>
            {school.sourceJpoUrl && (
              <a
                href={school.sourceJpoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-amber-200 hover:text-white underline shrink-0"
              >
                <span>Source</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>
        )}

        {/* Barre d'actions épurée */}
        <div className="pt-1 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectSchool(school);
            }}
            className="flex-1 py-2.5 px-4 rounded-2xl text-xs font-semibold bg-white/95 hover:bg-white text-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Voir la fiche</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {onOpenInterviewPrep && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenInterviewPrep(school);
              }}
              className="p-2.5 rounded-2xl bg-white/[0.07] hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-white/[0.12] backdrop-blur-md transition-all flex items-center justify-center cursor-pointer"
              title="Préparer mon entretien pour cette école (PDF)"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onGenerateLetter(school);
            }}
            className="p-2.5 rounded-2xl bg-white/[0.07] hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-white/[0.12] backdrop-blur-md transition-all flex items-center justify-center cursor-pointer"
            title="Générer ma lettre de motivation"
          >
            <FileEdit className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
