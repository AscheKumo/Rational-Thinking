import { ENTRIES } from "../../data/entries.js";
import { QUIZZES } from "../../data/quizzes.js";

const LS_THEME = "cma_theme";
const LS_PINS = "cma_pins";

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function applyTheme(theme){
  const root = document.documentElement;
  if(theme === "light") root.setAttribute("data-theme","light");
  else if(theme === "dark") root.removeAttribute("data-theme"); // default is dark
  else root.removeAttribute("data-theme");
}

function initTheme(){
  const saved = localStorage.getItem(LS_THEME);
  if(saved){
    applyTheme(saved);
    return;
  }
  // Respect system preference
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  if(prefersLight) applyTheme("light");
}

function toggleTheme(){
  const root = document.documentElement;
  const isLight = root.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  localStorage.setItem(LS_THEME, next);
  applyTheme(next);
}

function initNav(){
  const drawer = qs("#sidedrawer");
  const toggle = qs("#navToggle");
  const backdrop = qs("#backdrop");
  if(!drawer || !toggle || !backdrop) return;

  const open = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden","false");
    toggle.setAttribute("aria-expanded","true");
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden","true");
    toggle.setAttribute("aria-expanded","false");
    backdrop.hidden = true;
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    drawer.classList.contains("is-open") ? close() : open();
  });
  backdrop.addEventListener("click", close);
  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") close();
  });
}

function setHomeKPIs(){
  const k1 = qs('[data-kpi="entries"]');
  const k2 = qs('[data-kpi="tags"]');
  const k3 = qs('[data-kpi="questions"]');
  if(!k1 || !k2 || !k3) return;

  const tags = new Set();
  ENTRIES.forEach(e => (e.tags||[]).forEach(t => tags.add(t)));
  const questionCount = Object.values(QUIZZES).reduce((acc, arr) => acc + arr.length, 0);

  k1.textContent = String(ENTRIES.length);
  k2.textContent = String(tags.size);
  k3.textContent = String(questionCount);
}

function getPins(){
  try{
    const raw = localStorage.getItem(LS_PINS);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  }catch{
    return [];
  }
}

function setPins(pins){
  localStorage.setItem(LS_PINS, JSON.stringify([...new Set(pins)]));
}

function initThemeToggle(){
  const btn = qs("#themeToggle");
  if(!btn) return;
  btn.addEventListener("click", toggleTheme);
}

function triageSuggestions({ situation, risk }){
  // This is intentionally opinionated: quick triage should recommend checks, not a worldview.
  const want = [];

  const push = (id) => want.push(id);

  if(situation === "arg"){
    push("tool_steelman");
    push("fallacy_strawman");
    push("fallacy_equivocation");
    push("fallacy_motte_bailey");
    push("tool_definition_lock");
    push("razor_grice");
  }else if(situation === "belief"){
    push("tool_change_mind");
    push("razor_newton_fls");
    push("razor_sagan");
    push("bias_confirmation");
    push("tool_base_rates");
    push("tool_falsifiability_check");
  }else if(situation === "conflict"){
    push("tool_double_crux");
    push("tool_separate_facts_values");
    push("fallacy_goalposts");
    push("fallacy_gish_gallop");
    push("tool_boundaries");
  }else if(situation === "emotion"){
    push("bias_affect_heuristic");
    push("bias_overconfidence");
    push("tool_pause_label");
    push("tool_precommit");
    push("tool_calibration");
  }else if(situation === "plan"){
    push("bias_planning_fallacy");
    push("bias_optimism");
    push("tool_premortem");
    push("tool_reference_class");
    push("tool_fermi");
  }else if(situation === "info"){
    push("bias_availability");
    push("bias_negativity");
    push("tool_source_hygiene");
    push("tool_rate_limits");
    push("fallacy_appeal_to_emotion");
  }

  if(risk === "high"){
    // High risk: more rigor
    push("tool_red_team");
    push("tool_check_incentives");
    push("tool_seek_disconfirming");
  }

  // Deduplicate while preserving order
  const seen = new Set();
  const ids = want.filter(id => (seen.has(id) ? false : (seen.add(id), true)));
  const map = new Map(ENTRIES.map(e => [e.id, e]));
  return ids.map(id => map.get(id)).filter(Boolean).slice(0, 6);
}

function initTriage(){
  const box = qs("#triageBox");
  if(!box) return;

  const situationSel = qs("#triageSituation");
  const out = qs("#triageOut");
  const run = qs("#triageRun");

  let risk = "low";
  qsa(".seg__btn", box).forEach(btn => {
    btn.addEventListener("click", () => {
      qsa(".seg__btn", box).forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      risk = btn.dataset.risk;
    });
  });

  run.addEventListener("click", () => {
    const situation = situationSel.value;
    const recs = triageSuggestions({ situation, risk });

    out.innerHTML = "";
    if(!recs.length){
      out.innerHTML = `<div class="triageRec"><div class="triageRec__t">No suggestions</div><div class="triageRec__d">Try a different category.</div></div>`;
      return;
    }

    recs.forEach(e => {
      const div = document.createElement("div");
      div.className = "triageRec";
      div.innerHTML = `
        <div class="triageRec__t">${escapeHtml(e.title)}</div>
        <div class="triageRec__d">${escapeHtml(e.one_liner)}</div>
        <div class="explain__meta">
          <a class="smallbtn" href="./library.html#${encodeURIComponent(bucketAnchor(e.type))}" title="Open Library">Open section</a>
          <button class="smallbtn" data-pin="${escapeHtml(e.id)}" type="button">Pin</button>
        </div>
      `;
      out.appendChild(div);
    });

    qsa("[data-pin]", out).forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.pin;
        const pins = getPins();
        if(pins.includes(id)){
          btn.textContent = "Pinned";
          btn.classList.add("is-on");
          return;
        }
        pins.push(id);
        setPins(pins);
        btn.textContent = "Pinned";
        btn.classList.add("is-on");
      });
    });
  });
}

function bucketAnchor(type){
  if(type === "razor") return "razors";
  if(type === "fallacy") return "fallacies";
  if(type === "bias") return "biases";
  return "tools";
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

initTheme();
initThemeToggle();
initNav();
setHomeKPIs();
initTriage();

// Export small helpers for other modules
export { getPins, setPins, escapeHtml, bucketAnchor };
