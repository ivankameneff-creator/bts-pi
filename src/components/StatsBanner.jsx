import React from 'react';
import { Building2, GraduationCap, Users, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

export function StatsBanner({ totalSchools, publicCount, privateCount, averagePassRate }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 my-8">
      {/* Metric 1: Total Schools */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Répertoire National</span>
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">{totalSchools}</p>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Établissements certifiés</span>
          </div>
        </div>
      </div>

      {/* Metric 2: Average Pass Rate */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-teal-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/20 transition-all" />
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Taux Réussite Moyen</span>
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">{averagePassRate}%</p>
            <span className="text-[11px] font-bold text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">
              National
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-500 to-emerald-400 h-1.5 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(averagePassRate, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Metric 3: Public vs Private distribution */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Statuts Écoles</span>
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
            <Users className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">{publicCount}</span>
            <span className="text-xs text-slate-500 font-bold uppercase">Public</span>
            <span className="text-slate-600 font-light mx-1">/</span>
            <span className="text-2xl sm:text-3xl font-black text-indigo-400 font-heading">{privateCount}</span>
            <span className="text-xs text-slate-500 font-bold uppercase">Privé</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Gratuit en public & alternance
          </p>
        </div>
      </div>

      {/* Metric 4: Diplôme d'État */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Titre & Reconnaissance</span>
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">Bac+2</p>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-amber-300 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>RNCP Niveau 5 • Cartes T & G</span>
          </div>
        </div>
      </div>
    </div>
  );
}
