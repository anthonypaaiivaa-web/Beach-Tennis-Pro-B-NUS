import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { ALL_500_TREINOS, TREINO_MODULES } from '../src/data/treinos500';

async function generatePDF() {
  console.log('Starting PDF generation for 500 Treinos de Beach Tennis...');
  const pdfDoc = await PDFDocument.create();

  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontHelveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89; // A4
  const MARGIN_X = 45;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2; // 505.28

  const primaryNavy = rgb(0.08, 0.22, 0.4); // #143866
  const accentBlue = rgb(0.02, 0.44, 0.74); // #0670bd
  const textDark = rgb(0.18, 0.22, 0.28); // #2e3847
  const textGray = rgb(0.42, 0.48, 0.55); // #6b7a8c
  const cardBorder = rgb(0.85, 0.91, 0.97); // light blue #d9e8f7
  const cardBg = rgb(0.97, 0.985, 1.0); // very soft blue tint
  const badgeBg = rgb(0.9, 0.95, 1.0);
  const badgeBorder = rgb(0.65, 0.82, 0.97);

  // Helper for drawing footer
  function drawFooter(page: any, pageNumber: number) {
    page.drawText('Beach Tennis Pro • 500 Treinos', {
      x: MARGIN_X,
      y: 28,
      size: 8,
      font: fontHelvetica,
      color: textGray,
    });

    const pageStr = `Página ${pageNumber}`;
    const pageStrWidth = fontHelvetica.widthOfTextAtSize(pageStr, 8);
    page.drawText(pageStr, {
      x: PAGE_WIDTH - MARGIN_X - pageStrWidth,
      y: 28,
      size: 8,
      font: fontHelvetica,
      color: textGray,
    });
  }

  // Helper to wrap text
  function wrapText(text: string, maxWidth: number, fontSize: number, font: any): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, fontSize);
      if (width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // ================= PAGE 1: COVER =================
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let curY = PAGE_HEIGHT - 180;

  // Title: BEACH TENNIS PRO
  const coverTop = 'BEACH TENNIS PRO';
  const coverTopWidth = fontHelveticaBold.widthOfTextAtSize(coverTop, 26);
  page1.drawText(coverTop, {
    x: (PAGE_WIDTH - coverTopWidth) / 2,
    y: curY,
    size: 26,
    font: fontHelveticaBold,
    color: primaryNavy,
  });

  curY -= 48;
  // Main Title: 500 Treinos de Beach Tennis
  const mainTitle = '500 Treinos de Beach Tennis';
  const mainTitleWidth = fontHelveticaBold.widthOfTextAtSize(mainTitle, 28);
  page1.drawText(mainTitle, {
    x: (PAGE_WIDTH - mainTitleWidth) / 2,
    y: curY,
    size: 28,
    font: fontHelveticaBold,
    color: primaryNavy,
  });

  curY -= 38;
  // Subtitle
  const sub1 = 'Exercícios práticos para técnica, movimentação, ataque, defesa e';
  const sub2 = 'tática de duplas.';
  const sub1W = fontHelvetica.widthOfTextAtSize(sub1, 13);
  const sub2W = fontHelvetica.widthOfTextAtSize(sub2, 13);
  page1.drawText(sub1, { x: (PAGE_WIDTH - sub1W) / 2, y: curY, size: 13, font: fontHelvetica, color: textDark });
  curY -= 20;
  page1.drawText(sub2, { x: (PAGE_WIDTH - sub2W) / 2, y: curY, size: 13, font: fontHelvetica, color: textDark });

  curY -= 65;
  // Badge box
  const badgeText = '500 TREINOS • DO INICIANTE AO AVANÇADO';
  const badgeW = fontHelveticaBold.widthOfTextAtSize(badgeText, 11);
  const boxW = 420;
  const boxH = 34;
  const boxX = (PAGE_WIDTH - boxW) / 2;
  page1.drawRectangle({
    x: boxX,
    y: curY,
    width: boxW,
    height: boxH,
    borderColor: badgeBorder,
    borderWidth: 1,
    color: badgeBg,
  });
  page1.drawText(badgeText, {
    x: (PAGE_WIDTH - badgeW) / 2,
    y: curY + 11,
    size: 11,
    font: fontHelveticaBold,
    color: accentBlue,
  });

  curY -= 100;
  // Support text
  const supp = 'Material de apoio para praticantes, professores e treinadores.';
  const suppW = fontHelvetica.widthOfTextAtSize(supp, 12);
  page1.drawText(supp, {
    x: (PAGE_WIDTH - suppW) / 2,
    y: curY,
    size: 12,
    font: fontHelvetica,
    color: textDark,
  });

  drawFooter(page1, 1);

  // ================= PAGE 2: GUIA & ÍNDICE =================
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  curY = PAGE_HEIGHT - 65;

  // Title: Como usar este guia
  page2.drawText('Como usar este guia', {
    x: MARGIN_X,
    y: curY,
    size: 20,
    font: fontHelveticaBold,
    color: primaryNavy,
  });

  curY -= 30;
  const introP1 =
    'Os 500 treinos estão organizados em 10 blocos de 50 exercícios. Você pode selecionar exercícios isolados ou combinar 4 a 8 deles em uma sessão. Priorize qualidade técnica, pausas adequadas e progressão gradual.';
  const p1Lines = wrapText(introP1, CONTENT_WIDTH, 10, fontHelvetica);
  for (const line of p1Lines) {
    page2.drawText(line, { x: MARGIN_X, y: curY, size: 10, font: fontHelvetica, color: textDark });
    curY -= 14;
  }

  curY -= 6;
  const introP2 =
    'Sugestão de sessão: 8-12 min de aquecimento; 15-20 min de fundamento; 15-20 min de situação específica; 10-20 min de pontos condicionados; 5 min de volta à calma.';
  const p2Lines = wrapText(introP2, CONTENT_WIDTH, 10, fontHelvetica);
  for (const line of p2Lines) {
    page2.drawText(line, { x: MARGIN_X, y: curY, size: 10, font: fontHelvetica, color: textDark });
    curY -= 14;
  }

  curY -= 6;
  const introP3 =
    'Segurança: ajuste volume e intensidade ao nível do praticante. Interrompa em caso de dor, tontura ou mal-estar. Pessoas com restrições médicas devem buscar orientação profissional antes de treinos intensos.';
  const p3Lines = wrapText(introP3, CONTENT_WIDTH, 10, fontHelvetica);
  for (const line of p3Lines) {
    page2.drawText(line, { x: MARGIN_X, y: curY, size: 10, font: fontHelvetica, color: textDark });
    curY -= 14;
  }

  curY -= 24;
  page2.drawText('Índice', {
    x: MARGIN_X,
    y: curY,
    size: 20,
    font: fontHelveticaBold,
    color: primaryNavy,
  });

  curY -= 26;
  for (let i = 0; i < TREINO_MODULES.length; i++) {
    const mod = TREINO_MODULES[i];
    const indexLine = `${i + 1}. ${mod.title} — ${mod.range}`;
    page2.drawText(indexLine, {
      x: MARGIN_X,
      y: curY,
      size: 11,
      font: fontHelvetica,
      color: textDark,
    });
    curY -= 21;
  }

  drawFooter(page2, 2);

  // ================= PAGES 3 to 116: 500 TREINOS =================
  // Define drills per page mapping exactly according to the 116-page format:
  // Each module has 50 drills.
  // Module 1 (p3-15): 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2 (13 pages)
  // Modules 2, 5, 6, 8, 9, 10: 4 + 9*5 + 1 = 50 (11 pages each)
  // Modules 3, 4, 7: slight variations ending up to page 116 total!
  // Let's create a dynamic page distributor that matches 114 pages (3..116):
  // Let's configure exact drills per page for each module so total pages = 116:
  // Pages 1, 2 = 2 pages. Remaining = 114 pages.
  // 10 modules across 114 pages:
  // Mod 1: 13 pages (1-50) -> p3..15
  // Mod 2: 11 pages (51-100) -> p16..26
  // Mod 3: 12 pages (101-150) -> p27..38
  // Mod 4: 12 pages (151-200) -> p39..50
  // Mod 5: 11 pages (201-250) -> p51..61
  // Mod 6: 11 pages (251-300) -> p62..72
  // Mod 7: 11 pages (301-350) -> p73..83
  // Mod 8: 11 pages (351-400) -> p84..94
  // Mod 9: 11 pages (401-450) -> p95..105
  // Mod 10: 11 pages (451-500) -> p106..116
  // Sum: 13 + 11 + 12 + 12 + 11 + 11 + 11 + 11 + 11 + 11 = 114 content pages + 2 = 116 pages EXACT!

  const modulePageConfigs: { [key: number]: number[] } = {
    1: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 13 pages: 4*12 + 2 = 50
    2: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 4 + 9*5 + 1 = 50
    3: [4, 5, 5, 5, 5, 5, 4, 5, 4, 4, 5, 4], // 12 pages: 50
    4: [4, 5, 4, 4, 4, 5, 4, 4, 4, 5, 4, 3], // 12 pages: 50
    5: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
    6: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
    7: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
    8: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
    9: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
    10: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], // 11 pages: 50
  };

  let currentPageNum = 3;

  for (let mIdx = 0; mIdx < TREINO_MODULES.length; mIdx++) {
    const mod = TREINO_MODULES[mIdx];
    const pageCounts = modulePageConfigs[mod.id];
    let drillOffsetInMod = 0;

    for (let pIdx = 0; pIdx < pageCounts.length; pIdx++) {
      const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      const isFirstPageOfMod = pIdx === 0;
      const countOnThisPage = pageCounts[pIdx];

      curY = PAGE_HEIGHT - 45;

      // Module header on first page
      if (isFirstPageOfMod) {
        page.drawText(mod.title, {
          x: MARGIN_X,
          y: curY,
          size: 20,
          font: fontHelveticaBold,
          color: primaryNavy,
        });
        curY -= 16;
        page.drawText(mod.range, {
          x: MARGIN_X,
          y: curY,
          size: 9,
          font: fontHelvetica,
          color: textGray,
        });
        curY -= 20;
      } else {
        curY -= 10;
      }

      // Calculate card height to fit perfectly
      const remainingHeight = curY - 45;
      const cardHeight = Math.min(138, Math.floor(remainingHeight / countOnThisPage) - 8);
      const gap = 8;

      for (let d = 0; d < countOnThisPage; d++) {
        const globalDrillIndex = mIdx * 50 + drillOffsetInMod + d;
        const drill = ALL_500_TREINOS[globalDrillIndex];
        if (!drill) continue;

        const cardY = curY - cardHeight;

        // Card border & background
        page.drawRectangle({
          x: MARGIN_X,
          y: cardY,
          width: CONTENT_WIDTH,
          height: cardHeight,
          borderColor: cardBorder,
          borderWidth: 1,
          color: cardBg,
        });

        let textY = cardY + cardHeight - 16;

        // 1. Title
        const titleText = drill.title;
        page.drawText(titleText, {
          x: MARGIN_X + 12,
          y: textY,
          size: 10.5,
          font: fontHelveticaBold,
          color: accentBlue,
        });
        textY -= 14;

        // 2. Objetivo
        page.drawText('Objetivo: ', {
          x: MARGIN_X + 12,
          y: textY,
          size: 8.5,
          font: fontHelveticaBold,
          color: textDark,
        });
        const objLabelW = fontHelveticaBold.widthOfTextAtSize('Objetivo: ', 8.5);
        page.drawText(drill.objective, {
          x: MARGIN_X + 12 + objLabelW,
          y: textY,
          size: 8.5,
          font: fontHelvetica,
          color: textDark,
        });
        textY -= 13;

        // 3. Execução
        page.drawText('Execução: ', {
          x: MARGIN_X + 12,
          y: textY,
          size: 8.5,
          font: fontHelveticaBold,
          color: textDark,
        });
        const execLabelW = fontHelveticaBold.widthOfTextAtSize('Execução: ', 8.5);

        // Wrap execution text
        const execLines = wrapText(drill.execution, CONTENT_WIDTH - 24 - execLabelW, 8.5, fontHelvetica);
        if (execLines.length > 0) {
          page.drawText(execLines[0], {
            x: MARGIN_X + 12 + execLabelW,
            y: textY,
            size: 8.5,
            font: fontHelvetica,
            color: textDark,
          });
          for (let l = 1; l < Math.min(execLines.length, 3); l++) {
            textY -= 10.5;
            page.drawText(execLines[l], {
              x: MARGIN_X + 12,
              y: textY,
              size: 8.5,
              font: fontHelvetica,
              color: textDark,
            });
          }
        }
        textY -= 13;

        // 4. Volume & Nível
        page.drawText('Volume: ', {
          x: MARGIN_X + 12,
          y: textY,
          size: 8.5,
          font: fontHelveticaBold,
          color: textDark,
        });
        const volLabelW = fontHelveticaBold.widthOfTextAtSize('Volume: ', 8.5);
        page.drawText(`${drill.volume}   `, {
          x: MARGIN_X + 12 + volLabelW,
          y: textY,
          size: 8.5,
          font: fontHelvetica,
          color: textDark,
        });
        const volValW = fontHelvetica.widthOfTextAtSize(`${drill.volume}   `, 8.5);

        page.drawText('Nível: ', {
          x: MARGIN_X + 12 + volLabelW + volValW,
          y: textY,
          size: 8.5,
          font: fontHelveticaBold,
          color: textDark,
        });
        const nivLabelW = fontHelveticaBold.widthOfTextAtSize('Nível: ', 8.5);
        page.drawText(drill.level, {
          x: MARGIN_X + 12 + volLabelW + volValW + nivLabelW,
          y: textY,
          size: 8.5,
          font: fontHelvetica,
          color: textDark,
        });
        textY -= 13;

        // 5. Variação
        page.drawText('Variação: ', {
          x: MARGIN_X + 12,
          y: textY,
          size: 8,
          font: fontHelveticaOblique,
          color: textGray,
        });
        const varLabelW = fontHelveticaOblique.widthOfTextAtSize('Variação: ', 8);
        page.drawText(drill.variation, {
          x: MARGIN_X + 12 + varLabelW,
          y: textY,
          size: 8,
          font: fontHelvetica,
          color: textGray,
        });

        curY -= cardHeight + gap;
      }

      drawFooter(page, currentPageNum);
      currentPageNum++;
      drillOffsetInMod += countOnThisPage;
    }
  }

  const pdfBytes = await pdfDoc.save();

  // Ensure public directory exists
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, '500-treinos-de-beach-tennis.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`PDF successfully generated at: ${outputPath} with ${pdfDoc.getPageCount()} pages!`);
}

generatePDF().catch(console.error);
