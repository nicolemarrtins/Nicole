/* Text analysis, scoring and generators. Heuristic, deterministic, offline. */
window.TS = window.TS || {};
(function () {
  const COLORS = ["red", "crimson", "scarlet", "burgundy", "maroon", "blue", "navy", "teal", "turquoise", "green", "sage", "emerald", "yellow", "mustard", "gold", "golden", "orange", "amber", "purple", "lavender", "lilac", "violet", "pink", "rose", "black", "white", "silver", "grey", "gray", "brown", "beige", "cream", "ivory"];
  const STOP = new Set(("a about above after again against all almost also always am an and any are aren as at back be because been before being below between both but by can cannot could couldn did didn do does doesn doing don done down during each else even ever every few first for from further get gets getting got had hadn has hasn have haven having he her here hers herself him himself his how however i if in into is isn it its itself just know last least less let like made make makes many may me might mine more most much must my myself need never new next no nor not nothing now of off often oh ok okay on once one only or other others our ours ourselves out over own really said same say says see seem seemed she should shouldn since so some something sometimes still such take than that the their theirs them themselves then there these they thing things think this those though through thing to today too took under until up upon us very want was wasn way we well went were weren what whatever when where whether which while who whom whose why will with without won would wouldn yes yet you your yours yourself yourselves time times day days really maybe actually kind lot lots going gonna feel felt felt look looked looks around first second third tomorrow yesterday tonight morning evening night week year years three five four two seven people person someone everyone anyone myself good bad great little big long right left came come comes goes went told tell tells asked ask still every another".split(" ")));
  const EMOTION = ["love", "loved", "miss", "missed", "missing", "hate", "angry", "furious", "sad", "devastated", "crushed", "heartbroken", "lonely", "alone", "afraid", "scared", "hope", "hoped", "regret", "sorry", "jealous", "betrayal", "betrayed", "proud", "ashamed", "grateful", "happy", "joy", "ache", "aching", "hurt", "cry", "cried", "tears", "longing", "wistful", "bittersweet", "melancholy", "nostalgic", "fine", "numb", "giddy", "nervous", "anxious", "desperate", "tender", "forgive", "forgot", "forget", "remember", "remembered"];
  const SENSORY = ["smell", "smelled", "scent", "taste", "tasted", "warm", "cold", "cool", "soft", "rough", "loud", "quiet", "silence", "silent", "bright", "dark", "light", "glow", "glint", "rain", "wind", "sun", "snow", "fog", "salt", "sugar", "bitter", "sweet", "velvet", "glass", "neon", "flicker", "humming", "echo", "whisper", "static", "dust", "smoke", "ice", "fire", "steam"];
  const DRAMA = ["never", "always", "forever", "betrayal", "betrayed", "everything", "nothing", "ruined", "destroyed", "unforgivable", "tragic", "tragedy", "devastating", "devastated", "shattered", "abandoned", "unexpected", "trusted", "end", "ended", "last", "final", "ever", "entire", "whole", "only", "surgical", "doom", "fate", "legendary", "historic"];
  const CLICHES = ["broken heart", "tears like rain", "heart of gold", "set me free", "fire and desire", "end of the day", "love is blind", "time heals", "heart on my sleeve", "like a rose", "deep inside", "stars in your eyes", "meant to be", "falling apart", "cold as ice", "forever and ever", "my heart is breaking", "baby baby"];

  function words(text) { return (String(text || "").toLowerCase().match(/[a-zà-ÿ0-9']+/g) || []); }
  function count(list, ws) { let n = 0; ws.forEach(function (w) { if (list.indexOf(w) > -1) n++; }); return n; }
  function clamp(n) { return Math.max(0, Math.min(100, Math.round(n))); }
  function hash(s) { let h = 2166136261; s = String(s); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { let x = hash(seed) || 1; return function () { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return ((x >>> 0) % 10000) / 10000; }; }
  function pick(arr, r) { return arr[Math.floor((r ? r() : Math.random()) * arr.length)]; }

  function analyze(text) {
    const t = String(text || ""), ws = words(t), lines = t.split(/\n/).filter(function (l) { return l.trim(); });
    const freq = {}; ws.forEach(function (w) { if (!STOP.has(w) && w.length > 2) freq[w] = (freq[w] || 0) + 1; });
    const repeats = Object.keys(freq).filter(function (k) { return freq[k] > 1; });
    const proper = (t.match(/(?:^|[^.!?\n]\s)([A-Z][a-z]{2,})/g) || []).length;
    const numbers = (t.match(/\d+/g) || []).length;
    const colors = ws.filter(function (w) { return COLORS.indexOf(w) > -1; });
    const metaphor = (t.match(/\b(like a|like an|like the|as if|as though|as a|is a|was a|were a|is an|was an|became a)\b/gi) || []).length;
    const ends = lines.map(function (l) { const m = l.toLowerCase().match(/([a-z]+)[^a-z]*$/); return m ? m[1] : ""; });
    let rhymes = 0;
    for (let i = 0; i < ends.length; i++) for (let j = i + 1; j < Math.min(ends.length, i + 3); j++) {
      const a = ends[i], b = ends[j];
      if (a && b && a !== b && (a.slice(-3) === b.slice(-3) || a.slice(-2) === b.slice(-2))) rhymes++;
    }
    const lowerT = t.toLowerCase();
    const cliches = CLICHES.filter(function (c) { return lowerT.indexOf(c) > -1; });
    const syl = lines.map(function (l) { return words(l).reduce(function (n, w) { return n + Math.max(1, (w.match(/[aeiouy]+/g) || []).length); }, 0); });
    return { text: t, words: ws, n: ws.length, lines: lines, repeats: repeats, proper: proper, numbers: numbers, colors: colors,
      metaphor: metaphor, rhymes: rhymes, cliches: cliches, syl: syl,
      emotion: count(EMOTION, ws), sensory: count(SENSORY, ws), drama: count(DRAMA, ws),
      exclaim: (t.match(/!/g) || []).length, has13: /(^|\D)13(\D|$)|thirteen|xiii/i.test(t) };
  }

  /* Scores return {name: 0–100} plus one practical tip. */
  const SCORERS = {
    detail: function (a) {
      const s = { Specificity: clamp(25 + a.numbers * 12 + a.proper * 10 + a.colors.length * 10 + Math.min(30, a.n)), Imagery: clamp(20 + a.sensory * 15 + a.colors.length * 10 + a.metaphor * 10), Observation: clamp(30 + Math.min(50, a.n * 1.2) + a.numbers * 5) };
      return withTip(s, { Specificity: "Add a number, a name or a colour. ‘A car’ → ‘a silver car with one hubcap’.", Imagery: "Add a sense other than sight: a smell, a sound, a temperature.", Observation: "Look again. What’s the smallest thing in the scene?" });
    },
    drama: function (a) {
      const s = { Drama: clamp(20 + a.drama * 14 + a.exclaim * 5 + a.emotion * 6), Specificity: clamp(20 + a.numbers * 12 + a.proper * 8 + a.colors.length * 10 + Math.min(25, a.n)), Metaphor: clamp(15 + a.metaphor * 28 + a.sensory * 6), "Emotional Damage": clamp(15 + a.emotion * 12 + a.drama * 8), "Potential Chorus": clamp(20 + a.repeats.length * 12 + (a.n > 5 && a.n < 30 ? 25 : 5) + a.rhymes * 15) };
      return withTip(s, { Drama: "Raise the stakes: what did this cost you? Use a big word for a small thing (betrayal, unforgivable).", Specificity: "Add a time or object: ‘at 3:47pm’, ‘with a full stop’.", Metaphor: "Compare the event to something bigger: a trial, a storm, a betrayal by an appliance.", "Emotional Damage": "Name the feeling under the annoyance. Embarrassed? Forgotten?", "Potential Chorus": "Make it short enough to sing, and repeat one key phrase." });
    },
    metaphor: function (a) {
      const s = { Metaphor: clamp(25 + a.metaphor * 18 + Math.min(20, a.n / 2)), Imagery: clamp(20 + a.sensory * 14 + a.colors.length * 10 + a.numbers * 5), Originality: clamp(70 - a.cliches.length * 25 + a.proper * 5 + a.sensory * 4) };
      return withTip(s, { Metaphor: "Make the comparison concrete: an object people can touch.", Imagery: "Give the object a texture, sound or colour.", Originality: "Avoid comparisons you have heard before (‘cold as ice’). Pick an object from your own life." });
    },
    story: function (a) {
      const s = { Structure: clamp(30 + Math.min(40, a.lines.length * 10) + Math.min(30, a.n / 2)), Specificity: clamp(20 + a.numbers * 12 + a.proper * 8 + a.colors.length * 10 + a.sensory * 6), Stakes: clamp(20 + a.drama * 12 + a.emotion * 10), Twist: clamp(20 + (/\b(but|until|then|suddenly|turns out|and yet|maybe)\b/i.test(a.text) ? 45 : 0) + a.emotion * 5) };
      return withTip(s, { Structure: "Make sure each part does a job: want → obstacle → change.", Specificity: "Add a time, a place name or an object.", Stakes: "What would be lost if it went wrong? Say it.", Twist: "Use ‘but’, ‘until’ or ‘and yet’ to turn the story." });
    },
    lyric: function (a) {
      const sv = a.syl.length > 1 ? Math.abs(a.syl[0] - a.syl[1]) : 6;
      const s = { Specificity: clamp(20 + a.numbers * 12 + a.proper * 8 + a.colors.length * 10 + Math.min(20, a.n / 2)), Imagery: clamp(15 + a.sensory * 14 + a.colors.length * 12 + a.metaphor * 10), Emotion: clamp(20 + a.emotion * 14 + a.drama * 6), Originality: clamp(75 - a.cliches.length * 25 + a.proper * 4 + a.numbers * 4), Rhythm: clamp(30 + a.rhymes * 18 + Math.max(0, 30 - sv * 5) + Math.min(20, a.lines.length * 5)), Memorability: clamp(20 + a.repeats.length * 10 + a.rhymes * 10 + (a.n > 6 && a.n < 40 ? 25 : 5)) };
      return withTip(s, { Specificity: "Swap a general word for a specific one: ‘car’ → ‘your dad’s old Volvo’.", Imagery: "Add one sensory detail — light, smell, temperature, sound.", Emotion: "Let one line name (or strongly imply) the feeling.", Originality: "Cut any phrase you have heard in another song.", Rhythm: "Read it aloud. Make line lengths similar and try one slant rhyme at the line ends.", Memorability: "Repeat your strongest phrase. Repetition is how choruses work." });
    }
  };
  function withTip(scores, tips) {
    let low = null; Object.keys(scores).forEach(function (k) { if (low === null || scores[k] < scores[low]) low = k; });
    return { scores: scores, tip: tips[low], low: low, avg: Math.round(Object.keys(scores).reduce(function (n, k) { return n + scores[k]; }, 0) / Object.keys(scores).length) };
  }
  function score(kind, text) { return SCORERS[kind] ? SCORERS[kind](analyze(text)) : null; }

  /* ── ✨ TAYLORIZE THIS ── */
  const ABSTRACT = [
    { k: ["answer", "answered", "reply", "replied", "respond", "message", "text", "texted", "call", "called", "seen", "ignored", "ghosted"], a: "SILENCE", line: "A silence so loud it had its own weather system." },
    { k: ["broke", "broken", "stopped", "failed", "crashed", "died", "lied", "cancelled", "canceled", "forgot", "forgotten"], a: "BETRAYAL", line: "An unexpected betrayal by {obj} I trusted." },
    { k: ["late", "wait", "waited", "waiting", "delay", "delayed", "bus", "train", "queue", "traffic", "missed"], a: "WAITING", line: "I have waited for many things, but never with this much dignity." },
    { k: ["rain", "cold", "snow", "wind", "weather", "storm"], a: "WEATHER", line: "The sky took a side, and it wasn’t mine." },
    { k: ["coffee", "tea", "breakfast", "lunch", "dinner", "food", "cake", "pizza"], a: "LAST GOOD CUP", line: "{Obj}, once a comfort, now a memory with a receipt." },
    { k: ["work", "boss", "meeting", "email", "coworker", "colleague", "office", "deadline"], a: "QUIET RESIGNATION", line: "Somewhere between the meeting and the minutes, something in me clocked out." },
    { k: ["friend", "friends", "party", "invite", "invited", "group"], a: "EMPTY CHAIR", line: "There was a chair with my name on it, and nobody pulled it out." },
    { k: ["ex", "date", "crush", "kiss", "love", "liked"], a: "ALMOST", line: "It was never anything, which is exactly why it was everything." },
    { k: ["phone", "battery", "charger", "wifi", "laptop"], a: "LOW BATTERY", line: "Thirteen percent, and falling, like everything else." }
  ];
  const TEMPLATES = ["THE {A} OF {TIME}", "{OBJ} (A STUDY IN {A})", "EVERYTHING I DIDN’T SAY ABOUT THE {OBJ}", "THE {OBJ} KNOWS", "{TIME}, {WEEKDAY}", "{OBJ} (TEN MINUTE VERSION)"];
  const WEEKDAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

  function keyObject(text) {
    const ws = words(text).filter(function (w) { return !STOP.has(w) && w.length > 2 && !/^\d+$/.test(w) && !/(ed|ly)$/.test(w); });
    return ws.length ? ws[ws.length - 1] : "moment";
  }
  function taylorize(text) {
    const r = rng(text), ws = words(text);
    let match = ABSTRACT.find(function (g) { return g.k.some(function (k) { return ws.indexOf(k) > -1; }); });
    if (!match) match = { a: pick(["QUIET PART", "SMALL DISASTER", "ORDINARY TRAGEDY", "UNRESOLVED", "AFTERMATH"], r), line: "On the surface, nothing happened. Underneath, an entire era began." };
    const obj = keyObject(text);
    const h = 1 + Math.floor(r() * 11), m = Math.floor(r() * 60);
    const time = r() < 0.13 ? "1:13 PM" : h + ":" + (m < 10 ? "0" : "") + m + (r() < 0.5 ? " AM" : " PM");
    function fill(tpl) {
      return tpl.replace("{A}", match.a).replace("{TIME}", time).replace("{OBJ}", obj.toUpperCase()).replace("{WEEKDAY}", pick(WEEKDAYS, r))
        .replace("{obj}", /^[aeiou]/.test(obj) ? "an " + obj : "a " + obj).replace("{Obj}", "The " + obj);
    }
    const title = fill(TEMPLATES[0]);
    const alts = TEMPLATES.slice(1).map(fill).sort(function () { return r() - 0.5; }).slice(0, 3);
    return { title: title, alts: alts, line: fill(match.line), abstract: match.a, object: obj, time: time };
  }
  const TAYLORIZE_QS = [
    { id: "expect", q: "What were you expecting?" },
    { id: "got", q: "What did you actually get?" },
    { id: "pretend", q: "What did you pretend not to care about?" },
    { id: "detail", q: "What tiny detail do you remember?" },
    { id: "symbol", q: "What object could symbolise this?" }
  ];

  /* ── motifs: the app remembers recurring things ── */
  function motifs(text) {
    const ws = words(text), out = [];
    for (let i = 0; i < ws.length; i++) {
      const w = ws[i];
      if (COLORS.indexOf(w) > -1 && ws[i + 1] && !STOP.has(ws[i + 1]) && ws[i + 1].length > 2 && COLORS.indexOf(ws[i + 1]) < 0) out.push({ key: w + " " + ws[i + 1], strong: true });
    }
    ws.forEach(function (w) { if (w.length > 4 && !STOP.has(w) && !/^\d+$/.test(w) && !/(ing|ed|ly|'s)$/.test(w) && EMOTION.indexOf(w) < 0) out.push({ key: w, strong: false }); });
    const seen = {}; return out.filter(function (m) { if (seen[m.key]) return false; seen[m.key] = 1; return true; });
  }

  /* ── capital-letter decoder (Day 38) ── */
  function decode(text) {
    const s = String(text || "");
    let out = "", start = true;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (/[.!?\n]/.test(c)) { start = true; continue; }
      if (!/[A-Za-z]/.test(c)) continue;
      const loneI = c === "I" && !/[a-zA-Z]/.test(s[i + 1] || "") && !/[a-zA-Z]/.test(s[i - 1] || "");
      if (!start && c >= "A" && c <= "Z" && !loneI) out += c;
      start = false;
    }
    return out;
  }

  /* ── masterplan scoring ── */
  function masterScore(fields) {
    const vals = Object.keys(fields).map(function (k) { return String(fields[k] || "").trim(); }).filter(Boolean);
    const all = vals.join(" "), a = analyze(all);
    const filled = vals.length;
    const strategic = clamp(35 + filled * 6 + a.numbers * 3 + a.colors.length * 4);
    const complicated = clamp(40 + filled * 7 + Math.min(20, a.n / 5) + (a.has13 ? 10 : 0));
    const email = Math.max(1, Math.min(60, 40 - filled * 4 - (a.has13 ? 5 : 0)));
    const level = complicated >= 99 ? "GALAXY-BRAINED" : complicated >= 85 ? "UNNECESSARY" : complicated >= 65 ? "AMBITIOUSLY UNNECESSARY" : "REASONABLE (CONCERNING)";
    return { strategic: strategic, complicated: complicated, email: email, level: level, has13: a.has13 };
  }

  /* ── final era name ── */
  const ADJ = { songwriter: "Lyrically Unhinged", storyteller: "Narratively Committed", egg: "Suspiciously Observant", main: "Cinematically Confident", cat: "Feline-Aligned", romance: "Romantically Delusional", mastermind: "Strategically Delusional", era: "Perpetually Reinvented" };
  const NOUN = { songwriter: "Notebook", storyteller: "Narrator", egg: "Detective", main: "Main Character", cat: "Cat Whisperer", romance: "Hopeless Romantic", mastermind: "Mastermind", era: "Shapeshifter" };

  TS.engine = { analyze: analyze, score: score, taylorize: taylorize, TAYLORIZE_QS: TAYLORIZE_QS, motifs: motifs, decode: decode,
    masterScore: masterScore, hash: hash, rng: rng, pick: pick, clamp: clamp, words: words, COLORS: COLORS, ADJ: ADJ, NOUN: NOUN };
})();
