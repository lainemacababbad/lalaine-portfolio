import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PieceOfCake.css'
import problemImage from '../pages/PieceOfCake1.webp'
import process1Img from '../pages/process1.jpg.webp'
import process2Img from '../pages/process2.jpg.webp'
import process3Img from '../pages/process3.png.webp'
import process4Img from '../pages/process4.png.webp'
import process5Img from '../pages/process5.jpg.webp'
import finalUI1 from '../pages/finalUI1.png'
import finalUI2 from '../pages/finalUI2.png.webp'

const stats = [
    { number: '3', label: 'Rounds of Testing' },
    { number: '8', label: 'Participants' },
    { number: '2', label: 'Platforms Designed' },
    { number: '6', label: 'Stages of Process' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function PieceOfCake() {
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
                        UX / UI Design — Food Services & Digital Ordering
                    </motion.p>
                    <motion.h1 className="cs__title" variants={fadeUp} custom={1}>
                        Piece of Cake
                    </motion.h1>
                    <motion.p className="cs__subtitle" variants={fadeUp} custom={2}>
                        Designing a better ordering experience for custom cakes — simplifying the process for customers while giving bakers a clear, organized way to manage requests.
                    </motion.p>
                    <motion.div className="cs__meta" variants={fadeUp} custom={3}>
                        <span className="cs__meta-item"><strong>Role</strong> UX/UI Designer</span>
                        <span className="cs__meta-divider" />
                        <span className="cs__meta-item"><strong>Duration</strong> 3 weeks</span>
                        <span className="cs__meta-divider" />
                        <span className="cs__meta-item"><strong>Platform</strong> Mobile + Desktop</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="cs__stats">
                {stats.map(({ number, label }, i) => (
                    <motion.div
                        key={label}
                        className="cs__stat"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <span className="cs__stat-number">{number}</span>
                        <span className="cs__stat-label">{label}</span>
                    </motion.div>
                ))}
            </section>

            {/* Problem */}
            <section className="cs__section">
                <div className="cs__section-label">01 — Problem</div>
                <div className="cs__section-body cs__section-body--split">
                    <div className="cs__section-text">
                        <h2 className="cs__section-heading">Custom cake ordering was a mess.</h2>
                        <p className="cs__section-copy">
                            Most orders happened through DMs and texts — leading to unclear details, missing confirmations, and endless back-and-forth. Bakers had no structured way to track requests or special instructions. Customers had no visibility into their order status.
                        </p>
                        <p className="cs__section-copy">
                            The goal: build two connected tools — a mobile app for customers and a desktop dashboard for bakers — that bring structure, clarity, and real-time updates to both sides of the order.
                        </p>
                    </div>
                    <div className="cs__section-visual">
                        <img src={problemImage} alt="Custom cake ordering problem space" className="cs__section-img" />
                    </div>
                </div>
            </section>

            {/* Research */}
            <section className="cs__section cs__section--tinted">
                <div className="cs__section-label">02 — Research & Insights</div>
                <div className="cs__section-body cs__section-body--split cs__section-body--reverse">
                    <div className="cs__section-visual">
                        <img src={process3Img} alt="Custom cake ordering problem space" className="cs__section-img" />
                    </div>
                    <div className="cs__section-text">
                        <h2 className="cs__section-heading">The pain points were consistent.</h2>
                        <p className="cs__section-copy">
                            Research into bakery websites, reviews, and online discussions surfaced the same issues repeatedly:
                        </p>
                        <ul className="cs__list">
                            <li>Orders placed through DMs with no confirmation system</li>
                            <li>Bakers struggling to track special instructions and deadlines</li>
                            <li>Customers with no visibility into order progress</li>
                            <li>Miscommunication leading to wrong orders and refund requests</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="cs__section">
                <div className="cs__section-label">03 — Process</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading">Tested early, iterated often.</h2>
                    <p className="cs__section-copy cs__section-copy--centered">
                        Paper wireframes were tested and refined through multiple feedback cycles before moving into Figma. Three rounds of testing with 8 participants total ensured usability issues were caught early — not at the end.
                    </p>
                    <div className="cs__process-steps">
                        {['Paper wireframes', 'Round 1 testing', 'Mid-fi wireframes', 'Round 2 testing', 'High-fi prototype', 'Round 3 validation'].map((step, i) => (
                            <div key={step} className="cs__process-step">
                                <div className="cs__process-step-num">{String(i + 1).padStart(2, '0')}</div>
                                <div className="cs__process-step-label">{step}</div>
                            </div>
                        ))}
                    </div>
                    <div className="cs__process-gallery">
                        <img src={process1Img} alt="Paper wireframes" className="cs__process-gallery-img" />
                        <img src={process2Img} alt="Paper 2 wireframes" className="cs__process-gallery-img" />
                    </div>
                    <div className="cs__process-gallery">
                        <img src={process4Img} alt="..." className="cs__process-gallery-img" />
                        <img src={process5Img} alt="..." className="cs__process-gallery-img" />
                    </div>

                </div>
            </section>

            {/* Outcomes */}
            <section className="cs__section cs__section--tinted">
                <div className="cs__section-label">04 — Outcomes</div>
                <div className="cs__section-body cs__section-body--split">
                    <div className="cs__section-text">
                        <h2 className="cs__section-heading">Usability shifted from uncertainty to confidence.</h2>
                        <ul className="cs__list cs__list--outcomes">
                            <li>
                                <strong>Round 1 → Round 3:</strong> Users went from confused by unclear buttons and missing confirmations to completing key tasks without assistance
                            </li>
                            <li>
                                <strong>Baker dashboard:</strong> Rated clear and efficient by final-round testers — quicker review and order management
                            </li>
                            <li>
                                <strong>Customer flow:</strong> Improved through larger tap targets, clearer order tracking, and better messaging interactions
                            </li>
                            <li>
                                <strong>8 participants across 3 rounds</strong> — new users each round for unbiased, fresh validation
                            </li>
                        </ul>
                    </div>
                    <div className="cs__section-visual cs__section-visual--final">
                        <img src={finalUI1} alt="Final UI screen 1" className="cs__final-ui-img" />
                        <img src={finalUI2} alt="Final UI screen 2" className="cs__final-ui-img" />
                    </div>
                </div>
            </section>

            {/* Prototype */}
            {/* <section className="cs__section">
                <div className="cs__section-label">05 — Prototype</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading">Try it yourself.</h2>
                    <p className="cs__section-copy cs__section-copy--centered">
                        The final interactive prototype covers the full customer ordering flow and the baker management dashboard.
                    </p>
                    <div className="cs__prototype-wrap">
                        <iframe
                            className="cs__prototype"
                            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/0nFCcKoagdhAdopaJWsTLo/Baker---Customer-Case-Study?node-id=0-1&t=x3Rwpz8lDo9jnQqQ-1"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section> */}

            {/* Next Steps */}
            <section className="cs__section">
                <div className="cs__section-label">05 — Next Steps</div>
                <div className="cs__section-body">
                    <h2 className="cs__section-heading">What comes next.</h2>
                    <div className="cs__next-steps">
                        <div className="cs__next-step">
                            <span className="cs__next-step-icon">→</span>
                            <p>Design a Home Screen for clearer entry into key actions</p>
                        </div>
                        <div className="cs__next-step">
                            <span className="cs__next-step-icon">→</span>
                            <p>Refine the Baker Dashboard hierarchy for faster decision-making</p>
                        </div>
                        <div className="cs__next-step">
                            <span className="cs__next-step-icon">→</span>
                            <p>Conduct additional usability testing to validate recent improvements</p>
                        </div>
                        <div className="cs__next-step">
                            <span className="cs__next-step-icon">→</span>
                            <p>Improve messaging flow for quicker baker–customer communication</p>
                        </div>
                    </div>
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