-- ==============================================================================
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
