import { motion } from 'framer-motion'
import { PopoutImage } from './PopoutImage'

export function Services() {
  const services = [
    {
      number: '01',
      title: 'BRAND STRATEGY',
      image: '/images/brand_strategy.svg',
      items: [
        'Discovery Workshops',
        'Market Analysis & Competitive Reports',
        'Brand DNA (Mission, Vision, Values)',
      ],
      description: 'We uncover the strategic foundation of your business, helping define what makes your brand unique and how it should position itself in the market.',
    },
    {
      number: '02',
      title: 'VISUAL SYSTEMS',
      image: '/images/visual.png',
      items: [
        'Comprehensive Logo Suites',
        'Emotive Color Theory (HEX/RGB/CMYK)',
        'Unique Visual Language & Textures',
      ],
      description: 'We create distinctive visual identities that communicate your brand\'s personality and establish a consistent presence.',
    },
    {
      number: '03',
      title: '360° TOUCHPOINTS',
      image: '/images/360.png',
      items: [
        'Web Design & UI/UX Development',
        'Digital Presence & Social Media Kits',
        'Corporate Decks & Collateral',
        'Environmental Signage & Packaging',
      ],
      description: 'We bring your brand to life through consistent digital and physical experiences across every important customer touchpoint.',
    },
  ]

  return (
    <section id="services" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sparknest-gold text-sm font-bold tracking-widest uppercase">03</span>
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mt-4 mb-8">
            Our expertise. Your next evolution.
          </h2>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative border-2 border-sparknest-gold/30 p-8 md:p-10 rounded-xl hover:border-sparknest-gold hover:shadow-2xl hover:shadow-sparknest-gold/10 transition-all duration-300 bg-[#023020]/30 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Number & Text Content */}
                <div className="flex items-start gap-6 md:gap-10 flex-1 w-full">
                  <div className="text-7xl md:text-8xl font-bold text-sparknest-gold/15 group-hover:text-sparknest-gold/30 transition-colors duration-300 select-none">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-sparknest-mint mb-6 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="text-sparknest-mint/80 flex items-center gap-3">
                          <span className="w-2 h-2 bg-sparknest-gold rounded-full shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-sparknest-mint/70 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Popout Image on the Side */}
                <div className="w-full lg:w-96 xl:w-[420px] shrink-0">
                  <PopoutImage
                    src={service.image}
                    alt={service.title}
                    heightClass="h-56 md:h-64"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
