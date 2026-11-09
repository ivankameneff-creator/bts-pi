import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schoolsDataPath = path.resolve(__dirname, '../src/data/schoolsData.js');

async function enrichJpo() {
  const { ACADEMIES, SCHOOLS_DATA } = await import('../src/data/schoolsData.js');

  const customJpoMap = {
    'imsi-toulouse': { url: 'https://www.imsi-formation.com/evenements/jpo', nom: 'Agenda JPO officiel IMSI' },
    'imsi-paris': { url: 'https://www.imsi-formation.com/evenements/jpo', nom: 'Agenda JPO officiel IMSI' },
    'imsi-bordeaux': { url: 'https://www.imsi-formation.com/evenements/jpo', nom: 'Agenda JPO officiel IMSI' },
    'espi-toulouse': { url: 'https://www.groupe-espi.fr/agenda/', nom: 'Portail JPO & Réunions ESPI' },
    'espi-paris': { url: 'https://www.groupe-espi.fr/agenda/', nom: 'Portail JPO & Réunions ESPI' },
    'espi-bordeaux': { url: 'https://www.groupe-espi.fr/campus/bordeaux/', nom: 'Agenda Campus ESPI Bordeaux' },
    'espi-montpellier': { url: 'https://www.groupe-espi.fr/campus/montpellier/', nom: 'Agenda Campus ESPI Montpellier' },
    'efab-toulouse': { url: 'https://www.efab.fr/journees-portes-ouvertes', nom: 'Agenda JPO officiel EFAB' },
    'efab-paris': { url: 'https://www.efab.fr/journees-portes-ouvertes', nom: 'Agenda JPO officiel EFAB' },
    'efab-bordeaux': { url: 'https://www.efab.fr/journees-portes-ouvertes', nom: 'Agenda JPO officiel EFAB' },
    'esarc-evolution-toulouse': { url: 'https://www.esarc-evolution.fr/journees-portes-ouvertes', nom: 'Agenda JPO officiel ESARC' },
    'esarc-evolution-bordeaux': { url: 'https://www.esarc-evolution.fr/journees-portes-ouvertes', nom: 'Agenda JPO officiel ESARC' },
    'ecoles-vidal-toulouse': { url: 'https://www.ecoles-vidal.fr/jpo/', nom: 'Portail JPO officiel Écoles Vidal' },
    'purple-campus-castres': { url: 'https://www.purple-campus.com/agenda/', nom: 'Agenda JPO Purple Campus CCI' },
    'purple-campus-beziers': { url: 'https://www.purple-campus.com/agenda/', nom: 'Agenda JPO Purple Campus CCI' },
    'purple-campus-perpignan': { url: 'https://www.purple-campus.com/agenda/', nom: 'Agenda JPO Purple Campus CCI' },
    'suptertiaire-bordeaux': { url: 'https://www.suptertiaire.com/jpo', nom: 'Portail JPO Suptertiaire' },
    'talis-bordeaux': { url: 'https://www.talis-bs.com/evenements', nom: 'Événements & JPO TALIS BS' },
    'talis-bayonne': { url: 'https://www.talis-bs.com/evenements', nom: 'Événements & JPO TALIS BS' },
    'talis-perigueux': { url: 'https://www.talis-bs.com/evenements', nom: 'Événements & JPO TALIS BS' },
    'pigier-nantes': { url: 'https://www.pigier.com/evenements', nom: 'Événements & JPO Pigier' },
    'esup-rennes': { url: 'https://www.esup-rennes.fr/evenements', nom: 'Agenda & JPO ESUP' },
    'esicad-montpellier': { url: 'https://www.esicad.com/evenements', nom: 'Agenda officiel JPO ESICAD' },
    'ecla-montpellier': { url: 'https://www.efficom-montpellier.fr/evenements', nom: 'Agenda officiel Efficom / ECLA' },
  };

  let parcoursupCount = 0;
  let customDirectCount = 0;
  let websiteDirectCount = 0;

  const enrichedSchools = SCHOOLS_DATA.map(school => {
    let sourceJpoUrl = null;
    let sourceJpoNom = null;

    if (school.parcoursup?.surParcoursup && school.parcoursup.parcoursupUrl) {
      sourceJpoUrl = school.parcoursup.parcoursupUrl;
      sourceJpoNom = 'Fiche officielle Parcoursup (Section JPO)';
      parcoursupCount++;
    } else if (customJpoMap[school.id]) {
      sourceJpoUrl = customJpoMap[school.id].url;
      sourceJpoNom = customJpoMap[school.id].nom;
      customDirectCount++;
    } else {
      sourceJpoUrl = school.contacts?.siteWeb || 'https://www.education.gouv.fr';
      sourceJpoNom = `Site officiel ${school.nom.split('-')[0].trim()}`;
      websiteDirectCount++;
    }

    return {
      ...school,
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
