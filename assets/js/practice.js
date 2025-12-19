import { ENTRIES } from "../../data/entries.js";
import { QUIZZES } from "../../data/quizzes.js";
import { getPins, setPins, escapeHtml } from "./app.js";
import "./app.js";

const LS_STATS = "cma_stats";

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

const byId = new Map(ENTRIES.map(e => [e.id, e]));

function normText(s){
  return String(s || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const entryByName = (() => {
  const m = new Map();
  for(const e of ENTRIES){
    m.set(normText(e.title), e);
    for(const a of (e.aliases || [])) m.set(normText(a), e);
  }
  return m;
})();

function findConceptForChoiceText(choiceText){
  const n = normText(choiceText);
  if(!n) return null;

  // Prefer exact title/alias matches.
  const direct = entryByName.get(n);
  if(direct) return direct;

  // Then try substring matches (helps when choices are like “Use Occam’s Razor”).
  for(const [name, entry] of entryByName.entries()){
    if(name && (n === name || n.includes(name))) return entry;
  }
  return null;
}

function summarizeEntry(e){
  const one = typeof e.one_liner === "string" ? e.one_liner.trim() : "";
  const def = typeof e.definition === "string" ? e.definition.trim() : "";
  const when = typeof e.when_it_shows_up === "string" ? e.when_it_shows_up.trim() : "";

  const parts = [];
  if(one) parts.push(one);
  if(def && def !== one) parts.push(def);
  if(when) parts.push(`Shows up: ${when}`);

  // Keep it fast and scannable.
  return parts.slice(0, 2);
}

function loadStats(){
  try{
    const raw = localStorage.getItem(LS_STATS);
    const obj = raw ? JSON.parse(raw) : null;
    return obj && typeof obj === "object" ? obj : { sessions:0, answered:0, correct:0, streak:0 };
  }catch{
    return { sessions:0, answered:0, correct:0, streak:0 };
  }
}
function saveStats(s){ localStorage.setItem(LS_STATS, JSON.stringify(s)); }

function renderStats(){
  const s = loadStats();
  const el = qs("#stats");
  if(!el) return;

  const acc = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;

  el.innerHTML = `
    <div class="statrow"><span>Sessions</span><strong>${s.sessions}</strong></div>
    <div class="statrow"><span>Answered</span><strong>${s.answered}</strong></div>
    <div class="statrow"><span>Accuracy</span><strong>${acc}%</strong></div>
    <div class="statrow"><span>Current streak</span><strong>${s.streak}</strong></div>
  `;
}

function pickQuestions({ mode, length, difficulty }){
  const pool = mode === "mixed"
    ? [...QUIZZES.fallacy, ...QUIZZES.bias, ...QUIZZES.tool]
    : [...(QUIZZES[mode] || [])];

  // Difficulty filter: allow items with difficulty <= selected, then sample.
  const filtered = pool.filter(q => (q.difficulty ?? 2) <= difficulty);

  // Shuffle
  const arr = [...filtered];
  for(let i=arr.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, length).map(shuffleQuestionChoices);
}

function shuffleQuestionChoices(q){
  const choices = Array.isArray(q.choices) ? q.choices : [];
  const answer = Number.isInteger(q.answer) ? q.answer : 0;

  // Build an index permutation and shuffle it (Fisher–Yates)
  const order = choices.map((_, i) => i);
  for(let i=order.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const newChoices = order.map(i => choices[i]);
  const newAnswer = Math.max(0, order.indexOf(answer));

  return { ...q, choices: newChoices, answer: newAnswer };
}

function renderQuestion(q, index, total){
  const box = qs("#question");
  const scorePill = qs("#scorePill");

  const related = (q.related_ids || [])
    .map(id => byId.get(id))
    .filter(Boolean);

  const defaultConcept = related[0] || null;

  box.innerHTML = `
    <div class="muted">Question ${index+1} / ${total}</div>
    <p class="question__prompt">${escapeHtml(q.prompt)}</p>

    <div class="choices">
      ${q.choices.map((c,i)=>{
        const concept = findConceptForChoiceText(c) || defaultConcept;
        const conceptLines = concept ? summarizeEntry(concept) : [];
        const cid = `concept-${index}-${i}`;
        return `
          <div class="choiceWrap">
            <div class="choiceRow">
              <button class="choice" type="button" data-i="${i}">
                ${escapeHtml(c)}
              </button>
              <button class="smallbtn choiceConcept" type="button" data-target="${cid}" ${concept ? "" : "disabled"}>
                Reveal Concept
              </button>
            </div>
            ${concept ? `
              <div class="conceptCard conceptCard--inline" id="${cid}" hidden>
                <div class="conceptCard__top">
                  <div class="conceptCard__k">Concept</div>
                  <a class="smallbtn" href="./library.html#${escapeHtml(concept.id)}">Open in Library</a>
                </div>
                <div class="conceptCard__title">${escapeHtml(concept.title)}</div>
                ${conceptLines.map(line => `<div class="conceptCard__line">${escapeHtml(line)}</div>`).join("")}
              </div>
            ` : ""}
          </div>
        `;
      }).join("")}
    </div>

    <div class="explain" id="explain" hidden></div>
  `;

  const explain = qs("#explain", box);

  qsa(".choiceConcept", box).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.target;
      const card = id ? qs(`#${CSS.escape(id)}`, box) : null;
      if(!card) return;
      card.hidden = !card.hidden;
      btn.textContent = card.hidden ? "Reveal Concept" : "Hide Concept";
    });
  });

  const onPick = (i) => {
    qsa(".choice", box).forEach(b => b.disabled = true);

    const correct = i === q.answer;
    const choiceBtns = qsa(".choice", box);
    choiceBtns[i].classList.add(correct ? "is-correct" : "is-wrong");
    choiceBtns[q.answer].classList.add("is-correct");

    // Session score + missed concepts
    session.answered += 1;
    if(correct){
      session.correct += 1;
    }else{
      const chosenText = q.choices?.[i] ?? "";
      const correctText = q.choices?.[q.answer] ?? "";
      const chosenEntry = findConceptForChoiceText(chosenText);
      const correctEntry = findConceptForChoiceText(correctText);

      session.misses.push({
        prompt: q.prompt,
        chosenText,
        correctText,
        chosenId: chosenEntry?.id || null,
        correctId: correctEntry?.id || null
      });
    }

    // Stats
    const s = loadStats();
    s.answered += 1;
    if(correct){
      s.correct += 1;
      s.streak = (s.streak || 0) + 1;
    }else{
      s.streak = 0;
    }
    saveStats(s);

    scorePill.textContent = `Score: ${session.correct}`;

    // Explanation + links
    explain.hidden = false;

    // Auto-suggest pinning on wrong answers (gentle but effective)
    const pins = getPins();
    const pinTargets = related.slice(0,2).filter(e => !pins.includes(e.id));

    explain.innerHTML = `
      <div><strong>${correct ? "Correct." : "Not quite."}</strong> ${escapeHtml(q.explanation)}</div>
      ${related.length ? `
        <div class="explain__meta">
          ${related.map(e => `<a class="smallbtn" href="./library.html#${escapeHtml(e.id)}">${escapeHtml(e.title)}</a>`).join("")}
        </div>` : ""}
      ${pinTargets.length ? `
        <div class="explain__meta">
          ${pinTargets.map(e => `<button class="smallbtn" data-pin="${escapeHtml(e.id)}" type="button">Pin “${escapeHtml(e.title)}”</button>`).join("")}
        </div>` : ""}
      <div class="explain__meta">
        <button class="btn btn--small" id="next" type="button">Next</button>
      </div>
    `;

    qsa("[data-pin]", explain).forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.pin;
        const p = getPins();
        if(!p.includes(id)){
          setPins([...p, id]);
          btn.textContent = "Pinned";
          btn.classList.add("is-on");
        }
      });
    });

    qs("#next", explain).addEventListener("click", () => session.next());
  };

  qsa(".choice", box).forEach(btn => {
    btn.addEventListener("click", () => onPick(Number(btn.dataset.i)));
  });
}

