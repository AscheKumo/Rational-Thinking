/* quizzes.js
   Practice Lab engine + question bank.

   Assumptions:
   - entries.js exports ENTRIES.
   - Your practice lab UI will call PracticeLab APIs, or you can adapt this quickly.
*/

import { ENTRIES } from "./entries.js";

function byIdMap(entries) {
  const m = new Map();
  for (const e of entries) m.set(e.id, e);
  return m;
}

const ENTRY_MAP = byIdMap(ENTRIES);

function pickRandom(arr, n) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a.slice(0, n);
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function normalize(s) {
  return String(s || "").trim().toLowerCase();
}

function entryTitle(id) {
  const e = ENTRY_MAP.get(id);
  return e ? e.title : id;
}

function ensureEntry(id) {
  if (!ENTRY_MAP.has(id)) {
    throw new Error(`Quiz references missing entry id: ${id}`);
  }
}

function buildChoices(correctId, poolIds, choiceCount = 4) {
  // poolIds should include correctId; if not, we add it.
  const pool = uniq([correctId, ...poolIds]).filter((x) => x && ENTRY_MAP.has(x));
  const incorrect = pool.filter((x) => x !== correctId);
  const pickedIncorrect = pickRandom(incorrect, Math.max(0, choiceCount - 1));
  const choices = uniq([correctId, ...pickedIncorrect]);
  // If still too small, pad from global entries of same type
  if (choices.length < choiceCount) {
    const correctType = ENTRY_MAP.get(correctId)?.type;
    const sameType = ENTRIES.filter((e) => e.type === correctType).map((e) => e.id);
    const pad = pickRandom(sameType.filter((x) => x !== correctId && !choices.includes(x)), choiceCount - choices.length);
    choices.push(...pad);
  }
  // Shuffle choices
  return pickRandom(choices, choices.length);
}

/**
 * Question schema:
 * {
 *   id: "q_xxx",
 *   type: "mcq" | "freeform",
 *   skill: "fallacy_id" | "bias_id" | "tool_pick" | "razor_pick" | "rewrite" | "steelman",
 *   prompt: "…",
 *   correct_entry_id?: "fallacy_strawman",
 *   choice_entry_ids?: [...],
 *   explanation?: "…",
 *   rubric?: ["…","…"] // for freeform grading guidance
 * }
 */

