// Base de données complète des écoles et lycées proposant le BTS Professions Immobilières (BTS PI) en France

export const PARCOURSUP_SOURCE_URL = 'https://data.enseignementsup-recherche.gouv.fr/pages/parcoursupdata/?flg=fr-fr&disjunctive.fili';
export const THOTIS_SOURCE_URL = 'https://thotismedia.com/classement-thotis-des-bts-pi-professions-immobilieres/';

export const ACADEMIES = [
  { id: 'all', nom: 'Toutes les académies', coords: [46.603354, 1.888334], zoom: 6 },
  { id: 'sud-ouest', nom: '🌊 Grand Sud-Ouest (45)', coords: [43.95, 0.85], zoom: 7 },
  { id: 'Toulouse', nom: 'Académie de Toulouse', coords: [43.6047, 1.4442], zoom: 10 },
  { id: 'Bordeaux', nom: 'Académie de Bordeaux', coords: [44.8378, -0.5792], zoom: 10 },
  { id: 'Montpellier', nom: 'Académie de Montpellier', coords: [43.6108, 3.8767], zoom: 10 },
  { id: 'Poitiers', nom: 'Académie de Poitiers', coords: [46.5802, 0.3404], zoom: 10 },
  { id: 'Paris', nom: 'Académie de Paris', coords: [48.8566, 2.3522], zoom: 11 },
  { id: 'Versailles', nom: 'Académie de Versailles', coords: [48.8049, 2.1204], zoom: 10 },
  { id: 'Créteil', nom: 'Académie de Créteil', coords: [48.7904, 2.4556], zoom: 10 },
  { id: 'Lyon', nom: 'Académie de Lyon', coords: [45.7640, 4.8357], zoom: 11 },
  { id: 'Aix-Marseille', nom: 'Académie d\'Aix-Marseille', coords: [43.2965, 5.3698], zoom: 11 },
  { id: 'Nantes', nom: 'Académie de Nantes', coords: [47.2184, -1.5536], zoom: 11 },
  { id: 'Lille', nom: 'Académie de Lille', coords: [50.6292, 3.0573], zoom: 11 },
  { id: 'Rennes', nom: 'Académie de Rennes', coords: [48.1173, -1.6778], zoom: 11 },
  { id: 'Nice', nom: 'Académie de Nice', coords: [43.7102, 7.2620], zoom: 11 },
  { id: 'Strasbourg', nom: 'Académie de Strasbourg', coords: [48.5734, 7.7521], zoom: 11 },
];

