/* ═══════════════════════════════════════════════════════════════════
   cursor-trail.js  —  Interactive cursor line effect for Sparknest
   Plain HTML/CSS/JS — no libraries required.
   ═══════════════════════════════════════════════════════════════════ */

/* ── 1. CONFIGURATION ───────────────────────────────────────────────
   Edit these values to tweak the effect without touching anything
   else in the file.                                                 */
const CONFIG = {
  /* How long (ms) before a trail point fully fades to invisible */
  fadeDuration: 1500,

  /* Maximum number of points kept in memory at once.
     Higher = longer trail, slightly more GPU work.                  */
  maxPoints: 100,

  /* Base line width (px) added on top of the speed contribution.
     Keeps the line visible even when the mouse barely moves.        */
  baseWidth: 1.5,

  /* How much mouse speed widens the line.
     line width = baseWidth + speed * speedMultiplier (clamped)     */
  speedMultiplier: 0.12,

  /* Maximum line width in pixels regardless of speed               */
  maxWidth: 8,

  /* Hue rotation speed: degrees per second.
     Set to 0 for a fixed colour (use startHue below).              */
  hueSpeed: 60,

  /* Starting hue (0–360). Sparknest gold ≈ 43°                    */
  startHue: 43,

  /* Saturation and lightness of the trail colour                   */
  saturation: '90%',
  lightness: '62%',

  /* shadowBlur strength — higher = softer, wider glow              */
  glowStrength: 18,

  /* ── Constellation / web effect ──────────────────────────────── */
  /* Draw faint lines between recent points that are close together */
  enableWeb: true,

  /* Maximum distance (px) between two points to draw a web line   */
  webMaxDist: 90,

  /* Opacity multiplier for web lines (0 = invisible, 1 = same as trail) */
  webOpacity: 0.18,
};

/* ── 2. EARLY-EXIT CONDITIONS ───────────────────────────────────────
   Skip the whole effect on touch-only devices and when the user
   has requested reduced motion in their OS accessibility settings. */
const isTouchOnly =
  !window.matchMedia('(hover: hover)').matches ||
  !window.matchMedia('(pointer: fine)').matches;

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (isTouchOnly || prefersReducedMotion) {
  /* Silently stop — no visible error, effect just won't run       */
  console.info('[cursor-trail] Disabled: touch device or reduced-motion.');
  // Use a trick to exit without throwing — wrap everything below in a function
}

