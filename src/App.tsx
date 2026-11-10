import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Philosophy } from './components/Philosophy'
import { Services } from './components/Services'
import { BrandingFramework } from './components/BrandingFramework'
import { WhySparkNest } from './components/WhySparkNest'
import { OurPromise } from './components/OurPromise'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CursorGlow } from './components/CursorGlow'

function App() {
  /* Track the mouse so the CSS custom cursor dot (body::after) stays in sync */
  useEffect(() => {
    const root = document.documentElement
    const move = (e: MouseEvent) => {
      root.style.setProperty('--cx', `${e.clientX}px`)
      root.style.setProperty('--cy', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Cursor spotlight — rendered beneath all content */}
      <CursorGlow />

      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <BrandingFramework />
      <WhySparkNest />
      <OurPromise />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
