const PECAS = {
  "ACAO POPULAR": {
    artigos: [
      "Art. 5º, LXXIII, CRFB/88",
      "Lei nº 4.717/65",
      "(cautelar) art. 5º, §4º, Lei 4.717/65",
      "(audiência) art. 319, VII, CPC"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5. Tutela de urgência, se for o caso (cautelar – art. 5º, §4º, da Lei 4.717/65)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos (não esquecer de mencionar a juntada do TÍTULO DE ELEITOR)",
      "8. Opção (ou não) pela realização da audiência de conciliação ou de mediação (art. 319, VII, do CPC)",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  "HABEAS CORPUS": {
    artigos: [
      "Art. 5º, LXVIII, CRFB/88",
      "Art. 647 e ss do CPP",
      "(cautelar) arts. 649 e 660, §2º, do CPP"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5. Tutela de urgência (medida cautelar – arts. 649 e 660, §2º do CPP)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos",
      "8. Valor da Causa",
      "9. Fechamento"
    ]
  },
  "MANDADO DE SEGURANCA": {
    artigos: [
      "Art. 5º, LXIX e LXX, CRFB/88",
      "Lei nº 12.016/2009",
      "(cautelar) art. 7º, III, Lei 12.016/09"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Tempestividade",
      "4. Prova pré-constituída",
      "5. Síntese dos fatos",
      "6. Legitimidade ativa e passiva",
      "7. Tutela de urgência, se for o caso (medida cautelar – art. 7º, III, da Lei 12.016/09)",
      "8. Fundamentos Jurídicos/Do Direito",
      "9. Pedidos",
      "10. Valor da Causa",
      "11. Fechamento"
    ]
  },
  "ACAO DE PROCEDIMENTO COMUM": {
    artigos: [
      "Arts. 319 e 320 do CPC",
      "(tutela) art. 300 do CPC"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5. Tutela de urgência, se for o caso (tutela antecipada – art. 300 do CPC)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos",
      "8. Opção (ou não) pela realização da audiência de conciliação ou de mediação (art. 319, VII, do CPC)",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  "ACAO CIVIL PUBLICA": {
    artigos: [
      "Art. 129, III e §1º, CRFB/88",
      "Lei nº 7.347/85",
      "(cautelar) art. 12 da Lei 7.347/85",
      "(audiência) art. 319, VII, do CPC"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5. Tutela de urgência, se for o caso (medida cautelar – art. 12 da Lei nº 7.347/85)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos",
      "8. Opção (ou não) pela realização da audiência de conciliação ou de mediação (art. 319, VII, do CPC)",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  "HABEAS DATA": {
    artigos: [
      "Art. 5º, LXXII, CRFB/88",
      "Lei nº 9.507/97",
      "(recusa) art. 8º, par. único, I, Lei 9.507/97",
      "Súmula nº 2 do STJ",
      "(tutela) art. 300 do CPC"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5 - Recusa administrativa (art. 8º, p. ú., I, da Lei nº 9.507/97 e Súmula nº 2 do STJ)",
      "6. Tutela de urgência, se for o caso (tutela antecipada – art. 300 do CPC)",
      "7. Fundamentos Jurídicos/Do Direito",
      "8. Pedidos",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  "MANDADO DE INJUNCAO": {
    artigos: [
      "Art. 5º, LXXI, CRFB/88",
      "Lei nº 13.300/16"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação das partes",
      "3. Síntese dos fatos",
      "4. Legitimidade ativa e passiva",
      "5. Fundamentos Jurídicos/Do Direito",
      "6. Omissão Inconstitucional (Jurisprudência do STF)",
      "7. Pedidos",
      "8. Valor da Causa",
      "9. Fechamento"
    ]
  },
  "CONTESTACAO": {
    artigos: ["Art. 335 do CPC"],
    itens: [
      "1. Endereçamento",
      "2. Qualificação",
      "3. Fatos/Síntese da Inicial",
      "4. Tempestividade",
      "5. Preliminares, se for o caso",
      "6. Mérito",
      "7. Pedidos/Conclusão",
      "8. Fechamento"
    ]
  },
  "AGRAVO DE INSTRUMENTO": {
    artigos: [
      "Arts. 1.015 a 1.020 do CPC",
      "(tutela) art. 1.019, I, do CPC"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação",
      "3. Menção ao Agravante e ao Agravado",
      "4. Tempestividade",
      "5. Cabimento",
      "6. Preparo (se não tiver sido deferida a gratuidade de justiça anteriormente e não for o caso de pedir neste momento)",
      "7. Documentação",
      "8. Fatos",
      "9. Tutela de urgência, se for o caso (art. 1.019, I, do CPC)",
      "10. Razões para Reforma ou Fundamentos Jurídicos",
      "11. Pedidos",
      "12. Fechamento"
    ]
  },
  "RECURSO ESPECIAL": {
    artigos: [
      "Art. 105, III, “a”, “b” e “c”, CRFB/88",
      "Arts. 1029 e ss do CPC",
      "(tutela) art. 1.029, §5º, do CPC"
    ],
    itens: [
      "1ª Página - Peça de Interposição: Endereçamento",
      "1ª Página - Peça de Interposição: Qualificação",
      "1ª Página - Peça de Interposição: Fechamento",
      "2ª Página e seguintes - Peça de Razões: Endereçamento e menção ao Recorrente e ao Recorrido",
      "2ª Página e seguintes - Peça de Razões: Tempestividade",
      "2ª Página e seguintes - Peça de Razões: Cabimento",
      "2ª Página e seguintes - Peça de Razões: Preparo (se não tiver sido deferida a gratuidade de justiça anteriormente e não for o caso de pedir neste momento)",
      "2ª Página e seguintes - Peça de Razões: Prequestionamento",
      "2ª Página e seguintes - Peça de Razões: Fatos",
      "2ª Página e seguintes - Peça de Razões: Tutela de urgência, se for o caso (art. 1.029, §5º, do CPC)",
      "2ª Página e seguintes - Peça de Razões: Razões para Reforma ou Fundamentos Jurídicos",
      "2ª Página e seguintes - Peça de Razões: Pedidos",
      "2ª Página e seguintes - Peça de Razões: Fechamento"
    ]
  },
  "APELACAO": {
    artigos: [
      "Art. 1.009 do CPC",
      "(tutela) art. 995, parágrafo único, do CPC"
    ],
    itens: [
      "1ª Página - Peça de Interposição: Endereçamento",
      "1ª Página - Peça de Interposição: Qualificação",
      "1ª Página - Peça de Interposição: Fechamento",
      "2ª Página e seguintes - Peça de Razões: Endereçamento e menção ao Apelante e ao Apelado",
      "2ª Página e seguintes - Peça de Razões: Tempestividade",
      "2ª Página e seguintes - Peça de Razões: Cabimento",
      "2ª Página e seguintes - Peça de Razões: Preparo (se não tiver sido deferida a gratuidade de justiça anteriormente e não for o caso de pedir neste momento)",
      "2ª Página e seguintes - Peça de Razões: Fatos",
      "2ª Página e seguintes - Peça de Razões: Tutela de urgência, se for o caso (art. 995, parágrafo único do CPC)",
      "2ª Página e seguintes - Peça de Razões: Razões para Reforma ou Fundamentos Jurídicos",
      "2ª Página e seguintes - Peça de Razões: Pedidos",
      "2ª Página e seguintes - Peça de Razões: Fechamento"
    ]
  },
  "RECURSO ORDINARIO CONSTITUCIONAL": {
    artigos: [
      "Art. 102, II, “a” e “b”, CRFB/88",
      "Art. 105, II, “a”, “b” e “c”, CRFB/88",
      "Arts. 1027 e 1028 do CPC",
      "(tutela) art. 995, parágrafo único, do CPC"
    ],
    itens: [
      "1ª Página - Peça de Interposição: Endereçamento",
      "1ª Página - Peça de Interposição: Qualificação",
      "1ª Página - Peça de Interposição: Fechamento",
      "2ª Página e seguintes - Peça de Razões: Endereçamento e menção ao Recorrente e ao Recorrido",
      "2ª Página e seguintes - Peça de Razões: Tempestividade",
      "2ª Página e seguintes - Peça de Razões: Cabimento",
      "2ª Página e seguintes - Peça de Razões: Preparo (se não tiver sido deferida a gratuidade de justiça anteriormente e não for o caso de pedir neste momento)",
      "2ª Página e seguintes - Peça de Razões: Fatos",
      "2ª Página e seguintes - Peça de Razões: Tutela de urgência, se for o caso (art. 995, parágrafo único do CPC)",
      "2ª Página e seguintes - Peça de Razões: Razões para Reforma ou Fundamentos Jurídicos",
      "2ª Página e seguintes - Peça de Razões: Pedidos",
      "2ª Página e seguintes - Peça de Razões: Fechamento"
    ]
  },
  "RECURSO EXTRAORDINARIO": {
    artigos: [
      "Art. 102, III, “a”, “b”, “c”, “d”, CRFB/88",
      "Arts. 1.029 e seguintes do CPC",
      "(tutela) art. 1.029, §5º, do CPC"
    ],
    itens: [
      "1ª Página - Peça de Interposição: Endereçamento",
      "1ª Página - Peça de Interposição: Qualificação",
      "1ª Página - Peça de Interposição: Fechamento",
      "2ª Página e seguintes - Peça de Razões: Endereçamento e menção ao Recorrente e ao Recorrido",
      "2ª Página e seguintes - Peça de Razões: Tempestividade",
      "2ª Página e seguintes - Peça de Razões: Cabimento",
      "2ª Página e seguintes - Peça de Razões: Preparo (se não tiver sido deferida a gratuidade de justiça anteriormente e não for o caso de pedir neste momento)",
      "2ª Página e seguintes - Peça de Razões: Prequestionamento",
      "2ª Página e seguintes - Peça de Razões: Repercussão Geral",
      "2ª Página e seguintes - Peça de Razões: Fatos",
      "2ª Página e seguintes - Peça de Razões: Tutela de urgência, se for o caso (art. 1.029, §5º, do CPC)",
      "2ª Página e seguintes - Peça de Razões: Razões para Reforma ou Fundamentos Jurídicos",
      "2ª Página e seguintes - Peça de Razões: Pedidos",
      "2ª Página e seguintes - Peça de Razões: Fechamento"
    ]
  },
  ADI: {
    artigos: [
      "Art. 102, I, “a”, CRFB/88",
      "Lei 9.868/99",
      "(cautelar) art. 10 da Lei 9.868/99"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação do autor e menção ao objeto da ação",
      "3. Objeto da ação",
      "4. Legitimidade ativa (mencionar a pertinência temática e o preenchimento de outros requisitos, a depender do leg. ativo)",
      "5. Tutela de urgência, se for o caso (cautelar – art. 10 da Lei 9.868/99)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos",
      "8. Valor da Causa",
      "9. Fechamento"
    ]
  },
  ADC: {
    artigos: [
      "Art. 102, I, “a”, CRFB/88",
      "Lei 9.868/99",
      "(cautelar) art. 21 da Lei 9.868/99"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação do autor e menção ao objeto da ação",
      "3. Objeto da ação",
      "4. Legitimidade ativa (mencionar a pertinência temática e o preenchimento de outros requisitos, a depender do leg. ativo)",
      "5 - Relevante controvérsia constitucional",
      "6. Tutela de urgência, se for o caso (cautelar – art. 21, Lei n. 9.868/99)",
      "7. Fundamentos Jurídicos/Do Direito",
      "8. Pedidos",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  ADO: {
    artigos: [
      "Art. 103, §2º, CRFB/88",
      "Lei 9.868/99",
      "(cautelar) art. 12-F da Lei 9.868/99"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação do Autor e menção à falta de norma regulamentadora do dispositivo constitucional",
      "3. Omissão inconstitucional",
      "4. Legitimidade ativa (mencionar a pertinência temática e o preenchimento de outros requisitos, a depender do leg. ativo)",
      "5. Tutela de urgência, se for o caso (cautelar – art. 12-F da Lei 9.868/99)",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Jurisprudência do STF sobre a omissão inconstitucional",
      "8. Pedidos",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  ADPF: {
    artigos: [
      "Art. 102, §1º, CRFB/88",
      "Lei 9.882/99",
      "(cautelar) art. 5º, §3º, Lei 9.882/99"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação do autor e menção ao objeto da ação",
      "3. Objeto da ação",
      "4. Legitimidade ativa (mencionar a pertinência temática e o preenchimento de outros requisitos, a depender do leg. ativo)",
      "5. Tutela de urgência, se for o caso (cautelar – art. 5º, §3º, da Lei 9.882/99)",
      "6. Cabimento da ADPF (tratar da natureza residual da ação)",
      "7. Preceitos Fundamentais Violados",
      "8. Pedidos",
      "9. Valor da Causa",
      "10. Fechamento"
    ]
  },
  RECLAMACAO: {
    artigos: [
      "Art. 102, I, “l”, CRFB/88",
      "Art. 103-A, §3º, CRFB/88",
      "Art. 105, I, “f”, CRFB/88",
      "Arts. 988 a 993 do CPC",
      "Lei 11.417/06"
    ],
    itens: [
      "1. Endereçamento",
      "2. Qualificação do Reclamante e menção ao objeto da RCL",
      "3. Objeto da reclamação",
      "4. Legitimidade ativa e passiva",
      "5. Tutela de urgência/evidência, se for o caso",
      "6. Fundamentos Jurídicos/Do Direito",
      "7. Pedidos",
      "8. Valor da Causa",
      "9. Fechamento"
    ]
  }
};

const ACHIEVEMENTS = {
  firstDay: "Primeiro dia",
  streak3: "Streak 3 dias",
  hundred: "100 acertos",
  mastery: "Dominei uma peça"
};

const STORAGE_KEY = "oab_memoria_state_v1";
const pieceNames = Object.keys(PECAS);
const allArtigos = pieceNames.flatMap((p) => PECAS[p].artigos.map((a) => ({ artigo: a, piece: p })));
const allItens = pieceNames.flatMap((p) => PECAS[p].itens.map((i) => ({ item: i, piece: p })));

const state = {
  selectedMode: null,
  selectedPiece: "ALEATORIA",
  timerEnabled: true,
  currentQuestion: null,
  startTime: 0,
  orderRemaining: 60,
  intervalId: null,
  survival: { active: false, qIndex: 0, total: 10, mistakes: 0 },
  soundMuted: false,
  stats: loadStats()
};

const els = {
  screens: {
    home: document.getElementById("homeScreen"),
    game: document.getElementById("gameScreen"),
    progress: document.getElementById("progressScreen")
  },
  modeButtons: [...document.querySelectorAll(".mode-btn")],
  pieceSelect: document.getElementById("pieceSelect"),
  timerToggle: document.getElementById("timerToggle"),
  quickStats: document.getElementById("quickStats"),
  gameTitle: document.getElementById("gameTitle"),
  timer: document.getElementById("timer"),
  prompt: document.getElementById("questionPrompt"),
  questionArea: document.getElementById("questionArea"),
  feedback: document.getElementById("feedback"),
  btnCheck: document.getElementById("btnCheck"),
  btnNext: document.getElementById("btnNext"),
  btnHome: document.getElementById("btnHome"),
  btnProgress: document.getElementById("btnProgress"),
  btnMute: document.getElementById("btnMute"),
  progressSummary: document.getElementById("progressSummary"),
  masteryTable: document.getElementById("masteryTable"),
  achievementList: document.getElementById("achievementList")
};

init();

function init() {
  populatePieceSelect();
  bindEvents();
  renderQuickStats();
  renderProgress();
  showScreen("home");
}

function populatePieceSelect() {
  const options = ["ALEATORIA", ...pieceNames];
  els.pieceSelect.innerHTML = options.map((p) => `<option value="${p}">${p === "ALEATORIA" ? "Aleatória" : p}</option>`).join("");
}

function bindEvents() {
  els.modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedMode = btn.dataset.mode;
      els.modeButtons.forEach((b) => b.classList.toggle("selected", b === btn));
      startMode();
    });
  });

  els.pieceSelect.addEventListener("change", (e) => {
    state.selectedPiece = e.target.value;
  });
  els.timerToggle.addEventListener("change", (e) => {
    state.timerEnabled = e.target.checked;
  });

  els.btnCheck.addEventListener("click", () => checkAnswer());
  els.btnNext.addEventListener("click", () => nextQuestion());

  els.btnHome.addEventListener("click", () => showScreen("home"));
  els.btnProgress.addEventListener("click", () => {
    renderProgress();
    showScreen("progress");
  });
  els.btnMute.addEventListener("click", () => {
    state.soundMuted = !state.soundMuted;
    els.btnMute.textContent = state.soundMuted ? "🔇 Mudo" : "🔊 Som";
  });
}

function startMode() {
  state.survival = { active: state.selectedMode === "survival", qIndex: 0, total: 10, mistakes: 0 };
  nextQuestion();
  showScreen("game");
}

function nextQuestion() {
  clearFeedback();
  stopTimer();

  if (state.survival.active && state.survival.qIndex >= state.survival.total) {
    els.prompt.textContent = `Sobrevivência finalizada! Acertos: ${state.survival.qIndex - state.survival.mistakes}/${state.survival.total}`;
    els.questionArea.innerHTML = "";
    return;
  }

  if (state.survival.active) state.survival.qIndex += 1;

  const mode = state.survival.active ? randomFrom(["ordem", "lacuna", "artigoPeca", "pecaArtigo"]) : state.selectedMode;
  const piece = resolvePiece();

  state.currentQuestion = buildQuestion(mode, piece);
  state.startTime = Date.now();
  renderQuestion();

  if (mode === "ordem" && state.timerEnabled) {
    state.orderRemaining = 60;
    tickTimer();
    state.intervalId = setInterval(tickTimer, 1000);
  } else {
    els.timer.textContent = "";
  }
}

function resolvePiece() {
  return state.selectedPiece === "ALEATORIA" ? randomFrom(pieceNames) : state.selectedPiece;
}

function buildQuestion(mode, piece) {
  if (mode === "ordem") {
    const correct = PECAS[piece].itens;
    return { mode, piece, correct, shuffled: shuffle([...correct]), checked: false };
  }

  if (mode === "lacuna") {
    const itens = PECAS[piece].itens;
    const idx = rand(0, itens.length - 1);
    const correct = itens[idx];
    const display = [...itens];
    display[idx] = "_____";
    const distractors = sample(allItens.filter((x) => x.item !== correct && x.piece !== piece).map((x) => x.item), 3);
    return { mode, piece, display, correct, options: shuffle([correct, ...distractors]), checked: false };
  }

  if (mode === "artigoPeca") {
    const choice = randomFrom(allArtigos);
    const correct = choice.piece;
    const others = sample(pieceNames.filter((p) => p !== correct), 5);
    return { mode, piece: correct, artigo: choice.artigo, correct, options: shuffle([correct, ...others]), checked: false };
  }

  const artigo = randomFrom(PECAS[piece].artigos);
  const others = sample(allArtigos.filter((a) => a.artigo !== artigo).map((a) => a.artigo), 5);
  return { mode: "pecaArtigo", piece, correct: artigo, options: shuffle([artigo, ...others]), checked: false };
}

function renderQuestion() {
  const q = state.currentQuestion;
  els.gameTitle.textContent = modeLabel(q.mode) + (state.survival.active ? ` • Sobrevivência (${state.survival.qIndex}/${state.survival.total})` : "");

  if (q.mode === "ordem") {
    els.prompt.textContent = `Organize os itens da peça: ${q.piece}`;
    els.questionArea.innerHTML = `<ul class="drop-list" id="dropList">${q.shuffled.map((it) => `<li class="drop-item" draggable="true">${it}</li>`).join("")}</ul>`;
    activateDragDrop();
  } else if (q.mode === "lacuna") {
    els.prompt.textContent = `Complete a lacuna da peça: ${q.piece}`;
    els.questionArea.innerHTML = `
      <ol>${q.display.map((it) => `<li>${it}</li>`).join("")}</ol>
      <div class="option-list">${q.options.map((o) => `<button class="option-btn" data-value="${escapeAttr(o)}">${o}</button>`).join("")}</div>
    `;
    bindOptionButtons();
  } else if (q.mode === "artigoPeca") {
    els.prompt.textContent = `Qual peça corresponde ao artigo: "${q.artigo}" ?`;
    els.questionArea.innerHTML = `<div class="option-list">${q.options.map((o) => `<button class="option-btn" data-value="${escapeAttr(o)}">${o}</button>`).join("")}</div>`;
    bindOptionButtons();
  } else {
    els.prompt.textContent = `Selecione o artigo correto para a peça: ${q.piece}`;
    els.questionArea.innerHTML = `<div class="option-list">${q.options.map((o) => `<button class="option-btn" data-value="${escapeAttr(o)}">${o}</button>`).join("")}</div>`;
    bindOptionButtons();
  }
}

function bindOptionButtons() {
  els.questionArea.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      els.questionArea.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.currentQuestion.userAnswer = btn.dataset.value;
      checkAnswer();
    });
  });
}

function activateDragDrop() {
  const list = document.getElementById("dropList");
  let dragged = null;

  list.querySelectorAll(".drop-item").forEach((item) => {
    item.addEventListener("dragstart", () => {
      dragged = item;
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
    item.addEventListener("dragover", (e) => e.preventDefault());
    item.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragged || dragged === item) return;
      const items = [...list.children];
      const draggedIndex = items.indexOf(dragged);
      const targetIndex = items.indexOf(item);
      if (draggedIndex < targetIndex) list.insertBefore(dragged, item.nextSibling);
      else list.insertBefore(dragged, item);
    });
  });
}

function checkAnswer() {
  const q = state.currentQuestion;
  if (!q || q.checked) return;

  if (q.mode === "ordem") {
    const answer = [...document.querySelectorAll("#dropList .drop-item")].map((li) => li.textContent);
    q.userAnswer = answer;
  }

  const elapsedSec = (Date.now() - state.startTime) / 1000;
  const isCorrect = validate(q);
  q.checked = true;

  updateStats(q.piece, isCorrect, elapsedSec);
  if (state.survival.active && !isCorrect) {
    state.survival.mistakes += 1;
    state.stats.combo = 1;
    state.stats.xp = Math.max(0, state.stats.xp - 10);
  }

  showFeedback(isCorrect, q.correct);
  playTone(isCorrect);

  saveStats();
  renderQuickStats();
  renderProgress();
}

function validate(q) {
  if (q.mode === "ordem") return JSON.stringify(q.userAnswer) === JSON.stringify(q.correct);
  return q.userAnswer === q.correct;
}

function updateStats(piece, correct, elapsedSec) {
  touchDailyPractice();
  const s = state.stats;
  s.totalAnswers += 1;
  s.totalResponseTime += elapsedSec;
  s.responseCount += 1;

  if (!s.pieceHistory[piece]) s.pieceHistory[piece] = [];
  s.pieceHistory[piece].push(correct ? 1 : 0);
  if (s.pieceHistory[piece].length > 20) s.pieceHistory[piece].shift();

  if (correct) {
    s.totalCorrect += 1;
    s.combo = Math.min(3, +(s.combo + 0.25).toFixed(2));
    const fastBonus = elapsedSec < 5 ? 5 : 0;
    const gain = Math.round((10 + fastBonus) * s.combo);
    s.xp += gain;
  } else {
    s.combo = 1;
  }

  s.level = Math.floor(s.xp / 200) + 1;
  updateAchievements();
}

function touchDailyPractice() {
  const today = new Date().toISOString().slice(0, 10);
  const s = state.stats;
  if (!s.lastPracticeDate) {
    s.streak = 1;
  } else if (s.lastPracticeDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    s.streak = s.lastPracticeDate === yesterday ? s.streak + 1 : 1;
  }
  s.lastPracticeDate = today;
}

function updateAchievements() {
  const s = state.stats;
  if (s.lastPracticeDate) s.achievements.firstDay = true;
  if (s.streak >= 3) s.achievements.streak3 = true;
  if (s.totalCorrect >= 100) s.achievements.hundred = true;

  const hasMastery = pieceNames.some((piece) => getMastery(piece) >= 90);
  if (hasMastery) s.achievements.mastery = true;
}

function getMastery(piece) {
  const arr = state.stats.pieceHistory[piece] || [];
  if (!arr.length) return 0;
  const score = arr.reduce((a, b) => a + b, 0);
  return Math.round((score / arr.length) * 100);
}

function showFeedback(ok, correctText) {
  els.feedback.className = `feedback ${ok ? "ok" : "bad"}`;
  els.feedback.textContent = ok ? "✅ Acertou!" : `❌ Errou. Correto: ${Array.isArray(correctText) ? "ordem original da peça" : correctText}`;
}

function clearFeedback() {
  els.feedback.className = "feedback";
  els.feedback.textContent = "";
}

function showScreen(name) {
  Object.entries(els.screens).forEach(([key, scr]) => scr.classList.toggle("active", key === name));
}

function renderQuickStats() {
  const s = state.stats;
  const acc = s.totalAnswers ? Math.round((s.totalCorrect / s.totalAnswers) * 100) : 0;
  els.quickStats.innerHTML = `XP: <b>${s.xp}</b> • Nível: <b>${s.level}</b> • Streak: <b>${s.streak}</b> • Combo: <b>${s.combo.toFixed(2)}x</b> • Acerto: <b>${acc}%</b>`;
}

function renderProgress() {
  const s = state.stats;
  const avgTime = s.responseCount ? (s.totalResponseTime / s.responseCount).toFixed(2) : "0.00";
  const accuracy = s.totalAnswers ? Math.round((s.totalCorrect / s.totalAnswers) * 100) : 0;

  els.progressSummary.innerHTML = [
    ["XP total", s.xp],
    ["Nível", s.level],
    ["Streak diário", s.streak],
    ["Acertos", s.totalCorrect],
    ["Taxa de acerto", `${accuracy}%`],
    ["Tempo médio", `${avgTime}s`]
  ].map(([k, v]) => `<div class="metric"><small>${k}</small><div><b>${v}</b></div></div>`).join("");

  els.masteryTable.innerHTML = pieceNames.map((p) => `<tr><td>${p}</td><td>${getMastery(p)}%</td></tr>`).join("");

  els.achievementList.innerHTML = Object.entries(ACHIEVEMENTS)
    .map(([key, label]) => `<li class="${s.achievements[key] ? "" : "achievement-locked"}">${s.achievements[key] ? "🏆" : "🔒"} ${label}</li>`)
    .join("");
}

function tickTimer() {
  els.timer.textContent = `⏱️ ${state.orderRemaining}s`;
  state.orderRemaining -= 1;
  if (state.orderRemaining < 0) {
    stopTimer();
    checkAnswer();
  }
}

function stopTimer() {
  if (state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  }
}

function loadStats() {
  const base = {
    xp: 0,
    level: 1,
    streak: 0,
    lastPracticeDate: null,
    totalCorrect: 0,
    totalAnswers: 0,
    totalResponseTime: 0,
    responseCount: 0,
    combo: 1,
    pieceHistory: {},
    achievements: { firstDay: false, streak3: false, hundred: false, mastery: false }
  };
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return base;
  try {
    return { ...base, ...JSON.parse(raw) };
  } catch {
    return base;
  }
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function sample(arr, n) {
  return shuffle([...new Set(arr)]).slice(0, n);
}
function escapeAttr(str) {
  return str.replace(/"/g, "&quot;");
}
function modeLabel(mode) {
  return {
    ordem: "Ordem Relâmpago",
    lacuna: "Preencha o Buraco",
    artigoPeca: "Artigo → Peça",
    pecaArtigo: "Peça → Artigo",
    survival: "Sobrevivência"
  }[mode] || mode;
}

function playTone(ok) {
  if (state.soundMuted) return;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = ok ? 620 : 240;
  gain.gain.value = 0.03;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}
