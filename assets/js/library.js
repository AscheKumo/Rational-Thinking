import { ENTRIES } from "../../data/entries.js";
import { getPins, setPins, escapeHtml, bucketAnchor } from "./app.js";

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

const state = {
  q: "",
  type: "all",
  sort: "relevance",
  tag: null
};

const allTags = (() => {
  const s = new Set();
  ENTRIES.forEach(e => (e.tags||[]).forEach(t => s.add(t)));
  return [...s].sort((a,b)=>a.localeCompare(b));
})();

const byId = new Map(ENTRIES.map(e => [e.id, e]));

function scoreEntry(e, q){
  if(!q) return 0;
  const needle = q.toLowerCase();
  const hay = [
    e.title,
    e.one_liner,
    e.definition,
    ...(e.aliases||[]),
    ...(e.tags||[])
  ].join(" ").toLowerCase();

  // Simple scoring: exact title match > prefix > contains
  let s = 0;
  if(e.title.toLowerCase() === needle) s += 50;
  if(e.title.toLowerCase().startsWith(needle)) s += 25;
  if(hay.includes(needle)) s += 10;

  // Boost tag matches
  if((e.tags||[]).some(t => t.toLowerCase() === needle)) s += 12;

  return s;
}

function matchesFilters(e){
  if(state.type !== "all" && e.type !== state.type) return false;
  if(state.tag && !(e.tags||[]).includes(state.tag)) return false;
  if(state.q){
    const needle = state.q.toLowerCase();
    const hay = [
      e.title,
      e.one_liner,
      e.definition,
      e.when_it_shows_up,
      ...(e.aliases||[]),
      ...(e.tags||[])
    ].join(" ").toLowerCase();
    if(!hay.includes(needle)) return false;
  }
  return true;
}

function sortEntries(list){
  if(state.sort === "alpha"){
    return [...list].sort((a,b)=>a.title.localeCompare(b.title));
  }
  if(state.sort === "type"){
    const order = { razor:0, fallacy:1, bias:2, tool:3 };
    return [...list].sort((a,b)=>{
      const d = (order[a.type] ?? 9) - (order[b.type] ?? 9);
      return d !== 0 ? d : a.title.localeCompare(b.title);
    });
  }
  // relevance
  const q = state.q;
  return [...list].sort((a,b)=>{
    const da = scoreEntry(a,q);
    const db = scoreEntry(b,q);
    return db - da || a.title.localeCompare(b.title);
  });
}

function badgeClass(type){
  if(type === "razor") return "badge--razor";
  if(type === "fallacy") return "badge--fallacy";
  if(type === "bias") return "badge--bias";
  return "badge--tool";
}

