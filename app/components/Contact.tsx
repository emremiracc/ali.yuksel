'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ContactData {
  email: string
  social: {
    linkedin: string
    twitter: string
  }
}

interface ContactProps {
  data: ContactData
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Mesajınız gönderildi!')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    { name: 'LinkedIn', url: data.social.linkedin },
    { name: 'Twitter', url: data.social.twitter },
  ]

  return (
    <section id="contact" className="min-h-screen px-4 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-zinc-900"
        >
          Contact
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-zinc-900">Let's Connect</h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Projeleriniz veya işbirliği fırsatları hakkında konuşmak isterseniz, aşağıdaki formdan bana ulaşabilirsiniz.
            </p>
            
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${data.email}`}
                className="block text-xl text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {data.email}
              </a>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-200 hover:border-zinc-300 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium text-zinc-900">{social.name.charAt(0)}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-zinc-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-xl text-lg text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-zinc-50 transition-all duration-300 placeholder:text-zinc-400"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-zinc-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-xl text-lg text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-zinc-50 transition-all duration-300 placeholder:text-zinc-400"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-zinc-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-xl text-lg text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-zinc-50 transition-all duration-300 resize-none placeholder:text-zinc-400"
                placeholder="Your message..."
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-zinc-900 border border-zinc-900 rounded-xl text-lg font-medium text-white hover:bg-zinc-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

