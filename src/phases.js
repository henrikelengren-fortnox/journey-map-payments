export const PHASES = [
  {
    id: 'lev', fas: 'En enhetlig betalupplevelse', steg: 'Hantera alla typer av betalningar på samma sätt', icon: 'file-invoice',
    desc: 'Skapa en sammanhållen betalupplevelse där alla typer av betalningar följer samma logik och känns igen – oavsett om det gäller leverantörsfakturor, lön, AGI, skatt eller andra typer av betalningar.',
    exp: 1,
    metric: { label: 'Betalda via Fortnox', value: '58', unit: '%', period: 'Maj', status: 'above', target: 'Mål 55 %', trend: [40, 44, 47, 49, 52, 54, 56, 58] },
    extraMetrics: [
      { label: 'Tid per betalning', value: '1,8 min' },
      { label: 'Betalda i tid', value: '87 %' },
      { label: 'Exporterar fortfarande fil till banken', value: '31 %' }
    ],
    insight: {
      type: 'pain',
      title: 'Olika betaltyper, olika logik',
      text: 'Betalupplevelsen blir splittrad när olika typer av betalningar inte hänger ihop utan kräver olika logik och arbetssätt så som t ex leverantörsfaktura, lön, AGI och moms.'
    },
    citat: '”Det blir lite förvirrande att man slungas från leverantörer till betalningar”',
    pains: [
      { title: 'Splittrade betalflöden', text: 'Leverantörsfakturor, löner, AGI, moms och andra utbetalningar hanteras på olika sätt och på olika platser, trots att grunduppgiften är densamma – att betala något.' },
      { title: 'Användarna skapar egna genvägar', text: 'Byråer använder leverantörsreskontran som en universallösning för att få attest- och betalflöden för olika typer av utbetalningar på ett och samma ställe.' },
      { title: 'Systemet tvingar fram manuella lösningar', text: 'Exempelvis importeras Skatteverkets betalningssammanställning som en leverantörsfaktura för att kunna använda samma etablerade betalflöde.' }
    ],
    solutions: [
      { title: 'Gemensam betala-drawer som byggs in i respektive flöde där betalningar görs (Betalningar, Lev. faktura, Moms, Lön, todo’s)' }
    ],
    businessAreas: ['Betala', 'Inköp', 'Redovisa', 'Medarbetare']
  },
  {
    id: 'innan', fas: 'Färre avbrott för att gå till banken', steg: 'Se saldo, händelser och likviditet utan att lämna Fortnox', icon: 'building-bank',
    desc: 'För att känna kontroll ska användaren inte behöva kontrollera Fortnox mot banken. Fortnox är platsen där användaren både förstår betalningsläget och agerar.',
    exp: -1,
    metric: { label: 'Aktiveringsgrad', value: '34', unit: '%', period: 'Maj', status: 'below', target: 'Mål 50 %', trend: [18, 20, 22, 25, 27, 29, 31, 34] },
    extraMetrics: [
      { label: 'Tid till aktiverad bankkoppling', value: '2,4 dagar' },
      { label: 'Avhopp i bankkopplingsflödet', value: '41 %' },
      { label: 'Gör en betalning inom 30 dagar efter aktivering', value: '62 %' }
    ],
    insight: {
      type: 'pain',
      title: 'Banken förblir nödvändig för överblick',
      text: 'Användaren behöver lämna Fortnox och gå till banken för att känna kontroll över sina betalningar. Detta skapar onödiga avbrott i arbetsflödet.'
    },
    citat: '”Om bara aktuellt saldo, pågående och planerade betalningar hade visats tydligt – då hade min klient kunnat fatta informerade beslut utan att behöva gå till banken”',
    pains: [
      { title: 'Otydlig ekonomisk överblick', text: 'Användaren behöver kunna se aktuellt saldo samt pågående och planerade betalningar för att fatta rätt beslut utan att gå till banken.' },
      { title: 'Fördröjd och ofullständig bankinformation', text: 'Ett saldo som inte är uppdaterat i realtid skapar osäkerhet och leder till onödiga frågor till byrån.' },
      { title: 'Onödigt beroende av banken', text: 'Användaren behöver kunna hantera fler bankärenden direkt i Fortnox – exempelvis signera betalningar och se kontoutdrag – istället för att växla mellan systemen.' }
    ],
    solutions: [
      { title: 'Översiktsvy för konton, händelser och likviditet (bank & betalning).' },
      { title: 'Detaljvy för transaktioner (konton & kort)' }
    ],
    businessAreas: ['Betala', 'Finansiera', 'Engagera'],
    visualisering: { type: 'video', src: '/assets/video/omrade-1.mov' }
  },
  {
    id: 'moms', fas: 'Betalning och bokföring som en sammanhängande process', steg: 'Bokför och betala i ett sammanhang', icon: 'receipt',
    desc: 'Skapa en upplevelse där betalning och bokföring naturligt hänger ihop, så att användare slipper förstå eller hantera detta som olika moment. Gör betalningen till den naturliga slutdestinationen.',
    exp: -0.5,
    metric: { label: 'Momsbetalningar i plattformen', value: '22', unit: '%', period: 'Apr', status: 'below', target: 'Mål 35 %', trend: [12, 13, 15, 16, 18, 19, 21, 22] },
    extraMetrics: [
      { label: 'Betald i tid', value: '91 %' },
      { label: 'Tid från deklaration till betalning', value: '3,2 dagar' },
      { label: 'Supportärenden om momsbetalning', value: '180/mån' }
    ],
    insight: {
      type: 'pain',
      title: 'Bokföring och betalning hör ihop',
      text: 'Bokför i reskontra och betala hör logiskt ihop, men behandlas ofta som separata aktiviteter.'
    },
    citat: '”När du registrerar fakturan så säger du till programmet, betala den också, den är klar – så går det av sig självt”',
    pains: [
      { title: 'Ett sammanhängande arbete delas upp i flera steg', text: 'Användaren behöver själv hålla ihop bokföring och betalning, trots att de ofta upplevs som delar av samma uppgift.' },
      { title: 'Onödiga moment i betalflödet', text: 'Att först bokföra fakturan och sedan initiera betalningen skapar extra steg, särskilt för användare som själva hanterar hela betalprocessen.' },
      { title: 'Bristande kontext mellan stegen', text: 'Funktionen Bokför och Betala förenklar processen, men användaren tappar sin plats och sitt sammanhang när den navigeras bort från leverantörsreskontran.' }
    ],
    solutions: [
      { title: 'Säkerställ att bokför och betala kan göras som en sammanhängande process, oavsett typ (lev. faktura, moms, lön, agi)' }
    ],
    businessAreas: ['Betala', 'Inköp', 'Redovisa', 'Medarbetare']
  },
  {
    id: 'lon', fas: 'Tydlighet när flera personer är inblandade', steg: 'Förstå ansvar och status i flödet', icon: 'users',
    desc: 'Göra det enkelt att förstå vem som ansvarar för nästa steg i betalningsprocessen, även när flera personer är involverade. Fortnox koordinerar arbetet och gör ansvar och nästa steg synligt.',
    exp: 0.5,
    metric: { label: 'Lönekörningar med direktbetalning', value: '47', unit: '%', period: 'Maj', status: 'above', target: 'Mål 45 %', trend: [30, 33, 36, 38, 40, 43, 45, 47] },
    extraMetrics: [
      { label: 'Löner utbetalda i tid', value: '99,2 %' },
      { label: 'Tid per lönekörning', value: '14 min' },
      { label: 'Körningar som kräver manuell hantering i bank', value: '38 %' }
    ],
    insight: {
      type: 'pain',
      title: 'Otydligt vem som gör vad',
      text: 'Det skapar otydlighet när flera personer är involverade i ett flöde, vem som ansvarar för vad och vad som är nästa steg.'
    },
    citat: '”Hur funkar det, kan jag lägga – om jag lägger till en manuell betalning dyker den upp hos kunden då också eller är det bara jag som ser den?”',
    pains: [
      { title: 'Otydligt ansvar och status', text: 'Användaren saknar en tydlig bild av var en faktura befinner sig, vem som ansvarar för nästa steg och om personen har fått rätt påminnelse eller notis.' },
      { title: 'Bristande kommunikation och insyn', text: 'Kommentarer, påminnelser och annan viktig kommunikation är svåra att följa i Fortnox, vilket gör att mycket samarbete sker utanför systemet.' },
      { title: 'Workarounds och försenade betalningar', text: 'Byråer skapar egna lösningar för att behålla kontrollen, exempelvis genom att lägga sig själva som sista attestant. Attest blir samtidigt en vanlig orsak till sena betalningar eftersom det är oklart om och när klienten har blivit påmind.' }
    ],
    solutions: [
      { title: 'Ta fram standarder för layout och hur vi visualiserar statusar och information om vart en händelse/dokument befinner sig.' },
      { title: 'Implementera på alla platser där en betalning/dokument befinner sig (fakturor, betalningar, detaljvyer, drawer mfl.)' }
    ],
    businessAreas: ['Betala', 'Inköp', 'Redovisa', 'Medarbetare']
  },
  {
    id: 'fskatt', fas: 'Tydlig status genom betalresan', steg: 'Förstå och lita på automatiserade händelser', icon: 'calendar',
    desc: 'Ge användaren tydlig status och återkoppling genom hela betalningsprocessen, så att det alltid är enkelt att förstå var en betalning befinner sig och vad som händer härnäst. Användaren vet alltid vad som har hänt, vad som händer nu och om något krävs av dem.',
    exp: -1.5,
    metric: { label: 'F-skatt via plattformen', value: '12', unit: '%', period: 'Apr', status: 'below', target: 'Mål 25 %', trend: [8, 8, 9, 9, 10, 11, 11, 12] },
    extraMetrics: [
      { label: 'Försenade betalningar', value: '8,4 %' },
      { label: 'Får påminnelse från Skatteverket', value: '6 %' },
      { label: 'Har stående överföring i bank', value: '44 %' }
    ],
    insight: {
      type: 'pain',
      title: 'Automation utan transparens skapar osäkerhet',
      text: 'Automatiserade händelser sker utan synlig transparens, vilket gör att användaren inte litar fullt ut på systemet.'
    },
    citat: '”Jag tror att vi skulle kunna hantera 80 % av alla våra kunders leverantörsfakturor den vägen. Våra kunder betalar själva, men vi bokför – så det är en vinst för både oss och kund med en sådan funktion”',
    pains: [
      { title: 'För mycket manuell kontroll', text: 'Användarna behöver lägga tid på att granska och hantera allt, istället för att systemet automatiskt hanterar det normala och bara lyfter fram avvikelser.' },
      { title: 'Automation kräver transparens och kontroll', text: 'När upp till 80 % av leverantörsfakturor och betalningar kan automatiseras växer behovet av att användaren förstår, litar på och känner kontroll över vad systemet gör.' },
      { title: 'Behov av en enhetlig struktur för automation', text: 'När automation blir en allt större del av Fortnox behövs gemensamma principer och ett konsekvent sätt att automatisera, kommunicera och ge användaren insyn – oavsett var i systemet det sker.' }
    ],
    solutions: [
      { title: 'Ta fram & implementera standarder för hur vi visualiserar och tydliggör den automation som systemet utför, och implementera konsekvent över plattformen.' }
    ],
    businessAreas: ['Betala', 'Inköp', 'Redovisa', 'Medarbetare']
  },
  {
    id: 'agi', fas: 'Upptäck och lös hinder innan de påverkar betalningen', steg: 'Planera likviditet i förväg', icon: 'file',
    desc: 'Förutspå och kommunicera potentiella hinder och lösningar proaktivt, så att användaren kan agera i god tid innan betalningar försenas eller misslyckas. Fortnox likviditetsplanering hjälper användaren lösa potentiella problem innan de faktiskt blir ett problem.',
    exp: -1,
    metric: { label: 'AGI betald via Fortnox', value: '19', unit: '%', period: 'Apr', status: 'below', target: 'Mål 30 %', trend: [10, 11, 12, 13, 15, 16, 17, 19] },
    extraMetrics: [
      { label: 'Betald i tid', value: '88 %' },
      { label: 'Supportärenden om skattebetalningar', value: '340/mån' },
      { label: 'Använder samma flöde som för moms', value: '54 %' }
    ],
    insight: {
      type: 'pain',
      title: 'Likviditetsplanering sker utanför Fortnox',
      text: 'Likviditetsplanering är ett manuellt arbete som sker utanför Fortnox. Risk för felkalkyler och att problem med betalförmåga upptäcks för sent.'
    },
    citat: '”Vi sitter ju och planerar kassaflödet utanför systemet i Excel”',
    pains: [
      { title: 'Likviditetsplaneringen sker utanför Fortnox', text: 'Kunder och byråer bygger egna prognoser i Excel och kombinerar data från Fortnox, banken och manuellt inlagda uppgifter för att planera betalningar.' },
      { title: 'Onödigt manuellt arbete med data', text: 'Information behöver exporteras, importeras och bearbetas manuellt, samtidigt som dagens CSV-exporter inte alltid är anpassade för vidare analys.' },
      { title: 'Fortnox hjälper inte tillräckligt med besluten', text: 'Systemet har redan mycket av informationen som behövs för att förutse likviditetsbrist och prioritera betalningar, men stödet för att omsätta informationen till konkreta beslut saknas.' }
    ],
    solutions: [
      { title: 'Möjliggör smart likviditetsplanering som stödjer både automatiska förslag samt manuell planering.' },
      { title: 'Tillgängliggör i rätt kontext där användaren kräver överblick samt i beslutsögonblick, så som översiktsvy (bank & betalning) samt betalningstillfället (betala-drawer).' }
    ],
    businessAreas: ['Betala', 'Finansiera', 'Styrning & kontroll']
  }
];