function renderCard(e){
  const pins = getPins();
  const pinned = pins.includes(e.id);

  const rel = (e.related_ids||[])
    .map(id => byId.get(id))
    .filter(Boolean)
    .slice(0, 6);

  const relHtml = rel.length
    ? `<div class="kv"><div class="kv__k">Related</div>
         <div class="kv__v">${rel.map(x => `<span class="tag">${escapeHtml(x.title)}</span>`).join(" ")}</div>
       </div>`
    : "";

  const tags = (e.tags||[]).slice(0, 10).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");

  return `
  <article class="cardItem" data-id="${escapeHtml(e.id)}">
    <div class="cardItem__top">
      <div>
        <span class="badge ${badgeClass(e.type)}">${escapeHtml(e.type)}</span>
        <h3>${escapeHtml(e.title)}</h3>
      </div>
      <button class="smallbtn ${pinned ? "is-on":""}" data-pin="${escapeHtml(e.id)}" type="button" aria-label="Pin to toolkit">
        ${pinned ? "Pinned" : "Pin"}
      </button>
    </div>

    <p>${escapeHtml(e.one_liner)}</p>

    <div class="tags">${tags}</div>

    <details class="entry">
      <summary>Open details</summary>
      <div class="entry__body">
        <div class="kv"><div class="kv__k">Definition</div><div class="kv__v">${escapeHtml(e.definition)}</div></div>
        ${e.when_it_shows_up ? `<div class="kv"><div class="kv__k">When it shows up</div><div class="kv__v">${escapeHtml(e.when_it_shows_up)}</div></div>` : ""}
        ${e.example_bad ? `<div class="kv"><div class="kv__k">Looks like</div><div class="kv__v">${escapeHtml(e.example_bad)}</div></div>` : ""}
        ${e.example_better ? `<div class="kv"><div class="kv__k">Better move</div><div class="kv__v">${escapeHtml(e.example_better)}</div></div>` : ""}

        ${e.counter_moves?.length ? `
          <div class="kv"><div class="kv__k">Counter-moves</div>
            <div class="kv__v"><ul class="bullets">${e.counter_moves.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
          </div>` : ""}

        ${e.questions_to_ask?.length ? `
          <div class="kv"><div class="kv__k">Questions to ask</div>
            <div class="kv__v"><ul class="bullets">${e.questions_to_ask.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
          </div>` : ""}

        ${relHtml}

        <div class="cardItem__actions">
          <a class="smallbtn" href="#${bucketAnchor(e.type)}" title="Jump to section">Section</a>
          <a class="smallbtn" href="./practice.html" title="Practice lab">Practice</a>
        </div>
      </div>
    </details>
  </article>`;
}

function renderTags(){
  const row = qs("#tagrow");
  if(!row) return;
  row.innerHTML = "";

  const make = (tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (state.tag === tag ? " is-active" : "");
    btn.textContent = tag;
    btn.addEventListener("click", () => {
      state.tag = (state.tag === tag) ? null : tag;
      renderAll();
      renderTags();
    });
    return btn;
  };

  // A few “high utility” tags first if they exist
  const priorities = [
    "epistemology","debate","statistics","incentives","social","emotion",
    "planning","learning","media","identity","uncertainty"
  ].filter(t => allTags.includes(t));

  const shown = new Set();
  priorities.forEach(t => { row.appendChild(make(t)); shown.add(t); });
  allTags.filter(t => !shown.has(t)).forEach(t => row.appendChild(make(t)));
}

function renderPinnedMini(){
  const box = qs("#pinnedMini");
  if(!box) return;
  const pins = getPins();
  const items = pins.map(id => byId.get(id)).filter(Boolean).slice(0, 8);

  if(!items.length){
    box.innerHTML = `<div class="miniItem"><div class="miniItem__title">Nothing pinned yet</div><div class="miniItem__meta">Use “Pin” on any entry.</div></div>`;
    return;
  }

  box.innerHTML = items.map(e => `
    <div class="miniItem">
      <div class="miniItem__top">
        <div class="miniItem__title">${escapeHtml(e.title)}</div>
        <span class="badge ${badgeClass(e.type)}">${escapeHtml(e.type)}</span>
      </div>
      <div class="miniItem__meta">${escapeHtml(e.one_liner)}</div>
    </div>
  `).join("");
}

function renderBucket(type, list){
  const container = qs(`.cards[data-bucket="${type}"]`);
  if(!container) return;
  container.innerHTML = list.map(renderCard).join("");

  // wire pin buttons inside bucket
  qsa("[data-pin]", container).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.pin;
      const pins = getPins();
      const has = pins.includes(id);
      const next = has ? pins.filter(x => x !== id) : [...pins, id];
      setPins(next);
      btn.textContent = has ? "Pin" : "Pinned";
      btn.classList.toggle("is-on", !has);
      renderPinnedMini();
    });
  });
}

function renderHint(filtered){
  const hint = qs("#resultsHint");
  if(!hint) return;
  const parts = [];
  if(state.q) parts.push(`search: “${escapeHtml(state.q)}”`);
  if(state.type !== "all") parts.push(`type: ${escapeHtml(state.type)}`);
  if(state.tag) parts.push(`tag: ${escapeHtml(state.tag)}`);

  hint.innerHTML = `<strong>${filtered.length}</strong> match${filtered.length===1?"":"es"}${parts.length?` • ${parts.join(" • ")}`:""}`;
}

function renderAll(){
  const filtered = ENTRIES.filter(matchesFilters);
  const sorted = sortEntries(filtered);

  renderBucket("razor", sorted.filter(e=>e.type==="razor"));
  renderBucket("fallacy", sorted.filter(e=>e.type==="fallacy"));
  renderBucket("bias", sorted.filter(e=>e.type==="bias"));
  renderBucket("tool", sorted.filter(e=>e.type==="tool"));

  renderPinnedMini();
  renderHint(sorted);
}

function initControls(){
  const q = qs("#q");
  const type = qs("#type");
  const sort = qs("#sort");
  const clear = qs("#clearFilters");

  if(q){
    q.addEventListener("input", () => {
      state.q = q.value.trim();
      renderAll();
    });
    window.addEventListener("keydown", (e) => {
      if(e.key === "/" && document.activeElement !== q){
        e.preventDefault();
        q.focus();
      }
    });
  }
  if(type){
    type.addEventListener("change", () => {
      state.type = type.value;
      renderAll();
    });
  }
  if(sort){
    sort.addEventListener("change", () => {
      state.sort = sort.value;
      renderAll();
    });
  }
  if(clear){
    clear.addEventListener("click", () => {
      state.q = "";
      state.type = "all";
      state.sort = "relevance";
      state.tag = null;
      if(q) q.value = "";
      if(type) type.value = "all";
      if(sort) sort.value = "relevance";
      renderTags();
      renderAll();
    });
  }
}

import "./app.js"; // ensures theme + nav work on this page as well
renderTags();
initControls();
renderAll();
