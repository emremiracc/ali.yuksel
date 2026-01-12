'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  PenTool, 
  Layout, 
  Github, 
  Sparkles, 
  Music 
} from 'lucide-react'

interface StackItem {
  name: string
  icon: string
}

interface StackProps {
  items: StackItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  framer: Code,
  figma: PenTool,
  nextjs: Layout,
  github: Github,
  openai: Sparkles,
  spotify: Music,
}

export default function Stack({ items }: StackProps) {
  return (
    <section className="px-4 py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-12"
        >
          STACK
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
              >
                <IconComponent className="w-6 h-6" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

