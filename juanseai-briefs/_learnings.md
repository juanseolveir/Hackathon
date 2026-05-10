# Learnings @juanseai — estrategia de contenido

> Mantenido por el trigger `juanseai-performance-analyst`. Leído por `juanseai-reels-scripts` cada día.

**Última actualización:** 2026-05-10 · Semana 2026-19 · Muestra: 11 posts analizables (9 con métricas completas, 2 sin insights)

---

## Patrones ganadores (doblar apuesta esta semana)

- **Retención alta (avg_watch ≥ 15s): señal temprana de alto rendimiento.** Los 2 posts con mayor watch time (17.2s y 16.4s) son el #2 y #3 del ranking. No sabemos el pilar/fórmula porque son contenido pre-scripts, pero el patrón es claro: si el espectador no skipea antes de los 15s, el score compuesto sube considerablemente. Hook que no revela el payoff antes de los 10s parece ser el driver.
- **Viralidad por share (n=1, señal muy temprana):** El post #1 tiene 18 shares — 78% de todos los shares del dataset. Eso solo disparó un score de 9.1 (el resto del top está entre 1.3 y 1.7). No podemos identificar la fórmula exacta, pero los contenidos que generan el impulso "mandáselo a alguien" son los de mayor impacto relativo. Priorizar Driver: Controversia o Utilidad urgente.

## Patrones perdedores (evitar)

- **avg_watch < 9s = skip masivo.** Los 3 posts del bottom tienen avg_watch entre 7.6s y 7.9s. Sin excepción. Hooks que resuelven demasiado rápido o que no generan tensión en los primeros 3s parecen ser la causa.
- **Contenido sin caption o sin contexto visible:** el 91% de los posts analizados son unlinked (10/11). No podemos aprender de pilar/fórmula/driver porque la mayoría fue posteado antes de que empezaran los scripts. El solo hecho de tener caption y pilar definido es un paso hacia la medición real.

## Experimento a correr esta semana

**Hipótesis:** Los reels con hook que no revela el payoff en los primeros 3s (formato "algo pasó pero no te digo qué todavía") van a superar el avg_watch de 12s, que es el umbral que separa el top del bottom en el dataset actual.

**Cómo testearlo:** Al menos 2 de los 3 scripts diarios esta semana deben usar un hook que genere tensión sin resolverla antes de los 3s. Registrar avg_watch en el próximo weekly y comparar contra la media actual de 11.1s. El único post con pilar asignado (Demo × Contrarian, posteado 2026-04-26) tiene 17 likes y 1 comment pero aún sin datos de views/watch por insights=off — validar esa combinación cuando tengamos datos.

## Instrucciones para el generator

- De los 3 scripts del día: 1 en formato Demo × Contrarian (único combo con match comprobado hasta ahora), 1 con driver de Controversia o Utilidad urgente (hipótesis share-viral), 1 libre (distinto pilar Y fórmula).
- Evitar hooks que resuelven en los primeros 3s — el avg_watch bajo mata el score más que cualquier otra variable.
- Seguir reglas base: voseo, 3s hook check, zero AI-ese, zero listicles.
- **Nota de datos:** El collector tiene insights=off desde al menos 2026-04-27. Sin views/shares/saves/avg_watch reales, el ranking de esta semana usa métricas del snapshot 2026-04-24. Cuando insights vuelva a estar activo, el análisis va a ser considerablemente más preciso.