let session = null;

function startSession(){
  const mode = qs("#mode").value;
  const length = Number(qs("#length").value);
  const difficulty = Number(qs("#difficulty").value);

  const questions = pickQuestions({ mode, length, difficulty });
  if(!questions.length){
    alert("No questions matched your settings. Increase difficulty or use Mixed.");
    return;
  }

  const s = loadStats();
  s.sessions += 1;
  saveStats(s);

  session = {
    mode, length: questions.length, difficulty,
    questions,
    idx: 0,
    correct: 0,
    answered: 0,
    misses: [],
    ended: false,
    next(){
      if(this.ended) return;
      this.idx += 1;
      if(this.idx >= this.questions.length){
        endSession(true);
        return;
      }
      render();
    }
  };

  qs("#session").hidden = false;
  qs("#scorePill").textContent = "Score: 0";
  qs("#sessionMeta").textContent = `Mode: ${mode} • Length: ${questions.length} • Difficulty: ${difficulty}`;

  renderStats();
  render();
  window.scrollTo({ top: 0, behavior:"smooth" });
}

function render(){
  const q = session.questions[session.idx];
  renderQuestion(q, session.idx, session.questions.length);
}

function endSession(completed){
  if(!session) return;
  session.ended = true;

  const s = loadStats();
  const acc = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
  const sessAnswered = Number(session.answered || 0);
  const sessCorrect = Number(session.correct || 0);
  const sessAcc = sessAnswered ? Math.round((sessCorrect / sessAnswered) * 100) : 0;
  renderStats();

  const box = qs("#question");

  const missRows = Array.isArray(session.misses) ? session.misses : [];
  const conceptIds = new Set();
  for(const m of missRows){
    if(m?.chosenId) conceptIds.add(m.chosenId);
    if(m?.correctId) conceptIds.add(m.correctId);
  }
  const missedIds = [...conceptIds].filter(id => byId.has(id));
  const pins = getPins();
  const missedUnpinned = missedIds.filter(id => !pins.includes(id));

  box.innerHTML = `
    <h3>${completed ? "Session complete" : "Session ended early"}</h3>
    <p class="lead">Session score: <strong>${sessCorrect}</strong> / <strong>${sessAnswered}</strong> • Accuracy: <strong>${sessAcc}%</strong></p>
    <p class="muted">Local lifetime accuracy: <strong>${acc}%</strong></p>
    <p class="muted">
      Best practice: pin the 1–3 concepts you missed and revisit them tomorrow. Recognition is built by spaced repetition.
    </p>

    ${missRows.length ? `
      <details class="missedDetails">
        <summary>View missed concepts (${missRows.length})</summary>

        <div class="missedBlock">
          ${missRows.map((m, idx) => `
            <div class="missedQ">
              <div class="missedQ__prompt"><strong>Miss ${idx+1}:</strong> ${escapeHtml(m.prompt)}</div>
              <div class="missedQ__answers">
                <div class="missedQ__a"><span class="muted">Your answer:</span> ${escapeHtml(m.chosenText || "")}</div>
                <div class="missedQ__a"><span class="muted">Correct answer:</span> ${escapeHtml(m.correctText || "")}</div>
              </div>
            </div>
          `).join("")}
        </div>

        ${missedIds.length ? `
          <div class="missedPins">
            <div class="muted">Pin concepts (deduped):</div>
            <div class="explain__meta">
              ${missedIds.map(id => {
                const e = byId.get(id);
                if(!e) return "";
                const already = pins.includes(id);
                return `
                  <button class="smallbtn" data-pin="${escapeHtml(id)}" type="button" ${already ? "disabled" : ""}>
                    ${already ? "Pinned" : `Pin “${escapeHtml(e.title)}”`}
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}
      </details>
    ` : ""}

    <div class="card__foot">
      <a class="btn btn--small" href="./library.html">Review Library</a>
      <a class="btn btn--small btn--ghost" href="./toolkit.html">Open Toolkit</a>
      ${missedUnpinned.length ? `<button class="btn btn--small" id="pinMissed" type="button">Pin missed concepts (${missedUnpinned.length})</button>` : ""}
      <button class="btn btn--small" id="restart" type="button">Start another</button>
    </div>
  `;

  const pinMissedBtn = qs("#pinMissed", box);
  if(pinMissedBtn){
    pinMissedBtn.addEventListener("click", () => {
      const current = getPins();
      const merged = [...current];
      for(const id of missedUnpinned){
        if(!merged.includes(id)) merged.push(id);
      }
      setPins(merged);
      pinMissedBtn.textContent = `Pinned ${missedUnpinned.length}`;
      pinMissedBtn.disabled = true;
      pinMissedBtn.classList.add("is-on");
    });
  }

  qsa("[data-pin]", box).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.pin;
      if(!id) return;
      const p = getPins();
      if(!p.includes(id)){
        setPins([...p, id]);
      }
      btn.textContent = "Pinned";
      btn.disabled = true;
      btn.classList.add("is-on");
    });
  });

  qs("#restart").addEventListener("click", () => startSession());
}

function init(){
  renderStats();

  qs("#start").addEventListener("click", startSession);
  qs("#end").addEventListener("click", () => endSession(false));

  qs("#resetStats").addEventListener("click", () => {
    if(confirm("Reset local practice stats?")){
      localStorage.removeItem(LS_STATS);
      renderStats();
    }
  });
}

init();
