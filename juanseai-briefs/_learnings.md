# Learnings @juanseai — estrategia de contenido

> Mantenido por el trigger `juanseai-performance-analyst`. Leído por `juanseai-reels-scripts` cada día.

**Última actualización:** 2026-04-26 · Semana 2026-17 · Muestra: 8 posts analizables (7 con métricas completas, 1 sin score)

---

## Patrones ganadores (doblar apuesta esta semana)

- **Retención alta > views altos:** los dos posts top tienen avg_watch_time de 17.2s y 16.4s respectivamente, más del doble del grupo bajo (~7.6-7.7s). El score compuesto penaliza fuerte a los reels cortos en atención. Señal temprana, n=2.
- **Shares sobre saves:** saves = 0 en toda la muestra. El único diferenciador de engagement distribuido son los shares (máx = 2). Contenido que genera la conducta "mandárselo a alguien" está claramente por encima.

> ⚠ Todos los posts de esta muestra son anteriores a 2026-04-24 y fueron publicados manualmente (sin scripts nuestros). No hay data de pilar/fórmula/driver. Los patrones son de comportamiento bruto, no de formato.

## Patrones perdedores (evitar)

- **Skip rate >65% + shares=0:** los tres posts del bottom tienen skip rate entre 65.5% y 66.2% y cero shares. Métricas bajas en ambas dimensiones simultáneamente → score cercano a 0. El algoritmo no los distribuye y los usuarios no los comparten.
- **Views sin retención:** el post con más views (247) quedó en #3, superado por posts con menos views pero más watch time. Views sin retención no convert en score ni en distribución real.

## Experimento a correr esta semana

**Hipótesis:** hooks que no revelan el payoff en los primeros 3s (pregunta abierta o revelación incompleta) van a generar avg_watch_time >12000ms y outperformar el promedio del grupo en score compuesto.

**Base empírica:** los dos posts con mayor score (#1 y #4) tienen avg_watch de 17162ms y 16352ms. El skip rate de esos posts (51.5% y 44.9%) está significativamente por debajo del grupo (media ~60%). La diferencia entre "ver 7 segundos" y "ver 16 segundos" en un reel de ~20s es la diferencia entre score 0.017 y score 3.344.

**Cómo testearlo:** de los 3 scripts diarios, al menos 1 debe usar un hook que no resuelva la tensión hasta los 8-12s. Formatos candidatos basados en scripts ya generados: Demo × Time ("en 30 segundos te muestro algo que..."), Advertencia × Contrarian ("todos te dicen X, pero nadie te cuenta Y"). Revisar avg_watch en el próximo weekly.

## Instrucciones para el generator

- De los 3 scripts del día: 1 en patrón ganador (hook que no resuelve en 3s, tension hasta los 10s+), 1 experimento según hipótesis (Demo×Time o Advertencia×Contrarian), 1 libre (distinto pilar Y fórmula al experimento).
- Evitar: hooks que dan el take completo en 3s (el viewer no tiene razón para quedarse).
- Evitar: contenido que no tenga un momento "mandáselo a alguien" — algo útil, sorprendente o que identifique al viewer.
- Seguir reglas base: voseo, 3s hook check, zero AI-ese, zero listicles.
- Saves siguen en 0 — ningún contenido está generando guardados. Probá incluir un recurso concreto (lista, guía, comparación) que justifique guardar.
