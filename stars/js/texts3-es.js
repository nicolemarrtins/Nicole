/* Cielo 2.1 — pareja en profundidad y preguntas dinámicas (español). */
(function () {
  var X = TXT.es, U = I18N.es;
  /* ---------- sinastría ---------- */
  X.synRole = { sun: ["tu identidad", "su identidad"], moon: ["tus emociones", "sus emociones"], mercury: ["tu forma de pensar", "su forma de pensar"], venus: ["tu forma de amar", "su forma de amar"], mars: ["tu deseo y tu energía", "su deseo y su energía"], asc: ["tu forma de estar", "su forma de estar"] };
  // pares personales: [tema, fluye, tensión]
  X.synPairs = {
    "sun-sun": ["Dos identidades frente a frente: cómo brilla cada quien.", "Se reconocen y se respetan: cada quien puede ser como es.", "Dos voluntades que compiten por el centro; turnarse el protagonismo los salva."],
    "sun-moon": ["El vínculo clásico de pareja: lo que uno es y lo que el otro necesita.", "Uno ilumina y el otro acoge: se sienten en casa juntos.", "Lo que uno muestra no siempre calma al otro; escucharse las necesidades evita heridas."],
    "sun-mercury": ["La identidad de uno y la mente del otro.", "Se entienden y se dan ideas; las conversaciones les dan energía.", "Uno puede sentirse juzgado por las palabras del otro; cuidar el tono importa."],
    "sun-venus": ["Admiración y afecto.", "Se gustan tal como son: hay ternura y orgullo mutuo.", "El afecto existe, pero puede volverse complaciente o vanidoso; sean sinceros."],
    "sun-mars": ["Voluntad y deseo: el motor de la pareja.", "Se impulsan a actuar y hay atracción física.", "Choques de ego y competencia; la pasión es real, el respeto también debe serlo."],
    "moon-moon": ["Dos mundos emocionales y sus costumbres.", "Se sienten en casa: ritmos y necesidades parecidas.", "Necesitan cosas distintas para sentirse bien; nombrarlas evita malentendidos."],
    "moon-mercury": ["Emoción y palabra: hablar de lo que se siente.", "Uno sabe poner en palabras lo que el otro siente.", "Uno racionaliza lo que el otro siente; a veces sobra explicación y falta abrazo."],
    "moon-venus": ["Ternura y cuidado.", "Mucha dulzura: se cuidan y disfrutan juntos.", "Uno da cariño de una forma que el otro no siempre registra; aprendan su idioma."],
    "moon-mars": ["Emoción e impulso.", "Pasión y protección: uno activa al otro.", "Uno puede herir sin querer la sensibilidad del otro; la prisa y el enfado pesan."],
    "mercury-mercury": ["Dos mentes: cómo piensan y cómo hablan.", "Conversaciones fáciles; se entienden a medias palabras.", "Piensan distinto y discuten detalles; escuchar hasta el final cambia mucho."],
    "mercury-venus": ["Palabras y afecto.", "Se dicen cosas bonitas y disfrutan conversando.", "Lo que uno dice y lo que el otro valora no coinciden; la amabilidad suma."],
    "mercury-mars": ["Ideas y acción: debates.", "Se estimulan y deciden rápido juntos.", "Discusiones encendidas; acuerden pausas antes de responder."],
    "venus-venus": ["Dos formas de amar y de disfrutar.", "Gustos parecidos: placer y estética compartidos.", "Aman de formas distintas; lo que a uno le encanta al otro le aburre."],
    "venus-mars": ["La química: amor y deseo.", "Atracción natural y equilibrio entre dar y tomar.", "Deseo intenso con fricción: atrae y desordena a la vez."],
    "mars-mars": ["Dos energías: ritmo, deseo y conflicto.", "Se mueven al mismo ritmo y hacen equipo.", "Chocan por quién lleva el ritmo; canalicen la energía en proyectos comunes."]
  };
  X.synOuter = {
    jupiter: { mine: ["Tu Júpiter toca {their}: aportas generosidad, optimismo y crecimiento.", "Le das confianza y ganas de crecer; contigo esa parte de su vida se expande.", "A veces prometes más de lo que das o exageras; la medida da credibilidad."],
      theirs: ["Su Júpiter toca {yours}: esa persona aporta generosidad y crecimiento.", "Te sientes con más confianza y suerte a su lado.", "Puede haber exceso de promesas o de indulgencia; hechos antes que palabras."] },
    saturn: { mine: ["Tu Saturno toca {their}: aportas compromiso, estructura y a veces límites.", "Le das estabilidad; contigo esa parte de su vida madura y se siente segura.", "Puede sentir tu exigencia o tu frialdad; cuida que el cuidado no se vuelva control."],
      theirs: ["Su Saturno toca {yours}: esa persona aporta compromiso y límites.", "Te da estabilidad y la sensación de construir algo serio.", "A veces puedes sentir juicio o frialdad; hablarlo evita que pese."] },
    uranus: { mine: ["Tu Urano toca {their}: aportas novedad, libertad e imprevisto.", "Le despiertas, le haces sentir libre y original.", "Tu imprevisibilidad puede desestabilizarle; la libertad necesita acuerdos."],
      theirs: ["Su Urano toca {yours}: esa persona trae electricidad y cambio.", "Te despierta y te hace sentir más tú, con más libertad.", "La relación puede ser intermitente o inquieta; acuerden qué es seguro para ambos."] },
    neptune: { mine: ["Tu Neptuno toca {their}: aportas magia, idealización y sensibilidad.", "Le inspiras: hay un vínculo casi espiritual.", "Puede idealizarte o confundirse contigo; la claridad cuida a ambos."],
      theirs: ["Su Neptuno toca {yours}: esa persona trae magia y sensibilidad.", "Te inspira y te hace sentir un amor profundo y compasivo.", "Riesgo de idealizar o de confusión; mira los hechos con cariño, pero mira."] },
    pluto: { mine: ["Tu Plutón toca {their}: aportas intensidad y transformación.", "Le transformas: con tu presencia algo cambia en profundidad.", "La intensidad puede volverse control o celos; el poder compartido sana."],
      theirs: ["Su Plutón toca {yours}: esa persona trae intensidad y transformación.", "Te transforma y te conecta con tu fuerza.", "Puede haber obsesión, celos o luchas de poder; la confianza se construye, no se exige."] }
  };
  X.synAsc = {
    mine: { sun: "Tu Sol toca su Ascendente: le das luz y confianza para mostrarse.", moon: "Tu Luna toca su Ascendente: le resultas familiar, como si se conocieran desde siempre.", mercury: "Tu Mercurio toca su Ascendente: hablar es fácil desde el primer momento.", venus: "Tu Venus toca su Ascendente: te resulta muy atractiva su forma de ser, y a la inversa.", mars: "Tu Marte toca su Ascendente: hay chispa física inmediata." },
    theirs: { sun: "Su Sol toca tu Ascendente: a su lado te sientes más visible.", moon: "Su Luna toca tu Ascendente: hay una familiaridad inmediata.", mercury: "Su Mercurio toca tu Ascendente: conversan con naturalidad desde el principio.", venus: "Su Venus toca tu Ascendente: le atrae tu forma de ser.", mars: "Su Marte toca tu Ascendente: hay una atracción física directa." },
    nature: { h: "Fluye con facilidad.", t: "Con chispa y algo de roce.", c: "Es muy evidente entre ustedes." }
  };
  X.housesSu = ["su presencia y su cuerpo", "su dinero y lo que valora", "sus ideas y su entorno cercano", "su hogar y su familia", "su creatividad, el romance y el juego", "su rutina, su trabajo y su salud", "su vida de pareja", "su intimidad y sus transformaciones", "sus viajes, estudios y creencias", "su carrera y su imagen pública", "sus amistades y sus planes de futuro", "su mundo interior"];
  X.overlay = {
    key: {
      "sun-1": "Su Sol en tu casa 1: esa persona te hace sentir más tú; a su lado brillas.", "sun-5": "Su Sol en tu casa 5: trae juego, romance y alegría a tu vida.", "sun-7": "Su Sol en tu casa 7: la sientes como pareja natural; ilumina tus relaciones.", "sun-8": "Su Sol en tu casa 8: un vínculo intenso que te transforma.",
      "moon-1": "Su Luna en tu casa 1: siente una conexión emocional inmediata contigo.", "moon-5": "Su Luna en tu casa 5: hay ternura juguetona y ganas de disfrutar juntos.", "moon-7": "Su Luna en tu casa 7: busca contigo seguridad emocional y compromiso.", "moon-8": "Su Luna en tu casa 8: intimidad profunda; se muestran lo que esconden a otros.",
      "venus-1": "Su Venus en tu casa 1: le encanta cómo eres y cómo te ves.", "venus-5": "Su Venus en tu casa 5: romance, coqueteo y placer: una de las señales clásicas de enamoramiento.", "venus-7": "Su Venus en tu casa 7: te ve como pareja; quiere armonía y compromiso contigo.", "venus-8": "Su Venus en tu casa 8: atracción profunda y sensual.",
      "mars-1": "Su Marte en tu casa 1: te activa y te desafía; mucha energía y algún choque.", "mars-5": "Su Marte en tu casa 5: pasión, deseo y ganas de aventura juntos.", "mars-7": "Su Marte en tu casa 7: dinamismo en la relación, con discusiones que también los mueven.", "mars-8": "Su Marte en tu casa 8: química sexual intensa."
    },
    theirs: "Su {P} cae en tu casa {n}: esa persona activa en tu vida {dom}.",
    mine: "Tu {P} cae en su casa {n}: activas en su vida {dom}."
  };
  X.composite = {
    intro: "La carta compuesta es la carta de la relación misma: el punto medio entre los planetas de ambos. Describe para qué existe el vínculo y cómo funciona como «nosotros».",
    sun: [
      "Una relación para atreverse: juntos inician, compiten y se empujan a ser valientes.",
      "Una relación para construir: estabilidad, placer y algo que dure.",
      "Una relación de conversación: juntos aprenden, se ríen y se mueven.",
      "Una relación de hogar: cuidado, familia y refugio mutuo.",
      "Una relación para brillar: crear, celebrar y mostrarse juntos.",
      "Una relación de servicio y mejora: se ayudan a crecer en lo concreto.",
      "Una relación de equilibrio: el vínculo mismo es el centro.",
      "Una relación intensa y transformadora: nada queda igual.",
      "Una relación de aventura y sentido: viajes, ideas y crecimiento.",
      "Una relación con propósito: metas, compromiso y largo plazo.",
      "Una relación de amistad y libertad: se respetan como individuos.",
      "Una relación de alma: sensibilidad, compasión y algo de misterio."
    ],
    moon: [
      "Emocionalmente, el vínculo necesita acción y espontaneidad.",
      "Emocionalmente, el vínculo necesita calma, rutina y contacto.",
      "Emocionalmente, el vínculo necesita hablar de todo.",
      "Emocionalmente, el vínculo necesita intimidad y protección.",
      "Emocionalmente, el vínculo necesita reconocimiento y juego.",
      "Emocionalmente, el vínculo necesita orden y cuidado práctico.",
      "Emocionalmente, el vínculo necesita armonía y belleza.",
      "Emocionalmente, el vínculo necesita profundidad y confianza total.",
      "Emocionalmente, el vínculo necesita aire, risa y libertad.",
      "Emocionalmente, el vínculo necesita estructura y seguridad.",
      "Emocionalmente, el vínculo necesita espacio y amistad.",
      "Emocionalmente, el vínculo necesita ternura, música y silencio compartido."
    ],
    venus: [
      "Se aman con pasión y franqueza.", "Se aman con lealtad y sensualidad.", "Se aman con palabras, humor y curiosidad.", "Se aman cuidándose.",
      "Se aman con generosidad y grandes gestos.", "Se aman con detalles y actos concretos.", "Se aman con armonía, estética y diplomacia.", "Se aman con intensidad y fusión.",
      "Se aman con libertad y aventura.", "Se aman con compromiso y constancia.", "Se aman como amigos, con originalidad.", "Se aman de forma romántica y compasiva."
    ],
    areas: { sun: "el propósito de la relación", moon: "la intimidad emocional de la relación", venus: "el amor y el placer compartidos" }
  };
  X.dims = {
    names: { attraction: "Atracción", emotion: "Emoción", communication: "Comunicación", commitment: "Compromiso", growth: "Crecimiento" },
    level: {
      attraction: { flow: "La química fluye: deseo y afecto van juntos.", intense: "Atracción fuerte con chispa: excitante y a veces agotadora.", challenge: "El deseo pide trabajo: ritmos distintos.", soft: "La atracción es tranquila: se construye con el tiempo." },
      emotion: { flow: "Se sienten en casa el uno con el otro.", intense: "Emociones intensas: mucha conexión y algunas tormentas.", challenge: "Necesitan cosas distintas para sentirse seguros.", soft: "Lo emocional es discreto: requiere expresarlo más." },
      communication: { flow: "Hablan con facilidad y se entienden.", intense: "Conversaciones estimulantes, con debates encendidos.", challenge: "Se malinterpretan con facilidad; escuchar es clave.", soft: "La comunicación es correcta pero no es el motor del vínculo." },
      commitment: { flow: "Hay base para algo duradero.", intense: "Compromiso fuerte, con pruebas que los hacen madurar.", challenge: "El compromiso se siente como peso o como límite.", soft: "El largo plazo no está marcado: depende de lo que elijan." },
      growth: { flow: "Se impulsan a crecer y se divierten juntos.", intense: "Mucho cambio y estímulo: crecen, pero se sacuden.", challenge: "Lo que uno quiere explorar inquieta al otro.", soft: "El crecimiento juntos es tranquilo." }
    },
    q: {
      attraction: { flow: ["¿Qué es lo que más les atrae del otro hoy?", "¿Cómo pueden cuidar la chispa cuando hay rutina?"], challenge: ["¿Cómo le gusta a cada uno expresar el deseo?", "¿Qué necesita cada uno para sentirse deseado?"] },
      emotion: { flow: ["¿Qué gesto pequeño les hace sentir en casa?", "¿Cuándo se sintieron más cerca?"], challenge: ["¿Qué necesita cada uno cuando está mal?", "¿Qué frase les ayuda a calmarse en una discusión?"] },
      communication: { flow: ["¿De qué tema podrían hablar horas?", "¿Qué conversación pendiente les haría bien?"], challenge: ["¿Cómo podrían avisarse cuando se sienten malinterpretados?", "¿Qué tono les ayuda a escucharse?"] },
      commitment: { flow: ["¿Qué quieren construir juntos en los próximos años?", "¿Qué promesa ya cumplen sin decirlo?"], challenge: ["¿Qué significa compromiso para cada uno?", "¿Qué límite necesita cada uno para sentirse libre dentro de la relación?"] },
      growth: { flow: ["¿Qué aventura les gustaría vivir juntos?", "¿En qué ha crecido cada uno gracias al otro?"], challenge: ["¿Qué cambio quiere cada uno, aunque asuste?", "¿Cómo pueden apoyar el camino individual del otro?"] }
    }
  };
  /* ---------- tu perfil en el amor ---------- */
  X.dsc = [
    "Tu Descendente en Aries: te atrae alguien directo, valiente y con iniciativa, que te saque de la duda.",
    "Tu Descendente en Tauro: te atrae alguien estable, sensual y paciente, que te dé tierra firme.",
    "Tu Descendente en Géminis: te atrae alguien curioso y conversador, que te haga reír y pensar.",
    "Tu Descendente en Cáncer: te atrae alguien tierno y protector, que te haga sentir en casa.",
    "Tu Descendente en Leo: te atrae alguien cálido, generoso y con presencia, que celebre la vida contigo.",
    "Tu Descendente en Virgo: te atrae alguien atento y práctico, que demuestre el amor con hechos.",
    "Tu Descendente en Libra: te atrae alguien amable, elegante y equilibrado, con quien todo sea armonía.",
    "Tu Descendente en Escorpio: te atrae alguien intenso y profundo, con quien la intimidad sea total.",
    "Tu Descendente en Sagitario: te atrae alguien libre, optimista y aventurero, que amplíe tu mundo.",
    "Tu Descendente en Capricornio: te atrae alguien maduro y comprometido, que construya contigo.",
    "Tu Descendente en Acuario: te atrae alguien original e independiente, que sea primero tu amigo.",
    "Tu Descendente en Piscis: te atrae alguien sensible y romántico, con quien conectar más allá de las palabras."
  ];
  X.loveUI = {
    title: "Tu perfil en el amor", cta: "Tu perfil en el amor", ctaSub: "Lo que buscas, lo que das, tu sombra y tus ventanas para el amor este año.",
    seek: "Lo que buscas", give: "Lo que das", desire: "Tu deseo", partner: "La pareja que describe tu carta", shadow: "Tu sombra en el amor", care: "Cómo cuidarte en el amor", windows: "Ventanas para el amor (próximos 12 meses)",
    ruler7: "Tu casa 7 está regida por {P}, en {S}{house}: el amor te llega o se juega en {dom}.", in7: "Planetas en tu casa 7: {list}. Tiñen fuertemente tu forma de vivir la pareja.", in5: "Planetas en tu casa 5: {list}. Marcan cómo vives el romance y el juego.",
    noShadow: "Tu Venus y tu Marte no tienen aspectos tensos con planetas lentos: tu sombra en el amor es más sutil; mira tu Lilith.",
    careBy: { fire: "Necesitas pasión y libertad: no te quedes donde la chispa se apagó del todo.", earth: "Necesitas hechos y constancia: valora a quien cumple, no solo a quien promete.", air: "Necesitas conversación y espacio: elige a quien te escucha y te deja ser.", water: "Necesitas profundidad y cuidado: protege tu sensibilidad de quien no la valora." },
    venusRetro: "Venus retrógrada del {a} al {b}: momento para revisar relaciones, no para firmar compromisos con prisa.",
    eclipse: "Eclipse el {d} en tu casa {n}: un punto de giro en {dom}.",
    noWindows: "No hay tránsitos lentos importantes sobre tu Venus o tu casa 7 este año: un período estable en el amor.",
    targets: { venus: "tu Venus", dsc: "tu Descendente", r7: "el regente de tu casa 7" },
    areas: { venus: "tu forma de amar", dsc: "tus relaciones de pareja", r7: "tu vida de pareja" }
  };
  X.loveTest = {
    title: "Tu forma de amar", intro: "Seis preguntas sobre cómo amas. Después de cada respuesta, Cielo la compara con tu carta: a veces coinciden y a veces no, y eso también dice algo.",
    qs: [
      { q: "¿Qué te enamora primero de alguien?", p: "venus", o: { air: "Su mente y su conversación", fire: "Su pasión y su energía", water: "Su ternura y su sensibilidad", earth: "Su estabilidad y su presencia" } },
      { q: "En una discusión de pareja, tú…", p: "mars", o: { fire: "Lo digo todo en el momento", water: "Necesito silencio y tiempo", earth: "Busco una solución práctica", air: "Lo analizo y lo debato" } },
      { q: "¿Qué te hace sentir amor de verdad?", p: "moon", o: { air: "Palabras y conversaciones", fire: "Gestos, sorpresas y planes", water: "Cuidado y presencia", earth: "Hechos y constancia" } },
      { q: "¿Qué necesitas en una relación?", p: "venus", o: { air: "Libertad y espacio propio", fire: "Aventura e intensidad", water: "Fusión y profundidad", earth: "Seguridad y compromiso" } },
      { q: "¿Qué te da más miedo en el amor?", p: "moon", o: { air: "Perder mi libertad", fire: "Aburrirme", water: "Que me abandonen", earth: "Equivocarme de persona" } },
      { q: "¿Qué tipo de persona te atrae?", p: "dsc", o: { fire: "Alguien valiente y espontáneo", earth: "Alguien estable y trabajador", air: "Alguien inteligente y original", water: "Alguien sensible y profundo" } }
    ],
    match: "Coincide con tu carta: tu {P} está en {S}, un signo de {E}.",
    other: "Tu {P} está en {S} ({E}), pero tu elección es de {E2}. Puede hablar tu {P2} en {S2}: esa parte de ti también ama.",
    none: "Tu {P} está en {S} ({E}); elegiste algo de {E2}, un elemento que casi no aparece en tu carta: quizá es algo que buscas fuera de ti.",
    result: "Tú y tu carta coinciden en {n} de {t} respuestas.", resultHigh: "Tu forma de amar se parece mucho a lo que describe tu carta.", resultMid: "Hay coincidencias y sorpresas: amas con más registros de los que marca tu carta.", resultLow: "Tu forma de amar no coincide mucho con tu carta: una buena pista para el experimento.",
    p: { venus: "Venus", mars: "Marte", moon: "Luna", dsc: "Descendente" }
  };
  /* ---------- horaria dinámica ---------- */
  X.horary2 = {
    kw: {
      love: ["amor", "pareja", "novio", "novia", "ex ", "mi ex", "me quiere", "me ama", "volver", "volverá", "relación", "casar", "boda", "cita", "le gusto", "enamor", "salir con", "siente", "sentimientos", "piensa en mí", "celos", "infiel"],
      work: ["trabajo", "empleo", "puesto", "jefe", "jefa", "entrevista", "ascenso", "empresa", "oferta", "carrera", "negocio", "cliente", "contrat", "despido", "proyecto"],
      money: ["dinero", "pago", "préstamo", "deuda", "sueldo", "salario", "inversión", "invertir", "comprar", "vender", "venta", "precio", "herencia", "ahorro", "plata", "cobrar"],
      home: ["casa", "piso", "apartamento", "mudanza", "mudarme", "alquiler", "familia", "madre", "mamá", "padre", "papá", "hogar"],
      travel: ["viaje", "viajar", "visa", "extranjero", "estudiar", "universidad", "máster", "curso", "examen", "beca", "emigrar", "país"],
      health: ["salud", "médico", "médica", "enfermedad", "operación", "tratamiento", "dieta", "síntoma", "mascota", "perro", "gato"],
      friends: ["amigo", "amiga", "amistad", "grupo", "comunidad", "seguidores", "red "],
      creative: ["hijo", "hija", "embarazo", "embarazada", "bebé", "arte", "libro", "crear", "música", "obra"],
      contact: ["mensaje", "responder", "responderá", "escribir", "escribirá", "llamar", "llamará", "whatsapp", "correo", "email", "contestar", "trámite", "papeles", "firmar", "noticias", "hermano", "hermana", "vecino"]
    },
    rx: { when: "cu[aá]ndo", feel: "qu[eé] siente|me quiere|me ama|le gusto|piensa en m[ií]|siente algo|est[aá] enamorad", should: "debo|deber[ií]a|me conviene|vale la pena|acepto|es buena idea|hago bien" },
    types: { yesno: "Pregunta de sí o no", when: "Pregunta de «cuándo»", feel: "Pregunta sobre lo que siente otra persona", should: "Pregunta de «¿me conviene?»" },
    detected: "Tema detectado: {cat}.",
    levels: { vhigh: "Muy probable", high: "Probable", mid: "Incierto", low: "Poco probable", vlow: "Muy poco probable" },
    hard: ", pero con esfuerzo",
    t: {
      perfect: "{A} y {B} se encuentran por {asp} el {date}: hay un encuentro claro.",
      perfectHard: "{A} y {B} se encuentran por {asp} el {date}: se da, pero con obstáculos.",
      late: "El encuentro llega tarde, después de un cambio de signo: puede darse de otra forma.",
      none: "No hay un encuentro exacto entre {A} y {B} en las próximas semanas.",
      refrain: "{P} entra en movimiento retrógrado antes del encuentro: alguien puede echarse atrás.",
      translation: "La Luna conecta a {A} con {B}: alguien o algo hará de puente.",
      digGood: "{P} está fuerte en {S} ({d}): lo preguntado tiene recursos.",
      digBad: "{P} está débil en {S} ({d}): lo preguntado está en una posición frágil.",
      youGood: "Tu significador, {P}, está fuerte en {S}: tienes fuerza para lograrlo.",
      youBad: "Tu significador, {P}, está débil en {S}: quizá dudas o te falta apoyo.",
      angular: "{P} está en una casa angular: el asunto tiene peso y se mueve.",
      cadent: "{P} está en una casa cadente: el asunto tiene poca fuerza ahora.",
      retro: "{P} está en movimiento retrógrado: retrasos, vueltas atrás o algo del pasado que regresa.",
      combust: "{P} está en combustión, demasiado cerca del Sol: algo está oculto o sin fuerza.",
      cazimi: "{P} está en el corazón del Sol (cazimi): una protección especial.",
      moonGood: "La Luna se dirige a {asp} con {B}: el ambiente favorece.",
      moonBad: "La Luna se dirige a {asp} con {B}: el ambiente trae fricción.",
      voidMoon: "La Luna está fuera de curso: probablemente nada cambie mucho.",
      benefic: "{P} está en la casa {n}, la de lo que preguntas: un buen augurio.",
      malefic: "{P} está en la casa {n}, la de lo que preguntas: hay dificultades en ese terreno.",
      fortune: "La Parte de la Fortuna toca lo que preguntas: hay suerte en juego.",
      reception: "{A} y {B} están en recepción mutua: hay buena voluntad entre las partes."
    },
    pro: "A favor", con: "En contra",
    feelTitle: "Lo que siente la otra persona", feelState: "Su significador ({P}) está en {S}, casa {n}: la otra persona está {desc}.", feelRetro: " Está mirando al pasado o con dudas.", feelWeak: " Está en una posición vulnerable.", feelStrong: " Se siente con fuerza y seguridad.",
    feelAsp: { trine: "Siente interés y afinidad hacia ti.", sextile: "Hay simpatía y una puerta abierta.", conj: "Está muy implicada contigo.", square: "Hay atracción, pero con tensión o dudas.", opp: "Hay algo fuerte, pero con distancia o choque.", none: "Ahora mismo no hay un vínculo claro hacia ti en la carta." },
    feelRec: "Además, su significador te «recibe»: te tiene en cuenta y te valora.",
    whenTitle: "Cuándo", whenDate: "El encuentro exacto en el cielo es el {date}.", whenSym: "Según la regla tradicional ({deg}° hasta el encuentro, {mode}), sería en unas {n} {unit}.", whenNone: "La carta no muestra un momento claro.",
    units: { days: "días", weeks: "semanas", months: "meses" }, modes: { cardinal: "signo cardinal", fixed: "signo fijo", mutable: "signo mutable" },
    shouldTitle: "¿Te conviene?", should: { pos: "La carta se inclina a que sí: hay más a favor que en contra.", mid: "Con cautela: hay argumentos parecidos a favor y en contra.", neg: "La carta no lo ve conveniente ahora: pesan más las dificultades." },
    adviceTitle: "Consejo",
    advice: {
      love: { pos: "Deja que el vínculo avance a su ritmo y cuida la comunicación.", mid: "Observa los hechos más que las promesas.", neg: "Protege tu energía: quizá ahora no es el momento." },
      work: { pos: "Prepárate y muéstrate: la puerta está abierta.", mid: "Ten un plan B mientras esperas.", neg: "Busca otras opciones; esta puede no ser la tuya." },
      money: { pos: "Avanza, pero revisa las cifras.", mid: "No decidas con prisa: compara.", neg: "Cuidado con arriesgar: espera o renegocia." },
      home: { pos: "Es buen momento para mover piezas en casa.", mid: "Habla con tu familia antes de decidir.", neg: "Mejor no forzar cambios ahora." },
      travel: { pos: "Adelante: prepara los papeles con tiempo.", mid: "Ten flexibilidad con fechas y planes.", neg: "Puede haber retrasos: considera otra fecha." },
      health: { pos: "Sigue cuidándote: va por buen camino.", mid: "Pide otra opinión si dudas.", neg: "Consulta a un profesional y no te quedes con la duda." },
      friends: { pos: "Apóyate en tu gente: suman.", mid: "Aclara expectativas con el grupo.", neg: "Revisa si ese entorno te nutre." },
      creative: { pos: "Crea sin miedo: hay buena energía.", mid: "Dale tiempo al proceso.", neg: "No te exijas resultados ahora." },
      contact: { pos: "Escribe o llama: la respuesta puede llegar.", mid: "Espera un poco antes de insistir.", neg: "No dependas de esa respuesta para avanzar." }
    },
    desc: ["con impulso, directa y quizá impaciente", "estable, tranquila y algo terca", "curiosa, cambiante y con muchas ideas", "sensible, protectora y emocional", "orgullosa, cálida y con ganas de destacar", "analítica, prudente y pendiente de los detalles", "dudosa entre opciones y buscando armonía", "intensa, reservada y con emociones profundas", "optimista, libre y con ganas de expandirse", "seria, prudente y pensando a largo plazo", "independiente, distante e imprevisible", "sensible, idealista y algo confusa"],
    repeat: "Preguntaste sobre {cat} hace {n} minutos. En tan poco tiempo la carta casi no cambia, y por eso la respuesta se parece: la tradición horaria pide hacer cada pregunta una sola vez.",
    moment: "Esta es la carta de las {time}. Cada pregunta se responde con el cielo del instante en que la haces.",
    claude: "Seguir con Claude", claudeNote: "Abre claude.ai con la carta horaria, los argumentos y tu pregunta para conversar sobre ella.",
    promptIntro: "Actúa como un astrólogo horario de la tradición de William Lilly, cálido y riguroso. Esta es la carta horaria de mi pregunta, calculada con efemérides astronómicas (zodiaco tropical, casas Regiomontanus). Úsala tal cual, no la recalcules.",
    promptClose: "Responde en español, de forma concreta y reflexiva: qué dice la carta, por qué, qué podría hacer yo y cuándo. Evita el fatalismo y no des consejos médicos, legales ni financieros."
  };
  /* ---------- interfaz ---------- */
  U.loveUI = X.loveUI;
  U.syn2 = { dims: "Su dinámica", strengths: "Lo que los une", challenges: "Lo que pide trabajo", aspects: "Aspectos entre sus cartas (uno a uno)", overlays: "Sus planetas en tus casas", overlaysMine: "Tus planetas en sus casas", composite: "La carta compuesta", compTiming: "Ciclos de la relación (próximos 12 meses)", talk: "Para hablar en pareja", noTimeOverlay: "Para ver en qué casas caen sus planetas hace falta la hora de nacimiento de quien recibe.", flowWord: "fluye", tensionWord: "tensión", claude: "Seguir con Claude sobre esta relación", none: "Sin datos suficientes." };
  U.askHub.love = ["Tu forma de amar", "Seis preguntas sobre cómo amas, comparadas con tu carta respuesta a respuesta."];
  U.quizUI.q_partnerSun = "¿En qué signo está el Sol de {name}?"; U.quizUI.q_todayMoon = "¿En qué signo está la Luna hoy?"; U.quizUI.q_retroNow = "¿Qué planeta está retrógrado ahora?"; U.quizUI.q_synTop = "¿Cuál es el aspecto más fuerte entre tu carta y la de {name}?"; U.quizUI.noneRetro = "Ninguno";
  U.quizUI.ex_partnerSun = "{name} tiene el Sol en {S}."; U.quizUI.ex_todayMoon = "Hoy la Luna recorre {S}."; U.quizUI.ex_retroNow = "Ahora mismo: {list}."; U.quizUI.ex_synTop = "{t}.";
})();
