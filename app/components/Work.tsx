'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Scale, Orbit, BarChart3, ExternalLink } from 'lucide-react'
import Showcase from './Showcase'

interface WorkItem {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  icon: string
}

interface WorkProps {
  items: WorkItem[]
  heading: string
  subheading: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  balanced: Scale,
  growth: Orbit,
  income: BarChart3,
}

export default function Work({ items, heading, subheading }: WorkProps) {
  const [selectedId, setSelectedId] = useState<number>(items[0]?.id || 1)
  const selectedItem = items.find((item) => item.id === selectedId) || items[0]

  const IconComponent = selectedItem
    ? iconMap[selectedItem.icon] || BarChart3
    : BarChart3

  return (
    <section id="work" className="min-h-screen px-4 py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium mb-4">
              {heading}
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {subheading}
            </p>
          </motion.div>
        </div>

        {/* Showcase Cards */}
        <div className="mb-20">
          <Showcase />
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items List */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm p-4 space-y-2">
              {items.map((item, index) => {
                const ItemIcon = iconMap[item.icon] || BarChart3
                const isSelected = item.id === selectedId

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                        : 'hover:bg-white/50 dark:hover:bg-zinc-800/50'
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`Select ${item.title}`}
                  >
                    {/* Icon Box */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 ${
                        isSelected
                          ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base font-medium mb-1 transition-colors ${
                          isSelected
                            ? 'text-zinc-900 dark:text-zinc-100'
                            : 'text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isSelected
                            ? 'text-zinc-600 dark:text-zinc-400'
                            : 'text-zinc-500 dark:text-zinc-500'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="sticky top-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm font-medium"
                >
                  View details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
