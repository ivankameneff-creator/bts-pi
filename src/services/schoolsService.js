import { supabase, isSupabaseConfigured } from './supabaseClient.js';
import { SCHOOLS_DATA } from '../data/schoolsData.js';

const CUSTOM_STORAGE_KEY = 'bts_pi_custom_schools';
const DB_CACHE_KEY = 'bts_pi_schools_db_cache';

/**
 * Récupère les données locales immédiates (synchrone)
 * Garantit un affichage instantané sans latence réseau au premier rendu.
 */
export function getInitialSchools() {
  try {
    // 1. Priorité au cache de la base de données s'il existe
    const cachedDb = localStorage.getItem(DB_CACHE_KEY);
    if (cachedDb) {
      const parsed = JSON.parse(cachedDb);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return mergeWithCustomSchools(parsed);
      }
    }
  } catch (e) {
    console.warn('Erreur lecture cache DB:', e);
  }

  // 2. Fallback sur le jeu de données statique certifié
  return mergeWithCustomSchools(SCHOOLS_DATA);
}

function mergeWithCustomSchools(baseSchools) {
  try {
    const savedCustom = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (savedCustom) {
      const customSchools = JSON.parse(savedCustom);
      if (Array.isArray(customSchools) && customSchools.length > 0) {
        // Évite les doublons d'ID
        const customIds = new Set(customSchools.map(s => s.id));
        const filteredBase = baseSchools.filter(s => !customIds.has(s.id));
        return [...customSchools, ...filteredBase];
      }
    }
  } catch (e) {
    console.warn('Erreur fusion écoles personnalisées:', e);
  }
  return baseSchools;
}

/**
 * Récupère les écoles depuis Supabase si configuré.
 * En cas d'indisponibilité ou d'erreur, bascule sur les données statiques sans bloquer.
 */
export async function fetchSchoolsFromDatabase() {
  if (!isSupabaseConfigured) {
    // Supabase n'est pas encore branché : fallback transparent sur les données statiques
    return {
      source: 'static',
      schools: mergeWithCustomSchools(SCHOOLS_DATA)
    };
  }

  try {
    const { data, error } = await supabase
      .from('schools')
      .select('*')
      .order('classementThotis', { ascending: true, nullsFirst: false });

    if (error) {
      console.warn('Supabase fetch error, fallback to static:', error.message);
      return {
        source: 'static_fallback',
        schools: mergeWithCustomSchools(SCHOOLS_DATA),
        error: error.message
      };
    }

    if (Array.isArray(data) && data.length > 0) {
      // Met en cache localement pour le prochain chargement instantané
      try {
        localStorage.setItem(DB_CACHE_KEY, JSON.stringify(data));
      } catch (e) {}

      return {
        source: 'supabase',
        schools: mergeWithCustomSchools(data)
      };
    }

    return {
      source: 'static',
      schools: mergeWithCustomSchools(SCHOOLS_DATA)
    };
  } catch (err) {
    console.warn('Erreur réseau Supabase, fallback statique:', err);
    return {
      source: 'static_fallback',
      schools: mergeWithCustomSchools(SCHOOLS_DATA),
      error: err.message
    };
  }
}

/**
 * Enregistre une nouvelle école créée par l'utilisateur
 */
export async function saveNewSchool(newSchool) {
  // 1. Sauvegarde locale persistante (toujours garanti)
  try {
    const savedCustom = localStorage.getItem(CUSTOM_STORAGE_KEY);
    const customList = savedCustom ? JSON.parse(savedCustom) : [];
    customList.unshift(newSchool);
    localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(customList));
  } catch (e) {
    console.error('Erreur sauvegarde locale custom school:', e);
  }

  // 2. Si Supabase est configuré, insérer également dans la base distante
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('schools').insert([newSchool]);
      if (error) {
        console.warn('Insertion Supabase échouée (sauvegardé localement) :', error.message);
      }
    } catch (e) {
      console.warn('Erreur réseau insertion Supabase :', e);
    }
  }

  return newSchool;
}
