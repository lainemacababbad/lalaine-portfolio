import { motion } from 'framer-motion'
import './Work.css'
import pieceOfCakeThumb from '../pages/finalUI1.png'
import vitaminTrackerThumb from '../pages/VTThumbnail.png'

const projects = [
    {
        id: 'vitamin-tracker',
        tag: 'UX / Mobile',
        title: 'Vitamin Tracker',
        description: 'Helping people actually remember their supplements.',
        link: '/vitamin-tracker',
        accent: 'crimson',
        thumb: vitaminTrackerThumb
    },
    {
        id: 'matchamap',
        tag: 'UX / Concept',
        title: 'MatchaMap',
        description: 'Track and discover your favourite cafés.',
        link: '#',
        accent: 'matcha'
    }
]

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function Work() {
    return (
        <section className="work" id="work">
            <div className="work__header">
                <div className="work__divider-line" />
                <span className="work__label">Selected Work</span>
                <div className="work__divider-line" />
            </div>

            <div className="work__grid">
                {projects.map(({ id, tag, title, description, link, accent, thumb }, i) => (
                    <motion.a
                        key={id}
                        href={link}
                        className={`work__card work__card--${accent}`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        custom={i}
                    >
                        <div className="work__card-thumb">
                            {thumb ? (
                                <img src={thumb} alt={title} className="work__card-thumb-img" />
                            ) : (
                                <div className="work__card-thumb-placeholder">Coming soon</div>
                            )}
                        </div>
                        <div className="work__card-body">
                            <p className="work__card-tag">{tag}</p>
                            <h3 className="work__card-title">{title}</h3>
                            <p className="work__card-desc">{description}</p>
                        </div>
                    </motion.a>
                ))}

                <motion.a
                    href="/piece-of-cake"
                    className="work__card work__card--berry"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={2}
                >
                    <div className="work__card-thumb">
                        <img src={pieceOfCakeThumb} alt="Piece of Cake project" className="work__card-thumb-img" />
                    </div>
                    <div className="work__card-body">
                        <p className="work__card-tag">UX / Mobile + Desktop</p>
                        <h3 className="work__card-title">Piece of Cake</h3>
                        <p className="work__card-desc">Redesigning custom cake ordering for customers and bakers.</p>
                    </div>
                </motion.a>
            </div>
        </section>
    )
}