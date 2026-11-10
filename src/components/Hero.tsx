import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-sparknest-mint leading-tight mb-8"
          >
            We Build The Nests Where{' '}
            <span className="text-gradient">Icons Are Born.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-sparknest-mint/80 max-w-3xl mx-auto mb-12"
          >
            We transform ambitious ideas into unforgettable brands through strategic thinking, distinctive design, and digital innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="border-2 border-sparknest-mint text-sparknest-mint px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D3AF37] transition-all duration-200 flex items-center gap-2 group"
            >
              Start a Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="border-2 border-sparknest-mint text-sparknest-mint px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D3AF37] hover:text-[#fffff] transition-all duration-200"
            >
              Explore Our Expertise
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <img
              src="/2.png"
              alt="Sparknest brand showcase"
              className="block mx-auto"
            />
          </motion.div>
        </motion.div>




      </div>
    </section>
  )
}