export const SCHOOLS_DATA = [
  // =========================================================================
  // ACADÉMIE DE TOULOUSE (Haute-Garonne 31, Tarn-et-Garonne 82, Tarn 81, Hautes-Pyrénées 65)
  // =========================================================================
  {
    id: 'lycee-ozenne-toulouse',
    nom: 'Lycée Public Théodore Ozenne',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Toulouse',
    codePostal: '31000',
    adresse: '9 Rue Merly, 31000 Toulouse',
    coordinates: [43.6083, 1.4428],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec 14 semaines de stages ou contrat d\'apprentissage',
    tauxReussite: 94,
    classementThotis: 18,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 31 Janvier 2026 de 8h30 à 13h00',
    prochaineJPO: '2026-01-31',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Lycée public historique au cœur de Toulouse, réputé comme l\'un des fleurons régionaux de la filière tertiaire et immobilière. Partenariats privilégiés avec la FNAIM Occitanie et l\'UNIS.',
    atouts: ['100% Gratuit', 'Très forte notoriété académique', 'Centre-ville métro Capitole / Jeanne d\'Arc', 'Très forte notoriété auprès des employeurs'],
    contacts: {
      telephone: '05 61 21 00 20',
      email: '0310041w@ac-toulouse.fr',
      siteWeb: 'https://ozenne.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 84,
      commentaires: [
        { auteur: 'Julien T.', promo: 'Diplômé 2024', note: 5, texte: 'Les profs de droit immobilier et d\'urbanisme sont excellents. Ozenne est un sésame sur le CV à Toulouse.' },
        { auteur: 'Mélanie B.', promo: 'Étudiante 2e année', note: 4.5, texte: 'Cadre historique magnifique, émulation saine et très bon suivi des périodes de stage.' }
      ]
    }
  },
  {
    id: 'lycee-henri-matisse-cugnaux',
    nom: 'Lycée Public Henri Matisse',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Cugnaux',
    codePostal: '31270',
    adresse: '2 Rue du Comminges, 31270 Cugnaux',
    coordinates: [43.5358, 1.3484],
    prix: '0 € (Service Public de l\'Éducation)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Temps plein sous statut scolaire ou apprentissage via le CFA Académique',
    tauxReussite: 91,
    classementThotis: 16,
    parcoursup: {
      surParcoursup: true,
      demandes: 1374,
      pris: 22,
      places: 24,
      tauxAcces: 15,
      session: '2024'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle public d\'excellence du sud-ouest toulousain, le Lycée Henri Matisse forme des spécialistes aguerris de la négociation et de la gestion locative avec des outils de simulation professionnelle moderne.',
    atouts: ['Gratuité totale', 'Campus vert et spacieux', 'Section BTS très dynamique', 'Accompagnement personnalisé pour le diplôme'],
    contacts: {
      telephone: '05 62 87 34 50',
      email: '0312689x@ac-toulouse.fr',
      siteWeb: 'https://matisse.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 52,
      commentaires: [
        { auteur: 'Maxence G.', promo: 'Diplômé 2024', note: 5, texte: 'Très bonne équipe pédagogique. On fait beaucoup de cas pratiques et de mises en situation de négociation.' },
        { auteur: 'Lola M.', promo: 'Étudiante 1ère année', note: 4, texte: 'Ambiance studieuse et lycée moderne, accès facile en bus depuis Basso Cambo.' }
      ]
    }
  },
  {
    id: 'lycee-saliege-balma',
    nom: 'Lycée Polyvalent Privé Saliège',
    type: 'Privé sous contrat',
    academie: 'Toulouse',
    ville: 'Balma',
    codePostal: '31130',
    adresse: '3 Rue Jean Monnet, 31130 Balma',
    coordinates: [43.6192, 1.4925],
    prix: '1 650 € / an (Sous contrat d\'association avec l\'État)',
    fraisScolariteAnnuel: 1650,
    alternancePossible: true,
    rythmeAlternance: 'Voie scolaire avec 14 semaines de stage ou alternance 2j école / 3j entreprise',
    tauxReussite: 96,
    classementThotis: 23,
    parcoursup: {
      surParcoursup: true,
      demandes: 314,
      pris: 20,
      places: 18,
      tauxAcces: 35,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 24 Janvier 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-01-24',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement privé sous contrat de grand prestige aux portes de Toulouse (métro Balma-Gramont). Saliège affiche des taux de réussite remarquables au BTS PI et une solide passerelle vers les écoles supérieures.',
    atouts: ['96% de réussite au BTS PI', 'Accompagnement rigoureux de type prépa', 'Campus arboré moderne de 6 hectares', 'Convention avec réseaux d\'agences toulousains'],
    contacts: {
      telephone: '05 61 58 70 00',
      email: 'contact@saliege.fr',
      siteWeb: 'https://www.saliege.fr'
    },
    avis: {
      note: 4.9,
      totalAvis: 68,
      commentaires: [
        { auteur: 'Bastien D.', promo: 'Diplômé 2024', note: 5, texte: 'Excellence et bienveillance. La préparation aux oraux de transaction est la meilleure de l\'académie.' },
        { auteur: 'Emma F.', promo: 'Diplômée 2023', note: 5, texte: 'Le campus est superbe et les professeurs sont extrêmement impliqués.' }
      ]
    }
  },
  {
    id: 'imsi-toulouse',
    nom: 'IMSI Toulouse - Institut du Management des Services Immobiliers',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Blagnac',
    codePostal: '31700',
    adresse: '186 Route de Grenade, 31700 Blagnac',
    coordinates: [43.6394, 1.3912],
    prix: '0 € en alternance / 6 200 € en initial',
    fraisScolariteAnnuel: 6200,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 93,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 25,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 10h00 à 16h30',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'École 100% dédiée à l\'immobilier du Groupe IGENSIA Education (Campus René Cassin). Elle forme des négociateurs, gestionnaires de patrimoine et syndics en prise directe avec les agences de la métropole.',
    atouts: ['Campus d\'envergure internationale', 'Job datings alternance exclusifs', 'Masterclasses notaires et administrateurs', 'Poursuite en Bachelor et Mastère'],
    contacts: {
      telephone: '05 61 71 00 00',
      email: 'toulouse@imsi-formation.com',
      siteWeb: 'https://www.imsi-formation.com'
    },
    avis: {
      note: 4.7,
      totalAvis: 73,
      commentaires: [
        { auteur: 'Arthur R.', promo: 'Étudiant 2e année', note: 5, texte: 'Trouvé mon alternance chez Foncia grâce au Career Center de l\'IMSI dès le mois de mai !' }
      ]
    }
  },
  {
    id: 'esarc-evolution-toulouse',
    nom: 'ESARC Évolution Toulouse (Labège)',
    type: 'Privé sous contrat',
    academie: 'Toulouse',
    ville: 'Labège',
    codePostal: '31670',
    adresse: '500 Rue de l\'Aéropostale, 31670 Labège',
    coordinates: [43.5412, 1.5178],
    prix: '0 € en alternance / 5 900 € en initial',
    fraisScolariteAnnuel: 5900,
    alternancePossible: true,
    rythmeAlternance: '3 jours entreprise / 2 jours école',
    tauxReussite: 90,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 9h30 à 16h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Implantée au cœur de la technopole Enova Labège, l\'ESARC Toulouse est spécialiste de la préparation au BTS PI avec un suivi individualisé et un vaste réseau d\'agences partenaires.',
    atouts: ['Spécialiste du BTS depuis plus de 30 ans', 'Coaching CV et simulations d\'entretiens', 'Diplôme d\'État officiel', 'Accès direct futur métro Ligne C'],
    contacts: {
      telephone: '05 62 24 04 04',
      email: 'toulouse@esarc.fr',
      siteWeb: 'https://www.esarc-evolution.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 65,
      commentaires: [
        { auteur: 'Lucas P.', promo: 'Diplômé 2024', note: 4.5, texte: 'Bonne école, équipe pédagogique à l\'écoute et bon rythme en alternance.' }
      ]
    }
  },
  {
    id: 'ecoles-vidal-toulouse',
    nom: 'Écoles Vidal Toulouse',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Toulouse',
    codePostal: '31300',
    adresse: '4 Rue de Jouanet, 31300 Toulouse',
    coordinates: [43.5934, 1.4182],
    prix: '0 € en alternance / 5 800 € en initial',
    fraisScolariteAnnuel: 5800,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 89,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h30 à 17h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Institution toulousaine fondée en 1928 située près des Arènes, l\'École Vidal est un acteur historique de l\'alternance immobilière avec plus de 900 entreprises régionales partenaires.',
    atouts: ['Plus de 90 ans d\'expertise', 'Proche pôle multimodal Arènes (Métro A, Tram, Bus)', 'Placement en alternance personnalisé', 'Ateliers logiciels métiers'],
    contacts: {
      telephone: '05 61 76 56 56',
      email: 'admissions@ecoles-vidal.fr',
      siteWeb: 'https://www.ecoles-vidal.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 79,
      commentaires: [
        { auteur: 'Chloé V.', promo: 'Diplômée 2024', note: 5, texte: 'École sérieuse qui m\'a permis de signer chez Nexity dès juillet. Je recommande !' }
      ]
    }
  },
  {
    id: 'espi-toulouse',
    nom: 'ESPI Toulouse - École Supérieure des Professions Immobilières',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Labège',
    codePostal: '31670',
    adresse: 'Voie l\'Occitane, Bâtiment Cybèle, 31670 Labège',
    coordinates: [43.5428, 1.5165],
    prix: '0 € en alternance / 6 600 € en initial',
    fraisScolariteAnnuel: 6600,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 95,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 10h00 à 16h30',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Campus toulousain de la référence nationale de l\'enseignement immobilier. L\'ESPI allie une pédagogie d\'experts professionnels avec un réseau alumni puissant de plus de 12 000 cadres en France.',
    atouts: ['Pôle d\'excellence immobilier', 'Partenariat avec la FNAIM 31 & l\'Ordre des Géomètres', 'Simulations d\'estimations et visites 3D', 'Titres RNCP reconnus par l\'État'],
    contacts: {
      telephone: '05 61 00 22 22',
      email: 'admissions.toulouse@groupe-espi.fr',
      siteWeb: 'https://www.groupe-espi.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 91,
      commentaires: [
        { auteur: 'Romain B.', promo: 'Diplômé 2024', note: 5, texte: 'Le réseau de l\'ESPI est imbattable dans le Sud-Ouest. Intervenants tous professionnels en exercice.' }
      ]
    }
  },
  {
    id: 'efab-toulouse',
    nom: 'EFAB Toulouse - École Supérieure de l\'Immobilier',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Toulouse',
    codePostal: '31000',
    adresse: '11 Boulevard des Récollets, 31400 Toulouse',
    coordinates: [43.5852, 1.4421],
    prix: '0 € en alternance / 6 100 € en initial',
    fraisScolariteAnnuel: 6100,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 25,
    datePortesOuvertes: 'Samedi 7 Mars 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-03-07',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Membre du réseau Grandes Écoles de l\'Immobilier, l\'EFAB Toulouse prépare au BTS PI avec un accent fort mis sur les outils digitaux, les visites virtuelles et la négociation augmentée.',
    atouts: ['Campus moderne quartier Saint-Agne / Récollets', 'Logiciels professionnels inclus', 'Job dating spécialisé', 'Diplôme d\'État'],
    contacts: {
      telephone: '05 61 55 33 00',
      email: 'toulouse@efab.fr',
      siteWeb: 'https://www.efab.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 48,
      commentaires: [
        { auteur: 'Nicolas M.', promo: 'Étudiant 2e année', note: 4.5, texte: 'Bonne école et bonne ambiance. Les ateliers d\'entraînement aux oraux sont très formateurs.' }
      ]
    }
  },
  {
    id: 'lycee-skhole-dart-montauban',
    nom: 'Lycée Privé Skhole d\'Art Montauban',
    type: 'Privé sous contrat',
    academie: 'Toulouse',
    ville: 'Montauban',
    codePostal: '82000',
    adresse: '20 Rue Léon Cladel, 82000 Montauban',
    coordinates: [44.0182, 1.3541],
    prix: '1 480 € / an (Sous contrat d\'association Éducation Nationale)',
    fraisScolariteAnnuel: 1480,
    alternancePossible: true,
    rythmeAlternance: 'Voie initiale ou apprentissage en agences du Tarn-et-Garonne',
    tauxReussite: 92,
    classementThotis: 37,
    parcoursup: {
      surParcoursup: true,
      demandes: 147,
      pris: 7,
      places: 12,
      tauxAcces: 76,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Seul lycée du Tarn-et-Garonne à proposer le BTS PI sous contrat, Skhole d\'Art offre un encadrement à taille humaine et d\'excellents débouchés dans le bassin montalbanais et toulousain.',
    atouts: ['Seule section sous contrat du 82', 'Classes à effectifs réduits (25 étudiants max)', 'Réseau très soudé d\'agences locales', 'Excellente intégration'],
    contacts: {
      telephone: '05 63 63 33 00',
      email: 'contact@skholedart82.com',
      siteWeb: 'https://www.skholedart82.com'
    },
    avis: {
      note: 4.7,
      totalAvis: 43,
      commentaires: [
        { auteur: 'Guillaume L.', promo: 'Diplômé 2024', note: 5, texte: 'Petite promo donc les profs nous connaissent tous très bien. Stage trouvé chez Guy Hoquet Montauban sans problème.' }
      ]
    }
  },
  {
    id: 'lycee-marie-curie-tarbes',
    nom: 'Lycée Public Marie Curie Tarbes',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Tarbes',
    codePostal: '65000',
    adresse: '21 Rue Georges Clemenceau, 65000 Tarbes',
    coordinates: [43.2325, 0.0768],
    prix: '0 € (Établissement Public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou contrat d\'apprentissage',
    tauxReussite: 91,
    classementThotis: 40,
    parcoursup: {
      surParcoursup: true,
      demandes: 330,
      pris: 18,
      places: 20,
      tauxAcces: 44,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand pôle public des Hautes-Pyrénées, le Lycée Marie Curie prépare au BTS PI en intégrant les particularités des transactions en zone urbaine et les spécificités de l\'immobilier pyrénéen et thermal.',
    atouts: ['100% Gratuit', 'Internat public disponible', 'Ancrage sur les Pyrénées et le thermalisme', 'Très bon taux de réussite'],
    contacts: {
      telephone: '05 62 44 48 00',
      email: '0650026e@ac-toulouse.fr',
      siteWeb: 'https://marie-curie.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 37,
      commentaires: [
        { auteur: 'Mathieu P.', promo: 'Diplômé 2023', note: 5, texte: 'Super formation publique. Très bonne ambiance et cadre au pied des montagnes.' }
      ]
    }
  },
  {
    id: 'purple-campus-castres',
    nom: 'Purple Campus Castres - CCI Occitanie',
    type: 'Privé sous contrat',
    academie: 'Toulouse',
    ville: 'Castres',
    codePostal: '81100',
    adresse: '40 Allée Alphonse Juin, 81100 Castres',
    coordinates: [43.6062, 2.2415],
    prix: '0 € en alternance (Pris en charge OPCO)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Contrat d\'apprentissage : 2 jours centre / 3 jours entreprise',
    tauxReussite: 89,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    description: 'Centre de formation consulaire de la Chambre de Commerce et d\'Industrie du Tarn, Purple Campus Castres offre une immersion 100% professionnelle en alternance dans les cabinets et agences du Tarn et de l\'Occitanie.',
    atouts: ['100% financé par l\'apprentissage', 'Réseau CCI d\'entreprises partenaires', 'Locaux récents et équipés', 'Accompagnement placement'],
    contacts: {
      telephone: '05 67 46 60 00',
      email: 'castres@purple-campus.com',
      siteWeb: 'https://www.purple-campus.com'
    },
    avis: {
      note: 4.5,
      totalAvis: 31,
      commentaires: [
        { auteur: 'Antoine S.', promo: 'Diplômé 2024', note: 4.5, texte: 'Le réseau de la CCI nous aide énormément à trouver une agence dans le 81.' }
      ]
    }
  },
  {
    id: 'occitanie-business-school-albi',
    nom: 'Occitanie Business School Albi',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Albi',
    codePostal: '81000',
    adresse: '14 Rue Philippe Thomas, 81000 Albi',
    coordinates: [43.9298, 2.1480],
    prix: '0 € en alternance / 5 200 € en initial',
    fraisScolariteAnnuel: 5200,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'École tertiaire albigeoise préparant au BTS PI pour dynamiser le secteur de la transaction et de la gestion de biens en pays tarnais et toulousain.',
    atouts: ['Cadre à taille humaine', 'Suivi tuteur individuel', 'Réseau local étendu', 'Diplôme d\'État officiel'],
    contacts: {
      telephone: '05 63 45 10 20',
      email: 'contact@occitanie-bs.fr',
      siteWeb: 'https://www.occitanie-business-school.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 26,
      commentaires: [
        { auteur: 'Laurie F.', promo: 'Étudiante 2e année', note: 4.5, texte: 'Très contente de faire mon BTS à Albi sans avoir à monter à Toulouse tous les jours.' }
      ]
    }
  },
  {
    id: 'istef-toulouse',
    nom: 'ISTEF Toulouse - Institut Supérieur Tertiaire',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Toulouse',
    codePostal: '31400',
    adresse: '16 Rue Montaudran, 31400 Toulouse',
    coordinates: [43.5815, 1.4678],
    prix: '0 € en alternance / 5 600 € en initial',
    fraisScolariteAnnuel: 5600,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 89,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 9h30 à 16h00',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    description: 'Implanté dans le quartier Montaudran, l\'ISTEF dispose d\'un pôle immobilier reconnu avec des formateurs juristes, agents immobiliers et gestionnaires de copropriété.',
    atouts: ['Quartier Montaudran Innovation', 'Ateliers oraux réguliers', 'Partenariats agences Century 21 & Orpi', 'Diplôme national'],
    contacts: {
      telephone: '05 61 24 50 50',
      email: 'contact@istef.fr',
      siteWeb: 'https://www.istef.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 41,
      commentaires: [
        { auteur: 'Clément D.', promo: 'Diplômé 2024', note: 4.5, texte: 'Formateurs très professionnels et disponibles pour les révisions du BTS.' }
      ]
    }
  },
  {
    id: 'institut-rousseau-toulouse',
    nom: 'Institut Rousseau Toulouse',
    type: 'Privé hors contrat',
    academie: 'Toulouse',
    ville: 'Toulouse',
    codePostal: '31000',
    adresse: '3 Rue Jean-Baptiste Dumas, 31200 Toulouse',
    coordinates: [43.6212, 1.4312],
    prix: '0 € en alternance / 5 400 € en initial',
    fraisScolariteAnnuel: 5400,
    alternancePossible: true,
    rythmeAlternance: 'Alternance 2 jours / 3 jours ou formation initiale',
    tauxReussite: 87,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 10h00 à 15h30',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement d\'enseignement supérieur tertiaire du nord de Toulouse proposant un cursus structuré en BTS Professions Immobilières avec simulations de plaidoiries juridiques et montages de mandats.',
    atouts: ['Proche métro Barrière de Paris', 'Suivi pédagogique régulier', 'Aide à la recherche d\'entreprise', 'Titres d\'État'],
    contacts: {
      telephone: '05 61 57 20 20',
      email: 'contact@institut-rousseau.fr',
      siteWeb: 'https://www.institut-rousseau.fr'
    },
    avis: {
      note: 4.3,
      totalAvis: 35,
      commentaires: [
        { auteur: 'Sonia K.', promo: 'Étudiante 1ère année', note: 4.5, texte: 'Bonne formation, les profs nous poussent à comprendre la fiscalité et le droit.' }
      ]
    }
  },
  {
    id: 'lycee-ort-maurice-grynfogel-colomiers',
    nom: 'Lycée Privé & CFA ORT Maurice Grynfogel',
    type: 'Privé sous contrat',
    academie: 'Toulouse',
    ville: 'Colomiers',
    codePostal: '31770',
    adresse: '14 Rue de l\'Église, 31770 Colomiers',
    coordinates: [43.6125, 1.3325],
    prix: '1 250 € / an sous statut scolaire (0 € en alternance CFA)',
    fraisScolariteAnnuel: 1250,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise ou statut scolaire',
    tauxReussite: 93,
    classementThotis: 42,
    parcoursup: {
      surParcoursup: true,
      demandes: 180,
      pris: 14,
      places: 16,
      tauxAcces: 58,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Dimanche 8 Février 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-02-08',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Membre du réseau mondial ORT, cet établissement sous contrat d\'association dispose d\'une section BTS PI très réputée pour sa rigueur et son esprit d\'accompagnement bienveillant.',
    atouts: ['Établissement sous contrat d\'État', 'Taux de réussite supérieur à 90%', 'Proximité pôle aéronautique et ouest toulousain', 'Accompagnement vers l\'emploi'],
    contacts: {
      telephone: '05 61 30 50 00',
      email: 'toulouse@ort.asso.fr',
      siteWeb: 'https://toulouse.ort.asso.fr'
    },
    avis: {
      note: 4.7,
      totalAvis: 46,
      commentaires: [
        { auteur: 'David B.', promo: 'Diplômé 2024', note: 5, texte: 'Excellents profs, encadrement sérieux et suivi très professionnel.' }
      ]
    }
  },
  {
    id: 'lycee-pardailhan-auch',
    nom: 'Lycée Polyvalent Public Pardailhan Auch',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Auch',
    codePostal: '32000',
    adresse: 'Chemin de Baron, 32000 Auch',
    coordinates: [43.6465, 0.5856],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou apprentissage CFA académique',
    tauxReussite: 89,
    classementThotis: 38,
    parcoursup: {
      surParcoursup: true,
      demandes: 280,
      pris: 16,
      places: 18,
      tauxAcces: 52,
      session: '2024'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle public de référence pour le département du Gers, offrant un cadre d\'études serein et un réseau solide avec les agences immobilières gersoises et de la métropole toulousaine.',
    atouts: ['100% Gratuit', 'Internat disponible pour les étudiants', 'Petits effectifs et suivi sur-mesure', 'Proximité du bassin gersois'],
    contacts: {
      telephone: '05 62 61 42 00',
      email: '0320002v@ac-toulouse.fr',
      siteWeb: 'https://pardailhan.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 32,
      commentaires: [
        { auteur: 'Romain P.', promo: 'Diplômé 2024', note: 5, texte: 'Superbe encadrement familial et professeurs très disponibles. Stages faciles à trouver dans le Gers.' }
      ]
    }
  },
  {
    id: 'lycee-monteil-rodez',
    nom: 'Lycée Polyvalent Public Alexis Monteil Rodez',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Rodez',
    codePostal: '12000',
    adresse: '1 Rue Francisco Ferrer, 12000 Rodez',
    coordinates: [44.3516, 2.5736],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Alternance Greta-CFA ou statut scolaire initial',
    tauxReussite: 91,
    classementThotis: 33,
    parcoursup: {
      surParcoursup: true,
      demandes: 310,
      pris: 17,
      places: 20,
      tauxAcces: 46,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 31 Janvier 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-01-31',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement public de renom en Aveyron, le pôle tertiaire Monteil prépare efficacement aux transactions et à la gestion de copropriétés rurales et urbaines.',
    atouts: ['Formation publique gratuite', 'Excellente intégration professionnelle en Occitanie Nord', 'Taux de réussite supérieur à 90%', 'Internat et vie de campus'],
    contacts: {
      telephone: '05 65 67 25 00',
      email: '0120023g@ac-toulouse.fr',
      siteWeb: 'https://monteil.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 39,
      commentaires: [
        { auteur: 'Élise M.', promo: 'Diplômée 2023', note: 4.5, texte: 'Très bonne expérience, les cours de droit et de gestion de copropriété sont de grande qualité.' }
      ]
    }
  },
  {
    id: 'lycee-clement-marot-cahors',
    nom: 'Lycée Polyvalent Public Clément Marot Cahors',
    type: 'Public',
    academie: 'Toulouse',
    ville: 'Cahors',
    codePostal: '46000',
    adresse: 'Rue Victor Hugo, 46000 Cahors',
    coordinates: [44.4475, 1.4422],
    prix: '0 € (Lycée public gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Alternance Greta Quercy ou cursus scolaire initial',
    tauxReussite: 88,
    classementThotis: 36,
    parcoursup: {
      surParcoursup: true,
      demandes: 295,
      pris: 15,
      places: 18,
      tauxAcces: 51,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 12h30',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Le pôle d\'enseignement supérieur du Lot, connecté aux cabinets immobiliers et notaires du Quercy et de la vallée du Lot.',
    atouts: ['100% financé par l\'État', 'Cadre de vie privilégié et calme', 'Encadrement individualisé', 'Très bons stages en transaction'],
    contacts: {
      telephone: '05 65 20 38 00',
      email: '0460002j@ac-toulouse.fr',
      siteWeb: 'https://clement-marot.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 28,
      commentaires: [
        { auteur: 'Maxime D.', promo: 'Diplômé 2024', note: 4.5, texte: 'Une promo à taille humaine où les professeurs prennent vraiment le temps de nous former.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE PARIS
  // =========================================================================
  {
    id: 'lycee-enc-bessieres-paris',
    nom: 'École Nationale de Commerce (ENC Bessières)',
    type: 'Public',
    academie: 'Paris',
    ville: 'Paris',
    codePostal: '75017',
    adresse: '70 Boulevard Bessières, 75017 Paris',
    coordinates: [48.8988, 2.3168],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou contrat d\'apprentissage en agence',
    tauxReussite: 97,
    classementThotis: 1,
    parcoursup: {
      surParcoursup: true,
      demandes: 3013,
      pris: 34,
      places: 35,
      tauxAcces: 5,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 16h30',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Institution publique d\'excellence dans le 17e arrondissement de Paris. L\'ENC Bessières est classée N°1 nationale du classement Thotis des BTS Professions Immobilières avec un taux d\'accès record de 4% sur Parcoursup et une attractivité inégalée en Île-de-France.',
    atouts: ['N°1 National Classement Thotis', '100% Gratuit d\'État', 'Taux d\'accès sélectif de 4% sur Parcoursup', 'Partenariat avec les plus grands cabinets parisiens'],
    contacts: {
      telephone: '01 44 85 85 00',
      email: 'ce.0750697k@ac-paris.fr',
      siteWeb: 'https://enc-bessieres.fr'
    },
    avis: {
      note: 4.9,
      totalAvis: 142,
      commentaires: [
        { auteur: 'Sébastien L.', promo: 'Diplômé 2024', note: 5, texte: 'Le prestige de l\'ENC ouvre toutes les portes dans l\'immobilier parisien.' },
        { auteur: 'Claire D.', promo: 'Étudiante 2e année', note: 5, texte: 'Excellents professeurs de droit et transaction, très haut niveau.' }
      ]
    }
  },

  // =========================================================================
  {
    id: 'espi-paris',
    nom: 'ESPI Paris - École Supérieure des Professions Immobilières',
    type: 'Privé hors contrat',
    academie: 'Paris',
    ville: 'Paris',
    codePostal: '75015',
    adresse: '20-22 Rue du Théâtre, 75015 Paris',
    coordinates: [48.8492, 2.2878],
    prix: '0 € en alternance / 6 800 € en initial',
    fraisScolariteAnnuel: 6800,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 96,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Pionnière de l\'enseignement immobilier depuis 1972, l\'ESPI forme des négociateurs, gestionnaires locatifs et syndics de haut vol. Réseau de plus de 4 000 entreprises partenaires dans toute l\'Île-de-France.',
    atouts: ['Pionnière de l\'immobilier depuis 1972', 'Job dating spécial alternance', 'Réseau Alumni de 12 000 pros', 'Titres RNCP reconnus'],
    contacts: {
      telephone: '01 45 67 20 82',
      email: 'admissions.paris@groupe-espi.fr',
      siteWeb: 'https://www.groupe-espi.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 184,
      commentaires: [
        { auteur: 'Maxime D.', promo: 'Diplômé 2024', note: 5, texte: 'Excellente école, professeurs tous issus du milieu professionnel (notaires, directeurs d\'agences). Trouvé mon alternance chez Century 21 dès juin !' },
        { auteur: 'Camille L.', promo: 'Étudiante 2e année', note: 5, texte: 'Le rythme 2j/3j permet de bien s\'intégrer en agence. Suivi pédagogique au top.' }
      ]
    }
  },
  {
    id: 'imsi-paris',
    nom: 'IMSI Paris - Institut du Management des Services Immobiliers',
    type: 'Privé sous contrat',
    academie: 'Paris',
    ville: 'Paris',
    codePostal: '75010',
    adresse: '12 Rue Alexandre Parodi, 75010 Paris',
    coordinates: [48.8785, 2.3682],
    prix: '0 € en alternance / 6 400 € en initial',
    fraisScolariteAnnuel: 6400,
    alternancePossible: true,
    rythmeAlternance: '1 semaine école / 1 semaine entreprise',
    tauxReussite: 94,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 25,
    datePortesOuvertes: 'Mercredi 25 Février 2026 de 14h00 à 18h00',
    prochaineJPO: '2026-02-25',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'L\'IMSI est l\'école de référence du Groupe IGENSIA Education dédiée au management de l\'immobilier. Formation orientée transaction commerciale, gestion de patrimoine et property management.',
    atouts: ['Campus Canal Saint-Martin', 'Accompagnement placement 98%', 'Masterclasses FNAIM & UNIS', 'Parcours international optionnel'],
    contacts: {
      telephone: '01 80 97 65 00',
      email: 'contact@imsi-formation.com',
      siteWeb: 'https://www.imsi-formation.com'
    },
    avis: {
      note: 4.7,
      totalAvis: 110,
      commentaires: [
        { auteur: 'Lucas V.', promo: 'Diplômé 2024', note: 5, texte: 'Le rythme 1 sem/1 sem est idéal pour gérer de vrais dossiers de vente du mandat jusqu\'au compromis.' }
      ]
    }
  },
  {
    id: 'efab-paris',
    nom: 'EFAB Paris - École Supérieure de l\'Immobilier',
    type: 'Privé hors contrat',
    academie: 'Paris',
    ville: 'Paris',
    codePostal: '75009',
    adresse: '20 Rue Joubert, 75009 Paris',
    coordinates: [48.8765, 2.3312],
    prix: '0 € en alternance / 6 200 € en initial',
    fraisScolariteAnnuel: 6200,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 89,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 30,
    datePortesOuvertes: 'Samedi 7 Mars 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-03-07',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Membre du Réseau Grandes Écoles d\'Immobilier, l\'EFAB forme aux métiers de la négociation, du property management et de la promotion immobilière avec des outils de visite virtuelle 3D.',
    atouts: ['Pédagogie par projets', 'Logiciels métiers (NéoSphère, Pericles) inclus', 'Job dating mensuel', 'Aide personnalisée à la recherche d\'entreprise'],
    contacts: {
      telephone: '01 44 40 01 20',
      email: 'admissions@efab.fr',
      siteWeb: 'https://www.efab.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 118,
      commentaires: [
        { auteur: 'Mathilde G.', promo: 'Étudiante 2e année', note: 4.5, texte: 'J\'ai appris à utiliser les vrais logiciels d\'agence dès le premier mois. Très professionnalisant !' }
      ]
    }
  },
  {
    id: 'lycee-saint-jean-de-passy-paris',
    nom: 'Lycée Privé Saint-Jean de Passy / Section Immo',
    type: 'Privé sous contrat',
    academie: 'Paris',
    ville: 'Paris',
    codePostal: '75016',
    adresse: '72 Rue Raynouard, 75016 Paris',
    coordinates: [48.8542, 2.2798],
    prix: '1 850 € / an (Sous contrat d\'association)',
    fraisScolariteAnnuel: 1850,
    alternancePossible: false,
    rythmeAlternance: 'Formation initiale temps plein (14 semaines de stages professionnels)',
    tauxReussite: 98,
    classementThotis: 11,
    parcoursup: {
      surParcoursup: true,
      demandes: 920,
      pris: 24,
      places: 25,
      tauxAcces: 22,
      session: '2024'
    },
    tauxElearning: 5,
    datePortesOuvertes: 'Samedi 10 Janvier 2026 de 10h00 à 15h00',
    prochaineJPO: '2026-01-10',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Une des sections les plus sélectives et renommées de la capitale en formation initiale. Idéal pour les étudiants souhaitant poursuivre vers les grandes écoles de commerce ou licences immobilières.',
    atouts: ['98% de réussite au diplôme', 'Encadrement d\'élite', 'Stages dans les plus belles agences du Triangle d\'Or', 'Bibliothèque et salles de travail 7j/7'],
    contacts: {
      telephone: '01 44 30 20 00',
      email: 'bts.pi@saintjeandepassy.fr',
      siteWeb: 'https://www.saintjeandepassy.fr'
    },
    avis: {
      note: 4.9,
      totalAvis: 44,
      commentaires: [
        { auteur: 'Guillaume de M.', promo: 'Diplômé 2024', note: 5, texte: 'Le meilleur tremplin académique pour ensuite intégrer un Master en gestion de patrimoine ou promotion.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE VERSAILLES
  // =========================================================================
  {
    id: 'lycee-paul-painleve-courbevoie',
    nom: 'Lycée Public Paul Painlevé',
    type: 'Public',
    academie: 'Versailles',
    ville: 'Courbevoie',
    codePostal: '92400',
    adresse: '3 Rue Joseph Rivière, 92400 Courbevoie',
    coordinates: [48.8973, 2.2536],
    prix: '0 € (Établissement Public gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Mixte : statut scolaire avec stages ou apprentissage CFA',
    tauxReussite: 91,
    classementThotis: 15,
    parcoursup: {
      surParcoursup: true,
      demandes: 880,
      pris: 28,
      places: 30,
      tauxAcces: 26,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Lycée d\'excellence de l\'ouest parisien à 10 minutes de La Défense. Excellents résultats académiques et partenariats étroits avec les agences immobilières du 92 et de Paris Ouest.',
    atouts: ['100% Gratuit', 'Proche quartier d\'affaires La Défense', 'Équipe professorale agrégée', 'Taux de réussite constant > 90%'],
    contacts: {
      telephone: '01 43 33 22 15',
      email: 'ce.0921495c@ac-versailles.fr',
      siteWeb: 'https://www.lyceepainleve.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 92,
      commentaires: [
        { auteur: 'Inès M.', promo: 'Diplômée 2024', note: 5, texte: 'Très bon encadrement public, pas de frais de scolarité et une rigueur qui fait la différence le jour de l\'examen.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE CRÉTEIL
  // =========================================================================
  {
    id: 'lycee-marcelin-berthelot-pantien',
    nom: 'Lycée Public Marcelin Berthelot Pantin',
    type: 'Public',
    academie: 'Créteil',
    ville: 'Pantin',
    codePostal: '93500',
    adresse: '110 Rue de Paris, 93500 Pantin',
    coordinates: [48.8921, 2.4068],
    prix: '0 € (Service Public)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Alternance CFA ou formation continue initiale',
    tauxReussite: 88,
    classementThotis: 17,
    parcoursup: {
      surParcoursup: true,
      demandes: 1040,
      pris: 30,
      places: 32,
      tauxAcces: 24,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 9h00 à 12h30',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Au cœur du Grand Paris et des projets immobiliers majeurs du nord-est parisien, ce lycée prépare à tous les défis de la régénération urbaine et du logement social.',
    atouts: ['Proximité immédiate métro Ligne 5', 'Gratuité totale des études', 'Partenariats Bailleurs Sociaux IDF', 'Équipe expérimentée'],
    contacts: {
      telephone: '01 48 45 20 10',
      email: 'ce.0930128k@ac-creteil.fr',
      siteWeb: 'https://lyceeberthelotpantin.fr'
    },
    avis: {
      note: 4.3,
      totalAvis: 41,
      commentaires: [
        { auteur: 'Sonia A.', promo: 'Diplômée 2024', note: 4.5, texte: 'Beaucoup d\'écoute et de bienveillance. Les profs font tout pour notre réussite.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE LYON
  // =========================================================================
  {
    id: 'sciences-u-lyon',
    nom: 'Sciences-U Lyon - Pôle Immobilier Efficom',
    type: 'Privé hors contrat',
    academie: 'Lyon',
    ville: 'Lyon',
    codePostal: '69003',
    adresse: '53 Cours Albert Thomas, 69003 Lyon',
    coordinates: [45.7485, 4.8694],
    prix: '0 € en alternance / 5 950 € en initial',
    fraisScolariteAnnuel: 5950,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 90,
    classementThotis: null,
    parcoursup: {
      surParcoursup: true,
      demandes: 125,
      pris: 13,
      places: 120,
      tauxAcces: 62,
      session: '2024'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    description: 'Campus de référence à Lyon 3ème, Sciences-U propose un BTS PI ultra opérationnel avec des simulations de transactions réelles et une spécialisation poussée en syndic de copropriété.',
    atouts: ['Grand campus métro Sans Souci', 'Équipements numériques & VR immobilière', 'Pôle relations entreprises dédié', 'Poursuite en Bachelor & Mastère'],
    contacts: {
      telephone: '04 26 29 01 01',
      email: 'contact@sciences-u-lyon.fr',
      siteWeb: 'https://www.sciences-u-lyon.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 135,
      commentaires: [
        { auteur: 'Chloé P.', promo: 'Étudiante 2e année', note: 5, texte: 'Les projets tuteurés sont géniaux : on a monté un vrai dossier de gestion locative de A à Z.' }
      ]
    }
  },
  {
    id: 'lycee-monge-chambery',
    nom: 'Lycée Public Gaspard Monge Chambéry',
    type: 'Public',
    academie: 'Lyon',
    ville: 'Chambéry',
    codePostal: '73000',
    adresse: '119 Avenue Marius Berroir, 73000 Chambéry',
    coordinates: [45.5782, 5.9231],
    prix: '0 € (Enseignement Public)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Initial avec stages ou apprentissage en stations et vallée',
    tauxReussite: 95,
    classementThotis: 21,
    parcoursup: {
      surParcoursup: true,
      demandes: 610,
      pris: 22,
      places: 24,
      tauxAcces: 32,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 31 Janvier 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-01-31',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    description: 'Spécificité unique en France : forte ouverture sur l\'immobilier de montagne, la gestion de résidences de tourisme et les transactions de chalets dans les Alpes.',
    atouts: ['Spécialisation immobilier de montagne', 'Gratuit', 'Taux de réussite record 95%', 'Opportunités d\'embauche en stations'],
    contacts: {
      telephone: '04 79 69 20 00',
      email: 'ce.0730018a@ac-grenoble.fr',
      siteWeb: 'https://monge.ent.auvergnerhonealpes.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 39,
      commentaires: [
        { auteur: 'Florian M.', promo: 'Diplômé 2023', note: 5, texte: 'Le top pour travailler en agence de montagne à Courchevel, Val Thorens ou Annecy !' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE BORDEAUX & SUD-OUEST ATLANTIQUE (Gironde, Pyrénées-Atlantiques, Lot-et-Garonne, Dordogne, Landes)
  // =========================================================================
  {
    id: 'lycee-fernand-daguin-merignac',
    nom: 'Lycée Public Fernand Daguin Mérignac',
    type: 'Public',
    academie: 'Bordeaux',
    ville: 'Mérignac',
    codePostal: '33700',
    adresse: '15 Rue de la Victoire, 33700 Mérignac',
    coordinates: [44.8384, -0.6433],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou contrat d\'apprentissage',
    tauxReussite: 93,
    classementThotis: 10,
    parcoursup: {
      surParcoursup: true,
      demandes: 1426,
      pris: 34,
      places: 35,
      tauxAcces: 21,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Le lycée public de référence pour le BTS PI dans la métropole bordelaise. Très sélectif sur Parcoursup avec un taux de placement exceptionnel et des partenariats FNAIM Gironde.',
    atouts: ['100% Gratuit d\'État', 'Proximité immédiate tramway A Mérignac Centre', 'Taux de réussite 93%', 'Partenariats promoteurs bordelais'],
    contacts: {
      telephone: '05 56 12 11 00',
      email: 'ce.0330103h@ac-bordeaux.fr',
      siteWeb: 'https://lyceedaguin-merignac.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 74,
      commentaires: [
        { auteur: 'Laura G.', promo: 'Diplômée 2024', note: 5, texte: 'Le meilleur lycée public pour le BTS PI en Gironde. Des profs exigeants et investis.' }
      ]
    }
  },
  {
    id: 'lycee-gustave-eiffel-bordeaux',
    nom: 'Lycée Public Gustave Eiffel Bordeaux',
    type: 'Public',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33000',
    adresse: '143 Cours de la Marne, 33800 Bordeaux',
    coordinates: [44.8256, -0.5615],
    prix: '0 € (Service Public gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Apprentissage CFA académique ou statut scolaire sous convention',
    tauxReussite: 92,
    classementThotis: 24,
    parcoursup: {
      surParcoursup: true,
      demandes: 1120,
      pris: 28,
      places: 30,
      tauxAcces: 24,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 16h30',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Implanté à proximité de la gare Saint-Jean, le Lycée Gustave Eiffel dispose d\'une section BTS PI très demandée sur Parcoursup avec un ancrage fort sur le bassin aquitain.',
    atouts: ['100% financé par l\'État', 'Ateliers juridiques avec notaires bordelais', 'Excellente cote auprès des réseaux régionaux', 'Accès direct Tramway'],
    contacts: {
      telephone: '05 56 33 83 00',
      email: 'ce.0330026z@ac-bordeaux.fr',
      siteWeb: 'https://www.eiffel-bordeaux.org'
    },
    avis: {
      note: 4.7,
      totalAvis: 88,
      commentaires: [
        { auteur: 'Antoine F.', promo: 'Diplômé 2023', note: 5, texte: 'Qualité d\'enseignement irréprochable. L\'équipe enseignante nous pousse à donner le meilleur.' }
      ]
    }
  },
  {
    id: 'lycee-victor-louis-talence',
    nom: 'Lycée Public Victor Louis / Greta Talence',
    type: 'Public',
    academie: 'Bordeaux',
    ville: 'Talence',
    codePostal: '33400',
    adresse: 'Avenue de Thouars, 33400 Talence',
    coordinates: [44.8012, -0.5925],
    prix: '0 € (Service public / apprentissage financé OPCO)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Alternance Greta CFA Aquitaine 2 jours / 3 jours',
    tauxReussite: 89,
    classementThotis: 28,
    parcoursup: {
      surParcoursup: true,
      demandes: 840,
      pris: 24,
      places: 25,
      tauxAcces: 28,
      session: '2024'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand lycée public du sud bordelais connecté au campus universitaire de Talence-Pessac. Formation en alternance reconnue pour les métiers de la gestion locative et du syndic.',
    atouts: ['Pôle universitaire et scientifique', 'Alternance prise en charge à 100%', 'Grand réseau d\'anciens en Gironde', 'Ligne de bus et tram directes'],
    contacts: {
      telephone: '05 56 80 76 40',
      email: 'ce.0330145c@ac-bordeaux.fr',
      siteWeb: 'https://lyceevictorlouis.net'
    },
    avis: {
      note: 4.5,
      totalAvis: 48,
      commentaires: [
        { auteur: 'Julien B.', promo: 'Diplômé 2024', note: 4.5, texte: 'Parcours très formateur avec une vraie mise en pratique en gestion de copropriété.' }
      ]
    }
  },
  {
    id: 'espi-bordeaux',
    nom: 'ESPI Bordeaux - Bassins à Flot',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33300',
    adresse: '9 Rue René Cassin, 33300 Bordeaux',
    coordinates: [44.8573, -0.5542],
    prix: '0 € en alternance / 6 900 € en initial',
    fraisScolariteAnnuel: 6900,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 94,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 24 Janvier 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-01-24',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Fondée par les organisations professionnelles de l\'immobilier (FNAIM, UNIS, FPI), l\'ESPI Bordeaux est implantée dans le quartier moderne des Bassins à Flot. Réseau d\'entreprises partenaires inégalé en Aquitaine.',
    atouts: ['Créée par les syndicats de l\'immobilier', 'Poursuite d\'études jusqu\'au Bac+5 Mastère', '96% d\'insertion professionnelle à 6 mois', 'Campus ultramoderne face au port'],
    contacts: {
      telephone: '05 56 48 50 50',
      email: 'admissions-bordeaux@groupe-espi.fr',
      siteWeb: 'https://www.groupe-espi.fr/campus/bordeaux/'
    },
    avis: {
      note: 4.8,
      totalAvis: 112,
      commentaires: [
        { auteur: 'Camille M.', promo: 'Diplômée 2024', note: 5, texte: 'L\'école de référence absolue dans l\'immobilier à Bordeaux. Mon alternance m\'a permis de signer un CDI avant même les résultats.' }
      ]
    }
  },
  {
    id: 'esarc-evolution-bordeaux',
    nom: 'ESARC Évolution Bordeaux Mérignac',
    type: 'Privé sous contrat',
    academie: 'Bordeaux',
    ville: 'Mérignac',
    codePostal: '33700',
    adresse: '8 Rue des Frères Lumière, 33700 Mérignac',
    coordinates: [44.8322, -0.6514],
    prix: '0 € en alternance / 5 800 € en initial',
    fraisScolariteAnnuel: 5800,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 90,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'L\'école des BTS par excellence en Gironde. L\'ESARC propose un encadrement resserré et un centre de carrières qui place plus de 90% des alternants.',
    atouts: ['Spécialiste du BTS depuis 30 ans', 'Coaching CV & simulations d\'entretien', 'Réseau étendu en Gironde et Bassin d\'Arcachon', 'Diplôme d\'État'],
    contacts: {
      telephone: '05 56 12 13 14',
      email: 'bordeaux@esarc.fr',
      siteWeb: 'https://www.esarc-evolution.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 62,
      commentaires: [
        { auteur: 'Maxence T.', promo: 'Diplômé 2024', note: 5, texte: 'Très bonne école avec un vrai suivi par notre tuteur école. Stage et alternance trouvés grâce au forum de l\'école.' }
      ]
    }
  },
  {
    id: 'suptertiaire-bordeaux',
    nom: 'Suptertiaire Immobilier Bordeaux Chartrons',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33000',
    adresse: '37 Quai des Chartrons, 33000 Bordeaux',
    coordinates: [44.8512, -0.5694],
    prix: '0 € en alternance / 5 950 € en initial',
    fraisScolariteAnnuel: 5950,
    alternancePossible: true,
    rythmeAlternance: '2 jours en formation / 3 jours en entreprise',
    tauxReussite: 92,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 10h00 à 16h30',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    description: 'École nationale spécialisée à 100% dans les métiers de l\'immobilier. Située sur les magnifiques quais des Chartrons à Bordeaux, elle met l\'accent sur la transaction de prestige et la gestion locative.',
    atouts: ['100% dédié aux métiers immobiliers', 'Quais des Chartrons, cadre de vie exceptionnel', 'Job datings réguliers', 'Logiciels métiers professionnels (Pericles, Néo)'],
    contacts: {
      telephone: '05 56 00 90 90',
      email: 'bordeaux@suptertiaire.com',
      siteWeb: 'https://www.suptertiaire.com'
    },
    avis: {
      note: 4.7,
      totalAvis: 51,
      commentaires: [
        { auteur: 'Théo V.', promo: 'Diplômé 2023', note: 5, texte: 'Une école avec des intervenants professionnels du terrain. Très bonne ambiance sur les quais.' }
      ]
    }
  },
  {
    id: 'efab-bordeaux',
    nom: 'EFAB Bordeaux Euratlantique',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33800',
    adresse: '85 Rue d\'Armagnac, 33800 Bordeaux',
    coordinates: [44.8219, -0.5518],
    prix: '0 € en alternance / 6 100 € en initial',
    fraisScolariteAnnuel: 6100,
    alternancePossible: true,
    rythmeAlternance: '3 jours en entreprise / 2 jours en cours',
    tauxReussite: 89,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 10h00 à 15h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'L\'EFAB Bordeaux s\'intègre au cœur du grand projet urbain Bordeaux Euratlantique. Formations immobilières du BTS au Bac+5 orientées vers le property management et la transition énergétique des bâtiments.',
    atouts: ['Quartier d\'affaires Euratlantique', 'Cursus immobilier certifié', 'Nombreux partenariats avec bailleurs sociaux', 'Réseau national Réseau Compétences & Développement'],
    contacts: {
      telephone: '05 56 79 38 38',
      email: 'contact-bordeaux@efab.fr',
      siteWeb: 'https://www.efab.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 42,
      commentaires: [
        { auteur: 'Sarah L.', promo: 'Étudiante 2e année', note: 4.5, texte: 'Le quartier Euratlantique est super pour faire des visites de programmes neufs. Formateurs au top.' }
      ]
    }
  },
  {
    id: 'imsi-bordeaux',
    nom: 'IMSI Bordeaux - Institut du Management Immobilier',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33000',
    adresse: 'Campus Magellan, 11 Rue de Candale, 33000 Bordeaux',
    coordinates: [44.8329, -0.5731],
    prix: '0 € en alternance / 6 400 € en initial',
    fraisScolariteAnnuel: 6400,
    alternancePossible: true,
    rythmeAlternance: 'Rythme alterné 2 jours école / 3 jours entreprise',
    tauxReussite: 93,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Membre du Groupe IGS, l\'IMSI forme des professionnels de haut niveau en gestion d\'actifs, administration de biens et transaction. Accompagnement individualisé vers l\'alternance.',
    atouts: ['Label de référence de l\'immobilier d\'entreprise', 'Quartier historique Victoire/Candale', 'Taux de réussite élevé', 'Diplôme d\'État BTS PI'],
    contacts: {
      telephone: '05 56 87 23 45',
      email: 'imsi-bordeaux@groupe-igs.fr',
      siteWeb: 'https://www.imsi-formation.com'
    },
    avis: {
      note: 4.8,
      totalAvis: 68,
      commentaires: [
        { auteur: 'Guillaume D.', promo: 'Diplômé 2024', note: 5, texte: 'L\'IMSI m\'a permis de trouver une alternance chez un grand administrateur de biens bordelais dès le mois de mai.' }
      ]
    }
  },
  {
    id: 'talis-bordeaux',
    nom: 'TALIS Business School Bordeaux Lac',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bordeaux',
    codePostal: '33300',
    adresse: 'Rue du Professeur Darget, 33300 Bordeaux',
    coordinates: [44.8821, -0.5702],
    prix: '0 € en alternance CFA / 5 500 € en initial',
    fraisScolariteAnnuel: 5500,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours agence',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 9h30 à 13h30',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Implanté à Bordeaux Lac, Talis est un acteur majeur de la formation par alternance en Nouvelle-Aquitaine avec un pôle immobilier très actif.',
    atouts: ['Campus spacieux à Bordeaux Lac', 'Aide à la recherche d\'entreprise', 'Poursuite d\'études en Bachelor Immobilier', 'Prise en charge OPCO'],
    contacts: {
      telephone: '05 56 69 49 49',
      email: 'bordeaux@talis-bs.com',
      siteWeb: 'https://www.talis-bs.com'
    },
    avis: {
      note: 4.4,
      totalAvis: 44,
      commentaires: [
        { auteur: 'Anaïs R.', promo: 'Diplômée 2023', note: 4, texte: 'Équipe pédagogique très dynamique et bon suivi tuteur en entreprise.' }
      ]
    }
  },
  {
    id: 'lycee-francis-jammes-orthez',
    nom: 'Lycée Professionnel Public Francis Jammes Orthez',
    type: 'Public',
    academie: 'Bordeaux',
    ville: 'Orthez',
    codePostal: '64300',
    adresse: 'Rue Francis Jammes, 64300 Orthez',
    coordinates: [43.4883, -0.7719],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Apprentissage CFA académique ou statut scolaire',
    tauxReussite: 91,
    classementThotis: 34,
    parcoursup: {
      surParcoursup: true,
      demandes: 410,
      pris: 18,
      places: 20,
      tauxAcces: 34,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'L\'unique lycée public préparant au BTS Professions Immobilières dans les Pyrénées-Atlantiques (64), idéalement situé à mi-chemin entre Pau, Dax et Bayonne.',
    atouts: ['Seul BTS PI public du département 64', 'Internat disponible pour les étudiants', 'Partenariats Béarn et Pays Basque', '100% gratuit'],
    contacts: {
      telephone: '05 59 69 14 44',
      email: 'ce.0640049k@ac-bordeaux.fr',
      siteWeb: 'https://lyceefrancisjammes.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 37,
      commentaires: [
        { auteur: 'Nicolas P.', promo: 'Diplômé 2024', note: 5, texte: 'Très bonne ambiance de promotion et un vrai esprit d\'entraide. Les profs nous soutiennent énormément.' }
      ]
    }
  },
  {
    id: 'institut-saint-dominique-pau',
    nom: 'Pôle Supérieur Saint-Dominique Pau',
    type: 'Privé sous contrat',
    academie: 'Bordeaux',
    ville: 'Pau',
    codePostal: '64000',
    adresse: '30 Rue Montpensier, 64000 Pau',
    coordinates: [43.2951, -0.3708],
    prix: '1 400 € / an sous statut scolaire (0 € en alternance CFA)',
    fraisScolariteAnnuel: 1400,
    alternancePossible: true,
    rythmeAlternance: '2 jours cours / 3 jours agence ou statut scolaire classique',
    tauxReussite: 93,
    classementThotis: 27,
    parcoursup: {
      surParcoursup: true,
      demandes: 290,
      pris: 18,
      places: 20,
      tauxAcces: 42,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 31 Janvier 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-01-31',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Institution réputée au centre-ville de Pau sous contrat d\'association avec l\'État. Le pôle supérieur prépare au BTS PI avec un taux d\'obtention remarquable et un solide réseau béarnais.',
    atouts: ['Établissement sous contrat d\'État', 'Centre-ville de Pau', 'Taux de réussite supérieur à 90%', 'Réseau FNAIM Béarn & Soule'],
    contacts: {
      telephone: '05 59 27 41 85',
      email: 'superieur@saintdominique.fr',
      siteWeb: 'https://www.saintdominique.fr'
    },
    avis: {
      note: 4.7,
      totalAvis: 52,
      commentaires: [
        { auteur: 'Mathilde L.', promo: 'Diplômée 2023', note: 5, texte: 'Cadre superbe, professeurs très disponibles et excellents résultats à l\'examen final.' }
      ]
    }
  },
  {
    id: 'eduka-bayonne',
    nom: 'EDUKA Bayonne - École de l\'Immobilier Pays Basque',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bayonne',
    codePostal: '64100',
    adresse: '44 Allée Marines, 64100 Bayonne',
    coordinates: [43.4929, -1.4748],
    prix: '0 € en alternance / 5 600 € en initial',
    fraisScolariteAnnuel: 5600,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 90,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 10h00 à 16h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    description: 'École implantée au cœur du bassin BAB (Biarritz-Anglet-Bayonne), spécialisée dans l\'immobilier résidentiel haut de gamme de la côte basque et la gestion locative saisonnière.',
    atouts: ['Spécificité marché immobilier Côte Basque & Landes', 'Alternance 100% financée', 'Proximité de la gare et centre historique', 'Formateurs agents immobiliers en exercice'],
    contacts: {
      telephone: '05 59 59 10 20',
      email: 'bayonne@eduka-ecole.fr',
      siteWeb: 'https://eduka-ecole.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 41,
      commentaires: [
        { auteur: 'Peio E.', promo: 'Diplômé 2024', note: 5, texte: 'Le marché de la côte basque est très dynamique et l\'école a des contacts dans toutes les agences locales.' }
      ]
    }
  },
  {
    id: 'talis-bayonne',
    nom: 'TALIS Campus Bayonne BAB',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Bayonne',
    codePostal: '64100',
    adresse: '8 Chemin de la Marouette, 64100 Bayonne',
    coordinates: [43.4862, -1.4925],
    prix: '0 € en alternance / 5 400 € en initial',
    fraisScolariteAnnuel: 5400,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 9h30 à 13h00',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Campus dynamique à Bayonne Marouette proposant le BTS PI en contrat d\'apprentissage ou professionnalisation, avec poursuite en Bachelor Gestionnaire d\'Actifs Immobiliers.',
    atouts: ['Campus convivial à taille humaine', 'Placement en alternance sur le BAB et le sud des Landes', 'Diplôme d\'État', 'Activités sportives et vie étudiante'],
    contacts: {
      telephone: '05 59 52 05 20',
      email: 'bayonne@talis-bs.com',
      siteWeb: 'https://www.talis-bs.com'
    },
    avis: {
      note: 4.4,
      totalAvis: 35,
      commentaires: [
        { auteur: 'Xavier B.', promo: 'Étudiant 2e année', note: 4.5, texte: 'Très bon accompagnement pour signer son contrat d\'apprentissage.' }
      ]
    }
  },
  {
    id: 'campus-ermitage-agen',
    nom: 'Pôle Supérieur Campus Ermitage Agen',
    type: 'Privé sous contrat',
    academie: 'Bordeaux',
    ville: 'Agen',
    codePostal: '47000',
    adresse: '56 Rue de l\'Ermitage, 47000 Agen',
    coordinates: [44.2031, 0.6164],
    prix: '1 350 € / an sous statut scolaire (0 € en alternance)',
    fraisScolariteAnnuel: 1350,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise ou scolaire classique',
    tauxReussite: 90,
    classementThotis: 35,
    parcoursup: {
      surParcoursup: true,
      demandes: 260,
      pris: 16,
      places: 18,
      tauxAcces: 48,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Le pôle supérieur de référence en Lot-et-Garonne regroupant les filières juridiques, notariales et immobilières. Cadre historique exceptionnel sur les hauteurs d\'Agen.',
    atouts: ['Lycée sous contrat d\'État', 'Pôle notariat et immobilier', 'Proximité des agences agenaises et villeneuvoises', 'Résidence étudiante'],
    contacts: {
      telephone: '05 53 77 66 00',
      email: 'contact@campus-ermitage.fr',
      siteWeb: 'https://www.campus-ermitage.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 40,
      commentaires: [
        { auteur: 'Cédric M.', promo: 'Diplômé 2024', note: 5, texte: 'Des cours de droit très solides grâce à la proximité avec la section notariale.' }
      ]
    }
  },
  {
    id: 'talis-perigueux',
    nom: 'TALIS Campus Périgueux Dordogne',
    type: 'Privé hors contrat',
    academie: 'Bordeaux',
    ville: 'Périgueux',
    codePostal: '24000',
    adresse: '20 Rue Gambetta, 24000 Périgueux',
    coordinates: [45.1842, 0.7215],
    prix: '0 € en alternance / 5 300 € en initial',
    fraisScolariteAnnuel: 5300,
    alternancePossible: true,
    rythmeAlternance: '2 jours cours / 3 jours entreprise',
    tauxReussite: 87,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 7 Mars 2026 de 9h30 à 13h00',
    prochaineJPO: '2026-03-07',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'Campus de proximité au centre de Périgueux, préparant au BTS PI en apprentissage au contact direct du marché immobilier périgourdin (belles demeures, gîtes, résidences secondaires).',
    atouts: ['Périgueux centre-ville', 'Spécificité immobilier de charme et rural', 'Alternance 100% financée', 'Suivi individualisé'],
    contacts: {
      telephone: '05 53 05 50 50',
      email: 'perigueux@talis-bs.com',
      siteWeb: 'https://www.talis-bs.com'
    },
    avis: {
      note: 4.5,
      totalAvis: 31,
      commentaires: [
        { auteur: 'Baptiste F.', promo: 'Diplômé 2023', note: 4.5, texte: 'Bonne formation pour s\'installer en agence en Dordogne.' }
      ]
    }
  },
  {
    id: 'cfa-landes-dax',
    nom: 'Campus Landes / CFA de Dax',
    type: 'Privé sous contrat',
    academie: 'Bordeaux',
    ville: 'Dax',
    codePostal: '40100',
    adresse: '128 Avenue Saint-Vincent de Paul, 40100 Dax',
    coordinates: [43.7088, -1.0536],
    prix: '0 € en alternance (Prise en charge OPCO)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: '2 jours CFA / 3 jours agence',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 14h00',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle consulaire de formation par alternance dans le sud des Landes. Partenariat avec les agences du thermalisme dacquois et du littoral landais (Hossegor, Capbreton).',
    atouts: ['100% financé en contrat d\'apprentissage', 'Immobilier thermal et littoral', 'Gare TGV Dax à proximité', 'Ambiance conviviale'],
    contacts: {
      telephone: '05 58 90 90 90',
      email: 'contact@campus-landes.fr',
      siteWeb: 'https://www.campus-landes.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 29,
      commentaires: [
        { auteur: 'Julie L.', promo: 'Diplômée 2024', note: 4.5, texte: 'Très bien pour faire son alternance entre Dax et la côte landaise.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE D'AIX-MARSEILLE
  // =========================================================================
  {
    id: 'lycee-jean-perrin-marseille',
    nom: 'Lycée Public Jean Perrin Marseille',
    type: 'Public',
    academie: 'Aix-Marseille',
    ville: 'Marseille',
    codePostal: '13010',
    adresse: '48 Chemin du Vallon de Toulouse, 13010 Marseille',
    coordinates: [43.2678, 5.4215],
    prix: '0 € (Lycée public)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Voie initiale scolaire ou apprentissage alterné 2j / 3j',
    tauxReussite: 87,
    classementThotis: 12,
    parcoursup: {
      surParcoursup: true,
      demandes: 1620,
      pris: 15,
      places: 24,
      tauxAcces: 21,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle d\'enseignement supérieur majeur de la cité phocéenne, préparant aux carrières de la négociation immobilière méditerranéenne et de la gestion de copropriétés.',
    atouts: ['100% Gratuit', 'Cadre boisé sur les hauteurs de Marseille', 'Nombreux partenariats Fnaim 13', 'Très bonne réputation régionale'],
    contacts: {
      telephone: '04 91 74 21 00',
      email: 'ce.0130048k@ac-aix-marseille.fr',
      siteWeb: 'https://www.lyc-perrin.ac-aix-marseille.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 52,
      commentaires: [
        { auteur: 'Léa C.', promo: 'Promo 2023', note: 4.5, texte: 'Cadre agréable, profs exigeants et très disponibles pour les révisions de BTS.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE NANTES
  // =========================================================================
  {
    id: 'pigier-nantes',
    nom: 'Pigier Performance Nantes',
    type: 'Privé sous contrat',
    academie: 'Nantes',
    ville: 'Nantes',
    codePostal: '44200',
    adresse: '4 Rue René Viviani, 44200 Nantes',
    coordinates: [47.2062, -1.5421],
    prix: '0 € en alternance / 5 400 € en initial',
    fraisScolariteAnnuel: 5400,
    alternancePossible: true,
    rythmeAlternance: '3 jours entreprise / 2 jours école',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h30 à 16h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Acteur historique de la formation en alternance dans les Pays de la Loire, Pigier Nantes bénéficie d\'un très fort ancrage auprès des cabinets de syndic et agences nantaises.',
    atouts: ['Taux d\'employabilité 92%', 'Conseillers formation dédiés', 'Ateliers coaching CV et entretiens', 'Campus moderne sur l\'île de Nantes'],
    contacts: {
      telephone: '02 40 35 20 20',
      email: 'nantes@pigier.com',
      siteWeb: 'https://www.pigier.com/nantes'
    },
    avis: {
      note: 4.5,
      totalAvis: 64,
      commentaires: [
        { auteur: 'Hugo S.', promo: 'Diplômé 2024', note: 4.5, texte: 'Pris en CDI dès la fin de mon BTS dans mon agence d\'accueil. Formation très carrée.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE LILLE
  // =========================================================================
  {
    id: 'lycee-pasteur-lille',
    nom: 'Lycée Public Louis Pasteur Lille',
    type: 'Public',
    academie: 'Lille',
    ville: 'Lille',
    codePostal: '59000',
    adresse: '1 Rue des Urbanistes, 59000 Lille',
    coordinates: [50.6385, 3.0725],
    prix: '0 € (Gratuité républicaine)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Statut scolaire initial ou contrat d\'apprentissage',
    tauxReussite: 89,
    classementThotis: 7,
    parcoursup: {
      surParcoursup: true,
      demandes: 1420,
      pris: 52,
      places: 59,
      tauxAcces: 36,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Situé au cœur de la Métropole Européenne de Lille, le Lycée Pasteur dispose d\'une tradition d\'excellence tertiaire et de conventions avec les bailleurs sociaux et administrateurs de biens.',
    atouts: ['Gratuité totale', 'Centre-ville proche gares Lille Flandres/Europe', 'Section active et solidaire', 'Simulations d\'oraux blancs réguliers'],
    contacts: {
      telephone: '03 20 12 34 56',
      email: 'ce.0590119e@ac-lille.fr',
      siteWeb: 'https://pasteur-lille.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 68,
      commentaires: [
        { auteur: 'Élodie N.', promo: 'Promo 2024', note: 5, texte: 'Très bonne expérience, professeurs très investis et excellente ambiance de promo.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE RENNES
  // =========================================================================
  {
    id: 'esup-rennes',
    nom: 'ESUP Rennes - L\'Éco-École de Commerce & Immobilier',
    type: 'Privé hors contrat',
    academie: 'Rennes',
    ville: 'Rennes',
    codePostal: '35000',
    adresse: '1 Bis Rue de la Motte Picquet, 35000 Rennes',
    coordinates: [48.1085, -1.6842],
    prix: '0 € en alternance / 5 200 € en initial',
    fraisScolariteAnnuel: 5200,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 91,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 20,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement breton réputé, l\'ESUP Rennes accompagne les alternants vers la maîtrise des transactions résidentielles et des baux commerciaux en Ille-et-Vilaine.',
    atouts: ['Bassin rennais très dynamique', 'Pédagogie active', 'Suivi tuteur entreprise mensuel', '94% d\'insertion à 6 mois'],
    contacts: {
      telephone: '02 99 30 11 00',
      email: 'contact.rennes@esup.fr',
      siteWeb: 'https://www.esup-rennes.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 49,
      commentaires: [
        { auteur: 'Brendan L.', promo: 'Diplômé 2024', note: 5, texte: 'Excellente école, ambiance chaleureuse et accompagnement personnalisé pour trouver son patron.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE MONTPELLIER & OCCITANIE MÉDITERRANÉE (Hérault, Gard, Pyrénées-Orientales, Aude)
  // =========================================================================
  {
    id: 'lycee-philippe-lamour-nimes',
    nom: 'Lycée Public Philippe Lamour Nîmes',
    type: 'Public',
    academie: 'Montpellier',
    ville: 'Nîmes',
    codePostal: '30000',
    adresse: '36 Rue de l\'Hostellerie, 30000 Nîmes',
    coordinates: [43.8184, 4.3642],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou apprentissage Greta-CFA du Gard',
    tauxReussite: 93,
    classementThotis: 26,
    parcoursup: {
      surParcoursup: true,
      demandes: 1206,
      pris: 23,
      places: 35,
      tauxAcces: 37,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 31 Janvier 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-01-31',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Le lycée public d\'excellence de l\'Académie de Montpellier pour le BTS Professions Immobilières. Très prisé sur Parcoursup, avec internat et partenariats étroits avec la FNAIM Gard.',
    atouts: ['100% Gratuit d\'État', 'Internat pour les étudiants', 'Excellents résultats académiques', 'Réseau d\'agences Nîmes, Alès et Camargue'],
    contacts: {
      telephone: '04 66 04 22 22',
      email: 'ce.0301416r@ac-montpellier.fr',
      siteWeb: 'https://philippe-lamour.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 82,
      commentaires: [
        { auteur: 'Maximilien D.', promo: 'Diplômé 2024', note: 5, texte: 'Le BTS PI à Philippe Lamour est réputé dans tout le Gard. L\'équipe enseignante est au top.' }
      ]
    }
  },
  {
    id: 'lycee-aristide-maillol-perpignan',
    nom: 'Lycée Polyvalent Public Aristide Maillol Perpignan',
    type: 'Public',
    academie: 'Montpellier',
    ville: 'Perpignan',
    codePostal: '66000',
    adresse: '73 Avenue de Pau, 66000 Perpignan',
    coordinates: [42.6887, 2.8948],
    prix: '0 € (Lycée public gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation initiale scolaire ou apprentissage CFA académique',
    tauxReussite: 91,
    classementThotis: 31,
    parcoursup: {
      surParcoursup: true,
      demandes: 685,
      pris: 26,
      places: 30,
      tauxAcces: 33,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement public de référence dans les Pyrénées-Orientales, connecté au marché immobilier catalan, balnéaire (Canet, Collioure) et frontalier avec l\'Espagne.',
    atouts: ['Formation publique gratuite', 'Spécificité marché balnéaire et littoral catalan', 'Internat et infrastructures modernes', 'Taux de réussite > 90%'],
    contacts: {
      telephone: '04 68 85 80 00',
      email: 'ce.0660010m@ac-montpellier.fr',
      siteWeb: 'https://aristide-maillol.mon-ent-occitanie.fr'
    },
    avis: {
      note: 4.6,
      totalAvis: 54,
      commentaires: [
        { auteur: 'Inès B.', promo: 'Diplômée 2023', note: 5, texte: 'Très bonne formation, j\'ai pu faire mes stages dans une agence de Canet-en-Roussillon et j\'ai été embauchée direct.' }
      ]
    }
  },
  {
    id: 'espi-montpellier',
    nom: 'ESPI Montpellier - Port Marianne',
    type: 'Privé hors contrat',
    academie: 'Montpellier',
    ville: 'Montpellier',
    codePostal: '34000',
    adresse: '120 Rue Maryam Mirzakhani, 34000 Montpellier',
    coordinates: [43.6012, 3.9015],
    prix: '0 € en alternance / 6 800 € en initial',
    fraisScolariteAnnuel: 6800,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 94,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 24 Janvier 2026 de 10h00 à 17h00',
    prochaineJPO: '2026-01-24',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Le campus montpelliérain de l\'ESPI, fondé par les professionnels du secteur immobilier (FNAIM, UNIS). Idéalement situé dans le quartier d\'affaires Port Marianne, il offre un réseau exceptionnel de cabinets et promoteurs.',
    atouts: ['Quartier d\'affaires Port Marianne', 'Fondé par les fédérations professionnelles', 'Placement en alternance garanti', 'Poursuite d\'études jusqu\'au Mastère Bac+5'],
    contacts: {
      telephone: '04 67 02 10 10',
      email: 'admissions-montpellier@groupe-espi.fr',
      siteWeb: 'https://www.groupe-espi.fr/campus/montpellier/'
    },
    avis: {
      note: 4.8,
      totalAvis: 95,
      commentaires: [
        { auteur: 'Lucas V.', promo: 'Diplômé 2024', note: 5, texte: 'Le réseau de l\'ESPI fait la différence pour trouver les meilleures alternances en métropole montpelliéraine.' }
      ]
    }
  },
  {
    id: 'esicad-montpellier',
    nom: 'ESICAD Montpellier Le Millénaire',
    type: 'Privé sous contrat',
    academie: 'Montpellier',
    ville: 'Montpellier',
    codePostal: '34000',
    adresse: '140 Rue Robert Koch, 34000 Montpellier',
    coordinates: [43.6185, 3.9142],
    prix: '0 € en alternance / 5 700 € en initial',
    fraisScolariteAnnuel: 5700,
    alternancePossible: true,
    rythmeAlternance: '2 jours en cours / 3 jours en entreprise',
    tauxReussite: 91,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h30 à 16h00',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'École historique de commerce et de gestion à Montpellier. Le pôle immobilier prépare au BTS PI depuis plus de 25 ans avec un encadrement réputé et des coachings carrières personnalisés.',
    atouts: ['Parc d\'activités Le Millénaire', 'Accompagnement placement alternance', 'Diplôme d\'État', 'Simulations régulières d\'oraux de négociation'],
    contacts: {
      telephone: '04 67 13 82 82',
      email: 'montpellier@esicad.com',
      siteWeb: 'https://www.esicad.com'
    },
    avis: {
      note: 4.6,
      totalAvis: 68,
      commentaires: [
        { auteur: 'Chloé T.', promo: 'Diplômée 2023', note: 4.5, texte: 'Des formateurs passionnés et un très bon accompagnement pour mon contrat pro.' }
      ]
    }
  },
  {
    id: 'idelca-business-school-montpellier',
    nom: 'IDELCA Business School Jacou Montpellier',
    type: 'Privé sous contrat',
    academie: 'Montpellier',
    ville: 'Jacou',
    codePostal: '34830',
    adresse: '4 Rue Louis Breguet, 34830 Jacou',
    coordinates: [43.6621, 3.9102],
    prix: '0 € en alternance / 5 400 € en initial',
    fraisScolariteAnnuel: 5400,
    alternancePossible: true,
    rythmeAlternance: '2 jours école / 3 jours entreprise',
    tauxReussite: 90,
    classementThotis: null,
    parcoursup: {
      surParcoursup: true,
      demandes: 138,
      pris: 4,
      places: 34,
      tauxAcces: 89,
      session: '2024'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 7 Mars 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-03-07',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Établissement familial d\'enseignement supérieur sous contrat, situé au nord de Montpellier (terminus Tram 2 Jacou). Très forte proximité humaine et excellente préparation aux épreuves orales du BTS PI.',
    atouts: ['Établissement à taille humaine', 'Terminus Tramway Ligne 2', 'Taux de réussite 90%', 'Aide active à la recherche d\'entreprise'],
    contacts: {
      telephone: '04 67 10 52 52',
      email: 'contact@idelca.fr',
      siteWeb: 'https://www.idelca.fr'
    },
    avis: {
      note: 4.7,
      totalAvis: 47,
      commentaires: [
        { auteur: 'Romain B.', promo: 'Diplômé 2024', note: 5, texte: 'Une ambiance d\'école formidable avec des profs toujours à l\'écoute. Je recommande les yeux fermés.' }
      ]
    }
  },
  {
    id: 'ecla-montpellier',
    nom: 'Campus Efficom / ECLA Montpellier',
    type: 'Privé hors contrat',
    academie: 'Montpellier',
    ville: 'Montpellier',
    codePostal: '34000',
    adresse: '180 Rue du Mas de Nègre, 34000 Montpellier',
    coordinates: [43.5956, 3.8821],
    prix: '0 € en alternance / 5 600 € en initial',
    fraisScolariteAnnuel: 5600,
    alternancePossible: true,
    rythmeAlternance: '2 jours cours / 3 jours entreprise',
    tauxReussite: 86,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 25,
    datePortesOuvertes: 'Mercredi 18 Mars 2026 de 14h00 à 18h30',
    prochaineJPO: '2026-03-18',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Une école branchée et innovante au cœur du pôle étudiant montpelliérain. Fort accent mis sur le marketing digital immobilier, la visite vidéo et la négociation augmentée.',
    atouts: ['Campus neuf avec espaces coworking', 'Formation aux outils d\'estimation IA', 'Partenariat avec les agences du littoral héraultais', 'Vie étudiante dynamique'],
    contacts: {
      telephone: '04 67 15 20 30',
      email: 'admission.montpellier@efficom.fr',
      siteWeb: 'https://www.efficom-montpellier.fr'
    },
    avis: {
      note: 4.4,
      totalAvis: 58,
      commentaires: [
        { auteur: 'Clément R.', promo: 'Étudiant 2e année', note: 4.5, texte: 'Campus moderne, formateurs sympa et disponibles. Très bon suivi en alternance.' }
      ]
    }
  },
  {
    id: 'purple-campus-beziers',
    nom: 'Purple Campus Béziers - CCI Occitanie',
    type: 'Privé sous contrat',
    academie: 'Montpellier',
    ville: 'Béziers',
    codePostal: '34500',
    adresse: 'Avenue de Badones, 34500 Béziers',
    coordinates: [43.3442, 3.2158],
    prix: '0 € en alternance (Prise en charge OPCO)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: '2 jours CFA / 3 jours agence',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Centre de formation par alternance de la Chambre de Commerce et d\'Industrie de l\'Hérault. Idéalement implanté pour les agences du biterrois, du Cap d\'Agde et du Val d\'Hérault.',
    atouts: ['Réseau consulaire CCI Occitanie', '100% financé en apprentissage', 'Forte demande sur le littoral Cap d\'Agde / Vias', 'Formateurs praticiens'],
    contacts: {
      telephone: '04 67 80 97 00',
      email: 'beziers@purple-campus.com',
      siteWeb: 'https://www.purple-campus.com'
    },
    avis: {
      note: 4.5,
      totalAvis: 36,
      commentaires: [
        { auteur: 'Élodie S.', promo: 'Diplômée 2024', note: 4.5, texte: 'Parfait pour faire son alternance en agence immobilière sur le secteur Agde/Béziers.' }
      ]
    }
  },
  {
    id: 'purple-campus-perpignan',
    nom: 'Purple Campus Perpignan Roussillon',
    type: 'Privé sous contrat',
    academie: 'Montpellier',
    ville: 'Perpignan',
    codePostal: '66000',
    adresse: 'Avenue Paul Pascot, 66000 Perpignan',
    coordinates: [42.6741, 2.8712],
    prix: '0 € en alternance CFA (Prise en charge intégrale)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: '2 jours CFA / 3 jours entreprise',
    tauxReussite: 87,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 15,
    datePortesOuvertes: 'Samedi 14 Mars 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-03-14',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Le pôle consulaire d\'apprentissage des Pyrénées-Orientales, adossé à la CCI Roussillon. Forme de nombreux négociateurs et gestionnaires pour les agences de la plaine du Roussillon.',
    atouts: ['Prise en charge OPCO 100%', 'Réseau CCI Pyrénées-Orientales', 'Grand campus moderne avec restaurant', 'Partenariat FNAIM 66'],
    contacts: {
      telephone: '04 68 56 62 20',
      email: 'perpignan@purple-campus.com',
      siteWeb: 'https://www.purple-campus.com'
    },
    avis: {
      note: 4.4,
      totalAvis: 33,
      commentaires: [
        { auteur: 'Marc F.', promo: 'Diplômé 2023', note: 4.5, texte: 'Bonne formation pratique avec des formateurs qui connaissent le terrain catalan.' }
      ]
    }
  },
  {
    id: 'icfa-carcassonne',
    nom: 'ICFA / Sud Formation CCI Carcassonne',
    type: 'Privé sous contrat',
    academie: 'Montpellier',
    ville: 'Carcassonne',
    codePostal: '11000',
    adresse: 'Boulevard Henry Bouffet, 11000 Carcassonne',
    coordinates: [43.2122, 2.3537],
    prix: '0 € en alternance (Apprentissage CFA)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: '2 jours CFA / 3 jours agence',
    tauxReussite: 88,
    classementThotis: null,
    parcoursup: {
      surParcoursup: false,
      demandes: null,
      pris: null,
      places: null,
      tauxAcces: null,
      modalite: 'Admission directe hors Parcoursup',
      procedure: 'Sur dossier de candidature et entretien'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 21 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-21',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle de formation consulaire de l\'Aude à Carcassonne, préparant les futurs professionnels de l\'immobilier aux spécificités de l\'habitat audois et du tourisme.',
    atouts: ['100% financé par l\'OPCO', 'Réseau d\'agences à Carcassonne, Limoux et Narbonne', 'Campus calme et accessible', 'Accompagnement individualisé'],
    contacts: {
      telephone: '04 68 10 36 00',
      email: 'contact@sudformation.cci.fr',
      siteWeb: 'https://www.sudformation.cci.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 27,
      commentaires: [
        { auteur: 'Sébastien C.', promo: 'Diplômé 2024', note: 4.5, texte: 'Très utile pour trouver une alternance dans le département de l\'Aude.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE POITIERS & CHARENTES (Charente-Maritime, Charente, Vienne)
  // =========================================================================
  {
    id: 'lycee-jean-dautet-la-rochelle',
    nom: 'Lycée Public Jean Dautet La Rochelle',
    type: 'Public',
    academie: 'Poitiers',
    ville: 'La Rochelle',
    codePostal: '17000',
    adresse: '18 Rue René Couzinet, 17000 La Rochelle',
    coordinates: [46.1603, -1.1511],
    prix: '0 € (Lycée public d\'État gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Formation scolaire classique avec stages ou contrat d\'apprentissage Greta',
    tauxReussite: 92,
    classementThotis: 20,
    parcoursup: {
      surParcoursup: true,
      demandes: 780,
      pris: 28,
      places: 30,
      tauxAcces: 29,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 7 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Lycée public réputé sur la façade atlantique, idéalement situé à La Rochelle. Forte attractivité sur le marché immobilier littoral (Île de Ré, Île d\'Oléron, agglomération rochelaise).',
    atouts: ['100% Gratuit d\'État', 'Marché immobilier littoral prestigieux (Île de Ré)', 'Excellents résultats au diplôme', 'Cadre de vie étudiant rochelais'],
    contacts: {
      telephone: '05 46 28 03 00',
      email: 'ce.0170028y@ac-poitiers.fr',
      siteWeb: 'https://lycee-dautet.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 65,
      commentaires: [
        { auteur: 'Valentin M.', promo: 'Diplômé 2024', note: 5, texte: 'Le lycée Dautet est ultra réputé à La Rochelle. Stages passionnants sur le marché rétais.' }
      ]
    }
  },
  {
    id: 'lycee-marguerite-de-valois-angouleme',
    nom: 'Lycée Public Marguerite de Valois Angoulême',
    type: 'Public',
    academie: 'Poitiers',
    ville: 'Angoulême',
    codePostal: '16000',
    adresse: 'Rue François Premier, 16000 Angoulême',
    coordinates: [45.6484, 0.1562],
    prix: '0 € (Service public gratuit)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Statut scolaire classique ou apprentissage Greta Charente',
    tauxReussite: 90,
    classementThotis: 29,
    parcoursup: {
      surParcoursup: true,
      demandes: 540,
      pris: 24,
      places: 25,
      tauxAcces: 38,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle public d\'enseignement supérieur en Charente, formant des techniciens supérieurs de l\'immobilier au contact des agences d\'Angoulême et du Grand Cognac.',
    atouts: ['Formation publique gratuite', 'Internat de campus disponible', 'Partenariats agences Charente et Cognac', 'Taux de réussite 90%'],
    contacts: {
      telephone: '05 45 97 45 00',
      email: 'ce.0160003h@ac-poitiers.fr',
      siteWeb: 'https://lycee-margueritedevalois.fr'
    },
    avis: {
      note: 4.5,
      totalAvis: 38,
      commentaires: [
        { auteur: 'Morgane B.', promo: 'Diplômée 2023', note: 4.5, texte: 'Très bonne école avec des professeurs dévoués et sérieux.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE NICE
  // =========================================================================
  {
    id: 'lycee-honore-d-estienne-d-orves-nice',
    nom: 'Lycée Public Honoré d\'Estienne d\'Orves Nice',
    type: 'Public',
    academie: 'Nice',
    ville: 'Nice',
    codePostal: '06000',
    adresse: '13 Avenue Honoré d\'Estienne d\'Orves, 06000 Nice',
    coordinates: [43.6974, 7.2415],
    prix: '0 € (Service Public)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Voie initiale sous statut scolaire ou apprentissage 2j / 3j',
    tauxReussite: 91,
    classementThotis: 22,
    parcoursup: {
      surParcoursup: true,
      demandes: 890,
      pris: 24,
      places: 25,
      tauxAcces: 25,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 14 Février 2026 de 9h00 à 13h00',
    prochaineJPO: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    description: 'Implanté sur la colline avec vue imprenable sur la baie des Anges, le lycée offre un cursus très axé sur l\'immobilier de prestige et la clientèle internationale de la Côte d\'Azur.',
    atouts: ['Formation axée immobilier de luxe Côte d\'Azur', 'Gratuité totale', 'Langues étrangères renforcées (Anglais / Italien)', 'Partenariats agences Cannes & Monaco'],
    contacts: {
      telephone: '04 93 97 12 00',
      email: 'ce.0060032x@ac-nice.fr',
      siteWeb: 'https://www.lyc-honore-destienne-dorves.ac-nice.fr'
    },
    avis: {
      note: 4.7,
      totalAvis: 48,
      commentaires: [
        { auteur: 'Nicolas P.', promo: 'Diplômé 2024', note: 5, texte: 'Une des meilleures formations du Sud. Les modules de négociation en anglais sont un vrai plus pour la région.' }
      ]
    }
  },

  // =========================================================================
  // ACADÉMIE DE STRASBOURG
  // =========================================================================
  {
    id: 'lycee-rene-cassin-strasbourg',
    nom: 'Lycée Public René Cassin Strasbourg',
    type: 'Public',
    academie: 'Strasbourg',
    ville: 'Strasbourg',
    codePostal: '67000',
    adresse: '4 Rue Schoch, 67000 Strasbourg',
    coordinates: [48.5682, 7.7654],
    prix: '0 € (Lycée public d\'État)',
    fraisScolariteAnnuel: 0,
    alternancePossible: true,
    rythmeAlternance: 'Temps plein avec 14 semaines de stages ou contrat d\'apprentissage',
    tauxReussite: 93,
    classementThotis: 25,
    parcoursup: {
      surParcoursup: true,
      demandes: 720,
      pris: 26,
      places: 28,
      tauxAcces: 32,
      session: '2024'
    },
    tauxElearning: 10,
    datePortesOuvertes: 'Samedi 28 Février 2026 de 9h00 à 16h00',
    prochaineJPO: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Pôle tertiaire majeur en Alsace, le Lycée René Cassin prépare au BTS PI avec une solide assise juridique (droit local alsacien-mosellan) et une ouverture transfrontalière.',
    atouts: ['Maîtrise du droit local alsacien', 'Gratuité totale', 'Réseau très fort FNAIM Grand Est', 'Haut niveau de réussite'],
    contacts: {
      telephone: '03 88 45 54 54',
      email: 'ce.0670081d@ac-strasbourg.fr',
      siteWeb: 'https://lyceecassin.fr'
    },
    avis: {
      note: 4.8,
      totalAvis: 55,
      commentaires: [
        { auteur: 'Sophie W.', promo: 'Diplômée 2023', note: 5, texte: 'Le module sur les particularités du livre foncier en Alsace est ultra précieux lors de nos embauches en étude notariale ou agence.' }
      ]
    }
  }
];
