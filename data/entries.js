/* ClearMind Atlas dataset
   - You can edit entries here without touching UI code.
   - "related_ids" links concepts together.
   - Keep IDs stable so pins & quizzes remain valid.
*/

export const ENTRIES = [
  // =========================
  // RAZORS (heuristics)
  // =========================
  {
    id: "razor_occam",
    type: "razor",
    title: "Occam’s Razor",
    aliases: ["law of parsimony", "principle of parsimony"],
    one_liner: "Prefer the simplest adequate explanation — not the simplest story.",
    definition:
      "When multiple explanations fit the data, prefer the one that makes the fewest additional assumptions while still explaining the evidence.",
    when_it_shows_up:
      "Competing theories, conspiracy thinking, overfitted explanations, ‘just-so’ stories.",
    example_bad: "“It must be a coordinated plot.”",
    example_better:
      "“What is the simplest explanation that still accounts for the facts and error rates?”",
    counter_moves: [
      "List assumptions explicitly; count what you’re adding.",
      "Prefer explanations that predict new observations, not just re-label old ones.",
      "Don’t confuse ‘simple’ with ‘comfortable’ or ‘morally pleasing’."
    ],
    questions_to_ask: [
      "What extra assumptions does this explanation require?",
      "Does it predict anything new I could check?",
      "Is there a boring, common cause that fits?"
    ],
    tags: ["epistemology", "uncertainty", "statistics"],
    related_ids: [
      "razor_hanlon",
      "razor_newton_fls",
      "bias_confirmation",
      "tool_falsifiability_check"
    ]
  },
  {
    id: "razor_hanlon",
    type: "razor",
    title: "Hanlon’s Razor",
    aliases: ["never attribute to malice"],
    one_liner:
      "Don’t default to malice when incompetence, miscommunication, or incentives suffice.",
    definition:
      "Avoid assuming harmful intent when a non-malicious explanation reasonably fits.",
    when_it_shows_up:
      "Interpersonal conflict, workplace drama, political outrage cycles.",
    example_bad: "“They did this to hurt me.”",
    example_better:
      "“What’s the simplest non-malicious explanation (error, incentives, misunderstanding)?”",
    counter_moves: [
      "Check incentives and constraints before imputing character.",
      "Ask a clarifying question that permits a face-saving correction.",
      "Still hold boundaries; ‘not malicious’ is not ‘acceptable’."
    ],
    questions_to_ask: [
      "What would a tired, distracted, or poorly trained person do here?",
      "What incentives might produce this without malice?",
      "What clarification would resolve this?"
    ],
    tags: ["social", "emotion", "incentives"],
    related_ids: ["tool_check_incentives", "bias_fundamental_attribution", "tool_boundaries"]
  },
  {
    id: "razor_grice",
    type: "razor",
    title: "Grice’s Razor",
    aliases: ["principle of charity (pragmatic)", "conversational maxims"],
    one_liner: "Prefer interpretations that preserve coherence and cooperative meaning.",
    definition:
      "When interpreting statements, assume the speaker is trying to be understood and interpret them in the most reasonable, coherent way consistent with context.",
    when_it_shows_up: "Online arguments, ambiguous phrasing, hostile readings.",
    counter_moves: [
      "Restate their claim in your words and ask if that’s accurate.",
      "Separate literal meaning from implied meaning; ask for the latter.",
      "If you cannot steelman it, you may not understand it."
    ],
    questions_to_ask: [
      "What would this mean if they were being reasonable?",
      "What is the strongest charitable reading?",
      "What clarifying question would lock the meaning?"
    ],
    tags: ["debate", "social", "learning"],
    related_ids: ["tool_steelman", "tool_definition_lock", "fallacy_strawman"]
  },
  {
    id: "razor_chesterton_fence",
    type: "razor",
    title: "Chesterton’s Fence",
    aliases: ["don’t remove a fence you don’t understand"],
    one_liner: "Don’t destroy a constraint until you know why it exists.",
    definition:
      "If you see an old rule or structure, understand its original purpose before removing it; it may solve problems you haven’t noticed yet.",
    when_it_shows_up: "Policy changes, refactors, cultural norms, safety rules.",
    counter_moves: [
      "Ask: what failure mode does this prevent?",
      "Run small experiments instead of full removal.",
      "Prefer reversible changes."
    ],
    questions_to_ask: [
      "What problem did this originally solve?",
      "What happens if we remove it in a small area first?",
      "Is the proposed change reversible?"
    ],
    tags: ["systems", "incentives", "planning"],
    related_ids: ["tool_premortem", "tool_reversible_decisions"]
  },
  {
    id: "razor_newton_fls",
    type: "razor",
    title: "Newton’s Flaming Laser Sword",
    aliases: ["laser sword", "Alder’s Razor (variant)"],
    one_liner: "If a claim can’t be tested in principle, treat it as unresolvable.",
    definition:
      "What cannot be settled by experiment or observation is not worth debating as factual; it may be meaningful, but it is not empirically decidable.",
    when_it_shows_up:
      "Metaphysical claims used as ‘facts’, unfalsifiable accusations, conspiracy rabbit holes.",
    counter_moves: [
      "Ask what observation would count against the claim.",
      "If none exists, reclassify as belief, value, or narrative.",
      "Avoid infinite debate; choose pragmatic standards instead."
    ],
    questions_to_ask: ["What would prove this wrong?", "Is this factual or value/meaning?", "What predictions does it make?"],
    tags: ["epistemology", "debate", "uncertainty"],
    related_ids: ["tool_falsifiability_check", "tool_change_mind", "fallacy_unfalsifiable"]
  },
  {
    id: "razor_hitchens",
    type: "razor",
    title: "Hitchens’s Razor",
    aliases: ["burden of proof"],
    one_liner: "Claims asserted without evidence can be dismissed without evidence.",
    definition:
      "If someone offers a claim without supporting evidence, you are not obligated to refute it; the burden remains on the claimant.",
    when_it_shows_up: "Internet arguments, conspiracy claims, pseudoscience, rumor cycles.",
    counter_moves: [
      "Ask for evidence and standards of evidence up front.",
      "Refuse to chase endless ‘prove me wrong’ frames.",
      "Match effort to seriousness (don’t overinvest)."
    ],
    questions_to_ask: [
      "What evidence supports this, and how reliable is it?",
      "Is the burden being shifted onto me?",
      "What would be sufficient to believe it?"
    ],
    tags: ["debate", "media", "epistemology"],
    related_ids: ["tool_source_hygiene", "tool_change_mind", "fallacy_burden_of_proof"]
  },
  {
    id: "razor_sagan",
    type: "razor",
    title: "Sagan Standard",
    aliases: ["extraordinary claims require extraordinary evidence"],
    one_liner:
      "The more a claim deviates from prior knowledge, the stronger the evidence must be.",
    definition:
      "A claim that would require large revisions to background beliefs should be supported by unusually strong evidence.",
    when_it_shows_up:
      "Miracle claims, conspiracy theories, revolutionary health claims, ‘hidden truth’ narratives.",
    counter_moves: [
      "Ask what the claim would imply if true (and how disruptive it is).",
      "Increase evidence standards in proportion to disruption.",
      "Check base rates and replication."
    ],
    questions_to_ask: [
      "How much does this require revising other beliefs?",
      "How strong is the evidence compared with that disruption?",
      "Is the evidence replicable and independent?"
    ],
    tags: ["epistemology", "statistics", "media"],
    related_ids: ["tool_base_rates", "bias_confirmation", "tool_source_hygiene"]
  },
  {
    id: "razor_alder",
    type: "razor",
    title: "Alder’s Razor",
    aliases: ["if it can’t be settled, it’s not worth debating"],
    one_liner:
      "If you can’t settle it by evidence, treat it as preference or choose pragmatically.",
    definition:
      "Arguments that cannot be decided by observation should not be argued as if factual; pick practical criteria or acknowledge uncertainty.",
    tags: ["epistemology", "debate", "uncertainty"],
    related_ids: ["razor_newton_fls", "tool_reversible_decisions", "tool_bounds"]
  },
  {
    id: "razor_hickam",
    type: "razor",
    title: "Hickam’s Dictum",
    aliases: ["patients can have as many diseases as they damn well please"],
    one_liner:
      "Multiple causes can coexist; don’t overuse parsimony where the world is messy.",
    definition:
      "In complex systems (especially medicine), multiple simultaneous causes are common; do not force a single-cause story when evidence supports multi-causality.",
    tags: ["systems", "uncertainty", "statistics"],
    related_ids: ["razor_occam", "tool_systems_thinking"]
  },
  {
    id: "razor_shirky",
    type: "razor",
    title: "Shirky Principle",
    aliases: ["institutions preserve the problem to preserve the institution"],
    one_liner:
      "Institutions often defend their own survival, even at the cost of solving the original problem.",
    definition:
      "Organizations may become incentivized to keep problems partially unsolved because the problem justifies the organization.",
    tags: ["incentives", "systems", "social"],
    related_ids: ["tool_check_incentives", "bias_status_quo"]
  },
  {
    id: "razor_goodhart",
    type: "razor",
    title: "Goodhart’s Law",
    aliases: ["when a measure becomes a target"],
    one_liner: "Once a metric becomes the goal, it stops measuring the thing you care about.",
    definition:
      "Optimizing for a proxy metric causes gaming and distortion, breaking its usefulness as a measure.",
    tags: ["incentives", "systems", "planning"],
    related_ids: ["tool_check_incentives", "bias_survivorship", "tool_systems_thinking"]
  },
  {
    id: "razor_parkinson_triviality",
    type: "razor",
    title: "Law of Triviality",
    aliases: ["bike-shedding", "Parkinson’s Law of Triviality"],
    one_liner: "Groups spend disproportionate time on easy, low-impact details.",
    definition:
      "People tend to focus on trivial issues because they feel competent there, avoiding harder, higher-impact decisions.",
    tags: ["social", "planning", "systems"],
    related_ids: ["bias_avoidance", "tool_prioritization"]
  },

  // =========================
  // FALLACIES (argument errors)
  // =========================
  {
    id: "fallacy_strawman",
    type: "fallacy",
    title: "Strawman",
    aliases: ["weak man"],
    one_liner: "Misrepresent an argument to make it easier to defeat.",
    definition:
      "Replacing someone’s actual position with a weaker version, then refuting the weaker version.",
    when_it_shows_up: "Polarized debate, quote-mining, speed arguments.",
    example_bad: "“So you want to ban all cars.” (when they proposed emission standards)",
    example_better:
      "“Let me restate: you’re proposing stricter standards, not a ban. Correct?”",
    counter_moves: [
      "Ask for restatement and confirmation (steelman).",
      "Quote their claim precisely; separate interpretation from text.",
      "Refuse to proceed until the real claim is on the table."
    ],
    questions_to_ask: [
      "What is the strongest version of their claim?",
      "Am I attacking the claim or a caricature?",
      "What would they say is missing?"
    ],
    tags: ["debate", "social", "epistemology"],
    related_ids: ["tool_steelman", "razor_grice"]
  },
  {
    id: "fallacy_ad_hominem",
    type: "fallacy",
    title: "Ad Hominem",
    aliases: ["attack the person"],
    one_liner: "Attack the person instead of the claim.",
    definition:
      "Attempting to invalidate an argument by criticizing the speaker’s character, motives, or identity rather than addressing the reasoning.",
    when_it_shows_up: "Politics, status conflict, online discourse.",
    counter_moves: [
      "Separate claim validity from speaker traits.",
      "If credibility matters, address it with evidence and relevance (not insult).",
      "Ask: what would make the claim true or false regardless of who said it?"
    ],
    questions_to_ask: [
      "Would this argument be valid if said by someone else?",
      "Is credibility relevant here (expertise, conflict of interest)?",
      "Are we avoiding the substance?"
    ],
    tags: ["debate", "social"],
    related_ids: ["bias_halo", "bias_in_group"]
  },
  {
    id: "fallacy_false_dilemma",
    type: "fallacy",
    title: "False Dilemma",
    aliases: ["false dichotomy", "either/or fallacy"],
    one_liner: "Present only two options when more exist.",
    definition:
      "Framing a problem as having only two exclusive choices, ignoring intermediate or alternative possibilities.",
    counter_moves: [
      "Generate third options; use a spectrum instead of binary.",
      "Ask for the full option set and constraints.",
      "Check whether ‘both can be partly true’."
    ],
    questions_to_ask: ["What other options exist?", "Can we combine approaches?", "Is this a spectrum, not a binary?"],
    tags: ["debate", "planning", "systems"],
    related_ids: ["tool_options", "bias_black_white"]
  },
  {
    id: "fallacy_equivocation",
    type: "fallacy",
    title: "Equivocation",
    aliases: ["switching definitions"],
    one_liner: "Shift the meaning of a term mid-argument.",
    definition:
      "Using a word in multiple senses within an argument, creating a misleading appearance of logical connection.",
    counter_moves: [
      "Define the key term once; write it down.",
      "Substitute distinct labels for distinct senses.",
      "Ask: which definition are we using right now?"
    ],
    questions_to_ask: [
      "Is the same word used in two different ways?",
      "Can we replace it with precise terms?",
      "What definition would make the argument valid?"
    ],
    tags: ["debate", "epistemology"],
    related_ids: ["tool_definition_lock", "fallacy_motte_bailey"]
  },
  {
    id: "fallacy_motte_bailey",
    type: "fallacy",
    title: "Motte-and-Bailey",
    aliases: ["retreat to defensible claim"],
    one_liner: "Oscillate between a bold claim and a safer one when challenged.",
    definition:
      "Advancing a provocative claim (bailey), then retreating to a trivial or defensible claim (motte) when criticized, before returning to the provocative claim later.",
    counter_moves: [
      "Demand a stable statement of the claim (write it).",
      "Ask: are you defending the strong or weak version?",
      "Treat the retreat as a concession of the strong version."
    ],
    questions_to_ask: [
      "Which claim is actually being defended right now?",
      "Will you stand by the strong version explicitly?",
      "What follows from the weak version that matters?"
    ],
    tags: ["debate", "social"],
    related_ids: ["tool_definition_lock", "fallacy_equivocation", "tool_boundaries"]
  },
  {
    id: "fallacy_goalposts",
    type: "fallacy",
    title: "Moving the Goalposts",
    aliases: ["shifting standards"],
    one_liner: "Change the criteria after evidence is provided.",
    definition:
      "Requiring new or stricter evidence after the original standard has been met, so the claim can never be satisfied.",
    counter_moves: [
      "Agree on standards before debating.",
      "Record the criterion and point to it when it shifts.",
      "If shifting persists, end the conversation."
    ],
    questions_to_ask: ["What standard did we agree to?", "Was this requirement mentioned before?", "Are we seeking truth or dodging?"],
    tags: ["debate", "social"],
    related_ids: ["tool_change_mind", "tool_boundaries"]
  },
  {
    id: "fallacy_gish_gallop",
    type: "fallacy",
    title: "Gish Gallop",
    aliases: ["argument flood"],
    one_liner: "Overwhelm with many claims faster than they can be addressed.",
    definition:
      "Presenting a large number of weak arguments rapidly, exploiting time and attention limits.",
    counter_moves: [
      "Pick one claim; refuse to proceed until it’s resolved.",
      "Ask them to rank their top 1–2 strongest points.",
      "Use written format and citations if you continue."
    ],
    questions_to_ask: ["What is your single strongest claim?", "Can we verify one item at a time?", "Is quantity substituting for quality?"],
    tags: ["debate", "media", "social"],
    related_ids: ["tool_boundaries", "tool_source_hygiene"]
  },
  {
    id: "fallacy_appeal_to_authority",
    type: "fallacy",
    title: "Appeal to Authority",
    aliases: ["argument from authority"],
    one_liner: "Claim is true because an authority says so.",
    definition:
      "Treating an authority’s statement as decisive evidence, especially when outside their expertise or without supporting data.",
    counter_moves: [
      "Check domain expertise and conflicts of interest.",
      "Ask for the evidence the authority relies on.",
      "Prefer consensus and replication over single authorities."
    ],
    questions_to_ask: ["Is this expertise relevant?", "What does the evidence base say?", "Is there consensus and replication?"],
    tags: ["media", "debate", "epistemology"],
    related_ids: ["tool_source_hygiene", "bias_authority"]
  },
  {
    id: "fallacy_appeal_to_emotion",
    type: "fallacy",
    title: "Appeal to Emotion",
    aliases: ["argumentum ad passiones"],
    one_liner: "Use feelings as proof instead of evidence.",
    definition:
      "Attempting to win an argument by manipulating emotions rather than providing reasons and evidence.",
    counter_moves: [
      "Acknowledge emotion, then return to claim and evidence.",
      "Ask what facts support or refute the conclusion.",
      "Separate moral response from factual inference."
    ],
    questions_to_ask: ["What is the factual claim under the emotion?", "What evidence supports it?", "Are we being steered by fear or outrage?"],
    tags: ["debate", "emotion", "media"],
    related_ids: ["bias_affect_heuristic", "tool_pause_label"]
  },
  {
    id: "fallacy_circular_reasoning",
    type: "fallacy",
    title: "Circular Reasoning",
    aliases: ["begging the question"],
    one_liner: "The conclusion is assumed in the premise.",
    definition:
      "An argument where the conclusion is embedded in the premises, providing no independent support.",
    counter_moves: [
      "Ask for independent evidence for the key premise.",
      "Rewrite the argument in plain terms; see if it collapses.",
      "Identify hidden assumptions."
    ],
    questions_to_ask: ["What supports the premise besides the conclusion?", "Could a skeptic accept the premise?", "Is this just rephrasing?"],
    tags: ["debate", "epistemology"],
    related_ids: ["tool_argument_map"]
  },
  {
    id: "fallacy_post_hoc",
    type: "fallacy",
    title: "Post Hoc Ergo Propter Hoc",
    aliases: ["after therefore because"],
    one_liner: "Assume sequence implies causation.",
    definition:
      "Concluding that because B followed A, A caused B, without ruling out other causes or coincidence.",
    counter_moves: [
      "Check alternative causes and confounders.",
      "Look for mechanisms and controlled comparisons.",
      "Use base rates and regression to the mean."
    ],
    questions_to_ask: ["What else could cause B?", "Is there a mechanism?", "Is this a pattern or an anecdote?"],
    tags: ["statistics", "epistemology"],
    related_ids: ["tool_causality_check", "bias_illusory_correlation"]
  },
  {
    id: "fallacy_burden_of_proof",
    type: "fallacy",
    title: "Shifting the Burden of Proof",
    aliases: ["prove me wrong"],
    one_liner: "Demand refutation instead of providing evidence.",
    definition:
      "The claimant avoids supporting their claim by insisting others disprove it.",
    counter_moves: [
      "Return burden to claimant: ‘What evidence supports it?’",
      "Set standards and stop if they refuse.",
      "Match effort to claim importance."
    ],
    tags: ["debate", "epistemology"],
    related_ids: ["razor_hitchens", "tool_boundaries"]
  },
  {
    id: "fallacy_no_true_scotsman",
    type: "fallacy",
    title: "No True Scotsman",
    aliases: ["purity redefinition"],
    one_liner: "Redefine a group to exclude counterexamples.",
    definition:
      "When presented with counterexamples, the definition is adjusted ad hoc so the claim remains ‘true’.",
    counter_moves: [
      "Ask for objective criteria for membership.",
      "Show how the definition is changing after the fact.",
      "Separate identity defense from factual claims."
    ],
    tags: ["social", "identity", "debate"],
    related_ids: ["tool_definition_lock", "bias_in_group"]
  },
  {
    id: "fallacy_loaded_question",
    type: "fallacy",
    title: "Loaded Question",
    aliases: ["complex question"],
    one_liner: "A question that smuggles in an assumption.",
    definition:
      "A question that presupposes something unproven, forcing agreement with the premise to answer.",
    counter_moves: [
      "Reject the premise explicitly.",
      "Rewrite the question in neutral terms.",
      "Answer the corrected question."
    ],
    tags: ["debate", "social"],
    related_ids: ["tool_definition_lock"]
  },
  {
    id: "fallacy_red_herring",
    type: "fallacy",
    title: "Red Herring",
    aliases: ["distraction"],
    one_liner: "Introduce an irrelevant point to divert attention.",
    definition: "A diversion that pulls the discussion away from the original claim.",
    counter_moves: [
      "Name the diversion and restate the main point.",
      "Park the tangent for later.",
      "Hold the frame: one question at a time."
    ],
    tags: ["debate", "social"],
    related_ids: ["tool_boundaries", "tool_argument_map"]
  },
  {
    id: "fallacy_appeal_to_nature",
    type: "fallacy",
    title: "Appeal to Nature",
    aliases: ["natural = good"],
    one_liner: "Assume something is good because it’s ‘natural.’",
    definition:
      "Arguing that something is good/right because it is natural, or bad/wrong because it is unnatural.",
    counter_moves: [
      "Separate ‘natural’ from ‘good’ — they are different axes.",
      "Ask for harms/benefits and evidence.",
      "Point out natural harms and unnatural benefits."
    ],
    tags: ["debate", "health", "epistemology"],
    related_ids: ["bias_naturalness"]
  },
  {
    id: "fallacy_appeal_to_tradition",
    type: "fallacy",
    title: "Appeal to Tradition",
    aliases: ["we’ve always done it this way"],
    one_liner: "Assume something is correct because it’s old or customary.",
    definition:
      "Treating tradition as sufficient justification, without examining outcomes or evidence.",
    counter_moves: [
      "Ask what it originally solved (then evaluate now).",
      "Compare outcomes: does it still work in today’s context?",
      "Prefer evidence and context to age."
    ],
    tags: ["social", "systems"],
    related_ids: ["razor_chesterton_fence"]
  },
  {
    id: "fallacy_special_pleading",
    type: "fallacy",
    title: "Special Pleading",
    aliases: ["double standard"],
    one_liner: "Apply standards to others but exempt your own case without justification.",
    definition:
      "Using different standards for similar cases, usually to protect a favored belief.",
    counter_moves: [
      "Apply the same test to both sides.",
      "Ask what principled rule justifies the exception.",
      "Check identity-protective reasoning."
    ],
    tags: ["debate", "identity"],
    related_ids: ["bias_identity_protective", "tool_consistency_check"]
  },
  {
    id: "fallacy_appeal_to_ignorance",
    type: "fallacy",
    title: "Appeal to Ignorance",
    aliases: ["absence of evidence as evidence"],
    one_liner: "Claim is true because it hasn’t been disproven (or vice versa).",
    definition:
      "Treating lack of disproof as proof, especially when evidence should be expected if the claim were true.",
    counter_moves: [
      "Ask what evidence would be expected if true.",
      "Use base rates and burden of proof.",
      "Distinguish unknown from supported."
    ],
    tags: ["epistemology", "debate"],
    related_ids: ["tool_base_rates", "razor_hitchens"]
  },
  {
    id: "fallacy_slippery_slope",
    type: "fallacy",
    title: "Slippery Slope",
    aliases: ["domino argument", "thin end of the wedge"],
    one_liner: "Assume a small step inevitably leads to extremes without support.",
    definition:
      "Arguing that a relatively small first step will inevitably trigger a chain of events leading to a dramatic outcome, without sufficient causal evidence.",
    counter_moves: [
      "Ask for the mechanism linking step A to outcome Z.",
      "Quantify probabilities and identify stopping points.",
      "Consider policy/design guardrails."
    ],
    questions_to_ask: [
      "What is the causal chain, exactly?",
      "How likely is each step in that chain?",
      "Where can we add brakes or boundaries?"
    ],
    tags: ["debate", "planning", "systems"],
    related_ids: ["tool_causality_check", "tool_bounds", "bias_catastrophizing"]
  },
  {
    id: "fallacy_false_cause",
    type: "fallacy",
    title: "False Cause",
    aliases: ["confusing correlation and causation"],
    one_liner: "Treat correlation as causation without adequate controls.",
    definition:
      "Inferring causation from association when confounding variables, selection effects, or chance can explain the relationship.",
    counter_moves: [
      "Look for confounders and selection bias.",
      "Prefer experiments, quasi-experiments, or natural experiments where possible.",
      "Check dose-response, time order, mechanism, and replication."
    ],
    tags: ["statistics", "epistemology"],
    related_ids: ["tool_causality_check", "bias_illusory_correlation", "bias_confirmation"]
  },
  {
    id: "fallacy_unfalsifiable",
    type: "fallacy",
    title: "Unfalsifiable Claim",
    aliases: ["heads I win tails you lose"],
    one_liner: "A claim is framed so no evidence could count against it.",
    definition:
      "A claim that cannot be disproven in principle is insulated from correction and cannot function as an empirical belief.",
    counter_moves: [
      "Ask for a falsifier: what would show it’s wrong?",
      "If none exists, reclassify as value/narrative/metaphor.",
      "Avoid infinite debate; pivot to practical decision criteria."
    ],
    tags: ["epistemology", "debate"],
    related_ids: ["razor_newton_fls", "tool_falsifiability_check"]
  },
  {
    id: "fallacy_tu_quoque",
    type: "fallacy",
    title: "Tu Quoque",
    aliases: ["appeal to hypocrisy", "you too"],
    one_liner: "Dismiss a claim because the speaker is inconsistent.",
    definition:
      "Pointing out hypocrisy may matter morally, but it does not by itself refute the claim’s truth.",
    counter_moves: [
      "Separate the claim from the claimant.",
      "Acknowledge hypocrisy if relevant, then return to evidence.",
      "Ask: would the claim stand if stated by a different person?"
    ],
    tags: ["debate", "social"],
    related_ids: ["fallacy_ad_hominem", "tool_argument_map"]
  },
  {
    id: "fallacy_whataboutism",
    type: "fallacy",
    title: "Whataboutism",
    aliases: ["what about X"],
    one_liner: "Deflect criticism by changing the subject to someone else’s wrongdoing.",
    definition:
      "A type of red herring that shifts focus from the claim at hand to other issues to avoid addressing the original point.",
    counter_moves: [
      "Name the deflection; restate the original claim.",
      "Agree to discuss the other issue later if necessary, but don’t drop the first.",
      "Ask for a direct answer to the initial question."
    ],
    tags: ["debate", "media", "social"],
    related_ids: ["fallacy_red_herring", "tool_boundaries"]
  },
  {
    id: "fallacy_appeal_to_popularity",
    type: "fallacy",
    title: "Appeal to Popularity",
    aliases: ["bandwagon"],
    one_liner: "Assume something is true or good because many people believe it.",
    definition:
      "Popularity may reflect social dynamics, incentives, and information cascades; it is not decisive evidence of truth.",
    counter_moves: [
      "Ask what evidence supports the belief beyond popularity.",
      "Watch for information cascades and conformity pressures.",
      "Check whether the belief predicts outcomes reliably."
    ],
    tags: ["social", "epistemology"],
    related_ids: ["bias_conformity", "tool_source_hygiene"]
  },
  {
    id: "fallacy_category_error",
    type: "fallacy",
    title: "Category Error",
    aliases: ["misapplied category"],
    one_liner: "Treat a concept as the wrong ‘type’ of thing.",
    definition:
      "Applying a framework or property to something where it doesn’t belong (e.g., treating a metaphor as a measurable mechanism).",
    counter_moves: [
      "Ask what kind of claim it is: factual, moral, aesthetic, definitional, strategic.",
      "Translate into the correct category (values vs facts).",
      "Clarify what would count as evidence in that category."
    ],
    tags: ["epistemology", "learning"],
    related_ids: ["tool_operationalize", "tool_definition_lock"]
  },

  // =========================
  // COGNITIVE BIASES (mind errors)
  // =========================
  {
    id: "bias_confirmation",
    type: "bias",
    title: "Confirmation Bias",
    aliases: ["myside bias"],
    one_liner: "Notice and prefer information that supports what you already believe.",
    definition:
      "We tend to seek, interpret, and remember evidence in ways that confirm prior beliefs, while discounting disconfirming evidence.",
    when_it_shows_up: "Politics, identity topics, brand loyalty, online rabbit holes.",
    counter_moves: [
      "Actively search for the best evidence against your view.",
      "Pre-register what would change your mind.",
      "Use adversarial collaboration: ask a smart skeptic to critique you."
    ],
    questions_to_ask: [
      "What evidence would I expect if I’m wrong?",
      "What would convince an intelligent opponent?",
      "Am I applying equal skepticism to my side?"
    ],
    tags: ["epistemology", "identity", "learning"],
    related_ids: ["tool_change_mind", "tool_steelman", "bias_identity_protective"]
  },
  {
    id: "bias_availability",
    type: "bias",
    title: "Availability Heuristic",
    aliases: ["availability bias"],
    one_liner: "Overweight examples that come easily to mind.",
    definition:
      "Events that are vivid, recent, or emotionally salient feel more common and more probable than they are.",
    counter_moves: [
      "Check base rates and representative datasets.",
      "Separate ‘memorable’ from ‘common’.",
      "Use time windows: how often per year, per million, etc.?"
    ],
    tags: ["statistics", "media", "emotion"],
    related_ids: ["tool_base_rates", "bias_negativity", "bias_salience"]
  },
  {
    id: "bias_anchoring",
    type: "bias",
    title: "Anchoring",
    aliases: ["anchor effect"],
    one_liner: "The first number or framing sticks and warps later judgment.",
    definition:
      "Initial values or frames disproportionately influence estimates and decisions, even when they’re arbitrary.",
    counter_moves: [
      "Generate independent estimates before hearing others’ numbers.",
      "Use ranges and multiple reference points.",
      "Ask: what would I think if the anchor were different?"
    ],
    tags: ["statistics", "planning"],
    related_ids: ["tool_fermi", "tool_calibration"]
  },
  {
    id: "bias_fundamental_attribution",
    type: "bias",
    title: "Fundamental Attribution Error",
    aliases: ["FAE"],
    one_liner: "Over-attribute others’ actions to character, under-attribute to context.",
    definition:
      "We explain others’ behavior by personality while explaining our own by circumstances, incentives, and constraints.",
    counter_moves: [
      "Ask what constraints/incentives could produce the behavior.",
      "Apply ‘Hanlon + incentives’ before moral condemnation.",
      "Imagine a good person in a bad system."
    ],
    tags: ["social", "emotion"],
    related_ids: ["razor_hanlon", "tool_check_incentives"]
  },
  {
    id: "bias_halo",
    type: "bias",
    title: "Halo Effect",
    aliases: ["horns effect (inverse)"],
    one_liner: "One trait colors your evaluation of unrelated traits.",
    definition:
      "When you like (or dislike) one thing about someone, you tend to generalize that feeling to other judgments about them.",
    counter_moves: [
      "Separate dimensions: competence, warmth, honesty, expertise.",
      "Use structured criteria rather than vibes.",
      "Seek disconfirming examples."
    ],
    tags: ["social", "identity"],
    related_ids: ["fallacy_ad_hominem", "bias_authority"]
  },
  {
    id: "bias_dunning_kruger",
    type: "bias",
    title: "Dunning–Kruger Effect",
    aliases: ["skill overconfidence"],
    one_liner: "Low skill often fails to recognize its own errors.",
    definition:
      "In many domains, novices may be confident because they lack the models to detect mistakes; expertise includes better error detection.",
    counter_moves: [
      "Seek feedback loops: tests, peer review, calibration checks.",
      "Compare against objective benchmarks.",
      "Adopt ‘strong opinions, loosely held’ in new domains."
    ],
    tags: ["learning", "metacognition"],
    related_ids: ["tool_calibration", "tool_error_budget"]
  },
  {
    id: "bias_sunk_cost",
    type: "bias",
    title: "Sunk Cost Fallacy",
    aliases: ["escalation of commitment"],
    one_liner: "Continue because you’ve already invested, not because it’s best now.",
    definition:
      "Past investments (time, money, pride) distort current decisions, causing overcommitment to failing paths.",
    counter_moves: [
      "Decide as if starting fresh today (‘clean slate’ decision).",
      "Use stop rules and pre-mortems.",
      "Separate identity/pride from the choice."
    ],
    tags: ["planning", "emotion"],
    related_ids: ["tool_premortem", "tool_stop_rules"]
  },
  {
    id: "bias_survivorship",
    type: "bias",
    title: "Survivorship Bias",
    aliases: ["survivor bias"],
    one_liner: "Only seeing winners hides the graveyard of failures.",
    definition:
      "We focus on visible successes and ignore unseen failures, causing over-optimistic inference about strategies and risks.",
    counter_moves: [
      "Ask: who failed and isn’t in the sample?",
      "Look for base rates and selection processes.",
      "Study failure cases deliberately."
    ],
    tags: ["statistics", "planning"],
    related_ids: ["tool_base_rates", "razor_goodhart"]
  },
  {
    id: "bias_in_group",
    type: "bias",
    title: "In-group Bias",
    aliases: ["tribal bias"],
    one_liner: "Favor your group’s claims, excuses, and narratives.",
    definition:
      "Group identity skews judgment: you interpret your side charitably and the other side harshly.",
    counter_moves: [
      "Steelman out-group positions; find what they’re protecting.",
      "Use neutral standards: same evidence rules for everyone.",
      "Diversify information sources and social circles."
    ],
    tags: ["identity", "social"],
    related_ids: ["bias_identity_protective", "tool_consistency_check"]
  },
  {
    id: "bias_authority",
    type: "bias",
    title: "Authority Bias",
    aliases: ["deference bias"],
    one_liner: "Overweight statements from perceived authority.",
    definition:
      "Authorities can be useful heuristics, but deference becomes a bias when it replaces evidence or domain relevance.",
    counter_moves: [
      "Check domain relevance and track record.",
      "Ask for evidence, not just credentials.",
      "Prefer consensus and replication."
    ],
    tags: ["social", "media", "epistemology"],
    related_ids: ["fallacy_appeal_to_authority", "tool_source_hygiene"]
  },
  {
    id: "bias_affect_heuristic",
    type: "bias",
    title: "Affect Heuristic",
    aliases: ["feelings-as-evidence"],
    one_liner: "Your emotional reaction substitutes for analysis.",
    definition:
      "When something feels good/bad, you infer it is safe/unsafe, true/false, moral/immoral without adequate reasoning.",
    counter_moves: [
      "Name the emotion, then separate it from the factual claim.",
      "Delay decisions when emotionally flooded.",
      "Ask for concrete evidence and base rates."
    ],
    tags: ["emotion", "epistemology"],
    related_ids: ["fallacy_appeal_to_emotion", "tool_pause_label"]
  },
  {
    id: "bias_negativity",
    type: "bias",
    title: "Negativity Bias",
    aliases: ["bad is stronger than good"],
    one_liner: "Negative information hits harder than positive information.",
    definition:
      "Threat signals dominate attention and memory, skewing your sense of frequency, danger, and intent.",
    counter_moves: [
      "Use data, not vibe-based threat estimation.",
      "Balance exposure: deliberately read neutral/positive base-rate info.",
      "Ask: is this rare but vivid?"
    ],
    tags: ["emotion", "media"],
    related_ids: ["bias_availability", "tool_base_rates"]
  },
  {
    id: "bias_status_quo",
    type: "bias",
    title: "Status Quo Bias",
    aliases: ["default bias"],
    one_liner: "Prefer the current state even when change would help.",
    definition:
      "We treat the existing situation as ‘normal’ and overweight the risks of change compared to the risks of staying put.",
    counter_moves: [
      "Reframe: if you were starting today, would you choose this default?",
      "Use reversible experiments.",
      "Compare expected value of change vs non-change."
    ],
    tags: ["planning", "systems"],
    related_ids: ["tool_reversible_decisions", "razor_chesterton_fence"]
  },
  {
    id: "bias_black_white",
    type: "bias",
    title: "Black-and-White Thinking",
    aliases: ["binary thinking", "splitting"],
    one_liner: "Force complex reality into all-or-nothing categories.",
    definition:
      "You interpret shades of gray as extremes, which simplifies decision-making but often distorts truth and options.",
    counter_moves: [
      "Use spectra and probabilities instead of binaries.",
      "Generate at least three options.",
      "Ask what mixed/partial truth looks like."
    ],
    tags: ["emotion", "planning", "debate"],
    related_ids: ["fallacy_false_dilemma", "tool_calibration"]
  },
  {
    id: "bias_illusory_correlation",
    type: "bias",
    title: "Illusory Correlation",
    aliases: ["pattern illusion"],
    one_liner: "Perceive relationships that aren’t real or are overstated.",
    definition:
      "We’re pattern-seeking; we can ‘see’ causation or correlation in noise, especially when emotionally primed.",
    counter_moves: [
      "Check data and baselines; look for control comparisons.",
      "Beware anecdote-driven inference.",
      "Ask about confounders and selection."
    ],
    tags: ["statistics", "epistemology"],
    related_ids: ["tool_causality_check", "fallacy_false_cause", "fallacy_post_hoc"]
  },
  {
    id: "bias_naturalness",
    type: "bias",
    title: "Naturalness Bias",
    aliases: ["appeal to natural", "nature preference"],
    one_liner: "Prefer ‘natural’ options regardless of evidence.",
    definition:
      "You treat ‘natural’ as inherently safer or better, despite many natural harms and many beneficial artificial interventions.",
    counter_moves: [
      "Ask for evidence of outcomes, harms, and benefits.",
      "Separate aesthetics from efficacy.",
      "Use risk comparison with base rates."
    ],
    tags: ["health", "epistemology"],
    related_ids: ["fallacy_appeal_to_nature", "tool_base_rates"]
  },
  {
    id: "bias_identity_protective",
    type: "bias",
    title: "Identity-Protective Cognition",
    aliases: ["identity defense"],
    one_liner: "Beliefs become armor for belonging and status.",
    definition:
      "When a belief is tied to identity, social belonging, or moral status, evidence against it is perceived as a threat and gets rejected.",
    counter_moves: [
      "Create identity-safe off-ramps: separate worth from belief.",
      "Use curiosity framing: ‘What’s true, regardless of tribe?’",
      "Discuss shared values first, then evidence."
    ],
    tags: ["identity", "social", "epistemology"],
    related_ids: ["bias_in_group", "tool_steelman", "tool_change_mind"]
  },
  {
    id: "bias_conformity",
    type: "bias",
    title: "Conformity Bias",
    aliases: ["social proof bias"],
    one_liner: "Match the group’s view to reduce social friction.",
    definition:
      "Humans adapt beliefs and expressed opinions to the perceived majority, often unconsciously, especially under uncertainty.",
    counter_moves: [
      "Seek independent evidence and independent estimates.",
      "Use anonymous voting or pre-commitment to reduce social pressure.",
      "Diversify viewpoints intentionally."
    ],
    tags: ["social", "learning"],
    related_ids: ["fallacy_appeal_to_popularity", "tool_source_hygiene"]
  },
  {
    id: "bias_catastrophizing",
    type: "bias",
    title: "Catastrophizing",
    aliases: ["worst-case fixation"],
    one_liner: "Jump to worst-case outcomes and treat them as likely.",
    definition:
      "You overweight severe negative outcomes, compressing probability into certainty and driving panic decisions.",
    counter_moves: [
      "Separate severity from probability; quantify both.",
      "Generate best case, expected case, worst case.",
      "Use base rates and stop rules."
    ],
    tags: ["emotion", "planning"],
    related_ids: ["tool_calibration", "tool_base_rates", "tool_stop_rules"]
  },
  {
    id: "bias_salience",
    type: "bias",
    title: "Salience Bias",
    aliases: ["vividness bias"],
    one_liner: "Vivid details overpower statistical reality.",
    definition:
      "Sensory or emotionally striking information dominates attention and becomes overweighted in judgment.",
    counter_moves: [
      "Return to denominators, not anecdotes.",
      "Ask: how often, out of how many?",
      "Look for representative data."
    ],
    tags: ["media", "statistics"],
    related_ids: ["bias_availability", "tool_base_rates"]
  },
  {
    id: "bias_avoidance",
    type: "bias",
    title: "Avoidance",
    aliases: ["avoidant coping"],
    one_liner: "Avoid the hard thing now, pay later with interest.",
    definition:
      "You reduce short-term discomfort by postponing, which often increases future complexity and stress.",
    counter_moves: [
      "Break tasks into tiny starts (2-minute rule).",
      "Use pre-commitments and timeboxing.",
      "Name the fear: what cost are you avoiding?"
    ],
    tags: ["planning", "emotion", "learning"],
    related_ids: ["tool_timeboxing", "tool_prioritization", "razor_parkinson_triviality"]
  },
  {
    id: "bias_reification",
    type: "bias",
    title: "Reification",
    aliases: ["treating abstractions as things"],
    one_liner: "Treat labels and models as if they are the reality itself.",
    definition:
      "You mistake a category, metric, or model for the underlying phenomenon, causing rigid thinking and misplaced certainty.",
    counter_moves: [
      "Ask what the label is summarizing.",
      "Seek edge cases and exceptions.",
      "Keep the model as a tool, not a deity."
    ],
    tags: ["learning", "epistemology"],
    related_ids: ["tool_model_mindset", "razor_parkinson_triviality"]
  },

  // =========================
  // THINKING TOOLS (skill and process)
  // =========================
  {
    id: "tool_steelman",
    type: "tool",
    title: "Steelmanning",
    aliases: ["principle of charity (argument)", "best version"],
    one_liner: "Rebuild the strongest version of the opposing view before responding.",
    definition:
      "A discipline that prevents strawmen and increases truth-finding. You restate the other side’s argument in its strongest plausible form and confirm accuracy.",
    steps: [
      "Restate their claim so they agree it’s fair.",
      "State their best evidence and strongest inference.",
      "Only then offer critique or alternative explanations."
    ],
    counter_moves: [
      "Ask: ‘What would you say is your strongest argument?’",
      "Separate their core claim from weak supporting rhetoric."
    ],
    questions_to_ask: [
      "What is the best case for this position?",
      "What evidence would make it reasonable?",
      "What would a smart advocate say?"
    ],
    tags: ["debate", "learning", "epistemology"],
    related_ids: ["fallacy_strawman", "razor_grice", "tool_argument_map"]
  },
  {
    id: "tool_definition_lock",
    type: "tool",
    title: "Definition Lock",
    aliases: ["pin the terms"],
    one_liner: "Write the key terms and keep them stable during debate.",
    definition:
      "Many arguments are hidden definition fights. Lock definitions or operational criteria early to prevent equivocation and motte-and-bailey drift.",
    steps: [
      "Identify key terms that carry the argument.",
      "Write definitions or measurement criteria.",
      "If terms shift, stop and re-lock."
    ],
    tags: ["debate", "epistemology"],
    related_ids: ["fallacy_equivocation", "fallacy_motte_bailey", "fallacy_loaded_question"]
  },
  {
    id: "tool_change_mind",
    type: "tool",
    title: "What Would Change My Mind?",
    aliases: ["update criteria"],
    one_liner: "Specify your update conditions before arguing.",
    definition:
      "A truth-oriented move: name what evidence would increase, decrease, or reverse your confidence. Without update criteria, debate becomes identity theater.",
    steps: [
      "State your current confidence (e.g., 70%).",
      "Name disconfirming evidence you would accept.",
      "Name the decision threshold for action."
    ],
    tags: ["epistemology", "learning"],
    related_ids: ["bias_confirmation", "razor_newton_fls", "tool_calibration"]
  },
  {
    id: "tool_falsifiability_check",
    type: "tool",
    title: "Falsifiability Check",
    aliases: ["testability check"],
    one_liner: "Ask what would prove a claim wrong.",
    definition:
      "If no imaginable evidence could count against a claim, it isn’t an empirical belief. It may still be meaningful, but it cannot be settled as factual.",
    steps: [
      "Ask: ‘What would we observe if this were false?’",
      "If nothing, classify as value/metaphor or drop as debate topic.",
      "If something, define the test and criteria."
    ],
    tags: ["epistemology", "debate"],
    related_ids: ["razor_newton_fls", "fallacy_unfalsifiable"]
  },
  {
    id: "tool_source_hygiene",
    type: "tool",
    title: "Source Hygiene",
    aliases: ["information hygiene", "media hygiene"],
    one_liner: "Evaluate credibility before you evaluate conclusions.",
    definition:
      "A practical filter: check provenance, incentives, track record, transparency, and corroboration before believing or sharing claims.",
    steps: [
      "Identify original source (not screenshots or reposts).",
      "Check incentives, conflicts, and editorial standards.",
      "Look for independent corroboration and data access."
    ],
    tags: ["media", "epistemology"],
    related_ids: ["fallacy_appeal_to_authority", "razor_hitchens", "tool_base_rates"]
  },
  {
    id: "tool_base_rates",
    type: "tool",
    title: "Base Rate Check",
    aliases: ["prior probability"],
    one_liner: "Start with how common something is before you update on new evidence.",
    definition:
      "Many errors come from ignoring prevalence. Base rates prevent dramatic overreactions to vivid anecdotes and weak signals.",
    steps: [
      "Ask: how common is this outcome in the relevant population/time window?",
      "Update based on evidence quality (strong vs weak signal).",
      "Beware selection effects in your sample."
    ],
    tags: ["statistics", "epistemology"],
    related_ids: ["bias_availability", "bias_survivorship", "fallacy_false_cause"]
  },
  {
    id: "tool_causality_check",
    type: "tool",
    title: "Causality Check",
    aliases: ["confounder check"],
    one_liner: "Don’t infer causation without mechanism, controls, and alternatives.",
    definition:
      "A checklist for causal claims: time order, alternative explanations, selection bias, confounding variables, and mechanisms.",
    steps: [
      "Confirm time order: cause precedes effect.",
      "List confounders and alternative causes.",
      "Ask what data would distinguish them."
    ],
    tags: ["statistics", "epistemology"],
    related_ids: ["fallacy_post_hoc", "fallacy_false_cause", "bias_illusory_correlation"]
  },
  {
    id: "tool_argument_map",
    type: "tool",
    title: "Argument Mapping",
    aliases: ["premise-conclusion map"],
    one_liner: "Write claims as premises leading to a conclusion; test each link.",
    definition:
      "Mapping makes hidden assumptions visible and prevents debate from turning into vibes and slogans.",
    steps: [
      "Write the conclusion in one sentence.",
      "List premises required for it to follow.",
      "Check each premise: evidence, relevance, and truth."
    ],
    tags: ["debate", "epistemology", "learning"],
    related_ids: ["fallacy_circular_reasoning", "fallacy_red_herring", "tool_definition_lock"]
  },
  {
    id: "tool_check_incentives",
    type: "tool",
    title: "Incentives Scan",
    aliases: ["follow the incentives"],
    one_liner: "Before judging intent, check constraints, incentives, and selection pressures.",
    definition:
      "Systems produce behavior. Incentives often explain outcomes better than personality stories.",
    steps: [
      "Ask who benefits, who pays, and who has veto power.",
      "Check metrics and rewards (Goodhart risk).",
      "Look for perverse incentives and selection effects."
    ],
    tags: ["systems", "incentives", "social"],
    related_ids: ["razor_goodhart", "razor_hanlon", "bias_fundamental_attribution"]
  },
  {
    id: "tool_systems_thinking",
    type: "tool",
    title: "Systems Thinking",
    aliases: ["feedback loops", "second-order effects"],
    one_liner: "Look for feedback loops, delays, and unintended consequences.",
    definition:
      "In complex systems, interventions ripple. Consider second-order effects, bottlenecks, and how agents adapt.",
    steps: [
      "Identify goal, constraints, and stakeholders.",
      "Map feedback loops and time delays.",
      "Run ‘what changes when people adapt?’ simulations."
    ],
    tags: ["systems", "planning"],
    related_ids: ["razor_goodhart", "razor_chesterton_fence", "tool_premortem"]
  },
  {
    id: "tool_premortem",
    type: "tool",
    title: "Pre-mortem",
    aliases: ["prospective hindsight"],
    one_liner: "Assume failure happened; explain why; fix the likely causes now.",
    definition:
      "A planning tool that reduces overconfidence by forcing you to imagine realistic failure modes in advance.",
    steps: [
      "Assume it failed badly in 6 months.",
      "List plausible reasons and rank likelihood.",
      "Add mitigations and early warning signals."
    ],
    tags: ["planning", "systems"],
    related_ids: ["bias_catastrophizing", "bias_sunk_cost", "tool_stop_rules"]
  },
  {
    id: "tool_reversible_decisions",
    type: "tool",
    title: "Reversible Decisions",
    aliases: ["two-way doors"],
    one_liner: "Prefer experiments you can undo when uncertainty is high.",
    definition:
      "When you’re uncertain, reduce downside by choosing options that preserve flexibility and allow learning.",
    steps: [
      "Classify: reversible (two-way) or irreversible (one-way).",
      "For reversible: test fast and learn.",
      "For irreversible: slow down and raise evidence standards."
    ],
    tags: ["planning", "uncertainty"],
    related_ids: ["razor_chesterton_fence", "tool_bounds", "tool_options"]
  },
  {
    id: "tool_bounds",
    type: "tool",
    title: "Boundaries & Exit Conditions",
    aliases: ["stop conditions", "walk-away point"],
    one_liner: "Decide what you will and won’t do before the heat rises.",
    definition:
      "Boundaries protect attention and reduce manipulation. They also prevent ‘infinite debate’ traps and goalpost shifting.",
    steps: [
      "Name your participation conditions (tone, evidence, time).",
      "Set exit triggers (insults, deflection, repeated goalpost shifts).",
      "Enforce gently, consistently, and early."
    ],
    tags: ["social", "debate"],
    related_ids: ["tool_boundaries", "fallacy_goalposts", "fallacy_gish_gallop"]
  },
  {
    id: "tool_boundaries",
    type: "tool",
    title: "Conversation Boundaries",
    aliases: ["frame control"],
    one_liner: "Keep debate on one claim, one standard, one timebox.",
    definition:
      "Healthy rational discussion has structure. Without boundaries, the loudest tactics win.",
    steps: [
      "Pick the single claim under discussion.",
      "Agree on standards (evidence, sources, timeframe).",
      "Timebox and stop when it degrades."
    ],
    tags: ["debate", "social"],
    related_ids: ["fallacy_gish_gallop", "fallacy_whataboutism", "tool_bounds"]
  },
  {
    id: "tool_calibration",
    type: "tool",
    title: "Calibration",
    aliases: ["confidence calibration"],
    one_liner: "Make your confidence match your accuracy over time.",
    definition:
      "Calibrated thinkers use probabilities, track outcomes, and adjust. Overconfidence is one of the most expensive cognitive habits.",
    steps: [
      "Assign probabilities (not certainties) to predictions.",
      "Track outcomes; compute how often you were right at each confidence level.",
      "Adjust your confidence scale accordingly."
    ],
    tags: ["learning", "statistics", "epistemology"],
    related_ids: ["bias_overconfidence", "bias_dunning_kruger", "tool_fermi"]
  },
  {
    id: "tool_fermi",
    type: "tool",
    title: "Fermi Estimation",
    aliases: ["order-of-magnitude estimate"],
    one_liner: "Estimate unknowns by decomposing into known-ish parts.",
    definition:
      "A practical reasoning tool: break a question into factors, estimate each, and multiply. Useful for sanity checks and planning.",
    steps: [
      "Define the quantity and units.",
      "Break into multiplicative components.",
      "Use conservative ranges; report an interval."
    ],
    tags: ["statistics", "planning", "learning"],
    related_ids: ["tool_calibration", "bias_anchoring"]
  },
  {
    id: "tool_prioritization",
    type: "tool",
    title: "Prioritization",
    aliases: ["impact vs effort", "triage"],
    one_liner: "Spend effort where it buys the most truth or outcome.",
    definition:
      "Rational thought includes attention economics: choose which questions to answer, which debates to enter, and which tasks to do first.",
    steps: [
      "Define the objective (truth, decision, relationship, safety).",
      "Rank by expected impact and reversibility.",
      "Timebox and stop when diminishing returns hits."
    ],
    tags: ["planning", "learning"],
    related_ids: ["razor_parkinson_triviality", "tool_timeboxing"]
  },
  {
    id: "tool_timeboxing",
    type: "tool",
    title: "Timeboxing",
    aliases: ["fixed-time work", "pomodoro (variant)"],
    one_liner: "Limit time to prevent spirals and force momentum.",
    definition:
      "Timeboxing turns vague tasks into finite experiments and reduces avoidance and perfection loops.",
    steps: [
      "Pick a small timebox (10–30 minutes).",
      "Define ‘done for now’ criteria.",
      "Stop when time ends; decide next box."
    ],
    tags: ["planning", "learning"],
    related_ids: ["bias_avoidance", "tool_prioritization"]
  },
  {
    id: "tool_options",
    type: "tool",
    title: "Option Generation",
    aliases: ["third option", "expand the menu"],
    one_liner: "If you see two choices, you probably haven’t looked yet.",
    definition:
      "Generate additional options to escape false dilemmas, reduce conflict, and discover hybrid solutions.",
    steps: [
      "List constraints and goals.",
      "Generate 5 options rapidly without judging.",
      "Combine, iterate, then evaluate."
    ],
    tags: ["planning", "systems", "debate"],
    related_ids: ["fallacy_false_dilemma", "bias_black_white"]
  },
  {
    id: "tool_stop_rules",
    type: "tool",
    title: "Stop Rules",
    aliases: ["quit criteria", "decision thresholds"],
    one_liner: "Decide when to stop, pivot, or quit before you’re emotionally invested.",
    definition:
      "A protection against sunk cost and endless optimization. Stop rules prevent you from ‘just one more’ decisions that bleed time and sanity.",
    steps: [
      "Define a measurable stop condition (time, money, performance).",
      "Define a pivot condition.",
      "Define a quit condition."
    ],
    tags: ["planning", "emotion"],
    related_ids: ["bias_sunk_cost", "tool_premortem", "tool_bounds"]
  },
  {
    id: "tool_pause_label",
    type: "tool",
    title: "Pause & Label",
    aliases: ["name the feeling"],
    one_liner: "Name the emotion; reduce its control over inference.",
    definition:
      "When emotionally activated, your brain substitutes affect for evidence. Labeling creates distance and restores prefrontal control.",
    steps: [
      "Pause for one breath.",
      "Label the emotion and the impulse (e.g., ‘anger + attack impulse’).",
      "Return to the claim and evidence."
    ],
    tags: ["emotion", "epistemology"],
    related_ids: ["bias_affect_heuristic", "bias_negativity"]
  },
  {
    id: "tool_operationalize",
    type: "tool",
    title: "Operationalize the Claim",
    aliases: ["make it measurable"],
    one_liner: "Translate fuzzy words into observable criteria.",
    definition:
      "If you cannot say what you’d observe if a claim is true or false, you can’t test it. Operationalization turns arguments into checkable statements.",
    steps: [
      "Identify the vague term (e.g., ‘safe’, ‘effective’, ‘corrupt’).",
      "Define measurable indicators and thresholds.",
      "State what evidence would change confidence."
    ],
    tags: ["epistemology", "learning"],
    related_ids: ["tool_definition_lock", "fallacy_category_error"]
  },

  // =========================
  // EXTRA BIASES (for coverage / quizzes)
  // =========================
  {
    id: "bias_overconfidence",
    type: "bias",
    title: "Overconfidence",
    aliases: ["certainty bias"],
    one_liner: "Be more sure than your evidence warrants.",
    definition:
      "People often assign higher confidence than accuracy justifies, especially in complex domains with weak feedback loops.",
    counter_moves: ["Use probabilities and track outcomes.", "Seek harsh feedback and external benchmarks.", "Ask what you might be missing."],
    tags: ["learning", "metacognition"],
    related_ids: ["tool_calibration", "bias_dunning_kruger"]
  },

  // =========================
  // VIRTUES (meta skills; optional section in UI)
  // =========================
  {
    id: "virtue_humility",
    type: "virtue",
    title: "Intellectual Humility",
    aliases: ["epistemic humility"],
    one_liner: "Be willing to be wrong without becoming fragile.",
    definition:
      "Humility is calibration plus courage: you pursue what’s true even when it threatens your ego or tribe.",
    counter_moves: [
      "Separate identity from belief.",
      "Practice ‘I might be wrong’ without collapsing into relativism.",
      "Ask for the best critique."
    ],
    tags: ["learning", "epistemology", "identity"],
    related_ids: ["tool_change_mind", "tool_calibration", "bias_identity_protective"]
  },
  {
    id: "virtue_clarity",
    type: "virtue",
    title: "Clarity",
    aliases: ["precision"],
    one_liner: "Define terms, separate claims, and reduce ambiguity.",
    definition:
      "Clarity is kindness to truth: it removes the fog that fallacies and bias love to hide in.",
    tags: ["debate", "epistemology"],
    related_ids: ["tool_definition_lock", "tool_operationalize", "fallacy_equivocation"]
  },

  // =========================
  // NOTE
  // =========================
  // The dataset above is intentionally curated but still “full-featured”
  // for a practical site: it covers core razors, major fallacies, high-impact
  // biases, and the tools needed to defend good reasoning.
  //
  // If you want literal encyclopedic coverage (100+ additional biases/fallacies),
  // the structure supports it—just append more entries using the same schema.
];
