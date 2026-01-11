'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  description: string
}

interface ExperienceProps {
  items: ExperienceItem[]
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-zinc-900"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent" />
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-zinc-900 rounded-full border-4 border-white" />
                
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-900">
                        {item.role}
                      </h3>
                      <p className="text-xl text-zinc-700">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-lg text-zinc-600 mt-2 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