export const QUIZZES = [
  {
    id: "quiz_fallacies_core",
    title: "Fallacies: Core Recognition",
    description: "Identify the fallacy in short scenarios and learn the best counter-move.",
    question_count: 14,
    tags: ["fallacy", "debate", "core"],
    question_templates: [
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “So you’re saying if we regulate emissions, you want to ban all cars.”\nWhat’s the best label for the error?",
        correct_entry_id: "fallacy_strawman",
        distractor_pool: ["fallacy_false_dilemma", "fallacy_equivocation", "fallacy_red_herring"],
        explanation:
          "This is a strawman: it replaces the real claim (stricter standards) with a weaker extreme (ban all cars). Counter: restate and confirm the actual claim."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “You’re wrong because you’re an idiot and always have been.”\nWhat fallacy is being used?",
        correct_entry_id: "fallacy_ad_hominem",
        distractor_pool: ["fallacy_tu_quoque", "fallacy_red_herring", "fallacy_appeal_to_emotion"],
        explanation:
          "Ad hominem attacks the person rather than addressing the claim. A valid response returns to evidence and reasoning."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “Either we accept this policy or society will collapse.”\nWhat fallacy does this most closely match?",
        correct_entry_id: "fallacy_false_dilemma",
        distractor_pool: ["fallacy_slippery_slope", "fallacy_appeal_to_emotion", "fallacy_red_herring"],
        explanation:
          "It compresses options into two extremes. Often paired with fear framing. Fix: expand options and define constraints."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “You can’t prove it’s false, so it must be true.”\nWhat fallacy is this?",
        correct_entry_id: "fallacy_appeal_to_ignorance",
        distractor_pool: ["fallacy_burden_of_proof", "fallacy_unfalsifiable", "fallacy_circular_reasoning"],
        explanation:
          "Appeal to ignorance treats lack of disproof as proof. A nearby cousin is burden shifting; here the key move is 'not disproven → true'."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “After I wore my lucky socks, we won. The socks caused the win.”\nWhat’s the fallacy?",
        correct_entry_id: "fallacy_post_hoc",
        distractor_pool: ["fallacy_false_cause", "fallacy_circular_reasoning", "fallacy_appeal_to_popularity"],
        explanation:
          "Post hoc is a classic temporal-causation mistake. Use causality checks: confounders, mechanism, and controlled comparisons."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “That scientist said it, therefore it’s true.” (no data provided)\nBest label?",
        correct_entry_id: "fallacy_appeal_to_authority",
        distractor_pool: ["fallacy_appeal_to_popularity", "fallacy_appeal_to_emotion", "fallacy_burden_of_proof"],
        explanation:
          "Authority can be evidence only when relevant and supported; otherwise it becomes a fallacy."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “Have you stopped lying to your customers?”\nWhat fallacy/tactic is this?",
        correct_entry_id: "fallacy_loaded_question",
        distractor_pool: ["fallacy_red_herring", "fallacy_strawman", "fallacy_ad_hominem"],
        explanation:
          "It presupposes guilt. Fix: reject the premise and rewrite the question neutrally."
      },
      {
        type: "mcq",
        skill: "fallacy_id",
        prompt:
          "Scenario: “That’s not real X. No true X would ever do that.”\nWhat fallacy is this?",
        correct_entry_id: "fallacy_no_true_scotsman",
        distractor_pool: ["fallacy_special_pleading", "fallacy_equivocation", "fallacy_tu_quoque"],
        explanation:
          "It shifts the category boundary to protect the claim from counterexamples. Fix: ask for objective criteria."
      }
    ]
  },

  {
    id: "quiz_biases_core",
    title: "Cognitive Biases: Core Recognition",
    description: "Spot the mental shortcut and choose a corrective practice.",
    question_count: 14,
    tags: ["bias", "core", "learning"],
    question_templates: [
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You read five stories about rare crimes on social media and start believing it’s happening everywhere.\nWhich bias is most likely?",
        correct_entry_id: "bias_availability",
        distractor_pool: ["bias_survivorship", "bias_anchoring", "bias_status_quo"],
        explanation:
          "Availability: vivid, recent examples feel common. Corrective: base rates and representative data."
      },
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You ignore strong evidence because accepting it would alienate your group.\nWhich bias is most relevant?",
        correct_entry_id: "bias_identity_protective",
        distractor_pool: ["bias_anchoring", "bias_halo", "bias_salience"],
        explanation:
          "Identity-protective cognition treats evidence as social threat. Corrective: identity-safe off-ramps and shared values framing."
      },
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You judge a person as competent at everything because they are charismatic.\nWhich bias is this?",
        correct_entry_id: "bias_halo",
        distractor_pool: ["bias_authority", "bias_in_group", "bias_confirmation"],
        explanation:
          "Halo effect generalizes from one positive trait to unrelated judgments. Corrective: separate criteria and look for disconfirming evidence."
      },
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You keep working on a failing project because you’ve already spent months on it.\nWhich bias is this?",
        correct_entry_id: "bias_sunk_cost",
        distractor_pool: ["bias_status_quo", "bias_avoidance", "bias_overconfidence"],
        explanation:
          "Sunk cost makes past investment feel like a reason to continue. Corrective: stop rules, pre-mortems, and clean-slate decisions."
      },
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You interpret an opponent’s mistake as evidence they are a bad person, but your own as ‘just circumstances’.\nWhich bias is this?",
        correct_entry_id: "bias_fundamental_attribution",
        distractor_pool: ["bias_confirmation", "bias_conformity", "bias_black_white"],
        explanation:
          "Fundamental attribution error over-attributes others’ behavior to character. Corrective: incentives and constraints scan."
      },
      {
        type: "mcq",
        skill: "bias_id",
        prompt:
          "Scenario: You treat a label or metric like it’s the real thing, and stop noticing edge cases.\nWhich bias is this?",
        correct_entry_id: "bias_reification",
        distractor_pool: ["bias_anchoring", "bias_overconfidence", "bias_salience"],
        explanation:
          "Reification turns abstractions into ‘things’ and makes thinking rigid. Corrective: model mindset and exception-hunting."
      }
    ]
  },

  {
    id: "quiz_tools_countermoves",
    title: "Tools: Best Counter-move",
    description: "Pick the best tool for the situation—truth-oriented, not status-oriented.",
    question_count: 12,
    tags: ["tools", "debate", "practice"],
    question_templates: [
      {
        type: "mcq",
        skill: "tool_pick",
        prompt:
          "Scenario: The other person keeps switching what ‘counts’ as evidence after you meet their prior standard.\nWhat tool best addresses this?",
        correct_entry_id: "tool_bounds",
        distractor_pool: ["tool_steelman", "tool_fermi", "tool_operationalize"],
        explanation:
          "This pattern often accompanies moving goalposts. Set boundaries and exit conditions; don’t play infinite debate."
      },
      {
        type: "mcq",
        skill: "tool_pick",
        prompt:
          "Scenario: Two sides are arguing because they use ‘safe’ differently.\nWhat tool best addresses this early?",
        correct_entry_id: "tool_definition_lock",
        distractor_pool: ["tool_premortem", "tool_check_incentives", "tool_timeboxing"],
        explanation:
          "Lock definitions or operational criteria. Without it, you can’t test or compare claims."
      },
      {
        type: "mcq",
        skill: "tool_pick",
        prompt:
          "Scenario: You’re tempted to believe a claim because it ‘feels right’ and matches your outrage.\nWhat tool best interrupts this?",
        correct_entry_id: "tool_pause_label",
        distractor_pool: ["tool_argument_map", "tool_options", "tool_fermi"],
        explanation:
          "Pause & label: separate affect from inference, then return to evidence."
      },
      {
        type: "mcq",
        skill: "tool_pick",
        prompt:
          "Scenario: You want to evaluate a viral screenshot claim.\nWhat tool is most appropriate first?",
        correct_entry_id: "tool_source_hygiene",
        distractor_pool: ["tool_steelman", "tool_options", "tool_timeboxing"],
        explanation:
          "Check provenance, original source, corroboration, and incentives before you invest in conclusions."
      },
      {
        type: "mcq",
        skill: "tool_pick",
        prompt:
          "Scenario: You and a colleague disagree about a causal claim. You want to avoid post hoc mistakes.\nWhat tool fits best?",
        correct_entry_id: "tool_causality_check",
        distractor_pool: ["tool_calibration", "tool_definition_lock", "tool_premortem"],
        explanation:
          "Causality check asks for time order, confounders, mechanism, and distinguishing evidence."
      }
    ]
  },

  {
    id: "quiz_write_and_rewrite",
    title: "Rewrite Lab: Make It Rational",
    description: "Turn weak reasoning into strong reasoning. These are freeform prompts with rubrics.",
    question_count: 8,
    tags: ["rewrite", "steelman", "advanced"],
    question_templates: [
      {
        type: "freeform",
        skill: "rewrite",
        prompt:
          "Rewrite this into a rational, testable claim with evidence standards:\n\n“Everyone knows the new policy is a disaster.”",
        rubric: [
          "Defines what ‘disaster’ means using measurable indicators.",
          "Avoids ‘everyone knows’ popularity framing; cites what evidence would count.",
          "States timeframe, population, and comparison baseline."
        ]
      },
      {
        type: "freeform",
        skill: "steelman",
        prompt:
          "Steelmanning practice:\n\nSomeone argues: “Regulation always makes things worse.”\nWrite the strongest reasonable version of their argument, then list what evidence would challenge it.",
        rubric: [
          "Restates the claim with constraints (which regulations, what domains).",
          "Provides plausible mechanisms (bureaucracy cost, barriers to entry, capture).",
          "Names disconfirming evidence (cases where regulation improved outcomes)."
        ]
      },
      {
        type: "freeform",
        skill: "rewrite",
        prompt:
          "Rewrite this to avoid post hoc reasoning:\n\n“After we changed the onboarding email, churn dropped, so the email fixed churn.”",
        rubric: [
          "Introduces confounders and alternative explanations.",
          "Proposes an A/B test or controlled comparison.",
          "Defines what data would support causal inference."
        ]
      }
    ]
  }
];

