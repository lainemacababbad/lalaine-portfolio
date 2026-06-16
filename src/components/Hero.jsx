import { motion } from 'framer-motion'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__text">
        <motion.p
          className="hero__eyebrow"
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
        >
          UX/UI Designer & Developer
        </motion.p>
        <motion.h1
          className="hero__name"
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
        >
          Hi there,<br />
          I'm <span className="hero__name--accent">Lalaine.</span>
        </motion.h1>
        <motion.p
          className="hero__tagline"
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
        >
          I design things that feel good to use — and build them too.<br />
          Based in Surrey, BC. Fuelled by matcha.
        </motion.p>
        <motion.div
          className="hero__ctas"
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
        >
          <a href="#work" className="btn btn--primary">View my work</a>
          <a href="#about" className="btn btn--ghost">About me</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__room"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__room-placeholder">
          <p className="hero__room-label">room scene coming soon ✦</p>
        </div>
      </motion.div>
    </section>
  )
}