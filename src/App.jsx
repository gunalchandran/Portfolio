import { useEffect, useState } from 'react'
import useLenis from './hooks/useLenis.js'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Footer from './components/Footer.jsx'
import ParticleField from './components/ParticleField.jsx'
import Transmission from './sections/Transmission.jsx'
import Trajectory from './sections/Trajectory.jsx'
import Constructs from './sections/Constructs.jsx'
import Arsenal from './sections/Arsenal.jsx'
import Frequency from './sections/Frequency.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Lock scroll while the loader is visible.
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <Loader visible={loading} />
      <div className="fixed inset-0 -z-10 bg-void">
        <ParticleField />
      </div>
      <ScrollProgress />
      <Navbar />
      <main>
        <Transmission />
        <Trajectory />
        <Constructs />
        <Arsenal />
        <Frequency />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}