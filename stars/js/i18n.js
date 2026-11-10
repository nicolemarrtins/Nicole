/* Cielo — interface strings (es / en). */
window.I18N = {
  es: {
    tagline: "Tu carta natal, calculada con precisión astronómica.",
    welcome: { b1: "Las posiciones reales de los planetas para tu fecha, hora y lugar de nacimiento.", b2: "Tu día, tus tránsitos, la Luna y un calendario del cielo.", b3: "Un diario para comprobar, con tus propios datos, si los astros aciertan.", start: "Empezar", private: "Todo se guarda solo en este dispositivo." },
    tabs: { today: "Hoy", chart: "Carta", people: "Personas", calendar: "Calendario", journal: "Diario" },
    form: {
      titleMe: "Tus datos de nacimiento", titlePerson: "Añadir persona", editPerson: "Editar persona", editMe: "Editar tus datos",
      name: "Nombre", namePh: "Opcional", namePhPerson: "¿Cómo se llama?", date: "Fecha de nacimiento", time: "Hora de nacimiento", noTime: "No sé la hora exacta",
      timeHint: "La hora del acta o certificado de nacimiento es la mejor fuente: el Ascendente avanza 1° cada 4 minutos.",
      place: "Lugar de nacimiento", placePh: "Escribe una ciudad…", searchWorld: "Buscar «{q}» en todo el mundo", searching: "Buscando…",
      noResults: "Sin resultados. Prueba otra ortografía o escribe las coordenadas.", offline: "No se pudo buscar en línea: usa la lista o escribe las coordenadas.",
      online: "Búsqueda en línea con Open‑Meteo: solo se envía el nombre del lugar.", change: "Cambiar",
      manual: "Coordenadas y zona horaria (avanzado)", lat: "Latitud (− sur)", lng: "Longitud (− oeste)", tz: "Zona horaria", offset: "Diferencia con UTC en minutos (opcional)",
      offsetHint: "Déjalo vacío: la zona horaria ya incluye los cambios de hora históricos. Úsalo solo si sabes que la hora oficial era otra.",
      rel: "Relación", preview: "{local} hora local ({off}) → {utc} UTC", gap: "Esa hora no existió por un cambio de hora; se usa {off}.",
      ambiguous: "Esa hora ocurrió dos veces por un cambio de hora; se usa la primera ({off}).", manualNote: "Usando la diferencia manual: {off}.",
      noTimeNote: "Sin hora se calcula a mediodía: no habrá Ascendente ni casas, y la Luna puede variar unos grados.",
      save: "Calcular la carta", saveEdit: "Guardar cambios", cancel: "Cancelar", needDate: "Falta la fecha de nacimiento.", needPlace: "Elige un lugar de la lista o escribe las coordenadas.", needName: "Falta el nombre.", badCoords: "Revisa las coordenadas.", badTz: "Elige una zona horaria válida."
    },
    rel: { partner: "Pareja", friend: "Amistad", family: "Familia", work: "Trabajo", other: "Otra" },
    reveal: { title: "Tu cielo al nacer", cta: "Ver mi día", sub: "Calculado para {when} en {place}." },
    today: {
      title: "Hoy", moonIn: "Luna en {sign}", illum: "{p} % iluminada", moonHouse: "Hoy la Luna recorre tu casa {n}: {dom}.",
      voc: "Luna fuera de curso hasta las {time}", ingress: "Entra en {sign} a las {time}", sunIn: "Sol en {sign}",
      do: "Haz", avoid: "Evita", climate: "Clima del día", tone: "Tono del día", toneHow: "¿Qué es?", blind: "Oculto hasta que puntúes tu día: así el experimento es ciego.",
      transits: "Tus tránsitos", none: "Un día tranquilo: casi no hay aspectos exactos.", retro: "Retrógrados", until: "hasta el {date}", noRetro: "Ningún planeta retrógrado.",
      rate: "¿Cómo fue tu día?", rated: "Registrado: {label}", rateLater: "Puntúalo esta noche: alimenta tu experimento.", future: "Lectura anticipada.", past: "Lectura de ese día.",
      backToday: "Volver a hoy", needMe: "Primero añade tus datos de nacimiento."
    },
    areas: { mind: "Mente", love: "Amor", work: "Trabajo", energy: "Energía", mood: "Ánimo" },
    state: { up: "Fluye", flat: "Estable", down: "Pide atención" },
    tone: { fav: "Favorable", mix: "Mixto", hard: "Exigente" },
    tr: { today: "exacto hoy", tomorrow: "exacto mañana", inDays: "exacto en {n} días", ago: "fue exacto hace {n} días", yesterday: "fue exacto ayer", at: "exacto a las {time}", was: "fue exacto a las {time}", far: "en curso" },
    rate: ["Muy difícil", "Difícil", "Normal", "Bueno", "Muy bueno"],
    ask: { title: "Pregúntale a Claude", ph: "¿Qué quieres entender? Por ejemplo: ¿cómo aprovecho esta semana en el trabajo?", go: "Abrir en Claude",
      note: "Se abre claude.ai con tu carta, tus tránsitos y tu pregunta (incluye fecha, hora y lugar de nacimiento). También se copia al portapapeles.",
      noteChart: "Se abre claude.ai con tu carta y tu pregunta (incluye fecha, hora y lugar de nacimiento). También se copia al portapapeles.",
      noteSyn: "Se abre claude.ai con las dos cartas y tu pregunta (incluye las fechas, horas y lugares de nacimiento). También se copia al portapapeles.",
      copied: "Copiado al portapapeles. Si Claude no se abre, pégalo allí.", chartPh: "¿Qué quieres saber de tu carta? Por ejemplo: ¿qué dice de mi forma de liderar?", synPh: "¿Qué quieres entender de esta relación?" },
    chart: { title: "Tu carta", edit: "Editar", points: "Planetas y puntos", aspects: "Aspectos", houses: "Casas", balance: "Equilibrio", elements: "Elementos", modes: "Modalidades",
      showAll: "Ver todos ({n})", showLess: "Ver menos", house: "Casa {n}", noTime: "Sin hora de nacimiento: no se calculan Ascendente, Medio Cielo ni casas.",
      moonRange: "Ese día la Luna recorrió de {a} a {b}.", fallback: "A esta latitud el sistema Placidus no está definido; se usa Porphyry.", retro: "retrógrado",
      orb: "orbe {o}", dominant: "Predomina {list}.", applying: "aplicativo", separating: "separativo", system: { placidus: "Placidus", whole: "Signos enteros", porphyry: "Porphyry" },
      tapHint: "Toca un planeta para leerlo.", born: "{date} · {time} ({off}) · {place}", noTimeShort: "hora desconocida" },
    point: { aspects: "Aspectos", inHouse: "Casa {n} · {t}", none: "Sin aspectos mayores.", sign: "{p} en {s}" },
    people: { title: "Personas", add: "Añadir persona", empty: "Añade a alguien —pareja, amistad, familia— para ver cómo se combinan sus cartas.", delete: "Eliminar", confirmDelete: "¿Eliminar a {name}? No se puede deshacer.", edit: "Editar" },
    syn: { title: "{a} y {b}", aspects: "Aspectos entre sus cartas", elements: "Elementos", none: "No hay aspectos mayores entre sus planetas personales.", dyn: { h: "Flujo", t: "Chispa", c: "Fusión" }, yours: "tu {p}", theirs: "{p} de {name}", needMe: "Añade primero tus datos para comparar cartas." },
    cal: { title: "Calendario", all: "Todo", moons: "Lunas", retro: "Retrógrados", ingress: "Ingresos", eclipses: "Eclipses", loading: "Calculando el cielo…", tz: "Horas en tu zona horaria: {tz}.",
      newMoon: "Luna nueva en {sign}", fullMoon: "Luna llena en {sign}", solarEclipse: "Eclipse solar {kind} en {sign}", lunarEclipse: "Eclipse lunar {kind} en {sign}",
      stationRetro: "{planet} se vuelve retrógrado", stationDirect: "{planet} retoma el movimiento directo", ingressEv: "{planet} entra en {sign}", touches: "toca tu {p}", inHouse: "tu casa {n}",
      kind: { total: "total", partial: "parcial", annular: "anular", hybrid: "híbrido", penumbral: "penumbral" }, retroNote: "(retrógrado)" },
    journal: { title: "Diario", today: "Hoy", note: "Nota (opcional)", notePh: "¿Qué pasó? ¿Cómo te sentiste?", tags: "¿Qué marcó el día?", save: "Guardar", saved: "Guardado ✓", history: "Días registrados", empty: "Todavía no hay días registrados.", edit: "Editar", other: "Registrar otro día", pick: "Fecha" },
    tags: { work: "trabajo", love: "amor", health: "salud", social: "social", family: "familia", rest: "descanso", money: "dinero", creativity: "creatividad" },
    exp: {
      title: "El experimento", intro: "Cada día puntúas cómo te fue. Cielo calcula —con una fórmula fija, igual para todos los días y sin mirar tu puntuación— si tus tránsitos eran favorables o exigentes. Con el tiempo verás si coinciden.",
      need: "Llevas {n} {days}. Con {min} verás un primer resultado; con 60 o más, uno sólido.", day: "día", days: "días",
      groups: "Tu puntuación media según el tono astrológico", n: "{n} días", rho: "Correlación (Spearman): {rho}", p: "Probabilidad de verlo por azar: {p}",
      yes: "Por ahora, tus días «favorables» sí tienden a ir mejor. Sigue registrando para ver si se mantiene.",
      neg: "Por ahora, tus días «favorables» tienden a ir peor: lo contrario de lo que predice la astrología.",
      no: "Por ahora no hay una relación clara entre el tono astrológico y cómo te va.",
      caveat: "Con pocos días el azar pesa mucho. Para que sea un experimento justo, puntúa cada día antes de mirar su tono.", blind: "Experimento ciego", blindHint: "Oculta el tono del día hasta que lo puntúes."
    },
    settings: { title: "Ajustes", lang: "Idioma", theme: "Tema", themes: { auto: "Automático", dark: "Noche", light: "Día" }, houses: "Sistema de casas", blind: "Experimento ciego", blindHint: "Oculta el tono del día hasta que lo puntúes.",
      me: "Tus datos de nacimiento", backup: "Copia de seguridad", export: "Exportar", import: "Importar", imported: "Datos importados.", badFile: "Ese archivo no es una copia de Cielo.",
      erase: "Borrar todos los datos", confirmErase: "¿Borrar tu carta, personas y diario de este dispositivo? No se puede deshacer.", about: "Cómo funciona", version: "Versión" },
    about: {
      title: "Cómo funciona",
      blocks: [
        { h: "Precisión astronómica", p: [
          "Cielo calcula tu carta con astronomy-engine, una biblioteca de efemérides que modela el sistema solar (VSOP87 para los planetas, un modelo lunar completo e integración numérica para Plutón). Las posiciones son geocéntricas aparentes, con la corrección por tiempo de luz, la aberración, la precesión y la nutación: el mismo estándar que usan los programas profesionales de astrología.",
          "En las pruebas automáticas de la app, comparadas con Swiss Ephemeris en 80 cartas al azar entre 1925 y 2035, los planetas difieren menos de 0,3′ (unos 18 segundos de arco), y el Ascendente, el Medio Cielo y las cúspides de Placidus menos de 0,01′. La app incluye esas pruebas, junto con equinoccios, eclipses, lunaciones y estaciones de Mercurio contrastados con las horas publicadas.",
          "Se usa el zodiaco tropical (el occidental) y el nodo lunar verdadero. Las casas, por defecto, se calculan con Placidus; puedes cambiar a signos enteros. Por encima de unos 66° de latitud, Placidus no está definido y se usa Porphyry."
        ] },
        { h: "La hora importa", p: [
          "Tu hora local se convierte a hora universal con la base de datos de zonas horarias de tu dispositivo (IANA), que incluye los cambios de hora históricos de cada país. La app te muestra el desfase que usó (por ejemplo, UTC−4) para que puedas comprobarlo.",
          "El Ascendente avanza aproximadamente 1° cada 4 minutos y la Luna, medio grado por hora. Si tu hora es aproximada, toma el Ascendente y las casas con cautela; si no la sabes, Cielo calcula a mediodía y oculta lo que depende de ella."
        ] },
        { h: "¿Funciona la astrología?", p: [
          "La parte astronómica es exacta; la interpretación, no tiene respaldo científico. En el estudio doble ciego más citado (Carlson, Nature, 1985), astrólogos expertos no lograron emparejar cartas natales con perfiles de personalidad mejor que el azar. Estudios posteriores con «gemelos de tiempo» —personas nacidas con minutos de diferencia— tampoco encontraron parecidos.",
          "Por eso Cielo trata la astrología como un lenguaje simbólico para reflexionar sobre ti: los textos describen tendencias y preguntas, no destinos. Y por eso existe el experimento."
        ] },
        { h: "Tu experimento", p: [
          "Cada día, Cielo suma los aspectos que forman los planetas en tránsito con tu carta: los trígonos y sextiles suman, las cuadraturas y oposiciones restan, y las conjunciones dependen del planeta. Cada aspecto pesa según lo exacto que es y según los planetas implicados. La fórmula es fija y no se ajusta a tus datos.",
          "Ese número se compara con tu propio año: el tercio de días más alto es «favorable» y el más bajo, «exigente». Con tus puntuaciones diarias, la app calcula una correlación de Spearman y, con un test de permutaciones, la probabilidad de ver esa relación por puro azar.",
          "Para que el experimento sea justo, deja activado el modo ciego y puntúa tu día antes de mirar su tono."
        ] },
        { h: "Privacidad", p: [
          "Tus datos de nacimiento, las personas que añades y tu diario se guardan solo en este dispositivo. Cielo no tiene servidor.",
          "Solo hay dos conexiones, y ambas dependen de ti: la búsqueda de lugares en línea (envía a Open‑Meteo únicamente el nombre que escribes) y «Pregúntale a Claude», que abre claude.ai con el texto que tú decides enviar."
        ] },
        { h: "Créditos", p: [
          "Efemérides: astronomy-engine, de Don Cross (licencia MIT). Lista de ciudades: city-timezones (licencia MIT). Búsqueda de lugares: Open‑Meteo, con datos de GeoNames (CC BY 4.0). Textos, diseño y glifos: originales de Cielo."
        ] }
      ]
    }
  },
  en: {
    tagline: "Your birth chart, calculated with astronomical precision.",
    welcome: { b1: "The real positions of the planets for your date, time and place of birth.", b2: "Your day, your transits, the Moon and a calendar of the sky.", b3: "A journal to test, with your own data, whether the stars get it right.", start: "Begin", private: "Everything stays on this device." },
    tabs: { today: "Today", chart: "Chart", people: "People", calendar: "Calendar", journal: "Journal" },
    form: {
      titleMe: "Your birth details", titlePerson: "Add a person", editPerson: "Edit person", editMe: "Edit your details",
      name: "Name", namePh: "Optional", namePhPerson: "What’s their name?", date: "Date of birth", time: "Time of birth", noTime: "I don’t know the exact time",
      timeHint: "The time on a birth certificate is the best source: the Ascendant moves about 1° every 4 minutes.",
      place: "Place of birth", placePh: "Type a city…", searchWorld: "Search “{q}” worldwide", searching: "Searching…",
      noResults: "No results. Try another spelling or enter coordinates.", offline: "Couldn’t search online: use the list or enter coordinates.",
      online: "Online search via Open‑Meteo: only the place name is sent.", change: "Change",
      manual: "Coordinates and time zone (advanced)", lat: "Latitude (− south)", lng: "Longitude (− west)", tz: "Time zone", offset: "Offset from UTC in minutes (optional)",
      offsetHint: "Leave empty: the time zone already includes historical clock changes. Use it only if you know official time was different.",
      rel: "Relationship", preview: "{local} local time ({off}) → {utc} UTC", gap: "That time didn’t exist because of a clock change; using {off}.",
      ambiguous: "That time happened twice because of a clock change; using the first ({off}).", manualNote: "Using the manual offset: {off}.",
      noTimeNote: "Without a time the chart is cast for noon: no Ascendant or houses, and the Moon may vary by a few degrees.",
      save: "Calculate the chart", saveEdit: "Save changes", cancel: "Cancel", needDate: "The date of birth is missing.", needPlace: "Choose a place from the list or enter coordinates.", needName: "The name is missing.", badCoords: "Check the coordinates.", badTz: "Choose a valid time zone."
    },
    rel: { partner: "Partner", friend: "Friend", family: "Family", work: "Work", other: "Other" },
    reveal: { title: "Your sky at birth", cta: "See my day", sub: "Calculated for {when} in {place}." },
    today: {
      title: "Today", moonIn: "Moon in {sign}", illum: "{p}% lit", moonHouse: "Today the Moon moves through your house {n}: {dom}.",
      voc: "Moon void of course until {time}", ingress: "Enters {sign} at {time}", sunIn: "Sun in {sign}",
      do: "Do", avoid: "Avoid", climate: "Today’s weather", tone: "Tone of the day", toneHow: "What’s this?", blind: "Hidden until you rate your day, so the experiment stays blind.",
      transits: "Your transits", none: "A quiet day: hardly any exact aspects.", retro: "Retrograde", until: "until {date}", noRetro: "No planets retrograde.",
      rate: "How was your day?", rated: "Logged: {label}", rateLater: "Rate it tonight — it feeds your experiment.", future: "Reading in advance.", past: "Reading for that day.",
      backToday: "Back to today", needMe: "Add your birth details first."
    },
    areas: { mind: "Mind", love: "Love", work: "Work", energy: "Energy", mood: "Mood" },
    state: { up: "Flowing", flat: "Steady", down: "Needs care" },
    tone: { fav: "Favourable", mix: "Mixed", hard: "Demanding" },
    tr: { today: "exact today", tomorrow: "exact tomorrow", inDays: "exact in {n} days", ago: "was exact {n} days ago", yesterday: "was exact yesterday", at: "exact at {time}", was: "was exact at {time}", far: "ongoing" },
    rate: ["Very hard", "Hard", "Okay", "Good", "Very good"],
    ask: { title: "Ask Claude", ph: "What would you like to understand? For example: how do I make the most of this week at work?", go: "Open in Claude",
      note: "Opens claude.ai with your chart, your transits and your question (including your birth date, time and place). It’s also copied to the clipboard.",
      noteChart: "Opens claude.ai with your chart and your question (including your birth date, time and place). It’s also copied to the clipboard.",
      noteSyn: "Opens claude.ai with both charts and your question (including both birth dates, times and places). It’s also copied to the clipboard.",
      copied: "Copied to the clipboard. If Claude doesn’t open, paste it there.", chartPh: "What do you want to know about your chart? For example: what does it say about how I lead?", synPh: "What would you like to understand about this relationship?" },
    chart: { title: "Your chart", edit: "Edit", points: "Planets and points", aspects: "Aspects", houses: "Houses", balance: "Balance", elements: "Elements", modes: "Modes",
      showAll: "Show all ({n})", showLess: "Show less", house: "House {n}", noTime: "No birth time: the Ascendant, Midheaven and houses aren’t calculated.",
      moonRange: "That day the Moon moved from {a} to {b}.", fallback: "At this latitude Placidus is undefined; Porphyry is used instead.", retro: "retrograde",
      orb: "orb {o}", dominant: "Dominant: {list}.", applying: "applying", separating: "separating", system: { placidus: "Placidus", whole: "Whole sign", porphyry: "Porphyry" },
      tapHint: "Tap a planet to read it.", born: "{date} · {time} ({off}) · {place}", noTimeShort: "time unknown" },
    point: { aspects: "Aspects", inHouse: "House {n} · {t}", none: "No major aspects.", sign: "{p} in {s}" },
    people: { title: "People", add: "Add a person", empty: "Add someone — a partner, friend or relative — to see how your charts combine.", delete: "Delete", confirmDelete: "Delete {name}? This can’t be undone.", edit: "Edit" },
    syn: { title: "{a} & {b}", aspects: "Aspects between your charts", elements: "Elements", none: "No major aspects between your personal planets.", dyn: { h: "Flow", t: "Spark", c: "Fusion" }, yours: "your {p}", theirs: "{name}’s {p}", needMe: "Add your own details first to compare charts." },
    cal: { title: "Calendar", all: "All", moons: "Moons", retro: "Retrogrades", ingress: "Ingresses", eclipses: "Eclipses", loading: "Calculating the sky…", tz: "Times in your time zone: {tz}.",
      newMoon: "New Moon in {sign}", fullMoon: "Full Moon in {sign}", solarEclipse: "{kind} solar eclipse in {sign}", lunarEclipse: "{kind} lunar eclipse in {sign}",
      stationRetro: "{planet} turns retrograde", stationDirect: "{planet} turns direct", ingressEv: "{planet} enters {sign}", touches: "touches your {p}", inHouse: "your house {n}",
      kind: { total: "Total", partial: "Partial", annular: "Annular", hybrid: "Hybrid", penumbral: "Penumbral" }, retroNote: "(retrograde)" },
    journal: { title: "Journal", today: "Today", note: "Note (optional)", notePh: "What happened? How did you feel?", tags: "What shaped the day?", save: "Save", saved: "Saved ✓", history: "Logged days", empty: "No days logged yet.", edit: "Edit", other: "Log another day", pick: "Date" },
    tags: { work: "work", love: "love", health: "health", social: "social", family: "family", rest: "rest", money: "money", creativity: "creativity" },
    exp: {
      title: "The experiment", intro: "Every day you rate how it went. Cielo works out — with a fixed formula, the same for every day and without looking at your rating — whether your transits were favourable or demanding. Over time you’ll see whether they match.",
      need: "You have {n} {days}. At {min} you’ll see a first result; at 60 or more, a solid one.", day: "day", days: "days",
      groups: "Your average rating by astrological tone", n: "{n} days", rho: "Correlation (Spearman): {rho}", p: "Chance of seeing this at random: {p}",
      yes: "So far, your “favourable” days do tend to go better. Keep logging to see if it holds.",
      neg: "So far, your “favourable” days tend to go worse — the opposite of what astrology predicts.",
      no: "So far there’s no clear link between the astrological tone and how your days go.",
      caveat: "With few days, chance weighs a lot. To keep it fair, rate each day before looking at its tone.", blind: "Blind experiment", blindHint: "Hide the day’s tone until you rate it."
    },
    settings: { title: "Settings", lang: "Language", theme: "Theme", themes: { auto: "Automatic", dark: "Night", light: "Day" }, houses: "House system", blind: "Blind experiment", blindHint: "Hide the day’s tone until you rate it.",
      me: "Your birth details", backup: "Backup", export: "Export", import: "Import", imported: "Data imported.", badFile: "That file isn’t a Cielo backup.",
      erase: "Erase all data", confirmErase: "Erase your chart, people and journal from this device? This can’t be undone.", about: "How it works", version: "Version" },
    about: {
      title: "How it works",
      blocks: [
        { h: "Astronomical precision", p: [
          "Cielo calculates your chart with astronomy-engine, an ephemeris library that models the solar system (VSOP87 for the planets, a full lunar theory and numerical integration for Pluto). Positions are apparent and geocentric, corrected for light time, aberration, precession and nutation — the same standard professional astrology software uses.",
          "In the app’s automated tests, checked against the Swiss Ephemeris on 80 random charts between 1925 and 2035, planets differ by less than 0.3′ (about 18 arcseconds), and the Ascendant, Midheaven and Placidus cusps by less than 0.01′. The tests ship with the app, along with equinoxes, eclipses, lunations and Mercury stations checked against published times.",
          "Cielo uses the tropical (Western) zodiac and the true lunar node. Houses default to Placidus; you can switch to whole signs. Above roughly 66° latitude Placidus is undefined, so Porphyry is used."
        ] },
        { h: "Time matters", p: [
          "Your local time is converted to universal time with your device’s time-zone database (IANA), which includes each country’s historical clock changes. The app shows you the offset it used (for example UTC−4) so you can check it.",
          "The Ascendant moves about 1° every 4 minutes and the Moon about half a degree an hour. If your time is approximate, treat the Ascendant and houses with care; if you don’t know it, Cielo casts the chart for noon and hides what depends on it."
        ] },
        { h: "Does astrology work?", p: [
          "The astronomy is exact; the interpretation has no scientific support. In the most cited double-blind study (Carlson, Nature, 1985), expert astrologers couldn’t match birth charts to personality profiles better than chance. Later studies of “time twins” — people born minutes apart — found no resemblance either.",
          "So Cielo treats astrology as a symbolic language for reflecting on yourself: the texts describe tendencies and questions, not destinies. That’s also why the experiment exists."
        ] },
        { h: "Your experiment", p: [
          "Each day Cielo adds up the aspects the transiting planets make to your chart: trines and sextiles add, squares and oppositions subtract, and conjunctions depend on the planet. Each aspect is weighted by how exact it is and by the planets involved. The formula is fixed and never tuned to your data.",
          "That number is compared with your own year: the top third of days is “favourable” and the bottom third “demanding”. With your daily ratings, the app computes a Spearman correlation and, with a permutation test, the chance of seeing that relationship by pure luck.",
          "To keep the experiment fair, leave blind mode on and rate your day before looking at its tone."
        ] },
        { h: "Privacy", p: [
          "Your birth details, the people you add and your journal are stored only on this device. Cielo has no server.",
          "There are only two connections, and both are up to you: online place search (it sends Open‑Meteo only the name you type) and “Ask Claude”, which opens claude.ai with the text you choose to send."
        ] },
        { h: "Credits", p: [
          "Ephemeris: astronomy-engine by Don Cross (MIT licence). City list: city-timezones (MIT licence). Place search: Open‑Meteo, with GeoNames data (CC BY 4.0). Texts, design and glyphs: original to Cielo."
        ] }
      ]
    }
  }
};
