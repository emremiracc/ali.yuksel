'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  id: number
  role: string
  company: string
  companyBadge?: string
  period: string
  description: string
}

interface ExperienceProps {
  eyebrow: string
  intro: string
  items: ExperienceItem[]
}

export default function Experience({ eyebrow, intro, items }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen px-4 py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-6"
        >
          {eyebrow}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-16"
        >
          {intro}
        </motion.p>

        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-6"
            >
              {/* Date Column */}
              <div className="sm:col-span-1">
                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                  {item.period}
                </p>
              </div>

              {/* Content Column */}
              <div className="sm:col-span-3 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">at</span>
                  <span className="text-base text-zinc-900 dark:text-zinc-100">
                    {item.company}
                  </span>
                  {item.companyBadge && (
                    <span className="px-2 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full">
                      {item.companyBadge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
