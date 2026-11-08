# BTS PI France — Annuaire & Comparateur Interactif des Écoles BTS Professions Immobilières

Application web moderne, réactive et performante pour découvrir, comparer et postuler dans toutes les écoles proposant le **BTS Professions Immobilières (BTS PI)** en France.

---

## 🚀 Fonctionnalités Clés

1. **Carte Interactive de France (Leaflet & OpenStreetMap)** :
   - Localisation précise des établissements par ville et académie (Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Versailles, Rennes, etc.).
   - Filtrage instantané par académie avec centrage dynamique (*flyTo*).
   - Popups d'informations rapides avec aperçu de l'école et lien vers la fiche complète.

2. **Grandes Vues Écoles ("Gros Boutons Immersifs")** :
   - Grandes cartes visuelles avec en fond l'école ciblée et effets de zoom au survol.
   - Badges visuels : Statut (Public / Privé), Classement Thotis, Réussite %, Alternance, Avis.
   - Accès direct en un clic à la fiche détaillée ou au générateur de lettre de motivation.

3. **Tableau Comparatif & Système de Filtres Dynamiques** :
   - Bascule fluide entre la vue cartes et la vue tableau à colonnes triables.
   - Filtres combinables : par académie, statut de l'école (Public 100% gratuit, Privé sous contrat, Privé hors contrat), alternance possible (oui/non), taux de réussite minimal, et recherche textuelle en temps réel.
   - Tri par classement Thotis, taux de réussite, note des avis ou ordre alphabétique.

4. **Fiche Détaillée Complète par École** :
   - ✅ **Statut** : Public ou Privé
   - ✅ **Prix & Financement** : 0 € en public / alternance, frais détaillés
   - ✅ **Alternance** : Oui / Non
   - ✅ **Rythme d'alternance** : ex. 2 jours école / 3 jours entreprise, 1 sem / 1 sem
   - ✅ **Adresse complète** avec localisation et lien direct Google Maps
   - ✅ **Dates des Portes Ouvertes (JPO)** avec bouton d'export au format calendrier `.ics`
   - ✅ **Avis étudiants certifiés** avec note sur 5 et commentaires détaillés
   - ✅ **Taux e-learning** (% distanciel et outils numériques)
   - ✅ **Taux de réussite officiel au diplôme**
   - ✅ **Classement Thotis** (Palmarès national)
   - ✅ **Bouton Générateur de lettre de motivation ciblée**

5. **Générateur Intelligent de Lettre de Motivation Ciblée** :
   - Pré-rempli avec le nom exact de l'école, sa ville, son classement Thotis et son taux de réussite.
   - Personnalisation du profil (Bac général, STMG, Pro, reconversion), du format (alternance vs initial), de la spécialité (transaction, gestion locative, syndic) et des atouts personnels.
   - Copie en 1 clic dans le presse-papier avec animation confetti, téléchargement en `.txt` ou impression/export PDF direct.

6. **Favoris & Ajout d'écoles** :
   - Mise en favoris stockée dans le navigateur (`localStorage`).
   - Modal d'ajout de nouvelles écoles à la base de données.

---

## 💻 Démarrage Rapide

```bash
# Lancer en mode développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```
