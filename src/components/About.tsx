import { motion } from 'framer-motion'
import { PopoutImage } from './PopoutImage'

export function About() {
  const trilogy = [
    {
      number: '01',
      title: 'THE SPARK',
      description: 'The strategic WHY Data driven insight and visionary thinking that ensures a brand has a reason to exist.',
      image: '/public/spark.png',
      delay: 0.2,
    },
    {
      number: '02',
      title: 'THE NEST',
      description: 'The tactical HOW The protective environment where we build visual, verbal, and physical touchpoints for growth.',
      image: '/public/nest.png',
      delay: 0.4,
    },
    {
      number: '03',
      title: 'THE FLIGHT',
      description: 'The outcome Every successful brand begins with an idea, develops into a strong identity, and grows into market leadership.',
      image: '/public/flight.png',
      delay: 0.6,
    },
  ]

  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sparknest-gold text-sm font-bold tracking-widest uppercase">01</span>
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mt-4 mb-8">
            Strategy meets creativity. Identity meets impact.
          </h2>
          <p className="text-xl text-sparknest-mint/80 max-w-4xl leading-relaxed">
            Sparknest is a strategic branding and digital transformation agency that helps ambitious companies become unforgettable brands. We combine research, strategy, design, and technology to build identities that inspire trust, accelerate growth, and create lasting market value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {trilogy.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group relative border-2 border-sparknest-gold/30 p-8 rounded-lg hover:border-sparknest-gold hover:shadow-2xl hover:shadow-sparknest-gold/10 transition-all duration-300 flex flex-col justify-between bg-[#023020]/30 backdrop-blur-sm"
            >
              <div className="absolute -top-8 -left-8 text-8xl font-bold text-sparknest-gold/20 select-none pointer-events-none">
                {item.number}
              </div>

              <div>
                <PopoutImage
                  src={item.image}
                  alt={item.title}
                  heightClass="h-48"
                  className="mb-6"
                />

                <h3 className="text-3xl font-bold text-sparknest-mint mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sparknest-mint/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
