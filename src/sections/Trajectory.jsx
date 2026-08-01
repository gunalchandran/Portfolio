import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Briefcase, Sparkles, Compass } from 'lucide-react'
import { timeline } from '../data/timeline.js'
import { fadeUp, staggerContainer } from '../animations/variants.js'

const typeIcon = {
  education: GraduationCap,
  experience: Briefcase,
  milestone: Sparkles,
  aspiration: Compass
}

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const Icon = typeIcon[item.type] ?? Sparkles
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
      {/* Left content (desktop) */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className={`hidden md:block ${isEven ? '' : 'order-3'} ${isEven ? 'text-right' : 'text-left'}`}
      >
        {isEven && <TimelineCard item={item} align="right" />}
      </motion.div>

      {/* Center rail */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full glass glow-border text-signal"
        >
          <Icon size={18} />
        </motion.div>
        <span className="mt-2 font-mono text-xs text-flare">{item.year}</span>
      </div>

      {/* Right content (desktop) / only content (mobile) */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="md:block"
      >
        <div className="md:hidden">
          <TimelineCard item={item} align="left" />
        </div>
        <div className={`hidden md:block ${isEven ? 'invisible' : ''}`}>
          {!isEven && <TimelineCard item={item} align="left" />}
        </div>
      </motion.div>
    </div>
  )
}

function TimelineCard({ item, align }) {
  return (
    <div className={`inline-block max-w-md rounded-2xl glass p-5 text-${align === 'right' ? 'right' : 'left'}`}>
      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-paper-dim">{item.description}</p>
    </div>
  )
}

export default function Trajectory() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section id="trajectory" className="relative py-28 sm:py-36">
      <div className="container-px">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              From class<span className="text-gradient">room to code.</span>
            </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-paper-dim">
            Every brick tells a story of dedication.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical rail line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px bg-void-line md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
