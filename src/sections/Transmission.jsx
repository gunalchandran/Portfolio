import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react'
import gsap from 'gsap'
import { profile } from '../data/profile.js'
import MagneticButton from '../components/MagneticButton.jsx'
import ParticleField from '../components/ParticleField.jsx'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
}

export default function Transmission() {
  const sectionRef = useRef(null)
  const nameRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // GSAP: staggered character reveal for the name, on first mount.
  useEffect(() => {
    if (!nameRef.current) return
    const chars = nameRef.current.querySelectorAll('.char')
    gsap.fromTo(
      chars,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.035,
        delay: 0.4
      }
    )
  }, [])

  return (
    <section
      id="transmission"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-signal-glow" aria-hidden="true" />
      <ParticleField />

      <motion.div style={{ y, opacity }} className="container-px relative z-10 w-full pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="section-eyebrow mb-6"
            >
            </motion.p>

            <h1
              ref={nameRef}
              className="overflow-hidden font-display text-[13vw] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              aria-label={profile.name}
            >
              {profile.name.split('').map((char, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                </span>
              ))}
            </h1>

            <div className="mt-6 h-8 font-mono text-lg text-signal sm:text-xl">
              <TypeAnimation
                sequence={profile.taglines.flatMap((line) => [line, 2200])}
                wrapper="span"
                speed={55}
                deletionSpeed={70}
                repeat={Infinity}
                cursor
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 max-w-xl text-base text-paper-dim sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                as="a"
                href={profile.resumeUrl}
                download
                className="flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-void hover:bg-signal-bright transition-colors"
              >
                <Download size={15} />
                Download résumé
              </MagneticButton>

              <MagneticButton
                as="button"
                onClick={() =>
                  document.getElementById('constructs')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 rounded-full glow-border glass px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper hover:text-signal transition-colors"
              >
                View the work
              </MagneticButton>

              <div className="flex items-center gap-3 pl-2">
                {Object.entries(profile.socials)
                  .filter(([key]) => socialIcons[key])
                  .map(([key, url]) => {
                    const Icon = socialIcons[key]
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={key}
                        className="flex h-9 w-9 items-center justify-center rounded-full glass text-paper-dim hover:text-signal hover:-translate-y-1 transition-all"
                      >
                        <Icon size={16} />
                      </a>
                    )
                  })}
              </div>
            </motion.div>
          </div>

          {/* Profile portrait with floating UI accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-first mx-auto w-full max-w-[220px] sm:max-w-xs lg:order-none lg:max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] glow-border glass">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover grayscale contrast-125"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -left-8 top-10 rounded-2xl glass glow-border px-4 py-3 font-mono text-xs"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-signal">status</span> online
            </motion.div>

            <motion.div
              className="absolute -right-6 bottom-14 rounded-2xl glass glow-border px-4 py-3 font-mono text-xs"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="text-flare">based in</span> {profile.location}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() =>
          document.getElementById('trajectory')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper-dim hover:text-signal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
