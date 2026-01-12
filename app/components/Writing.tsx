'use client'

import { motion } from 'framer-motion'

interface WritingItem {
  id: number
  title: string
  description: string
  date: string
  link: string
}

interface WritingProps {
  items: WritingItem[]
}

export default function Writing({ items }: WritingProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="writing" className="min-h-screen px-4 py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-12"
        >
          Writing
        </motion.h2>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-0 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono whitespace-nowrap">
                  {formatDate(item.date)}
                </span>
              </div>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

