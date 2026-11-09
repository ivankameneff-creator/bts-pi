// Base de données complète et certifiée des écoles et lycées proposant le BTS Professions Immobilières (BTS PI) en France
// Sources officielles :
// 1. Ministère de l'Enseignement Supérieur et de la Recherche (MESR) - Open Data Parcoursup :
//    https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/
// 2. Classement Thotis Media :
//    https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/

import { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG } from '../config/parcoursupConfig.js';
export { PARCOURSUP_SOURCE_URL, PARCOURSUP_CONFIG };
export const THOTIS_SOURCE_URL = 'https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/';

export const ACADEMIES = [
  {
    "id": "all",
    "nom": "Toutes les académies",
    "coords": [
      46.603354,
      1.888334
    ],
    "zoom": 6
  },
  {
    "id": "sud-ouest",
    "nom": "🌊 Grand Sud-Ouest (45)",
    "coords": [
      43.95,
      0.85
    ],
    "zoom": 7
  },
  {
    "id": "Toulouse",
    "nom": "Académie de Toulouse",
    "coords": [
      43.6047,
      1.4442
    ],
    "zoom": 10
  },
  {
    "id": "Bordeaux",
    "nom": "Académie de Bordeaux",
    "coords": [
      44.8378,
      -0.5792
    ],
    "zoom": 10
  },
  {
    "id": "Montpellier",
    "nom": "Académie de Montpellier",
    "coords": [
      43.6108,
      3.8767
    ],
    "zoom": 10
  },
  {
    "id": "Poitiers",
    "nom": "Académie de Poitiers",
    "coords": [
      46.5802,
      0.3404
    ],
    "zoom": 10
  },
  {
    "id": "Paris",
    "nom": "Académie de Paris",
    "coords": [
      48.8566,
      2.3522
    ],
    "zoom": 11
  },
  {
    "id": "Versailles",
    "nom": "Académie de Versailles",
    "coords": [
      48.8049,
      2.1204
    ],
    "zoom": 10
  },
  {
    "id": "Créteil",
    "nom": "Académie de Créteil",
    "coords": [
      48.7904,
      2.4556
    ],
    "zoom": 10
  },
  {
    "id": "Lyon",
    "nom": "Académie de Lyon",
    "coords": [
      45.764,
      4.8357
    ],
    "zoom": 11
  },
  {
    "id": "Aix-Marseille",
    "nom": "Académie d'Aix-Marseille",
    "coords": [
      43.2965,
      5.3698
    ],
    "zoom": 11
  },
  {
    "id": "Nantes",
    "nom": "Académie de Nantes",
    "coords": [
      47.2184,
      -1.5536
    ],
    "zoom": 11
  },
  {
    "id": "Lille",
    "nom": "Académie de Lille",
    "coords": [
      50.6292,
      3.0573
    ],
    "zoom": 11
  },
  {
    "id": "Rennes",
    "nom": "Académie de Rennes",
    "coords": [
      48.1173,
      -1.6778
    ],
    "zoom": 11
  },
  {
    "id": "Nice",
    "nom": "Académie de Nice",
    "coords": [
      43.7102,
      7.262
    ],
    "zoom": 11
  },
  {
    "id": "Strasbourg",
    "nom": "Académie de Strasbourg",
    "coords": [
      48.5734,
      7.7521
    ],
    "zoom": 11
  }
];

