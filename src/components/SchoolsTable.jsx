import React, { useState } from 'react';
import { 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  MapPin, 
  GraduationCap, 
  FileEdit, 
  ExternalLink, 
  Star, 
  Calendar,
  CheckCircle, 
  XCircle, 
  Bookmark, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { PARCOURSUP_SOURCE_URL, THOTIS_SOURCE_URL } from '../data/schoolsData';

export function SchoolsTable({ 
  schools, 
  onSelectSchool, 
  onGenerateLetter, 
  favorites, 
  onToggleFavorite 
}) {
  const [sortField, setSortField] = useState('parcoursup_demandes');
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' or 'desc'

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'nom' || field === 'type' ? 'asc' : 'desc');
    }
  };

  const sortedSchools = [...schools].sort((a, b) => {
    if (sortField === 'parcoursup_demandes') {
      const aVal = a.parcoursup?.demandes != null ? a.parcoursup.demandes : -1;
      const bVal = b.parcoursup?.demandes != null ? b.parcoursup.demandes : -1;
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }

    if (sortField === 'parcoursup_voeuxPremierePlace') {
      const aVal = a.parcoursup?.voeuxPremierePlace != null ? a.parcoursup.voeuxPremierePlace : -1;
      const bVal = b.parcoursup?.voeuxPremierePlace != null ? b.parcoursup.voeuxPremierePlace : -1;
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }

    if (sortField === 'parcoursup_tauxAcces') {
      const aVal = a.parcoursup?.tauxAcces != null ? a.parcoursup.tauxAcces : 999;
      const bVal = b.parcoursup?.tauxAcces != null ? b.parcoursup.tauxAcces : 999;
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }

    if (sortField === 'classementThotis') {
      const aRank = a.classementThotis != null ? a.classementThotis : 999999;
      const bRank = b.classementThotis != null ? b.classementThotis : 999999;
      return sortDirection === 'asc' ? aRank - bRank : bRank - aRank;
    }

    let aVal = a[sortField];
    let bVal = b[sortField];

    if (sortField === 'avis') {
      aVal = a.avis.note;
      bVal = b.avis.note;
    }

    if (typeof aVal === 'string') {
      return sortDirection === 'asc' 
        ? aVal.localeCompare(bVal) 
        : bVal.localeCompare(aVal);
    }

    return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
  });

  const renderSortArrow = (field) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 inline ml-1 opacity-50" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-3.5 h-3.5 text-emerald-400 inline ml-1" />
      : <ArrowDown className="w-3.5 h-3.5 text-emerald-400 inline ml-1" />;
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl glass-surface">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-white/[0.03] backdrop-blur-md text-xs uppercase tracking-wider text-slate-400 border-b border-white/[0.08] font-semibold select-none sticky top-0 z-20">
            <tr>
              <th className="py-4 px-4 w-12 text-center">Fav</th>
              <th 
                className="py-4 px-4 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('nom')}
              >
                École & Localisation {renderSortArrow('nom')}
              </th>
              <th 
                className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('type')}
              >
                Statut {renderSortArrow('type')}
              </th>
              <th 
                className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('parcoursup_demandes')}
                title="Trier par nombre de vœux formulés (Demandes) sur Parcoursup"
              >
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Parcoursup Open Data (Vœux / 1er Choix)</span>
                  {renderSortArrow('parcoursup_demandes')}
                  <a
                    href={PARCOURSUP_SOURCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors p-0.5 ml-0.5"
                    title="Consulter le portail officiel data.enseignementsup-recherche.gouv.fr (nouvel onglet)"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </th>
              <th 
                className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('tauxReussite')}
              >
                Réussite {renderSortArrow('tauxReussite')}
              </th>
              <th 
                className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('avis')}
              >
                Avis {renderSortArrow('avis')}
              </th>
              <th className="py-4 px-3">
                Alternance & Rythme
              </th>
              <th 
                className="py-4 px-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => handleSort('tauxElearning')}
              >
                E-Learning {renderSortArrow('tauxElearning')}
              </th>
              <th className="py-4 px-3">
                Frais / Prix
              </th>
              <th className="py-4 px-3">
                JPO
              </th>
              <th className="py-4 px-4 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {sortedSchools.map((school) => {
              const isPublic = school.type.toLowerCase().includes('public');
              const isFav = favorites.includes(school.id);

              return (
                <tr 
                  key={school.id} 
                  className="hover:bg-slate-800/40 transition-colors duration-150 group"
                >
                  {/* Favorite bookmark */}
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => onToggleFavorite(school.id)}
                      className={`p-2 rounded-xl transition-all ${
                        isFav 
                          ? 'text-emerald-400 bg-emerald-500/15 ring-1 ring-emerald-400/40' 
                          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                      }`}
                      title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-emerald-400' : ''}`} />
                    </button>
                  </td>

                  {/* School name & location */}
                  <td className="py-3 px-4">
                    <div 
                      onClick={() => onSelectSchool(school)}
                      className="cursor-pointer flex items-center gap-3"
                    >
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-700/80 shrink-0">
                        <img 
                          src={school.image} 
                          alt={school.nom} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1 font-heading text-sm sm:text-base">
                          {school.nom}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{school.ville} ({school.codePostal})</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-300">Académie de {school.academie}</span>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Statut (Public / Privé) */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      isPublic 
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {school.type}
                    </span>
                  </td>

                  {/* Parcoursup (Demandes / 1er Choix / Pris) */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    {school.parcoursup?.surParcoursup ? (
                      <a
                        href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex flex-col gap-1 font-bold text-cyan-300 text-xs px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-colors group/cell"
                        title={`Données officielles Ministère Open Data (Code UAI: ${school.parcoursup.uai || 'N/C'})\n${school.parcoursup.demandes.toLocaleString()} vœux totaux • ${school.parcoursup.voeuxPremierePlace ?? 0} admis en 1er choix (J1)\nCapacité : ${school.parcoursup.places} places • Taux d'accès : ${school.parcoursup.tauxAcces}%\nCliquer pour vérifier la source officielle`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{school.parcoursup.demandes.toLocaleString()} vœux</span>
                          <span className="text-[10px] text-cyan-400 font-extrabold bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                            {school.parcoursup.tauxAcces}% accès
                          </span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover/cell:opacity-100 transition-opacity ml-auto" />
                        </div>
                        <div className="text-[10px] font-semibold text-amber-300/95 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>{school.parcoursup.voeuxPremierePlace ?? 0} en 1er choix (J1)</span>
                          <span className="text-slate-500 font-normal">({school.parcoursup.pris} admis)</span>
                        </div>
                      </a>
                    ) : (
                      <a 
                        href={school.parcoursup?.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-medium px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-300 hover:border-slate-700 transition-colors"
                        title="Admission directe sur dossier et entretien (hors Parcoursup) - Vérifier sur l'annuaire Open Data"
                      >
                        <span>⚡ Admission directe</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-40" />
                      </a>
                    )}
                  </td>

                  {/* Taux Réussite */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 font-black text-white font-heading">
                        <GraduationCap className="w-4 h-4 text-emerald-400" />
                        <span>{school.tauxReussite}%</span>
                      </div>
                      <div className="w-20 bg-slate-800 rounded-full h-1 overflow-hidden">
                        <div 
                          className="bg-emerald-400 h-1 rounded-full" 
                          style={{ width: `${Math.min(school.tauxReussite, 100)}%` }} 
                        />
                      </div>
                    </div>
                  </td>

                  {/* Avis */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-1 font-bold text-slate-200">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{school.avis.note}</span>
                      <span className="text-[10px] text-slate-500 font-normal">({school.avis.totalAvis})</span>
                    </div>
                  </td>

                  {/* Alternance */}
                  <td className="py-3 px-3">
                    <div className="max-w-[180px]">
                      {school.alternancePossible ? (
                        <span className="text-xs font-semibold text-cyan-300 flex items-start gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2 text-[11px] text-slate-300">
                            {school.rythmeAlternance}
                          </span>
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5 text-slate-500" />
                          Initial uniquement
                        </span>
                      )}
                    </div>
                  </td>

                  {/* E-learning */}
                  <td className="py-3 px-3 whitespace-nowrap text-xs text-slate-300 font-medium">
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                      {school.tauxElearning}%
                    </span>
                  </td>

                  {/* Prix */}
                  <td className="py-3 px-3 text-xs">
                    <span className={isPublic ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                      {school.prix}
                    </span>
                  </td>

                  {/* JPO */}
                  <td className="py-3 px-3 text-xs">
                    {school.datePortesOuvertes ? (
                      <div className="flex flex-col gap-1 max-w-[190px]">
                        <span className="text-amber-200/90 font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-amber-400 shrink-0" />
                          <span className="line-clamp-2">{school.datePortesOuvertes}</span>
                        </span>
                        {school.sourceJpoUrl && (
                          <a
                            href={school.sourceJpoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-white underline underline-offset-2 ml-4 w-fit font-semibold"
                            title={`Vérifier la JPO sur : ${school.sourceJpoNom || 'Lien source'}`}
                          >
                            <span>Lien source</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <span className="text-slate-600 italic">Non communiquée</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => onSelectSchool(school)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all flex items-center gap-1 shadow-sm"
                        title="Voir la fiche détaillée"
                      >
                        <span>Fiche</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onGenerateLetter(school)}
                        className="p-2 rounded-xl text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 transition-all shadow-sm"
                        title="Générer une lettre de motivation ciblée"
                      >
                        <FileEdit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