if (!isTouchOnly && !prefersReducedMotion) {

/* ── 3. CANVAS SETUP ────────────────────────────────────────────── */
const canvas = document.getElementById('cursor-trail-canvas');
const ctx    = canvas.getContext('2d');

/* Scale the canvas for high-DPI (Retina / 4K) screens so lines
   are crisp. We draw at physical pixels and CSS scales it back.   */
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  /* Store logical size for drawing calculations                   */
  canvas._logicalWidth  = window.innerWidth;
  canvas._logicalHeight = window.innerHeight;
  /* Physical pixel size                                           */
  canvas.width  = window.innerWidth  * dpr;
  canvas.height = window.innerHeight * dpr;
  /* Reset transform then scale so all coordinates are CSS pixels  */
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

/* ── 4. POINT STORAGE ───────────────────────────────────────────── */
/* Each entry: { x, y, t (timestamp ms), speed (px/ms) }           */
let points = [];
let lastX  = null;
let lastY  = null;
let lastT  = null;

/* ── 5. MOUSE TRACKING ──────────────────────────────────────────── */
document.addEventListener('mousemove', (e) => {
  const now = performance.now();
  const x   = e.clientX;
  const y   = e.clientY;

  /* Calculate cursor speed (pixels per millisecond)               */
  let speed = 0;
  if (lastX !== null) {
    const dx = x - lastX;
    const dy = y - lastY;
    const dt = now - lastT || 1;         /* avoid divide-by-zero   */
    speed    = Math.sqrt(dx * dx + dy * dy) / dt;
  }

  points.push({ x, y, t: now, speed });

  /* Drop the oldest point once we hit the cap                     */
  if (points.length > CONFIG.maxPoints) points.shift();

  lastX = x;
  lastY = y;
  lastT = now;
});

/* ── 6. ANIMATION LOOP ──────────────────────────────────────────── */
let startTime = null;   /* used to drive hue rotation              */

function draw(timestamp) {
  /* Kick off the timer on the first frame                         */
  if (startTime === null) startTime = timestamp;
  const elapsed = timestamp - startTime;   /* ms since page load  */

  /* Use logical (CSS) dimensions for clearing                     */
  const W = canvas._logicalWidth  || window.innerWidth;
  const H = canvas._logicalHeight || window.innerHeight;
  ctx.clearRect(0, 0, W, H);

  const now = performance.now();

  /* Remove points that have fully faded out                       */
  points = points.filter(p => (now - p.t) < CONFIG.fadeDuration);

  /* Nothing to draw yet                                           */
  if (points.length < 2) {
    requestAnimationFrame(draw);
    return;
  }

  /* ── Draw the main trail ───────────────────────────────────── */
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];

    /* Age-based opacity: 1 when fresh → 0 when fully faded       */
    const age   = now - curr.t;
    const alpha = Math.max(0, 1 - age / CONFIG.fadeDuration);

    if (alpha < 0.01) continue;

    /* Hue cycles over time so the colour slowly rotates           */
    const hue   = (CONFIG.startHue + (elapsed / 1000) * CONFIG.hueSpeed) % 360;
    const color = `hsla(${hue}, ${CONFIG.saturation}, ${CONFIG.lightness}, ${alpha})`;

    /* Line width proportional to cursor speed                     */
    const width = Math.min(
      CONFIG.maxWidth,
      CONFIG.baseWidth + curr.speed * CONFIG.speedMultiplier
    );

    /* Mid-point between prev and curr — control point for the
       quadratic curve that smooths the path.                      */
    const midX = (prev.x + curr.x) / 2;
    const midY = (prev.y + curr.y) / 2;

    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    /* Quadratic curve: starts at prev, bends through prev toward mid */
    ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);

    ctx.strokeStyle = color;
    ctx.lineWidth   = width;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';

    /* Soft glow — shadowColor can be a brighter tint of the hue  */
    ctx.shadowColor = `hsla(${hue}, ${CONFIG.saturation}, 80%, ${alpha * 0.9})`;
    ctx.shadowBlur  = CONFIG.glowStrength;

    ctx.stroke();
  }

  /* Reset shadow so it doesn't bleed onto the web lines          */
  ctx.shadowBlur  = 0;
  ctx.shadowColor = 'transparent';

  /* ── Draw the constellation / web overlay ─────────────────── */
  if (CONFIG.enableWeb && points.length > 2) {
    /* Only compare the most-recent half of stored points for perf */
    const recent = points.slice(Math.floor(points.length / 2));

    for (let i = 0; i < recent.length; i++) {
      for (let j = i + 1; j < recent.length; j++) {
        const a  = recent[i];
        const b  = recent[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d > CONFIG.webMaxDist) continue;

        /* Fade by both point age and proximity: closer = brighter */
        const alphaA = Math.max(0, 1 - (now - a.t) / CONFIG.fadeDuration);
        const alphaB = Math.max(0, 1 - (now - b.t) / CONFIG.fadeDuration);
        const alpha  = Math.min(alphaA, alphaB)
                       * CONFIG.webOpacity
                       * (1 - d / CONFIG.webMaxDist);

        if (alpha < 0.005) continue;

        const hue = (CONFIG.startHue + (elapsed / 1000) * CONFIG.hueSpeed) % 360;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(${hue}, ${CONFIG.saturation}, ${CONFIG.lightness}, ${alpha})`;
        ctx.lineWidth   = 0.6;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

/* Kick off the render loop                                        */
requestAnimationFrame(draw);

} /* end if (!isTouchOnly && !prefersReducedMotion) */
