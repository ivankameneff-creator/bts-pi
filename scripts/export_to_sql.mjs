import { SCHOOLS_DATA } from '../src/data/schoolsData.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeSqlString(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function escapeJson(obj) {
  if (obj === null || obj === undefined) return "'{}'::jsonb";
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
}

function escapeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "'{}'::double precision[]";
  return `ARRAY[${arr.map(n => Number(n)).join(', ')}]::double precision[]`;
}

// 1. Generate Schema SQL
const schemaSql = `-- ==============================================================================
-- SCHEMA SUPABASE : BTS PROFESSIONS IMMOBILIERES
-- Table des établissements et règles de sécurité Row Level Security (RLS)
-- ==============================================================================

-- 1. Création de la table des écoles
CREATE TABLE IF NOT EXISTS public.schools (
  id TEXT PRIMARY KEY,
  nom TEXT NOT NULL,
  type TEXT NOT NULL,
  academie TEXT NOT NULL,
  ville TEXT NOT NULL,
  "codePostal" TEXT,
  adresse TEXT,
  coordinates DOUBLE PRECISION[] DEFAULT '{}',
  prix TEXT,
  "fraisScolariteAnnuel" INTEGER DEFAULT 0,
  "alternancePossible" BOOLEAN DEFAULT true,
  "rythmeAlternance" TEXT,
  "tauxReussite" INTEGER DEFAULT 0,
  "classementThotis" INTEGER,
  "tauxElearning" INTEGER DEFAULT 0,
  "datePortesOuvertes" TEXT,
  "prochaineJPO" TEXT,
  "sourceJpoUrl" TEXT,
  "sourceJpoNom" TEXT,
  image TEXT,
  description TEXT,
  atouts JSONB DEFAULT '[]'::jsonb,
  contacts JSONB DEFAULT '{}'::jsonb,
  avis JSONB DEFAULT '{}'::jsonb,
  parcoursup JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour accélérer les recherches et filtres fréquents
CREATE INDEX IF NOT EXISTS idx_schools_academie ON public.schools (academie);
CREATE INDEX IF NOT EXISTS idx_schools_ville ON public.schools (ville);
CREATE INDEX IF NOT EXISTS idx_schools_type ON public.schools (type);
CREATE INDEX IF NOT EXISTS idx_schools_taux_reussite ON public.schools ("tauxReussite");
CREATE INDEX IF NOT EXISTS idx_schools_prochaine_jpo ON public.schools ("prochaineJPO");

-- 2. Activer la sécurité au niveau des lignes (Row Level Security)
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

-- 3. Politique 1 : Tout le monde (visiteurs du site web) peut LIRE les écoles
DROP POLICY IF EXISTS "Lecture publique pour tous" ON public.schools;
CREATE POLICY "Lecture publique pour tous"
ON public.schools FOR SELECT
TO anon, authenticated
USING (true);

-- 4. Politique 2 : Autoriser l'ajout d'écoles (optionnel, pour ajout depuis le site ou admin)
DROP POLICY IF EXISTS "Insertion autorisée pour tous" ON public.schools;
CREATE POLICY "Insertion autorisée pour tous"
ON public.schools FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 5. Politique 3 : Modification / Suppression (pour service_role ou authenticated)
DROP POLICY IF EXISTS "Modification par service role" ON public.schools;
CREATE POLICY "Modification par service role"
ON public.schools FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

COMMENT ON TABLE public.schools IS 'Répertoire des 102 établissements préparant au BTS Professions Immobilières en France';
`;

fs.writeFileSync(path.join(rootDir, 'supabase_schema.sql'), schemaSql, 'utf8');
console.log('✓ Fichier supabase_schema.sql généré avec succès');

// 2. Generate Seed Data SQL
let seedSql = `-- ==============================================================================
-- SEED DATA SUPABASE : IMPORTATION DES 102 ÉCOLES BTS PI
-- À exécuter dans le "SQL Editor" de votre projet Supabase
-- ==============================================================================

INSERT INTO public.schools (
  id, nom, type, academie, ville, "codePostal", adresse, coordinates,
  prix, "fraisScolariteAnnuel", "alternancePossible", "rythmeAlternance",
  "tauxReussite", "classementThotis", "tauxElearning", "datePortesOuvertes",
  "prochaineJPO", "sourceJpoUrl", "sourceJpoNom", image, description,
  atouts, contacts, avis, parcoursup
) VALUES
`;

const rows = SCHOOLS_DATA.map((s, idx) => {
  const values = [
    escapeSqlString(s.id),
    escapeSqlString(s.nom),
    escapeSqlString(s.type),
    escapeSqlString(s.academie),
    escapeSqlString(s.ville),
    escapeSqlString(s.codePostal),
    escapeSqlString(s.adresse),
    escapeArray(s.coordinates),
    escapeSqlString(s.prix),
    s.fraisScolariteAnnuel ?? 0,
    s.alternancePossible ? 'TRUE' : 'FALSE',
    escapeSqlString(s.rythmeAlternance),
    s.tauxReussite ?? 0,
    s.classementThotis !== null && s.classementThotis !== undefined ? s.classementThotis : 'NULL',
    s.tauxElearning ?? 0,
    escapeSqlString(s.datePortesOuvertes),
    escapeSqlString(s.prochaineJPO),
    escapeSqlString(s.sourceJpoUrl),
    escapeSqlString(s.sourceJpoNom),
    escapeSqlString(s.image),
    escapeSqlString(s.description),
    escapeJson(s.atouts || []),
    escapeJson(s.contacts || {}),
    escapeJson(s.avis || {}),
    escapeJson(s.parcoursup || {})
  ];

  return `(${values.join(', ')})`;
});

seedSql += rows.join(',\n') + `
ON CONFLICT (id) DO UPDATE SET
  nom = EXCLUDED.nom,
  type = EXCLUDED.type,
  academie = EXCLUDED.academie,
  ville = EXCLUDED.ville,
  "codePostal" = EXCLUDED."codePostal",
  adresse = EXCLUDED.adresse,
  coordinates = EXCLUDED.coordinates,
  prix = EXCLUDED.prix,
  "fraisScolariteAnnuel" = EXCLUDED."fraisScolariteAnnuel",
  "alternancePossible" = EXCLUDED."alternancePossible",
  "rythmeAlternance" = EXCLUDED."rythmeAlternance",
  "tauxReussite" = EXCLUDED."tauxReussite",
  "classementThotis" = EXCLUDED."classementThotis",
  "tauxElearning" = EXCLUDED."tauxElearning",
  "datePortesOuvertes" = EXCLUDED."datePortesOuvertes",
  "prochaineJPO" = EXCLUDED."prochaineJPO",
  "sourceJpoUrl" = EXCLUDED."sourceJpoUrl",
  "sourceJpoNom" = EXCLUDED."sourceJpoNom",
  image = EXCLUDED.image,
  description = EXCLUDED.description,
  atouts = EXCLUDED.atouts,
  contacts = EXCLUDED.contacts,
  avis = EXCLUDED.avis,
  parcoursup = EXCLUDED.parcoursup,
  updated_at = NOW();
`;

fs.writeFileSync(path.join(rootDir, 'supabase_seed_data.sql'), seedSql, 'utf8');
console.log(`✓ Fichier supabase_seed_data.sql généré avec succès (${SCHOOLS_DATA.length} écoles exportées)`);
