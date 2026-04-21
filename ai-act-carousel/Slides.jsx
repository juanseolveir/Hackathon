/* global React, Brand, Wordmark, Avatar, Eyebrow, Tag, Circled, Squiggled, PostFrame */

// Shared footer for the carousel — compact, consistent
function CarouselFooter({ index, total = 9, invert = false, next = true }) {
  const fg = invert ? Brand.paper : Brand.ink;
  const muted = invert ? Brand.blue100 : Brand.slate500;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar size={44} variant={invert ? 'ink' : 'brand'} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <Wordmark color={fg} dot={invert ? '#CFEA1A' : Brand.blue} size={22} />
          <span style={{ fontSize: 14, color: muted, fontWeight: 500 }}>@juanseai · AI Act, sin humo</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: muted, fontWeight: 600, letterSpacing: '0.04em' }}>
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        {next && (
          <span style={{ fontSize: 18, color: invert ? '#CFEA1A' : Brand.blue, fontWeight: 700 }}>
            desliza →
          </span>
        )}
      </div>
    </div>
  );
}

// Little dotted EU flag hint — 12 stars ring, soft
function EUStars({ size = 140, color = '#CFEA1A' }) {
  const stars = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = size * 0.38;
    const cx = size / 2 + Math.cos(a) * r;
    const cy = size / 2 + Math.sin(a) * r;
    stars.push(
      <g key={i} transform={`translate(${cx} ${cy}) scale(0.5)`}>
        <path d="M 0,-10 L 2.9,-3.1 L 10,-3.1 L 4.1,1.2 L 6.2,8.1 L 0,4 L -6.2,8.1 L -4.1,1.2 L -10,-3.1 L -2.9,-3.1 Z" fill={color}/>
      </g>
    );
  }
  return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{stars}</svg>;
}

/* ====================================================================== */
/* SLIDE 1 — Portada                                                      */
/* ====================================================================== */
function Slide01() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.blue}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08,
        backgroundImage: 'radial-gradient(#F6F8FC 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} />
      <div style={{ position: 'absolute', top: 72, left: 72, display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar size={44} variant="ink" />
        <Wordmark color={Brand.paper} dot="#CFEA1A" size={22} />
      </div>
      <div style={{ position: 'absolute', top: 72, right: 72 }}>
        <EUStars size={120} color="#CFEA1A" />
      </div>

      <div style={{ position: 'absolute', inset: '220px 72px 72px', display: 'flex', flexDirection: 'column', color: Brand.paper }}>
        <div style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 15, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#CFEA1A', marginBottom: 28 }}>
          ◆ AI ACT · Unión Europea
        </div>
        <h1 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 104, lineHeight: 1.02, letterSpacing: '-0.028em', color: Brand.paper, margin: 0 }}>
          La IA <em style={{ fontStyle: 'italic', fontWeight: 500, color: '#D9E4F8' }}>ya</em> tiene<br/>
          reglas en <Squiggled color="#CFEA1A">Europa</Squiggled>.
        </h1>
        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 34, lineHeight: 1.28, color: '#D9E4F8', margin: '36px 0 0', fontWeight: 400, maxWidth: 880 }}>
          Lo duro no es la ley.<br/>
          Es el calendario.<br/>
          Y 2026 es el año que<br/>
          cambia todo.
        </p>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: 'rgba(246,248,252,0.08)', border: '1px solid rgba(207,234,26,0.5)', borderRadius: 999, alignSelf: 'flex-start', marginBottom: 44 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#CFEA1A', boxShadow: '0 0 12px #CFEA1A' }} />
          <span style={{ color: Brand.paper, fontSize: 18, fontWeight: 600, letterSpacing: '0.04em' }}>
            9 slides · sin jerga, sin humo
          </span>
        </div>

        <CarouselFooter index={1} invert />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 2 — Hecho clave: ya es ley                                        */