// ------------------------------
// PracticeLab runtime
// ------------------------------

function expandTemplateToQuestion(tpl, index, quizId) {
  // Validate referenced entry IDs if present
  if (tpl.correct_entry_id) ensureEntry(tpl.correct_entry_id);

  const q = {
    id: `${quizId}__q${String(index + 1).padStart(2, "0")}`,
    type: tpl.type,
    skill: tpl.skill,
    prompt: tpl.prompt,
    explanation: tpl.explanation || "",
    rubric: tpl.rubric || null
  };

  if (tpl.type === "mcq") {
    const correctId = tpl.correct_entry_id;
    const pool = tpl.distractor_pool || [];
    pool.forEach((id) => ensureEntry(id));
    const choices = buildChoices(correctId, pool, 4);

    q.correct_entry_id = correctId;
    q.choice_entry_ids = choices;
  }

  return q;
}

function buildQuizInstance(quizDef, opts = {}) {
  const count = opts.question_count || quizDef.question_count || 10;
  const templates = quizDef.question_templates || [];
  if (!templates.length) {
    return {
      id: quizDef.id,
      title: quizDef.title,
      description: quizDef.description,
      questions: []
    };
  }

  // If templates < count, we repeat and shuffle
  const expanded = [];
  while (expanded.length < count) {
    expanded.push(...templates);
  }

  const selected = pickRandom(expanded, count);

  const questions = selected.map((tpl, idx) =>
    expandTemplateToQuestion(tpl, idx, quizDef.id)
  );

  return {
    id: quizDef.id,
    title: quizDef.title,
    description: quizDef.description,
    questions
  };
}

