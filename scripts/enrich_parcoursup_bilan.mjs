/**
 * Script d'enrichissement de la Fiche Bilan Parcoursup
 * Extrait les indicateurs d'admission, profils de bacs, mentions et diversité
 * depuis `parcoursup_raw.json` et les intègre dans `src/data/schoolsData.js`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rawFile = path.join(rootDir, 'parcoursup_raw.json');
const schoolsDataFile = path.join(rootDir, 'src', 'data', 'schoolsData.js');

if (!fs.existsSync(rawFile)) {
  console.error(`Fichier brut non trouvé: ${rawFile}`);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(rawFile, 'utf-8'));
console.log(`Données brutes chargées : ${rawData.length} enregistrements.`);

// Créer une map indexée par cod_uai
const rawByUai = new Map();
for (const r of rawData) {
  if (r.cod_uai) {
    rawByUai.set(r.cod_uai, r);
  }
}

// Importer dynamiquement schoolsData
import('../src/data/schoolsData.js').then(({ SCHOOLS_DATA, ACADEMIES, THOTIS_SOURCE_URL, PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG }) => {
  let enrichedCount = 0;

  const updatedSchools = SCHOOLS_DATA.map(school => {
    const uai = school.parcoursup?.uai;
    if (!school.parcoursup?.surParcoursup || !uai) {
      return school;
    }

    const raw = rawByUai.get(uai);
    if (!raw) {
      return school;
    }

    enrichedCount++;

    const places = raw.capa_fin ?? school.parcoursup.places ?? 0;
    const demandes = raw.voe_tot ?? school.parcoursup.demandes ?? 0;
    const pression = places > 0 ? Number((demandes / places).toFixed(1)) : null;

    const tresBienTotal = raw.pct_tb != null ? (raw.pct_tb + (raw.pct_tbf || 0)) : null;

    const enrichedParcoursup = {
      ...school.parcoursup,
      places,
      demandes,
      pris: raw.acc_tot ?? school.parcoursup.pris ?? 0,
      tauxAcces: raw.taux_acces_ens ?? school.parcoursup.tauxAcces ?? 0,
      voeuxPhasePrincipale: raw.nb_voe_pp ?? school.parcoursup.voeuxPhasePrincipale ?? demandes,
      voeuxPremierePlace: raw.acc_debutpp ?? school.parcoursup.voeuxPremierePlace ?? 0,
      pctAdmisDebutPP: raw.pct_acc_debutpp ?? school.parcoursup.pctAdmisDebutPP ?? 0,
      rangDernierAppele: raw.ran_grp1 ?? school.parcoursup.rangDernierAppele ?? null,
      pressionCandidats: pression,
      nbCandidatsClasses: raw.nb_cla_pp ?? null,
      totalPropositions: raw.prop_tot ?? null,
      admisFinPP: raw.acc_finpp ?? null,
      pctAdmisFinPP: raw.pct_acc_finpp ?? null,
      admisPhaseComplementaire: raw.acc_pc ?? 0,
      profilBac: {
        general: {
          pct: raw.pct_bg ?? null,
          admis: raw.acc_bg ?? null,
          tauxAcces: raw.part_acces_gen ?? null
        },
        techno: {
          pct: raw.pct_bt ?? null,
          admis: raw.acc_bt ?? null,
          tauxAcces: raw.part_acces_tec ?? null
        },
        pro: {
          pct: raw.pct_bp ?? null,
          admis: raw.acc_bp ?? null,
          tauxAcces: raw.part_acces_pro ?? null
        },
        autres: {
          admis: raw.acc_at ?? null
        }
      },
      mentions: {
        sansMention: raw.pct_sansmention ?? null,
        assezBien: raw.pct_ab ?? null,
        bien: raw.pct_b ?? null,
        tresBien: tresBienTotal
      },
      diversite: {
        pctBoursiers: raw.pct_bours ?? null,
        pctFemmes: raw.pct_f ?? null,
        pctAcademieOrigine: raw.pct_aca_orig ?? null,
        pctNeoBacheliers: raw.pct_neobac ?? null
      }
    };

    return {
      ...school,
      parcoursup: enrichedParcoursup
    };
  });

  console.log(`✓ Écoles enrichies avec le bilan complet Parcoursup : ${enrichedCount} / ${SCHOOLS_DATA.length}`);

  // Re-sérialiser dans src/data/schoolsData.js
  const content = `// Base de données complète et certifiée des écoles et lycées proposant le BTS Professions Immobilières (BTS PI) en France
// Sources officielles :
// 1. Ministère de l'Enseignement Supérieur et de la Recherche (MESR) - Open Data Parcoursup :
//    https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/
// 2. Classement Thotis Media :
//    https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/

import { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG } from '../config/parcoursupConfig.js';
export { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG };
export const THOTIS_SOURCE_URL = 'https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/';

export const ACADEMIES = ${JSON.stringify(ACADEMIES, null, 2)};

export const SCHOOLS_DATA = ${JSON.stringify(updatedSchools, null, 2)};
`;

  fs.writeFileSync(schoolsDataFile, content, 'utf-8');
  console.log(`✓ Fichier ${schoolsDataFile} mis à jour.`);
});
