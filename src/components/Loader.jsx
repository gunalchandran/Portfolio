import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.path
              d="M4 16 L10 16 L13 8 L18 24 L21 16 L28 16"
              stroke="#F4C430"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
            />
          </motion.svg>
          <motion.p
            className="mt-6 font-mono text-xs tracking-[0.3em] text-signal uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            establishing connection
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
