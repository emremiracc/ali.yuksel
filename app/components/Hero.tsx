'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import type { SocialLink } from '@/content/site'

interface HeroProps {
  name: string
  title: string
  description: string
  cta: string
  socials: SocialLink[]
}

export default function Hero({ name, title, description, cta, socials }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent"
          >
            {name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-zinc-700"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex justify-center gap-6"
          >
            {socials.map((social) => {
              const icons = {
                linkedin: Linkedin,
                twitter: Twitter,
                mail: Mail,
              } as const

              const Icon = icons[social.icon]

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-zinc-100 border border-zinc-200 rounded-full text-lg font-medium text-zinc-900 hover:bg-zinc-200 transition-all duration-300"
          >
            {cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