export function makeBlankPhase() {
  const id = `phase-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  return {
    id,
    fas: 'Nytt område',
    steg: 'Beskriv processen',
    icon: 'file',
    desc: 'Beskriv det här området kort — vad gör användaren och varför är det viktigt?',
    exp: 0,
    metric: {
      label: 'Mätpunkt',
      value: '0',
      unit: '%',
      period: '–',
      status: 'below',
      target: 'Mål –',
      trend: [0, 0, 0, 0, 0, 0, 0, 0]
    },
    extraMetrics: [
      { label: 'Sekundär metric', value: '–' },
      { label: 'Sekundär metric', value: '–' },
      { label: 'Sekundär metric', value: '–' }
    ],
    insight: { type: 'pain', title: 'Insiktens titel', text: 'Beskriv insikten…' },
    citat: '”Citat från research…”',
    pains: [
      { title: 'Pain point 1', text: 'Beskriv pain point 1…' },
      { title: 'Pain point 2', text: 'Beskriv pain point 2…' },
      { title: 'Pain point 3', text: 'Beskriv pain point 3…' }
    ],
    solutions: [
      { title: 'Lösningsförslag 1', text: 'Beskriv lösningen…' },
      { title: 'Lösningsförslag 2', text: 'Beskriv lösningen…' },
      { title: 'Lösningsförslag 3', text: 'Beskriv lösningen…' }
    ],
    businessAreas: ['Betala']
  };
}

export function expColor(v) {
  if (v >= 0.5) return '#007533';
  if (v <= -1) return '#e02523';
  return '#f2610f';
}

export function expLabel(v) {
  const s = v.toLocaleString('sv-SE');
  return v > 0 ? '+' + s : s;
}

export function spark(trend, w, h) {
  const min = Math.min(...trend), max = Math.max(...trend);
  const rng = (max - min) || 1;
  const pts = trend.map((v, i) => [i * (w / (trend.length - 1)), h - 3 - ((v - min) / rng) * (h - 8)]);
  const line = 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
  const area = line + ' L' + w + ' ' + h + ' L0 ' + h + ' Z';
  return { line, area };
}

export function enrichPhase(p, i) {
  const above = p.metric.status === 'above';
  const sm = spark(p.metric.trend, 64, 28);
  const lg = spark(p.metric.trend, 100, 40);
  const isPain = p.insight.type === 'pain';
  return {
    ...p,
    num: String(i + 1).padStart(2, '0'),
    pillBg: above ? 'var(--success-bg-default)' : 'var(--error-bg-default)',
    pillFg: above ? 'var(--success-text-default)' : 'var(--error-text-default)',
    pillDot: above ? 'var(--success-bg-strong)' : 'var(--error-bg-strong)',
    pillText: above ? 'Över mål' : 'Under mål',
    sparkLine: sm.line, sparkArea: sm.area,
    sparkLineLg: lg.line, sparkAreaLg: lg.area,
    insightType: isPain ? 'Pain' : 'Gain',
    insightBg: isPain ? 'var(--error-bg-default)' : 'var(--success-bg-default)',
    insightFg: isPain ? 'var(--error-text-default)' : 'var(--success-text-default)',
    expColor: expColor(p.exp),
    expLabel: expLabel(p.exp),
    solutions: p.solutions.map((s) => ({
      ...s,
      impactLabel: s.impact ? 'Effekt: ' + s.impact.toLowerCase() : null,
      effortLabel: s.effort ? 'Insats: ' + s.effort.toLowerCase() : null,
      impactBg: s.impact === 'Hög' ? 'var(--success-bg-default)' : 'var(--neutral-bg-default)',
      impactFg: s.impact === 'Hög' ? 'var(--success-text-default)' : 'var(--neutral-text-default)'
    }))
  };
}
