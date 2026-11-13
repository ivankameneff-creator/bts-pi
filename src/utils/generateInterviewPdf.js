/**
 * Générateur PDF vectoriel natif (ISO 32000-1 PDF 1.4 / WinAnsiEncoding)
 * Sans aucune dépendance lourde : génère un véritable fichier .pdf A4 multi-pages
 * net à l'impression comme sur mobile/tablette, avec gestion intégrale des accents français.
 */

const PAGE_W = 595.28; // A4 largeur en points
const PAGE_H = 841.89; // A4 hauteur en points
const MARGIN_X = 42;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
const TOP_START = PAGE_H - 52;
const BOTTOM_LIMIT = 54;

// Table de correspondance Unicode -> Windows-1252 (WinAnsiEncoding 0x80..0x9F)
const WIN1252_EXTRA = {
  0x20ac: 0x80, // €
  0x201a: 0x82, // ‚
  0x0192: 0x83, // ƒ
  0x201e: 0x84, // „
  0x2026: 0x85, // …
  0x2020: 0x86, // †
  0x2021: 0x87, // ‡
  0x02c6: 0x88, // ˆ
  0x2030: 0x89, // ‰
  0x0160: 0x8a, // Š
  0x2039: 0x8b, // ‹
  0x0152: 0x8c, // Œ
  0x017d: 0x8e, // Ž
  0x2018: 0x91, // ‘
  0x2019: 0x92, // ’
  0x201c: 0x93, // “
  0x201d: 0x94, // ”
  0x2022: 0x95, // •
  0x2013: 0x96, // –
  0x2014: 0x97, // —
  0x02dc: 0x98, // ˜
  0x2122: 0x99, // ™
  0x0161: 0x9a, // š
  0x203a: 0x9b, // ›
  0x0153: 0x9c, // œ
  0x017e: 0x9e, // ž
  0x0178: 0x9f  // Ÿ
};

/**
 * Nettoie une chaîne et l'encode en littéral PDF pur ASCII avec séquences octales WinAnsi
 */
function encodePdfText(raw) {
  if (!raw) return '()';
  const str = String(raw)
    .replace(/\r\n/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\u00a0/g, ' ');

  let out = '(';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    // Ignorer les paires de substitution (emojis)
    if (code >= 0xd800 && code <= 0xdfff) continue;

    if (code === 0x28) {
      out += '\\(';
    } else if (code === 0x29) {
      out += '\\)';
    } else if (code === 0x5c) {
      out += '\\\\';
    } else if (code >= 0x20 && code <= 0x7e) {
      out += str[i];
    } else if (WIN1252_EXTRA[code] !== undefined) {
      out += '\\' + WIN1252_EXTRA[code].toString(8).padStart(3, '0');
    } else if (code >= 0xa0 && code <= 0xff) {
      out += '\\' + code.toString(8).padStart(3, '0');
    } else if (code === 0x2192) {
      out += '->';
    }
  }
  out += ')';
  return out;
}

/**
 * Estimation fidèle de la largeur d'un caractère en Helvetica (en millièmes d'em)
 */
function charWidthFactor(ch, isBold = false) {
  if ('ilI.,:;!\'| '.includes(ch)) return isBold ? 0.31 : 0.28;
  if ('fjt()[]-'.includes(ch)) return isBold ? 0.36 : 0.33;
  if ('rsvxyzçéèêëàâîïôùû0123456789abcdeghknopqu'.includes(ch)) return isBold ? 0.57 : 0.53;
  if ('mwMWŒœ@%«»'.includes(ch)) return isBold ? 0.86 : 0.80;
  if (ch >= 'A' && ch <= 'Z') return isBold ? 0.70 : 0.66;
  return isBold ? 0.58 : 0.54;
}

function measureTextWidth(text, fontSize, isBold = false) {
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    total += charWidthFactor(text[i], isBold) * fontSize;
  }
  return total;
}

/**
 * Découpe un texte multi-paragraphes en lignes adaptées à `maxWidth`
 */
