import React, { useState } from 'react';
import { X, Plus, School, MapPin, Euro, Calendar, GraduationCap, Award } from 'lucide-react';

export function AddSchoolModal({ onClose, onAddSchool }) {
  const [formData, setFormData] = useState({
    nom: '',
    type: 'Public',
    academie: 'Paris',
    ville: '',
    codePostal: '',
    adresse: '',
    prix: '0 € (Service Public)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 90,
    parcoursupDemandes: '',
    parcoursupPris: '',
    classementThotis: '',
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Mars 2026',
    description: '',
    telephone: '01 00 00 00 00',
    email: 'contact@ecole.fr',
    siteWeb: 'https://',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    lat: 48.8566,
    lng: 2.3522
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.ville) return;

    const newSchool = {
      id: 'custom-' + Date.now(),
      nom: formData.nom,
      type: formData.type,
      academie: formData.academie,
      ville: formData.ville,
      codePostal: formData.codePostal,
      adresse: formData.adresse || `${formData.ville}`,
      coordinates: [parseFloat(formData.lat) || 48.8566, parseFloat(formData.lng) || 2.3522],
      prix: formData.prix,
      fraisScolariteAnnuel: parseInt(formData.fraisScolariteAnnuel) || 0,
      alternancePossible: formData.alternancePossible,
      rythmeAlternance: formData.rythmeAlternance,
      tauxReussite: parseInt(formData.tauxReussite) || 85,
      parcoursup: formData.parcoursupDemandes ? {
        surParcoursup: true,
        demandes: parseInt(formData.parcoursupDemandes) || 0,
        pris: parseInt(formData.parcoursupPris) || 0,
        places: parseInt(formData.parcoursupPris) || 30,
        tauxAcces: formData.parcoursupDemandes && formData.parcoursupPris 
          ? Math.round((parseInt(formData.parcoursupPris) / parseInt(formData.parcoursupDemandes)) * 100)
          : 50,
        modalite: 'Procédure nationale Parcoursup'
      } : {
        surParcoursup: false,
        demandes: null,
        pris: null,
        places: null,
        tauxAcces: null,
        modalite: 'Admission directe hors Parcoursup',
        procedure: 'Sur dossier de candidature et entretien'
      },
      classementThotis: formData.classementThotis ? parseInt(formData.classementThotis) : null,
      tauxElearning: parseInt(formData.tauxElearning) || 10,
      datePortesOuvertes: formData.datePortesOuvertes,
      image: formData.image,
      description: formData.description || 'Établissement formant au Brevet de Technicien Supérieur Professions Immobilières.',
      atouts: ['Formation BTS PI d\'État', 'Alternance possible', 'Équipe pédagogique qualifiée'],
      contacts: {
        telephone: formData.telephone,
        email: formData.email,
        siteWeb: formData.siteWeb
      },
      avis: {
        note: 4.5,
        totalAvis: 12,
        commentaires: [
          { auteur: 'Étudiant', promo: '2024', note: 4.5, texte: 'Bon établissement, sérieux.' }
        ]
      }
    };

    onAddSchool(newSchool);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                Ajouter une école à la base de données
              </h3>
              <p className="text-xs text-slate-400">
                La fiche sera immédiatement consultable sur la carte et le comparateur
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Nom complet de l'école *</label>
            <input
              type="text"
              required
              placeholder="Ex: Lycée Jean Moulin / EFAB Campus..."
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Statut *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              >
                <option value="Public">Public (Gratuit)</option>
                <option value="Privé sous contrat">Privé sous contrat</option>
                <option value="Privé hors contrat">Privé hors contrat</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Académie *</label>
              <select
                value={formData.academie}
                onChange={(e) => setFormData({ ...formData, academie: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              >
                <option value="Paris">Paris</option>
                <option value="Versailles">Versailles</option>
                <option value="Créteil">Créteil</option>
                <option value="Lyon">Lyon</option>
                <option value="Aix-Marseille">Aix-Marseille</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Toulouse">Toulouse</option>
                <option value="Nantes">Nantes</option>
                <option value="Lille">Lille</option>
                <option value="Rennes">Rennes</option>
                <option value="Montpellier">Montpellier</option>
                <option value="Nice">Nice</option>
                <option value="Strasbourg">Strasbourg</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-slate-300 font-semibold mb-1">Ville *</label>
              <input
                type="text"
                required
                placeholder="Ex: Lyon"
                value={formData.ville}
                onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Code Postal</label>
              <input
                type="text"
                placeholder="Ex: 69002"
                value={formData.codePostal}
                onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Adresse complète</label>
            <input
              type="text"
              placeholder="Ex: 15 Rue de la République, 69002 Lyon"
              value={formData.adresse}
              onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Vœux Parcoursup (Demandes)</label>
              <input
                type="number"
                min="0"
                placeholder="Ex: 1200 (laisser vide si hors Parcoursup)"
                value={formData.parcoursupDemandes}
                onChange={(e) => setFormData({ ...formData, parcoursupDemandes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-600 text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Candidats Admis (Pris)</label>
              <input
                type="number"
                min="0"
                placeholder="Ex: 30"
                value={formData.parcoursupPris}
                onChange={(e) => setFormData({ ...formData, parcoursupPris: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-600 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Taux réussite (%)</label>
              <input
                type="number"
                min="50"
                max="100"
                value={formData.tauxReussite}
                onChange={(e) => setFormData({ ...formData, tauxReussite: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Rang Thotis (# ou vide si N/C)</label>
              <input
                type="number"
                min="1"
                max="100"
                placeholder="Ex: 12 (laisser vide si non classé)"
                value={formData.classementThotis}
                onChange={(e) => setFormData({ ...formData, classementThotis: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-600 text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">E-learning (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.tauxElearning}
                onChange={(e) => setFormData({ ...formData, tauxElearning: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Frais / Prix</label>
              <input
                type="text"
                placeholder="0 € en alternance / 5 800 € initial"
                value={formData.prix}
                onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Rythme d'alternance</label>
              <input
                type="text"
                placeholder="2 jours école / 3 jours entreprise"
                value={formData.rythmeAlternance}
                onChange={(e) => setFormData({ ...formData, rythmeAlternance: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Date Portes Ouvertes (JPO)</label>
            <input
              type="text"
              placeholder="Samedi 14 Mars 2026 de 10h à 17h"
              value={formData.datePortesOuvertes}
              onChange={(e) => setFormData({ ...formData, datePortesOuvertes: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md"
            >
              Enregistrer l'école
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
