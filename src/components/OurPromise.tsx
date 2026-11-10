import { motion } from 'framer-motion'

export function OurPromise() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#023020]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Gungsuh'] text-[#FFFFFF] mb-12 leading-tight">
            We don't just create visual identities. We build the systems, experiences, and strategies that empower businesses to grow with confidence.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-sparknest-mint/80 leading-relaxed mb-8">
              We promise to build brands with purpose, precision, and longevity. Every project is approached with strategic thinking, creative excellence, and an unwavering commitment to delivering measurable value.
            </p>

            <div className="inline-block">
              <div className="w-24 h-1 bg-sparknest-gold mx-auto" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
