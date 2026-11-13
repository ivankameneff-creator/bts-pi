// Données expertes pour la préparation à l'entretien d'admission en BTS Professions Immobilières (BTS PI)

export const INTERVIEW_CHECKLIST = [
  {
    id: 'chk-1',
    title: 'Tenue professionnelle adaptée au secteur immobilier',
    detail: 'L\'immobilier est un métier de représentation et de confiance : optez pour une tenue soignée (chemise, blazer, pantalon habillé ou tailleur sobre).'
  },
  {
    id: 'chk-2',
    title: 'Pochette papier complète en double exemplaire',
    detail: 'CV à jour, lettre de motivation personnalisée, 3 derniers bulletins scolaires, copie du relevé de notes du bac (si obtenu).'
  },
  {
    id: 'chk-3',
    title: 'Tableau de suivi de vos recherches d\'alternance / stages',
    detail: 'Apporter une feuille listant les 15 à 20 agences déjà contactées (nom, date, relance, interlocuteur) impressionne systématiquement les jurys.'
  },
  {
    id: 'chk-4',
    title: 'Connaissance précise de l\'école et du référentiel BTS PI',
    detail: 'Relire le rythme d\'alternance, les matières clés (Droit et veille juridique, Économie et organisation, Conseil en ingénierie de l\'immobilier) et les épreuves E4 / E6.'
  },
  {
    id: 'chk-5',
    title: 'Préparer 1 sujet d\'actualité immobilière récent',
    detail: 'Évolution des taux de crédit immobilier, calendrier d\'interdiction de location des passoires thermiques (DPE), encadrement des loyers ou tension locative locale.'
  },
  {
    id: 'chk-6',
    title: 'Arriver 10 à 15 minutes en avance (ou tester sa visio)',
    detail: 'La ponctualité est le premier critère d\'évaluation d\'un futur négociateur ou gestionnaire qui aura des rendez-vous clients.'
  }
];

/**
 * Génère la liste des questions que l'école / le jury pourrait poser au candidat,
 * contextualisée selon l'établissement, le mode (alternance/initial) et le pôle visé.
 */
