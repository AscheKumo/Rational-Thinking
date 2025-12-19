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
    },

    {
      prompt: "In a planning meeting, you propose adding a small safety check. A teammate replies: ‘So you want to slow everything down and kill productivity.’\nWhat’s the best label for the error?",
      choices: ["Red herring", "Strawman", "False dilemma", "Ad hominem"],
      answer: 1,
      explanation: "Your proposal (a targeted safety check) is replaced with an exaggerated version (killing productivity). The wise move is to restate your actual claim precisely and confirm agreement before debating tradeoffs.",
      related_ids: ["fallacy_strawman", "tool_definition_lock", "tool_steelman"],
      difficulty: 1
    },
    {
      prompt: "Someone says: ‘This belief is true because it’s what our community has always believed.’\nBest label?",
      choices: ["Appeal to popularity", "Appeal to nature", "Appeal to tradition", "Circular reasoning"],
      answer: 2,
      explanation: "Tradition is a history of practice, not a guarantee of truth. The mature move is to understand what the tradition was solving (Chesterton’s Fence) and then evaluate outcomes with today’s evidence.",
      related_ids: ["fallacy_appeal_to_tradition", "razor_chesterton_fence", "tool_base_rates"],
      difficulty: 1
    },
    {
      prompt: "A person makes an extraordinary claim, offers no evidence, and insists: ‘If you can’t disprove it, you must accept it.’\nBest label?",
      choices: ["Appeal to ignorance", "Moving the goalposts", "Tu quoque", "Equivocation"],
      answer: 0,
      explanation: "Lack of disproof isn’t proof. A good thinking habit is to ask what evidence should exist if it were true and keep the burden of proof with the claimant.",
      related_ids: ["fallacy_appeal_to_ignorance", "fallacy_burden_of_proof", "razor_hitchens"],
      difficulty: 1
    },
    {
      prompt: "A discussion about school funding turns into ten minutes about a politician’s personal scandal, and the funding question never gets answered.\nBest label?",
      choices: ["Red herring", "Whataboutism", "Gish gallop", "False cause"],
      answer: 0,
      explanation: "It’s a topic diversion that prevents convergence. The skill is naming the diversion and returning to the original claim (or parking the tangent explicitly).",
      related_ids: ["fallacy_red_herring", "tool_boundaries", "tool_argument_map"],
      difficulty: 2
    },
    {
      prompt: "A claim is defined so that any counterexample is re-labeled as ‘not a real counterexample.’\nBest label?",
      choices: ["No True Scotsman", "Special pleading", "Unfalsifiable claim", "Appeal to authority"],
      answer: 2,
      explanation: "If a claim is protected from disconfirmation by definition or ad-hoc excuses, it can’t be tested. Ask for clear criteria and what evidence would count against it.",
      related_ids: ["fallacy_unfalsifiable", "tool_falsifiability_check", "razor_newton_fls"],
      difficulty: 3
    },

    {
      prompt: "In a code review you flag a bug. The response is: ‘You only say that because you’re jealous of me.’\nWhat fallacy fits best?",
      choices: ["Ad hominem", "Red herring", "Equivocation", "Appeal to popularity"],
      answer: 0,
      explanation: "It attacks your motive/character instead of addressing the claim (the bug). The mature move is to bring the discussion back to evidence: reproduction steps, tests, and the specific diff.",
      related_ids: ["fallacy_ad_hominem", "tool_argument_map", "razor_grice"],
      difficulty: 1
    },
    {
      prompt: "A manager says: ‘If you don’t work this weekend, do you even care about the team?’\nWhat’s wrong with the question?",
      choices: ["Loaded question", "False dilemma", "Tu quoque", "Post hoc ergo propter hoc"],
      answer: 0,
      explanation: "It smuggles in an assumption (that not working the weekend implies lack of care). The wise response is to reject the premise and reframe the real question: priorities, scope, and expectations.",
      related_ids: ["fallacy_loaded_question", "tool_boundaries", "tool_definition_lock"],
      difficulty: 2
    },
    {
      prompt: "A debate about public health becomes: ‘Either you support this measure or you want people to die.’\nBest label?",
      choices: ["False dilemma", "Appeal to authority", "Category error", "Circular reasoning"],
      answer: 0,
      explanation: "This collapses many nuanced positions into two extremes. Wisdom is creating a wider option set and asking what evidence would compare tradeoffs across alternatives.",
      related_ids: ["fallacy_false_dilemma", "tool_options", "bias_black_white"],
      difficulty: 2
    },
    {
      prompt: "Someone posts 18 weak claims in one thread and says: ‘Respond to all of these or you lose.’\nLabel it.",
      choices: ["Appeal to popularity", "Gish Gallop", "Moving the goalposts", "Appeal to ignorance"],
      answer: 1,
      explanation: "This exploits time and attention. A good move is to pick one claim, ask them to choose their strongest, and proceed one at a time with agreed standards.",
      related_ids: ["fallacy_gish_gallop", "tool_boundaries", "tool_timeboxing"],
      difficulty: 2
    },
    {
      prompt: "A sports commentator says: ‘Real fans never criticize the coach; if you criticize, you’re not a real fan.’\nBest label?",
      choices: ["No True Scotsman", "Appeal to emotion", "False cause", "Appeal to nature"],
      answer: 0,
      explanation: "The definition is changed to exclude counterexamples. Ask for objective criteria for the category (‘fan’) that doesn’t just protect the claim from criticism.",
      related_ids: ["fallacy_no_true_scotsman", "tool_definition_lock", "bias_in_group"],
      difficulty: 1
    },
    {
      prompt: "‘Crime increased after the new policy—so the policy caused the increase.’ (No controls, no mechanism.)\nBest label?",
      choices: ["Post hoc ergo propter hoc", "Appeal to tradition", "Tu quoque", "Ad hominem"],
      answer: 0,
      explanation: "Sequence is not causation. The wise move is to check confounders, selection effects, and alternative explanations—then ask for a plausible mechanism.",
      related_ids: ["fallacy_post_hoc", "tool_causality_check", "bias_illusory_correlation"],
      difficulty: 2
    },
    {
      prompt: "‘Millions of people use this supplement, so it must work.’\nBest label?",
      choices: ["Appeal to popularity", "Appeal to authority", "Special pleading", "Equivocation"],
      answer: 0,
      explanation: "Popularity can come from marketing, incentives, and social proof—not efficacy. Wisdom is to ask for controlled outcome evidence and base rates.",
      related_ids: ["fallacy_appeal_to_popularity", "tool_source_hygiene", "tool_base_rates"],
      difficulty: 1
    },
    {
      prompt: "‘This celebrity doctor recommends it, so it’s definitely true.’\nBest label?",
      choices: ["Appeal to authority", "Red herring", "False dilemma", "Circular reasoning"],
      answer: 0,
      explanation: "Authority can’t substitute for evidence, especially outside their domain. Check primary sources, replication, and whether the claim predicts outcomes.",
      related_ids: ["fallacy_appeal_to_authority", "tool_source_hygiene", "bias_authority"],
      difficulty: 1
    },
    {
      prompt: "‘If we allow remote work one day a week, soon no one will ever come to the office again.’ (No probabilities, no guardrails.)\nBest label?",
      choices: ["Slippery slope", "Appeal to nature", "Loaded question", "Appeal to ignorance"],
      answer: 0,
      explanation: "It asserts inevitability without a supported chain. Wisdom is to ask for the mechanism, likelihood, and what guardrails would prevent the feared outcome.",
      related_ids: ["fallacy_slippery_slope", "tool_bounds", "tool_reversible_decisions"],
      difficulty: 2
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
    },

    {
      prompt: "After watching two beginner videos, you feel confident you could outperform most experts in that domain.\nWhich bias fits best?",
      choices: ["Dunning–Kruger effect", "Confirmation bias", "Anchoring", "Survivorship bias"],
      answer: 0,
      explanation: "Early learning often creates an illusion of mastery because you don’t yet see what you’re missing. Wisdom here is building feedback loops (tests, peer review) and calibrating confidence.",
      related_ids: ["bias_dunning_kruger", "tool_calibration", "tool_change_mind"],
      difficulty: 2
    },
    {
      prompt: "You routinely say you’re ‘90% sure’ about predictions, but your outcomes match closer to ‘60% sure.’\nWhich bias is showing up?",
      choices: ["Anchoring", "Overconfidence", "Negativity bias", "Naturalness bias"],
      answer: 1,
      explanation: "Overconfidence is miscalibration. The fix is not ‘be humble’ in the abstract—it’s to track predictions, use ranges, and update your confidence scale over time.",
      related_ids: ["bias_overconfidence", "tool_calibration", "tool_base_rates"],
      difficulty: 2
    },
    {
      prompt: "You keep postponing a hard conversation because the short-term discomfort feels worse than the long-term cost.\nWhich bias?",
      choices: ["Avoidance", "Conformity bias", "Halo effect", "Availability heuristic"],
      answer: 0,
      explanation: "Avoidance trades today’s discomfort for tomorrow’s compounding complexity. A helpful move is to timebox a tiny start and define the next smallest action.",
      related_ids: ["bias_avoidance", "tool_timeboxing", "tool_prioritization"],
      difficulty: 1
    },
    {
      prompt: "One dramatic story dominates your judgment even though it’s statistically rare, making you feel like it’s common.\nWhich bias fits best?",
      choices: ["Salience bias", "Sunk cost fallacy", "Status quo bias", "In-group bias"],
      answer: 0,
      explanation: "Vivid details hijack attention and distort frequency judgments. The grounded move is to ask for denominators (out of how many?) and check base rates.",
      related_ids: ["bias_salience", "tool_base_rates", "bias_availability"],
      difficulty: 1
    },
    {
      prompt: "A team treats a KPI as if it’s the real goal, and starts optimizing the number while the underlying reality worsens.\nWhich bias fits best?",
      choices: ["Reification", "Fundamental attribution error", "Authority bias", "Catastrophizing"],
      answer: 0,
      explanation: "A label or metric becomes ‘the thing itself.’ The wiser move is to ask what the metric is summarizing, look for edge cases, and tie measurement back to the real outcome.",
      related_ids: ["bias_reification", "razor_goodhart", "tool_systems_thinking"],
      difficulty: 3
    },

    {
      prompt: "You meet someone from a prestigious school and immediately assume they’ll be great at every part of the job.\nWhich bias fits best?",
      choices: ["Halo effect", "Sunk cost fallacy", "Conformity bias", "Illusory correlation"],
      answer: 0,
      explanation: "One positive signal (prestige) bleeds into unrelated judgments. Wisdom is separating dimensions and using structured criteria.",
      related_ids: ["bias_halo", "tool_source_hygiene", "bias_authority"],
      difficulty: 1
    },
    {
      prompt: "After reading one alarming story about a rare risk, you feel it’s common and imminent.\nWhich bias fits best?",
      choices: ["Availability heuristic", "Status quo bias", "Anchoring", "In-group bias"],
      answer: 0,
      explanation: "Vivid examples feel frequent. The grounded move is to check base rates and the denominator: how often, out of how many?",
      related_ids: ["bias_availability", "tool_base_rates", "bias_salience"],
      difficulty: 1
    },
    {
      prompt: "In a negotiation, the first number mentioned strongly shapes what you consider ‘reasonable,’ even if it was arbitrary.\nWhich bias?",
      choices: ["Anchoring", "Negativity bias", "Naturalness bias", "Survivorship bias"],
      answer: 0,
      explanation: "Anchors stick. Wisdom is generating independent estimates and using ranges instead of single-point values.",
      related_ids: ["bias_anchoring", "tool_fermi", "tool_calibration"],
      difficulty: 1
    },
    {
      prompt: "You keep a process mainly because ‘it’s how we’ve always done it,’ even though a small experiment could improve things.\nWhich bias?",
      choices: ["Status quo bias", "Halo effect", "Affect heuristic", "Illusory correlation"],
      answer: 0,
      explanation: "Defaults feel safe. Wisdom is comparing risks of change vs non-change and running reversible experiments.",
      related_ids: ["bias_status_quo", "tool_reversible_decisions", "razor_chesterton_fence"],
      difficulty: 2
    },
    {
      prompt: "You interpret ambiguous information in a way that supports what you already believe, and you don’t notice you’re doing it.\nWhich bias?",
      choices: ["Confirmation bias", "Conformity bias", "Status quo bias", "Naturalness bias"],
      answer: 0,
      explanation: "Confirmation bias shapes what you search for and what you accept. Wisdom is deliberately hunting the strongest counterevidence and stating update conditions.",
      related_ids: ["bias_confirmation", "tool_change_mind", "tool_source_hygiene"],
      difficulty: 2
    },
    {
      prompt: "You continue a subscription you barely use because you already paid for the year.\nWhich bias?",
      choices: ["Sunk cost fallacy", "Conformity bias", "Halo effect", "Availability heuristic"],
      answer: 0,
      explanation: "Past cost is sunk and shouldn’t control present choice. Wisdom is a ‘clean slate’ decision: what would you choose starting today?",
      related_ids: ["bias_sunk_cost", "tool_stop_rules", "tool_premortem"],
      difficulty: 1
    },
    {
      prompt: "You privately disagree, but you adopt the group’s opinion because dissent feels socially risky.\nWhich bias?",
      choices: ["Conformity bias", "Anchoring", "Catastrophizing", "Reification"],
      answer: 0,
      explanation: "Social friction changes expressed beliefs and sometimes even internal beliefs. Wisdom is to form independent estimates first and diversify sources.",
      related_ids: ["bias_conformity", "tool_source_hygiene", "tool_timeboxing"],
      difficulty: 2
    },
    {
      prompt: "You prefer an herbal remedy mostly because it’s ‘natural,’ even though you haven’t compared evidence of outcomes and harms.\nWhich bias?",
      choices: ["Naturalness bias", "Status quo bias", "Anchoring", "Negativity bias"],
      answer: 0,
      explanation: "Natural doesn’t equal safe or effective. Wisdom is demanding outcome evidence and comparing risks with base rates.",
      related_ids: ["bias_naturalness", "tool_base_rates", "fallacy_appeal_to_nature"],
      difficulty: 1
    },
    {
      prompt: "A coworker misses a deadline and you immediately think ‘they’re lazy,’ while when you miss a deadline you think ‘I had an unusually hard week.’\nWhich bias is this?",
      choices: ["Fundamental attribution error", "Anchoring", "Survivorship bias", "Reification"],
      answer: 0,
      explanation: "We over-attribute others’ behavior to character and our own to circumstances. Wisdom is checking constraints, incentives, and context before forming a moral story.",
      related_ids: ["bias_fundamental_attribution", "tool_check_incentives", "razor_hanlon"],
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
    },

    {
      prompt: "A discussion keeps failing because people mean different things by ‘quality’ and ‘done.’\nBest next move?",
      choices: ["Operationalize", "Causality Check", "Base Rate Check", "Pre-mortem"],
      answer: 0,
      explanation: "Turn vague words into observable criteria (tests, checklists, thresholds). When terms become measurable, arguments often dissolve into clear decisions.",
      related_ids: ["tool_operationalize", "tool_definition_lock", "fallacy_equivocation"],
      difficulty: 1
    },
    {
      prompt: "You’re stuck in ‘either/or’ thinking and feel there are only two bad options.\nBest next move?",
      choices: ["Option Generation", "Source Hygiene", "Argument Mapping", "Timeboxing"],
      answer: 0,
      explanation: "Generate at least three options and include ‘do nothing’ and ‘small experiment.’ Wisdom is remembering that most real problems have more degrees of freedom than your first frame.",
      related_ids: ["tool_options", "fallacy_false_dilemma", "bias_black_white"],
      difficulty: 1
    },
    {
      prompt: "You’re about to argue for a big intervention, but you’re worried about second-order effects and feedback loops.\nBest next move?",
      choices: ["Systems Thinking", "Steelmanning", "Fermi Estimation", "Pause & Label"],
      answer: 0,
      explanation: "Map incentives, feedback loops, bottlenecks, and unintended consequences. Strong plans often fail because they only model the first step.",
      related_ids: ["tool_systems_thinking", "tool_check_incentives", "razor_chesterton_fence"],
      difficulty: 2
    },
    {
      prompt: "A conversation is spiraling into endless threads, and you want to preserve your attention while still being fair.\nBest next move?",
      choices: ["Timeboxing", "Causality Check", "Base Rate Check", "Reversible Decisions"],
      answer: 0,
      explanation: "Set a time limit and a success condition (what ‘resolved’ looks like). Attention is a resource; boundaries protect truth-seeking from turning into noise.",
      related_ids: ["tool_timeboxing", "tool_boundaries", "fallacy_gish_gallop"],
      difficulty: 2
    },
    {
      prompt: "Someone’s behavior seems irrational, but you suspect incentives or constraints might explain it better than character judgments.\nBest next move?",
      choices: ["Check Incentives", "Argument Mapping", "Definition Lock", "Pre-mortem"],
      answer: 0,
      explanation: "Before moral stories, look for incentives, constraints, and tradeoffs. This often yields a more accurate—and more compassionate—model of what’s happening.",
      related_ids: ["tool_check_incentives", "razor_hanlon", "bias_fundamental_attribution"],
      difficulty: 1
    },
    {
      prompt: "You want to become more accurate over time, not just ‘sound smart’ in the moment.\nBest next move?",
      choices: ["Calibration", "Conversation Boundaries", "Option Generation", "Definition Lock"],
      answer: 0,
      explanation: "Track your confidence against outcomes, use ranges, and update your internal scale. Wisdom is measurable: it shows up as better prediction and better decisions.",
      related_ids: ["tool_calibration", "tool_change_mind", "bias_overconfidence"],
      difficulty: 2
    },

    {
      prompt: "You’re estimating the time for a project, but everyone is arguing from gut feelings and single-point guesses.\nBest next move?",
      choices: ["Fermi Estimation", "Pause & Label", "Source Hygiene", "Definition Lock"],
      answer: 0,
      explanation: "Break the estimate into parts, use rough ranges, and make assumptions explicit. Wisdom is turning ‘vibes’ into a transparent model you can update.",
      related_ids: ["tool_fermi", "tool_calibration", "bias_anchoring"],
      difficulty: 2
    },
    {
      prompt: "A claim is going viral on social media, and you want to avoid amplifying something false.\nBest next move?",
      choices: ["Source Hygiene", "Option Generation", "Reversible Decisions", "Pre-mortem"],
      answer: 0,
      explanation: "Find the original source, check context, and look for corroboration. Wisdom is slowing down before you spread claims that can’t be ‘unspread.’",
      related_ids: ["tool_source_hygiene", "razor_hitchens", "bias_availability"],
      difficulty: 1
    },
    {
      prompt: "You and a friend are stuck in an argument where each new message creates three new threads. You want closure or an honest stop.\nBest next move?",
      choices: ["Conversation Boundaries", "Causality Check", "Base Rate Check", "Steelmanning"],
      answer: 0,
      explanation: "Agree on one claim at a time, one standard, and an exit condition. Wisdom is requiring convergence; otherwise, you’re just paying attention-tax.",
      related_ids: ["tool_boundaries", "tool_timeboxing", "fallacy_red_herring"],
      difficulty: 2
    },
    {
      prompt: "You’re about to roll out a policy change and want to catch realistic failure modes *before* people get harmed or furious.\nBest next move?",
      choices: ["Pre-mortem", "Definition Lock", "Argument Mapping", "Pause & Label"],
      answer: 0,
      explanation: "Assume it failed and list why. Then add mitigations and early warning signals. Wisdom is making failure cheap and early.",
      related_ids: ["tool_premortem", "tool_stop_rules", "razor_chesterton_fence"],
      difficulty: 2
    },
    {
      prompt: "You’re debating a controversial topic and you want to stay truth-seeking instead of identity-defending.\nBest next move?",
      choices: ["What Would Change My Mind?", "Systems Thinking", "Timeboxing", "Option Generation"],
      answer: 0,
      explanation: "State your current confidence and your update conditions up front. Wisdom is making it possible to ‘win’ by learning, not by posturing.",
      related_ids: ["tool_change_mind", "bias_identity_protective", "bias_confirmation"],
      difficulty: 2
    },
    {
      prompt: "Someone says ‘this is definitely happening everywhere’ based on a few anecdotes, and you want to check plausibility fast.\nBest next move?",
      choices: ["Base Rate Check", "Steelmanning", "Reversible Decisions", "Pause & Label"],
      answer: 0,
      explanation: "Start with prevalence (priors), then update based on evidence quality. Wisdom is remembering that anecdotes are not denominators.",
      related_ids: ["tool_base_rates", "bias_availability", "razor_sagan"],
      difficulty: 1
    },
    {
      prompt: "A debate is getting messy, and you suspect hidden assumptions are doing most of the work.\nBest next move?",
      choices: ["Argument Mapping", "Option Generation", "Source Hygiene", "Fermi Estimation"],
      answer: 0,
      explanation: "Write the premises → conclusion and test each link. Wisdom is making implicit assumptions visible so they can be evaluated rather than smuggled.",
      related_ids: ["tool_argument_map", "fallacy_circular_reasoning", "fallacy_red_herring"],
      difficulty: 2
    },
    {
      prompt: "You’re feeling angry and ‘certain,’ and you notice you’re about to send a message you might regret.\nBest next move?",
      choices: ["Pause & Label", "Argument Mapping", "Definition Lock", "Base Rate Check"],
      answer: 0,
      explanation: "Name the emotion and the impulse, then delay action until your nervous system settles. Wisdom is separating ‘felt certainty’ from ‘earned confidence.’",
      related_ids: ["tool_pause_label", "bias_affect_heuristic", "bias_negativity"],
      difficulty: 1
    },
    {
      prompt: "Two people agree on the facts but keep fighting because they’re using the same word to mean different things (e.g., ‘fair,’ ‘safe,’ ‘respect’).\nBest next move?",
      choices: ["Definition Lock", "Pre-mortem", "Fermi Estimation", "Reversible Decisions"],
      answer: 0,
      explanation: "Write the key terms and the criteria for them. Wisdom is realizing many ‘arguments’ are hidden definition fights, and clarity beats intensity.",
      related_ids: ["tool_definition_lock", "fallacy_equivocation", "fallacy_motte_bailey"],
      difficulty: 1
    }
  ]
};

// Optional: keep this export stable for any future UI components.
export default QUIZZES;
