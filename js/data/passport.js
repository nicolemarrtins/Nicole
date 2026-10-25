/* Cultural Passport — every reference in the curriculum. */
window.TAW = window.TAW || {};
TAW.passportCategories = [
  ["books", "📚", "Books"], ["art", "🎨", "Art"], ["women", "👩", "Important women"], ["thinkers", "👨", "Thinkers"],
  ["history", "🏛", "History"], ["cinema", "🎬", "Cinema"], ["music", "🎵", "Music"], ["concepts", "🧠", "Concepts"],
  ["cultures", "🌎", "Countries & cultures"], ["ideas", "💭", "Ideas"], ["science", "🔬", "Science"],
  ["business", "💼", "Business"], ["architecture", "🏛", "Architecture"], ["fashion", "👗", "Fashion"]
];
TAW.cards = {};
(function () {
  function C(id, name, cat, period, origin, why, facts, idea, related, talk) {
    TAW.cards[id] = { id, name, cat, period, origin, why, facts, idea, related, talk };
  }

  C("montaigne", "Michel de Montaigne", "thinkers", "1533–1592", "France",
    "Invented the essay as a form of honest, personal thinking — the ancestor of every blog, column and podcast monologue.",
    ["His Essais (first published 1580) gave us the word “essay” — from essayer, “to try”.", "He retired at 38 to a tower library to read and write.", "His motto was “Que sais-je?” — “What do I know?”"],
    "“I am myself the matter of my book.”", ["Self-knowledge", "Scepticism", "socrates", "didion"],
    ["Montaigne basically invented the essay — the idea of thinking out loud about your own life.", "I love that his motto was a question: “What do I know?”"]);
  C("terkel", "Studs Terkel, Working", "books", "1974", "Chicago, USA",
    "An oral history in which more than a hundred Americans describe their jobs — a classic on the dignity, boredom and meaning of work.",
    ["Full title: Working: People Talk About What They Do All Day and How They Feel About What They Do.", "Terkel (1912–2008) was a Chicago radio broadcaster and master interviewer.", "He later won the Pulitzer Prize for The Good War (1985), an oral history of World War II."],
    "Work is “a search, too, for daily meaning as well as daily bread.”", ["Work", "Oral history", "sdt"],
    ["Terkel showed that ordinary people talking about ordinary jobs say profound things.", "He said work is a search for daily meaning as well as daily bread."]);
  C("frost", "Robert Frost, “The Road Not Taken”", "books", "1916", "USA",
    "One of the most quoted — and most misread — poems in English, usually taken as praise for bold, unconventional choices.",
    ["First published in 1915 and collected in Mountain Interval (1916).", "The poem says the two roads were worn “really about the same”.", "Frost wrote it partly as a gentle joke about his friend, the poet Edward Thomas, who always regretted the path not taken on their walks."],
    "We choose — and then tell the story as if the choice made all the difference.", ["Decisions", "counterfactual", "Memory"],
    ["Everyone quotes “The Road Not Taken” as a call to be bold, but the poem is more ironic than that.", "The roads were basically the same — the difference is in the story we tell later."]);
  C("lingua-franca", "English as a lingua franca", "cultures", "1990s–", "Global",
    "Most English conversations today happen between non-native speakers — which changes what “good English” means.",
    ["Estimates suggest roughly 1.5 billion people speak English, most of them as a second or additional language.", "Linguist Jennifer Jenkins’ “Lingua Franca Core” (2000) identified the pronunciation features that matter most for intelligibility.", "Features like the “th” sound turned out to matter far less than word stress and vowel length."],
    "The goal is intelligibility, not imitation.", ["Pronunciation", "Identity", "hall"],
    ["Most English is spoken between non-native speakers now — so my accent is just one of many.", "Research suggests stress and rhythm matter more than sounding native."]);
  C("aristotle-friendship", "Aristotle on friendship", "ideas", "4th century BCE", "Greece",
    "Aristotle devoted two books of the Nicomachean Ethics to friendship, distinguishing friendships of utility, pleasure and virtue.",
    ["Friendships of utility and pleasure fade when the usefulness or pleasure ends.", "Friendships of virtue — based on admiring each other’s character — are rare, slow to form and lasting.", "He called a true friend “another self”."],
    "Without friends no one would choose to live, though he had all other goods.", ["eudaimonia", "Relationships", "ubuntu"],
    ["Aristotle would say that was a friendship of utility — it ended when the job ended.", "The best friendships, for Aristotle, are based on admiring who someone is."]);
  C("counterfactual", "Counterfactual thinking", "concepts", "1980s–", "Psychology",
    "Imagining “what might have been” — a habit that shapes regret, learning and even happiness.",
    ["Kahneman and Tversky described the “simulation heuristic” — how we imagine alternatives — in 1982.", "Medvec, Madey & Gilovich (1995) found Olympic bronze medallists often appeared happier than silver medallists.", "Upward counterfactuals (“it could have been better”) breed regret; downward ones (“it could have been worse”) breed relief."],
    "How you imagine the alternative shapes how you feel about what happened.", ["kahneman", "frost", "Regret"],
    ["It’s the silver-medal problem — you compare yourself with gold, not with no medal.", "A downward counterfactual is basically gratitude."]);
  C("carnegie", "Dale Carnegie, How to Win Friends and Influence People", "business", "1936", "USA",
    "One of the best-selling self-help books ever written — about attention, appreciation and genuine interest in others.",
    ["It has sold many millions of copies and is still in print.", "Carnegie changed the spelling of his surname from “Carnagey”, reportedly to echo the industrialist Andrew Carnegie.", "Critics see manipulation in its techniques; admirers see simple kindness."],
    "You make more friends in two months by being interested in others than in two years trying to make them interested in you.", ["cialdini", "Conversation", "rogers"],
    ["Carnegie’s whole book comes down to being genuinely interested in people.", "The techniques only work when the interest is real."]);
  C("evelyn-hall", "Evelyn Beatrice Hall & “Voltaire’s” quote", "women", "1868–1956", "England",
    "Wrote the most famous line about free speech — which almost everyone attributes to Voltaire. A lesson in checking sources.",
    ["In The Friends of Voltaire (1906), writing as S. G. Tallentyre, she summarised his attitude: “I disapprove of what you say, but I will defend to the death your right to say it.”", "Voltaire never wrote the sentence.", "She later confirmed it was her own phrase, not a quotation."],
    "The most famous defence of opinion was written by a woman under a male pseudonym.", ["enlightenment", "mill", "Free speech"],
    ["Funnily enough, Voltaire never said that — it was written by an English biographer, Evelyn Beatrice Hall.", "It’s a good reminder to check who actually said what."]);
  C("socrates", "Socrates & Socratic questioning", "thinkers", "c. 470–399 BCE", "Athens, Greece",
    "Founding figure of Western philosophy who taught by asking questions rather than giving answers.",
    ["He wrote nothing; we know him mainly through Plato and Xenophon.", "He was tried and executed in Athens for “impiety” and “corrupting the youth”.", "Plato’s Apology has him say “the unexamined life is not worth living”."],
    "Ask until the assumption appears.", ["plato-cave", "Critical thinking", "mill"],
    ["Socratic questioning is just asking “why?” until the weak point in an idea shows itself.", "He’s the reason teachers answer questions with questions."]);
  C("flaubert", "Flaubert & “le mot juste”", "books", "1821–1880", "France",
    "The novelist of Madame Bovary (1856), obsessed with finding the exact word — a model of precision.",
    ["Madame Bovary led to a trial for offending public morals in 1857; he was acquitted.", "He could spend days on a single page, reading sentences aloud to test their rhythm.", "“Le mot juste” means “the exact word”."],
    "Not the nearest word — the right one.", ["orwell", "Realism", "Precision"],
    ["Flaubert would spend a whole day on a sentence, looking for le mot juste.", "Madame Bovary is basically about the danger of romantic fantasies."]);
  C("vonnegut", "Kurt Vonnegut’s shapes of stories", "books", "1922–2007", "USA",
    "The author of Slaughterhouse-Five (1969) proposed that stories have shapes you can draw on a graph.",
    ["His rejected master’s thesis argued stories could be plotted by the hero’s fortune over time.", "Shapes include “Man in Hole” (fall then rise) and “Boy Meets Girl”.", "Slaughterhouse-Five draws on his survival of the bombing of Dresden as a prisoner of war."],
    "Every story is a shape: things get better or worse — and the turn is the story.", ["Storytelling", "scheherazade", "World War II"],
    ["Vonnegut said most stories follow simple shapes, like “Man in Hole” — someone gets into trouble and gets out again.", "Slaughterhouse-Five is darkly funny about something horrific."]);
  C("loewenstein", "The information-gap theory of curiosity", "concepts", "1994", "George Loewenstein, USA",
    "Explains curiosity as a reaction to noticing a gap in our knowledge — and why knowing more makes us more curious.",
    ["Proposed by behavioural economist George Loewenstein of Carnegie Mellon.", "Curiosity peaks when the gap is noticeable but feels closable.", "Clickbait headlines exploit it deliberately (“You won’t believe…”)."],
    "The more you know, the more you notice what you don’t.", ["Curiosity", "attention", "Learning"],
    ["There’s a theory that curiosity is an itch caused by a gap in what we know.", "Clickbait works because it opens a gap and makes you want to close it."]);
  C("woolf", "Virginia Woolf", "women", "1882–1941", "England",
    "Modernist novelist and essayist who connected creativity to money, space and freedom — and gave literary form to inner life.",
    ["A Room of One’s Own (1929): “a woman must have money and a room of her own if she is to write fiction.”", "Mrs Dalloway (1925) takes place in a single day in London.", "She co-founded the Hogarth Press with her husband Leonard, publishing T. S. Eliot and Freud in English."],
    "It’s a question of conditions, not talent.", ["Feminism", "modernism", "beauvoir", "Stream of consciousness"],
    ["What I find striking about Woolf is how practical she was — genius needs a room and an income.", "Mrs Dalloway is basically one day, told from inside people’s heads."]);
  C("renaissance", "The Renaissance", "history", "c. 14th–17th centuries", "Italy → Europe",
    "A cultural movement reviving classical learning that transformed art, science and ideas about human potential.",
    ["Began in Florence, funded by patrons like the Medici.", "Brunelleschi demonstrated linear perspective in the early 1400s.", "Historians now question the idea of a sudden “rebirth” after “dark” ages."],
    "Genius needs patrons, technology and ideas in circulation.", ["Humanism", "house-of-wisdom", "birth-of-venus", "Printing press"],
    ["It was less a rebirth than a rediscovery — and it was funded by bankers.", "Someone multi-talented is called a “Renaissance woman”."]);
  C("confirmation-bias", "Confirmation bias", "concepts", "Named 1960s", "Psychology",
    "Our tendency to seek and remember information confirming what we already believe — behind echo chambers and stubborn arguments.",
    ["Peter Wason’s 2-4-6 task (1960) showed people test hypotheses by confirming, not disproving.", "It affects experts as well as laypeople.", "The counter-question: “What would change my mind?”"],
    "We don’t see the world as it is; we see it as we expect it.", ["kahneman", "dissonance", "Echo chambers"],
    ["To be fair, I might only be noticing the cases that fit — classic confirmation bias.", "What would change your mind?"]);
  C("eudaimonia", "Aristotle’s eudaimonia", "ideas", "4th century BCE", "Greece",
    "Aristotle’s idea of the good life as flourishing — realising your capacities through virtuous activity over a lifetime.",
    ["Developed in the Nicomachean Ethics.", "Better translated as “flourishing” than “happiness”.", "Modern psychology distinguishes hedonic (pleasure) from eudaimonic (meaning) wellbeing."],
    "Happiness is not a feeling you have but a life you live.", ["stoicism", "Meaning", "sdt"],
    ["Aristotle would say success isn’t the point — flourishing is.", "Eudaimonia is less about feeling good than living well."]);
  C("feynman", "Richard Feynman", "science", "1918–1988", "USA",
    "Nobel Prize-winning physicist famous for explaining complex ideas simply and for his playful curiosity.",
    ["Shared the 1965 Nobel Prize in Physics for work in quantum electrodynamics.", "On the Challenger inquiry (1986) he showed the O-ring failure by dipping a sample in iced water.", "The “Feynman technique” was named after him later, distilling his way of learning."],
    "If you can’t explain it simply, find out where you’re stuck.", ["sagan", "Curiosity", "Explanation"],
    ["Feynman showed what went wrong with the Challenger with a glass of iced water.", "The test of understanding is explaining it to a 12-year-old."]);
  C("birth-of-venus", "Botticelli, The Birth of Venus", "art", "c. 1484–1486", "Florence, Italy",
    "Iconic Renaissance painting showing the goddess Venus arriving on a shell — an ideal of beauty drawn from classical sculpture.",
    ["Painted in tempera on canvas; it hangs in the Uffizi, Florence.", "Venus’s pose echoes the classical “modest Venus” type.", "Such large mythological nudes were rare in Christian Florence."],
    "Every ideal of beauty belongs to a time and a place.", ["renaissance", "Beauty standards", "wabi-sabi"],
    ["Venus is beautiful by Renaissance standards, which were borrowed from ancient Greece.", "It makes you ask: beautiful according to whom?"]);
  C("barrett", "Emotional granularity", "science", "2000s–", "Lisa Feldman Barrett, USA",
    "The ability to distinguish emotions finely — linked to better coping and emotion regulation.",
    ["Developed by psychologist and neuroscientist Lisa Feldman Barrett.", "Her book How Emotions Are Made (2017) argues emotions are constructed by the brain.", "People with higher granularity tend to cope better with stress in studies."],
    "The more precisely you name a feeling, the better you can handle it.", ["Emotions", "Language & thought"],
    ["There’s research suggesting that naming emotions precisely actually helps you manage them.", "It wasn’t anger exactly — more like exasperation."]);
  C("angelou", "Maya Angelou", "women", "1928–2014", "USA",
    "Poet, memoirist and civil rights activist whose autobiography redefined the genre.",
    ["I Know Why the Caged Bird Sings (1969) recounts her childhood.", "She read her poem “On the Pulse of Morning” at Bill Clinton’s 1993 inauguration.", "She worked as a dancer, journalist, actor and director."],
    "“There is no greater agony than bearing an untold story inside you.”", ["Memoir", "baldwin", "morrison"],
    ["Angelou turned her life into literature without self-pity.", "She was a poet, a dancer, a journalist, an activist — a true renaissance woman."]);
  C("calvino", "Italo Calvino, Invisible Cities", "books", "1972", "Italy",
    "A short, dreamlike book in which Marco Polo describes 55 imaginary cities to Kublai Khan.",
    ["Each city is named after a woman.", "It is often read as a meditation on memory, desire and Venice.", "Calvino was part of the experimental Oulipo group."],
    "Every city is also a city of memory and desire.", ["jacobs", "Travel", "Imagination"],
    ["Invisible Cities is a book of imaginary cities that are all secretly about real ones.", "Calvino makes you see your own city as strange."]);
  C("proust", "Marcel Proust & the madeleine", "books", "1871–1922", "France",
    "His seven-volume In Search of Lost Time explores memory, time and desire.",
    ["The famous madeleine dipped in tea triggers a flood of involuntary memory.", "The novel is over 3,000 pages long.", "“Proustian moment” = a memory triggered by a sensation."],
    "The past is not lost; it waits in a taste or a smell.", ["loftus", "Memory", "woolf"],
    ["That smell gave me a real Proustian moment.", "Proust’s idea is that memory comes back through the senses, not by trying."]);
  C("bourdieu", "Pierre Bourdieu & taste", "thinkers", "1930–2002", "France",
    "Sociologist who argued that taste is shaped by class and used to mark social distinction.",
    ["Key book: Distinction: A Social Critique of the Judgement of Taste (1979).", "Coined “cultural capital” — knowledge and tastes that confer status.", "He studied French surveys of music, art and food preferences."],
    "Taste classifies — and it classifies the classifier.", ["veblen", "Class", "meritocracy"],
    ["Bourdieu would say my taste in music says more about my background than my soul.", "“Cultural capital” is the status you get from knowing the right things."]);
  C("didion", "Joan Didion", "women", "1934–2021", "USA",
    "Essayist and novelist known for cool, precise sentences and sharp observation of American life.",
    ["Slouching Towards Bethlehem (1968) captured 1960s California.", "The Year of Magical Thinking (2005) is about grief after her husband’s death.", "“I write entirely to find out what I’m thinking.”"],
    "Writing is a way of finding out what you think.", ["montaigne", "Essay", "Style"],
    ["Didion said she wrote to find out what she was thinking — I relate to that.", "Her sentences are so controlled — nothing wasted."]);
  C("adichie", "Chimamanda Ngozi Adichie", "women", "b. 1977", "Nigeria",
    "Novelist whose TED talks “The Danger of a Single Story” (2009) and “We Should All Be Feminists” (2012) became global references.",
    ["Novels include Half of a Yellow Sun (2006) and Americanah (2013).", "Her feminism talk was sampled by Beyoncé on “Flawless” (2013).", "She grew up in Nsukka, in a house once lived in by Chinua Achebe."],
    "A single story creates stereotypes — not because they’re untrue, but because they’re incomplete.", ["achebe", "Feminism", "Representation"],
    ["Adichie talks about the danger of a single story — when you only know one version of a people.", "Stereotypes aren’t always false; they’re incomplete."]);
  C("rogers", "Carl Rogers & active listening", "thinkers", "1902–1987", "USA",
    "Humanistic psychologist who developed person-centred therapy and the practice of empathic, active listening.",
    ["He emphasised empathy, congruence and “unconditional positive regard”.", "The term “active listening” was developed by Rogers and Richard Farson (1957).", "His ideas spread into education, management and conflict resolution."],
    "People change when they feel understood, not judged.", ["Empathy", "Listening"],
    ["Rogers argued people change when they feel heard, not lectured.", "So what you’re saying is… — that’s basic Rogers."]);
  C("mill", "John Stuart Mill", "thinkers", "1806–1873", "England",
    "Philosopher of liberty and utilitarianism, early advocate for women’s equality.",
    ["On Liberty (1859): “He who knows only his own side of the case knows little of that.”", "Co-wrote ideas on women’s rights with Harriet Taylor Mill; published The Subjection of Women (1869).", "As an MP he proposed votes for women in 1867."],
    "If you only know your own side, you don’t really know it.", ["utilitarianism", "Free speech", "steelman"],
    ["Mill said that if you only know your side of an argument, you don’t really understand it.", "He was arguing for women’s votes in Parliament in the 1860s."]);
  C("scheherazade", "Scheherazade & One Thousand and One Nights", "books", "Compiled c. 8th–14th centuries", "Middle East, Persia, India",
    "A storyteller who survives by telling a king a story each night, always ending on a cliffhanger.",
    ["Tales were gathered from Persian, Arabic and Indian sources over centuries.", "Aladdin and Ali Baba were added in the 18th century French translation by Antoine Galland.", "It’s an early example of the frame narrative — stories within a story."],
    "Stories can save your life — or at least keep people listening.", ["vonnegut", "Storytelling", "house-of-wisdom"],
    ["Scheherazade is the original cliffhanger artist.", "Funnily enough, Aladdin wasn’t in the original manuscripts."]);
  C("jacobs", "Jane Jacobs", "women", "1916–2006", "USA / Canada",
    "Urban activist and writer who argued cities thrive on density, mixed uses and street life.",
    ["The Death and Life of Great American Cities (1961) attacked top-down urban planning.", "She coined “eyes on the street” — busy streets are safer streets.", "She helped stop a motorway through Lower Manhattan."],
    "Cities are made by people on sidewalks, not plans on paper.", ["hadid", "Cities", "calvino"],
    ["Jane Jacobs would say a street is safe when there are eyes on it.", "She was a journalist with no planning degree who beat the most powerful planner in New York."]);
  C("szymborska", "Wisława Szymborska", "women", "1923–2012", "Poland",
    "Nobel Prize-winning poet whose wit and humility made uncertainty a virtue.",
    ["Won the Nobel Prize in Literature in 1996.", "Her Nobel lecture praised the phrase “I don’t know”.", "Poems like “View with a Grain of Sand” make big questions feel intimate."],
    "“I don’t know” is small, but it has mighty wings.", ["Uncertainty", "Poetry", "montaigne"],
    ["Szymborska said in her Nobel lecture that “I don’t know” is the most valuable phrase.", "She makes humility sound brilliant."]);
  C("varda", "Agnès Varda", "cinema", "1928–2019", "France (born Belgium)",
    "Pioneer of the French New Wave, known for playful, humane, deeply personal films.",
    ["Cléo from 5 to 7 (1962) follows a singer in near real time awaiting medical results.", "The Gleaners and I (2000) is a beloved documentary about scavenging.", "She received an honorary Oscar in 2017."],
    "The camera can be curious, tender and political at once.", ["New Wave", "Feminism", "kurosawa"],
    ["Varda’s Cléo from 5 to 7 happens almost in real time — two hours in a woman’s life.", "She was making films into her nineties."]);
  C("simone", "Nina Simone", "music", "1933–2003", "USA",
    "Singer, pianist and civil rights voice who fused classical training with jazz, soul and protest.",
    ["She trained as a classical pianist and hoped to become a concert pianist.", "“Mississippi Goddam” (1964) responded to racist murders in the South.", "She was called the “High Priestess of Soul”."],
    "“An artist’s duty is to reflect the times.”", ["baldwin", "Civil rights", "Music & politics"],
    ["Nina Simone wanted to be a classical pianist — you can hear Bach in her playing.", "She saw art as a duty to reflect the times."]);
  C("veblen", "Thorstein Veblen & conspicuous consumption", "business", "1857–1929", "USA",
    "Economist who explained how people spend to display status.",
    ["Coined “conspicuous consumption” in The Theory of the Leisure Class (1899).", "“Veblen goods” are luxury items whose demand rises as price rises.", "He was a sharp, ironic critic of the wealthy."],
    "Some things are bought precisely because they are expensive.", ["bourdieu", "chanel", "Status"],
    ["That handbag is a classic Veblen good — it’s desirable because it’s expensive.", "Veblen saw consumption as theatre."]);
  C("ubuntu", "Ubuntu", "cultures", "Traditional", "Southern Africa (Nguni languages)",
    "A philosophy of shared humanity often summarised as “I am because we are”.",
    ["From the Zulu/Xhosa phrase umuntu ngumuntu ngabantu — a person is a person through other people.", "Desmond Tutu and Nelson Mandela popularised the idea internationally.", "It informed South Africa’s Truth and Reconciliation Commission."],
    "A person is a person through other people.", ["mandela", "Community", "Gratitude"],
    ["Ubuntu is the idea that we become human through other people.", "It’s the opposite of the self-made myth."]);
  C("lorde", "Audre Lorde", "women", "1934–1992", "USA",
    "Poet and essayist who wrote powerfully about race, feminism, sexuality and speaking up.",
    ["Described herself as “Black, lesbian, mother, warrior, poet”.", "Essays collected in Sister Outsider (1984).", "“Your silence will not protect you” comes from her essay “The Transformation of Silence into Language and Action” (1977)."],
    "Your silence will not protect you.", ["crenshaw", "Feminism", "baldwin"],
    ["Lorde said our silence won’t protect us — it’s about the cost of not speaking.", "She insisted on all her identities at once."]);
  C("hitchcock", "Alfred Hitchcock & suspense", "cinema", "1899–1980", "England / USA",
    "The “Master of Suspense”, who explained the difference between surprise and suspense.",
    ["His bomb-under-the-table example: show the audience the bomb, and a dull conversation becomes unbearable.", "Films include Rear Window (1954), Vertigo (1958) and Psycho (1960).", "He explained it in interviews with François Truffaut (1962)."],
    "Surprise lasts seconds; suspense lasts minutes — give the audience information.", ["Storytelling", "varda"],
    ["Hitchcock said suspense comes from letting the audience know about the bomb.", "Vertigo is often voted the greatest film ever made."]);
  C("hall", "High- and low-context cultures", "cultures", "1976", "Edward T. Hall, USA",
    "Anthropologist Edward T. Hall’s distinction between cultures where meaning is explicit and where it depends on context.",
    ["Introduced in Beyond Culture (1976).", "Low-context: say it directly (often associated with Germany, the US).", "High-context: meaning in relationships, tone and silence (often associated with Japan, many Arab and Latin cultures)."],
    "Some cultures speak in words; others speak in context.", ["Communication", "wabi-sabi"],
    ["Hall would call that a high-context culture — what isn’t said matters.", "It explains a lot of misunderstandings in international teams."]);
  C("rhetoric-aristotle", "Aristotle’s ethos, pathos, logos", "ideas", "4th century BCE", "Greece",
    "Aristotle’s three modes of persuasion: credibility, emotion and reason.",
    ["Described in his Rhetoric.", "Ethos = character; pathos = emotion; logos = logic.", "Still the foundation of speech-writing and advertising."],
    "People are persuaded by who you are, how you make them feel, and what you can prove.", ["mlk", "Persuasion", "cialdini"],
    ["That speech was strong on pathos but weak on logos.", "Aristotle’s point is that reason alone rarely persuades."]);
  C("herodotus", "Herodotus", "history", "c. 484–425 BCE", "Halicarnassus (modern Turkey)",
    "Called the “Father of History” — and by critics the “Father of Lies”.",
    ["His Histories recount the wars between Greece and Persia.", "He travelled widely and recorded customs of many peoples.", "He mixed careful inquiry with legend and hearsay."],
    "History begins with asking “why did they fight?”", ["Persian Wars", "Ancient Greece"],
    ["Herodotus is called both the father of history and the father of lies.", "The Greek word historia actually meant “inquiry”."]);
  C("gilgamesh", "The Epic of Gilgamesh", "books", "c. 2100–1200 BCE", "Mesopotamia (modern Iraq)",
    "One of the oldest surviving works of literature: a king’s search for immortality.",
    ["Written in cuneiform on clay tablets.", "Includes a flood story with striking parallels to Noah’s.", "Gilgamesh fails to gain immortality and returns to value his city and mortal life."],
    "We can’t escape death, but we can build something that lasts.", ["Mortality", "Storytelling", "Mesopotamia"],
    ["The oldest story we have is about a man afraid of death.", "It has a flood story older than the Bible’s."]);
  C("antigone", "Sophocles’ Antigone", "books", "c. 441 BCE", "Athens, Greece",
    "Greek tragedy about a woman who defies the king to bury her brother.",
    ["King Creon forbids the burial; Antigone obeys divine and family law instead.", "Hegel saw it as a clash of two legitimate rights.", "It has been adapted to protest dictatorships, from occupied France (Anouilh, 1944) onward."],
    "When the law and conscience collide, which do you obey?", ["Civil disobedience", "Ancient Greece", "Ethics"],
    ["Antigone is the original story of civil disobedience.", "What makes it tragic is that both sides have a point."]);
  C("rome", "Ancient Rome", "history", "753 BCE – 476 CE (West)", "Italy → Mediterranean",
    "From republic to empire, Rome left law, language, roads and political vocabulary across Europe.",
    ["“Senate”, “republic”, “dictator” are Roman words.", "Roman law influences civil legal systems across Europe and Latin America.", "The Western Empire fell in 476; the Eastern (Byzantine) lasted until 1453."],
    "Empires rarely fall in a day — they decline for centuries.", ["Republic", "renaissance"],
    ["The Roman Empire didn’t really fall — half of it lasted another thousand years.", "Spanish, Portuguese, French and Italian all grew from Latin."]);
  C("confucius", "Confucius", "thinkers", "551–479 BCE", "China",
    "Teacher whose ideas about virtue, ritual, family and good government shaped East Asian societies.",
    ["His sayings were collected by followers in the Analects.", "Key ideas: ren (humaneness), li (ritual propriety), filial piety.", "Confucianism became state orthodoxy in China under the Han dynasty."],
    "Do not impose on others what you do not wish for yourself.", ["Harmony", "Ethics", "Family"],
    ["Confucius had his own version of the golden rule — centuries before Jesus.", "For him, a good society starts with good relationships."]);
  C("house-of-wisdom", "Baghdad’s House of Wisdom", "history", "c. 8th–13th centuries", "Baghdad, Abbasid Caliphate",
    "A centre of translation and scholarship where Greek, Persian and Indian knowledge was preserved and advanced.",
    ["The mathematician al-Khwarizmi worked in Baghdad; “algorithm” comes from his name and “algebra” from his book title.", "Scholars translated Aristotle, Galen and Euclid into Arabic.", "Baghdad was sacked by the Mongols in 1258."],
    "Knowledge survives because someone translates it.", ["renaissance", "Science", "scheherazade"],
    ["The word “algorithm” comes from a Persian mathematician in Baghdad, al-Khwarizmi.", "A lot of Greek philosophy reached Europe through Arabic translations."]);
  C("mansa-musa", "Mansa Musa & the Mali Empire", "history", "r. c. 1312–1337", "Mali, West Africa",
    "Ruler of one of the richest empires in history, whose pilgrimage to Mecca became legendary.",
    ["His 1324 pilgrimage passed through Cairo with so much gold it reportedly depressed its value.", "He sponsored mosques and scholarship in Timbuktu.", "He appears on the Catalan Atlas (1375) holding a gold nugget."],
    "Africa’s medieval history was written in gold and manuscripts.", ["Timbuktu", "Colonialism", "Trade"],
    ["Mansa Musa spent so much gold in Cairo that he caused inflation.", "Timbuktu was a centre of scholarship, not just a byword for remoteness."]);
  C("shakespeare", "William Shakespeare", "books", "1564–1616", "England",
    "The most performed playwright in history, who shaped the English language itself.",
    ["Wrote about 39 plays and 154 sonnets.", "First recorded uses of words and phrases like “break the ice” and “wild-goose chase” appear in his works.", "Hamlet’s “To be, or not to be” weighs life against death."],
    "All the world’s a stage.", ["woolf", "Tragedy", "Language"],
    ["We quote Shakespeare all the time without realising — “break the ice” is from The Taming of the Shrew.", "Hamlet’s problem is that he thinks too much to act."]);
  C("enlightenment", "The Enlightenment", "history", "c. 1680s–1800", "Europe",
    "An intellectual movement championing reason, science, tolerance and individual rights.",
    ["Kant’s 1784 essay defined it with the motto “Sapere aude” — “Dare to know”.", "Thinkers include Locke, Voltaire, Montesquieu, Rousseau, Mary Wollstonecraft.", "Its ideals coexisted with slavery and colonialism — a central critique."],
    "Dare to know.", ["haiti", "evelyn-hall", "Science", "Human rights"],
    ["The Enlightenment gave us human rights — and many of its thinkers ignored whose rights counted.", "Kant’s motto was “Dare to know”."]);
  C("haiti", "The Haitian Revolution", "history", "1791–1804", "Saint-Domingue → Haiti",
    "The only successful slave revolt in history to found an independent state.",
    ["Toussaint Louverture became its most famous leader.", "Haiti declared independence in 1804 under Jean-Jacques Dessalines.", "France later forced Haiti to pay a huge “indemnity” (1825) that burdened it for over a century."],
    "Liberty proclaimed in Paris was taken, not given, in Haiti.", ["enlightenment", "Colonialism", "Slavery"],
    ["The Haitian Revolution put the French Revolution’s ideals to the test.", "Haiti had to pay France compensation for its own freedom."]);
  C("austen", "Jane Austen", "women", "1775–1817", "England",
    "Novelist of wit and irony whose books dissect money, marriage and social intelligence.",
    ["Pride and Prejudice (1813) opens: “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”", "Her novels were published anonymously (“By a Lady”).", "She appears on the Bank of England £10 note (since 2017)."],
    "Romance is never far from money.", ["Irony", "Marriage", "woolf"],
    ["Austen is funnier than people expect — it’s all irony.", "Her novels are really about economics: who marries whom, and for how much."]);
  C("industrial-revolution", "The Industrial Revolution", "history", "c. 1760–1840", "Britain → world",
    "The shift from hand production to machines, factories and steam power — reshaping work, cities and time.",
    ["Textile mills and James Watt’s improved steam engine (1760s–70s) drove early change.", "Factory time and child labour transformed family life.", "The Luddites (1811–16) smashed machines that threatened their livelihoods."],
    "Every technology revolution reorganises time, work and power.", ["marx", "turing", "Urbanisation"],
    ["People compare AI to the Industrial Revolution — but that took generations.", "The Luddites weren’t against technology; they were against losing their livelihoods."]);
  C("friedrich", "Caspar David Friedrich & Romanticism", "art", "1774–1840", "Germany",
    "Romantic painter of solitary figures before vast landscapes — emblem of the sublime.",
    ["Wanderer above the Sea of Fog (c. 1818) shows a man from behind on a rocky peak.", "Romanticism valued emotion, nature and the individual over Enlightenment reason.", "The “sublime” means beauty mixed with awe and terror."],
    "Standing before nature, we feel both small and infinite.", ["enlightenment", "Nature", "Sublime"],
    ["That’s very Friedrich — a figure alone, looking at something vast.", "Romanticism is behind every lonely mountain photo on Instagram."]);
  C("achebe", "Chinua Achebe, Things Fall Apart", "books", "1958", "Nigeria",
    "A landmark novel portraying Igbo society before and during colonialism — often called the start of modern African literature in English.",
    ["The title comes from W. B. Yeats’s poem “The Second Coming”.", "Okonkwo’s story shows a complex society, not “primitive” Africa.", "Achebe criticised Conrad’s Heart of Darkness as racist (1975 lecture)."],
    "“Until the lions have their own historians, the history of the hunt will always glorify the hunter.” — a proverb Achebe often quoted.", ["adichie", "Colonialism", "Representation"],
    ["Achebe wrote to show African societies from the inside.", "He famously challenged Heart of Darkness."]);
  C("impressionism", "Impressionism", "art", "1860s–1880s", "France",
    "Artists who painted light, movement and modern life with visible brushstrokes — initially ridiculed.",
    ["The name comes from Monet’s Impression, Sunrise (1872), mocked by a critic.", "Berthe Morisot and Mary Cassatt were central members.", "They held independent exhibitions after rejection by the official Salon."],
    "Paint the moment, not the object.", ["modernism", "Perception", "Photography"],
    ["“Impressionism” started as an insult.", "Morisot was showing with Monet and Renoir from the first exhibition."]);
  C("dostoevsky", "Fyodor Dostoevsky", "books", "1821–1881", "Russia",
    "Novelist of the troubled conscience — faith, freedom, guilt and redemption.",
    ["Crime and Punishment (1866): a student murders to test a theory of “extraordinary” men.", "He faced a mock execution in 1849 and spent years in Siberian exile.", "The Brothers Karamazov (1880) contains “The Grand Inquisitor”."],
    "No theory can silence a conscience.", ["existentialism", "nietzsche", "Psychology"],
    ["Dostoevsky survived a mock execution — you can feel it in his books.", "Crime and Punishment is less about the crime than the guilt."]);
  C("owen", "Wilfred Owen & WWI poetry", "history", "1893–1918", "England",
    "Soldier-poet whose verse exposed the horror of World War I.",
    ["“Dulce et Decorum Est” calls the old patriotic Latin line an “old Lie”.", "He was killed one week before the Armistice in 1918.", "WWI killed around 10 million military personnel."],
    "The old lie: it is sweet and fitting to die for one’s country.", ["modernism", "War", "Disillusionment"],
    ["Owen’s poem turned patriotic Latin into an accusation.", "WWI destroyed the 19th century’s faith in progress."]);
  C("modernism", "Modernism", "art", "c. 1890–1940", "Europe & Americas",
    "A break with tradition in art and literature — fragmentation, abstraction, new forms for a new world.",
    ["Picasso’s Les Demoiselles d’Avignon (1907) shattered perspective.", "Joyce’s Ulysses and Eliot’s The Waste Land both appeared in 1922.", "Ezra Pound’s slogan: “Make it new”."],
    "Make it new.", ["woolf", "kafka", "impressionism"],
    ["1922 was the year of modernism — Ulysses and The Waste Land.", "Modern art often looks simple because it’s asking a different question."]);
  C("kafka", "Franz Kafka", "books", "1883–1924", "Prague (Austria-Hungary)",
    "Writer of nightmarish, absurd worlds of guilt and bureaucracy — origin of “Kafkaesque”.",
    ["The Metamorphosis (1915): Gregor Samsa wakes up as a giant insect.", "The Trial: Josef K. is arrested without ever learning the charge.", "He asked his friend Max Brod to burn his manuscripts; Brod refused."],
    "The nightmare is not the monster — it’s the procedure.", ["existentialism", "Bureaucracy", "Alienation"],
    ["Dealing with that office was completely Kafkaesque.", "We only have Kafka because his friend ignored his wish to burn everything."]);
  C("arendt", "Hannah Arendt", "women", "1906–1975", "Germany / USA",
    "Political philosopher of totalitarianism, freedom and thinking — author of “the banality of evil”.",
    ["The Origins of Totalitarianism (1951).", "Reported on Adolf Eichmann’s trial: Eichmann in Jerusalem (1963).", "Argued great evil can be done by ordinary people who fail to think."],
    "Evil can be banal: committed by people who simply stop thinking.", ["Totalitarianism", "orwell", "Responsibility"],
    ["Arendt’s point is that evil isn’t always monstrous — sometimes it’s thoughtless.", "The phrase was controversial because people heard it as excusing Eichmann."]);
  C("cold-war", "The Cold War", "history", "1947–1991", "Global",
    "Ideological and geopolitical rivalry between the US and the USSR, under the shadow of nuclear weapons.",
    ["The Berlin Wall stood from 1961 to 1989.", "The Cuban Missile Crisis (1962) brought the world close to nuclear war.", "Proxy wars included Korea, Vietnam and Afghanistan."],
    "Peace can be built on mutual fear — but it’s fragile.", ["Ideology", "orwell", "Globalisation"],
    ["The Cold War was “cold” only for the superpowers — not for Vietnam or Angola.", "Deterrence means peace through fear."]);
  C("garcia-marquez", "Gabriel García Márquez", "books", "1927–2014", "Colombia",
    "Master of magical realism and author of One Hundred Years of Solitude.",
    ["One Hundred Years of Solitude (1967) tells seven generations of the Buendía family in Macondo.", "He won the Nobel Prize in Literature in 1982.", "He began as a journalist."],
    "Reality in Latin America can be stranger than fiction — so tell it plainly.", ["morrison", "Latin America", "Memory"],
    ["In magical realism, a woman floating to heaven is described like folding laundry.", "Gabo said his style came from how his grandmother told stories."]);
  C("baldwin", "James Baldwin", "books", "1924–1987", "USA",
    "Essayist and novelist of extraordinary eloquence on race, identity, love and America.",
    ["The Fire Next Time (1963) is a landmark of the civil rights era.", "Novels include Giovanni’s Room (1956).", "He lived much of his life in France."],
    "Not everything that is faced can be changed, but nothing can be changed until it is faced.", ["morrison", "simone", "lorde"],
    ["Baldwin writes with a moral clarity that still feels urgent.", "His line about facing things before changing them is one I think about a lot."]);
  C("morrison", "Toni Morrison", "women", "1931–2019", "USA",
    "Nobel laureate whose novels give voice to Black American history and memory.",
    ["Beloved (1987) won the Pulitzer Prize.", "In 1993 she became the first Black woman to win the Nobel Prize in Literature.", "She worked for years as an editor at Random House."],
    "“If there’s a book you want to read, but it hasn’t been written yet, then you must write it.”", ["baldwin", "garcia-marquez", "Memory"],
    ["Morrison wrote the stories history left out.", "Beloved is haunting — literally and figuratively."]);
  C("globalization", "Globalisation", "ideas", "c. 1980s–", "Global",
    "The growing interconnection of economies, cultures and people through trade, migration and technology.",
    ["Marshall McLuhan coined the “global village” in the 1960s.", "Global trade has lifted many out of poverty while hurting some industrial regions.", "Debates include cultural homogenisation vs hybridity."],
    "The world is more connected — but not more equal.", ["adam-smith", "industrial-revolution", "Diaspora"],
    ["Globalisation has winners and losers — often in the same country.", "Is the world becoming more alike or just more mixed?"]);
  C("plato-cave", "Plato’s Allegory of the Cave", "ideas", "c. 375 BCE", "Athens, Greece",
    "Prisoners mistake shadows for reality — a parable about knowledge, education and illusion.",
    ["From Book VII of Plato’s Republic.", "A prisoner freed into sunlight is first blinded, then sees truly.", "When he returns to free others, they reject him."],
    "We may be mistaking shadows for the world.", ["socrates", "descartes", "attention"],
    ["Social media can be a bit like Plato’s cave — shadows we take for reality.", "The tragic part is the prisoners don’t want to be freed."]);
  C("trolley", "The trolley problem", "ideas", "1967", "Philippa Foot, England",
    "Would you divert a runaway trolley to kill one instead of five? A thought experiment exposing moral intuitions.",
    ["Introduced by Philippa Foot (1967); developed by Judith Jarvis Thomson.", "Most people would pull a lever, but far fewer would push a man off a bridge for the same outcome.", "It is now discussed in relation to self-driving cars."],
    "The same outcome can feel right or wrong depending on how we cause it.", ["utilitarianism", "Ethics", "turing"],
    ["Two women philosophers, Foot and Thomson, created the trolley problem.", "Why does pushing feel so different from pulling a lever?"]);
  C("utilitarianism", "Utilitarianism", "ideas", "18th–19th centuries", "England",
    "The view that the right action produces the greatest happiness for the greatest number.",
    ["Founded by Jeremy Bentham; refined by John Stuart Mill.", "Mill distinguished “higher” and “lower” pleasures.", "Critics argue it can justify sacrificing individuals."],
    "Count everyone’s happiness equally — but can you count it at all?", ["mill", "trolley", "Effective altruism"],
    ["A utilitarian would just ask what creates the most wellbeing overall.", "The problem is that it can justify terrible things to minorities."]);
  C("stoicism", "Stoicism", "ideas", "c. 300 BCE – 200 CE", "Greece & Rome",
    "A philosophy of virtue and tranquillity: focus on what you control, accept what you don’t.",
    ["Key figures: Zeno, Epictetus (a former slave), Seneca, Marcus Aurelius (an emperor).", "Marcus Aurelius’s Meditations were private notes to himself.", "Modern cognitive behavioural therapy draws on Stoic ideas."],
    "We suffer more in imagination than in reality (Seneca).", ["eudaimonia", "Resilience", "existentialism"],
    ["It’s very Stoic — focus on what you can control.", "The best-known Stoics were a slave and an emperor."]);
  C("existentialism", "Existentialism", "ideas", "1940s–1950s", "France",
    "A philosophy holding that we exist first and create our meaning through free choices.",
    ["Sartre: “existence precedes essence” and we are “condemned to be free”.", "Camus’s The Myth of Sisyphus (1942): “One must imagine Sisyphus happy.”", "Associated with Paris cafés like Les Deux Magots and Café de Flore."],
    "You are what you do with what was done to you.", ["beauvoir", "nietzsche", "kafka"],
    ["Sartre said we’re condemned to be free — no excuses.", "Camus imagines Sisyphus happy — finding meaning in the struggle itself."]);
  C("beauvoir", "Simone de Beauvoir", "women", "1908–1986", "France",
    "Philosopher and novelist whose The Second Sex founded modern feminist thought.",
    ["The Second Sex (1949): “One is not born, but rather becomes, a woman.”", "Argued women had been defined as the “Other” to men.", "Lifelong intellectual partner of Jean-Paul Sartre."],
    "One is not born, but rather becomes, a woman.", ["existentialism", "woolf", "crenshaw"],
    ["Beauvoir’s line is that womanhood is a becoming, not just a biology.", "She saw women defined as the Other — never the default."]);
  C("free-will", "Free will vs determinism", "ideas", "Ancient – present", "Global",
    "Are our choices free, or caused by prior events — genes, upbringing, neurons?",
    ["Determinism: every event has prior causes.", "Compatibilists (like Hume) argue freedom means acting on your own desires without coercion.", "Benjamin Libet’s 1980s experiments on readiness potentials sparked debate — with contested interpretations."],
    "If we aren’t free, can anyone deserve praise or blame?", ["existentialism", "Responsibility", "Neuroscience"],
    ["Most philosophers are actually compatibilists — freedom and causation can coexist.", "The Libet experiments are more ambiguous than headlines suggest."]);
  C("theseus", "The Ship of Theseus", "ideas", "Ancient Greece", "Plutarch",
    "If every plank of a ship is replaced, is it still the same ship? A puzzle about identity.",
    ["Recorded by Plutarch in his Life of Theseus.", "Thomas Hobbes added: what if the old planks were reassembled?", "Applies to bodies, companies, cities — and selves."],
    "We are always being rebuilt at sea.", ["Identity", "proust", "existentialism"],
    ["Am I the same person I was at 15? It’s the Ship of Theseus problem.", "Most of your cells have been replaced — are you still you?"]);
  C("descartes", "René Descartes", "thinkers", "1596–1650", "France",
    "Philosopher and mathematician who sought a foundation of certain knowledge through radical doubt.",
    ["“Cogito, ergo sum” — “I think, therefore I am” (Discourse on the Method, 1637).", "Invented the Cartesian coordinate system.", "Argued for mind–body dualism."],
    "I can doubt everything except that I am doubting.", ["plato-cave", "Scepticism", "Science"],
    ["Descartes doubted everything until he found one certainty: he was thinking.", "We still use his coordinates in every graph."]);
  C("nietzsche", "Friedrich Nietzsche", "thinkers", "1844–1900", "Germany",
    "Philosopher who diagnosed the crisis of meaning in modernity and challenged inherited morality.",
    ["“God is dead” (The Gay Science, 1882) described a cultural crisis, not a celebration.", "Ideas: the Übermensch, will to power, eternal recurrence.", "His sister edited his work to fit nationalist and antisemitic views he had rejected."],
    "He who has a why to live can bear almost any how.", ["existentialism", "dostoevsky", "Nihilism"],
    ["Nietzsche’s “God is dead” was a warning, not a victory lap.", "His sister distorted his work — he despised antisemitism."]);
  C("dissonance", "Cognitive dissonance", "concepts", "1957", "Leon Festinger, USA",
    "The discomfort of holding conflicting beliefs or acting against them — and the mental gymnastics to reduce it.",
    ["Festinger’s A Theory of Cognitive Dissonance (1957).", "When Prophecy Fails (1956) studied a group whose prophecy of the world’s end failed — and whose belief deepened.", "We often change beliefs to match actions."],
    "When actions and beliefs collide, beliefs usually give way.", ["confirmation-bias", "Rationalisation"],
    ["That’s cognitive dissonance — I love animals and I eat meat.", "When the prophecy failed, some believers became more committed, not less."]);
  C("kahneman", "Kahneman, Tversky & heuristics", "concepts", "1970s–", "Israel / USA",
    "Psychologists who mapped the shortcuts and biases of human judgement, founding behavioural economics.",
    ["Kahneman won the 2002 Nobel in economics; Tversky died in 1996.", "Availability: judging likelihood by how easily examples come to mind.", "Thinking, Fast and Slow (2011) popularised System 1 and System 2."],
    "We’re not irrational at random — we’re predictably irrational.", ["confirmation-bias", "Framing", "cialdini"],
    ["That’s the availability heuristic — plane crashes are vivid, so we overestimate them.", "Anchoring: the first number you hear shapes your estimate."]);
  C("asch", "The Asch conformity experiments", "concepts", "1951–1956", "Solomon Asch, USA",
    "People often went along with an obviously wrong group judgement about line lengths.",
    ["Participants conformed on about a third of critical trials on average.", "About a quarter never conformed at all.", "Having just one ally who disagreed sharply reduced conformity."],
    "One dissenting voice makes it easier for others to speak.", ["Social proof", "cialdini", "Dissent"],
    ["Asch showed one ally makes it much easier to disagree.", "Most people conformed sometimes — but a quarter never did."]);
  C("loftus", "Elizabeth Loftus & false memory", "science", "1970s–", "USA",
    "Psychologist who showed memory is reconstructive and can be altered by suggestion.",
    ["In a 1974 study (with John Palmer), “smashed” vs “hit” changed speed estimates of a car crash.", "Her “lost in the mall” study implanted false childhood memories in some participants.", "She has been an expert witness in many trials."],
    "Memory is not a recording — it’s a reconstruction.", ["proust", "Eyewitness testimony"],
    ["Loftus showed one word — “smashed” — can change what people remember.", "Our memories are rewritten each time we recall them."]);
  C("attachment", "Attachment theory", "concepts", "1950s–1970s", "John Bowlby & Mary Ainsworth, UK / USA",
    "Early bonds with caregivers shape expectations of relationships.",
    ["John Bowlby developed the theory; Mary Ainsworth’s “Strange Situation” (1970s) identified secure and insecure patterns.", "Adult attachment styles (secure, anxious, avoidant) were later proposed by researchers like Hazan & Shaver (1987).", "Styles are tendencies that can change, not fixed labels."],
    "We learn what love feels like before we can talk.", ["Relationships", "Psychology"],
    ["Attachment styles are useful — but they’re not horoscopes.", "Ainsworth’s Strange Situation is a classic study."]);
  C("sdt", "Self-determination theory", "concepts", "1985–", "Edward Deci & Richard Ryan, USA",
    "Motivation thrives when we feel autonomy, competence and relatedness.",
    ["Distinguishes intrinsic from extrinsic motivation.", "Rewards can sometimes reduce intrinsic motivation (the “overjustification” effect).", "Widely applied in education, work and health."],
    "We do our best work when we feel free, capable and connected.", ["eudaimonia", "Habits", "Motivation"],
    ["Deci and Ryan say we need autonomy, competence and relatedness.", "Paying people for something they love can make them love it less."]);
  C("cialdini", "Cialdini’s principles of persuasion", "business", "1984", "Robert Cialdini, USA",
    "Six principles — reciprocity, commitment/consistency, social proof, authority, liking, scarcity — explain why we say yes.",
    ["From Influence: The Psychology of Persuasion (1984).", "He went “undercover” in sales jobs to study techniques.", "A seventh principle, unity, was added in 2016."],
    "We are persuaded less by arguments than by shortcuts.", ["kahneman", "rhetoric-aristotle", "Advertising"],
    ["“Only three left!” is pure scarcity — Cialdini.", "Free samples work because of reciprocity."]);
  C("adam-smith", "Adam Smith", "business", "1723–1790", "Scotland",
    "Founder of modern economics, who explained markets, specialisation and the “invisible hand”.",
    ["The Wealth of Nations (1776) described the division of labour in a pin factory.", "He also wrote The Theory of Moral Sentiments (1759) on sympathy.", "“Invisible hand” appears only a few times in his writing."],
    "Self-interest, in the right conditions, can serve the common good.", ["marx", "globalization", "keynes"],
    ["Adam Smith is quoted as a champion of greed, but he wrote a whole book on sympathy.", "He barely used the phrase “invisible hand”."]);
  C("inflation", "Inflation", "concepts", "Economics", "—",
    "A general rise in prices that reduces purchasing power — managed by central banks through interest rates.",
    ["Many central banks target around 2% annual inflation.", "Germany’s 1923 hyperinflation made money nearly worthless.", "Raising interest rates makes borrowing costlier, cooling demand."],
    "Inflation is a quiet tax on savings.", ["keynes", "Interest rates"],
    ["Inflation means your money buys less every year.", "Central banks raise rates to cool spending."]);
  C("marx", "Karl Marx", "thinkers", "1818–1883", "Germany / England",
    "Philosopher and economist who analysed capitalism, class struggle and alienation.",
    ["Co-wrote The Communist Manifesto (1848) with Friedrich Engels.", "Das Kapital (vol. 1, 1867) analysed capital and labour.", "His theory of alienation describes workers estranged from what they produce."],
    "History is the history of class struggle.", ["adam-smith", "industrial-revolution", "meritocracy"],
    ["You don’t have to be a Marxist to find his idea of alienation useful.", "He died in London and is buried in Highgate Cemetery."]);
  C("meritocracy", "Meritocracy", "ideas", "1958", "Michael Young, UK",
    "A society rewarding talent and effort — a word coined as a warning.",
    ["Michael Young’s satire The Rise of the Meritocracy (1958) imagined a dystopia.", "Critics (e.g. Michael Sandel, The Tyranny of Merit, 2020) argue it breeds arrogance among winners.", "Studies show family background still strongly predicts outcomes."],
    "A meritocracy can become a new aristocracy that believes it deserves everything.", ["bourdieu", "marx", "Inequality"],
    ["Funnily enough, “meritocracy” was invented as satire.", "The problem is winners start to believe they deserve it all."]);
  C("chanel", "Coco Chanel", "fashion", "1883–1971", "France",
    "Designer who freed women’s fashion from corsets and invented modern elegance — and a complicated figure.",
    ["Popularised jersey fabric, the little black dress (1926) and Chanel No. 5 (1921).", "Grew up partly in an orphanage.", "Her collaboration with Nazi occupiers during WWII is well documented."],
    "Fashion can be liberation — and fashion icons can be morally complex.", ["veblen", "Consumerism", "modernism"],
    ["Chanel took the corset off women — that was radical.", "She’s a complicated figure — brilliant, and a wartime collaborator."]);
  C("attention", "The attention economy", "concepts", "1971–", "Herbert Simon, USA",
    "When information is abundant, attention becomes the scarce resource platforms compete for.",
    ["Herbert Simon (1971): “a wealth of information creates a poverty of attention.”", "Simon later won the Nobel Prize in economics (1978).", "Infinite scroll and notifications are designed to capture attention."],
    "If you’re not paying, your attention is the product.", ["loewenstein", "plato-cave", "Social media"],
    ["Herbert Simon predicted it in 1971 — information consumes attention.", "Our attention is what’s being sold."]);
  C("crenshaw", "Kimberlé Crenshaw & intersectionality", "women", "b. 1959", "USA",
    "Legal scholar who coined “intersectionality” to describe overlapping forms of discrimination.",
    ["Introduced the term in a 1989 paper in the University of Chicago Legal Forum.", "Example: Black women’s claims could fall between race and sex discrimination law.", "The term has expanded far beyond its legal origin."],
    "Discrimination isn’t always one thing at a time.", ["lorde", "beauvoir", "Identity"],
    ["Crenshaw coined intersectionality to explain a legal blind spot.", "It’s about how different identities overlap."]);
  C("orwell", "George Orwell", "books", "1903–1950", "England",
    "Novelist and essayist of political clarity — Nineteen Eighty-Four, Animal Farm and plain English.",
    ["“Politics and the English Language” (1946) gives six rules for clear writing.", "Nineteen Eighty-Four (1949) gave us “Big Brother”, “doublethink” and “newspeak”.", "He fought in the Spanish Civil War (Homage to Catalonia, 1938)."],
    "Never use a long word where a short one will do.", ["arendt", "flaubert", "Propaganda"],
    ["Orwell’s rule: never use a long word where a short one will do.", "“Orwellian” means language used to hide the truth."]);
  C("steelman", "Steelmanning", "concepts", "Modern", "Rapoport’s rules / Daniel Dennett",
    "Stating an opponent’s argument in its strongest form before responding.",
    ["Opposite of a straw man.", "Daniel Dennett popularised “Rapoport’s rules”: restate the other view so well they wish they’d put it that way.", "It builds trust and sharpens thinking."],
    "Argue with the best version of the other side.", ["mill", "socrates", "confirmation-bias"],
    ["Let me steelman that first — the strongest version of your view is…", "You can’t claim to disagree until you can state the other side fairly."]);
  C("mlk", "Martin Luther King Jr.", "history", "1929–1968", "USA",
    "Civil rights leader and one of the greatest orators of the 20th century.",
    ["“I Have a Dream” (1963) uses anaphora — repeated openings — to build power.", "“Letter from Birmingham Jail” (1963) is a masterclass in reasoned argument.", "Awarded the Nobel Peace Prize in 1964."],
    "Rhythm and repetition can carry moral force.", ["baldwin", "rhetoric-aristotle", "Nonviolence"],
    ["King’s “I have a dream” works through repetition — anaphora.", "The Birmingham letter is as carefully argued as a legal brief."]);
  C("wilde", "Oscar Wilde", "books", "1854–1900", "Ireland / England",
    "Wit, playwright and aesthete, master of the epigram and paradox.",
    ["The Importance of Being Earnest (1895) and The Picture of Dorian Gray (1890).", "Imprisoned for “gross indecency” in 1895.", "“I can resist everything except temptation.” (Lady Windermere’s Fan)"],
    "The truth is rarely pure and never simple.", ["Wit", "Aestheticism", "shakespeare"],
    ["Wilde could fit a philosophy into a single sentence.", "Dorian Gray is basically about Instagram filters."]);
  C("sagan", "Carl Sagan", "science", "1934–1996", "USA",
    "Astronomer and communicator who made science awe-inspiring and accessible.",
    ["Cosmos (1980) reached hundreds of millions of viewers.", "Pale Blue Dot (1994) reflects on the 1990 Voyager image of Earth.", "Popularised “extraordinary claims require extraordinary evidence”."],
    "Extraordinary claims require extraordinary evidence.", ["feynman", "curie", "Scepticism"],
    ["Sagan made the universe feel personal.", "The Pale Blue Dot puts every human problem in perspective."]);
  C("turing", "Alan Turing", "science", "1912–1954", "England",
    "Mathematician who founded computer science and asked whether machines can think.",
    ["His 1936 paper described a “universal machine”.", "Worked at Bletchley Park on breaking the Enigma code in WWII.", "His 1950 “imitation game” — the Turing test — asked whether a machine could pass as human."],
    "Can machines think? Perhaps we should ask what thinking is.", ["Artificial intelligence", "industrial-revolution", "trolley"],
    ["Turing asked in 1950 whether machines can think — now it’s dinner conversation.", "He was prosecuted for being gay; Britain apologised in 2009."]);
  C("freire", "Paulo Freire", "thinkers", "1921–1997", "Brazil",
    "Educator who argued teaching should liberate, not deposit information.",
    ["Pedagogy of the Oppressed (1968) criticised the “banking model” of education.", "He ran adult literacy programmes in Brazil’s northeast.", "Exiled after the 1964 military coup."],
    "Education either domesticates or liberates.", ["Education", "socrates"],
    ["Freire criticised “banking education” — students as empty accounts.", "For him, literacy was about reading the world, not just the word."]);
  C("kahlo", "Frida Kahlo", "art", "1907–1954", "Mexico",
    "Painter of intense self-portraits blending pain, identity, politics and Mexican culture.",
    ["About a third of her works are self-portraits.", "A bus accident at 18 caused lifelong pain.", "The Two Fridas (1939) shows two versions of herself, holding hands."],
    "“I paint myself because I am so often alone.”", ["Identity", "Surrealism", "Mexico"],
    ["Kahlo turned her pain into images you can’t look away from.", "She rejected the surrealist label — she said she painted her reality."]);
  C("hadid", "Zaha Hadid", "architecture", "1950–2016", "Iraq / UK",
    "Architect of flowing, futuristic forms; first woman to win the Pritzker Prize (2004).",
    ["Born in Baghdad.", "Works include the MAXXI museum in Rome and the Heydar Aliyev Center in Baku.", "Nicknamed “queen of the curve”."],
    "There are 360 degrees — why stick to one?", ["jacobs", "Bauhaus", "Modernism"],
    ["Hadid’s buildings look like they’re moving.", "She was the first woman to win the Pritzker."]);
  C("mandela", "Nelson Mandela", "history", "1918–2013", "South Africa",
    "Anti-apartheid leader who spent 27 years in prison and became South Africa’s first democratically elected president.",
    ["Imprisoned 1962–1990, much of it on Robben Island.", "President 1994–1999.", "Shared the 1993 Nobel Peace Prize with F. W. de Klerk."],
    "Composure is a form of power.", ["ubuntu", "Reconciliation", "mlk"],
    ["Mandela chose reconciliation when revenge would have been easier.", "His composure was strategic."]);
  C("curie", "Marie Curie", "science", "1867–1934", "Poland / France",
    "Physicist and chemist, pioneer of radioactivity, first person to win two Nobel Prizes.",
    ["Nobel in Physics (1903, shared) and Chemistry (1911).", "Discovered polonium (named after Poland) and radium.", "Her notebooks are still radioactive."],
    "Nothing in life is to be feared, only understood.", ["sagan", "Science", "Women in science"],
    ["Curie is the only person to win Nobels in two different sciences.", "She named polonium after her occupied homeland."]);
  C("keynes", "John Maynard Keynes", "business", "1883–1946", "England",
    "Economist who argued governments should spend to fight recessions.",
    ["The General Theory of Employment, Interest and Money (1936).", "Helped design the Bretton Woods system (1944).", "“In the long run we are all dead.”"],
    "In a slump, someone must spend.", ["adam-smith", "inflation", "Recession"],
    ["Keynes argued that in a recession, governments should spend when nobody else will.", "“In the long run we are all dead” was a jab at waiting for markets to fix things."]);
  C("vermeer", "Vermeer, Girl with a Pearl Earring", "art", "c. 1665", "Delft, Netherlands",
    "A luminous Dutch Golden Age painting of a girl turning towards the viewer.",
    ["It is a “tronie” — a study of a face, not a commissioned portrait.", "Held in the Mauritshuis, The Hague.", "Inspired Tracy Chevalier’s 1999 novel and a 2003 film."],
    "Light and a glance can hold a whole story.", ["Dutch Golden Age", "impressionism"],
    ["It’s not a portrait — it’s a tronie, a character study.", "What gets me is the light on her lip and the earring."]);
  C("kurosawa", "Akira Kurosawa, Rashomon", "cinema", "1950", "Japan",
    "A film in which four witnesses give contradictory accounts of the same crime.",
    ["Won the Golden Lion at Venice (1951), introducing Japanese cinema to the West.", "The “Rashomon effect” = contradictory accounts of the same event.", "Kurosawa also made Seven Samurai (1954)."],
    "Truth depends on who tells the story — and why.", ["loftus", "confirmation-bias", "varda"],
    ["It’s a real Rashomon situation — everyone remembers it differently.", "The film never tells you who’s right."]);
  C("wabi-sabi", "Wabi-sabi & kintsugi", "cultures", "Traditional", "Japan",
    "An aesthetic finding beauty in imperfection, impermanence and simplicity.",
    ["Rooted in Zen Buddhism and the tea ceremony.", "Kintsugi repairs broken pottery with gold, highlighting the cracks.", "Contrasts with Western ideals of symmetry and perfection."],
    "The crack is part of the story.", ["birth-of-venus", "hall", "Beauty"],
    ["Kintsugi makes the repair the most beautiful part.", "Wabi-sabi is the opposite of Instagram perfection."]);
})();
