/* Cielo 2 — contenido profundo (español): pares de planetas, puntos nuevos, patrones, tu año, preguntas. */
(function () {
  var X = TXT.es, U = I18N.es;
  X.art = { sun: "el Sol", moon: "la Luna" };
  X.planets.chiron = { n: "Quirón", role: "tu herida y tu don de sanar", area: "tu herida y tu forma de sanar", d: "Quirón es un cuerpo menor que orbita entre Saturno y Urano. En astrología simboliza la herida que se convierte en sabiduría: donde duele, también aprendes a ayudar.", house: "Es donde la herida se nota más y donde, con el tiempo, más puedes ayudar." };
  X.planets.lilith = { n: "Lilith", role: "tu deseo sin domesticar", area: "tu deseo y tu rebeldía", d: "Lilith (Luna Negra media) es el apogeo de la órbita lunar: un punto abstracto, no un astro. Simboliza lo que no se deja domesticar —deseo, rebeldía— y lo que aprendiste a esconder.", house: "Es donde no aceptas que te digan cómo ser." };
  X.planets.fortune = { n: "Fortuna", role: "tu bienestar", area: "tu bienestar", d: "La Parte de la Fortuna es un punto calculado (Ascendente + Luna − Sol en cartas diurnas; al revés en las nocturnas). Señala dónde fluyen con más facilidad el bienestar y la buena suerte cotidiana.", house: "Ahí la vida tiende a sentirse más ligera." };
  X.natal.chiron = [
    "Tu herida toca la identidad y el derecho a existir con fuerza; al sanarla aprendes a dar coraje a otros.",
    "Tu herida toca el valor propio y la seguridad material; al sanarla ayudas a otros a sentirse valiosos.",
    "Tu herida toca la palabra: quizá sentiste que tu voz no contaba; al sanarla sabes escuchar y enseñar como pocos.",
    "Tu herida toca el hogar y la pertenencia; al sanarla te vuelves refugio para otras personas.",
    "Tu herida toca el brillo y el reconocimiento; al sanarla animas a otros a mostrarse sin miedo.",
    "Tu herida toca el cuerpo, la utilidad o el perfeccionismo; al sanarla desarrollas un don para el cuidado.",
    "Tu herida toca los vínculos y la justicia; al sanarla te conviertes en puente en las relaciones.",
    "Tu herida toca la confianza y la intimidad; al sanarla puedes acompañar las crisis de otros.",
    "Tu herida toca el sentido y las creencias; al sanarla guías a quienes buscan su camino.",
    "Tu herida toca la autoridad y el éxito; al sanarla lideras con humanidad.",
    "Tu herida toca la pertenencia y el sentirte diferente; al sanarla unes a personas muy distintas.",
    "Tu herida toca la sensibilidad y los límites; al sanarla tu compasión se vuelve medicina."
  ];
  X.natal.lilith = [
    "Tu fuerza indomable es la independencia: no toleras que frenen tu impulso.",
    "Tu fuerza indomable es el placer: reclamas disfrutar tu cuerpo y tu vida sin culpa.",
    "Tu fuerza indomable es la palabra: dices lo que otros callan.",
    "Tu fuerza indomable es la emoción: rechazas cuidar por pura obligación.",
    "Tu fuerza indomable es el brillo: no aceptas hacerte menos para encajar.",
    "Tu fuerza indomable es tu autonomía cotidiana: rechazas el servicio impuesto.",
    "Tu fuerza indomable está en los vínculos: no aceptas relaciones desiguales.",
    "Tu fuerza indomable es la intensidad: no temes lo profundo ni lo tabú.",
    "Tu fuerza indomable es tu verdad: rechazas los dogmas ajenos.",
    "Tu fuerza indomable es la ambición: no aceptas techos ni permisos.",
    "Tu fuerza indomable es la libertad: te rebelas ante cualquier molde.",
    "Tu fuerza indomable es la intuición: rechazas una vida sin misterio."
  ];
  // Cada par: [tema, cuando fluye, cuando hay tensión]
  X.pairs = {
    "sun-moon": ["Lo que eres y lo que necesitas: la voluntad y el corazón.", "Van de la mano: sabes lo que quieres y te sientes bien persiguiéndolo; transmites coherencia.", "Lo que quieres y lo que necesitas no siempre coinciden; aprender a escuchar a ambos te da una madurez emocional poco común."],
    "sun-mercury": ["Tu identidad y tu mente van unidas: piensas como eres.", "Hablas con convicción y tus ideas llevan tu sello personal.", "Puede costarte separar tus ideas de ti: una crítica a lo que piensas se siente personal."],
    "sun-venus": ["Tu identidad y tu forma de amar se tocan: el encanto forma parte de ti.", "Irradias calidez y buen gusto; la gente se siente a gusto contigo.", "Puedes buscar demasiado agradar; tu reto es gustarte sin depender de la aprobación."],
    "sun-mars": ["Tu identidad y tu impulso: la voluntad de actuar.", "Tienes energía, iniciativa y coraje para defender lo que eres.", "La energía sale a borbotones —impaciencia, choques, prisa—; canalizada, es una fuerza imparable."],
    "sun-jupiter": ["Tu identidad y tu fe: optimismo, generosidad, ganas de crecer.", "Confías en la vida y la vida suele responder: oportunidades, protección, buen ánimo.", "El exceso de confianza puede llevarte a prometer o abarcar de más; la medida es tu aliada."],
    "sun-saturn": ["Tu identidad y tu sentido del deber: el peso de la responsabilidad.", "Disciplina natural: construyes con paciencia y tus logros son sólidos.", "Quizá sentiste pronto que tenías que ganarte tu lugar; con los años esa exigencia se vuelve autoridad serena."],
    "sun-uranus": ["Tu identidad y tu libertad: ser diferente.", "Originalidad sin esfuerzo: innovas y se aprecia tu forma única de ver el mundo.", "La rutina te asfixia y los cambios bruscos te buscan; tu reto es ser libre sin quemar puentes."],
    "sun-neptune": ["Tu identidad y tu imaginación: sensibilidad, ideales, arte.", "Inspiración, empatía y talento creativo; percibes lo sutil.", "Puede costarte definirte o poner límites; aterriza tus sueños y verifica antes de idealizar."],
    "sun-pluto": ["Tu identidad y tu poder: intensidad y transformación.", "Tienes una fuerza interior enorme: te reinventas y sabes ir al fondo.", "Luchas de poder y crisis que te transforman; aprendes que el verdadero poder no necesita controlar."],
    "moon-mercury": ["Lo que sientes y lo que piensas: la voz de las emociones.", "Sabes poner en palabras lo que sientes: inteligencia emocional.", "Cabeza y corazón discuten: a veces racionalizas lo que sientes o hablas desde la emoción del momento."],
    "moon-venus": ["Ternura y afecto: tu necesidad de cariño y tu forma de darlo.", "Dulzura natural, buen gusto y facilidad para crear ambientes acogedores.", "Puedes buscar afecto para calmar la inseguridad; tu reto es darte el cariño que pides."],
    "moon-mars": ["Emoción e impulso: sentir y reaccionar.", "Coraje emocional: defiendes a los tuyos y actúas según lo que sientes.", "Reacciones rápidas y enfados que nacen de una herida; respirar antes de responder lo cambia todo."],
    "moon-jupiter": ["Emoción y generosidad: un corazón grande.", "Optimismo, calidez y protección: la gente se siente cuidada contigo.", "Tiendes a exagerar las emociones o a darlo todo hasta quedarte sin nada; la medida también es amor."],
    "moon-saturn": ["Emoción y deber: cuidar y contenerse.", "Madurez emocional y lealtad: eres un apoyo estable para otros.", "Quizá aprendiste a guardarte lo que sientes o a cuidar antes de recibir cuidado; con el tiempo aprendes a pedir sin culpa."],
    "moon-uranus": ["Emoción y libertad: sentir de forma imprevisible.", "Te adaptas rápido a los cambios y necesitas espacio sin dramas.", "Altibajos repentinos y miedo a depender; tu reto es permitir la cercanía sin sentir que pierdes tu libertad."],
    "moon-neptune": ["Emoción e imaginación: un mundo interior oceánico.", "Empatía profunda, intuición y sensibilidad artística.", "Absorbes emociones ajenas y puedes idealizar o evadirte; los límites te protegen."],
    "moon-pluto": ["Emoción y profundidad: sentir hasta el fondo.", "Una intensidad que transforma: sabes acompañar las crisis y renacer.", "Emociones intensas y miedo a la pérdida; soltar el control emocional te libera."],
    "mercury-venus": ["Mente y encanto: palabras amables y gusto estético.", "Hablas con gracia, diplomacia y sentido de la belleza.", "Puedes decir lo que agrada en lugar de lo que piensas; la honestidad también puede ser amable."],
    "mercury-mars": ["Mente y acción: pensamiento rápido, palabra afilada.", "Decides rápido, debates con agilidad y defiendes tus ideas con energía.", "Discusiones, impaciencia mental o palabras que hieren; pensar antes de responder te da poder."],
    "mercury-jupiter": ["Mente y visión: ideas grandes.", "Facilidad para aprender, enseñar y ver el panorama completo.", "Exceso de ideas o de promesas, y detalles que se escapan; elegir y profundizar es tu clave."],
    "mercury-saturn": ["Mente y estructura: pensamiento serio y riguroso.", "Concentración, método y palabra confiable; piensas a largo plazo.", "Dudas sobre tu inteligencia o miedo a equivocarte; la práctica convierte esa exigencia en maestría."],
    "mercury-uranus": ["Mente y genio: ideas súbitas y originales.", "Intuición intelectual, inventiva y rapidez para conectar ideas.", "Nerviosismo mental, ideas que saltan o rebeldía al comunicar; anotar y hacer pausas ayuda."],
    "mercury-neptune": ["Mente e imaginación: pensar en imágenes.", "Creatividad verbal, intuición y sensibilidad poética.", "Confusión, olvidos o malentendidos; verificar los datos protege tu buena fe."],
    "mercury-pluto": ["Mente y profundidad: investigar y persuadir.", "Mente penetrante, gran capacidad de análisis y de persuasión.", "Obsesiones mentales o palabras usadas como armas; tu mente es poderosa cuando la usas para comprender."],
    "venus-mars": ["Amor y deseo: la atracción, lo receptivo y lo activo en ti.", "Química natural, sensualidad y equilibrio entre dar y tomar.", "Pasión intensa con roces: el deseo y el afecto a veces van por caminos distintos."],
    "venus-jupiter": ["Amor y abundancia: generosidad afectiva.", "Encanto, buena suerte en el amor y gusto por disfrutar la vida.", "Exceso de placer, de gasto o de idealización en el amor; lo suficiente también es abundancia."],
    "venus-saturn": ["Amor y compromiso: amar en serio.", "Lealtad, relaciones duraderas y gusto por lo clásico y bien hecho.", "Miedo al rechazo o sensación de no merecer amor; con el tiempo, el amor llega más sólido."],
    "venus-uranus": ["Amor y libertad: atracción por lo diferente.", "Relaciones originales, amistades que se vuelven amor y un estilo único.", "Amores intermitentes o miedo a atarte; necesitas un vínculo que respete tu libertad."],
    "venus-neptune": ["Amor e ideal: romanticismo.", "Amor compasivo, sensibilidad artística y una ternura sin límites.", "Idealizar a quien amas o perderte en esa persona; ver al otro tal como es cuida el amor."],
    "venus-pluto": ["Amor y poder: pasión total.", "Amor profundo, magnetismo y capacidad de transformarte a través del vínculo.", "Celos, obsesión o relaciones intensas y difíciles; la confianza se construye, no se controla."],
    "mars-jupiter": ["Acción y expansión: entusiasmo.", "Energía con propósito: emprendes y arriesgas con buen olfato.", "Exceso de riesgo o de confianza; elegir bien tus batallas multiplica tus logros."],
    "mars-saturn": ["Acción y freno: el acelerador y el freno a la vez.", "Disciplina física y mental: perseverancia y estrategia.", "Frustración, energía contenida o miedo a actuar; paso a paso se convierte en una resistencia admirable."],
    "mars-uranus": ["Acción y rebeldía: energía eléctrica.", "Valentía, reflejos rápidos y gusto por innovar.", "Impulsividad, prisas o rebeldía brusca; canalizar esa electricidad en algo nuevo la vuelve genio."],
    "mars-neptune": ["Acción e ideal: actuar por inspiración.", "Energía al servicio de un ideal, del arte o de ayudar a otros.", "Energía difusa, dudas o evitar el conflicto; objetivos claros y límites te devuelven la fuerza."],
    "mars-pluto": ["Acción y poder: voluntad de hierro.", "Fuerza, determinación y capacidad de regenerarte.", "Una intensidad que puede volverse lucha de poder; usa tu fuerza para transformar, no para dominar."],
    "jupiter-saturn": ["Expansión y estructura: crecer con orden.", "Equilibrio entre visión y realismo: construyes cosas grandes y sólidas.", "Tensión entre lanzarte y frenarte; saber cuándo crecer y cuándo consolidar es tu sabiduría."],
    "jupiter-uranus": ["Expansión y libertad: oportunidades súbitas.", "Suerte inesperada, ideas visionarias y libertad para crecer.", "Cambios bruscos de rumbo o inquietud constante; la libertad necesita un plan."],
    "jupiter-neptune": ["Fe e imaginación: idealismo espiritual.", "Compasión, fe e inspiración; gran sensibilidad para el arte y lo espiritual.", "Ilusiones, promesas vagas o escapismo; los pies en la tierra cuidan tus sueños."],
    "jupiter-pluto": ["Expansión y poder: ambición profunda.", "Capacidad para generar grandes transformaciones y recursos.", "Ambición extrema o luchas de poder; tu crecimiento es sano cuando también beneficia a otros."],
    "saturn-uranus": ["Lo viejo y lo nuevo: tradición y cambio.", "Sabes innovar con responsabilidad y dar estructura a las ideas nuevas.", "Tensión entre seguridad y libertad; aprendes a cambiar sin destruirlo todo."],
    "saturn-neptune": ["Realidad y sueño: dar forma a lo ideal.", "Capacidad para concretar sueños y dar estructura a la inspiración.", "Miedos difusos o desilusiones; los sueños se cumplen con pasos concretos."],
    "saturn-pluto": ["Estructura y poder: resistencia.", "Determinación y capacidad para reconstruir con paciencia.", "Presiones fuertes y pruebas de resistencia de las que sale una fortaleza enorme."],
    "uranus-neptune": ["Un aspecto generacional: el cambio y el sueño, ideales colectivos nuevos.", "Tu generación une innovación e idealismo.", "Tu generación vive la tensión entre el progreso y la desilusión."],
    "uranus-pluto": ["Un aspecto generacional: revolución y transformación.", "Tu generación transforma estructuras con creatividad.", "Tu generación vive cambios radicales y grandes presiones de época."],
    "neptune-pluto": ["Un aspecto generacional que acompaña a varias generaciones: transformación espiritual.", "Sensibilidad colectiva para la transformación profunda.", "Tensión colectiva entre ideales y poder."]
  };
  X.angleAsp = {
    asc: { sun: "Tu identidad se ve a simple vista: tienes una presencia clara.", moon: "Tus emociones se notan: transmites sensibilidad y cercanía.", mercury: "Tu mente se nota: das una impresión de agilidad y curiosidad.", venus: "Tu encanto es visible: amabilidad y buen gusto.", mars: "Tu energía se nota: presencia directa y dinámica.", jupiter: "Transmites optimismo y generosidad.", saturn: "Transmites seriedad y autocontrol.", uranus: "Te perciben con originalidad e imprevisibilidad.", neptune: "Das una impresión sensible y difícil de definir.", pluto: "Transmites intensidad y magnetismo.", node: "Tu rumbo pasa por cómo te muestras al mundo.", chiron: "Tu herida y tu don de sanar se notan en tu forma de estar." },
    mc: { sun: "Tu identidad pide un lugar visible en el mundo.", moon: "Tu vocación tiene que ver con cuidar o con el público.", mercury: "Tu carrera pasa por comunicar, escribir o enseñar.", venus: "Tu vocación busca belleza, arte o relaciones.", mars: "Tu carrera pide acción, iniciativa y competencia.", jupiter: "Buena estrella profesional: crecimiento y reconocimiento.", saturn: "Una carrera construida con esfuerzo y autoridad a largo plazo.", uranus: "Una carrera poco convencional, con giros e innovación.", neptune: "Una vocación creativa, espiritual o de servicio; cuidado con la indefinición.", pluto: "Ambición profunda y poder en tu carrera.", node: "Tu rumbo y tu vocación se cruzan.", chiron: "Tu vocación puede pasar por sanar o acompañar." },
    nature: { h: "Fluye: es fácil de expresar.", t: "Con tensión: pide integrarlo con conciencia.", c: "Está muy marcado en ti." }
  };
  X.dignity = {
    names: { domicile: "Domicilio", exaltation: "Exaltación", detriment: "Exilio", fall: "Caída" },
    text: {
      domicile: "{P} está en su propio signo: {role} se expresa con naturalidad, recursos y fuerza.",
      exaltation: "En {S}, {P} está en exaltación: {role} brilla en su versión más elevada.",
      detriment: "En {S}, {P} está en exilio: {role} trabaja en terreno ajeno; cuesta más, pero desarrolla habilidades poco comunes.",
      fall: "En {S}, {P} está en caída: {role} necesita más paciencia y cuidado; su madurez llega con los años."
    }
  };
  X.patterns = {
    stelliumSign: "Stellium en {where}: {n} planetas juntos ({list}). Esa energía pesa mucho en ti: es tu foco y, a veces, tu exceso.",
    stelliumHouse: "Stellium en la casa {where}: {n} planetas ({list}) concentran tu vida en {dom}.",
    grandTrine: "Gran trígono ({list}): un circuito de talento natural en {el}. Tu facilidad ahí es enorme; el reto es no dormirte en ella.",
    tSquare: "Cuadratura en T con {apex} como vértice ({list}): una tensión que empuja a actuar. Es motor de logros cuando la canalizas.",
    grandCross: "Gran cruz ({list}): cuatro fuerzas que tiran en direcciones distintas. Mucha energía y mucha resistencia: sostienes tensiones que paralizarían a otros.",
    yod: "Yod ({list}) apuntando a {apex}: una sensación de misión o de ajuste constante en ese punto. Algo en ti pide afinarse hasta encontrar su forma única.",
    kite: "Cometa ({list}): un gran trígono con una salida concreta hacia {apex}. Tu talento tiene un canal.",
    none: "No hay grandes configuraciones: tu carta se lee planeta a planeta, con más libertad y menos guion."
  };
  X.sect = {
    day: "Carta diurna: naciste con el Sol sobre el horizonte. Tu energía tiende a ser visible y dirigida hacia fuera; te favorecen la claridad y los objetivos.",
    night: "Carta nocturna: naciste con el Sol bajo el horizonte. Tu fuerza tiende a ser interior —intuición, mundo privado— y tus procesos maduran en silencio."
  };
  X.hemis = {
    above: "La mayoría de tus planetas están sobre el horizonte: una vida orientada al mundo, a lo público y a lo visible.",
    below: "La mayoría de tus planetas están bajo el horizonte: una vida orientada a lo íntimo, a las raíces y a construir por dentro.",
    east: "Predomina el hemisferio oriental: tienes iniciativa propia y tú creas tus oportunidades.",
    west: "Predomina el hemisferio occidental: los demás son clave en tu camino; creces a través del encuentro."
  };
  X.ruler = {
    line: "Tu regente es {P}, porque gobierna tu Ascendente en {asc}. Está en {S}{house}: {flavor}",
    houseBit: ", en la casa {n}",
    where: "Donde está tu regente se juega gran parte de tu historia: {dom}.",
    modern: "Su co-regente moderno es {P}.",
    flavor: { sun: "tu vida gira en torno a brillar y encontrar propósito.", moon: "tu vida se guía por las emociones, el cuidado y la intuición.", mercury: "tu vida se mueve por la curiosidad, las palabras y el aprendizaje.", venus: "tu vida busca belleza, vínculos y armonía.", mars: "tu vida pide acción, valentía y desafíos.", jupiter: "tu vida busca crecer, explorar y encontrar sentido.", saturn: "tu vida se construye con disciplina, paciencia y responsabilidad." }
  };
  X.profection = [
    "Un año sobre ti: tu cuerpo, tu imagen y la posibilidad de empezar de nuevo.",
    "El dinero, los recursos y la autoestima pasan a primer plano.",
    "Aprender, comunicar y moverte: hermanos, vecinos, estudios cortos.",
    "Hogar, familia y raíces: quizá mudanzas, reformas o cierres familiares.",
    "Creatividad, placer, romance e hijos o proyectos propios.",
    "Rutinas, salud y trabajo diario: un año para ajustar hábitos.",
    "Las relaciones y los acuerdos: el otro como espejo.",
    "Intimidad, recursos compartidos y transformaciones profundas.",
    "Viajes, estudios y creencias: un año para ampliar horizontes.",
    "Carrera, visibilidad y logros: lo público se mueve.",
    "Amistades, comunidad y planes de futuro.",
    "Descanso, cierre de ciclo y trabajo interior antes de volver a empezar."
  ];
  X.progMoon = [
    "Una etapa de empezar: impulso emocional para iniciar y afirmarte.",
    "Una etapa de asentarte: necesidad de calma, estabilidad y placer.",
    "Una etapa de curiosidad: aprender, hablar, moverte, conectar.",
    "Una etapa de raíces: hogar, familia y cuidado emocional.",
    "Una etapa de expresión: crear, brillar, jugar, mostrar el corazón.",
    "Una etapa de ordenar: hábitos, salud y trabajo bien hecho.",
    "Una etapa de vínculos: relaciones, acuerdos y equilibrio.",
    "Una etapa de profundidad: transformación, intimidad y soltar.",
    "Una etapa de horizontes: viajes, estudios y sentido.",
    "Una etapa de construir: responsabilidad, metas y madurez.",
    "Una etapa de libertad: amistades, ideas nuevas e independencia.",
    "Una etapa de cierre: sensibilidad, vida interior y soltar lo viejo."
  ];
  X.prompts = {
    transit: {
      sun: { h: ["¿Qué parte de ti quiere más espacio hoy?", "¿Qué logro reciente no te has reconocido?"], t: ["¿Dónde estás forzando las cosas?", "¿Qué batalla podrías soltar hoy?"], c: ["¿Qué te gustaría que dijera de ti este año?", "Si hoy empezaras de cero, ¿qué conservarías?"] },
      moon: { h: ["¿Quién te hace sentir en casa?", "¿Qué necesitas para estar bien esta noche?"], t: ["¿Qué emoción estás evitando nombrar?", "¿Qué te pesa más de lo que dices?"], c: ["¿Qué sientes ahora, sin juzgarlo?", "¿Qué te pide tu cuerpo hoy?"] },
      mercury: { h: ["¿Qué conversación te gustaría tener?", "¿Qué idea merece que la escribas hoy?"], t: ["¿Qué malentendido podrías aclarar?", "¿Escuchas para entender o para responder?"], c: ["¿Qué estás aprendiendo ahora mismo?", "¿Qué pregunta te ronda la cabeza?"] },
      venus: { h: ["¿Qué te hace sentir bien en tu piel?", "¿A quién te gustaría agradecerle algo?"], t: ["¿Estás dando para recibir?", "¿Qué deseas de verdad, más allá de lo que se espera?"], c: ["¿Qué placer simple te has negado?", "¿Qué valoras hoy más que hace un año?"] },
      mars: { h: ["¿Qué acción pequeña te acercaría a tu meta?", "¿Por qué vale la pena luchar ahora?"], t: ["¿Qué te enfada y qué hay debajo?", "¿Dónde gastas energía que no vuelve?"], c: ["¿Qué empezarías hoy si no tuvieras miedo?", "¿Qué deseo estás postergando?"] },
      jupiter: { h: ["¿Qué oportunidad tienes delante?", "¿En qué te gustaría crecer este año?"], t: ["¿Dónde estás exagerando o prometiendo de más?", "¿Qué es suficiente para ti?"], c: ["¿Qué puerta te gustaría abrir?", "¿En qué crees ahora que antes no creías?"] },
      saturn: { h: ["¿Qué compromiso te hace sentir orgullo?", "¿Qué estás construyendo a largo plazo?"], t: ["¿Qué límite necesitas poner?", "¿Qué responsabilidad no es tuya?"], c: ["¿Qué estructura de tu vida pide revisión?", "¿Qué madurez estás ganando?"] },
      uranus: { h: ["¿Qué cambio pequeño te daría aire?", "¿Qué parte original de ti escondes?"], t: ["¿Qué te inquieta sin que sepas nombrarlo?", "¿Qué necesitas soltar para sentirte libre?"], c: ["¿Qué regla ya no tiene sentido para ti?", "¿Cómo sería tu vida un poco más tuya?"] },
      neptune: { h: ["¿Qué te inspira últimamente?", "¿Qué te dice tu intuición?"], t: ["¿Qué estás idealizando?", "¿Qué datos te faltan antes de decidir?"], c: ["¿Qué sueño merece tu atención?", "¿Dónde necesitas más compasión, también contigo?"] },
      pluto: { h: ["¿Qué poder tienes y no usas?", "¿Qué transformación ya empezó en ti?"], t: ["¿Qué intentas controlar?", "¿Qué tendrías que soltar para renacer?"], c: ["¿Qué etapa está terminando?", "¿Qué verdad profunda reconoces hoy?"] }
    },
    natal: {
      sun: ["¿Cuándo te sientes más tú?", "¿Qué le da sentido a tu vida ahora mismo?"],
      moon: ["¿Qué necesitas para sentirte a salvo?", "¿Cómo te cuidas cuando nadie mira?"],
      asc: ["¿Qué impresión das sin querer?", "¿Coincide cómo te ven con cómo eres por dentro?"],
      mercury: ["¿Cómo aprendes mejor?", "¿Qué te cuesta decir en voz alta?"],
      venus: ["¿Qué te enamora de una persona?", "¿Qué valoras más que el dinero?"],
      mars: ["¿Qué te hace pasar a la acción?", "¿Cómo expresas el enfado?"],
      jupiter: ["¿Dónde has tenido suerte en la vida?", "¿Qué te hace crecer?"],
      saturn: ["¿Qué te costó y ahora dominas?", "¿Qué miedo te ha enseñado algo?"],
      mc: ["¿Por qué te gustaría que te recordaran?", "¿Qué trabajo harías aunque no te pagaran?"],
      chiron: ["¿Qué herida se ha convertido en tu forma de ayudar?", "¿Con qué dolor ajeno conectas al instante?"],
      node: ["¿Qué te da miedo pero te atrae?", "¿Qué zona de confort ya no te nutre?"]
    },
    moon: ["¿Qué quieres empezar?", "¿Qué te da calma?", "¿Qué te da curiosidad hoy?", "¿Quién te cuida a ti?", "¿Qué te hace sentir orgullo?", "¿Qué pequeño orden te haría bien?", "¿Qué relación pide equilibrio?", "¿Qué verdad necesitas mirar?", "¿Qué te ilusiona?", "¿Qué meta merece tu esfuerzo?", "¿Qué te hace sentir libre?", "¿Qué necesitas soltar?"]
  };
  X.horary = {
    cats: {
      love: { n: "Amor y pareja", h: 7 }, work: { n: "Trabajo y carrera", h: 10 }, money: { n: "Dinero y recursos", h: 2 }, home: { n: "Hogar y familia", h: 4 },
      travel: { n: "Viajes y estudios", h: 9 }, health: { n: "Salud y rutina", h: 6 }, friends: { n: "Amistades y proyectos", h: 11 }, creative: { n: "Creatividad e hijos", h: 5 }, contact: { n: "Mensajes y trámites", h: 3 }
    },
    verdict: { yes: "Sí, con buena probabilidad.", yesHard: "Sí, pero con esfuerzo.", help: "Sí, con ayuda de alguien.", late: "Puede darse, pero tarde o de otra forma.", notNow: "No por ahora.", voidMoon: "Probablemente nada cambie mucho.", early: "Es pronto para preguntar.", lateAsc: "La cuestión ya está prácticamente decidida." },
    you: "Te representa {P}, regente de tu Ascendente en {S}, que está en {S2}, casa {n}; la Luna, en {S3}, te acompaña como co-significadora.",
    quesited: "Lo que preguntas pertenece a la casa {h} ({dom}) y lo representa {Q}, en {S}, casa {n}.",
    same: "Tú y lo preguntado comparten regente ({P}): la respuesta depende sobre todo de ti.",
    perfect: "{A} y {B} forman {asp} el {date} {how}.",
    aspExact: { conj: "una conjunción exacta", sextile: "un sextil exacto", square: "una cuadratura exacta", trine: "un trígono exacto", opp: "una oposición exacta" },
    aspA: { conj: "una conjunción", sextile: "un sextil", square: "una cuadratura", trine: "un trígono", opp: "una oposición" },
    how: { trine: "de forma fluida", sextile: "con facilidad si das un paso", conj: "de manera directa", square: "con obstáculos y esfuerzo", opp: "con tensión o tras una negociación" },
    afterSign: "Pero el encuentro ocurre después de que uno de los dos cambie de signo: la situación tendrá otra forma cuando llegue.",
    none: "{A} y {B} no forman ningún aspecto exacto en las próximas semanas: no hay un encuentro claro.",
    refrain: "Ojo: {P} entra en movimiento retrógrado antes del encuentro; alguien podría echarse atrás.",
    translation: "La Luna lleva la luz de {A} a {B}: alguien o algo hará de puente.",
    moonNext: "La Luna, que te acompaña, se dirige a {asp} con {B} el {date}.",
    voidMoon: "La Luna está fuera de curso: no formará más aspectos antes de dejar {S}.",
    early: "El Ascendente está en los primeros grados ({d}°): la situación aún no ha madurado.",
    lateAsc: "El Ascendente está en los últimos grados ({d}°): la situación ya está casi resuelta.",
    disclaimer: "La astrología horaria es una técnica tradicional (William Lilly, 1647): se levanta la carta del momento de la pregunta y se leen sus regentes. Úsala para pensar, no para decidir por ti.",
    timing: "Si se da, la carta apunta a alrededor del {date}."
  };
  X.quiz = [
    ["¿Qué planeta rige Libra?", ["Venus", "Marte", "Saturno", "Mercurio"], "Venus rige Tauro y Libra: la belleza, los vínculos y lo que valoras."],
    ["¿Cuántos grados forman un trígono?", ["120°", "90°", "60°", "180°"], "El trígono es un tercio del círculo: el aspecto más fluido."],
    ["¿De qué elemento es Cáncer?", ["Agua", "Tierra", "Fuego", "Aire"], "Cáncer, Escorpio y Piscis son los signos de agua: emoción e intuición."],
    ["¿Cuál es el signo opuesto a Aries?", ["Libra", "Escorpio", "Cáncer", "Capricornio"], "Los opuestos se complementan: el «yo» de Aries y el «nosotros» de Libra."],
    ["¿Qué casa habla de la vocación y la reputación?", ["La casa 10", "La casa 4", "La casa 6", "La casa 2"], "La casa 10 empieza en el Medio Cielo, el punto más alto de la carta."],
    ["¿Qué significa que un planeta esté retrógrado?", ["Que desde la Tierra parece ir hacia atrás", "Que se aleja del Sol", "Que se detiene en el cielo de verdad", "Que cambia de órbita"], "Es una ilusión óptica: la Tierra adelanta al planeta (o él a ella) en su órbita."],
    ["¿Qué marca el Ascendente?", ["El signo que salía por el este al nacer", "El signo del Sol", "El signo de la Luna", "El planeta más alto"], "Por eso depende de la hora exacta: cambia aproximadamente cada dos horas."],
    ["¿Cuánto tarda la Luna en recorrer todo el zodiaco?", ["Unos 27 días", "Un año", "Una semana", "Unos dos años y medio"], "La Luna avanza unos 13° al día y pasa unos dos días y medio en cada signo."],
    ["¿Qué planeta tarda unos 29 años en volver a su posición?", ["Saturno", "Júpiter", "Urano", "Marte"], "El famoso «retorno de Saturno» llega alrededor de los 29 años."],
    ["¿Qué modalidad comparten Géminis, Virgo, Sagitario y Piscis?", ["Mutable", "Fija", "Cardinal", "Ninguna"], "Los signos mutables cierran cada estación: adaptación y cambio."],
    ["¿Qué planeta rige Escorpio en la astrología tradicional?", ["Marte", "Plutón", "Saturno", "Venus"], "Tradicionalmente es Marte; la astrología moderna añade a Plutón como co-regente."],
    ["¿Qué aspecto forman dos planetas a 90°?", ["Cuadratura", "Sextil", "Trígono", "Oposición"], "La cuadratura es tensión que empuja a actuar."],
    ["¿Qué es el zodiaco tropical?", ["El que pone 0° de Aries en el equinoccio de marzo", "El que sigue las constelaciones de hoy", "El de los signos chinos", "El que solo usa estrellas fijas"], "Es el que usa la astrología occidental: se basa en las estaciones, no en las constelaciones."],
    ["¿Qué representa la casa 7?", ["La pareja y los socios", "El dinero propio", "La salud", "Los hermanos"], "La casa 7 empieza en el Descendente, frente al Ascendente: el otro."],
    ["¿Cada cuánto hay luna nueva?", ["Cada 29,5 días aproximadamente", "Cada 7 días", "Cada 15 días", "Cada 3 meses"], "Es el mes sinódico: de una luna nueva a la siguiente."],
    ["¿Qué planeta rige Acuario en la astrología tradicional?", ["Saturno", "Urano", "Júpiter", "Mercurio"], "Tradicionalmente es Saturno; la astrología moderna añade a Urano."],
    ["¿Qué es el Medio Cielo?", ["El punto más alto de la carta", "El centro de la rueda", "El signo de la Luna", "La casa 1"], "Es donde la eclíptica cruza el meridiano: vocación y dirección pública."],
    ["¿Cuál de estos es un signo de tierra?", ["Capricornio", "Acuario", "Leo", "Escorpio"], "Tauro, Virgo y Capricornio son los signos de tierra: realismo y constancia."],
    ["¿Cuántas veces al año suele haber Mercurio retrógrado?", ["Unas 3", "1 cada dos años", "12", "1 por siglo"], "Mercurio retrograda unas tres veces al año, unas tres semanas cada vez."],
    ["¿Qué es la exaltación de un planeta?", ["Un signo donde se expresa de forma especialmente elevada", "Que está retrógrado", "Que está en la casa 10", "Que forma muchos aspectos"], "Por ejemplo, el Sol está exaltado en Aries y la Luna en Tauro."]
  ];
  // ---- interfaz ----
  U.tabs.ask = "Preguntas";
  U.chart.system.koch = "Koch"; U.chart.system.regio = "Regiomontanus"; U.chart.system.equal = "Casas iguales";
  U.deep = { title: "Lectura profunda", cta: "Leer tu carta en profundidad", ctaSub: "Regente, dignidades, configuraciones, aspectos uno a uno y preguntas para ti.",
    s: { arch: "Tu arquitectura", essence: "Tu esencia", emotion: "Tu mundo emocional", presence: "Cómo te ven", mind: "Mente y voz", love: "Amor y valores", drive: "Energía y deseo", growth: "Crecimiento y límites", vocation: "Vocación", wound: "Herida y sanación", path: "Tu rumbo" },
    think: "Para pensar", answerPh: "Tu respuesta…", save: "Guardar", saved: "Guardado ✓", noTime: "Sin hora de nacimiento, esta sección se lee solo por signo.", mostAspected: "{P} es tu planeta más conectado ({n} aspectos): es un hilo que atraviesa toda tu carta." };
  U.extra = { dignity: "Dignidad", points: "Puntos sensibles", precision: "La precisión de tu hora", sens: "Con 10 minutos de diferencia, tu Ascendente estaría entre {a} y {b}; con 30 minutos, entre {c} y {d}.", sensSame: "Tu Ascendente es estable: aunque tu hora tenga 30 minutos de error, sigue en {s}.", sensEdge: "Tu Ascendente está cerca del cambio de signo: comprueba bien tu hora.", lilithNote: "Lilith media según Meeus; otros programas pueden diferir unos minutos de arco." };
  U.tr2 = { window: "Activo del {a} al {b}", exacts: "Exacto: {list}", house: "Recorre tu casa {n} ({dom})." };
  U.daily = { title: "Pregunta del día", ph: "Escribe tu respuesta…", save: "Guardar en el diario", saved: "Guardado en tu diario ✓" };
  U.year = { title: "Tu año", sub: "Técnicas de tiempo: lo que se activa este año en tu carta.", prof: "Año de la casa {n}", lord: "Señor del año: {P}", profText: "{theme} El señor del año es {P}: su posición en tu carta ({S}, {house}) y sus tránsitos marcan el tono.", profHouse: "casa {n}",
    sr: "Revolución solar {y}", srText: "El Sol vuelve a su posición natal el {date} a las {time}. Para ese año, el Ascendente de la revolución cae en {asc} y el Sol en la casa {n}: {dom}.", srPlace: "Calculada para {place}.",
    prog: "Luna progresada", progText: "Tu Luna progresada está en {S}{house}. {text}", progNext: "Pasará a {S} hacia {date}.",
    big: "Grandes tránsitos de los próximos 12 meses", none: "No hay tránsitos lentos importantes este año: un período estable.", noTime: "Las técnicas de tiempo necesitan tu hora de nacimiento para casas y Ascendente." };
  U.askHub = { title: "Preguntas", sub: "Pregúntale al cielo, pon a prueba tu carta y conócete mejor.",
    horary: ["Pregunta al cielo", "Haz una pregunta concreta: se levanta la carta de ese instante (astrología horaria)."], quiz: ["Conoce tu carta", "Un juego de 8 preguntas sobre tu carta y la astrología."],
    blind: ["¿Te reconoces a ciegas?", "Elige qué descripción te representa sin saber de qué signo es."], prompts: ["Preguntas para ti", "Preguntas de reflexión según tu carta y tu día."] };
  U.horary = { title: "Pregunta al cielo", cat: "¿Sobre qué es tu pregunta?", q: "Tu pregunta", ph: "Por ejemplo: ¿me ofrecerán el puesto?", where: "Preguntas desde", change: "Cambiar", go: "Levantar la carta", tip: "Funciona mejor con preguntas concretas de sí o no, hechas con sinceridad y una sola vez.",
    result: "Respuesta", why: "Por qué", sigs: "Significadores", chart: "La carta del momento", track: "¿Se cumplió?", yes: "Sí", no: "No", pending: "Aún no", history: "Tus preguntas", score: "Aciertos: {h} de {n} preguntas resueltas.", scoreNone: "Cuando sepas cómo terminó cada pregunta, márcalo: así verás si la técnica acierta contigo.", empty: "Aún no has hecho preguntas.", asked: "{date} · {place}", del: "Eliminar" };
  U.here = { title: "Tu ubicación actual", use: "Usar mi ubicación", search: "Buscar ciudad", note: "Se usa para las preguntas horarias y para tu revolución solar.", denied: "No se pudo obtener tu ubicación; busca tu ciudad.", current: "Ubicación actual", birthDefault: "Por ahora se usa tu lugar de nacimiento." };
  U.quizUI = { title: "Conoce tu carta", start: "Empezar", q: "Pregunta {i} de {n}", right: "¡Correcto!", wrong: "No exactamente.", next: "Siguiente", finish: "Ver resultado", result: "{s} de {n}", again: "Jugar otra vez", best: "Mejor marca: {b} de {n}", msgs: ["Estás empezando a conocer tu cielo.", "Vas muy bien: tu carta ya te suena.", "¡Conoces tu carta de memoria!"],
    q_sun: "¿En qué signo está tu Sol?", q_moon: "¿En qué signo está tu Luna?", q_asc: "¿Cuál es tu Ascendente?", q_venus: "¿En qué signo está tu Venus?", q_mars: "¿En qué signo está tu Marte?", q_mercury: "¿En qué signo está tu Mercurio?", q_mc: "¿En qué signo está tu Medio Cielo?",
    q_house: "¿En qué casa está tu {P}?", q_ruler: "¿Qué planeta es el regente de tu carta?", q_element: "¿Qué elemento predomina en tu carta?", q_retro: "¿Cuál de estos planetas está retrógrado en tu carta?", q_sunmoon: "¿Qué aspecto forman tu Sol y tu Luna?", noAspect: "Ninguno mayor",
    ex_sign: "Tu {P} está a {d} de {S}.", ex_house: "Tu {P} está en la casa {n}: {dom}.", ex_ruler: "Tu Ascendente está en {S}, regido por {P}.", ex_element: "Contando los planetas personales y el Ascendente, predomina el {E}.", ex_retro: "{P} estaba retrógrado cuando naciste.", ex_sunmoon: "Tu Sol y tu Luna están a {d} de distancia." };
  U.blindUI = { title: "¿Te reconoces a ciegas?", intro: "Verás 3 descripciones por ronda: una corresponde a tu carta y las otras dos a signos al azar. Elige la que más te describe sin pensar en signos. Al final verás si aciertas más de lo que daría el azar (1 de cada 3).", start: "Empezar", round: "Ronda {i} de {n} · {P}", pick: "Esta me describe", reveal: "Era tu {P} en {S}.", missed: "Elegiste {S}; tu {P} está en {S2}.", result: "Elegiste tu propia descripción {h} de {n} veces. Por azar se esperarían unas {e}.", p: "Probabilidad de acertar tanto o más por puro azar: {p}.", again: "Repetir con otras descripciones", history: "Intentos anteriores", fine: "Un buen test es ciego: si ya conoces tus textos, el resultado está sesgado." };
  U.promptsUI = { title: "Preguntas para ti", today: "Hoy", chart: "De tu carta", saved: "Tus respuestas", empty: "Aún no has respondido ninguna." };
})();
