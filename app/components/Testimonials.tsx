'use client'

import { motion } from 'framer-motion'

interface TestimonialItem {
  id: number
  name: string
  role: string
  company: string
  content: string
}

interface TestimonialsProps {
  items: TestimonialItem[]
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <section id="testimonials" className="px-4 py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-16 text-center"
        >
          Testimonials
        </motion.h2>

        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                "{item.content}"
              </p>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.role} at {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
