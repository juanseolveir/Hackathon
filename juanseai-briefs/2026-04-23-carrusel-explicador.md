# Context Engineering: el paso después del prompt
_Fecha: 2026-04-23 · Pilar: Explicador · Slides: 8_

## Por qué este tema hoy

Anthropic publicó esta semana su guía de context engineering en su blog de engineering, y el tweet de @AnthropicAI ("Most developers have heard of prompt engineering. But to get the most out of AI agents, you need context engineering.") está circulando entre developers. Es un concepto técnico real, timely, sin cobertura en español para audiencia no-técnica — exactamente el nicho de @juanseai.

---

## Slide 1 — Portada (hook)
**Título grande**: El prompt engineering ya no alcanza
**Subtítulo**: Hay un concepto que nadie te explicó en español todavía. Y cambia cómo entendés por qué la IA a veces falla.
**Etiqueta / eyebrow**: ◆ Explicador · contexto

---

## Slide 2 — El problema de arranque
**Título**: Cuando el agente se equivoca, ¿qué tiene la culpa?
**Cuerpo**: La respuesta automática es "escribí mejor el prompt". La mayoría de las veces, esa no es la causa real. El agente no falla porque le escribiste mal — falla porque no tenía la información correcta, en el momento correcto, en el formato correcto. Eso es un problema de contexto, no de prompt.

---

## Slide 3 — Qué es el prompt engineering
**Título**: Primero, lo que ya sabés: el prompt engineering
**Cuerpo**: Es el arte de escribirle bien a un modelo: qué pedirle, cómo pedirle que piense, en qué formato responder. Funciona muy bien para tareas simples y conversaciones cortas. Donde se rompe: cuando el modelo tiene que completar una tarea larga, usar herramientas, consultar documentos y mantener coherencia a lo largo de muchos pasos. Ahí el prompt solo no alcanza.

---

## Slide 4 — Qué es el context engineering
**Título**: Context engineering: lo que viene después
**Cuerpo**: Context engineering (ingeniería de contexto) es diseñar qué información tiene disponible el modelo cuando responde. No solo qué le decís — todo lo que puede "leer" antes de responder: instrucciones generales del sistema, historial de conversación, herramientas disponibles, documentos de referencia, y cuánto de todo eso entra en su ventana de atención. Anthropic lo define como "el conjunto de estrategias para curar el set óptimo de información durante la inferencia". (Fuente: blog engineering de Anthropic, 2026)

---

## Slide 5 — La analogía
**Título**: La diferencia en una imagen
**Cuerpo**: Prompt engineering es aprender a hacer buenas preguntas.
Context engineering es preparar toda la reunión antes de que empiece: quién participa, qué documentos tiene cada uno, cuál es el objetivo, qué información no necesita estar en la sala.
Sin esa preparación, las mejores preguntas caen en el vacío.

---

## Slide 6 — Context rot: el problema concreto
**Título**: Por qué la IA "se pone tonta" al final
**Cuerpo**: A medida que crece el contexto — la conversación se alarga, el agente acumula pasos — el modelo pierde precisión para recuperar información enterrada lejos en el historial. En benchmarks de "needle-in-a-haystack" se identificó el fenómeno: se llama context rot. Por eso los agentes bien diseñados no acumulan todo: eligen activamente qué queda y qué se descarta del contexto. (Fuente: hindsight.vectorize.io, 21 abril 2026)

---

## Slide 7 — Por qué te importa si no programás
**Título**: Por qué te importa aunque no escribas código
**Cuerpo**: Los productos de IA que ya usás corren sobre agentes. Cuando Perplexity te responde con fuentes frescas, cuando un asistente recuerda lo que hiciste la semana pasada, cuando una herramienta encadena varios pasos sin que vos pidas cada uno — hay context engineering debajo. Entender el concepto te ayuda a evaluar qué herramientas son bien diseñadas y a entender cuándo y por qué fallan.

---

## Slide 8 — Cierre + CTA
**Título**: El prompt es la punta del iceberg
**Cuerpo**: Lo que hace que un agente de IA funcione bien es en gran parte invisible: instrucciones del sistema, herramientas, documentos, memoria. El prompt es la última capa. Esta semana Anthropic dijo explícitamente en su blog: para aprovechar agentes de IA, necesitás context engineering, no solo prompt engineering.
**CTA**: ¿Usás agentes o herramientas que los usan? Dejame saber en comentarios — cubrimos en detalle lo que más necesiten.

---

## Caption del post IG

Hay un cambio de mentalidad que nadie te explicó todavía en español: el prompt engineering ya no es suficiente.

Desde mediados de 2025, la industria empezó a hablar de context engineering — la disciplina de decidir qué información tiene disponible el modelo al responder. No es solo qué le decís: es todo lo que puede "leer" antes de contestar. Esta semana Anthropic publicó su guía sobre el tema en su blog de engineering.

La diferencia importa porque el prompt engineering opera en un solo intercambio. El context engineering abarca todo: instrucciones generales, historial de conversación, herramientas disponibles, documentos de referencia y los límites de la ventana de atención del modelo.

Y hay un problema concreto cuando esto no se gestiona bien: context rot. A medida que crece el contexto, el modelo pierde precisión para recuperar información que quedó lejos en el historial. Los agentes bien diseñados gestionan esto activamente.

Si usás herramientas de IA en tu trabajo, este carrusel es para vos. Guardalo.

## Hashtags

#contextengineering #iaaplicada #aiespanol #agentesIA #inteligenciaartificial #ia #prompting

---

## Alternativa 2 (no elegida)

**Agentes de IA vs chatbots: la diferencia que nadie explica bien.** Ángulo: el 65% de las organizaciones experimenta con agentes de IA en 2026, pero menos del 25% los tiene funcionando en producción (dato: IBM 2026 Guide to AI Agents). La confusión entre chatbot (responde preguntas) y agente (completa tareas de múltiples pasos de forma autónoma) es el obstáculo principal. Queda abajo porque el tema de agentes como concepto general ya tiene bastante cobertura en inglés y en español. Context engineering es más específico y con el blog de Anthropic de esta semana tiene más anclaje editorial para hoy.

## Alternativa 3 (no elegida)

**Context rot: por qué los modelos se "ponen tontos" al final de conversaciones largas.** Ángulo: todos lo experimentaron pero nadie sabe cómo se llama. Cuando le preguntás algo a un modelo después de muchos mensajes y parece que "no recuerda" el inicio de la conversación, estás viendo context rot. Más relatable que context engineering pero más limitado: se explica solo y no conecta con acciones que el usuario pueda tomar. Context engineering lo incluye y va más lejos, así que es mejor candidato para el formato explicador de 8 slides.

## Fuentes

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Anthropic Engineering Blog, 2026
- [@AnthropicAI en X](https://x.com/AnthropicAI/status/1973098580060631341) — tweet de lanzamiento del blog post, 2026
- [Why AI Agents Lose Context, and How Hindsight Fixes It](https://hindsight.vectorize.io/guides/2026/04/21/guide-why-ai-agents-lose-context-and-how-hindsight-fixes-it) — Hindsight / Vectorize, 21 abril 2026
- [The 2026 Guide to AI Agents](https://www.ibm.com/think/ai-agents) — IBM, 2026 (para dato de adopción en Alternativa 2)