function gradeMCQ(question, chosenEntryId) {
  const correct = question.correct_entry_id === chosenEntryId;
  return {
    correct,
    correct_entry_id: question.correct_entry_id,
    chosen_entry_id: chosenEntryId,
    explanation: question.explanation || ""
  };
}

function gradeFreeform(question, text) {
  // No automatic grading (static site); provide rubric-based feedback prompts
  const cleaned = String(text || "").trim();
  const meetsMinimum = cleaned.length >= 30;
  return {
    submitted: cleaned,
    meets_minimum: meetsMinimum,
    rubric: question.rubric || [],
    guidance:
      "Use the rubric items as a checklist. Strong answers define terms, state evidence standards, and name what would change confidence."
  };
}

export const PracticeLab = {
  listQuizzes() {
    return QUIZZES.map((q) => ({
      id: q.id,
      title: q.title,
      description: q.description,
      tags: q.tags || [],
      question_count: q.question_count || (q.question_templates?.length || 0)
    }));
  },

  getQuizDef(id) {
    return QUIZZES.find((q) => q.id === id) || null;
  },

  createQuiz(id, opts = {}) {
    const def = this.getQuizDef(id);
    if (!def) throw new Error(`Unknown quiz id: ${id}`);
    return buildQuizInstance(def, opts);
  },

  grade(question, response) {
    if (!question || !question.type) throw new Error("Invalid question object");
    if (question.type === "mcq") return gradeMCQ(question, response);
    return gradeFreeform(question, response);
  },

  // Convenience for UIs: render choice labels
  choiceLabel(entryId) {
    return entryTitle(entryId);
  },

  entryById(entryId) {
    return ENTRY_MAP.get(entryId) || null;
  }
};
