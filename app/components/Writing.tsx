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
    <section id="writing" className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-zinc-900"
        >
          Writing
        </motion.h2>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              className="group block bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                  {item.title}
                </h3>
                <span className="text-lg text-zinc-600 whitespace-nowrap">
                  {formatDate(item.date)}
                </span>
              </div>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

