# Metrics — datos crudos de performance @juanseai

Data append-only generada por el trigger `juanseai-metrics-collector` (diario 07:00 AR).

## Archivos

- **`posts.jsonl`** — 1 línea por `(media_id, date_pulled)`. Snapshot diario de cada post de los últimos 30 días. Permite ver evolución de métricas post-publicación (un reel sigue creciendo días después).
- **`account-daily.jsonl`** — 1 línea por día. Métricas a nivel cuenta: followers, reach, profile visits, etc.
- **`post-links.json`** — diccionario `{ media_id: { script_date, guion_n, pilar, formula, driver, caption_similarity } }` generado por el analyst cuando matchea un post IG con un script nuestro (fuzzy matching por caption + fecha).

## Formato `posts.jsonl`

```json
{"media_id": "18044673371703564", "date_pulled": "2026-05-01", "posted_at": "2026-04-25T15:30:00+00:00", "media_type": "VIDEO", "media_product_type": "REELS", "permalink": "https://www.instagram.com/reel/...", "caption": "...", "metrics": {"views": 12043, "reach": 9800, "likes": 340, "comments": 28, "shares": 140, "saved": 62, "total_interactions": 570, "ig_reels_avg_watch_time": 8200, "ig_reels_video_view_total_time": 98700000, "reels_skip_rate": 0.42}}
```

## Formato `account-daily.jsonl`

```json
{"date": "2026-04-25", "followers": 1820, "reach": 24500, "profile_links_taps": 42, "accounts_engaged": 1250, "total_interactions": 1890, "views": 38200, "follows_and_unfollows": 12}
```

## Nota sobre sample size

Con ~5 reels/semana, a los 30 días tenés ~20 data points. Es ruido estadístico, no dataset de ML. El analyst reporta **señal temprana**, no patrones probados.

## Nota sobre estabilización

Un Reel sigue creciendo 5-7 días después de publicado. Snapshots diarios permiten ver esa curva. El analyst solo usa posts con **≥7 días** de antigüedad para sus conclusiones.
