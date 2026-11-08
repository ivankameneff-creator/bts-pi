import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, FileEdit, GraduationCap, MapPin, Star } from 'lucide-react';

export function FavoritesModal({ 
  favorites, 
  schools, 
  onClose, 
  onSelectSchool, 
  onGenerateLetter, 
  onToggleFavorite,
  onClearFavorites
}) {
  const favoriteSchools = schools.filter(s => favorites.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                Mes Écoles Favorites ({favoriteSchools.length})
              </h3>
              <p className="text-xs text-slate-400">
                Votre sélection d'établissements pour vos vœux Parcoursup ou candidatures directes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {favoriteSchools.length > 0 && (
              <button
                onClick={onClearFavorites}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Vider la liste
              </button>
            )}
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 max-h-[600px]">
          {favoriteSchools.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-12 h-12 text-slate-600 mx-auto opacity-40" />
              <p className="text-slate-300 font-semibold text-base">Aucune école dans vos favoris pour le moment</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Cliquez sur l'icône de signet sur une carte ou dans le tableau pour ajouter une école à vos favoris.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favoriteSchools.map(school => (
                <div 
                  key={school.id}
                  className="bg-slate-950/60 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between space-y-3 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={school.image} 
                      alt={school.nom} 
                      className="w-16 h-16 rounded-xl object-cover border border-slate-700 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        {school.type}
                      </span>
                      <h4 className="font-bold text-white text-sm mt-1 line-clamp-1">{school.nom}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {school.ville} ({school.academie})
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 bg-slate-900 rounded-xl border border-slate-800/80">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">Thotis</p>
                      <p className="font-bold text-amber-300">
                        {school.classementThotis ? `#${school.classementThotis}` : <span className="text-slate-500 text-[11px] font-normal">N/C</span>}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">Réussite</p>
                      <p className="font-bold text-emerald-400">{school.tauxReussite}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">Note</p>
                      <p className="font-bold text-white">{school.avis.note} ★</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectSchool(school);
                      }}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Voir la fiche</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onGenerateLetter(school);
                      }}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 transition-colors"
                      title="Générer lettre de motivation"
                    >
                      <FileEdit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onToggleFavorite(school.id)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-rose-400 transition-colors"
                      title="Retirer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
