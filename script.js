/* ============================================================
   Valthera Solutions — Main Script
   ============================================================ */

// ---- Product Data ----
const products = [
  {
    id: 'extrator-co2',
    name: 'Extrator de CO₂ Supercrítico',
    tag: 'Extração',
    shortDesc: 'Sistema de extração utilizando CO₂ em estado supercrítico, garantindo extratos puros, sem resíduos de solvente e com alto rendimento.',
    fullDesc: 'O Extrator de CO₂ Supercrítico da Valthera Solutions utiliza dióxido de carbono em condições acima do ponto crítico (31°C e 73 bar) como solvente verde. Ideal para obtenção de óleos essenciais, oleoresinas, extratos vegetais e compostos bioativos de alta pureza. O processo é seletivo, limpo e ecologicamente correto.',
    features: [
      'Pressão de operação: até 700 bar',
      'Temperatura controlada por PLC',
      'Sistema de recirculação de CO₂',
      'Separadores multi-estágio',
      'Extrato livre de solventes residuais',
      'Construção em aço inox 316L'
    ],
    svgColor: '#06b6d4',
    svgBg: 'linear-gradient(135deg, #0c1929, #0f2740)',
    svgContent: `<rect x="100" y="60" width="80" height="200" rx="40" fill="none" stroke="#06b6d4" stroke-width="2"/>
      <rect x="115" y="90" width="50" height="150" rx="25" fill="url(#pGrad1)" opacity=".5"/>
      <circle cx="140" cy="40" r="20" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
      <line x1="140" y1="40" x2="152" y2="30" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
      <text x="130" y="45" fill="#22d3ee" font-size="8" font-family="monospace">bar</text>
      <line x1="180" y1="130" x2="250" y2="130" stroke="#334155" stroke-width="3"/>
      <line x1="250" y1="130" x2="250" y2="200" stroke="#334155" stroke-width="3"/>
      <rect x="230" y="200" width="60" height="60" rx="8" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="243" y="235" fill="#22d3ee" font-size="9" font-family="monospace">CO₂</text>
      <circle cx="130" cy="170" r="3" fill="#06b6d4" opacity=".5"><animate attributeName="cy" values="170;110;170" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="148" cy="190" r="2" fill="#06b6d4" opacity=".3"><animate attributeName="cy" values="190;120;190" dur="4s" repeatCount="indefinite"/></circle>
      <defs><linearGradient id="pGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.05"/><stop offset="100%" stop-color="#06b6d4" stop-opacity="0.4"/></linearGradient></defs>`
  },
  {
    id: 'bateria-percoladores',
    name: 'Bateria de Percoladores',
    tag: 'Extração',
    shortDesc: 'Conjunto de percoladores em série para extração sólido-líquido contínua, maximizando o aproveitamento do solvente e da matéria-prima.',
    fullDesc: 'A Bateria de Percoladores Valthera é projetada para processos de extração sólido-líquido em contracorrente. O sistema em série permite operação contínua, com renovação constante do solvente, aumentando significativamente a eficiência de extração e reduzindo o consumo de energia e insumos.',
    features: [
      'Operação em contracorrente',
      'Configuração modular (3 a 8 estágios)',
      'Sistema de drenagem automatizado',
      'Controle de fluxo e temperatura',
      'Fácil limpeza CIP integrado',
      'Capacidade de 50L a 5.000L por estágio'
    ],
    svgColor: '#0ea5e9',
    svgBg: 'linear-gradient(135deg, #0c1929, #0f2740)',
    svgContent: `<rect x="40" y="80" width="50" height="140" rx="10" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
      <rect x="120" y="80" width="50" height="140" rx="10" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
      <rect x="200" y="80" width="50" height="140" rx="10" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
      <rect x="280" y="80" width="50" height="140" rx="10" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>
      <line x1="90" y1="140" x2="120" y2="140" stroke="#334155" stroke-width="2.5"/>
      <line x1="170" y1="140" x2="200" y2="140" stroke="#334155" stroke-width="2.5"/>
      <line x1="250" y1="140" x2="280" y2="140" stroke="#334155" stroke-width="2.5"/>
      <rect x="48" y="100" width="34" height="100" rx="6" fill="url(#pGrad2)" opacity=".4"/>
      <rect x="128" y="110" width="34" height="90" rx="6" fill="url(#pGrad2)" opacity=".35"/>
      <rect x="208" y="120" width="34" height="80" rx="6" fill="url(#pGrad2)" opacity=".3"/>
      <rect x="288" y="130" width="34" height="70" rx="6" fill="url(#pGrad2)" opacity=".25"/>
      <polygon points="95,135 105,125 115,135" fill="#334155" stroke="#0ea5e9" stroke-width="1"/>
      <polygon points="175,135 185,125 195,135" fill="#334155" stroke="#0ea5e9" stroke-width="1"/>
      <polygon points="255,135 265,125 275,135" fill="#334155" stroke="#0ea5e9" stroke-width="1"/>
      <defs><linearGradient id="pGrad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.1"/><stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.5"/></linearGradient></defs>`
  },
  {
    id: 'extrator-ultrassom',
    name: 'Extrator com Ultrassom (UAE)',
    tag: 'Extração',
    shortDesc: 'Extração assistida por ultrassom que intensifica a transferência de massa, reduzindo tempo de processo e temperatura de operação.',
    fullDesc: 'O Extrator com Ultrassom (Ultrasound Assisted Extraction) da Valthera aplica ondas ultrassônicas de alta potência para romper paredes celulares e acelerar a difusão de compostos bioativos. O resultado é uma extração mais rápida, eficiente e em temperaturas mais baixas, preservando compostos termossensíveis.',
    features: [
      'Frequência: 20-40 kHz ajustável',
      'Potência ultrassônica até 3000W',
      'Sonda ou banho ultrassônico',
      'Controle de amplitude e pulsação',
      'Redução de até 70% no tempo de extração',
      'Operação em batelada ou contínua'
    ],
    svgColor: '#8b5cf6',
    svgBg: 'linear-gradient(135deg, #120c29, #1a0f40)',
    svgContent: `<rect x="110" y="70" width="90" height="170" rx="12" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
      <rect x="120" y="90" width="70" height="130" rx="8" fill="url(#pGrad3)" opacity=".3"/>
      <line x1="155" y1="30" x2="155" y2="70" stroke="#a78bfa" stroke-width="3"/>
      <circle cx="155" cy="25" r="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
      <!-- Ultrasound waves -->
      <path d="M225 120 Q 240 130, 225 140 Q 210 150, 225 160" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity=".6"><animate attributeName="opacity" values=".6;.2;.6" dur="1.5s" repeatCount="indefinite"/></path>
      <path d="M240 115 Q 260 130, 240 145 Q 220 160, 240 175" fill="none" stroke="#a78bfa" stroke-width="1" opacity=".4"><animate attributeName="opacity" values=".4;.1;.4" dur="1.5s" repeatCount="indefinite" begin=".3s"/></path>
      <path d="M85 120 Q 70 130, 85 140 Q 100 150, 85 160" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity=".6"><animate attributeName="opacity" values=".6;.2;.6" dur="1.5s" repeatCount="indefinite" begin=".5s"/></path>
      <circle cx="140" cy="150" r="3" fill="#8b5cf6" opacity=".5"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="170" cy="130" r="2" fill="#8b5cf6" opacity=".4"><animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite"/></circle>
      <circle cx="150" cy="170" r="2.5" fill="#8b5cf6" opacity=".35"><animate attributeName="r" values="2.5;4.5;2.5" dur="3s" repeatCount="indefinite"/></circle>
      <defs><linearGradient id="pGrad3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.05"/><stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.35"/></linearGradient></defs>`
  },
  {
    id: 'recuperador-aromas',
    name: 'Recuperador de Aromas',
    tag: 'Recuperação',
    shortDesc: 'Sistema de recuperação e concentração de compostos voláteis aromáticos, ideal para a indústria alimentícia e de bebidas.',
    fullDesc: 'O Recuperador de Aromas Valthera captura e concentra compostos voláteis liberados durante processos térmicos como evaporação e destilação. Utiliza colunas de retificação e condensadores de alta eficiência para preservar o perfil aromático original do produto final.',
    features: [
      'Coluna de destilação multi-pratos',
      'Condensadores de alta eficiência',
      'Recuperação de até 95% dos voláteis',
      'Integração com evaporadores existentes',
      'Sistema CIP automático',
      'Construção sanitária em aço inox'
    ],
    svgColor: '#10b981',
    svgBg: 'linear-gradient(135deg, #0c2918, #0f3320)',
    svgContent: `<rect x="80" y="40" width="40" height="220" rx="6" fill="none" stroke="#10b981" stroke-width="1.5"/>
      <rect x="85" y="60" width="30" height="180" rx="4" fill="url(#pGrad4)" opacity=".3"/>
      <line x1="80" y1="100" x2="120" y2="100" stroke="#10b981" stroke-width=".5" opacity=".5"/>
      <line x1="80" y1="140" x2="120" y2="140" stroke="#10b981" stroke-width=".5" opacity=".5"/>
      <line x1="80" y1="180" x2="120" y2="180" stroke="#10b981" stroke-width=".5" opacity=".5"/>
      <line x1="120" y1="80" x2="180" y2="80" stroke="#334155" stroke-width="3"/>
      <line x1="180" y1="80" x2="180" y2="140" stroke="#334155" stroke-width="3"/>
      <rect x="160" y="140" width="60" height="80" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/>
      <text x="172" y="185" fill="#34d399" font-size="9" font-family="monospace">❄</text>
      <line x1="220" y1="180" x2="280" y2="180" stroke="#334155" stroke-width="2.5"/>
      <rect x="280" y="160" width="40" height="60" rx="6" fill="none" stroke="#10b981" stroke-width="1.5"/>
      <rect x="288" y="185" width="24" height="25" rx="4" fill="url(#pGrad4)" opacity=".4"/>
      <!-- Rising vapor -->
      <circle cx="95" cy="200" r="2" fill="#34d399" opacity=".4"><animate attributeName="cy" values="200;60;200" dur="5s" repeatCount="indefinite"/></circle>
      <circle cx="105" cy="220" r="1.5" fill="#34d399" opacity=".3"><animate attributeName="cy" values="220;80;220" dur="6s" repeatCount="indefinite"/></circle>
      <defs><linearGradient id="pGrad4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981" stop-opacity="0.05"/><stop offset="100%" stop-color="#10b981" stop-opacity="0.4"/></linearGradient></defs>`
  },
  {
    id: 'decanter',
    name: 'Decanter',
    tag: 'Separação',
    shortDesc: 'Centrífuga decanter horizontal para separação contínua de sólidos e líquidos com alta eficiência e capacidade de processamento.',
    fullDesc: 'O Decanter Valthera é uma centrífuga horizontal de alto desempenho projetada para separação contínua sólido-líquido. Com velocidade diferencial controlada por inversor, oferece separação precisa em processos de grande volume, sendo ideal para clarificação, desidratação e classificação de fases.',
    features: [
      'Velocidade: até 5.000 RPM',
      'Scroll diferencial com inversor',
      'Alimentação contínua',
      'Descarga automática de sólidos',
      'Bowl em aço inox com proteção anti-desgaste',
      'Capacidade de até 80 m³/h'
    ],
    svgColor: '#f59e0b',
    svgBg: 'linear-gradient(135deg, #29200c, #33280f)',
    svgContent: `<ellipse cx="185" cy="155" rx="130" ry="50" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="55" y="110" width="260" height="90" rx="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="185" y1="110" x2="185" y2="200" stroke="#f59e0b" stroke-width=".5" stroke-dasharray="4 3"/>
      <!-- Rotation indicator -->
      <path d="M140 130 A 50 30 0 0 1 230 130" fill="none" stroke="#fbbf24" stroke-width="1" opacity=".5" stroke-dasharray="3 3"><animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite"/></path>
      <!-- Inlet -->
      <line x1="185" y1="80" x2="185" y2="110" stroke="#334155" stroke-width="3"/>
      <polygon points="178,85 185,70 192,85" fill="#334155" stroke="#f59e0b" stroke-width="1"/>
      <!-- Outlets -->
      <line x1="60" y1="155" x2="30" y2="175" stroke="#334155" stroke-width="2.5"/>
      <text x="10" y="195" fill="#fbbf24" font-size="8" font-family="monospace">Sólido</text>
      <line x1="310" y1="155" x2="340" y2="135" stroke="#334155" stroke-width="2.5"/>
      <text x="320" y="125" fill="#fbbf24" font-size="8" font-family="monospace">Líquido</text>
      <!-- Interior separation -->
      <rect x="100" y="135" width="170" height="40" rx="20" fill="url(#pGrad5)" opacity=".25"/>
      <defs><linearGradient id="pGrad5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.5"/><stop offset="50%" stop-color="#f59e0b" stop-opacity="0.1"/><stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.4"/></linearGradient></defs>`
  },
  {
    id: 'liofilizador',
    name: 'Liofilizador',
    tag: 'Processamento',
    shortDesc: 'Equipamento de liofilização (freeze-drying) para secagem a vácuo de produtos sensíveis ao calor, preservando propriedades e bioatividade.',
    fullDesc: 'O Liofilizador Valthera realiza a secagem por sublimação: o produto é congelado e então submetido a vácuo, removendo a água diretamente do estado sólido para o gasoso. Este processo preserva a estrutura celular, aromas, vitaminas e princípios ativos termossensíveis.',
    features: [
      'Temperatura de condensação até -80°C',
      'Vácuo inferior a 0,1 mbar',
      'Prateleiras aquecidas com controle PID',
      'Ciclos de liofilização programáveis',
      'Sensores de umidade e pressão in-line',
      'Câmara em aço inox com porta panorâmica'
    ],
    svgColor: '#06b6d4',
    svgBg: 'linear-gradient(135deg, #0c1929, #0f2740)',
    svgContent: `<rect x="70" y="60" width="180" height="160" rx="12" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
      <!-- Shelves -->
      <line x1="85" y1="100" x2="235" y2="100" stroke="#334155" stroke-width="2"/>
      <line x1="85" y1="140" x2="235" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="85" y1="180" x2="235" y2="180" stroke="#334155" stroke-width="2"/>
      <!-- Products on shelves -->
      <rect x="100" y="88" width="16" height="12" rx="2" fill="#22d3ee" opacity=".3"/>
      <rect x="125" y="88" width="16" height="12" rx="2" fill="#22d3ee" opacity=".25"/>
      <rect x="155" y="88" width="16" height="12" rx="2" fill="#22d3ee" opacity=".3"/>
      <rect x="100" y="128" width="16" height="12" rx="2" fill="#22d3ee" opacity=".2"/>
      <rect x="130" y="128" width="16" height="12" rx="2" fill="#22d3ee" opacity=".25"/>
      <rect x="160" y="128" width="16" height="12" rx="2" fill="#22d3ee" opacity=".2"/>
      <!-- Door window -->
      <rect x="260" y="80" width="50" height="120" rx="8" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
      <rect x="268" y="90" width="34" height="100" rx="4" fill="rgba(6,182,212,.05)" stroke="#06b6d4" stroke-width=".5"/>
      <!-- Vacuum pump -->
      <line x1="160" y1="220" x2="160" y2="250" stroke="#334155" stroke-width="3"/>
      <circle cx="160" cy="265" r="18" fill="none" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="148" y="270" fill="#22d3ee" font-size="9" font-family="monospace">VAC</text>
      <!-- Ice crystals -->
      <text x="190" y="118" fill="#67e8f9" font-size="12" opacity=".4">❄</text>
      <text x="200" y="168" fill="#67e8f9" font-size="10" opacity=".3">❄</text>`
  },
  {
    id: 'coluna-adsorcao',
    name: 'Coluna de Adsorção',
    tag: 'Purificação',
    shortDesc: 'Sistema de colunas para adsorção e purificação de compostos, com leito fixo ou fluidizado, para remoção seletiva de impurezas.',
    fullDesc: 'A Coluna de Adsorção Valthera é utilizada em processos de purificação e separação cromatográfica em escala industrial. Com leito fixo de adsorventes como carvão ativado, resinas ou sílica-gel, permite a remoção seletiva de contaminantes, clarificação e fracionamento de extratos.',
    features: [
      'Leito fixo ou fluidizado',
      'Adsorventes: carvão ativado, sílica, resinas',
      'Operação em ciclos de carga e regeneração',
      'Distribuidores de fluxo otimizados',
      'Monitoramento de pressão e breakthrough',
      'Diâmetros de 100mm a 1200mm'
    ],
    svgColor: '#a78bfa',
    svgBg: 'linear-gradient(135deg, #120c29, #1a0f40)',
    svgContent: `<rect x="140" y="30" width="60" height="240" rx="30" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
      <!-- Packing layers -->
      <rect x="148" y="50" width="44" height="50" rx="4" fill="url(#pGrad6)" opacity=".3"/>
      <rect x="148" y="110" width="44" height="50" rx="4" fill="url(#pGrad6)" opacity=".25"/>
      <rect x="148" y="170" width="44" height="50" rx="4" fill="url(#pGrad6)" opacity=".2"/>
      <!-- Dividers -->
      <line x1="148" y1="100" x2="192" y2="100" stroke="#a78bfa" stroke-width=".8" stroke-dasharray="3 2"/>
      <line x1="148" y1="160" x2="192" y2="160" stroke="#a78bfa" stroke-width=".8" stroke-dasharray="3 2"/>
      <line x1="148" y1="220" x2="192" y2="220" stroke="#a78bfa" stroke-width=".8" stroke-dasharray="3 2"/>
      <!-- Flow indicator -->
      <polygon points="163,20 170,5 177,20" fill="#334155" stroke="#a78bfa" stroke-width="1"/>
      <polygon points="163,280 170,295 177,280" fill="#334155" stroke="#a78bfa" stroke-width="1"/>
      <!-- Side annotations -->
      <text x="65" y="80" fill="#c4b5fd" font-size="8" font-family="monospace">Zona 1</text>
      <line x1="108" y1="78" x2="140" y2="78" stroke="#a78bfa" stroke-width=".5" stroke-dasharray="2 2"/>
      <text x="65" y="140" fill="#c4b5fd" font-size="8" font-family="monospace">Zona 2</text>
      <line x1="108" y1="138" x2="140" y2="138" stroke="#a78bfa" stroke-width=".5" stroke-dasharray="2 2"/>
      <text x="65" y="200" fill="#c4b5fd" font-size="8" font-family="monospace">Zona 3</text>
      <line x1="108" y1="198" x2="140" y2="198" stroke="#a78bfa" stroke-width=".5" stroke-dasharray="2 2"/>
      <!-- Flowing particles -->
      <circle cx="165" cy="60" r="2" fill="#a78bfa" opacity=".5"><animate attributeName="cy" values="60;250" dur="4s" repeatCount="indefinite"/></circle>
      <circle cx="175" cy="80" r="1.5" fill="#a78bfa" opacity=".4"><animate attributeName="cy" values="80;260" dur="5s" repeatCount="indefinite"/></circle>
      <defs><linearGradient id="pGrad6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a78bfa" stop-opacity="0.3"/><stop offset="100%" stop-color="#a78bfa" stop-opacity="0.05"/></linearGradient></defs>`
  },
  {
    id: 'extracao-microondas',
    name: 'Extração com Micro-ondas',
    tag: 'Extração',
    shortDesc: 'Sistema de extração assistida por micro-ondas (MAE) para aquecimento volumétrico rápido e uniforme, com drástica redução no tempo de processo.',
    fullDesc: 'A Extração com Micro-ondas (Microwave Assisted Extraction) da Valthera aplica radiação eletromagnética para aquecer o solvente e a matriz de forma volumétrica e instantânea. O aquecimento interno acelera a ruptura celular e a difusão dos compostos, reduzindo o tempo de extração de horas para minutos.',
    features: [
      'Potência: até 2000W (magnetron)',
      'Frequência: 2.450 MHz',
      'Reatores em vidro borossilicato ou PTFE',
      'Controle de temperatura e pressão em tempo real',
      'Redução de até 90% no tempo de processo',
      'Sistema de segurança contra sobrepressão'
    ],
    svgColor: '#ef4444',
    svgBg: 'linear-gradient(135deg, #290c0c, #401010)',
    svgContent: `<rect x="90" y="60" width="160" height="120" rx="10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Door -->
      <rect x="95" y="65" width="110" height="110" rx="6" fill="rgba(239,68,68,.03)" stroke="#ef4444" stroke-width=".5"/>
      <!-- Inner vessel -->
      <rect x="115" y="95" width="70" height="55" rx="6" fill="none" stroke="#f87171" stroke-width="1"/>
      <rect x="122" y="110" width="56" height="30" rx="4" fill="url(#pGrad7)" opacity=".3"/>
      <!-- Microwave rays -->
      <path d="M220 100 C 230 110, 225 120, 235 130" fill="none" stroke="#f87171" stroke-width="1.5" opacity=".5"><animate attributeName="opacity" values=".5;.15;.5" dur="1s" repeatCount="indefinite"/></path>
      <path d="M230 95 C 240 108, 235 122, 245 135" fill="none" stroke="#f87171" stroke-width="1" opacity=".35"><animate attributeName="opacity" values=".35;.1;.35" dur="1s" repeatCount="indefinite" begin=".2s"/></path>
      <path d="M240 90 C 252 106, 247 122, 258 138" fill="none" stroke="#f87171" stroke-width=".8" opacity=".25"><animate attributeName="opacity" values=".25;.05;.25" dur="1s" repeatCount="indefinite" begin=".4s"/></path>
      <!-- Control panel -->
      <rect x="90" y="190" width="160" height="40" rx="6" fill="none" stroke="#334155" stroke-width="1"/>
      <rect x="105" y="198" width="50" height="24" rx="3" fill="#0f172a" stroke="#ef4444" stroke-width=".5"/>
      <text x="112" y="214" fill="#f87171" font-size="9" font-family="monospace">2450M</text>
      <circle cx="190" cy="210" r="8" fill="none" stroke="#ef4444" stroke-width="1"/>
      <line x1="190" y1="210" x2="195" y2="205" stroke="#f87171" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="220" cy="210" r="5" fill="#22c55e" opacity=".6"/>
      <defs><linearGradient id="pGrad7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444" stop-opacity="0.1"/><stop offset="100%" stop-color="#ef4444" stop-opacity="0.4"/></linearGradient></defs>`
  }
];

