import React from 'react';
import { Building2, GraduationCap, Users, ShieldCheck } from 'lucide-react';

export function StatsBanner({ totalSchools, publicCount, privateCount, averagePassRate }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-8">
      {/* Metric 1 */}
      <div className="glass-subtle rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-medium text-slate-400">Répertoire national</span>
          <Building2 className="w-4 h-4 text-emerald-300 shrink-0" />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{totalSchools}</p>
          <p className="text-[11px] text-slate-400 mt-1">Établissements vérifiés</p>
        </div>
      </div>

      {/* Metric 2 */}
      <div className="glass-subtle rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-medium text-slate-400">Réussite moyenne</span>
          <GraduationCap className="w-4 h-4 text-teal-300 shrink-0" />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{averagePassRate}%</p>
          <div className="w-full bg-white/[0.08] rounded-full h-1 mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-teal-300 h-1 rounded-full"
              style={{ width: `${Math.min(averagePassRate, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Metric 3 */}
      <div className="glass-subtle rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-medium text-slate-400">Répartition statuts</span>
          <Users className="w-4 h-4 text-sky-300 shrink-0" />
        </div>
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold text-white">{publicCount}</span>
            <span className="text-[11px] text-slate-400">public</span>
            <span className="text-slate-600 mx-0.5">/</span>
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">{privateCount}</span>
            <span className="text-[11px] text-slate-400">privé</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Gratuit en public & alternance</p>
        </div>
      </div>

      {/* Metric 4 */}
      <div className="glass-subtle rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all hover:bg-white/[0.05]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-medium text-slate-400">Diplôme d'État</span>
          <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Bac+2</p>
          <p className="text-[11px] text-slate-400 mt-1">RNCP Niveau 5 • Cartes T & G</p>
        </div>
      </div>
    </div>
  );
}