/* ====================================================================== */
function Slide02() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>◆ empecemos por lo básico</Eyebrow>
        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 74, lineHeight: 1.06, letterSpacing: '-0.025em', color: Brand.ink, margin: '20px 0 0' }}>
          El AI Act <Circled>no viene</Circled>.<br/>
          Ya llegó.
        </h2>
        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 24, color: Brand.slate700, lineHeight: 1.5, margin: '22px 0 0', maxWidth: 820 }}>
          Es la primera ley integral de IA del mundo. Y está firmada hace más de un año.
        </p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 24, padding: '28px 32px', boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
            <div style={{ width: 6, alignSelf: 'stretch', background: Brand.blue, borderRadius: 999 }} />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: Brand.slate500, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Entró en vigor</div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 52, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: 6 }}>
                Agosto <span style={{ color: Brand.blue }}>2024</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 24, padding: '28px 32px', boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
            <div style={{ width: 6, alignSelf: 'stretch', background: '#CFEA1A', borderRadius: 999 }} />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: Brand.slate500, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pero ojo</div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 42, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: 6 }}>
                Se aplica por etapas.
              </div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 22, color: Brand.slate700, marginTop: 10, lineHeight: 1.4 }}>
                Hoy solo rige una parte. El resto entra entre 2025 y 2027.
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <CarouselFooter index={2} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 3 — Lo que YA rige                                                */
/* ====================================================================== */
function Slide03() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
          <Eyebrow>▸ lo que ya rige · 2025</Eyebrow>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: '#DCF2E5', color: '#1F8A5B', borderRadius: 999, fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Manrope' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#1F8A5B' }} />
            En vigor
          </span>
        </div>

        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 74, lineHeight: 1.04, letterSpacing: '-0.025em', color: Brand.ink, margin: 0 }}>
          Hay cosas que<br/>
          en Europa <Squiggled>ya no se pueden</Squiggled>.
        </h2>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            {
              title: 'Usos directamente prohibidos',
              body: 'Scoring social al estilo chino, manipulación psicológica, reconocimiento de emociones en el trabajo, vigilancia biométrica masiva en la calle.'
            },
            {
              title: 'Obligación de alfabetizar en IA',
              body: 'Las organizaciones que la usan tienen que garantizar que su gente entienda qué hace, qué riesgos trae y cuándo desconfiar.'
            },
          ].map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: 22, background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 22, padding: '26px 28px', boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: Brand.ink, color: '#CFEA1A', display: 'grid', placeItems: 'center', flexShrink: 0, fontWeight: 800, fontSize: 22, fontFamily: 'General Sans, Manrope' }}>
                ✓
              </div>
              <div>
                <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 28, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                  {it.title}
                </div>
                <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 20, color: Brand.slate700, lineHeight: 1.45, marginTop: 10 }}>
                  {it.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ marginBottom: 36, fontFamily: 'General Sans, Manrope', fontSize: 26, color: Brand.ink, fontWeight: 600, lineHeight: 1.3 }}>
          Esto ya no es <em>debate</em>. Es <Squiggled>derecho vigente</Squiggled>.
        </div>
        <CarouselFooter index={3} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 4 — 2025: modelos base                                            */
