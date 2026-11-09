// Configuration et générateurs de requêtes pour l'Open Data Parcoursup
// Données officielles issues du Ministère de l'Enseignement Supérieur et de la Recherche (MESR)
import config from './parcoursup.config.json' with { type: 'json' };

export const PARCOURSUP_CONFIG = config;

/**
 * URL du portail officiel Open Data Parcoursup avec filtres par défaut
 */
export const PARCOURSUP_SOURCE_URL = `${config.urls.portalBase}?${config.urls.portalQueryParam}`;

/**
 * Construit l'URL vers la table Open Data officielle filtrée sur un établissement précis (Code UAI)
 * @param {string} codUai - Code UAI de l'établissement (ex: "0310022Y")
 * @param {string} [filiere] - Filière (défaut depuis config, ex: "BTS")
 * @returns {string} URL vers la table du dataset Open Data
 */
export function buildOpenDataTableUrl(codUai, filiere = config.query.filiere) {
  const tableBase = config.urls.tableBase.replace('{datasetId}', config.dataset.id);
  const params = new URLSearchParams();
  if (codUai) params.append('refine.cod_uai', codUai);
  if (filiere) params.append('refine.fili', filiere);
  return `${tableBase}?${params.toString()}`;
}

/**
 * Construit l'URL de recherche sur le portail Open Data Parcoursup
 * @param {string} query - Terme de recherche ou code UAI
 * @returns {string} URL vers la page de recherche Open Data
 */
export function buildOpenDataSearchUrl(query = '') {
  const params = new URLSearchParams();
  if (config.query.filiere) params.append('refine.fili', config.query.filiere);
  if (query) params.append('q', query);
  return `${config.urls.portalBase}?${params.toString()}`;
}

/**
 * Construit l'URL d'appel API REST (OpenDataSoft v2.1) pour récupérer les enregistrements
 * @param {Object} [options] - Options pour surcharger la config si besoin
 * @returns {string} URL complète de l'API
 */
export function buildApiSearchUrl(options = {}) {
  const endpointPath = config.api.endpoint.replace('{datasetId}', options.datasetId || config.dataset.id);
  const url = new URL(endpointPath, config.api.baseUrl);

  const whereClause = options.whereClause || config.query.whereClause;
  if (whereClause) {
    url.searchParams.set('where', whereClause);
  }

  const limit = options.limit || config.query.limit || 100;
  url.searchParams.set('limit', String(limit));

  const orderBy = options.order_by || config.query.order_by;
  if (orderBy) {
    url.searchParams.set('order_by', orderBy);
  }

  return url.toString();
}

/**
 * Construit l'URL de la fiche officielle Parcoursup pour une formation
 * @param {string|number} gTaCod - Identifiant unique de formation Parcoursup (g_ta_cod)
 * @returns {string} URL vers la fiche Parcoursup
 */
export function buildParcoursupFicheUrl(gTaCod) {
  if (!gTaCod) return '';
  return `${config.urls.parcoursupFicheBase}?g_ta_cod=${gTaCod}`;
}

export default PARCOURSUP_CONFIG;
