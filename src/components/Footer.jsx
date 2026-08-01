import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-void-line py-8">
      <div className="container-px flex flex-col items-center justify-between gap-3 text-center font-mono text-xs text-paper-dim sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. All signals reserved.
        </p>
        <p>Designed &amp; built with React, Tailwind, and many songs.</p>
      </div>
    </footer>
  )
}
