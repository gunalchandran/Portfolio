import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Trophy } from 'lucide-react'
import { skills, skillCategories, certifications, achievements } from '../data/skills.js'
import { profile } from '../data/profile.js'
import { fadeUp, staggerContainer } from '../animations/variants.js'

function SkillBar({ skill, inView, index }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-paper">{skill.name}</span>
        <span className="font-mono text-xs text-signal">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-void-raised">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal to-flare"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

function RadialSkill({ skill, inView, index }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (skill.level / 100) * circumference

  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center gap-3 rounded-2xl glass p-5"
    >
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#33291A" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#F4C430"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-signal">
          {skill.level}%
        </div>
      </div>
      <span className="text-center text-xs text-paper-dim">{skill.name}</span>
    </motion.div>
  )
}

export default function Arsenal() {
  const [category, setCategory] = useState('Languages')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const filteredSkills = useMemo(
    () => skills.filter((s) => s.category === category),
    [category]
  )

  return (
    <section id="arsenal" className="relative py-28 sm:py-36 bg-void-soft">
      <div className="container-px">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full glow-border glass sm:mx-0"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover grayscale contrast-125"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>

          <div>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              The <span className="text-gradient">technical stack</span> behind it all.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.05)}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                category === cat ? 'bg-signal text-void' : 'glass text-paper-dim hover:text-paper'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Bars for the selected category */}
        <div className="mx-auto mb-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {filteredSkills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
          ))}
        </div>

        {/* Radial overview of top skills across all categories */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.06)}
          className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"
        >
          {skills
            .slice()
            .sort((a, b) => b.level - a.level)
            .slice(0, 6)
            .map((skill, i) => (
              <RadialSkill key={skill.name} skill={skill} inView={inView} index={i} />
            ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer(0.08)}
            className="rounded-2xl glass p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-flare">
              <Award size={18} />
              <h3 className="font-display text-lg font-semibold text-paper">Certifications</h3>
            </div>
            <div className="flex flex-col gap-4">
              {certifications.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="border-b border-void-line pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="mt-1 font-mono text-xs text-paper-dim">
                    {c.issuer} — {c.year}
                  </p>             
                  </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer(0.08)}
            className="rounded-2xl glass p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-signal">
              <Trophy size={18} />
              <h3 className="font-display text-lg font-semibold text-paper">Achievements</h3>
            </div>
            <div className="flex flex-col gap-4">
              {achievements.map((a) => (
                <motion.div key={a.title} variants={fadeUp} className="border-b border-void-line pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="mt-1 text-xs text-paper-dim [word-spacing:0.5rem]">{a.description}</p>
                  <hr />
                  <p className="text-sm font-medium pt-5">{a.link}</p>   
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
