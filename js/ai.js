/* Optional Claude integration. The app works fully without it.
   The key is stored only in this browser and sent only to api.anthropic.com. */
window.TAW = window.TAW || {};
(function () {
  const URL = "https://api.anthropic.com/v1/messages";

  const MENTOR = "You are the mentor inside “The Articulate Woman”, a 180-day program helping a non-native speaker become articulate, well read and confident in English. " +
    "Tone: warm, intelligent, direct, encouraging — like a sophisticated mentor, never a schoolteacher or influencer. " +
    "Goal: clear, natural, nuanced international English. Simple + precise + nuanced, never pretentious or showy. Never comment on accent. " +
    "Be factually careful; distinguish fact, interpretation and opinion; avoid partisan framing.";

  function available() { const s = TAW.store.state.settings; return !!(s.aiKey && navigator.onLine); }
  function why() {
    if (!TAW.store.state.settings.aiKey) return "Add an Anthropic API key in Settings to unlock mentor feedback.";
    if (!navigator.onLine) return "You’re offline. Local feedback still works; mentor feedback will be back when you reconnect.";
    return "";
  }

  async function call(prompt, opts) {
    opts = opts || {};
    const s = TAW.store.state.settings;
    if (!s.aiKey) throw new Error(why());
    if (!navigator.onLine) throw new Error(why());
    const body = {
      model: s.aiModel || "claude-opus-5-5",
      max_tokens: opts.maxTokens || 4000,
      system: MENTOR + (opts.system ? "\n\n" + opts.system : ""),
      messages: [{ role: "user", content: prompt }],
      output_config: { effort: opts.effort || "medium" },
      fallbacks: "default"
    };
    if (opts.web) body.tools = [{ type: "web_search_20260209", name: "web_search", max_uses: 5 }];
    let messages = body.messages, data, text = "";
    for (let turn = 0; turn < 4; turn++) {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": s.aiKey,
          "anthropic-version": "2026-10-21",
          "anthropic-beta": "server-side-fallback-2026-07-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify(Object.assign({}, body, { messages: messages }))
      });
      if (!res.ok) {
        let msg = "The mentor is unavailable right now (" + res.status + ").";
        try { const e = await res.json(); if (e.error && e.error.message) msg += " " + e.error.message; } catch (_) {}
        if (res.status === 401) msg = "That API key wasn’t accepted. Check it in Settings.";
        if (res.status === 429) msg = "Too many requests — try again in a minute.";
        throw new Error(msg);
      }
      data = await res.json();
      if (data.stop_reason === "refusal") throw new Error("The mentor couldn’t help with that one. Try rephrasing.");
      text += (data.content || []).filter(function (b) { return b.type === "text"; }).map(function (b) { return b.text; }).join("");
      if (data.stop_reason !== "pause_turn") break;
      messages = messages.concat([{ role: "assistant", content: data.content }]);
    }
    return text;
  }

  function json(text) {
    const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    const src = m ? m[1] : text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
    return JSON.parse(src);
  }

  async function expressIdea(idea) {
    const t = await call(
      "I have an idea but I don’t know how to say it naturally in English. It may be in simple English, Spanish or Portuguese:\n\n“" + idea + "”\n\n" +
      "Reply ONLY with JSON: {\"natural\": \"the most natural way to say it\", \"alternatives\": [{\"text\": \"...\", \"register\": \"casual|neutral|formal\", \"note\": \"when to use\"}] (3 items), " +
      "\"keyWord\": {\"word\": \"...\", \"pron\": \"stress respelling like ful-FILD\", \"why\": \"why this word works\", \"nuance\": \"how it differs from near-synonyms\"}, " +
      "\"related\": [\"3-4 related useful expressions\"], \"avoid\": \"one pretentious or unnatural version to avoid, and why\"}", { effort: "low", maxTokens: 2000 });
    return json(t);
  }

  async function feedback(prompt, answer, kind) {
    const t = await call(
      "Task given (" + (kind || "speaking") + "): “" + prompt + "”\n\nHer answer" + (kind === "speaking" ? " (speech-to-text transcript; ignore transcription glitches and punctuation)" : "") + ":\n“" + answer + "”\n\n" +
      "Evaluate as her mentor. Reply ONLY with JSON: {\"summary\": \"2 sentences: what worked, what to work on\", " +
      "\"scores\": {\"structure\": 1-10, \"clarity\": 1-10, \"vocabulary\": 1-10, \"repetition\": 1-10, \"fillers\": 1-10, \"grammar\": 1-10, \"naturalness\": 1-10, \"nuance\": 1-10, \"confidence\": 1-10}, " +
      "\"corrections\": [{\"said\": \"...\", \"better\": \"...\", \"why\": \"...\"}] (max 4, only real errors or unnatural phrasing), " +
      "\"upgrades\": [{\"from\": \"basic word/phrase she used\", \"to\": \"more precise option\"}] (max 4), " +
      "\"rewrite\": \"a model version of HER answer at a natural articulate level — same ideas, not fancier than needed\", " +
      "\"nextStep\": \"one concrete thing to try next time\"}", { effort: "medium", maxTokens: 3000 });
    return json(t);
  }

  async function generateLesson(entry) {
    const t = await call(
      "Write the full lesson for Day " + entry.day + " of the program. Map entry:\n" + JSON.stringify(entry) + "\n\n" +
      "Standards: an actual concept with cultural substance; accurate facts (flag contested interpretations); useful vocabulary taught with nuance; a genuine intellectual question; active practice; why it matters. No generic motivational filler. Global and intellectually meaningful references.\n" +
      "Reply ONLY with JSON matching: {\"why\": \"...\", \"learn\": {\"body\": [\"3-5 paragraphs, may use <strong>/<em>\"], \"phrases\": [{\"en\": \"...\", \"tone\": \"...\", \"note\": \"...\"}] (4-5), \"tip\": \"one mentor line\"}, " +
      "\"vocab\": [{\"word\": \"...\", \"pron\": \"stress respelling\", \"pos\": \"...\", \"definition\": \"...\", \"nuance\": \"...\", \"synonyms\": [\"...\"], \"distinction\": \"how it differs from the synonyms\", \"example\": \"...\", \"conversation\": \"— line\\n— line\", \"prompt\": \"your-turn task\"}] (use the map's words), " +
      "\"cultureNote\": \"how the cultural reference connects\", \"sayBetter\": {\"basic\": \"...\", \"levels\": [[\"Level 1\", \"...\", \"note\"], [\"Level 2\", \"...\", \"note\"], [\"Level 3\", \"...\", \"note\"], [\"Level 4\", \"...\", \"note\"]], \"prompt\": \"...\"}, " +
      "\"exercise\": {\"title\": \"...\", \"instructions\": \"...\", \"items\": [{\"q\": \"...\", \"a\": \"model answer\"}] (4)}, \"think\": {\"q\": \"...\", \"angles\": [\"...\"]}, \"express\": {\"prompt\": \"...\"}, " +
      "\"speak\": {\"prompt\": \"...\", \"seconds\": " + (entry.seconds || 90) + ", \"structure\": [\"...\"]}, \"reflect\": \"...\", \"deep\": {\"title\": \"...\", \"body\": \"...\", \"prompt\": \"...\"}}",
      { effort: "medium", maxTokens: 12000 });
    return json(t);
  }

  async function worldBriefing() {
    const t = await call(
      "Search for ONE significant, recent news story (from the last week) from reputable sources that would make a rich learning opportunity — economics, technology, culture, science or society. Avoid partisan framing.\n" +
      "Reply ONLY with JSON: {\"title\": \"...\", \"field\": \"...\", \"date\": \"...\", \"sources\": [\"outlet names\"], \"fact\": \"what verifiably happened\", \"interpretation\": \"how analysts interpret it (attributed)\", " +
      "\"opinion\": \"the range of opinions, fairly\", \"concepts\": [{\"term\": \"...\", \"explain\": \"one simple sentence\"}] (3-4), \"vocab\": [\"5 useful words\"], \"prompt\": \"a speaking prompt\"}",
      { web: true, effort: "medium", maxTokens: 4000 });
    return json(t);
  }

  async function test() { return call("Reply with the single word: ready", { effort: "low", maxTokens: 50 }); }

  /* ── Ask Claude: use the Claude app / claude.ai with your own subscription, no API key ── */
  const INTRO = "You are my mentor in “The Articulate Woman”, my 180-day program to become more articulate, better read and more confident in English. " +
    "Be warm, intelligent and direct — like a sophisticated mentor, not a teacher. My goal is clear, natural, nuanced international English: simple + precise + nuanced, never pretentious. Never comment on my accent.\n\n";
  function intro() {
    const w = (TAW.store.state.profile.work || {});
    const ctx = [w.role && "I work as " + w.role, w.industry && "in " + w.industry].filter(Boolean).join(" ");
    return INTRO + (ctx || w.focus ? "About my work: " + (ctx ? ctx + ". " : "") + (w.focus ? w.focus + " " : "") + "Tailor examples and advice to my professional context where relevant.\n\n" : "");
  }
  const prompts = {
    feedback: function (task, answer, kind) {
      return intro() + "Here is my answer to this " + (kind || "speaking") + " task: “" + task + "”\n\n" +
        (kind === "speaking" ? "(It’s a speech-to-text transcript — ignore punctuation and transcription glitches.)\n\n" : "") +
        "“" + answer + "”\n\nPlease give me:\n1. Two sentences on what worked and what to work on.\n2. Scores out of 10 for structure, clarity, vocabulary, repetition, fillers, grammar, naturalness, nuance and confidence.\n" +
        "3. Up to four corrections (what I said → better → why), only real errors or unnatural phrasing.\n4. Up to four basic words I used and more precise alternatives.\n" +
        "5. A model version of MY answer — same ideas, natural and articulate, not fancier than needed.\n6. One concrete thing to try next time.\nThen ask me one follow-up question so we can keep practising.";
    },
    express: function (idea) {
      return intro() + "I have an idea but I don’t know how to say it naturally in English (it may be in simple English, Spanish or Portuguese):\n\n“" + idea + "”\n\n" +
        "Give me: the most natural way to say it; three alternatives (casual, neutral, formal) with when to use each; the key word that makes it work, with pronunciation, why it works and how it differs from near-synonyms; " +
        "3–4 related expressions; and one pretentious or unnatural version I should avoid. Then ask me to make my own sentence with the key word, and correct it.";
    },
    lesson: function (L) {
      return intro() + "Teach me today’s lesson — Day " + L.day + ": “" + L.title + "”.\nFocus: " + (L.why || "") +
        "\nWords: " + (L.vocab || []).map(function (v) { return v.word; }).join(", ") +
        "\nCultural reference: " + (L.culture && TAW.cards[L.culture] ? TAW.cards[L.culture].name : (L.cultureRef || "")) +
        "\nThinking question: " + (L.think ? L.think.q : "") + "\nSpeaking task: " + (L.speak ? L.speak.prompt : "") +
        "\n\nTeach it interactively, one step at a time, waiting for my reply each time: (1) a short explanation with real substance and accurate facts; (2) each word with definition, nuance, how it differs from synonyms, an example and a mini-dialogue — then ask me for my own sentence and correct it; " +
        "(3) the cultural reference: why it matters and how to talk about it; (4) a “say it better” ladder from basic to articulate; (5) the thinking question; (6) the speaking task — I’ll send my answer and you give me feedback. Start with step 1.";
    },
    world: function () {
      return intro() + "Find one significant news story from the last week, from reputable sources, that would make a rich learning opportunity (economics, technology, culture, science or society). Avoid partisan framing.\n\n" +
        "Give me: what verifiably happened (FACT), how analysts interpret it (INTERPRETATION, attributed), the range of opinions fairly (OPINION), 3–4 key concepts explained simply, 5 useful words, and a speaking prompt. Then ask for my view and give me feedback on how I express it.";
    },
    lessonEs: function (L) {
      return intro() + "Por favor, explícame en español (neutro, claro y cálido) la lección del " + TAW.lessonLabel(L) + ": “" + L.title + "”.\n" +
        "Enfoque: " + (L.why || "") + "\nPalabras: " + (L.vocab || []).map(function (v) { return v.word + (v.definition ? " (" + v.definition + ")" : ""); }).join("; ") +
        "\nPregunta para pensar: " + (L.think ? L.think.q : "") + "\nTarea oral: " + (L.speak ? L.speak.prompt : "") +
        "\n\nExplica en español la idea central, el contexto cultural y el significado y los matices de cada palabra, pero deja en inglés las palabras, frases y ejemplos que debo aprender. Luego hazme practicar en inglés, paso a paso, corrigiéndome.";
    },
    word: function (w, sentence) {
      return intro() + "I came across “" + w + "”" + (sentence ? " in this sentence: “" + sentence + "”" : "") + ".\n\nExplain it for me: meaning (in this context), pronunciation with the stressed syllable, nuance, 2–3 near-synonyms and how they differ, two natural example sentences (one about work), and whether it’s formal, neutral or informal. Then ask me to write my own sentence with it, and correct it.";
    },
    ladder: function (s) {
      return intro() + "Build a 4-level “Say it better” ladder for this basic sentence: “" + s + "”. Level 1 clearer, Level 2 more precise, Level 3 natural and nuanced, Level 4 articulate but never pretentious. " +
        "Explain briefly what each level adds. Then ask me to write my own Level 4 version and correct it.";
    }
  };
  function askClaude(prompt) {
    try { if (navigator.clipboard) navigator.clipboard.writeText(prompt).catch(function () {}); } catch (e) {}
    window.open("https://claude.ai/new?q=" + encodeURIComponent(prompt), "_blank", "noopener");
    TAW.toast("Opening Claude — the request is also copied, so you can paste it if it isn’t already there.");
  }

  TAW.ai = { available, why, call, expressIdea, feedback, generateLesson, worldBriefing, test, prompts, askClaude };
})();
