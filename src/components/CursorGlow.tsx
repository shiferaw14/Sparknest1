import { useEffect, useRef } from 'react'

/**
 * CursorGlow
 *
 * Two responsibilities:
 *  1. Moves the radial spotlight (via CSS custom props on .cursor-glow-layer)
 *  2. Moves #cursor-dot, a small branded gold dot that replaces the system cursor
 *
 * Both updates are batched inside a single rAF loop for maximum smoothness.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement | null>(null)
  const posRef  = useRef({ x: -9999, y: -9999 })
  const rafRef  = useRef<number>(0)

  useEffect(() => {
    /* ── Create the cursor dot if it doesn't exist yet ── */
    let dot = document.getElementById('cursor-dot') as HTMLDivElement | null
    if (!dot) {
      dot = document.createElement('div')
      dot.id = 'cursor-dot'
      document.body.appendChild(dot)
    }
    dotRef.current = dot

    /* ── Event listeners ── */
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      /* Enlarge dot while hovering interactive elements */
      const target = e.target as Element
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        dot!.classList.add('cursor-active')
      } else {
        dot!.classList.remove('cursor-active')
      }
    }

    const onLeave = () => {
      posRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave, { passive: true })

    /* ── rAF loop: sync glow + dot position ── */
    const tick = () => {
      const { x, y } = posRef.current
      const glow = glowRef.current
      if (glow) {
        glow.style.setProperty('--gx', `${x}px`)
        glow.style.setProperty('--gy', `${y}px`)
      }
      if (dot) {
        dot.style.left = `${x}px`
        dot.style.top  = `${y}px`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
      /* Clean up the dot when the component unmounts */
      dot?.remove()
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow-layer" aria-hidden="true" />
}
