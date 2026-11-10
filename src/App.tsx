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

function App() {
  return (
    <div className="min-h-screen">
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