export function buildJuryQuestions({ school, studyMode = 'alternance', specialty = 'polyvalent' }) {
  const schoolName = school?.nom || 'notre établissement';
  const schoolCity = school?.ville || 'votre ville';
  const passRate = school?.tauxReussite ? `${school.tauxReussite}%` : 'élevé';
  const rhythm = school?.rythmeAlternance || '2 jours en cours / 3 jours en entreprise';
  const strength = school?.atouts?.[0] || 'la qualité de votre accompagnement pédagogique';

  const specialtyText = {
    polyvalent: 'découvrir la transaction tout en maîtrisant la gestion locative et le syndic afin d\'avoir un profil complet et polyvalent',
    transaction: 'la transaction immobilière : prospection terrain, estimation au juste prix, mise en valeur des biens et négociation entre vendeurs et acquéreurs',
    gestion: 'la gestion locative : accompagnement des propriétaires bailleurs, rédaction sécurisée des baux, états des lieux et suivi technique et comptable',
    syndic: 'le syndic de copropriété : gestion juridique et budgétaire des immeubles, suivi des travaux de rénovation énergétique et tenue des assemblées générales'
  }[specialty];

  return [
    {
      id: 'q-jury-1',
      category: 'Parcours & Pitch',
      difficulty: 'Incontournable',
      question: 'Pouvez-vous vous présenter en 2 minutes et nous expliquer votre parcours ?',
      intent: 'Évaluer la clarté de votre expression orale, votre structure d\'esprit et la cohérence de votre fil conducteur.',
      tip: 'Utilisez la méthode « Passé – Présent – Projet » : 1) votre filière actuelle et ce qu\'elle vous a appris, 2) vos expériences (jobs d\'été, stages, engagement), 3) pourquoi le BTS PI est l\'étape logique vers votre métier cible.',
      sampleAnswer: `Actuellement en cursus pré-bac / réorientation, j'ai développé un goût prononcé pour le contact client, le droit appliqué et la négociation. Mes premières expériences m'ont confirmé mon envie d'exercer un métier de terrain et de conseil. Intégrer le BTS Professions Immobilières représente le cadre idéal pour acquérir les compétences techniques et juridiques menant aux métiers de l'immobilier.`
    },
    {
      id: 'q-jury-2',
      category: 'Motivation BTS PI',
      difficulty: 'Incontournable',
      question: 'Pourquoi choisir un BTS Professions Immobilières plutôt qu\'un BUT GEA, une licence de droit ou une école de commerce ?',
      intent: 'Vérifier que le BTS PI est un choix réfléchi et non un vœu par défaut.',
      tip: 'Citez deux arguments décisifs : la professionnalisation immédiate sur 2 ans et l\'obtention de plein droit des cartes professionnelles T (Transaction) et G (Gestion) prévues par la loi Hoguet, qu\'une école de commerce généraliste ne délivre pas.',
      sampleAnswer: `Contrairement à un cursus généraliste, le BTS PI me plonge dès la première semaine dans le cœur réglementaire, technique et commercial de l'immobilier. De plus, ce diplôme d'État est reconnu par la loi Hoguet pour obtenir l'aptitude aux cartes professionnelles Transaction et Gestion, ce qui est un atout majeur pour mon employabilité.`
    },
    {
      id: 'q-jury-3',
      category: 'Choix de l\'école',
      difficulty: 'Incontournable',
      question: `Pourquoi postulez-vous spécifiquement chez ${schoolName} à ${schoolCity} ?`,
      intent: 'Mesurer si vous vous êtes réellement renseigné sur l\'établissement avant de venir à l\'entretien.',
      tip: school
        ? `Appuyez-vous sur des faits précis : leur taux de réussite (${passRate}), leur atout reconnu (« ${strength} ») et leur ancrage économique sur le bassin de ${schoolCity}.`
        : 'Citez 3 éléments précis : le sérieux de l\'encadrement, le réseau d\'agences partenaires locales et les retours positifs d\'étudiants ou lors des Journées Portes Ouvertes.',
      sampleAnswer: school
        ? `J'ai retenu ${schoolName} pour le sérieux de votre encadrement, reflété par votre taux de réussite de ${passRate}, ainsi que pour ${strength.toLowerCase()}. Votre ancrage auprès des acteurs immobiliers de ${schoolCity} correspond exactement à l'environnement dans lequel je souhaite me former.`
        : `J'ai choisi votre établissement pour l'exigence de votre suivi pédagogique, la proximité avec le tissu d'agences locales et la qualité de la préparation aux épreuves professionnelles du BTS.`
    },
    {
      id: 'q-jury-4',
      category: 'Vision du métier',
      difficulty: 'Classique',
      question: 'Qu\'est-ce qui vous attire réellement dans l\'immobilier au-delà de l\'image télévisée du métier ?',
      intent: 'Écarter les candidats attirés uniquement par les émissions télé (« recherche d\'appartement ») ou l\'illusion d\'argent facile.',
      tip: 'Montrez votre réalisme : parlez du travail de prospection parfois ingrat, de la rigueur juridique indispensable, de l\'écoute client et de la fierté d\'accompagner un projet de vie patrimonial.',
      sampleAnswer: `Je sais que la visite d'un bien ne représente que la partie visible du métier. Ce qui m'attire réellement, c'est tout le travail en amont et en aval : la prospection, l'analyse juridique et technique d'un dossier, la psychologie de la négociation et la responsabilité d'accompagner un client sur le projet financier le plus important de sa vie.`
    },
    {
      id: 'q-jury-5',
      category: 'Projet professionnel',
      difficulty: 'Classique',
      question: 'Transaction, Gestion locative ou Syndic de copropriété : quel domaine vous attire le plus et pourquoi ?',
      intent: 'Tester votre connaissance des 3 grands métiers couverts par le référentiel du BTS PI.',
      tip: 'Montrez que vous connaissez les spécificités des 3 métiers et que vous restez ouvert tout en exprimant une sensibilité cohérente avec votre personnalité.',
      sampleAnswer: `Mon objectif à travers ce BTS est de ${specialtyText}. Je tiens toutefois à maîtriser solidement les trois volets du diplôme car en agence, comprendre la gestion locative et les enjeux de copropriété permet de bien mieux conseiller un acheteur ou un investisseur.`
    },
    {
      id: 'q-jury-6',
      category: studyMode === 'alternance' ? 'Alternance & Terrain' : 'Stages & Terrain',
      difficulty: 'Incontournable',
      question: studyMode === 'alternance'
        ? `Où en êtes-vous dans votre recherche d'entreprise et comment allez-vous gérer le rythme (${rhythm}) ?`
        : 'Comment comptez-vous rechercher vos stages obligatoires (14 semaines) et dans quelles structures ?',
      intent: 'Jauger votre autonomie, votre sens de l\'organisation et votre employabilité face à un tuteur d\'agence.',
      tip: studyMode === 'alternance'
        ? 'Soyez concret et chiffré : nombre de CV déposés en main propre en agence, relances téléphoniques, profil LinkedIn à jour, permis B en cours ou obtenu.'
        : 'Expliquez que vous ciblez à la fois une agence de transaction et un cabinet d\'administration de biens pour valider l\'ensemble des compétences de l\'épreuve E6.',
      sampleAnswer: studyMode === 'alternance'
        ? `J'ai déjà engagé une démarche terrain active en déposant mon dossier directement en agence et en effectuant un suivi téléphonique structuré. Concernant le rythme (${rhythm}), je suis très organisé : je prévois des créneaux fixes chaque soir et le week-end pour assimiler les cours juridiques et préparer mes dossiers d'examen.`
        : `J'ai identifié plusieurs agences indépendantes et cabinets d'administration de biens autour de ${schoolCity} afin de diversifier mes périodes de stage entre transaction et gestion/syndic, conformément aux attendus du livret professionnel.`
    },
    {
      id: 'q-jury-7',
      category: 'Culture immobilière',
      difficulty: 'Question sélective',
      question: 'Quelle actualité récente du marché immobilier avez-vous suivie ces derniers mois ?',
      intent: 'Vérifier votre curiosité intellectuelle et votre veille sur le secteur.',
      tip: 'Choisissez un sujet maîtrisé : l\'impact des taux d\'intérêt sur le volume des ventes, le calendrier énergétique du DPE (rénovation des logements classés G et F), ou la tension sur le marché locatif étudiant.',
      sampleAnswer: `Je suis attentivement l'impact du diagnostic de performance énergétique (DPE) sur le marché : l'interdiction progressive de louer les passoires thermiques oblige les conseillers immobiliers à devenir de vrais pédagogues sur les travaux de rénovation énergétique et modifie la négociation des prix de vente.`
    },
    {
      id: 'q-jury-8',
      category: 'Contenu académique',
      difficulty: 'Classique',
      question: 'Connaissez-vous les matières enseignées en BTS PI ? Quelle matière appréhendez-vous le plus ?',
      intent: 'S\'assurer que vous savez qu\'il y a beaucoup de droit, d\'économie, d\'architecture/bâtiment et de comptabilité immobilière.',
      tip: 'Citez les vrais blocs du BTS PI : Culture générale, Anglais, Conseil en ingénierie de l\'immobilier (Droit, Économie, Architecture/Technique du bâtiment), Communication professionnelle, Conduite d\'activités professionnelles.',
      sampleAnswer: `Oui, le programme s'articule autour du bloc Conseil en ingénierie de l'immobilier qui regroupe le droit et la veille juridique, l'économie et les techniques du bâtiment, complété par les ateliers professionnels et l'anglais obligatoire. Le droit immobilier demande beaucoup de rigueur, c'est pourquoi je compte travailler mes fiches régulièrement dès septembre.`
    },
    {
      id: 'q-jury-9',
      category: 'Mise en situation',
      difficulty: 'Question piège',
      question: 'Comment réagissez-vous face à un propriétaire ou un locataire mécontent qui hausse le ton à l\'accueil de l\'agence ?',
      intent: 'Tester votre maturité émotionnelle, votre sang-froid et votre posture professionnelle.',
      tip: 'Ne jamais répondre sur le même ton ni faire de promesse hasardeuse : isoler le client au calme, écouter activement, noter les faits, reformuler et transmettre au tuteur avec les éléments du dossier.',
      sampleAnswer: `Je garde mon calme et une posture courtoise. Je propose au client de s'installer à l'écart pour l'écouter sans l'interrompre, je prends note précisément des faits et je reformule sa demande pour lui montrer qu'il est pris au sérieux. Ensuite, je vérifie les pièces contractuelles avec mon tuteur pour lui apporter une réponse rapide et factuelle.`
    },
    {
      id: 'q-jury-10',
      category: 'Personnalité',
      difficulty: 'Classique',
      question: 'Citez 3 qualités qui feront de vous un bon professionnel de l\'immobilier, et 1 point d\'amélioration.',
      intent: 'Évaluer votre lucidité sur vous-même et votre honnêteté.',
      tip: 'Associez chaque qualité à un exemple concret. Pour le défaut, choisissez un axe réel sur lequel vous avez déjà mis en place une action corrective (ex : prise de parole devant un grand groupe, perfectionnisme sur le temps passé).',
      sampleAnswer: `Mes trois forces sont le sens de l'écoute, la persévérance face aux refus et le souci de la précision administrative. Comme axe de progression, j'avais parfois tendance à vouloir tout vérifier deux fois par peur de l'erreur ; j'apprends aujourd'hui à travailler avec des check-lists pour gagner en rapidité tout en restant fiable.`
    },
    {
      id: 'q-jury-11',
      category: 'Résilience',
      difficulty: 'Question piège',
      question: studyMode === 'alternance'
        ? 'Que ferez-vous si fin août vous n\'avez toujours pas signé de contrat d\'alternance ?'
        : 'Que ferez-vous si vos premiers démarchages de stage reçoivent des réponses négatives ?',
      intent: 'Tester votre ténacité et vérifier que vous n\'abandonnerez pas à la première difficulté.',
      tip: 'Montrez un plan d\'action précis : élargir la zone géographique, cibler les syndics et administrateurs de biens (souvent moins sollicités que les agences de vente !), solliciter le service relations entreprises de l\'école.',
      sampleAnswer: studyMode === 'alternance'
        ? `Je ne baisse pas les bras : j'élargis mon périmètre géographique et je cible en priorité les cabinets de syndic de copropriété et de gestion locative, où les besoins en alternants rigoureux sont très forts et parfois moins sollicités que la transaction pure, tout en travaillant main dans la main avec votre service relations entreprises.`
        : `Dans l'immobilier, le refus fait partie du quotidien de la prospection. J'analyserais mon approche avec mes formateurs, je me déplacerais physiquement en agence aux heures creuses avec mon CV en main et j'élargirais mes recherches aux syndics et bailleurs sociaux.`
    },
    {
      id: 'q-jury-12',
      category: 'Conclusion',
      difficulty: 'Incontournable',
      question: 'Avez-vous des questions à nous poser pour conclure cet entretien ?',
      intent: 'Mesurer votre curiosité réelle : répondre « Non, tout a été dit » laisse souvent une impression passive.',
      tip: 'Répondez toujours « Oui, j\'en ai préparé deux ou trois » et piochez dans la liste des questions stratégiques ci-contre !',
      sampleAnswer: `Oui, tout à fait : j'aimerais notamment savoir quels logiciels professionnels immobiliers sont pratiqués durant les cours et comment s'articule le suivi avec les tuteurs en entreprise.`
    }
  ];
}

