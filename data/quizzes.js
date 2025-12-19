/* data/quizzes.js
   ClearMind Atlas — Practice Lab question bank
   This file is intentionally “dumb data”: human-editable, no UI logic.

   practice.js expects:
   QUIZZES = { fallacy: [], bias: [], tool: [] }
   Each question:
   {
     prompt: "string",
     choices: ["A","B","C","D"],
     answer: 0..3,                  // index into choices
     explanation: "string",
     related_ids: ["entry_id", ...], // links back to library/toolkit pin suggestions
     difficulty: 1|2|3
   }
*/

export const QUIZZES = {
  // =========================
  // FALLACIES
  // =========================
  fallacy: [
    {
      prompt: "“So you’re saying if we regulate emissions, you want to ban all cars.”\nWhat’s the best label for the error?",
      choices: ["Strawman", "False dilemma", "Red herring", "Equivocation"],
      answer: 0,
      explanation: "This replaces the real claim (stricter standards) with an easier-to-attack extreme (ban all cars). The fix is to restate the claim charitably and confirm it.",
      related_ids: ["fallacy_strawman", "tool_steelman", "razor_grice"],
      difficulty: 1
    },
    {
      prompt: "“You’re wrong because you’re an idiot.”\nWhat fallacy is this?",
      choices: ["Ad hominem", "Tu quoque", "Appeal to authority", "Circular reasoning"],
      answer: 0,
      explanation: "Attacking the person doesn’t address the claim’s truth. If credibility is relevant, address it with specific evidence, not insults.",
      related_ids: ["fallacy_ad_hominem", "tool_argument_map", "tool_boundaries"],
      difficulty: 1
    },
    {
      prompt: "“Either we pass this policy or society will collapse.”\nWhat’s the primary error?",
      choices: ["False dilemma", "Appeal to nature", "No true Scotsman", "Post hoc ergo propter hoc"],
      answer: 0,
      explanation: "This compresses a spectrum of options into two extremes. The antidote is generating additional options and clarifying constraints.",
      related_ids: ["fallacy_false_dilemma", "tool_options", "bias_black_white"],
      difficulty: 1
    },
    {
      prompt: "A debate keeps circling because one side uses “freedom” to mean “no regulation,” then “freedom” to mean “personal autonomy.”\nWhat’s happening?",
      choices: ["Equivocation", "Red herring", "Appeal to popularity", "Slippery slope"],
      answer: 0,
      explanation: "Equivocation is meaning-shift mid-argument. Lock the definition or operationalize the term.",
      related_ids: ["fallacy_equivocation", "tool_definition_lock", "tool_operationalize"],
      difficulty: 2
    },
    {
      prompt: "They argue a provocative claim, then when challenged say “I only meant a mild, obvious version,” then return to the provocative claim later.\nLabel it.",
      choices: ["Motte-and-Bailey", "Moving the goalposts", "Special pleading", "Appeal to ignorance"],
      answer: 0,
      explanation: "Motte-and-bailey swaps between a bold claim and a safer one to avoid critique. Demand a stable statement of the claim.",
      related_ids: ["fallacy_motte_bailey", "tool_definition_lock", "tool_boundaries"],
      difficulty: 2
    },
    {
      prompt: "You provide the evidence they requested; they respond: “Okay, but now you must also prove X, Y, and Z.”\nWhat pattern is this?",
      choices: ["Moving the goalposts", "Gish gallop", "Red herring", "Tu quoque"],
      answer: 0,
      explanation: "When standards change after being met, the conversation can’t converge. Pre-agree standards and use boundaries/exit conditions.",
      related_ids: ["fallacy_goalposts", "tool_bounds", "tool_boundaries"],
      difficulty: 2
    },
    {
      prompt: "Someone floods you with 15 shaky claims in 30 seconds and demands you respond to all.\nLabel it.",
      choices: ["Gish Gallop", "Appeal to authority", "Circular reasoning", "Appeal to nature"],
      answer: 0,
      explanation: "The tactic exploits time limits. Pick one claim, ask them to rank their strongest, and proceed one at a time.",
      related_ids: ["fallacy_gish_gallop", "tool_boundaries", "tool_source_hygiene"],
      difficulty: 2
    },
    {
      prompt: "“You can’t prove it’s false, so it must be true.”\nBest label?",
      choices: ["Appeal to ignorance", "Burden of proof shift", "Unfalsifiable claim", "Post hoc"],
      answer: 0,
      explanation: "Lack of disproof is not proof. Ask what evidence should exist if it were true, and return burden of proof to the claimant.",
      related_ids: ["fallacy_appeal_to_ignorance", "razor_hitchens", "tool_falsifiability_check"],
      difficulty: 1
    },
    {
      prompt: "“Prove me wrong.” (They provide no evidence for their claim.)\nWhat’s the issue?",
      choices: ["Shifting the burden of proof", "Appeal to authority", "False cause", "No true Scotsman"],
      answer: 0,
      explanation: "The claimant must provide evidence. You’re not obligated to refute unsupported claims.",
      related_ids: ["fallacy_burden_of_proof", "razor_hitchens", "tool_bounds"],
      difficulty: 1
    },
    {
      prompt: "“Have you stopped lying to your customers?”\nWhat’s wrong with the question?",
      choices: ["Loaded question", "Red herring", "Strawman", "Appeal to popularity"],
      answer: 0,
      explanation: "It smuggles in an unproven assumption. Reject the premise and rewrite the question neutrally.",
      related_ids: ["fallacy_loaded_question", "tool_definition_lock"],
      difficulty: 2
    },
    {
      prompt: "“After I wore my lucky socks, we won. The socks caused the win.”\nBest label?",
      choices: ["Post hoc ergo propter hoc", "Circular reasoning", "Appeal to nature", "Special pleading"],
      answer: 0,
      explanation: "Sequence alone doesn’t establish causation. Use causality checks (confounders, controls, mechanism).",
      related_ids: ["fallacy_post_hoc", "tool_causality_check", "bias_illusory_correlation"],
      difficulty: 1
    },
    {
      prompt: "“Correlation means causation—look, they move together.”\nBest label?",
      choices: ["False cause", "Appeal to authority", "Tu quoque", "No true Scotsman"],
      answer: 0,
      explanation: "Association can be due to confounders, selection, or chance. Ask for controls and mechanism.",
      related_ids: ["fallacy_false_cause", "tool_causality_check", "tool_base_rates"],
      difficulty: 2
    },
    {
      prompt: "“That expert said it, therefore it’s true.” (No data, no mechanism.)\nBest label?",
      choices: ["Appeal to authority", "Appeal to popularity", "Red herring", "Circular reasoning"],
      answer: 0,
      explanation: "Authority can be evidence only when relevant and supported; otherwise it substitutes for evidence.",
      related_ids: ["fallacy_appeal_to_authority", "tool_source_hygiene", "bias_authority"],
      difficulty: 1
    },
    {
      prompt: "“It’s natural, so it’s safe and better.”\nBest label?",
      choices: ["Appeal to nature", "Appeal to tradition", "False dilemma", "Category error"],
      answer: 0,
      explanation: "‘Natural’ and ‘good/safe’ are different axes. Ask for outcome evidence and base rates.",
      related_ids: ["fallacy_appeal_to_nature", "bias_naturalness", "tool_base_rates"],
      difficulty: 1
    },
    {
      prompt: "“We’ve always done it this way, so it must be right.”\nBest label?",
      choices: ["Appeal to tradition", "No true Scotsman", "Slippery slope", "Equivocation"],
      answer: 0,
      explanation: "Tradition alone isn’t evidence. First understand why it existed (Chesterton’s Fence), then evaluate outcomes now.",
      related_ids: ["fallacy_appeal_to_tradition", "razor_chesterton_fence"],
      difficulty: 1
    },
    {
      prompt: "“No true fan would criticize the team. If you criticize them, you’re not a true fan.”\nBest label?",
      choices: ["No True Scotsman", "Special pleading", "Tu quoque", "Red herring"],
      answer: 0,
      explanation: "The definition is adjusted to exclude counterexamples. Ask for objective membership criteria.",
      related_ids: ["fallacy_no_true_scotsman", "tool_definition_lock", "bias_in_group"],
      difficulty: 2
    },
    {
      prompt: "“Rules apply to you, but not to me, because my case is different.” (No principled reason given.)\nBest label?",
      choices: ["Special pleading", "Ad hominem", "Appeal to popularity", "Strawman"],
      answer: 0,
      explanation: "This is a double standard without justification. Ask what rule would allow the exception consistently.",
      related_ids: ["fallacy_special_pleading", "tool_consistency_check", "bias_identity_protective"],
      difficulty: 2
    },
    {
      prompt: "“You say smoking is unhealthy, but you used to smoke—so your claim is invalid.”\nBest label?",
      choices: ["Tu quoque", "Ad hominem", "Red herring", "Circular reasoning"],
      answer: 0,
      explanation: "Hypocrisy doesn’t refute truth. Separate the claim from the claimant and ask for evidence on the claim.",
      related_ids: ["fallacy_tu_quoque", "tool_argument_map"],
      difficulty: 2
    },
    {
      prompt: "They respond to your criticism by saying: “What about when your side did X?”\nBest label?",
      choices: ["Whataboutism", "Red herring", "Moving the goalposts", "Appeal to emotion"],
      answer: 0,
      explanation: "This deflects from the original claim. Name the deflection and return to the initial question, or park the tangent.",
      related_ids: ["fallacy_whataboutism", "fallacy_red_herring", "tool_boundaries"],
      difficulty: 2
    },
    {
      prompt: "“If we allow this small change, soon we’ll end up in a dystopia.” (No mechanism, no probabilities.)\nBest label?",
      choices: ["Slippery slope", "False dilemma", "Appeal to authority", "Circular reasoning"],
      answer: 0,
      explanation: "Slippery slope asserts inevitability without support. Ask for the causal chain, likelihood, and guardrails.",
      related_ids: ["fallacy_slippery_slope", "tool_bounds", "tool_causality_check"],
      difficulty: 2
    },
    {
      prompt: "“Everyone believes it, so it must be true.”\nBest label?",
      choices: ["Appeal to popularity", "Appeal to authority", "Post hoc", "Equivocation"],
      answer: 0,
      explanation: "Popularity is not truth; it can reflect conformity and cascades. Ask for evidence beyond social proof.",
      related_ids: ["fallacy_appeal_to_popularity", "bias_conformity", "tool_source_hygiene"],
      difficulty: 1
    },
    {
      prompt: "You’re arguing about a factual claim, but they keep steering into moral outrage to ‘win’.\nBest label?",
      choices: ["Appeal to emotion", "Red herring", "Tu quoque", "No true Scotsman"],
      answer: 0,
      explanation: "Emotion can be valid as a human signal, but it’s not evidence for a factual conclusion. Separate factual inference from moral response.",
      related_ids: ["fallacy_appeal_to_emotion", "bias_affect_heuristic", "tool_pause_label"],
      difficulty: 2
    },
    {
      prompt: "They introduce a totally different topic midstream so the original claim never gets resolved.\nBest label?",
      choices: ["Red herring", "Equivocation", "Circular reasoning", "Appeal to nature"],
      answer: 0,
      explanation: "A diversion breaks convergence. Restate the original point and proceed one claim at a time.",
      related_ids: ["fallacy_red_herring", "tool_argument_map", "tool_boundaries"],
      difficulty: 1
    },
    {
      prompt: "“This model is perfect because it is the correct model.”\nBest label?",
      choices: ["Circular reasoning", "Appeal to authority", "False cause", "Gish gallop"],
      answer: 0,
      explanation: "The premise assumes the conclusion. Ask for independent evidence supporting the premise.",
      related_ids: ["fallacy_circular_reasoning", "tool_argument_map"],
      difficulty: 2
    },
    {
      prompt: "A claim is framed so that any evidence against it is reinterpreted as evidence for it.\nBest label?",
      choices: ["Unfalsifiable claim", "Appeal to ignorance", "Moving the goalposts", "Equivocation"],
      answer: 0,
      explanation: "If no evidence could count against a claim, it cannot be empirically evaluated. Ask for a falsifier and test criteria.",
      related_ids: ["fallacy_unfalsifiable", "tool_falsifiability_check", "razor_newton_fls"],
      difficulty: 3
    },
    {
      prompt: "Someone treats a metaphor as literal evidence in a scientific dispute.\nBest label?",
      choices: ["Category error", "Appeal to tradition", "Post hoc", "No true Scotsman"],
      answer: 0,
      explanation: "They’re applying the wrong ‘type’ of reasoning (metaphor → mechanism). Clarify what category the claim belongs to and what counts as evidence.",
      related_ids: ["fallacy_category_error", "tool_operationalize", "tool_definition_lock"],
      difficulty: 3
    }
  ],

  // =========================
  // BIASES
  // =========================
  bias: [
    {
      prompt: "You read five vivid news stories about a rare event and conclude it’s happening everywhere.\nWhich bias fits best?",
      choices: ["Availability heuristic", "Sunk cost", "Status quo bias", "Halo effect"],
      answer: 0,
      explanation: "Vivid, recent examples feel common. The fix is base rates and representative data.",
      related_ids: ["bias_availability", "tool_base_rates", "bias_salience"],
      difficulty: 1
    },
    {
      prompt: "You keep a failing plan because you’ve already invested too much to quit.\nWhich bias is this?",
      choices: ["Sunk cost fallacy", "Anchoring", "Conformity bias", "Naturalness bias"],
      answer: 0,
      explanation: "Past investment distorts present choice. Use stop rules and clean-slate decisions.",
      related_ids: ["bias_sunk_cost", "tool_stop_rules", "tool_premortem"],
      difficulty: 1
    },
    {
      prompt: "You judge someone as competent in everything because they’re charming.\nWhich bias is this?",
      choices: ["Halo effect", "Authority bias", "Reification", "Illusory correlation"],
      answer: 0,
      explanation: "A single positive trait spills into unrelated judgments. Use structured criteria instead of vibes.",
      related_ids: ["bias_halo", "bias_authority", "tool_source_hygiene"],
      difficulty: 1
    },
    {
      prompt: "You interpret your opponent’s mistakes as character flaws but yours as circumstances.\nWhich bias?",
      choices: ["Fundamental attribution error", "Confirmation bias", "Anchoring", "Status quo bias"],
      answer: 0,
      explanation: "We over-attribute others to disposition and ourselves to context. Check incentives and constraints first.",
      related_ids: ["bias_fundamental_attribution", "tool_check_incentives", "razor_hanlon"],
      difficulty: 2
    },
    {
      prompt: "You ignore strong evidence because accepting it would threaten your belonging or identity.\nWhich bias?",
      choices: ["Identity-protective cognition", "Anchoring", "Availability heuristic", "Naturalness bias"],
      answer: 0,
      explanation: "Evidence becomes a social threat. Create identity-safe off-ramps and define update conditions.",
      related_ids: ["bias_identity_protective", "tool_change_mind", "tool_steelman"],
      difficulty: 2
    },
    {
      prompt: "You notice evidence for your belief immediately, and dismiss contrary evidence as ‘biased’.\nWhich bias?",
      choices: ["Confirmation bias", "Conformity bias", "Negativity bias", "Reification"],
      answer: 0,
      explanation: "Confirmation bias filters search and interpretation. Counter: actively hunt best counterevidence and predefine what would change your mind.",
      related_ids: ["bias_confirmation", "tool_change_mind", "tool_source_hygiene"],
      difficulty: 1
    },
    {
      prompt: "A first price you hear for something shapes your later judgment even if it’s random.\nWhich bias?",
      choices: ["Anchoring", "Sunk cost", "Authority bias", "In-group bias"],
      answer: 0,
      explanation: "Anchors stick. Counter: generate independent estimates and use ranges.",
      related_ids: ["bias_anchoring", "tool_fermi", "tool_calibration"],
      difficulty: 1
    },
    {
      prompt: "You believe a claim mainly because a famous person said it.\nWhich bias?",
      choices: ["Authority bias", "Halo effect", "Status quo bias", "Illusory correlation"],
      answer: 0,
      explanation: "Authority is a heuristic, not a substitute for evidence. Check domain relevance and corroboration.",
      related_ids: ["bias_authority", "tool_source_hygiene", "fallacy_appeal_to_authority"],
      difficulty: 1
    },
    {
      prompt: "You overestimate danger because negative information is louder and sticks in memory.\nWhich bias?",
      choices: ["Negativity bias", "Conformity bias", "Naturalness bias", "Reification"],
      answer: 0,
      explanation: "Bad signals dominate attention. Counter: return to base rates and representative data.",
      related_ids: ["bias_negativity", "tool_base_rates", "bias_availability"],
      difficulty: 1
    },
    {
      prompt: "You prefer the current state even when better options exist, because change feels risky.\nWhich bias?",
      choices: ["Status quo bias", "Sunk cost", "Anchoring", "Halo effect"],
      answer: 0,
      explanation: "Defaults feel ‘normal.’ Use reversible experiments and compare risks of change vs non-change.",
      related_ids: ["bias_status_quo", "tool_reversible_decisions", "razor_chesterton_fence"],
      difficulty: 2
    },
    {
      prompt: "You treat ‘natural’ as automatically safer/better than ‘artificial.’\nWhich bias?",
      choices: ["Naturalness bias", "Conformity bias", "In-group bias", "Anchoring"],
      answer: 0,
      explanation: "Natural isn’t synonymous with safe. Ask for outcome evidence and base rate comparisons.",
      related_ids: ["bias_naturalness", "tool_base_rates", "fallacy_appeal_to_nature"],
      difficulty: 1
    },
    {
      prompt: "You interpret complex reality as all-or-nothing and miss nuanced options.\nWhich bias?",
      choices: ["Black-and-white thinking", "Halo effect", "Authority bias", "Survivorship bias"],
      answer: 0,
      explanation: "Binary thinking erases gradients. Use probabilities and generate third options.",
      related_ids: ["bias_black_white", "tool_calibration", "tool_options"],
      difficulty: 2
    },
    {
      prompt: "You ‘see’ patterns in noise and believe two things are linked without adequate data.\nWhich bias?",
      choices: ["Illusory correlation", "Halo effect", "Status quo bias", "Conformity bias"],
      answer: 0,
      explanation: "Pattern-seeking can overfit. Counter: controls, confounders, and replication.",
      related_ids: ["bias_illusory_correlation", "tool_causality_check", "fallacy_false_cause"],
      difficulty: 2
    },
    {
      prompt: "You favor your group’s claims and interpret outsiders harshly.\nWhich bias?",
      choices: ["In-group bias", "Anchoring", "Reification", "Availability heuristic"],
      answer: 0,
      explanation: "Tribal belonging distorts standards. Use consistency checks and steelman the out-group’s best case.",
      related_ids: ["bias_in_group", "tool_consistency_check", "tool_steelman"],
      difficulty: 2
    },
    {
      prompt: "You match the group’s view because disagreement feels socially costly.\nWhich bias?",
      choices: ["Conformity bias", "Sunk cost", "Negativity bias", "Naturalness bias"],
      answer: 0,
      explanation: "Social proof pressures judgment. Counter: independent estimates and diversified sources.",
      related_ids: ["bias_conformity", "tool_source_hygiene", "fallacy_appeal_to_popularity"],
      difficulty: 2
    },
    {
      prompt: "You jump to worst-case outcomes and treat them as likely.\nWhich bias?",
      choices: ["Catastrophizing", "Halo effect", "Anchoring", "Survivorship bias"],
      answer: 0,
      explanation: "Severity and probability get fused. Separate them, quantify both, and use base rates and stop rules.",
      related_ids: ["bias_catastrophizing", "tool_calibration", "tool_stop_rules"],
      difficulty: 2
    },
    {
      prompt: "You treat a label or metric as if it’s the underlying reality.\nWhich bias?",
      choices: ["Reification", "Authority bias", "Conformity bias", "Negativity bias"],
      answer: 0,
      explanation: "Models are tools, not truth itself. Ask what the label is summarizing and seek edge cases.",
      related_ids: ["bias_reification", "tool_operationalize", "tool_systems_thinking"],
      difficulty: 3
    },
    {
      prompt: "You believe a strategy is reliable because you only see the winners, not the failures.\nWhich bias?",
      choices: ["Survivorship bias", "Availability heuristic", "Anchoring", "Naturalness bias"],
      answer: 0,
      explanation: "The graveyard is invisible. Counter: ask who failed and isn’t in the sample; check base rates.",
      related_ids: ["bias_survivorship", "tool_base_rates", "razor_goodhart"],
      difficulty: 2
    },
    {
      prompt: "You feel a strong emotional reaction and treat it like evidence of truth.\nWhich bias?",
      choices: ["Affect heuristic", "Halo effect", "Anchoring", "Status quo bias"],
      answer: 0,
      explanation: "Emotion becomes inference. Counter: pause & label, then return to evidence and testability.",
      related_ids: ["bias_affect_heuristic", "tool_pause_label", "fallacy_appeal_to_emotion"],
      difficulty: 2
    }
  ],

  // =========================
  // TOOLS / BEST NEXT MOVE
  // =========================
  tool: [
    {
      prompt: "You suspect you’re arguing past each other because key terms keep sliding.\nWhat’s the best next move?",
      choices: ["Definition Lock", "Fermi Estimation", "Pre-mortem", "Timeboxing"],
      answer: 0,
      explanation: "Lock definitions or operational criteria to prevent equivocation and motte-and-bailey drift.",
      related_ids: ["tool_definition_lock", "fallacy_equivocation", "fallacy_motte_bailey"],
      difficulty: 1
    },
    {
      prompt: "A claim is being debated as factual, but no possible evidence could count against it.\nBest next move?",
      choices: ["Falsifiability Check", "Option Generation", "Argument Mapping", "Prioritization"],
      answer: 0,
      explanation: "If it can’t be falsified in principle, it isn’t an empirical claim. Ask for a falsifier or reclassify it as value/narrative.",
      related_ids: ["tool_falsifiability_check", "razor_newton_fls", "fallacy_unfalsifiable"],
      difficulty: 2
    },
    {
      prompt: "You’re tempted to share a viral screenshot claim immediately.\nBest next move?",
      choices: ["Source Hygiene", "Steelmanning", "Pre-mortem", "Timeboxing"],
      answer: 0,
      explanation: "Check original source, corroboration, incentives, and standards before you spread or build conclusions.",
      related_ids: ["tool_source_hygiene", "razor_hitchens", "bias_authority"],
      difficulty: 1
    },
    {
      prompt: "You’re emotionally flooded and notice your reasoning turning into certainty and attack.\nBest next move?",
      choices: ["Pause & Label", "Causality Check", "Fermi Estimation", "Systems Thinking"],
      answer: 0,
      explanation: "Name the emotion and impulse, then return to the factual claim and evidence once your nervous system settles.",
      related_ids: ["tool_pause_label", "bias_affect_heuristic", "bias_negativity"],
      difficulty: 1
    },
    {
      prompt: "You’re evaluating whether a surprising claim is plausible.\nBest next move?",
      choices: ["Base Rate Check", "Option Generation", "Conversation Boundaries", "Prioritization"],
      answer: 0,
      explanation: "Start with prevalence (priors), then update based on evidence quality. This prevents vivid-anecdote overreaction.",
      related_ids: ["tool_base_rates", "bias_availability", "razor_sagan"],
      difficulty: 2
    },
    {
      prompt: "You and a colleague disagree about a causal claim.\nBest next move?",
      choices: ["Causality Check", "Definition Lock", "Timeboxing", "Reversible Decisions"],
      answer: 0,
      explanation: "List confounders, confirm time order, ask for mechanism, and identify data that distinguishes alternatives.",
      related_ids: ["tool_causality_check", "fallacy_post_hoc", "fallacy_false_cause"],
      difficulty: 2
    },
    {
      prompt: "You want to argue fairly, and avoid accidentally attacking a caricature.\nBest next move?",
      choices: ["Steelmanning", "Pre-mortem", "Fermi Estimation", "Stop Rules"],
      answer: 0,
      explanation: "Restate their view in its strongest form and confirm it before critiquing. This is the fastest way to reduce noise in debate.",
      related_ids: ["tool_steelman", "fallacy_strawman", "razor_grice"],
      difficulty: 1
    },
    {
      prompt: "A discussion is degrading into endless deflections and shifting standards.\nBest next move?",
      choices: ["Conversation Boundaries", "Systems Thinking", "Option Generation", "Fermi Estimation"],
      answer: 0,
      explanation: "Pick one claim, one standard, one timebox. If boundaries can’t be maintained, exit. Convergence is a requirement.",
      related_ids: ["tool_boundaries", "fallacy_gish_gallop", "fallacy_whataboutism"],
      difficulty: 2
    },
    {
      prompt: "You need to check whether your debate partner’s argument actually supports their conclusion.\nBest next move?",
      choices: ["Argument Mapping", "Pause & Label", "Timeboxing", "Reversible Decisions"],
      answer: 0,
      explanation: "Write premises → conclusion and test each link for evidence and relevance. It exposes hidden assumptions quickly.",
      related_ids: ["tool_argument_map", "fallacy_circular_reasoning", "fallacy_red_herring"],
      difficulty: 2
    },
    {
      prompt: "You are making a big change under uncertainty and want to reduce downside.\nBest next move?",
      choices: ["Reversible Decisions", "Steelmanning", "Base Rate Check", "Argument Mapping"],
      answer: 0,
      explanation: "Prefer experiments you can undo, learn quickly, and reserve slow decisions for irreversible ‘one-way doors.’",
      related_ids: ["tool_reversible_decisions", "razor_chesterton_fence", "tool_premortem"],
      difficulty: 2
    },
    {
      prompt: "A plan feels solid, but you want to identify realistic failure modes before you commit.\nBest next move?",
      choices: ["Pre-mortem", "Definition Lock", "Source Hygiene", "Option Generation"],
      answer: 0,
      explanation: "Assume it failed and explain why. Then add mitigations and early warning signals.",
      related_ids: ["tool_premortem", "bias_sunk_cost", "tool_stop_rules"],
      difficulty: 1
    },
    {
      prompt: "You keep continuing a project mainly because you’ve already invested heavily.\nBest next move?",
      choices: ["Stop Rules", "Steelmanning", "Source Hygiene", "Systems Thinking"],
      answer: 0,
      explanation: "Define quit/pivot conditions in advance to neutralize sunk cost pressure and endless optimization.",
      related_ids: ["tool_stop_rules", "bias_sunk_cost", "tool_prioritization"],
      difficulty: 2
    }
  ]
};

// Optional: keep this export stable for any future UI components.
export default QUIZZES;
