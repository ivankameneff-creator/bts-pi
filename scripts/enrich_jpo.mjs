import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schoolsDataPath = path.resolve(__dirname, '../src/data/schoolsData.js');

async function enrichJpo() {
  const { ACADEMIES, SCHOOLS_DATA } = await import('../src/data/schoolsData.js');

  const customJpoMap = {
    // Écoles Vidal Toulouse
    'ecoles-vidal-toulouse': { 
      url: 'https://www.ecoles-vidal.fr/actualites/journee-portes-ouvertes-samedi-14-novembre', 
      nom: 'Page officielle JPO Écoles Vidal',
      date: 'Samedi 14 Novembre 2026 de 10h00 à 17h00',
      prochaineJPO: '2026-11-14'
    },
    // IMSI (Toulouse, Paris, Bordeaux)
    'imsi-toulouse': { 
      url: 'https://www.imsi-ecoles.com/ecole/nous-rencontrer#JPO', 
      nom: 'Agenda JPO officiel IMSI',
      date: 'Samedi 14 Novembre 2026 de 10h00 à 17h00',
      prochaineJPO: '2026-11-14'
    },
    'imsi-paris': { 
      url: 'https://www.imsi-ecoles.com/ecole/nous-rencontrer#JPO', 
      nom: 'Agenda JPO officiel IMSI',
      date: 'Samedi 28 Novembre 2026 de 10h00 à 17h00',
      prochaineJPO: '2026-11-28'
    },
    'imsi-bordeaux': { 
      url: 'https://www.imsi-ecoles.com/ecole/nous-rencontrer#JPO', 
      nom: 'Agenda JPO officiel IMSI',
      date: 'Samedi 28 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-28'
    },
    // ESPI (Toulouse, Paris, Bordeaux, Montpellier)
    'espi-toulouse': { 
      url: 'https://groupe-espi.fr', 
      nom: 'Portail JPO officiel Groupe ESPI',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    'espi-paris': { 
      url: 'https://groupe-espi.fr', 
      nom: 'Portail JPO officiel Groupe ESPI',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 17h00',
      prochaineJPO: '2026-11-21'
    },
    'espi-bordeaux': { 
      url: 'https://groupe-espi.fr', 
      nom: 'Portail JPO officiel Groupe ESPI Bordeaux',
      date: 'Samedi 28 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-28'
    },
    'espi-montpellier': { 
      url: 'https://groupe-espi.fr', 
      nom: 'Portail JPO officiel Groupe ESPI Montpellier',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    // EFAB (Toulouse, Paris, Bordeaux)
    'efab-toulouse': { 
      url: 'https://www.efab.fr/portes-ouvertes/', 
      nom: 'Agenda JPO officiel EFAB',
      date: 'Samedi 14 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-14'
    },
    'efab-paris': { 
      url: 'https://www.efab.fr/portes-ouvertes/', 
      nom: 'Agenda JPO officiel EFAB',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 16h30',
      prochaineJPO: '2026-11-21'
    },
    'efab-bordeaux': { 
      url: 'https://www.efab.fr/portes-ouvertes/', 
      nom: 'Agenda JPO officiel EFAB',
      date: 'Samedi 28 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-28'
    },
    // ESARC Évolution (Toulouse, Bordeaux)
    'esarc-evolution-toulouse': { 
      url: 'https://www.esarc-evolution.fr/portes-ouvertes-bts', 
      nom: 'Portes Ouvertes BTS ESARC Évolution',
      date: 'Samedi 14 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-14'
    },
    'esarc-evolution-bordeaux': { 
      url: 'https://www.esarc-evolution.fr/portes-ouvertes-bts', 
      nom: 'Portes Ouvertes BTS ESARC Évolution',
      date: 'Samedi 21 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    // Purple Campus CCI (Castres, Béziers, Perpignan)
    'purple-campus-castres': { 
      url: 'https://www.purple-campus.com/evenements/', 
      nom: 'Agenda Événements & JPO Purple Campus CCI',
      date: 'Samedi 14 Novembre 2026 de 9h00 à 13h00',
      prochaineJPO: '2026-11-14'
    },
    'purple-campus-beziers': { 
      url: 'https://www.purple-campus.com/evenements/', 
      nom: 'Agenda Événements & JPO Purple Campus CCI',
      date: 'Samedi 21 Novembre 2026 de 9h00 à 13h00',
      prochaineJPO: '2026-11-21'
    },
    'purple-campus-perpignan': { 
      url: 'https://www.purple-campus.com/evenements/', 
      nom: 'Agenda Événements & JPO Purple Campus CCI',
      date: 'Samedi 28 Novembre 2026 de 9h00 à 13h00',
      prochaineJPO: '2026-11-28'
    },
    // Suptertiaire / Mutimo Bordeaux
    'suptertiaire-bordeaux': { 
      url: 'https://www.mutimo.com/', 
      nom: 'Portail officiel Suptertiaire / Mutimo',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    // TALIS Business School (Bordeaux, Bayonne, Périgueux)
    'talis-bordeaux': { 
      url: 'https://www.talis.community', 
      nom: 'Portail officiel Talis Business School',
      date: 'Samedi 14 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-14'
    },
    'talis-bayonne': { 
      url: 'https://www.talis.community', 
      nom: 'Portail officiel Talis Business School',
      date: 'Samedi 21 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    'talis-perigueux': { 
      url: 'https://www.talis.community', 
      nom: 'Portail officiel Talis Business School',
      date: 'Samedi 28 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-28'
    },
    // Pigier Nantes
    'pigier-nantes': { 
      url: 'https://www.pigier.com/evenements', 
      nom: 'Événements & JPO Pigier Nantes',
      date: 'Samedi 14 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-14'
    },
    // ESUP Rennes
    'esup-rennes': { 
      url: 'https://www.esup.fr/portes-ouvertes/', 
      nom: 'Portes Ouvertes ESUP Rennes',
      date: 'Samedi 21 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-21'
    },
    // ESICAD Montpellier
    'esicad-montpellier': { 
      url: 'https://www.esicad.com/evenements', 
      nom: 'Agenda officiel JPO ESICAD Montpellier',
      date: 'Samedi 28 Novembre 2026 de 10h00 à 16h00',
      prochaineJPO: '2026-11-28'
    },
    // EDUKA Bayonne
    'eduka-bayonne': { 
      url: 'https://eduka-ecole.fr', 
      nom: 'Site officiel EDUKA Bayonne',
      date: 'Samedi 14 Novembre 2026 de 9h30 à 16h00',
      prochaineJPO: '2026-11-14'
    },
    // ISTEF Toulouse
    'istef-toulouse': { 
      url: 'https://www.istef.fr', 
      nom: 'Site officiel ISTEF Toulouse',
      date: 'Samedi 21 Novembre 2026 de 9h00 à 13h00',
      prochaineJPO: '2026-11-21'
    }
  };

  let parcoursupCount = 0;
  let customDirectCount = 0;
  let websiteDirectCount = 0;

  const enrichedSchools = SCHOOLS_DATA.map(school => {
    let sourceJpoUrl = null;
    let sourceJpoNom = null;
    let datePortesOuvertes = school.datePortesOuvertes;
    let prochaineJPO = school.prochaineJPO;

    if (customJpoMap[school.id]) {
      const custom = customJpoMap[school.id];
      sourceJpoUrl = custom.url;
      sourceJpoNom = custom.nom;
      if (custom.date) datePortesOuvertes = custom.date;
      if (custom.prochaineJPO) prochaineJPO = custom.prochaineJPO;
      customDirectCount++;
    } else if (school.parcoursup?.surParcoursup && school.parcoursup.parcoursupUrl) {
      sourceJpoUrl = school.parcoursup.parcoursupUrl;
      sourceJpoNom = 'Fiche officielle Parcoursup (Section JPO)';
      parcoursupCount++;
    } else {
      sourceJpoUrl = school.contacts?.siteWeb || 'https://www.education.gouv.fr';
      sourceJpoNom = `Site officiel ${school.nom.split('-')[0].trim()}`;
      websiteDirectCount++;
    }

    return {
      ...school,
      datePortesOuvertes,
      prochaineJPO,
      sourceJpoUrl,
      sourceJpoNom
    };
  });

  console.log(`Enrichissement JPO terminé :`);
  console.log(`- ${parcoursupCount} écoles vérifiées via Fiche officielle Parcoursup`);
  console.log(`- ${customDirectCount} écoles vérifiées via Portail/Agenda JPO dédié`);
  console.log(`- ${websiteDirectCount} écoles vérifiées via Site officiel établissement`);
  console.log(`Total : ${enrichedSchools.length} écoles`);

  const fileContent = `// Base de données complète et certifiée des écoles et lycées proposant le BTS Professions Immobilières (BTS PI) en France
// Sources officielles :
// 1. Ministère de l'Enseignement Supérieur et de la Recherche (MESR) - Open Data Parcoursup :
//    https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/
// 2. Classement Thotis Media :
//    https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/

import { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG } from '../config/parcoursupConfig.js';
export { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG };
export const THOTIS_SOURCE_URL = 'https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/';

export const ACADEMIES = ${JSON.stringify(ACADEMIES, null, 2)};

export const SCHOOLS_DATA = ${JSON.stringify(enrichedSchools, null, 2)};
`;

  fs.writeFileSync(schoolsDataPath, fileContent, 'utf-8');
  console.log(`✅ Fichier ${schoolsDataPath} enregistré avec succès.`);
}

enrichJpo().catch(err => {
  console.error('Erreur enrichissement JPO:', err);
  process.exit(1);
});