/* ====================================================================== */
function Slide04() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      {/* Timeline marker in upper right */}
      <div style={{ position: 'absolute', top: 64, right: 72, display: 'flex', alignItems: 'baseline', gap: 0 }}>
        <span style={{ fontFamily: 'General Sans, Manrope', fontWeight: 800, fontSize: 180, color: Brand.blue, letterSpacing: '-0.04em', lineHeight: 0.85, opacity: 0.08 }}>
          2025
        </span>
      </div>

      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>▸ lo que arranca · 2025</Eyebrow>
        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 68, lineHeight: 1.05, letterSpacing: '-0.025em', color: Brand.ink, margin: '20px 0 0', maxWidth: 880 }}>
          Ahora les toca a los <Circled>modelos grandes</Circled>.
        </h2>
        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 22, color: Brand.slate700, lineHeight: 1.5, margin: '22px 0 0', maxWidth: 820 }}>
          GPT, Claude, Gemini, Mistral. Los cerebros que están atrás de casi todas las apps de IA que usás.
        </p>

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { k: '01', t: 'Transparencia', d: 'Contar con qué datos se entrenaron y cómo funcionan por dentro.' },
            { k: '02', t: 'Gestión de riesgos', d: 'Evaluar qué puede salir mal antes de largarlo al mundo —no después.' },
            { k: '03', t: 'Trazabilidad', d: 'Registrar incidentes graves y tener controles contra el mal uso.' },
          ].map((it, i) => (
            <div key={i} style={{ background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 20, padding: '22px 24px', boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: Brand.slate500, fontWeight: 700, letterSpacing: '0.08em' }}>{it.k}</div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 24, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.015em', marginTop: 6, lineHeight: 1.2 }}>
                {it.t}
              </div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 17, color: Brand.slate700, lineHeight: 1.45, marginTop: 8 }}>
                {it.d}
              </div>
            </div>
          ))}
          <div style={{ background: Brand.ink, color: Brand.paper, border: '1px solid #0B1324', borderRadius: 20, padding: '22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#CFEA1A', fontWeight: 700, letterSpacing: '0.08em' }}>POR QUÉ IMPORTA</div>
            <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 19, fontWeight: 600, color: Brand.paper, lineHeight: 1.35, marginTop: 8 }}>
              Si el modelo de abajo cambia, cambia todo lo que está arriba. Apps, bots, asistentes.
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <CarouselFooter index={4} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 5 — 2026: el grueso                                               */
/* ====================================================================== */
function Slide05() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.ink}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(#F6F8FC 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* giant faded year */}
      <div style={{ position: 'absolute', bottom: -40, right: -20, fontFamily: 'General Sans, Manrope', fontWeight: 800, fontSize: 520, color: Brand.paper, opacity: 0.04, letterSpacing: '-0.05em', lineHeight: 0.85, pointerEvents: 'none' }}>
        2026
      </div>

      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column', color: Brand.paper }}>
        <div style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#CFEA1A' }}>
          ◆ el año que cambia todo
        </div>

        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 82, lineHeight: 1.02, letterSpacing: '-0.028em', color: Brand.paper, margin: '22px 0 0' }}>
          2026 es cuando<br/>
          el AI Act se<br/>
          <span style={{ color: '#CFEA1A' }}>siente</span> de verdad.
        </h2>

        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 22, color: '#D9E4F8', lineHeight: 1.5, margin: '22px 0 0', maxWidth: 860 }}>
          Entra el corazón de la ley: los sistemas de <b style={{ color: Brand.paper }}>"alto riesgo"</b>. Selección de personal, scoring crediticio, diagnóstico médico, decisiones judiciales.
        </p>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            'Documentar todo: datos, decisiones, errores conocidos.',
            'Supervisión humana real —no un "apretá ok" simbólico.',
            'Multas de hasta 35 millones de euros o 7% de la facturación global.',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, paddingBottom: 14, borderBottom: i < 2 ? '1px solid rgba(246,248,252,0.12)' : 'none' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: '#7FA3E4', fontWeight: 700, marginTop: 6, minWidth: 28 }}>0{i + 1}</span>
              <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 22, color: Brand.paper, lineHeight: 1.4, fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Key date callout */}
        <div style={{ background: '#CFEA1A', borderRadius: 22, padding: '22px 28px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 22 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 42, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.02em', lineHeight: 1 }}>
            02·08·26
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(11,19,36,0.2)' }} />
          <div>
            <div style={{ fontFamily: 'Manrope', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: Brand.ink, fontWeight: 700, opacity: 0.7 }}>Marcá la fecha</div>
            <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 24, color: Brand.ink, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 4 }}>
              2 de agosto de 2026
            </div>
          </div>
        </div>

        <CarouselFooter index={5} invert />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 6 — 2027                                                          */
/* ====================================================================== */
function Slide06() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>▸ y todavía queda 2027</Eyebrow>

        {/* Timeline strip */}
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'stretch', gap: 0, background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 22, overflow: 'hidden' }}>
          {[
            { y: '2024', s: 'En vigor' },
            { y: '2025', s: 'Prohibiciones + modelos base' },
            { y: '2026', s: 'Alto riesgo · el grueso' },
            { y: '2027', s: 'Sistemas integrados', active: true },
          ].map((it, i) => (
            <div key={i} style={{ flex: 1, padding: '22px 20px', background: it.active ? Brand.ink : 'transparent', color: it.active ? Brand.paper : Brand.ink, borderRight: i < 3 ? '1px solid #DDE3EC' : 'none', position: 'relative' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: it.active ? '#CFEA1A' : Brand.slate500 }}>
                {it.y}
              </div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 14, fontWeight: 600, marginTop: 6, color: it.active ? Brand.paper : Brand.slate700, lineHeight: 1.3 }}>
                {it.s}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 64, lineHeight: 1.06, letterSpacing: '-0.025em', color: Brand.ink, margin: '44px 0 0' }}>
          La última pieza<br/>
          entra en <Circled>2027</Circled>.
        </h2>

        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 24, color: Brand.slate700, lineHeight: 1.5, margin: '24px 0 0', maxWidth: 860 }}>
          IA embebida en productos que ya tienen su propia ley: autos, dispositivos médicos, juguetes, ascensores, maquinaria industrial. Ahí el plazo estira.
        </p>

        <div style={{ flex: 1 }} />

        <div style={{ padding: '24px 28px', background: Brand.white, border: `2px dashed ${Brand.blue}`, borderRadius: 22, marginBottom: 36 }}>
          <div style={{ fontFamily: 'Manrope', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: Brand.blue, fontWeight: 700 }}>
            en una frase
          </div>
          <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 28, fontWeight: 600, color: Brand.ink, lineHeight: 1.3, letterSpacing: '-0.015em', marginTop: 8 }}>
            La aplicación es gradual.<br/>
            La dirección es <Squiggled>inequívoca</Squiggled>.
          </div>
        </div>
        <CarouselFooter index={6} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 7 — Transparencia                                                 */
