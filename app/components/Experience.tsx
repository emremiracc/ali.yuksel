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
    <section id="experience" className="min-h-screen px-4 py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-12"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
          
          <div className="space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rounded-full -translate-x-[3px]" />
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 font-mono">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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

