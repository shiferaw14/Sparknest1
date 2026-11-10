import { motion } from 'framer-motion'
import { PopoutImage } from './PopoutImage'

export function WhySparkNest() {
  const outcomes = [
    {
      title: 'Increase Brand Recognition',
      description: 'Command instant authority and stand out distinctively in crowded markets.',
      image: '/images/brand_recognition.svg',
    },
    {
      title: 'Strengthen Credibility',
      description: 'Instill deep confidence with an identity that conveys institutional trust and longevity.',
      image: '/images/credibility.svg',
    },
    {
      title: 'Attract the Right Audience',
      description: 'Resonate magnetically with high value customers who share your vision.',
      image: '/images/audience.svg',
    },
    {
      title: 'Grow Sustainably',
      description: 'Create enduring equity that scales effortlessly as your business evolves.',
      image: '/images/growth.svg',
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mb-8">
            Beautiful design is only the beginning.
          </h2>
          <p className="text-xl text-sparknest-mint/80 max-w-4xl leading-relaxed">
            We don't measure success by beautiful designs we measure it by business impact. Every logo, website, campaign, and customer experience we create is backed by research, strategy, and market understanding to help businesses increase recognition, strengthen credibility, attract the right audience, and grow sustainably.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative border-2 border-sparknest-gold/30 p-8 rounded-xl hover:border-sparknest-gold hover:shadow-2xl hover:shadow-sparknest-gold/10 transition-all duration-300 bg-[#023020]/30 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <PopoutImage
                  src={outcome.image}
                  alt={outcome.title}
                  heightClass="h-48"
                  className="mb-6"
                />
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-sparknest-gold rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-sparknest-green font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-sparknest-mint group-hover:text-white transition-colors duration-300">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-sparknest-mint/70 leading-relaxed pl-14">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
