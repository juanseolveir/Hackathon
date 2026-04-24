# Reports — informes semanales del performance analyst

Archivos `weekly-YYYY-WW.md` generados por el trigger `juanseai-performance-analyst` (domingos 09:00 AR).

Cuando se pushea un archivo a `reports/weekly-*.md`, el workflow de GitHub Actions `send-scripts-email.yml` renderiza el markdown a HTML y lo envía por email (Resend) a jolveira@udesa.edu.ar.

## Schema esperado

```markdown
# @juanseai · Weekly report · YYYY-WW

**Rango:** YYYY-MM-DD a YYYY-MM-DD · **Posts analizados:** N

## TL;DR

2-3 bullets con los hallazgos más accionables de la semana.

## Top 3 posts

Los 3 reels con mejor performance (ranking compuesto: views + saves + shares + watch time).

### 1. [caption corto]
- **Link:** permalink
- **Pilar / Fórmula / Driver:** ...
- **Métricas:** views, reach, likes, saves, shares, avg_watch_time
- **Hipótesis de por qué funcionó:** ...

## Bottom 3 posts
[idem, underperformers]

## Patrones ganadores
Señales tempranas de qué está funcionando (pilar × fórmula × hook × duración).

## Patrones perdedores
Qué evitar la semana que viene.

## Experimento propuesto
Una hipótesis concreta a probar en los guiones de la semana siguiente.

## Métricas de cuenta
- Seguidores: X (Δ vs semana anterior)
- Reach total, profile visits, accounts engaged

## Notas
- Muestra chica (~N posts con ≥7 días). Tratar como señal temprana.
- Posts con <7 días no se incluyen (métricas aún no estabilizadas).
```

## Qué NO va acá

- Reportes intradiarios — el analyst corre solo semanalmente.
- Data cruda — va en `metrics/`.
- Conclusiones accionables para el generator — van en `juanseai-briefs/_learnings.md`.
