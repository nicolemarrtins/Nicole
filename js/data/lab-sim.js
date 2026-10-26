/* Practice Lab — the conversation simulator.
   Each turn: what the other person says, then three replies scored 2 (articulate), 1 (fine) or 0 (misstep),
   with feedback and the other person’s reaction. Lines never depend on an earlier choice. */
(function () {
TAW.lab = TAW.lab || {};
function o(say, s, fb, re) { return { say: say, s: s, fb: fb, re: re || "" }; }
function turn(them, opts, who) { return { them: them, opts: opts, who: who || "" }; }

TAW.lab.scenarios = [
{
  id: "elevator", title: "The lift with the CEO", es: "En el ascensor con la CEO", tag: "Elevator pitch",
  who: "Your CEO", where: "Ground floor to the 9th — about 40 seconds",
  intro: "The doors are closing when your CEO steps in. You’ve met twice. She smiles and turns to you. This is your chance to be remembered for the right reasons.",
  turns: [
    turn("Remind me — what are you working on these days?", [
      o("I’m leading the order-automation programme. We’ve cut manual processing by about a third so far, and now I’m looking at where AI agents could take on the next layer.", 2, "Headline, proof, direction — in three breaths. The number makes it memorable, and “the next layer” invites a follow-up.", "A third? That’s more than I’d heard."),
      o("I’m Senior Manager for E-commerce Operations and Automation, in the Digital Transformation team.", 1, "Accurate, but it’s a job title — she can read that on an org chart. Lead with what changes because of your work.", "Right, of course."),
      o("Oh, lots of things! A bit of automation, some e-commerce stuff, the usual — nothing very exciting.", 0, "Modesty that hides your results. “Nothing very exciting” tells the CEO exactly how to remember you.", "Ah. Well — busy times.")
    ]),
    turn("What’s been the hardest part?", [
      o("Honestly, not the technology — the exceptions. About ten per cent of orders create most of the manual work, so that’s where we’re focusing now.", 2, "An insight, not a complaint. “Honestly, not X — Y” reframes the question and shows you understand the real problem.", "That’s a sharp way to put it."),
      o("The integration with our legacy systems is quite complex.", 1, "True and safe — but every project says that. What have you learned that others haven’t?", "It always is, isn’t it?"),
      o("Everything, to be honest. The systems are very old and people resist change a lot.", 0, "Complaining about colleagues to the CEO, in a lift, lands as blame — and she may know those people. Name problems as challenges you’re solving.", "Hm. Change is never easy.")
    ]),
    turn("What would help you move faster?", [
      o("Two things: a decision on which platform we standardise on, and one data engineer for a quarter. I could send you a one-page summary, if that’s useful.", 2, "Specific, modest and actionable — and offering a one-pager respects her time. Leaders love asks they can say yes to.", "Please do. Send it to me directly."),
      o("I think we’re fine for now, thank you — the team is doing a great job.", 1, "Gracious, and praising the team is good. But when a CEO asks what would help, it’s an invitation. Have one specific ask ready.", "Good to hear. Let me know if that changes."),
      o("More budget, basically.", 0, "Too blunt and too vague: a bare request for money sounds like a complaint. Tie the ask to what it would unlock.", "Everyone says that! Budget for what, exactly?")
    ]),
    turn("(The doors open.) This is me. Good talking to you.", [
      o("Likewise — I’ll send that one-pager by Friday.", 2, "Warm, brief, and it closes with a commitment. You leave her with something to expect from you.", "Perfect. Have a good afternoon."),
      o("Thank you so much for your time — and sorry for taking so much of it!", 1, "Polite, but the apology shrinks you: a 40-second chat isn’t an imposition. Swap “sorry” for a thank-you or a next step.", "Not at all!"),
      o("OK, bye bye!", 0, "Fine with friends, but in a senior moment it sounds a little cute — and you miss the chance to close with a next step.", "…Bye.")
    ])
  ],
  lesson: "Forty seconds is enough: a headline with a number, an insight instead of a complaint, one specific ask, and a close with a next step.",
  keep: [["Honestly, it’s not X — it’s Y.", "Reframes a question with an insight"], ["Two things: … and …", "Makes an ask specific and easy to approve"], ["I’ll send you a one-page summary by Friday.", "Closes with a commitment"]]
},
{
  id: "board", title: "The sceptical board member", es: "La consejera escéptica", tag: "Boardroom",
  who: "A non-executive director", where: "Quarterly board meeting",
  intro: "You’ve just presented your area’s results. A non-executive director, known for tough questions, leans forward and takes off her glasses.",
  turns: [
    turn("These projections look rather optimistic. Why should we believe them?", [
      o("That’s a fair challenge. They’re based on six months of pilot data, and we’ve used the conservative end of the range. If it helps, I can walk you through the downside scenario too.", 2, "Acknowledge, evidence, transparency. “That’s a fair challenge” lowers the temperature, and offering the downside shows you’ve stress-tested your own numbers.", "Yes — I’d like to see the downside."),
      o("I’m quite confident in them — the team worked very hard on the model.", 1, "Confidence is good, but effort isn’t evidence. Boards believe assumptions and data, not hard work.", "I don’t doubt the effort. I’m asking about the assumptions."),
      o("With respect, I don’t think they’re optimistic at all.", 0, "Defensive. Contradicting the question without evidence makes you look rattled — and she’ll push harder.", "Well, I do. So convince me.")
    ]),
    turn("And if the AI pilot doesn’t deliver — what then?", [
      o("Then we stop it. We’ve set clear criteria: if handling time hasn’t fallen by 15% in eight weeks, we pause and reassess. Our total exposure is the pilot budget.", 2, "Kill criteria are music to a board: they show discipline, not hope. “Our total exposure is…” answers the real question — how much could we lose?", "Good. I like a pilot with an exit."),
      o("We’re confident it will deliver — the early signals are very positive.", 1, "Optimism without a plan B is exactly what she’s probing. Answer the hypothetical: what would you do?", "That’s not quite what I asked."),
      o("I’m sure it will work. AI is the future.", 0, "A slogan, not an answer. Boards have heard “AI is the future” many times — they want risk management.", "Everything is the future until it isn’t.")
    ]),
    turn("What’s the payback period on phase two?", [
      o("I don’t have the exact figure with me, and I’d rather not guess. I’ll send it to you by Thursday.", 2, "“I don’t know” plus a commitment builds more trust than a guess. Boards punish wrong numbers far more than honest gaps.", "Thursday is fine."),
      o("I think around eighteen months, more or less — I’d need to check.", 1, "Half a guess is still a guess, and it will be remembered as a commitment. If you’re not sure, don’t give the number.", "Eighteen months. I’ll hold you to that."),
      o("Eighteen months.", 0, "Bluffing. If the real figure is 26 months, you’ve damaged your credibility for the next five meetings.", "Good — that’s clear.")
    ]),
    turn("Thank you. Is there anything you need from the board today?", [
      o("Yes — approval to extend the pilot to a second region. Everything else is on track.", 2, "A clear ask at the end. Boards exist to decide; giving them a decision to make is a gift.", "Let’s take that as agreed, subject to the downside numbers."),
      o("No, I think that’s everything. Thank you.", 1, "Polite, but a missed opportunity. If you need something, the board meeting is the place to ask for it.", "Thank you. Next item."),
      o("Maybe a bit more support in general, if possible…", 0, "Vague asks get vague answers — or none. Name the decision, the resource or the support.", "We’ll… bear that in mind.")
    ], "The Chair")
  ],
  lesson: "Acknowledge the challenge, show your assumptions, define kill criteria, never bluff a number, and end with a clear ask. Boards forgive problems — not surprises.",
  keep: [["That’s a fair challenge.", "Lowers the temperature before you answer"], ["If it doesn’t deliver, we stop: here are the criteria.", "Shows discipline, not hope"], ["I’d rather not guess — I’ll send it to you by Thursday.", "An honest gap with a commitment"]]
},
{
  id: "disagree", title: "Disagreeing with a peer", es: "Discrepar con un colega", tag: "Meetings",
  who: "Daniel, Head of Customer Service", where: "Weekly leadership meeting, your boss chairing",
  intro: "Daniel is energetic, popular and in a hurry. He wants to launch the new AI chatbot for every customer next month. You think it’s too soon.",
  turns: [
    turn("I say we roll the chatbot out to all customers next month. Why wait?", [
      o("I see the appeal — speed matters, and the pilot results are promising. My concern is the 10% of complex cases. Could we start with one region and scale in six weeks?", 2, "Acknowledge, concern, proposal. You disagree with the plan, not the person, and offer a path that still respects his goal of speed.", "Six weeks… I could maybe live with that."),
      o("I’m not sure that’s a good idea. It seems a bit risky.", 1, "Honest but vague. Risky how? Without a reason and an alternative, it sounds like resistance.", "Everything’s risky. What specifically worries you?"),
      o("That’s a terrible idea. We’re not ready at all.", 0, "It attacks the idea in a way that feels personal. Even in very direct cultures, “terrible” shuts discussion down.", "Wow. OK. Tell us how you really feel.")
    ], "Daniel"),
    turn("Pilots always slow us down. Our competitors are moving.", [
      o("That’s true — and I don’t want us to be last. The strongest argument for going now is first-mover advantage. But if the bot mishandles complaints at scale, we lose more trust than we gain in speed.", 2, "You steelman his position — state it at its strongest — before answering. People listen far more openly when they feel understood.", "Fair. I hadn’t framed it as a trust issue."),
      o("Yes, but we need to be careful.", 1, "“Yes, but” erases the yes. And “be careful” gives him nothing to respond to.", "We are being careful. Careful and slow."),
      o("Competitors are not our problem.", 0, "Dismissive — and wrong: competitors are everyone’s problem. Dismissing his concern makes him defend it harder.", "They will be when they take our customers.")
    ], "Daniel"),
    turn("Fine. But if we launch in one region, who owns it?", [
      o("I’m happy to co-own it with you — your team knows the customers, mine knows the systems.", 2, "Turning a disagreement into a shared project is the best possible outcome. “Co-own” keeps his credit intact.", "Deal. Let’s sketch it out tomorrow."),
      o("Maybe your team? You know the customers best.", 1, "Reasonable — but after winning the argument, it can sound like you’re handing him the risk.", "So I get the risk and you get the credit? Hmm."),
      o("That’s not really my decision.", 0, "Technically true, but you withdraw from the solution you proposed. Ownership is credibility.", "You suggested it…")
    ], "Daniel"),
    turn("So — where did we land?", [
      o("We agree on the goal: getting the chatbot live quickly. Daniel and I will launch in one region next month and come back in six weeks with the data to decide on a full rollout.", 2, "A neutral summary that names the shared goal first and credits Daniel. Whoever summarises frames the decision.", "Perfect. Thank you both."),
      o("We decided to do it my way, with a pilot first.", 1, "Accurate-ish, but “my way” creates a winner and a loser in front of the boss. Daniel will remember.", "Daniel, are you comfortable with that?"),
      o("I think Daniel still wants to go too fast, but we’ll see.", 0, "It reopens the conflict and criticises a colleague to the boss. Never summarise against someone.", "Let’s take this offline.")
    ], "Your boss")
  ],
  lesson: "Agree on the goal, disagree on the path: acknowledge → concern → alternative. Steelman before you answer. Then summarise neutrally — and give credit.",
  keep: [["I see the appeal — my concern is…", "Disagreement that starts with understanding"], ["The strongest argument for … is …", "Steelmanning the other side"], ["We agree on the goal; the question is the path.", "Turns a fight into a shared problem"]]
},
{
  id: "dinner", title: "Dinner with a stranger", es: "Cena con un desconocido", tag: "Social intelligence",
  who: "Tom, a British architect", where: "A friend’s dinner party, seated side by side",
  intro: "You’ve just been introduced to Tom. The starter has arrived, the conversation around you is lively, and he turns to you with a friendly smile.",
  turns: [
    turn("So, what do you do?", [
      o("I work in e-commerce — basically, I make sure that when someone clicks “buy”, everything behind it actually works. These days that means a lot of automation and AI. What about you?", 2, "A human version of your job — an image, not a title — and you hand the question back. Small talk wants a story, not a CV.", "Ha — so you’re the reason my parcels arrive."),
      o("I’m a Senior Manager in E-commerce Operations.", 1, "Correct, but it ends the thread. At dinner, give people something to pick up.", "Oh, right. Sounds busy."),
      o("Oh, it’s boring — corporate stuff, you don’t want to know.", 0, "Self-deprecation can be charming, but this one closes the door and tells him you’re not interesting. Offer at least one thread.", "Fair enough! Lovely wine, isn’t it?")
    ], "Tom"),
    turn("I’m an architect — mostly schools and libraries. Though honestly, I sometimes wonder whether anyone will need libraries in twenty years.", [
      o("What a question. What do you think they’ll become — less about books, more about places to be together?", 2, "Curiosity plus an open question that builds on his idea. People remember how interesting they felt with you.", "Exactly! That’s what our last project tried to do."),
      o("Really? I think libraries are still important.", 1, "A fair opinion, but it closes the topic. Add a reason or a question to keep the thread alive.", "Oh, I agree — I was just thinking aloud."),
      o("I never go to libraries, honestly. I read everything on my phone.", 0, "Honest, but it dismisses his life’s work. Make it a contribution: “I read on my phone — so what would bring me back?”", "Ah. Well, you’re not alone.")
    ], "Tom"),
    turn("I’ve just finished Ishiguro’s Klara and the Sun. Have you read it?", [
      o("I haven’t — but I know it’s narrated by an AI companion, which feels very close to my world. Did it change how you see AI?", 2, "Honest, plus what you do know, plus a question. You don’t need to have read a book to have a good conversation about it.", "It did, actually. It’s less about technology than about loneliness."),
      o("No, I haven’t. Is it good?", 1, "Honest and fine — but “Is it good?” invites a yes or no. Ask what stayed with him.", "Very. Quiet, though."),
      o("Yes, of course — it’s wonderful.", 0, "Pretending is risky: the next question could be about the ending. Honesty plus curiosity is always more elegant.", "Oh, great — what did you make of the ending?")
    ], "Tom"),
    turn("It’s been lovely talking to you. I should go and say hello to our hosts.", [
      o("Of course — I’ve really enjoyed this. Good luck with the schools; I’ll never look at a library the same way again.", 2, "A warm close with a callback to something he said — proof that you listened. That’s what people remember.", "Ha! Here — take my card."),
      o("Yes, nice to meet you.", 1, "Polite and correct, but generic. A callback to the conversation makes you memorable.", "You too."),
      o("Oh, sorry — I talked too much!", 0, "An unnecessary apology: now he has to reassure you instead of leaving warmly. End with appreciation, not apology.", "No, no — not at all!")
    ], "Tom")
  ],
  lesson: "Give a human version of your job, ask open questions that build on their ideas, be honest about what you haven’t read, and close with a callback.",
  keep: [["Basically, I make sure that…", "A human version of your job"], ["What do you think it will become?", "An open question that builds on theirs"], ["I haven’t read it — but I know…", "Honest and still interesting"]]
},
{
  id: "feedback", title: "The feedback conversation", es: "La conversación de feedback", tag: "Leadership",
  who: "Lucía, a talented analyst on your team", where: "Your office, five minutes after her presentation",
  intro: "Lucía presented to the leadership team this morning. It didn’t go well: 22 slides, no clear recommendation, and she couldn’t answer a question about costs. She asked to see you.",
  turns: [
    turn("So… how do you think it went?", [
      o("Let’s look at it together. Before I share my view — how did it feel from your side?", 2, "Asking first lets her assess herself, and feedback lands better when people have already noticed it.", "Honestly? Not great. I lost them halfway."),
      o("It was OK. Some things could be better.", 1, "Vague. “Some things” leaves her guessing — and anxious. Feedback needs specifics.", "Which things?"),
      o("It was great, don’t worry!", 0, "Ruinous empathy (Kim Scott): kindness that withholds the truth. She won’t improve — and she’ll hear it later from someone less kind.", "Really? It didn’t feel great…")
    ], "Lucía"),
    turn("I think I had too much information.", [
      o("I agree. In the meeting, you showed 22 slides before the recommendation, and by slide ten the CFO had stopped listening. The analysis was strong — but the answer got lost.", 2, "SBI: Situation, Behaviour, Impact — plus honest praise for what was good. Specific facts are easier to hear than judgements.", "That’s fair. I wanted to show all the work."),
      o("Yes, it was too long.", 1, "True, but not useful on its own. Describe what happened and its impact so she can fix it.", "OK… how long should it be?"),
      o("Yes — you always do that.", 0, "“Always” turns one event into a verdict on her character. Describe behaviour in a situation — never personality.", "Always? That’s not fair.")
    ], "Lucía"),
    turn("What should I do differently next time?", [
      o("Lead with the answer. One slide: your recommendation and the three reasons behind it. Put the analysis in an appendix — it’s there if they ask. Shall we rehearse it together on Thursday?", 2, "A method (answer first — the Pyramid Principle) and an offer of support. Challenge directly, care personally.", "Yes, please. That would really help."),
      o("Just make it shorter and more clear.", 1, "Right direction, but a wish, not a method — and “more clear” should be “clearer”.", "I’ll try."),
      o("Watch how I do it next time.", 0, "It makes the conversation about you and offers no method. Coaching means helping her find her own way.", "OK…")
    ], "Lucía"),
    turn("Thank you. I was quite nervous about this conversation.", [
      o("I’m glad you asked for it — that’s exactly what senior people do. You have real talent, and this is very fixable.", 2, "You end on genuine confidence in her, and praise the behaviour you want more of: asking for feedback.", "That means a lot. See you on Thursday."),
      o("No problem. Good luck.", 1, "Fine, but cool. A closing word about her strengths would send her away motivated.", "Thanks."),
      o("Don’t worry — everyone fails sometimes.", 0, "Well meant, but it labels her presentation a failure — the word she’ll remember. Choose your last sentence carefully.", "Right… thanks.")
    ], "Lucía")
  ],
  lesson: "Ask first, then use SBI — Situation, Behaviour, Impact. Be specific, give a method, offer support, and end with confidence in the person.",
  keep: [["How did it feel from your side?", "Lets people assess themselves first"], ["In the meeting, when you…, the impact was…", "SBI feedback"], ["This is very fixable.", "Ends on confidence, not judgement"]]
},
{
  id: "network", title: "The networking evening", es: "El evento de networking", tag: "Networking",
  who: "Priya, a stranger", where: "An industry evening on retail and AI",
  intro: "You know nobody here. Near the coffee, a woman is standing alone, looking at her phone. You decide to go over.",
  turns: [
    turn("(She looks up and smiles politely.)", [
      o("Hi — I’m {name}. I don’t know a single person here, so I’m hoping you’ll take pity on me. What brings you here tonight?", 2, "Light self-deprecation plus an open question: the most international opener there is. Admitting you know nobody is disarming, not weak.", "Ha! Same here, honestly."),
      o("Hello. Are you enjoying the event?", 1, "Polite, but a yes/no question: you’ll get “Yes, it’s nice” — and then silence.", "Yes, it’s nice."),
      o("Hi, I’m {name}, Senior Manager of E-commerce — here’s my card.", 0, "Leading with a card feels transactional, like a sales pitch. Connect first; exchange details later.", "Oh — thanks. (She glances back at her phone.)")
    ], "Priya"),
    turn("I’m Priya. I run digital for a pharmacy chain — we’re trying to work out what to do with AI, like everyone.", [
      o("Like everyone! What’s the hardest part for you — the technology, or getting people on board?", 2, "A follow-up that shows you listened and offers two angles. Good questions make people feel intelligent.", "Honestly? People. The tech is the easy bit."),
      o("Interesting. We’re doing a lot with AI too.", 1, "Fine, but the spotlight swings to you too quickly. Ask one more question before you share.", "Oh? Like what?"),
      o("Yes, AI is very complicated.", 0, "A dead end: it agrees without adding anything. Pick up a thread — pharmacies, AI, “like everyone”.", "Mm.")
    ], "Priya"),
    turn("People are the hard part. My team’s worried AI will replace them.", [
      o("We had exactly that. What helped was being honest that tasks would change — and letting the team decide which ones. Happy to share what we learned, if it’s useful.", 2, "You offer value — a real insight and a generous offer — without lecturing. That’s what makes a contact want to stay in touch.", "That would be really useful."),
      o("That’s normal. People always resist change.", 1, "True, but slightly dismissive of her team. Add something useful from your own experience.", "Right."),
      o("Well, honestly, some of them probably will be replaced.", 0, "Possibly true, but blunt with a stranger who has a worried team. Calibrate honesty to the relationship.", "That’s… not quite what I wanted to hear.")
    ], "Priya"),
    turn("(You’ve been talking for fifteen minutes. You’d like to meet a few more people.)", [
      o("I’ve really enjoyed this — I don’t want to monopolise you. Shall we connect on LinkedIn and carry on the AI conversation over coffee?", 2, "A graceful exit: appreciation, a reason that flatters her, and a concrete next step.", "Absolutely. Lovely to meet you."),
      o("OK, I need to go now. Bye!", 1, "Abrupt. An exit needs a soft landing: appreciation plus a next step.", "Oh — OK. Bye."),
      o("(Stay and keep talking for another hour.)", 0, "Networking means several good connections, not one long one — and she may want to circulate too. Leave while it’s good.", "(She starts glancing around the room.)")
    ], "Priya")
  ],
  lesson: "Open with lightness and an open question, follow their thread, offer value, and exit gracefully with a next step.",
  keep: [["What brings you here tonight?", "The classic open opener"], ["Is it the technology, or getting people on board?", "A follow-up with two angles"], ["I don’t want to monopolise you — shall we connect?", "A graceful exit"]]
},
{
  id: "negotiate", title: "Negotiating with a supplier", es: "Negociar con un proveedor", tag: "Negotiation",
  who: "Mark, account director at your logistics provider", where: "Contract renewal meeting",
  intro: "You’re renewing a contract with your main logistics provider. Mark has just presented a 12% price increase and closed his laptop.",
  turns: [
    turn("I’m afraid the 12% is non-negotiable. Costs have gone up across the board.", [
      o("I understand costs have risen — they have for us too. Help me understand what’s behind the 12%, so we can see where there might be room.", 2, "Acknowledge, then explore. Asking what’s behind a number moves from positions to interests — without confrontation.", "Fuel’s about half of it. The rest is wages and the new depot."),
      o("Twelve per cent is too much for us.", 1, "Honest, but it’s a position against a position. You’ve given him nothing to work with.", "I understand, but it is what it is."),
      o("Then we’ll have to look for another provider.", 0, "Threatening in the first minute escalates — and if you don’t mean it, you lose credibility. Keep your alternative in your pocket.", "That’s your right, of course. (He folds his arms.)")
    ], "Mark"),
    turn("Fuel is about half of it. The rest is wages and our new depot.", [
      o("That’s helpful. What if we linked the fuel part to an index — so it comes down if fuel prices fall — and committed to two years in exchange for a lower base rate?", 2, "A creative trade: you give him certainty, he gives you a lower base and a fair fuel mechanism. Trading, not conceding.", "Two years… that changes things. Let me look at it."),
      o("Could you do 6% instead?", 1, "Splitting the difference is quick but lazy — it suggests the number was arbitrary. Trade something he values instead.", "I could maybe go to ten."),
      o("Your depot isn’t our problem.", 0, "Perhaps true, but it makes him defensive. Use the information to design a solution, not to score a point.", "It’s the reason your deliveries are faster.")
    ], "Mark"),
    turn("I could do 7% with a two-year commitment. That’s really the best I can do.", [
      o("That’s a real move — thank you. If we add a service-level clause on on-time delivery, I think we have something I can take to my CFO.", 2, "Recognise his concession, ask for one last thing that matters to you, and signal you’re close. Mentioning your CFO uses a higher authority gracefully.", "On-time delivery above 97%? I can live with that."),
      o("OK, deal.", 1, "Fine — but you closed without checking what else matters to you, like service levels. Pause before you accept.", "Great. I’ll send the paperwork."),
      o("Hmm. I was hoping for much better.", 0, "After a genuine concession, disappointment sours the relationship — and you may not get more. Acknowledge his move.", "I’ve gone as far as I can.")
    ], "Mark"),
    turn("Shall I put this in writing?", [
      o("Please. Could you include the fuel index and the 97% service level, so we’re both clear? I’ll confirm by Wednesday.", 2, "Name the key terms you want in writing. Clarity now prevents arguments later.", "Will do. Pleasure doing business."),
      o("Yes, send it when you can.", 1, "Fine, but you leave the details to his memory. Name the terms that matter.", "Will do."),
      o("No need — I trust you.", 0, "A lovely sentiment and a risky practice. Writing things down protects both sides — and the relationship.", "Well… I’ll send something anyway.")
    ], "Mark")
  ],
  lesson: "Acknowledge, explore what’s behind the number, trade rather than concede, recognise their concessions — and put the key terms in writing.",
  keep: [["Help me understand what’s behind the…", "Moves from positions to interests"], ["What if we … in exchange for …?", "A trade, not a concession"], ["I think we have something I can take to my CFO.", "Signals you’re close"]]
},
{
  id: "floor", title: "Holding the floor", es: "Defender tu turno de palabra", tag: "Presence",
  who: "Senior colleagues on a video call", where: "A one-hour call with eight people",
  intro: "You’re halfway through an important point about delivery times when James — brilliant, impatient — starts talking over you.",
  turns: [
    turn("Sorry — just to jump in — I think the real issue is the warehouse, not the website—", [
      o("James, I’d love to hear that — let me just finish this point, because it connects to the warehouse.", 2, "Calm, warm, firm. His name, a promise of the floor and a reason make it very hard to object.", "Sure — go ahead."),
      o("Oh, sorry, sorry — please, go ahead.", 1, "Generous — but you apologise for being interrupted. If it happens often, your ideas will always be heard second.", "Thanks. So, the warehouse…"),
      o("Excuse me, I was talking!", 0, "Understandable, but sharp — on a call it can sound angry. Hold the floor with warmth, not irritation.", "Whoa — OK, sorry.")
    ], "James"),
    turn("(Later.) James, I like your idea of changing the order cut-off time.", [
      o("Thanks, James, for building on the cut-off idea I suggested earlier. To add to it: we’ve already modelled the impact — about a day saved per order.", 2, "You reclaim the idea without accusing anyone — and add new value. “Building on what I suggested” is elegant and unmistakable.", "Oh — that was yours? Great. Send me the model."),
      o("Actually, that was my idea.", 1, "True, and sometimes necessary — but it can sound territorial. Reclaim it while adding something.", "Er — yes, I think it was."),
      o("(Say nothing — it doesn’t matter who gets the credit.)", 0, "Humble, but invisible. Credit affects promotions. You can be generous and still make sure your contribution is seen.", "(The meeting moves on.)")
    ], "Sarah, the director"),
    turn("We’re nearly out of time. Can someone summarise the next steps?", [
      o("I can. Three next steps: James checks warehouse capacity, I share the cut-off model by Friday, and we decide on the 15th.", 2, "Volunteering to summarise is a quiet power move: whoever summarises frames the outcome — and is seen as leading.", "Perfect. Thanks, everyone."),
      o("I think we said something about the warehouse and the model.", 1, "Hesitant and vague. A summary should be crisp: who, what, when.", "OK… let’s confirm by email."),
      o("(Wait for someone else.)", 0, "A missed opportunity to lead. Summarising is an easy, highly visible contribution.", "(James jumps in: “I can do it.”)")
    ], "Sarah, the director"),
    turn("(In a private message afterwards.) Sorry for cutting you off earlier — I get excited.", [
      o("No worries — I like the energy. I’d just love to finish my thoughts in meetings, and I’ll do the same for you.", 2, "Gracious and clear: you accept the apology and set a norm in one sentence.", "Totally fair. Noted."),
      o("No problem at all!", 1, "Kind — but it signals that it’s fine to keep doing it. A light boundary costs nothing here.", "Great!"),
      o("You always do that.", 0, "“Always” turns an apology into a fight. He’s opened the door — walk through it gently.", "Well, I did say sorry…")
    ], "James")
  ],
  lesson: "Hold the floor with warmth (name + promise + reason), reclaim ideas while adding value, volunteer to summarise, and set boundaries lightly.",
  keep: [["Let me just finish this point — it connects to yours.", "Holds the floor warmly"], ["Thanks for building on the idea I suggested earlier.", "Reclaims credit gracefully"], ["I can summarise: three next steps…", "Frames the outcome"]]
},
{
  id: "interview", title: "The promotion panel", es: "La entrevista de ascenso", tag: "Career",
  who: "A three-person interview panel", where: "Interview for a Director role — 45 minutes",
  intro: "You’re interviewing for a Director role. Three panel members, a glass of water, and the first question is coming. (The model answers show the shape — use your own stories.)",
  turns: [
    turn("Tell us a bit about yourself.", [
      o("I’ve spent my career making e-commerce operations work at scale — most recently leading automation that cut manual processing by a third. What drives me is turning complex processes into simple experiences, for customers and for teams. That’s what I’d like to do at director level.", 2, "Present, past, future in thirty seconds: proof, purpose and a bridge to the role. Not a life story — a pitch.", "Thank you. That’s a good starting point."),
      o("Well, I was born in…, I studied Business, then I worked at…, and then…", 1, "A chronological CV. The panel has read it — they want the thread that connects it.", "Thank you — perhaps focus on recent years?"),
      o("Well, everything is in my CV.", 0, "It sounds defensive and wastes the most important question of the interview. This is your elevator-pitch moment.", "Yes — we’d like to hear it in your words.")
    ], "The panel"),
    turn("What would you say is your biggest weakness?", [
      o("I used to take on too much myself — I’d fix problems instead of building the team’s ability to fix them. Over the last two years I’ve deliberately delegated more; my team now runs the weekly operations review without me.", 2, "A real weakness, evidence you’ve worked on it, and a result. Self-aware — not a disguised boast.", "That’s very honest. Thank you."),
      o("I’m a perfectionist.", 1, "The most predictable answer there is; panels hear it as evasion. Choose something real and show progress.", "I see. Anything else?"),
      o("I don’t really have any big weaknesses.", 0, "It signals low self-awareness — the opposite of what a director needs.", "Everyone has something.")
    ], "The panel"),
    turn("Tell us about a time you failed.", [
      o("In 2022 I launched a returns portal without testing it with store staff, and adoption was terrible. I paused it, ran sessions with the stores, redesigned it with them, and the relaunch reached 80% usage. Now I never launch without the people who’ll use it.", 2, "STAR — Situation, Task, Action, Result — plus the lesson. Owning a failure clearly is a sign of seniority.", "Good example."),
      o("Once a project was late because the supplier failed to deliver.", 1, "That’s someone else’s failure. The question is about yours — what you’d own and what you learned.", "And what was your part in that?"),
      o("I can’t really think of a failure.", 0, "Either evasive or unreflective. Prepare one honest story before every interview.", "Take your time…")
    ], "The panel"),
    turn("Do you have any questions for us?", [
      o("Yes — what would success look like in this role after twelve months? And what’s the biggest challenge the team is facing right now?", 2, "Questions that show you’re already thinking like the director: outcomes and obstacles.", "Great questions. Let me take the second one first…"),
      o("What are the working hours?", 1, "A fair question — but one for HR, later. At panel level, ask about impact and priorities.", "Fairly standard, I’d say."),
      o("No, I think everything is clear.", 0, "It signals low curiosity. Always arrive with two thoughtful questions.", "OK, then — thank you for coming in.")
    ], "The panel")
  ],
  lesson: "Pitch, don’t narrate. Be honest about weaknesses and failures — with evidence of growth. Ask questions that show you’re already in the role.",
  keep: [["What drives me is…", "Purpose in one line"], ["I used to…; over the last two years I’ve…", "A weakness with growth"], ["What would success look like after twelve months?", "A director’s question"]]
},
{
  id: "townhall", title: "Announcing AI to your team", es: "Anunciar la IA a tu equipo", tag: "Change & AI",
  who: "Your team", where: "Team meeting, just after you announced an AI pilot",
  intro: "You’ve just announced an AI pilot for customer emails. The room is quiet. Then hands go up.",
  turns: [
    turn("Is this the first step to replacing us?", [
      o("That’s the right question to ask, and I won’t pretend nothing will change. Some tasks will be automated. My commitment is that you’ll help redesign the work — and that we’ll invest in your skills before any decisions about roles.", 2, "Honest, specific, humane. You acknowledge the fear, avoid false reassurance, and make commitments you can keep.", "OK. That’s more honest than I expected."),
      o("No, don’t worry — nobody will lose their job.", 1, "Reassuring — but can you guarantee it? False reassurance destroys trust faster than difficult truths.", "Can you promise that?"),
      o("Let’s not be negative — AI is an opportunity for everyone.", 0, "It dismisses a real fear with a slogan. People need to feel heard before they can hear you.", "(Silence. People look at each other.)")
    ], "Ana"),
    turn("What exactly will the AI do?", [
      o("In the pilot, it will draft replies to routine queries — “Where’s my parcel?” — and a person will review every reply before it goes out. The complex cases stay with you.", 2, "Concrete and bounded: the task, the human check, and what doesn’t change. Specifics reduce anxiety.", "So we’d be checking its work, basically."),
      o("It will help with customer service in general.", 1, "Too vague — and vagueness makes people imagine the worst.", "In general how?"),
      o("It’s quite technical — the IT team will explain it later.", 0, "Deflecting makes it look as if you don’t understand it — or are hiding something. Leaders own the explanation.", "Hmm.")
    ], "Pedro"),
    turn("And what happens to the time we save?", [
      o("Good question. My proposal is that we use it for the work we never have time for — fixing the root causes of complaints. I’d like us to decide that together.", 2, "Sharing the gains — augmentation, not only automation — and involving the team turns a threat into a project.", "I’d actually like that."),
      o("We’ll see — it’s too early to say.", 1, "Honest, but it leaves a vacuum that rumours will fill. Offer a direction, even a provisional one.", "That’s what worries me."),
      o("We’ll probably need fewer people.", 0, "If it’s true, it must be said carefully, with context and commitments — not as an aside in a Q&A.", "(The room goes cold.)")
    ], "Ana"),
    turn("Can we give feedback during the pilot?", [
      o("Please do — you’re the experts on these customers. Every Friday we’ll review what the AI got wrong, and you can stop any reply you’re not happy with.", 2, "You give real power to the people affected. A visible feedback loop builds trust and improves the system.", "Then count me in."),
      o("Of course — just send me an email.", 1, "Open, but passive. A visible routine shows you really want the feedback.", "OK."),
      o("The decision has already been taken.", 0, "He asked about feedback on the pilot, not about the decision. Listen to the actual question.", "That’s not what I asked.")
    ], "Pedro")
  ],
  lesson: "Acknowledge the fear, be honest about change, be concrete about the task, share the gains, and give people a real voice.",
  keep: [["I won’t pretend nothing will change.", "Honesty that builds trust"], ["A person will review every reply before it goes out.", "Concrete, bounded reassurance"], ["You’re the experts — help us get it right.", "Gives people a voice"]]
}
];
})();