/* ====================================================================== */
function Slide07() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>◆ lo que vas a notar vos</Eyebrow>
        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 66, lineHeight: 1.04, letterSpacing: '-0.025em', color: Brand.ink, margin: '20px 0 0' }}>
          Se termina el<br/>
          "¿esto lo hizo <Circled>una persona</Circled>?".
        </h2>

        {/* Mock chat bubble with watermark */}
        <div style={{ marginTop: 36, background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 22, padding: '24px 26px', boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ width: 28, height: 28, borderRadius: 999, background: Brand.blue, color: Brand.paper, display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 800 }}>AI</span>
            <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 14, color: Brand.slate500, fontWeight: 600 }}>Contenido generado por inteligencia artificial</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono', fontSize: 11, color: '#1F8A5B', fontWeight: 700, background: '#DCF2E5', padding: '3px 8px', borderRadius: 999, letterSpacing: '0.06em' }}>WATERMARK</span>
          </div>
          <div style={{ background: '#ECEFF5', borderRadius: 14, height: 170, position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: Brand.slate500, fontWeight: 600 }}>[ imagen · audio · video · texto ]</span>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', transform: 'rotate(-18deg)', opacity: 0.12 }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 42, fontWeight: 700, color: Brand.ink, letterSpacing: '0.2em' }}>AI · AI · AI</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 22, color: Brand.blue, fontWeight: 800, marginTop: 2 }}>↳</span>
            <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 21, color: Brand.slate700, lineHeight: 1.45 }}>
              Los chatbots tienen que <b style={{ color: Brand.ink }}>avisar que son IA</b>. Se acabó el "hola, soy Sofía de atención al cliente".
            </span>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 22, color: Brand.blue, fontWeight: 800, marginTop: 2 }}>↳</span>
            <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 21, color: Brand.slate700, lineHeight: 1.45 }}>
              Deepfakes, imágenes y audios sintéticos van a tener que <b style={{ color: Brand.ink }}>marcarse como tales</b>, por ley.
            </span>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ marginBottom: 32, fontFamily: 'General Sans, Manrope', fontSize: 24, color: Brand.ink, fontWeight: 600, lineHeight: 1.35 }}>
          No tenés que adivinar más.<br/>
          Te lo van a tener que <Squiggled>decir</Squiggled>.
        </div>
        <CarouselFooter index={7} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 8 — Y qué tiene que ver con vos fuera de Europa                   */