function wrapText(text, fontSize, maxWidth, isBold = false) {
  if (!text) return [];
  const paragraphs = String(text).split(/\n/);
  const lines = [];

  for (const para of paragraphs) {
    const clean = para.replace(/\s+/g, ' ').trim();
    if (!clean) {
      lines.push('');
      continue;
    }
    const words = clean.split(' ');
    let current = '';

    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (measureTextWidth(candidate, fontSize, isBold) <= maxWidth) {
        current = candidate;
      } else {
        if (current) lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

function rgbFill([r, g, b]) {
  return `${(r / 255).toFixed(3)} ${(g / 255).toFixed(3)} ${(b / 255).toFixed(3)} rg`;
}

function rgbStroke([r, g, b]) {
  return `${(r / 255).toFixed(3)} ${(g / 255).toFixed(3)} ${(b / 255).toFixed(3)} RG`;
}

/**
 * Construit les octets du PDF complet
 */
export function createInterviewPdfBytes({
  school,
  candidateName = '',
  candidateTrack = '',
  interviewDate = '',
  studyMode = 'alternance',
  specialty = 'polyvalent',
  juryQuestions = [],
  questionsToAsk = [],
  checklist = [],
  personalNotes = {},
  generalNotes = ''
}) {
  const pages = [];
  let ops = [];
  let y = TOP_START;

  const startNewPage = (withRunningHeader = true) => {
    if (ops.length > 0) {
      pages.push(ops);
    }
    ops = [];
    y = TOP_START;

    if (withRunningHeader) {
      // Petit bandeau haut discret sur les pages suivantes
      ops.push(rgbFill([248, 250, 252]));
      ops.push(`0 ${(PAGE_H - 34).toFixed(2)} ${PAGE_W.toFixed(2)} 34 re f`);
      ops.push(rgbStroke([226, 232, 240]));
      ops.push(`0.6 w 0 ${(PAGE_H - 34).toFixed(2)} m ${PAGE_W.toFixed(2)} ${(PAGE_H - 34).toFixed(2)} l S`);

      ops.push('BT');
      ops.push(`/F2 8 Tf ${rgbFill([15, 118, 110])} ${MARGIN_X} ${(PAGE_H - 21).toFixed(2)} Td ${encodePdfText('BTS PI FRANCE  •  DOSSIER DE PRÉPARATION ENTRETIEN ÉCOLE')} Tj`);
      ops.push('ET');

      if (school?.nom) {
        const rightLabel = `${school.nom} (${school.ville || ''})`;
        const w = measureTextWidth(rightLabel, 8, false);
        ops.push('BT');
        ops.push(`/F1 8 Tf ${rgbFill([100, 116, 139])} ${(PAGE_W - MARGIN_X - w).toFixed(2)} ${(PAGE_H - 21).toFixed(2)} Td ${encodePdfText(rightLabel)} Tj`);
        ops.push('ET');
      }
      y = PAGE_H - 54;
    }
  };

  const ensureSpace = (neededHeight) => {
    if (y - neededHeight < BOTTOM_LIMIT) {
      startNewPage(true);
    }
  };

  const drawTextLine = (text, x, yPos, font = 'F1', size = 10, color = [30, 41, 59]) => {
    ops.push('BT');
    ops.push(`/${font} ${size} Tf ${rgbFill(color)} ${x.toFixed(2)} ${yPos.toFixed(2)} Td ${encodePdfText(text)} Tj`);
    ops.push('ET');
  };

  // =========================================================================
  // PAGE 1 : EN-TÊTE ÉDITORIAL
  // =========================================================================
  startNewPage(false);

  const headerH = 128;
  const headerTop = PAGE_H;
  const headerBottom = headerTop - headerH;

  // Fond sombre élégant
  ops.push(rgbFill([11, 18, 33]));
  ops.push(`0 ${headerBottom.toFixed(2)} ${PAGE_W.toFixed(2)} ${headerH} re f`);

  // Liseré émeraude supérieur
  ops.push(rgbFill([16, 185, 129]));
  ops.push(`0 ${(PAGE_H - 4).toFixed(2)} ${PAGE_W.toFixed(2)} 4 re f`);

  // Surtitre
  drawTextLine(
    'BTS PROFESSIONS IMMOBILIÈRES  •  GUIDE PERSONNEL D\'ENTRETIEN',
    MARGIN_X,
    PAGE_H - 30,
    'F2',
    8.5,
    [52, 211, 153]
  );

  // Titre principal
  drawTextLine(
    'Préparation de mon entretien école',
    MARGIN_X,
    PAGE_H - 54,
    'F2',
    20,
    [255, 255, 255]
  );

  // Sous-titre établissement
  const targetLabel = school
    ? `Établissement ciblé : ${school.nom} — ${school.ville} (${school.type})`
    : 'Dossier complet toutes écoles BTS Professions Immobilières (Public, Privé & CFA)';
  drawTextLine(targetLabel, MARGIN_X, PAGE_H - 74, 'F1', 10.5, [203, 213, 225]);

  // Métadonnées candidat & mode
  const specialtyLabels = {
    polyvalent: 'Profil Polyvalent (Transaction, Gestion, Syndic)',
    transaction: 'Pôle Transaction & Négociation',
    gestion: 'Pôle Gestion Locative',
    syndic: 'Pôle Syndic de Copropriété'
  };
  const modeLabel = studyMode === 'alternance' ? 'Cursus en Alternance' : 'Statut Scolaire (Initiale)';
  const metaParts = [
    candidateName ? `Candidat : ${candidateName}` : null,
    candidateTrack ? `Parcours : ${candidateTrack}` : null,
    modeLabel,
    specialtyLabels[specialty] || specialtyLabels.polyvalent,
    interviewDate ? `Entretien : ${interviewDate}` : `Édité le ${new Date().toLocaleDateString('fr-FR')}`
  ].filter(Boolean);

  drawTextLine(metaParts.join('  •  '), MARGIN_X, PAGE_H - 95, 'F1', 8.5, [148, 163, 184]);

  // Si école sélectionnée, bandeau d'infos clés de l'école
  if (school) {
    const schoolFacts = [
      `Réussite BTS : ${school.tauxReussite}%`,
      school.rythmeAlternance ? `Rythme : ${school.rythmeAlternance}` : null,
      school.parcoursup?.surParcoursup ? `Accès Parcoursup : ${school.parcoursup.tauxAcces}% (${school.parcoursup.demandes} vœux)` : 'Admission directe sur dossier & entretien'
    ].filter(Boolean).join('   |   ');
    drawTextLine(schoolFacts, MARGIN_X, PAGE_H - 113, 'F2', 8.2, [110, 231, 183]);
  }

  y = headerBottom - 22;

  // =========================================================================
  // NOTES GÉNÉRALES DU CANDIDAT (si renseignées)
  // =========================================================================
  if (generalNotes && generalNotes.trim()) {
    const noteLines = wrapText(generalNotes.trim(), 9, CONTENT_W - 24, false);
    const boxH = 26 + noteLines.length * 12.5;
    ensureSpace(boxH + 12);

    ops.push(rgbFill([240, 253, 250]));
    ops.push(`${MARGIN_X} ${(y - boxH).toFixed(2)} ${CONTENT_W.toFixed(2)} ${boxH.toFixed(2)} re f`);
    ops.push(rgbFill([16, 185, 129]));
    ops.push(`${MARGIN_X} ${(y - boxH).toFixed(2)} 3.5 ${boxH.toFixed(2)} re f`);

    drawTextLine('MES NOTES CLÉS & PITCH PERSONNEL', MARGIN_X + 12, y - 15, 'F2', 8.5, [15, 118, 110]);
    let ny = y - 29;
    for (const line of noteLines) {
      drawTextLine(line, MARGIN_X + 12, ny, 'F1', 9, [30, 41, 59]);
      ny -= 12.5;
    }
    y -= boxH + 14;
  }

  // =========================================================================
  // CHECK-LIST JOUR J
  // =========================================================================
  if (checklist.length > 0) {
    const chkHeight = 28 + checklist.length * 15;
    ensureSpace(chkHeight + 14);

    ops.push(rgbFill([248, 250, 252]));
    ops.push(`${MARGIN_X} ${(y - chkHeight).toFixed(2)} ${CONTENT_W.toFixed(2)} ${chkHeight.toFixed(2)} re f`);
    ops.push(rgbStroke([203, 213, 225]));
    ops.push(`0.7 w ${MARGIN_X} ${(y - chkHeight).toFixed(2)} ${CONTENT_W.toFixed(2)} ${chkHeight.toFixed(2)} re S`);

    drawTextLine('CHECK-LIST JOUR J  —  LES INDISPENSABLES AVANT D\'ENTRER EN SALLE', MARGIN_X + 12, y - 16, 'F2', 8.8, [15, 23, 42]);

    let cy = y - 32;
    for (const item of checklist) {
      // Petite case à cocher dessinée
      ops.push(rgbStroke([16, 185, 129]));
      ops.push(`0.9 w ${(MARGIN_X + 12).toFixed(2)} ${(cy - 1).toFixed(2)} 7.5 7.5 re S`);
      drawTextLine(item.title, MARGIN_X + 25, cy, 'F1', 8.8, [51, 65, 85]);
      cy -= 14.5;
    }
    y -= chkHeight + 18;
  }

  // Fonction utilitaire pour dessiner un bandeau de section
  const drawSectionBanner = (kicker, title, accentRgb, bgRgb) => {
    ensureSpace(46);
    const h = 32;
    ops.push(rgbFill(bgRgb));
    ops.push(`${MARGIN_X} ${(y - h).toFixed(2)} ${CONTENT_W.toFixed(2)} ${h} re f`);
    ops.push(rgbFill(accentRgb));
    ops.push(`${MARGIN_X} ${(y - h).toFixed(2)} 4 ${h} re f`);

    drawTextLine(kicker, MARGIN_X + 12, y - 12, 'F2', 7.5, accentRgb);
    drawTextLine(title, MARGIN_X + 12, y - 25, 'F2', 11.5, [15, 23, 42]);
    y -= h + 12;
  };

  // =========================================================================
  // PARTIE 1 : QUESTIONS À POSER À L'ÉCOLE
  // =========================================================================
  drawSectionBanner(
    'PARTIE 1  •  VOTRE POSTURE PROACTIVE',
    `Questions pertinentes à poser à l'école (${questionsToAsk.length} questions)`,
    [5, 150, 105],
    [236, 253, 245]
  );

  questionsToAsk.forEach((item, index) => {
    const innerW = CONTENT_W - 24;
    const qLines = wrapText(`${index + 1}. « ${item.question} »`, 10, innerW, true);
    const whyLines = item.whyAsk ? wrapText(`Intérêt : ${item.whyAsk}`, 8.6, innerW, false) : [];
    const listenLines = item.whatToListenFor ? wrapText(`À observer : ${item.whatToListenFor}`, 8.6, innerW, false) : [];
    const userNote = personalNotes[item.id]?.trim();
    const userLines = userNote ? wrapText(`Note / Réponse de l'école : ${userNote}`, 8.6, innerW, false) : [];

    const cardH =
      18 +
      qLines.length * 13 +
      (whyLines.length ? 3 + whyLines.length * 11.5 : 0) +
      (listenLines.length ? 3 + listenLines.length * 11.5 : 0) +
      (userLines.length ? 5 + userLines.length * 11.5 : 14) + // laisse une ligne de prise de notes si vide
      8;

    ensureSpace(cardH + 8);

    // Carte claire à bordure fine
    ops.push(rgbFill([255, 255, 255]));
    ops.push(`${MARGIN_X} ${(y - cardH).toFixed(2)} ${CONTENT_W.toFixed(2)} ${cardH.toFixed(2)} re f`);
    ops.push(rgbStroke([226, 232, 240]));
    ops.push(`0.6 w ${MARGIN_X} ${(y - cardH).toFixed(2)} ${CONTENT_W.toFixed(2)} ${cardH.toFixed(2)} re S`);
    ops.push(rgbFill([16, 185, 129]));
    ops.push(`${MARGIN_X} ${(y - cardH).toFixed(2)} 3 ${cardH.toFixed(2)} re f`);

    let cy = y - 12;
    drawTextLine(
      `${(item.category || 'Question candidat').toUpperCase()}${item.priority ? `  •  ${item.priority}` : ''}`,
      MARGIN_X + 11,
      cy,
      'F2',
      7.2,
      [5, 150, 105]
    );
    cy -= 13;

    for (const line of qLines) {
      drawTextLine(line, MARGIN_X + 11, cy, 'F2', 10, [15, 23, 42]);
      cy -= 13;
    }

    if (whyLines.length) {
      cy -= 2;
      for (const line of whyLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F1', 8.6, [71, 85, 105]);
        cy -= 11.5;
      }
    }

    if (listenLines.length) {
      cy -= 2;
      for (const line of listenLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F3', 8.6, [15, 118, 110]);
        cy -= 11.5;
      }
    }

    if (userLines.length) {
      cy -= 3;
      for (const line of userLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F2', 8.6, [30, 64, 175]);
        cy -= 11.5;
      }
    } else {
      // Ligne pointillée pour noter la réponse du jury le jour J
      cy -= 4;
      drawTextLine('Réponse notée le jour J : ...........................................................................................................................', MARGIN_X + 11, cy, 'F1', 8, [148, 163, 184]);
    }

    y -= cardH + 8;
  });

  y -= 8;

  // =========================================================================
  // PARTIE 2 : QUESTIONS QUE L'ÉCOLE POURRAIT ME POSER
  // =========================================================================
  drawSectionBanner(
    'PARTIE 2  •  ANTICIPER LE JURY',
    `Questions que l'école pourrait me poser (${juryQuestions.length} questions & pistes)`,
    [37, 99, 235],
    [239, 246, 255]
  );

  juryQuestions.forEach((item, index) => {
    const innerW = CONTENT_W - 24;
    const qLines = wrapText(`${index + 1}. « ${item.question} »`, 10, innerW, true);
    const tipLines = item.tip ? wrapText(`Conseil : ${item.tip}`, 8.6, innerW, false) : [];
    const sampleLines = item.sampleAnswer ? wrapText(`Exemple : « ${item.sampleAnswer} »`, 8.5, innerW, false) : [];
    const myDraft = personalNotes[item.id]?.trim();
    const myDraftLines = myDraft ? wrapText(`Ma réponse personnelle : ${myDraft}`, 8.8, innerW, false) : [];

    const cardH =
      18 +
      qLines.length * 13 +
      (tipLines.length ? 3 + tipLines.length * 11.5 : 0) +
      (sampleLines.length ? 4 + sampleLines.length * 11.2 : 0) +
      (myDraftLines.length ? 5 + myDraftLines.length * 11.8 : 0) +
      8;

    ensureSpace(cardH + 9);

    ops.push(rgbFill([255, 255, 255]));
    ops.push(`${MARGIN_X} ${(y - cardH).toFixed(2)} ${CONTENT_W.toFixed(2)} ${cardH.toFixed(2)} re f`);
    ops.push(rgbStroke([226, 232, 240]));
    ops.push(`0.6 w ${MARGIN_X} ${(y - cardH).toFixed(2)} ${CONTENT_W.toFixed(2)} ${cardH.toFixed(2)} re S`);
    ops.push(rgbFill([37, 99, 235]));
    ops.push(`${MARGIN_X} ${(y - cardH).toFixed(2)} 3 ${cardH.toFixed(2)} re f`);

    let cy = y - 12;
    drawTextLine(
      `${(item.category || 'Question jury').toUpperCase()}${item.difficulty ? `  •  ${item.difficulty}` : ''}`,
      MARGIN_X + 11,
      cy,
      'F2',
      7.2,
      [37, 99, 235]
    );
    cy -= 13;

    for (const line of qLines) {
      drawTextLine(line, MARGIN_X + 11, cy, 'F2', 10, [15, 23, 42]);
      cy -= 13;
    }

    if (tipLines.length) {
      cy -= 2;
      for (const line of tipLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F1', 8.6, [51, 65, 85]);
        cy -= 11.5;
      }
    }

    if (sampleLines.length) {
      cy -= 3;
      for (const line of sampleLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F3', 8.5, [100, 116, 139]);
        cy -= 11.2;
      }
    }

    if (myDraftLines.length) {
      cy -= 4;
      for (const line of myDraftLines) {
        drawTextLine(line, MARGIN_X + 11, cy, 'F2', 8.8, [5, 150, 105]);
        cy -= 11.8;
      }
    }

    y -= cardH + 9;
  });

  // Pousser la dernière page
  if (ops.length > 0) {
    pages.push(ops);
  }

  // =========================================================================
  // AJOUT DES PIEDS DE PAGE NUMÉROTÉS SUR CHAQUE PAGE
  // =========================================================================
  const totalPages = pages.length;
  pages.forEach((pageOps, idx) => {
    pageOps.push(rgbStroke([226, 232, 240]));
    pageOps.push(`0.6 w ${MARGIN_X} 36 m ${(PAGE_W - MARGIN_X).toFixed(2)} 36 l S`);

    pageOps.push('BT');
    pageOps.push(`/F1 8 Tf ${rgbFill([148, 163, 184])} ${MARGIN_X} 23 Td ${encodePdfText('BTS PI France — Guide de préparation aux entretiens d\'école & d\'alternance')} Tj`);
    pageOps.push('ET');

    const pageStr = `Page ${idx + 1} / ${totalPages}`;
    const pw = measureTextWidth(pageStr, 8, true);
    pageOps.push('BT');
    pageOps.push(`/F2 8 Tf ${rgbFill([100, 116, 139])} ${(PAGE_W - MARGIN_X - pw).toFixed(2)} 23 Td ${encodePdfText(pageStr)} Tj`);
    pageOps.push('ET');
  });

  // =========================================================================
  // ASSEMBLAGE DE LA STRUCTURE PDF 1.4
  // =========================================================================
  // Objets :
  // 1: Catalog
  // 2: Pages
  // 3: Font F1 (Helvetica)
  // 4: Font F2 (Helvetica-Bold)
  // 5: Font F3 (Helvetica-Oblique)
  // Pour chaque page i (0..N-1) :
  //   6 + i*2     : Page object
  //   6 + i*2 + 1 : Content stream object

  const objects = [];
  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';

  const kidsRefs = pages.map((_, i) => `${6 + i * 2} 0 R`).join(' ');
  objects[2] = `<< /Type /Pages /Kids [ ${kidsRefs} ] /Count ${pages.length} >>`;

  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>';
  objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>';
  objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>';

  pages.forEach((pageOps, i) => {
    const pageObjId = 6 + i * 2;
    const streamObjId = pageObjId + 1;
    const streamContent = pageOps.join('\n');

    objects[pageObjId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W.toFixed(2)} ${PAGE_H.toFixed(2)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${streamObjId} 0 R >>`;
    objects[streamObjId] = `<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream`;
  });

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  for (let id = 1; id < objects.length; id++) {
    offsets[id] = pdf.length;
    pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length}\n`;
  pdf += '0000000000 65535 f \n';
  for (let id = 1; id < objects.length; id++) {
    pdf += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  // Tous les caractères sont ASCII 7-bit grâce à encodePdfText
  const bytes = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i++) {
    bytes[i] = pdf.charCodeAt(i) & 0xff;
  }
  return bytes;
}

/**
 * Déclenche le téléchargement immédiat du fichier .pdf dans le navigateur
 */
export function downloadInterviewPdf(options) {
  const bytes = createInterviewPdfBytes(options);
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const safeSuffix = options.school?.nom
    ? options.school.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '')
    : 'BTS_PI_Guide_Complet';

  const link = document.createElement('a');
  link.href = url;
  link.download = `Preparation_Entretien_${safeSuffix}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
