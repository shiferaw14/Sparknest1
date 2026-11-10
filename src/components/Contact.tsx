import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceRequired: '',
    projectDescription: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const services = [
    'Brand Strategy',
    'Visual Identity & Logo Design',
    'Web Design & UI/UX',
    'Digital Presence & Social Media Kits',
    'Corporate Branding',
    'Packaging & Environmental Signage',
    'Complete 360° Branding',
    'Other',
  ]

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }
    if (!formData.companyName.trim()) {
      setErrorMessage('Please enter your company name')
      return false
    }
    if (!formData.serviceRequired) {
      setErrorMessage('Please select a service')
      return false
    }
    if (!formData.projectDescription.trim()) {
      setErrorMessage('Please provide a project description')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('http://localhost:3002/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectBudget: 'Not specified',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }

      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        serviceRequired: '',
        projectDescription: '',
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sparknest-gold text-sm font-bold tracking-widest uppercase">05</span>
          <h2 className="text-4xl md:text-6xl font-bold text-sparknest-mint mt-4 mb-8">
            Let's Build Your Next Iconic Brand.
          </h2>
          <p className="text-xl text-sparknest-mint/80 max-w-4xl leading-relaxed mb-12">
            Whether you're launching a new venture, refreshing your identity, or scaling an established business, SparkNest is ready to help you create a brand that inspires trust and drives growth.
            <br /><br />
            Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sparknest-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-sparknest-mint mb-1">Location</h3>
                  <p className="text-sparknest-mint/80">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sparknest-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-sparknest-mint mb-1">Phone</h3>
                  <p className="text-sparknest-mint/80">+251 905468787</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-sparknest-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-sparknest-mint mb-1">Email</h3>
                  <a href="mailto:info@sparknestdigitals.com" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                    info@sparknestdigitals.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-sparknest-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-sparknest-mint mb-1">Website</h3>
                  <a href="http://www.sparknestdigitals.com/" target="_blank" rel="noopener noreferrer" className="text-sparknest-mint/80 hover:text-sparknest-gold transition-colors">
                    www.sparknestdigitals.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-sparknest-mint mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border-2 border-sparknest-mint rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-sparknest-mint rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-sparknest-mint rounded-full flex items-center justify-center hover:bg-sparknest-gold hover:border-sparknest-gold hover:text-sparknest-green transition-all duration-200 text-sparknest-mint">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-sparknest-gold/20 border-2 border-sparknest-gold text-sparknest-mint p-4 rounded-lg">
                  Thank you for your inquiry! We'll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && errorMessage && (
                <div className="bg-red-500/20 border-2 border-red-500 text-sparknest-mint p-4 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-sparknest-mint mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#023020]/50 border-2 border-sparknest-mint/30 rounded-lg px-4 py-3 text-sparknest-mint placeholder-sparknest-mint/50 focus:border-sparknest-gold focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-sparknest-mint mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#023020]/50 border-2 border-sparknest-mint/30 rounded-lg px-4 py-3 text-sparknest-mint placeholder-sparknest-mint/50 focus:border-sparknest-gold focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-sparknest-mint mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#023020]/50 border-2 border-sparknest-mint/30 rounded-lg px-4 py-3 text-sparknest-mint placeholder-sparknest-mint/50 focus:border-sparknest-gold focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="serviceRequired" className="block text-sm font-bold text-sparknest-mint mb-2">
                  Service Required *
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#023020]/50 border-2 border-sparknest-mint/30 rounded-lg px-4 py-3 text-sparknest-mint focus:border-sparknest-gold focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-bold text-sparknest-mint mb-2">
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full bg-[#023020]/50 border-2 border-sparknest-mint/30 rounded-lg px-4 py-3 text-sparknest-mint placeholder-sparknest-mint/50 focus:border-sparknest-gold focus:outline-none transition-colors disabled:opacity-50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D3AF37] text-sparknest-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                {!isSubmitting && <Send size={20} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
