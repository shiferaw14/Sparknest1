import { motion } from 'framer-motion'

export function BrandingFramework() {
  const stages = [
    {
      step: 'DISCOVERY',
      description: 'Understand the business, its objectives, audience, and challenges.',
    },
    {
      step: 'RESEARCH',
      description: 'Explore the market, competitors, audience, and opportunities.',
    },
    {
      step: 'STRATEGY',
      description: 'Define the brand\'s positioning, direction, personality, and purpose.',
    },
    {
      step: 'IDENTITY DESIGN',
      description: 'Develop the visual and verbal identity system.',
    },
    {
      step: 'DIGITAL EXPERIENCE',
      description: 'Create digital touchpoints and consistent brand experiences.',
    },
    {
      step: 'LAUNCH',
      description: 'Introduce the brand to its audience.',
    },
    {
      step: 'GROWTH & OPTIMIZATION',
      description: 'Support continuous brand improvement and long-term growth.',
    },
  ]

  return (
    <section id="framework" className="py-32 px-6 lg:px-8 bg-[#023020]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sparknest-gold text-sm font-bold tracking-widest uppercase">04</span>
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mt-4 mb-8">
            From the first spark to lasting impact.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sparknest-gold/30" />

          <div className="space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-sparknest-gold rounded-full -translate-x-1/2 z-10" />

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="text-6xl font-bold text-sparknest-gold/20 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold text-sparknest-mint mb-3">
                    {stage.step}
                  </h3>
                  <p className="text-sparknest-mint/80 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