export const SCHOOLS_DATA = [
  {
    "id": "lycee-ozenne-toulouse",
    "nom": "Lycée Public Théodore Ozenne",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Toulouse",
    "codePostal": "31000",
    "adresse": "9 Rue Merly, 31000 Toulouse",
    "coordinates": [
      43.6083,
      1.4428
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec 14 semaines de stages ou contrat d'apprentissage",
    "tauxReussite": 94,
    "classementThotis": 18,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Th%C3%A9odore%20Ozenne",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Th%C3%A9odore%20Ozenne"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 8h30 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Lycée public historique au cœur de Toulouse, réputé comme l'un des fleurons régionaux de la filière tertiaire et immobilière. Partenariats privilégiés avec la FNAIM Occitanie et l'UNIS.",
    "atouts": [
      "100% Gratuit",
      "Très forte notoriété académique",
      "Centre-ville métro Capitole / Jeanne d'Arc",
      "Très forte notoriété auprès des employeurs"
    ],
    "contacts": {
      "telephone": "05 61 21 00 20",
      "email": "0310041w@ac-toulouse.fr",
      "siteWeb": "https://ozenne.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 84,
      "commentaires": [
        {
          "auteur": "Julien T.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Les profs de droit immobilier et d'urbanisme sont excellents. Ozenne est un sésame sur le CV à Toulouse."
        },
        {
          "auteur": "Mélanie B.",
          "promo": "Étudiante 2e année",
          "note": 4.5,
          "texte": "Cadre historique magnifique, émulation saine et très bon suivi des périodes de stage."
        }
      ]
    }
  },
  {
    "id": "lycee-henri-matisse-cugnaux",
    "nom": "Lycée Public Henri Matisse",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Cugnaux",
    "codePostal": "31270",
    "adresse": "2 Rue du Comminges, 31270 Cugnaux",
    "coordinates": [
      43.531,
      1.35273
    ],
    "prix": "0 € (Service Public de l'Éducation)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Temps plein sous statut scolaire ou apprentissage via le CFA Académique",
    "tauxReussite": 91,
    "classementThotis": 16,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0312290W",
      "codAffForm": "4220",
      "demandes": 1374,
      "voeuxPhasePrincipale": 1374,
      "voeuxPremierePlace": 0,
      "pctAdmisDebutPP": 0,
      "pris": 22,
      "places": 24,
      "tauxAcces": 15,
      "rangDernierAppele": 71,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4220&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0312290W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0312290W"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle public d'excellence du sud-ouest toulousain, le Lycée Henri Matisse forme des spécialistes aguerris de la négociation et de la gestion locative avec des outils de simulation professionnelle moderne.",
    "atouts": [
      "Gratuité totale",
      "Campus vert et spacieux",
      "Section BTS très dynamique",
      "Accompagnement personnalisé pour le diplôme"
    ],
    "contacts": {
      "telephone": "05 62 87 34 50",
      "email": "0312689x@ac-toulouse.fr",
      "siteWeb": "https://matisse.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 52,
      "commentaires": [
        {
          "auteur": "Maxence G.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne équipe pédagogique. On fait beaucoup de cas pratiques et de mises en situation de négociation."
        },
        {
          "auteur": "Lola M.",
          "promo": "Étudiante 1ère année",
          "note": 4,
          "texte": "Ambiance studieuse et lycée moderne, accès facile en bus depuis Basso Cambo."
        }
      ]
    }
  },
  {
    "id": "lycee-saliege-balma",
    "nom": "Lycée Polyvalent Privé Saliège",
    "type": "Privé sous contrat",
    "academie": "Toulouse",
    "ville": "Balma",
    "codePostal": "31130",
    "adresse": "3 Rue Jean Monnet, 31130 Balma",
    "coordinates": [
      43.6045,
      1.49452
    ],
    "prix": "1 650 € / an (Sous contrat d'association avec l'État)",
    "fraisScolariteAnnuel": 1650,
    "alternancePossible": true,
    "rythmeAlternance": "Voie scolaire avec 14 semaines de stage ou alternance 2j école / 3j entreprise",
    "tauxReussite": 96,
    "classementThotis": 23,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0312408Z",
      "codAffForm": "20220",
      "demandes": 314,
      "voeuxPhasePrincipale": 314,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 20,
      "pris": 20,
      "places": 18,
      "tauxAcces": 35,
      "rangDernierAppele": 34,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=20220&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0312408Z&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0312408Z"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 24 Janvier 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-01-24",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement privé sous contrat de grand prestige aux portes de Toulouse (métro Balma-Gramont). Saliège affiche des taux de réussite remarquables au BTS PI et une solide passerelle vers les écoles supérieures.",
    "atouts": [
      "96% de réussite au BTS PI",
      "Accompagnement rigoureux de type prépa",
      "Campus arboré moderne de 6 hectares",
      "Convention avec réseaux d'agences toulousains"
    ],
    "contacts": {
      "telephone": "05 61 58 70 00",
      "email": "contact@saliege.fr",
      "siteWeb": "https://www.saliege.fr"
    },
    "avis": {
      "note": 4.9,
      "totalAvis": 68,
      "commentaires": [
        {
          "auteur": "Bastien D.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Excellence et bienveillance. La préparation aux oraux de transaction est la meilleure de l'académie."
        },
        {
          "auteur": "Emma F.",
          "promo": "Diplômée 2023",
          "note": 5,
          "texte": "Le campus est superbe et les professeurs sont extrêmement impliqués."
        }
      ]
    }
  },
  {
    "id": "imsi-toulouse",
    "nom": "IMSI Toulouse - Institut du Management des Services Immobiliers",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Blagnac",
    "codePostal": "31700",
    "adresse": "186 Route de Grenade, 31700 Blagnac",
    "coordinates": [
      43.6394,
      1.3912
    ],
    "prix": "0 € en alternance / 6 200 € en initial",
    "fraisScolariteAnnuel": 6200,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Toulouse%20-%20Institut%20du%20Management%20des%20Services%20Immobiliers",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Toulouse%20-%20Institut%20du%20Management%20des%20Services%20Immobiliers"
    },
    "tauxElearning": 25,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 10h00 à 16h30",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "description": "École 100% dédiée à l'immobilier du Groupe IGENSIA Education (Campus René Cassin). Elle forme des négociateurs, gestionnaires de patrimoine et syndics en prise directe avec les agences de la métropole.",
    "atouts": [
      "Campus d'envergure internationale",
      "Job datings alternance exclusifs",
      "Masterclasses notaires et administrateurs",
      "Poursuite en Bachelor et Mastère"
    ],
    "contacts": {
      "telephone": "05 61 71 00 00",
      "email": "toulouse@imsi-formation.com",
      "siteWeb": "https://www.imsi-formation.com"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 73,
      "commentaires": [
        {
          "auteur": "Arthur R.",
          "promo": "Étudiant 2e année",
          "note": 5,
          "texte": "Trouvé mon alternance chez Foncia grâce au Career Center de l'IMSI dès le mois de mai !"
        }
      ]
    }
  },
  {
    "id": "esarc-evolution-toulouse",
    "nom": "ESARC Évolution Toulouse (Labège)",
    "type": "Privé sous contrat",
    "academie": "Toulouse",
    "ville": "Labège",
    "codePostal": "31670",
    "adresse": "500 Rue de l'Aéropostale, 31670 Labège",
    "coordinates": [
      43.5412,
      1.5178
    ],
    "prix": "0 € en alternance / 5 900 € en initial",
    "fraisScolariteAnnuel": 5900,
    "alternancePossible": true,
    "rythmeAlternance": "3 jours entreprise / 2 jours école",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESARC%20%C3%89volution%20Toulouse%20(Lab%C3%A8ge)",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESARC%20%C3%89volution%20Toulouse%20(Lab%C3%A8ge)"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 9h30 à 16h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    "description": "Implantée au cœur de la technopole Enova Labège, l'ESARC Toulouse est spécialiste de la préparation au BTS PI avec un suivi individualisé et un vaste réseau d'agences partenaires.",
    "atouts": [
      "Spécialiste du BTS depuis plus de 30 ans",
      "Coaching CV et simulations d'entretiens",
      "Diplôme d'État officiel",
      "Accès direct futur métro Ligne C"
    ],
    "contacts": {
      "telephone": "05 62 24 04 04",
      "email": "toulouse@esarc.fr",
      "siteWeb": "https://www.esarc-evolution.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 65,
      "commentaires": [
        {
          "auteur": "Lucas P.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Bonne école, équipe pédagogique à l'écoute et bon rythme en alternance."
        }
      ]
    }
  },
  {
    "id": "ecoles-vidal-toulouse",
    "nom": "Écoles Vidal Toulouse",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Toulouse",
    "codePostal": "31300",
    "adresse": "4 Rue de Jouanet, 31300 Toulouse",
    "coordinates": [
      43.5934,
      1.4182
    ],
    "prix": "0 € en alternance / 5 800 € en initial",
    "fraisScolariteAnnuel": 5800,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=%C3%89coles%20Vidal%20Toulouse",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=%C3%89coles%20Vidal%20Toulouse"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h30 à 17h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Institution toulousaine fondée en 1928 située près des Arènes, l'École Vidal est un acteur historique de l'alternance immobilière avec plus de 900 entreprises régionales partenaires.",
    "atouts": [
      "Plus de 90 ans d'expertise",
      "Proche pôle multimodal Arènes (Métro A, Tram, Bus)",
      "Placement en alternance personnalisé",
      "Ateliers logiciels métiers"
    ],
    "contacts": {
      "telephone": "05 61 76 56 56",
      "email": "admissions@ecoles-vidal.fr",
      "siteWeb": "https://www.ecoles-vidal.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 79,
      "commentaires": [
        {
          "auteur": "Chloé V.",
          "promo": "Diplômée 2024",
          "note": 5,
          "texte": "École sérieuse qui m'a permis de signer chez Nexity dès juillet. Je recommande !"
        }
      ]
    }
  },
  {
    "id": "espi-toulouse",
    "nom": "ESPI Toulouse - École Supérieure des Professions Immobilières",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Labège",
    "codePostal": "31670",
    "adresse": "Voie l'Occitane, Bâtiment Cybèle, 31670 Labège",
    "coordinates": [
      43.5428,
      1.5165
    ],
    "prix": "0 € en alternance / 6 600 € en initial",
    "fraisScolariteAnnuel": 6600,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Toulouse%20-%20%C3%89cole%20Sup%C3%A9rieure%20des%20Professions%20Immobili%C3%A8res",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Toulouse%20-%20%C3%89cole%20Sup%C3%A9rieure%20des%20Professions%20Immobili%C3%A8res"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 10h00 à 16h30",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "description": "Campus toulousain de la référence nationale de l'enseignement immobilier. L'ESPI allie une pédagogie d'experts professionnels avec un réseau alumni puissant de plus de 12 000 cadres en France.",
    "atouts": [
      "Pôle d'excellence immobilier",
      "Partenariat avec la FNAIM 31 & l'Ordre des Géomètres",
      "Simulations d'estimations et visites 3D",
      "Titres RNCP reconnus par l'État"
    ],
    "contacts": {
      "telephone": "05 61 00 22 22",
      "email": "admissions.toulouse@groupe-espi.fr",
      "siteWeb": "https://www.groupe-espi.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 91,
      "commentaires": [
        {
          "auteur": "Romain B.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le réseau de l'ESPI est imbattable dans le Sud-Ouest. Intervenants tous professionnels en exercice."
        }
      ]
    }
  },
  {
    "id": "efab-toulouse",
    "nom": "EFAB Toulouse - École Supérieure de l'Immobilier",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Toulouse",
    "codePostal": "31000",
    "adresse": "11 Boulevard des Récollets, 31400 Toulouse",
    "coordinates": [
      43.5852,
      1.4421
    ],
    "prix": "0 € en alternance / 6 100 € en initial",
    "fraisScolariteAnnuel": 6100,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Toulouse%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20l'Immobilier",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Toulouse%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20l'Immobilier"
    },
    "tauxElearning": 25,
    "datePortesOuvertes": "Samedi 7 Mars 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "description": "Membre du réseau Grandes Écoles de l'Immobilier, l'EFAB Toulouse prépare au BTS PI avec un accent fort mis sur les outils digitaux, les visites virtuelles et la négociation augmentée.",
    "atouts": [
      "Campus moderne quartier Saint-Agne / Récollets",
      "Logiciels professionnels inclus",
      "Job dating spécialisé",
      "Diplôme d'État"
    ],
    "contacts": {
      "telephone": "05 61 55 33 00",
      "email": "toulouse@efab.fr",
      "siteWeb": "https://www.efab.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 48,
      "commentaires": [
        {
          "auteur": "Nicolas M.",
          "promo": "Étudiant 2e année",
          "note": 4.5,
          "texte": "Bonne école et bonne ambiance. Les ateliers d'entraînement aux oraux sont très formateurs."
        }
      ]
    }
  },
  {
    "id": "lycee-skhole-dart-montauban",
    "nom": "Lycée Privé Skhole d'Art Montauban",
    "type": "Privé sous contrat",
    "academie": "Toulouse",
    "ville": "Montauban",
    "codePostal": "82000",
    "adresse": "20 Rue Léon Cladel, 82000 Montauban",
    "coordinates": [
      44.0165,
      1.35641
    ],
    "prix": "1 480 € / an (Sous contrat d'association Éducation Nationale)",
    "fraisScolariteAnnuel": 1480,
    "alternancePossible": true,
    "rythmeAlternance": "Voie initiale ou apprentissage en agences du Tarn-et-Garonne",
    "tauxReussite": 92,
    "classementThotis": 37,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0820904M",
      "codAffForm": "38385",
      "demandes": 147,
      "voeuxPhasePrincipale": 136,
      "voeuxPremierePlace": 0,
      "pctAdmisDebutPP": 0,
      "pris": 7,
      "places": 12,
      "tauxAcces": 76,
      "rangDernierAppele": 45,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=38385&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0820904M&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0820904M"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "description": "Seul lycée du Tarn-et-Garonne à proposer le BTS PI sous contrat, Skhole d'Art offre un encadrement à taille humaine et d'excellents débouchés dans le bassin montalbanais et toulousain.",
    "atouts": [
      "Seule section sous contrat du 82",
      "Classes à effectifs réduits (25 étudiants max)",
      "Réseau très soudé d'agences locales",
      "Excellente intégration"
    ],
    "contacts": {
      "telephone": "05 63 63 33 00",
      "email": "contact@skholedart82.com",
      "siteWeb": "https://www.skholedart82.com"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 43,
      "commentaires": [
        {
          "auteur": "Guillaume L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Petite promo donc les profs nous connaissent tous très bien. Stage trouvé chez Guy Hoquet Montauban sans problème."
        }
      ]
    }
  },
  {
    "id": "lycee-marie-curie-tarbes",
    "nom": "Lycée Public Marie Curie Tarbes",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Tarbes",
    "codePostal": "65000",
    "adresse": "21 Rue Georges Clemenceau, 65000 Tarbes",
    "coordinates": [
      43.2325,
      0.0768
    ],
    "prix": "0 € (Établissement Public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou contrat d'apprentissage",
    "tauxReussite": 91,
    "classementThotis": 40,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Marie%20Curie%20Tarbes",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Marie%20Curie%20Tarbes"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Grand pôle public des Hautes-Pyrénées, le Lycée Marie Curie prépare au BTS PI en intégrant les particularités des transactions en zone urbaine et les spécificités de l'immobilier pyrénéen et thermal.",
    "atouts": [
      "100% Gratuit",
      "Internat public disponible",
      "Ancrage sur les Pyrénées et le thermalisme",
      "Très bon taux de réussite"
    ],
    "contacts": {
      "telephone": "05 62 44 48 00",
      "email": "0650026e@ac-toulouse.fr",
      "siteWeb": "https://marie-curie.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 37,
      "commentaires": [
        {
          "auteur": "Mathieu P.",
          "promo": "Diplômé 2023",
          "note": 5,
          "texte": "Super formation publique. Très bonne ambiance et cadre au pied des montagnes."
        }
      ]
    }
  },
  {
    "id": "purple-campus-castres",
    "nom": "Purple Campus Castres - CCI Occitanie",
    "type": "Privé sous contrat",
    "academie": "Toulouse",
    "ville": "Castres",
    "codePostal": "81100",
    "adresse": "40 Allée Alphonse Juin, 81100 Castres",
    "coordinates": [
      43.6062,
      2.2415
    ],
    "prix": "0 € en alternance (Pris en charge OPCO)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Contrat d'apprentissage : 2 jours centre / 3 jours entreprise",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20Castres%20-%20CCI%20Occitanie",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20Castres%20-%20CCI%20Occitanie"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Centre de formation consulaire de la Chambre de Commerce et d'Industrie du Tarn, Purple Campus Castres offre une immersion 100% professionnelle en alternance dans les cabinets et agences du Tarn et de l'Occitanie.",
    "atouts": [
      "100% financé par l'apprentissage",
      "Réseau CCI d'entreprises partenaires",
      "Locaux récents et équipés",
      "Accompagnement placement"
    ],
    "contacts": {
      "telephone": "05 67 46 60 00",
      "email": "castres@purple-campus.com",
      "siteWeb": "https://www.purple-campus.com"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 31,
      "commentaires": [
        {
          "auteur": "Antoine S.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Le réseau de la CCI nous aide énormément à trouver une agence dans le 81."
        }
      ]
    }
  },
  {
    "id": "occitanie-business-school-albi",
    "nom": "Occitanie Business School Albi",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Albi",
    "codePostal": "81000",
    "adresse": "14 Rue Philippe Thomas, 81000 Albi",
    "coordinates": [
      43.9298,
      2.148
    ],
    "prix": "0 € en alternance / 5 200 € en initial",
    "fraisScolariteAnnuel": 5200,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Occitanie%20Business%20School%20Albi",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Occitanie%20Business%20School%20Albi"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "description": "École tertiaire albigeoise préparant au BTS PI pour dynamiser le secteur de la transaction et de la gestion de biens en pays tarnais et toulousain.",
    "atouts": [
      "Cadre à taille humaine",
      "Suivi tuteur individuel",
      "Réseau local étendu",
      "Diplôme d'État officiel"
    ],
    "contacts": {
      "telephone": "05 63 45 10 20",
      "email": "contact@occitanie-bs.fr",
      "siteWeb": "https://www.occitanie-business-school.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 26,
      "commentaires": [
        {
          "auteur": "Laurie F.",
          "promo": "Étudiante 2e année",
          "note": 4.5,
          "texte": "Très contente de faire mon BTS à Albi sans avoir à monter à Toulouse tous les jours."
        }
      ]
    }
  },
  {
    "id": "istef-toulouse",
    "nom": "ISTEF Toulouse - Institut Supérieur Tertiaire",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Toulouse",
    "codePostal": "31400",
    "adresse": "16 Rue Montaudran, 31400 Toulouse",
    "coordinates": [
      43.5815,
      1.4678
    ],
    "prix": "0 € en alternance / 5 600 € en initial",
    "fraisScolariteAnnuel": 5600,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ISTEF%20Toulouse%20-%20Institut%20Sup%C3%A9rieur%20Tertiaire",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ISTEF%20Toulouse%20-%20Institut%20Sup%C3%A9rieur%20Tertiaire"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 9h30 à 16h00",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Implanté dans le quartier Montaudran, l'ISTEF dispose d'un pôle immobilier reconnu avec des formateurs juristes, agents immobiliers et gestionnaires de copropriété.",
    "atouts": [
      "Quartier Montaudran Innovation",
      "Ateliers oraux réguliers",
      "Partenariats agences Century 21 & Orpi",
      "Diplôme national"
    ],
    "contacts": {
      "telephone": "05 61 24 50 50",
      "email": "contact@istef.fr",
      "siteWeb": "https://www.istef.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 41,
      "commentaires": [
        {
          "auteur": "Clément D.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Formateurs très professionnels et disponibles pour les révisions du BTS."
        }
      ]
    }
  },
  {
    "id": "institut-rousseau-toulouse",
    "nom": "Institut Rousseau Toulouse",
    "type": "Privé hors contrat",
    "academie": "Toulouse",
    "ville": "Toulouse",
    "codePostal": "31000",
    "adresse": "3 Rue Jean-Baptiste Dumas, 31200 Toulouse",
    "coordinates": [
      43.6212,
      1.4312
    ],
    "prix": "0 € en alternance / 5 400 € en initial",
    "fraisScolariteAnnuel": 5400,
    "alternancePossible": true,
    "rythmeAlternance": "Alternance 2 jours / 3 jours ou formation initiale",
    "tauxReussite": 87,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Institut%20Rousseau%20Toulouse",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Institut%20Rousseau%20Toulouse"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 10h00 à 15h30",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement d'enseignement supérieur tertiaire du nord de Toulouse proposant un cursus structuré en BTS Professions Immobilières avec simulations de plaidoiries juridiques et montages de mandats.",
    "atouts": [
      "Proche métro Barrière de Paris",
      "Suivi pédagogique régulier",
      "Aide à la recherche d'entreprise",
      "Titres d'État"
    ],
    "contacts": {
      "telephone": "05 61 57 20 20",
      "email": "contact@institut-rousseau.fr",
      "siteWeb": "https://www.institut-rousseau.fr"
    },
    "avis": {
      "note": 4.3,
      "totalAvis": 35,
      "commentaires": [
        {
          "auteur": "Sonia K.",
          "promo": "Étudiante 1ère année",
          "note": 4.5,
          "texte": "Bonne formation, les profs nous poussent à comprendre la fiscalité et le droit."
        }
      ]
    }
  },
  {
    "id": "lycee-ort-maurice-grynfogel-colomiers",
    "nom": "Lycée Privé & CFA ORT Maurice Grynfogel",
    "type": "Privé sous contrat",
    "academie": "Toulouse",
    "ville": "Colomiers",
    "codePostal": "31770",
    "adresse": "14 Rue de l'Église, 31770 Colomiers",
    "coordinates": [
      43.6125,
      1.3325
    ],
    "prix": "1 250 € / an sous statut scolaire (0 € en alternance CFA)",
    "fraisScolariteAnnuel": 1250,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise ou statut scolaire",
    "tauxReussite": 93,
    "classementThotis": 42,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Priv%C3%A9%20%26%20CFA%20ORT%20Maurice%20Grynfogel",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Priv%C3%A9%20%26%20CFA%20ORT%20Maurice%20Grynfogel"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Dimanche 8 Février 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-02-08",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Membre du réseau mondial ORT, cet établissement sous contrat d'association dispose d'une section BTS PI très réputée pour sa rigueur et son esprit d'accompagnement bienveillant.",
    "atouts": [
      "Établissement sous contrat d'État",
      "Taux de réussite supérieur à 90%",
      "Proximité pôle aéronautique et ouest toulousain",
      "Accompagnement vers l'emploi"
    ],
    "contacts": {
      "telephone": "05 61 30 50 00",
      "email": "toulouse@ort.asso.fr",
      "siteWeb": "https://toulouse.ort.asso.fr"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 46,
      "commentaires": [
        {
          "auteur": "David B.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Excellents profs, encadrement sérieux et suivi très professionnel."
        }
      ]
    }
  },
  {
    "id": "lycee-pardailhan-auch",
    "nom": "Lycée Polyvalent Public Pardailhan Auch",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Auch",
    "codePostal": "32000",
    "adresse": "Chemin de Baron, 32000 Auch",
    "coordinates": [
      43.6465,
      0.5856
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou apprentissage CFA académique",
    "tauxReussite": 89,
    "classementThotis": 38,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Polyvalent%20Public%20Pardailhan%20Auch",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Polyvalent%20Public%20Pardailhan%20Auch"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle public de référence pour le département du Gers, offrant un cadre d'études serein et un réseau solide avec les agences immobilières gersoises et de la métropole toulousaine.",
    "atouts": [
      "100% Gratuit",
      "Internat disponible pour les étudiants",
      "Petits effectifs et suivi sur-mesure",
      "Proximité du bassin gersois"
    ],
    "contacts": {
      "telephone": "05 62 61 42 00",
      "email": "0320002v@ac-toulouse.fr",
      "siteWeb": "https://pardailhan.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 32,
      "commentaires": [
        {
          "auteur": "Romain P.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Superbe encadrement familial et professeurs très disponibles. Stages faciles à trouver dans le Gers."
        }
      ]
    }
  },
  {
    "id": "lycee-monteil-rodez",
    "nom": "Lycée Polyvalent Public Alexis Monteil Rodez",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Rodez",
    "codePostal": "12000",
    "adresse": "1 Rue Francisco Ferrer, 12000 Rodez",
    "coordinates": [
      44.3516,
      2.5736
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Alternance Greta-CFA ou statut scolaire initial",
    "tauxReussite": 91,
    "classementThotis": 33,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Polyvalent%20Public%20Alexis%20Monteil%20Rodez",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Polyvalent%20Public%20Alexis%20Monteil%20Rodez"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement public de renom en Aveyron, le pôle tertiaire Monteil prépare efficacement aux transactions et à la gestion de copropriétés rurales et urbaines.",
    "atouts": [
      "Formation publique gratuite",
      "Excellente intégration professionnelle en Occitanie Nord",
      "Taux de réussite supérieur à 90%",
      "Internat et vie de campus"
    ],
    "contacts": {
      "telephone": "05 65 67 25 00",
      "email": "0120023g@ac-toulouse.fr",
      "siteWeb": "https://monteil.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 39,
      "commentaires": [
        {
          "auteur": "Élise M.",
          "promo": "Diplômée 2023",
          "note": 4.5,
          "texte": "Très bonne expérience, les cours de droit et de gestion de copropriété sont de grande qualité."
        }
      ]
    }
  },
  {
    "id": "lycee-clement-marot-cahors",
    "nom": "Lycée Polyvalent Public Clément Marot Cahors",
    "type": "Public",
    "academie": "Toulouse",
    "ville": "Cahors",
    "codePostal": "46000",
    "adresse": "Rue Victor Hugo, 46000 Cahors",
    "coordinates": [
      44.4499,
      1.43925
    ],
    "prix": "0 € (Lycée public gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Alternance Greta Quercy ou cursus scolaire initial",
    "tauxReussite": 88,
    "classementThotis": 36,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0460007H",
      "codAffForm": "25344",
      "demandes": 295,
      "voeuxPhasePrincipale": 295,
      "voeuxPremierePlace": 6,
      "pctAdmisDebutPP": 40,
      "pris": 15,
      "places": 18,
      "tauxAcces": 51,
      "rangDernierAppele": 41,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=25344&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0460007H&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0460007H"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 12h30",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "description": "Le pôle d'enseignement supérieur du Lot, connecté aux cabinets immobiliers et notaires du Quercy et de la vallée du Lot.",
    "atouts": [
      "100% financé par l'État",
      "Cadre de vie privilégié et calme",
      "Encadrement individualisé",
      "Très bons stages en transaction"
    ],
    "contacts": {
      "telephone": "05 65 20 38 00",
      "email": "0460002j@ac-toulouse.fr",
      "siteWeb": "https://clement-marot.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 28,
      "commentaires": [
        {
          "auteur": "Maxime D.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Une promo à taille humaine où les professeurs prennent vraiment le temps de nous former."
        }
      ]
    }
  },
  {
    "id": "lycee-enc-bessieres-paris",
    "nom": "École Nationale de Commerce (ENC Bessières)",
    "type": "Public",
    "academie": "Paris",
    "ville": "Paris 17e",
    "codePostal": "75017",
    "adresse": "70 Boulevard Bessières, 75017 Paris",
    "coordinates": [
      48.8975,
      2.31987
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou contrat d'apprentissage en agence",
    "tauxReussite": 97,
    "classementThotis": 1,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0750707L",
      "codAffForm": "9156",
      "demandes": 3013,
      "voeuxPhasePrincipale": 3013,
      "voeuxPremierePlace": 7,
      "pctAdmisDebutPP": 21,
      "pris": 34,
      "places": 35,
      "tauxAcces": 5,
      "rangDernierAppele": 78,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9156&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0750707L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0750707L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 16h30",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Institution publique d'excellence dans le 17e arrondissement de Paris. L'ENC Bessières est classée N°1 nationale du classement Thotis des BTS Professions Immobilières avec un taux d'accès record de 4% sur Parcoursup et une attractivité inégalée en Île-de-France.",
    "atouts": [
      "N°1 National Classement Thotis",
      "100% Gratuit d'État",
      "Taux d'accès sélectif de 4% sur Parcoursup",
      "Partenariat avec les plus grands cabinets parisiens"
    ],
    "contacts": {
      "telephone": "01 44 85 85 00",
      "email": "ce.0750697k@ac-paris.fr",
      "siteWeb": "https://enc-bessieres.fr"
    },
    "avis": {
      "note": 4.9,
      "totalAvis": 142,
      "commentaires": [
        {
          "auteur": "Sébastien L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le prestige de l'ENC ouvre toutes les portes dans l'immobilier parisien."
        },
        {
          "auteur": "Claire D.",
          "promo": "Étudiante 2e année",
          "note": 5,
          "texte": "Excellents professeurs de droit et transaction, très haut niveau."
        }
      ]
    }
  },
  {
    "id": "espi-paris",
    "nom": "ESPI Paris - École Supérieure des Professions Immobilières",
    "type": "Privé hors contrat",
    "academie": "Paris",
    "ville": "Paris",
    "codePostal": "75015",
    "adresse": "20-22 Rue du Théâtre, 75015 Paris",
    "coordinates": [
      48.8492,
      2.2878
    ],
    "prix": "0 € en alternance / 6 800 € en initial",
    "fraisScolariteAnnuel": 6800,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 96,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Paris%20-%20%C3%89cole%20Sup%C3%A9rieure%20des%20Professions%20Immobili%C3%A8res",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Paris%20-%20%C3%89cole%20Sup%C3%A9rieure%20des%20Professions%20Immobili%C3%A8res"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Pionnière de l'enseignement immobilier depuis 1972, l'ESPI forme des négociateurs, gestionnaires locatifs et syndics de haut vol. Réseau de plus de 4 000 entreprises partenaires dans toute l'Île-de-France.",
    "atouts": [
      "Pionnière de l'immobilier depuis 1972",
      "Job dating spécial alternance",
      "Réseau Alumni de 12 000 pros",
      "Titres RNCP reconnus"
    ],
    "contacts": {
      "telephone": "01 45 67 20 82",
      "email": "admissions.paris@groupe-espi.fr",
      "siteWeb": "https://www.groupe-espi.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 184,
      "commentaires": [
        {
          "auteur": "Maxime D.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Excellente école, professeurs tous issus du milieu professionnel (notaires, directeurs d'agences). Trouvé mon alternance chez Century 21 dès juin !"
        },
        {
          "auteur": "Camille L.",
          "promo": "Étudiante 2e année",
          "note": 5,
          "texte": "Le rythme 2j/3j permet de bien s'intégrer en agence. Suivi pédagogique au top."
        }
      ]
    }
  },
  {
    "id": "imsi-paris",
    "nom": "IMSI Paris - Institut du Management des Services Immobiliers",
    "type": "Privé sous contrat",
    "academie": "Paris",
    "ville": "Paris",
    "codePostal": "75010",
    "adresse": "12 Rue Alexandre Parodi, 75010 Paris",
    "coordinates": [
      48.8785,
      2.3682
    ],
    "prix": "0 € en alternance / 6 400 € en initial",
    "fraisScolariteAnnuel": 6400,
    "alternancePossible": true,
    "rythmeAlternance": "1 semaine école / 1 semaine entreprise",
    "tauxReussite": 94,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Paris%20-%20Institut%20du%20Management%20des%20Services%20Immobiliers",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Paris%20-%20Institut%20du%20Management%20des%20Services%20Immobiliers"
    },
    "tauxElearning": 25,
    "datePortesOuvertes": "Mercredi 25 Février 2026 de 14h00 à 18h00",
    "prochaineJPO": "2026-02-25",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "description": "L'IMSI est l'école de référence du Groupe IGENSIA Education dédiée au management de l'immobilier. Formation orientée transaction commerciale, gestion de patrimoine et property management.",
    "atouts": [
      "Campus Canal Saint-Martin",
      "Accompagnement placement 98%",
      "Masterclasses FNAIM & UNIS",
      "Parcours international optionnel"
    ],
    "contacts": {
      "telephone": "01 80 97 65 00",
      "email": "contact@imsi-formation.com",
      "siteWeb": "https://www.imsi-formation.com"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 110,
      "commentaires": [
        {
          "auteur": "Lucas V.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le rythme 1 sem/1 sem est idéal pour gérer de vrais dossiers de vente du mandat jusqu'au compromis."
        }
      ]
    }
  },
  {
    "id": "efab-paris",
    "nom": "EFAB Paris - École Supérieure de l'Immobilier",
    "type": "Privé hors contrat",
    "academie": "Paris",
    "ville": "Paris",
    "codePostal": "75009",
    "adresse": "20 Rue Joubert, 75009 Paris",
    "coordinates": [
      48.8765,
      2.3312
    ],
    "prix": "0 € en alternance / 6 200 € en initial",
    "fraisScolariteAnnuel": 6200,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Paris%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20l'Immobilier",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Paris%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20l'Immobilier"
    },
    "tauxElearning": 30,
    "datePortesOuvertes": "Samedi 7 Mars 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "description": "Membre du Réseau Grandes Écoles d'Immobilier, l'EFAB forme aux métiers de la négociation, du property management et de la promotion immobilière avec des outils de visite virtuelle 3D.",
    "atouts": [
      "Pédagogie par projets",
      "Logiciels métiers (NéoSphère, Pericles) inclus",
      "Job dating mensuel",
      "Aide personnalisée à la recherche d'entreprise"
    ],
    "contacts": {
      "telephone": "01 44 40 01 20",
      "email": "admissions@efab.fr",
      "siteWeb": "https://www.efab.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 118,
      "commentaires": [
        {
          "auteur": "Mathilde G.",
          "promo": "Étudiante 2e année",
          "note": 4.5,
          "texte": "J'ai appris à utiliser les vrais logiciels d'agence dès le premier mois. Très professionnalisant !"
        }
      ]
    }
  },
  {
    "id": "lycee-saint-jean-de-passy-paris",
    "nom": "Lycée Public Jean Lurçat Paris 13e",
    "type": "Privé sous contrat",
    "academie": "Paris",
    "ville": "Paris 13e",
    "codePostal": "75016",
    "adresse": "72 Rue Raynouard, 75016 Paris",
    "coordinates": [
      48.8342,
      2.35325
    ],
    "prix": "1 850 € / an (Sous contrat d'association)",
    "fraisScolariteAnnuel": 1850,
    "alternancePossible": false,
    "rythmeAlternance": "Formation initiale temps plein (14 semaines de stages professionnels)",
    "tauxReussite": 98,
    "classementThotis": 11,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0753268V",
      "codAffForm": "9379",
      "demandes": 2750,
      "voeuxPhasePrincipale": 2750,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 8,
      "pris": 36,
      "places": 35,
      "tauxAcces": 14,
      "rangDernierAppele": 112,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9379&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0753268V&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0753268V"
    },
    "tauxElearning": 5,
    "datePortesOuvertes": "Samedi 10 Janvier 2026 de 10h00 à 15h00",
    "prochaineJPO": "2026-01-10",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "description": "Une des sections les plus sélectives et renommées de la capitale en formation initiale. Idéal pour les étudiants souhaitant poursuivre vers les grandes écoles de commerce ou licences immobilières.",
    "atouts": [
      "98% de réussite au diplôme",
      "Encadrement d'élite",
      "Stages dans les plus belles agences du Triangle d'Or",
      "Bibliothèque et salles de travail 7j/7"
    ],
    "contacts": {
      "telephone": "01 44 30 20 00",
      "email": "bts.pi@saintjeandepassy.fr",
      "siteWeb": "https://www.saintjeandepassy.fr"
    },
    "avis": {
      "note": 4.9,
      "totalAvis": 44,
      "commentaires": [
        {
          "auteur": "Guillaume de M.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le meilleur tremplin académique pour ensuite intégrer un Master en gestion de patrimoine ou promotion."
        }
      ]
    }
  },
  {
    "id": "lycee-paul-painleve-courbevoie",
    "nom": "Lycée Public Maurice Genevoix Montrouge",
    "type": "Public",
    "academie": "Versailles",
    "ville": "Montrouge",
    "codePostal": "92400",
    "adresse": "3 Rue Joseph Rivière, 92400 Courbevoie",
    "coordinates": [
      48.8104,
      2.32325
    ],
    "prix": "0 € (Établissement Public gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Mixte : statut scolaire avec stages ou apprentissage CFA",
    "tauxReussite": 91,
    "classementThotis": 15,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0921399W",
      "codAffForm": "11117",
      "demandes": 1090,
      "voeuxPhasePrincipale": 1090,
      "voeuxPremierePlace": 0,
      "pctAdmisDebutPP": 0,
      "pris": 29,
      "places": 32,
      "tauxAcces": 26,
      "rangDernierAppele": 65,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11117&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0921399W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0921399W"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Lycée d'excellence de l'ouest parisien à 10 minutes de La Défense. Excellents résultats académiques et partenariats étroits avec les agences immobilières du 92 et de Paris Ouest.",
    "atouts": [
      "100% Gratuit",
      "Proche quartier d'affaires La Défense",
      "Équipe professorale agrégée",
      "Taux de réussite constant > 90%"
    ],
    "contacts": {
      "telephone": "01 43 33 22 15",
      "email": "ce.0921495c@ac-versailles.fr",
      "siteWeb": "https://www.lyceepainleve.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 92,
      "commentaires": [
        {
          "auteur": "Inès M.",
          "promo": "Diplômée 2024",
          "note": 5,
          "texte": "Très bon encadrement public, pas de frais de scolarité et une rigueur qui fait la différence le jour de l'examen."
        }
      ]
    }
  },
  {
    "id": "lycee-marcelin-berthelot-pantien",
    "nom": "Lycée Public Olympe De Gouges Noisy-le-Sec",
    "type": "Public",
    "academie": "Créteil",
    "ville": "Noisy-le-Sec",
    "codePostal": "93500",
    "adresse": "110 Rue de Paris, 93500 Pantin",
    "coordinates": [
      48.8887,
      2.47001
    ],
    "prix": "0 € (Service Public)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Alternance CFA ou formation continue initiale",
    "tauxReussite": 88,
    "classementThotis": 17,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0930123D",
      "codAffForm": "11187",
      "demandes": 1463,
      "voeuxPhasePrincipale": 1463,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 9,
      "pris": 22,
      "places": 30,
      "tauxAcces": 17,
      "rangDernierAppele": 89,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11187&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0930123D&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0930123D"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 9h00 à 12h30",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Au cœur du Grand Paris et des projets immobiliers majeurs du nord-est parisien, ce lycée prépare à tous les défis de la régénération urbaine et du logement social.",
    "atouts": [
      "Proximité immédiate métro Ligne 5",
      "Gratuité totale des études",
      "Partenariats Bailleurs Sociaux IDF",
      "Équipe expérimentée"
    ],
    "contacts": {
      "telephone": "01 48 45 20 10",
      "email": "ce.0930128k@ac-creteil.fr",
      "siteWeb": "https://lyceeberthelotpantin.fr"
    },
    "avis": {
      "note": 4.3,
      "totalAvis": 41,
      "commentaires": [
        {
          "auteur": "Sonia A.",
          "promo": "Diplômée 2024",
          "note": 4.5,
          "texte": "Beaucoup d'écoute et de bienveillance. Les profs font tout pour notre réussite."
        }
      ]
    }
  },
  {
    "id": "sciences-u-lyon",
    "nom": "Sciences-U Lyon - Pôle Immobilier Efficom",
    "type": "Privé hors contrat",
    "academie": "Lyon",
    "ville": "Lyon 3e",
    "codePostal": "69003",
    "adresse": "53 Cours Albert Thomas, 69003 Lyon",
    "coordinates": [
      45.7477,
      4.86554
    ],
    "prix": "0 € en alternance / 5 950 € en initial",
    "fraisScolariteAnnuel": 5950,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0690670D",
      "codAffForm": "26524",
      "demandes": 125,
      "voeuxPhasePrincipale": 124,
      "voeuxPremierePlace": 11,
      "pctAdmisDebutPP": 85,
      "pris": 13,
      "places": 120,
      "tauxAcces": 62,
      "rangDernierAppele": 36,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=26524&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0690670D&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0690670D"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Campus de référence à Lyon 3ème, Sciences-U propose un BTS PI ultra opérationnel avec des simulations de transactions réelles et une spécialisation poussée en syndic de copropriété.",
    "atouts": [
      "Grand campus métro Sans Souci",
      "Équipements numériques & VR immobilière",
      "Pôle relations entreprises dédié",
      "Poursuite en Bachelor & Mastère"
    ],
    "contacts": {
      "telephone": "04 26 29 01 01",
      "email": "contact@sciences-u-lyon.fr",
      "siteWeb": "https://www.sciences-u-lyon.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 135,
      "commentaires": [
        {
          "auteur": "Chloé P.",
          "promo": "Étudiante 2e année",
          "note": 5,
          "texte": "Les projets tuteurés sont géniaux : on a monté un vrai dossier de gestion locative de A à Z."
        }
      ]
    }
  },
  {
    "id": "lycee-monge-chambery",
    "nom": "Lycée Public Tom Morel Annecy",
    "type": "Public",
    "academie": "Lyon",
    "ville": "Annecy",
    "codePostal": "73000",
    "adresse": "119 Avenue Marius Berroir, 73000 Chambéry",
    "coordinates": [
      45.895,
      6.10037
    ],
    "prix": "0 € (Enseignement Public)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Initial avec stages ou apprentissage en stations et vallée",
    "tauxReussite": 95,
    "classementThotis": 21,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0741164N",
      "codAffForm": "35116",
      "demandes": 607,
      "voeuxPhasePrincipale": 607,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 7,
      "pris": 14,
      "places": 14,
      "tauxAcces": 24,
      "rangDernierAppele": 53,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=35116&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0741164N&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0741164N"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Spécificité unique en France : forte ouverture sur l'immobilier de montagne, la gestion de résidences de tourisme et les transactions de chalets dans les Alpes.",
    "atouts": [
      "Spécialisation immobilier de montagne",
      "Gratuit",
      "Taux de réussite record 95%",
      "Opportunités d'embauche en stations"
    ],
    "contacts": {
      "telephone": "04 79 69 20 00",
      "email": "ce.0730018a@ac-grenoble.fr",
      "siteWeb": "https://monge.ent.auvergnerhonealpes.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 39,
      "commentaires": [
        {
          "auteur": "Florian M.",
          "promo": "Diplômé 2023",
          "note": 5,
          "texte": "Le top pour travailler en agence de montagne à Courchevel, Val Thorens ou Annecy !"
        }
      ]
    }
  },
  {
    "id": "lycee-fernand-daguin-merignac",
    "nom": "Lycée Public Fernand Daguin Mérignac",
    "type": "Public",
    "academie": "Bordeaux",
    "ville": "Mérignac",
    "codePostal": "33700",
    "adresse": "15 Rue de la Victoire, 33700 Mérignac",
    "coordinates": [
      44.8359,
      -0.65044
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou contrat d'apprentissage",
    "tauxReussite": 93,
    "classementThotis": 10,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0331760J",
      "codAffForm": "4366",
      "demandes": 1426,
      "voeuxPhasePrincipale": 1426,
      "voeuxPremierePlace": 22,
      "pctAdmisDebutPP": 65,
      "pris": 34,
      "places": 35,
      "tauxAcces": 21,
      "rangDernierAppele": 120,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4366&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0331760J&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0331760J"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Le lycée public de référence pour le BTS PI dans la métropole bordelaise. Très sélectif sur Parcoursup avec un taux de placement exceptionnel et des partenariats FNAIM Gironde.",
    "atouts": [
      "100% Gratuit d'État",
      "Proximité immédiate tramway A Mérignac Centre",
      "Taux de réussite 93%",
      "Partenariats promoteurs bordelais"
    ],
    "contacts": {
      "telephone": "05 56 12 11 00",
      "email": "ce.0330103h@ac-bordeaux.fr",
      "siteWeb": "https://lyceedaguin-merignac.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 74,
      "commentaires": [
        {
          "auteur": "Laura G.",
          "promo": "Diplômée 2024",
          "note": 5,
          "texte": "Le meilleur lycée public pour le BTS PI en Gironde. Des profs exigeants et investis."
        }
      ]
    }
  },
  {
    "id": "lycee-gustave-eiffel-bordeaux",
    "nom": "Lycée Public Gustave Eiffel Bordeaux",
    "type": "Public",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33000",
    "adresse": "143 Cours de la Marne, 33800 Bordeaux",
    "coordinates": [
      44.8256,
      -0.5615
    ],
    "prix": "0 € (Service Public gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Apprentissage CFA académique ou statut scolaire sous convention",
    "tauxReussite": 92,
    "classementThotis": 24,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Gustave%20Eiffel%20Bordeaux",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Gustave%20Eiffel%20Bordeaux"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 16h30",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Implanté à proximité de la gare Saint-Jean, le Lycée Gustave Eiffel dispose d'une section BTS PI très demandée sur Parcoursup avec un ancrage fort sur le bassin aquitain.",
    "atouts": [
      "100% financé par l'État",
      "Ateliers juridiques avec notaires bordelais",
      "Excellente cote auprès des réseaux régionaux",
      "Accès direct Tramway"
    ],
    "contacts": {
      "telephone": "05 56 33 83 00",
      "email": "ce.0330026z@ac-bordeaux.fr",
      "siteWeb": "https://www.eiffel-bordeaux.org"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 88,
      "commentaires": [
        {
          "auteur": "Antoine F.",
          "promo": "Diplômé 2023",
          "note": 5,
          "texte": "Qualité d'enseignement irréprochable. L'équipe enseignante nous pousse à donner le meilleur."
        }
      ]
    }
  },
  {
    "id": "lycee-victor-louis-talence",
    "nom": "Lycée Public Victor Louis / Greta Talence",
    "type": "Public",
    "academie": "Bordeaux",
    "ville": "Talence",
    "codePostal": "33400",
    "adresse": "Avenue de Thouars, 33400 Talence",
    "coordinates": [
      44.8012,
      -0.5925
    ],
    "prix": "0 € (Service public / apprentissage financé OPCO)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Alternance Greta CFA Aquitaine 2 jours / 3 jours",
    "tauxReussite": 89,
    "classementThotis": 28,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Victor%20Louis%20%2F%20Greta%20Talence",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Public%20Victor%20Louis%20%2F%20Greta%20Talence"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Grand lycée public du sud bordelais connecté au campus universitaire de Talence-Pessac. Formation en alternance reconnue pour les métiers de la gestion locative et du syndic.",
    "atouts": [
      "Pôle universitaire et scientifique",
      "Alternance prise en charge à 100%",
      "Grand réseau d'anciens en Gironde",
      "Ligne de bus et tram directes"
    ],
    "contacts": {
      "telephone": "05 56 80 76 40",
      "email": "ce.0330145c@ac-bordeaux.fr",
      "siteWeb": "https://lyceevictorlouis.net"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 48,
      "commentaires": [
        {
          "auteur": "Julien B.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Parcours très formateur avec une vraie mise en pratique en gestion de copropriété."
        }
      ]
    }
  },
  {
    "id": "espi-bordeaux",
    "nom": "ESPI Bordeaux - Bassins à Flot",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33300",
    "adresse": "9 Rue René Cassin, 33300 Bordeaux",
    "coordinates": [
      44.8573,
      -0.5542
    ],
    "prix": "0 € en alternance / 6 900 € en initial",
    "fraisScolariteAnnuel": 6900,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 94,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Bordeaux%20-%20Bassins%20%C3%A0%20Flot",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Bordeaux%20-%20Bassins%20%C3%A0%20Flot"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 24 Janvier 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-01-24",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "description": "Fondée par les organisations professionnelles de l'immobilier (FNAIM, UNIS, FPI), l'ESPI Bordeaux est implantée dans le quartier moderne des Bassins à Flot. Réseau d'entreprises partenaires inégalé en Aquitaine.",
    "atouts": [
      "Créée par les syndicats de l'immobilier",
      "Poursuite d'études jusqu'au Bac+5 Mastère",
      "96% d'insertion professionnelle à 6 mois",
      "Campus ultramoderne face au port"
    ],
    "contacts": {
      "telephone": "05 56 48 50 50",
      "email": "admissions-bordeaux@groupe-espi.fr",
      "siteWeb": "https://www.groupe-espi.fr/campus/bordeaux/"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 112,
      "commentaires": [
        {
          "auteur": "Camille M.",
          "promo": "Diplômée 2024",
          "note": 5,
          "texte": "L'école de référence absolue dans l'immobilier à Bordeaux. Mon alternance m'a permis de signer un CDI avant même les résultats."
        }
      ]
    }
  },
  {
    "id": "esarc-evolution-bordeaux",
    "nom": "ESARC Évolution Bordeaux Mérignac",
    "type": "Privé sous contrat",
    "academie": "Bordeaux",
    "ville": "Mérignac",
    "codePostal": "33700",
    "adresse": "8 Rue des Frères Lumière, 33700 Mérignac",
    "coordinates": [
      44.8322,
      -0.6514
    ],
    "prix": "0 € en alternance / 5 800 € en initial",
    "fraisScolariteAnnuel": 5800,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESARC%20%C3%89volution%20Bordeaux%20M%C3%A9rignac",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESARC%20%C3%89volution%20Bordeaux%20M%C3%A9rignac"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "description": "L'école des BTS par excellence en Gironde. L'ESARC propose un encadrement resserré et un centre de carrières qui place plus de 90% des alternants.",
    "atouts": [
      "Spécialiste du BTS depuis 30 ans",
      "Coaching CV & simulations d'entretien",
      "Réseau étendu en Gironde et Bassin d'Arcachon",
      "Diplôme d'État"
    ],
    "contacts": {
      "telephone": "05 56 12 13 14",
      "email": "bordeaux@esarc.fr",
      "siteWeb": "https://www.esarc-evolution.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 62,
      "commentaires": [
        {
          "auteur": "Maxence T.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne école avec un vrai suivi par notre tuteur école. Stage et alternance trouvés grâce au forum de l'école."
        }
      ]
    }
  },
  {
    "id": "suptertiaire-bordeaux",
    "nom": "Suptertiaire Immobilier Bordeaux Chartrons",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33000",
    "adresse": "37 Quai des Chartrons, 33000 Bordeaux",
    "coordinates": [
      44.8512,
      -0.5694
    ],
    "prix": "0 € en alternance / 5 950 € en initial",
    "fraisScolariteAnnuel": 5950,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours en formation / 3 jours en entreprise",
    "tauxReussite": 92,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Suptertiaire%20Immobilier%20Bordeaux%20Chartrons",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Suptertiaire%20Immobilier%20Bordeaux%20Chartrons"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 10h00 à 16h30",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    "description": "École nationale spécialisée à 100% dans les métiers de l'immobilier. Située sur les magnifiques quais des Chartrons à Bordeaux, elle met l'accent sur la transaction de prestige et la gestion locative.",
    "atouts": [
      "100% dédié aux métiers immobiliers",
      "Quais des Chartrons, cadre de vie exceptionnel",
      "Job datings réguliers",
      "Logiciels métiers professionnels (Pericles, Néo)"
    ],
    "contacts": {
      "telephone": "05 56 00 90 90",
      "email": "bordeaux@suptertiaire.com",
      "siteWeb": "https://www.suptertiaire.com"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 51,
      "commentaires": [
        {
          "auteur": "Théo V.",
          "promo": "Diplômé 2023",
          "note": 5,
          "texte": "Une école avec des intervenants professionnels du terrain. Très bonne ambiance sur les quais."
        }
      ]
    }
  },
  {
    "id": "efab-bordeaux",
    "nom": "EFAB Bordeaux Euratlantique",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33800",
    "adresse": "85 Rue d'Armagnac, 33800 Bordeaux",
    "coordinates": [
      44.8219,
      -0.5518
    ],
    "prix": "0 € en alternance / 6 100 € en initial",
    "fraisScolariteAnnuel": 6100,
    "alternancePossible": true,
    "rythmeAlternance": "3 jours en entreprise / 2 jours en cours",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Bordeaux%20Euratlantique",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EFAB%20Bordeaux%20Euratlantique"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 10h00 à 15h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "description": "L'EFAB Bordeaux s'intègre au cœur du grand projet urbain Bordeaux Euratlantique. Formations immobilières du BTS au Bac+5 orientées vers le property management et la transition énergétique des bâtiments.",
    "atouts": [
      "Quartier d'affaires Euratlantique",
      "Cursus immobilier certifié",
      "Nombreux partenariats avec bailleurs sociaux",
      "Réseau national Réseau Compétences & Développement"
    ],
    "contacts": {
      "telephone": "05 56 79 38 38",
      "email": "contact-bordeaux@efab.fr",
      "siteWeb": "https://www.efab.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 42,
      "commentaires": [
        {
          "auteur": "Sarah L.",
          "promo": "Étudiante 2e année",
          "note": 4.5,
          "texte": "Le quartier Euratlantique est super pour faire des visites de programmes neufs. Formateurs au top."
        }
      ]
    }
  },
  {
    "id": "imsi-bordeaux",
    "nom": "IMSI Bordeaux - Institut du Management Immobilier",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33000",
    "adresse": "Campus Magellan, 11 Rue de Candale, 33000 Bordeaux",
    "coordinates": [
      44.8329,
      -0.5731
    ],
    "prix": "0 € en alternance / 6 400 € en initial",
    "fraisScolariteAnnuel": 6400,
    "alternancePossible": true,
    "rythmeAlternance": "Rythme alterné 2 jours école / 3 jours entreprise",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Bordeaux%20-%20Institut%20du%20Management%20Immobilier",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=IMSI%20Bordeaux%20-%20Institut%20du%20Management%20Immobilier"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Membre du Groupe IGS, l'IMSI forme des professionnels de haut niveau en gestion d'actifs, administration de biens et transaction. Accompagnement individualisé vers l'alternance.",
    "atouts": [
      "Label de référence de l'immobilier d'entreprise",
      "Quartier historique Victoire/Candale",
      "Taux de réussite élevé",
      "Diplôme d'État BTS PI"
    ],
    "contacts": {
      "telephone": "05 56 87 23 45",
      "email": "imsi-bordeaux@groupe-igs.fr",
      "siteWeb": "https://www.imsi-formation.com"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 68,
      "commentaires": [
        {
          "auteur": "Guillaume D.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "L'IMSI m'a permis de trouver une alternance chez un grand administrateur de biens bordelais dès le mois de mai."
        }
      ]
    }
  },
  {
    "id": "talis-bordeaux",
    "nom": "TALIS Business School Bordeaux Lac",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bordeaux",
    "codePostal": "33300",
    "adresse": "Rue du Professeur Darget, 33300 Bordeaux",
    "coordinates": [
      44.8821,
      -0.5702
    ],
    "prix": "0 € en alternance CFA / 5 500 € en initial",
    "fraisScolariteAnnuel": 5500,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours agence",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Business%20School%20Bordeaux%20Lac",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Business%20School%20Bordeaux%20Lac"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 9h30 à 13h30",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    "description": "Implanté à Bordeaux Lac, Talis est un acteur majeur de la formation par alternance en Nouvelle-Aquitaine avec un pôle immobilier très actif.",
    "atouts": [
      "Campus spacieux à Bordeaux Lac",
      "Aide à la recherche d'entreprise",
      "Poursuite d'études en Bachelor Immobilier",
      "Prise en charge OPCO"
    ],
    "contacts": {
      "telephone": "05 56 69 49 49",
      "email": "bordeaux@talis-bs.com",
      "siteWeb": "https://www.talis-bs.com"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 44,
      "commentaires": [
        {
          "auteur": "Anaïs R.",
          "promo": "Diplômée 2023",
          "note": 4,
          "texte": "Équipe pédagogique très dynamique et bon suivi tuteur en entreprise."
        }
      ]
    }
  },
  {
    "id": "lycee-francis-jammes-orthez",
    "nom": "Lycée Professionnel Public Francis Jammes Orthez",
    "type": "Public",
    "academie": "Bordeaux",
    "ville": "Orthez",
    "codePostal": "64300",
    "adresse": "Rue Francis Jammes, 64300 Orthez",
    "coordinates": [
      43.4883,
      -0.7719
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Apprentissage CFA académique ou statut scolaire",
    "tauxReussite": 91,
    "classementThotis": 34,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Professionnel%20Public%20Francis%20Jammes%20Orthez",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Lyc%C3%A9e%20Professionnel%20Public%20Francis%20Jammes%20Orthez"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "L'unique lycée public préparant au BTS Professions Immobilières dans les Pyrénées-Atlantiques (64), idéalement situé à mi-chemin entre Pau, Dax et Bayonne.",
    "atouts": [
      "Seul BTS PI public du département 64",
      "Internat disponible pour les étudiants",
      "Partenariats Béarn et Pays Basque",
      "100% gratuit"
    ],
    "contacts": {
      "telephone": "05 59 69 14 44",
      "email": "ce.0640049k@ac-bordeaux.fr",
      "siteWeb": "https://lyceefrancisjammes.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 37,
      "commentaires": [
        {
          "auteur": "Nicolas P.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne ambiance de promotion et un vrai esprit d'entraide. Les profs nous soutiennent énormément."
        }
      ]
    }
  },
  {
    "id": "institut-saint-dominique-pau",
    "nom": "Pôle Supérieur Saint-Dominique Pau",
    "type": "Privé sous contrat",
    "academie": "Bordeaux",
    "ville": "Pau",
    "codePostal": "64000",
    "adresse": "30 Rue Montpensier, 64000 Pau",
    "coordinates": [
      43.2951,
      -0.3708
    ],
    "prix": "1 400 € / an sous statut scolaire (0 € en alternance CFA)",
    "fraisScolariteAnnuel": 1400,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours cours / 3 jours agence ou statut scolaire classique",
    "tauxReussite": 93,
    "classementThotis": 27,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=P%C3%B4le%20Sup%C3%A9rieur%20Saint-Dominique%20Pau",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=P%C3%B4le%20Sup%C3%A9rieur%20Saint-Dominique%20Pau"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Institution réputée au centre-ville de Pau sous contrat d'association avec l'État. Le pôle supérieur prépare au BTS PI avec un taux d'obtention remarquable et un solide réseau béarnais.",
    "atouts": [
      "Établissement sous contrat d'État",
      "Centre-ville de Pau",
      "Taux de réussite supérieur à 90%",
      "Réseau FNAIM Béarn & Soule"
    ],
    "contacts": {
      "telephone": "05 59 27 41 85",
      "email": "superieur@saintdominique.fr",
      "siteWeb": "https://www.saintdominique.fr"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 52,
      "commentaires": [
        {
          "auteur": "Mathilde L.",
          "promo": "Diplômée 2023",
          "note": 5,
          "texte": "Cadre superbe, professeurs très disponibles et excellents résultats à l'examen final."
        }
      ]
    }
  },
  {
    "id": "eduka-bayonne",
    "nom": "EDUKA Bayonne - École de l'Immobilier Pays Basque",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bayonne",
    "codePostal": "64100",
    "adresse": "44 Allée Marines, 64100 Bayonne",
    "coordinates": [
      43.4929,
      -1.4748
    ],
    "prix": "0 € en alternance / 5 600 € en initial",
    "fraisScolariteAnnuel": 5600,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EDUKA%20Bayonne%20-%20%C3%89cole%20de%20l'Immobilier%20Pays%20Basque",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=EDUKA%20Bayonne%20-%20%C3%89cole%20de%20l'Immobilier%20Pays%20Basque"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 10h00 à 16h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    "description": "École implantée au cœur du bassin BAB (Biarritz-Anglet-Bayonne), spécialisée dans l'immobilier résidentiel haut de gamme de la côte basque et la gestion locative saisonnière.",
    "atouts": [
      "Spécificité marché immobilier Côte Basque & Landes",
      "Alternance 100% financée",
      "Proximité de la gare et centre historique",
      "Formateurs agents immobiliers en exercice"
    ],
    "contacts": {
      "telephone": "05 59 59 10 20",
      "email": "bayonne@eduka-ecole.fr",
      "siteWeb": "https://eduka-ecole.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 41,
      "commentaires": [
        {
          "auteur": "Peio E.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le marché de la côte basque est très dynamique et l'école a des contacts dans toutes les agences locales."
        }
      ]
    }
  },
  {
    "id": "talis-bayonne",
    "nom": "TALIS Campus Bayonne BAB",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Bayonne",
    "codePostal": "64100",
    "adresse": "8 Chemin de la Marouette, 64100 Bayonne",
    "coordinates": [
      43.4862,
      -1.4925
    ],
    "prix": "0 € en alternance / 5 400 € en initial",
    "fraisScolariteAnnuel": 5400,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Campus%20Bayonne%20BAB",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Campus%20Bayonne%20BAB"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 9h30 à 13h00",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "description": "Campus dynamique à Bayonne Marouette proposant le BTS PI en contrat d'apprentissage ou professionnalisation, avec poursuite en Bachelor Gestionnaire d'Actifs Immobiliers.",
    "atouts": [
      "Campus convivial à taille humaine",
      "Placement en alternance sur le BAB et le sud des Landes",
      "Diplôme d'État",
      "Activités sportives et vie étudiante"
    ],
    "contacts": {
      "telephone": "05 59 52 05 20",
      "email": "bayonne@talis-bs.com",
      "siteWeb": "https://www.talis-bs.com"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 35,
      "commentaires": [
        {
          "auteur": "Xavier B.",
          "promo": "Étudiant 2e année",
          "note": 4.5,
          "texte": "Très bon accompagnement pour signer son contrat d'apprentissage."
        }
      ]
    }
  },
  {
    "id": "campus-ermitage-agen",
    "nom": "Pôle Supérieur Campus Ermitage Agen",
    "type": "Privé sous contrat",
    "academie": "Bordeaux",
    "ville": "Agen",
    "codePostal": "47000",
    "adresse": "56 Rue de l'Ermitage, 47000 Agen",
    "coordinates": [
      44.2031,
      0.6164
    ],
    "prix": "1 350 € / an sous statut scolaire (0 € en alternance)",
    "fraisScolariteAnnuel": 1350,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise ou scolaire classique",
    "tauxReussite": 90,
    "classementThotis": 35,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=P%C3%B4le%20Sup%C3%A9rieur%20Campus%20Ermitage%20Agen",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=P%C3%B4le%20Sup%C3%A9rieur%20Campus%20Ermitage%20Agen"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Le pôle supérieur de référence en Lot-et-Garonne regroupant les filières juridiques, notariales et immobilières. Cadre historique exceptionnel sur les hauteurs d'Agen.",
    "atouts": [
      "Lycée sous contrat d'État",
      "Pôle notariat et immobilier",
      "Proximité des agences agenaises et villeneuvoises",
      "Résidence étudiante"
    ],
    "contacts": {
      "telephone": "05 53 77 66 00",
      "email": "contact@campus-ermitage.fr",
      "siteWeb": "https://www.campus-ermitage.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 40,
      "commentaires": [
        {
          "auteur": "Cédric M.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Des cours de droit très solides grâce à la proximité avec la section notariale."
        }
      ]
    }
  },
  {
    "id": "talis-perigueux",
    "nom": "TALIS Campus Périgueux Dordogne",
    "type": "Privé hors contrat",
    "academie": "Bordeaux",
    "ville": "Périgueux",
    "codePostal": "24000",
    "adresse": "20 Rue Gambetta, 24000 Périgueux",
    "coordinates": [
      45.1842,
      0.7215
    ],
    "prix": "0 € en alternance / 5 300 € en initial",
    "fraisScolariteAnnuel": 5300,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours cours / 3 jours entreprise",
    "tauxReussite": 87,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Campus%20P%C3%A9rigueux%20Dordogne",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=TALIS%20Campus%20P%C3%A9rigueux%20Dordogne"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 7 Mars 2026 de 9h30 à 13h00",
    "prochaineJPO": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "description": "Campus de proximité au centre de Périgueux, préparant au BTS PI en apprentissage au contact direct du marché immobilier périgourdin (belles demeures, gîtes, résidences secondaires).",
    "atouts": [
      "Périgueux centre-ville",
      "Spécificité immobilier de charme et rural",
      "Alternance 100% financée",
      "Suivi individualisé"
    ],
    "contacts": {
      "telephone": "05 53 05 50 50",
      "email": "perigueux@talis-bs.com",
      "siteWeb": "https://www.talis-bs.com"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 31,
      "commentaires": [
        {
          "auteur": "Baptiste F.",
          "promo": "Diplômé 2023",
          "note": 4.5,
          "texte": "Bonne formation pour s'installer en agence en Dordogne."
        }
      ]
    }
  },
  {
    "id": "cfa-landes-dax",
    "nom": "Campus Landes / CFA de Dax",
    "type": "Privé sous contrat",
    "academie": "Bordeaux",
    "ville": "Dax",
    "codePostal": "40100",
    "adresse": "128 Avenue Saint-Vincent de Paul, 40100 Dax",
    "coordinates": [
      43.7088,
      -1.0536
    ],
    "prix": "0 € en alternance (Prise en charge OPCO)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours CFA / 3 jours agence",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Campus%20Landes%20%2F%20CFA%20de%20Dax",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Campus%20Landes%20%2F%20CFA%20de%20Dax"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 14h00",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle consulaire de formation par alternance dans le sud des Landes. Partenariat avec les agences du thermalisme dacquois et du littoral landais (Hossegor, Capbreton).",
    "atouts": [
      "100% financé en contrat d'apprentissage",
      "Immobilier thermal et littoral",
      "Gare TGV Dax à proximité",
      "Ambiance conviviale"
    ],
    "contacts": {
      "telephone": "05 58 90 90 90",
      "email": "contact@campus-landes.fr",
      "siteWeb": "https://www.campus-landes.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 29,
      "commentaires": [
        {
          "auteur": "Julie L.",
          "promo": "Diplômée 2024",
          "note": 4.5,
          "texte": "Très bien pour faire son alternance entre Dax et la côte landaise."
        }
      ]
    }
  },
  {
    "id": "lycee-jean-perrin-marseille",
    "nom": "Lycée Public Victor Hugo Marseille",
    "type": "Public",
    "academie": "Aix-Marseille",
    "ville": "Marseille  3e",
    "codePostal": "13010",
    "adresse": "48 Chemin du Vallon de Toulouse, 13010 Marseille",
    "coordinates": [
      43.3047,
      5.37969
    ],
    "prix": "0 € (Lycée public)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Voie initiale scolaire ou apprentissage alterné 2j / 3j",
    "tauxReussite": 87,
    "classementThotis": 12,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0130043B",
      "codAffForm": "33209",
      "demandes": 1620,
      "voeuxPhasePrincipale": 1595,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 7,
      "pris": 15,
      "places": 24,
      "tauxAcces": 21,
      "rangDernierAppele": 265,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=33209&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0130043B&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0130043B"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle d'enseignement supérieur majeur de la cité phocéenne, préparant aux carrières de la négociation immobilière méditerranéenne et de la gestion de copropriétés.",
    "atouts": [
      "100% Gratuit",
      "Cadre boisé sur les hauteurs de Marseille",
      "Nombreux partenariats Fnaim 13",
      "Très bonne réputation régionale"
    ],
    "contacts": {
      "telephone": "04 91 74 21 00",
      "email": "ce.0130048k@ac-aix-marseille.fr",
      "siteWeb": "https://www.lyc-perrin.ac-aix-marseille.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 52,
      "commentaires": [
        {
          "auteur": "Léa C.",
          "promo": "Promo 2023",
          "note": 4.5,
          "texte": "Cadre agréable, profs exigeants et très disponibles pour les révisions de BTS."
        }
      ]
    }
  },
  {
    "id": "pigier-nantes",
    "nom": "Pigier Performance Nantes",
    "type": "Privé sous contrat",
    "academie": "Nantes",
    "ville": "Nantes",
    "codePostal": "44200",
    "adresse": "4 Rue René Viviani, 44200 Nantes",
    "coordinates": [
      47.2062,
      -1.5421
    ],
    "prix": "0 € en alternance / 5 400 € en initial",
    "fraisScolariteAnnuel": 5400,
    "alternancePossible": true,
    "rythmeAlternance": "3 jours entreprise / 2 jours école",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Pigier%20Performance%20Nantes",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Pigier%20Performance%20Nantes"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h30 à 16h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "description": "Acteur historique de la formation en alternance dans les Pays de la Loire, Pigier Nantes bénéficie d'un très fort ancrage auprès des cabinets de syndic et agences nantaises.",
    "atouts": [
      "Taux d'employabilité 92%",
      "Conseillers formation dédiés",
      "Ateliers coaching CV et entretiens",
      "Campus moderne sur l'île de Nantes"
    ],
    "contacts": {
      "telephone": "02 40 35 20 20",
      "email": "nantes@pigier.com",
      "siteWeb": "https://www.pigier.com/nantes"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 64,
      "commentaires": [
        {
          "auteur": "Hugo S.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Pris en CDI dès la fin de mon BTS dans mon agence d'accueil. Formation très carrée."
        }
      ]
    }
  },
  {
    "id": "lycee-pasteur-lille",
    "nom": "Lycée Public Louis Pasteur Lille",
    "type": "Public",
    "academie": "Lille",
    "ville": "Lille",
    "codePostal": "59000",
    "adresse": "1 Rue des Urbanistes, 59000 Lille",
    "coordinates": [
      50.642,
      3.07059
    ],
    "prix": "0 € (Gratuité républicaine)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Statut scolaire initial ou contrat d'apprentissage",
    "tauxReussite": 89,
    "classementThotis": 7,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0590117G",
      "codAffForm": "6779",
      "demandes": 1420,
      "voeuxPhasePrincipale": 1420,
      "voeuxPremierePlace": 15,
      "pctAdmisDebutPP": 29,
      "pris": 52,
      "places": 59,
      "tauxAcces": 36,
      "rangDernierAppele": 419,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=6779&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0590117G&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0590117G"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Situé au cœur de la Métropole Européenne de Lille, le Lycée Pasteur dispose d'une tradition d'excellence tertiaire et de conventions avec les bailleurs sociaux et administrateurs de biens.",
    "atouts": [
      "Gratuité totale",
      "Centre-ville proche gares Lille Flandres/Europe",
      "Section active et solidaire",
      "Simulations d'oraux blancs réguliers"
    ],
    "contacts": {
      "telephone": "03 20 12 34 56",
      "email": "ce.0590119e@ac-lille.fr",
      "siteWeb": "https://pasteur-lille.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 68,
      "commentaires": [
        {
          "auteur": "Élodie N.",
          "promo": "Promo 2024",
          "note": 5,
          "texte": "Très bonne expérience, professeurs très investis et excellente ambiance de promo."
        }
      ]
    }
  },
  {
    "id": "esup-rennes",
    "nom": "ESUP Rennes - L'Éco-École de Commerce & Immobilier",
    "type": "Privé hors contrat",
    "academie": "Rennes",
    "ville": "Rennes",
    "codePostal": "35000",
    "adresse": "1 Bis Rue de la Motte Picquet, 35000 Rennes",
    "coordinates": [
      48.1085,
      -1.6842
    ],
    "prix": "0 € en alternance / 5 200 € en initial",
    "fraisScolariteAnnuel": 5200,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESUP%20Rennes%20-%20L'%C3%89co-%C3%89cole%20de%20Commerce%20%26%20Immobilier",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESUP%20Rennes%20-%20L'%C3%89co-%C3%89cole%20de%20Commerce%20%26%20Immobilier"
    },
    "tauxElearning": 20,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement breton réputé, l'ESUP Rennes accompagne les alternants vers la maîtrise des transactions résidentielles et des baux commerciaux en Ille-et-Vilaine.",
    "atouts": [
      "Bassin rennais très dynamique",
      "Pédagogie active",
      "Suivi tuteur entreprise mensuel",
      "94% d'insertion à 6 mois"
    ],
    "contacts": {
      "telephone": "02 99 30 11 00",
      "email": "contact.rennes@esup.fr",
      "siteWeb": "https://www.esup-rennes.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 49,
      "commentaires": [
        {
          "auteur": "Brendan L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Excellente école, ambiance chaleureuse et accompagnement personnalisé pour trouver son patron."
        }
      ]
    }
  },
  {
    "id": "lycee-philippe-lamour-nimes",
    "nom": "Lycée Public Philippe Lamour Nîmes",
    "type": "Public",
    "academie": "Montpellier",
    "ville": "Nîmes",
    "codePostal": "30000",
    "adresse": "36 Rue de l'Hostellerie, 30000 Nîmes",
    "coordinates": [
      43.8324,
      4.38616
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou apprentissage Greta-CFA du Gard",
    "tauxReussite": 93,
    "classementThotis": 26,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0301552Z",
      "codAffForm": "4006",
      "demandes": 1206,
      "voeuxPhasePrincipale": 1131,
      "voeuxPremierePlace": 5,
      "pctAdmisDebutPP": 22,
      "pris": 23,
      "places": 35,
      "tauxAcces": 37,
      "rangDernierAppele": 304,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4006&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0301552Z&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0301552Z"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Le lycée public d'excellence de l'Académie de Montpellier pour le BTS Professions Immobilières. Très prisé sur Parcoursup, avec internat et partenariats étroits avec la FNAIM Gard.",
    "atouts": [
      "100% Gratuit d'État",
      "Internat pour les étudiants",
      "Excellents résultats académiques",
      "Réseau d'agences Nîmes, Alès et Camargue"
    ],
    "contacts": {
      "telephone": "04 66 04 22 22",
      "email": "ce.0301416r@ac-montpellier.fr",
      "siteWeb": "https://philippe-lamour.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 82,
      "commentaires": [
        {
          "auteur": "Maximilien D.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le BTS PI à Philippe Lamour est réputé dans tout le Gard. L'équipe enseignante est au top."
        }
      ]
    }
  },
  {
    "id": "lycee-aristide-maillol-perpignan",
    "nom": "Lycée Polyvalent Public Aristide Maillol Perpignan",
    "type": "Public",
    "academie": "Montpellier",
    "ville": "Perpignan",
    "codePostal": "66000",
    "adresse": "73 Avenue de Pau, 66000 Perpignan",
    "coordinates": [
      42.7176,
      2.88618
    ],
    "prix": "0 € (Lycée public gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale scolaire ou apprentissage CFA académique",
    "tauxReussite": 91,
    "classementThotis": 31,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0660809W",
      "codAffForm": "29489",
      "demandes": 685,
      "voeuxPhasePrincipale": 679,
      "voeuxPremierePlace": 8,
      "pctAdmisDebutPP": 31,
      "pris": 26,
      "places": 30,
      "tauxAcces": 33,
      "rangDernierAppele": 105,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=29489&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0660809W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0660809W"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement public de référence dans les Pyrénées-Orientales, connecté au marché immobilier catalan, balnéaire (Canet, Collioure) et frontalier avec l'Espagne.",
    "atouts": [
      "Formation publique gratuite",
      "Spécificité marché balnéaire et littoral catalan",
      "Internat et infrastructures modernes",
      "Taux de réussite > 90%"
    ],
    "contacts": {
      "telephone": "04 68 85 80 00",
      "email": "ce.0660010m@ac-montpellier.fr",
      "siteWeb": "https://aristide-maillol.mon-ent-occitanie.fr"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 54,
      "commentaires": [
        {
          "auteur": "Inès B.",
          "promo": "Diplômée 2023",
          "note": 5,
          "texte": "Très bonne formation, j'ai pu faire mes stages dans une agence de Canet-en-Roussillon et j'ai été embauchée direct."
        }
      ]
    }
  },
  {
    "id": "espi-montpellier",
    "nom": "ESPI Montpellier - Port Marianne",
    "type": "Privé hors contrat",
    "academie": "Montpellier",
    "ville": "Montpellier",
    "codePostal": "34000",
    "adresse": "120 Rue Maryam Mirzakhani, 34000 Montpellier",
    "coordinates": [
      43.6012,
      3.9015
    ],
    "prix": "0 € en alternance / 6 800 € en initial",
    "fraisScolariteAnnuel": 6800,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 94,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Montpellier%20-%20Port%20Marianne",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESPI%20Montpellier%20-%20Port%20Marianne"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 24 Janvier 2026 de 10h00 à 17h00",
    "prochaineJPO": "2026-01-24",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "description": "Le campus montpelliérain de l'ESPI, fondé par les professionnels du secteur immobilier (FNAIM, UNIS). Idéalement situé dans le quartier d'affaires Port Marianne, il offre un réseau exceptionnel de cabinets et promoteurs.",
    "atouts": [
      "Quartier d'affaires Port Marianne",
      "Fondé par les fédérations professionnelles",
      "Placement en alternance garanti",
      "Poursuite d'études jusqu'au Mastère Bac+5"
    ],
    "contacts": {
      "telephone": "04 67 02 10 10",
      "email": "admissions-montpellier@groupe-espi.fr",
      "siteWeb": "https://www.groupe-espi.fr/campus/montpellier/"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 95,
      "commentaires": [
        {
          "auteur": "Lucas V.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le réseau de l'ESPI fait la différence pour trouver les meilleures alternances en métropole montpelliéraine."
        }
      ]
    }
  },
  {
    "id": "esicad-montpellier",
    "nom": "ESICAD Montpellier Le Millénaire",
    "type": "Privé sous contrat",
    "academie": "Montpellier",
    "ville": "Montpellier",
    "codePostal": "34000",
    "adresse": "140 Rue Robert Koch, 34000 Montpellier",
    "coordinates": [
      43.6185,
      3.9142
    ],
    "prix": "0 € en alternance / 5 700 € en initial",
    "fraisScolariteAnnuel": 5700,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours en cours / 3 jours en entreprise",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESICAD%20Montpellier%20Le%20Mill%C3%A9naire",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ESICAD%20Montpellier%20Le%20Mill%C3%A9naire"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h30 à 16h00",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "description": "École historique de commerce et de gestion à Montpellier. Le pôle immobilier prépare au BTS PI depuis plus de 25 ans avec un encadrement réputé et des coachings carrières personnalisés.",
    "atouts": [
      "Parc d'activités Le Millénaire",
      "Accompagnement placement alternance",
      "Diplôme d'État",
      "Simulations régulières d'oraux de négociation"
    ],
    "contacts": {
      "telephone": "04 67 13 82 82",
      "email": "montpellier@esicad.com",
      "siteWeb": "https://www.esicad.com"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 68,
      "commentaires": [
        {
          "auteur": "Chloé T.",
          "promo": "Diplômée 2023",
          "note": 4.5,
          "texte": "Des formateurs passionnés et un très bon accompagnement pour mon contrat pro."
        }
      ]
    }
  },
  {
    "id": "idelca-business-school-montpellier",
    "nom": "IDELCA Business School Jacou Montpellier",
    "type": "Privé sous contrat",
    "academie": "Montpellier",
    "ville": "Jacou",
    "codePostal": "34830",
    "adresse": "4 Rue Louis Breguet, 34830 Jacou",
    "coordinates": [
      43.6567,
      3.91005
    ],
    "prix": "0 € en alternance / 5 400 € en initial",
    "fraisScolariteAnnuel": 5400,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours école / 3 jours entreprise",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0340994W",
      "codAffForm": "30186",
      "demandes": 138,
      "voeuxPhasePrincipale": 113,
      "voeuxPremierePlace": 0,
      "pctAdmisDebutPP": 0,
      "pris": 4,
      "places": 34,
      "tauxAcces": 89,
      "rangDernierAppele": 41,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=30186&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0340994W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0340994W"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 7 Mars 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-03-07",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement familial d'enseignement supérieur sous contrat, situé au nord de Montpellier (terminus Tram 2 Jacou). Très forte proximité humaine et excellente préparation aux épreuves orales du BTS PI.",
    "atouts": [
      "Établissement à taille humaine",
      "Terminus Tramway Ligne 2",
      "Taux de réussite 90%",
      "Aide active à la recherche d'entreprise"
    ],
    "contacts": {
      "telephone": "04 67 10 52 52",
      "email": "contact@idelca.fr",
      "siteWeb": "https://www.idelca.fr"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 47,
      "commentaires": [
        {
          "auteur": "Romain B.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Une ambiance d'école formidable avec des profs toujours à l'écoute. Je recommande les yeux fermés."
        }
      ]
    }
  },
  {
    "id": "ecla-montpellier",
    "nom": "Campus Efficom / ECLA Montpellier",
    "type": "Privé hors contrat",
    "academie": "Montpellier",
    "ville": "Montpellier",
    "codePostal": "34000",
    "adresse": "180 Rue du Mas de Nègre, 34000 Montpellier",
    "coordinates": [
      43.5956,
      3.8821
    ],
    "prix": "0 € en alternance / 5 600 € en initial",
    "fraisScolariteAnnuel": 5600,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours cours / 3 jours entreprise",
    "tauxReussite": 86,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Campus%20Efficom%20%2F%20ECLA%20Montpellier",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Campus%20Efficom%20%2F%20ECLA%20Montpellier"
    },
    "tauxElearning": 25,
    "datePortesOuvertes": "Mercredi 18 Mars 2026 de 14h00 à 18h30",
    "prochaineJPO": "2026-03-18",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    "description": "Une école branchée et innovante au cœur du pôle étudiant montpelliérain. Fort accent mis sur le marketing digital immobilier, la visite vidéo et la négociation augmentée.",
    "atouts": [
      "Campus neuf avec espaces coworking",
      "Formation aux outils d'estimation IA",
      "Partenariat avec les agences du littoral héraultais",
      "Vie étudiante dynamique"
    ],
    "contacts": {
      "telephone": "04 67 15 20 30",
      "email": "admission.montpellier@efficom.fr",
      "siteWeb": "https://www.efficom-montpellier.fr"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 58,
      "commentaires": [
        {
          "auteur": "Clément R.",
          "promo": "Étudiant 2e année",
          "note": 4.5,
          "texte": "Campus moderne, formateurs sympa et disponibles. Très bon suivi en alternance."
        }
      ]
    }
  },
  {
    "id": "purple-campus-beziers",
    "nom": "Purple Campus Béziers - CCI Occitanie",
    "type": "Privé sous contrat",
    "academie": "Montpellier",
    "ville": "Béziers",
    "codePostal": "34500",
    "adresse": "Avenue de Badones, 34500 Béziers",
    "coordinates": [
      43.3442,
      3.2158
    ],
    "prix": "0 € en alternance (Prise en charge OPCO)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours CFA / 3 jours agence",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20B%C3%A9ziers%20-%20CCI%20Occitanie",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20B%C3%A9ziers%20-%20CCI%20Occitanie"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    "description": "Centre de formation par alternance de la Chambre de Commerce et d'Industrie de l'Hérault. Idéalement implanté pour les agences du biterrois, du Cap d'Agde et du Val d'Hérault.",
    "atouts": [
      "Réseau consulaire CCI Occitanie",
      "100% financé en apprentissage",
      "Forte demande sur le littoral Cap d'Agde / Vias",
      "Formateurs praticiens"
    ],
    "contacts": {
      "telephone": "04 67 80 97 00",
      "email": "beziers@purple-campus.com",
      "siteWeb": "https://www.purple-campus.com"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 36,
      "commentaires": [
        {
          "auteur": "Élodie S.",
          "promo": "Diplômée 2024",
          "note": 4.5,
          "texte": "Parfait pour faire son alternance en agence immobilière sur le secteur Agde/Béziers."
        }
      ]
    }
  },
  {
    "id": "purple-campus-perpignan",
    "nom": "Purple Campus Perpignan Roussillon",
    "type": "Privé sous contrat",
    "academie": "Montpellier",
    "ville": "Perpignan",
    "codePostal": "66000",
    "adresse": "Avenue Paul Pascot, 66000 Perpignan",
    "coordinates": [
      42.6741,
      2.8712
    ],
    "prix": "0 € en alternance CFA (Prise en charge intégrale)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours CFA / 3 jours entreprise",
    "tauxReussite": 87,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20Perpignan%20Roussillon",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=Purple%20Campus%20Perpignan%20Roussillon"
    },
    "tauxElearning": 15,
    "datePortesOuvertes": "Samedi 14 Mars 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-03-14",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "description": "Le pôle consulaire d'apprentissage des Pyrénées-Orientales, adossé à la CCI Roussillon. Forme de nombreux négociateurs et gestionnaires pour les agences de la plaine du Roussillon.",
    "atouts": [
      "Prise en charge OPCO 100%",
      "Réseau CCI Pyrénées-Orientales",
      "Grand campus moderne avec restaurant",
      "Partenariat FNAIM 66"
    ],
    "contacts": {
      "telephone": "04 68 56 62 20",
      "email": "perpignan@purple-campus.com",
      "siteWeb": "https://www.purple-campus.com"
    },
    "avis": {
      "note": 4.4,
      "totalAvis": 33,
      "commentaires": [
        {
          "auteur": "Marc F.",
          "promo": "Diplômé 2023",
          "note": 4.5,
          "texte": "Bonne formation pratique avec des formateurs qui connaissent le terrain catalan."
        }
      ]
    }
  },
  {
    "id": "icfa-carcassonne",
    "nom": "ICFA / Sud Formation CCI Carcassonne",
    "type": "Privé sous contrat",
    "academie": "Montpellier",
    "ville": "Carcassonne",
    "codePostal": "11000",
    "adresse": "Boulevard Henry Bouffet, 11000 Carcassonne",
    "coordinates": [
      43.2122,
      2.3537
    ],
    "prix": "0 € en alternance (Apprentissage CFA)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "2 jours CFA / 3 jours agence",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": false,
      "uai": null,
      "codAffForm": null,
      "demandes": null,
      "voeuxPhasePrincipale": null,
      "voeuxPremierePlace": null,
      "pctAdmisDebutPP": null,
      "pris": null,
      "places": null,
      "tauxAcces": null,
      "rangDernierAppele": null,
      "session": "2024",
      "modalite": "Admission directe hors Parcoursup",
      "procedure": "Sur dossier de candidature et entretien de motivation",
      "parcoursupUrl": null,
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ICFA%20%2F%20Sud%20Formation%20CCI%20Carcassonne",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=ICFA%20%2F%20Sud%20Formation%20CCI%20Carcassonne"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 21 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-21",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle de formation consulaire de l'Aude à Carcassonne, préparant les futurs professionnels de l'immobilier aux spécificités de l'habitat audois et du tourisme.",
    "atouts": [
      "100% financé par l'OPCO",
      "Réseau d'agences à Carcassonne, Limoux et Narbonne",
      "Campus calme et accessible",
      "Accompagnement individualisé"
    ],
    "contacts": {
      "telephone": "04 68 10 36 00",
      "email": "contact@sudformation.cci.fr",
      "siteWeb": "https://www.sudformation.cci.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 27,
      "commentaires": [
        {
          "auteur": "Sébastien C.",
          "promo": "Diplômé 2024",
          "note": 4.5,
          "texte": "Très utile pour trouver une alternance dans le département de l'Aude."
        }
      ]
    }
  },
  {
    "id": "lycee-jean-dautet-la-rochelle",
    "nom": "Lycée Public Jean Macé Niort",
    "type": "Public",
    "academie": "Poitiers",
    "ville": "Niort",
    "codePostal": "17000",
    "adresse": "18 Rue René Couzinet, 17000 La Rochelle",
    "coordinates": [
      46.3324,
      -0.46866
    ],
    "prix": "0 € (Lycée public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation scolaire classique avec stages ou contrat d'apprentissage Greta",
    "tauxReussite": 92,
    "classementThotis": 20,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0790023W",
      "codAffForm": "39110",
      "demandes": 469,
      "voeuxPhasePrincipale": 348,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 5,
      "pris": 22,
      "places": 24,
      "tauxAcces": 48,
      "rangDernierAppele": 51,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=39110&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0790023W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0790023W"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 7 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-07",
    "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    "description": "Lycée public réputé sur la façade atlantique, idéalement situé à La Rochelle. Forte attractivité sur le marché immobilier littoral (Île de Ré, Île d'Oléron, agglomération rochelaise).",
    "atouts": [
      "100% Gratuit d'État",
      "Marché immobilier littoral prestigieux (Île de Ré)",
      "Excellents résultats au diplôme",
      "Cadre de vie étudiant rochelais"
    ],
    "contacts": {
      "telephone": "05 46 28 03 00",
      "email": "ce.0170028y@ac-poitiers.fr",
      "siteWeb": "https://lycee-dautet.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 65,
      "commentaires": [
        {
          "auteur": "Valentin M.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Le lycée Dautet est ultra réputé à La Rochelle. Stages passionnants sur le marché rétais."
        }
      ]
    }
  },
  {
    "id": "lycee-marguerite-de-valois-angouleme",
    "nom": "Cité Technique Édouard Branly Châtellerault",
    "type": "Public",
    "academie": "Poitiers",
    "ville": "Châtellerault",
    "codePostal": "16000",
    "adresse": "Rue François Premier, 16000 Angoulême",
    "coordinates": [
      46.8021,
      0.5432
    ],
    "prix": "0 € (Service public gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Statut scolaire classique ou apprentissage Greta Charente",
    "tauxReussite": 90,
    "classementThotis": 29,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0860005N",
      "codAffForm": "10577",
      "demandes": 443,
      "voeuxPhasePrincipale": 378,
      "voeuxPremierePlace": 5,
      "pctAdmisDebutPP": 25,
      "pris": 20,
      "places": 35,
      "tauxAcces": 52,
      "rangDernierAppele": 68,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10577&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0860005N&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0860005N"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle public d'enseignement supérieur en Charente, formant des techniciens supérieurs de l'immobilier au contact des agences d'Angoulême et du Grand Cognac.",
    "atouts": [
      "Formation publique gratuite",
      "Internat de campus disponible",
      "Partenariats agences Charente et Cognac",
      "Taux de réussite 90%"
    ],
    "contacts": {
      "telephone": "05 45 97 45 00",
      "email": "ce.0160003h@ac-poitiers.fr",
      "siteWeb": "https://lycee-margueritedevalois.fr"
    },
    "avis": {
      "note": 4.5,
      "totalAvis": 38,
      "commentaires": [
        {
          "auteur": "Morgane B.",
          "promo": "Diplômée 2023",
          "note": 4.5,
          "texte": "Très bonne école avec des professeurs dévoués et sérieux."
        }
      ]
    }
  },
  {
    "id": "lycee-honore-d-estienne-d-orves-nice",
    "nom": "Lycée Public Jacques Audiberti Antibes / Nice",
    "type": "Public",
    "academie": "Nice",
    "ville": "Antibes",
    "codePostal": "06000",
    "adresse": "13 Avenue Honoré d'Estienne d'Orves, 06000 Nice",
    "coordinates": [
      43.5743,
      7.11689
    ],
    "prix": "0 € (Service Public)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Voie initiale sous statut scolaire ou apprentissage 2j / 3j",
    "tauxReussite": 91,
    "classementThotis": 22,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0060001U",
      "codAffForm": "2181",
      "demandes": 906,
      "voeuxPhasePrincipale": 887,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 11,
      "pris": 19,
      "places": 24,
      "tauxAcces": 25,
      "rangDernierAppele": 88,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=2181&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0060001U&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0060001U"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 14 Février 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-02-14",
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "description": "Implanté sur la colline avec vue imprenable sur la baie des Anges, le lycée offre un cursus très axé sur l'immobilier de prestige et la clientèle internationale de la Côte d'Azur.",
    "atouts": [
      "Formation axée immobilier de luxe Côte d'Azur",
      "Gratuité totale",
      "Langues étrangères renforcées (Anglais / Italien)",
      "Partenariats agences Cannes & Monaco"
    ],
    "contacts": {
      "telephone": "04 93 97 12 00",
      "email": "ce.0060032x@ac-nice.fr",
      "siteWeb": "https://www.lyc-honore-destienne-dorves.ac-nice.fr"
    },
    "avis": {
      "note": 4.7,
      "totalAvis": 48,
      "commentaires": [
        {
          "auteur": "Nicolas P.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Une des meilleures formations du Sud. Les modules de négociation en anglais sont un vrai plus pour la région."
        }
      ]
    }
  },
  {
    "id": "lycee-rene-cassin-strasbourg",
    "nom": "ECP - École Commerciale Privée Strasbourg",
    "type": "Public",
    "academie": "Strasbourg",
    "ville": "Strasbourg",
    "codePostal": "67000",
    "adresse": "4 Rue Schoch, 67000 Strasbourg",
    "coordinates": [
      48.5912,
      7.74164
    ],
    "prix": "0 € (Lycée public d'État)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Temps plein avec 14 semaines de stages ou contrat d'apprentissage",
    "tauxReussite": 93,
    "classementThotis": 25,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0672050P",
      "codAffForm": "16198",
      "demandes": 431,
      "voeuxPhasePrincipale": 424,
      "voeuxPremierePlace": 15,
      "pctAdmisDebutPP": 47,
      "pris": 32,
      "places": 40,
      "tauxAcces": 51,
      "rangDernierAppele": 197,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=16198&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0672050P&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0672050P"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 28 Février 2026 de 9h00 à 16h00",
    "prochaineJPO": "2026-02-28",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Pôle tertiaire majeur en Alsace, le Lycée René Cassin prépare au BTS PI avec une solide assise juridique (droit local alsacien-mosellan) et une ouverture transfrontalière.",
    "atouts": [
      "Maîtrise du droit local alsacien",
      "Gratuité totale",
      "Réseau très fort FNAIM Grand Est",
      "Haut niveau de réussite"
    ],
    "contacts": {
      "telephone": "03 88 45 54 54",
      "email": "ce.0670081d@ac-strasbourg.fr",
      "siteWeb": "https://lyceecassin.fr"
    },
    "avis": {
      "note": 4.8,
      "totalAvis": 55,
      "commentaires": [
        {
          "auteur": "Sophie W.",
          "promo": "Diplômée 2023",
          "note": 5,
          "texte": "Le module sur les particularités du livre foncier en Alsace est ultra précieux lors de nos embauches en étude notariale ou agence."
        }
      ]
    }
  },
  {
    "id": "lycee-emily-bronte-lognes",
    "nom": "Lycée Emily Brontë",
    "type": "Public",
    "academie": "Créteil",
    "ville": "Lognes",
    "codePostal": "77000",
    "adresse": "Lycée Emily Brontë, Lognes",
    "coordinates": [
      48.8393,
      2.63929
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 85,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0772294A",
      "codAffForm": "34996",
      "demandes": 590,
      "voeuxPhasePrincipale": 590,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 8,
      "pris": 24,
      "places": 24,
      "tauxAcces": 33,
      "rangDernierAppele": 68,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=34996&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0772294A&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0772294A"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (590 vœux formulés, 590 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 33%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0772294a@ac-creteil.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=34996&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 42,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-general-et-technologique-albert-camus-nantes",
    "nom": "Lycée général et technologique Albert Camus",
    "type": "Public",
    "academie": "Nantes",
    "ville": "Nantes",
    "codePostal": "44000",
    "adresse": "Lycée général et technologique Albert Camus, Nantes",
    "coordinates": [
      47.2046,
      -1.60936
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0440288Z",
      "codAffForm": "5537",
      "demandes": 1162,
      "voeuxPhasePrincipale": 1162,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 10,
      "pris": 29,
      "places": 35,
      "tauxAcces": 34,
      "rangDernierAppele": 176,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=5537&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0440288Z&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0440288Z"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (1162 vœux formulés, 1162 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 34%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0440288z@ac-nantes.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=5537&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 43,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-fragonard-l-isle-adam",
    "nom": "Lycée Fragonard",
    "type": "Public",
    "academie": "Versailles",
    "ville": "L'Isle-Adam",
    "codePostal": "95000",
    "adresse": "Lycée Fragonard, L'Isle-Adam",
    "coordinates": [
      49.0876,
      2.20254
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0951147F",
      "codAffForm": "11600",
      "demandes": 619,
      "voeuxPhasePrincipale": 546,
      "voeuxPremierePlace": 6,
      "pctAdmisDebutPP": 21,
      "pris": 28,
      "places": 35,
      "tauxAcces": 35,
      "rangDernierAppele": 63,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11600&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0951147F&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0951147F"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (619 vœux formulés, 546 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 35%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0951147f@ac-versailles.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11600&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 44,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-amep-fort-de-france",
    "nom": "Lycée AMEP",
    "type": "Privé sous contrat",
    "academie": "Martinique",
    "ville": "Fort-de-France",
    "codePostal": "97200",
    "adresse": "Lycée AMEP, Fort-de-France",
    "coordinates": [
      14.6282,
      -61.058
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "9720615L",
      "codAffForm": "14066",
      "demandes": 146,
      "voeuxPhasePrincipale": 139,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 18,
      "pris": 17,
      "places": 20,
      "tauxAcces": 70,
      "rangDernierAppele": 87,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14066&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=9720615L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=9720615L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (146 vœux formulés, 139 en phase principale, 20 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 70%",
      "20 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "9720615l@ac-martinique.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14066&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 45,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-et-enseignement-superieur-sully-marseille-6e",
    "nom": "Lycée et Enseignement Supérieur Sully",
    "type": "Privé sous contrat",
    "academie": "Aix-Marseille",
    "ville": "Marseille  6e",
    "codePostal": "13000",
    "adresse": "Lycée et Enseignement Supérieur Sully, Marseille  6e",
    "coordinates": [
      43.2917,
      5.38826
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0131398Z",
      "codAffForm": "14667",
      "demandes": 376,
      "voeuxPhasePrincipale": 361,
      "voeuxPremierePlace": 7,
      "pctAdmisDebutPP": 17,
      "pris": 42,
      "places": 45,
      "tauxAcces": 78,
      "rangDernierAppele": 111,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14667&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0131398Z&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0131398Z"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (376 vœux formulés, 361 en phase principale, 45 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 78%",
      "45 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0131398z@ac-aix-marseille.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14667&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 46,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-jean-paul-ii-rouen",
    "nom": "Lycée Jean-Paul II",
    "type": "Privé sous contrat",
    "academie": "Normandie",
    "ville": "Rouen",
    "codePostal": "76000",
    "adresse": "Lycée Jean-Paul II, Rouen",
    "coordinates": [
      49.4495,
      1.09588
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0763409T",
      "codAffForm": "9773",
      "demandes": 411,
      "voeuxPhasePrincipale": 407,
      "voeuxPremierePlace": 5,
      "pctAdmisDebutPP": 25,
      "pris": 20,
      "places": 35,
      "tauxAcces": 42,
      "rangDernierAppele": 61,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9773&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0763409T&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0763409T"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (411 vœux formulés, 407 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 42%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0763409t@ac-normandie.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9773&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 47,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-grandmont-tours",
    "nom": "Lycée Grandmont",
    "type": "Public",
    "academie": "Orléans-Tours",
    "ville": "Tours",
    "codePostal": "37000",
    "adresse": "Lycée Grandmont, Tours",
    "coordinates": [
      47.3602,
      0.70009
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 85,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0370038R",
      "codAffForm": "4843",
      "demandes": 853,
      "voeuxPhasePrincipale": 853,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 8,
      "pris": 24,
      "places": 24,
      "tauxAcces": 23,
      "rangDernierAppele": 171,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4843&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0370038R&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0370038R"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (853 vœux formulés, 853 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 23%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0370038r@ac-orleans-tours.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4843&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 48,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-pierre-bayle-sedan",
    "nom": "Lycée Pierre Bayle",
    "type": "Public",
    "academie": "Reims",
    "ville": "Sedan",
    "codePostal": "08000",
    "adresse": "Lycée Pierre Bayle, Sedan",
    "coordinates": [
      49.6933,
      4.94719
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0080045F",
      "codAffForm": "43341",
      "demandes": 177,
      "voeuxPhasePrincipale": 173,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 10,
      "pris": 10,
      "places": 18,
      "tauxAcces": 65,
      "rangDernierAppele": 43,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=43341&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0080045F&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0080045F"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (177 vœux formulés, 173 en phase principale, 18 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 65%",
      "18 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0080045f@ac-reims.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=43341&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 49,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-beaussier-la-seyne-sur-mer",
    "nom": "Lycée Beaussier",
    "type": "Public",
    "academie": "Nice",
    "ville": "La Seyne-sur-Mer",
    "codePostal": "83000",
    "adresse": "Lycée Beaussier, La Seyne-sur-Mer",
    "coordinates": [
      43.1001,
      5.87821
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0830050D",
      "codAffForm": "10341",
      "demandes": 610,
      "voeuxPhasePrincipale": 586,
      "voeuxPremierePlace": 0,
      "pctAdmisDebutPP": 0,
      "pris": 17,
      "places": 24,
      "tauxAcces": 39,
      "rangDernierAppele": 94,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10341&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0830050D&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0830050D"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (610 vœux formulés, 586 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 39%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0830050d@ac-nice.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10341&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 50,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-robert-doisneau-corbeil-essonnes",
    "nom": "Lycée Robert Doisneau",
    "type": "Public",
    "academie": "Versailles",
    "ville": "Corbeil-Essonnes",
    "codePostal": "91000",
    "adresse": "Lycée Robert Doisneau, Corbeil-Essonnes",
    "coordinates": [
      48.6129,
      2.45817
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 92,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0910620E",
      "codAffForm": "10846",
      "demandes": 1079,
      "voeuxPhasePrincipale": 1079,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 13,
      "pris": 31,
      "places": 34,
      "tauxAcces": 25,
      "rangDernierAppele": 70,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10846&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0910620E&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0910620E"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (1079 vœux formulés, 1079 en phase principale, 34 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 25%",
      "34 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0910620e@ac-versailles.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10846&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 51,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-raynouard-brignoles",
    "nom": "Lycée Raynouard",
    "type": "Public",
    "academie": "Nice",
    "ville": "Brignoles",
    "codePostal": "83000",
    "adresse": "Lycée Raynouard, Brignoles",
    "coordinates": [
      43.4118,
      6.06625
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 96,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0830007G",
      "codAffForm": "14756",
      "demandes": 368,
      "voeuxPhasePrincipale": 270,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 18,
      "pris": 11,
      "places": 15,
      "tauxAcces": 41,
      "rangDernierAppele": 24,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14756&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0830007G&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0830007G"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (368 vœux formulés, 270 en phase principale, 15 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 41%",
      "15 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0830007g@ac-nice.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=14756&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 52,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-stephane-hessel-epernay",
    "nom": "Lycée Stéphane Hessel",
    "type": "Public",
    "academie": "Reims",
    "ville": "Epernay",
    "codePostal": "51000",
    "adresse": "Lycée Stéphane Hessel, Epernay",
    "coordinates": [
      49.0394,
      3.9652
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0510068X",
      "codAffForm": "15976",
      "demandes": 320,
      "voeuxPhasePrincipale": 320,
      "voeuxPremierePlace": 5,
      "pctAdmisDebutPP": 25,
      "pris": 20,
      "places": 24,
      "tauxAcces": 65,
      "rangDernierAppele": 152,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=15976&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0510068X&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0510068X"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (320 vœux formulés, 320 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 65%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0510068x@ac-reims.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=15976&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 53,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-assomption-bellevue-lyon-7e",
    "nom": "Lycée Assomption Bellevue",
    "type": "Privé sous contrat",
    "academie": "Lyon",
    "ville": "Lyon 7e",
    "codePostal": "69000",
    "adresse": "Lycée Assomption Bellevue, Lyon 7e",
    "coordinates": [
      45.7385,
      4.83745
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0690539L",
      "codAffForm": "18899",
      "demandes": 261,
      "voeuxPhasePrincipale": 256,
      "voeuxPremierePlace": 10,
      "pctAdmisDebutPP": 50,
      "pris": 20,
      "places": 26,
      "tauxAcces": 62,
      "rangDernierAppele": 130,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=18899&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0690539L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0690539L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (261 vœux formulés, 256 en phase principale, 26 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 62%",
      "26 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0690539l@ac-lyon.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=18899&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 54,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-professionnel-erik-satie-paris-14e",
    "nom": "Lycée professionnel Erik Satie",
    "type": "Public",
    "academie": "Paris",
    "ville": "Paris 14e",
    "codePostal": "75000",
    "adresse": "Lycée professionnel Erik Satie, Paris 14e",
    "coordinates": [
      48.833,
      2.32615
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0752846L",
      "codAffForm": "21205",
      "demandes": 1756,
      "voeuxPhasePrincipale": 1756,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 9,
      "pris": 22,
      "places": 24,
      "tauxAcces": 11,
      "rangDernierAppele": 45,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=21205&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0752846L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0752846L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (1756 vœux formulés, 1756 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 11%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0752846l@ac-paris.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=21205&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 55,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-georges-dumezil-vernon",
    "nom": "Lycée Georges Dumezil",
    "type": "Public",
    "academie": "Normandie",
    "ville": "Vernon",
    "codePostal": "27000",
    "adresse": "Lycée Georges Dumezil, Vernon",
    "coordinates": [
      49.0813,
      1.47659
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0270044B",
      "codAffForm": "28819",
      "demandes": 252,
      "voeuxPhasePrincipale": 252,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 19,
      "pris": 16,
      "places": 18,
      "tauxAcces": 36,
      "rangDernierAppele": 14,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=28819&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0270044B&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0270044B"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (252 vœux formulés, 252 en phase principale, 18 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 36%",
      "18 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0270044b@ac-normandie.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=28819&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 56,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-les-rosiers-lisieux",
    "nom": "Lycée Les Rosiers",
    "type": "Privé sous contrat",
    "academie": "Normandie",
    "ville": "Lisieux",
    "codePostal": "14000",
    "adresse": "Lycée Les Rosiers, Lisieux",
    "coordinates": [
      49.14708,
      0.22339
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0141418R",
      "codAffForm": "2901",
      "demandes": 115,
      "voeuxPhasePrincipale": 109,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 17,
      "pris": 18,
      "places": 24,
      "tauxAcces": 95,
      "rangDernierAppele": 32,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=2901&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0141418R&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0141418R"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (115 vœux formulés, 109 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 95%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0141418r@ac-normandie.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=2901&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 57,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-jules-lesven-brest",
    "nom": "Lycée Jules Lesven",
    "type": "Public",
    "academie": "Rennes",
    "ville": "Brest",
    "codePostal": "29000",
    "adresse": "Lycée Jules Lesven, Brest",
    "coordinates": [
      48.40643,
      -4.47923
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0290013G",
      "codAffForm": "3775",
      "demandes": 704,
      "voeuxPhasePrincipale": 663,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 3,
      "pris": 34,
      "places": 35,
      "tauxAcces": 57,
      "rangDernierAppele": 165,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=3775&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0290013G&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0290013G"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (704 vœux formulés, 663 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 57%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0290013g@ac-rennes.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=3775&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 58,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "groupe-ics-versailles",
    "nom": "GROUPE ICS",
    "type": "Privé sous contrat",
    "academie": "Versailles",
    "ville": "Versailles",
    "codePostal": "78000",
    "adresse": "GROUPE ICS, Versailles",
    "coordinates": [
      48.8,
      2.13333
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0781975Y",
      "codAffForm": "37943",
      "demandes": 153,
      "voeuxPhasePrincipale": 115,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 10,
      "pris": 10,
      "places": 30,
      "tauxAcces": 70,
      "rangDernierAppele": 31,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=37943&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0781975Y&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0781975Y"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (153 vœux formulés, 115 en phase principale, 30 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 70%",
      "30 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0781975y@ac-versailles.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=37943&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 59,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-st-paul-vannes",
    "nom": "Lycée St Paul",
    "type": "Privé sous contrat",
    "academie": "Rennes",
    "ville": "Vannes",
    "codePostal": "56000",
    "adresse": "Lycée St Paul, Vannes",
    "coordinates": [
      47.6498,
      -2.76292
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 86,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0560117Y",
      "codAffForm": "41273",
      "demandes": 438,
      "voeuxPhasePrincipale": 438,
      "voeuxPremierePlace": 12,
      "pctAdmisDebutPP": 48,
      "pris": 25,
      "places": 18,
      "tauxAcces": 37,
      "rangDernierAppele": 107,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=41273&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0560117Y&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0560117Y"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (438 vœux formulés, 438 en phase principale, 18 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 37%",
      "18 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0560117y@ac-rennes.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=41273&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 60,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "gambetta-carnot-arras",
    "nom": "GAMBETTA CARNOT",
    "type": "Public",
    "academie": "Lille",
    "ville": "Arras",
    "codePostal": "62000",
    "adresse": "GAMBETTA CARNOT, Arras",
    "coordinates": [
      50.2877,
      2.77435
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 88,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0624430D",
      "codAffForm": "7331",
      "demandes": 622,
      "voeuxPhasePrincipale": 622,
      "voeuxPremierePlace": 7,
      "pctAdmisDebutPP": 26,
      "pris": 27,
      "places": 35,
      "tauxAcces": 41,
      "rangDernierAppele": 120,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7331&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0624430D&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0624430D"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (622 vœux formulés, 622 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 41%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0624430d@ac-lille.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7331&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 61,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-henri-moissan-meaux",
    "nom": "Lycée Henri Moissan",
    "type": "Public",
    "academie": "Créteil",
    "ville": "Meaux",
    "codePostal": "77000",
    "adresse": "Lycée Henri Moissan, Meaux",
    "coordinates": [
      48.9589,
      2.87488
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0770930T",
      "codAffForm": "9801",
      "demandes": 839,
      "voeuxPhasePrincipale": 804,
      "voeuxPremierePlace": 9,
      "pctAdmisDebutPP": 32,
      "pris": 28,
      "places": 35,
      "tauxAcces": 29,
      "rangDernierAppele": 85,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9801&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0770930T&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0770930T"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (839 vœux formulés, 804 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 29%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0770930t@ac-creteil.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9801&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 62,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-georges-de-la-tour-nancy",
    "nom": "Lycée Georges de la Tour",
    "type": "Public",
    "academie": "Nancy-Metz",
    "ville": "Nancy",
    "codePostal": "54000",
    "adresse": "Lycée Georges de la Tour, Nancy",
    "coordinates": [
      48.6917,
      6.13816
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 87,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0540041B",
      "codAffForm": "6258",
      "demandes": 1018,
      "voeuxPhasePrincipale": 967,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 7,
      "pris": 14,
      "places": 24,
      "tauxAcces": 26,
      "rangDernierAppele": 108,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=6258&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0540041B&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0540041B"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (1018 vœux formulés, 967 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 26%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0540041b@ac-nancy-metz.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=6258&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 63,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-antoine-de-saint-exupery-les-avirons",
    "nom": "Lycée Antoine de Saint Exupéry",
    "type": "Public",
    "academie": "La Réunion",
    "ville": "Les Avirons",
    "codePostal": "97400",
    "adresse": "Lycée Antoine de Saint Exupéry, Les Avirons",
    "coordinates": [
      -21.2395,
      55.3363
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 94,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "9740045F",
      "codAffForm": "11899",
      "demandes": 520,
      "voeuxPhasePrincipale": 514,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 10,
      "pris": 21,
      "places": 24,
      "tauxAcces": 41,
      "rangDernierAppele": 68,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11899&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=9740045F&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=9740045F"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (520 vœux formulés, 514 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 41%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "9740045f@ac-la-reunion.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=11899&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 64,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-alain-borne-montelimar",
    "nom": "Lycée Alain Borne",
    "type": "Public",
    "academie": "Grenoble",
    "ville": "Montélimar",
    "codePostal": "26000",
    "adresse": "Lycée Alain Borne, Montélimar",
    "coordinates": [
      44.5555,
      4.74664
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0260015A",
      "codAffForm": "20127",
      "demandes": 400,
      "voeuxPhasePrincipale": 351,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 11,
      "pris": 18,
      "places": 24,
      "tauxAcces": 53,
      "rangDernierAppele": 53,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=20127&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0260015A&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0260015A"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (400 vœux formulés, 351 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 53%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0260015a@ac-grenoble.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=20127&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 65,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-professionnel-camille-claudel-caen",
    "nom": "Lycée professionnel Camille Claudel",
    "type": "Public",
    "academie": "Normandie",
    "ville": "Caen",
    "codePostal": "14000",
    "adresse": "Lycée professionnel Camille Claudel, Caen",
    "coordinates": [
      49.2037,
      -0.38489
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 85,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0140019V",
      "codAffForm": "24670",
      "demandes": 774,
      "voeuxPhasePrincipale": 774,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 17,
      "pris": 24,
      "places": 24,
      "tauxAcces": 26,
      "rangDernierAppele": 94,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=24670&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0140019V&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0140019V"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (774 vœux formulés, 774 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 26%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0140019v@ac-normandie.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=24670&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 66,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-claude-nicolas-ledoux-besancon",
    "nom": "Lycée Claude Nicolas Ledoux",
    "type": "Public",
    "academie": "Besancon",
    "ville": "Besançon",
    "codePostal": "25000",
    "adresse": "Lycée Claude Nicolas Ledoux, Besançon",
    "coordinates": [
      47.2542,
      6.00004
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 92,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0251711Z",
      "codAffForm": "3577",
      "demandes": 690,
      "voeuxPhasePrincipale": 690,
      "voeuxPremierePlace": 8,
      "pctAdmisDebutPP": 42,
      "pris": 19,
      "places": 18,
      "tauxAcces": 35,
      "rangDernierAppele": 188,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=3577&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0251711Z&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0251711Z"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (690 vœux formulés, 690 en phase principale, 18 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 35%",
      "18 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0251711z@ac-besancon.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=3577&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 42,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-geoffroy-st-hilaire-etampes",
    "nom": "Lycée Geoffroy-St-Hilaire",
    "type": "Public",
    "academie": "Versailles",
    "ville": "Etampes",
    "codePostal": "91000",
    "adresse": "Lycée Geoffroy-St-Hilaire, Etampes",
    "coordinates": [
      48.4357,
      2.15111
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 92,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0910622G",
      "codAffForm": "36197",
      "demandes": 424,
      "voeuxPhasePrincipale": 399,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 6,
      "pris": 31,
      "places": 33,
      "tauxAcces": 49,
      "rangDernierAppele": 23,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=36197&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0910622G&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0910622G"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (424 vœux formulés, 399 en phase principale, 33 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 49%",
      "33 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0910622g@ac-versailles.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=36197&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 43,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-ste-marie-du-port-les-sables-d-olonne",
    "nom": "Lycée Ste Marie Du Port",
    "type": "Privé sous contrat",
    "academie": "Nantes",
    "ville": "Les Sables-d'Olonne",
    "codePostal": "85000",
    "adresse": "Lycée Ste Marie Du Port, Les Sables-d'Olonne",
    "coordinates": [
      46.493,
      -1.79549
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 96,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0850133H",
      "codAffForm": "10502",
      "demandes": 231,
      "voeuxPhasePrincipale": 231,
      "voeuxPremierePlace": 19,
      "pctAdmisDebutPP": 54,
      "pris": 35,
      "places": 35,
      "tauxAcces": 78,
      "rangDernierAppele": 135,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10502&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0850133H&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0850133H"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (231 vœux formulés, 231 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 78%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0850133h@ac-nantes.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10502&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 44,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-saint-exupery-valserhone",
    "nom": "Lycée Saint-Exupery",
    "type": "Public",
    "academie": "Lyon",
    "ville": "Valserhône",
    "codePostal": "01000",
    "adresse": "Lycée Saint-Exupery, Valserhône",
    "coordinates": [
      46.1148,
      5.81717
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 96,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0010006B",
      "codAffForm": "17649",
      "demandes": 364,
      "voeuxPhasePrincipale": 315,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 18,
      "pris": 11,
      "places": 21,
      "tauxAcces": 62,
      "rangDernierAppele": 63,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=17649&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0010006B&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0010006B"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (364 vœux formulés, 315 en phase principale, 21 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 62%",
      "21 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0010006b@ac-lyon.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=17649&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 45,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-professionnel-rontaunay-saint-denis",
    "nom": "Lycée professionnel Rontaunay",
    "type": "Public",
    "academie": "La Réunion",
    "ville": "Saint-Denis",
    "codePostal": "97400",
    "adresse": "Lycée professionnel Rontaunay, Saint-Denis",
    "coordinates": [
      -20.8877,
      55.47
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 87,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "9740082W",
      "codAffForm": "23319",
      "demandes": 624,
      "voeuxPhasePrincipale": 592,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 14,
      "pris": 14,
      "places": 15,
      "tauxAcces": 20,
      "rangDernierAppele": 39,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=23319&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=9740082W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=9740082W"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (624 vœux formulés, 592 en phase principale, 15 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 20%",
      "15 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "9740082w@ac-la-reunion.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=23319&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 46,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-sidoine-apollinaire-clermont-ferrand",
    "nom": "Lycée Sidoine Apollinaire",
    "type": "Public",
    "academie": "Clermont-Ferrand",
    "ville": "Clermont-Ferrand",
    "codePostal": "63000",
    "adresse": "Lycée Sidoine Apollinaire, Clermont-Ferrand",
    "coordinates": [
      45.7823,
      3.0866
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 94,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0630020E",
      "codAffForm": "7556",
      "demandes": 869,
      "voeuxPhasePrincipale": 869,
      "voeuxPremierePlace": 12,
      "pctAdmisDebutPP": 36,
      "pris": 33,
      "places": 35,
      "tauxAcces": 32,
      "rangDernierAppele": 116,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7556&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0630020E&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0630020E"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (869 vœux formulés, 869 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 32%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0630020e@ac-clermont-ferrand.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7556&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 47,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-colbert-lyon-8e",
    "nom": "Lycée Colbert",
    "type": "Public",
    "academie": "Lyon",
    "ville": "Lyon 8e",
    "codePostal": "69000",
    "adresse": "Lycée Colbert, Lyon 8e",
    "coordinates": [
      45.745,
      4.85987
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 89,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0690042W",
      "codAffForm": "8230",
      "demandes": 2191,
      "voeuxPhasePrincipale": 2191,
      "voeuxPremierePlace": 13,
      "pctAdmisDebutPP": 46,
      "pris": 28,
      "places": 35,
      "tauxAcces": 20,
      "rangDernierAppele": 173,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8230&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0690042W&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0690042W"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (2191 vœux formulés, 2191 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 20%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0690042w@ac-lyon.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8230&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 48,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-maurice-ravel-paris-20e",
    "nom": "Lycée Maurice Ravel",
    "type": "Public",
    "academie": "Paris",
    "ville": "Paris 20e",
    "codePostal": "75000",
    "adresse": "Lycée Maurice Ravel, Paris 20e",
    "coordinates": [
      48.848,
      2.40857
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0750715V",
      "codAffForm": "9189",
      "demandes": 2718,
      "voeuxPhasePrincipale": 2718,
      "voeuxPremierePlace": 2,
      "pctAdmisDebutPP": 7,
      "pris": 30,
      "places": 35,
      "tauxAcces": 12,
      "rangDernierAppele": 183,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9189&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0750715V&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0750715V"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (2718 vœux formulés, 2718 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 12%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0750715v@ac-paris.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9189&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 49,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "ipag-business-school-campus-de-nice-nice",
    "nom": "IPAG Business School - Campus de Nice",
    "type": "Privé sous contrat",
    "academie": "Nice",
    "ville": "Nice",
    "codePostal": "06000",
    "adresse": "IPAG Business School - Campus de Nice, Nice",
    "coordinates": [
      43.7034,
      7.27765
    ],
    "prix": "Gratuit ou contribution modérée (Privé sous contrat)",
    "fraisScolariteAnnuel": 950,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 90,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0061715G",
      "codAffForm": "36298",
      "demandes": 528,
      "voeuxPhasePrincipale": 522,
      "voeuxPremierePlace": 1,
      "pctAdmisDebutPP": 6,
      "pris": 17,
      "places": 30,
      "tauxAcces": 67,
      "rangDernierAppele": 187,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=36298&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0061715G&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0061715G"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (528 vœux formulés, 522 en phase principale, 30 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "Frais modérés sous contrat",
      "Taux d'accès officiel : 67%",
      "30 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0061715g@ac-nice.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=36298&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 50,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-rene-descartes-rennes",
    "nom": "Lycée René Descartes",
    "type": "Public",
    "academie": "Rennes",
    "ville": "Rennes",
    "codePostal": "35000",
    "adresse": "Lycée René Descartes, Rennes",
    "coordinates": [
      48.0882,
      -1.6428
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 85,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0351907H",
      "codAffForm": "4770",
      "demandes": 1536,
      "voeuxPhasePrincipale": 1536,
      "voeuxPremierePlace": 7,
      "pctAdmisDebutPP": 19,
      "pris": 36,
      "places": 35,
      "tauxAcces": 31,
      "rangDernierAppele": 163,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4770&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0351907H&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0351907H"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (1536 vœux formulés, 1536 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 31%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0351907h@ac-rennes.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4770&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 51,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-paul-duez-cambrai",
    "nom": "Lycée Paul Duez",
    "type": "Public",
    "academie": "Lille",
    "ville": "Cambrai",
    "codePostal": "59000",
    "adresse": "Lycée Paul Duez, Cambrai",
    "coordinates": [
      50.1735,
      3.24136
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 86,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0590034S",
      "codAffForm": "6724",
      "demandes": 423,
      "voeuxPhasePrincipale": 423,
      "voeuxPremierePlace": 5,
      "pctAdmisDebutPP": 20,
      "pris": 25,
      "places": 24,
      "tauxAcces": 36,
      "rangDernierAppele": 133,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=6724&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0590034S&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0590034S"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (423 vœux formulés, 423 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 36%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0590034s@ac-lille.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=6724&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 52,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-pierre-de-coubertin-calais",
    "nom": "Lycée Pierre De Coubertin",
    "type": "Public",
    "academie": "Lille",
    "ville": "Calais",
    "codePostal": "62000",
    "adresse": "Lycée Pierre De Coubertin, Calais",
    "coordinates": [
      50.9537,
      1.83699
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 92,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0620062F",
      "codAffForm": "7360",
      "demandes": 364,
      "voeuxPhasePrincipale": 337,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 13,
      "pris": 31,
      "places": 36,
      "tauxAcces": 85,
      "rangDernierAppele": 235,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7360&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0620062F&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0620062F"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (364 vœux formulés, 337 en phase principale, 36 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 85%",
      "36 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0620062f@ac-lille.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=7360&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 53,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-la-hotoie-amiens",
    "nom": "Lycée La Hotoie",
    "type": "Public",
    "academie": "Amiens",
    "ville": "Amiens",
    "codePostal": "80000",
    "adresse": "Lycée La Hotoie, Amiens",
    "coordinates": [
      49.8963,
      2.27442
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 93,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0801882L",
      "codAffForm": "10249",
      "demandes": 700,
      "voeuxPhasePrincipale": 697,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 9,
      "pris": 32,
      "places": 35,
      "tauxAcces": 45,
      "rangDernierAppele": 170,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10249&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0801882L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0801882L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (700 vœux formulés, 697 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 45%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0801882l@ac-amiens.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10249&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 54,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-martin-schongauer-colmar",
    "nom": "Lycée Martin Schongauer",
    "type": "Public",
    "academie": "Strasbourg",
    "ville": "Colmar",
    "codePostal": "68000",
    "adresse": "Lycée Martin Schongauer, Colmar",
    "coordinates": [
      48.0696,
      7.35119
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0681882B",
      "codAffForm": "8176",
      "demandes": 584,
      "voeuxPhasePrincipale": 568,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 18,
      "pris": 22,
      "places": 30,
      "tauxAcces": 57,
      "rangDernierAppele": 266,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8176&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0681882B&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0681882B"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (584 vœux formulés, 568 en phase principale, 30 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 57%",
      "30 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0681882b@ac-strasbourg.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8176&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 55,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-ampere-lyon-2e",
    "nom": "Lycée Ampère",
    "type": "Public",
    "academie": "Lyon",
    "ville": "Lyon 2e",
    "codePostal": "69000",
    "adresse": "Lycée Ampère, Lyon 2e",
    "coordinates": [
      45.7651,
      4.83734
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 91,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0690023A",
      "codAffForm": "8180",
      "demandes": 2361,
      "voeuxPhasePrincipale": 2361,
      "voeuxPremierePlace": 4,
      "pctAdmisDebutPP": 13,
      "pris": 30,
      "places": 35,
      "tauxAcces": 14,
      "rangDernierAppele": 122,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8180&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0690023A&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0690023A"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (2361 vœux formulés, 2361 en phase principale, 35 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 14%",
      "35 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0690023a@ac-lyon.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=8180&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 56,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-simone-signoret-vaux-le-penil",
    "nom": "Lycée Simone Signoret",
    "type": "Public",
    "academie": "Créteil",
    "ville": "Vaux-le-Pénil",
    "codePostal": "77000",
    "adresse": "Lycée Simone Signoret, Vaux-le-Pénil",
    "coordinates": [
      48.531,
      2.6727
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 96,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0772310T",
      "codAffForm": "9886",
      "demandes": 550,
      "voeuxPhasePrincipale": 550,
      "voeuxPremierePlace": 3,
      "pctAdmisDebutPP": 13,
      "pris": 23,
      "places": 24,
      "tauxAcces": 39,
      "rangDernierAppele": 50,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9886&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0772310T&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0772310T"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (550 vœux formulés, 550 en phase principale, 24 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 39%",
      "24 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0772310t@ac-creteil.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9886&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 57,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  },
  {
    "id": "lycee-plaine-de-neauphle-trappes",
    "nom": "Lycée Plaine De Neauphle",
    "type": "Public",
    "academie": "Versailles",
    "ville": "Trappes",
    "codePostal": "78000",
    "adresse": "Lycée Plaine De Neauphle, Trappes",
    "coordinates": [
      48.7808,
      1.98441
    ],
    "prix": "0 € (Établissement public d'État gratuit)",
    "fraisScolariteAnnuel": 0,
    "alternancePossible": true,
    "rythmeAlternance": "Formation initiale sous statut scolaire avec 14 semaines de stages en agence immobilière ou alternance",
    "tauxReussite": 95,
    "classementThotis": null,
    "parcoursup": {
      "surParcoursup": true,
      "uai": "0781297L",
      "codAffForm": "9967",
      "demandes": 609,
      "voeuxPhasePrincipale": 609,
      "voeuxPremierePlace": 8,
      "pctAdmisDebutPP": 36,
      "pris": 22,
      "places": 33,
      "tauxAcces": 42,
      "rangDernierAppele": 61,
      "session": "2024",
      "modalite": "Procédure nationale Parcoursup",
      "procedure": "Vœu sur la plateforme nationale Parcoursup",
      "parcoursupUrl": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9967&typeBac=0&originePc=0",
      "openDataUrl": "https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/table/?refine.cod_uai=0781297L&refine.fili=BTS",
      "openDataSearchUrl": "https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?refine.fili=BTS&q=0781297L"
    },
    "tauxElearning": 10,
    "datePortesOuvertes": "Samedi 31 Janvier 2026 de 9h00 à 13h00",
    "prochaineJPO": "2026-01-31",
    "image": "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    "description": "Établissement préparant au BTS Professions Immobilières référencé dans les données officielles Parcoursup (609 vœux formulés, 609 en phase principale, 33 places offertes). Solide ancrage local avec les réseaux d'agences immobilières et de syndics de copropriété.",
    "atouts": [
      "100% Gratuit (Lycée public)",
      "Taux d'accès officiel : 42%",
      "33 places offertes sur Parcoursup",
      "Partenariats stages FNAIM / UNIS"
    ],
    "contacts": {
      "telephone": "01 00 00 00 00",
      "email": "0781297l@ac-versailles.fr",
      "siteWeb": "https://dossierappel.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=9967&typeBac=0&originePc=0"
    },
    "avis": {
      "note": 4.6,
      "totalAvis": 58,
      "commentaires": [
        {
          "auteur": "Thomas L.",
          "promo": "Diplômé 2024",
          "note": 5,
          "texte": "Très bonne formation, professeurs impliqués et très bon suivi des périodes de stage."
        },
        {
          "auteur": "Sarah M.",
          "promo": "Étudiante 1re année",
          "note": 4.5,
          "texte": "Ambiance studieuse et bonne préparation aux épreuves du BTS PI."
        }
      ]
    }
  }
];
