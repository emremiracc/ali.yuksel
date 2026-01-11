'use client'

import { motion } from 'framer-motion'

interface WorkItem {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

interface WorkProps {
  items: WorkItem[]
}

export default function Work({ items }: WorkProps) {
  return (
    <section id="work" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-zinc-900"
        >
          Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-200 p-8 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 group-hover:text-zinc-950 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

