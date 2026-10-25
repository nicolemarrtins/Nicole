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

  TAW.ai = { available, why, call, expressIdea, feedback, generateLesson, worldBriefing, test };
})();
