import { motion } from 'framer-motion'
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#023020] py-16 px-6 lg:px-8 border-t border-sparknest-mint/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-sparknest-mint mb-4">Sparknest Digitals</h3>
            <p className="text-sparknest-mint/80 leading-relaxed mb-6">
              Strategic branding and digital transformation agency helping ambitious companies become unforgettable brands.
            </p>
            <p className="text-sm text-sparknest-gold font-bold">
              Sparknest Digitals — NURTURING THE EXTRAORDINARY.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-sparknest-mint mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#framework" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-sparknest-mint mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Visual Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  360° Touchpoints
                </a>
              </li>
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Web Design & UI/UX
                </a>
              </li>
              <li>
                <a href="#services" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                  Digital Presence
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-sparknest-mint mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sparknest-mint/80">
                <MapPin size={16} className="text-sparknest-gold" />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center gap-2 text-sparknest-mint/80">
                <Phone size={16} className="text-sparknest-gold" />
                +251 905468787
              </li>
              <li className="flex items-center gap-2 text-sparknest-mint/80">
                <Mail size={16} className="text-sparknest-gold" />
                info@sparknestdigitals.com
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 border border-sparknest-mint/30 rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 border border-sparknest-mint/30 rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 border border-sparknest-mint/30 rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-sparknest-mint/20 pt-8 text-center"
        >
          <p className="text-sparknest-mint/60 text-sm">
            © {currentYear} Sparknest Digitals. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
