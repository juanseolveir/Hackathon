# Learnings @juanseai — estrategia de contenido

> Mantenido por el trigger `juanseai-performance-analyst`. Leído por `juanseai-reels-scripts` cada día.

**Última actualización:** 2026-05-03 · Semana 2026-18 · Muestra: 10 posts analizables (1 linked a scripts, 9 unlinked/pre-scripts)

---

## Contexto de la muestra

La gran mayoría de posts analizados fueron publicados antes de que empezara el sistema de scripts (2026-04-24). Solo 1 de 10 tiene match con un guión nuestro. El análisis de pilar/fórmula/driver no tiene validez estadística con n=1. Lo que sí se puede leer son señales de comportamiento (watch time, sharing) sobre la base pre-scripts.

**⚠ Problema técnico activo:** el colector perdió acceso a Insights de Instagram a partir del 2026-04-25 (views, reach, shares, saves, avg_watch_time aparecen como null desde esa fecha). Los scores y rankings de esta semana se calcularon con el snapshot del 2026-04-24 (único con métricas completas). Restaurar el acceso a Insights es la prioridad operativa más urgente antes de que el análisis sea accionable.

---

## Patrones ganadores (doblar apuesta esta semana)

- **Pendiente — muestra insuficiente para afirmar patrones por pilar/fórmula.** Solo 1 post linked (Demo × Contrarian: Project Deal), que quedó #2 por likes. No es suficiente para concluir que Demo × Contrarian gana; puede ser el tema (Anthropic + dato incómodo) o la ejecución.
- **Señal temprana en watch time (base pre-scripts, n=9):** los posts con avg_watch >14s tuvieron scores 2–3x superiores al resto. El umbral de ~14s en un reel de 20-24s parece separar el tercio superior del resto. La hipótesis es que el hook no-resolutivo mantiene a la gente más tiempo.

## Patrones perdedores (evitar)

- **Videos con avg_watch <10s:** los 3 posts de menor score tienen todos avg_watch entre 7.6s y 7.9s. Algo rompe la retención antes de los 8 segundos. Sin captions disponibles no podemos identificar el patrón de contenido, pero la señal es clara: si el hook no retiene, todo lo demás colapsa.
- **Posts sin caption:** 7 de los 9 posts pre-scripts tienen caption null en el JSONL. Esto hace imposible el matching y el análisis de contenido. Todos los posts nuevos deben tener caption cargada en el momento de publicar.

## Experimento a correr esta semana

**Hipótesis:** un hook Contrarian con dato numérico revelado recién en el segundo tercio del video (10-13s) va a retener por encima de los 14s de avg_watch que es el umbral de los posts top.

**Cómo testearlo:** 1 de los 3 scripts diarios durante 5 días usando estructura Advertencia × Contrarian con payoff numérico fuerte recién a los 10-13s ("todos te dicen X, Berkeley midió que pasa Y"). Medir avg_watch_time cuando el colector recupere Insights. Revisar en el próximo weekly.

## Distribución base observada (referencia mientras llega más data de scripts)

| Grupo | avg_watch | Score prom | n |
|---|---|---|---|
| Top tercil | 12.4–17.2s | 2.72 | 3 |
| Mid tercil | 8.9–14.0s | 0.66 | 3 |
| Bottom tercil | 7.6–7.9s | 0.24 | 3 |

El único post linked (Demo × Contrarian, Project Deal) tiene 16 likes (top 1 por likes), sin score comparable por falta de Insights.

## Instrucciones para el generator

- De los 3 scripts del día: 1 en el experimento propuesto (Advertencia × Contrarian, payoff numérico tardío), 1 Demo × Contrarian (replicar la estructura de Project Deal que tuvo buen engagement), 1 libre (pilar distinto, fórmula distinta).
- Evitar: hooks que dan el take completo en los primeros 3s. El data sugiere que videos con hook rápido tienen watch times en el rango 7-8s.
- Evitar: contenido sin un momento "mandáselo a alguien" — algo que identifique al viewer o revele algo incómodo.
- Todos los guiones deben incluir Caption Instagram completa — es crítico para el matching post↔script en el análisis.
- Saves siguen en 0 — intentar incluir un recurso concreto (checklist, tabla, comparación) que justifique guardar.
- Seguir reglas base: voseo, 3s hook check, zero AI-ese, zero listicles.
