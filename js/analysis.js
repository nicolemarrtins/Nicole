/* Local analysis of spoken or written answers. Indicators, not grades. */
window.TAW = window.TAW || {};
(function () {
  const FILLERS = ["like", "you know", "basically", "actually", "kind of", "sort of", "i mean", "um", "uh", "erm", "literally", "so yeah", "anyway"];
  const STOP = new Set("the a an and or but of to in on at for with is are was were be been being it this that these those i you he she we they me my your our their his her its as by from so if then than not no do does did have has had will would can could should just about into over also there here what which who when where why how all some any more most very really get got go going one two because up out them him think".split(" "));
  const LINK = {
    opening: ["first", "firstly", "to begin", "to start", "i’d say", "i'd say", "my sense is", "the question", "for me", "in my view", "i’m convinced", "i'm convinced", "i tend to"],
    contrast: ["however", "although", "though", "but", "whereas", "on the other hand", "that said", "having said that", "even so", "yet", "despite", "nevertheless"],
    reason: ["because", "since", "the reason", "as a result", "therefore", "which means", "so that", "consequently", "this is why", "that’s why", "that's why"],
    example: ["for example", "for instance", "such as", "take", "a case in point", "to give you an example", "imagine"],
    conclusion: ["in short", "overall", "ultimately", "in the end", "to sum up", "in a nutshell", "all in all", "so in conclusion", "in conclusion", "which is why"],
    nuance: ["to some extent", "it depends", "partly", "in some ways", "not necessarily", "arguably", "tend to", "largely", "by and large", "in most cases", "i suspect", "i might be wrong", "i could be wrong", "not entirely", "somewhat", "rather than", "it’s not so much", "it's not so much", "caveat", "although"],
    story: ["when i", "one day", "it dawned on me", "to my surprise", "looking back", "in hindsight", "that’s when", "that's when", "suddenly", "at first", "eventually", "gradually"]
  };
  const OVERUSE = ["i think", "very", "really", "thing", "things", "good", "bad", "interesting", "a lot", "nice", "amazing", "stuff", "basically"];

  function countPhrase(low, p) {
    const re = new RegExp("(^|[^a-z’'])" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/’/g, "[’']") + "(?=[^a-z]|$)", "g");
    return (low.match(re) || []).length;
  }

  function analyze(text, opts) {
    opts = opts || {};
    const raw = (text || "").trim();
    const low = raw.toLowerCase();
    const tokens = low.replace(/[^a-z’'\s-]/g, " ").split(/\s+/).filter(Boolean);
    const words = tokens.length;
    const sentences = raw.split(/[.!?]+(\s|$)/).filter(function (s) { return s && s.trim().split(/\s+/).length > 1; });
    const nSent = Math.max(1, sentences.length);
    const seconds = opts.seconds || 0;
    const wpm = seconds > 5 ? Math.round(words / (seconds / 60)) : null;

    const fillers = {}; let fillerTotal = 0;
    FILLERS.forEach(function (f) { const c = countPhrase(low, f); if (c) { fillers[f] = c; fillerTotal += c; } });
    // "like" is only a filler when set off by pauses: ", like," / "like, …" / "was like"
    if (fillers.like) {
      const fl = (low.match(/(^|[,.]\s*)like\b|\blike,|\b(was|is|i'm|i’m|were) like\b/g) || []).length;
      fillerTotal -= fillers.like - fl; fillers.like = fl; if (!fl) delete fillers.like;
    }
    fillerTotal = Math.max(0, fillerTotal);
    const fillerRate = words ? +(fillerTotal / words * 100).toFixed(1) : 0;

    const freq = {};
    tokens.forEach(function (t) { t = t.replace(/^[’'-]+|[’'-]+$/g, ""); if (t.length > 2 && !STOP.has(t)) freq[t] = (freq[t] || 0) + 1; });
    const repeated = Object.entries(freq).filter(function (e) { return e[1] >= 3 || (e[1] >= 2 && words < 60); }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 5);
    const overused = OVERUSE.map(function (o) { return [o, countPhrase(low, o)]; }).filter(function (o) { return o[1] >= (o[0] === "i think" ? 2 : 3); });

    const content = tokens.filter(function (t) { return !STOP.has(t); });
    const unique = new Set(content).size;
    // root type-token ratio, scaled to roughly 0–100 for typical answers
    const variety = content.length ? Math.min(100, Math.round(unique / Math.sqrt(content.length) * 12)) : 0;
    const avgLen = Math.round(words / nSent);
    const lens = sentences.map(function (s) { return s.trim().split(/\s+/).length; });
    const lenSpread = lens.length > 1 ? Math.max.apply(null, lens) - Math.min.apply(null, lens) : 0;

    const found = {};
    Object.keys(LINK).forEach(function (k) { found[k] = LINK[k].filter(function (p) { return countPhrase(low, p) > 0; }); });
    const myWordsUsed = (opts.myWords || []).filter(function (w) { return countPhrase(low, w.toLowerCase()) > 0; });

    const s = {};
    s.structure = clamp((found.opening.length ? 3 : 1) + Math.min(3, found.reason.length + found.contrast.length) + (found.example.length ? 2 : 0) + (found.conclusion.length ? 2 : 0));
    s.clarity = clamp(10 - Math.max(0, avgLen - 24) / 3 - (avgLen < 6 && words > 30 ? 2 : 0) - fillerRate / 2);
    s.vocabulary = clamp(variety / 10 + myWordsUsed.length * 0.5 - overused.length * 0.7);
    s.repetition = clamp(10 - repeated.reduce(function (a, r) { return a + Math.max(0, r[1] - 2); }, 0) - overused.length);
    s.fillers = clamp(10 - fillerRate * 1.5);
    s.nuance = clamp(2 + found.nuance.length * 2 + found.contrast.length);

    const tips = [];
    if (words < 25) tips.push("Say more. Add a reason, an example, or a consequence — elaboration is a skill.");
    if (!found.example.length && words >= 25) tips.push("Add a concrete example: “Take…, for instance.”");
    if (!found.contrast.length && words >= 40) tips.push("Good answer. Now add nuance — one “That said, …” or “although…”.");
    if (!found.conclusion.length && words >= 60) tips.push("Land the point with a closing line: “Ultimately, …” or “In short, …”.");
    overused.forEach(function (o) { const alt = TAW.overuseTargets && TAW.overuseTargets[o[0]]; tips.push("You used “" + o[0] + "” " + o[1] + " times." + (alt ? " Try: " + alt.slice(0, 3).join(" / ") : "")); });
    Object.keys(fillers).forEach(function (f) { if (fillers[f] >= 2) tips.push("“" + f + "” appeared " + fillers[f] + " times. A short pause sounds more confident than a filler."); });
    if (avgLen > 28) tips.push("Some sentences are long. Break one into two — clarity first.");
    if (lens.length > 3 && lenSpread < 5) tips.push("Your sentences are all a similar length. Mix one short sentence in for emphasis.");
    if (wpm && wpm > 175) tips.push("You were speaking fast (" + wpm + " wpm). Slow down slightly and pause between ideas.");
    if (myWordsUsed.length) tips.push("You used " + myWordsUsed.length + " of your saved words: " + myWordsUsed.join(", ") + ". Excellent.");
    if (!tips.length) tips.push("Clear, varied and structured. Next time, push one idea further than feels comfortable.");

    return { words, sentences: nSent, avgLen, wpm, fillers, fillerTotal, fillerRate, repeated, overused, variety,
      found, myWordsUsed, storyMarkers: found.story.length, scores: s, tips };
  }
  function clamp(x) { return Math.max(1, Math.min(10, Math.round(x))); }

  TAW.analyze = analyze;
})();