/* ====================================================================== */
function Slide08() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.paper}>
      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>◆ "pero yo vivo en argentina"</Eyebrow>
        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 66, lineHeight: 1.04, letterSpacing: '-0.025em', color: Brand.ink, margin: '20px 0 0' }}>
          Esto te <Circled>llega igual</Circled>.<br/>
          Por dos caminos.
        </h2>

        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: Brand.white, border: '1px solid #DDE3EC', borderRadius: 22, padding: '26px 30px', display: 'flex', gap: 24, boxShadow: '0 2px 6px rgba(15,31,74,0.05)' }}>
            <div style={{ fontFamily: 'General Sans, Manrope', fontWeight: 800, fontSize: 60, color: Brand.blue, letterSpacing: '-0.04em', lineHeight: 0.9, minWidth: 72 }}>
              01
            </div>
            <div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 28, fontWeight: 700, color: Brand.ink, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                Las apps no hacen dos versiones.
              </div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 19, color: Brand.slate700, lineHeight: 1.5, marginTop: 10 }}>
                El ChatGPT que usás, el Instagram con IA, tu banco digital: se adaptan al estándar más estricto. Y ese estándar ahora es Europa.
              </div>
            </div>
          </div>

          <div style={{ background: Brand.ink, color: Brand.paper, borderRadius: 22, padding: '26px 30px', display: 'flex', gap: 24 }}>
            <div style={{ fontFamily: 'General Sans, Manrope', fontWeight: 800, fontSize: 60, color: '#CFEA1A', letterSpacing: '-0.04em', lineHeight: 0.9, minWidth: 72 }}>
              02
            </div>
            <div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 28, fontWeight: 700, color: Brand.paper, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                El próximo proyecto de ley argentino va a empezar acá.
              </div>
              <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 19, color: '#D9E4F8', lineHeight: 1.5, marginTop: 10 }}>
                Es lo que pasó con GDPR y datos personales. Europa escribe el borrador, el resto lo adapta. La región mira ese texto.
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ marginBottom: 32, fontFamily: 'General Sans, Manrope', fontSize: 24, color: Brand.ink, fontWeight: 600, lineHeight: 1.35 }}>
          Lo que hoy pasa allá,<br/>el año que viene <Squiggled>lo vivís acá</Squiggled>.
        </div>
        <CarouselFooter index={8} />
      </div>
    </PostFrame>
  );
}

/* ====================================================================== */
/* SLIDE 9 — Cierre + CTA                                                  */
/* ====================================================================== */
function Slide09() {
  return (
    <PostFrame width={1080} height={1350} background={Brand.ink}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(#F6F8FC 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div style={{ position: 'absolute', inset: 72, display: 'flex', flexDirection: 'column', color: Brand.paper }}>
        <div style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#CFEA1A' }}>
          ◆ para que te quede
        </div>

        <h2 style={{ fontFamily: 'General Sans, Manrope', fontWeight: 700, fontSize: 80, lineHeight: 1.02, letterSpacing: '-0.028em', color: Brand.paper, margin: '22px 0 0' }}>
          Europa no está<br/>
          <em style={{ fontStyle: 'italic', fontWeight: 500, color: '#7FA3E4' }}>"debatiendo"</em> la IA.<br/>
          La está <Squiggled color="#CFEA1A">aplicando</Squiggled>.
        </h2>

        <p style={{ fontFamily: 'General Sans, Manrope', fontSize: 26, color: '#D9E4F8', lineHeight: 1.45, margin: '28px 0 0', maxWidth: 860, fontWeight: 400 }}>
          Lo que falta no es decidirse. Son las fechas. Y ya están en el calendario.
        </p>

        <div style={{ flex: 1 }} />

        {/* CTA block */}
        <div style={{ background: 'rgba(246,248,252,0.05)', border: '1px solid rgba(207,234,26,0.35)', borderRadius: 24, padding: '28px 30px', marginBottom: 28 }}>
          <div style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#CFEA1A' }}>
            ¿querés el video largo?
          </div>
          <div style={{ fontFamily: 'General Sans, Manrope', fontSize: 26, color: Brand.paper, lineHeight: 1.4, marginTop: 12, fontWeight: 500 }}>
            Te muestro qué apps ya cambiaron<br/>y qué mirar antes de agosto 2026.
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 22, alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#CFEA1A', color: Brand.ink, borderRadius: 999, fontFamily: 'JetBrains Mono', fontSize: 15, fontWeight: 700, letterSpacing: '0.04em' }}>
              💬 “AI ACT”
            </span>
            <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 18, color: '#D9E4F8' }}>en comentarios</span>
            <span style={{ fontFamily: 'General Sans, Manrope', fontSize: 18, color: '#7FA3E4', marginLeft: 8 }}>·</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: 'transparent', color: Brand.paper, border: '1.5px solid rgba(246,248,252,0.35)', borderRadius: 999, fontFamily: 'General Sans, Manrope', fontSize: 15, fontWeight: 600 }}>
              + seguime
            </span>
          </div>
        </div>

        <CarouselFooter index={9} invert next={false} />
      </div>
    </PostFrame>
  );
}

window.Slide01 = Slide01;
window.Slide02 = Slide02;
window.Slide03 = Slide03;
window.Slide04 = Slide04;
window.Slide05 = Slide05;
window.Slide06 = Slide06;
window.Slide07 = Slide07;
window.Slide08 = Slide08;
window.Slide09 = Slide09;
