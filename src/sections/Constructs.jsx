import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects, projectCategories } from '../data/projects.js'
import { fadeUp, staggerContainer } from '../animations/variants.js'

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass glow-border"
    >
      {project.featured && (
        <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-flare/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-void">
          <Star size={11} fill="currentColor" /> Featured
        </span>
      )}

      <div className="relative aspect-[16/10] overflow-hidden bg-void-raised">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.opacity = '0'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent opacity-70" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {/* <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-signal px-4 py-2 font-mono text-xs uppercase tracking-wide text-void hover:bg-signal-bright"
          >
            <ExternalLink size={13} /> Live
          </a> */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper hover:text-signal"
          >
            <Github size={13} /> Code
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
            {project.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-paper-dim">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-void-line px-2.5 py-1 font-mono text-[10px] text-paper-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Constructs() {
  const [filter, setFilter] = useState('All')
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="constructs" className="relative py-28 sm:py-36">
      <div className="container-px">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Turning ideas <span className="text-gradient">into reality.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.05)}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                filter === cat
                  ? 'bg-signal text-void'
                  : 'glass text-paper-dim hover:text-paper'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
