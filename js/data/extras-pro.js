/* Professional additions to the shared tools: leadership cards, corporate Say It Better,
   work speaking challenges and an Intellectual Map hub. */
(function () {
  TAW.conversationCards.leadership = { title: "Leadership", icon: "◆", items: [
    "What’s one thing I could do that would make your work easier?",
    "What’s getting in your way right now?",
    "Where do you think we’re wasting the most time as a team?",
    "What would you do differently if you were in my role?",
    "Which part of your work energises you most — and which drains you?",
    "What’s a risk you see that you think I might be missing?",
    "How would you like to receive feedback from me?",
    "What skill would you like to develop this year?" ] };
  TAW.conversationCards.executive = { title: "Executives", icon: "▲", items: [
    "What’s the decision on your desk that keeps you thinking?",
    "Where do you see AI creating real value in our industry — beyond the hype?",
    "What would success look like for you in twelve months?",
    "What do customers tell you that internal reports miss?",
    "Which trend do you think the industry is underestimating?",
    "What did you learn from the last major change you led?" ] };

  [
    { basic: "We need to do this faster.", levels: ["We need to speed this up.", "We need to shorten the timeline.", "If we want to launch before peak season, we need to cut two weeks from the plan.", "To launch before peak season, we need to find two weeks. I’d suggest we run testing in parallel rather than in sequence — what would we risk by doing that?"], note: "From pressure to a specific goal, a proposal and a question about risk." },
    { basic: "This project is not going well.", levels: ["The project has some problems.", "The project is behind schedule and over budget.", "We’re three weeks behind and 10% over budget, mainly because of integration issues.", "I want to flag that we’re three weeks behind and 10% over budget, driven by integration issues. I have a recovery plan, and I need one decision from you today."], note: "Bad news early, precisely, with a plan and an ask — the board-level pattern." },
    { basic: "I think AI is good for our company.", levels: ["AI could help our company.", "AI could reduce our customer-service costs.", "A focused AI pilot in customer service could cut handling time by around a quarter.", "I see a clear, low-risk opportunity: an AI pilot drafting replies to routine customer emails. Six weeks, clear metrics, a human approving every reply — and a scale-or-stop decision at the end."], note: "From opinion to a specific, measured, governed proposal." },
    { basic: "I don’t agree with your idea.", levels: ["I’m not sure about this idea.", "I have some concerns about this approach.", "I see the logic, but I’m concerned about the cost of integration.", "I can see the logic, and I agree with the goal. My concern is integration cost — our last migration doubled its budget. Could we test it with one market first?"], note: "Agreement on goals + specific concern + evidence + constructive alternative." },
    { basic: "My team is very busy.", levels: ["My team is at full capacity.", "My team doesn’t have the bandwidth for this right now.", "We can take this on if we deprioritise the reporting project.", "I’d like to say yes, and I want to be realistic: we’re at capacity. If this is the higher priority, we can pause the reporting project — which would you prefer we focus on?"], note: "The “yes, if” — handing the trade-off back to the decision-maker." }
  ].forEach(function (x) { TAW.sayBetterBank.push(x); });

  [
    { s: 30, p: "Deliver your professional elevator pitch." },
    { s: 60, p: "Explain what an AI agent is to a non-technical colleague." },
    { s: 60, p: "Give your CEO a 60-second update on your most important project — bottom line first." },
    { s: 90, p: "What should your company automate first — and what should it never automate?" },
    { s: 90, p: "Give constructive feedback to a team member who keeps missing deadlines." },
    { s: 120, p: "How will AI change your industry in the next three years? Give a calibrated view." },
    { s: 120, p: "Explain your company’s e-commerce performance using traffic, conversion, AOV and retention." },
    { s: 180, p: "Present a strategic recommendation to the board — answer, three reasons, risk, ask." }
  ].forEach(function (x) { TAW.speakingChallenges.push(x); });

  TAW.mapHubs.push({ id: "ai-age", name: "Leading in the AI age", nodes: [
    ["Technology", "How LLMs work", "llm"], ["Technology", "Agents & RAG", "ai-agents"], ["Strategy", "The jagged frontier", "jagged-frontier"],
    ["Economics", "The Turing Trap", "turing-trap"], ["Law", "The EU AI Act", "eu-ai-act"], ["Operations", "Automation’s first rule", "gates-automation"],
    ["Change", "Kotter’s 8 steps", "kotter"], ["Commerce", "Unit economics", "unit-economics"], ["Neuroscience", "Neuroplasticity", "neuroplasticity"] ] });
  TAW.mapHubs.push({ id: "learning", name: "The learning brain", nodes: [
    ["Neuroscience", "Neuroplasticity", "neuroplasticity"], ["Psychology", "The forgetting curve", "ebbinghaus"], ["Psychology", "Retrieval practice", "retrieval"],
    ["Neuroscience", "Sleep and memory", "sleep-memory"], ["Psychology", "Attention", "attention-science"], ["Psychology", "Habits", "habits-science"],
    ["Psychology", "Reappraisal", "reappraisal"], ["Science", "Neuromyths", "neuromyths"], ["Psychology", "Emotional granularity", "barrett"] ] });
})();
