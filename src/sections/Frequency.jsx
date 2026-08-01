import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile.js'
import { fadeUp, staggerContainer } from '../animations/variants.js'
import MagneticButton from '../components/MagneticButton.jsx'

function CopyField({ icon: Icon, label, value }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API unavailable — fail silently, field is still readable.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full items-center justify-between gap-3 rounded-2xl glass p-4 text-left transition-colors hover:border-signal/40"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-void-raised text-signal">
          <Icon size={16} />
        </span>
        <span>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-paper-dim">
            {label}
          </span>
          <span className="block text-sm">{value}</span>
        </span>
      </span>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-signal"
          >
            <Check size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-paper-dim group-hover:text-paper"
          >
            <Copy size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function Frequency() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Tell me your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'That email looks incomplete.'
    if (form.message.trim().length < 10) next.message = 'A few more words would help.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    // Wire this up to your form backend of choice (Formspree, Resend, etc).
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1100)
  }

  return (
    <section id="frequency" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-flare-glow" aria-hidden="true" />
      <div className="container-px relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Let's <span className="text-gradient">get on the same wavelength.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-paper-dim">
            Open to full-time roles, freelance builds, and interesting problems in general.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer(0.08)}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeUp}>
              <CopyField icon={Mail} label="Email" value={profile.email} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <CopyField icon={Phone} label="Phone" value={profile.phone} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <CopyField icon={MapPin} label="Location" value={profile.location} />
            </motion.div>
          </motion.div>

          <motion.form
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-2xl glass p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-void-line bg-void-raised px-4 py-2.5 text-sm outline-none focus:border-signal"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-1 text-xs text-flare">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl border border-void-line bg-void-raised px-4 py-2.5 text-sm outline-none focus:border-signal"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-1 text-xs text-flare">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-void-line bg-void-raised px-4 py-2.5 text-sm outline-none focus:border-signal"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-flare">{errors.message}</p>}
            </div>

            <MagneticButton
              as="button"
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-void hover:bg-signal-bright transition-colors disabled:opacity-60"
            >
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={14} /> Sent — talk soon
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={14} /> {status === 'sending' ? 'Sending…' : 'Send message'}
                  </motion.span>
                )}
              </AnimatePresence>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
