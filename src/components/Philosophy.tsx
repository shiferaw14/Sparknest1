import { motion } from 'framer-motion'
import { PopoutImage } from './PopoutImage'

export function Philosophy() {
  const values = [
    {
      title: 'CREATIVITY',
      description: 'Thinking outside the box to make your brand stand out.',
      image: '/images/creativity.png',
    },
    {
      title: 'QUALITY',
      description: 'Delivering top notch work every time.',
      image: '/images/quality.png',
    },
    {
      title: 'COLLABORATION',
      description: 'Working closely with clients to bring their ideas to life.',
      image: '/images/collabration.png',
    },
    {
      title: 'TRUST',
      description: 'Being honest and reliable in everything we do.',
      image: '/images/trust.png',
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#023020]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sparknest-gold text-sm font-bold tracking-widest uppercase">02</span>
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mt-4 mb-8">
            Branding is more than visual design.
          </h2>
          <p className="text-xl text-sparknest-mint/80 max-w-4xl leading-relaxed mb-12">
            At SparkNest, branding is the strategic foundation of a successful business. Every identity we create is rooted in research, guided by purpose, and crafted to build trust, inspire loyalty, and generate lasting value. Our philosophy is to create brands that not only capture attention but also shape perceptions and drive meaningful growth.
          </p>
        </motion.div>

        {/* Mission & Vision Boxes */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative border-2 border-sparknest-gold/30 p-8 rounded-lg hover:border-sparknest-gold hover:shadow-2xl hover:shadow-sparknest-gold/10 transition-all duration-300 bg-[#023020]/40 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <PopoutImage
                src="/images/mission.png"
                alt="SparkNest Mission"
                heightClass="h-52"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-sparknest-gold mb-4 group-hover:text-white transition-colors duration-300">
                Mission
              </h3>
              <p className="text-lg text-sparknest-mint/80 leading-relaxed">
                To empower businesses with strategic branding solutions that transform ideas into influential brands through insight, creativity, and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative border-2 border-sparknest-gold/30 p-8 rounded-lg hover:border-sparknest-gold hover:shadow-2xl hover:shadow-sparknest-gold/10 transition-all duration-300 bg-[#023020]/40 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <PopoutImage
                src="/images/vision.png"
                alt="SparkNest Vision"
                heightClass="h-52"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-sparknest-gold mb-4 group-hover:text-white transition-colors duration-300">
                Vision
              </h3>
              <p className="text-lg text-sparknest-mint/80 leading-relaxed">
                To become Africa's leading strategic branding agency, recognized for creating world class brands that inspire confidence, shape industries, and leave lasting legacies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-sparknest-mint mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-2 border-sparknest-gold/30 p-6 rounded-lg hover:border-sparknest-gold hover:shadow-xl hover:shadow-sparknest-gold/10 transition-all duration-300 bg-[#023020]/40 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <PopoutImage
                    src={value.image}
                    alt={value.title}
                    heightClass="h-44"
                    className="mb-5"
                  />
                  <h4 className="text-xl font-bold text-sparknest-mint mb-2 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sparknest-mint/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
