# @juanseai · 3 guiones del día · 2026-04-25

## Contexto del día

Tres novedades que importan hoy en IA: Hugging Face liberó ml-intern, un agente open-source que entrena modelos solo y ya batió a Claude Code en razonamiento científico; un paper en arXiv mostró que con un poema podés saltearte las defensas de Gemini 2.5 Pro el 100% de las veces; y Google publicó código abierto de un agente con memoria persistente que tira el vector DB a la basura y guarda todo en SQLite.

### Learnings aplicados

- **Patrón ganador usado:** Pendiente — muestra insuficiente
- **Experimento de la semana:** Pendiente — muestra insuficiente

### Fuentes consultadas

- [Hugging Face Releases ml-intern: An Open-Source AI Agent that Automates the LLM Post-Training Workflow — MarkTechPost](https://www.marktechpost.com/2026/04/21/hugging-face-releases-ml-intern-an-open-source-ai-agent-that-automates-the-llm-post-training-workflow/)
- [Hugging Face launches ML Intern, AI agent that beats Claude Code on reasoning — EdTech Innovation Hub](https://www.edtechinnovationhub.com/news/hugging-face-releases-ml-intern-the-ai-agent-teaching-itself-to-beat-claude-code-on-scientific-reasoning)
- [Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in LLMs — arXiv](https://arxiv.org/abs/2511.15304)
- [AI chatbots can be tricked with poetry to ignore their safety guardrails — Engadget](https://www.engadget.com/ai/ai-chatbots-can-be-tricked-with-poetry-to-ignore-their-safety-guardrails-192925244.html)
- [Researchers Use Poetry to Jailbreak AI Models — Dark Reading](https://www.darkreading.com/threat-intelligence/researchers-use-poetry-to-jailbreak-ai-models)
- [Google PM open-sources Always On Memory Agent, ditching vector databases — VentureBeat](https://venturebeat.com/orchestration/google-pm-open-sources-always-on-memory-agent-ditching-vector-databases-for)
- [generative-ai/gemini/agents/always-on-memory-agent — GitHub (GoogleCloudPlatform)](https://github.com/GoogleCloudPlatform/generative-ai/tree/main/gemini/agents/always-on-memory-agent)

---

## Guión 1 — Una IA entrenó otra IA mientras dormías · DEMO

**Pilar:** Demo · **Fórmula:** List/Number · **Driver:** Awe · **Duración:** 22s

### Hook (0-3s)

> "Esto es un agente que mejora una IA en 10 horas, sin que nadie lo mire. Te muestro qué hizo."

### Payoff (3-15s)

- **3-5s:** "Hugging Face liberó esta semana ml-intern. Es open source y corre solo."
- **5-8s:** "Le dieron un modelo base, Qwen3 1.7B. En GPQA, el examen de razonamiento científico, sacaba 10%."
- **8-12s:** "El agente leyó papers de arXiv, eligió datasets, escribió el script de entrenamiento y se autocorregió cuando los benchmarks bajaban."
- **12-15s:** "En menos de 10 horas lo subió a 32%. Y +60% en HealthBench. Sin un humano en el loop."

### CTA (15-25s)

> "El cuello de botella ya no es la GPU. Es el ingeniero. Guardalo, esto cambia cómo se entrenan modelos chicos."

### Visual notes

- **0-3s:** terminal en pantalla negra, cursor parpadeando, comando `ml-intern run`. Texto sobre la imagen: "10 horas. cero humanos."
- **3-5s:** logo de Hugging Face y al lado el texto "open source" en grande.
- **5-8s:** gráfico simple: barra al 10% en gris.
- **8-12s:** captura tipo timeline rápido de tres pasos: "lee arXiv → busca datasets → entrena → evalúa → corrige". Loop visual.
- **12-15s:** la barra del 10% sube a 32%. Aparece otra barra de HealthBench que se llena hasta +60%. Números en blanco grande.
- **15-25s:** corte a tu cara. Sin gráficos.

### Caption Instagram

Hugging Face liberó ml-intern, un agente open-source que automatiza todo el post-training de un modelo. Le dieron Qwen3 1.7B con 10% en GPQA y el agente solo leyó papers, eligió datasets, entrenó, vio los resultados, diagnosticó fallas y volvió a entrenar. En menos de 10 horas el modelo estaba en 32%. Y +60% en HealthBench. Esto es nuevo: no es un asistente que te ayuda a entrenar — es un agente que entrena.

### Hashtags

`#HuggingFace` `#IA` `#LLM` `#AIAgents` `#OpenSource`

### Línea compartible

> "Una IA leyó papers, eligió datasets y entrenó otra IA mientras vos dormías. En 10 horas la mejoró 22 puntos."

---

## Guión 2 — Un poema rompe a Gemini el 100% de las veces · ADVERTENCIA

**Pilar:** Advertencia · **Fórmula:** Question · **Driver:** Identidad · **Duración:** 23s

### Hook (0-3s)

> "¿Sabías que con un poema podés saltearte las defensas de la IA más cara de Google? Lo midieron."

### Payoff (3-15s)

- **3-5s:** "Un paper publicado este mes probó algo simple. Tomaron 1.200 pedidos peligrosos y los reescribieron en verso."
- **5-8s:** "Con prosa normal, las IAs los rechazan. En verso, se rompen."
- **8-12s:** "Gemini 2.5 Pro: aceptó el 100%. DeepSeek: arriba del 95%. Promedio entre 25 modelos frontier: 62%."
- **12-15s:** "¿Por qué? El filtro busca palabras clave. La metáfora las esquiva."

### CTA (15-25s)

> "Si conectás un agente a tu negocio, lo que te protege no son solo los guardrails del modelo. Mandáselo al que decide qué IA usás."

### Visual notes

- **0-3s:** primer plano de un libro abierto con un poema, pero en lugar de tinta, líneas de código rojas saliendo entre los versos. Texto encima: "100%."
- **3-5s:** dos columnas en pantalla. Izquierda: "prosa" con un pedido tachado en rojo. Derecha: "verso" con el mismo pedido en líneas cortas, sin tachar.
- **5-8s:** logos de Gemini, DeepSeek, GPT, Claude alineados. Tildes y cruces apareciendo al lado de cada uno: Gemini cruz roja, DeepSeek cruz roja, los demás tildes verdes parciales.
- **8-12s:** número gigante "100%" sobre el logo de Gemini 2.5 Pro. Después "62%" como promedio de los 25.
- **12-15s:** gráfico simple del filtro: una palabra clave (ej. "instrucción") rodeada de palabras del poema, una flecha la esquiva.
- **15-25s:** vos a cámara, fondo neutro.

### Caption Instagram

Un paper de arXiv publicado este mes mostró que reescribir pedidos peligrosos en verso hace que las IAs los acepten mucho más. Tomaron 1.200 pedidos del benchmark estándar y los pasaron a poesía: el éxito promedio del jailbreak subió hasta 18 veces sobre la línea base. Gemini 2.5 Pro aceptó el 100%. DeepSeek arriba del 95%. Claude Haiku 4.5 quedó en 10% y GPT-5 Nano en 0%. La defensa no es la misma en cada modelo. Eso importa cuando elegís cuál usar para algo serio.

### Hashtags

`#AISecurity` `#LLM` `#Jailbreak` `#IA` `#PromptInjection`

### Línea compartible

> "Le escribís un poema y Gemini 2.5 Pro hace lo que vos quieras. El 100% de las veces."

---

## Guión 3 — Tu agente IA no necesita vector database · TUTORIAL

**Pilar:** Tutorial · **Fórmula:** Mistake · **Driver:** Utilidad · **Duración:** 22s

### Hook (0-3s)

> "Si pensás que tu agente IA necesita una vector database para tener memoria, te están vendiendo algo que no necesitás."

### Payoff (3-15s)

- **3-5s:** "Google liberó esta semana el Always-On Memory Agent. Open source, en su repo de GitHub."
- **5-8s:** "Cero vector DB. Cero embeddings. La memoria se guarda como texto estructurado en SQLite."
- **8-12s:** "Un proceso corre 24/7 en segundo plano: lee, piensa, escribe, y cada 30 minutos consolida lo nuevo."
- **12-15s:** "El modelo es Gemini 3.1 Flash-Lite, el más barato de la familia. Corre en una laptop."

### CTA (15-25s)

> "Si estás armando algo con memoria persistente, antes de pagar un Pinecone, mirá este repo. Te dejo el link."

### Visual notes

- **0-3s:** dos tarjetas en pantalla, una grande y rosada que dice "Vector DB · USD/mes" y al lado un sticker rojo "no". Tu cara chica en la esquina.
- **3-5s:** logo de Google. Pantalla muestra el repo en GitHub: `GoogleCloudPlatform/generative-ai/.../always-on-memory-agent`. Resaltar la palabra "MIT".
- **5-8s:** comparación visual: a la izquierda un esquema con "embeddings → vector DB → query" y todo tachado. A la derecha "SQLite → texto estructurado → LLM lee" con tilde verde.
- **8-12s:** loop animado de tres pasos: "lee → piensa → escribe". Reloj que marca cada 30 minutos en el costado.
- **12-15s:** logo de Gemini 3.1 Flash-Lite. Texto: "modelo más barato de la familia."
- **15-25s:** corte a tu cara. Mostrás la URL del repo en pantalla por 2s.

### Caption Instagram

Google PM Shubham Saboo subió esta semana el Always-On Memory Agent al repo de Google Cloud Platform. Licencia MIT. La idea es contraintuitiva: nada de vector database, nada de embeddings. La memoria se guarda como texto estructurado en SQLite y un LLM la lee y la escribe directo. Un proceso de fondo consolida cada 30 minutos. Soporta texto, imagen, audio, video y PDF. Si estás armando algo que necesite memoria persistente, antes de armar la infra de vectores, probá esto.

### Hashtags

`#Google` `#IA` `#AIAgents` `#OpenSource` `#LLM`

### Línea compartible

> "Memoria persistente para tu agente IA, sin vector DB. Solo SQLite y un LLM. Open source de Google."