// ---- Render Product Cards ----
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card reveal reveal-delay-${(i % 4) + 1}" data-product-id="${p.id}" onclick="openModal('${p.id}')">
      <div class="product-card-img">
        <svg viewBox="0 0 370 230" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; background: ${p.svgBg};">
          ${p.svgContent}
        </svg>
        <div class="img-overlay"></div>
      </div>
      <div class="product-card-body">
        <span class="product-tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.shortDesc}</p>
        <span class="product-link">
          Ver Detalhes
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </div>
  `).join('');
}

// ---- Modal ----
function openModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  document.getElementById('modal-img').innerHTML = `
    <svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; background: ${p.svgBg};">
      ${p.svgContent}
    </svg>`;
  document.getElementById('modal-tag').textContent = p.tag;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.fullDesc;

  const featuresList = document.getElementById('modal-features-list');
  featuresList.innerHTML = p.features.map(f => `
    <li>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ${f}
    </li>`).join('');

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---- Navbar Scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Particles Canvas ----
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const COUNT = 60;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + .4,
        dx: (Math.random() - .5) * .35,
        dy: (Math.random() - .5) * .35,
        opacity: Math.random() * .5 + .1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6,182,212,${p.opacity})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6,182,212,${.08 * (1 - dist / 120)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

// ---- Counter Animation ----
function animateCounters() {
  document.querySelectorAll('.hero-stat h3').forEach(el => {
    const target = el.textContent;
    const num = parseInt(target);
    if (isNaN(num)) return;

    const suffix = target.replace(String(num), '');
    let current = 0;
    const step = Math.ceil(num / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= num) {
        current = num;
        clearInterval(interval);
      }
      el.textContent = current + suffix;
    }, 25);
  });
}

// ---- Form Submit ----
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = `
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
    Enviando...`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      Mensagem Enviada!`;
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    setTimeout(() => {
      btn.innerHTML = `Enviar Mensagem
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
      btn.style.background = '';
      btn.disabled = false;
      document.getElementById('contact-form').reset();
    }, 3000);
  }, 1500);
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Add spin keyframe for loading ----
const style = document.createElement('style');
style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initParticles();
  animateCounters();

  // Re-observe dynamically rendered product cards
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
