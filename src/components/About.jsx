import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './About.css'

const skills = [
    'Figma', 'Framer', 'React Native', 'Adobe CC',
    'HTML / CSS', 'JavaScript', 'Wordpress', 'Wix'
]

const funFacts = [
    { emoji: '🇵🇭', text: 'Filipino. Proud of it.' },
    { emoji: '🍵', text: 'Matcha addict. Oat milk only, lactose intolerant but unbothered.' },
    { emoji: '📚', text: 'Reads everything. Buying books and reading books are two separate hobbies.' },
    { emoji: '🌱', text: 'Stardew year 3. Just married. Priorities in order.' },
    { emoji: '📷', text: 'Trying to be a photographer. Emphasis on aspiring.' },
    { emoji: '☕', text: 'Café hunter. Surrey to Vancouver, one matcha at a time.' },
]

const leftCards = [
    { color: '#E8D5C4', rotate: -8,  fanRotate: -24, fanX: -110, fanY:  20 },
    { color: '#D4C5B5', rotate: -3,  fanRotate: -10, fanX: -50,  fanY:  8  },
    { color: '#C4B5A5', rotate:  2,  fanRotate:  6,  fanX:  10,  fanY: -4  },
]

const rightCards = [
    { color: '#C4B5A5', rotate: -2,  fanRotate: -6,  fanX: -10,  fanY:  4  },
    { color: '#D4C5B5', rotate:  3,  fanRotate:  10, fanX:  50,  fanY: -8  },
    { color: '#E8D5C4', rotate:  8,  fanRotate:  24, fanX:  110, fanY: -20 },
]

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
}

function PhotoStack({ cards, side }) {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleClick = () => setClicked(prev => !prev)

    return (
        <div
            className={`about__photo-stack about__photo-stack--${side}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    className="about__photo-card"
                    style={{ background: card.color }}
                    animate={{
                        rotate: clicked
                            ? card.fanRotate * 1.4
                            : hovered
                            ? card.fanRotate
                            : card.rotate,
                        x: clicked
                            ? card.fanX * 1.4
                            : hovered
                            ? card.fanX * 0.6
                            : 0,
                        y: clicked
                            ? card.fanY * 1.4
                            : hovered
                            ? -6
                            : 0,
                        scale: clicked ? 1.04 : 1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 240,
                        damping: 22,
                        delay: i * 0.04
                    }}
                >
                    <div className="about__photo-label">
                        {clicked ? 'photo soon' : ''}
                    </div>
                </motion.div>
            ))}

            {!clicked && (
                <div className="about__photo-hint">
                    {hovered ? 'click to spread' : 'hover me'}
                </div>
            )}
            {clicked && (
                <div className="about__photo-hint about__photo-hint--dismiss">
                    click to stack
                </div>
            )}
        </div>
    )
}

export default function About() {
    const [mode, setMode] = useState('designer')

    return (
        <section className="about" id="about">

            <div className="about__header">
                <span className="about__label">About Me</span>
                <div className="about__divider-line" />
            </div>

            <div className="about__toggle-wrap">
                <div className="about__toggle">
                    <button
                        className={`about__toggle-btn ${mode === 'designer' ? 'about__toggle-btn--active' : ''}`}
                        onClick={() => setMode('designer')}
                    >
                        designer
                    </button>
                    <button
                        className={`about__toggle-btn ${mode === 'human' ? 'about__toggle-btn--active' : ''}`}
                        onClick={() => setMode('human')}
                    >
                        human
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {mode === 'designer' ? (
                    <motion.div
                        key="designer"
                        className="about__content about__content--designer"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="about__col">
                            <h3 className="about__col-heading">Education</h3>
                            <div className="about__edu-block">
                                <p className="about__edu-school">BYU-Idaho</p>
                                <p className="about__edu-degree">B.S. Web Design & Development</p>
                                <p className="about__edu-date">Graduated December 2025</p>
                            </div>
                            <div className="about__edu-block">
                                <p className="about__edu-school">Sosanica</p>
                                <p className="about__edu-degree">UX/UI Design Intern</p>
                                <p className="about__edu-date">April – December 2025</p>
                            </div>
                        </div>

                        <div className="about__col">
                            <h3 className="about__col-heading">Skills</h3>
                            <div className="about__skills">
                                {skills.map(skill => (
                                    <span key={skill} className="about__skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="human"
                        className="about__content about__content--human"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Top-left photo stack */}
                        <PhotoStack cards={leftCards} side="left" />

                        {/* Facts center */}
                        <div className="about__facts">
                            {funFacts.map(({ emoji, text }, i) => (
                                <motion.div
                                    key={text}
                                    className="about__fact"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i}
                                >
                                    <span className="about__fact-emoji">{emoji}</span>
                                    <p className="about__fact-text">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom-right photo stack */}
                        <PhotoStack cards={rightCards} side="right" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}