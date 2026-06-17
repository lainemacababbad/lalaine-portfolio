import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PieceOfCake.css'
import onboarding1 from '../pages/VTMockup1.png.webp'
import onboarding2 from '../pages/VTMockup2.png.webp'
import onboarding3 from '../pages/VTMockup3.png.webp'
import onboarding4 from '../pages/VTMockup4.png.webp'

const decisions = [
    {
        title: 'No sign-up onboarding',
        copy: 'First-time users see a quick how-to, then go straight to the app. Data is saved locally — no account needed, no friction.'
    },
    {
        title: 'Swipe gestures over buttons',
        copy: 'Originally used tap-and-hold to reveal options. It felt slow and unfamiliar. Swipe-to-act matched what users already expect from apps like Mail and Reminders.'
    },
    {
        title: 'Calendar history view',
        copy: 'A simple way to look back and see consistency over time — not just today\'s checklist, but the bigger picture of the habit forming.'
    },
    {
        title: 'Color picker per vitamin',
        copy: 'Each vitamin can be assigned a custom color. Partly aesthetic, but also functional — it makes scanning your list faster.'
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function VitaminTracker() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <div className="cs">

            {/* Nav */}
            <nav className="cs__nav">
                <Link to="/" className="cs__nav-back">← Back</Link>
                <span className="cs__nav-logo">lalaine.</span>
            </nav>

            {/* Hero */}
            <section className="cs__hero">
                <motion.div
                    className="cs__hero-inner"
                    initial="hidden" animate="visible"
                >
                    <motion.p className="cs__eyebrow" variants={fadeUp} custom={0}>
                        UX / UI Design & Development — Mobile Health
                    </motion.p>
                    <motion.h1 className="cs__title" variants={fadeUp} custom={1}>
                        Vitamin Tracker
                    </motion.h1>
                    <motion.p className="cs__subtitle" variants={fadeUp} custom={2}>
                        A personal mobile app for building a consistent vitamin habit — no account required, no friction, just open and log.
                    </motion.p>
                    <motion.div className="cs__meta" variants={fadeUp} custom={3}>
                        <span className="cs__meta-item"><strong>Role</strong> Designer & Developer</span>
                        <span className="cs__meta-divider" />
                        <span className="cs__meta-item"><strong>Status</strong> Ongoing, started Jan 2026</span>
                        <span className="cs__meta-divider" />
                        <span className="cs__meta-item"><strong>Platform</strong> iOS (React Native)</span>
                    </motion.div>
                    <motion.div
                        className="cs__hero-image"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="cs__hero-image-grid">
                            <img src={onboarding1} alt="Welcome to Vitamins onboarding screen" className="cs__hero-image-img" />
                            <img src={onboarding2} alt="Tap to Track onboarding screen" className="cs__hero-image-img" />
                            <img src={onboarding3} alt="Customize Your List onboarding screen" className="cs__hero-image-img" />
                            <img src={onboarding4} alt="Track Your History onboarding screen" className="cs__hero-image-img" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Problem */}
            <section className="cs__section">
                <div className="cs__section-label">01 — The Problem</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading" style={{ textAlign: 'left' }}>Out of sight, out of mind.</h2>
                    <p className="cs__section-copy cs__section-copy--centered">
                        I kept forgetting to take my vitamins — not because I didn't care, but because if I didn't see them, they didn't exist. I wanted a simple app to track this, but everything I found either had unnecessary sign-ups or felt cluttered. So I built my own.
                    </p>
                    <div className="cs__quote">
                        "I don't like signing up for apps that don't need it. I just want to use it immediately."
                    </div>
                </div>
            </section>

            {/* Design Decisions */}
            <section className="cs__section cs__section--tinted">
                <div className="cs__section-label">02 — Design Decisions</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading" style={{ textAlign: 'left' }}>Every choice had a reason.</h2>
                    <div className="cs__decisions">
                        {decisions.map(({ title, copy }, i) => (
                            <motion.div
                                key={title}
                                className="cs__decision"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <h3 className="cs__decision-title">{title}</h3>
                                <p className="cs__decision-copy">{copy}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="cs__section">
                <div className="cs__section-label">03 — Process</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading" style={{ textAlign: 'left' }}>Design-led, AI-assisted build.</h2>
                    <p className="cs__section-copy cs__section-copy--centered">
                        I designed the app myself first — the layouts, the flows, what I wanted each screen to feel like. I built it in React Native with Expo, testing on the iOS Simulator throughout to make sure interactions felt right on an actual mobile screen. I used AI to help with the code, but the design decisions were mine throughout.
                    </p>
                    <p className="cs__section-copy cs__section-copy--centered">
                        Building it myself meant I had to think through edge cases a static prototype never would have surfaced — like what happens when someone first installs the app versus when they return to it.
                    </p>
                </div>
            </section>

            {/* What's Next */}
            <section className="cs__section cs__section--tinted">
                <div className="cs__section-label">04 — What's Next</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading" style={{ textAlign: 'left' }}>The feature I still think about.</h2>
                    <p className="cs__section-copy cs__section-copy--centered">
                        The whole reason I built this was that I forget to take vitamins when I don't see them. The app helps once you open it — but push notifications would close the loop entirely. That's the next thing I want to add: a reminder that brings the app to you, not the other way around.
                    </p>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="cs__cta">
                <p className="cs__cta-label">Want to work together?</p>
                <h2 className="cs__cta-heading">let's connect.</h2>
                <a href="mailto:lalaine.macababbad@gmail.com" className="cs__cta-btn">
                    Get in touch
                </a>
            </section>

        </div>
    )
}