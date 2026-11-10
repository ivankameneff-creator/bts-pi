import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  GraduationCap, 
  Star, 
  Calendar, 
  Award, 
  Clock, 
  Euro, 
  Laptop, 
  CheckCircle2, 
  XCircle, 
  FileEdit, 
  Phone, 
  Mail, 
  Globe, 
  Share2, 
  Bookmark, 
  Download, 
  Building2, 
  ChevronRight, 
  ExternalLink, 
  Info,
  TrendingUp
} from 'lucide-react';
import { THOTIS_SOURCE_URL, PARCOURSUP_SOURCE_URL } from '../data/schoolsData';
import { ParcoursupBilanCard } from './ParcoursupBilanCard';

export function SchoolDetailModal({ 
  school, 
  onClose, 
  onGenerateLetter, 
  isFavorite, 
  onToggleFavorite 
}) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'reviews' | 'contact'
  const [copiedLink, setCopiedLink] = useState(false);

  if (!school) return null;

  const isPublic = school.type.toLowerCase().includes('public');

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Generate .ics calendar event for JPO
  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BTS PI France//JPO Calendar//FR
BEGIN:VEVENT
SUMMARY:Journée Portes Ouvertes - ${school.nom}
DESCRIPTION:Portes ouvertes BTS Professions Immobilières chez ${school.nom}. Adresse: ${school.adresse}
LOCATION:${school.adresse}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `JPO_${school.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Header with Background Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img 
            src={school.image} 
            alt={school.nom} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-950/40" />

          {/* Top Bar Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                isPublic 
                  ? 'bg-emerald-500/90 text-slate-950' 
                  : 'bg-indigo-600/90 text-white'
              }`}>
                {school.type}
              </span>
              {school.parcoursup?.surParcoursup ? (
                <a 
                  href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 hover:bg-cyan-500/30 transition-colors"
                  title="Consulter les données officielles sur data.enseignementsup-recherche.gouv.fr (nouvel onglet)"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>📊 Parcoursup : {school.parcoursup.demandes.toLocaleString()} vœux ({school.parcoursup.voeuxPremierePlace != null ? `${school.parcoursup.voeuxPremierePlace} admis 1er choix` : `${school.parcoursup.pris} admis`})</span>
                  <ExternalLink className="w-3 h-3 text-cyan-300" />
                </a>
              ) : (
                <span 
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md flex items-center gap-1.5"
                  title="Établissement à recrutement direct (hors procédure principale Parcoursup)"
                >
                  <span>⚡ Admission directe (hors Parcoursup)</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(school.id)}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isFavorite 
                    ? 'bg-emerald-500 text-slate-950' 
                    : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 backdrop-blur-md transition-all relative"
                title="Partager le lien"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink && (
                  <span className="absolute -bottom-8 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Copié !
                  </span>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 backdrop-blur-md transition-all"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* School Title in Banner */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span>{school.ville}</span>
              <span>•</span>
              <span>{school.academie}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {school.nom}
            </h2>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-800 bg-slate-950/50 flex items-center gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Vue d'ensemble & Chiffres clés
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'reviews'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Avis & Témoignages
            <span className="px-1.5 py-0.2 rounded-full text-xs bg-slate-800 text-slate-300">
              {school.avis.totalAvis}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3.5 border-b-2 transition-all ${
              activeTab === 'contact'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Contact & Accès
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 scrollbar-thin">
          
          {activeTab === 'overview' && (
            <>
              {/* Primary Key Indicators Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Taux Réussite */}
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Taux de Réussite</span>
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-black text-emerald-400">{school.tauxReussite}%</span>
                    <p className="text-[11px] text-slate-500">Moyenne nationale : 81%</p>
                  </div>
                </div>

                {/* Parcoursup (Demandes / Pris) */}
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between group">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Parcoursup (Demandes / Pris)</span>
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="mt-2">
                    {school.parcoursup?.surParcoursup ? (
                      <>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl sm:text-2xl font-black text-cyan-300">
                            {school.parcoursup.demandes.toLocaleString()}
                          </span>
                          <span className="text-xs font-bold text-slate-400">vœux</span>
                          <a 
                            href={school.parcoursup.openDataUrl || school.parcoursup.openDataSearchUrl || PARCOURSUP_SOURCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 underline font-medium ml-auto"
                            title="Consulter les données officielles sur data.enseignementsup-recherche.gouv.fr (nouvel onglet)"
                          >
                            <span>Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          <span className="font-bold text-emerald-400">{school.parcoursup.pris} admis</span> ({school.parcoursup.voeuxPremierePlace != null ? <span className="text-amber-300 font-semibold">{school.parcoursup.voeuxPremierePlace} en 1er choix</span> : `${school.parcoursup.places} places`}) • {school.parcoursup.tauxAcces}% accès
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-base sm:text-lg font-bold text-slate-300">Admission directe</span>
                          <a 
                            href={school.parcoursup?.openDataUrl || PARCOURSUP_SOURCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 underline font-medium ml-auto"
                            title="Consulter le portail officiel data.enseignementsup-recherche.gouv.fr (nouvel onglet)"
                          >
                            <span>Info</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Dossier & entretien (hors Parcoursup)</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Avis Note */}
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Satisfaction Avis</span>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-black text-white">{school.avis.note} <span className="text-sm font-normal text-slate-400">/ 5</span></span>
                    <p className="text-[11px] text-slate-500">{school.avis.totalAvis} étudiants certifiés</p>
                  </div>
                </div>

                {/* E-learning */}
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Taux E-Learning</span>
                    <Laptop className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-black text-cyan-300">{school.tauxElearning}%</span>
                    <p className="text-[11px] text-slate-500">Distanciel & modules web</p>
                  </div>
                </div>
              </div>

              {/* Fiche Bilan Parcoursup Officielle (Session 2024 - MESR) */}
              <ParcoursupBilanCard school={school} />

              {school.classementThotis && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-200">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>
                      🏆 Référence palmarès : classé <strong>#{school.classementThotis}</strong> national sur 102 formations (Thotis Media).
                    </span>
                  </div>
                  <a 
                    href={THOTIS_SOURCE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-semibold text-amber-300 underline hover:text-white transition-colors"
                  >
                    <span>Consulter le classement</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Description */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  À propos de la formation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {school.description}
                </p>

                {/* Atouts tags */}
                {school.atouts && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {school.atouts.map((atout, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {atout}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Alternance, Rythme & Frais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Alternance Box */}
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <span>Rythme & Alternance</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Alternance possible :</span>
                      <span className="font-semibold text-emerald-400 flex items-center gap-1">
                        {school.alternancePossible ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Oui (Apprentissage / Pro)
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-slate-500" />
                            Non (Initial uniquement)
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 pt-2 border-t border-slate-800">
                      <span className="text-slate-400 shrink-0">Rythme d'alternance :</span>
                      <span className="font-semibold text-right text-slate-200">
                        {school.rythmeAlternance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Frais & Bourses Box */}
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <Euro className="w-5 h-5 text-emerald-400" />
                    <span>Frais de scolarité & Financement</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Coût de la scolarité :</span>
                      <span className={`font-bold ${isPublic ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {school.prix}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                      💡 <strong>Bon à savoir :</strong> En contrat d'apprentissage, la scolarité est intégralement prise en charge par l'OPCO de l'entreprise d'accueil, avec salaire perçu par l'étudiant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Portes Ouvertes (JPO) Highlight */}
              {school.datePortesOuvertes && (
                <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 rounded-2xl border border-amber-500/30 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-white text-base">
                          Prochaine Journée Portes Ouvertes (JPO)
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Session 2026
                        </span>
                      </div>
                      <p className="text-sm text-amber-200/95 font-semibold mt-1">
                        {school.datePortesOuvertes}
                      </p>
                      
                      {/* Source officielle vérifiée */}
                      {school.sourceJpoUrl && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-300/90 flex-wrap">
                          <span className="text-slate-400 font-medium">Source officielle vérifiée :</span>
                          <a
                            href={school.sourceJpoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white underline underline-offset-2 transition-colors"
                            title="Ouvrir la page officielle où la date de JPO est annoncée"
                          >
                            <span>{school.sourceJpoNom || 'Consulter la source officielle'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      <p className="text-xs text-slate-400 mt-1">
                        Rencontrez les professeurs et découvrez les locaux avant vos vœux Parcoursup !
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {school.sourceJpoUrl && (
                      <a
                        href={school.sourceJpoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 hover:text-white transition-colors shadow-sm"
                        title="Vérifier la date et les modalités sur le site officiel"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Vérifier sur la source</span>
                      </a>
                    )}
                    <button
                      onClick={handleDownloadICS}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Ajouter au calendrier (.ics)</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-white">{school.avis.note}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Basé sur {school.avis.totalAvis} avis vérifiés d'étudiants et diplômés du BTS PI
                  </p>
                </div>
              </div>

              {/* Review Comments */}
              <div className="space-y-3">
                {school.avis.commentaires.map((comm, index) => (
                  <div key={index} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white text-sm">{comm.auteur}</span>
                        <span className="text-xs text-slate-400 ml-2">({comm.promo})</span>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(Math.floor(comm.note))].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 italic">
                      "{comm.texte}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-base">
                  Coordonnées & Modalités d'admission
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Adresse :</strong> {school.adresse}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Téléphone :</strong> <a href={`tel:${school.contacts.telephone}`} className="text-emerald-400 hover:underline">{school.contacts.telephone}</a></span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Email :</strong> <a href={`mailto:${school.contacts.email}`} className="text-emerald-400 hover:underline">{school.contacts.email}</a></span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Site web :</strong> <a href={school.contacts.siteWeb} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{school.contacts.siteWeb}</a></span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.nom + ' ' + school.adresse)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    Ouvrir dans Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Call to Action (Lettre de Motivation) */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Prêt à postuler pour la rentrée 2026/2027 ?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onGenerateLetter(school);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20"
            >
              <FileEdit className="w-4 h-4" />
              Générer ma lettre de motivation ciblée
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
