# @juanseai Content Engine

Rutina automática que genera copy de alta calidad para Instagram (@juanseai) de Lunes a Viernes a las 7:30 AR.

## Cómo funciona

- **Lun · Reel** — News recap semanal
- **Mar · Carrusel** — Tool spotlight
- **Mié · Reel** — Prompt / Workflow del día
- **Jue · Carrusel** — Explicador
- **Vie · Reel** — Impacto / regulación

Cada ejecución:
1. Lee `ROUTINE.md` (la especificación completa).
2. Lee `../juanseai-branding.md` (fuente de verdad de voz).
3. Investiga en la web (fuentes priorizadas + creators monitoreados).
4. Genera el archivo del día con copy listo para usar.
5. Actualiza la memoria (`_topics-covered.md`, `_tools-covered.md`, `_prompts-library.md`).

## Archivos

- `ROUTINE.md` — spec que ejecuta el scheduled agent cada día
- `_topics-covered.md` — memoria de temas (evita repetición 30 días)
- `_tools-covered.md` — memoria de herramientas cubiertas (evita repetición 60 días)
- `_prompts-library.md` — biblioteca acumulativa de prompts
- `YYYY-MM-DD-{reel|carrusel}-{pilar}.md` — un archivo por día

## Editar la rutina

Todo lo que hace el engine vive en `ROUTINE.md`. Editá ese archivo — en el próximo run lo agarra automáticamente.

Cambios típicos:
- Agregar/sacar creators a monitorear → sección "Fase 1 — Investigación"
- Ajustar el tono → sección "Fase 2 — Voz y guardrails"
- Cambiar el schema de salida → sección "Schemas de salida"

## Pausar temporalmente

Para pausar la rutina: usá el skill `schedule` o la UI de scheduled agents y deshabilitá el trigger `juanseai-content-engine`.

## Revisión humana obligatoria

El engine **nunca publica**. Siempre genera archivo `.md` local para que lo revises antes de llevarlo a IG.
