import { useCallback, useEffect, useState, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

/**
 * Ambient, mouse-reactive particle field used as the site's background.
 * Density adapts to viewport width to stay smooth on mobile.
 */
export default function ParticleField() {
  const [ready, setReady] = useState(false)
  const [density, setDensity] = useState(60)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  useEffect(() => {
    function updateDensity() {
      const w = window.innerWidth
      if (w < 640) setDensity(22)
      else if (w < 1024) setDensity(40)
      else setDensity(65)
    }
    updateDensity()
    window.addEventListener('resize', updateDensity)
    return () => window.removeEventListener('resize', updateDensity)
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: density, density: { enable: true, area: 900 } },
        color: { value: ['#F4C430', '#F5EFE2', '#FF6B35'] },
        opacity: { value: { min: 0.15, max: 0.5 } },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 130,
          color: '#F4C430',
          opacity: 0.12,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: true
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.3 } }
        }
      }
    }),
    [density]
  )

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="pointer-events-auto absolute inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
