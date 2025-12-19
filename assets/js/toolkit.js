import { ENTRIES } from "../../data/entries.js";
import { getPins, setPins, escapeHtml } from "./app.js";
import "./app.js";

const LS_NOTES = "cma_notes";

const byId = new Map(ENTRIES.map(e => [e.id, e]));

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function badgeClass(type){
  if(type === "razor") return "badge--razor";
  if(type === "fallacy") return "badge--fallacy";
  if(type === "bias") return "badge--bias";
  return "badge--tool";
}

function renderPins(){
  const box = qs("#pinnedList");
  const pins = getPins();
  const items = pins.map(id => byId.get(id)).filter(Boolean);

  if(!items.length){
    box.innerHTML = `<div class="miniItem"><div class="miniItem__title">No pinned items</div><div class="miniItem__meta">Go to the Library and pin entries you want to keep.</div></div>`;
    return;
  }

  box.innerHTML = items.map(e => `
    <article class="cardItem">
      <div class="cardItem__top">
        <div>
          <span class="badge ${badgeClass(e.type)}">${escapeHtml(e.type)}</span>
          <h3>${escapeHtml(e.title)}</h3>
        </div>
        <button class="smallbtn is-on" data-unpin="${escapeHtml(e.id)}" type="button">Unpin</button>
      </div>
      <p>${escapeHtml(e.one_liner)}</p>
      <details class="entry">
        <summary>Open details</summary>
        <div class="entry__body">
          <div class="kv"><div class="kv__k">Definition</div><div class="kv__v">${escapeHtml(e.definition)}</div></div>
          ${e.counter_moves?.length ? `
            <div class="kv"><div class="kv__k">Counter-moves</div>
              <div class="kv__v"><ul class="bullets">${e.counter_moves.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
            </div>` : ""}
          ${e.questions_to_ask?.length ? `
            <div class="kv"><div class="kv__k">Questions to ask</div>
              <div class="kv__v"><ul class="bullets">${e.questions_to_ask.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
            </div>` : ""}
          <div class="cardItem__actions">
            <a class="smallbtn" href="./library.html">Library</a>
            <a class="smallbtn" href="./practice.html">Practice</a>
          </div>
        </div>
      </details>
    </article>
  `).join("");

  qsa("[data-unpin]", box).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.unpin;
      const next = getPins().filter(x => x !== id);
      setPins(next);
      renderPins();
    });
  });
}

function loadNotes(){
  return localStorage.getItem(LS_NOTES) || "";
}
function saveNotes(text){
  localStorage.setItem(LS_NOTES, text);
}

function exportAll(){
  const payload = {
    exported_at: new Date().toISOString(),
    pins: getPins(),
    notes: loadNotes()
  };
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "clearmind-toolkit.json";
  a.click();
  URL.revokeObjectURL(url);
}

function init(){
  renderPins();

  const notes = qs("#notes");
  notes.value = loadNotes();

  qs("#saveNotes").addEventListener("click", () => {
    saveNotes(notes.value);
    qs("#exportHint").textContent = "Saved.";
    setTimeout(()=>{ qs("#exportHint").textContent = ""; }, 1200);
  });

  qs("#export").addEventListener("click", exportAll);

  qs("#clearPins").addEventListener("click", () => {
    if(confirm("Clear all pinned items?")){
      setPins([]);
      renderPins();
    }
  });
}

init();
