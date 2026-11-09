/**
 * Script de mise à jour des données Open Data Parcoursup
 * Lit la configuration dans `src/config/parcoursup.config.json`
 * Interroge l'API officielle v2.1 data.enseignementsup-recherche.gouv.fr
 * Sauvegarde les résultats bruts dans `parcoursup_raw.json`
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildApiSearchUrl, PARCOURSUP_CONFIG } from '../src/config/parcoursupConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputFile = path.join(rootDir, 'parcoursup_raw.json');

async function fetchParcoursupData() {
  console.log('🚀 Interrogation de l\'API Open Data Parcoursup...');
  console.log(`📋 Dataset : ${PARCOURSUP_CONFIG.dataset.id} (${PARCOURSUP_CONFIG.dataset.name})`);
  console.log(`🔍 Requête WHERE : ${PARCOURSUP_CONFIG.query.whereClause}`);

  const apiUrl = buildApiSearchUrl();
  console.log(`🌐 URL de l'API générée :\n   ${apiUrl}\n`);

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Site-BTS-PI-DataSync/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP API Open Data : ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const results = data.results || [];

    console.log(`✅ Réponse reçue : ${results.length} formations trouvées (total dataset : ${data.total_count || results.length})`);

    // Filtrer pour s'assurer qu'il s'agit bien de BTS Professions Immobilières
    const piResults = results.filter(r => {
      const combined = `${r.fil_lib_voe_acc || ''} ${r.lib_for_voe_ins || ''} ${r.form_lib_voe_acc || ''}`.toLowerCase();
      return combined.includes('immobil') || combined.includes('professions');
    });

    console.log(`🎯 Formations BTS Professions Immobilières confirmées : ${piResults.length}`);

    // Sauvegarder dans parcoursup_raw.json (format tableau comme attendu)
    fs.writeFileSync(outputFile, JSON.stringify(piResults, null, 2), 'utf-8');
    console.log(`💾 Fichier brut mis à jour : ${outputFile}`);

    // Afficher un aperçu des 5 formations avec le plus de vœux
    const top5 = piResults
      .map(r => ({
        nom: r.g_ea_lib_vx,
        ville: r.ville_etab,
        uai: r.cod_uai,
        voeuxTotaux: r.voe_tot,
        premierChoixJ1: r.acc_debutpp,
        totalAdmis: r.acc_tot,
        tauxAcces: `${r.taux_acces_ens}%`
      }))
      .slice(0, 5);

    console.log('\n📊 Top 5 des formations BTS PI par demandes :');
    console.table(top5);

    console.log('\n✨ Synchronisation terminée avec succès !');
  } catch (err) {
    console.error('❌ Échec de la récupération des données :', err.message);
    process.exit(1);
  }
}

fetchParcoursupData();