/**
 * Génère la liste des questions pertinentes et valorisantes que le candidat peut poser à l'école.
 */
export function buildQuestionsToAskSchool({ studyMode = 'alternance' }) {
  return [
    {
      id: 'q-ask-1',
      category: 'Entreprises & Placement',
      priority: 'Essentielle',
      question: studyMode === 'alternance'
        ? 'Comment votre service relations entreprises accompagne-t-il concrètement les admis dans la recherche d\'alternance (coaching CV, job dating, offres partenaires) ?'
        : 'Disposez-vous d\'un réseau d\'agences et de cabinets partenaires pour faciliter la recherche des 14 semaines de stage ?',
      whyAsk: 'Montre que vous êtes proactif tout en vérifiant la solidité réelle de l\'accompagnement promis par l\'école.',
      whatToListenFor: 'Un chargé de relations entreprises identifié, des ateliers dès le printemps et de vraies offres exclusives.'
    },
    {
      id: 'q-ask-2',
      category: 'Partenaires métiers',
      priority: 'Essentielle',
      question: 'Quels profils d\'entreprises accueillent majoritairement vos étudiants : réseaux d\'agences de transaction, cabinets d\'administration de biens / syndics, promoteurs ou bailleurs sociaux ?',
      whyAsk: 'Prouve votre maturité sectorielle en distinguant clairement les différents employeurs de l\'immobilier.',
      whatToListenFor: 'Une bonne diversité d\'entreprises garantissant que l\'école est reconnue par toute la profession locale.'
    },
    {
      id: 'q-ask-3',
      category: 'Outils & Digital',
      priority: 'Différenciante',
      question: 'Quels logiciels métiers immobiliers (logiciels de transaction, de gestion locative, de pige ou de syndic) sont utilisés lors des ateliers professionnels ?',
      whyAsk: 'Excellente question technique qui montre que vous savez que le métier repose sur des outils métiers quotidiens.',
      whatToListenFor: 'Des références comme Hektor, Apimo, Pericles, Crypto, ICS, Modelo ou des études de cas sur logiciels réels.'
    },
    {
      id: 'q-ask-4',
      category: 'Équipe pédagogique',
      priority: 'Recommandée',
      question: 'Quelle est la part d\'intervenants professionnels de l\'immobilier en activité (agents, juristes, gestionnaires, experts bâtiment) au sein de l\'équipe enseignante ?',
      whyAsk: 'Souligne votre intérêt pour une pédagogie connectée à la réalité terrain tout en préparant sérieusement les écrits nationaux.',
      whatToListenFor: 'Un bon équilibre entre formateurs académiques aguerris aux barèmes d\'examen et praticiens de terrain.'
    },
    {
      id: 'q-ask-5',
      category: 'Préparation Examen',
      priority: 'Essentielle',
      question: 'À quelle fréquence organisez-vous des BTS blancs écrits et des entraînements aux épreuves orales E4 (relation client) et E6 (projet professionnel) ?',
      whyAsk: 'Démontre votre sérieux scolaire : vous ne visez pas seulement un contrat, mais avant tout l\'obtention du diplôme d\'État.',
      whatToListenFor: 'Au moins 2 BTS blancs par an et des oraux blancs réguliers face à des jurys mixtes.'
    },
    {
      id: 'q-ask-6',
      category: 'Encadrement',
      priority: 'Recommandée',
      question: 'Quel est l\'effectif moyen d\'une classe de BTS PI dans votre établissement ?',
      whyAsk: 'Permet de connaître les conditions réelles d\'apprentissage et de proximité avec les formateurs.',
      whatToListenFor: 'Idéalement entre 18 et 30 étudiants par groupe pour favoriser l\'interactivité et le suivi individuel.'
    },
    {
      id: 'q-ask-7',
      category: 'Suivi Tuteur',
      priority: 'Recommandée',
      question: studyMode === 'alternance'
        ? 'Comment s\'organise le lien entre mon tuteur en agence et le référent pédagogique de l\'école tout au long des deux années ?'
        : 'Comment les enseignants nous accompagnent-ils pendant nos périodes de stage pour construire nos dossiers d\'examen ?',
      whyAsk: 'Rassure le jury sur votre volonté que tout se passe en transparence entre l\'agence et l\'école.',
      whatToListenFor: 'Rendez-vous de suivi semestriels en agence ou visio, livret d\'apprentissage numérique suivi.'
    },
    {
      id: 'q-ask-8',
      category: 'Après le BTS PI',
      priority: 'Différenciante',
      question: 'Quelle proportion de vos diplômés entre directement dans la vie active par rapport à ceux qui poursuivent en Licence Pro ou Bachelor immobilier (Bac+3) ?',
      whyAsk: 'Montre que vous réfléchissez déjà à la construction de votre parcours à 3–5 ans.',
      whatToListenFor: 'Des statistiques précises d\'insertion à 6 mois et d\'éventuelles passerelles Bac+3.'
    },
    {
      id: 'q-ask-9',
      category: 'Vie d\'école & Réseau',
      priority: 'Bonus',
      question: 'Existe-t-il un réseau d\'anciens élèves (Alumni) ou des conférences métiers organisées avec des professionnels locaux durant l\'année ?',
      whyAsk: 'En immobilier, le réseau est capital : cette question prouve que vous avez déjà cet état d\'esprit.',
      whatToListenFor: 'Parrainage entre 2e et 1re année, interventions FNAIM / UNIS ou réseau LinkedIn d\'anciens.'
    },
    {
      id: 'q-ask-10',
      category: 'Prochaines étapes',
      priority: 'Essentielle',
      question: 'Quelles sont les prochaines étapes du processus d\'admission et sous quel délai aurai-je un retour suite à notre échange d\'aujourd\'hui ?',
      whyAsk: 'Une question de clôture professionnelle qui montre votre détermination et vous permet de savoir quand relancer poliment.',
      whatToListenFor: 'Une date précise de commission ou de réponse (souvent sous 7 à 10 jours hors Parcoursup).'
    }
  ];
}
