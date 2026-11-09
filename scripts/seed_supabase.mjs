/**
 * Script de peuplement direct via l'API Supabase
 * Usage :
 *   VITE_SUPABASE_URL=https://xyz.supabase.co VITE_SUPABASE_ANON_KEY=abc node scripts/seed_supabase.mjs
 *   ou simplement en renseignant un fichier .env
 */

import { createClient } from '@supabase/supabase-js';
import { SCHOOLS_DATA } from '../src/data/schoolsData.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger .env si présent
try {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        val = val.replace(/^['"]|['"]$/g, '').trim();
        process.env[key] = val;
      }
    });
  }
} catch (e) {
  // Ignorer
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\x1b[31mErreur : VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY doivent être définis dans .env ou en variables d\'environnement.\x1b[0m');
  console.log('\nExemple d\'exécution :');
  console.log('  node scripts/seed_supabase.mjs --url "https://votre-projet.supabase.co" --key "votre-cle-anon"');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runSeed() {
  console.log(`📡 Connexion à Supabase (${supabaseUrl})...`);
  console.log(`📦 Préparation de ${SCHOOLS_DATA.length} écoles...`);

  // Préparation des données conformes aux colonnes
  const rows = SCHOOLS_DATA.map(s => ({
    id: s.id,
    nom: s.nom,
    type: s.type,
    academie: s.academie,
    ville: s.ville,
    codePostal: s.codePostal,
    adresse: s.adresse,
    coordinates: s.coordinates,
    prix: s.prix,
    fraisScolariteAnnuel: s.fraisScolariteAnnuel ?? 0,
    alternancePossible: s.alternancePossible,
    rythmeAlternance: s.rythmeAlternance,
    tauxReussite: s.tauxReussite ?? 0,
    classementThotis: s.classementThotis,
    tauxElearning: s.tauxElearning ?? 0,
    datePortesOuvertes: s.datePortesOuvertes,
    prochaineJPO: s.prochaineJPO,
    sourceJpoUrl: s.sourceJpoUrl,
    sourceJpoNom: s.sourceJpoNom,
    image: s.image,
    description: s.description,
    atouts: s.atouts || [],
    contacts: s.contacts || {},
    avis: s.avis || {},
    parcoursup: s.parcoursup || {}
  }));

  // Insertion par paquets de 25 pour éviter de dépasser les limites de requête
  const batchSize = 25;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { data, error } = await supabase
      .from('schools')
      .upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Erreur lors du lot ${i / batchSize + 1}:`, error.message);
      process.exit(1);
    }
    inserted += batch.length;
    console.log(`  ✓ ${inserted}/${rows.length} écoles enregistrées...`);
  }

  console.log('\x1b[32m✨ Importation réussie des 102 écoles dans Supabase !\x1b[0m');
}

runSeed().catch(err => {
  console.error('❌ Échec inattendu :', err);
  process.exit(1);
});
