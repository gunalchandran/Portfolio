import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Wraps its children in a subtle "magnetic" hover effect that
 * pulls the element toward the cursor, and includes a ripple-style
 * press animation. Falls back to a plain button on touch devices
 * (magnetism only triggers on mouse move).
 */
export default function MagneticButton({
  as: Component = 'button',
  className = '',
  children,
  strength = 18,
  ...props
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    setOffset({
      x: (relX / rect.width) * strength,
      y: (relY / rect.height) * strength
    })
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Component
        className={`relative overflow-hidden active:scale-95 transition-transform ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
